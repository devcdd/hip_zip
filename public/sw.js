if(!self.define){let s,e={};const i=(i,a)=>(i=new URL(i+".js",a).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(a,n)=>{const c=s||("document"in self?document.currentScript.src:"")||location.href;if(e[c])return;let t={};const r=s=>i(s,c),o={module:{uri:c},exports:t,require:r};e[c]=Promise.all(a.map((s=>o[s]||r(s)))).then((s=>(n(...s),t)))}}define(["./workbox-50de5c5d"],(function(s){"use strict";importScripts(),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/README/img.png",revision:"a01fa8c260ede6b30ab97438125d50c0"},{url:"/README/img_1.png",revision:"470ba5ed99d2e100191e443b78c3eb79"},{url:"/README/img_2.png",revision:"b92ba8d165279bb394f6e61d38cbb520"},{url:"/README/img_3.png",revision:"f1b67668f509d75abc5bc4b642366f4c"},{url:"/_next/app-build-manifest.json",revision:"cd1219a975bd8d287a70dbbfeb2f2942"},{url:"/_next/static/chunks/250-bbcdcca396de41fa.js",revision:"jCq3sY8QsUiCIU7oBidRs"},{url:"/_next/static/chunks/374-16d819e77db65ac7.js",revision:"jCq3sY8QsUiCIU7oBidRs"},{url:"/_next/static/chunks/44-3fc11057a4c3c98c.js",revision:"jCq3sY8QsUiCIU7oBidRs"},{url:"/_next/static/chunks/531-7199211a099cadb4.js",revision:"jCq3sY8QsUiCIU7oBidRs"},{url:"/_next/static/chunks/564-ebcadf97ef5c517d.js",revision:"jCq3sY8QsUiCIU7oBidRs"},{url:"/_next/static/chunks/595-4b68f2406d47c3e8.js",revision:"jCq3sY8QsUiCIU7oBidRs"},{url:"/_next/static/chunks/596-d5a6ffdb9c17c7fd.js",revision:"jCq3sY8QsUiCIU7oBidRs"},{url:"/_next/static/chunks/739-7dadc6f9d298fa9c.js",revision:"jCq3sY8QsUiCIU7oBidRs"},{url:"/_next/static/chunks/749-e3bca9e52dcf2751.js",revision:"jCq3sY8QsUiCIU7oBidRs"},{url:"/_next/static/chunks/840-7e0e20e08cc8cd07.js",revision:"jCq3sY8QsUiCIU7oBidRs"},{url:"/_next/static/chunks/932-e786250f8fdaaa86.js",revision:"jCq3sY8QsUiCIU7oBidRs"},{url:"/_next/static/chunks/938-f3703aeb3f75e961.js",revision:"jCq3sY8QsUiCIU7oBidRs"},{url:"/_next/static/chunks/app/admin/album/layout-614276d9504cdf6c.js",revision:"jCq3sY8QsUiCIU7oBidRs"},{url:"/_next/static/chunks/app/admin/album/page-771b6c75356f2d7b.js",revision:"jCq3sY8QsUiCIU7oBidRs"},{url:"/_next/static/chunks/app/admin/artist/layout-32933fc544106435.js",revision:"jCq3sY8QsUiCIU7oBidRs"},{url:"/_next/static/chunks/app/admin/artist/page-99bf9ebd5b11cc15.js",revision:"jCq3sY8QsUiCIU7oBidRs"},{url:"/_next/static/chunks/app/admin/layout-61cece507f5e4e09.js",revision:"jCq3sY8QsUiCIU7oBidRs"},{url:"/_next/static/chunks/app/admin/page-f7dc1435fc2bef77.js",revision:"jCq3sY8QsUiCIU7oBidRs"},{url:"/_next/static/chunks/app/layout-827bcb9d0d69853f.js",revision:"jCq3sY8QsUiCIU7oBidRs"},{url:"/_next/static/chunks/app/main/about/layout-38b56fc3ca3faf07.js",revision:"jCq3sY8QsUiCIU7oBidRs"},{url:"/_next/static/chunks/app/main/about/page-5af87360ca826a17.js",revision:"jCq3sY8QsUiCIU7oBidRs"},{url:"/_next/static/chunks/app/main/detail/%5Bid%5D/layout-671f3a8139d2e11c.js",revision:"jCq3sY8QsUiCIU7oBidRs"},{url:"/_next/static/chunks/app/main/detail/%5Bid%5D/page-939db22dee58624b.js",revision:"jCq3sY8QsUiCIU7oBidRs"},{url:"/_next/static/chunks/app/main/layout-0e7fd41043c7be2d.js",revision:"jCq3sY8QsUiCIU7oBidRs"},{url:"/_next/static/chunks/app/main/page-54caadbfd158f3bd.js",revision:"jCq3sY8QsUiCIU7oBidRs"},{url:"/_next/static/chunks/app/main/search/layout-b710cc2d5181ef63.js",revision:"jCq3sY8QsUiCIU7oBidRs"},{url:"/_next/static/chunks/app/main/search/page-e57f22e250cea1e3.js",revision:"jCq3sY8QsUiCIU7oBidRs"},{url:"/_next/static/chunks/app/not-found-0a4d081a90e0faa8.js",revision:"jCq3sY8QsUiCIU7oBidRs"},{url:"/_next/static/chunks/app/page-2ee20bfb61a2b9d1.js",revision:"jCq3sY8QsUiCIU7oBidRs"},{url:"/_next/static/chunks/fd9d1056-76865973d7357d1f.js",revision:"jCq3sY8QsUiCIU7oBidRs"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"jCq3sY8QsUiCIU7oBidRs"},{url:"/_next/static/chunks/main-4a43c94db03117b6.js",revision:"jCq3sY8QsUiCIU7oBidRs"},{url:"/_next/static/chunks/main-app-a43d1818cdcdad06.js",revision:"jCq3sY8QsUiCIU7oBidRs"},{url:"/_next/static/chunks/pages/_app-98cb51ec6f9f135f.js",revision:"jCq3sY8QsUiCIU7oBidRs"},{url:"/_next/static/chunks/pages/_error-e87e5963ec1b8011.js",revision:"jCq3sY8QsUiCIU7oBidRs"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-acf6d4568184ee1e.js",revision:"jCq3sY8QsUiCIU7oBidRs"},{url:"/_next/static/css/d2ae829d783006b4.css",revision:"d2ae829d783006b4"},{url:"/_next/static/jCq3sY8QsUiCIU7oBidRs/_buildManifest.js",revision:"a1b7599199e2e8c82f2c6bcf8d8aca61"},{url:"/_next/static/jCq3sY8QsUiCIU7oBidRs/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/cddProfile.9a5a2943.jpeg",revision:"1e4f174631358b024b4ad0be34a39b06"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/logo.ceac9481.png",revision:"49f9343f66b11604e87a91ebe1d8bf7a"},{url:"/css/font.css",revision:"d262c640da282f8b2dddca89e801ce0c"},{url:"/css/globals.css",revision:"668f9ebad6be1236349387f76301be05"},{url:"/manifest/icon-192x192.png",revision:"5e7deaec193dbcc187265340bb56545f"},{url:"/manifest/icon-256x256.png",revision:"03fec9d4664621c55a32704d6858759a"},{url:"/manifest/icon-384x384.png",revision:"ebce440e00804431ed77a56c3faa43da"},{url:"/manifest/icon-512x512.png",revision:"c5da182c8ed27542eb7990b97448978b"},{url:"/manifest/sw.js",revision:"79e22b34f39706f8d103e8f084e4ab9f"},{url:"/manifest/workbox-50de5c5d.js",revision:"abfbed2b2e9ae0dc5b3b3fcb275894ab"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/pwa/icon-128x128.png",revision:"8bde6f5ee0ecb71f0a7226c26c640073"},{url:"/pwa/icon-144x144.png",revision:"8bb918e3762840ef68ad37789c8c4d12"},{url:"/pwa/icon-152x152.png",revision:"ae7ac64d79b0396a06a33005bb647f0b"},{url:"/pwa/icon-192x192.png",revision:"bfedb1c0b8b08b4770a54b283ff56f34"},{url:"/pwa/icon-384x384.png",revision:"ec45a7862fa70896570a785e8f90bf43"},{url:"/pwa/icon-48x48.png",revision:"91a056939f1a27d30a1f6e805605823d"},{url:"/pwa/icon-512x512.png",revision:"0dc35c411e7462ee767793cbef7a9cff"},{url:"/pwa/icon-72x72.png",revision:"33874d222aafcde5c96e468ffb828fa1"},{url:"/pwa/icon-96x96.png",revision:"ee4a41ed4d644713f06650feba64a41d"},{url:"/splashscreens/ipad_splash.png",revision:"96061a4a8e5b44751cbc2433f3e650c8"},{url:"/splashscreens/ipadpro1_splash.png",revision:"6b5b470592de28fd0487413d20c834e6"},{url:"/splashscreens/ipadpro2_splash.png",revision:"e63f48b65b6d4579003ab611f0bd4d14"},{url:"/splashscreens/ipadpro3_splash.png",revision:"49a3d63704bea53f40e69eba6b10006e"},{url:"/splashscreens/iphone5_splash.png",revision:"a9b966825c764e24cc67eac0d89dbcc8"},{url:"/splashscreens/iphone6_splash.png",revision:"cce8d5d2170541ca9fe36e24a481a9ed"},{url:"/splashscreens/iphoneplus_splash.png",revision:"7b895a14ef20a56ef58f0a10bc7c023d"},{url:"/splashscreens/iphonex_splash.png",revision:"5fe21b58f3afc5306897a60ebdcf7878"},{url:"/splashscreens/iphonexr_splash.png",revision:"8695524de118c07e97e9f4fe640d14e9"},{url:"/splashscreens/iphonexsmax_splash.png",revision:"dd22fb1161943d76e30e3d4a795de8a2"},{url:"/static/cddProfile.jpeg",revision:"1e4f174631358b024b4ad0be34a39b06"},{url:"/static/ionProfile.jpeg",revision:"760104a3da31309f7df03550dc5e3c66"},{url:"/static/logo.png",revision:"49f9343f66b11604e87a91ebe1d8bf7a"},{url:"/static/mail_icon.svg",revision:"e2ab348b2367e1d5589c2a8a0d1603f6"},{url:"/static/search_icon.svg",revision:"0bd818c26e0c54345c6c16a10d89a3a4"},{url:"/static/vincentProfile.png",revision:"2277a489a877bdc8b1f2ab69836da668"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),s.cleanupOutdatedCaches(),s.registerRoute("/",new s.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:s,response:e,event:i,state:a})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new s.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new s.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new s.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/image\?url=.+$/i,new s.StaleWhileRevalidate({cacheName:"next-image",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:mp3|wav|ogg)$/i,new s.CacheFirst({cacheName:"static-audio-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:mp4)$/i,new s.CacheFirst({cacheName:"static-video-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:js)$/i,new s.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:css|less)$/i,new s.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new s.StaleWhileRevalidate({cacheName:"next-data",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:json|xml|csv)$/i,new s.NetworkFirst({cacheName:"static-data-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;const e=s.pathname;return!e.startsWith("/api/auth/")&&!!e.startsWith("/api/")}),new s.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;return!s.pathname.startsWith("/api/")}),new s.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>!(self.origin===s.origin)),new s.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
