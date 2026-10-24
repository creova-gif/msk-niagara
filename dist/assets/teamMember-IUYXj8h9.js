import{r as i,j as u,e as l}from"./index-D5w6MqBL.js";import{P as m,u as _,a as v,c as y}from"./index-DTr0GkwS.js";var g="Avatar",[j]=y(g),[C,p]=j(g),b=i.forwardRef((e,a)=>{const{__scopeAvatar:n,...t}=e,[o,r]=i.useState("idle");return u.jsx(C,{scope:n,imageLoadingStatus:o,onImageLoadingStatusChange:r,children:u.jsx(m.span,{...t,ref:a})})});b.displayName=g;var A="AvatarImage",x=i.forwardRef((e,a)=>{const{__scopeAvatar:n,src:t,onLoadingStatusChange:o=()=>{},...r}=e,c=p(A,n),s=h(t,r.referrerPolicy),d=_(f=>{o(f),c.onImageLoadingStatusChange(f)});return v(()=>{s!=="idle"&&d(s)},[s,d]),s==="loaded"?u.jsx(m.img,{...r,ref:a,src:t}):null});x.displayName=A;var L="AvatarFallback",S=i.forwardRef((e,a)=>{const{__scopeAvatar:n,delayMs:t,...o}=e,r=p(L,n),[c,s]=i.useState(t===void 0);return i.useEffect(()=>{if(t!==void 0){const d=window.setTimeout(()=>s(!0),t);return()=>window.clearTimeout(d)}},[t]),c&&r.imageLoadingStatus!=="loaded"?u.jsx(m.span,{...o,ref:a}):null});S.displayName=L;function h(e,a){const[n,t]=i.useState("idle");return v(()=>{if(!e){t("error");return}let o=!0;const r=new window.Image,c=s=>()=>{o&&t(s)};return t("loading"),r.onload=c("loaded"),r.onerror=c("error"),r.src=e,a&&(r.referrerPolicy=a),()=>{o=!1}},[e,a]),n}var w=b,I=x,M=S;function R({className:e,...a}){return u.jsx(w,{"data-slot":"avatar",className:l("relative flex size-10 shrink-0 overflow-hidden rounded-full",e),...a})}function E({className:e,...a}){return u.jsx(I,{"data-slot":"avatar-image",className:l("aspect-square size-full object-cover object-center",e),...a})}function P({className:e,...a}){return u.jsx(M,{"data-slot":"avatar-fallback",className:l("bg-muted flex size-full items-center justify-center rounded-full",e),...a})}function T(e,a){return e?a==="fr"?e.fr:e.en:""}const F=`
*[_type == "teamMember"] | order(order asc, name asc) {
  _id,
  name,
  role,
  "hub": hub->{_id, name, "slug": slug.current},
  institution,
  email,
  memberType,
  isPostDoc,
  isCoDirector,
  isHubLeader,
  isProjectLeader,
  projectLeaderTitle,
  bio,
  image,
  order
}`,D=`
*[_type == "teamMember" && hub->slug.current == $slug] | order(order asc, name asc) {
  _id,
  name,
  role,
  institution,
  email,
  memberType,
  isHubLeader,
  bio,
  image
}`,$=`
*[_type == "teamMember" && isCoDirector == true] | order(order asc) {
  _id,
  name,
  role,
  institution,
  email,
  bio,
  image,
  order
}`;export{R as A,E as a,P as b,$ as c,F as d,T as p,D as t};
