# CloudLinux OS Solo Introduction 

## What is CloudLinux OS Solo

CloudLinux OS Solo is designed for installation on VPS or dedicated servers with a single hosting account for any number of websites.

Unlike [CloudLinux OS Legacy (Shared)](/introduction/), this edition is not designed for Shared Hosting usage and it does not include any [LVE-related](/cloudlinuxos/lve_manager/) features.

We provide the CloudLinux OS Solo with pre-installed features, but for grafical interface, please install a control panel on your server.

:::warning
Currently supported OS version is CloudLinux OS Solo 8+ only. Therefore, for now, there is no possibility to use CloudLinux OS Solo on servers with OS version 6 and 7.
Please refer to the [currently supported OS versions](/introduction/#cloudlinux-os-solo-lifecycle).
:::

### Benefits

We believe that this distribution will be useful for you if: 
1. as a site owner you have different performance issues with websites hosted. 
   CloudLinux OS Solo provides a set of tools for website monitoring and performance tracking out-of-box;
2. as a service provider you sell VPS servers and some of your customers require OS with extensive features 
   for better security, support, and performance.

In any case we provide you [24/7 professional support](https://cloudlinux.zendesk.com/)
to resolve any issues related to CloudLinux OS, its unique components and kernel.

### CloudLinux OS Solo Features
 
We've pre-installed a couple of useful features in our distribution. The complete list of supported features is available in the [table above](/solo/introduction/#cloudlinux-os-editions-comparison).

* **CloudLinux Manager**

  CloudLinux Manager is a plugin which allows you to control all the
  CloudLinux settings from an easy-to-use web UI integrated into your control panel. 
  
  The sub-modules you can find in CloudLinux Manager are Website Monitoring tool, PHP Slow Site analyzer, and X-Ray.

  [See more](/solo/manager/).

* **Website Monitoring tool**

  Website Monitoring tool is a tool that allows you to track your websites uptime 
  and receive notifications about problems with access.

  Website Monitoring tool can gather and display information regarding the slowest websites on the server, 
  notify by emails about errors happened on websites and send you daily website performance reports.

  [See more](/cloudlinuxos/lve_manager/#website-monitoring-tab).

* **PHP Slow Site analyzer**

  PHP Slow Site analyzer (SSA) is a tool that generates daily reports for the server administrator 
  with information about the top N slow PHP-based URLs for all domains.

  The Slow Site analyzer tracks all PHP-based requests and selects slow ones by specific rules.

  [See more](/cloudlinuxos/lve_manager/#php-slow-site-analyzer).

* **X-Ray**

  X-Ray is a tool developed for website performance monitoring and performance issues detection.

  X-Ray can gather and visualize information about top slowest system functions, external requests, 
  software modules and database queries of the client’s PHP website.

  [See more](/cloudlinuxos/shared-pro/#x-ray).

### How can I try your distribution before paying for it?

We provide trial licenses for 30 days. You can get your trial key in two ways:

1. On the CloudLinux OS Solo main page, see [CloudLinux OS Solo](https://lp.cloudlinux.com/cloudlinux-os-solo).
2. In the CloudLinux Manager plugin, see the [Getting trial key](/solo/manager/#activation) section.


The trial key must be entered during installation.

### CloudLinux OS Solo Lifecycle

CloudLinux OS Solo has the same life cycle policy as RHEL. 
Using a supported operating system is critical to maintaining a stable server environment.

Currently, the following version are supported:

|Operating System | Release Date| End of Life and Support|
|-|--|-|
|CloudLinux OS Solo 8 | Jun 1, 2021 | May 31, 2029 |

### What's next

1. The [Installation](/cloudlinuxos/cloudlinux_installation/) section contains information about how to install this OS.
2. The [landing page](https://lp.cloudlinux.com/cloudlinux-os-solo) contains the instructions about how to buy license or get trial. 

## Licensing

### Getting license

You will need a trial or payed activation key to be able to use your CloudLinux OS Solo server. 
Please [refer to this page](https://lp.cloudlinux.com/cloudlinux-os-solo) to find information on how to get activation key.

The activation key looks like: `CLSOLO-d34463a182fede4f4d7e140f1841bcf2`

Use it to [activate your system](/solo/activation/#license-activation) 
or to [convert server to CloudLinux](/solo/installation/#converting-existing-servers) server.

:::warning
The CloudLinux OS Solo activation key is used ONLY for registration CloudLinux OS Solo 8.
Trying use it for registration CloudLinux OS Legacy (Shared) 6/7/8 or converting from CentOS 6/7/ 8 to CloudLinux OS Legacy 6/7/8 cause errors.
:::

:::tip Note
Activation gives you access to the [CloudLinux Manager](/solo/manager/#cloudLinux_manager) features and system updates. 
:::

### License activation

There are several ways to register your server with CloudLinux Network:

using the activation key by following commands:

```
yum install rhn-setup --enablerepo=cloudlinux-base
/usr/sbin/rhnreg_ks --activationkey=<activation key>
```

using IP-based licensing:

```
yum install rhn-setup --enablerepo=cloudlinux-base
/usr/sbin/clnreg_ks
``` 

## FAQ

[[toc]]

### What is the difference between CloudLinux Solo and CloudLinux OS Legacy (Shared)?

CloudLinux OS Solo is not designed for shared hosting usage and it does not include any [LVE-related](/cloudlinuxos/lve_manager/) features. 

CloudLinux OS Solo provides a set of tools for website monitoring and performance tracking out-of-box. [Read more](/solo/manager/).

### Can I convert CloudLinux Solo to CloudLinux Legacy?

Yes, you can follow the [instruction](/cloudlinuxos/cloudlinux_installation/#switch-license).

### Is the CloudLinux OS Solo paid/unpaid?

You should purchase a license to use CloudLinux OS Solo.

### Where can I get the latest ISO of CloudLinux OS Solo?

You can download the latest ISO and use it to install CloudLinux OS Solo on your server using [this link](https://repo.cloudlinux.com/cloudlinux/8/iso/x86_64/).

### How can I get the CloudLinux OS Solo trial license?

Please refer to [this page](https://cloudlinux.com/trial) to find information on how to get the trial license and the activation key.

### How many servers can I use with the trial license?

The number of servers is unlimited.

### What control panel can be used with CloudLinux OS Solo?

For the current implementation, we recommend using cPanel Solo, Plesk, DirectAdmin or Webuzo.

### How can I get support for my CloudLinux OS Solo servers?

Please feel free to ask your questions [here](https://cloudlinux.zendesk.com/hc/en-us/).

### Can I convert to CloudLinux OS Solo from another OS?

You can convert CentOS/AlmaLinux OS to CloudLinux OS Solo. Please refer to [this instruction](/solo/installation/#converting-existing-servers).

### What is the Website Monitoring tool intended for?

The Website Monitoring tool is intended for monitoring the domain main page generation time and errors occurring when requesting the main page (the main tab).

* The administrator can get the list of the slowest requests during 24 hours (the PHP Slow Site analyzer tab).
* The administrator can receive the daily reports with the list of the slow requests.
* The administrator receives instant emails if the domain main page is unavailable.

You can read more about the Website Monitoring tool [here](/cloudlinuxos/lve_manager/#website-monitoring-tab).

### What is the X-Ray tool intended for?

The X-ray tool is intended for deep analysis of slow request cause. The X-ray tool can provide information about software modules and plugins execution time, database queries, system functions and external requests execution time.

It can be used by the administrator and by the user.

You can read more about the X-Ray tool [here](/solo/manager/#x-ray).

### Will the Website Monitoring Tool (WMT) work with the LiteSpeed and Nginx web servers?

Yes, they will.

### Why I don't receive emails from the Website Monitoring tool?

Please verify your cPanel firewall settings.

### Can I use other CloudLinux products (Imunify360, KernelCare) with CloudLinux OS Solo?

Yes, it is possible.

### Can I register my CloudLinux OS Legacy (Shared) 6/7/8 with CloudLinux OS Solo trial key?

No, you cannot.

### Can I convert CentOS 6,7 to CloudLinux OS Solo 8+ using the cldeploy script?

No, you cannot. Only CentOS 8/AlmaLinux 8+ can be converted.

### Does CloudLinux OS Solo work with LiteSpeed?

**CloudLinux OS Solo is not officially supported or tested with LiteSpeed at this time.** While it may work in some cases, we do not guarantee compatibility and cannot provide official support for this configuration. Use of CloudLinux OS Solo with LiteSpeed is at your own discretion and may result in unexpected behavior or limitations.

### What is the process of upgrading if the customer adds more users to the server and will have to upgrade? (i.e., upgrading from CloudLinux OS Solo to CloudLinux OS Legacy (Shared))

Follow the edition switching [procedure](/cloudlinuxos/cloudlinux_installation/#switch-license).

### How to set up PHP-fpm handler for the domain?

Since the PHP-fpm handler is required to use AccelerateWP, you may need to configure it manually.

These are configuration steps:

1. Ensure the PHP-fpm package for the current PHP version is installed or install it.

    * **Manual installation**
    
    Run the following command:
    ```
    yum -y install ea-phpXY-php-fpm
    ```
    Where `XY` - is required PHP version, for instance `ea-php74-php-fpm`

    * **Via MultiPHP Manager**

    ![MultiPHP Manager (new), User Domain Settings: other.wposuser.com, PHP 7.4 (ea-php74), PHP-FPM enabled, PHP-FPM SETTINGS button](/images/solo/faq/InstallationViaMultiPHPManager.webp)


2. Enable PHP-fpm handler for domain via MultiPHP Manager

![MultiPHP Manager (new), User Domain Settings: other.wposuser.com, PHP 7.4 (ea-php74), PHP-FPM enabled, PHP-FPM SETTINGS button](/images/solo/faq/EnablePHPFpm.webp)

