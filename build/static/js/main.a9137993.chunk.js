(this["webpackJsonpproduct-management-frontend"]=this["webpackJsonpproduct-management-frontend"]||[]).push([[0],{130:function(t,e,a){},131:function(t,e,a){"use strict";a.r(e);var r=a(0),c=a.n(r),n=a(21),o=a.n(n),d=a(191),s=a(192),i=a(193),l=a(189),u=a(194),j=a(195),b=a(2);var m=function(t){let{products:e}=t;return Object(b.jsxs)(d.a,{mt:5,children:[Object(b.jsx)(s.a,{variant:"h6",gutterBottom:!0,children:"Product List"}),e.length>0?Object(b.jsx)(i.a,{children:e.map((t=>Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsx)(l.a,{children:Object(b.jsx)(u.a,{primary:t.name,secondary:`Price: $${t.price.toFixed(2)}`})}),Object(b.jsx)(j.a,{})]},t.id)))}):Object(b.jsx)(s.a,{variant:"body1",color:"textSecondary",align:"center",children:"No data available"})]})},h=a(186),p=a(190),x=a(55),O=a.n(x);const v="http://localhost:8080/api/v1";var f=a(32);var g=function(t){let{onAddProduct:e}=t;const[a,c]=Object(r.useState)(""),[n,o]=Object(r.useState)(""),[s,i]=Object(r.useState)(!1);return Object(b.jsxs)(d.a,{component:"form",onSubmit:async t=>{if(t.preventDefault(),!a||!n)return void f.b.error("Both fields are required");const r={name:a,price:parseFloat(n)};try{i(!0);const t=await O.a.post(`${v}/products`,r);e(t.data),c(""),o("")}catch(d){f.b.error("Failed to add product")}finally{i(!1)}},sx:{mt:3},children:[Object(b.jsx)(h.a,{label:"Product Name",variant:"outlined",fullWidth:!0,margin:"normal",value:a,onChange:t=>c(t.target.value),required:!0}),Object(b.jsx)(h.a,{label:"Price",variant:"outlined",fullWidth:!0,margin:"normal",type:"number",value:n,onChange:t=>o(t.target.value),required:!0}),Object(b.jsx)(p.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,disabled:s,sx:{mt:2},children:s?"Adding...":"Add Product"})]})},y=a(185),P=a(188);a(129);var S=function(){const[t,e]=Object(r.useState)([]),a=async()=>{try{const t=await O.a.get(`${v}/products`);e(t.data)}catch(t){f.b.error("Failed to fetch products")}};return Object(r.useEffect)((()=>{a()}),[]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(y.a,{}),Object(b.jsxs)(P.a,{maxWidth:"md",children:[Object(b.jsx)(s.a,{variant:"h4",gutterBottom:!0,align:"center",children:"Product Management"}),Object(b.jsx)(g,{onAddProduct:t=>{e((e=>[...e,t])),f.b.success("Product added successfully!"),a()}}),Object(b.jsx)(m,{products:t})]}),Object(b.jsx)(f.a,{position:"top-center",autoClose:3e3})]})};a(130);o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root"))}},[[131,1,2]]]);
//# sourceMappingURL=main.a9137993.chunk.js.map