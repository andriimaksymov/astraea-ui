import{j as n}from"./clsx-BKsCbDk3.js";import{C as v}from"./Card-DO5sIWGE.js";const u=({elevation:h=1,children:f,...g})=>n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:n.jsx(v,{elevation:h,...g,children:f})});u.__docgenInfo={description:"",methods:[],displayName:"Example",props:{borderColor:{required:!1,tsType:{name:"string"},description:"Border color of the card."},className:{required:!1,tsType:{name:"string"},description:"Override or extend the styles applied to the component."},children:{required:!1,tsType:{name:"ReactNode"},description:"The content render inside the card."},elevation:{required:!1,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"}]},description:"Shadow depth, corresponds to `dp` in the spec.\nIt accepts values between 0 and 5 inclusive.\n@default 1",defaultValue:{value:"1",computed:!1}},hasBorder:{required:!1,tsType:{name:"boolean"},description:`If 'true' the card has 1px border.
@default false`},padding:{required:!1,tsType:{name:"union",raw:'"none" | "small" | "medium" | "large"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:`Padding size for the card.
@default "medium"`}}};const C={title:"Card",component:u},e={args:{children:"Default Card Content"}},a={args:{padding:"small",children:"Card with small padding"}},r={args:{elevation:5,children:"Card with shadow elevation level 5"}};var t,l,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: "Default Card Content"
  }
}`,...(s=(l=e.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var d,o,i;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    padding: "small",
    children: "Card with small padding"
  }
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var c,m,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    elevation: 5,
    children: "Card with shadow elevation level 5"
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const y=["Default","PaddingSmall","Elevation5"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Elevation5:r,PaddingSmall:a,__namedExportsOrder:y,default:C},Symbol.toStringTag,{value:"Module"}));export{S as C,e as D};
