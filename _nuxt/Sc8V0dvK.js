import{_ as R,a as X}from"./BIbESOeD.js";import{I as W}from"./DhyaB_Qr.js";import{P as T,Q as z,an as Y,d as C,S as U,U as _,D as p,ao as Z,ap as ee,X as P,aq as te,ar as N,G as E,as as ae,at as se,au as D,av as ne,c as i,e as d,n as g,a9 as a,M as m,h as c,f as S,L as v,w as y,N as f,aw as re,i as j,g as G,t as O,F,K as H,al as ie,af as I,ag as oe,ah as le,ai as V,aj as ue,q as M}from"./DSJi3dgO.js";const ce={wrapper:"inline-flex flex-row-reverse justify-end",ring:"ring-2 ring-white dark:ring-gray-900",margin:"-me-1.5 first:me-0"},q=T(z.ui.strategy,z.ui.avatar,Y),de=T(z.ui.strategy,z.ui.avatarGroup,ce),ge=C({inheritAttrs:!1,props:{size:{type:String,default:null,validator(e){return Object.keys(q.size).includes(e)}},max:{type:Number,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:r}){const{ui:s,attrs:o}=U("avatarGroup",_(e,"ui"),de,_(e,"class")),n=p(()=>Z(r)),l=p(()=>typeof e.max=="string"?Number.parseInt(e.max,10):e.max),w=p(()=>n.value.map((b,h)=>{const t={};return!e.max||l.value&&h<l.value?(e.size&&(t.size=e.size),t.class=b.props.class||"",t.class=ee(P(t.class,s.value.ring,s.value.margin),t.class),te(b,t)):l.value!==void 0&&h===l.value?N(E,{size:e.size||q.default.size,text:`+${n.value.length-l.value}`,class:P(s.value.ring,s.value.margin)}):null}).filter(Boolean).reverse());return()=>N("div",{class:s.value.wrapper,...o.value},w.value)}}),me=["datetime"],fe=C({inheritAttrs:!1,__name:"BlogPost",props:{...ae,title:{type:String,default:void 0},description:{type:String,default:void 0},date:{type:[String,Date],default:void 0},image:{type:[String,Object],default:void 0},badge:{type:Object,default:void 0},authors:{type:Array,default:void 0},orientation:{type:String,default:"vertical"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const r=se(),s=e,o=p(()=>({wrapper:P("relative group flex flex-col w-full gap-y-6",s.orientation==="horizontal"&&(s.image||r.image)?"lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-center":void 0),image:{wrapper:"ring-1 ring-gray-200 dark:ring-gray-800 relative overflow-hidden aspect-[16/9] w-full rounded-lg pointer-events-none",base:"object-cover object-top w-full h-full transform transition-transform duration-200 group-hover:scale-105"},container:"flex flex-col justify-between flex-1",inner:"flex-1",badge:{wrapper:"mb-3",base:""},title:"text-gray-900 dark:text-white text-xl font-semibold truncate group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200",description:"text-base text-gray-500 dark:text-gray-400 mt-1",date:"text-sm text-gray-500 dark:text-gray-400 font-medium pointer-events-none",authors:{wrapper:"relative flex items-center gap-x-3 mt-4",avatar:{base:"relative ring-1 lg:hover:scale-105 lg:hover:ring-primary-500 dark:lg:hover:ring-primary-400 transition-transform",size:"xs"}}})),{ui:n,attrs:l}=U("blog.post",_(s,"ui"),o,_(s,"class"),!0),w=p(()=>D(s)),b=p(()=>(s.title||r.title&&ne(r.title())||"Post link").trim()),h=p(()=>{if(s.date)try{return new Date(s.date).toISOString()}catch{return}});return(t,x)=>{var A;const B=W,u=re,k=ie,J=E,K=ge;return i(),d("article",f({class:a(n).wrapper},a(l)),[e.image||t.$slots.image?(i(),d("div",{key:0,class:g(a(n).image.wrapper)},[m(t.$slots,"image",{},()=>[j(B,f(typeof e.image=="string"?{src:e.image,alt:e.title}:{alt:e.title,...e.image},{class:a(n).image.base}),null,16,["class"])])],2)):c("",!0),S("div",{class:g(a(n).container)},[S("div",{class:g(a(n).inner)},[t.to?(i(),v(u,f({key:0,"aria-label":a(b)},a(w),{class:"focus:outline-none",tabindex:"-1"}),{default:y(()=>x[0]||(x[0]=[S("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)])),_:1},16,["aria-label"])):c("",!0),e.badge||t.$slots.badge?(i(),d("div",{key:1,class:g(a(n).badge.wrapper)},[m(t.$slots,"badge",{},()=>[e.badge?(i(),v(k,f({key:0},{variant:"subtle",...e.badge},{class:a(n).badge.base}),null,16,["class"])):c("",!0)])],2)):c("",!0),e.title||t.$slots.title?(i(),d("h2",{key:2,class:g(a(n).title)},[m(t.$slots,"title",{},()=>[G(O(e.title),1)])],2)):c("",!0),e.description||t.$slots.description?(i(),d("div",{key:3,class:g(a(n).description)},[m(t.$slots,"description",{},()=>[G(O(e.description),1)])],2)):c("",!0),m(t.$slots,"default")],2),(A=e.authors)!=null&&A.length||t.$slots.authors||e.date||t.$slots.date?(i(),d("div",{key:0,class:g(a(n).authors.wrapper)},[m(t.$slots,"authors",{},()=>{var L;return[(L=e.authors)!=null&&L.length?(i(),v(K,{key:0},{default:y(()=>[(i(!0),d(F,null,H(e.authors,($,Q)=>(i(),v(J,f({key:Q,alt:$.name,class:a(n).authors.avatar.base,ref_for:!0},{size:a(n).authors.avatar.size,...$.avatar}),{default:y(()=>[$.to?(i(),v(u,f({key:0,ref_for:!0},{target:"_blank",...a(D)($)},{class:"focus:outline-none",tabindex:"-1"}),{default:y(()=>x[1]||(x[1]=[S("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)])),_:2},1040)):c("",!0)]),_:2},1040,["alt","class"]))),128))]),_:1})):c("",!0)]}),m(t.$slots,"date",{},()=>[e.date?(i(),d("time",{key:0,datetime:a(h),class:g(a(n).date)},O(e.date),11,me)):c("",!0)])],2)):c("",!0)],2)],16)}}}),pe=Object.assign(fe,{__name:"UBlogPost"}),ve=C({inheritAttrs:!1,__name:"BlogList",props:{orientation:{type:String,default:"horizontal"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const r=e,s=p(()=>({wrapper:{horizontal:"flex flex-col lg:grid lg:grid-cols-3 gap-x-8 gap-y-16",vertical:"flex flex-col gap-y-16 w-full"}[r.orientation]})),{ui:o,attrs:n}=U("blog.list",_(r,"ui"),s,_(r,"class"),!0);return(l,w)=>(i(),d("div",f({class:a(o).wrapper},a(n)),[m(l.$slots,"default")],16))}}),ye=Object.assign(ve,{__name:"UBlogList"}),_e=C({__name:"index",async setup(e){let r,s;const{data:o}=([r,s]=I(()=>V("blog",()=>M("/blog").findOne())),r=await r,s(),r);if(!o.value)throw oe({statusCode:404,statusMessage:"Page not found",fatal:!0});const{data:n}=([r,s]=I(()=>V("posts",()=>M("/blog").where({_extension:"md"}).sort({date:-1}).find())),r=await r,s(),r);return le({title:o.value.title,ogTitle:o.value.title,description:o.value.description,ogDescription:o.value.description}),(l,w)=>{const b=R,h=pe,t=ye,x=X,B=ue;return i(),v(B,null,{default:y(()=>[j(b,f(a(o),{class:"py-[50px]"}),null,16),j(x,null,{default:y(()=>[j(t,null,{default:y(()=>[(i(!0),d(F,null,H(a(n),(u,k)=>(i(),v(h,{key:k,to:u._path,title:u.title,description:u.description,image:u.image,date:new Date(u.date).toLocaleDateString("en",{year:"numeric",month:"short",day:"numeric"}),authors:u.authors,badge:u.badge,orientation:k===0?"horizontal":"vertical",class:g([k===0&&"col-span-full"]),ui:{description:"line-clamp-2"}},null,8,["to","title","description","image","date","authors","badge","orientation","class"]))),128))]),_:1})]),_:1})]),_:1})}}});export{_e as default};
