import{_ as a,n as i,p as t,a5 as n}from"./framework-2a53fa2c.js";const s={};function o(c,e){return i(),t("div",null,e[0]||(e[0]=[n(`<h1 id="apache2nginx-beta" tabindex="-1"><a class="header-anchor" href="#apache2nginx-beta" aria-hidden="true">#</a> Apache2Nginx (BETA)</h1><hr><div class="warning custom-block"><p class="custom-block-title"></p><p>Development is temporarily paused until the end of Q3 2024.</p></div><p>Apache2Nginx sets up NGINX hosting on the server and automatically converts <code>.htaccess</code> files into corresponding NGINX configuration.</p><p>It seamlessly integrates with the LSAPI NGINX module, which allows for better performance and resource usage.</p><div class="tip custom-block"><p class="custom-block-title"></p><p>Apache2Nginx is supported on cPanel servers only, running CloudLinux OS 8 and later.</p></div><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>To use Apache2Nginx, first install the <code>apache2nginx</code> package:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dnf --enablerepo=cloudlinux-updates-testing install apache2nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="convert-to-nginx-hosting" tabindex="-1"><a class="header-anchor" href="#convert-to-nginx-hosting" aria-hidden="true">#</a> Convert to NGINX hosting</h2><p>After <code>apache2nginx</code> package is installed, you can switch to NGINX by running:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apache2nginx setup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Note that this may take a while, so we recommend running this command in a <code>tmux</code> or <code>screen</code> session.</p><p>Any websites previously using LSAPI will be automatically switched to NGINX hosting with the LSAPI NGINX module. Websites using PHP-FPM will be switched to NGINX hosting with PHP-FPM. PHP websites using other handlers will be proxied to Apache.</p><p>After conversion is complete, no further action is required. The monitoring subsystem, when detecting a change to an <code>.htaccess</code> runs conversions to NGINX configuration. So you can continue using <code>.htaccess</code> files as usual.</p><div class="tip custom-block"><p class="custom-block-title"></p><p>Do not attempt to stop the Apache service or remove Apache packages after switching to NGINX. The Apache service provides a safety net for websites that cannot be converted to NGINX.</p></div><h2 id="switch-back-to-apache-hosting" tabindex="-1"><a class="header-anchor" href="#switch-back-to-apache-hosting" aria-hidden="true">#</a> Switch back to Apache hosting</h2><p>To switch back to Apache, run:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apache2nginx reset
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This command removes NGINX from your system and restores Apache configuration.</p><h2 id="force-use-of-apache-for-a-single-website" tabindex="-1"><a class="header-anchor" href="#force-use-of-apache-for-a-single-website" aria-hidden="true">#</a> Force use of Apache for a single website</h2><p>To force individual website to be served by Apache, run:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apache2nginx proxy -d &lt;domain&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>For example, <code>apache2nginx proxy -d example.com</code>.</p><h2 id="disable-forced-use-of-apache-for-a-single-website" tabindex="-1"><a class="header-anchor" href="#disable-forced-use-of-apache-for-a-single-website" aria-hidden="true">#</a> Disable forced use of Apache for a single website</h2><p>To disable forcing individual website to be served by Apache:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apache2nginx unproxy -d &lt;domain&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Note that Apache may still serve the website, if:</p><ul><li>conversion of its <code>.htaccess</code> files fails in any way</li><li>unsupported handler is used. Apache2Nginx only supports PHP-FPM handler</li></ul><h2 id="list-proxied-websites" tabindex="-1"><a class="header-anchor" href="#list-proxied-websites" aria-hidden="true">#</a> List proxied websites</h2><p>To list websites that are forced to be served by Apache:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apache2nginx list-proxied
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This command lists all websites that are forced to be served by Apache and the reason for that.</p><h2 id="other-notes" tabindex="-1"><a class="header-anchor" href="#other-notes" aria-hidden="true">#</a> Other notes</h2><p>Apache2Nginx automatically converts <code>.htaccess</code> files to NGINX configuration, stored under the directory <code>/etc/nginx</code> as <code>apache2nginx.conf</code> and files prefixed with <code>apache2nginx-</code>.</p><p>Please don&#39;t modify these files manually, as they will be overwritten by the monitoring subsystem.</p><p>Instead, if you want to augment the NGINX configuration, you can do any of the following:</p><ul><li>Work with your <code>.htaccess</code> files like usually, and let Apache2Nginx automatically convert them to respective NGINX configuration</li><li>Add files according to <code>ea-nginx</code> files conventions. Please refer to the <a href="https://docs.cpanel.net/knowledge-base/web-services/nginx-with-reverse-proxy/" target="_blank" rel="noopener noreferrer">cPanel documentation</a>.</li></ul>`,38)]))}const d=a(s,[["render",o],["__file","index.html.vue"]]);export{d as default};