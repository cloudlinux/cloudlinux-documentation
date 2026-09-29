# CloudLinux Isolates (BETA)

CloudLinux Isolates isolates the individual websites of a single hosting account from one another. It has two layers, which are described in turn below:

* **[CageFS per domain](#cagefs-per-domain)** — *filesystem* isolation, so that a compromised website cannot reach another site's files.
* **[LVE per domain](#lve-per-domain)** — *resource* isolation, so that one website's CPU, memory and I/O usage is limited and accounted for on its own.

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
| LiteSpeed | ✅ Supported (cPanel only) | Standalone LiteSpeed Web Server, on cPanel servers only. See [LiteSpeed requirements](#litespeed-requirements) below. |

##### LiteSpeed requirements

CloudLinux Isolates is supported under **standalone LiteSpeed Web Server**, and for now **on cPanel servers only**.

In addition to the [minimum package versions](#minimum-package-versions) listed above, LiteSpeed servers require:

| Package                       | Minimum Version |
| ----------------------------- | --------------- |
| cagefs                        | 7.6.47-1        |
| lve-wrappers                  | 0.7.16-1        |
| lve (liblve)                  | 2.2-8           |
| ea-apache24-mod_hostinglimits | 1.0-49          |

To check the installed versions:

```
rpm -q cagefs lve-wrappers lve ea-apache24-mod_hostinglimits
```

#### Compatible PHP Handlers

The following table applies to **Apache**. For standalone LiteSpeed, see [LiteSpeed requirements](#litespeed-requirements) above.

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

The table above applies to Apache. Under [standalone LiteSpeed](#litespeed-requirements), only cPanel is supported so far.

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

With CageFS 7.6.48-1 (Beta), where CloudLinux Isolates is available, use `--isolates-` instead of `--site-isolation-` for all nine documented `cagefsctl` Isolates options, including the command-reference and troubleshooting examples below. The older flags still work but print deprecation warnings. For earlier releases, use the `--site-isolation-` forms of the steps below. This substitution does not apply to the `isolatectl site-isolation` subcommands.

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

#### Server-Wide Management

##### Allow CloudLinux Isolates for All Users

```
cagefsctl --site-isolation-allow-all
```

Enables the CloudLinux Isolates feature server-wide in "Allow All" mode. All users are allowed to use CloudLinux Isolates by default (individual users can be denied with `--site-isolation-deny`).

**Example:**

```
# cagefsctl --site-isolation-allow-all
CloudLinux Isolates was allowed for all users.
```

**Notes:**

* Creates the feature flag at `/opt/cloudlinux/flags/enabled-flags.d/website-isolation.flag`
* Sets up the per-user denied directory at `/etc/cagefs/site-isolation.users.denied`
* Triggers a CageFS remount to apply necessary mount configurations
* Registers the `isolatectl` proxyexec command for user-level management
* Must be run with root privileges

***

##### Deny CloudLinux Isolates for All Users

```
cagefsctl --site-isolation-deny-all
```

Disables the CloudLinux Isolates feature server-wide and switches to "Deny All" mode. Removes all domain isolation configurations for all users.

**Example:**

```
# cagefsctl --site-isolation-deny-all
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
cagefsctl --site-isolation-allow <username> [<username2> ...]
```

Allows CloudLinux Isolates for one or more specific users.

**Parameters:**

| Parameter    | Description                             |
| ------------ | --------------------------------------- |
| `<username>` | Username(s) to allow CloudLinux Isolates for |

**Behavior depends on current mode:**

* **Allow All mode**: Removes the user from the denied list (undoes a previous `--site-isolation-deny`)
* **Deny All mode**: Adds the user to the allowed list
* **Not initialized**: Sets up infrastructure in Deny All mode with the user as the first allowed user

**Example:**

```
# cagefsctl --site-isolation-allow john
CloudLinux Isolates was allowed for user(s): john

# cagefsctl --site-isolation-allow john jane
CloudLinux Isolates was allowed for user(s): john, jane
```

***

##### Deny CloudLinux Isolates for a Specific User

```
cagefsctl --site-isolation-deny <username> [<username2> ...]
```

Denies CloudLinux Isolates for one or more specific users and disables all their domain isolation.

**Parameters:**

| Parameter    | Description                            |
| ------------ | -------------------------------------- |
| `<username>` | Username(s) to deny CloudLinux Isolates for |

**Behavior depends on current mode:**

* **Allow All mode**: Adds the user to the denied list
* **Deny All mode**: Removes the user from the allowed list (undoes a previous `--site-isolation-allow`)

**Example:**

```
# cagefsctl --site-isolation-deny john
CloudLinux Isolates was denied for user(s): john
```

**Notes:**

* Also cleans up all existing domain isolation for the denied user(s)
* CloudLinux Isolates must be enabled server-wide first

***

##### Toggle User Mode

```
cagefsctl --site-isolation-toggle-mode
```

Toggles the isolation user mode between "Allow All" and "Deny All" without modifying any per-user exception lists.

**Mode transitions:**

* `allow_all` → `deny_all`
* `deny_all` → `allow_all`
* Not initialized → `allow_all`

**Example:**

```
# cagefsctl --site-isolation-toggle-mode
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
cagefsctl --site-isolation-enable <domain> [<domain2> ...]
```

Enables CloudLinux Isolates for one or more specified domains.

**Parameters:**

| Parameter  | Description                                  |
| ---------- | -------------------------------------------- |
| `<domain>` | Domain name to isolate (e.g., `example.com`) |

**Example:**

```
# cagefsctl --site-isolation-enable example.com
CloudLinux Isolates was enabled for domain(s),
example.com

# cagefsctl --site-isolation-enable site1.com site2.com
CloudLinux Isolates was enabled for domain(s),
site1.com,site2.com
```

With CageFS 7.6.48-1 (Beta), `cagefsctl --isolates-enable` lists the domains it actually isolated on standard output and reports skipped domains and their reasons on standard error. It exits non-zero if any requested domain was skipped, even when others succeeded. Check the messages and `cagefsctl --isolates-list` before treating a multi-domain request as complete.

**Requirements:**

* CloudLinux Isolates must be allowed server-wide first
* CloudLinux Isolates must be allowed for the domain's user
* The domain must exist and be associated with a valid user account
* With CageFS 7.6.48-1 (Beta), the panel-provided document root must be an absolute path inside the account home (or the home itself). It may contain only ASCII letters, digits, `_`, `-`, `.`, and `/`—no whitespace. `..` path segments, `//`, and symlinked components below the home are rejected, even if a symlink points within the home
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
cagefsctl --site-isolation-disable <domain> [<domain2> ...]
```

Disables CloudLinux Isolates for one or more specified domains.

**Parameters:**

| Parameter  | Description                          |
| ---------- | ------------------------------------ |
| `<domain>` | Domain name to remove from isolation |

**Example:**

```
# cagefsctl --site-isolation-disable example.com
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
cagefsctl --site-isolation-list [<username> ...]
```

Lists all users and domains that have CloudLinux Isolates enabled.

**Parameters:**

| Parameter    | Description                                   |
| ------------ | --------------------------------------------- |
| `<username>` | (Optional) Filter results by specific user(s) |

**Example - List all isolated domains:**

```
# cagefsctl --site-isolation-list

Domains with enabled CloudLinux Isolates for user john:
example.com
mysite.org

Domains with enabled CloudLinux Isolates for user jane:
shop.example.com
```

**Example - List isolated domains for specific user:**

```
# cagefsctl --site-isolation-list john

Domains with enabled CloudLinux Isolates for user john:
example.com
mysite.org
```

**Output when no domains are isolated:**

```
# cagefsctl --site-isolation-list
No users with enabled CloudLinux Isolates
```

***

##### Regenerate Isolation Configuration

```
cagefsctl --site-isolation-regenerate <username> [<username2> ...]
```

Regenerates the CloudLinux Isolates configuration for specified users. Use this command after manual configuration changes or when troubleshooting isolation issues.

**Parameters:**

| Parameter    | Description                                 |
| ------------ | ------------------------------------------- |
| `<username>` | Username(s) to regenerate configuration for |

**Example:**

```
# cagefsctl --site-isolation-regenerate john jane
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
isolatectl site-isolation enable --domain <domain>[,<domain2>,...]
```

Enables CloudLinux Isolates for one or more domains owned by the calling user.

**Parameters:**

| Parameter   | Description                                              |
| ----------- | -------------------------------------------------------- |
| `--domain`  | Comma-separated domain name(s) to enable isolation for   |

**Example:**

```
$ isolatectl site-isolation enable --domain example.com
{"result": "success", "enabled_sites": ["example.com"]}

$ isolatectl site-isolation enable --domain site1.com,site2.com
{"result": "success", "enabled_sites": ["site1.com", "site2.com"]}
```

**Notes:**

* The user can only manage domains they own
* CloudLinux Isolates must be allowed for the user by the server administrator
* With CageFS 7.6.48-1 (Beta), an invalid document root can be skipped without undoing other domains enabled in the same request. After a multi-domain request, use `isolatectl site-isolation list` to check each domain rather than assuming the operation was all-or-nothing

***

##### Disable Isolation for a Domain (User-Level)

```
isolatectl site-isolation disable --domain <domain>[,<domain2>,...]
```

Disables CloudLinux Isolates for one or more domains owned by the calling user.

**Parameters:**

| Parameter   | Description                                              |
| ----------- | -------------------------------------------------------- |
| `--domain`  | Comma-separated domain name(s) to disable isolation for  |

**Example:**

```
$ isolatectl site-isolation disable --domain example.com
{"result": "success", "enabled_sites": []}
```

***

##### List Isolated Domains (User-Level)

```
isolatectl site-isolation list
```

Lists all domains with CloudLinux Isolates enabled for the calling user.

**Example:**

```
$ isolatectl site-isolation list
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


#### Per-Domain Statistics

```
isolatectl stats [--domain <domain>] [--period <period>]
```

Shows resource usage for the calling account's isolated domains. Like the rest of <span class="notranslate">`isolatectl`</span>, it is run by the account owner rather than by root, identifies the caller automatically, and returns JSON.

**Parameters:**

| Parameter | Description |
| --------- | ----------- |
| `--domain` | (Optional) Report a single domain only |
| `--period` | (Optional) Time window to report over; default `10m` |

The period grammar is <span class="notranslate">`lveinfo`</span>'s: <span class="notranslate">`s`</span>, <span class="notranslate">`m`</span>, <span class="notranslate">`h`</span>, <span class="notranslate">`d`</span>, plus <span class="notranslate">`today`</span>. **<span class="notranslate">`1m`</span> is one minute, not one month** — a month is <span class="notranslate">`30d`</span>.

**Example:**

```
$ isolatectl stats --domain example.com --period 1d
{
  "result": "success",
  "scope": {
    "owner_uid": 1000,
    "period": "1d",
    "note": "only domains active during the window are recorded"
  },
  "domains": [
    {
      "name": "example.com",
      "lve_id": 60057,
      "owner_uid": 1000,
      "usage":  {"cpu": 120, "ep": 2, "vmem": 0, "pmem": 4096, "nproc": 5, "io": 0, "iops": 0},
      "peak":   {"cpu": 900, "ep": 5, "vmem": 0, "pmem": 9012, "nproc": 9, "io": 0, "iops": 0},
      "limits": {"cpu": 5000, "ep": 20, "vmem": 0, "pmem": 65536, "nproc": 30, "io": 2048, "iops": 500},
      "faults": {"cpu": 0, "ep": 3, "vmem": 0, "pmem": 0, "nproc": 0, "io": 0, "iops": 0}
    }
  ]
}
```

<span class="notranslate">`usage`</span> is the average over the window, <span class="notranslate">`peak`</span> the highest sample in it, and <span class="notranslate">`limits`</span> the caps in force.

:::warning An idle website is absent, not zero
Only domains that were active during the period are recorded at all, so a quiet website does not appear in <span class="notranslate">`domains`</span> rather than appearing with zeroes. An empty <span class="notranslate">`domains`</span> list is an ordinary answer, not an error — the <span class="notranslate">`scope`</span> object is always returned so that "quiet" can be told apart from "no such account".
:::

***

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
cagefsctl --site-isolation-allow-all
```

**"CloudLinux Isolates feature is not available on this platform"**

The server does not have the required packages installed. Ensure all [prerequisite packages](#minimum-package-versions) are installed and up to date.

**"CloudLinux Isolates is not allowed for user \<username\>"**

```
# Solution: Allow for the specific user
cagefsctl --site-isolation-allow <username>
# Or allow for all users
cagefsctl --site-isolation-allow-all
```

**"Please specify existing domain name and try again"**

* Verify the domain exists in the control panel
* Check that the domain is associated with a valid user account

***

### Integration with Control Panels

CloudLinux Isolates integrates with supported control panels through domain hooks. When domains are:

* **Created**: No automatic action (isolation must be explicitly enabled)
* **Renamed**: Isolation configuration is automatically updated
* **Deleted**: When the panel dispatches the deletion hook, CageFS attempts to remove the isolation entry and, with CageFS 7.6.48-1 (Beta), stale per-website settings
* **Document root changed**: Configuration is regenerated via hooks

After deleting an isolated domain, [list isolated domains](#list-isolated-domains) to confirm it no longer appears. Report a cleanup failure if it remains.

***

## LVE Per Domain

CloudLinux Isolates also allows resource limits — CPU, memory, I/O, processes and entry processes — to be applied to an *individual website* rather than to the hosting account as a whole. A single busy or misbehaving site is then throttled on its own, without consuming the resources its sibling sites on the same account depend on.

:::warning BETA
Per-domain LVE limits are a BETA feature, supported on CloudLinux OS 8 and 9.
:::

### How it relates to CageFS per domain

The two halves of CloudLinux Isolates are separate layers and can be reasoned about separately:

| | |
|-|-|
|[CageFS per domain](#cagefs-per-domain) | *Filesystem* isolation — a compromised website cannot read another site's files. Always available where CageFS is.|
|LVE per domain | *Resource* isolation — a website has its own CPU, memory, I/O and process limits. Requires CloudLinux OS 8 or 9 and the package versions listed under [Per-Domain Prerequisites](#per-domain-prerequisites).|

In practice you do not enable them separately. The <span class="notranslate">`cagefsctl --site-isolation-*`</span> commands documented above drive both: each one invokes the matching <span class="notranslate">`lvectl`</span> per-domain command for you when the prerequisites are met, and silently skips that step when they are not. So on a server that does not support per-domain LVEs, website isolation still works — you get the filesystem separation without the resource limits, rather than an error.

### Per-Domain Prerequisites

Per-domain LVE limits are supported on CloudLinux OS 8 and 9. CloudLinux OS 7 predates the required kernel interface; on it, commands that need per-domain support fail with exit code `38` and the message <span class="notranslate">`Domain limits are not supported by this kernel`</span>.

In addition to the [CloudLinux Isolates prerequisites](#prerequisites), per-domain LVE limits require:

| Package | Minimum Version |
| ---------- | --------------- |
| lve-stats3 | 5.1.0-1         |
| lve-utils  | 6.6.40-1        |

To check the installed versions:

```
rpm -q lve-stats3 lve-utils
```

### How the containers are arranged

Understanding the container hierarchy explains most of what the statistics show:

```
ROOT
└── LVP  (reseller, when reseller limits are in use)
    └── LVP  (the hosting account)          <-- reported as "the account"
        ├── LVE  (the account's own processes — cron, SSH, non-isolated sites)
        ├── LVE  (site1.com)
        └── LVE  (site2.com)
```

The account's container is the **parent** of its websites', and the kernel keeps
the parent's counters as the sum of its children's. So the figure the statistics
tools report for an account is the total for everything beneath it — its own
processes *and* every isolated website. The account's own processes are a
separate container at the same level as the websites, and are never reported on
their own.

Because the websites are siblings of the account's own container rather than nested inside it, work done by an isolated website is charged to that website and to the account total, but never to the account's own processes — and the reverse holds too, so an account's cron jobs are never absorbed by one of its websites.

**Limits nest, even though usage does not.** A domain is bounded by its account's limits, which are in turn bounded by the reseller's; raising a domain's limit above its account's does not grant it more than the account has. A domain with no explicit limits of its own is simply bounded by its account's — registering a domain does not, by itself, restrict it.

### Enabling per-domain limits

Under a control panel, use the [`cagefsctl --site-isolation-*` commands](#command-reference) — they enable both isolation layers together and are the supported administrator path.

The underlying <span class="notranslate">`lvectl`</span> commands are available for integration scripts, and for inspecting or repairing state:

| | |
|-|-|
|<span class="notranslate">`lvectl allow-domain-limits <user>`</span> | Create the account's LVP and allow per-domain limits for it. Idempotent.|
|<span class="notranslate">`lvectl deny-domain-limits <user>`</span> | Remove the account's LVP and disallow per-domain limits.|
|<span class="notranslate">`lvectl enable-domain-limits <domain>`</span> | Register a domain LVE. The owner and document root are resolved from the control panel.|
|<span class="notranslate">`lvectl disable-domain-limits <domain>`</span> | Unregister the domain LVE and remove its registry entry.|
|<span class="notranslate">`lvectl list-domains <uid>`</span> | List the domain LVEs of the account with the given numeric UID.|
|<span class="notranslate">`lvectl regenerate-domains --username <user> ...`</span> | Refresh the domain configuration and id mapping after a rename or document root change.|

See [lvectl](/cloudlinuxos/command-line_tools/#lvectl) for the full syntax.

:::tip Note
<span class="notranslate">`lvectl list-domains`</span> lists the members of an account's LVP. For a *reseller*, that LVP holds the reseller's member accounts rather than domains, so the command's output alone does not tell you whether an account is isolated. A member account resolves in <span class="notranslate">`/etc/passwd`</span>; a domain LVE id never does.
:::

The domain renaming, document root changes and account renames performed through a supported control panel are handled by the panel hooks, which call <span class="notranslate">`lvectl regenerate-domains`</span> automatically. Run it by hand only after changing these outside the panel.

### Setting per-domain limits

Per-domain limits are set by the account owner with [`isolatectl limits`](#per-domain-resource-limits), not by the administrator: there is no <span class="notranslate">`lvectl`</span> command that sets an individual domain's limits. Administrators control the account-level limits, which bound every domain underneath them.

Where the state lives:

| | |
|-|-|
|<span class="notranslate">`~/.lve/domains.json`</span> | The account's per-domain limits and its list of isolated domains. This is the file <span class="notranslate">`isolatectl limits apply`</span> reads when re-applying limits to the kernel.|
|<span class="notranslate">`/etc/container/lvd_ids/<uid>`</span> | The account's domain-name-to-LVE-id registry.|

### Viewing per-domain usage

Per-domain statistics are collected by default once the feature is active. Every statistics tool can report them:

| | |
|-|-|
|[`isolatectl stats`](#per-domain-statistics) | For the **account owner** — usage for their own isolated domains.|
|<span class="notranslate">`lveinfo --with-domains`</span>, <span class="notranslate">`lveinfo --domain <domain>`</span> | Historical per-domain usage, with the <span class="notranslate">`domain_id`</span>, <span class="notranslate">`domain`</span> and <span class="notranslate">`parent_uid`</span> columns added.|
|<span class="notranslate">`cloudlinux-statistics --with-domains`</span> | A <span class="notranslate">`domains`</span> array nested inside each account object.|
|<span class="notranslate">`cloudlinux-top --domains`</span> | Current per-domain usage. Note the plural: <span class="notranslate">`-d`/`--domain`</span> on this tool is an unrelated filter.|
|<span class="notranslate">`lvechart --domain <domain>`</span> | A usage chart for one domain instead of the account.|

Each <span class="notranslate">`--domain`</span> selector accepts a domain name, a document root, or a numeric domain LVE id. See [Command Line Tools](/cloudlinuxos/command-line_tools/#lveinfo) for full syntax.

:::tip Note
On an account with no isolated domains, these options are accepted and change nothing — the output is identical to the same command without them.
:::

### Reading per-domain figures

Three properties of the numbers regularly surprise people reading them for the first time. None of them indicates a fault.

**A website's usage is part of its account's, not additional to it.** The per-domain rows break the account's figure down; they do not add to it:

<div class="notranslate">

```
account  =  the account's own work  +  site1.com  +  site2.com  + ...
            (cron, SSH, non-isolated
             sites — everything outside
             an isolated website)
```
</div>

**Faults are counted per container, then rolled up.** The kernel records a fault only against the container whose limit refused the request. <span class="notranslate">lve-stats</span> then rolls a website's faults into its account's total, so an account read *without* a per-domain option already includes its websites' faults; passing <span class="notranslate">`--with-domains`</span> splits them apart again. The [user notification email](/cloudlinuxos/cloudlinux_os_components/#customize-lve-stats2-notifications) is the one place that subtracts them instead, so that the same refusal is not reported twice in a message that already lists the site.

**Per-domain history is kept for fewer days than per-account history** — 7 days against 30, by default. A report covering a longer range returns correspondingly less per-domain data than account data, without the rows themselves indicating why. Both windows are administrator-configurable; see <span class="notranslate">`keep_history_days_domain`</span> in [LVE-Stats 2 configuration](/cloudlinuxos/cloudlinux_os_components/#configuration) (<span class="notranslate">`/etc/sysconfig/lvestats2`</span>).

### Fault notifications

When a website hits one of its own limits, the notification sent to the account owner names the website that faulted, alongside the limit it hit. Notifications continue to be addressed per account, and the thresholds and period that govern the account-level notification govern the per-domain section too — so enabling per-domain limits does not, by itself, change who is emailed or how often.

Administrators customising the email templates should see the <span class="notranslate">`domain_faults`</span> variable in [Customize LVE-stats2 notifications](/cloudlinuxos/cloudlinux_os_components/#customize-lve-stats2-notifications).

### Troubleshooting per-domain limits

**"Domain limits are not supported by this kernel (requires lve_lvp_create2)"**

The kernel predates per-domain LVE support. Per-domain limits require CloudLinux OS 8 or 9; on CloudLinux OS 7 the [CageFS half](#cagefs-per-domain) of CloudLinux Isolates is still available.

**Isolation was enabled, but no domain LVEs were created**

The <span class="notranslate">`cagefsctl --site-isolation-*`</span> commands always apply the filesystem layer, and add the per-domain LVE only when the [prerequisites](#per-domain-prerequisites) are met. Check the installed versions:

```
rpm -q lve-stats3 lve-utils
```

If either is below the minimum, update it and then re-run <span class="notranslate">`cagefsctl --site-isolation-enable <domain>`</span>. Removing isolation is never gated this way, so any containers created by an earlier version can always be torn down.

**"No domain limits configured for UID *N*"**

The account exists but has no isolated domains. Enable isolation for a domain first — <span class="notranslate">`cagefsctl --site-isolation-enable <domain>`</span>. A genuinely unknown account reports <span class="notranslate">`UID N does not exist`</span> instead.

**A domain's statistics stopped after a rename or a document root change**

The domain's registry entry is keyed on its document root. Changes made through a supported control panel are handled by the panel hooks; if the change was made outside the panel, refresh the mapping by hand:

```
lvectl regenerate-domains --username <user> --domain <new> --old-domain <old>
```

***
