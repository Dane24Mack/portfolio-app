(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),r=c(9),s=c.n(r),d=(c(14),c(15),c(2)),o=c(3),a=c(4),l=c(6),u=c(5),j=c(7),h=c(0),p=[{id:1,completed:!0,description:"The Mandalorian - Season 2"},{id:2,completed:!1,description:"Cobra Kai - Season 3"},{id:3,completed:!1,description:"Chaos Walking"},{id:4,completed:!0,description:"Love and Monsters"},{id:5,completed:!1,description:"WandaVision - Season 1"},{id:6,completed:!0,description:"Avatar: The Last Airbender - Season 2"},{id:7,completed:!1,description:"Star Wars Rebels - Season 1"},{id:8,completed:!0,description:"Ant-Man and the Wasp"},{id:9,completed:!0,description:"Jurassic World"},{id:10,completed:!0,description:"The Goonies"}],b=function(e){Object(l.a)(c,e);var t=Object(u.a)(c);function c(e){var n;Object(o.a)(this,c),(n=t.call(this,e)).watchedItem=function(e){n.setState((function(t){var c=Object(j.a)(t.watchList),n=c.findIndex((function(t){return t.id==e}));return c[n]=Object(d.a)(Object(d.a)({},c[n]),{},{completed:!c[n].completed}),{watchList:Object(j.a)(c)}}))},n.handleKeyPress=function(e){console.log("Pressed"),console.log(e.key),"Enter"==e.key&&n.addItem()},n.addItem=function(){var e=n.state.inputRef.current.value;n.setState((function(t){return{watchList:[].concat(Object(j.a)(t.watchList),[{completed:!1,description:e,id:t.curId}]),curId:t.curId+1}})),n.state.inputRef.current.value=""};var r=i.a.createRef(),s=i.a.createRef(),a=i.a.createRef();return n.state={watchList:p,curId:p.length+1,inputRef:r,checkRef:s,filterRef:a,filtered:!1},n}return Object(a.a)(c,[{key:"render",value:function(){var e=this,t=this.state.watchList;return this.state.filtered&&(t=t.filter((function(e){return!e.completed}))),t=t.map((function(t){return Object(h.jsx)("div",{children:Object(h.jsxs)("label",{children:[Object(h.jsx)("input",{ref:e.state.checkRef,type:"checkbox",onChange:function(){return e.watchedItem(t.id)},defaultChecked:t.completed}),Object(h.jsx)("span",{style:t.completed?{textDecoration:"line-through"}:void 0,children:t.description})]})},t.id)})),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"To Watch List - Film & TV"}),Object(h.jsxs)("label",{children:[Object(h.jsx)("input",{ref:this.state.filterRef,type:"checkbox",onChange:function(){return e.setState((function(e){return{filtered:!e.filtered}}))},defaultChecked:!1}),"Filter By Watch Status"]}),Object(h.jsx)("hr",{}),Object(h.jsx)("div",{style:{padding:"5px"},children:t}),Object(h.jsx)("hr",{}),Object(h.jsx)("input",{onKeyPress:function(t){return e.handleKeyPress(t)},ref:this.state.inputRef}),Object(h.jsx)("button",{onClick:function(){return e.addItem()},children:"Add New Item"})]})}}]),c}(i.a.Component),f=function(e){Object(l.a)(c,e);var t=Object(u.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=t.call(this,e)).state={value:0},n}return Object(a.a)(c,[{key:"addOne",value:function(){this.setState((function(e){return{value:e.value+1}}))}},{key:"resetNum",value:function(){this.setState((function(e){return{value:e.value=0}}))}},{key:"render",value:function(){var e=this;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"My Repetition Exercise"}),Object(h.jsxs)("p",{children:["Reps: ",this.state.value]}),Object(h.jsx)("button",{onClick:function(){return e.addOne()},children:"Complete Rep"}),Object(h.jsx)("button",{onClick:function(){return e.resetNum()},children:"Reset"})]})}}]),c}(i.a.Component),O=[{id:1,selected:!1,description:"Baby Food"},{id:2,selected:!1,description:"Bacon"},{id:3,selected:!1,description:"Bread"},{id:4,selected:!1,description:"Butter"},{id:5,selected:!1,description:"Cereal"},{id:6,selected:!1,description:"Cheese"},{id:7,selected:!1,description:"Cookies"},{id:8,selected:!1,description:"Coffee"},{id:9,selected:!1,description:"Cream"},{id:10,selected:!1,description:"Eggs"},{id:11,selected:!1,description:"Flour"},{id:12,selected:!1,description:"Frozen Food"},{id:13,selected:!1,description:"Fruit"},{id:14,selected:!1,description:"Juices"},{id:15,selected:!1,description:"Meats"},{id:16,selected:!1,description:"Milk"},{id:17,selected:!1,description:"Noodles"},{id:18,selected:!1,description:"Oil"},{id:19,selected:!1,description:"Onions"},{id:20,selected:!1,description:"Pepper"},{id:21,selected:!1,description:"Potatoes"},{id:22,selected:!1,description:"Rice"},{id:23,selected:!1,description:"Salt"},{id:24,selected:!1,description:"Soap"},{id:25,selected:!1,description:"Soups"},{id:26,selected:!1,description:"Spices"},{id:27,selected:!1,description:"Sugar"},{id:28,selected:!1,description:"Tea"},{id:29,selected:!1,description:"Vegetable"},{id:30,selected:!1,description:"Vinegar"}],x=function(e){Object(l.a)(c,e);var t=Object(u.a)(c);function c(e){var n;Object(o.a)(this,c),(n=t.call(this,e)).pickedItem=function(e){n.setState((function(t){var c=Object(j.a)(t.groceryList),n=c.findIndex((function(t){return t.id==e}));return c[n]=Object(d.a)(Object(d.a)({},c[n]),{},{selected:!c[n].selected}),{groceryList:Object(j.a)(c)}}))};var r=i.a.createRef();return n.state={groceryList:O,curId:O.length+1,filterRef:r,filtered:!1},n}return Object(a.a)(c,[{key:"render",value:function(){var e=this,t=this.state.groceryList;return this.state.filtered&&(t=t.filter((function(e){return!e.selected}))),t=t.map((function(t){return Object(h.jsx)("div",{children:Object(h.jsxs)("label",{children:[Object(h.jsx)("input",{ref:e.state.checkRef,type:"checkbox",onChange:function(){return e.pickedItem(t.id)},defaultChecked:t.selected}),Object(h.jsx)("span",{children:t.description})]})},t.id)})),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Only The Basics -- Grocery List"}),Object(h.jsx)("h3",{children:"Mark What You Don't Need"}),Object(h.jsxs)("label",{children:[Object(h.jsx)("input",{ref:this.state.filterRef,type:"checkbox",onChange:function(){return e.setState((function(e){return{filtered:!e.filtered}}))},defaultChecked:!1}),"View Your Cart"]}),Object(h.jsx)("hr",{}),Object(h.jsx)("div",{style:{padding:"5px"},children:t}),Object(h.jsx)("hr",{})]})}}]),c}(i.a.Component),m="menu",v="watch_screen",k="rep_screen",S="shop_screen",g=function(e){Object(l.a)(c,e);var t=Object(u.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=t.call(this,e)).state={currentScreen:m},n}return Object(a.a)(c,[{key:"render",value:function(){var e,t=this;switch(this.state.currentScreen){case m:e=Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"Welcome to the App Zone!"}),Object(h.jsx)("h3",{children:"Select A Feature:"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)("button",{onClick:function(){return t.setState({currentScreen:v})},children:"Going To Watch List"})}),Object(h.jsx)("li",{children:Object(h.jsx)("button",{onClick:function(){return t.setState({currentScreen:k})},children:"Repetition Exercise"})}),Object(h.jsx)("li",{children:Object(h.jsx)("button",{onClick:function(){return t.setState({currentScreen:S})},children:"Simple Grocery List"})})]})]});break;case v:e=Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b,Object(d.a)({},this.state.selectedItem)),Object(h.jsx)("button",{onClick:function(){return t.setState({currentScreen:m})},children:"Return"})]});break;case k:e=Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,Object(d.a)({},this.state.selectedItem)),Object(h.jsx)("button",{onClick:function(){return t.setState({currentScreen:m})},children:"Return"})]});break;case S:e=Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(x,Object(d.a)({},this.state.selectedItem)),Object(h.jsx)("button",{onClick:function(){return t.setState({currentScreen:m})},children:"Return"})]})}return e}}]),c}(i.a.Component);var C=function(){return Object(h.jsx)(g,{})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root")),y()}},[[17,1,2]]]);
//# sourceMappingURL=main.d232c4db.chunk.js.map