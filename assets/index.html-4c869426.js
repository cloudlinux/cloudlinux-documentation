import{_ as e,n,p as i,a7 as o}from"./framework-c44b2977.js";const a={},t=o('<h1 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h1><p>CloudLinux OS Admin installation process is the same as for CloudLinux Shared, please forward to <a href="/shared/cloudlinux_installation">installation guide</a> for detailed instructions. The only difference is to purchase a CloudLinux OS Admin license from <a href="https://cln.cloudlinux.com" target="_blank" rel="noopener noreferrer">cln.cloudlinux.com</a>.</p><div class="tip custom-block"><p class="custom-block-title">Note</p><p>The CloudLinux OS Admin can be installed and compatible only with AlmaLinux OS 8+.</p></div><h2 id="switch-license" tabindex="-1"><a class="header-anchor" href="#switch-license" aria-hidden="true">#</a> Switch license</h2><p>You can convert your existing CloudLinux OS Solo installation to CloudLinux OS Admin.</p><ol><li>Obtain new key from <a href="https://cln.cloudlinux.com" target="_blank" rel="noopener noreferrer">CLN</a></li><li>Run <code>rhnreg_ks --force --activationkey=&lt;new_key&gt;</code></li></ol><p>You can pass <code>--migrate-silently</code> argument to skip confirmation.</p>',7),l=[t];function c(r,s){return n(),i("div",null,l)}const u=e(a,[["render",c],["__file","index.html.vue"]]);export{u as default};
