import{d as v,W as b,u as P,w as S,r as g,X as B,s as D,q as T,Y as w,y,z as A,c as f,_ as $,e as l,g as C,h as i,E as k,f as _,D as E}from"./dd131b0d.js";import{P as I}from"./07aab329.js";import{B as M}from"./abb44a4e.js";import{C as N}from"./0c71aacb.js";import"https://unpkg.com/@waline/client@v2/dist/waline.mjs";import"./535fd060.js";import"./30206de2.js";const R=v({name:"ARPage",components:{PageContent:I,Breadcrumbs:M,Comment:N},setup(){const e=b(),a=P(),u=S(),n=g(new B),s=D(),{t:p}=T(),o=g(),{enabledCommentPlugin:r}=w(),m=async()=>{const t=await e.fetchArticle(String(s.params.slug));n.value=t,o.value=t.title,d(a.locale)},d=t=>{const h=t??"en",c=a.themeConfig.menu.menus[String(s.params.slug)];o.value=c.i18n&&c.i18n[h]||c.name,u.setTitle(o.value)};return y(()=>a.locale,t=>{t&&d(t)}),A(m),{enabledComment:f(()=>n.value.comments&&r.value.plugin!==""),pageTitle:f(()=>o.value),pageData:n,t:p}}}),V={class:"mt-20"},q={key:0,id:"comments"};function z(e,a,u,n,s,p){const o=l("Breadcrumbs"),r=l("Comment"),m=l("PageContent");return _(),C("div",V,[i(o,{current:e.pageTitle},null,8,["current"]),i(m,{post:e.pageData,title:e.pageTitle},{default:k(()=>[e.enabledComment?(_(),C("div",q,[i(r,{title:e.pageData.title,body:e.pageData.text,uid:e.pageData.uid},null,8,["title","body","uid"])])):E("",!0)]),_:1},8,["post","title"])])}const H=$(R,[["render",z]]);export{H as default};
