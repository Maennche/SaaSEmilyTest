import C from"./yExSILWy.js";import{d as B,at as S,S as G,U as w,r as D,D as f,c as l,e as p,f as g,F as I,K as N,n as u,a9 as a,i as j,t as A,L as F,bf as L,N as O}from"./DSJi3dgO.js";const P=["onClick"],U=B({inheritAttrs:!1,__name:"CodeGroup",props:{class:{type:[String,Object,Array],default:void 0}},setup(y,{expose:v}){const _={wrapper:"relative [&>div:last-child]:!my-0 [&>div:last-child]:!static my-5",header:"flex items-center gap-1 border border-gray-200 dark:border-gray-700 border-b-0 rounded-t-md overflow-hidden p-2",tab:{base:"px-2 py-1.5 focus:outline-none text-gray-700 dark:text-gray-200 text-sm rounded-md flex items-center gap-1.5",active:"bg-gray-100 dark:bg-gray-800",inactive:"hover:bg-gray-50 dark:hover:bg-gray-800/50",icon:{base:""}}},h=y,d=S(),{ui:o,attrs:k}=G("content.codeGroup",void 0,_,w(h,"class"),!0),s=D(0);v({selectedIndex:s});function m(e,t){var i,c,r,n;return typeof e.type=="symbol"?(i=e.children)==null?void 0:i.map(m):{label:((c=e.props)==null?void 0:c.filename)||((r=e.props)==null?void 0:r.label)||`${t}`,icon:(n=e.props)==null?void 0:n.icon,component:e}}const b=f(()=>{var e,t;return((t=(e=d.default)==null?void 0:e.call(d))==null?void 0:t.flatMap(m).filter(Boolean))||[]}),x=f(()=>b.value.find((e,t)=>t===s.value));return(e,t)=>{var c;const i=C;return l(),p("div",O({class:a(o).wrapper},a(k)),[g("div",{class:u(a(o).header)},[(l(!0),p(I,null,N(a(b),(r,n)=>(l(),p("button",{key:n,tabindex:"-1",class:u([a(o).tab.base,a(s)===n?a(o).tab.active:a(o).tab.inactive]),onClick:V=>s.value=n},[j(i,{icon:r.icon,filename:r.label,class:u(a(o).tab.icon.base)},null,8,["icon","filename","class"]),g("span",null,A(r.label),1)],10,P))),128))],2),(l(),F(L((c=a(x))==null?void 0:c.component),{key:a(s),"hide-header":""}))],16)}}}),E=Object.assign(U,{__name:"CodeGroup"});export{E as default};
