import{j as e}from"./jsx-runtime-BnIj46N_.js";import{r as v}from"./index-CsdIBAqE.js";import{g as n,S as o,f as K}from"./Tooltip-vWLCKAu7.js";import"./index-5f0m1pej.js";import{R as u}from"./Radio-B8ygnOKm.js";import{S as r}from"./Stack-D1kKokOu.js";import{T as x}from"./Typography-DI-SgLTX.js";import"./clsx-B-dksMZM.js";import"./extends-CCbyfPlC.js";import"./index-MS7LKRHD.js";function t({...a}){return e.jsx("svg",{...a,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"})})}t.__docgenInfo={description:"",methods:[],displayName:"MailIcon"};const re={title:"Badge",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"Badge generates a small badge to the top-right of its child element."}}},argTypes:{anchorOrigin:{options:["Top Right","Top Left","Bottom Right","Bottom Left"],mapping:{"Top Right":{vertical:"top",horizontal:"right"},"Top Left":{vertical:"top",horizontal:"left"},"Bottom Right":{vertical:"bottom",horizontal:"right"},"Bottom Left":{vertical:"bottom",horizontal:"left"}}},badgeContent:{control:"text"},className:{control:"text"},color:{options:["default","primary","secondary","error","info","success","warning"]},invisible:{control:"boolean"},variant:{control:{type:"radio"},options:["dot","standard"]}}},s=a=>e.jsx(r,{justify:"center",spacing:2,style:{padding:"1rem"},children:e.jsx(n,{badgeContent:5,...a,children:e.jsx(o,{color:"primary",icon:t})})}),c=a=>e.jsx(r,{justify:"center",spacing:2,style:{padding:"1rem"},children:e.jsx(n,{badgeContent:5,...a,children:e.jsx(o,{color:"primary",icon:t})})}),d=a=>e.jsxs(r,{justify:"center",spacing:4,children:[e.jsx(n,{badgeContent:5,color:"default",...a,children:e.jsx(o,{color:"muted",icon:t})}),e.jsx(n,{badgeContent:5,color:"primary",...a,children:e.jsx(o,{color:"muted",icon:t})}),e.jsx(n,{badgeContent:5,color:"secondary",...a,children:e.jsx(o,{color:"muted",icon:t})}),e.jsx(n,{badgeContent:5,color:"info",...a,children:e.jsx(o,{color:"muted",icon:t})}),e.jsx(n,{badgeContent:5,color:"success",...a,children:e.jsx(o,{color:"muted",icon:t})}),e.jsx(n,{badgeContent:5,color:"warning",...a,children:e.jsx(o,{color:"muted",icon:t})}),e.jsx(n,{badgeContent:5,color:"error",...a,children:e.jsx(o,{color:"muted",icon:t})})]}),p=a=>{const[i,g]=v.useState(a.invisible||!0);return e.jsx(r,{direction:"column",spacing:2,children:e.jsxs(r,{direction:"column",align:"center",spacing:4,children:[e.jsx(K,{checked:i,onChange:l=>g(l.target.checked),label:"Show Badge",labelPlacement:"end"}),e.jsxs(r,{justify:"center",spacing:4,children:[e.jsx(n,{invisible:!i,variant:"dot",color:"primary",...a,children:e.jsx(o,{color:"muted",icon:t})}),e.jsx(n,{badgeContent:5,invisible:!i,color:"primary",...a,children:e.jsx(o,{color:"muted",icon:t})})]})]})})},m=a=>{var y,T;const[i,g]=v.useState(((y=a.anchorOrigin)==null?void 0:y.vertical)||"top"),[l,J]=v.useState(((T=a.anchorOrigin)==null?void 0:T.horizontal)||"right"),f=h=>{g(h.target.value)},b=h=>{J(h.target.value)};return e.jsxs(r,{direction:"column",spacing:3,align:"center",children:[e.jsxs(r,{spacing:4,children:[e.jsxs(r,{direction:"column",spacing:2,children:[e.jsx(x,{component:"p",children:"Vertical"}),e.jsx(u,{label:"Top",name:"vertical-1",value:"top",checked:i==="top",onChange:f}),e.jsx(u,{label:"Bottom",name:"vertical-1",value:"bottom",checked:i==="bottom",onChange:f})]}),e.jsxs(r,{direction:"column",spacing:2,children:[e.jsx(x,{component:"p",children:"Horizontal"}),e.jsx(u,{label:"Right",name:"horizontal",value:"right",checked:l==="right",onChange:b}),e.jsx(u,{label:"Left",name:"horizontal",value:"left",checked:l==="left",onChange:b})]})]}),e.jsxs(r,{spacing:4,children:[e.jsx(n,{variant:"dot",color:"primary",anchorOrigin:{vertical:i,horizontal:l},...a,children:e.jsx(o,{color:"muted",icon:t})}),e.jsx(n,{color:"primary",anchorOrigin:{vertical:i,horizontal:l},badgeContent:5,...a,children:e.jsx(o,{color:"muted",icon:t})}),e.jsx(n,{color:"primary",anchorOrigin:{vertical:i,horizontal:l},badgeContent:999,...a,children:e.jsx(o,{color:"muted",icon:t})})]})]})};s.__docgenInfo={description:"Examples of badges containing text. The badge is applied to its children.",methods:[],displayName:"BasicBadge",props:{anchorOrigin:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  vertical: "top" | "bottom";
  horizontal: "left" | "right";
}`,signature:{properties:[{key:"vertical",value:{name:"union",raw:'"top" | "bottom"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}],required:!0}},{key:"horizontal",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!0}}]}},description:`The anchor of the badge.
@default {
  vertical: 'top',
  horizontal: 'right',
}`},badgeContent:{required:!1,tsType:{name:"ReactNode"},description:"The content to be displayed within the badge."},className:{required:!1,tsType:{name:"string"},description:"Override or extend the styles applied to the component."},children:{required:!1,tsType:{name:"ReactNode"},description:"The badge will be added relative to this node."},color:{required:!1,tsType:{name:"union",raw:`| "default"
| "primary"
| "secondary"
| "error"
| "info"
| "success"
| "warning"`,elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'}]},description:`The color of component.
@default 'default'`},invisible:{required:!1,tsType:{name:"boolean"},description:`The state of badge visibility.
If 'true' the badge is invisible.
@default false`},variant:{required:!1,tsType:{name:"union",raw:'"dot" | "standard"',elements:[{name:"literal",value:'"dot"'},{name:"literal",value:'"standard"'}]},description:`The variant to use.
@default 'standard'`}}};c.__docgenInfo={description:"The dot prop changes a badge into a small dot. This can be used as a notification that something has changed without giving a count.",methods:[],displayName:"DotBadge",props:{anchorOrigin:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  vertical: "top" | "bottom";
  horizontal: "left" | "right";
}`,signature:{properties:[{key:"vertical",value:{name:"union",raw:'"top" | "bottom"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}],required:!0}},{key:"horizontal",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!0}}]}},description:`The anchor of the badge.
@default {
  vertical: 'top',
  horizontal: 'right',
}`},badgeContent:{required:!1,tsType:{name:"ReactNode"},description:"The content to be displayed within the badge."},className:{required:!1,tsType:{name:"string"},description:"Override or extend the styles applied to the component."},children:{required:!1,tsType:{name:"ReactNode"},description:"The badge will be added relative to this node."},color:{required:!1,tsType:{name:"union",raw:`| "default"
| "primary"
| "secondary"
| "error"
| "info"
| "success"
| "warning"`,elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'}]},description:`The color of component.
@default 'default'`},invisible:{required:!1,tsType:{name:"boolean"},description:`The state of badge visibility.
If 'true' the badge is invisible.
@default false`},variant:{required:!1,tsType:{name:"union",raw:'"dot" | "standard"',elements:[{name:"literal",value:'"dot"'},{name:"literal",value:'"standard"'}]},description:`The variant to use.
@default 'standard'`}}};d.__docgenInfo={description:"Use color prop to apply theme palette to component.",methods:[],displayName:"Color",props:{anchorOrigin:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  vertical: "top" | "bottom";
  horizontal: "left" | "right";
}`,signature:{properties:[{key:"vertical",value:{name:"union",raw:'"top" | "bottom"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}],required:!0}},{key:"horizontal",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!0}}]}},description:`The anchor of the badge.
@default {
  vertical: 'top',
  horizontal: 'right',
}`},badgeContent:{required:!1,tsType:{name:"ReactNode"},description:"The content to be displayed within the badge."},className:{required:!1,tsType:{name:"string"},description:"Override or extend the styles applied to the component."},children:{required:!1,tsType:{name:"ReactNode"},description:"The badge will be added relative to this node."},color:{required:!1,tsType:{name:"union",raw:`| "default"
| "primary"
| "secondary"
| "error"
| "info"
| "success"
| "warning"`,elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'}]},description:`The color of component.
@default 'default'`},invisible:{required:!1,tsType:{name:"boolean"},description:`The state of badge visibility.
If 'true' the badge is invisible.
@default false`},variant:{required:!1,tsType:{name:"union",raw:'"dot" | "standard"',elements:[{name:"literal",value:'"dot"'},{name:"literal",value:'"standard"'}]},description:`The variant to use.
@default 'standard'`}}};p.__docgenInfo={description:"The visibility of badges can be controlled using the invisible prop.",methods:[],displayName:"Visibility",props:{anchorOrigin:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  vertical: "top" | "bottom";
  horizontal: "left" | "right";
}`,signature:{properties:[{key:"vertical",value:{name:"union",raw:'"top" | "bottom"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}],required:!0}},{key:"horizontal",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!0}}]}},description:`The anchor of the badge.
@default {
  vertical: 'top',
  horizontal: 'right',
}`},badgeContent:{required:!1,tsType:{name:"ReactNode"},description:"The content to be displayed within the badge."},className:{required:!1,tsType:{name:"string"},description:"Override or extend the styles applied to the component."},children:{required:!1,tsType:{name:"ReactNode"},description:"The badge will be added relative to this node."},color:{required:!1,tsType:{name:"union",raw:`| "default"
| "primary"
| "secondary"
| "error"
| "info"
| "success"
| "warning"`,elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'}]},description:`The color of component.
@default 'default'`},invisible:{required:!1,tsType:{name:"boolean"},description:`The state of badge visibility.
If 'true' the badge is invisible.
@default false`},variant:{required:!1,tsType:{name:"union",raw:'"dot" | "standard"',elements:[{name:"literal",value:'"dot"'},{name:"literal",value:'"standard"'}]},description:`The variant to use.
@default 'standard'`}}};m.__docgenInfo={description:"You can use the anchorOrigin prop to move the badge to any corner of the wrapped element.",methods:[],displayName:"Alignment",props:{anchorOrigin:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  vertical: "top" | "bottom";
  horizontal: "left" | "right";
}`,signature:{properties:[{key:"vertical",value:{name:"union",raw:'"top" | "bottom"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}],required:!0}},{key:"horizontal",value:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}],required:!0}}]}},description:`The anchor of the badge.
@default {
  vertical: 'top',
  horizontal: 'right',
}`},badgeContent:{required:!1,tsType:{name:"ReactNode"},description:"The content to be displayed within the badge."},className:{required:!1,tsType:{name:"string"},description:"Override or extend the styles applied to the component."},children:{required:!1,tsType:{name:"ReactNode"},description:"The badge will be added relative to this node."},color:{required:!1,tsType:{name:"union",raw:`| "default"
| "primary"
| "secondary"
| "error"
| "info"
| "success"
| "warning"`,elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'}]},description:`The color of component.
@default 'default'`},invisible:{required:!1,tsType:{name:"boolean"},description:`The state of badge visibility.
If 'true' the badge is invisible.
@default false`},variant:{required:!1,tsType:{name:"union",raw:'"dot" | "standard"',elements:[{name:"literal",value:'"dot"'},{name:"literal",value:'"standard"'}]},description:`The variant to use.
@default 'standard'`}}};var j,w,B,S,C;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`(args: BadgeProps) => <Stack justify="center" spacing={2} style={{
  padding: "1rem"
}}>
    <Badge badgeContent={5} {...args}>
      <SvgIcon color="primary" icon={MailIcon} />
    </Badge>
  </Stack>`,...(B=(w=s.parameters)==null?void 0:w.docs)==null?void 0:B.source},description:{story:"Examples of badges containing text. The badge is applied to its children.",...(C=(S=s.parameters)==null?void 0:S.docs)==null?void 0:C.description}}};var I,k,q,z,O;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`(args: BadgeProps) => <Stack justify="center" spacing={2} style={{
  padding: "1rem"
}}>
    <Badge badgeContent={5} {...args}>
      <SvgIcon color="primary" icon={MailIcon} />
    </Badge>
  </Stack>`,...(q=(k=c.parameters)==null?void 0:k.docs)==null?void 0:q.source},description:{story:"The dot prop changes a badge into a small dot. This can be used as a notification that something has changed without giving a count.",...(O=(z=c.parameters)==null?void 0:z.docs)==null?void 0:O.description}}};var R,N,V,M,_;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`(args: BadgeProps) => <Stack justify="center" spacing={4}>
    <Badge badgeContent={5} color="default" {...args}>
      <SvgIcon color="muted" icon={MailIcon} />
    </Badge>
    <Badge badgeContent={5} color="primary" {...args}>
      <SvgIcon color="muted" icon={MailIcon} />
    </Badge>
    <Badge badgeContent={5} color="secondary" {...args}>
      <SvgIcon color="muted" icon={MailIcon} />
    </Badge>
    <Badge badgeContent={5} color="info" {...args}>
      <SvgIcon color="muted" icon={MailIcon} />
    </Badge>
    <Badge badgeContent={5} color="success" {...args}>
      <SvgIcon color="muted" icon={MailIcon} />
    </Badge>
    <Badge badgeContent={5} color="warning" {...args}>
      <SvgIcon color="muted" icon={MailIcon} />
    </Badge>
    <Badge badgeContent={5} color="error" {...args}>
      <SvgIcon color="muted" icon={MailIcon} />
    </Badge>
  </Stack>`,...(V=(N=d.parameters)==null?void 0:N.docs)==null?void 0:V.source},description:{story:"Use color prop to apply theme palette to component.",...(_=(M=d.parameters)==null?void 0:M.docs)==null?void 0:_.description}}};var H,E,L,P,A;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`(args: BadgeProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(args.invisible || true);
  return <Stack direction="column" spacing={2}>
      <Stack direction="column" align="center" spacing={4}>
        <Switch checked={isVisible} onChange={e => setIsVisible(e.target.checked)} label="Show Badge" labelPlacement="end" />
        <Stack justify="center" spacing={4}>
          <Badge invisible={!isVisible} variant="dot" color="primary" {...args}>
            <SvgIcon color="muted" icon={MailIcon} />
          </Badge>
          <Badge badgeContent={5} invisible={!isVisible} color="primary" {...args}>
            <SvgIcon color="muted" icon={MailIcon} />
          </Badge>
        </Stack>
      </Stack>
    </Stack>;
}`,...(L=(E=p.parameters)==null?void 0:E.docs)==null?void 0:L.source},description:{story:"The visibility of badges can be controlled using the invisible prop.",...(A=(P=p.parameters)==null?void 0:P.docs)==null?void 0:A.description}}};var D,U,Y,F,G;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`(args: BadgeProps) => {
  const [vertical, setVertical] = useState<BadgeOrigin["vertical"]>(args.anchorOrigin?.vertical || "top");
  const [horizontal, setHorizontal] = useState<BadgeOrigin["horizontal"]>(args.anchorOrigin?.horizontal || "right");
  const handleChangeVertical = (e: ChangeEvent<HTMLInputElement>) => {
    setVertical((e.target.value as typeof vertical));
  };
  const handleChangeHorizontal = (e: ChangeEvent<HTMLInputElement>) => {
    setHorizontal((e.target.value as typeof horizontal));
  };
  return <Stack direction="column" spacing={3} align="center">
      <Stack spacing={4}>
        <Stack direction="column" spacing={2}>
          <Typography component="p">Vertical</Typography>
          <Radio label="Top" name="vertical-1" value="top" checked={vertical === "top"} onChange={handleChangeVertical} />
          <Radio label="Bottom" name="vertical-1" value="bottom" checked={vertical === "bottom"} onChange={handleChangeVertical} />
        </Stack>
        <Stack direction="column" spacing={2}>
          <Typography component="p">Horizontal</Typography>
          <Radio label="Right" name="horizontal" value="right" checked={horizontal === "right"} onChange={handleChangeHorizontal} />
          <Radio label="Left" name="horizontal" value="left" checked={horizontal === "left"} onChange={handleChangeHorizontal} />
        </Stack>
      </Stack>
      <Stack spacing={4}>
        <Badge variant="dot" color="primary" anchorOrigin={{
        vertical,
        horizontal
      }} {...args}>
          <SvgIcon color="muted" icon={MailIcon} />
        </Badge>
        <Badge color="primary" anchorOrigin={{
        vertical,
        horizontal
      }} badgeContent={5} {...args}>
          <SvgIcon color="muted" icon={MailIcon} />
        </Badge>
        <Badge color="primary" anchorOrigin={{
        vertical,
        horizontal
      }} badgeContent={999} {...args}>
          <SvgIcon color="muted" icon={MailIcon} />
        </Badge>
      </Stack>
    </Stack>;
}`,...(Y=(U=m.parameters)==null?void 0:U.docs)==null?void 0:Y.source},description:{story:"You can use the anchorOrigin prop to move the badge to any corner of the wrapped element.",...(G=(F=m.parameters)==null?void 0:F.docs)==null?void 0:G.description}}};const ie=["BasicBadge","DotBadge","Color","Visibility","Alignment"];export{m as Alignment,s as BasicBadge,d as Color,c as DotBadge,p as Visibility,ie as __namedExportsOrder,re as default};
