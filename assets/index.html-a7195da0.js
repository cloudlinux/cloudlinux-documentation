import{_ as a,V as i,n as d,p as u,q as t,C as n,A as o,J as e,a7 as r}from"./framework-7862043f.js";const c={},h=t("h1",{id:"introduction",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#introduction","aria-hidden":"true"},"#"),e(" Introduction")],-1),g={class:"table-of-contents"},x=r('<h2 id="cloudlinux-os-editions" tabindex="-1"><a class="header-anchor" href="#cloudlinux-os-editions" aria-hidden="true">#</a> CloudLinux OS editions</h2><table><thead><tr><th style="text-align:center;"><strong>Features</strong></th><th style="text-align:center;"><strong>CloudLinux OS Solo</strong></th><th style="text-align:center;"><strong>CloudLinux OS Admin</strong></th><th style="text-align:center;"><strong>CloudLinux OS Shared</strong></th><th style="text-align:center;"><strong>CloudLinux OS Shared Pro</strong></th></tr></thead><tbody><tr><td style="text-align:center;">Maximum amount of hosting accounts</td><td style="text-align:center;">1</td><td style="text-align:center;">5</td><td style="text-align:center;">unlimited</td><td style="text-align:center;">unlimited</td></tr><tr><td style="text-align:center;">Resource Limits (LVE)</td><td style="text-align:center;">No</td><td style="text-align:center;"><strong>Yes</strong>*</td><td style="text-align:center;"><strong>Yes</strong></td><td style="text-align:center;"><strong>Yes</strong></td></tr><tr><td style="text-align:center;">Cage FS</td><td style="text-align:center;"><strong>Yes</strong></td><td style="text-align:center;"><strong>Yes</strong></td><td style="text-align:center;"><strong>Yes</strong></td><td style="text-align:center;"><strong>Yes</strong></td></tr><tr><td style="text-align:center;">MySQL Governor</td><td style="text-align:center;">No</td><td style="text-align:center;">No</td><td style="text-align:center;"><strong>Yes</strong></td><td style="text-align:center;"><strong>Yes</strong></td></tr><tr><td style="text-align:center;">PHP Selector</td><td style="text-align:center;"><strong>Yes</strong></td><td style="text-align:center;"><strong>Yes</strong></td><td style="text-align:center;"><strong>Yes</strong></td><td style="text-align:center;"><strong>Yes</strong></td></tr><tr><td style="text-align:center;">Other Selectors (Python, Node.js, Ruby)</td><td style="text-align:center;">No</td><td style="text-align:center;"><strong>Yes</strong>**</td><td style="text-align:center;"><strong>Yes</strong>**</td><td style="text-align:center;"><strong>Yes</strong>**</td></tr><tr><td style="text-align:center;">HardenedPHP</td><td style="text-align:center;"><strong>Yes</strong></td><td style="text-align:center;"><strong>Yes</strong></td><td style="text-align:center;"><strong>Yes</strong></td><td style="text-align:center;"><strong>Yes</strong></td></tr><tr><td style="text-align:center;">Apache mod_lsapi PRO</td><td style="text-align:center;"><strong>Yes</strong></td><td style="text-align:center;"><strong>Yes</strong></td><td style="text-align:center;"><strong>Yes</strong></td><td style="text-align:center;"><strong>Yes</strong></td></tr><tr><td style="text-align:center;">SecureLinks</td><td style="text-align:center;">No</td><td style="text-align:center;"><strong>Yes</strong></td><td style="text-align:center;"><strong>Yes</strong></td><td style="text-align:center;"><strong>Yes</strong></td></tr><tr><td style="text-align:center;">Website monitoring tool</td><td style="text-align:center;"><strong>Yes</strong></td><td style="text-align:center;"><strong>Yes</strong></td><td style="text-align:center;"><strong>Yes</strong></td><td style="text-align:center;"><strong>Yes</strong></td></tr><tr><td style="text-align:center;">Website monitoring alerts</td><td style="text-align:center;"><strong>Yes</strong></td><td style="text-align:center;">No</td><td style="text-align:center;">No</td><td style="text-align:center;">No</td></tr><tr><td style="text-align:center;">Slow Site analyzer</td><td style="text-align:center;"><strong>Yes</strong></td><td style="text-align:center;"><strong>Yes</strong></td><td style="text-align:center;"><strong>Yes</strong></td><td style="text-align:center;"><strong>Yes</strong></td></tr><tr><td style="text-align:center;">PHP X-Ray</td><td style="text-align:center;"><strong>Yes</strong></td><td style="text-align:center;"><strong>Yes</strong></td><td style="text-align:center;">No</td><td style="text-align:center;"><strong>Yes</strong></td></tr><tr><td style="text-align:center;">Centralized Monitoring</td><td style="text-align:center;">No</td><td style="text-align:center;">No</td><td style="text-align:center;">No</td><td style="text-align:center;"><strong>Yes</strong></td></tr><tr><td style="text-align:center;">AccelerateWP</td><td style="text-align:center;"><strong>Yes</strong></td><td style="text-align:center;"><strong>Yes</strong></td><td style="text-align:center;">No</td><td style="text-align:center;"><strong>Yes</strong></td></tr><tr><td style="text-align:center;">Support 24/7</td><td style="text-align:center;"><strong>Yes</strong></td><td style="text-align:center;"><strong>Yes</strong></td><td style="text-align:center;"><strong>Yes</strong></td><td style="text-align:center;"><strong>Yes</strong></td></tr></tbody></table><p>* Limits are disabled by default.</p><p>** Python/Node.js/Ruby Selectors are available only for cPanel, DirectAdmin servers, and servers with custom panel with own integration.</p><h3 id="cloudlinux-os-solo" tabindex="-1"><a class="header-anchor" href="#cloudlinux-os-solo" aria-hidden="true">#</a> CloudLinux OS Solo</h3>',5),p=r('<h3 id="cloudlinux-os-admin" tabindex="-1"><a class="header-anchor" href="#cloudlinux-os-admin" aria-hidden="true">#</a> CloudLinux OS Admin</h3><p>CloudLinux OS Admin is designed for shared hosting providers who want to flawlessly migrate their big shared hosting customer to individual VPS with same CloudLinux features as on Shared hosting. At the same time you will be able to separate such a user&#39;s websites if necessary and isolate them with CageFS for efficient and extra security.</p><p>Also it may be suitable for a little server with less than 5 customers on it, but be careful, there is no migration to Shared edition available.</p><p>Most of the features of CloudLinux OS Shared are available in this edition, with a small differences:</p><ul><li>lve limits are set to unlimited by default (can be changed in CloudLinux Manager at any time)</li><li>MySQL Governor is not available in this edition</li><li>the license itself does not allow more than 5 users to be hosted on server.</li></ul><h3 id="cloudlinux-os-shared-pro" tabindex="-1"><a class="header-anchor" href="#cloudlinux-os-shared-pro" aria-hidden="true">#</a> CloudLinux OS Shared (Pro)</h3><p>CloudLinux OS Shared is designed for shared hosting providers. It isolates each customer into a separate “Lightweight Virtualized Environment” (LVE), which allocates and limits server resources, like memory, CPU and the number of simultaneous connections, for each web hosting tenant. This ensures that tenants cannot jeopardize the stability of your servers, causing all sites to slow down or even come to a halt. CloudLinux OS Shared also “cages” tenants from one another to avoid security breaches. This way, unstable scripts or malware are not able to sprawl across your customer sites, causing severe harm.</p>',7),m=t("h2",{id:"cloudlinux-os-components",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#cloudlinux-os-components","aria-hidden":"true"},"#"),e(" CloudLinux OS components")],-1),y=t("p",null,[t("strong",null,"CloudLinux Manager")],-1),_=t("p",null,"LVE is a Lightweight Virtualized Environment. CloudLinux Manager allows you to maintain fine-tuned control over your resources, including CPU, IO rate, memory, inodes, numbers of processes, and concurrent connections, that any single account can use. Now you can limit resource abuse, while allowing good customers to use what they need.",-1),f=t("p",null,[t("strong",null,"CageFS")],-1),S=t("p",null,"CageFS is a virtualized, per-user file system that uniquely encapsulates each customer, preventing users from seeing each other and viewing sensitive information. CageFS prevents a large number of attacks, including most privilege escalation and information disclosure attacks. It is completely transparent to your customers, without any need for them to change their scripts.",-1),b=t("p",null,[t("strong",null,"MySQL Governor")],-1),v=t("div",{class:"tip custom-block"},[t("p",{class:"custom-block-title"},"Note"),t("p",null,"This component is not available in CloudLinux OS Admin edition.")],-1),L=t("p",null,[t("strong",null,"PHP Selector")],-1),C=t("p",null,"PHP Selector allows end users to select the specific version of PHP they need. It allows ultimate flexibility by offering all popular versions of PHP, with more than 120 PHP extensions to choose from.",-1),w=t("p",null,[t("strong",null,"Ruby Selector")],-1),P=t("p",null,[e("Ruby Selector allows end users to choose the Ruby version for applications and install additional modules to the application environment. Ruby Selector uses "),t("code",null,"mod_passenger"),e(" for delivering optimum performance.")],-1),Y=t("p",null,[t("strong",null,"Python Selector")],-1),O=t("p",null,[e("Python Selector allows end users to choose the Python version for applications and install additional modules. Python Selector uses "),t("code",null,"mod_passenger"),e(" to get the best performance from Python applications.")],-1),N=t("p",null,[t("strong",null,"Node.js Selector")],-1),k=t("p",null,"Node.js Selector is a CloudLinux OS Shared component that allows each user to easily create Node.js applications, choose Node.js version and other parameters for applications based on their needs.",-1),R=t("p",null,[t("strong",null,"Apache mod_lsapi PRO")],-1),M=t("p",null,[e("Mod_lsapi PRO is the fastest PHP handler for Apache. It is a drop-in replacement for SuPHP, FCGID, RUID2, and ITK. It has a low memory footprint and understands "),t("code",null,".htaccess"),e(" PHP directives.")],-1),V=t("p",null,[t("strong",null,"Reseller limits")],-1),A=t("p",null,"Reseller limits is a feature that allows hosters to set limits for the resources each Reseller can operate with. Server admin also provides controls on what resources each end user will have. Reseller limits set by a hoster limit the total amount of resources resellers’ end users can consume altogether.",-1),E=t("p",null,"When a hoster has set reseller limits for the particular reseller he provides the reseller with an ability to set limits for his end users within the Reseller Interface.",-1),H=t("p",null,[t("strong",null,"LVE-stats 2")],-1),I=t("p",null,"VE-stats 2 collects LVE usage statistics (CPU, memory, disk space usage) and allows to collect the usage data.",-1),j=r(`<h2 id="cloudlinux-9" tabindex="-1"><a class="header-anchor" href="#cloudlinux-9" aria-hidden="true">#</a> CloudLinux 9</h2><table><thead><tr><th>CloudLinux 9 version</th><th>Editions</th><th>Hosting Panels</th><th>Virtuozzo Support</th></tr></thead><tbody><tr><td>CloudLinux 9 Beta</td><td>CloudLinux Shared CloudLinux Shared Pro</td><td>- Non-panel<br> - Custom panel integration</td><td>No</td></tr><tr><td><a href="https://blog.cloudlinux.com/cloudlinux-os-9.2-is-now-available-for-non-panel-and-custom-panel-installations" target="_blank" rel="noopener noreferrer">CloudLinux 9.2</a></td><td>CloudLinux Shared CloudLinux Shared Pro</td><td>- Non-panel<br> - Custom panel integration<br> - cPanel with experimental key</td><td>No</td></tr><tr><td><a href="https://blog.cloudlinux.com/cloudlinux-os-9-introducing-the-latest-9.3-version-now-accessible-for-non-panel-custom-panel-and-cpanel-users-from-version-11.116.0.1-onwards" target="_blank" rel="noopener noreferrer">CloudLinux 9.3</a> [Current Version]</td><td>CloudLinux Shared<br> CloudLinux Shared Pro<br> CloudLinux Solo<br>CloudLinux Admin</td><td>- Non-panel<br> - Custom panel integration<br> - cPanel &gt;= 11.116.0.1</td><td>No</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">Note!</p><p>Starting from v11.116.0.1, cPanel is fully integrated with CloudLinux 9 (9.2+), and the flag <code>--experimental-os=almalinux-9.2</code> no longer necessary.</p></div><div class="tip custom-block"><p class="custom-block-title">Note!</p><p>If you have a server with cPanel + CloudLinux already installed via the experimental flag <code>--experimental-os=almalinux-9.2</code>, as described here, it is highly recommended to reinstall the server from scratch to avoid unexpected behavior.</p></div><div class="tip custom-block"><p class="custom-block-title">Note!</p><p>While the cPanel version 11.116.0.1 is not in the Stable Release, use the following instructions to install cPanel on the latest versions of CloudLinux 9.</p></div><ol><li>Update the <code>/etc/cpupdate.conf</code> as described here, and set the config value:</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CPANEL=current
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>Start the cPanel installation process:</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /home &amp;&amp; curl -o latest -L https://securedownloads.cpanel.net/latest &amp;&amp; sh latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="cloudlinux-os-life-cycle" tabindex="-1"><a class="header-anchor" href="#cloudlinux-os-life-cycle" aria-hidden="true">#</a> CloudLinux OS life cycle</h2><p>CloudLinux OS follows the life cycle policy of RHEL. Using a supported operating system is critical to maintaining a stable server environment.</p><p>Currently, the following versions are available and supported:</p>`,12),z=t("thead",null,[t("tr",null,[t("th"),t("th"),t("th")])],-1),F=t("tr",null,[t("td",null,"Operating System"),t("td",null,"Release Date"),t("td",null,"End of Life and Support")],-1),U=t("td",null,"CloudLinux OS Shared 6",-1),T=t("td",null,"Feb 1, 2011",-1),B=t("tr",null,[t("td",null,"CloudLinux OS Shared 7"),t("td",null,"Apr 1, 2015"),t("td",null,"Jun 30, 2024")],-1),D=t("tr",null,[t("td",null,"CloudLinux OS Shared (Pro) 8"),t("td",null,"Mar 17, 2020"),t("td",null,"May 31, 2029")],-1),G=t("tr",null,[t("td",null,"CloudLinux OS Solo (8)"),t("td",null,"Mar 17, 2020"),t("td",null,"May 31, 2029")],-1),Q=t("tr",null,[t("td",null,"CloudLinux OS Admin (8)"),t("td",null,"Mar 17, 2020"),t("td",null,"May 31, 2029")],-1),W=t("tr",null,[t("td",null,"CloudLinux OS Shared (Pro) 9"),t("td",null,"Jan 17, 2023"),t("td",null,"May 31, 2032")],-1);function q(J,K){const s=i("router-link"),l=i("RouterLink");return d(),u("div",null,[h,t("nav",g,[t("ul",null,[t("li",null,[n(s,{to:"#cloudlinux-os-editions"},{default:o(()=>[e("CloudLinux OS editions")]),_:1}),t("ul",null,[t("li",null,[n(s,{to:"#cloudlinux-os-solo"},{default:o(()=>[e("CloudLinux OS Solo")]),_:1})]),t("li",null,[n(s,{to:"#cloudlinux-os-admin"},{default:o(()=>[e("CloudLinux OS Admin")]),_:1})]),t("li",null,[n(s,{to:"#cloudlinux-os-shared-pro"},{default:o(()=>[e("CloudLinux OS Shared (Pro)")]),_:1})])])]),t("li",null,[n(s,{to:"#cloudlinux-os-components"},{default:o(()=>[e("CloudLinux OS components")]),_:1})]),t("li",null,[n(s,{to:"#cloudlinux-9"},{default:o(()=>[e("CloudLinux 9")]),_:1})]),t("li",null,[n(s,{to:"#cloudlinux-os-life-cycle"},{default:o(()=>[e("CloudLinux OS life cycle")]),_:1})])])]),x,t("p",null,[e("CloudLinux OS Solo is designed for installation on VPS or VDS servers. This edition has major difference against all other, so you should look for the detailed docs "),n(l,{to:"/introduction/"},{default:o(()=>[e("here")]),_:1}),e(".")]),p,t("p",null,[e("Purchasing CloudLinux OS Shared Pro license extends your CloudLinux OS Shared functionality with even more useful "),n(l,{to:"/shared-pro/introduction/"},{default:o(()=>[e("features")]),_:1}),e(".")]),m,y,_,t("p",null,[n(l,{to:"/shared/lve_manager/"},{default:o(()=>[e("See more")]),_:1}),e(".")]),f,S,t("p",null,[n(l,{to:"/shared/cloudlinux_os_components/#cagefs"},{default:o(()=>[e("See more")]),_:1}),e(".")]),b,v,t("p",null,[e("MySQL Governor tracks CPU and disk IO usage for every user in real time and throttles MySQL queries by using LVE limits. By using the "),n(l,{to:"/command-line_tools/#dbtop"},{default:o(()=>[e("dbtop")]),_:1}),e(" utility, it is possible to see the database usage on a per-customer basis, ensuring that the system admin always know what is going on.")]),t("p",null,[n(l,{to:"/shared/cloudlinux_os_components/#mysql-governor"},{default:o(()=>[e("See more")]),_:1}),e(".")]),L,C,t("p",null,[n(l,{to:"/shared/cloudlinux_os_components/#php-selector"},{default:o(()=>[e("See more")]),_:1}),e(".")]),w,P,t("p",null,[n(l,{to:"/shared/cloudlinux_os_components/#ruby-selector"},{default:o(()=>[e("See more")]),_:1}),e(".")]),Y,O,t("p",null,[n(l,{to:"/shared/cloudlinux_os_components/#python-selector"},{default:o(()=>[e("See more")]),_:1}),e(".")]),N,k,t("p",null,[n(l,{to:"/shared/cloudlinux_os_components/#node-js-selector"},{default:o(()=>[e("See more")]),_:1}),e(".")]),R,M,t("p",null,[n(l,{to:"/shared/cloudlinux_os_components/#apache-mod-lsapi-pro"},{default:o(()=>[e("See more")]),_:1}),e(".")]),V,A,E,t("p",null,[n(l,{to:"/shared/cloudlinux_os_components/#reseller-limits"},{default:o(()=>[e("See more")]),_:1}),e(".")]),H,I,t("p",null,[n(l,{to:"/shared/cloudlinux_os_components/#lve-stats-2"},{default:o(()=>[e("See more")]),_:1}),e(".")]),j,t("table",null,[z,t("tbody",null,[F,t("tr",null,[U,T,t("td",null,[e("Nov 30, 2020 ("),n(l,{to:"/cln/billing/#cloudlinux-os-6-extended-lifecycle-support"},{default:o(()=>[e("ELS until June 30, 2024")]),_:1}),e(")")])]),B,D,G,Q,W])])])}const Z=a(c,[["render",q],["__file","index.html.vue"]]);export{Z as default};