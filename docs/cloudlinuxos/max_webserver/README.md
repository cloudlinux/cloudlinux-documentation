
# MAx Web Server (BETA)
---

MAx Web Server sets up NGINX hosting on the server and automatically converts `.htaccess` files into corresponding NGINX 
configuration.

It seamlessly integrates with the LSAPI NGINX module,
which allows for better performance and resource usage.

:::tip  
MAx Web Server is supported on cPanel servers only, running CloudLinux OS 8 and later.
:::

## Installation

To use MAx Web Server, first install the `max_webserver` package:

```
dnf --enablerepo=cloudlinux-updates-testing install max_webserver
```

If any of these packages is already installed, `max_webserver` requires at least the following version of it: `imunify360-firewall` 8.2.4, `imunify360-webshield-bundle` 1.32.0, `cloudlinux-site-optimization-module` 1.1-22, `ea-nginx` 1.29.1-1, `ea-nginx-mod-lsapi` 1.29.1+1.0-13, `ea-nginx-mod-apache-compat` 1.29.1+1.0-7, `ea-nginx-headers-more` 0.39-1. If the installation reports a conflict with one of these packages, update that package first.

## Convert to NGINX hosting

After `max_webserver` package is installed, you can switch to NGINX by running:

```
apache2max_webserver setup
```

Note that this may take a while, so we recommend running this command in a `tmux` or `screen` session.

Any websites previously using LSAPI will be automatically switched to NGINX hosting with the LSAPI NGINX module.
Websites using PHP-FPM will be switched to NGINX hosting with PHP-FPM.
If some websites use other PHP handlers, the command asks whether to switch them to LSAPI. If you agree, the LSAPI handler is set for the PHP versions these websites use and for the default PHP version of the server. Remove `ea-apache24-mod_ruid2` and `ea-apache24-mod_mpm_itk` first: they are not compatible with `mod_lsapi`. If you accept the switch while `ea-apache24-mod_ruid2` is installed, setup stops with an error: remove the module, run `apache2max_webserver reset`, then run setup again. Without `reset`, the repeated setup leaves the `ea-nginx` cache enabled, and all websites are proxied to Apache. To fix this, run `apache2max_webserver reset --force`, then run setup again. If you decline, these websites are proxied to Apache.

To answer without a prompt, for example in a script, add `-y` (switch) or `-n` (do not switch) to the command.

To set up without the LSAPI NGINX module, run `apache2max_webserver setup --without-lsapi`. The command then does not install `ea-nginx-mod-lsapi`. If this module is not on the server, websites using LSAPI are proxied to Apache. The option applies to this run only: the automatic setup that follows a `max_webserver` package update installs the module.

Setup turns off the `ea-nginx` cache, unless it was already enabled before setup. While this cache is enabled (`"enabled": true` in `/etc/nginx/ea-nginx/cache.json`), websites are not converted: NGINX proxies all of them to Apache, and `list-proxied` shows them with the reason `cache`.

After conversion is complete, no further action is required.
The monitoring subsystem, when detecting a change to an `.htaccess` runs conversions to NGINX configuration.
So you can continue using `.htaccess` files as usual.

The monitoring subsystem is the `clmonitor` service, with its log in `/var/log/clmonitor.log`. It requires a running `auditd` service, adds an audit rule for writes under `/home`, and applies a change a few seconds after it happens. A change to an `.htaccess` file outside `/home` is not detected. For such a website, run `apache2max_webserver convert -d <domain>` after editing an existing file, or `apache2max_webserver setup` after adding an `.htaccess` file to a directory that did not have one.

:::tip  
Do not attempt to stop the Apache service or remove Apache packages after switching to NGINX.
The Apache service provides a safety net for websites that cannot be converted to NGINX.
:::

## Switch back to Apache hosting

To switch back to Apache, run:

```
apache2max_webserver reset
```

This command restores Apache hosting and removes NGINX from your system.

NGINX stays installed, in front of Apache, in these cases:
* the `ea-nginx` cache is enabled. To remove NGINX anyway, run `apache2max_webserver reset --force`
* you run `apache2max_webserver reset --mode nginx`

To uninstall NGINX in these cases, remove the `ea-nginx` package.

Run `apache2max_webserver reset` before you remove the `max_webserver` package: the removal fails while NGINX hosting is active.

## Force use of Apache for a single website

To force individual website to be served by Apache, run:

```
apache2max_webserver proxy -d <domain>
```

For example, `apache2max_webserver proxy -d example.com`.

To process several websites, separate the domains with commas, for example `-d example.com,example.org`, or use `-d all` for all websites. The `unproxy` command accepts the same values.


## Disable forced use of Apache for a single website

To disable forcing individual website to be served by Apache:

```
apache2max_webserver unproxy -d <domain>
```

Note that Apache may still serve the website for another reason, for example if its `.htaccess` file cannot be converted, its PHP handler is not supported (MAx Web Server only supports the PHP-FPM and MOD_LSAPI handlers), or the `ea-nginx` cache is enabled on the server. See [List proxied websites](#list-proxied-websites).

## List proxied websites

To list websites that are forced to be served by Apache or were switched to it automatically:

```
apache2max_webserver list-proxied
```

This command prints each such website as `domain (reason, details)`, or `Nothing is proxied.` if there are none. `details` is `None` when the reason has no details.

| Reason | Meaning |
|---|---|
| `forced` | Set with the `proxy` command |
| `handler` | The PHP handler is not supported, or the website uses LSAPI and the LSAPI NGINX module is not installed. Details show the handler |
| `test` | The generated NGINX configuration failed validation |
| `http` | After conversion the response status, content type or charset differs from the one before, or the content type became `application/octet-stream`. Details show the change |
| `cache` | The `ea-nginx` cache is enabled |

Other values mean a conversion error; check `/var/log/max_webserver.log`.

This command does not show every website that Apache serves. A website also goes to Apache, without being listed, if an `.htaccess` file has a directive that cannot be converted, if the `.htaccess` file in the document root is invalid, if an Apache include file that applies to the website cannot be converted, or if the configuration of a suspended account cannot be converted. To find these websites, search the log for `proxy_pass` as shown in the [FAQ](#frequently-asked-questions).

An invalid `.htaccess` file in a subdirectory sends only that directory to Apache. Such directories are not listed.

## Run conversion manually

To convert all websites again:

```
apache2max_webserver convert
```

To limit the conversion, use `-d example.com,example.org` for specific domains or `-u <username>` for the websites of one user.

This command processes the `.htaccess` files that are already known to MAx Web Server. To find `.htaccess` files in new directories that the monitoring subsystem did not detect, run `apache2max_webserver setup`.

## Check the current state

To print the current state of MAx Web Server:

```
apache2max_webserver state
```

If another `apache2max_webserver` command, such as `setup` or `reset`, is running, the command waits for it to finish.

| State | Meaning |
|---|---|
| `on` | NGINX hosting is active |
| `off` | Switched back to Apache with `reset` |
| `unset` | Setup has not been run |
| `resetting` | `reset` did not finish |
| `setup_failed` | Setup failed. Check `/var/log/max_webserver_setup.log` |
| `failed_deps` | Installing the NGINX packages failed. Check `/var/log/max_webserver_setup.log` |
| `bad_env` | The server is not supported, the NGINX configuration check failed, or `mod_lsapi` conflicts were found |

Any other state means setup did not finish. Check `/var/log/max_webserver_setup.log`.

The `proxy`, `unproxy` and `convert` commands take effect only in the `on` state.

## Other notes

MAx Web Server automatically converts `.htaccess` files to NGINX configuration, stored under the directory `/etc/nginx`
as `apache2nginx.conf`, `zzz_apache2nginx.conf` and files prefixed with `apache2nginx_`.

Please don't modify these files manually, as they will be overwritten by the monitoring subsystem.

Instead, if you want to augment the NGINX configuration, you can do any of the following:

* Work with your `.htaccess` files like usually, and let MAx Web Server automatically convert them to respective NGINX configuration
* Add files according to `ea-nginx` files conventions. Please refer to the [cPanel documentation](https://docs.cpanel.net/knowledge-base/web-services/nginx-with-reverse-proxy/).

Besides `.htaccess` files, MAx Web Server reads the `RewriteEngine`, `DirectoryIndex` and `Header` directives from the global Apache configuration (`/etc/apache2/conf/httpd.conf` and its includes) and converts the include files in `/etc/apache2/conf.d/userdata/`. If such an include file cannot be converted, the websites it applies to are served by Apache. The monitoring subsystem does not watch these files: after editing them, run `apache2max_webserver convert`.

## Frequently Asked Questions 

**Q: Is MAx Web Server available on all editions?**<br />
A: Yes, it is. However, **AccelerateWP** (*which provides more benefit in pair with MAx Web Server*) is available only for CloudLinux OS Shared PRO/Admin/Solo editions (not Legacy).

**Q: What happens if the conversion from Apache to NGINX fails?**<br />
A: In such cases, the system will automatically switch to proxy-pass mode on NGINX.

**Q: Which PHP handlers are supported?**<br />
A: MAx Web Server supports LSAPI and FPM PHP handlers, which can be managed via WHM/cPanel's MultiPHP Manager.

**Q: How can I diagnose and report proxy-pass issues?**<br />
A: Use the following commands:
* Run apache2max_webserver list-proxied to identify proxied websites and reasons.
* Check logs with:
```
cat /var/log/max_webserver.log | grep username | grep WARNING
```
or more specifically:
```
cat /var/log/max_webserver.log | grep user.com | grep proxy_pass
```
* Check the response headers, for example with `curl -I https://example.com/`. `X-Backend-Server: Apache` means that the request was proxied to Apache. Websites proxied because the `ea-nginx` cache is enabled do not send this header.

The conversion that runs during `apache2max_webserver setup` is logged to `/var/log/max_webserver_setup.log`, so check this file as well, and also when setup fails. Later conversions are logged to `/var/log/max_webserver.log`.

**Q: If one site on an account uses proxy-pass, does it affect other sites?**<br />
A: No. Only the sites that couldn’t be converted will use proxy-pass. Successfully converted sites will operate via NGINX.
