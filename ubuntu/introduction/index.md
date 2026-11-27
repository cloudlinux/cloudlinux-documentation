# Introduction

:::warning Disclaimer
* All mentioned in this documentation trademarks, logos, and copyrights are property of their respective owners and are only mentioned for informative purposes.
* [Ubuntu](https://ubuntu.com/) is a registered trademark of Canonical Ltd.
:::

CloudLinux subsystem on Ubuntu is a scope of deb-packages which allows using CloudLinux features on Ubuntu OS. It is a Stable version of a free extension designed exclusively for Ubuntu® 22.04 LTS users.

## Supported version of Ubuntu

We support Ubuntu 22.04 LTS.

## CloudLinux OS editions comparison

CloudLinux Subsystem for Ubuntu supports the same editions as CloudLinux OS, with some exceptions.

In the table below, a feature marked with "No" for the CloudLinux Subsystem for Ubuntu means that no edition of CloudLinux Subsystem for Ubuntu supports this feature.

|**Features**|**CloudLinux OS Solo**|**CloudLinux OS Admin**|**CloudLinux OS Legacy (Shared)**|**CloudLinux OS Shared Pro**|**<font color="#2c98f0">CloudLinux Subsystem For Ubuntu</font>**|
|:-:|:-:|:-:|:-:|:-:|:-:|
|Maximum amount of hosting accounts|1|5|unlimited|unlimited|**<font color="#2c98f0">unlimited</font>**|
|Resource Limits (LVE)|No*|**Yes****|**Yes**|**Yes**|**<font color="#2c98f0">Yes</font>**|
|Cage FS|**Yes**|**Yes**|**Yes**|**Yes**|**<font color="#2c98f0">Yes</font>**|
|MySQL Governor|No|No|**Yes**|**Yes**|**<font color="#2c98f0">Yes</font>**|
|PHP Selector|**Yes**|**Yes**|**Yes**|**Yes**|**<font color="#2c98f0">Yes</font>**|
|Python/Node.js Selectors|**Yes*****|**Yes*****|**Yes*****|**Yes*****|**<font color="#2c98f0">No</font>**|
|Ruby Selector|No|**Yes*****|**Yes*****|**Yes*****|**<font color="#2c98f0">No</font>**|
|HardenedPHP|**Yes**|**Yes**|**Yes**|**Yes**|**<font color="#2c98f0">Yes</font>**|
|Apache mod_lsapi PRO|**Yes**|**Yes**|**Yes**|**Yes**|**<font color="#2c98f0">Yes</font>**|
|SecureLinks|No|**Yes**|**Yes**|**Yes**|**<font color="#2c98f0">Yes</font>**|
|Website monitoring tool|**Yes**|**Yes**|**Yes**|**Yes**|**<font color="#2c98f0">Yes</font>**|
|Website monitoring alerts|**Yes**|**Yes**|**Yes**|**Yes**|**<font color="#2c98f0">Yes</font>**|
|Slow Site analyzer|**Yes**|**Yes**|**Yes**|**Yes**|**<font color="#2c98f0">Yes</font>**|
|PHP X-Ray|**Yes**|**Yes**|No|**Yes**|**<font color="#2c98f0">Yes</font>**|
|Centralized Monitoring|No|No|No|**Yes**|**<font color="#2c98f0">Yes</font>**|
|AccelerateWP|**Yes**|**Yes**|No|**Yes**|**<font color="#2c98f0">Yes</font>**|
|Support 24/7|**Yes**|**Yes**|**Yes**|**Yes**|**<font color="#2c98f0">Yes</font>**|

\* Only inodes limits are available.

\** Limits are disabled by default.

\*** Python/Node.js/Ruby Selectors are available only for cPanel, DirectAdmin, and servers with custom panels with own integration.

## Supported control panels

| **Panel** | **Supported** |
|:-:|:-:|
|[cPanel from v.102](https://blog.cpanel.com/ubuntu-lts-and-full-cpanel-support/) | Yes |
|Plesk| No |
|DirectAdmin| No |
|Other panels| Yes |
|No control panel| Yes |
