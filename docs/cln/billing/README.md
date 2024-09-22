# Billing

## Overview. Products


Click _Billing → Overview_ to go to _Products_ page. On _Products_ page you can see all your purchased or trial products.

The following information is available:

* **Server licenses** — displays the number of servers activated for each product.
* **Paid until** — the date of the next payment.

![](/images/cln/billing/billing_zoom70.webp)

The following actions are available for each product:

* **Add more licenses** — click _Add more licenses_ and you will be redirected to the [Product Purchase](/cln/purchase/#purchase) page.
* **Manage product** — click the _Manage product_ button to go to the [Product Activation Keys](/cln/dashboard/#dashboard) page and manage a product.
* **Unsubscribe** —  click _Unsubscribe_ to cancel a product subscription. Confirm the action in the popup or click _Cancel_ to close it.

## CloudLinux OS 6 Extended Lifecycle Support

:::tip Note
You don't need to convert your existing CentOS 6 system to CloudLinux OS in order to use ELS (unless you are using cPanel/WHM). Find more information [here](https://www.cloudlinux.com/extended-lifecycle).
:::

Starting from 1st December CloudLinux OS version 6 is End of Life ([read more](https://www.cloudlinux.com/extended-support-cloudlinux-os-6)). For those who still need to use CloudLinux OS version 6, we have launched an Extended Lifecycle Support (ELS) for CloudLinux OS version 6.

**What does it mean?**

If you have CloudLinux OS version 6 then it will be considered as CloudLinux OS 6 ELS server license starting from the 1st December 2020. It means that you will be additionally charged a 10% premium from your price for CloudLinux OS server license for the first year (until 30th November 2021), 20% for the second year (from 1st December 2021 until 30th November 2022), and 30% premium for the 3rd year (1st December 2022 till 30th November 2023).

You will start receiving the invoice with the additional line item that will include the number of server licenses used for CloudLinux OS 6 ELS.

If you do not want to use CloudLinux OS 6 ELS then you need to upgrade the version of CloudLinux OS to 7 or higher.

:::tip Note
There are no additional charges for ELS if you are using [CloudLinux OS Shared PRO](https://www.cloudlinux.com/cloudlinux-os-plus)
:::

**How does it work?**

No additional actions required if you will decide to stay on CloudLinux OS version 6.

As usual, you can purchase CloudLinux OS server licenses in CLN. As soon as you activate the licenses on the server we will detect the CloudLinux OS version on it. On the next billing date, you will get the invoice with the additional line item as described above for all servers running on CloudLinux OS 6.

If you activate the server license on CloudLinux OS version 7 or higher then no additional charges will take place.

## Invoices

Go to _Billing → Invoices_ to get all information about all your invoices.

![](/images/cln/billing/billinginvoices_zoom70.webp)

There are two tables _Paid Invoices_ and _Unpaid Invoices_.

**Unpaid Invoices Table**

The table contains the followings columns:

* **Date** — invoice issue date.
* **Invoice Number** — unique invoice number.
* **Amount total** — a total amount you have to pay.
* **Amount due** — unpaid part which a user has to pay off.
* **Status** — invoice billing status:
  * **Outstanding** — not paid yet.
* **Actions** — the following actions are available:
  * **View invoice** — click the _eye_ icon to view invoice in-details. It opens in a new popup.
  * **Download invoice** — click _download_ icon to download an invoice.

A total amount to be paid for all outstanding invoices and a due date are displayed under the _Unpaid Invoices_ table. To pay total due, click _Pay Now_ button. Select payment method popup opens. Available payment methods are _PayPal_ and _Credit_ or _Debit Card_. Click the desired method and proceed with the instructions on the screen.

**Paid Invoices Table**

The table contains the followings columns:

* **Date** — invoice issue date.
* **Invoice Number** — unique invoice number.
* **Amount total** — a total amount you have already paid.
* **Status** — invoice billing status:
  * **Paid** — an invoice has already been paid.
* **Actions** — the following actions are available:
  * **View invoice** — click the _eye_ icon to view invoice in-details. It opens in a new popup.
  * **Download invoice** — click _download_ icon to download an invoice.
Search in the invoice list by a specific query. Type a search query in the search field to show specific invoices.

### Direct Pay via PayPal

The direct pay via PayPal is available only for paying debts.
To pay invoices under a customer, follow the next steps:

1. Go to Billing → Invoices

2. Click PAY NOW
   
    ![](/images/cln/billing/clnpaynowbtn_zoom50.webp)

     * If the selected payment method is not chosen, you’ll see the dialog with the direct link for payment

      ![](/images/cln/billing/clnselectpaymentmethod_zoom60.webp)

     * If the selected payment method is chosen, you'll see the dialog for making payment
  
      ![](/images/cln/billing/clnpaymentconfirmation_zoom60.webp)

     * In this dialog, you could select CHANGE PAYMENT METHOD and see the direct link for payment

      ![](/images/cln/billing/clnselectpaymentmethod2_zoom60.webp)

3. After choosing the direct payment option you'll be redirected to the PayPal page

    ![](/images/cln/billing/clncloudlinuxpaypal_zoom60.webp)
	
