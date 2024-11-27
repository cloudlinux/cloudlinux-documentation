import{_ as s,V as r,n as c,p,a5 as o,q as i,J as t,C as l,A as a}from"./framework-a3ae02e1.js";const u="/images/cln/cln_for_resellers/clniplicense_zoom60.webp",d="/images/cln/cln_for_resellers/clnactivatebackup.webp",m="/images/cln/cln_for_resellers/clncreatebackup_zoom70.webp",h="/images/cln/cln_for_resellers/clnmanagebackup.webp",g="/images/cln/cln_for_resellers/clnautopayments_zoom60.webp",f="/images/cln/cln_for_resellers/clnresellerinvoices_zoom60.webp",y="/images/cln/cln_for_resellers/clniconshow.webp",b="/images/cln/cln_for_resellers/clnicondownload.webp",v="/images/cln/cln_for_resellers/clnarrow.webp",w="/images/cln/cln_for_resellers/cln-ip-licenses-section.png",k="/images/cln/cln_for_resellers/cln-edit-ip-license.png",P="/images/cln/cln_for_resellers/cln-activation-keys.png",_="/images/cln/cln_for_resellers/cln-activation-key-details.png",I="/images/cln/cln_for_resellers/cln-edit-activation-key.png",C={};function x(A,e){const n=r("RouterLink");return c(),p("div",null,[e[14]||(e[14]=o('<h1 id="cln-for-ip-based-accounts" tabindex="-1"><a class="header-anchor" href="#cln-for-ip-based-accounts" aria-hidden="true">#</a> CLN For IP-based Accounts</h1><div class="tip custom-block"><p class="custom-block-title">Note</p><p>You can <a href="https://docs.cloudlinux.com/cloudlinux_rest_api.pdf" target="_blank" rel="noopener noreferrer">download</a> CloudLinux REST API documentation.</p></div><h2 id="registration" tabindex="-1"><a class="header-anchor" href="#registration" aria-hidden="true">#</a> Registration</h2>',3)),i("p",null,[e[1]||(e[1]=t("Once you have a CLN account ")),l(n,{to:"/cln/introduction/#create-new-account"},{default:a(()=>e[0]||(e[0]=[t("created")])),_:1}),e[2]||(e[2]=t(", contact our billing team to assist you with the account type conversion. This can be done by clicking the ")),e[3]||(e[3]=i("em",null,"Contact Support",-1)),e[4]||(e[4]=t(" link at the footer of this page."))]),e[15]||(e[15]=i("h2",{id:"ip-licenses-management",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#ip-licenses-management","aria-hidden":"true"},"#"),t(" IP Licenses Management")],-1)),e[16]||(e[16]=i("p",null,"IP license allows to register server only by it's IP (without a need to create a key and use it during registration). IP Licenses page allows resellers to add and remove IP licenses using automated tools via API.",-1)),e[17]||(e[17]=i("p",null,[t("Click required product at the top menu and then "),i("em",null,"IP Licenses"),t(" at the left sidebar. "),i("img",{src:u,alt:""})],-1)),e[18]||(e[18]=i("p",null,"The table contains the following information:",-1)),i("ul",null,[e[7]||(e[7]=i("li",null,"IP — an IP address of the activated server",-1)),e[8]||(e[8]=i("li",null,"Hostname — a hostname of the server",-1)),e[9]||(e[9]=i("li",null,"Added —  a date when a server with this IP was activated",-1)),i("li",null,[e[6]||(e[6]=t("Last check-in — the date of the last successful ")),l(n,{to:"/cln/terminology/#terminology"},{default:a(()=>e[5]||(e[5]=[t("server check-in")])),_:1})]),e[10]||(e[10]=i("li",null,"Type —  license type for this server",-1)),e[11]||(e[11]=i("li",null,"Actions",-1))]),e[19]||(e[19]=o('<h3 id="actions" tabindex="-1"><a class="header-anchor" href="#actions" aria-hidden="true">#</a> Actions</h3><p>The following actions are available:</p><ul><li><p>Add IP to this license. Click <em>Add IP</em> button. In the opened popup specify IP and product type (for Imunify360 licenses only) and click <em>Add IP</em> to complete the action or <em>Cancel</em> to close the popup.</p></li><li><p>Remove IP from using this license. Tick IP(s) and click <em>Bin</em> icon in the IP line or above the table for bulk action.</p></li><li><p>Filter servers list by IP and product type. Click <em>IP</em> and select an IP, or click <em>Product Type</em> and select a product.</p></li><li><p>Search in the list by a specific query. Type a search query in the search field to show specific servers.</p></li><li><p>Activate backup. Click <img src="'+d+'" alt="">. In the opened popup specify backup size and datacenter and click <em>Create</em> to complete the action or Cancel to close the popup.</p><p><img src="'+m+'" alt=""></p></li><li><p>Manage backup. Click <img src="'+h+'" alt="">. In the opened popup click <em>Go to the backup management</em> to go to backup management system interface (opens in a new tab) or click <em>Cancel</em> to close the popup.</p></li></ul><h2 id="converting-your-account-to-cloudlinux-os-shared-pro-type" tabindex="-1"><a class="header-anchor" href="#converting-your-account-to-cloudlinux-os-shared-pro-type" aria-hidden="true">#</a> Converting your account to CloudLinux OS Shared PRO type</h2>',4)),i("p",null,[e[13]||(e[13]=t("You can find the process description ")),l(n,{to:"/cln/purchase/#cloudlinux-os-plus"},{default:a(()=>e[12]||(e[12]=[t("here")])),_:1})]),e[20]||(e[20]=o('<h2 id="autopayments" tabindex="-1"><a class="header-anchor" href="#autopayments" aria-hidden="true">#</a> Autopayments</h2><p>Navigate to Billing → Payment Methods → Autopayment.</p><p><img src="'+g+'" alt=""></p><p>The following autopayment types are available:</p><ul><li>Auto add funds — when balance is below $100 it is replenished to the specified amount</li><li>Auto repay (default option) — once your balance becomes negative, your card will be automatically charged. Minimal charge is $20</li><li>Do not add funds automatically</li></ul><p>When you have selected and configured autopayment type, click <em>Save</em>.</p><h2 id="invoices" tabindex="-1"><a class="header-anchor" href="#invoices" aria-hidden="true">#</a> Invoices</h2><p>Go to Billing → Invoices. There is a table with all invoices and appropriate information.</p><p><img src="'+f+'" alt=""></p><p>The table contains the following columns:</p><ul><li>Invoice id — unique invoice number</li><li>Created — the date when invoice was created</li><li>Type —  payment type <ul><li>Payment received — invoice is already payed</li><li>Refund — you have a debt on your account. Please pay the invoice.</li><li>Invoice —  invoice is issued. Please pay the invoice.</li></ul></li><li>Pay period — invoice period</li><li>Total — the total amount of money you have to pay</li><li>Balance — amount of money on your account</li><li>Actions <ul><li><img src="'+y+'" alt=""> — open invoice in a popup (you can download it)</li><li><img src="'+b+'" alt=""> — open invoice in a new tab (you can download it)</li></ul></li></ul><p>Click <img src="'+v+'" alt=""> near invoice id to show detailed bill information:</p><ul><li>Title — license name</li><li>Quantity — licenses quantity</li><li>SubTotal — the price for that number of licenses</li></ul><h2 id="acceleratewp-permissions-management-for-ipr-customers" tabindex="-1"><a class="header-anchor" href="#acceleratewp-permissions-management-for-ipr-customers" aria-hidden="true">#</a> AccelerateWP Permissions Management for IPR Customers</h2><p>Accelerate WP Premium and CDN permission management will help you enable/ disable Premium and CDN features on certain servers. In cases where hosting users have root access to the server (e.g. VPS users), this permission ensures the license holder retains control over access to billable features.</p><p>By default permissions are disabled.</p><p>For managing these features via CLN for IP-based licensing:</p><ol><li>Log in to the CLN account</li><li>Go to the &#39;CloudLinux&#39; tab</li><li>Go to the IP Licenses section</li></ol><p><img src="'+w+'" alt=""></p><ol start="4"><li>Press edit</li><li>Choose new permissions</li></ol><p><img src="'+k+'" alt=""></p><ol start="6"><li>Save permissions</li></ol><p>For managing these features via CLN for key-based licensing:</p><ol><li>Log in to the CLN account</li><li>Go to the &#39;CloudLinux&#39; tab</li><li>Go to the &#39;Activation keys&#39; section</li></ol><p><img src="'+P+'" alt=""></p><ol start="4"><li>Select the activation key that you need</li></ol><p><img src="'+_+'" alt=""></p><ol start="5"><li>Press edit</li></ol><p><img src="'+I+'" alt=""></p><ol start="6"><li>Choose new permissions</li><li>Save permissions</li></ol>',30))])}const T=s(C,[["render",x],["__file","index.html.vue"]]);export{T as default};