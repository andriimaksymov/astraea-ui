import{j as e}from"./clsx-BKsCbDk3.js";import{r as h}from"./index-CsdIBAqE.js";import{B as a,S as o,a as M,T,R as m}from"./Typography-CcctG2ic.js";import{S as r}from"./Stack-ClTUsl4F.js";import"./Card-DO5sIWGE.js";import"./index-5f0m1pej.js";function t({...n}){return e.jsx("svg",{...n,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"})})}t.__docgenInfo={description:"",methods:[],displayName:"MailIcon"};const A={title:"Badge",component:a,argTypes:{badgeContent:{control:"text"},className:{control:"text"},invisible:{control:"boolean"},anchorOrigin:{control:{type:"select",options:{"Top Right":{vertical:"top",horizontal:"right"},"Top Left":{vertical:"top",horizontal:"left"},"Bottom Right":{vertical:"bottom",horizontal:"right"},"Bottom Left":{vertical:"bottom",horizontal:"left"}}}},variant:{control:{type:"radio"},options:["dot","standard"]}}},c=n=>e.jsx(r,{justify:"center",spacing:2,style:{padding:"1rem"},children:e.jsx(a,{badgeContent:5,...n,children:e.jsx(o,{color:"muted",icon:t})})}),s=n=>e.jsxs(r,{justify:"center",spacing:4,children:[e.jsx(a,{badgeContent:5,color:"default",...n,children:e.jsx(o,{color:"muted",icon:t})}),e.jsx(a,{badgeContent:5,color:"primary",...n,children:e.jsx(o,{color:"muted",icon:t})}),e.jsx(a,{badgeContent:5,color:"secondary",...n,children:e.jsx(o,{color:"muted",icon:t})}),e.jsx(a,{badgeContent:5,color:"info",...n,children:e.jsx(o,{color:"muted",icon:t})}),e.jsx(a,{badgeContent:5,color:"success",...n,children:e.jsx(o,{color:"muted",icon:t})}),e.jsx(a,{badgeContent:5,color:"warning",...n,children:e.jsx(o,{color:"muted",icon:t})}),e.jsx(a,{badgeContent:5,color:"error",...n,children:e.jsx(o,{color:"muted",icon:t})})]}),d=n=>{const[i,p]=h.useState(n.invisible||!0);return e.jsx(r,{direction:"column",spacing:2,children:e.jsxs(r,{direction:"column",align:"center",spacing:4,children:[e.jsx(M,{checked:i,onChange:l=>p(l.target.checked),label:"Show Badge",labelPlacement:"end"}),e.jsxs(r,{justify:"center",spacing:4,children:[e.jsx(a,{invisible:!i,variant:"dot",color:"primary",...n,children:e.jsx(o,{color:"muted",icon:t})}),e.jsx(a,{badgeContent:5,invisible:!i,color:"primary",...n,children:e.jsx(o,{color:"muted",icon:t})})]})]})})},g=n=>{var b,y;const[i,p]=h.useState(((b=n.anchorOrigin)==null?void 0:b.vertical)||"top"),[l,R]=h.useState(((y=n.anchorOrigin)==null?void 0:y.horizontal)||"right"),v=u=>{p(u.target.value)},f=u=>{R(u.target.value)};return e.jsxs(r,{direction:"column",spacing:3,align:"center",children:[e.jsxs(r,{spacing:4,children:[e.jsxs(r,{direction:"column",spacing:2,children:[e.jsx(T,{component:"p",children:"Vertical"}),e.jsx(m,{label:"Top",name:"vertical-1",value:"top",checked:i==="top",onChange:v}),e.jsx(m,{label:"Bottom",name:"vertical-1",value:"bottom",checked:i==="bottom",onChange:v})]}),e.jsxs(r,{direction:"column",spacing:2,children:[e.jsx(T,{component:"p",children:"Horizontal"}),e.jsx(m,{label:"Right",name:"horizontal",value:"right",checked:l==="right",onChange:f}),e.jsx(m,{label:"Left",name:"horizontal",value:"left",checked:l==="left",onChange:f})]})]}),e.jsxs(r,{spacing:4,children:[e.jsx(a,{variant:"dot",color:"primary",anchorOrigin:{vertical:i,horizontal:l},...n,children:e.jsx(o,{color:"muted",icon:t})}),e.jsx(a,{color:"primary",anchorOrigin:{vertical:i,horizontal:l},badgeContent:5,...n,children:e.jsx(o,{color:"muted",icon:t})}),e.jsx(a,{color:"primary",anchorOrigin:{vertical:i,horizontal:l},badgeContent:999,...n,children:e.jsx(o,{color:"muted",icon:t})})]})]})};c.__docgenInfo={description:"",methods:[],displayName:"Basic",props:{anchorOrigin:{required:!1,tsType:{name:"BadgeOrigin"},description:`The anchor of the badge.
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
@default 'standard'`}}};s.__docgenInfo={description:"",methods:[],displayName:"Color",props:{anchorOrigin:{required:!1,tsType:{name:"BadgeOrigin"},description:`The anchor of the badge.
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
@default 'standard'`}}};d.__docgenInfo={description:"",methods:[],displayName:"Visibility",props:{anchorOrigin:{required:!1,tsType:{name:"BadgeOrigin"},description:`The anchor of the badge.
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
@default 'standard'`}}};g.__docgenInfo={description:"",methods:[],displayName:"Alignment",props:{anchorOrigin:{required:!1,tsType:{name:"BadgeOrigin"},description:`The anchor of the badge.
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
@default 'standard'`}}};var x,j,S;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`(args: BadgeProps) => <Stack justify="center" spacing={2} style={{
  padding: "1rem"
}}>
    <Badge badgeContent={5} {...args}>
      <SvgIcon color="muted" icon={MailIcon} />
    </Badge>
  </Stack>`,...(S=(j=c.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var B,C,I;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`(args: BadgeProps) => <Stack justify="center" spacing={4}>
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
  </Stack>`,...(I=(C=s.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var w,z,k;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`(args: BadgeProps) => {
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
}`,...(k=(z=d.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var q,O,V;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`(args: BadgeProps) => {
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
}`,...(V=(O=g.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};const D=["Basic","Color","Visibility","Alignment"];export{g as Alignment,c as Basic,s as Color,d as Visibility,D as __namedExportsOrder,A as default};
