if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>i(e,c),f={module:{uri:c},exports:t,require:r};s[c]=Promise.all(a.map((e=>f[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/README/img.png",revision:"d5a2a347e8b88f1b6312f1d172432fa1"},{url:"/README/img_1.png",revision:"33df3456cdb0cb887834ffce9f43914c"},{url:"/README/img_2.png",revision:"d4bcfd4f880561bf6d45cf93d4efc6ff"},{url:"/_next/app-build-manifest.json",revision:"04da40518f1ed14d8a156a4ec223a989"},{url:"/_next/static/Iq4CMdiF69tHpRHJXruXN/_buildManifest.js",revision:"39c04c408085e9912adc25c833c9fca1"},{url:"/_next/static/Iq4CMdiF69tHpRHJXruXN/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/326-54ea8469c01c955e.js",revision:"Iq4CMdiF69tHpRHJXruXN"},{url:"/_next/static/chunks/413-b7be691b065e1e07.js",revision:"Iq4CMdiF69tHpRHJXruXN"},{url:"/_next/static/chunks/472-3dd94ea72ceeb227.js",revision:"Iq4CMdiF69tHpRHJXruXN"},{url:"/_next/static/chunks/596-5d6b9c7fdf24cec3.js",revision:"Iq4CMdiF69tHpRHJXruXN"},{url:"/_next/static/chunks/app/detail/%5Bid%5D/page-53e0af04f65041bd.js",revision:"Iq4CMdiF69tHpRHJXruXN"},{url:"/_next/static/chunks/app/layout-f1ce58aa042f64df.js",revision:"Iq4CMdiF69tHpRHJXruXN"},{url:"/_next/static/chunks/app/main/about/page-fa019795c6a04848.js",revision:"Iq4CMdiF69tHpRHJXruXN"},{url:"/_next/static/chunks/app/main/detail/%5Bid%5D/page-1952dafc8853152e.js",revision:"Iq4CMdiF69tHpRHJXruXN"},{url:"/_next/static/chunks/app/main/layout-853d789d4f264e55.js",revision:"Iq4CMdiF69tHpRHJXruXN"},{url:"/_next/static/chunks/app/main/page-7741f329907649ee.js",revision:"Iq4CMdiF69tHpRHJXruXN"},{url:"/_next/static/chunks/app/main/post/page-8a37e6142cf5f95f.js",revision:"Iq4CMdiF69tHpRHJXruXN"},{url:"/_next/static/chunks/app/not-found-f538eddf258fe310.js",revision:"Iq4CMdiF69tHpRHJXruXN"},{url:"/_next/static/chunks/app/page-35087349403c7fa5.js",revision:"Iq4CMdiF69tHpRHJXruXN"},{url:"/_next/static/chunks/app/post/page-985fc0df893bfd66.js",revision:"Iq4CMdiF69tHpRHJXruXN"},{url:"/_next/static/chunks/fd9d1056-13342476f4426106.js",revision:"Iq4CMdiF69tHpRHJXruXN"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"Iq4CMdiF69tHpRHJXruXN"},{url:"/_next/static/chunks/main-491675622b4035dc.js",revision:"Iq4CMdiF69tHpRHJXruXN"},{url:"/_next/static/chunks/main-app-9b02b1b0b14994f5.js",revision:"Iq4CMdiF69tHpRHJXruXN"},{url:"/_next/static/chunks/pages/_app-ee276fea40a4b191.js",revision:"Iq4CMdiF69tHpRHJXruXN"},{url:"/_next/static/chunks/pages/_error-deeb844d2074b9d8.js",revision:"Iq4CMdiF69tHpRHJXruXN"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-b844d65ba34e7431.js",revision:"Iq4CMdiF69tHpRHJXruXN"},{url:"/_next/static/css/db283a87af81c200.css",revision:"db283a87af81c200"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/cddProfile.9a5a2943.jpeg",revision:"1e4f174631358b024b4ad0be34a39b06"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/ionProfile.943232f4.jpeg",revision:"760104a3da31309f7df03550dc5e3c66"},{url:"/_next/static/media/logo.ceac9481.png",revision:"49f9343f66b11604e87a91ebe1d8bf7a"},{url:"/_next/static/media/vincentProfile.88323fa2.png",revision:"2277a489a877bdc8b1f2ab69836da668"},{url:"/manifest.json",revision:"6749cfc6ef37c05c7b98548e82272b4f"},{url:"/manifest/icon-192x192.png",revision:"5e7deaec193dbcc187265340bb56545f"},{url:"/manifest/icon-256x256.png",revision:"03fec9d4664621c55a32704d6858759a"},{url:"/manifest/icon-384x384.png",revision:"ebce440e00804431ed77a56c3faa43da"},{url:"/manifest/icon-512x512.png",revision:"c5da182c8ed27542eb7990b97448978b"},{url:"/manifest/sw.js",revision:"79e22b34f39706f8d103e8f084e4ab9f"},{url:"/manifest/workbox-50de5c5d.js",revision:"abfbed2b2e9ae0dc5b3b3fcb275894ab"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/pwa/icon-128x128.png",revision:"8bde6f5ee0ecb71f0a7226c26c640073"},{url:"/pwa/icon-144x144.png",revision:"8bb918e3762840ef68ad37789c8c4d12"},{url:"/pwa/icon-152x152.png",revision:"ae7ac64d79b0396a06a33005bb647f0b"},{url:"/pwa/icon-192x192.png",revision:"bfedb1c0b8b08b4770a54b283ff56f34"},{url:"/pwa/icon-384x384.png",revision:"ec45a7862fa70896570a785e8f90bf43"},{url:"/pwa/icon-48x48.png",revision:"91a056939f1a27d30a1f6e805605823d"},{url:"/pwa/icon-512x512.png",revision:"0dc35c411e7462ee767793cbef7a9cff"},{url:"/pwa/icon-72x72.png",revision:"33874d222aafcde5c96e468ffb828fa1"},{url:"/pwa/icon-96x96.png",revision:"ee4a41ed4d644713f06650feba64a41d"},{url:"/splashscreens/ipad_splash.png",revision:"96061a4a8e5b44751cbc2433f3e650c8"},{url:"/splashscreens/ipadpro1_splash.png",revision:"6b5b470592de28fd0487413d20c834e6"},{url:"/splashscreens/ipadpro2_splash.png",revision:"e63f48b65b6d4579003ab611f0bd4d14"},{url:"/splashscreens/ipadpro3_splash.png",revision:"49a3d63704bea53f40e69eba6b10006e"},{url:"/splashscreens/iphone5_splash.png",revision:"a9b966825c764e24cc67eac0d89dbcc8"},{url:"/splashscreens/iphone6_splash.png",revision:"cce8d5d2170541ca9fe36e24a481a9ed"},{url:"/splashscreens/iphoneplus_splash.png",revision:"7b895a14ef20a56ef58f0a10bc7c023d"},{url:"/splashscreens/iphonex_splash.png",revision:"5fe21b58f3afc5306897a60ebdcf7878"},{url:"/splashscreens/iphonexr_splash.png",revision:"8695524de118c07e97e9f4fe640d14e9"},{url:"/splashscreens/iphonexsmax_splash.png",revision:"dd22fb1161943d76e30e3d4a795de8a2"},{url:"/static/cddProfile.jpeg",revision:"1e4f174631358b024b4ad0be34a39b06"},{url:"/static/ionProfile.jpeg",revision:"760104a3da31309f7df03550dc5e3c66"},{url:"/static/logo.png",revision:"49f9343f66b11604e87a91ebe1d8bf7a"},{url:"/static/vincentProfile.png",revision:"2277a489a877bdc8b1f2ab69836da668"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));