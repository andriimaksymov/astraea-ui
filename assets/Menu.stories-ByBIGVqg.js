import{j as e}from"./jsx-runtime-BnIj46N_.js";import{r as u}from"./index-CsdIBAqE.js";import{M as x,B as f,e as c,d as z}from"./Tooltip-vWLCKAu7.js";import"./index-5f0m1pej.js";import{R as r}from"./Radio-B8ygnOKm.js";import{S as a}from"./Stack-D1kKokOu.js";import{T as y}from"./Typography-DI-SgLTX.js";import"./clsx-B-dksMZM.js";import"./extends-CCbyfPlC.js";import"./index-MS7LKRHD.js";const Y={title:"Menu",tags:["autodocs"],parameters:{docs:{description:{component:"Menus display a list of choices on temporary surfaces."}}},component:x},M=o=>{const[m,t]=u.useState(void 0),d=!!m,s=l=>{t(l.currentTarget)},h=()=>{t(void 0)};return e.jsxs(a,{spacing:4,justify:"center",children:[e.jsx(f,{onClick:s,children:"Dashboard"}),e.jsxs(x,{anchorEl:m,...o,onClose:h,isOpen:d,children:[e.jsx(c,{onClick:h,children:"Profile"}),e.jsx(c,{onClick:h,children:"Account"}),e.jsx(c,{onClick:h,children:"Logout"})]})]})},O=o=>{const[m,t]=u.useState(1),[d,s]=u.useState(void 0),h=!!d,l=i=>b=>{t(b),s(i.currentTarget)},p=()=>{s(void 0)};return e.jsxs(a,{spacing:4,justify:"center",children:[e.jsx(f,{onClick:i=>l(i)(1),children:"Elevation 1"}),e.jsx(f,{onClick:i=>l(i)(2),children:"Elevation 2"}),e.jsx(f,{onClick:i=>l(i)(3),children:"Elevation 3"}),e.jsx(f,{onClick:i=>l(i)(4),children:"Elevation 4"}),e.jsxs(x,{anchorEl:d,elevation:m,...o,onClose:p,isOpen:h,children:[e.jsx(c,{onClick:p,children:"Profile"}),e.jsx(c,{onClick:p,children:"Account"}),e.jsx(c,{onClick:p,children:"Logout"})]})]})},E=()=>{const[o,m]=u.useState({vertical:"top",horizontal:"left"}),[t,d]=u.useState({vertical:"top",horizontal:"left"}),[s,h]=u.useState({top:0,left:0}),[l,p]=u.useState(!0),[i,b]=u.useState(void 0),H=!!i,g=(n,C)=>{m(k=>({...k,[C]:n.target.value}))},v=(n,C)=>{d(k=>({...k,[C]:n.target.value}))},j=n=>{const{name:C,value:k}=n.target;h(N=>({...N,[C]:k}))},_=n=>{b(n.currentTarget)},T=()=>{b(void 0)};return e.jsxs(a,{spacing:4,direction:"column",justify:"center",align:"center",style:{height:"50vh",padding:"10rem 0"},children:[e.jsx(f,{onClick:_,children:"Open Menu"}),e.jsxs(a,{spacing:4,direction:"column",children:[e.jsxs(a,{spacing:"5rem",children:[e.jsxs(a,{direction:"column",spacing:2,children:[e.jsx(y,{component:"p",children:"anchorReference"}),e.jsxs(a,{spacing:2,children:[e.jsx(r,{label:"anchorEl",name:"anchorReference",value:"anchorEl",checked:l,onChange:()=>p(!0)}),e.jsx(r,{label:"anchorPosition",name:"anchorReference",value:"anchorPosition",checked:!l,onChange:()=>p(!1)})]})]}),e.jsxs(a,{direction:"column",spacing:1,children:[e.jsx(z,{name:"top",type:"number",variant:"outlined",value:s.top,onChange:j}),e.jsx(z,{name:"left",type:"number",variant:"outlined",value:s.left,onChange:j})]})]}),e.jsxs(a,{spacing:"5rem",children:[e.jsxs(a,{direction:"column",spacing:4,children:[e.jsxs(a,{direction:"column",spacing:2,children:[e.jsx(y,{component:"p",children:"anchorOrigin.vertical"}),e.jsx(r,{label:"Top",name:"anchorOrigin.vertical",value:"top",checked:(o==null?void 0:o.vertical)==="top",onChange:n=>g(n,"vertical")}),e.jsx(r,{label:"Center",name:"anchorOrigin.vertical",value:"center",checked:(o==null?void 0:o.vertical)==="center",onChange:n=>g(n,"vertical")}),e.jsx(r,{label:"Bottom",name:"anchorOrigin.vertical",value:"bottom",checked:(o==null?void 0:o.vertical)==="bottom",onChange:n=>g(n,"vertical")})]}),e.jsxs(a,{direction:"column",spacing:2,children:[e.jsx(y,{component:"p",children:"anchorOrigin.horizontal"}),e.jsxs(a,{spacing:2,children:[e.jsx(r,{label:"Left",name:"anchorOrigin.horizontal",value:"left",checked:(o==null?void 0:o.horizontal)==="left",onChange:n=>g(n,"horizontal")}),e.jsx(r,{label:"Center",name:"anchorOrigin.horizontal",value:"center",checked:(o==null?void 0:o.horizontal)==="center",onChange:n=>g(n,"horizontal")}),e.jsx(r,{label:"Right",name:"anchorOrigin.horizontal",value:"right",checked:(o==null?void 0:o.horizontal)==="right",onChange:n=>g(n,"horizontal")})]})]})]}),e.jsxs(a,{direction:"column",spacing:4,children:[e.jsxs(a,{direction:"column",spacing:2,children:[e.jsx(y,{component:"p",children:"transformOrigin.vertical"}),e.jsx(r,{label:"Top",name:"transformOrigin.vertical",value:"top",checked:(t==null?void 0:t.vertical)==="top",onChange:n=>v(n,"vertical")}),e.jsx(r,{label:"Center",name:"transformOrigin.center",value:"center",checked:(t==null?void 0:t.vertical)==="center",onChange:n=>v(n,"vertical")}),e.jsx(r,{label:"Bottom",name:"transformOrigin.vertical",value:"bottom",checked:(t==null?void 0:t.vertical)==="bottom",onChange:n=>v(n,"vertical")})]}),e.jsxs(a,{direction:"column",spacing:2,children:[e.jsx(y,{component:"p",children:"transformOrigin.horizontal"}),e.jsxs(a,{spacing:2,children:[e.jsx(r,{label:"Left",name:"transformOrigin.horizontal",value:"left",checked:(t==null?void 0:t.horizontal)==="left",onChange:n=>v(n,"horizontal")}),e.jsx(r,{label:"Center",name:"transformOrigin.horizontal",value:"center",checked:(t==null?void 0:t.horizontal)==="center",onChange:n=>v(n,"horizontal")}),e.jsx(r,{label:"Right",name:"anchorOrigin.horizontal",value:"right",checked:(t==null?void 0:t.horizontal)==="right",onChange:n=>v(n,"horizontal")})]})]})]})]})]}),e.jsxs(x,{anchorEl:i,onClose:T,isOpen:H,...!l&&{anchorPosition:s},anchorOrigin:o,transformOrigin:t,children:[e.jsx(c,{onClick:T,children:"Profile"}),e.jsx(c,{onClick:T,children:"Account"}),e.jsx(c,{onClick:T,children:"Logout"})]})]})};M.__docgenInfo={description:"",methods:[],displayName:"Basic",props:{anchorEl:{required:!1,tsType:{name:"Element"},description:"An HTML element, or a function that returns one. It's used to set the position of the menu."},anchorOrigin:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  vertical: "top" | "center" | "bottom";
  horizontal: "left" | "center" | "right";
}`,signature:{properties:[{key:"vertical",value:{name:"union",raw:'"top" | "center" | "bottom"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"center"'},{name:"literal",value:'"bottom"'}],required:!0}},{key:"horizontal",value:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}],required:!0}}]}},description:`This is the point on the anchor where the popover's
\`anchorEl\` will attach to. This is not used when the
anchorReference is 'anchorPosition'.

Options:
vertical: [top, center, bottom];
horizontal: [left, center, right].
@default {
  vertical: 'top',
  horizontal: 'left',
}`},anchorPosition:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  top: number;
  left: number;
}`,signature:{properties:[{key:"top",value:{name:"number",required:!0}},{key:"left",value:{name:"number",required:!0}}]}},description:`The position that may be used to set the position of the popover.
The coordinates are relative to the application's client area.`},className:{required:!1,tsType:{name:"string"},description:"Override or extend the style applied to the component."},isOpen:{required:!0,tsType:{name:"boolean"},description:"If 'true', the component is shown."},transformOrigin:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  vertical: "top" | "center" | "bottom";
  horizontal: "left" | "center" | "right";
}`,signature:{properties:[{key:"vertical",value:{name:"union",raw:'"top" | "center" | "bottom"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"center"'},{name:"literal",value:'"bottom"'}],required:!0}},{key:"horizontal",value:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}],required:!0}}]}},description:`This is the point on the popover which
will attach to the anchor's origin.

Options:
vertical: [top, center, bottom, x(px)];
horizontal: [left, center, right, x(px)].
@default {
  vertical: 'top',
  horizontal: 'left',
}`},fullWidth:{required:!1,tsType:{name:"boolean"},description:`If 'true' menu width contain target element width
@default false`},elevation:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"}]},description:"Shadow depth, corresponds to `dp` in the spec.\nIt accepts values between 0 and 5 inclusive.\n@default 1"},children:{required:!1,tsType:{name:"ReactNode"},description:"Menu contents, normally MenuItems."},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the component requests to be closed."}}};O.__docgenInfo={description:"",methods:[],displayName:"Elevation",props:{anchorEl:{required:!1,tsType:{name:"Element"},description:"An HTML element, or a function that returns one. It's used to set the position of the menu."},anchorOrigin:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  vertical: "top" | "center" | "bottom";
  horizontal: "left" | "center" | "right";
}`,signature:{properties:[{key:"vertical",value:{name:"union",raw:'"top" | "center" | "bottom"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"center"'},{name:"literal",value:'"bottom"'}],required:!0}},{key:"horizontal",value:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}],required:!0}}]}},description:`This is the point on the anchor where the popover's
\`anchorEl\` will attach to. This is not used when the
anchorReference is 'anchorPosition'.

Options:
vertical: [top, center, bottom];
horizontal: [left, center, right].
@default {
  vertical: 'top',
  horizontal: 'left',
}`},anchorPosition:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  top: number;
  left: number;
}`,signature:{properties:[{key:"top",value:{name:"number",required:!0}},{key:"left",value:{name:"number",required:!0}}]}},description:`The position that may be used to set the position of the popover.
The coordinates are relative to the application's client area.`},className:{required:!1,tsType:{name:"string"},description:"Override or extend the style applied to the component."},isOpen:{required:!0,tsType:{name:"boolean"},description:"If 'true', the component is shown."},transformOrigin:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  vertical: "top" | "center" | "bottom";
  horizontal: "left" | "center" | "right";
}`,signature:{properties:[{key:"vertical",value:{name:"union",raw:'"top" | "center" | "bottom"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"center"'},{name:"literal",value:'"bottom"'}],required:!0}},{key:"horizontal",value:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}],required:!0}}]}},description:`This is the point on the popover which
will attach to the anchor's origin.

Options:
vertical: [top, center, bottom, x(px)];
horizontal: [left, center, right, x(px)].
@default {
  vertical: 'top',
  horizontal: 'left',
}`},fullWidth:{required:!1,tsType:{name:"boolean"},description:`If 'true' menu width contain target element width
@default false`},elevation:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"}]},description:"Shadow depth, corresponds to `dp` in the spec.\nIt accepts values between 0 and 5 inclusive.\n@default 1"},children:{required:!1,tsType:{name:"ReactNode"},description:"Menu contents, normally MenuItems."},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the component requests to be closed."}}};E.__docgenInfo={description:"",methods:[],displayName:"Position"};var S,A,B;M.parameters={...M.parameters,docs:{...(S=M.parameters)==null?void 0:S.docs,source:{originalSource:`(args: MenuProps) => {
  const [anchorEl, setAnchorEl] = useState<Element | undefined>(undefined);
  const isOpen = Boolean(anchorEl);
  const handleMenuOpen = (e: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(undefined);
  };
  return <Stack spacing={4} justify="center">
      <Button onClick={handleMenuOpen}>Dashboard</Button>

      <Menu anchorEl={anchorEl} {...args} onClose={handleMenuClose} isOpen={isOpen}>
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>Account</MenuItem>
        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      </Menu>
    </Stack>;
}`,...(B=(A=M.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var I,w,P;O.parameters={...O.parameters,docs:{...(I=O.parameters)==null?void 0:I.docs,source:{originalSource:`(args: MenuProps) => {
  const [elevation, setElevation] = useState<MenuProps["elevation"]>(1);
  const [anchorEl, setAnchorEl] = useState<Element | undefined>(undefined);
  const isOpen = Boolean(anchorEl);
  const handleMenuOpen = (e: MouseEvent<HTMLButtonElement>) => {
    return (elevation: MenuProps["elevation"]) => {
      setElevation(elevation);
      setAnchorEl(e.currentTarget);
    };
  };
  const handleMenuClose = () => {
    setAnchorEl(undefined);
  };
  return <Stack spacing={4} justify="center">
      <Button onClick={(e: MouseEvent<HTMLButtonElement>) => handleMenuOpen(e)(1)}>
        Elevation 1
      </Button>
      <Button onClick={(e: MouseEvent<HTMLButtonElement>) => handleMenuOpen(e)(2)}>
        Elevation 2
      </Button>
      <Button onClick={(e: MouseEvent<HTMLButtonElement>) => handleMenuOpen(e)(3)}>
        Elevation 3
      </Button>
      <Button onClick={(e: MouseEvent<HTMLButtonElement>) => handleMenuOpen(e)(4)}>
        Elevation 4
      </Button>
      <Menu anchorEl={anchorEl} elevation={elevation} {...args} onClose={handleMenuClose} isOpen={isOpen}>
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>Account</MenuItem>
        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      </Menu>
    </Stack>;
}`,...(P=(w=O.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var q,R,L;E.parameters={...E.parameters,docs:{...(q=E.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const [anchorOrigin, setAnchorOrigin] = useState<MenuOrigin>({
    vertical: "top",
    horizontal: "left"
  });
  const [transformOrigin, setTransformOrigin] = useState<MenuOrigin>({
    vertical: "top",
    horizontal: "left"
  });
  const [anchorPosition, setAnchorPosition] = useState<MenuPosition>({
    top: 0,
    left: 0
  });
  const [isAnchorByElement, setIsAnchorByElement] = useState<boolean>(true);
  const [anchorEl, setAnchorEl] = useState<Element | undefined>(undefined);
  const isOpen = Boolean(anchorEl);
  const handleChangeAnchorOrigin = (e: ChangeEvent<HTMLInputElement>, type: keyof MenuOrigin) => {
    setAnchorOrigin(prev => ({
      ...prev,
      [type]: e.target.value
    }));
  };
  const handleChangeTransformOrigin = (e: ChangeEvent<HTMLInputElement>, type: keyof MenuOrigin) => {
    setTransformOrigin(prev => ({
      ...prev,
      [type]: e.target.value
    }));
  };
  const handleChangePosition = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setAnchorPosition(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleMenuOpen = (e: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(undefined);
  };
  return <Stack spacing={4} direction="column" justify="center" align="center" style={{
    height: "50vh",
    padding: "10rem 0"
  }}>
      <Button onClick={handleMenuOpen}>Open Menu</Button>
      <Stack spacing={4} direction="column">
        <Stack spacing="5rem">
          <Stack direction="column" spacing={2}>
            <Typography component="p">anchorReference</Typography>
            <Stack spacing={2}>
              <Radio label="anchorEl" name="anchorReference" value="anchorEl" checked={isAnchorByElement} onChange={() => setIsAnchorByElement(true)} />
              <Radio label="anchorPosition" name="anchorReference" value="anchorPosition" checked={!isAnchorByElement} onChange={() => setIsAnchorByElement(false)} />
            </Stack>
          </Stack>
          <Stack direction="column" spacing={1}>
            <Input name="top" type="number" variant="outlined" value={anchorPosition.top} onChange={handleChangePosition} />
            <Input name="left" type="number" variant="outlined" value={anchorPosition.left} onChange={handleChangePosition} />
          </Stack>
        </Stack>
        <Stack spacing="5rem">
          <Stack direction="column" spacing={4}>
            <Stack direction="column" spacing={2}>
              <Typography component="p">anchorOrigin.vertical</Typography>
              <Radio label="Top" name="anchorOrigin.vertical" value="top" checked={anchorOrigin?.vertical === "top"} onChange={e => handleChangeAnchorOrigin(e, "vertical")} />
              <Radio label="Center" name="anchorOrigin.vertical" value="center" checked={anchorOrigin?.vertical === "center"} onChange={e => handleChangeAnchorOrigin(e, "vertical")} />
              <Radio label="Bottom" name="anchorOrigin.vertical" value="bottom" checked={anchorOrigin?.vertical === "bottom"} onChange={e => handleChangeAnchorOrigin(e, "vertical")} />
            </Stack>
            <Stack direction="column" spacing={2}>
              <Typography component="p">anchorOrigin.horizontal</Typography>
              <Stack spacing={2}>
                <Radio label="Left" name="anchorOrigin.horizontal" value="left" checked={anchorOrigin?.horizontal === "left"} onChange={e => handleChangeAnchorOrigin(e, "horizontal")} />
                <Radio label="Center" name="anchorOrigin.horizontal" value="center" checked={anchorOrigin?.horizontal === "center"} onChange={e => handleChangeAnchorOrigin(e, "horizontal")} />
                <Radio label="Right" name="anchorOrigin.horizontal" value="right" checked={anchorOrigin?.horizontal === "right"} onChange={e => handleChangeAnchorOrigin(e, "horizontal")} />
              </Stack>
            </Stack>
          </Stack>
          <Stack direction="column" spacing={4}>
            <Stack direction="column" spacing={2}>
              <Typography component="p">transformOrigin.vertical</Typography>
              <Radio label="Top" name="transformOrigin.vertical" value="top" checked={transformOrigin?.vertical === "top"} onChange={e => handleChangeTransformOrigin(e, "vertical")} />
              <Radio label="Center" name="transformOrigin.center" value="center" checked={transformOrigin?.vertical === "center"} onChange={e => handleChangeTransformOrigin(e, "vertical")} />
              <Radio label="Bottom" name="transformOrigin.vertical" value="bottom" checked={transformOrigin?.vertical === "bottom"} onChange={e => handleChangeTransformOrigin(e, "vertical")} />
            </Stack>
            <Stack direction="column" spacing={2}>
              <Typography component="p">transformOrigin.horizontal</Typography>
              <Stack spacing={2}>
                <Radio label="Left" name="transformOrigin.horizontal" value="left" checked={transformOrigin?.horizontal === "left"} onChange={e => handleChangeTransformOrigin(e, "horizontal")} />
                <Radio label="Center" name="transformOrigin.horizontal" value="center" checked={transformOrigin?.horizontal === "center"} onChange={e => handleChangeTransformOrigin(e, "horizontal")} />
                <Radio label="Right" name="anchorOrigin.horizontal" value="right" checked={transformOrigin?.horizontal === "right"} onChange={e => handleChangeTransformOrigin(e, "horizontal")} />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <Menu anchorEl={anchorEl} onClose={handleMenuClose} isOpen={isOpen} {...!isAnchorByElement && {
      anchorPosition: anchorPosition
    }} anchorOrigin={anchorOrigin} transformOrigin={transformOrigin}>
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>Account</MenuItem>
        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      </Menu>
    </Stack>;
}`,...(L=(R=E.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};const Z=["Basic","Elevation","Position"];export{M as Basic,O as Elevation,E as Position,Z as __namedExportsOrder,Y as default};
