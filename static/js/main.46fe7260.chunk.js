(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(t,e,a){t.exports=a(17)},,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),r=a(7),c=a.n(r),o=(a(14),a(1)),l=a(2),s=a(4),u=a(3),b=a(5),m=(a(15),a(16),function(t){function e(t){var a;Object(o.a)(this,e);var n=(a=Object(s.a)(this,Object(u.a)(e).call(this,t))).props.children.map(function(t,e){return{title:t.props.title,text:t.props.children,id:e}});return a.state={tabs:n,activeTab:n[0]},a}return Object(b.a)(e,t),Object(l.a)(e,[{key:"setTab",value:function(t){var e=this.state.tabs.find(function(e){return e.title===t});this.setState({activeTab:e})}},{key:"render",value:function(){var t=this,e=this.state.tabs.map(function(e){return i.a.createElement("li",{className:"Tabs__tab-title",key:e.id,onClick:function(){return t.setTab(e.title)}},e.title)});return i.a.createElement("div",{className:"Tabs"},i.a.createElement("ul",{className:"Tabs__tabs-list"},e),i.a.createElement("div",null,this.state.activeTab.text))}}]),e}(i.a.Component)),h=function(t){function e(){return Object(o.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(b.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"Tabs__tab"},this.props.children)}}]),e}(i.a.Component),p=function(t){function e(){return Object(o.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(b.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(m,null,i.a.createElement(h,{title:"Tab 1"},"Some text 1"),i.a.createElement(h,{title:"Tab 2"},"Some text 2"),i.a.createElement(h,{title:"Tab 3"},"Some text 3")),i.a.createElement(m,null,i.a.createElement(h,{title:"Tab 1"},"Some text 1"),i.a.createElement(h,{title:"Tab 2"},"Some text 2"),i.a.createElement(h,{title:"Tab 3"},"Some text 3")))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.46fe7260.chunk.js.map