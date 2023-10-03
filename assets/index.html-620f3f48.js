import{_ as e,n,p as t,a7 as l}from"./framework-9e5333fd.js";const i={},a=l(`<h1 id="uninstalling" tabindex="-1"><a class="header-anchor" href="#uninstalling" aria-hidden="true">#</a> Uninstalling</h1><h3 id="deleting-the-cloudlinux-subsystem-for-ubuntu" tabindex="-1"><a class="header-anchor" href="#deleting-the-cloudlinux-subsystem-for-ubuntu" aria-hidden="true">#</a> Deleting the CloudLinux Subsystem For Ubuntu</h3><p>You can uninstall CloudLinux Subsystem For Ubuntu by running the following commands:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># apt install python3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># wget https://repo.cloudlinux.com/cloudlinux-ubuntu/sources/cln/ubuntu2cloudlinux.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># python3 ubuntu2cloudlinux.py --uninstall
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># reboot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In that case the script will:</p><ul><li>Remove the CloudLinux OS components which are installed on your system, choosing from the following list: lve, kmodlve-dkms, lve-utils, lve-stats, lvemanager, cagefs, alt-python, alt-php, db-governor.</li><li>Remove configs for CloudLinux repositories for Ubuntu.</li><li>Ask you to check for remaining packages from CloudLinux and manually reboot your system.</li></ul>`,9),s=[a];function u(d,o){return n(),t("div",null,s)}const c=e(i,[["render",u],["__file","index.html.vue"]]);export{c as default};
