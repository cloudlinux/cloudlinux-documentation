# alt/ea packages

[[toc]]


## What are alt/ea packages?

alt/ea packages are software packages or assemblies of software components developed and distributed by the CloudLinux software provider. 
These packages typically consist of a set of tools, libraries, and utilities that enhance or supplement the functionality of the operating system. 
"alt" and "ea" stand for "alternative" and "easyapache" respectively.

EA PHP versions are provided by EasyApache 4. These PHP versions are included in cPanel installation and can be managed by Multi PHP Manager.

### What are the main goals and purposes of alt/ea packages?

CloudLinux enables two different PHP Management Systems on cPanel systems, both our own MultiPHP Manager, as well as their own "Select PHP Version" Alternative Hardened PHP system.

CloudLinux additionally provides older, End-of-Life versions of ea-php with security patches applied beyond the support provided by cPanel on alternative operating systems.

As of this time, PHP Selector currently offers users the ability to install and use PHP 5.2+ and the options for these versions are managed via CloudLinux's LVE Manager plugin in WHM.

For more details regarding the PHP Selector, please refer to [CloudLinux's documentation](https://docs.cloudlinux.com/cloudlinuxos/cloudlinux_os_components/#general-information-and-requirements).

ea-php is the PHP versions that cPanel packages and provides via the EasyApache 4 repositories. These are the standard versions that are included in a base installation of cPanel and are managed via the MultiPHP Manager in both cPanel & WHM interface.

Older versions of ea-php are available on CloudLinux that are otherwise not available on CentOS/Ubuntu/AlmaLinux that have security patches provided by CloudLinux.

Extensions and different versions of ea-php are managed via the [EasyApache 4 interface](https://support.cpanel.net/hc/en-us/articles/360051163134-How-To-Install-a-PHP-Version-in-WHM) in the WHM and settings are managed via [MutliPHP Manager](https://support.cpanel.net/hc/en-us/articles/360052492693).


## Which operating systems are alt/ea packages designed for?

alt/ea packages are designed for Linux operating systems:
- CloudLinux (CentOS, AlmaLinux)
- Ubuntu
- Debian

### Which versions of CloudLinux support these packages?

ea-php: CloudLinux 6, 7, 8, 9 (CentOS 6, 7, 8; AlmaLinux 8, 9)

### Which versions of Ubuntu support these packages?

ea-php: no

### Which versions of Debian support these packages?

ea-php: no


## What are the main interpreters used for alt/ea packages?

- alt-ruby

- alt-nodejs

## alt-ruby

The information will be added later.

## alt-nodejs

The information will be added later.

## alt-python/ruby/nodejs End Of Life

CloudLinux provides additional security support time of 
php, python, ruby and nodejs after the end of support from the vendor.
Below are tables with information about the time of security support from the vendor and from CloudLinux.

*EOL - end of life

*SST - security support time

### alt-python EOL

| Version | Released | EOL by vendor | SST by vendor (years) | EOL by CloudLinux | SST by Cloudlinux after vendor's EOL (years) |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 2.7 |	29.09.2012 | 29.09.2017 | 5.0 |
| 3.3 | 29.09.2012 | 29.09.2017	| 5.0 |
| 3.4 | 15.03.2014 | 18.03.2019	| 5.0 |
| 3.5 | 12.09.2015 | 13.09.2020	| 5.0 |
| 3.6 | 22.12.2016 | 23.12.2021	| 5.0 |
| 3.7 | 26.06.2018 | 27.06.2023	| 5.0 |
| 3.8 | 14.10.2019 | 14.10.2024	| 5.0 |
| 3.9 | 05.10.2020 | 05.10.2025	| 5.0 |
| 3.10 | 05.04.2021	| 04.10.2026 | 5.4 |
| 3.11 | 24.10.2022 | 24.10.2027 | 5.0 |
| 3.12 | 02.10.2023	| 02.10.2028 | 5.0 |

### alt-ruby EOL

| Version | Released | EOL by vendor | SST by vendor (years) | EOL by CloudLinux | SST by Cloudlinux after vendor's EOL (years) |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 1.8 | 24.02.2013 | 24.02.2016 | 3.0 |
| 1.9 | 24.02.2013 | 24.02.2016 | 3.0 |
| 2.0 | 24.02.2013 | 24.02.2016 | 3.0 |
| 2.1 | 25.12.2013 | 31.03.2017 | 3.3 |
| 2.2 | 25.12.2014 | 31.03.2018	| 3.3 |
| 2.3 | 24.12.2015 | 31.03.2019	| 3.3 |
| 2.4 | 23.12.2016 | 31.03.2020	| 3.3 |
| 2.5 | 25.12.2017 | 31.03.2021	| 3.3 |
| 2.6 | 25.12.2018 | 31.03.2022	| 3.3 |
| 2.7 | 25.12.2019 | 31.03.2023	| 3.3 |
| 3.0 | 25.12.2020 | 31.03.2024	| 3.3 |
| 3.1 | 25.12.2021 | 31.03.2025	| 3.3 |
| 3.2 | 25.12.2022 | 31.03.2026	| 3.3 |

### alt-nodejs EOL

| Version | Released | EOL by vendor | SST by vendor (years) | EOL by CloudLinux | SST by Cloudlinux after vendor's EOL (years) |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 6	| 26.04.2016 | 30.04.2019 | 3.0 |
| 8	| 30.03.2017 | 31.12.2019 | 2.8 |
| 9	| 31.10.2017 | 30.06.2018 | 0.6 |
| 10 | 24.04.2018 | 30.04.2021 | 3.0 |
| 11 | 23.10.2018 | 30.06.2019 | 0.7 |
| 12 | 23.04.2019 | 30.04.2022 | 3.0 |
| 14 | 21.04.2020 | 30.04.2023 | 3.0 |
| 16 | 20.04.2021 | 11.09.2023 | 2.3 |
| 18 | 19.04.2022 | 30.04.2025 | 3.0 |
| 19 | 18.10.2022 | 01.06.2023 | 0.6 |
| 20 | 18.04.2023 | 30.04.2026 | 3.0 |