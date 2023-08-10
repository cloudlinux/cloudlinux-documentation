# X-Ray

## Description

:::warning Warning!
<span class="notranslate">X-Ray</span> is available out of the box for cPanel, Plesk, and DirectAdmin. For other control panels you should implement integration as described [here](/control_panel_integration/#how-to-integrate-x-ray-with-a-control-panel)
:::

<span class="notranslate">X-Ray</span> is a tool developed for website performance monitoring and performance issues detection.

<span class="notranslate">X-Ray</span> can gather and visualize information about top N slowest system functions, external requests, software modules and database queries of the client’s website.

## Known limitations
<span class="notranslate">X-Ray</span> is not compatible with Opcahce JIT optimization.
Once <span class="notranslate">X-Ray</span> tracing task is running for the site the Opcache JIT optimization will be disabled until tracing task completed.

## Installation

1. Make sure you have CloudLinux OS Shared Pro subscription (only non-reseller accounts apply)

2. Make sure you have installed **LVE Manager version 6.2 or later**. You can install or update it with the following commands:
   * installation

   <div class="notranslate">

    ```
    # yum install lvemanager
    ```
    </div>

    * update
   
   <div class="notranslate">

    ```
    # yum update lvemanager
    ```
    </div>
3. X-Ray will be activated on all your servers during 4 hours. You will see the X-Ray tab in the LVE Manager UI.

4. For instant activation, run the following command:

   <div class="notranslate">

    ```
    # rhn_check
    ```
    </div>

    If the `rhn_check` command is not found, run the following command:

    <div class="notranslate">

    ```
    # yum install rhn-check rhn-setup
    ```
    </div>

5. Then install the <span class="notranslate">`alt-php-xray`</span> package

    * Via user interface
        * Go to the <span class="notranslate">_X-Ray_</span> tab.
        * Click <span class="notranslate">_Install_</span> to start installation.

        ![](./images/XRayUI.png)

    * Via SSH by running the following command:
  
    <div class="notranslate">

    ```
    # yum install lvemanager alt-php-xray
    ```
    </div>

6. After installation, use the <span class="notranslate">_Start tracing_</span> button to create your first tracing task for a slow site.

![](./images/XRayStartTracing.png)

## How to manage X-Ray

X-Ray provides several options for monitoring domain requests speed: Manual Tracing task, X-Ray Autotracing and Continuous tracing.

* **Manual Tracing task** is a task that you can create for a specific URL to collect server requests. The task will end either after a specified number of requests to the URL or after a specified time (maximum after two days). It is not possible here to automatically email a report but it is possible to export the report in PDF and send to a user.

* **Autotracing task** is a task that will be created automatically at the end of each day for slow URLs that were found during that day by the [PHP Slow Site Analyzer](/lve_manager/#website-monitoring-tool-and-slow-site-analyzer) (SSA).
Need to be enabled separately, see [How to enable X-Ray Autotracing](/cloudlinux-os-plus/#how-to-enable-x-ray-autotracing).

* **Continuous tracing** is a task that initiates daily hourly tracing requests for a specified domain and email a monitoring report. Continuous task can't stop automatically, you need to stop it manually. In fact, continuous task allows to automatically create a tracing task for each new day, with the ability to get a report for the past day.

### Tracing tasks tab

The *Tracing tasks* tab contains a list of all tracing tasks created both manually and automatically via continuous tasks.

![](./images/XRayTracingTaskCreated.png)

The *Created* column shows how a task was created – automatically (by continuous task) or manually.

### Continuous tracing tab

:::warning Warning
To use Continuous task, update your LVE Manager and alt-PHP-X-Ray packages to versions lvemanager-6.2.9-1 and alt-php-xray-0.2-1 by running the following command:
```
yum update lvemanager alt-php-xray
```
::: 

The *Continuous tracing* tab contains a list of continuous tasks for which tracing tasks will be created automatically for a new day for a specific domain.

![](./images/XRayContinuousTasksList.png)

## Managing tracing task

### Creating a new tracing task

1. Go to the <span class="notranslate">_X-Ray_</span> tab
2. Click the <span class="notranslate">_Start tracing_</span> button to create a new task
3. In the opened popup specify a website URL to trace
4. Click the <span class="notranslate">_Run_</span> button
5. Tracing will run in the default mode. In the default mode <span class="notranslate">X-Ray</span> traces the first 20 requests for a specified URL

![](./images/XRayTracingTask.png)

* <span class="notranslate">**URL**</span> should be a valid URL of the domain which exists on the current hosting server. The URL field supports wildcard matching. To learn more about wildcard matching, click _How to use special characters_.
* <span class="notranslate">**Advanced settings**</span> allow you to set an IP address and tracing options: by time or by number of queries.

    ![](./images/XRayAdvanced.png)

**Advanced settings**

* <span class="notranslate">**Client’s IP**</span>: it is an IPv4 address of a machine to trace. For example, if you have a production website that processes requests from different IP addresses and you do not want to add these requests to the tracing task. So, you can set a specific IP address and <span class="notranslate">X-Ray</span> will analyze requests only from this specific IP address.
Record for
* <span class="notranslate">**Time period**</span>: how much time <span class="notranslate">X-Ray</span> collect the requests (2 days max)
* <span class="notranslate">**Requests**</span>: the amount of requests that <span class="notranslate">X-Ray</span> will collect

After creating, the task appears in the list of tracing tasks.

![](./images/XRayTrcingTaskList.png)

### Viewing tracing tasks list

![](./images/XRayTrcingTaskList1.png)

Tasks created *Manually* are simply tracing tasks.

### Tracing status

A tracing task can have the following statuses:

* <span class="notranslate">**Running**</span> – tracing is in progress
* <span class="notranslate">**Stopped**</span> – tracing was stopped by administrator
* <span class="notranslate">**On hold**</span> – the same URL already exists in the lists. Task processing will not start automatically. Administrator should start it manually.
* <span class="notranslate">**Completed**</span> – period of time is finished or number of requests is reached.

### Collected requests for tracing task

:::warning Warning!
Collected requests are available in the UI for two weeks.
:::

Click ![](./images/XRayView.png) to open a list of collected requests.

### Tracing tasks

![](./images/XRayCollectedRequests.png)

The slowest request is highlighted.

![](./images/XRaySlowestRequest.png)

* <span class="notranslate">**Total**</span> displays how many requests were collected according to tasks requirements.
* <span class="notranslate">**Pending**</span> displays how many of collected requests are not visible in the table yet.
* <span class="notranslate">**Throttled**</span> displays the number of requests during the execution of which the LVE limits were exceeded.
* <span class="notranslate">**Slow**</span> displays the number of requests lasting more than one second.

There are filters for the request types and the indicator of a filter used now.

![](./images/FilterIndicator.png)

If slow requests were not detected during the tracing task, the following is displayed. Here, you can also view all requests.

![](./images/RecordedSession.png)


<span class="notranslate">X-Ray</span> collects the following data for each request:

* <span class="notranslate">**Top issues**</span> – the slowest items of a request
* <span class="notranslate">**Software modules/plugins**</span> by execution time (only for WordPress plugins)
* <span class="notranslate">**Database queries**</span> by execution time 
* <span class="notranslate">**External requests**</span> by execution time
* <span class="notranslate">**Other system functions**</span> by execution time 

### Software modules/plugins

![](./images/XRaySoftwareModulesPlugins.png)

The <span class="notranslate">_Software modules/plugins_</span> section displays the following data:

* <span class="notranslate">**Software type**</span> – a type a module/plugin. For now, <span class="notranslate">X-Ray</span> can analyze only WordPress software
* <span class="notranslate">**Software module**</span> – a name of the WordPress plugin
* <span class="notranslate">**Duration**</span> – plugin execution time
* <span class="notranslate">**Duration (%)**</span> – plugin execution time as a percentage of the total duration of the request

### Database queries

![](./images/XRayDatabaseQueries.png)

The <span class="notranslate">_Database queries_</span> section displays the following data:

* <span class="notranslate">**Query**</span> – the executed SQL-query
* <span class="notranslate">**File**</span> – the file and the line of the executed query and backtrace
* <span class="notranslate">**Software module**</span> – a WordPress plugin name from which the request was completed. If the request does not belong to any of the WordPress plugin, the name of the function that executed the given request is displayed
* <span class="notranslate">**Calls**</span> – the number of identical SQL queries
* <span class="notranslate">**Duration**</span> – execution time as a percentage of the total duration of a request and the function processing time (in brackets)
 
### External requests

![](./images/XRayExternalRequests.png)

The <span class="notranslate">_External requests_</span> section displays the following data:

* <span class="notranslate">**URL**</span> – the URL of the executed request
* <span class="notranslate">**File**</span> – the file and the line of the executed request and backtrace
* <span class="notranslate">**Duration**</span> – execution time as a percentage of the total duration of a request and the function processing time (in brackets)
 
### System functions

![](./images/XRaySystemFunctions.png)

The <span class="notranslate">_System functions_</span> section displays the following data:

* <span class="notranslate">**Function**</span> – the executed function
* <span class="notranslate">**File**</span> – the file and the line of the executed request
* <span class="notranslate">**Duration**</span> – execution time as a percentage of the total duration of a request and the function processing time (in brackets)

### Stopping tracing task

Click ![](./images/XRayStop.png) to stop the tracing task.

![](./images/XRayStopped.png)

The tracing task status will be changed to <span class="notranslate">**Stopped**</span>. Data will not be collected anymore but you can see already collected information or continue tracing later by clicking ![](./images/XRayStart.png).

### Deleting tracing task 

Click ![](./images/XRayDelete.png) to delete the tracing task.

:::warning Warning!
When you have deleted a tracing task, all collected data will be unavailable.
:::

## Managing continuous tasks

### Creating a new continuous task

1. Click the *Create continuous tracing*  button 

![](./images/XRayCreateContinuousTaskBtn.png)

2. Specify URL in the *Domain* field and email in the *Email for reports* field and click the *Create* button.

![](./images/XRayCreateContinuousTaskForm.png)

3. You can see a new task in the *Continuous tracing* tab in the X-Ray UI.

![](./images/XRayContinuousTracingTab.png)

4. If you stop a continuous tracing task, a new task for the next 24 hours will not be created. The task for the current day will be finished at midnight and the report will be emailed.

5. If you delete a continuous tracing task, the task for the current day will be finished at midnight and the report will be emailed.

### Viewing continuous tasks list

You can find a list of continuous tracing tasks in the _Continuous tracing_ tab.

![](./images/XRayContinuousTracingTasksList.png)

You can find automatically created tasks in the _Tracing tasks_ tab marked as _Automatically_ in the _Created_ column.

![](./images/XRayContinuousTracingTasksListCreated.png)

The [statuses for automatically created tasks](/cloudlinux-os-plus/#tracing-status) are the same as for tracing task.

To view detailed info about an automatically created task, click ![](./images/XRayView1.png). You will get requests grouped by hour.

![](./images/XRayContinuousTracingTasksListGrouped.png)

Click to a group to open a list of the requests.

![](./images/XRayContinuousTracingTasksRequestsList.png)

The following data is collected for each request:

* Software modules/plugins by execution time (only for WordPress plugins)
* Database queries by execution time
* External requests by execution time
* Other system functions by execution time

### Stopping automatic tracing task

Stopping automatic tracing task (a part of continuous tracing task) affects only the automatic tracing task for the current day. A new task for the next day will be created at the end of the day.

To stop the continuous tracing task completely, see [Creating a new continuous task, paragraph 4](/cloudlinux-os-plus/#creating-a-new-continuous-task).


### Deleting automatic tracing task

Deleting automatic tracing task (a part of continuous tracing task) affects only the automatic tracing task for the current day. A new task for the next day will be created at the end of the day.

To delete the continuous tracing task completely, see [Creating a new continuous task, paragraph 5](/cloudlinux-os-plus/#creating-a-new-continuous-task).


### Continuous task daily report

1. Users get daily reports on their emails. An example of a report is shown below:

    ![](./images/XRayContinuousTaskDaylyReportExample.png)

2. Click the link in the email to show the detailed report:

    ![](./images/XRayContinuousTaskDaylyReportCollectedRequests.png)

3. You can view requests grouped by hour:

    ![](./images/XRayContinuousTaskDaylyReportByHourRequests.png)

4. You can also view the detailed information about request:

    ![](./images/XRayContinuousTaskDaylyReportRequestDetails.png)


## X-Ray Autotracing

X-Ray Autotracing automatically creates tracing tasks for slow URLs that were found during a day by the [PHP Slow Site Analyzer](/lve_manager/#website-monitoring-tool-and-slow-site-analyzer) (SSA).

:::warning Warning
To use X-Ray Autotracing, update your alt-php-ssa and alt-php-xray packages to versions alt-php-ssa-0.2-1 and alt-php-xray-0.4-1 or higher by running the following command:
```
# yum update alt-php-ssa alt-php-xray --enablerepo=cloudlinux-updates-testing
```
:::

### How to enable X-Ray Autotracing

To enable X-Ray Autotracing, run the following commands via SSH:

```
# /usr/sbin/cloudlinux-ssa-manager enable-ssa
# /usr/sbin/cloudlinux-autotracing enable --all
```

Check [CLI documentation](/command-line_tools/#x-ray-autotracing) for a description of the `/usr/sbin/cloudlinux-autotracing` CLI utility.

### Requirements

* CloudLinux OS Shared Pro or CloudLinux OS Solo or CloudLinux OS Admin
* alt-php-ssa > 0.2-1 version
* alt-php-xray > 0.4-1 version
* Enabled PHP SSA on the server

### Autotracing Interface

A new tab for Autotracing tasks was added to the X-Ray UI:


![](./images/XRayAutotracingtaskstab.png)


### Autotracing FAQ

Q: Why are the slow URLs in the Slow Site Analyzer report different from those on which the autotracing tasks were created?

A: Because the autotracing decision module uses rules and thresholds different from Slow Site Analyzer, which are configured by the CloudLinux team.

Q: How often autotracing tasks will be generated?

A: Once a day at the same time as a Slow Site Analyzer report.

## X-Ray Smart Advice

Smart advice is a new feature of X-Ray that is designed to find and propose solutions to fix performance issues and speed up the performance of a sites.

:::tip Note
Smart Advice will work only for CloudLinux OS Shared Pro servers with cPanel Control Panel for now.

At the moment, Smart Advise is focused only on WordPress sites.
:::

:::warning Warning
To use X-Ray Smart Advice, update your alt-php-ssa and alt-php-xray packages to versions alt-php-ssa-0.2-3 and alt-php-xray-0.5-1 or higher by running the following command:
```
# yum update alt-php-ssa alt-php-xray lve-utils lvemanager --enablerepo=cloudlinux-updates-testing
```
:::

### How to enable X-Ray Smart Advice

:::warning Attention!
If you'd like to try Smart Advice and AccelerateWP you should participate in the Beta tester program. To become a beta tester, please send your request at our Beta program page with the signup form [here](https://www.cloudlinux.com/wp-performance/). Once you submit the request, we will send you a confirmation email with program details and terms of use.
:::

### Requirements

* CloudLinux OS Shared Pro or CloudLinux OS Solo
* alt-php-xray > 0.5-1 version
* lve-utils > 6.3.2-1 version
* lvemanager > 7.6.1-1 version
* cloudlinux-site-optimization-module > 0.1-1 version

We Recommend:

* Enable [X-Ray Autotracing](cloudlinux-os-plus/#x-ray-autotracing) on the server
* Use alt-php-ssa > 0.2-3 version

### How X-Ray Smart Advice works

The main process of looking for advice is X-Ray tracing tasks. The best way for doing this is to enable X-Ray Autotracing. 
This will allow you to most effectively find Smart Advice for sites that have performance issues without your manual participation. 
You can find information on how to enable X-Ray Autotracing [here](/cloudlinux-os-plus/#how-to-enable-x-ray-autotracing).
On the other hand, you can create tracing tasks manually or use continuous X-Ray but we suggest you use X-Ray Autotracing for this purpose.

:::tip Note
Advice will not be generated by old tracing tasks.
:::

While the tracing task is running, X-Ray will look for places where advice can be applied. New advice will be displayed on the *Smart Advice* tab. 

![](./images/XRaySmartAdviceMainTab.png)

After the X-Ray finds advice you will see new advice in the *Review* status on the *Smart Advice* tab. 
Then you may use the *Details* button to see which URLs were found by X-Ray that will be speed up by that advice and use *Quick Action* to enable advice for a site.

Example of details:

![](./images/XRaySmartAdviceDetails.png)

After you apply the advice by using *Quick Action*, the status will change to the *Applied*.

If a long time has passed since the last time the advice was updated for a site, it will be moved to the *Outdated* status. 

:::tip Note
New X-Ray task may update *Outdated* advice if X-Ray finds performance issues that may be fixed by that advice. Then the status of advice becomes *Review*.
:::

If the process of applying advice fails you will see an error log with a detailed error, you may try to fix it manually and try again or [contact our support team for help](https://cloudlinux.zendesk.com/hc/en-us). 

Example when an error appears during advice applying:

![](./images/XRaySmartAdviceError.png)

### Smart Advice FAQ

Q: Why I can't see new advice on the *Smart Advice* tab?

A: For the generating of advice, it is necessary to run X-Ray tracing tasks, the best way to do it without manual interaction is to use X-Ray Autoracing. You can find more information on how to enable X-Ray Autotracing [here](/cloudlinux-os-plus/#how-to-enable-x-ray-autotracing).

### Useful Smart Advice CLI commands

:::warning Warning!
This is an experimental feature. The backwards compatibility is not guaranteed.
:::

To obtain the full list of advice generated for your server use the following CLI command:

```
cl-smart-advice list
```

For each advice in the list the CLI command returns the following information:
* `metadata`, which includes information about `username`, `domain` and `website` for which the advice is issued
* `advice` information:
  * its identifier `id`
  * its `type`
  * its `status` -- `review` or `applied`
  * if advice is Premium `is_premium`
  * other internal informational fields

The example output is given below:

```
{
  "data": [
    {
      "created_at": "2023-04-11T07:33:48.191870+00:00",
      "updated_at": "2023-04-11T07:33:48.191870+00:00",
      "metadata": {
        "username": "user16",
        "domain": "user16.com",
        "website": "/wordpress"
      },
      "advice": {
        "id": 23484,
        "type": "OBJECT_CACHE",
        "status": "review",
        "description": "Turn on Object Caching",
        "is_premium": true,
        "module_name": "object_cache",
        "subscription": {
          "status": "no",
          "upgrade_url": null
        },
        "total_stages": 0,
        "completed_stages": 0,
        "detailed_description": "To improve site performance, enable the Object Caching We recommend applying the advice if you see it frequen
tly for the most valuable URLs of your site."
      }
    },
    {
      "created_at": "2023-04-11T07:33:48.297784+00:00",
      "updated_at": "2023-04-11T08:51:42.362117+00:00",
      "metadata": {
        "username": "user16",
        "domain": "user16.com",
        "website": "/wordpress"
      },
      "advice": {
        "id": 23485,
        "type": "SITE_OPTIMIZATION",
        "status": "applied",
        "description": "Turn on AccelerateWP feature",
        "is_premium": false,
        "module_name": "accelerate_wp",
        "total_stages": 0,
        "completed_stages": 0,
        "detailed_description": "To improve site performance, enable the AccelerateWP optimization feature. We recommend applying the advice if you see it frequently for the most valuable URLs of your site."
      }
    }
  ],
  "result": "success",
  "timestamp": 1681203110
}
```

## Advanced performance analytics

By enabling this feature, X-Ray will add JavaScript profiling code to each WordPress site during the tracing process. This will allow X-Ray to provide highly detailed insights into each website’s performance (greatly enhancing the quality and accuracy of SmartAdvice). The performance metrics that will be collected include TTFB (Time To First Byte), Total Blocking Time, First Contentful Paint, and more. The profiling code does not collect any user or visitor data nor sensitive data of any kind. The sole purpose of this profiling code is to gather performance-related metrics to better optimize the website.

### How to enable/disable via UI
You can manage the setting in several interfaces:  

X-Ray settings  
![](./images/XRayAdvancedMetrics.ui.xray.png)

AccelerateWP settings  
![](./images/XRayAdvancedMetrics.ui.awp.png)

### How to enable/disable via CLI
To enable:  
```cloudlinux-xray-manager advanced-metrics --enable```

To disable:  
```cloudlinux-xray-manager advanced-metrics --disable```

### How it works
To start advanced performance monitoring, you can enable tracing tasks that involve adding a JavaScript snippet to the bottom of your WordPress page. This snippet facilitates performance monitoring and allows X-Ray to gather valuable insights.

Once tracing tasks are enabled, the JavaScript snippet will periodically send POST requests to our secure analytics service.
![](./images/XRayAdvancedMetrics.request.png)

These requests capture anonymous data about page load time and resources.
![](./images/XRayAdvancedMetrics.data.png)

## End-user X-Ray plugin

:::warning Warning
To use the end-user X-Ray plugin, update your LVE Manager and X-Ray packages to the `lvemanager-6.3.9-1` (or later) and `alt-php-xray-0.3-1` (or later) by running the following command:
```
# yum update lvemanager alt-php-xray
```
:::

### How to enable/disable the end-user X-Ray plugin

You can hide or show the end-user X-Ray plugin icon by ticking or unticking the proper checkbox in the LVE Manager.

Go to _LVE Manager → Options Tab → User interface settings_.

![](./images/HideXRayAppCheckbox.png)

:::tip Note
The X-Ray plugin icon in the end-user interface is hidden when the checkbox is ticked.
:::

![](./images/XRayAppUIIcon.png)

### How to manage the end-user X-Ray plugin

The web interface of the end-user X-Ray plugin is almost the same as the X-Ray administrator interface.

![](./images/XRayEndUserUI.png)

But there are some differences and they are described further.

* End-users can create tasks only for their domains from the drop-down list:
    ![](./images/XRayEndUserUIStart.png)
* To specify URL or wildcard, end-users should use the input field next to the domain:
    ![](./images/XRayEndUserUiSpecifyURL.png)

You can read about all other basic interface elements and managing tracing tasks in the [Managing tracing task section](/cloudlinux-os-plus/#managing-tracing-task).

:::tip Note
Tracing tasks created by an end-user will also be displayed in the administrator interface and administrators can manage the end-user's tasks the same way as they manage their own. At the same time, tasks created by the administrator or other end-users will not be displayed in the UI of the current user.
:::

### End-user X-Ray plugin limitations

* The end-user X-Ray plugin does not support creating continuous tasks.
* The end-user has a limit of tracing tasks running at a time. Before starting the next task, the end-user should wait for the completion of the previous ones or forcefully stop the running ones. Otherwise, the user will get the next error:
    
    ![](./images/XRayEndUserUIError.png)
    :::tip Note
    The current limit is one tracing task per user. 
    :::
* The administrator and the end-user can’t run the tracing task for the same Domain/URL at the same time. Once, the administrator started a specific tracing task, the end-user will not be able to duplicate it. And the same is true for the administrators – they will just see the running task for the specific domain and see the notification that they're trying to create a tracing task with a duplicated URL.
* If continuous tracing is enabled for the domain, the end-user will not be able to create a new task for this domain because the same rule works - it will be a duplicate of the existing tracing tasks. The next warning will appear:
    
    ![](./images/XRayEndUserUIWarning.png)

    To solve this, the existing running tasks for the same Domain/URL should be stopped or completed. You can find more details about this in the [FAQ](/cloudlinux-os-plus/#what-should-i-do-if-i-see-the-warning-task-is-duplicated-by-url).

* If a user's tracing task was created for a domain which is using the FPM handler there's an additional limitation.  To avoid  frequent reloads of the particular FPM service, **Start tracing** ,  **Stop tracing** or  **Continue tracing** action would be blocked in case if the latest reload of a corresponding FPM service was done less than 1 minute ago.  
If a user gets such an error message - it means that  1 reload  in  1 minute for a particular FPM service has been already done.  Just try performing the same operation once again in a while.

![](./images/XRayEndUserFPMerror.png)
	
## X-Ray automated throttling detection

:::tip Note
**CPU throttling detection** is available since `alt-php-xray-0.3-2` and `lvemanager-xray-0.5-2`.

**IO/IOPS throttling detection** is available since `alt-php-xray-0.3-7` and `lvemanager-xray-0.7-1`.

- `kmod-lve-2.0-23` (and later) for CloudLinux OS Shared 8 or CloudLinux OS Shared 7 hybrid
- `kernel-1.5-58` (and later) for CloudLinux OS Shared 7 or CloudLinux OS Shared 6 hybrid

are also required to utilize the feature of **IO/IOPS throttling detection**.
:::

:::warning Warning
X-Ray automated throttling detection feature is not supported for CloudLinux OS Shared 6
:::

The X-Ray automated throttling detection system checks if the account exceeds LVE limits by CPU or by IO/IOPS during the HTTP request execution. Requests with exceeded LVE limits are indicated in both X-Ray Administrator and X-Ray User plugins.

If CPU limiting was detected for a particular request, it is indicated in the X-Ray UI that the system itself has slowed down the request processing due to CPU throttling and this is apparently not a performance issue in the PHP code.

If limiting by IO and IOPS in total was detected for a particular request, it is indicated in the X-Ray UI in the same manner, except for the cause of slowing down the request -- IO throttling.

The case of both limiting for the request is also possible.

![](./images/CPUIOLimiting.png)

Requests with exceeded LVE limits are also marked in the request detailed view.

![](./images/RequestDetails.png)

Requests with exceeded LVE limits are marked in the PDF report as well.

![](./images/PDFReport.png)


## X-Ray client

<span class="notranslate">X-Ray</span> client is a PHP extension named <span class="notranslate">`xray.so`</span>. It analyzes the processing time of the entire request and its parts and then sends the data to the <span class="notranslate">X-Ray</span> agent.

### List of supported PHP versions

The list of currently supported PHP versions:

| | | | | |
|-|-|-|-|-|
|**ALT PHP**:|**EA PHP**:|**Plesk PHP**|**DirectAdmin PHP**|**Other panels PHP**|
| <ul><li>alt-php54</li><li>alt-php55</li><li>alt-php56</li><li>alt-php70</li><li>alt-php71</li><li>alt-php72</li><li>alt-php73</li><li>alt-php74</li><li>alt-php80</li><li>alt-php81</li></ul>|<ul><li>ea-php54</li><li>ea-php55</li><li>ea-php56</li><li>ea-php70</li><li>ea-php71</li><li>ea-php72</li><li>ea-php73</li><li>ea-php74</li></ul>|<ul><li>php54</li><li>php55</li><li>php56</li><li>php70</li><li>php71</li><li>php72</li><li>php73</li><li>php74</li></ul>|<ul><li>php54</li><li>php55</li><li>php56</li><li>php70</li><li>php71</li><li>php72</li><li>php73</li><li>php74</li></ul>|<ul><li>54</li><li>55</li><li>56</li><li>70</li><li>71</li><li>72</li><li>73</li><li>74</li></ul>|

:::warning Warning!
<span class="notranslate">[php-zts](/cloudlinux_os_components/#how-to-configure-alt-php72-zts-to-use-with-php-selector)</span> and [custom PHPs, rolled in selector](/cloudlinux_os_components/#roll-your-own-php), are not supported
:::

### Functions that X-Ray client can hook

### Database queries

* Functions from the [MySQL](https://www.php.net/manual/ru/book.mysql.php) extension:
    * <span class="notranslate">`mysql_query`</span>
    * <span class="notranslate">`mysql_db_query`</span>
    * <span class="notranslate">`mysql_unbuffered_query`</span>
* Functions from the [MySQLi](https://www.php.net/manual/ru/book.mysqli.php) extension:
    * <span class="notranslate">`mysqli_query`</span>
    * <span class="notranslate">`mysqli::query`</span>
    * <span class="notranslate">`mysqli_multi_query`</span>
    * <span class="notranslate">`mysqli::multi_query`</span>
    * <span class="notranslate">`mysqli_real_query`</span>
    * <span class="notranslate">`mysqli::real_query`</span>
* Functions from the [PDO](https://www.php.net/manual/ru/book.pdo.php) extension:
    * <span class="notranslate">`PDO::exec`</span>
    * <span class="notranslate">`PDO::query`</span>
    * <span class="notranslate">`PDOStatement::execute`</span>

### External requests

* Function [curl_exec](https://www.php.net/manual/ru/function.exec)

### System PHP functions

It may be any PHP system function which can be related to a PHP engine or other PHP extension, for example <span class="notranslate">`fopen()`</span> or <span class="notranslate">`json_encode()`</span>. A list of these functions can be found [here](https://www.php.net/manual/en/indexes.functions.php).

### Configuration Options

<div class="notranslate">

### xray.enabled

</div>

**Syntax**: <span class="notranslate">`xray.enabled=On/Off`</span>

**Default**: <span class="notranslate">On</span>

**Changeable**: <span class="notranslate">PHP_INI_SYSTEM</span>

**Description**: Enable or disable <span class="notranslate">X-Ray</span> extension from php.ini

-----

<div class="notranslate">

### xray.database_queries

</div>

**Syntax**: <span class="notranslate">`xray.database_queries=[number]`</span>

**Default**: 20

**Changeable**: <span class="notranslate">PHP_INI_SYSTEM</span>

**Description**: The number of the slowest SQL queries which will be sent to the <span class="notranslate">X-Ray</span> agent. The min value is 0 and the max value is 100. If the variable value is more, the default value will be used.

-----

<div class="notranslate">

### xray.external_requests

</div>

**Syntax**: <span class="notranslate">`xray.external_requests=[number]`</span>

**Default**: 20

**Changeable**: <span class="notranslate">PHP_INI_SYSTEM</span>

**Description**: The number of the slowest external requests (the curl_exec function) which will be sent to the <span class="notranslate">X-Ray</span> agent. The min value is 0 and the max value is 100. If the variable value is more, the default value will be used.

-----

<div class="notranslate">

### xray.system_functions

</div>

**Syntax**: <span class="notranslate">`xray.system_functions=[number]`</span>

**Default**: 20

**Changeable**: <span class="notranslate">PHP_INI_SYSTEM</span>

**Description**: The number of the slowest system functions which will be sent to the <span class="notranslate">X-Ray</span> agent. 
The min value is 0 and the max value is 100. If the variable value is more, the default value will be used.

-----

<div class="notranslate">

### xray.backtrace_depth

</div>

**Syntax**: <span class="notranslate">`xray.backtrace_depth=[number]`</span>

**Default**: 10

**Changeable**: <span class="notranslate">PHP_INI_SYSTEM</span>

**Description**: The backtrace depth to the main() function which will be sent to the <span class="notranslate">X-Ray</span> agent. The min value is 0 and the max value is 20. If the variable value is more, the default value will be used.

-----

<div class="notranslate">

### xray.processor

</div>


**Syntax**: <span class="notranslate">`xray.processor=[processor_name]`</span>

**Default**: <span class="notranslate">xray</span>

**Changeable**:  <span class="notranslate">PHP_INI_SYSTEM</span>

**Description**: Tells the <span class="notranslate">X-Ray</span> client which processor to use. The new processors may be added in the future. The default processor is xray which means to send data to the <span class="notranslate">X-Ray</span> agent.

-----

<div class="notranslate">

### xray.tasks

</div>

**Syntax**: <span class="notranslate">`xray.tasks=host:uri:ip:id`</span>

**Default**: <span class="notranslate">no value</span>

**Changeable**:  <span class="notranslate">PHP_INI_SYSTEM</span>

**Description**: The current tracing tasks for the given PHP request. This directive is added automatically by the <span class="notranslate">X-Ray</span> manager when creating a task. It is not allowed to edit manually, as <span class="notranslate">X-Ray</span> may stop working.

-----

<div class="notranslate">

### xray.to_file

</div>

**Syntax**: <span class="notranslate">`xray.to_file=On/Off`</span>

**Default**: <span class="notranslate">Off</span>

**Changeable**:  <span class="notranslate">PHP_INI_SYSTEM</span>

**Description**: Only for debug purposes. Writes to a file data which is sent to the processor.

-----

<div class="notranslate">

### xray.debug

</div>

**Syntax**: <span class="notranslate">`xray.debug=On/Off`</span>

**Default**: <span class="notranslate">Off</span>

**Changeable**: <span class="notranslate">PHP_INI_SYSTEM</span>

**Description**: Only for debug purposes. Enables debug output during request processing. In the On mode can slow down the domain.

-----

<div class="notranslate">

### xray.debug_file

</div>

**Syntax**: <span class="notranslate">`xray.debug_file=[path_to_file]`</span>

**Default**: <span class="notranslate">`/tmp/xray-debug.log`</span>

**Changeable**: <span class="notranslate">PHP_INI_SYSTEM</span>

**Description**: Only for debug purposes. Specifies a file for logging debug information.


## X-Ray agent 


This is a service that receives data from the <span class="notranslate">X-Ray</span> client and sends it to the remote storage.

### Managing X-Ray service

The <span class="notranslate">X-Ray</span> agent is managed by the <span class="notranslate">`service`</span> utility.

* To start the <span class="notranslate">X-Ray</span> agent, run the following command:

    <div class="notranslate">

    ```
    # service xray-agent start
    ```
    </div>

* To stop the <span class="notranslate">X-Ray</span> agent, run the following command:

    <div class="notranslate">

    ```
    # service xray-agent stop
    ```
    </div>

* To restart the <span class="notranslate">X-Ray</span> agent, run the following command:

    <div class="notranslate">

    ```
    # service xray-agent restart
    ```
    </div>

## FAQ

### Does X-Ray affect website performance?

<span class="notranslate">X-Ray</span> affects website performance. Our tests show 5-10 % overhead from a website loading time with <span class="notranslate">X-Ray</span> tracing enabled.
<span class="notranslate">X-Ray</span> allows you to find website performance issues and should not be enabled permanently. If your website is very slow, you can enable <span class="notranslate">X-Ray</span> to find the cause and then disable it.

### What should I do if I see the warning "Task is duplicated by URL"?

This warning means that you already have a task to trace this URL in the list of your tracing tasks. If you see this warning, a new task can be created only with the <span class="notranslate">_On hold_</span> status and you will be able to run it only when the previous task with the same URL will be completed.

Note that the URL field supports wildcard matching and you can have a case when <span class="notranslate">X-Ray</span> is tracing the <span class="notranslate">`URL=domain.com/*`</span> and you are trying to create a new task with <span class="notranslate">`URL=domain.com/xray.php`</span>. In this case, you will see that warning because the `*` URLs array includes <span class="notranslate">`xray.php`</span>.

###  I started a tracing task and made requests to URL but did not see any results in the UI. What should I do?

1. <span class="notranslate">X-Ray</span> may not send data if a site uses a caching plugin, as the caching plugin is outputting HTML, thus there are no PHP scripts to examine. We encountered such issues with sites that use <span class="notranslate">LSCache</span> and <span class="notranslate">WP Super Cache</span> plugins. Check that your site does not use caching plugins. If so, disable it while tracing a site to get information from <span class="notranslate">X-Ray</span>. Moreover, it can also be because of caching on server side, for example NGINX Cache. Or when using CDN because requests are processed from another host. In such cases, during tracing, caching must also be disabled.
2. If you set a client’s IP when creating the tracing task, check that your requests come to the server with this IP via phpinfo (since there may be NAT between your local machine and the server).
   
    ![](./images/XRayPHPInfoRemoteAddr.png)

3. Check that <span class="notranslate">**xray**</span> extension is enabled for the domain. To do so, go to the <span class="notranslate">`phpinfo()`</span> page and make a request. In the phpinfo output try to find the following section:
   
    ![](./images/XRayPHPInfo.png)

If you cannot see that section, try to restart PHP processes for that user (the simplest way is to restart Apache) and check that you can see the <span class="notranslate">**xray**</span> extension.

4. If you can see the <span class="notranslate">**xray**</span> extension in the phpinfo, check that <span class="notranslate">X-Ray</span> agent service is running with the service xray-agent status command. If it is not running, start it with the <span class="notranslate">`service xray-agent start`</span> command.

5. If, after checking the previous items, the issue persists, [contact our support team](https://cloudlinux.zendesk.com/hc/en-us/requests/new).

### What to do if X-Ray is not found in the phpinfo() page?

If you managed to create a tracing task, this means that the <span class="notranslate">`xray.ini`</span> file was created in a system. Therefore, there may be two reasons why it did not appear in the phpinfo page of the domain.

1. PHP process wasn't reloaded after adding the xray.ini. To solve this, you should restart the Apache or fpm service for the domain on which the tracing was started. At the moment, this is done automatically by the <span class="notranslate">X-Ray</span> manager after creating the task.
2. Your domain uses a PHP version different from the one which was detected by the <span class="notranslate">X-Ray</span> manager. To solve this, check the scan dir for additional ini files for your domain.

    ![](./images/XRayScanDir.png)

    Then check the <span class="notranslate">`ini_location`</span> that was passed to the <span class="notranslate">X-Ray</span> manager by running the following command:

    <div class="notranslate">

    ```
    # cat /usr/share/alt-php-xray/manager.log | grep ini_location
    ```
    </div>

    Find your tracing task in the output and check that the <span class="notranslate">`xray.ini`</span> exists in this directory, also check that the `ini` path is the same in the phpinfo page output and in the <span class="notranslate">`ini_location`</span> directive for your tracing task. If they are the same, you should reload your PHP. If they are different that means that the <span class="notranslate">X-Ray</span> manager could not correctly determine the PHP version your domain uses. In this case, contact our support team at [https://cloudlinux.zendesk.com/hc/requests/new](https://cloudlinux.zendesk.com/hc/requests/new).


### I use LiteSpeed, X-Ray is enabled and it is shown in the phpinfo() page but does not collect data when sending requests to a site. What to do?

Check for the <span class="notranslate">`CacheLookup on`</span> option in the `htaccess` file for your domain.
If the option is there, LiteSpeed processes requests bypassing the PHP X-Ray extension.
In this case, to get tracing information, you should remove the <span class="notranslate">`CacheLookup on`</span> option.

### What is the proper format for the URL?

All of the examples below are correct:

* `http://domain.com`
* `http://domain.com/`
* `https://domain.com`
* `https://domain.com/`

You can use any of them with a prefix `www.` and it is also correct.

### What packages are required for X-Ray?

Required packages:

* `lvemanager` >= 6.2.10-1
* `alt-php-xray` >= 0.2-1
