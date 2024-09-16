import{_ as d,V as r,n as u,p as c,q as n,J as t,C as o,A as i,a5 as l}from"./framework-c6d0cab1.js";const p="/assets/welcome_page-f075974a.png",h="/assets/installation_summary-7b3831e1.png",m="/assets/installation_source_gray_network-43bff74f.png",g="/assets/installation_source_network_address-b973ac9e.png",f="/assets/installation_iso_source-85ce6a6d.png",v="/assets/installation_source_gray_working-da9de9a8.png",y="/assets/installation_source_gray_done-df1e66ac.png",b="/assets/installation_available-ebd9eee2.png",x="/assets/installation_done-0040c6f7.png",w={},k={class:"table-of-contents"},S={class:"tip custom-block"},L={class:"warning custom-block"};function C(O,e){const s=r("router-link"),a=r("RouterLink");return u(),c("div",null,[e[41]||(e[41]=n("h1",{id:"installation",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),t(" Installation")],-1)),n("nav",k,[n("ul",null,[n("li",null,[o(s,{to:"#hardware-compatibility"},{default:i(()=>e[0]||(e[0]=[t("Hardware compatibility")])),_:1})]),n("li",null,[o(s,{to:"#fresh-installation"},{default:i(()=>e[1]||(e[1]=[t("Fresh installation")])),_:1}),n("ul",null,[n("li",null,[o(s,{to:"#downloading-installation-media"},{default:i(()=>e[2]||(e[2]=[t("Downloading installation media")])),_:1})]),n("li",null,[o(s,{to:"#installing-in-the-graphical-user-interface"},{default:i(()=>e[3]||(e[3]=[t("Installing in the Graphical User Interface")])),_:1})])])]),n("li",null,[o(s,{to:"#converting-existing-servers"},{default:i(()=>e[4]||(e[4]=[t("Converting existing servers")])),_:1}),n("ul",null,[n("li",null,[o(s,{to:"#downloading-and-running-conversion-script"},{default:i(()=>e[5]||(e[5]=[t("Downloading and running conversion script")])),_:1})])])]),n("li",null,[o(s,{to:"#uninstalling"},{default:i(()=>e[6]||(e[6]=[t("Uninstalling")])),_:1})])])]),e[42]||(e[42]=l('<h2 id="hardware-compatibility" tabindex="-1"><a class="header-anchor" href="#hardware-compatibility" aria-hidden="true">#</a> Hardware compatibility</h2><p>CloudLinux OS Solo supports all the hardware supported by RHEL/CentOS, with few exceptions. Exceptions are usually hardware that requires binary drivers, and that doesn&#39;t have any open-source alternatives.</p><div class="warning custom-block"><p class="custom-block-title"></p><p>CloudLinux OS Solo does not support ARM-based CPUs (e.g. Graviton)</p></div><p>With RHEL 8 (<strong>CloudLinux 8</strong>), some devices are no longer supported. You can <a href="https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/considerations_in_adopting_rhel_8/hardware-enablement_considerations-in-adopting-rhel-8#removed-hardware-support_hardware-enablement" target="_blank" rel="noopener noreferrer">check the entire list here</a>.</p><h2 id="fresh-installation" tabindex="-1"><a class="header-anchor" href="#fresh-installation" aria-hidden="true">#</a> Fresh installation</h2><h3 id="downloading-installation-media" tabindex="-1"><a class="header-anchor" href="#downloading-installation-media" aria-hidden="true">#</a> Downloading installation media</h3><p>You can download the latest ISO and use it to install CloudLinux OS Solo on your server using <a href="https://repo.cloudlinux.com/cloudlinux/8/iso/x86_64/" target="_blank" rel="noopener noreferrer">this link</a>.</p><p>There are multiple ISO types available:</p><ul><li><code>CloudLinux-*-boot.iso</code> - this ISO is made specifically for network installation and does not contain any packages inside.</li><li><code>CloudLinux-*-dvd1.iso</code> - this one contains all packages from the network installation repository, so you can set up any possible configuration without network access.</li><li><code>CloudLinux-*-minimal.iso</code> - this one contains only a minimal set of packages to set up a light server without GUI and Development tools.</li></ul>',9)),n("div",S,[e[12]||(e[12]=n("p",{class:"custom-block-title"},"Note",-1)),n("p",null,[e[8]||(e[8]=t("Once you install a server from the ISO, make sure you ")),o(a,{to:"/legacy/cloudlinux_installation/#license-activation"},{default:i(()=>e[7]||(e[7]=[t("register your system")])),_:1}),e[9]||(e[9]=t(" and then run the ")),e[10]||(e[10]=n("code",null,"yum update",-1)),e[11]||(e[11]=t(" command to get all recent updates."))])]),e[43]||(e[43]=l('<h3 id="installing-in-the-graphical-user-interface" tabindex="-1"><a class="header-anchor" href="#installing-in-the-graphical-user-interface" aria-hidden="true">#</a> Installing in the Graphical User Interface</h3><p>The graphical installation interface is the preferred method of manually installing CloudLinux OS Solo. It allows you to have full control over all available settings, including disk partitioning and storage configuration.</p><p>The graphical mode is used by default when you boot the system from the local media.</p><h4 id="language-selection" tabindex="-1"><a class="header-anchor" href="#language-selection" aria-hidden="true">#</a> Language selection</h4><p>The first screen displayed is the language selection page.</p><p><img src="'+p+'" alt="Welcome page screenshot"></p><p>First, find your preferred language in the left column and then select locale in the right one. The selected language will be used during installation and also as a default language of the installed system.</p>',7)),n("p",null,[e[14]||(e[14]=t("After you select your language and locale, click ")),e[15]||(e[15]=n("code",null,"Continue",-1)),e[16]||(e[16]=t(" to confirm your selection and proceed to the ")),o(a,{to:"/solo/installation/#installation-summary"},{default:i(()=>e[13]||(e[13]=[t("Installation Summary")])),_:1}),e[17]||(e[17]=t("."))]),e[44]||(e[44]=l('<h4 id="installation-summary" tabindex="-1"><a class="header-anchor" href="#installation-summary" aria-hidden="true">#</a> Installation summary</h4><p>The Installation summary screen is the main dashboard of your installation parameters. Most of the options which can be configured during the installation can be accessed from here.</p><p><img src="'+h+'" alt="Welcome page screenshot"></p><p>The summary screen displays links to other configuration screens, those links can be in several different states, which are graphically indicated:</p><ul><li><p>Grayed-out link means that the installer is currently updating this section. Please wait a little before accessing this section.</p></li><li><p>A warning symbol next to an icon means that a screen requires your attention before you start the installation.</p></li><li><p>Links without a warning symbol mean that the screen does not require your attention. You can still change your settings in these screens, but it is not required to start the installation.</p></li></ul><h4 id="installation-source" tabindex="-1"><a class="header-anchor" href="#installation-source" aria-hidden="true">#</a> Installation source</h4><p>The first thing that you should define is where the system will be installed from. There are basically two options:</p><ul><li>ISO file</li><li>On the network</li></ul><h4 id="on-the-network-source" tabindex="-1"><a class="header-anchor" href="#on-the-network-source" aria-hidden="true">#</a> On the network source</h4><p>Use this option to download packages to be installed from a network location. This is the preferred way as you automatically receive all critical bug fixes that may affect installation.</p><div class="tip custom-block"><p class="custom-block-title">Note</p><p>Most likely your network is not configured by default, so you can see the URL configuration field greyed out, like on the screenshot below. Please refer to the Network Configuration screen first to set up a network connection.</p></div><p><img src="'+m+`" alt="Unavailable network source"></p><p>The correct installation URL for CloudLinux OS Solo is</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://repo.cloudlinux.com/cloudlinux/8/BaseOS/x86_64/kickstart/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Type in the installation URL in the corresponding field, configure the proxy if needed and press the <code>Done</code> button.</p><p><img src="`+g+'" alt=""></p><h4 id="iso-file-source" tabindex="-1"><a class="header-anchor" href="#iso-file-source" aria-hidden="true">#</a> ISO file source</h4><p>This option is primarily used as an alternative when you don&#39;t have an internet connection on a target server. It is only available if you downloaded Minimal or DVD ISO which contains some bundled packages in.</p><p><img src="'+f+'" alt=""></p><p>Tick the <code>ISO file</code> checkbox and press the <code>Done</code> button.</p><h4 id="next-steps" tabindex="-1"><a class="header-anchor" href="#next-steps" aria-hidden="true">#</a> Next steps</h4>',21)),n("p",null,[e[21]||(e[21]=t("After clicking ")),e[22]||(e[22]=n("code",null,"Done",-1)),e[23]||(e[23]=t(", you will be redirected to the ")),o(a,{to:"/solo/installation/#installation-summary"},{default:i(()=>e[18]||(e[18]=[t("Installation Summary")])),_:1}),e[24]||(e[24]=t(" screen where ")),o(a,{to:"/solo/installation/#installation-source"},{default:i(()=>e[19]||(e[19]=[t("Installation source")])),_:1}),e[25]||(e[25]=t(" and ")),o(a,{to:"/solo/installation/#software-selection"},{default:i(()=>e[20]||(e[20]=[t("Software Selection")])),_:1}),e[26]||(e[26]=t(" links will be greyed and the ")),e[27]||(e[27]=n("code",null,"Downloading package metadata",-1)),e[28]||(e[28]=t(" message wll be shown."))]),e[45]||(e[45]=n("p",null,[n("img",{src:v,alt:""})],-1)),n("p",null,[e[30]||(e[30]=t("Please hold on while that message disappears and proceed to the ")),o(a,{to:"/solo/installation/#software-selection"},{default:i(()=>e[29]||(e[29]=[t("Software Selection")])),_:1}),e[31]||(e[31]=t(" section."))]),e[46]||(e[46]=l('<p><img src="'+y+'" alt=""></p><h4 id="software-selection" tabindex="-1"><a class="header-anchor" href="#software-selection" aria-hidden="true">#</a> Software Selection</h4><p>The Software Selection screen allows you to choose a Base Environment and Add-ons. These options control which software packages will be installed on your system during the installation process.</p><p>This screen is only available if Installation Source is properly configured and only after the installer has downloaded package metadata from the source.</p><p>It is not possible to select specific packages during a manual installation, you can only select pre-defined environments and add-ons.</p><p>To install CloudLinux OS Solo, first, choose the <code>CloudLinux OS Solo (minimal)</code> environment on the left of the screen.</p><div class="warning custom-block"><p class="custom-block-title">Warning</p><p>All other environments are used to install <a href="http://docs.cloudlinux.com/" target="_blank" rel="noopener noreferrer">CloudLinux OS</a>, so make sure you choose <code>CloudLinux OS Solo (minimal)</code>.</p></div><p>Only one environment can be chosen, even if more are available.</p><p>Then, on the right side of the screen, select one or more add-ons which you want to install by ticking the check boxes next to each add-on.</p><h4 id="final-preparations" tabindex="-1"><a class="header-anchor" href="#final-preparations" aria-hidden="true">#</a> Final preparations</h4><p>Installation is almost done, all you need to do is to <a href="https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/installation_guide/sect-disk-partitioning-setup-x86" target="_blank" rel="noopener noreferrer">configure your installation target</a> using the <code>Installation Destination</code> menu and create your <a href="https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/installation_guide/sect-configuration-progress-menu-x86#sect-account-configuration-x86" target="_blank" rel="noopener noreferrer">Root Password</a>.</p><p>Doing that, the <code>Begin installation</code> button becomes blue, so click it.</p><p><img src="'+b+'" alt=""></p><p>After this point, the installation process actually starts and changes are being made to your selected disks. It is not possible to go back to the Installation Summary and change any settings configured there; if you need to do so, you must wait for the installation process to finish, reboot your system, log in and change your settings on the installed system.</p><p>The bottom of the screen shows a progress bar and a message informing you of the current progress of the installation. When the installation finishes, you can press the Finish installation button to reboot your computer and log in to your newly installed system.</p><div class="warning custom-block"><p class="custom-block-title">Warning</p><p>Before you finish the installation and reboot, either remove the media which you used to start the installation, or make sure that your system tries to boot from the hard drive before trying removable media. Otherwise, your computer will start the installer again instead of the installed system.</p></div><p><img src="'+x+'" alt=""></p><h4 id="next-steps-1" tabindex="-1"><a class="header-anchor" href="#next-steps-1" aria-hidden="true">#</a> Next steps</h4><p>Reboot your system, login and check EULA which is located in the <code>/usr/share/cloudlinux-release/EULA</code>.</p>',19)),n("p",null,[e[33]||(e[33]=t("Next, ")),o(a,{to:"/solo/manager/#activation"},{default:i(()=>e[32]||(e[32]=[t("activate your installation")])),_:1}),e[34]||(e[34]=t(" in order to get updates."))]),e[47]||(e[47]=l('<h2 id="converting-existing-servers" tabindex="-1"><a class="header-anchor" href="#converting-existing-servers" aria-hidden="true">#</a> Converting existing servers</h2><div class="warning custom-block"><p class="custom-block-title"></p><p>Only AlmaLinux/Rocky Linux 8+ can be converted to CloudLinux OS Solo.</p></div><p>Sometimes it is required to convert already existing <code>AlmaLinux</code> or <code>Rocky Linux</code> servers to <code>CloudLinux OS Solo</code>.</p><p>It is easy to convert your existing installation by cldeploy script. The process takes a few minutes and replaces just a handful of RPMs.</p>',4)),n("div",L,[e[40]||(e[40]=n("p",{class:"custom-block-title"},null,-1)),n("p",null,[e[37]||(e[37]=t("Unlike ")),o(a,{to:"/solo/installation/#fresh-installation"},{default:i(()=>e[35]||(e[35]=[t("Fresh installation")])),_:1}),e[38]||(e[38]=t(", converting requires a CloudLinux OS Solo license. Please refer to the ")),o(a,{to:"/solo/activation/"},{default:i(()=>e[36]||(e[36]=[t("guide")])),_:1}),e[39]||(e[39]=t(" to get the activation key."))])]),e[48]||(e[48]=l(`<h3 id="downloading-and-running-conversion-script" tabindex="-1"><a class="header-anchor" href="#downloading-and-running-conversion-script" aria-hidden="true">#</a> Downloading and running conversion script</h3><p>If you already have an activation key, run the following commands:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install wget -y
wget https://repo.cloudlinux.com/cloudlinux/sources/cln/cldeploy
bash cldeploy -k ACTIVATION_KEY
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Where <code>ACTIVATION_KEY</code> is the one that you got in the previous step.</p><p>If you want to get an IP-based license, run the following commands:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install wget -y
wget https://repo.cloudlinux.com/cloudlinux/sources/cln/cldeploy
bash cldeploy -i --to-solo-edition
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After the successful conversion, reboot your system by running the following command:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>reboot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="the-cldeploy-explanation" tabindex="-1"><a class="header-anchor" href="#the-cldeploy-explanation" aria-hidden="true">#</a> The cldeploy explanation</h4><p>By its design, CloudLinux OS Solo is very close to the upstream operating system, RHEL (and so, CentOS and AlmaLinux). This makes the conversion process relatively straightforward, requiring just one reboot.</p><p>Here&#39;s what the cldeploy script does when you run it:</p><ul><li>Backups the original repository settings into the<code>/etc/cl-convert-saved</code>.</li><li>Backups RHEL system ID into the <code>/etc/cl-convert-saved</code> (RHEL systems only).</li><li>Installs CloudLinux repository settings and imports CloudLinux RPM key.</li><li>Replaces redhat/centos-release, redhat-release-notes, redhat-logos with CloudLinux version.</li><li>Re-installs CloudLinux version of rhnlib/rhnplugin.</li><li>Checks for binary kernel modules, finds replacement if needed.</li><li>Detects OVH servers and fixes the mkinitrd issues.</li><li>Detects Linode servers and fixes the grub issues.</li><li>Checks if LES is installed.</li><li>Checks that the <code>/etc/fstab</code> has the correct <code>/dev/root</code>.</li><li>Checks for efi.</li><li>Installs CloudLinux Manager for cPanel Solo.</li></ul><h4 id="next-steps-2" tabindex="-1"><a class="header-anchor" href="#next-steps-2" aria-hidden="true">#</a> Next steps</h4><p>Reboot your system, log in and check EULA which is located in the <code>/usr/share/cloudlinux-release/EULA</code>.</p><div class="tip custom-block"><p class="custom-block-title">Note</p><p>ISO installation provisions server with outdated packages. It is highly recommended to run <code>yum update</code> right after the first boot.</p></div><h2 id="uninstalling" tabindex="-1"><a class="header-anchor" href="#uninstalling" aria-hidden="true">#</a> Uninstalling</h2><p>You can always uninstall CloudLinux OS Solo. In this case, the system will be converted back to CentOS or AlmaLinux.</p><p>The following actions will be taken:</p><ul><li>CloudLinux repositories &amp; yum plugin will be removed.</li><li>CentOS or AlmaLinux repositories will be set up.</li></ul><p>In the end, the script will provide instructions on how to finish the conversion back. That will require removal of the CloudLinux kernel (a manual step), and installing CentOS or AlmaLinux kernel (if needed).</p><div class="warning custom-block"><p class="custom-block-title">Warning</p><p>Do not forget to free up a CloudLinux OS Solo license by removing the server from the <a href="https://docs.cln.cloudlinux.com/dashboard/#servers" target="_blank" rel="noopener noreferrer">Servers section of your CLN account</a> After that, if you don&#39;t intend to use the license anymore, you can <a href="https://docs.cln.cloudlinux.com/dashboard/#cloudlinux-os-activation-keys" target="_blank" rel="noopener noreferrer">remove it</a> to avoid being billed.</p></div><p>To uninstall CloudLinux OS, run the following command:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget -O cldeploy https://repo.cloudlinux.com/cloudlinux/sources/cln/cldeploy
sh cldeploy -c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Now you have converted back and it is time to install the kernel.</p><p>To delete the CloudLinux kernel, run the following command (change the kernel package name to the one you&#39;ve been using):</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rpm -e --nodeps kernel-2.6.32-673.26.1.lve1.4.27.el6.x86_64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To install a new CentOS or AlmaLinux kernel once you deleted the CloudLinux kernel, run the following command:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install kernel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If yum says that the latest kernel is already installed, it is OK. Please check your bootloader configuration before rebooting the system.</p><p>To remove unused kmods and lve libs, run the following command:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum remove lve kmod*lve*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Before the reboot, the following command should be executed for restoring Apache and httpd.conf without mod_hostinglimits:</p><p><em>For EasyApache 3:</em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/scripts/easyapache --build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>For EasyApache 4:</em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/usr/local/bin/ea_install_profile --install /etc/cpanel/ea4/profiles/cpanel/default.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="tip custom-block"><p class="custom-block-title">Note</p><p>Some packages from the CloudLinux repo will still remain. They are the same as CentOS or AlmaLinux packages and don&#39;t have to be removed. They will be updated in the future from CentOS repositories, as new versions come out.</p></div>`,37))])}const T=d(w,[["render",C],["__file","index.html.vue"]]);export{T as default};
