import{j as n,a as r,F as o,C as a,D as l}from"./Card.stories-BX6eaLOY.js";import{M as t,C as h}from"./index-BZcyfn-H.js";import{useMDXComponents as c}from"./index-mlbUBBkt.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-CD7bJlIZ.js";import"../sb-preview/runtime.js";import"./index-D9uilScg.js";import"./index-UvUotFBn.js";import"./index-DrFu-skq.js";function i(d){const e=Object.assign({h1:"h1",p:"p",h4:"h4",h2:"h2",pre:"pre",code:"code",h3:"h3"},c(),d.components);return r(o,{children:[n(t,{title:"Card",component:a}),`
`,n(e.h1,{id:"card",children:"Card"}),`
`,n(e.p,{children:"A card component for displaying content with a border, padding, and optional elevation."}),`
`,n(e.h4,{id:"example",children:"Example"}),`
`,n(h,{of:l}),`
`,n(e.h2,{id:"usage",children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-ts",children:`import { Card } from "awesome-ui-library";

const Example = ({ children }) => {
  return (
      <Card>
        {children}
      </Card>
  );
};

export default Example;
`})}),`
`,n(e.h2,{id:"props",children:"Props"}),`
`,r(e.h3,{id:"hasborder-boolean",children:[n(e.code,{children:"hasBorder"})," (boolean)"]}),`
`,r(e.p,{children:["Specifies whether the card should have a border. Default: ",n(e.code,{children:"true"}),"."]}),`
`,r(e.h3,{id:"bordercolor-string",children:[n(e.code,{children:"borderColor"})," (string)"]}),`
`,n(e.p,{children:"The color of the card's border. Accepts any valid CSS color value."}),`
`,r(e.h3,{id:"classname-string",children:[n(e.code,{children:"className"})," (string)"]}),`
`,n(e.p,{children:"Additional CSS classes to apply to the card element."}),`
`,r(e.h3,{id:"children-reactnode",children:[n(e.code,{children:"children"})," (ReactNode)"]}),`
`,n(e.p,{children:"The content to render inside the card."}),`
`,r(e.h3,{id:"padding-string",children:[n(e.code,{children:"padding"})," (string)"]}),`
`,r(e.p,{children:["The padding size of the card. Options: ",n(e.code,{children:"none"}),", ",n(e.code,{children:"small"}),", ",n(e.code,{children:"medium"}),", ",n(e.code,{children:"large"}),". Default: ",n(e.code,{children:"medium"}),"."]}),`
`,r(e.h3,{id:"elevation-number",children:[n(e.code,{children:"elevation"})," (number)"]}),`
`,r(e.p,{children:["The elevation level of the card. This determines the shadow effect. Options: ",n(e.code,{children:"0"}),", ",n(e.code,{children:"1"}),", ",n(e.code,{children:"2"}),", ",n(e.code,{children:"3"}),", ",n(e.code,{children:"4"}),", ",n(e.code,{children:"5"}),". Default: ",n(e.code,{children:"1"}),"."]})]})}function D(d={}){const{wrapper:e}=Object.assign({},c(),d.components);return e?n(e,Object.assign({},d,{children:n(i,d)})):i(d)}export{D as default};
