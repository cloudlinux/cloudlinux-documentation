# Uninstalling

## Deleting the CloudLinux Subsystem For Ubuntu

You can uninstall CloudLinux Subsystem For Ubuntu by running the following commands:

```shell
# Install Python 3 if you don't have it
apt install python3
```

```shell
wget https://repo.cloudlinux.com/cloudlinux-ubuntu/sources/cln/ubuntu2cloudlinux.py
```

```shell
python3 ubuntu2cloudlinux.py --uninstall
```

```shell
reboot
```

The script will:

* Remove the CloudLinux OS components which are installed on your system, going over the following list: lve, kmodlve-dkms, lve-utils, lve-stats, lvemanager, cagefs, alt-python, alt-php, db-governor.
* Remove configs for CloudLinux repositories for Ubuntu.
* Ask you to check for remaining packages from CloudLinux and manually reboot your system.
