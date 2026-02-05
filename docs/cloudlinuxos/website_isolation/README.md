# Website Isolation (BETA)

## CageFS Per Domain

Website Isolation is a security feature that provides domain-level isolation within CageFS. It allows server administrators to isolate individual websites from each other, even when they belong to the same hosting account. This prevents cross-site attacks where a compromised website could access files or data from other websites on the same account.

### Overview

When Website Isolation is enabled for a domain:

* Each isolated website runs in its own isolated environment
* PHP processes for isolated websites cannot access files from other websites
* Crontab entries are automatically scoped to their respective document roots
* Existing PHP processes are gracefully terminated and restarted in the isolated environment

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

**1. Enable the feature server-wide (administrator only, one-time setup):**

```
cagefsctl --site-isolation-allow
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

##### Enable Website Isolation Server-Wide

```
cagefsctl --site-isolation-allow
```

Enables the Website Isolation feature server-wide. This must be executed by the server administrator before individual domains can be isolated.

**Example:**

```
# cagefsctl --site-isolation-allow
Website isolation was enabled server-wide.
```

**Notes:**

* Creates the feature flag at `/opt/cloudlinux/flags/enabled-flags.d/website-isolation.flag`
* Triggers a CageFS remount to apply necessary mount configurations
* Must be run with root privileges

***

##### Disable Website Isolation Server-Wide

```
cagefsctl --site-isolation-deny
```

Disables the Website Isolation feature server-wide and removes all domain isolation configurations.

**Example:**

```
# cagefsctl --site-isolation-deny
Website isolation was disabled server-wide.
```

**Warning:** This command will:

* Disable isolation for all currently isolated domains
* Remove all per-user isolation configurations
* Terminate and restart affected PHP processes
* Clean up token directories and overlay storage

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
<example.com>

# cagefsctl --site-isolation-enable site1.com site2.com
Website isolation was enabled for domain(s),
site1.com,site2.com
```

**Requirements:**

* Website Isolation must be enabled server-wide first
* The domain must exist and be associated with a valid user account
* Must be run with root privileges

:::tip Note
Currently, this command requires root execution. Future releases may allow end users to enable isolation for their own domains.
:::

**What happens when isolation is enabled:**

1. A unique website token directory is created
2. Overlay storage directory is configured for the website
3. User configuration is updated with the isolated domain
4. If this is the first isolated website for the user, CageFS is remounted
5. Existing PHP processes for the domain are terminated and restarted in isolation

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
# cagefsctl --site-isolation-disable <example.com>
Website isolation was disabled for domain(s),
<example.com>
```

**Requirements:**

* Must be run with root privileges

:::tip Note
Currently, this command requires root execution. Future releases may allow end users to disable isolation for their own domains
:::

**What happens when isolation is disabled:**

1. Domain is removed from the user's isolation configuration
2. Mount configuration is regenerated
3. PHP processes for the domain are restarted outside of isolation
4. Token directories are cleaned up

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

### Troubleshooting

#### Common Issues

**"Website isolation is not enabled server-wide"**

```
# Solution: Enable server-wide first
cagefsctl --site-isolation-allow
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
