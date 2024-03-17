import{j as l}from"./jsx-runtime-BnIj46N_.js";import{r as T}from"./index-CsdIBAqE.js";import{T as s}from"./Tabs-TlBUxgQd.js";import"./clsx-B-dksMZM.js";const v={title:"Tabs",tags:["autodocs"],parameters:{docs:{description:{component:"Tabs make it easy to explore and switch between different views."}}},component:s},e=()=>{const[t,n]=T.useState(0);return l.jsx(s,{selectedTab:t,tabs:[{index:0,label:"Tab 1"},{index:1,label:"Tab 2"},{index:2,label:"Tab 3"}],onChange:n})},a=()=>{const[t,n]=T.useState(0);return l.jsx(s,{variant:"outlined",selectedTab:t,tabs:[{index:0,label:"Outlined Tab 1"},{index:1,label:"Outlined Tab 2"},{index:2,label:"Outlined Tab 3"}],onChange:n})};e.__docgenInfo={description:"",methods:[],displayName:"BasicTab"};a.__docgenInfo={description:"",methods:[],displayName:"OutlinedTab"};var i,o,b;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const [activeTab, setActiveTab] = useState(0);
  return <Tabs selectedTab={activeTab} tabs={[{
    index: 0,
    label: "Tab 1"
  }, {
    index: 1,
    label: "Tab 2"
  }, {
    index: 2,
    label: "Tab 3"
  }]} onChange={setActiveTab} />;
}`,...(b=(o=e.parameters)==null?void 0:o.docs)==null?void 0:b.source}}};var r,c,d;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const [activeTab, setActiveTab] = useState(0);
  return <Tabs variant="outlined" selectedTab={activeTab} tabs={[{
    index: 0,
    label: "Outlined Tab 1"
  }, {
    index: 1,
    label: "Outlined Tab 2"
  }, {
    index: 2,
    label: "Outlined Tab 3"
  }]} onChange={setActiveTab} />;
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const O=["BasicTab","OutlinedTab"];export{e as BasicTab,a as OutlinedTab,O as __namedExportsOrder,v as default};
