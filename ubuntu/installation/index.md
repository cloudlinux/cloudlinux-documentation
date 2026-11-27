# Installation

:::tip
For the current release, installation from the ISO images is not available.
:::

To install the CloudLinux Subsystem on an Ubuntu machine:

1. Make sure you have Python 3 installed on your system. If not, install it using the following command:

```shell
apt install python3
```

2. Download the `ubuntu2cloudlinux.py` script:

```shell
wget https://repo.cloudlinux.com/cloudlinux-ubuntu/sources/cln/ubuntu2cloudlinux.py
```

3. Run the script. Provide a key if your license is key-based:

```shell
python3 ubuntu2cloudlinux.py --key=your_key
```

If you have an IP-based license, pass the `--byip` option instead:

```shell
python3 ubuntu2cloudlinux.py --byip
```

The script will install the CloudLinux Subsystem on your Ubuntu machine. After the installation is complete, reboot your system.

## Ubuntu2Cloudlinux explained

The `ubuntu2cloudlinux.py` script installs the CloudLinux Subsystem For Ubuntu.
It is a simpler script compared to the CLdeploy script for CentOS and AlmaLinux. For example, it doesn't replace the Linux kernel, only adds a dynamic module to it.
Here is a list of actions that the `ubuntu2cloudlinux` script performs:

* Checks that you are running the latest available version of the `ubuntu2cloudlinux.py script`, and updates itself if necessary.
* Upgrades all installed packages to the latest versions (unless the `--skip-full-update` option is passed).
* Registers your system with the CloudLinux Network (CLN) using the provided key or IP address.
* Adds CloudLinux repositories for Ubuntu and a corresponding GPG key to your system.
* Installs a minimum set of CloudLinux OS components: lve, kernel module kmodlve-dkms, lve-utils, lve-stats, alt-python.
* Installs CloudLinux Manager (currently works with cPanel on Ubuntu).
* Installs the mod_hostinglimits Apache module.
* Asks you to manually reboot the system to load the new kernel module.
