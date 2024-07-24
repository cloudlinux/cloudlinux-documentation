# ELevate

[[toc]]

:::warning
Please note that the CloudLinux Elevate tool is intended specifically for upgrading the CloudLinux OS.
Upgrading to CloudLinux directly from a non-CloudLinux OS is **not supported**.

While it is possible, it requires additional steps to be taken.
Refer to [this documentation section](#i-have-a-centos-7-system-i-want-to-migrate-to-cloudlinux-8-can-i-use-your-tool-to-do-so) for details.
:::

:::warning
We disclaim responsibility for incorrect or improper use of the tool. The support team will not be able to help you if you have not followed all the steps described in the documentation or converted a server with an unsupported control panel present.

In addition, support will not be provided if you have any third-party utilities that do not function after the upgrade, according to [Support policy](https://www.cloudlinux.com/CloudLinux-and-Imunify-support-policy.pdf). Examples: webservers, DNS servers, mail servers, database servers and other utilities that do not belong to our product line.
:::

## FAQ

### What is ELevate?
The ELevate project is an initiative to support migrations between major version of RHEL-derivatives.

The CloudLinux ELevate variant, built on top of the [AlmaLinux ELevate project](https://wiki.almalinux.org/elevate/), aims to provide a streamlined method of upgrading CloudLinux 7 systems to CloudLinux 8 in-place.

The [Leapp utility](https://leapp.readthedocs.io/) is the main tool used to perform the upgrade.

The [ELevate Scenario - CloudLinux 7 with cPanel](#elevate-scenario-cloudlinux-7-with-cpanel) uses the [cPanel ELevate](https://github.com/cpanel/elevate) project as an additional layer of the upgrade process.

The [ELevate Scenario - CloudLinux 7 with Plesk](#elevate-scenario-cloudlinux-7-with-plesk) also uses an additional layer - the [cloudlinux7to8](https://github.com/plesk/cloudlinux7to8) project.

ELevate is a project aimed to provide the ability to migrate between major versions of RHEL-based distributions from 7.x to 8.x. It combines Red Hat's Leapp framework with a community created library and service for the migration metadata set required for it.


### Is it ready for production use?

While the ELevate project and its surrounding ecosystem is mature, support for CloudLinux has been introduced more recently.

We guarantee functionality of CloudLinux products and services on the post-upgrade system. You are welcome to contact CloudLinux Support with any issues that occur with said products.

However, we cannot guarantee that the third-party software and RPM packages will be updated correctly on all system configurations. [See below](#will-it-upgrade-everything-i-have-on-my-system).

Systems with configurations and packages that substantially differ from a typical CloudLinux 7 installation could encounter issues previously not seen before.


### Can it break something on my system?

It can.

A full system upgrade is an inherently invasive procedure. In some cases, due to different system configurations, package errors or even power failures, you may encounter issues during the upgrade process that can't be automatically recovered from.

Said issues may be severe, **<font color="Red">up to and including rendering the system completely inaccessible.</font>**

In addition, in some cases the conversion process may get stuck once the server boots into a temporary configuration that does not start any network interfaces. It is preferable to have a way to access the server without an SSH connection, for example, through VNC.

The upgrade process itself is not designed to be reversible. While some of the changes can be undone, the process of reverting the system to its pre-upgrade state varies depending on the system's configuration and the point at which the upgrade failed. Thus, restoring the system from a backup is the most reliable way to recover from a failed upgrade.

Due to all of the potential risks involved, we **highly recommend never running ELevate on a system without a full server backup/snapshot ready**.

Ideally, perform a trial run in a disposable environment, like a VM or a sandbox, to verify that migration functions as expected before you attempt to migrate a system.


### Will it upgrade everything I have on my system?

It depends. ELevate will not upgrade arbitrary software, especially one that isn't related to CloudLinux or a supported control panel.

The ELevate project only supports a subset of package repositories it's aware of - that is, package repositories that are included in its configuration files.

Packages from repositories Leapp is unaware of **will not be upgraded**.

It's possible to add missing repositories and packages to ELevate yourself, if you're so inclined. Please check the [Contribution](/legacy/elevate/#contribution) section for more information on how to do so.


### What packages can I expect to be upgraded?

Aside from CloudLinux and AlmaLinux packages, the CloudLinux Elevate includes the extendable "vendors" mechanism that contains migration data for some frequently used third-party system components.

That migration data is only activated when the corresponding package repositories are present and enabled on the pre-upgrade system.

Some of the vendors shipping by default include:

* Imunify360 and KernelCare
* EPEL (Extra Packages for Enterprise Linux)


### Will it interrupt my server's functionality?

Yes.

One of the major steps of the upgrade process involves rebooting into a custom `initramfs` environment, from which the system's software is upgraded. During that period of time, the system will be mostly non-functional and inaccessible.

This stage may take **up to an hour**, so schedule the upgrade accordingly.

During the preparation stages - that is, when the upgrade process is first *initiated* and before the system is rebooted - the system's services will function normally.

Note that different upgrade scenarios behave somewhat differently during the preparation stage. For example, the cPanel scenario will disable the site functionality from the inital stage up until completion, while the no-panel/custom panel scenario will not.


### How long does it take?

Depending on the amount and size of the packages that need to be updated, the upgrade process may take a long time, up to several hours. This time also varies with the machine's resources and the speed of internet connection.

If the machine remains unresponsive for more than 2 hours after rebooting, assume the upgrade process failed during the post-reboot phase, and the machine cannot return to normal functionality automatically.


### How do I use it?

Depending on the web panel you have installed on your system, the upgrade process will require different steps.

At the moment, ELevate migration from CloudLinux 7 to CloudLinux 8 is supported on:

* *no panel/custom panel* systems;
* *cPanel* systems.
* *DirectAdmin* systems.
* *Plesk* systems.


#### I have a CL7 system with no webpanel/a custom webpanel installed, how do I upgrade to CL8?

In such case, you can upgrade through the Leapp tool directly.

Please refer to the [CloudLinux 7 with no panel/custom panel ELevate Scenario](#elevate-scenario-cloudlinux-7-with-no-panel-or-a-custom-panel) for step-by-step instructions.

#### I have a CL7 system with cPanel installed, how do I upgrade to CL8?

With cPanel present on the machine, you need to run the upgrade process through the `elevate-cpanel` tool.

Please refer to the [ELevate Scenario - CloudLinux 7 with cPanel](#elevate-scenario-cloudlinux-7-with-cpanel) for step-by-step instructions.

#### I have a CL7 system with DirectAdmin installed, how do I upgrade to CL8?

The DirectAdmin panel does not require any additional actions or tools compared to the no-panel upgrade scenario.

You can make use of the [CloudLinux 7 with no panel/custom panel ELevate Scenario](#elevate-scenario-cloudlinux-7-with-no-panel-or-a-custom-panel) to upgrade systems with the DirectAdmin panel much like you would for systems without one.

#### I have a CL7 system with Plesk installed, how do I upgrade to CL8?

Like cPanel, the Plesk panel requires you to make use of an additional tool to perform the upgrade on a system. In this case, you need to use the `cloudlinux7to8` tool [provided by the Plesk team](https://github.com/plesk/cloudlinux7to8).

Please refer to the [ELevate Scenario - CloudLinux 7 with Plesk](#elevate-scenario-cloudlinux-7-with-plesk) for step-by-step instructions.

#### I have a CL7 system with a different panel installed, how do I upgrade to CL8?

Unfortunately, CloudLinux ELevate doesn't support these system configurations yet.

Instead, you can create a new machine with CloudLinux 8 and migrate your system's license and configuration to it.

Please refer to the following documentation links for instructions on how to do so:

* [How to Backup & Migrate All CloudLinux Settings to Another Server](https://cloudlinux.zendesk.com/hc/en-us/articles/115004277894-How-to-Backup-Migrate-All-CloudLinux-Settings-to-Another-Server)
* [How to Restore PHP Selector Options](https://cloudlinux.zendesk.com/hc/en-us/articles/115004517465)
* [How to obtain activation keys, register and migrate servers](https://cloudlinux.zendesk.com/hc/en-us/articles/115003888573-How-to-obtain-activation-keys-register-and-migrate-servers)

#### I have a CentOS 7 system I want to migrate to CloudLinux 8, can I use your tool to do so?

Not in a single step. The CloudLinux Elevate tool specifically targets the upgrade path of CloudLinux 7 to CloudLinux 8, and trying to use a different OS as a starting point is unlikely to end well.

If you have a non-CloudLinux OS you wish to upgrade, you have the following options available:

* [Convert your system to CloudLinux 7 normally](/legacy/cloudlinux_installation/#converting-existing-servers), then use the CloudLinux Elevate tool to migrate it to CloudLinux 8.
* If you're using a CentOS 7 system without a panel, use the [AlmaLinux Elevate](https://almalinux.org/elevate/) tool to upgrade it to AlmaLinux 8, then [convert it to CloudLinux normally](/legacy/cloudlinux_installation/#converting-existing-servers).
* If you're using cPanel, you'll need to use the [cPanel Elevate](https://cpanel.github.io/elevate/) tool instead. Use it to upgrade your system to AlmaLinux 8 + cPanel, then [convert it to CloudLinux normally](/legacy/cloudlinux_installation/#converting-existing-servers).

:::warning
Please note that the Elevate variants (AlmaLinux, cPanel) mentioned above are maintained by third parties. As such, should you encounter problems when using them, you should direct your questions/support requests to the maintainers of the tool you're using.
:::

### I ran into a problem during the upgrade process, what do I do?

Please check the Troubleshooting section directly below.

### The Troubleshooting section doesn't have an issue that I'm having. What now?

First, try to narrow down the most probable source of the issue you've encountered, if possible.

For cPanel-specific issues, [cPanel ELevate issue tracker](https://github.com/cpanel/elevate/issues) is the most appropriate place to report them.

For CloudLinux-specific issues, report them in the [CloudLinux ELevate issue tracker](https://github.com/cloudlinux/elevate/issues) or contact CloudLinux Support with a description of the encountered problem.

For issues with the underlying Leapp framework, report them in the [AlmaLinux Leapp repository issue tracker](https://github.com/AlmaLinux/leapp-repository/issues).

When filing an issue, include:
- Steps to reproduce the issue
- All files in `/var/log/leapp`
- `/var/lib/leapp/leapp.db`
- journalctl
- If using the CloudLinux 7 with cPanel scenario, `/var/log/elevate-cpanel.log`
- If you want, you can also send anything else would you like to provide (e.g. storage info)

**For your convenience you can pack all logs with this command:**

`# tar -czf leapp-logs.tgz /var/log/leapp /var/lib/leapp/leapp.db`

Then you may attach only the `leapp-logs.tgz` file.

For the no-panel scenario: before gathering data, if possible, re-run the *leapp* command that encountered an issue with the `--debug` flag, e.g.: `leapp upgrade --debug`.


## Troubleshooting

Here is a list of common problems you may encounter during the upgrade attempt.

### Common issues

These issues may be encountered during any ELevate Scenario.

#### Newest kernel

The preupgrade/upgrade process may halt with the following message:
> Inhibitor: Newest installed kernel not in use

Make sure your system is running the latest kernel before proceeding with the upgrade. If you updated the system recently, a reboot may be sufficient to do so. Otherwise, edit your Grub configuration accordingly.


#### Kernel modules deprecated

Some kernel modules are deprecated in the CloudLinux 8 major versions. To proceed with the upgade, unload them.
Leapp will advise on the list of modules to be removed.

```
rmmod floppy pata_acpi btrfs
```


#### Package repository defined multiple times

You may encounter the following error message when attempting to upgrade:

```
Inhibitor: A YUM/DNF repository defined multiple times
```

Refer to the `/var/log/leapp/leapp-report.txt` for the details on the repository in question.

To correct the issue, examine your yum reposiory configuration and clear out any dupicate entries before restarting the upgrade process.


#### Package upgrades being pulled from incorrect repositories

You may find that some packages on your system are listed in the preupgrade report in the message "Packages not signed by a known packager found on the system".

This may mean two things:
* that the packages listed are indeed unknown to Leapp, and cannot be included in the upgrade process, or;
* that the corresponding package repositories were not recognized and the vendors mechanism could not be set up properly as a result.

Make sure that all of the package repositories relevant to the current system state are present and enabled before proceeding with the upgrade.
That will ensure that the Leapp tool correctly maps the source repositories to the target ones, and includes everything available into the migration process accordingly.

Keep in mind that known vendor repositories must be enabled in order for the packages from them to be included into the upgrade.


#### SSHD config default mismatch

If your OpenSSH configuration file does not explicitly state the option PermitRootLogin in sshd_config file, this upgrade inhibitor will apperar.

The option's default is "yes" in RHEL7, but will change in RHEL8 to "prohibit-password", which may affect your ability to log onto this machine after the upgrade.

To prevent this from occuring, set the PermitRootLogin option explicity to preserve the default behaivour after migration:

```
echo PermitRootLogin yes | sudo tee -a /etc/ssh/sshd_config
```

Alternatively, configure the SSHD so that the option is present explicitly, without leaving it to the default behaviour.


#### Disabling PAM modules

PAM module pam_pkcs11 is no longer available in RHEL-8 since it was replaced by SSSD.
Leaving this module in PAM configuration may lock out the system.

Allow Leapp to disable the pam_pkcs11 module in PAM configuration by adding an entry to the Leapp answerfile:

```
sudo leapp answer --section remove_pam_pkcs11_module_check.confirm=True
```

#### CLN registration

Should you encounter an issue with the `switch_cln_channel` actor, make sure that your system is registered with the CLN network.

`rhn_check; echo $?`

If it is not, you may want to force a [re-registration.](/legacy/cloudlinux_installation/#license-activation)


#### CLN channel remains targeting CL8 after an unsuccessful migration

If you roll back a machine after an unsuccessful migration, you may find that your server still pulls package updates from the CLN repository for CL8.

This will be indicated by upgrades pulling packages from the `cloudlinux-x86_64-server-8` repository.

To switch back to the CL7 channel manually, run the following command:

```
cln-switch-channel -t 7 -o -f
```


#### DNF plugin installation

You may encounter issues with Leapp DNF actors failing with the following message:
`Cannot obtain data about the DNF configuration.`

To resolve this problem, ensure that the **dnf config-manager plugin** is installed and is functioning properly.

If not, enable the corresponding package repository (e.g. `centos-extras`) and install it.

`dnf install 'dnf-command(config-manager)'`


#### DNF transaction failures

The main upgrade transaction is performed while the system is booted into a custom InitRamFS. From there, all the package operations prepared during the previous steps are performed.

While in this state, the system is inaccessble remotely via SSH. However, it can still be accessed through tools such as VNC.

In some cases, the upgrade may encounter an unrecoverable error while running the transaction, which can result in the system remaining in a halfway-upgraded, unusable and partially inaccessible state.

For example, if a package encounters a fatal error inside its `%preun` or `%prein` scriptlets during the upgrade, the transaction and the upgrade process may halt, leaving the system in an unusable state.

It is recommended to remove such packages prior to the upgrade, or, alternatively, add them to the `to_keep` list (see *Transaction Configuration Files* section) to prevent Leapp from attempting to upgrade them.

#### Missing upgrade package files

In some cases, you may find the upgrade process halting at the main upgrade DNF transaction with a list of error messages similar to the following:

```
2024-01-01 17:24:55.396 DEBUG    PID: 1053 leapp.workflow.RPMUpgrade.dnf_upgrade_transaction: Error opening /var/cache/dnf/almalinux8-baseos-f11d00b8ca777dac/packages/alt-php82-newrelic-10.16.0.5-1.el8.x86_64.rpm: No such file or directory
2024-01-01 17:24:55.410 DEBUG    PID: 1053 leapp.workflow.RPMUpgrade.dnf_upgrade_transaction: Package "alt-php82-newrelic-10.16.0.5-1.el8.x86_64" from repository "almalinux8-baseos" has incorrect checksum
```

In the known possible error scenario, this problem occurs when the upgrade packages were downloaded from CLN-provided package repositories, but CLN was then disabled due to a registration/networking error encountered.

Check the version of the dnf-plugin-spacewalk being installed into the isolated upgrade environment in the logs. Its release must be either `cloudlinux.2.leapp.2`, or `cloudlinux.5` and above for the CLN/upgrade integration functionality.

Also, make sure that the following line is present:

```
leapp.workflow.RPMUpgrade.dnf_upgrade_transaction: Leapp upgrade is running - using cache.
```

If neither of those appear to be the problem, its source may be different from the known one. Please contact support for further assistance.


### ELevate cPanel Scenario issues

These issues can occur during the upgrade on CloudLinux 7 + cPanel systems.

#### Post-reboot dnf upgrade error

In some system configurations, you may encounter an issue with the [stage 4](#stage-4) of the upgrade halting with a message similar to the following:

```
[INFO] Running: /usr/bin/dnf -y --allowerasing update
[INFO] Error: Failed to download metadata for repo 'cloudlinux-base': Cannot download repomd.xml: Cannot download repodata/repomd.xml: All mirrors were tried
[INFO] Sending notification: Fail to update to CloudLinux 8
[ERROR] The elevation process failed during stage 4.
[ERROR]
[ERROR] You can continue the process after fixing the errors by running:
[ERROR]
[ERROR]     /usr/local/cpanel/scripts/elevate-cpanel --continue
```

That most commonly occurs in two cases:
* When a package repository configuration file not associated with any RPM packages can no longer be accessed on the post-upgrade system due to the changes in Yum variables, like the OS version;
* When a package repository configuration file associated with a RPM package was modified manually, and thus, not upgraded automatically during the process.

Check the URL/mirrorlist of the mentioned Yum repository. Make sure it's accessible from the machine.
If there's a related `.rpmnew` file present, consider replacing the repository config file with it.

#### Missing EA packages after the upgrade

You may discover that some, or all EasyApache packages (with the `ea-*` naming scheme) on your post-upgrade system are missing.

This outcome will be accompanied by an error message in the upgrade log (/var/log/elevate-cpanel.log) akin to the following:

```
* 2023-03-20 15:10:03 (4265) INFO Running: /usr/local/bin/ea_install_profile --install /etc/cpanel/ea4/profiles/custom/current_state_at_2023-03-20_12:22:49.json
* 2023-03-20 15:10:03 (4266) INFO
* 2023-03-20 15:10:17 (4280) INFO  Problem: package ea-apache24-mod_lsapi-1:1.1-64.el8.cloudlinux.x86_64 requires liblsapi < 1:1.1-65, but none of the providers can be installed
* 2023-03-20 15:10:17 (4280) INFO   - cannot install both liblsapi-1:1.1-64.el8.cloudlinux.x86_64 and liblsapi-1:1.1-65.el8.cloudlinux.x86_64
* 2023-03-20 15:10:17 (4280) INFO   - cannot install the best candidate for the job
* 2023-03-20 15:10:17 (4280) INFO The entire output was logged to: /usr/local/cpanel/logs/packman/errors/2023-03-20_15:10:17-1
```

This happens most frequently when one or more testing repositories were enabled on the pre-upgrade system.

The Leapp framework attempts to upgrade all packages to their latest available versions - which includes versions available from testing repositories.

EasyApache packages are not included in Leapp upgrade procedures - they're removed from the system during the initial upgrade stage and are installed again after Leapp completes the main upgrade transaction. EasyApache packages have strict dependency version requirements, which means that if the installed dependency's version is too recent, it'll need to be downgraded.

However, the tool used to restore the EA packages, `ea_install_profile`, does not perform downgrades automatically and will instead interrupt the restoration process.

To resolve the issue:
* First, install the packages listed in the log as problematic manually while downgrading their dependencies as needed.
* Then, run the `ea_install_profile` command with the exact same arguments as shown in the log.

In the above example, you'd need to run:

```
dnf -y install ea-apache24-mod_lsapi
/usr/local/bin/ea_install_profile --install /etc/cpanel/ea4/profiles/custom/current_state_at_2023-03-20_12:22:49.json
```

#### Outdated cPanel version

You may encounter the following error message when attempting to upgrade:

```
This installation of cPanel *YOUR_CPANEL_VERSION* does not appear to be up to date. Please upgrade cPanel to a most recent version.
```

You need to have an updated cPanel installation to proceed with the upgrade.
Please refer to the [Latest cPanel & WHM Builds (All Architectures)](http://httpupdate.cpanel.net/) and ensure you have a cPanel updated to a version from one of the following tiers: STABLE, RELEASE, CURRENT or EDGE.

LTS versions are not supported.


#### EasyApache 4 packages

You may encounter the following error message when attempting to upgrade:

```
[WARN] *** Elevation Blocker detected: ***
  One or more EasyApache 4 package(s) are not compatible with CloudLinux 8.
  Please remove these packages before continuing the update.
  - ea-apache24-mod-unsupported-package
	- ...
```

Review and remove the listed EasyApache packages, then restart the process.


#### Unsupported third-party components

You may encounter the following error message when attempting to upgrade:

```
One or more enabled YUM repo are currently unsupported.
You should disable these repositories and remove packages installed from them
before continuing the update.

Consider reporting this limitation to https://github.com/cpanel/elevate/issues
```

`elevate-cpanel` checks for presence of unknown enabled repositories and blocks the migration process if one is found.

The packages from the listed repositories **won't be properly upgraded** if Leapp doesn't contain their data in its configuration files.

It's recommended to follow the provided suggestion and remove the repositories and packages before running the upgrade.

If you'd like to add the configuration data for new repositories and packages to Leapp, please refer to the [Contribution](/legacy/elevate/#contribution) section of the manual for information on the proper procedure for doing so.


## Known issues

### Web servers
The Litespeed web server installation scheme is currently incompatible with the no-panel Elevate configuration.

It can be updated *after* the upgrade is complete, but won't be automatically upgraded with the rest of the system during the ELevate process.

## Contribution

ELevate is developed and built as a tool for RHEL-based distributives, not just CloudLinux specifically.

ELevate supports migrating to/from other distributions and is open for all to contribute to and enhance.

You can find more information and FAQ about the AlmaLinux ELevate this project is built upon at [almalinux.org/elevate](https://almalinux.org/elevate) and [Migration SIG](https://wiki.almalinux.org/sigs/Migration), as well as contribute using the ELevate Contribution Guide.

CloudLinux does not provide support related to integrating third-party repositories or packages into the upgrade process. However, you can add the aforementioned components to the Leapp database yourself.

### Extending CloudLinux Elevate to support new components/system types

Suppose you have a no-panel system with additional software or a system with a custom panel installed.
The standard CloudLinux Elevate upgrade will not upgrade such a system fully - the components that aren’t known to Elevate (i.e. those that aren’t present in its configuration files) won’t be touched during the upgrade and will remain the same on the post-upgrade system.

Consider package repositories and the corresponding packages that are present on your system. The pre-upgrade/upgrade report will list the unrecognized or unsupported parts of these packages.

To get the report, [run the pre-upgrade procedure](/legacy/elevate/#pre-upgrade) first. Check the Elevate pre-upgrade report (`/var/log/leapp/leapp-report.txt`).

Look for unknown/unsigned package reports in the list of the resulting messages.

If you want to upgrade these packages during the Elevate process, you need to integrate them into the Elevate configuration files.

Please check the [Third-party integration](https://github.com/CloudLinux/leapp-repository/tree/cloudlinux#third-party-integration) section in the linked README for instructions on integrating new repositories and packages into the process.

In the typical case, you’ll want to [map](https://github.com/CloudLinux/leapp-repository/tree/cloudlinux#repository-mapping-file) all of your old package repositories (those present in CL7/RHEL7) to the new package repositories that will be present in the new upgraded system (CL8/RHEL8).

When linked like this, the new repositories will be used by Leapp during the upgrade, and any present packages associated with these repositories will be upgraded.

The package signatures should be added to the corresponding file for them to be accepted into the upgrade process.

When there are discrepancies between the packages between the old and new OS versions (e.g. a single package was split into two, or two merged into one), they should be added into the [package migration event list](https://github.com/CloudLinux/leapp-repository/tree/cloudlinux#package-migration-event-list) in order for Elevate to correctly upgrade them during the process.

Note that Elevate only uses the provided information about new repositories during the upgrade. The state of yum/dnf configuration on the system after the upgrade depends on the repository configuration files brought by the updated packages. If your package repository configs aren’t connected to the packages being upgraded, you should consider adding a [custom script](https://github.com/CloudLinux/leapp-repository/tree/cloudlinux#adding-complex-changes-custom-actors-for-migration) to modify them for the new OS version.

If mapping package repositories from old to new (CL7 repositories -> CL8 repositories), as well as mapping the package changes, is not sufficient for a successful upgrade of your system, consider adding [custom Python scripts](https://github.com/CloudLinux/leapp-repository/tree/cloudlinux#adding-complex-changes-custom-actors-for-migration) (called Leapp actors) that handle your upgrade scenario, e.g. configuration migrations, system modifications, etc.

To summarize:
* [Install CloudLinux Elevate](/legacy/elevate/#elevate-scenario-cloudlinux-7-with-no-panel-or-a-custom-panel) and run `leapp preupgrade`.
* Check the pre-upgrade report (`/var/log/leapp/leapp-report.txt`) for packages that will not be upgraded.
* For those packages that you want to see upgraded, [extend the Elevate configuration files](https://github.com/CloudLinux/leapp-repository/tree/cloudlinux#third-party-integration) with package repository mappings and package migration events.
* If required, [add additional custom scripts](https://github.com/CloudLinux/leapp-repository/tree/cloudlinux#adding-complex-changes-custom-actors-for-migration) (Leapp actors) to handle any extra arbitrary actions during the upgrade.
* Rerun the pre-upgrade procedure to ensure that your changes are integrated correctly, then test the upgrade process as desired.


## ELevate Scenario - CloudLinux 7 with no panel or a custom panel

This scenario contains steps on how to upgrade CloudLinux 7 to CloudLinux 8 on no-panel/custom panel systems.

1. First of all, make sure that your CloudLinux 7 is fully upgraded and on the latest kernel version.

2. After that, download and install "elevate-release" package to configure necessary RPM repositories:

```
sudo yum install https://repo.cloudlinux.com/elevate/elevate-release-latest-el7.noarch.rpm
```

3. Install leapp packages and migration data for the CloudLinux OS.

:::tip Note
In some cases, e.g. when directed by support, you may want to make use of the beta CloudLinux Leapp packages when running the upgrade.

To do so, enable the `cloudlinux-elevate-updates-testing` repository, brought by the `elevate-release` package, before installing the leapp packages.
:::

:::tip
Note that [a valid license](/legacy/cloudlinux_installation/#license-activation) must be present for installation to work.
:::

```
sudo yum install -y leapp-upgrade leapp-data-cloudlinux
```

### Pre-upgrade

Start a preupgrade check. In the meanwhile, the Leapp utility creates a special `/var/log/leapp/leapp-report.txt` file that contains possible problems and recommended solutions. No rpm packages will be installed during this phase.

:::danger WARNING
The preupgrade check will likely fail as the default CloudLinux 7 doesn't meet all requirements for migration. That is expected.
:::

```
sudo leapp preupgrade
```


This summary report will help you get a picture of whether it is possible to continue the upgrade.

The preupgrade process may stall with the following message:

```
Inhibitor: Newest installed kernel not in use
```

Make sure your system is running the latest kernel before proceeding with the upgrade. If you updated the system recently, a reboot may be sufficient to do so. Otherwise, edit your Grub configuration accordingly.

:::tip Note
In certain configurations, Leapp generates `/var/log/leapp/answerfile` with true/false questions. Leapp utility requires answers to all these questions in order to proceed with the upgrade.
:::

Once the preupgrade process completes, the results will be contained in the file `/var/log/leapp/leapp-report.txt`.

It's advised to review the report and consider how the changes will affect your system.

:::danger WARNING
In particular, pay attention to the packages that will not be upgraded during the transaction.

Should any packages or package repositories that are unknown to Leapp be detected, they will be listed in the report. Consider how leaving the listed items unupgraded will affect the stability of your system.

If the packages listed as unknown in the report are critical for your system, proceeding with the upgrade is **extremely likely** to damage its functionality, up to making the machine unaccessible.
:::

If you'd like to perform an upgrade on a system with unknown packages/repositories reported, and you're confident about all the potential risks, consider first adding the unknown repositories to Leapp's database, as described [here](https://github.com/CloudLinux/leapp-repository/tree/cloudlinux#third-party-integration).


### Transaction Configuration Files

If you want to manually override the framework's upgrade actions for specific packages, you may do so by editing the files contained in `/etc/leapp/transaction/`.

These configuration files have priority over automatic package upgrade resolutions and Package Elevation Service data.

The configuration files are as follows:
* to_install
  * Install these packages. Don't remove them or preserve them as-is.
* to_remove
  * Remove these packages. Do not attempt to keep them or upgrade them.
* to_keep
  * Do not upgrade these packages. Keep them as they are on the system.
* to_reinstall
  * Remove these packages during the update, then reinstall them. Mostly useful for packages that have the same version string between major versions, and thus won't be upgraded automatically.


### Upgrade

Start an upgrade. You’ll be offered to reboot the system after this process is completed.


```bash
sudo leapp upgrade
sudo reboot
```


:::tip Note
The upgrade process after the reboot may take a long time, up to 40-50 minutes, depending on the machine resources. If the machine remains unresponsive for more than 2 hours, assume that the upgrade process has failed during the post-reboot phase.
If it's still possible to access the machine in some way, for example, through remote VNC access, the logs containing the information on what went wrong are located in this folder: `/var/log/leapp`.
:::

A new entry in GRUB called ELevate-Upgrade-Initramfs will appear. The system will be automatically booted into it. Observe the update process in the console.

After the reboot, login into the system and check the migration report. Verify that the current OS is the one you need.


```bash
cat /etc/redhat-release
cat /etc/os-release
rpm -qa | grep el7 # check if there are unupgraded packages present
cat /var/log/leapp/leapp-report.txt
cat /var/log/leapp/leapp-upgrade.log
```

In addition, check the leapp logs for .rpmnew configuration files that may have been created during the upgrade process. In some cases os-release or yum package files may not be replaced automatically, requiring the user to rename the .rpmnew files manually.


## ELevate Scenario - CloudLinux 7 with cPanel

This scenario contains steps on how to upgrade CloudLinux 7 to CloudLinux 8 on systems with cPanel present.

It uses an additional tool to assist with migration of cPanel-related features - the script provided by the cPanel team: [elevate-cpanel](https://github.com/cpanel/elevate).

See the official cPanel Elevate documentation at https://cpanel.github.io/elevate/

### Upgrade process overview

The cPanel upgrade process is divided into multiple stages.
Each stage is responsible for one part of the upgrade.
Between stages, a reboot is performed, with one last reboot at the end of the final stage.

#### Stage 1

The elevation process is initiated by installing the `elevate-cpanel` service responsible for controlling the upgrade process between multiple reboots.

#### Stage 2

The current distro packages are updated.
cPanel services are disabled and the custom upgrade MOTD is set up.

#### Stage 3

The Leapp ELevate package repository is set up and Leapp packages are installed.
The cPanel packages are prepared for the update.

Some known conflicting packages are removed and some existing configurations are backed up. These packages will be reinstalled later.

The main `leapp upgrade` process is executed.

#### Stage 4

At this stage the machine should be running CloudLinux 8.

cPanel products for the new distro are updated.

The packages that were removed during the previous stage are restored.

#### Stage 5

This is the final stage of the upgrade process.
Some sanity checks and cleanup tasks are performed.

The `elevate-cpanel` service used during the upgrade process is removed.

A final reboot is performed at the end of this stage.

### Preparing

Make sure your system is fully updated before starting the upgrade process.

```bash
sudo yum -y update
```

In addition, make sure your system is running the latest available version of cPanel.

Ensure that you have the package `ea-cpanel-tools >= 1.0-67.el7.cloudlinux` installed.
You may need to activate the `cloudlinux-ea4-testing` package repository for that version to become accessible.
By default, it is located at `/etc/yum.repos.d/cloudlinux-ea4-testing.repo`.

Download the cPanel ELevate script.

`wget -O /scripts/elevate-cpanel https://raw.githubusercontent.com/cpanel/elevate/release/elevate-cpanel`

`chmod 700 /scripts/elevate-cpanel`

Run a preupgrade check. No rpm packages will be installed during this phase.

`/scripts/elevate-cpanel --check`

:::tip Note
In addition to Leapp-created log files and reports, contained in `/var/log/leapp`, cPanel ELevate also creates an additional log file: `/var/log/elevate-cpanel.log`

It's advised to check the aforementioned files for possible problems and recommended solutions.
:::

:::tip Note
In some cases, e.g. when directed by support, you may want to make use of the beta CloudLinux Leapp packages when running the upgrade.

To do so, use the --leappbeta flag when running the elevate-cpanel script.

`/scripts/elevate-cpanel --start`
:::

Once the preupgrade process completes, the results will be contained in `/var/log/leapp/leapp-report.txt` file.

It's advised to review the report and consider how the changes will affect your system.

:::danger WARNING
In particular, pay attention to the packages that will not be upgraded during the transaction.

Should any packages or package repositories that are unknown to Leapp be detected, they will be listed in the report. Consider how leaving the listed items unupgraded will affect the stability of your system.

If the packages listed as unknown in the report are critical for your system, proceeding with the upgrade is **extremely likely** to damage its functionality, up to making the machine unaccessible.
:::

### Running

:::warning
The upgrade process requires a certain amount of system resources to complete.

Machines with RAM lower than 4 Gb can potentially face out-of-memory problems during the update.
If such a problem occurs during the *initramfs stage* of the process, the machine can end up in an **inaccessible state**.

Please make sure you have enough resources to perform the upgrade safely, and make sure to have a backup of the system prepared before doing so.
:::


Start the upgrade by running the following command:

`/scripts/elevate-cpanel --start`

:::tip Note
By default, the system will be automatically restarted during the upgrade process when nessesary. You can make the process require manual reboots by adding the switch `--manual-reboots`.

Make sure you know what you're doing when using this switch, as you *must* manually reboot the server between the upgrade phases when using it - otherwise the process will remain incomplete and your system in a half-functional state.

`/scripts/elevate-cpanel --start --manual-reboots`
:::

The system will reboot several times during the process. While the upgrade is in progress, the system's MOTD will change.

Check the current status of the upgrade process with:
`/scripts/elevate-cpanel --status`

Monitor the elevation log for issues:
`/scripts/elevate-cpanel --log`

In case of errors, once they are resolved, you can continue the migration process with:
`/scripts/elevate-cpanel --continue`


:::tip Note
During one of the later upgrade phases, the system will reboot into a custom initramfs, in which the main package upgrade transaction will take place.
During this time, the system will be inaccessible through SSH.


The upgrade process after the reboot may take a long time, up to 40-50 minutes, depending on the machine resources. If the machine remains unresponsive for more than 2 hours, assume the upgrade process failed during the post-reboot phase.
If it's still possible to access the machine in some way, for example, through remote VNC access, the logs containing the information on what went wrong are located in this folder: `/var/log/leapp`, as well as here: `/var/log/elevate-cpanel.log`
:::


### Post-upgrade

After the reboot, login into the system and check:

* the status: `/scripts/elevate-cpanel --status`
* the log: `/var/log/elevate-cpanel.log`
* the Leapp report: `/var/log/leapp/leapp-report.txt`


Verify that the current OS successfully upgraded to the new version.

```bash
cat /etc/redhat-release
cat /etc/os-release
```

Check the leapp logs for `.rpmnew` configuration files that may have been created during the upgrade process. In some cases files like `/etc/os-release` or yum package files may not be replaced automatically - in particular, when said files were modified - requiring the user to rename the `.rpmnew` files manually.


## ELevate Scenario - CloudLinux 7 with Plesk

This scenario contains steps on how to upgrade CloudLinux 7 to CloudLinux 8 on systems with Plesk present.

The process is performed through a tool provifed and maintained by the Plesk team, [cloudlinux7to8](https://github.com/plesk/cloudlinux7to8), with CL Leapp as a component of the process.

See the official Plesk cloudlinux7to8 documentation with additional details at [the project page for cloudlinux7to8
](https://github.com/plesk/cloudlinux7to8?tab=readme-ov-file#)

### Preparation

As always, make sure to have a backup of your system prepared before starting the upgrade process.

Ensure that your system is fully updated before starting the upgrade process.

To prepare for the upgrade, download the latest version of the cloudlinux7to8 tool from the [releases page](https://github.com/plesk/cloudlinux7to8/releases/latest):

```bash

> wget https://github.com/plesk/cloudlinux7to8/releases/download/latest/cloudlinux7to8-1.0.0.zip
> unzip cloudlinux7to8-1.0.0.zip
> chmod 755 cloudlinux7to8

```

### Running

To monitor the conversion process, it is recommended to use the `screen` utility to run the conversion process in a separate session.

```bash
> screen -S cloudlinux7to8
> ./cloudlinux7to8
```

If the connection is lost, you can reattach to the session with the following command:

```bash
> screen -r cloudlinux7to8
```

The process can also be run in the background:

```bash
> nohup ./cloudlinux7to8 &
```

This will start the conversion process.

During the process, Plesk services will stop, and hosted websites will not be accessible.

During the upgrade process, the system will reboot several times. The primary upgrade transaction, where the Leapp component updates the system to CL8, will be performed in a custom OS environment. The system will be inaccessible via SSH during this time.

### Monitoring and troubleshooting

The conversion process will take some time to complete.

To check the status of the conversion process, use the `--status` flag.

```bash
> ./cloudlinux7to8 --status
```

To monitor the progress of the conversion process in real time, use the `--monitor` flag.

```bash
> ./cloudlinux7to8 --monitor
( stage 3 / action re-installing plesk components  ) 02:26 / 06:18
```

Aside from the main Leapp logs contained in `/var/log/leapp`, the cloudlinux7to8 tool will create a log file in `/var/log/plesk/cloudlinux7to8.log` that contains additional information about the conversion process.

### Reverting

If the process fails during the initial stages, you can attempt to revert the system to its original state by running the cloudlinux7to8 tool with the `--revert` flag.

```bash
> ./cloudlinux7to8 --revert
```

The cloudlinux7to8 will undo some of the changes it made and restart Plesk services.

Note that the revert process may not be able to fully restore the system to its original state, and you may need to restore from a backup if the system is left in an unusable state.

You cannot use revert to undo the changes after the first reboot triggered by cloudlinux7to8.

Also, the revert does not remove Leapp or packages installed by Leapp. Neither does it free persistent storage disk space reserved by Leapp.
