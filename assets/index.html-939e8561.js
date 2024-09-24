import{_ as c,V as d,n as p,p as h,a5 as a,q as o,J as t,C as s,A as r}from"./framework-be71e630.js";const u="/images/shared-pro/wpos-plugin/AWPPlesk.webp",g="/images/shared-pro/wpos-plugin/AWPDirectAdmin.webp",n="/images/shared-pro/wpos-plugin/AWPUserUI.webp",l="/images/shared-pro/wpos-plugin/AdviceReview.webp",m="/images/shared-pro/wpos-plugin/AdviceApplied.webp",f="/images/shared-pro/wpos-plugin/WPPlugins.webp",b="/images/shared-pro/wpos-plugin/AWPPlugin.webp",w="/images/shared-pro/wpos-plugin/MobileDiag.webp",y="/images/shared-pro/wpos-plugin/CDNGeneral.webp",v="/images/shared-pro/wpos-plugin/CDNFlow.webp",P="/images/shared-pro/wpos-plugin/AWPPremiumUI.webp",k="/images/shared-pro/wpos-plugin/AWPPremiumReview.webp",A="/images/shared-pro/wpos-plugin/AWPPremiumApplied.webp",W="/images/shared-pro/wpos-plugin/FAQAdviceTable.webp",C="/images/shared-pro/wpos-plugin/FAQAdviceReview.webp",S="/images/shared-pro/wpos-plugin/FAQIncompatible.webp",x="/images/shared-pro/wpos-plugin/FAQIncMessage.webp",T={};function q(I,e){const i=d("RouterLink");return p(),h("div",null,[e[7]||(e[7]=a('<h1 id="acceleratewp" tabindex="-1"><a class="header-anchor" href="#acceleratewp" aria-hidden="true">#</a> AccelerateWP</h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p>AccelerateWP is a complex solution to help customers increase their WordPress site performance. With AccelerateWP you can manage optimization features, like object caching, CSS and JavaScript preprocessing and website preloading.</p><p>In order to start using AccelerateWP, go to the cPanel interface and find the <code>AccelerateWP</code> application in the <code>Software</code> section.</p><p>If you use Plesk control panel, (1) trigger the side panel and (2) choose the AccelerateWP widget.</p><p><img src="'+u+'" alt=""></p><p>If you use DirectAdmin control panel, hover over the main menu and choose the AccelerateWP in the Extra Features group.</p><p><img src="'+g+'" alt=""></p><p>Click the application button and get into the AccelerateWP interface.</p><p><img src="'+n+'" alt=""></p><p>Each row in the table is the WordPress website that was found on server and each column is the optimization feature.</p><p>AccelerateWP is built as advice-driven plugin: the feature is suggested to be enabled once the Smart Advice is issued. Smart advice may be issued during profiling a website with X-Ray. X-Ray PHP profiler detects concrete bottlenecks in website performance and thus is able to select a best suited optimization feature to increase it significantly.</p><p>Use the <code>Advice available</code> link to check advice details and click the <code>Apply advice</code> button to activate the feature.</p><p><img src="'+l+'" alt=""></p><p>After a couple of minutes, the feature will be activated and advice becomes <code>Applied</code>. Close the window and see <code>Active</code> link in the corresponding cell of the table.</p><p><img src="'+m+'" alt=""></p><p>If you still would like to try the feature on the website where advice was not issued, click on the gear icon and enable the feature.</p><h2 id="acceleratewp-feature-wordpress-optimization-plugin" tabindex="-1"><a class="header-anchor" href="#acceleratewp-feature-wordpress-optimization-plugin" aria-hidden="true">#</a> AccelerateWP feature: WordPress optimization plugin</h2><p>AccelerateWP is a base feature that provides full page caching, GZIP compression and some other useful optimizations.</p><p>In order to start working with AccelerateWP feature, check if advice is available in the corresponding cell on the intersection of website and AccelerateWP column.</p><p><img src="'+n+'" alt=""></p><p>And click the &quot;Apply advice&quot; button to activate the AccelerateWP feature.</p><p><img src="'+l+'" alt=""></p><p>After a couple of minutes, the plugin will be installed. Login into the WordPress Admin and find the AccelerateWP in the list of active plugins.</p><p><img src="'+f+'" alt=""></p><p>Page caching will be enabled by default. Click the &quot;Settings&quot; link below the plugin name to configure additional options.</p><p><img src="'+b+'" alt=""></p><h3 id="limitations" tabindex="-1"><a class="header-anchor" href="#limitations" aria-hidden="true">#</a> Limitations</h3><ul><li>Website must use PHP version 7.3 or higher.</li><li>WordPress version must be 5.8 and higher.</li><li>Other WordPress Caching plugins must not be installed.</li><li>WordPress should not run in Multisite mode.</li></ul><div class="tip custom-block"><p class="custom-block-title">Note</p><p>Some AccelerateWP functions depend on external services. For the functions to work properly, the following URLs and IPs need to be allowed at all security levels:</p><ul><li>https://awp-saas.cloudlinux.com</li><li>213.239.192.204</li></ul></div><h2 id="acceleratewp-feature-additional-options" tabindex="-1"><a class="header-anchor" href="#acceleratewp-feature-additional-options" aria-hidden="true">#</a> AccelerateWP feature additional options</h2><p>Find more additional options in WordPress admin page.</p><h3 id="mobile-caching" tabindex="-1"><a class="header-anchor" href="#mobile-caching" aria-hidden="true">#</a> Mobile caching</h3><p>Use it only if you website is adapted to use on smartphones and mobile phones.</p><p>Separate cache files for mobile devices. In this case the content for mobile devices will be cached into different cache file as for desktop\\tablets.</p><p>This option is necessary if you have some functionality only for mobile devices, not for desktop\\tablets.</p><p>The following diagram helps you understand if you need mobile caching.</p><p><img src="'+w+'" alt=""></p><div class="tip custom-block"><p class="custom-block-title">Note</p><p>If you use an additional layer of Cache (Varnish, NGINX , etc.) make sure it can distinguish between desktop and mobile visitors.</p></div><h3 id="user-cache" tabindex="-1"><a class="header-anchor" href="#user-cache" aria-hidden="true">#</a> User Cache</h3><p>It is recommended to use such an option when your website has a unique content for each logged-in user. If the user is not logged-in, a common site cache will be used, otherwise each logged-in user’s content will be cached separately.</p><h3 id="file-optimization" tabindex="-1"><a class="header-anchor" href="#file-optimization" aria-hidden="true">#</a> File Optimization</h3><p>File Optimization consists of Minification and file Combining.</p><p>Minification is the process of minimizing code in your web pages and script files. Webmasters look at minification as a primary method of reducing website load times via the bandwidth they use.</p><p>Minification also reduces JS, CSS and HTML files. The goal is removing comments and extra spaces. It crunches variables that minimize code and ultimately reduces the file size.</p><p>After minification, the file still functions as it should. The difference is a reduction in bandwidth due to network requests.</p><p><strong>By combining CSS &amp; JS files, HTTP/1 does not allow multiple requests from the same TCP connection between a host server and a web browser.</strong></p><p>Putting CSS and JS files into their respective groups, makes requests for downloads from a browser safe and more efficient. The old way meant multiple connections that took up bandwidth.</p><p><strong>File (CSS &amp; JS) combining is not necessary for HTTP/2 (see https://webspeedtools.com/should-i-combine-css-js/)</strong></p><p>HTTP/2 introduced multiplexing. Now, the browser can send unlimited number of requests to the server, then download all files simultaneously with only one TCP connection.</p><p>Consequently, HTTP/2 takes care of multiple TCP connections and the waiting time before each download. In one sense, consolidating CSS and JS files might be unnecessary.</p><p>To verify which HTTP version is used for requests on your site, you can use https://tools.keycdn.com/http2-test</p><h3 id="css-files" tabindex="-1"><a class="header-anchor" href="#css-files" aria-hidden="true">#</a> CSS Files</h3><p><strong>Minify CSS</strong></p><p>Minify CSS reduces file sizes by taking out white space and comments embedded in the code.</p><p><strong>Combine CSS</strong></p><p>Combine CSS reduces HTTP requests by merging all your files into one. Combine CSS is not recommended if your site uses HTTP/2.</p><p><strong>Excluded CSS Files</strong></p><p>To single out those CSS files that should not be minimized, list the URLs attached to the CSS files that should be excluded from minification and concatenation (one per line).</p><div class="warning custom-block"><p class="custom-block-title">Caution!</p><p>Minification removes the domain from the URL.</p></div><p>To prevent that, use (. *).CSS wildcards to exclude all files in a specific location.</p><p>3rd Party: when excluding external CSS files, use the domain or the full URL path.</p><h3 id="javascript-files" tabindex="-1"><a class="header-anchor" href="#javascript-files" aria-hidden="true">#</a> JavaScript Files</h3><p><strong>Minify javascript files</strong></p><p>Minify JavaScript removes whitespace and comments to reduce the file size.</p><p><strong>Combine JavaScripts files</strong></p><p>This option will be active only if you choose Minify javascript files. It is not recommended for HTTP2.</p><p><strong>Load JavaScript deferred</strong></p><p>One major cause of slow web pages is a so-called blocking script: <a href="https://www.dummies.com/web-design-development/javascript/deferred-loading-with-javascript/" target="_blank" rel="noopener noreferrer">https://www.dummies.com/web-design-development/javascript/deferred-loading-with-javascript/</a> .</p><p>Loading JavaScript called a blocking script blocks the webpage from loading.</p><p>Using the <code>defer</code> attribute alerts the browser not to wait for the script. Things will continue as usual per the build HTML and DOM processes. Quietly, the script rests in the background, then runs once the DOM is built.</p><p>So, the <code>Load JavaScript deferred</code> option adds to each script tag the <code>defer</code> attribute.</p><p><strong>Delay JavaScript Execution</strong></p><p>This option helps to decrease the page load time by delaying loading of all JavaScripts on the page. This option can be applied only for already cached pages, it is incompatible with the Combine JavaScripts files option.</p><h3 id="media" tabindex="-1"><a class="header-anchor" href="#media" aria-hidden="true">#</a> Media</h3><p><strong>LazyLoad</strong></p><p>LazyLoad affects the page in the next way - if the user opens the page for the first loading there will be only first displayed (visible to user) images, others will be loaded if the user scrolls down. Images added via CSS file, the <code>&lt;style&gt;</code> tag or via <code>Elementor</code> will not be affected by the LazyLoad.</p><p>The following options allows working with LazyLoad</p><ul><li>Enable LazyLoad for images</li><li>Enable LazyLoad for iframes and videos</li><li>Excluded images or iframes</li></ul><h3 id="image-dimensions" tabindex="-1"><a class="header-anchor" href="#image-dimensions" aria-hidden="true">#</a> Image Dimensions</h3><p>Add Missing Image Dimensions</p><p>Correct image dimensions help the browser to recognize page structure without delays, because the browser knows how much space is needed for the image.</p><p>Cases when image will not be affected by the <em>Add Missing Image Dimensions</em>:</p><ul><li>Images which have any attribute with name containing <code>*height*</code> or <code>*width*</code></li><li>Images which are part of the <code>&lt;picture&gt;</code> tag</li><li>SVG images</li><li>Image from external domains</li></ul><h3 id="preload" tabindex="-1"><a class="header-anchor" href="#preload" aria-hidden="true">#</a> Preload</h3><p><strong>Preload Cache</strong></p><p>Usually, a page cache is created when this page is first visited. You can activate the preload page cache. It means that the cache for the page will be created when the page is created or updated.</p><p>If sitemap-based cache preloading is activated, a specified sitemap file will be used for preliminary cache generation.</p><p><strong>Preload Links</strong></p><p>Provides functionality to preload the HTML content of the hovered link for acceleration loading pages after click.</p><p><strong>Prefetch DNS Requests</strong></p><p>If your website uses external resources (e.g. Google fonts, YouTube video, etc.), AccelerateWP can preload these resources for accelerating loading pages. To activate preloading external URLs, provide a list of external URLs.</p><p><strong>Preload Fonts</strong></p><p>Accelerates the loading of fonts by the browser, informing the browser at the very beginning of the request about the full list of fonts to download</p><h3 id="advanced-rules" tabindex="-1"><a class="header-anchor" href="#advanced-rules" aria-hidden="true">#</a> Advanced Rules</h3><p>Advanced site caching settings. If you have specific pages that must be processed individually you can add a custom rule for them.</p><p><strong>Never Cache URL(s)</strong></p><p>Provide a list of URLs that cannot be cached.</p><p><strong>Never Cache Cookies</strong></p><p>Provide a list of Cookie files that cannot be cached.</p><p><strong>Never Cache User Agent(s)</strong></p><p>Provide a list of User Agent names that cannot be cached.</p><p><strong>Always Purge URL(s)</strong></p><p>You can specify URLs that will be deleted from the cache when any post or page will be updated.</p><p><strong>Cache Query String(s)</strong></p><p>By default AccelerateWP does not cache URLs with query strings, but in this option, you can specify GET-parameters that must be cached.</p><h3 id="database" tabindex="-1"><a class="header-anchor" href="#database" aria-hidden="true">#</a> Database</h3><p>Database optimization provides clearing database from expired and unused data.</p><p><strong>Post Cleanup</strong></p><p>Provides clearing posts revisions, autosaved drafts, and deleted posts from the trash. Be careful, you will not be able to restore this data after clearing it.</p><p><strong>Comments Cleanup</strong></p><p>Provides clearing spam and deleted comments from the trash. Be careful, you will not be able to restore this data after clearing it.</p><p><strong>Transients Cleanup</strong></p><p>Provides clearing temporary options for existing plugins and older unused options that keep after deleting plugins.</p><p><strong>Database Cleanup</strong></p><p>Provides table optimizations in your database server.</p><p><strong>Automatic cleanup</strong></p><p>Allows you to schedule periodic database cleanups.</p><h3 id="heartbeat" tabindex="-1"><a class="header-anchor" href="#heartbeat" aria-hidden="true">#</a> Heartbeat</h3><p>WordPress Heartbeat is a function of server polling that provides delivery data from server to browser periodically.</p><p><strong>Reduce or disable Heartbeat activity</strong></p><p>To control server loads you can activate the <em>Control Heartbeat</em> function and reduce or disable Heartbeat activity. You can manage Heartbeat activity separately for backend, frontend, and post-editing parts. Be careful, disabling Heartbeat can break plugins that use this functionality.</p><h3 id="one-click-acceleratewp-add-ons" tabindex="-1"><a class="header-anchor" href="#one-click-acceleratewp-add-ons" aria-hidden="true">#</a> One-click AccelerateWP Add-ons</h3><p><strong>Varnish</strong></p><p>When the server uses Varnish, you need to activate the add-on for implementing clearing Varnish cache when AccelerateWP clears site cache.</p><p><strong>WebP Compatibility</strong></p><p>If your site uses the WebP plugin you can activate AccelerateWP WebP Compatibility add-on to achieve browser compatibility with your WebP images.</p><h3 id="cdn" tabindex="-1"><a class="header-anchor" href="#cdn" aria-hidden="true">#</a> CDN</h3><p>CDN stands for Content Delivery Network, the feature that simplifies and speeds up resources loading for your customers.</p><p>In order to start using CDN, you need:</p><ol><li>Public website on the Internet with a valid domain name</li><li>Pull a CDN zone, for example, https://bunny.net/</li></ol><p>To set up a CDN in the AccelerateWP you must register CDN zone and get pull zone configuration.</p><p>After setting up the Pull zone, you will receive an address, for example: domain.b-cdn.net</p><p><img src="'+y+'" alt=""></p><p>Go to the WP Admin of your WordPress site, open the settings of the AccelerateWP (Step 1) and select the CDN section ( Step 2). Select the option: Enable Content Delivery Network (Step 3) and fill in the &quot;CDN CNAME(s)&quot; field with the previously received domain.b-cdn.net address (Step 4).</p><p><img src="'+v+'" alt=""></p><p>Click the &quot;Save changes&quot; button (Step 5).</p><p>In order to check CDN is working, open website in incognito mode with Developer Tools open in your browser. Go to the &quot; Network&quot; tab, find the &quot;Domain&quot; column, you should see the specified address in the CDN settings of the AccelerateWP plugin for your js/css/image files.</p><h3 id="tools" tabindex="-1"><a class="header-anchor" href="#tools" aria-hidden="true">#</a> Tools</h3><p>For backing up the settings, there is a function for exporting settings. To use it, click the <em>Download settings</em> button. When you need to restore settings, choose your saved settings file and click the <em>Upload file and import settings</em> button.</p><h2 id="acceleratewp-premium-object-caching-feature" tabindex="-1"><a class="header-anchor" href="#acceleratewp-premium-object-caching-feature" aria-hidden="true">#</a> AccelerateWP Premium: Object caching feature</h2><div class="tip custom-block"><p class="custom-block-title">Note</p><p>Object caching is a premium feature which is currently in beta and available only for some hosters.</p></div><p>Unlike full page caching, this mechanism is not saving the whole page in cache, but stores database query results in additional storage for quick access. This mechanism is really helpful in case your site needs to process multiple pages per second as requests come in and may be helpful in case when full page caching cannot be used, e.g. on personalized pages.</p><p>The Object caching feature is recommended to use in the following:</p><ul><li>Websites used for extremely active exchange of information (forums, blogs, etc..)</li><li>Websites with too many requests running at the same time</li><li>Websites having important pages that cannot be cached entirely and exclude from the &quot;whole page caching&quot; due to any reason</li></ul><p>In order to start working with Object caching feature, check if advice is available in the corresponding cell on the intersection of website and AccelerateWP Premium column.</p><p><img src="'+P+'" alt=""></p><p>And click the &quot;Apply advice&quot; button to activate the Object caching feature.</p><p><img src="'+k+'" alt=""></p><p>If you still would like to try the feature on the website where advice was not issued, click on the gear icon and enable the feature.</p><p>In case if you still don&#39;t have active Premium subscription, you will see the following window with link to the page where you can upgrade subscription.</p><p>When upgrade link is clicked, you will see the billing interface opened in new browser window. Successful upgrade of your subscription will automatically close the billing window and start background upgrade process. Once your payment is processed, feature will be automatically installed on the website.</p><p>If you don&#39;t see any links, contact your hoster to upgrade your subscription manually.</p><p>If subscription is active, you will bypass the subscription window and proceed directly to the plugin installation.</p><p>After a couple of minutes, the redis instance will be configured, plugin will be installed and activated.</p><p><img src="'+A+'" alt=""></p><p>Close the window and see &quot;Active&quot; link in the corresponding cell of the table.</p><p>Object caching does not require any additional configuration.</p><h3 id="limitations-1" tabindex="-1"><a class="header-anchor" href="#limitations-1" aria-hidden="true">#</a> Limitations</h3><p>There are the following requirements to activate Object Caching:</p><ul><li>Website must use ea-PHP version 7.4 or 8.0.</li><li>WordPress version must be 3.7 and higher.</li><li>Other WordPress Caching plugins must not be installed.</li><li><a href="https://snuffleupagus.readthedocs.io/" target="_blank" rel="noopener noreferrer">Snuffleupagus</a> must be turned off.</li><li>WordPress should not run in Multisite mode.</li></ul><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><h3 id="what-does-acceleratewp-is-advice-driven-mean" tabindex="-1"><a class="header-anchor" href="#what-does-acceleratewp-is-advice-driven-mean" aria-hidden="true">#</a> What does &quot;AccelerateWP is advice-driven&quot; mean?</h3><p>CloudLinux automatically tracks slow requests for the websites for the appropriate period of time and sometimes creates an advice to activate the specific feature for your website. When you see the <code>Advice available</code> link in the corresponding feature cell, it means that AccelerateWP decided that this feature will significantly improve the performance of your website. Otherwise you see the <code>No advice</code> note.</p><p><img src="'+W+'" alt=""></p><p>Click the <code>Advice available</code> link and push <code>Apply advice</code> button to automatically enable the feature.</p><p><img src="'+C+'" alt=""></p><h3 id="what-should-i-do-if-i-see-both-the-no-advice-note-and-the-incompatible-link" tabindex="-1"><a class="header-anchor" href="#what-should-i-do-if-i-see-both-the-no-advice-note-and-the-incompatible-link" aria-hidden="true">#</a> What should I do if I see both the &quot;No advice&quot; note and the &quot;Incompatible&quot; link?</h3>',168)),o("p",null,[e[2]||(e[2]=t("Causes of the ")),e[3]||(e[3]=o("code",null,"Incompatible",-1)),e[4]||(e[4]=t(" note are always Limitations: ")),s(i,{to:"/wpos-plugin/#limitations"},{default:r(()=>e[0]||(e[0]=[t("AccelerateWP")])),_:1}),e[5]||(e[5]=t(" or ")),s(i,{to:"/wpos-plugin/#limitations-2"},{default:r(()=>e[1]||(e[1]=[t("AccelerateWP Premium")])),_:1}),e[6]||(e[6]=t(" related ones."))]),e[8]||(e[8]=a('<p>Each message has a small &quot;how to&quot;, so you can try to fix them by yourself via control panel or WordPress Admin interface.</p><p><img src="'+S+'" alt=""></p><p><img src="'+x+'" alt=""></p><h3 id="what-should-i-do-if-i-see-the-misconfiguration" tabindex="-1"><a class="header-anchor" href="#what-should-i-do-if-i-see-the-misconfiguration" aria-hidden="true">#</a> What should I do if I see the &quot;Misconfiguration&quot;?</h3><p>The misconfiguration message can appear in the cases when optimization feature was activated, but AccelerateWP detects it as not working anymore.</p><p>The most frequent cases are:</p><ul><li>Redis process cannot be started for some period of time. <ul><li><strong>Resolution:</strong> <a href="https://cloudlinux.zendesk.com/hc/en-us/requests/new" target="_blank" rel="noopener noreferrer">contact our support team</a> for further investigation.</li></ul></li><li>WordPress Redis Object Cache plugin is disabled via WordPress Admin Gui/Plugins. <ul><li><strong>Resolution:</strong> You can resolve it by yourself via the WordPress Admin Gui.</li></ul></li><li>Version of PHP was changed for website and it is no longer compatible with feature. <ul><li><strong>Resolution:</strong> change website php version to the one which is compatible with optimization feature.</li></ul></li></ul><p>In all cases, please refer to the misconfiguration text, which has a small &quot;how to&quot;, so you can try to fix them by yourself via control panel or WordPress Admin interface.</p><h3 id="feature-activation-starts-but-fails-with-post-check-issue" tabindex="-1"><a class="header-anchor" href="#feature-activation-starts-but-fails-with-post-check-issue" aria-hidden="true">#</a> Feature activation starts, but fails with &quot;post check issue&quot;</h3><p>Post check is a sanity check of your website to make sure that it is working properly after feature activation.</p><p>AccelerateWP expects website to:</p><ul><li>return http code 200 when downloading home page</li><li>do not write any errors in logs</li></ul><p>If you have some Post check issue after turning on the feature, you can leave them as disabled (in that case the engine reverts all changes). Or you can ignore the issue and continue working with the enabled Object Caching in order to manually check the source of the issue.</p><h3 id="how-to-measure-the-speed-of-the-website" tabindex="-1"><a class="header-anchor" href="#how-to-measure-the-speed-of-the-website" aria-hidden="true">#</a> How to measure the speed of the website?</h3><p>You can measure the speed of your website before turning On the Object Caching and after.</p><p>The popular tools:</p><ul><li><a href="https://developers.google.com/speed/pagespeed/insights/" target="_blank" rel="noopener noreferrer">PageSpeed Insights</a></li><li><a href="https://tools.pingdom.com/" target="_blank" rel="noopener noreferrer">Pingdom Website Speed Test</a></li></ul><h3 id="where-the-acceleratewp-tool-log-files-are-located" tabindex="-1"><a class="header-anchor" href="#where-the-acceleratewp-tool-log-files-are-located" aria-hidden="true">#</a> Where the AccelerateWP tool log files are located?</h3><p>Login via SSH, find in your home directory <code>~/.clwpos/main.log</code>. Or you can open it using the control panel file manager.</p><h3 id="i-already-use-the-wordpress-redis-object-cache-plugin-will-the-acceleratewp-be-useful-for-me" tabindex="-1"><a class="header-anchor" href="#i-already-use-the-wordpress-redis-object-cache-plugin-will-the-acceleratewp-be-useful-for-me" aria-hidden="true">#</a> I already use the WordPress Redis object cache plugin. Will the AccelerateWP be useful for me?</h3><p>No, in the current version we suggest the same optimization as you already have. But we include other useful features in the next versions, so let’s stay in touch.</p><h3 id="i-already-use-the-wordpress-redis-object-cache-pro-plugin-will-the-acceleratewp-be-useful-for-me" tabindex="-1"><a class="header-anchor" href="#i-already-use-the-wordpress-redis-object-cache-pro-plugin-will-the-acceleratewp-be-useful-for-me" aria-hidden="true">#</a> I already use the WordPress Redis object cache PRO plugin. Will the AccelerateWP be useful for me?</h3><p>No, in the current version we suggest the same optimization as you already have. But we include other useful features in the next versions, so let’s stay in touch.</p><h3 id="why-did-my-site-s-pagespeed-score-decrease-after-enabling-acceleratewp" tabindex="-1"><a class="header-anchor" href="#why-did-my-site-s-pagespeed-score-decrease-after-enabling-acceleratewp" aria-hidden="true">#</a> Why did my site&#39;s PageSpeed score decrease after enabling AccelerateWP?</h3><p>AccelerateWP &amp; mod_pagespeed:</p><ol><li>Enabling AccelerateWP activates the force gzip cache function when the cache is archived by the plugin, and Apache simply gives it as is to the user browser. In this case, the mod_pagespeed module cannot apply its optimizations, since it does not work with archives, but only with pure HTML.</li><li>AccelerateWP does not activate all possible resource optimizations by default.</li></ol><p>Because of this, the total score of the site by PageSpeed may be reduced. <strong>To improve the PageSpeed score, it is necessary to enable additional optimizations of AccelerateWP.</strong></p><p>AccelerateWP with maximum settings for fast sites gives a similar PageSpeed score for mobile and an improved result for desktop. AccelerateWP with maximum settings for sites loading longer than 1 second always gives a better score than mod_pagespeed.</p><h3 id="my-subscription-was-upgraded-but-feature-was-not-installed-automatically" tabindex="-1"><a class="header-anchor" href="#my-subscription-was-upgraded-but-feature-was-not-installed-automatically" aria-hidden="true">#</a> My subscription was upgraded, but feature was not installed automatically</h3><p>This can be caused by several reasons. Either your website was detected to have malfunctions or there was an issue with environment when feature was installed (e.g. bad internet connectivity with WordPress market) .</p><p>First, try to enable feature manually using AccelerateWP interface. Most likely you will find human-readable error message there.</p><p>If the issue persists, or you cannot resolve it yourself, contact your hoster and attach <code>~/.clwpos/main.log</code> for further investigation.</p>',32))])}const _=c(T,[["render",q],["__file","index.html.vue"]]);export{_ as default};
