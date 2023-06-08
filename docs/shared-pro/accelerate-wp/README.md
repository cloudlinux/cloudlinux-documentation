
# AccelerateWP

## Get started

AccelerateWP carries a suite of optimization features that can be enabled and automatically configured for the end-user's site.

There are AccelerateWP, AccelerateWP Premium and AccelerateWP CDN features suites.

AccelerateWP suite is always enabled when AccelerateWP is turned on. Choose whether you want to offer AccelerateWP Premium 
 or Content Network Delivery CDN for your users (by opting in) and click "Turn on" to start exploring AccelerateWP. 

![](./images/AWPGettingStarted.png)

Once the AccelerateWP suite is enabled by administrator,
end-users will see an AccelerateWP tab in their control panel interface and be able to activate the optimization feature.

When AccelerateWP CDN suite enabled by administrator, end-users will get 1 GB of CDN traffic and be able to activate
feature to use until limit is reached. Once 1GB limit is reached - end-user will be suggested to extend CDN limit by
purchasing CDN plan using [WHMCS or 3'd party billing](#billing-integration) 

When AccelerateWP Premium suite enabled by administrator, 
end-users will see the Object Caching, Image Optimization and Critical CSS features in their interface, 
but cannot activate the feature unless they purchase the feature using [WHMCS or 3'd party billing](#billing-integration).


#### AccelerateWP suite
This is a basic suite which includes [AccelerateWP base feature](https://user-docs.cloudlinux.com/wpos-plugin/#acceleratewp-feature-wordpress-optimization-plugin): 
a WordPress optimization plugin that provides full page caching, GZIP compression and some other useful optimizations.

**AccelerateWP suite limitations**
* the website must be served with Apache web server;
* the website must use PHP version 7.2 or higher.
* the WordPress version must be 5.6 and higher.
* the other WordPress Caching plugins must not be installed.
* the WordPress should not run in Multisite mode.

#### AccelerateWP Premium suite

This is a premium suite which includes [Object Caching feature](https://user-docs.cloudlinux.com/wpos-plugin/#acceleratewp-premium-object-caching-feature).

The Object Caching mechanism stores database query results in additional storage for quick access. 
This mechanism is really helpful in case if website needs to process multiple pages per second as 
requests come in and may be helpful in case when full page caching cannot be used, e.g. on personalized pages.

[Image Optimization feature](https://user-docs.cloudlinux.com/wpos-plugin/#image-optimization)

[Critical CSS feature](https://user-docs.cloudlinux.com/wpos-plugin/#css-files)

**Premium suite limitations**

* the website must be served with Apache web server;
* the website must use one of the following PHP handlers:
  * [php-fpm](https://blog.cpanel.com/how-to-use-php-fpm-with-cpanel/)
  * [lsapi](/cloudlinux_os_components/#apache-mod-lsapi-pro)
* the website must use ea-PHP version 7.4 or 8.0.
* the WordPress version must be 3.7 and higher.
* the other WordPress Caching plugins must not be installed.
* the [Snuffleupagus](https://snuffleupagus.readthedocs.io/) must be turned off.
* the WordPress should not run in Multisite mode.


#### AccelerateWP Premium CDN suite

This suite includes [CDN feature](https://user-docs.cloudlinux.com/wpos-plugin/#cdn)

CDN (Content Delivery Network) is the feature which speeds up resource loading for WordPress site customers.
[CDN suite limitations](#acceleratewp-suite) are the same as for AccelerateWP feature.


## Administrator interface

#### Overview
In the _CloudLinux Manager → AccelerateWP_ tab an administrator has the opportunity to provide end-users with a suite of features, which on its turn could be activated by end-users.

![](./images/AWPAdmin.png)

Once the feature suite is enabled by administrator, end-users will see an AccelerateWP tab in their control panel interface and be able to activate the optimization feature.

### Suites usage statistics
When AccelerateWP is enabled, the AccelerateWP usage statistics is shown.

![](./images/AWPStats.png)

It includes:
* `Active Users` block with total number of users and number of users who has activated the optimization feature/total users
* `Wordpress sites on server` block with total number of WordPress sites and WordPress sites optimized by the feature
* statistics table

Each row in the statistics table represents a particular user.

The first column `#of Wordpress sites` shows total number of user's WordPress sites.

The second column `AccelerateWP` shows number of user's WordPress sites, optimized by the feature.

To enable premium features, click on the "Activate premium features" link and select the options you want. To integrate functions with billing, you must specify the base URL for the purchase of the function by end users.

![](./images/AWPPremiumManage.png)

In case if both AccelerateWP and AccelerateWP Premium feature suites are enabled, 
the statistics is extended with AccelerateWP Premium metrics.

![](./images/AWPStatsPremium.png)

Please notice the `AccelerateWP Premium` rows in the `Active Users` and the `Wordpress sites on server` 
blocks, and also the `AccelerateWP Premium` column in statistics table.

:::tip Note
Newly created users will be accounted for 10 min after adding. 
If you want to get updated statistics immediately, use the "Rescan users websites" button.
:::

### Filters
You may use the following filters to browse AccelerateWP statistics slices.

![](./images/AWPFilters.png)

* `Users with WordPress sites only` filter will show statistics for users which already have WordPress sites; users without WordPress installations will be hidden
* `Users with AccelerateWP only` filter will show statistics for users who utilizes the AccelerateWP optimization feature; users who did not activated AccelerateWP feature will be hidden
* `Users with AccelerateWP Premium only` filter will show statistics for users who utilizes AccelerateWP Premium (Object Caching) feature; users who did not activated AccelerateWP Premium feature will be hidden
* `Users with CDN Free only` filter will show statistics for users who utilizes AccelerateWP CDN feature
* `Users with CDN Pro only` filter will show statistics for users who utilize AccelerateWP CDN Pro feature


## Activate free AccelerateWP for all WordPress sites on the server
Use the `cloudlinux-awp-admin enable-feature` CLI command to
ensure the best performance for every end-user. CLI command
scans a server for all WordPress sites and activates the AccelerateWP
feature suite. It can take up to 2 minutes for a single site. CLI command skips activation for WordPress sites with
page caching or feature incompatibilities.

:::tip Note
Please make sure your AccelerateWP version is >= 1.2-2 before proceed.
:::

Scan the server in background mode and activate AccelerateWP
on those WordPress sites where it is possible:
```
cloudlinux-awp-admin enable-feature --all
```
The output will state the number of users for the scan and the
progress state of the process.

Check activation status:
```
cloudlinux-awp-admin enable-feature --status
```
The output will be either:
* Activation is still in progress,
* Activation is done. The message will state how many users
were initially for the scan, a number of WordPress sites with
successfully activated suite, and the total number of WordPress sites
scanned.

### Enable AccelerateWP CDN Pro

To enable CDN Pro for all users:
```
cloudlinux-awp-admin set-suite --suites accelerate_wp_cdn_pro --users all --allowed-for-all
```

To enable CDN Pro for a particular user:
```
cloudlinux-awp-admin set-suite --suites accelerate_wp_cdn_pro --allowed --users=<username>
```

## Disable AccelerateWP for a particular user
Use CLI commands to disable undesired optimization suites for a single user.

To disable AccelerateWP suite:
```
cloudlinux-awp-admin set-suite --suites=accelerate_wp --disallowed --users=<username>
```

To disable AccelerateWP Premium suite:
```
cloudlinux-awp-admin set-suite --suites=accelerate_wp_premium --disallowed --users=<username>
```

To disable AccelerateWP CDN suite:
```
cloudlinux-awp-admin set-suite --suite=accelerate_wp_cdn --disallowed --users=<username>
```

To disable AccelerateWP CDN Pro suite:
```
cloudlinux-awp-admin set-suite --suite=accelerate_wp_cdn_pro --disallowed --users=<username>
```

To disable all suites:
```
cloudlinux-awp-admin set-suite --suites=accelerate_wp,accelerate_wp_premium,accelerate_wp_cdn,accelerate_wp_cdn_pro --disallowed --users=<username>
```

## Useful AccelerateWP CLI commands
Use CLI commands to check AccelerateWP features status.

If you are also interested in Smart Advice CLI command, they could be found [here](./#useful-smart-advice-cli-commands).

:::warning Warning!
This is an experimental feature. The backwards compatibility is not guaranteed.
:::


### AccelerateWP suites statistics

Get suites statistics for all users:
```
cloudlinux-awp-admin get-report --all
```

or for a particular user:
```
cloudlinux-awp-admin get-report --users=<username>
```

This CLI command returns the following information:
* total number of users in the report -- `total_users_count`
* total number of websites in the report -- `total_wordpress_count`
* total number of users with particular suite enabled -- `total_users_count_active`
* total number of websites with particular suite enabled -- `total_sites_count_active`
* number of websites with particular suite enabled per each user in the report -- `*_sites_count` in the `users` list
* suites visibility status per each user in the report -- `suites` in the `users` list
  * possible values for visibility status are: `visible`, `allowed`, `disabled`

The example output for a single user is given below:

```
{
    "last_scan_time": 1681198804,
    "result": "success",
    "timestamp": 1681203383.3503218,
    "total_sites_count_active": {
        "accelerate_wp": 1,
        "accelerate_wp_premium": 0
    },
    "total_users_count": 1,
    "total_users_count_active": {
        "accelerate_wp": 1,
        "accelerate_wp_premium": 0
    },
    "total_wordpress_count": 2,
    "users": [
        {
            "accelerate_wp_active_sites_count": 1,
            "accelerate_wp_premium_sites_count": 0,
            "suites": {
                "accelerate_wp": {
                    "source": "manual",
                    "status": "allowed"
                },
                "accelerate_wp_premium": {
                    "source": "default",
                    "status": "visible"
                }
            },
            "username": "user16",
            "wp_sites_count": 2
        }
    ]
}
```

### AccelerateWP features statistics

Get overall AccelerateWP features usage statistics for a server with:

```
cloudlinux-awp-admin get-stat
```

This CLI command returns the following information:
* number of `allowed_users` in `total` and per feature
* number of sites with enabled features in `total` and per feature -- `enabled_sites`
* number of users with visible features in `total` and per feature -- `visible_users`
* features which are currently allowed -- `features_allowed_by_default`
* features which are currently visible -- `features_visible_by_default`

The example output is given below:

```
{
    "allowed_users": {
        "object_cache": 0,
        "site_optimization": 1,
        "total": 1
    },
    "enabled_sites": {
        "object_cache": 0,
        "site_optimization": 1,
        "total": 1
    },
    "features_allowed_by_default": [
        "site_optimization"
    ],
    "features_visible_by_default": [
        "object_cache",
        "site_optimization"
    ],
    "is_accelerate_wp_flag_enabled": false,
    "is_accelerate_wp_icon_enabled": true,
    "result": "success",
    "timestamp": 1681208259.19426,
    "visible_users": {
        "object_cache": 22,
        "site_optimization": 22,
        "total": 23
    }
}
```

### AccelerateWP features detailed statistics

AccelerateWP features detailed statistics is available in user's environment only.

Use the following CLI command **_on behalf of a user_**:

```
cloudlinux-awp-user get
```

The command reports:
* features allowed for a user -- `allowed_features`
* all user's websites `docroots` with features information per each `wps`, which includes:
  * status of each feature -- if the feature is `enabled`, if the feature is `visible`
  * issues detected (if any) for each feature
* subscription status (for premium features) -- `subscription`
* features visible for a user -- `visible_features`

The example output is given below:

```
{
    "allowed_features": {
        "accelerate_wp": [],
        "accelerate_wp_premium": []
    },
    "docroots": [
        {
            "domains": [
                "user0.com"
            ],
            "php_handler": "fastcgi",
            "php_version": "plesk-php73-fastcgi",
            "wps": [
                {
                    "features": {
                        "accelerate_wp": {
                            "enabled": false,
                            "issues": [
                                {
                                    "context": {
                                        "plugins": "WP Rocket"
                                    },
                                    "description": "Found conflicting plugins: %(plugins)s.",
                                    "fix_tip": "Deactivate and uninstall the conflicting plugin using the WordPress administration interface.",
                                    "header": "Conflicting plugins are enabled",
                                    "type": "incompatibility"
                                }
                            ],
                            "visible": true
                        },
                        "object_cache": {
                            "enabled": false,
                            "issues": [
                                {
                                    "context": {
                                        "blog_url": "https://blog.cloudlinux.com/",
                                        "supported_handlers": "php-fpm, lsapi"
                                    },
                                    "description": "Website uses unsupported PHP handler. Currently supported handler(s): %(supported_handlers)s.",
                                    "fix_tip": "Please, set or ask your system administrator to set one of the supported PHP handlers for the domain: %(supported_handlers)s. Or keep watching our blog: %(blog_url)s for supported handlers list updates.",
                                    "header": "Unsupported PHP handler",
                                    "type": "incompatibility"
                                }
                            ],
                            "visible": true
                        }
                    },
                    "path": "wordpress",
                    "version": "6.2"
                }
            ]
        },
        {
            "domains": [
                "sub.user0.com"
            ],
            "php_handler": "fastcgi",
            "php_version": "plesk-php73-fastcgi",
            "wps": []
        }
    ],
    "max_cache_memory": "64mb",
    "result": "success",
    "subscription": {
        "object_cache": "no"
    },
    "timestamp": 1681200081.765476,
    "upgrade_url": null,
    "used_memory": null,
    "visible_features": {
        "accelerate_wp": [
            "accelerate_wp"
        ],
        "accelerate_wp_premium": [
            "object_cache"
        ]
    }
}
```

## WHMCS billing

CloudLinux developed it's own WHMCS plugin 
which provides you AccelerateWP billing integration out of the box. 
Check out [the documentation](/cln/whmcs_awp_plugin/#cloudlinux-whmcs-awp-plugin) to find how to install and use the plugin.

## Other billing integration

As AccelerateWP Premium is the feature that works on subscription basis, 
we made it possible for hosters to integrate their existing billing systems with our plugin and sell the 
feature for their users.

When AccelerateWP Premium is enabled in admin interface, users get proposal to upgrade their subscription.

![](./images/AWPUpgradeNoLink.png)

When user upgrades the subscription to the plan with AccelerateWP support, 
billing must execute the following command on the server:
```
cloudlinux-awp-admin set-suite --suites=accelerate_wp_premium --allowed --source=BILLING_OVERRIDE --users=<username>
```

This command makes two things:
- allow user to install plugin, bypassing the upgrade window;
- reports premium as being used to CLN, starting the billing cycle for hoster.


When user terminates or downgrades plan, the following command must be executed by the billing system:
```
cloudlinux-awp-admin set-suite --suites=accelerate_wp_premium --default --source=BILLING_OVERRIDE --users=<username>
```

## Setup upgrade URL for AccelerateWP Premium

The upgrade window can be customized with link to the plan upgrade page, which can be set using CLI command:

```
cloudlinux-awp-admin set-options --upgrade-url https://plan.upgrade/splash
```

![](./images/AWPUpgradeLink.png)

AccelerateWP automatically appends GET parameters when the link is displayed.

```
https://plan.upgrade/splash/?m=acceleratewp&action=provisioning&username=democom&domain=demo.com&server_ip=10.51.0.10
```

| Parameter | Value        | Description                                              |
|-----------|--------------|----------------------------------------------------------|
| m         | acceleratewp | Constant.                                                |
| action    | provisioning | Constant.                                                |
| username  | democom      | Customer's account name.                                 |
| domain    | demo.com     | Customer's account primary domain.                       |
| server_ip | 10.51.0.10   | Primary IP of the server where AccelerateWP is installed |

Parameters can be used to determine the billing account of the user in order to display proper page. 
WHMCS plugin already has automatic redirect to upgrade page, there is only needed to set upgrade-url 
to the root of your WHMCS instance.

```
cloudlinux-awp-admin set-options --upgrade-url https://whmcs.mydomain.zone/
```

Upgrade URL is opened in modal browser window and will be automatically closed
when AccelerateWP receives callback about successful upgrade.

Callback is already implemented in WHMCS plugin, but if you are using some other billing,
you should add the following code on the page which appears when user successfully upgrades subscription.

    <script>
    if(window.opener && !window.opener.closed) {
        window.opener.postMessage('PAYMENT_SUCCESS', '*');
    }
    </script>


In order to remove the link, just set upgrade url to the empty one.

```
cloudlinux-awp-admin set-options --upgrade-url ''
```

## Disable AccelerateWP Premium

If you would like to stop using AccelerateWP Premium, 
click on the `manage` link and remove `Premium Features` checkbox.
AccelerateWP will be still available for your users.

![](./images/AWPDisablePremiumOnly.png)

## Disable AccelerateWP

If you would like to stop using AccelerateWP completely, toggle the `AccelerateWP` back.
Both AccelerateWP and AccelerateWP Premium will be turned off.

![](./images/AWPDisable.png)

This operation will:
* disable AccelerateWP tab in users' control panel interface
* disable all AccelerateWP optimization suites
* deactivate all optimization features for all users

This operation will NOT:
* cancel the subscription made by user in WHMCS or other billing. User's subscription stays 
  alive and user will still be charged in billing system unless hoster manually makes a refund


## Logs
The main AccelerateWP log is located at
* `/var/log/clwpos/main.log`


In case if AccelerateWP Premium is active, the auxiliary monitoring daemon `clwpos_monitoring` is also activated. Its log is located at
* `/var/log/clwpos/daemon.log`


## FAQ

### With which panel can I use AccelerateWP?

Currently AccelerateWP is compatible with cPanel and Plesk only.

If you are interested in supporting DirectAdmin control panel, please record your demand on our feature portal respectively:
* [AccelerateWP for DirectAdmin](https://features.cloudlinux.com/c/15-acceleratewp-for-directadmin?utm_medium=social&utm_source=portal_share)


### Is it possible to use AccelerateWP on a non-control panel server?

No, AccelerateWP is compatible with cPanel and Plesk only.

### Do you plan to enable support of Nginx server?

This is a part of our very long term plans, thus not expected in the nearest future.

### How will it help my customers?

AccelerateWP is a complex solution to help your customers increase their WordPress site performance. AccelerateWP brings number of optimization features, like object caching, css and js preprocessing and website preloading.

### How could I monitor Redis instances while using AccelerateWP Premium suite?

Redis process is started for a user after activating AccelerateWP Premium Object Caching feature for at least one Wordpress site.
It is killed after AccelerateWP Premium Object Caching has been deactivated for all user's websites.

Look through the processes list to check Redis status for a particular user:
```
 $ ps aux | grep redis
 awpuser  2662517  0.0  0.5 101096  8512 ?        Sl   15:33   0:00 /opt/alt/redis/bin/redis-server unixsocket:/home/awpuser/.clwpos/redis.sock
```
In case if AccelerateWP Premium is active, the auxiliary monitoring daemon `clwpos_monitoring` is also activated. It checks Redis instances each 5 minutes, starts new instances, restart failed ones and kills the “garbage” instances if needed.
Check daemon status using `service clwpos_monitoring status` and its main log: `/var/log/clwpos/daemon.log`.

## My users are complaining that their feature are not installed automatically after subscription upgrade
This can be caused by several reasons. Either your customer's website was detected to have malfunctions
or there was an issue with environment when feature was installed 
(e.g. bad internet connectivity with wordpress market).

First, try to enable feature manually using AccelerateWP interface. 
Most likely you will find human-readable error message there.

Next, you can try to dive into `/var/log/clwpos/daemon.log` and find the reason why the `enable` command failed.
Here is an example of successful feature installation for reference:


    2023-02-14 11:01:14,696: (clwpos.daemon_base) [INFO] Running cloudlinux-awp-user enable --feature object_cache --domain wpujj.com --wp-path
    2023-02-14 11:01:15,081: (clwpos.daemon_base) [INFO] Command succeded with output:
    `CompletedProcess(args=['/bin/cagefs_enter.proxied', 'cloudlinux-awp-user', 'enable', '--feature', 'object_cache', '--domain', 'wpujj.com', '--wp-path', ''], returncode=0, 
    stdout='{\n "context": {\n "domain": "wpujj.com",\n "feature": "object_cache"\n  },\n  "result": "success",\n "timestamp": 1676372475.044419,\n \n}\n', stderr='')`
    2023-02-14 11:01:15,086: (clwpos.daemon_base) [INFO] background process finished: pid=415368

Also, some useful notes may be present in user's log located at `/home/<username>/.clwpos/main.log`.

If the issue persists, or you cannot resolve it yourself, 
contact CloudLinux support and attach `/var/log/clwpos/daemon.log` and `/home/<username>/.clwpos/main.log` 
for further investigation.


## Troubleshooting

### End-users of AccelerateWP Premium feature encounter Redis extension is not installed for selected php version
In order to make use of AccelerateWP Premium Object Caching feature, the loaded Redis extension is required for the end-user's website.
End-users will not be able to activate the Object Caching feature until Redis extension configuration is incomplete.

Corresponding incompatibility warning will be displayed in control panel's User interface:

![](./images/AWPNoRedis.png)

The Redis extensions are configured for all installed and supported PHP versions automatically:
* right after the AccelerateWP Premium suite is enabled
* by cron once a day

or you can trigger the utility manually:
```
/usr/sbin/enable_redis_for_panel_php
```

All errors will be displayed in standard output and logged into `/var/log/clwpos/main.log`.


**Ensuring the EA-PHP Redis extension is configured correctly**

1. Check Redis extension package is installed by running the following command

    ```
    rpm -q ea-phpXY-php-redis
    ```
    Install the corresponding extension if it is not present:
    ```
    yum install ea-phpXY-php-redis
    ```
    Consider the example for checking out and installing Redis extension for `ea-php74`: 
    ```
    rpm -q ea-php74-php-redis
    yum install ea-php74-php-redis
    ```
2. Check Redis `ini` file is present by running the following command:
    ```
    ls /opt/cpanel/ea-phpXY/root/etc/php.d/ | grep 50-redis
    ```
    Consider the example for checking out Redis extension for `ea-php74`: 
    ```
    ls /opt/cpanel/ea-php74/root/etc/php.d/ | grep 50-redis
    ```
    Try reinstalling the package if `ini` file is missing.
3. Make sure Redis module is loaded under specific user by running the following command:
    ```
    su -c "php -m | grep redis" <username>
    ```


**Ensuring the ALT-PHP Redis extension is configured correctly**

1. Check if `redis.so` is present for a particular alt-php version:
    ```
    ls /opt/alt/phpXY/usr/lib64/php/modules | grep redis.so
    ```
    Consider the example for checking alt-php74 redis.so:
    ```
    ls /opt/alt/php74/usr/lib64/php/modules | grep redis.so
    redis.so
    ```
2. If the Redis module is missing:
   
   a. Install the `alt-phpXY-pecl-ext` package manually
   b. Run the Redis configuration script `/usr/share/cloudlinux/wpos/enable_redis_for_alt_php.py`
      
   All errors will be displayed in standard output and logged into `/var/log/clwpos/main.log`.
3. If the Redis module is present for a particular php version, but the incompatibility issue persists, re-check the following:
    
    a. Make sure the Redis module is loaded under user:
    ```
    su -c "php -m | grep redis" <username>
    ```
    b. Check the required extensions are enabled in `php.ini`:
    ```
    cat /opt/alt/phpXY/etc/php.ini | grep redis.so
    cat /opt/alt/phpXY/etc/php.ini | grep json.so
    cat /opt/alt/phpXY/etc/php.ini | grep igbinary.so
    ```
    
    c. Enable missing extensions manually.


### End-users of AccelerateWP encounter PHP-related issues during feature activation
End-users may encounter PHP-related errors while activating the AccelerateWP features.

![](./images/AWPBrokenPHP.png)

The general examples of possible reasons are:
* broken PHP binaries
* missing PHP files
* etc.

To check that this issue is caused by PHP itself, call any PHP command, for example:
```
/opt/cpanel/ea-php80/root/usr/bin/php -i
```
And make sure that installed `ea-php80` packages are not broken using
`rpm -V <package_name>`.

Reinstall broken packages if found.

Consider the example issue (presented at the picture above) with broken `mbstring.so` for `ea-php80`:
```
# /opt/cpanel/ea-php80/root/usr/bin/php -i
Segmentation fault (core dumped)
# rpm -V ea-php80
# rpm -V ea-php80-php-mbstring
S.5....T.    /opt/cpanel/ea-php80/root/usr/lib64/php/modules/mbstring.so
......G..  a /usr/lib/.build-id/9c/38ed78a6d401ff6dce059ccea51c95870d98c5
# yum reinstall ea-php80-php-mbstring
```
