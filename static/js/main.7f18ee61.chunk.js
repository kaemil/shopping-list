(this["webpackJsonpshopping-list"]=this["webpackJsonpshopping-list"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(7),r=n.n(s),i=n(2),l=n(3),u=n(0);var j=function(e){var t=e.quantity,n=e.unit,c=e.product,a=e.id,s=e.handleClick;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"\u27a4"}),Object(u.jsx)("td",{children:t}),Object(u.jsx)("td",{children:n}),Object(u.jsx)("td",{children:c}),Object(u.jsx)("td",{children:Object(u.jsx)("button",{className:"shopList__button--delete",name:"delete",onClick:function(e){return s(e,a)},children:"X"})})]})})};var o=function(e){var t=e.productList,n=e.productQuantity,c=e.unit,a=e.handleClick,s=t.map((function(e,t){return Object(u.jsx)(j,{quantity:n[t],unit:c[t],id:t,product:e,handleClick:a},t)}));return Object(u.jsx)("div",{className:"shopList",children:Object(u.jsxs)("table",{children:[Object(u.jsx)("thead",{children:Object(u.jsx)("tr",{children:Object(u.jsx)("td",{colSpan:"5",children:"Shopping List"})})}),Object(u.jsx)("tbody",{children:s})]})})};var d=function(e){var t=e.inputFocus,n=e.quantity,c=e.handleChange;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("input",{className:"shopPanel__quantity",type:"number",name:"quantity",onChange:c,ref:t,value:n})})};var h=function(e){var t=e.handleChange;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("select",{className:"shopPanel__unit",name:"unit",onChange:t,children:[Object(u.jsx)("option",{value:"pcs",children:"pcs"}),Object(u.jsx)("option",{value:"kg",children:"kg"}),Object(u.jsx)("option",{value:"dkg",children:"dkg"}),Object(u.jsx)("option",{value:"g",children:"g"}),Object(u.jsx)("option",{value:"l",children:"l"}),Object(u.jsx)("option",{value:"ml",children:"ml"})]})})};var b=function(e){var t=e.handlePress,n=e.product,c=e.handleChange;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("input",{className:"shopPanel__product",type:"text",name:"product",placeholder:"Insert product",onKeyPress:t,value:n,onChange:c})})};var O=function(e){var t=e.handlePress,n=e.inputFocus,c=e.handleChange,a=e.product,s=e.handleClick,r=e.quantity;return Object(u.jsxs)("div",{className:"shopPanel",children:[Object(u.jsx)(d,{inputFocus:n,quantity:r,handleChange:c}),Object(u.jsx)(h,{handleChange:c}),Object(u.jsx)(b,{handlePress:t,handleChange:c,product:a}),Object(u.jsx)("button",{className:"shopPanel__button--clear",name:"clear",onClick:s,children:"CLEAR"}),Object(u.jsx)("button",{className:"shopPanel__button--add",name:"add",onClick:s,children:"ADD"})]})};n(13);var p=function(){var e=Object(c.useState)(1),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),r=Object(l.a)(s,2),j=r[0],d=r[1],h=Object(c.useState)("psc"),b=Object(l.a)(h,2),p=b[0],x=b[1],g=Object(c.useState)([]),m=Object(l.a)(g,2),v=m[0],f=m[1],C=Object(c.useState)(""),y=Object(l.a)(C,2),k=y[0],N=y[1],S=Object(c.useState)([]),_=Object(l.a)(S,2),q=_[0],P=_[1],F=Object(c.useRef)();Object(c.useEffect)((function(){return F.current.focus()}),[]),Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("shoppinglist"));if(e){var t=e.quantity,n=e.unit,c=e.list;d(t),f(n),P(c)}}),[]),Object(c.useEffect)((function(){localStorage.setItem("shoppinglist",JSON.stringify({quantity:Object(i.a)(j),unit:Object(i.a)(v),list:Object(i.a)(q)}))}),[q,v,j]);var E=function(e,t){"add"===e.target.name?(f([].concat(Object(i.a)(v),[p])),P([].concat(Object(i.a)(q),[k])),d([].concat(Object(i.a)(j),[n])),N(""),a(1),F.current.focus()):"clear"===e.target.name?(f([]),P([]),d([])):([j,v,q].map((function(e){return e.splice(t,1)})),P(Object(i.a)(q)))};return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{className:"shopHeader",children:"Create your own shopping list!"}),Object(u.jsx)(O,{handlePress:function(e){"Enter"===e.key&&(f([].concat(Object(i.a)(v),[p])),P([].concat(Object(i.a)(q),[k])),d([].concat(Object(i.a)(j),[n])),N(""),a(1),F.current.focus())},inputFocus:F,handleChange:function(e){"product"===e.target.name?N(e.target.value):"quantity"===e.target.name?a(e.target.value):x(e.target.value)},product:k,handleClick:E,quantity:n}),Object(u.jsx)(o,{unit:v,productQuantity:j,handleClick:E,productList:q}),Object(u.jsx)("div",{className:"shopFooter",children:Object(u.jsx)("span",{children:"\ud83d\uded2"})})]})};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.7f18ee61.chunk.js.map