# Uninstalling

## Deleting the CloudLinux Subsystem For Ubuntu

Run all commands on this page as `root`.

:::warning
If MySQL Governor is installed, back up your databases and remove it first:

```shell
/usr/share/lve/dbgovernor/mysqlgovernor.py --delete
```
:::

You can uninstall CloudLinux Subsystem For Ubuntu by running the following commands:

```shell
# Install Python 3 if you don't have it
apt install python3
```

```shell
wget https://repo.cloudlinux.com/cloudlinux-ubuntu/sources/cln/ubuntu2cloudlinux.py
```

```shell
python3 ubuntu2cloudlinux.py --uninstall --skip-registration
```

The script requires one of the `--key`, `--byip` or `--skip-registration` options in every mode. The server is not registered during uninstallation.

```shell
reboot
```

The script will:

* Remove the CloudLinux OS components which are installed on your system, going over the following list: lve, kmodlve-dkms, lve-utils, lve-stats, lvemanager, cagefs, alt-python, alt-php, db-governor.
* Remove the `cloudlinux-release` package with the configs for CloudLinux repositories for Ubuntu, if all previous steps finished without errors. If a step fails, fix the error from the log and run the uninstallation again.
* Ask you to check for remaining packages from CloudLinux and manually reboot your system. Packages that the script does not remove by name can remain unless apt removes them as dependencies. These include mod_hostinglimits (`ea-apache24-mod-hostinglimits` or `mod-hostinglimits`), the cl-MySQL 8.0 packages installed by `mysqlgovernor.py --delete`, and the repository packages added during installation (`cloudlinux-ea4-release`, `alt-common-release` and `els-*-release`).
