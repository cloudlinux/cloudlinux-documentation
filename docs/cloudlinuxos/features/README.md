# Features

Below, you can find the list of supported features with the links to the documentation available.

## LVE limits

* [Understanding limits](https://docs.cloudlinux.com/limits/#understanding-limits)
* [SPEED limit](https://docs.cloudlinux.com/limits/#speed-limit)
* [Memory limit](https://docs.cloudlinux.com/limits/#memory-limit)
* [IO](https://docs.cloudlinux.com/limits/#io)
* [IOPS](https://docs.cloudlinux.com/limits/#iops)
* [Entry processes](https://docs.cloudlinux.com/limits/#entry-processes)
* [Number of processes](https://docs.cloudlinux.com/limits/#number-of-processes)
* [Inodes](https://docs.cloudlinux.com/limits/#inodes)
* [Network traffic bandwidth control and accounting system](https://docs.cloudlinux.com/limits/#network-traffic-bandwidth-control-and-accounting-system)
* [Limits validation](https://docs.cloudlinux.com/limits/#limits-validation)
* [Compatibility matrix](https://docs.cloudlinux.com/limits/#compatibility-matrix)
* [Reseller limits](https://docs.cloudlinux.com/limits/#reseller-limits)

## Inode limits

The documentation is available [here](https://docs.cloudlinux.com/limits/#inodes).

## Reseller limits

The documentation is available [here](https://docs.cloudlinux.com/limits/#reseller-limits).

## MySQL Governor

MySQL Governor is software to monitor and restrict MySQL usage in a shared hosting environment. The monitoring is done
via resource usage statistics per each MySQL thread.

MySQL Governor can also kill off slow SELECT queries.

MySQL Governor has multiple modes of operations, depending on the configuration. It can work in monitor-only mode, or it
can use different throttling scenarios.

MySQL Governor allows restricting customers who use too many resources. It supports following limits:

|       |       |                                                                                                        |
|-------|-------|--------------------------------------------------------------------------------------------------------|
| CPU   | %     | CPU speed relative to one core. 150% would mean one and a half cores                                   |
| READ  | bytes | bytes read. Cached reads are not counted, only those that were actually read from disk will be counted |
| WRITE | bytes | bytes written. Cached writes are not counted, only once data is written to disk, it is counted         |

You can set different limits for different periods: current, short, med, long. By default those periods are defined as 1
second, 5 seconds, 1 minute and 5 minutes. They can be re-defined using
the [configuration file](https://docs.cloudlinux.com/cloudlinux_os_components/#configuration-and-operation). The idea is
to use larger acceptable values for shorter periods. Like you could allow a customer to use two cores (200%) for one
second, but only 1 core (on average) for 1 minute, and only 70% within 5 minutes. That would make sure that customer can
burst for short periods of time.

When a customer is restricted, the customer will be placed into special LVE with ID 3. All restricted customers will be
placed into that LVE, and you can control the amount of resources available to restricted customers. Restricted
customers will also be limited to only 30 concurrent connections. This is done so they wouldn't use up all the MySQL
connections to the server.

### Installation

:::warning Attention!
MySQL Governor on Ubuntu supports the following only:

* cl-MySQL80 on non-panel system
* cl-MySQL80 on cPanel
* cl-MariaDB103 on non-panel system
  :::

1. Install MySQL Governor

```
apt  install governor-mysql
```

2. To use MySQL Governor with

    * cl-MariaDB103
    ```
    /usr/share/lve/dbgovernor/mysqlgovernor.py --mysql-version=mariadb103
    ```
    * cl-MySQL80
    ```
    /usr/share/lve/dbgovernor/mysqlgovernor.py --mysql-version=mysql80
    ```
3. Backup your databases.
4. Run the cl-MySQL/cl-MariaDB installation.

```
/usr/share/lve/dbgovernor/mysqlgovernor.py --install --yes
```

In case of installing on cPanel + Ubuntu server, set the following parameter:


5. After installation, check that the database server is working properly. If you have any problems,
   use [Support Portal]().
6. Configure user mapping to the database. The mapping format is described in
   the [following section](https://docs.cloudlinux.com/cloudlinux_os_components/#mapping-a-user-to-a-database).

In case a non-panel system the `/etc/container/dbuser-map` should be created and updated with new users by admin.

The format is as follows:

```
[dbuser_name1] [account_name1] [UID1]
...
[dbuser_nameN] [account_nameN] [UIDN]
```

The control panel should automatically generate such mapping and write it to the `/etc/container/dbuser-map`. Usually,
it is enough to write a hook when adding, deleting or renaming a database for a user. The control panel should implement
such a mechanism for MySQL Governor to operate properly. MySQL Governor automatically applies changes from the
dbuser-map file every five minutes.

7. MySQL Governor configuration can be found in the
   following [section](https://docs.cloudlinux.com/cloudlinux_os_components/#configuration-3).
8. MySQL Governor CLI tools description can be found in the
   following [section](https://docs.cloudlinux.com/command-line_tools/#mysql-governor).
9. Having configured the mapping use `dbtop` to see the current user load on the database (you'd need to make some
   database queries).

```
dbtop
```

10. If the load appears in the dbtop output, then you have successfully configured MySQL Governor.

### How To upgrade database server

You can find the instructions
in [this documentation](https://docs.cloudlinux.com/cloudlinux_os_components/#upgrading-database-server).

### Uninstalling

To remove MySQL Governor, run the following command:

```
/usr/share/lve/dbgovernor/mysqlgovernor.py --delete
```

The script will install the original MySQL server, and remove MySQL Governor.

### Configuration and operation

You can find the instructions
in [this documentation](https://docs.cloudlinux.com/cloudlinux_os_components/#configuration-and-operation).

## Administrator WEB interface (CloudLinux Manager)

The documentation is available [here](https://docs.cloudlinux.com/lve_manager/#cloudlinux-manager).

* [Dashboard](/features/#dashboard)
* [Current Usage](https://docs.cloudlinux.com/lve_manager/#current-usage)
* [Users](https://docs.cloudlinux.com/lve_manager/#users)
* [Statistics](https://docs.cloudlinux.com/lve_manager/#statistics)
* [Packages](https://docs.cloudlinux.com/lve_manager/#packages)
* [Options](https://docs.cloudlinux.com/lve_manager/#options)
* [PHP Selector](https://docs.cloudlinux.com/cloudlinux_os_components/#php-selector)
    * [Installation instructions](/features/#php-selector-installation-instructions)
    * [Selector tab](https://docs.cloudlinux.com/lve_manager/#selector-tab)
    * [Selector tab additional features (cPanel)](https://docs.cloudlinux.com/lve_manager/#selector-tab-additional-features)
      CloudLinux Manager 6.0.1-2
    * [PHP Selector troubleshooting (cPanel)](https://docs.cloudlinux.com/lve_manager/#php-selector-troubleshooting)
      CloudLinux Manager 6.0.1-2
    * [PHP Selector diagnostic tool and notifications](https://docs.cloudlinux.com/lve_manager/#php-selector-diagnostic-tool-and-notifications)
      CloudLinux Manager 6.0.1-2

### Dashboard

:::warning Attention!
MySQL Governor is not available in the current version. We're planning to add it in the upcoming releases.
:::

Dashboard provides a quick overview of statistics and all administrative information for server administrators.

Go to _CloudLinux Manager_ | _Dashboard_.


* End Users hitting limits — number of users reaching their limit in any kind of resource. Data is within the last 24
  hours.
* Resellers hitting limits — number of enrolled Resellers that are reaching their limit in any kind of resource. Data is
  within the last 24 hours.
* [PHP Selector](https://docs.cloudlinux.com/lve_manager/#php-selector-2) block displays the following information:
    * Default version — the default version of PHP binaries. Click _Manage_ to change the default version, enable or
      disable PHP Selector, change the list of supported versions, and choose default modules. You will be redirected to
      CloudLinux Manager | PHP Selector. PHP Selector (cPanel) has malfunctions warnings
      about [the most common issues](https://docs.cloudlinux.com/lve_manager/#errors).
* [CageFS](https://docs.cloudlinux.com/cloudlinux_os_components/#cagefs) block displays the following information:
    * CageFS status (Enabled/Disabled/Not installed). To manage CageFS, click _Manage_. You will be redirected to
      CloudLinux Manager | Options | CageFS. Click _Install_ to install CageFS.
    * Mode displays the current CageFS mode of operation.
    * End users — displays the number of users with CageFS enabled/all.

## Reseller WEB interface (CloudLinux Manager)

* [Current Usage](https://docs.cloudlinux.com/lve_manager/#current-usage-tab)
* [Historical Usage](https://docs.cloudlinux.com/lve_manager/#historical-usage-tab)
* [Users](https://docs.cloudlinux.com/lve_manager/#users-tab)
* [Statistics](https://docs.cloudlinux.com/lve_manager/#statistics-tab)
* [Packages](https://docs.cloudlinux.com/lve_manager/#packages-tab)

## User WEB interface

* [Resource Usage](https://docs.cloudlinux.com/lve_manager/#resource-usage-client-plugin)
* [PHP Selector](https://docs.cloudlinux.com/lve_manager/#php-selector-client-plugin)

## LVE Wrappers

The documentation is available [here](https://docs.cloudlinux.com/cloudlinux_os_components/#lve-wrappers).

* lve_wrapper
* lve_suwrapper

## CageFS and running commands inside

The documentation is
available [here](https://docs.cloudlinux.com/control_panel_integration/#running-commands-inside-cagefs).

* cagefs_enter
* cagefs_enter_user

## Hardened PHP

* alt-php versions 5.6 - 8.0

## Mod_hostinglimits

LVE is a kernel level technology developed by the CloudLinux team. The technology has common roots with container based
virtualization and uses cgroups in its latest incarnation. It is lightweight and transparent. The goal of LVE is to make
sure that no single web site can bring down your web server.

Today, a single site can consume all CPU, IO, Memory resources or Apache processes - and bring the server to a halt. LVE
prevents that. It is done via collaboration of Apache module, PAM module and kernel.

[mod_hostinglimits](https://docs.cloudlinux.com/cloudlinux_os_components/#hostinglimits-module-for-apache) is an Apache
module that:

* detects VirtualHost from which the request came;
* detects if it was meant for CGI or PHP script;
* puts Apache process used to serve that request into LVE for the user determined via SuexecUserGroup directive for that
  virtual host;
* lets Apache to serve the request;
* removes Apache process from user's LVE.

The kernel makes sure that all LVEs get fair share of the server's resources, and that no customer can use more then the
limits set for that customer. Today we can limit CPU , Memory (virtual and physical), IO, number of processes as well as
the number of entry processes (concurrent connections to apache).

Each LVE limits amount of entry processes (Apache processes entering into LVE) to prevent single site exhausting all
Apache processes. If the limit is reached, then mod_hostinglimits will not be able to place Apache process into LVE, and
will return error code 508. This way very heavy site would slow down and start returning 508 errors, without affecting
other users.

* If the site is limited by CPU or IO, then the site will start responding slower.
* If the site is limited by memory or number of processes limits, then the user will receive 500 or 503 errors that
  server cannot execute the script.

:::warning Attention!
In the current version ONLY the following combinations are available: **ea-php81 with php-fpm** and **alt-php with
suphp, cgi**
:::

#### ea-php81 with php-fpm

To install, run the following command:

```
apt install ea-php81*
```

#### alt-php with suphp, cgi

To install, follow these steps:

1. Remove `mod-ruid2`:


2. Install packages (with `alt-php74` as an example):

   ```
   apt install ea-apache24-mod-suphp ea-apache24-mod-suexec
   apt install alt-php74
   ```

#### PHP Selector installation instructions

The documentation is available [here](https://docs.cloudlinux.com/cloudlinux_os_components/#php-selector).

:::warning Attention!
Only the following handlers can be used:

* suphp
* cgi
  :::

To install, run the following commands:

```
apt install ea-apache24-mod-suphp ea-apache24-mod-suexec
apt install cagefs
cagefsctl –-init
```

## Symlink owner match protection

The documentation is available [here](https://docs.cloudlinux.com/cloudlinux_os_kernel/#fs-enforce-symlinksifowner).

* [fs.enforce_symlinksifowner](https://docs.cloudlinux.com/cloudlinux_os_kernel/#fs-enforce-symlinksifowner)
* [fs.symlinkown_gid](https://docs.cloudlinux.com/cloudlinux_os_kernel/#fs-symlinkown-gid)
* [fs.process_symlinks_by_task](https://docs.cloudlinux.com/cloudlinux_os_kernel/#fs-process-symlinks-by-task)

## Link traversal protection

* [fs.protected_symlinks_create](https://docs.cloudlinux.com/cloudlinux_os_kernel/#link-traversal-protection)
* [fs.protected_hardlinks_create](https://docs.cloudlinux.com/cloudlinux_os_kernel/#link-traversal-protection)

## Tuned profiles

The documentation is available [here](https://docs.cloudlinux.com/cloudlinux_os_kernel/#tuned-profiles-cloudlinux).

## Apache mod_lsapi

### General requirements

General requirements are
available [here](https://docs.cloudlinux.com/cloudlinux_os_components/#general-information-and-requirements-9).

### Installation

Installation on cPanel servers with EasyApache 4:

```
apt install liblsapi liblsapi-dev
apt install ea-apache24-mod-lsapi
/usr/bin/switch_mod_lsapi --setup
service httpd restart
```

Installation on servers with no panel:

```
apt install liblsapi liblsapi-dev
apt install mod-lsapi
/usr/bin/switch_mod_lsapi --setup
service apache2 restart
```

### Configuration

Configuration instructions are available [here](https://docs.cloudlinux.com/cloudlinux_os_components/#configuration-4).

### Troubleshooting

In case the site responds with the error: 503 Service unavailable.

1. Be sure that /opt has drwxr-xr-x permissions. It can be fixed with the following command:

```
$ chmod 755 /opt
```

2. Change the default folder for mod_lsapi socket:

```
mkdir /var/mod_lsapi
chown nobody.nobody /var/mod_lsapi
chmod 755 /var/mod_lsapi
```

Add to /etc/apache2/conf.d/lsapi.conf new path:

```
lsapi_socket_path /var/mod_lsapi
```

And restart service:

```
service httpd restart
```

### Uninstall

Uninstall procedure for cPanel servers with EasyApache 4:

```
/usr/bin/switch_mod_lsapi --uninstall
apt remove liblsapi liblsapi-dev ea-apache24-mod-lsapi
```

Uninstall procedure for servers with no panel:

```
/usr/bin/switch_mod_lsapi --uninstall
apt remove liblsapi liblsapi-dev mod-lsapi
```
