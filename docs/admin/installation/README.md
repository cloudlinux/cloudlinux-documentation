# Installation

CloudLinux OS Admin installation process is the same as for CloudLinux Shared, please forward to [installation guide](/legacy/cloudlinux_installation) for detailed instructions. The only difference is to purchase a CloudLinux OS Admin license from [cln.cloudlinux.com](https://cln.cloudlinux.com).

:::tip Note
The CloudLinux OS Admin can be installed and compatible only with AlmaLinux OS 8+.
:::


## Switch license

You can convert your existing CloudLinux OS Solo installation to CloudLinux OS Admin.

1. Obtain new key from [CLN](https://cln.cloudlinux.com)
2. Run `rhnreg_ks --force --activationkey=<new_key>`

You can pass `--migrate-silently` argument to skip confirmation.
