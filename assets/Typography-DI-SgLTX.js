import{j as c}from"./jsx-runtime-BnIj46N_.js";import{c as i}from"./clsx-B-dksMZM.js";import{r as h}from"./index-CsdIBAqE.js";const d="_root_jyyck_1",_="_h1_jyyck_5",u="_h2_jyyck_5",T="_h3_jyyck_5",f="_h4_jyyck_5",b="_h5_jyyck_5",j="_h6_jyyck_5",v="_body1_jyyck_33",g="_normal_jyyck_41",k="_medium_jyyck_45",x="_simiBold_jyyck_49",B="_bold_jyyck_53",e={root:d,h1:_,h2:u,h3:T,h4:f,h5:b,h6:j,body1:v,normal:g,medium:k,simiBold:x,bold:B},q=({component:t,children:r,className:l,variant:o="body1",weight:n,...s},m)=>{const p=t||"span",y=i(e.root,l,o&&[e[o]],n&&[e[n]]);return c.jsx(p,{ref:m,className:y,...s,children:r})},a=h.forwardRef(q),E=a;a.__docgenInfo={description:`Base Typography component.
@template T - The type of element to render.
@param {TypographyProps<T>} props - The props for the Typography component.
@param {PolymorphicRef<T>} ref - The ref object for the component.
@returns {JSX.Element} - The rendered Typography component.`,methods:[],displayName:"Typography",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"The content of the component."},className:{required:!1,tsType:{name:"string"},description:"Override or extend the styles applied to the component."},component:{required:!1,tsType:{name:"T"},description:"The component to use."},variant:{required:!1,tsType:{name:"union",raw:`| "h1"
| "h2"
| "h3"
| "h4"
| "h5"
| "h6"
| "body1"
| "body2"`,elements:[{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'},{name:"literal",value:'"h4"'},{name:"literal",value:'"h5"'},{name:"literal",value:'"h6"'},{name:"literal",value:'"body1"'},{name:"literal",value:'"body2"'}]},description:`The variant of typography.
@default 'body1'`,defaultValue:{value:'"body1"',computed:!1}},weight:{required:!1,tsType:{name:"union",raw:'"normal" | "medium" | "semiBold" | "bold"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"semiBold"'},{name:"literal",value:'"bold"'}]},description:"Available weights for component."}}};export{E as T};
