import{j as n}from"./clsx-BKsCbDk3.js";import{B as e,S as r}from"./Stack-ClTUsl4F.js";import"./index-CsdIBAqE.js";const a=({...t})=>n.jsx("svg",{...t,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z"})}),q={title:"Button",component:e,argTypes:{size:{control:"select",options:["small","medium","large"]},variant:{control:"select",options:["text","outlined","contained"]},color:{control:"select",options:["inherit","primary","secondary"]},fullWidth:{control:"boolean",defaultValue:!1},disabled:{control:"boolean"}},parameters:{}},i=t=>n.jsxs(r,{spacing:3,justify:"center",children:[n.jsx(e,{variant:"text",...t,children:"Text"}),n.jsx(e,{variant:"contained",...t,children:"Contained"}),n.jsx(e,{variant:"outlined",...t,children:"Outlined"})]}),o=t=>n.jsxs(r,{spacing:3,align:"center",justify:"center",children:[n.jsx(e,{variant:"text",...t,children:"Basic"}),n.jsx(e,{variant:"text",disabled:!0,...t,children:"Disabled"})]}),s=t=>n.jsxs(r,{spacing:3,align:"center",justify:"center",children:[n.jsx(e,{variant:"contained",...t,children:"Basic"}),n.jsx(e,{variant:"contained",disabled:!0,...t,children:"Disabled"})]}),c=t=>n.jsxs(r,{spacing:3,align:"center",justify:"center",children:[n.jsx(e,{variant:"outlined",...t,children:"Basic"}),n.jsx(e,{variant:"outlined",disabled:!0,...t,children:"Disabled"})]}),d=t=>n.jsxs(r,{spacing:3,direction:"column",justify:"center",children:[n.jsxs(r,{spacing:3,align:"center",justify:"center",children:[n.jsx(e,{variant:"text",size:"small",...t,children:"Small"}),n.jsx(e,{variant:"text",size:"medium",...t,children:"Medium"}),n.jsx(e,{variant:"text",size:"large",...t,children:"Large"})]}),n.jsxs(r,{spacing:3,align:"center",justify:"center",children:[n.jsx(e,{variant:"contained",size:"small",...t,children:"Small"}),n.jsx(e,{variant:"contained",size:"medium",...t,children:"Medium"}),n.jsx(e,{variant:"contained",size:"large",...t,children:"Large"})]}),n.jsxs(r,{spacing:3,align:"center",justify:"center",children:[n.jsx(e,{variant:"outlined",size:"small",...t,children:"Small"}),n.jsx(e,{variant:"outlined",size:"medium",...t,children:"Medium"}),n.jsx(e,{variant:"outlined",size:"large",...t,children:"Large"})]})]}),l=t=>n.jsxs(r,{spacing:3,justify:"center",children:[n.jsx(e,{variant:"contained",color:"inherit",...t,children:"Default"}),n.jsx(e,{variant:"contained",color:"primary",...t,children:"Primary"}),n.jsx(e,{variant:"contained",color:"secondary",...t,children:"Secondary"})]}),u=t=>n.jsxs(r,{spacing:3,justify:"center",children:[n.jsx(e,{startIcon:a,variant:"text",color:"primary",...t,children:"Text"}),n.jsx(e,{startIcon:a,variant:"contained",color:"primary",...t,children:"Contained"}),n.jsx(e,{startIcon:a,variant:"outlined",color:"primary",...t,children:"Outlined"})]}),m=t=>n.jsxs(r,{spacing:3,justify:"center",children:[n.jsx(e,{endIcon:a,variant:"text",color:"primary",...t,children:"Text"}),n.jsx(e,{endIcon:a,variant:"contained",color:"primary",...t,children:"Contained"}),n.jsx(e,{endIcon:a,variant:"outlined",color:"primary",...t,children:"Outlined"})]}),p=t=>n.jsxs(r,{spacing:2,justify:"center",direction:"column",children:[n.jsx(e,{fullWidth:!0,variant:"text",color:"primary",...t,children:"Text"}),n.jsx(e,{fullWidth:!0,variant:"contained",color:"primary",...t,children:"Contained"}),n.jsx(e,{fullWidth:!0,variant:"outlined",color:"primary",...t,children:"Outlined"})]});i.__docgenInfo={description:"",methods:[],displayName:"Basic"};o.__docgenInfo={description:"",methods:[],displayName:"Text"};s.__docgenInfo={description:"",methods:[],displayName:"Contained"};c.__docgenInfo={description:"",methods:[],displayName:"Outlined"};d.__docgenInfo={description:"",methods:[],displayName:"Size"};l.__docgenInfo={description:"",methods:[],displayName:"Color"};u.__docgenInfo={description:"",methods:[],displayName:"IconStart"};m.__docgenInfo={description:"",methods:[],displayName:"IconEnd"};p.__docgenInfo={description:"",methods:[],displayName:"FullWidth"};var g,B,x;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`(args: typeof Button) => {
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
}`,...(x=(B=i.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var y,j,h;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`(args: typeof Button) => {
  return <Stack spacing={3} align="center" justify="center">
      <Button variant="text" {...args}>
        Basic
      </Button>
      <Button variant="text" disabled {...args}>
        Disabled
      </Button>
    </Stack>;
}`,...(h=(j=o.parameters)==null?void 0:j.docs)==null?void 0:h.source}}};var v,f,S;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`(args: typeof Button) => {
  return <Stack spacing={3} align="center" justify="center">
      <Button variant="contained" {...args}>
        Basic
      </Button>
      <Button variant="contained" disabled {...args}>
        Disabled
      </Button>
    </Stack>;
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var I,k,z;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`(args: typeof Button) => {
  return <Stack spacing={3} align="center" justify="center">
      <Button variant="outlined" {...args}>
        Basic
      </Button>
      <Button variant="outlined" disabled {...args}>
        Disabled
      </Button>
    </Stack>;
}`,...(z=(k=c.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var C,_,b;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`(args: typeof Button) => {
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
}`,...(b=(_=d.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var O,T,W;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`(args: typeof Button) => {
  return <Stack spacing={3} justify="center">
      <Button variant="contained" color="inherit" {...args}>
        Default
      </Button>
      <Button variant="contained" color="primary" {...args}>
        Primary
      </Button>
      <Button variant="contained" color="secondary" {...args}>
        Secondary
      </Button>
    </Stack>;
}`,...(W=(T=l.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var N,P,D;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`(args: typeof Button) => {
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
}`,...(D=(P=u.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var M,L,w;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`(args: typeof Button) => {
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
}`,...(w=(L=m.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var E,V,H;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`(args: typeof Button) => {
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
}`,...(H=(V=p.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};const A=["Basic","Text","Contained","Outlined","Size","Color","IconStart","IconEnd","FullWidth"];export{i as Basic,l as Color,s as Contained,p as FullWidth,m as IconEnd,u as IconStart,c as Outlined,d as Size,o as Text,A as __namedExportsOrder,q as default};
