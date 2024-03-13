import{r as S}from"./index-CsdIBAqE.js";var j={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q=S,I=Symbol.for("react.element"),P=Symbol.for("react.fragment"),B=Object.prototype.hasOwnProperty,D=q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,L={key:!0,ref:!0,__self:!0,__source:!0};function E(t,e,r){var a,n={},o=null,d=null;r!==void 0&&(o=""+r),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(d=e.ref);for(a in e)B.call(e,a)&&!L.hasOwnProperty(a)&&(n[a]=e[a]);if(t&&t.defaultProps)for(a in e=t.defaultProps,e)n[a]===void 0&&(n[a]=e[a]);return{$$typeof:I,type:t,key:o,ref:d,props:n,_owner:D.current}}c.Fragment=P;c.jsx=E;c.jsxs=E;j.exports=c;var u=j.exports;function N(t){var e,r,a="";if(typeof t=="string"||typeof t=="number")a+=t;else if(typeof t=="object")if(Array.isArray(t)){var n=t.length;for(e=0;e<n;e++)t[e]&&(r=N(t[e]))&&(a&&(a+=" "),a+=r)}else for(r in t)t[r]&&(a&&(a+=" "),a+=r);return a}function $(){for(var t,e,r=0,a="",n=arguments.length;r<n;r++)(t=arguments[r])&&(e=N(t))&&(a&&(a+=" "),a+=e);return a}const k="_root_iut8m_1",A="_paddingNone_iut8m_8",M="_paddingSmall_iut8m_12",U="_paddingMedium_iut8m_16",V="_paddingLarge_iut8m_20",z="_withBorder_iut8m_24",F="_elevation1_iut8m_28",J="_elevation2_iut8m_32",W="_elevation3_iut8m_36",Y="_elevation4_iut8m_40",G="_elevation5_iut8m_44",m={root:k,paddingNone:A,paddingSmall:M,paddingMedium:U,paddingLarge:V,withBorder:z,elevation1:F,elevation2:J,elevation3:W,elevation4:Y,elevation5:G},p=S.forwardRef(({hasBorder:t,borderColor:e,className:r,children:a,padding:n="medium",elevation:o=1,...d},O)=>{const T=$(m.root,r,o&&[m[`elevation${o}`]],{[m.withBorder]:t||e,[m[`padding${n.charAt(0).toUpperCase()}${n.slice(1)}`]]:n}),R={...e&&{borderColor:e}};return u.jsx("div",{ref:O,className:T,style:R,...d,children:a})});p.displayName="Card";p.__docgenInfo={description:"",methods:[],displayName:"Card",props:{padding:{defaultValue:{value:'"medium"',computed:!1},required:!1},elevation:{defaultValue:{value:"1",computed:!1},required:!1}}};const b=({elevation:t=1,children:e,...r})=>u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:u.jsx(p,{elevation:t,...r,children:e})});b.__docgenInfo={description:"",methods:[],displayName:"Example",props:{borderColor:{required:!1,tsType:{name:"string"},description:"Border color of the card."},className:{required:!1,tsType:{name:"string"},description:"Override or extend the styles applied to the component."},children:{required:!1,tsType:{name:"ReactNode"},description:"The content render inside the card."},elevation:{required:!1,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"}]},description:"Shadow depth, corresponds to `dp` in the spec.\nIt accepts values between 0 and 5 inclusive.\n@default 1",defaultValue:{value:"1",computed:!1}},hasBorder:{required:!1,tsType:{name:"boolean"},description:`If 'true' the card has 1px border.
@default false`},padding:{required:!1,tsType:{name:"union",raw:'"none" | "small" | "medium" | "large"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:`Padding size for the card.
@default "medium"`}}};const H={title:"Card",component:b},l={args:{children:"Default Card Content"}},i={args:{padding:"small",children:"Card with small padding"}},s={args:{elevation:5,children:"Card with shadow elevation level 5"}};var f,_,v;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: "Default Card Content"
  }
}`,...(v=(_=l.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var g,h,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    padding: "small",
    children: "Card with small padding"
  }
}`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var x,w,C;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    elevation: 5,
    children: "Card with shadow elevation level 5"
  }
}`,...(C=(w=s.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const K=["Default","PaddingSmall","Elevation5"],X=Object.freeze(Object.defineProperty({__proto__:null,Default:l,Elevation5:s,PaddingSmall:i,__namedExportsOrder:K,default:H},Symbol.toStringTag,{value:"Module"}));export{X as C,l as D,u as j};
