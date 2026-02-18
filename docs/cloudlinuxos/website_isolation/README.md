# Website Isolation (BETA)

## CageFS Per Domain

Website Isolation is a security feature that provides domain-level isolation within CageFS. It allows server administrators to isolate individual websites from each other, even when they belong to the same hosting account. This prevents cross-site attacks where a compromised website could access files or data from other websites on the same account.

### Overview

When Website Isolation is enabled for a domain:

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
| lve (liblve)       | 2.2-1           |
| lve-wrappers       | 0.7.13-1        |
| alt-python27-cllib | 3.4.33-1        |

#### Compatible PHP Handlers

| Handler | Status                                                                            |
| ------- | --------------------------------------------------------------------------------- |
| LSAPI   | ✅ Supported (Recommended)                                                        |
| CGI     | ✅ Supported                                                                      |
| FPM     | ⚠️ Partially Supported - see [Compatible PHP Versions](#compatible-php-versions) |
| FCGI    | 🔜 Coming in future releases                                                      |

:::tip Warning
Website Isolation fully supports LSAPI and CGI handlers. FPM has partial support for specific ea-php versions only. FCGI support is planned for future releases.
:::

#### Compatible Control Panels
| Handler                  | Status                       |
| -------                  | ---------------------------- |
| cPanel                   | ✅ Supported                 |
| Plesk                    | 🔜 Coming in future releases |
| DirectAdmin              | 🔜 Coming in future releases |
| Integration Scripts*     | ✅ Supported                 |

*[Control Panel Integration](/cloudlinuxos/control_panel_integration/#control-panel-api-integration)

#### Compatible PHP Versions

Website Isolation provides partial FPM handler support for ea-php (cPanel). The following ea-php versions are compatible:

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

:::tip Note
alt-php support is coming soon.
:::

***

### Quick Start

Follow these steps to enable Website Isolation for a domain:

**1. Allow the feature server-wide (administrator only, one-time setup):**

```
cagefsctl --site-isolation-allow-all
```

**2. Enable isolation for a specific domain:**

```
cagefsctl --site-isolation-enable <example.com>
```

**3. Verify isolation is active:**

```
cagefsctl --site-isolation-list
```

To disable isolation for a domain:

```
cagefsctl --site-isolation-disable <example.com>
```

***

### Command Reference

#### Server-Wide Management

##### Allow Website Isolation for All Users

```
cagefsctl --site-isolation-allow-all
```

Enables the Website Isolation feature server-wide in "Allow All" mode. All users are allowed to use Website Isolation by default (individual users can be denied with `--site-isolation-deny`).

**Example:**

```
# cagefsctl --site-isolation-allow-all
Website isolation was allowed for all users.
```

**Notes:**

* Creates the feature flag at `/opt/cloudlinux/flags/enabled-flags.d/website-isolation.flag`
* Sets up the per-user denied directory at `/etc/cagefs/site-isolation.users.denied`
* Triggers a CageFS remount to apply necessary mount configurations
* Registers the `cagefsctl-user` proxyexec command for user-level management
* Must be run with root privileges

***

##### Deny Website Isolation for All Users

```
cagefsctl --site-isolation-deny-all
```

Disables the Website Isolation feature server-wide and switches to "Deny All" mode. Removes all domain isolation configurations for all users.

**Example:**

```
# cagefsctl --site-isolation-deny-all
Website isolation was denied for all users.
```

**Warning:** This command will:

* Disable isolation for all currently isolated domains
* Remove all per-user isolation configurations
* Terminate and restart affected PHP processes
* Clean up token directories and overlay storage
* Switch to "Deny All" mode

***

#### Per-User Management

Website Isolation uses a two-mode user model to control which users can use the feature:

* **Allow All mode** (`allow_all`): All users are allowed by default. Individual users can be denied (added as exceptions).
* **Deny All mode** (`deny_all`): No users are allowed by default. Individual users can be allowed (added as exceptions).

##### Allow Website Isolation for a Specific User

```
cagefsctl --site-isolation-allow <username> [<username2> ...]
```

Allows Website Isolation for one or more specific users.

**Parameters:**

| Parameter    | Description                             |
| ------------ | --------------------------------------- |
| `<username>` | Username(s) to allow Website Isolation for |

**Behavior depends on current mode:**

* **Allow All mode**: Removes the user from the denied list (undoes a previous `--site-isolation-deny`)
* **Deny All mode**: Adds the user to the allowed list
* **Not initialized**: Sets up infrastructure in Deny All mode with the user as the first allowed user

**Example:**

```
# cagefsctl --site-isolation-allow john
Website isolation was allowed for user(s): john

# cagefsctl --site-isolation-allow john jane
Website isolation was allowed for user(s): john, jane
```

***

##### Deny Website Isolation for a Specific User

```
cagefsctl --site-isolation-deny <username> [<username2> ...]
```

Denies Website Isolation for one or more specific users and disables all their domain isolation.

**Parameters:**

| Parameter    | Description                            |
| ------------ | -------------------------------------- |
| `<username>` | Username(s) to deny Website Isolation for |

**Behavior depends on current mode:**

* **Allow All mode**: Adds the user to the denied list
* **Deny All mode**: Removes the user from the allowed list (undoes a previous `--site-isolation-allow`)

**Example:**

```
# cagefsctl --site-isolation-deny john
Website isolation was denied for user(s): john
```

**Notes:**

* Also cleans up all existing domain isolation for the denied user(s)
* Website Isolation must be enabled server-wide first

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
Website isolation user mode toggled to 'deny_all'.
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

Enables Website Isolation for one or more specified domains.

**Parameters:**

| Parameter  | Description                                  |
| ---------- | -------------------------------------------- |
| `<domain>` | Domain name to isolate (e.g., `example.com`) |

**Example:**

```
# cagefsctl --site-isolation-enable example.com
Website isolation was enabled for domain(s),
example.com

# cagefsctl --site-isolation-enable site1.com site2.com
Website isolation was enabled for domain(s),
site1.com,site2.com
```

**Requirements:**

* Website Isolation must be allowed server-wide first
* Website Isolation must be allowed for the domain's user
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
cagefsctl --site-isolation-disable <domain> [<domain2> ...]
```

Disables Website Isolation for one or more specified domains.

**Parameters:**

| Parameter  | Description                          |
| ---------- | ------------------------------------ |
| `<domain>` | Domain name to remove from isolation |

**Example:**

```
# cagefsctl --site-isolation-disable example.com
Website isolation was disabled for domain(s),
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

Lists all users and domains that have Website Isolation enabled.

**Parameters:**

| Parameter    | Description                                   |
| ------------ | --------------------------------------------- |
| `<username>` | (Optional) Filter results by specific user(s) |

**Example - List all isolated domains:**

```
# cagefsctl --site-isolation-list

Domains with enabled website isolation for user john:
example.com
mysite.org

Domains with enabled website isolation for user jane:
shop.example.com
```

**Example - List isolated domains for specific user:**

```
# cagefsctl --site-isolation-list john

Domains with enabled website isolation for user john:
example.com
mysite.org
```

**Output when no domains are isolated:**

```
# cagefsctl --site-isolation-list
No users with enabled Website isolation
```

***

##### Regenerate Isolation Configuration

```
cagefsctl --site-isolation-regenerate <username> [<username2> ...]
```

Regenerates the Website Isolation configuration for specified users. Use this command after manual configuration changes or when troubleshooting isolation issues.

**Parameters:**

| Parameter    | Description                                 |
| ------------ | ------------------------------------------- |
| `<username>` | Username(s) to regenerate configuration for |

**Example:**

```
# cagefsctl --site-isolation-regenerate john jane
Regenerated configuration website isolation for users:
john
jane
```

**When to use:**

* After domain document root changes
* After domain renames or migrations
* When isolation configuration appears out of sync
* As part of troubleshooting steps recommended by support

***

### User-Level Management

End users can manage Website Isolation for their own domains using the `cagefsctl-user` utility. This command runs inside CageFS via proxyexec and allows users to enable, disable, and list isolation for domains they own — without requiring root access.

:::tip Note
User-level management requires that Website Isolation is allowed server-wide **and** allowed for the specific user by the server administrator.
:::

#### Enable Isolation for a Domain (User-Level)

```
cagefsctl-user site-isolation-enable --domain <domain>[,<domain2>,...]
```

Enables Website Isolation for one or more domains owned by the calling user.

**Parameters:**

| Parameter   | Description                                              |
| ----------- | -------------------------------------------------------- |
| `--domain`  | Comma-separated domain name(s) to enable isolation for   |

**Example:**

```
$ cagefsctl-user site-isolation-enable --domain example.com
{"result": "success", "enabled_sites": ["example.com"]}

$ cagefsctl-user site-isolation-enable --domain site1.com,site2.com
{"result": "success", "enabled_sites": ["site1.com", "site2.com"]}
```

**Notes:**

* The user can only manage domains they own
* Website Isolation must be allowed for the user by the server administrator

***

#### Disable Isolation for a Domain (User-Level)

```
cagefsctl-user site-isolation-disable --domain <domain>[,<domain2>,...]
```

Disables Website Isolation for one or more domains owned by the calling user.

**Parameters:**

| Parameter   | Description                                              |
| ----------- | -------------------------------------------------------- |
| `--domain`  | Comma-separated domain name(s) to disable isolation for  |

**Example:**

```
$ cagefsctl-user site-isolation-disable --domain example.com
{"result": "success", "enabled_sites": []}
```

***

#### List Isolated Domains (User-Level)

```
cagefsctl-user site-isolation-list
```

Lists all domains with Website Isolation enabled for the calling user.

**Example:**

```
$ cagefsctl-user site-isolation-list
{"result": "success", "enabled_sites": ["example.com", "mysite.org"]}
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

When Website Isolation is enabled for a domain, per-domain PHP Selector configuration is automatically set up. This allows each isolated website to have its own PHP version and module configuration, independent of other websites on the same account.

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

**"Website isolation is not enabled"**

```
# Solution: Allow server-wide first
cagefsctl --site-isolation-allow-all
```

**"Website isolation feature is not available on this platform"**

The server does not have the required packages installed. Ensure all [prerequisite packages](#minimum-package-versions) are installed and up to date.

**"Website isolation is not allowed for user \<username\>"**

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

Website Isolation integrates automatically with supported control panels. When domains are:

* **Created**: No automatic action (isolation must be explicitly enabled)
* **Renamed**: Isolation configuration is automatically updated
* **Deleted**: Isolation configuration is automatically cleaned up
* **Document root changed**: Configuration is regenerated via hooks
