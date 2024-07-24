
# Apache2Nginx (BETA)
---

::: warning
Development is temporarily paused until the end of Q3 2024.
:::

Apache2Nginx sets up NGINX hosting on the server and automatically converts `.htaccess` files into corresponding NGINX 
configuration.

It seamlessly integrates with the LSAPI NGINX module,
which allows for better performance and resource usage.

:::tip  
Apache2Nginx is supported on cPanel servers only, running CloudLinux OS 8 and later.
:::

## Installation

To use Apache2Nginx, first install the `apache2nginx` package:

```
dnf --enablerepo=cloudlinux-updates-testing install apache2nginx
```

## Convert to NGINX hosting

After `apache2nginx` package is installed, you can switch to NGINX by running:

```
apache2nginx setup
```

Note that this may take a while, so we recommend running this command in a `tmux` or `screen` session.

Any websites previously using LSAPI will be automatically switched to NGINX hosting with the LSAPI NGINX module.
Websites using PHP-FPM will be switched to NGINX hosting with PHP-FPM.
PHP websites using other handlers will be proxied to Apache.

After conversion is complete, no further action is required.
The monitoring subsystem, when detecting a change to an `.htaccess` runs conversions to NGINX configuration.
So you can continue using `.htaccess` files as usual.

:::tip  
Do not attempt to stop the Apache service or remove Apache packages after switching to NGINX.
The Apache service provides a safety net for websites that cannot be converted to NGINX.
:::

## Switch back to Apache hosting

To switch back to Apache, run:

```
apache2nginx reset
```

This command removes NGINX from your system and restores Apache configuration.

## Force use of Apache for a single website

To force individual website to be served by Apache, run:

```
apache2nginx proxy -d <domain>
```

For example, `apache2nginx proxy -d example.com`.


## Disable forced use of Apache for a single website

To disable forcing individual website to be served by Apache:

```
apache2nginx unproxy -d <domain>
```

Note that Apache may still serve the website, if:
* conversion of its `.htaccess` files fails in any way
* unsupported handler is used. Apache2Nginx only supports PHP-FPM handler

## List proxied websites

To list websites that are forced to be served by Apache:

```
apache2nginx list-proxied
```

This command lists all websites that are forced to be served by Apache and the reason for that.

## Other notes

Apache2Nginx automatically converts `.htaccess` files to NGINX configuration, stored under the directory `/etc/nginx`
as `apache2nginx.conf` and files prefixed with `apache2nginx-`.

Please don't modify these files manually, as they will be overwritten by the monitoring subsystem.

Instead, if you want to augment the NGINX configuration, you can do any of the following:

* Work with your `.htaccess` files like usually, and let Apache2Nginx automatically convert them to respective NGINX configuration
* Add files according to `ea-nginx` files conventions. Please refer to the [cPanel documentation](https://docs.cpanel.net/knowledge-base/web-services/nginx-with-reverse-proxy/).
