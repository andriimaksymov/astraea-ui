import{r as S}from"./index-CsdIBAqE.js";var j={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R=S,q=Symbol.for("react.element"),I=Symbol.for("react.fragment"),P=Object.prototype.hasOwnProperty,B=R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D={key:!0,ref:!0,__self:!0,__source:!0};function z(r,e,t){var a,n={},o=null,d=null;t!==void 0&&(o=""+t),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(d=e.ref);for(a in e)P.call(e,a)&&!D.hasOwnProperty(a)&&(n[a]=e[a]);if(r&&r.defaultProps)for(a in e=r.defaultProps,e)n[a]===void 0&&(n[a]=e[a]);return{$$typeof:q,type:r,key:o,ref:d,props:n,_owner:B.current}}p.Fragment=I;p.jsx=z;p.jsxs=z;j.exports=p;var m=j.exports;function E(r){var e,t,a="";if(typeof r=="string"||typeof r=="number")a+=r;else if(typeof r=="object")if(Array.isArray(r)){var n=r.length;for(e=0;e<n;e++)r[e]&&(t=E(r[e]))&&(a&&(a+=" "),a+=t)}else for(t in r)r[t]&&(a&&(a+=" "),a+=t);return a}function L(){for(var r,e,t=0,a="",n=arguments.length;t<n;t++)(r=arguments[t])&&(e=E(r))&&(a&&(a+=" "),a+=e);return a}const $="_root_1xzye_23",k="_paddingNone_1xzye_30",A="_paddingSmall_1xzye_34",M="_paddingMedium_1xzye_38",U="_paddingLarge_1xzye_42",V="_withBorder_1xzye_46",F="_elevation1_1xzye_50",J="_elevation2_1xzye_54",W="_elevation3_1xzye_58",Y="_elevation4_1xzye_62",G="_elevation5_1xzye_66",c={root:$,paddingNone:k,paddingSmall:A,paddingMedium:M,paddingLarge:U,withBorder:V,elevation1:F,elevation2:J,elevation3:W,elevation4:Y,elevation5:G},u=S.forwardRef(({hasBorder:r,borderColor:e,className:t,children:a,padding:n="medium",elevation:o=1,...d},b)=>{const O=L(c.root,t,o&&[c[`elevation${o}`]],{[c.withBorder]:r||e,[c[`padding${n.charAt(0).toUpperCase()}${n.slice(1)}`]]:n}),T={...e&&{borderColor:e}};return m.jsx("div",{ref:b,className:O,style:T,...d,children:a})});u.displayName="Card";u.__docgenInfo={description:"",methods:[],displayName:"Card",props:{padding:{defaultValue:{value:'"medium"',computed:!1},required:!1},elevation:{defaultValue:{value:"1",computed:!1},required:!1}}};const N=({elevation:r=1,children:e,...t})=>m.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:m.jsx(u,{elevation:r,...t,children:e})});N.__docgenInfo={description:"",methods:[],displayName:"Example",props:{borderColor:{required:!1,tsType:{name:"string"},description:"Border color of the card."},className:{required:!1,tsType:{name:"string"},description:"Override or extend the styles applied to the component."},children:{required:!1,tsType:{name:"ReactNode"},description:"The content render inside the card."},elevation:{required:!1,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"}]},description:"Shadow depth, corresponds to `dp` in the spec.\nIt accepts values between 0 and 5 inclusive.\n@default 1",defaultValue:{value:"1",computed:!1}},hasBorder:{required:!1,tsType:{name:"boolean"},description:`If 'true' the card has 1px border.
@default false`},padding:{required:!1,tsType:{name:"union",raw:'"none" | "small" | "medium" | "large"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:`Padding size for the card.
@default "medium"`}}};const H={title:"Card",component:N},l={args:{children:"Default Card Content"}},s={args:{padding:"small",children:"Card with small padding"}},i={args:{elevation:5,children:"Card with shadow elevation level 5"}};var f,_,v;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: "Default Card Content"
  }
}`,...(v=(_=l.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var g,y,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    padding: "small",
    children: "Card with small padding"
  }
}`,...(h=(y=s.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var x,w,C;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    elevation: 5,
    children: "Card with shadow elevation level 5"
  }
}`,...(C=(w=i.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const K=["Default","PaddingSmall","Elevation5"],X=Object.freeze(Object.defineProperty({__proto__:null,Default:l,Elevation5:i,PaddingSmall:s,__namedExportsOrder:K,default:H},Symbol.toStringTag,{value:"Module"}));export{X as C,l as D,m as j};
