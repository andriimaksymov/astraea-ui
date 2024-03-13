import{j as e,C as i,D as o}from"./Card.stories-BQ1-Z26k.js";import{useMDXComponents as s}from"./index-DLsXyOuj.js";import{M as c,C as l}from"./index-6-f4LKuN.js";import"./index-CsdIBAqE.js";import"./iframe-DRxZO0t5.js";import"../sb-preview/runtime.js";import"./index-5f0m1pej.js";import"./index-DmEeU3Of.js";import"./index-DrFu-skq.js";function d(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Card",component:i}),`
`,e.jsx(n.h1,{id:"card",children:"Card"}),`
`,e.jsx(n.p,{children:"A card component for displaying content with a border, padding, and optional elevation."}),`
`,e.jsx(n.h4,{id:"example",children:"Example"}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { Card } from "awesome-ui-library";

const Example = ({ children }) => {
  return (
      <Card>
        {children}
      </Card>
  );
};

export default Example;
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.h3,{id:"hasborder-boolean",children:[e.jsx(n.code,{children:"hasBorder"})," (boolean)"]}),`
`,e.jsxs(n.p,{children:["Specifies whether the card should have a border. Default: ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.h3,{id:"bordercolor-string",children:[e.jsx(n.code,{children:"borderColor"})," (string)"]}),`
`,e.jsx(n.p,{children:"The color of the card's border. Accepts any valid CSS color value."}),`
`,e.jsxs(n.h3,{id:"classname-string",children:[e.jsx(n.code,{children:"className"})," (string)"]}),`
`,e.jsx(n.p,{children:"Additional CSS classes to apply to the card element."}),`
`,e.jsxs(n.h3,{id:"children-reactnode",children:[e.jsx(n.code,{children:"children"})," (ReactNode)"]}),`
`,e.jsx(n.p,{children:"The content to render inside the card."}),`
`,e.jsxs(n.h3,{id:"padding-string",children:[e.jsx(n.code,{children:"padding"})," (string)"]}),`
`,e.jsxs(n.p,{children:["The padding size of the card. Options: ",e.jsx(n.code,{children:"none"}),", ",e.jsx(n.code,{children:"small"}),", ",e.jsx(n.code,{children:"medium"}),", ",e.jsx(n.code,{children:"large"}),". Default: ",e.jsx(n.code,{children:"medium"}),"."]}),`
`,e.jsxs(n.h3,{id:"elevation-number",children:[e.jsx(n.code,{children:"elevation"})," (number)"]}),`
`,e.jsxs(n.p,{children:["The elevation level of the card. This determines the shadow effect. Options: ",e.jsx(n.code,{children:"0"}),", ",e.jsx(n.code,{children:"1"}),", ",e.jsx(n.code,{children:"2"}),", ",e.jsx(n.code,{children:"3"}),", ",e.jsx(n.code,{children:"4"}),", ",e.jsx(n.code,{children:"5"}),". Default: ",e.jsx(n.code,{children:"1"}),"."]})]})}function g(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(d,{...r})}):d(r)}export{g as default};
