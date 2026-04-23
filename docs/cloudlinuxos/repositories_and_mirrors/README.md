# Repositories & Mirrors

## Mirror Migration for New CloudLinux Versions

This section explains why the old mirror system will not support newer CloudLinux OS/package versions, and how to migrate to the new mirror configuration.

[[toc]]

## Summary

New CloudLinux versions are moving to the new mirror service and open HTTPS mirrors. The legacy mirror system (custom SSL/XMLRPC) will not support newer OS and package versions. Customers should reconfigure their mirrors to the new standard HTTPS layout and endpoint.

**Currently, only CloudLinux OS 10 is supported**, and support for older versions will be enabled gradually.

For customer-managed mirrors, the migration means **adding a new HTTPS mirror** (or **replacing** the legacy mirror endpoint) rather than "reconfiguring". In most cases you can **reuse existing storage** and just adjust the mirror layout/paths and transport (open HTTPS).

## What is changing

- Legacy mirrors used custom SSL and XMLRPC transport.
- New mirrors use standard HTTPS and normal directory browsing.
- The mirrorlist endpoint is now `cl-mirrors` (not `cln-mirrors`).
- The new system supports partial mirrors (only the OS versions you need).

## Why the old system will not work for newer versions

- Newer CloudLinux tooling uses the **new mirrorlist endpoint** (`cl-mirrors`) and standard HTTPS mirrors.
- The legacy XMLRPC/custom SSL flow is being phased out.
- Mirrors that only support the old endpoint (`cln-mirrors`) may not be selected by updated systems.

## What you need to do (migration quick plan)

1. **Set up a new HTTPS mirror** that exposes SWNG content via standard HTTPS.
2. **Use the new mirrorlist endpoint**:
   - `https://repo.cloudlinux.com/cloudlinux/mirrorlists/cl-mirrors`
3. **Optionally mirror only the versions you need** (partial mirrors are supported).
4. **Provide your mirror URL and scope** to CloudLinux support so it can be added to mirror rotation.

:::tip
- SWNG is the main operational repository for updates.
- `repo.cloudlinux.com` contains conversion and install assets.
- Full `repo.cloudlinux.com` is large (>3 TB), so partial sync is recommended unless you need a fully autonomous environment.
:::

## Creating a CloudLinux Mirror (SWNG)

### Minimum requirements for a supported mirror

Your mirror should meet these requirements to be eligible for inclusion in the mirror service:

- **HTTPS access** with a valid certificate from a public CA (e.g., Let's Encrypt)
- **Correct base paths** (recommended layout):
  - `https://mirror.example.com/swng/` for SWNG
  - (optional) `https://mirror.example.com/cloudlinux/` for `repo.cloudlinux.com` content
- **No authentication** for repository downloads
- **Repository metadata is accessible** (e.g., `repodata/repomd.xml` for the mirrored trees)
- **Regular sync schedule** (cron/systemd timer) and enough disk space for the chosen scope

### Step-by-step: mirror SWNG

**1. Prepare storage**

Use a dedicated disk or partition. Plan for approximately 500 GB for SWNG.

**2. Sync SWNG**

Use rsync from the upstream endpoint:

```
# Example: mirror all SWNG
rsync -avH --delete --numeric-ids --safe-links \
  rsync://rsync.upstream.cloudlinux.com/SWNG/ \
  /var/www/mirrors/swng/
```

If you only need specific versions, mirror only those subpaths (partial mirrors):

```
# Example: mirror CloudLinux 10 SWNG only
mkdir -p /var/www/mirrors/swng/10
rsync -avH --delete --numeric-ids --safe-links \
  rsync://rsync.upstream.cloudlinux.com/SWNG/10/ \
  /var/www/mirrors/swng/10/
```

**3. Expose via HTTPS**

Configure Nginx (or another web server). Enable directory browsing and ensure HTTPS works with a valid certificate.

**4. Validate the public index**

Ensure the index matches the upstream structure. Mixed setups can use `<domain>/swng/`.

### Optional: mirror `repo.cloudlinux.com` content

Use this only if you need a fully autonomous install/conversion environment:

- Full sync is **3+ TB**.
- In most cases, sync only the required sub-repositories.

If you decide to mirror it, use the upstream rsync module:

```
rsync -avH --delete --numeric-ids --safe-links \
  rsync://rsync.upstream.cloudlinux.com/CLOUDLINUX/ \
  /var/www/mirrors/cloudlinux/
```

### Information to provide to CloudLinux Support

When contacting CloudLinux Support to register your mirror, provide:

- Mirror URL (HTTPS), e.g. `https://mirror.example.com/swng/`
- Whether the mirror is **public** or **private**
- For private mirrors: list of IPs or networks
- Geographic location (country/city)
- Available bandwidth/capacity
- Sync method and frequency
- Whether the mirror is **complete** or **partial**
- If partial: list the versions mirrored

## Self-diagnostics (mirror server)

This section helps you verify your mirror is healthy before contacting Support.

### Connectivity to upstream

```
# DNS resolution
nslookup upstream.cloudlinux.com

# HTTPS connectivity (for browsing)
curl -fsSI https://upstream.cloudlinux.com/ | head

# RSync endpoint listing (should return module list)
rsync rsync://rsync.upstream.cloudlinux.com/
```

If you are behind a corporate proxy/firewall, ensure outbound access from the mirror host:
- TCP **873** to `rsync.upstream.cloudlinux.com` (rsync)
- TCP **443** to `upstream.cloudlinux.com` (HTTPS browsing/validation)

### RSync checks

```
# Dry-run a small test sync (replace path as needed)
mkdir -p /tmp/cl-mirror-test
rsync -avv --delete rsync://rsync.upstream.cloudlinux.com/SWNG/10/ /tmp/cl-mirror-test/ | head -n 50
```

Common rsync pitfalls:
- `@ERROR: ...` typically indicates connectivity/firewall/proxy issues.
- Slow sync is often disk I/O bottlenecks or too frequent `--delete` on huge trees; use a reasonable sync interval.

### HTTPS checks (your mirror)

Replace `mirror.example.com` with your mirror domain.

```
# Mirror root must be reachable via HTTPS
curl -fsSI "https://mirror.example.com/swng/" | head

# Metadata must exist for mirrored subtrees (example for CL10 x86_64)
curl -fsSI "https://mirror.example.com/swng/10/x86_64/repodata/repomd.xml" | head
```

If you use a different layout (e.g., you expose SWNG at `/`), adjust paths accordingly. Trailing slashes matter for some web server configurations.

### Storage, permissions, and sync hygiene

```
# Disk space
df -h

# Basic directory permissions (adjust path to your mirror root)
ls -ld /var/www/mirrors /var/www/mirrors/swng

# Check that new files are appearing after a sync run (example)
ls -lh /var/www/mirrors/swng/10/ | head
```

Recommendations:
- Run sync as a dedicated user that can write to the destination directory.
- Ensure your HTTPS server can read the mirrored files.
- Keep sync logs (cron output or systemd journal) so you can share errors with Support.

### Examples

More examples, ready-to-use Ansible playbooks, and Docker Compose setups can be found at [https://github.com/cloudlinux/cloudlinux-mirrors](https://github.com/cloudlinux/cloudlinux-mirrors).

## Troubleshooting

| Issue | Fix |
|-------|-----|
| **Firewall blocks RSync/HTTPS** | Outbound from mirror host: TCP `873` (rsync) and `443` (HTTPS). Inbound to your mirror (for clients): TCP `443` (HTTPS). |
| **DNS fails to resolve** | Verify `/etc/resolv.conf`, corporate DNS rules. Run `nslookup upstream.cloudlinux.com`. |
| **RSync not installed** | Install `rsync` with your package manager, then retry the sync. |
| **Mirror returns 403/404** | Confirm the exact base paths and trailing slashes. Confirm your web server maps URLs to the correct filesystem directories. Reference: `https://upstream.cloudlinux.com/swng/` and `https://upstream.cloudlinux.com/cloudlinux/` |
| **Insufficient disk space** | Run `df -h` and sync only the required sub-repositories. |
| **Permission errors** | Ensure the sync user can write to the destination directory. |
| **Certificate problems** | Renew or replace the certificate (Let's Encrypt auto-renewal recommended). |
| **Partial mirror not in mirrorlist** | Confirm the mirrored versions match the scope provided to Support. For private mirrors, confirm egress IPs match the scope. Changes may take time to propagate. |

### Connection issues

```
# Test RSync connectivity
rsync rsync://rsync.upstream.cloudlinux.com/

# Test HTTP connectivity
curl -I https://upstream.cloudlinux.com/

# Check DNS resolution
nslookup upstream.cloudlinux.com
```

### Sync failures

```
# Test with verbose output
rsync -avv --delete rsync://rsync.upstream.cloudlinux.com/CLOUDLINUX/ /tmp/test-sync/

# Check disk space
df -h
```
