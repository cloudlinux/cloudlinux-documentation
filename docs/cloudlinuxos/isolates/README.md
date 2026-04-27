# CloudLinux Isolates (BETA)

## CageFS Per Domain

CloudLinux Isolates is a security feature that provides domain-level isolation within CageFS. It allows server administrators to isolate individual websites from each other, even when they belong to the same hosting account. This prevents cross-site attacks where a compromised website could access files or data from other websites on the same account.

### Overview

When CloudLinux Isolates is enabled for a domain:

* Each isolated website runs in its own isolated environment
* PHP processes for isolated websites cannot access files from other websites
* Crontab entries are automatically scoped to their respective document roots
* Existing PHP processes are gracefully terminated and restarted in the isolated environment
* Per-domain PHP Selector configuration is automatically set up (inheriting user-level settings)

### Prerequisites

#### Minimum Package Versions

| Package            | Minimum Version |
| ------------------ | --------------- |
| cagefs             | 7.6.29-1        |
| lve-utils          | 6.6.31-1        |
| lve (liblve)       | 2.2-1           |
| lve-wrappers       | 0.7.13-1        |
| alt-python27-cllib | 3.4.33-1        |

#### Compatible Web Servers

| Web Server | Status | Notes |
| --- | --- | --- |
| Apache | ✅ Supported | See [Compatible PHP Handlers](#compatible-php-handlers) below for handler-specific requirements. |
| NGINX | 🔜 Coming in future releases | |
| LiteSpeed | 🔜 Coming in future releases | |

#### Compatible PHP Handlers

The following table applies to **Apache** — the only supported web server for CloudLinux Isolates.

| Handler | Status | Notes |
| --- | --- | --- |
| LSAPI | ✅ Supported (Recommended) | Requires `lsapi_per_user Off` (the default). See [LSAPI restriction](#lsapi-per-user-restriction) below. |
| CGI | ✅ Supported | |
| FPM | ⚠️ Partially supported | See [Compatible PHP Versions](#compatible-php-versions) for minimum package versions. |
| FCGI | 🔜 Coming in future releases | |

##### LSAPI per-user restriction

The mod_lsapi directive [`lsapi_per_user`](/cloudlinuxos/cloudlinux_os_components/#lsapi-per-user) controls how lsphp backend processes are spawned:

* **`lsapi_per_user Off`** (default) — one lsphp master per virtual host. Each master receives the site's `DOCUMENT_ROOT` and enters the correct isolated environment. **This is the only mode compatible with CloudLinux Isolates.**
* **`lsapi_per_user On`** — a single lsphp master serves all virtual hosts for a user. In this mode, mod_lsapi does not pass `DOCUMENT_ROOT` to the backend, so isolation cannot determine which site a request belongs to. **This mode is incompatible with CloudLinux Isolates.**

To check your current setting, run:

```
grep -ri 'lsapi_per_user' /etc/apache2/conf.d/ /etc/httpd/conf.d/ 2>/dev/null
```

The directive is typically located in `/etc/apache2/conf.d/lsapi.conf` (cPanel) or `/etc/httpd/conf.d/lsapi.conf`. If the command returns no output, or all matches are commented out or show `Off`, your configuration is compatible (the default is `Off`). If any match shows `lsapi_per_user On` (uncommented), you must set it to `Off` before enabling CloudLinux Isolates.

:::warning Important
`lsapi_per_user On` is **incompatible** with CloudLinux Isolates. In per-user mode, a single lsphp master process handles all virtual hosts for a user, making per-domain isolation architecturally impossible. Switch to `lsapi_per_user Off` (the default) before enabling isolation.

For full details on this directive, see [lsapi_per_user in mod_lsapi documentation](/cloudlinuxos/cloudlinux_os_components/#lsapi-per-user).
:::

#### Compatible Control Panels
| Handler                  | Status                       |
| -------                  | ---------------------------- |
| cPanel                   | ✅ Supported                 |
| Plesk                    | ✅ Supported                 |
| DirectAdmin              | ✅ Supported                 |
| Integration Scripts*     | ✅ Supported                 |

*[Control Panel Integration](/cloudlinuxos/control_panel_integration/#control-panel-api-integration)

#### Compatible PHP Versions

CloudLinux Isolates provides partial FPM handler support for both ea-php (cPanel) and alt-php.

##### ea-php (cPanel)

| Package       | Minimum Version                    |
| ------------- | ---------------------------------- |
| ea-php56-php  | 5.6.40-25.cloudlinux.3             |
| ea-php70-php  | 7.0.33-29.cloudlinux.3             |
| ea-php71-php  | 7.1.33-20.cloudlinux.3             |
| ea-php72-php  | 7.2.34-12.cloudlinux.3             |
| ea-php73-php  | 7.3.33-15.cloudlinux.3             |
| ea-php74-php  | 7.4.33-16.cloudlinux.1             |
| ea-php80-php  | 8.0.30-9.cloudlinux.1              |
| ea-php81-php  | 8.1.33-2.cloudlinux.3              |
| ea-php82-php  | 8.2.29-2.cloudlinux.3              |
| ea-php83-php  | 8.3.30-1.cloudlinux.1              |
| ea-php84-php  | 8.4.17-1.cloudlinux.2              |
| ea-php85-php  | 8.5.2-1.cloudlinux.1               |

##### alt-php

| Package              | Minimum Version   |
| -------------------- | ----------------- |
| alt-php53-php-fpm    | 5.3.29-189        |
| alt-php54-php-fpm    | 5.4.45-172        |
| alt-php55-php-fpm    | 5.5.38-152        |
| alt-php56-php-fpm    | 5.6.40-116        |
| alt-php70-php-fpm    | 7.0.33-117        |
| alt-php71-php-fpm    | 7.1.33-83         |
| alt-php72-php-fpm    | 7.2.34-65         |
| alt-php73-php-fpm    | 7.3.33-51         |
| alt-php74-php-fpm    | 7.4.33-48         |
| alt-php80-php-fpm    | 8.0.30-36         |
| alt-php81-php-fpm    | 8.1.34-5          |
| alt-php82-php-fpm    | 8.2.30-5          |
| alt-php83-php-fpm    | 8.3.30-5          |
| alt-php84-php-fpm    | 8.4.18-2          |
| alt-php85-php-fpm    | 8.5.3-3           |

:::tip Note
alt-php53, alt-php54, and alt-php55 are supported on CL7/CL8/CL9 only. CL10 support starts from alt-php56.
:::

***

### Quick Start

Follow these steps to enable CloudLinux Isolates for a domain:

**1. Allow the feature server-wide (administrator only, one-time setup):**

```
cagefsctl --isolates-allow-all
```

**2. Enable isolation for a specific domain:**

```
cagefsctl --isolates-enable <example.com>
```

**3. Verify isolation is active:**

```
cagefsctl --isolates-list
```

To disable isolation for a domain:

```
cagefsctl --isolates-disable <example.com>
```

***

### Command Reference

:::tip Renamed flags
Starting with cagefs 7.7, the `cagefsctl` flags use the `--isolates-*` naming. The previous `--site-isolation-*` flags continue to work but print a deprecation warning.
:::

#### Server-Wide Management

##### Allow CloudLinux Isolates for All Users

```
cagefsctl --isolates-allow-all
```

Enables the CloudLinux Isolates feature server-wide in "Allow All" mode. All users are allowed to use CloudLinux Isolates by default (individual users can be denied with `--isolates-deny`).

**Example:**

```
# cagefsctl --isolates-allow-all
CloudLinux Isolates was allowed for all users.
```

**Notes:**

* Sets up the per-user denied directory at `/etc/cagefs/isolates.users.denied`
* Triggers a CageFS remount to apply necessary mount configurations
* Registers the `isolatectl` proxyexec command for user-level management
* Must be run with root privileges

***

##### Deny CloudLinux Isolates for All Users

```
cagefsctl --isolates-deny-all
```

Disables the CloudLinux Isolates feature server-wide and switches to "Deny All" mode. Removes all domain isolation configurations for all users.

**Example:**

```
# cagefsctl --isolates-deny-all
CloudLinux Isolates was denied for all users.
```

**Warning:** This command will:

* Disable isolation for all currently isolated domains
* Remove all per-user isolation configurations
* Terminate and restart affected PHP processes
* Clean up token directories and overlay storage
* Switch to "Deny All" mode

***

#### Per-User Management

CloudLinux Isolates uses a two-mode user model to control which users can use the feature:

* **Allow All mode** (`allow_all`): All users are allowed by default. Individual users can be denied (added as exceptions).
* **Deny All mode** (`deny_all`): No users are allowed by default. Individual users can be allowed (added as exceptions).

##### Allow CloudLinux Isolates for a Specific User

```
cagefsctl --isolates-allow <username> [<username2> ...]
```

Allows CloudLinux Isolates for one or more specific users.

**Parameters:**

| Parameter    | Description                             |
| ------------ | --------------------------------------- |
| `<username>` | Username(s) to allow CloudLinux Isolates for |

**Behavior depends on current mode:**

* **Allow All mode**: Removes the user from the denied list (undoes a previous `--isolates-deny`)
* **Deny All mode**: Adds the user to the allowed list
* **Not initialized**: Sets up infrastructure in Deny All mode with the user as the first allowed user

**Example:**

```
# cagefsctl --isolates-allow john
CloudLinux Isolates was allowed for user(s): john

# cagefsctl --isolates-allow john jane
CloudLinux Isolates was allowed for user(s): john, jane
```

***

##### Deny CloudLinux Isolates for a Specific User

```
cagefsctl --isolates-deny <username> [<username2> ...]
```

Denies CloudLinux Isolates for one or more specific users and disables all their domain isolation.

**Parameters:**

| Parameter    | Description                            |
| ------------ | -------------------------------------- |
| `<username>` | Username(s) to deny CloudLinux Isolates for |

**Behavior depends on current mode:**

* **Allow All mode**: Adds the user to the denied list
* **Deny All mode**: Removes the user from the allowed list (undoes a previous `--isolates-allow`)

**Example:**

```
# cagefsctl --isolates-deny john
CloudLinux Isolates was denied for user(s): john
```

**Notes:**

* Also cleans up all existing domain isolation for the denied user(s)
* CloudLinux Isolates must be enabled server-wide first

***

##### Toggle User Mode

```
cagefsctl --isolates-toggle-mode
```

Toggles the isolation user mode between "Allow All" and "Deny All" without modifying any per-user exception lists.

**Mode transitions:**

* `allow_all` → `deny_all`
* `deny_all` → `allow_all`
* Not initialized → `allow_all`

**Example:**

```
# cagefsctl --isolates-toggle-mode
CloudLinux Isolates user mode toggled to 'deny_all'.
```

**Notes:**

* Only flips the mode indicator directories
* Does **not** clean up existing user isolation
* Does **not** alter the per-user exception lists
* Useful for quickly switching the default behavior without losing per-user configuration

***

#### Domain-Level Management

##### Enable Isolation for a Domain

```
cagefsctl --isolates-enable <domain> [<domain2> ...]
```

Enables CloudLinux Isolates for one or more specified domains.

**Parameters:**

| Parameter  | Description                                  |
| ---------- | -------------------------------------------- |
| `<domain>` | Domain name to isolate (e.g., `example.com`) |

**Example:**

```
# cagefsctl --isolates-enable example.com
CloudLinux Isolates was enabled for domain(s),
example.com

# cagefsctl --isolates-enable site1.com site2.com
CloudLinux Isolates was enabled for domain(s),
site1.com,site2.com
```

**Requirements:**

* CloudLinux Isolates must be allowed server-wide first
* CloudLinux Isolates must be allowed for the domain's user
* The domain must exist and be associated with a valid user account
* Must be run with root privileges

**What happens when isolation is enabled:**

1. A unique website token directory is created
2. Overlay storage directory is configured for the website
3. User configuration is updated with the isolated domain
4. Per-domain PHP Selector configuration is set up (inheriting from user's PHP settings)
5. If this is the first isolated website for the user, CageFS is remounted
6. Existing PHP processes for the domain are terminated and restarted in isolation
7. Document root monitoring service is started

***

##### Disable Isolation for a Domain

```
cagefsctl --isolates-disable <domain> [<domain2> ...]
```

Disables CloudLinux Isolates for one or more specified domains.

**Parameters:**

| Parameter  | Description                          |
| ---------- | ------------------------------------ |
| `<domain>` | Domain name to remove from isolation |

**Example:**

```
# cagefsctl --isolates-disable example.com
CloudLinux Isolates was disabled for domain(s),
example.com
```

**Requirements:**

* Must be run with root privileges

**What happens when isolation is disabled:**

1. Domain is removed from the user's isolation configuration
2. Mount configuration is regenerated
3. PHP processes for the domain are restarted outside of isolation
4. Token directories are cleaned up
5. If no users have any isolated domains left, the monitoring service is stopped

***

#### Monitoring and Management

##### List Isolated Domains

```
cagefsctl --isolates-list [<username> ...]
```

Lists all users and domains that have CloudLinux Isolates enabled.

**Parameters:**

| Parameter    | Description                                   |
| ------------ | --------------------------------------------- |
| `<username>` | (Optional) Filter results by specific user(s) |

**Example - List all isolated domains:**

```
# cagefsctl --isolates-list

Domains with enabled CloudLinux Isolates for user john:
example.com
mysite.org

Domains with enabled CloudLinux Isolates for user jane:
shop.example.com
```

**Example - List isolated domains for specific user:**

```
# cagefsctl --isolates-list john

Domains with enabled CloudLinux Isolates for user john:
example.com
mysite.org
```

**Output when no domains are isolated:**

```
# cagefsctl --isolates-list
No users with enabled CloudLinux Isolates
```

***

##### Regenerate Isolation Configuration

```
cagefsctl --isolates-regenerate <username> [<username2> ...]
```

Regenerates the CloudLinux Isolates configuration for specified users. Use this command after manual configuration changes or when troubleshooting isolation issues.

**Parameters:**

| Parameter    | Description                                 |
| ------------ | ------------------------------------------- |
| `<username>` | Username(s) to regenerate configuration for |

**Example:**

```
# cagefsctl --isolates-regenerate john jane
Regenerated configuration CloudLinux Isolates for users:
john
jane
```

**When to use:**

* After domain document root changes
* After domain renames or migrations
* When isolation configuration appears out of sync
* As part of troubleshooting steps recommended by support

***

### User-Level Management (`isolatectl`)

End users can manage CloudLinux Isolates and per-domain resource limits for their own domains using the `isolatectl` utility. All output is JSON.

`isolatectl` must be run as a regular (non-root) user. It automatically identifies the calling user — no `--username` or `--lve-id` flags are needed.

:::tip Note
User-level management requires that CloudLinux Isolates is allowed server-wide **and** allowed for the specific user by the server administrator.
:::

#### Site Isolation

##### Enable Isolation for a Domain (User-Level)

```
isolatectl isolates-enable --domain <domain>[,<domain2>,...]
```

Enables CloudLinux Isolates for one or more domains owned by the calling user.

**Parameters:**

| Parameter   | Description                                              |
| ----------- | -------------------------------------------------------- |
| `--domain`  | Comma-separated domain name(s) to enable isolation for   |

**Example:**

```
$ isolatectl isolates-enable --domain example.com
{"result": "success", "enabled_sites": ["example.com"]}

$ isolatectl isolates-enable --domain site1.com,site2.com
{"result": "success", "enabled_sites": ["site1.com", "site2.com"]}
```

**Notes:**

* The user can only manage domains they own
* CloudLinux Isolates must be allowed for the user by the server administrator

***

##### Disable Isolation for a Domain (User-Level)

```
isolatectl isolates-disable --domain <domain>[,<domain2>,...]
```

Disables CloudLinux Isolates for one or more domains owned by the calling user.

**Parameters:**

| Parameter   | Description                                              |
| ----------- | -------------------------------------------------------- |
| `--domain`  | Comma-separated domain name(s) to disable isolation for  |

**Example:**

```
$ isolatectl isolates-disable --domain example.com
{"result": "success", "enabled_sites": []}
```

***

##### List Isolated Domains (User-Level)

```
isolatectl isolates-list
```

Lists all domains with CloudLinux Isolates enabled for the calling user.

**Example:**

```
$ isolatectl isolates-list
{"result": "success", "enabled_sites": ["example.com", "mysite.org"]}
```

***

#### Per-Domain Resource Limits

Per-domain resource limits allow end users to set and apply individual CPU, memory, I/O, and process limits for each isolated domain. Domain limits require site isolation to be enabled first.

##### List Domain Limits

```
isolatectl limits list [--domain <domain>]
```

Shows the configured limits for all domains or a specific domain.

**Parameters:**

| Parameter  | Description                                          |
| ---------- | ---------------------------------------------------- |
| `--domain` | (Optional) Show limits for a specific domain only    |

**Example:**

```
$ isolatectl limits list
{
  "result": "success",
  "domains": [
    {
      "name": "example.com",
      "lve_id": 1000,
      "limits": {"cpu": 2500, "pmem": 1048576}
    }
  ]
}

$ isolatectl limits list --domain example.com
{
  "result": "success",
  "domains": [
    {
      "name": "example.com",
      "lve_id": 1000,
      "limits": {"cpu": 2500, "pmem": 1048576}
    }
  ]
}
```

***

##### Set Domain Limits

```
isolatectl limits set --domain <domain> [--cpu VAL] [--pmem VAL] [--io VAL] [--nproc VAL] [--iops VAL] [--ep VAL] [--vmem VAL]
```

Stores per-domain limits in the user's config and applies them to the kernel.

**Parameters:**

| Parameter  | Description                                                |
| ---------- | ---------------------------------------------------------- |
| `--domain` | Domain name (required)                                     |
| `--cpu`    | CPU limit (hundredths of percent, e.g. 2500 = 25%)        |
| `--pmem`   | Physical memory limit (bytes)                              |
| `--io`     | I/O limit (KB/s)                                           |
| `--nproc`  | Max processes                                              |
| `--iops`   | I/O operations per second                                  |
| `--ep`     | Max entry processes (concurrent connections)               |
| `--vmem`   | Virtual memory limit (bytes)                               |

At least one limit parameter is required.

**Example:**

```
$ isolatectl limits set --domain example.com --cpu 5000 --pmem 268435456 --io 2048 --nproc 30 --iops 500 --ep 20 --vmem 536870912
{
  "result": "success",
  "domain": "example.com",
  "limits": {
    "cpu": 5000,
    "pmem": 268435456,
    "io": 2048,
    "nproc": 30,
    "iops": 500,
    "ep": 20,
    "vmem": 536870912
  }
}
```

This sets: CPU 50%, 256 MB PMEM, 2048 KB/s IO, 30 procs, 500 IOPS, 20 entry procs, 512 MB VMEM.


***

##### Apply Domain Limits

```
isolatectl limits apply --domain <domain>
```

Pushes the stored limits for a domain from the config file to the kernel. Use after manually editing the config or to re-apply limits after a restart.

**Parameters:**

| Parameter  | Description        |
| ---------- | ------------------ |
| `--domain` | Domain name        |

**Example:**

```
$ isolatectl limits apply --domain example.com
{
  "result": "success",
  "domain": "example.com",
  "limits": {"cpu": 5000, "pmem": 268435456}
}
```


### Executing Commands in an Isolated Site Context

The `cagefs_enter_site` utility allows executing a command inside CageFS in the context of a specific isolated website. This can be useful for debugging or running site-specific operations.

```
cagefs_enter_site <site> <command>
```

**Parameters:**

| Parameter   | Description                                   |
| ----------- | --------------------------------------------- |
| `<site>`    | Document root path or domain name             |
| `<command>` | Command to execute inside the site's CageFS   |

**Example:**

```
$ cagefs_enter_site example.com /bin/ls /home/user/public_html
```

**Notes:**

* This command cannot be run as root
* The site parameter can be either a document root path or a domain name

***

### Per-Domain PHP Selector

When CloudLinux Isolates is enabled for a domain, per-domain PHP Selector configuration is automatically set up. This allows each isolated website to have its own PHP version and module configuration, independent of other websites on the same account.

**Key behaviors:**

* When isolation is first enabled for a domain, the domain **inherits** the user's current PHP version and module settings
* Each isolated domain stores its PHP selector configuration separately

#### Setting PHP Version for an Isolated Domain

Use `selectorctl` with the `--domain` option to set the PHP version for a specific isolated domain:

```
selectorctl --set-user-current=<version> --domain <domain> [--user <username>]
```

:::tip Note
The `--user` option is only required when running as root. When a regular user runs `selectorctl`, it operates on their own account automatically.
:::

**Example** — set PHP 8.2 for `example.com`:

```
# As root:
selectorctl --set-user-current=8.2 --domain example.com --user john

# As the user:
selectorctl --set-user-current=8.2 --domain example.com
```

#### Enabling/Disabling Extensions for an Isolated Domain

Use `selectorctl` with the `--domain` option to manage extensions per domain:

```
# Enable extensions
selectorctl --enable-user-extensions=<ext1>,<ext2> --version <version> --domain <domain> [--user <username>]

# Disable extensions
selectorctl --disable-user-extensions=<ext1>,<ext2> --version <version> --domain <domain> [--user <username>]

# List enabled extensions
selectorctl --list-user-extensions --version <version> --domain <domain> [--user <username>]
```

:::tip Note
The `--user` option is only required when running as root.
:::


### Troubleshooting

#### Common Issues

**"CloudLinux Isolates is not enabled"**

```
# Solution: Allow server-wide first
cagefsctl --isolates-allow-all
```

**"CloudLinux Isolates feature is not available on this platform"**

The server does not have the required packages installed. Ensure all [prerequisite packages](#minimum-package-versions) are installed and up to date.

**"CloudLinux Isolates is not allowed for user \<username\>"**

```
# Solution: Allow for the specific user
cagefsctl --isolates-allow <username>
# Or allow for all users
cagefsctl --isolates-allow-all
```

**"Please specify existing domain name and try again"**

* Verify the domain exists in the control panel
* Check that the domain is associated with a valid user account

***

### Integration with Control Panels

CloudLinux Isolates integrates automatically with supported control panels. When domains are:

* **Created**: No automatic action (isolation must be explicitly enabled)
* **Renamed**: Isolation configuration is automatically updated
* **Deleted**: Isolation configuration is automatically cleaned up
* **Document root changed**: Configuration is regenerated via hooks
