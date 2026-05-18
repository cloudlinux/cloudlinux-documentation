# Introduction to CloudLinux OS

* [CloudLinux OS editions](/introduction/cloudlinux-os-editions/)
    * [CloudLinux OS Solo](/introduction/solo/)
    * [CloudLinux OS Admin](/introduction/admin/)
    * [CloudLinux OS Shared (Pro)](/cloudlinuxos/shared-pro/)
* [CloudLinux OS components](/introduction/cloudlinux-os-editions/#cloudlinux-os-components)
* [CloudLinux OS life cycle](/introduction/cloudlinux-os-editions/#cloudlinux-os-life-cycle)

## CloudLinux OS editions

|**Features**|**CloudLinux OS Solo**|**CloudLinux OS Admin**| **CloudLinux OS Legacy (Shared)** |**CloudLinux OS Shared Pro**|
|:-:|:-:|:-:|:------------------------:|:-:|
|Maximum amount of hosting accounts|1|5|        unlimited         |unlimited|
|Resource Limits (LVE)|No*|**Yes****|         **Yes**          |**Yes**|
|Reseller Limits|No limits at all|No|         **Yes**          |**Yes**|
|Cage FS|**Yes**|**Yes**|         **Yes**          |**Yes**|
|MySQL Governor|No|No|         **Yes**          |**Yes**|
|PHP Selector|**Yes**|**Yes**|         **Yes**          |**Yes**|
|Python/Node.js Selectors|**Yes*****|**Yes*****|        **Yes*****        |**Yes*****|
|Ruby Selector|No|**Yes*****|        **Yes*****        |**Yes*****|
|HardenedPHP|**Yes**|**Yes**|         **Yes**          |**Yes**|
|Apache mod_lsapi PRO|**Yes**|**Yes**|         **Yes**          |**Yes**|
|SecureLinks|No|**Yes**|         **Yes**          |**Yes**|
|Website monitoring tool|**Yes**|**Yes**|         **Yes**          |**Yes**|
|Website monitoring alerts|**Yes**|**Yes**|         **Yes**          |**Yes**|
|Slow Site analyzer|**Yes**|**Yes**|         **Yes**          |**Yes**|
|PHP X-Ray|**Yes**|**Yes**|            No            |**Yes**|
|Centralized Monitoring|No|No|            No            |**Yes**|
|AccelerateWP|**Yes**|**Yes**|            No            |**Yes**|
|Support 24/7|**Yes**|**Yes**|         **Yes**          |**Yes**|

\* Only inodes limits are available.

\** LVE limits are disabled by default.

\*** Python/Node.js/Ruby Selectors are available only for cPanel, DirectAdmin servers, and servers with custom panel with own integration.

## CloudLinux OS components

**CloudLinux Manager**

LVE is a Lightweight Virtualized Environment.
CloudLinux Manager allows you to maintain fine-tuned control over your resources,
including CPU, IO rate, memory, inodes, numbers of processes, and concurrent connections,
that any single account can use. Now you can limit resource abuse, while allowing good customers to use what they need.

[See more](/cloudlinuxos/lve_manager/).

**CageFS**

CageFS is a virtualized, per-user file system that uniquely encapsulates each customer,
preventing users from seeing each other and viewing sensitive information. CageFS prevents a large number of attacks,
including most privilege escalation and information disclosure attacks. It is completely transparent to your customers,
without any need for them to change their scripts.

[See more](/cloudlinuxos/cloudlinux_os_components/#cagefs).

**MySQL Governor**

:::tip Note
This component is not available in the CloudLinux OS Admin edition.
:::

MySQL Governor tracks CPU and disk IO usage for every user in real time and throttles MySQL queries by using LVE limits.
By using the [dbtop](/command-line_tools/#dbtop) utility, it is possible to see the database usage on a per-customer basis, ensuring that the system administrator always knows what is going on.

[See more](/cloudlinuxos/cloudlinux_os_components/#mysql-governor).

**PHP Selector**

PHP Selector allows end users to select the specific version of PHP they need. It allows ultimate flexibility by offering all
popular versions of PHP, with more than 120 PHP extensions to choose from.

[See more](/cloudlinuxos/cloudlinux_os_components/#php-selector).

**Ruby Selector**

Ruby Selector allows end users to choose the Ruby version for applications and install additional modules
to the application environment. Ruby Selector uses `mod_passenger` to deliver optimal performance.

[See more](/cloudlinuxos/cloudlinux_os_components/#ruby-selector).

**Python Selector**

Python Selector allows end users to choose the Python version for applications and install additional modules.
Python Selector uses `mod_passenger` to get the best performance from Python applications.

[See more](/cloudlinuxos/cloudlinux_os_components/#python-selector).

**Node.js Selector**

Node.js Selector is a CloudLinux OS component that allows each user to easily create Node.js applications,
choose Node.js versions and other parameters for applications based on their needs.

[See more](/cloudlinuxos/cloudlinux_os_components/#node-js-selector).

**Apache mod_lsapi PRO**

Mod_lsapi PRO is the fastest PHP handler for Apache. It is a drop-in replacement for SuPHP, FCGID, RUID2, and ITK.
It has a low memory footprint and understands `.htaccess` PHP directives.

[See more](/cloudlinuxos/cloudlinux_os_components/#apache-mod-lsapi-pro).

**Reseller limits**

Reseller limits is a feature that allows hosters to set limits for the resources each Reseller can operate with.
The server admin also provides controls on what resources each end user will have. Reseller limits set by a hoster
limit the total amount of resources resellers’ end users can consume altogether.

When a hoster has set reseller limits for the particular reseller he provides the reseller with an ability to
set limits for his end users within the Reseller Interface.

[See more](/cloudlinuxos/cloudlinux_os_components/#reseller-limits).

**LVE-stats 2**

LVE-stats 2 collects LVE usage statistics (CPU, memory, disk space usage),
and allows to collect the usage data.

[See more](/cloudlinuxos/cloudlinux_os_components/#lve-stats-2).

## CloudLinux OS life cycle

CloudLinux OS follows the life cycle policy of RHEL.
Using a supported operating system is critical to maintaining a stable server environment.

Currently, the following versions are available and supported:

| |  | |
|-|--|-|
|Operating System (all editions) | Release Date| End of Life and Support|
|CloudLinux OS 6 | Feb 1, 2011 | Nov 30, 2020 ([ELS until June 30, 2024](/cln/billing/#cloudlinux-os-6-extended-lifecycle-support)) |
|CloudLinux OS 7 | Apr 1, 2015 | Jun 30, 2024 (ELS until June 30, 2027) |
|CloudLinux OS 8 | Mar 17, 2020 | May 31, 2029 |
|CloudLinux OS 9 | Jan 17, 2023 | May 31, 2032 |
|CloudLinux OS 10 | Oct 17, 2025 | May 31, 2035 |

:::tip
We retain the ability to produce critical updates for CL6 for at least the next 3 months. This period may extend to 6 or 12 months, depending on emerging necessities. More [here](https://blog.cloudlinux.com/end-of-life-announcement-for-cloudlinux-os-6).
:::
