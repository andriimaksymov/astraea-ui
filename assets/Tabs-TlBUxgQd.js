import{j as i}from"./jsx-runtime-BnIj46N_.js";import{c}from"./clsx-B-dksMZM.js";import{r}from"./index-CsdIBAqE.js";const _="_root_1aa6q_1",T="_tabList_1aa6q_7",q="_tab_1aa6q_7",w="_decor_1aa6q_25",g="_panel_1aa6q_30",z="_underline_1aa6q_34",L="_active_1aa6q_41",E="_outlined_1aa6q_50",a={root:_,tabList:T,tab:q,decor:w,panel:g,underline:z,active:L,outlined:E},u=({className:m="",tabs:o=[],selectedTab:n=0,variant:p="underline",orientation:l="horizontal",onChange:f})=>{const s=o&&o.find(e=>e.index===n),[h,b]=r.useState(0),[v,x]=r.useState(0),d=r.useRef([]),y=e=>{f(e)};return r.useEffect(()=>{function e(){const t=d.current[n];x((t==null?void 0:t.offsetLeft)??0),b((t==null?void 0:t.clientWidth)??0)}return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[n]),i.jsxs("div",{className:c(a.root,m,a[l],a[p]),children:[i.jsxs("div",{role:"tablist",className:a.tabList,"aria-orientation":l,children:[i.jsx("span",{className:a.decor,style:{left:v,width:h}}),o.map(e=>i.jsx("div",{className:c(a.tab,{[a.active]:n===e.index}),onClick:()=>y(e.index),role:"tab",ref:t=>d.current[e.index]=t,"aria-selected":n===e.index,"aria-controls":`tabpanel-${e.index}`,tabIndex:n===e.index?0:-1,id:`btn-${e.index}`,children:e.label},e.index))]}),i.jsx("div",{"aria-labelledby":`btn-${n}`,className:a.panel,id:`tabpanel-${n}`,role:"tabpanel",children:s==null?void 0:s.content})]})},C=u;u.__docgenInfo={description:`A component to display tabs with associated content.
@param {TabsProps} props - The props for the Tabs component.
@returns {JSX.Element} - The rendered Tabs component.`,methods:[],displayName:"Tabs",props:{className:{required:!1,tsType:{name:"string"},description:"Additional class name for the root element.",defaultValue:{value:'""',computed:!1}},tabs:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * The label of the tab.
   */
  label: string | ReactElement;
  /**
   * The index of the tab.
   */
  index: number;
  /**
   * The content to be displayed when this tab is selected.
   */
  content?: ReactNode;
}`,signature:{properties:[{key:"label",value:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}],required:!0},description:"The label of the tab."},{key:"index",value:{name:"number",required:!0},description:"The index of the tab."},{key:"content",value:{name:"ReactNode",required:!1},description:"The content to be displayed when this tab is selected."}]}}],raw:"TabsTab[]"},description:"Array of tabs to be rendered.",defaultValue:{value:"[]",computed:!1}},selectedTab:{required:!1,tsType:{name:"number"},description:"The index of the currently selected tab.",defaultValue:{value:"0",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Callback function to handle tab change."},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:`The orientation of the tabs. Can be 'horizontal' or 'vertical'.
@default 'horizontal'`,defaultValue:{value:'"horizontal"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"underline" | "outlined"',elements:[{name:"literal",value:'"underline"'},{name:"literal",value:'"outlined"'}]},description:`The variant of the tabs. Can be 'underline' or 'outlined'.
@default 'underline'`,defaultValue:{value:'"underline"',computed:!1}},lazyLoad:{required:!1,tsType:{name:"boolean"},description:`Whether to lazy load the tab content. If true, content of inactive tabs will not be rendered until they are selected.
@default false`}}};export{C as T};
