(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),l=(n(16),function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,23)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)})}),i=(n(18),n(1)),s=n(2),u=n(4),h=n(3),m=n(5),d=function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(a,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},b=function(e){var t=e.robots,n=t.map(function(e,n){return r.a.createElement(d,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})});return r.a.createElement("div",null,n)},f=function(e){e.searchField;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},p=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"0px solid black",height:"500px"}},e.children)},g=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={hasError:!1},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops. That is not good"):this.props.children}}]),t}(a.Component),E=(n(20),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({robots:t})})}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,a=t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(f,{searchChange:this.onSearchChange}),r.a.createElement(p,null,r.a.createElement(g,null,r.a.createElement(b,{robots:a})))):r.a.createElement("h1",null,"Loading")}}]),t}(r.a.Component));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),l()},8:function(e,t,n){e.exports=n(22)}},[[8,3,2]]]);
//# sourceMappingURL=main.af57aa9e.chunk.js.map