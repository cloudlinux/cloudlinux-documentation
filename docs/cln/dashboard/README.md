# Dashboard

Dashboard helps quickly navigate to user's _Products_. It includes the following tabs:

## Products

Click _Dashboard_. You will be redirected to the _Products_ page.

![](/images/cln/dashboard/dashboard_zoom70.webp)

On the _Products_ page you can see all your products.

The following actions are available:

* **Create activation key/Activation Key**. Activation Key is a string of numbers and letters used to activate a product. If an activation key is not created yet, you can do it by clicking _Create activation key_. A new key will be created and displayed. To copy an activation key to clipboard, just click on it.
* **Add Licenses** — shortcut to [Product Purchase](/cln/purchase/#purchase) page.
* **Manage Product** — shortcut to [Product Activation Keys](/cln/dashboard/#cloudlinux-os-activation-keys) page.
* **Read more** — click to get more information about the product.


### Trial Activation

:::warning
There are no trials available for the ELS subscription
:::

On the _Product_ tab a user can activate a trial license if trial product hasn't been activated yet.

![](/images/cln/dashboard/freetrial_zoom70.webp)

Just click _Free Trial_ and proceed with trial activation instructions.

Also, a user is able to activate trial license from the _Purchase_ page.

![](/images/cln/dashboard/fretrialpurchase_zoom70.webp)

### CloudLinux OS Activation Keys


Click _CloudLinux OS_ at the top menu to go to _CloudLinux OS Activation Keys_ page. Here you can see server licenses used/limits.

![](/images/cln/dashboard/cloudlinuxosactivationkeys_zoom70.webp)

The following actions are available:

* **Copy a [Default Activation Key](/cln/terminology/#terminology) to a clipboard**. To do so, click _Copy_ below the default key.
* **Generate a new Activation Key**. To do so, click _Generate new activation key_. Specify the number of servers and some notes if any and click _Save Changes_ to confirm the action or _Cancel_ to close the popup.
* **[Manage servers](/cln/billing/#overview-products)**.
* **[Add server licenses or buy](/cln/purchase/#purchase)**, if only trial product is activated.
* **Remove unused server licenses**. Click _Remove unused server licenses_ to delete all server licenses that are not used to activate a server. Do it to reduce your monthly bill as a customer pays per each server license and NOT per an activated server. Confirm the action in the opened popup by clicking _Remove_ or click _Cancel_ to close the popup.
* **Go to [Activation Key Details page](/cln/dashboard/#cloudlinux-activation-key-details-page)**. To do so, click a specific activation key in the table.

The table with a list of all CloudLinux OS Activation Keys has the following columns:

* **Activation key** — activation key string. Click activation key to go to Activation Key Details page.
 ***IP range** — a range of IP addresses for a particular activation key;
* **Note** — any information you've added to a particular activation key;
* **Servers (used/limits)** — shows how many servers have already been activated with this key (used) and a total number of servers that can be activated with this key (limits).
  
The following actions are available:

* **filter keys by server limits** — click _Server Limits_ and choose a desired number or unlimited
* **search for an activation key** — type a search query and the table will filter a list of keys
* **delete one or several activation keys** — tick one or several activation keys or the checkbox in the table header (to select all) and click _Bin_ icon. In the popup, click _Remove_ to confirm the action or _Cancel_ to close popup.


:::tip Note
Default Activation Key cannot be deleted.
:::

#### CloudLinux Activation Key Details Page



On the _CloudLinux OS Activation Keys_ page click an activation key string in the table to go to _CloudLinux Activation Key Details_ page.

![](/images/cln/dashboard/cloudlinuxactivationkeysdetails_zoom70.webp)

This page contains the following information:

* **activation key** itself is displayed on the blue background; to copy it to clipboard just click it
* **servers (used/limits)** — number of servers that have already been activated with this key (used) and a total number of servers that can be registered with this particular key (limits)
* **note** — any information you’ve added to this activation key.


The following actions are available:

* **Edit key**. Click _Edit Key_ button. In the opened popup you can change a number of servers that can be activated with this key and enter some notes for your own needs so that you can easily find an activation key when there are a lot of different keys. To apply changes click _Save Changes_ or _Cancel_ to close the popup.

    ![](/images/cln/dashboard/editactivationkey.webp)


* **Remove key**. Click _Remove Activation Key_ button. In the opened popup click _Remove_ to apply changes or _Cancel_ to close the popup.
    :::tip Note
    You cannot delete a default activation key.
    :::

    ![](/images/cln/dashboard/removeactivationkey.webp)


Below, there is a table with all servers activated with this activation key.

The table contains the following columns:

* **Server name** — a host name of the server.
* **IP** — an IP address of the activated server.
* **Registered** — a date when a server was activated. A server sends this information to CLN.
* **Last check-in** — a date of last successful server [check-in](/cln/terminology/#terminology) .

The following actions are available:

* **Filter servers** list by date of registration. Click _Registered Date_ and select a date or a period to show servers registered within selected period or date.
* **Search** in the list by a specific text. Type a search query in the search field to show specific servers.
* **Remove** a server from this activation key. In this case, a server will not be able to use CloudLinux OS anymore. To do that, tick server(s) and click _Bin_ icon above the table.


### KernelCare Activation Keys


Click _KernelCare_ at the top menu to go to _KernelCare Activation Keys_ page. Here you can see server licenses (used/limits).

![](/images/cln/dashboard/kcactivationkeypage_zoom70.webp)

There are two types of KernelCare licenses available: IP-based and key-based. IP-based license can only be used by IP address it is issued to, while key-based licenses can be migrated to another server within the IP range defined for the key.

#### Key-based licenses

Every KernelCare customer gets a default activation key upon license purchase. You can have multiple activation key in your account, however the overall number of licensed servers cannot exceed the number of purchased licenses.

The following actions are available:

* **Copy a Default Activation Key**. Click a key to copy it to a clipboard.
* **Generate a new Activation Key**. Click _Generate new activation key_. In an opened popup specify _Server quantity limit_, _IP range limit_, _Sticky tag_, and add some _Notes_, if any, and click _Save Changes_ to confirm the action or _Cancel_ to close the popup.
    ![](/images/cln/dashboard/kceditpng.webp)
* **[Manage servers](/cln/billing/#overview-products)**.
* **[Add server licenses](/cln/purchase/#purchase)**.
* **Remove unused server licenses** . Click _Remove unused server licenses_ to delete all server licenses that are not used to activate a server. Do it to reduce your monthly bill as a customer pays per each server license and NOT per an activated server. Confirm your action in the opened popup by clicking _Remove_ or click _Cancel_ to close the popup.
* **Go to [Activation Key Details](/cln/dashboard/#kernelcare-activation-key-details-page) page**. To do so, click a specific activation key in the table.

The table with a list of of all KernelCare Activation Keys contains the following columns:

* **Activation key** — an activation key string. Click an activation key to go to [Activation Key Details](/cln/dashboard/#kernelcare-activation-key-details-page) page.
* **IP range** — a range of IP addresses for a particular activation key;
* **Note** — any information you've added to a particular activation key;
* **Servers (used/limits)** — shows how many servers have already been activated with this key (used) and a total number of servers that can be activated with this key (limits).

The following actions are available:

* **filter keys by server limits** — click _Server Limits_ and choose a desired number or unlimited;
* **search for an activation key** — type a search query and the table will filter a list of keys;
* **delete one or several activation keys** — tick one or several activation keys or the checkbox in the table header (to select all) and click _Bin_ icon. In the popup, click _Remove_ to confirm the action or _Cancel_ to close popup.

:::tip Note
Default Activation Key cannot be deleted.
:::

#### KernelCare Activation Key Details Page

On the _KernelCare Activation Keys_ page click an activation key in the table to go to _KernelCare Activation Key Details_ page.

![](/images/cln/dashboard/kernelcareactivationkeydetails_zoom70.webp)

This page contains the following information:

* An **activation key** itself is displayed on the blue background; to copy it to a clipboard just click it;
* **Servers (used/limits** ) — number of servers that have already been activated with this key (used) and a total number of servers that can be registered with this particular key (limits);
* **Note** — any information you’ve added to this activation key.
* **Sticky tag** — when the _Sticky Tag_ feature is enabled for particular servers, all such servers will get patches only released before the date specified in the _Sticky tag_ field.


The following actions are available:

* **Edit key**. Click _Edit Key_ button. In the opened popup you can change a number of servers that can be activated with this key, change IP range limit, manage sticky tags (see [Patch management with CLN portal (Sticky Tag)](/cln/dashboard/#patch-management-with-cln-portal-sticky-tag)), and enter some notes. To apply changes click _Save Changes_ or _Cancel_ to close the popup.
* **Remove key**. Click _Remove Activation Key_ button to  remove an activation key with all the associated servers. In the opened popup click _Remove_ to apply changes or _Cancel_ to close the popup.

:::tip Note
You cannot delete a default activation key.
:::

![](/images/cln/dashboard/kcremovekey.webp)

Below, there is a table with all servers activated with this activation key.

The table contains the following columns:

* **Server name** — a hostname of the server.
* **IP** — an IP address of the activated server.
* **Registered** — a date when a server was activated. A server sends this information to CLN.
* **Effective Kernel** —  a version of kernel used.
* **Last check-in** — the date of last successful server [check-in](/cln/terminology/#terminology).

The following actions are available:

* **Filter servers list** by date of registration. Click _Registered Date_ and select a date or a period to show servers registered within selected period or date.
* **Search** in the list by a specific query. Type a search query in the search field to show specific servers.
* **Remove a server from this activation key**. In this case, a server will not be able to use KernelCare anymore. To do so, tick server(s) and click _Bin_ icon above the table.

#### Patch management with CLN portal (Sticky Tag)


The best way to handle QA and Production environments is to use Sticky Tag feature of KernelCare activation keys issued from CloudLinux Network (CLN) portal.

To use this tag, go to _CLN portal → KernelCare tab → click a key to edit → click Edit Key_.

You should provide a separate key for each environment and set them to a particular sticky tag which is actually the date to which all the servers in an environment have to be patched.

![](/images/cln/dashboard/kcstickytag.webp)

The date in _Sticky tag_ field can be any date from May 28, 2018 up to one day before today.

To use Sticky Tag feature on the servers to be patched, run:

```
/usr/bin/kcarectl --set-sticky-patch=KEY
```

Alternatively, you can do the same by adding ` STICKY_PATCH=KEY` to `/etc/sysconfig/kcare/kcare.conf` file.

:::warning Warning
Do not replace the KEY word with the actual KernelCare license key used to register the server.
:::

When the Sticky Tag feature is enabled for particular servers, all such servers will get patches only released before the date specified in the _Sticky tag_ field.

This way, you can add new patches to all the servers in some environment (i.e. registered with the same KernelCare license key) by updating only a single field in the CLN portal.

#### KernelCare Monitoring

Find more details in [KernelCare documentation](https://docs.kernelcare.com/kc-agent-monitoring/)

### Imunify360 License Types


Click _Imunify360_ at the top menu to go to _Imunify360 License Types_ page.

![](/images/cln/dashboard/im360licensetypes_zoom70.webp)

Here you can see all available license types, buy and manage them.

The following license types are available:

* **Single User** — good for servers with only one [user](/cln/terminology/#terminology) in the system
* **Up to 30 users** — good for servers with users quantity less than 30 or equal
* **Up to 250 users** — good for servers with users quantity less than 250 or equal
* **Unlimited** — good for servers with users quantity more than 250
To buy desired license type, click _Buy server licenses_ button. You will be redirected to [Purchase](/cln/purchase/#purchase) page.

A license card includes the following information:

* **Server licenses** — activated/limit;
* **Activation key** itself. To copy activation key to clipboard, click it.

The following actions are available to manage a license.

* **Add server license** — click _Add server license_ button, you will be redirected to [Purchase](/cln/purchase/#purchase) page.
* **Remove unused server licenses** — click _Remove unused server licenses_ to delete all server licenses that are not used to activate a server. Do it to reduce your monthly bill as a customer pays per each server license and NOT per an activated server. Confirm your action in the opened popup by clicking _Remove_ or click _Cancel_ to close the popup.
:::tip Note
If you have only one license then after the deletion, you will not have any licenses purchased and the product will be deleted from your account.
:::
* **Manage servers** — click _Manage servers_ button. You will be redirected to _[Billing →  Overview → Products page](/cln/billing/#overview-products)_.
* **Manage activation keys** — click _Manage Activation keys_. You will be redirected to [Imunify360 Activation Keys](/cln/dashboard/#imunify360-activation-keys) page.

#### Imunify360 Activation Keys


Click _Imunify360_ at the top menu, then click _Activation Keys_ on the left menu to go to _Imunify360 Activation Keys_ page.

![](/images/cln/dashboard/imunify360activationkeys_zoom70.webp)

Here you can see the table with a list of all Imunify360 Activation Keys. It contains the following columns:

* **Activation key** — activation key string. Click activation key to go to [Activation Key Details](/cln/dashboard/#imunify360-activation-key-details-page) page.
* **License type** — a type of Imunify360 license for certain key. See [all available license types](/cln/dashboard/#imunify360-license-types).
* **IP range** — a range of IP addresses for a particular activation key;
* **Note** — any information you've added to a particular activation key;
* **Servers (used/limits)** — shows how many servers have already been activated with this key (used) and a total number of servers that can be activated with this key (limits).

The following actions are available:

* **filter keys by server limits** — click _Server Limits_ and choose a desired number or unlimited;
* **filter keys by license type** — click _License Type_ and tick desired type(s);
* **search for an activation key** — type a search query and the table will filter a list of keys;
* **delete one or several activation keys** — tick one or several activation keys, or the checkbox in the table header (to select all) and click _Bin_ icon. On the popup click _Remove_ to confirm the action or _Cancel_ to close popup.


:::tip Not
Default Activation Key cannot be deleted.
:::

#### Imunify360 License Type Activation Keys

Click Imunify360 at the top menu then _Activation Keys → desired type of license (Single User, Up to 30 users, Up to 250 users, Unlimited)_ on the left menu to go to _Imunify360 License Type Activation Keys_.

![](/images/cln/dashboard/im360upto30activationkey_zoom70.webp)

This page contains the following information:

* An **activation key** itself is displayed on a blue background; to copy it to a clipboard just click it.
* **Server licenses (used/limits)** — shows how many servers have already been activated with this key (used) and a total number of servers that can be activated with this key (limits).

The following actions are available:

* **Generate a new activation key** — click _Generate new activation key_. Create activation key popup opens. Set number of servers to be activated with this key or tick unlimited. Enter some notes, if any. Click _Save Changes_ to generate a new key or _Cancel_ to close the popup. The new generated key is displayed in the table.
* **Manage servers** — click _Manage servers_ button, you will be redirected to [ Billing → Overview → Products page](/cln/billing/#overview-products).
* **Add server licenses** — click _Add server licenses_, you will be redirected to [Purchase](/cln/purchase/#purchase) page.
* **Remove unused server licenses** — click _Remove unused server licenses_ to delete all server licenses that are not used to activate a server. Do it to reduce your monthly bill as a customer pays per each server license and NOT per an activated server. Confirm your action in the opened popup by clicking _Remove_ or click _Cancel_ to close the popup.

:::tip Note
If you have only one license then after the deletion, you will not have any licenses purchased and the product will be deleted from your account.
:::

Below, there is a table with all activation keys. The table contains the following columns:

* **Activation key** — click activation key string to go to [Activation Key Details](/cln/dashboard/#imunify360-activation-key-details-page) page.
* **License Type** — a type of Imunify360 license (Single User, Up to 30 users, Up to 250 users, Unlimited).
* **[IP Range](/cln/terminology/#terminology)** — a range of IP addresses for a particular activation key.
* **Note** — any notes to a particular activation key.
* **Servers (used/limits)** —  a number of servers that have already been activated with this key (used) and a total number of servers that can be registered with this particular key (limits).

The following actions are available:

* **Filter keys list by server limits**. Click _Server Limits_ and specify a number of servers or tick _Unlimited_.
* **Filter keys list by license type**. Click _License Type_ and tick desired types.
* **Search** in the list by a specific query. Type a search query in the search field to show specific keys.
* **Remove activation key**. Tick key(s) and click _Bin_ icon above the table. The Remove popup opens. Confirm the action by clicking _Remove_ or click _Cancel_ to close the popup.

:::tip Note
Removing activation key will deactivate the product on connected servers.
:::

:::tip Note
You cannot delete the default activation key.
:::

#### Imunify360 Activation Key Details Page


On the _Imunify360 Activation Keys_ page click an activation key string in the table to go to _Imunify360 Activation Key Details_ page.

![](/images/cln/dashboard/imunify360activationkeydetails_zoom70.webp)

This page contains the following information:

* An **activation key** itself is displayed on a blue background; to copy it to a clipboard just click it;
* **Servers (used/limits)** — a number of servers that have already been activated with this key (used) and a total number of servers that can be registered with this particular key (limits);
* **Note** — any information you’ve added to this activation key.

The following actions are available:

* **Edit key**. Click _Edit Key_ button. In the opened popup you can change a number of servers that can be activated with this key and enter some notes. To apply changes, click _Save Changes_ or _Cancel_ to close the popup.
    ![](/images/cln/dashboard/im360editactivationkey.webp)
* **Remove key**. Click _Remove Activation Key_ button. In the opened popup click _Remove_ to apply changes or _Cancel_ to close the popup.

:::tip Note
* You cannot delete a default activation key.
* Removing the activation key will deactivate the product on connected servers.
:::

Below, there is a table with all servers activated with this activation key. The table contains the following columns:

* **Server name** — a hostname of the server.
* **IP** — an IP address of the activated server.
* **Registered** — a date when a server was activated. A server sends this information to CLN.
* **Last check-in** — the date of the last successful server [check-in](/cln/terminology/#terminology).
  
The following actions are available:

* **Filter servers list by the date of registration**. Click _Registered Date_ and select a date or a period to show servers registered within selected period or date.
* **Search in the list by specific query**. Type a search query in the search field to show specific servers.
* **Remove a server from this activation key**. In this case, a server will not be protected by Imunify360 anymore. To do that, tick server(s) and click _Bin_ icon above the table. 

### Imunify Email Notifications

#### Subscription-based customers

Starting from the 1st of June 2024, you will be billed for the Imunify Email service. Imunify Email costs 10% of your Imunify360 license. The billing will be based on whether the 'enabled' feature for Imunify Email is activated on your CLN account. This 'enabled' state indicates that the Imunify Email product is installed on your server. So, if the feature is turned on, you'll be billed accordingly. 

You can enable Imunify Email on 3 levels:

1. **Account**

![](/images/cln/dashboard/imunify-email-global-level.webp)

* When you enable the feature on an account level, the script will install  Imunify Email on all Imunify360 servers in your account in 24 hours.  You can also run `imunify360-agent update-license` command to speed up the process. 
* When disabling the feature on an account level, the script will deactivate the Imunify Email on all Imunify360 servers in your account in 24 hours.
* There's also a default option called 'depends on lower level'. This allows you to control permissions based on each key or license, rather than for the whole account. 

2. **Key**  

You can manage permission on a key level. Go to the 'Activation keys' tab and select 'add-ons'. 

![](/images/cln/dashboard/imunify-email-manage-permission-cln.webp) 

You will see this screen: 

![](/images/cln/dashboard/imunify-email-manage-permissions2.webp) 

* When you enable the feature on all servers in the key, the script will install Imunify Email on all Imunify360 servers under this key in 24 hours. You can also run `imunify360-agent update-license` command to speed up the process.
* When disabling the feature on a key level, the script will deactivate the Imunify Email on all Imunify360 servers under this key in your account in 24 hours.
* There's also a default option called 'depends on lower level'. This allows you to control permissions based on each server. 

3. **Server**

You can manage permission on a server level. Go to the 'Servers' tab and select 'add-ons'. 

![](/images/cln/dashboard/imunify-email-permissions-server-level.webp)

You will see this pop-up: 

![](/images/cln/dashboard/imunify-email-popup-cln.webp) 

* When you enable the feature, the script will install Imunify Email on this server. You can also run `imunify360-agent update-license` command to speed up the process.
* When disabling the feature, the script will deactivate the Imunify Email on a server in 24 hours. 

As a beta tester, you have the feature Imunify Email installed on your servers. We've noticed this and have activated an additional feature related to Imunify Email on all servers where we found it installed. However, you have the flexibility to modify this setting if you wish. 

#### Usage-based customers

Starting from the 1st of July 2024, you will be billed for the Imunify Email service for the usage in June.  Imunify Email costs 10% of your Imunify360 license. The billing will be based on whether the 'enabled' feature for Imunify Email is activated on your CLN account. This 'enabled' state indicates that the Imunify Email product is installed on your server. So, if the feature is turned on, you'll be billed accordingly. 

You can enable Imunify Email on 3 levels: 

1. **Account** 

![](/images/cln/dashboard/imunifyemail-cln-global-level.webp) 

* When you enable the feature on an account level, the script will install Imunify Email on all Imunify360 servers in your account in 24 hours. You can also run `imunify360-agent update-license` command to speed up the process.
* When disabling the feature on an account level, the script will deactivate the Imunify Email on all Imunify360 servers in your account in 24 hours.
* There's also a default option called 'depends on lower level'. This allows you to control permissions based on each key or license, rather than for the whole account.

2. **Key** 

You can manage permission on a key level. Go to the 'Activation keys' tab and select 'add-ons'. 

![](/images/cln/dashboard/imunifyemail-cln-permission-by-key.webp) 

You will see this screen: 

![](/images/cln/dashboard/ie-cln-permission-popup.webp) 

* When you enable the feature on all servers in the key, the script will install Imunify email on all Imunify360 servers under this key in 24 hours. You can also run imunify360-agent update-license command to speed up the process.
* When disabling the feature on a key level, the script will deactivate the Imunify email on all Imunify360 servers under this key in your account in 24 hours.
* There's also a default option called 'depends on lower level'. This allows you to control permissions based on each server. 

3. **Server/ IP license**
You can manage permission on a server level. Go to the 'Servers' tab and select 'add-ons'. 

![](/images/cln/dashboard/ie-cln-permission-server-level.webp)  

**IP Licenses**

![](/images/cln/dashboard/ie-cl-permission-iplicense.webp) 

You will see this pop-up: 

![](/images/cln/dashboard/ie-cln-popup-window.webp) 

* When you enable the feature, the script will install Imunify email on this server. You can also run `imunify360-agent update-license` command to speed up the process.
* When disabling the feature, the script will deactivate the Imunify email on a server in 24 hours. 

You can also use our API to manage Imunify Email add-on: [https://docs.cloudlinux.com/cloudlinux_rest_api.pdf](https://docs.cloudlinux.com/cloudlinux_rest_api.pdf)

As a beta tester, you have the feature Imunify Email installed on your servers. We've noticed this and have activated an additional feature related to Imunify Email on all servers where we found it installed. However, you have the flexibility to modify this setting if you wish.


### ELS Activation Keys

:::warning
There are no trials available for the ELS subscription
:::

### CloudLinux Backup

:::warning
We regret to inform you that our CL Backup will be reaching its End of Life (EOL) phase soon, effective Oct 1st, 2023. This decision has been made after careful consideration and is in line with our commitment to focus on developing new and innovative solutions for our valued customers.
 
Outlined below are important details regarding the EOL process:
1. _End of Sales_: As of Jun 2023, we will no longer be accepting new orders for the CL Backup. 
2. _Support_: We will continue to provide technical support until Sep 30th, 2023. However, after this date, we will no longer be able to offer support for the product.
3. Make sure that you moved backups to other providers before Sep 30th, 2023.
:::

Available only if CLoudLinux Backup is purchased and activated.

Click _CL Backup_ in the main header menu to go to _CloudLinux Backup_ page. Here you can see a table with all your backups for CloudLinux products.

![](/images/cln/dashboard/newclnclbackup_zoom70.webp)

The table includes  the following columns:

* **Server name** — a name of the server with backup
* **Server IP** —  displays the IP of the server with backup
* **Region** —  server location
* **Used, GB** — backup space used in GB
* **Total, GB** — total backup space in GB
* **Actions**:
    * **Edit** —  click to manage the backup. In the opened popup click _Go to the backup management_, the backup management application opens in a new tab
    * **Resize** — click to change the backup space. In the opened popup add or remove the Gbs and click _Resize_ to apply or _Cancel_ to close the popup.
    * **Deactivate** — click to remove the backup.
    :::tip Note
    Backup files cannot be restored after deactivation.
    :::
    In the opened popup confirm the action by clicking _Remove_ or click _Cancel_ to close the popup.
    * **Relink** —  for a backup not associated with a server. Click to connect a backup to a specific server. Confirm the action in the popup or click _Cancel_ to close the popup.

## Servers


Click _Dashboard → Servers_ to go to _All Servers_ page. A list of all servers with activated products belonged to this account is available.

![](/images/cln/dashboard/allserverspng_zoom70.webp)

The table includes all servers that have been activated in all products within the account. The table contains the following columns:

* **Server name** — server hostname;
* **IP** — server IP address;
* **Installed products** — shows a logo of a product activated on a server.

Click a server name to show server details:

* **Product and activation key** used to register that server
* **Registered** — a date when a server was activated. A server sends this information to CLN
* **Last check-in** — the last date when a server successfully responded to check-in
* **Effective Kernel** — displays the version of kernel used (only for KernelCare). Click the version to go to [https://patches.kernelcare.com/](https://patches.kernelcare.com/) 
* **Change License Type** —  allows to change the type of the Imunify360 license (only for Imunify360). Click _Change License Type_ to open change popup specify a new license type. Confirm the action by clicking _Change_ or click _Cancel_ to close the popup.

:::tip Note
When you have changed the server license successfully, you need to get a new activation key and activate Imunify360 on the server using [CLI command](https://docs.imunify360.com/command_line_interface/#register) (register). Otherwise, Imunify360 will not be registered and activated, and will not work on the server.
:::

![](/images/cln/dashboard/imunify360changeserverlisencetype.webp)

The following actions are available:

* **Filter by product** — click _Product_ button and select one or more products;
* **Filter by date of registration** — click _Registered date_ to display a calendar where you can pick a date or a period to filter by.
* **Filter by any search query** — type a query. A search is performed in _Server name_ and _Activation key_ entities.
* **Buy server license** — click _Buy Server Licenses_ button, you will be redirected to the [Purchase](/cln/purchase/#purchase) page.

### Server groups

The _Server groups_ feature allows you to add servers in one group and perform global actions on this group (and thereby on all servers included in this group).

#### How to create a group

* Go to _Servers_ and select a required product, then click _Manage server groups_
    
    ![](/images/cln/dashboard/manage_server_groups.webp)
  
* Click _Create your first group_ or _Create new group_

    ![](/images/cln/dashboard/create_group.webp)

* Type a group name and description if needed

    ![](/images/cln/dashboard/new_group.webp)

* Then click _Save_ to apply changes or click _Cancel_ to close the popup.
* Close the popup.

#### How to remove a group

* Go to _Servers_ and click _Manage server groups_

    ![](/images/cln/dashboard/manage_group.webp)

* Select a group and click _Bin_ (![](/images/cln/dashboard/bin.webp))
* When the group is removed you can close the popup

#### How to add a server to a group

* Go to _Servers_ and select a required product. Click ![](/images/cln/dashboard/plus.webp) in the _Group_ column.

    ![](/images/cln/dashboard/add_server.webp)

* Choose a group from the list or create a new one by typing its name

    ![](/images/cln/dashboard/add_item.webp)

* Click _Add to group_ to apply changes or click _Cancel_ to close the popup
* You will see that the server is added to the group

    ![](/images/cln/dashboard/added_result.webp)

* Or for group action, select servers in the list and click _Add to server group_.

    ![](/images/cln/dashboard/add_mass_action.webp)

#### How to remove a server from a group

* Go to _Servers_ and click _Manage server groups_

    ![](/images/cln/dashboard/manage_group.webp)

* Scroll to _Servers_ and click ![](/images/cln/dashboard/cross.webp) for a server to be removed from the group

    ![](/images/cln/dashboard/remove_server.webp)

* Then click _Save_ to apply changes or click _Cancel_ to close the popup
* Close the popup

#### How to move a server from one group to another

* Go to _Servers_, select server(s) in the list and click _Add to server group_

    ![](/images/cln/dashboard/add_mass_action.webp)

* Choose a group or create a new one and click _Add to group_

    ![](/images/cln/dashboard/move_to_another_group.webp)

* The server(s) will be moved to another group  

### AccelerateWP Features Management for Regular Customers

The Accelerate WP Premium and CDN permission management will help you enable/ disable Premium and CDN features on certain servers. In cases where hosting users have root access to the server (e.g. VPS users), this permission ensures the license holder retains control over access to billable features. 

Default state for Cloudlinux OS editions:
* Solo, Admin - disabled
* Pro - enabled 

For managing these features via CLN:

1. Login to the CLN account 

2. Go to the 'CloudLinux' tab 

![](/images/cln/dashboard/cln_shared-pro_activation-keys.webp)

3. Press a key when you want to enable/ disable Premium or CDN 

4. Press Edit key 

![](/images/cln/dashboard/cln_shared-pro_edit_key.webp) 

5. Choose new permissions 

![](/images/cln/dashboard/cln_edit-activation_key_permissions.webp) 

6. Save permissions 

Permission will apply to all registered under these key servers.



