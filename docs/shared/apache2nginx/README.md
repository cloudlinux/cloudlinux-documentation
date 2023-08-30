
# Apache2Nginx (BETA)
---

Apache2Nginx sets up NGINX hosting on the server and automatically converts `.htaccess` files into corresponding NGINX 
configuration.

*Apache2Nginx is only supported on Solo, Admin and Shared Pro editions of CloudLinux.*

## Installation

To use Apache2Nginx, first install the `apache2nginx` package:

```bash
yum install apache2nginx
```

## Convert to NGINX hosting

After `apache2nginx` package is installed, you can switch to NGINX by running:

```bash
apache2nginx setup
```

Note that this may take a while, so we recommend running this command in a `tmux` or `screen` session.

After conversion is complete, no further action is required.
The monitoring subsystem, when detecting a change to an `.htaccess` runs conversions to NGINX configuration.
So you can continue using `.htaccess` files as usual.

## Switch back to Apache hosting

To switch back to Apache, run:

```bash
apache2nginx reset
```

This command removes NGINX from your system and restores Apache configuration.

## Force use of Apache for a single website

To force individual website to be served by Apache, run:

```bash
apache2nginx proxy -d <domain>
```

For example, `apache2nginx proxy -d example.com`.


## Disable forced use of Apache for a single website

To disable forcing individual website to be served by Apache:

```bash
apache2nginx unproxy -d <domain>
```

Note that Apache may still serve the website, if:
* conversion of its `.htaccess` files fails in any way
* unsupported handler is used. Apache2Nginx only supports PHP-FPM handler
