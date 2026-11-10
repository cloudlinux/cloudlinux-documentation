# Installation

:::tip
For the current release, installation from the ISO images is not available.
:::

Run all commands on this page as `root`.

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

* Checks that you are running the latest available version of the `ubuntu2cloudlinux.py` script. If a newer version exists, asks whether to download and run it. Pass `--skip-version-check` to skip this check.
* Upgrades all installed packages to the latest versions (unless the `--skip-full-update` option is passed).
* Registers your system with the CloudLinux Network (CLN) using the provided key or IP address.
* Adds CloudLinux repositories for Ubuntu and a corresponding GPG key to your system. On cPanel servers with EasyApache 4, also adds the CloudLinux EA4 repository. Unless `--skip-registration` is passed, also adds the ALT-ELS repositories for PHP, Python, Node.js and Ruby from `repo.alt.tuxcare.com`.
* Installs a minimum set of CloudLinux OS components: lve, kernel module kmodlve-dkms, lve-utils, lve-stats, lve-wrappers, pam-lve, cloudlinux-linksafe, app-version-detector, alt-python27-cllib. When an OpenVZ environment is detected, also installs cloudlinux-container.
* Installs CloudLinux Manager (currently works with cPanel on Ubuntu).
* Installs the mod_hostinglimits Apache module: `ea-apache24-mod-hostinglimits` on cPanel, `mod-hostinglimits` otherwise. The `mod-hostinglimits` package also installs Apache (`apache2`) and conflicts with cPanel's Apache. If you plan to use cPanel, install it before you run the script.
* Asks you to manually reboot the system to load the new kernel module.

### Script options

Exactly one of `--key`, `--byip` or `--skip-registration` is required.

| Option | Description |
|--|--|
| `-k`, `--key <key>` | Register the server with an activation key |
| `-i`, `--byip` | Register the server by IP |
| `--skip-registration` | Do not register on CLN, for servers that already have access to the CloudLinux repositories. The ALT-ELS repositories are not set up |
| `--serverurl <url>` | Use a non-default registration server (default is `https://xmlrpc.cln.cloudlinux.com/XMLRPC`) |
| `--skip-version-check` | Do not check for script updates |
| `--skip-full-update` | Do not upgrade installed packages before the installation |
| `--force-new-configs` | During the package upgrade, replace modified configuration files with the package versions. By default, modified files are kept and the new versions are saved with the `.dpkg-dist` suffix |
| `--uninstall` | Uninstall the CloudLinux Subsystem For Ubuntu, see [Uninstalling](/ubuntu/uninstalling/). Pass it together with `--skip-registration`, because the script requires one of the registration options in this mode too |
