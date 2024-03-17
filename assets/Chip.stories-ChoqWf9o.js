import{j as e}from"./jsx-runtime-BnIj46N_.js";import{h as n}from"./Tooltip-trT8NcWj.js";import"./index-CsdIBAqE.js";import"./index-5f0m1pej.js";import"./Radio-fu4WFTuB.js";import{S as t}from"./Stack-D1kKokOu.js";import"./Tabs-TlBUxgQd.js";import"./Typography-DI-SgLTX.js";import"./clsx-B-dksMZM.js";import"./extends-CCbyfPlC.js";import"./index-MS7LKRHD.js";function E({...r}){return e.jsx("svg",{...r,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"})})}E.__docgenInfo={description:"",methods:[],displayName:"TrashIcon"};const Z={title:"Chip",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"Chips are compact elements that represent an input, attribute, or action."}}},args:{onDelete:null}},o=({...r})=>e.jsx(t,{spacing:2,align:"center",justify:"center",children:e.jsx(n,{variant:"contained",...r,children:"Basic Chip"})}),i=r=>e.jsxs(t,{spacing:2,align:"center",justify:"center",children:[e.jsx(n,{variant:"contained",...r,children:"Contained"}),e.jsx(n,{variant:"outlined",...r,children:"Outlined"})]}),a=r=>e.jsxs(t,{spacing:2,align:"center",justify:"center",children:[e.jsx(n,{color:"primary",variant:"contained",...r,children:"Primary"}),e.jsx(n,{color:"secondary",variant:"contained",...r,children:"Secondary"})]}),c=r=>e.jsxs(t,{spacing:2,align:"center",justify:"center",children:[e.jsx(n,{round:!0,color:"primary",...r,children:"Primary"}),e.jsx(n,{round:!0,color:"secondary",...r,children:"Secondary"}),e.jsx(n,{round:!0,color:"primary",variant:"outlined",...r,children:"Primary"}),e.jsx(n,{round:!0,color:"secondary",variant:"outlined",...r,children:"Secondary"})]}),s=r=>e.jsx(t,{spacing:2,align:"center",justify:"center",children:e.jsx(n,{color:"primary",...r,onClick:()=>alert("You've just clicked on the chip element"),children:"Clickable"})}),p=r=>e.jsx(t,{spacing:2,align:"center",justify:"center",children:e.jsx(n,{color:"primary",...r,onClick:()=>alert("You've just clicked on the chip element"),onDelete:()=>alert("You've just clicked on the delete button inside the chip element"),children:"Clickable And Deletable"})}),l=r=>e.jsx(t,{spacing:2,align:"center",justify:"center",children:e.jsx(n,{color:"primary",deleteIcon:E,...r,onClick:()=>alert("You've just clicked on the chip element"),onDelete:()=>alert("You've just clicked on the delete button inside the chip element"),children:"Custom delete icon"})});o.__docgenInfo={description:"Chips are compact elements that represent an input, attribute, or action.",methods:[],displayName:"Basic"};i.__docgenInfo={description:"The <b>Chip</b> component supports outlined and filled styling, use <b>variant</b> prop.",methods:[],displayName:"Variant"};a.__docgenInfo={description:"You can use the <b>color</b> prop to define a color from theme palette.",methods:[],displayName:"Color"};c.__docgenInfo={description:"You can use the <b>round</b> prop to define a rounded style.",methods:[],displayName:"Rounded"};s.__docgenInfo={description:"",methods:[],displayName:"Clickable"};p.__docgenInfo={description:"",methods:[],displayName:"ClickableAndDeletable"};l.__docgenInfo={description:"",methods:[],displayName:"WithCustomDeleteIcon"};var d,u,h,m,y;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`({
  ...args
}) => <Stack spacing={2} align="center" justify="center">
    <Chip variant="contained" {...args}>
      Basic Chip
    </Chip>
  </Stack>`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source},description:{story:"Chips are compact elements that represent an input, attribute, or action.",...(y=(m=o.parameters)==null?void 0:m.docs)==null?void 0:y.description}}};var C,g,j,f,k;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`(args: typeof Chip) => <Stack spacing={2} align="center" justify="center">
    <Chip variant="contained" {...args}>
      Contained
    </Chip>
    <Chip variant="outlined" {...args}>
      Outlined
    </Chip>
  </Stack>`,...(j=(g=i.parameters)==null?void 0:g.docs)==null?void 0:j.source},description:{story:"The <b>Chip</b> component supports outlined and filled styling, use <b>variant</b> prop.",...(k=(f=i.parameters)==null?void 0:f.docs)==null?void 0:k.description}}};var b,v,S,x,_;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`(args: typeof Chip) => <Stack spacing={2} align="center" justify="center">
    <Chip color="primary" variant="contained" {...args}>
      Primary
    </Chip>
    <Chip color="secondary" variant="contained" {...args}>
      Secondary
    </Chip>
  </Stack>`,...(S=(v=a.parameters)==null?void 0:v.docs)==null?void 0:S.source},description:{story:"You can use the <b>color</b> prop to define a color from theme palette.",...(_=(x=a.parameters)==null?void 0:x.docs)==null?void 0:_.description}}};var I,Y,D,N,B;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`(args: typeof Chip) => <Stack spacing={2} align="center" justify="center">
    <Chip round color="primary" {...args}>
      Primary
    </Chip>
    <Chip round color="secondary" {...args}>
      Secondary
    </Chip>
    <Chip round color="primary" variant="outlined" {...args}>
      Primary
    </Chip>
    <Chip round color="secondary" variant="outlined" {...args}>
      Secondary
    </Chip>
  </Stack>`,...(D=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:D.source},description:{story:"You can use the <b>round</b> prop to define a rounded style.",...(B=(N=c.parameters)==null?void 0:N.docs)==null?void 0:B.description}}};var P,w,A;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`(args: typeof Chip) => <Stack spacing={2} align="center" justify="center">
    <Chip color="primary" {...args} onClick={() => alert("You've just clicked on the chip element")}>
      Clickable
    </Chip>
  </Stack>`,...(A=(w=s.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var T,V,R;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`(args: typeof Chip) => <Stack spacing={2} align="center" justify="center">
    <Chip color="primary" {...args} onClick={() => alert("You've just clicked on the chip element")} onDelete={() => alert("You've just clicked on the delete button inside the chip element")}>
      Clickable And Deletable
    </Chip>
  </Stack>`,...(R=(V=p.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var O,W,z;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`(args: typeof Chip) => <Stack spacing={2} align="center" justify="center">
    <Chip color="primary" deleteIcon={TrashIcon} {...args} onClick={() => alert("You've just clicked on the chip element")} onDelete={() => alert("You've just clicked on the delete button inside the chip element")}>
      Custom delete icon
    </Chip>
  </Stack>`,...(z=(W=l.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};const $=["Basic","Variant","Color","Rounded","Clickable","ClickableAndDeletable","WithCustomDeleteIcon"];export{o as Basic,s as Clickable,p as ClickableAndDeletable,a as Color,c as Rounded,i as Variant,l as WithCustomDeleteIcon,$ as __namedExportsOrder,Z as default};
