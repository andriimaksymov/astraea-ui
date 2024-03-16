import{j as r}from"./jsx-runtime-BnIj46N_.js";import{C as o}from"./Tooltip-vWLCKAu7.js";import"./index-CsdIBAqE.js";import"./index-5f0m1pej.js";import"./Radio-B8ygnOKm.js";import{S as i}from"./Stack-D1kKokOu.js";import"./Typography-DI-SgLTX.js";import"./clsx-B-dksMZM.js";import"./extends-CCbyfPlC.js";import"./index-MS7LKRHD.js";const V={title:"Card",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"Cards contain content about a single subject."}}},argTypes:{hasBorder:{type:"boolean",defaultValue:!1},borderColor:{type:"string"},className:{control:{type:"text"}}}},t=e=>r.jsx(o,{...e,children:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."}),a=e=>r.jsxs(i,{spacing:4,justify:"center",children:[r.jsx(o,{...e,elevation:1,children:"Elevation 1"}),r.jsx(o,{...e,elevation:2,children:"Elevation 2"}),r.jsx(o,{...e,elevation:3,children:"Elevation 3"}),r.jsx(o,{...e,elevation:4,children:"Elevation 4"})]}),s=e=>r.jsx(i,{spacing:4,justify:"center",children:r.jsx(o,{...e,elevation:0,hasBorder:!0,children:"Card With Border"})}),n=e=>r.jsx(i,{spacing:4,justify:"center",children:r.jsx(o,{...e,elevation:0,borderColor:"blue",children:"Card With Custom Border Color"})});t.__docgenInfo={description:"Basic card example.",methods:[],displayName:"Basic"};a.__docgenInfo={description:"For diverse levels of card shadows use the <b>elevation</b> prop.",methods:[],displayName:"Elevation"};s.__docgenInfo={description:"For card with border use the <b>hasBorder</b> prop.",methods:[],displayName:"WithBorder"};n.__docgenInfo={description:"Card with custom border color, use the <b>borderColor</b> prop.",methods:[],displayName:"WithCustomBorderColor"};var d,c,l,m,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`(args: typeof Card) => {
  return <Card {...args}>
      There are many variations of passages of Lorem Ipsum available, but the
      majority have suffered alteration in some form, by injected humour, or
      randomised words which do not look even slightly believable. If you are
      going to use a passage of Lorem Ipsum, you need to be sure there is not
      anything embarrassing hidden in the middle of text. All the Lorem Ipsum
      generators on the Internet tend to repeat predefined chunks as necessary,
      making this the first true generator on the Internet. It uses a dictionary
      of over 200 Latin words, combined with a handful of model sentence
      structures, to generate Lorem Ipsum which looks reasonable. The generated
      Lorem Ipsum is therefore always free from repetition, injected humour, or
      non-characteristic words etc.
    </Card>;
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source},description:{story:"Basic card example.",...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.description}}};var h,u,f,g,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`(args: typeof Card) => {
  return <Stack spacing={4} justify="center">
      <Card {...args} elevation={1}>
        Elevation 1
      </Card>
      <Card {...args} elevation={2}>
        Elevation 2
      </Card>
      <Card {...args} elevation={3}>
        Elevation 3
      </Card>
      <Card {...args} elevation={4}>
        Elevation 4
      </Card>
    </Stack>;
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source},description:{story:"For diverse levels of card shadows use the <b>elevation</b> prop.",...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.description}}};var C,y,v,j,I;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`(args: typeof Card) => {
  return <Stack spacing={4} justify="center">
      <Card {...args} elevation={0} hasBorder>
        Card With Border
      </Card>
    </Stack>;
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source},description:{story:"For card with border use the <b>hasBorder</b> prop.",...(I=(j=s.parameters)==null?void 0:j.docs)==null?void 0:I.description}}};var w,B,x,k,E;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`(args: typeof Card) => {
  return <Stack spacing={4} justify="center">
      <Card {...args} elevation={0} borderColor="blue">
        Card With Custom Border Color
      </Card>
    </Stack>;
}`,...(x=(B=n.parameters)==null?void 0:B.docs)==null?void 0:x.source},description:{story:"Card with custom border color, use the <b>borderColor</b> prop.",...(E=(k=n.parameters)==null?void 0:k.docs)==null?void 0:E.description}}};const q=["Basic","Elevation","WithBorder","WithCustomBorderColor"];export{t as Basic,a as Elevation,s as WithBorder,n as WithCustomBorderColor,q as __namedExportsOrder,V as default};
