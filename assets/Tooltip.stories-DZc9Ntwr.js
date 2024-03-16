import{j as t}from"./jsx-runtime-BnIj46N_.js";import{r as D}from"./index-CsdIBAqE.js";import{P as a}from"./PlusIcon-B-nK3-sl.js";import{T as o,I as c,d as E,c as N}from"./Tooltip-vWLCKAu7.js";import"./index-5f0m1pej.js";import"./Radio-B8ygnOKm.js";import{S as e}from"./Stack-D1kKokOu.js";import{T as u}from"./Typography-DI-SgLTX.js";import"./clsx-B-dksMZM.js";import"./extends-CCbyfPlC.js";import"./index-MS7LKRHD.js";const K={title:"Tooltip",tags:["autodocs"],parameters:{docs:{description:{component:"A component that displays a tooltip when triggered by user action."}}},component:o},i=n=>t.jsx(e,{justify:"center",children:t.jsx(o,{content:"Basic tooltip",...n,children:t.jsx(c,{icon:a})})}),s=n=>t.jsx(e,{justify:"center",children:t.jsx(o,{arrow:!0,content:"With arrow",...n,children:t.jsx(c,{icon:a})})}),l=n=>t.jsxs(e,{justify:"center",spacing:"5rem",children:[t.jsxs(e,{direction:"column",align:"center",spacing:2,children:[t.jsx(u,{children:"Show tooltip on hover"}),t.jsx(o,{action:"hover",content:"Tooltip",...n,children:t.jsx(c,{icon:a})})]}),t.jsxs(e,{direction:"column",align:"center",spacing:2,children:[t.jsx(u,{children:"Show tooltip on click"}),t.jsx(o,{action:"click",content:"Tooltip",...n,children:t.jsx(c,{icon:a})})]})]}),p=n=>{const[r,g]=D.useState(0),y=d=>{const h=+d.target.value;h>0&&g(h)};return t.jsxs(e,{justify:"center",spacing:"5rem",children:[t.jsxs(e,{direction:"column",align:"center",spacing:2,children:[t.jsx(u,{children:"Show tooltip on hover"}),t.jsx(E,{type:"number",value:r,onChange:y})]}),t.jsx(e,{direction:"column",align:"center",spacing:2,children:t.jsx(o,{delay:r,content:"Tooltip",...n,children:t.jsx(c,{icon:a})})})]})},m=n=>{const[r,g]=D.useState("bottom"),y=d=>{d&&g(d.value)};return t.jsxs(e,{direction:"column",spacing:"5rem",children:[t.jsxs(e,{direction:"column",align:"center",spacing:2,children:[t.jsx(u,{children:"Placement"}),t.jsx(N,{maxItems:12,value:r,items:[{value:"bottom",key:"bottom"},{value:"bottom-start",key:"bottom-start"},{value:"bottom-end",key:"bottom-end"},{value:"top",key:"top"},{value:"top-start",key:"top-start"},{value:"top-end",key:"top-end"},{value:"left",key:"left"},{value:"left-start",key:"left-start"},{value:"left-end",key:"left-end"},{value:"right",key:"right"},{value:"right-start",key:"right-start"},{value:"right-end",key:"right-end"}],onSelect:y})]}),t.jsx(e,{direction:"column",align:"center",spacing:2,children:t.jsx(o,{placement:r,content:"Tooltip",...n,children:t.jsx(c,{icon:a})})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Basic"};s.__docgenInfo={description:"",methods:[],displayName:"Arrow"};l.__docgenInfo={description:"",methods:[],displayName:"Action"};p.__docgenInfo={description:"",methods:[],displayName:"Delay"};m.__docgenInfo={description:"",methods:[],displayName:"Position"};var k,S,f;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`(args: typeof Tooltip) => <Stack justify="center">
    <Tooltip content="Basic tooltip" {...args}>
      <IconButton icon={PlusIcon} />
    </Tooltip>
  </Stack>`,...(f=(S=i.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var T,v,j;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`(args: typeof Tooltip) => <Stack justify="center">
    <Tooltip arrow content="With arrow" {...args}>
      <IconButton icon={PlusIcon} />
    </Tooltip>
  </Stack>`,...(j=(v=s.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var x,I,b;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`(args: typeof Tooltip) => <Stack justify="center" spacing="5rem">
    <Stack direction="column" align="center" spacing={2}>
      <Typography>Show tooltip on hover</Typography>
      <Tooltip action="hover" content="Tooltip" {...args}>
        <IconButton icon={PlusIcon} />
      </Tooltip>
    </Stack>
    <Stack direction="column" align="center" spacing={2}>
      <Typography>Show tooltip on click</Typography>
      <Tooltip action="click" content="Tooltip" {...args}>
        <IconButton icon={PlusIcon} />
      </Tooltip>
    </Stack>
  </Stack>`,...(b=(I=l.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var P,w,_;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`(args: typeof Tooltip) => {
  const [delay, setDelay] = useState<number>(0);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const delay = +e.target.value;
    if (delay > 0) {
      setDelay(delay);
    }
  };
  return <Stack justify="center" spacing="5rem">
      <Stack direction="column" align="center" spacing={2}>
        <Typography>Show tooltip on hover</Typography>
        <Input type="number" value={delay} onChange={handleChange} />
      </Stack>
      <Stack direction="column" align="center" spacing={2}>
        <Tooltip delay={delay} content="Tooltip" {...args}>
          <IconButton icon={PlusIcon} />
        </Tooltip>
      </Stack>
    </Stack>;
}`,...(_=(w=p.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var B,C,A;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`(args: typeof Tooltip) => {
  const [placement, setPlacement] = useState<TooltipProps["placement"]>("bottom");
  const handleSetPlacement = (v: ComboboxItem | null | undefined) => {
    if (v) {
      setPlacement((v.value as TooltipProps["placement"]));
    }
  };
  return <Stack direction="column" spacing="5rem">
      <Stack direction="column" align="center" spacing={2}>
        <Typography>Placement</Typography>
        <Combobox maxItems={12} value={placement} items={[{
        value: "bottom",
        key: "bottom"
      }, {
        value: "bottom-start",
        key: "bottom-start"
      }, {
        value: "bottom-end",
        key: "bottom-end"
      }, {
        value: "top",
        key: "top"
      }, {
        value: "top-start",
        key: "top-start"
      }, {
        value: "top-end",
        key: "top-end"
      }, {
        value: "left",
        key: "left"
      }, {
        value: "left-start",
        key: "left-start"
      }, {
        value: "left-end",
        key: "left-end"
      }, {
        value: "right",
        key: "right"
      }, {
        value: "right-start",
        key: "right-start"
      }, {
        value: "right-end",
        key: "right-end"
      }]} onSelect={handleSetPlacement} />
      </Stack>
      <Stack direction="column" align="center" spacing={2}>
        <Tooltip placement={placement} content="Tooltip" {...args}>
          <IconButton icon={PlusIcon} />
        </Tooltip>
      </Stack>
    </Stack>;
}`,...(A=(C=m.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};const Q=["Basic","Arrow","Action","Delay","Position"];export{l as Action,s as Arrow,i as Basic,p as Delay,m as Position,Q as __namedExportsOrder,K as default};
