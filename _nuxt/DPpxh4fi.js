import{d as m,S as y,U as u,c as r,e as i,f as n,n as s,a9 as e,t as d,h as l,M as g,N as x,g as v}from"./DSJi3dgO.js";const S=m({inheritAttrs:!1,__name:"Field",props:{name:{type:String,required:!0},description:{type:String,default:void 0},type:{type:String,default:void 0},required:{type:Boolean,default:!1},default:{type:String,default:void 0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const p={wrapper:"mt-5",container:"flex items-start gap-x-2.5 font-mono text-sm",name:"rounded-md font-semibold text-primary",required:"text-gray-500 dark:text-gray-400",type:"text-right",label:"flex flex-1 gap-x-2.5",description:"mt-3 mb-0 text-gray-600 dark:text-gray-300 text-sm space-y-3"},o=t,{ui:a,attrs:f}=y("content.field",u(o,"ui"),p,u(o,"class"),!0);return(c,b)=>(r(),i("div",x({class:e(a).wrapper},e(f)),[n("div",{class:s(e(a).container)},[n("div",{class:s(e(a).label)},[n("span",{class:s(e(a).name)},d(t.name),3),t.required?(r(),i("span",{key:0,class:s(e(a).required)},"required",2)):l("",!0)],2),t.type?(r(),i("div",{key:0,class:s(e(a).type)},d(t.type),3)):l("",!0)],2),c.$slots.default||t.description?(r(),i("div",{key:0,class:s(e(a).description)},[g(c.$slots,"default",{},()=>[v(d(t.description),1)])],2)):l("",!0)],16))}}),q=Object.assign(S,{__name:"Field"});export{q as default};
