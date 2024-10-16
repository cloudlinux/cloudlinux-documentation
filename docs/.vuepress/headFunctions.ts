import routes from './routes.json';

export default [
  [
    "script",
    {
      type: "text/javascript",
      id: "hs-script-loader",
      async: true,
      defer: true,
      src: "//js.hs-scripts.com/5408110.js",
    },
  ],
  [
    "script",
    {},
    `
    (function() {
      var routes = ${JSON.stringify(routes)};
  
      for (var route_url in routes) {
        if (window.location.href.indexOf(route_url) !== -1) {
          window.location.href = routes[route_url];
        }
      }
    })();
    `,
  ],
  [
    "script",
    {},
    `
      (function() {
        // Trigger the scroll event without actually scrolling
        function triggerScrollEvent() {
          const targetElement = window;
          const scrollEvent = new Event('scroll', {
            bubbles: true,
            cancelable: true,
          });
          targetElement.dispatchEvent(scrollEvent);
        }

        // Call the triggerScrollEvent and scrollBodyDown functions after the page is fully loaded
        window.addEventListener('load', () => {
          triggerScrollEvent();
        });
      })();
    `,
  ],
  [
    "script",
    {},
    `
      <!-- Google Tag Manager -->
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-T538N4K');
      <!-- End Google Tag Manager -->
    `,
  ]
];