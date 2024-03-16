import{j as t}from"./jsx-runtime-BnIj46N_.js";import{P as i}from"./PlusIcon-B-nK3-sl.js";import{B as e}from"./Tooltip-vWLCKAu7.js";import"./index-CsdIBAqE.js";import"./index-5f0m1pej.js";import"./Radio-B8ygnOKm.js";import{S as r}from"./Stack-D1kKokOu.js";import"./Typography-DI-SgLTX.js";import"./clsx-B-dksMZM.js";import"./extends-CCbyfPlC.js";import"./index-MS7LKRHD.js";const et={title:"Button",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Buttons allow users to take actions, and make choices, with a single tap."}}},argTypes:{size:{control:"select",options:["small","medium","large"]},variant:{control:"select",options:["text","outlined","contained"]},color:{control:"select",options:["inherit","primary","secondary"]},fullWidth:{control:"boolean",defaultValue:!1},disabled:{control:"boolean"}}},a=n=>t.jsxs(r,{spacing:3,justify:"center",children:[t.jsx(e,{variant:"text",...n,children:"Text"}),t.jsx(e,{variant:"contained",...n,children:"Contained"}),t.jsx(e,{variant:"outlined",...n,children:"Outlined"})]}),s=n=>t.jsxs(r,{spacing:3,align:"center",justify:"center",children:[t.jsx(e,{variant:"text",...n,children:"Basic"}),t.jsx(e,{variant:"text",disabled:!0,...n,children:"Disabled"})]}),c=n=>t.jsxs(r,{spacing:3,align:"center",justify:"center",children:[t.jsx(e,{variant:"contained",...n,children:"Basic"}),t.jsx(e,{variant:"contained",disabled:!0,...n,children:"Disabled"})]}),d=n=>t.jsxs(r,{spacing:3,align:"center",justify:"center",children:[t.jsx(e,{variant:"outlined",...n,children:"Basic"}),t.jsx(e,{variant:"outlined",disabled:!0,...n,children:"Disabled"})]}),o=n=>t.jsxs(r,{spacing:3,direction:"column",justify:"center",children:[t.jsxs(r,{spacing:3,align:"center",justify:"center",children:[t.jsx(e,{variant:"text",size:"small",...n,children:"Small"}),t.jsx(e,{variant:"text",size:"medium",...n,children:"Medium"}),t.jsx(e,{variant:"text",size:"large",...n,children:"Large"})]}),t.jsxs(r,{spacing:3,align:"center",justify:"center",children:[t.jsx(e,{variant:"contained",size:"small",...n,children:"Small"}),t.jsx(e,{variant:"contained",size:"medium",...n,children:"Medium"}),t.jsx(e,{variant:"contained",size:"large",...n,children:"Large"})]}),t.jsxs(r,{spacing:3,align:"center",justify:"center",children:[t.jsx(e,{variant:"outlined",size:"small",...n,children:"Small"}),t.jsx(e,{variant:"outlined",size:"medium",...n,children:"Medium"}),t.jsx(e,{variant:"outlined",size:"large",...n,children:"Large"})]})]}),u=n=>t.jsxs(r,{spacing:3,justify:"center",children:[t.jsx(e,{variant:"text",color:"primary",...n,children:"Primary"}),t.jsx(e,{variant:"contained",color:"secondary",...n,children:"Secondary"}),t.jsx(e,{variant:"outlined",color:"inherit",...n,children:"Inherit"})]}),l=n=>t.jsxs(r,{spacing:3,justify:"center",children:[t.jsx(e,{startIcon:i,variant:"text",color:"primary",...n,children:"Text"}),t.jsx(e,{startIcon:i,variant:"contained",color:"primary",...n,children:"Contained"}),t.jsx(e,{startIcon:i,variant:"outlined",color:"primary",...n,children:"Outlined"})]}),m=n=>t.jsxs(r,{spacing:3,justify:"center",children:[t.jsx(e,{endIcon:i,variant:"text",color:"primary",...n,children:"Text"}),t.jsx(e,{endIcon:i,variant:"contained",color:"primary",...n,children:"Contained"}),t.jsx(e,{endIcon:i,variant:"outlined",color:"primary",...n,children:"Outlined"})]}),p=n=>t.jsxs(r,{spacing:2,justify:"center",direction:"column",children:[t.jsx(e,{fullWidth:!0,variant:"text",color:"primary",...n,children:"Text"}),t.jsx(e,{fullWidth:!0,variant:"contained",color:"primary",...n,children:"Contained"}),t.jsx(e,{fullWidth:!0,variant:"outlined",color:"primary",...n,children:"Outlined"})]});a.__docgenInfo={description:"The Button comes with three variants: text, contained (default), and outlined.",methods:[],displayName:"BasicButton"};s.__docgenInfo={description:"",methods:[],displayName:"TextButton"};c.__docgenInfo={description:"",methods:[],displayName:"ContainedButton"};d.__docgenInfo={description:"",methods:[],displayName:"OutlinedButton"};o.__docgenInfo={description:"For larger or smaller buttons, use the size prop.",methods:[],displayName:"Size"};u.__docgenInfo={description:"",methods:[],displayName:"Color"};l.__docgenInfo={description:"",methods:[],displayName:"IconStart"};m.__docgenInfo={description:"",methods:[],displayName:"IconEnd"};p.__docgenInfo={description:"",methods:[],displayName:"FullWidth"};var B,g,x,h,y;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`(args: typeof Button) => {
  return <Stack spacing={3} justify="center">
      <Button variant="text" {...args}>
        Text
      </Button>
      <Button variant="contained" {...args}>
        Contained
      </Button>
      <Button variant="outlined" {...args}>
        Outlined
      </Button>
    </Stack>;
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source},description:{story:"The Button comes with three variants: text, contained (default), and outlined.",...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.description}}};var j,v,f;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`(args: typeof Button) => {
  return <Stack spacing={3} align="center" justify="center">
      <Button variant="text" {...args}>
        Basic
      </Button>
      <Button variant="text" disabled {...args}>
        Disabled
      </Button>
    </Stack>;
}`,...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var S,I,k;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`(args: typeof Button) => {
  return <Stack spacing={3} align="center" justify="center">
      <Button variant="contained" {...args}>
        Basic
      </Button>
      <Button variant="contained" disabled {...args}>
        Disabled
      </Button>
    </Stack>;
}`,...(k=(I=c.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var z,_,b;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`(args: typeof Button) => {
  return <Stack spacing={3} align="center" justify="center">
      <Button variant="outlined" {...args}>
        Basic
      </Button>
      <Button variant="outlined" disabled {...args}>
        Disabled
      </Button>
    </Stack>;
}`,...(b=(_=d.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var C,T,O,P,W;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`(args: typeof Button) => {
  return <Stack spacing={3} direction="column" justify="center">
      <Stack spacing={3} align="center" justify="center">
        <Button variant="text" size="small" {...args}>
          Small
        </Button>
        <Button variant="text" size="medium" {...args}>
          Medium
        </Button>
        <Button variant="text" size="large" {...args}>
          Large
        </Button>
      </Stack>
      <Stack spacing={3} align="center" justify="center">
        <Button variant="contained" size="small" {...args}>
          Small
        </Button>
        <Button variant="contained" size="medium" {...args}>
          Medium
        </Button>
        <Button variant="contained" size="large" {...args}>
          Large
        </Button>
      </Stack>
      <Stack spacing={3} align="center" justify="center">
        <Button variant="outlined" size="small" {...args}>
          Small
        </Button>
        <Button variant="outlined" size="medium" {...args}>
          Medium
        </Button>
        <Button variant="outlined" size="large" {...args}>
          Large
        </Button>
      </Stack>
    </Stack>;
}`,...(O=(T=o.parameters)==null?void 0:T.docs)==null?void 0:O.source},description:{story:"For larger or smaller buttons, use the size prop.",...(W=(P=o.parameters)==null?void 0:P.docs)==null?void 0:W.description}}};var N,D,L;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`(args: typeof Button) => {
  return <Stack spacing={3} justify="center">
      <Button variant="text" color="primary" {...args}>
        Primary
      </Button>
      <Button variant="contained" color="secondary" {...args}>
        Secondary
      </Button>
      <Button variant="outlined" color="inherit" {...args}>
        Inherit
      </Button>
    </Stack>;
}`,...(L=(D=u.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var M,E,F;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`(args: typeof Button) => {
  return <Stack spacing={3} justify="center">
      <Button startIcon={PlusIcon} variant="text" color="primary" {...args}>
        Text
      </Button>
      <Button startIcon={PlusIcon} variant="contained" color="primary" {...args}>
        Contained
      </Button>
      <Button startIcon={PlusIcon} variant="outlined" color="primary" {...args}>
        Outlined
      </Button>
    </Stack>;
}`,...(F=(E=l.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var w,R,V;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`(args: typeof Button) => {
  return <Stack spacing={3} justify="center">
      <Button endIcon={PlusIcon} variant="text" color="primary" {...args}>
        Text
      </Button>
      <Button endIcon={PlusIcon} variant="contained" color="primary" {...args}>
        Contained
      </Button>
      <Button endIcon={PlusIcon} variant="outlined" color="primary" {...args}>
        Outlined
      </Button>
    </Stack>;
}`,...(V=(R=m.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var q,A,G;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`(args: typeof Button) => {
  return <Stack spacing={2} justify="center" direction="column">
      <Button fullWidth variant="text" color="primary" {...args}>
        Text
      </Button>
      <Button fullWidth variant="contained" color="primary" {...args}>
        Contained
      </Button>
      <Button fullWidth variant="outlined" color="primary" {...args}>
        Outlined
      </Button>
    </Stack>;
}`,...(G=(A=p.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};const rt=["BasicButton","TextButton","ContainedButton","OutlinedButton","Size","Color","IconStart","IconEnd","FullWidth"];export{a as BasicButton,u as Color,c as ContainedButton,p as FullWidth,m as IconEnd,l as IconStart,d as OutlinedButton,o as Size,s as TextButton,rt as __namedExportsOrder,et as default};
