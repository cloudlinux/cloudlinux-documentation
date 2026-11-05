# CloudLinux OS Admin Introduction

## Description

CloudLinux OS Admin is designed for shared hosting providers who want to flawlessly migrate their 
big shared hosting customer to individual VPS with same CloudLinux features as on Shared hosting. 
At the same time you will be able to separate such a user's websites if necessary and isolate them 
with CageFS for efficient and extra security.
Also it may be suitable for a little server with up to 5 customers on it.

Most of the features of CloudLinux OS Legacy (Shared) are available in this edition, with a small differences:

- lve limits are set to unlimited by default (can be changed in CloudLinux Manager at any time)
- MySQL Governor is not available in this edition
- the license itself does not allow more than 5 users to be hosted on server.

:::tip Note
The CloudLinux OS Admin plan does not include the MySQL Governor
:::

## Components

CloudLinux OS Admin is very close to the regular CloudLinux Legacy (Shared) edition, which means that 
99% of components described in this documentations are available for CloudLinux OS Admin.

The exclusions are:

 - [MySQL Governor](/cloudlinuxos/cloudlinux_os_components/#mysql-governor) is not available
 - [Reseller limits](/cloudlinuxos/limits/#reseller-limits) are not available
 - [X-Ray](/cloudlinuxos/shared-pro/#x-ray) is available like with CloudLinux Shared Pro
 - [Accelerate WP](/cloudlinuxos/shared-pro/#acceleratewp) is available like with CloudLinux Shared Pro

The rest of the components are similar to CloudLinux OS Legacy (Shared).  

## Licensing 

### Installation process

CloudLinux OS Admin installation process is the same as for other editions – use the [installation guide](/cloudlinuxos/cloudlinux_installation) for detailed instructions. The only difference is to purchase a CloudLinux OS Admin license from [cln.cloudlinux.com](https://cln.cloudlinux.com).

:::tip Note
The CloudLinux OS Admin can be installed and compatible only with AlmaLinux OS 8+.
:::

### Switch license

You can convert your existing CloudLinux OS Solo installation to CloudLinux OS Admin.

1. Obtain new key from [CLN](https://cln.cloudlinux.com)
2. Run `rhnreg_ks --force --activationkey=<new_key>`

:::warning
Before you switch, make sure the server has no more than 5 hosting accounts: the license does not allow more. Registration warns that services the new edition does not support may be lost, and asks you to confirm.

If a server goes over the account limit of its edition, CloudLinux Manager shows an error page for the administrator and CloudLinux plugins become unavailable to users until you remove the extra accounts or upgrade the license.

When you switch from another edition, the switch removes the `governor-mysql` package if it is installed; the database server packages stay installed. Default LVE limits are set to unlimited; in containers, LVE services are disabled instead.

When you switch to CloudLinux OS Solo instead, the limit is 1 hosting account, the `mod_hostinglimits` and `governor-mysql` packages are removed, and LVE services are disabled.
:::

You can pass `--migrate-silently` argument to skip confirmation.

## FAQ

**Q**: *Is it possible to convert my existing CloudLinux OS Legacy (Shared) server into CloudLinux OS Admin?*<br>
**A**: Yes, for CloudLinux 8 and higher it is possible to convert CloudLinux OS Legacy (Shared) to any other edition like CloudLinux OS Admin, Solo, Shared Pro. For CloudLinux 7 it is only possible to convert it into Shared Pro.

**Q**: *Is Centralized Monitoring supported on CloudLinux OS Admin?*<br>
**A**: No, Centralized Monitoring only works with CloudLinux OS Shared Pro license.