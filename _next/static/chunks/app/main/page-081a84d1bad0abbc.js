(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[29],{4360:function(e,t,i){Promise.resolve().then(i.bind(i,2522))},2522:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return d},revalidate:function(){return o}});var a=i(7437),n=i(6691),c=i.n(n),r=i(2265),s=i(3248);let l=async()=>{let e=(0,s.eI)("https://ncmlbaxuiwbpuvojgilt.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jbWxiYXh1aXdicHV2b2pnaWx0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTUxMjU1NiwiZXhwIjoyMDE1MDg4NTU2fQ.4oCg61fIj_HAPScmZ-hSD3d9SHpAokSaz7fszTc5JfM"),{data:t,error:i}=await e.from("hiphopAlbumList").select().order("album_release_date",{ascending:!1});if(i)throw Error("Error fetching data: ".concat(i.message));return t||[]},o=100;var d=()=>{let[e,t]=(0,r.useState)([]);return(0,r.useEffect)(()=>{let e=async()=>{let e=await l();t(e)};e()},[]),(0,a.jsx)("div",{className:"p-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4",children:null==e?void 0:e.map((e,t)=>(0,a.jsx)(c(),{src:"".concat(e.album_image),alt:"개발자에게 얼른 사진 넣어라고 전해주세요",width:250,height:250,className:"rounded-md hover:filter hover:brightness-75",title:"".concat(e.album_name," - ").concat(e.artist_name)},e.id))})}}},function(e){e.O(0,[935,691,971,472,744],function(){return e(e.s=4360)}),_N_E=e.O()}]);