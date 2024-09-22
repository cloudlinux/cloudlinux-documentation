# CLN For IP-based Accounts

:::tip Note
You can [download](https://docs.cloudlinux.com/cloudlinux_rest_api.pdf) CloudLinux REST API documentation.
:::

## Registration

Once you have a CLN account [created](/cln/introduction/#create-new-account), contact our billing team to assist you with the account type conversion. This can be done by clicking the _Contact Support_ link at the footer of this page.

## IP Licenses Management


IP license allows to register server only by it's IP (without a need to create a key and use it during registration).
IP Licenses page allows resellers to add and remove IP licenses using automated tools via API.

Click required product at the top menu and then _IP Licenses_ at the left sidebar.
![](/images/cln/cln_for_resellers/clniplicense_zoom60.webp)

The table contains the following information:

* IP — an IP address of the activated server
* Hostname — a hostname of the server
* Added —  a date when a server with this IP was activated
* Last check-in — the date of the last successful [server check-in](/cln/terminology/#terminology)
* Type —  license type for this server
* Actions

### Actions

The following actions are available:

* Add IP to this license. Click _Add IP_ button. In the opened popup specify IP and product type (for Imunify360 licenses only) and click _Add IP_ to complete the action or _Cancel_ to close the popup.
* Remove IP from using this license. Tick IP(s) and click _Bin_ icon in the IP line or above the table for bulk action.
* Filter servers list by IP and product type. Click _IP_ and select an IP, or click _Product Type_ and select a product.
* Search in the list by a specific query. Type a search query in the search field to show specific servers.
* Activate backup. Click ![](/images/cln/cln_for_resellers/clnactivatebackup.webp). In the opened popup specify backup size and datacenter and click _Create_ to complete the action or Cancel to close the popup.
  
    ![](/images/cln/cln_for_resellers/clncreatebackup_zoom70.webp)

* Manage backup. Click ![](/images/cln/cln_for_resellers/clnmanagebackup.webp). In the opened popup click _Go to the backup management_ to go to backup management system interface (opens in a new tab) or click _Cancel_ to close the popup.

## Converting your account to CloudLinux OS Shared PRO type

You can find the process description [here](/cln/purchase/#cloudlinux-os-plus)

## Autopayments


Navigate to Billing → Payment Methods → Autopayment.

![](/images/cln/cln_for_resellers/clnautopayments_zoom60.webp)

The following autopayment types are available:

* Auto add funds — when balance is below $100 it is replenished to the specified amount
* Auto repay (default option) — once your balance becomes negative, your card will be automatically charged. Minimal charge is $20
* Do not add funds automatically

When you have selected and configured autopayment type, click _Save_.


## Invoices


Go to Billing → Invoices. There is a table with all invoices and appropriate information.

![](/images/cln/cln_for_resellers/clnresellerinvoices_zoom60.webp)

The table contains the following columns:

* Invoice id — unique invoice number
* Created — the date when invoice was created
* Type —  payment type
    * Payment received — invoice is already payed
    * Refund — you have a debt on your account. Please pay the invoice.
    * Invoice —  invoice is issued. Please pay the invoice.
* Pay period — invoice period
* Total — the total amount of money you have to pay
* Balance — amount of money on your account
* Actions
    * ![](/images/cln/cln_for_resellers/clniconshow.webp) — open invoice in a popup (you can download it)
    * ![](/images/cln/cln_for_resellers/clnicondownload.webp) — open invoice in a new tab (you can download it)

Click ![](/images/cln/cln_for_resellers/clnarrow.webp) near invoice id to show detailed bill information:

* Title — license name
* Quantity — licenses quantity
* SubTotal — the price for that number of licenses


## AccelerateWP Permissions Management for IPR Customers

Accelerate WP Premium and CDN permission management will help you enable/ disable Premium and CDN features on certain servers. In cases where hosting users have root access to the server (e.g. VPS users), this permission ensures the license holder retains control over access to billable features. 

Default state for different Cloudlinux OS editions:
* Solo, Admin - disabled
* Pro - enabled 

For managing these features via CLN:

1. Login to the CLN account
2. Go to the 'CloudLinux' tab
3. Go to the IP Licenses section 

![](/images/cln/cln_for_resellers/cln-ip-licenses-section.webp) 

4. Press edit
5. Choose new permissions 

![](/images/cln/cln_for_resellers/cln-choose-permissions.webp)

6. Save permissions



