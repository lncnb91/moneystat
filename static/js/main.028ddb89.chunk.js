(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(t,e,a){t.exports=a(45)},23:function(t,e,a){},24:function(t,e,a){},45:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),l=a(14),s=a.n(l),r=(a(23),a(2)),c=a(3),i=a(5),m=a(4),u=a(6),h=(a(24),a(15)),p=a.n(h),b=function(t){function e(){return Object(r.a)(this,e),Object(i.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"col-lg-3 col-xs-6"},o.a.createElement("div",{className:"small-box ".concat(this.props.colorClass)},o.a.createElement("div",{className:"inner"},o.a.createElement("h3",null,this.props.amount,o.a.createElement("sup",null,"\u0111")),o.a.createElement("p",null,this.props.title)),o.a.createElement("div",{className:"icon"},o.a.createElement("i",{className:"ion ".concat(this.props.iconClass)})),o.a.createElement("a",{href:"#",className:"small-box-footer"},"More info ",o.a.createElement("i",{className:"fa fa-arrow-circle-right"}))))}}]),e}(n.Component),d=function(t){function e(){var t,a;Object(r.a)(this,e);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(o)))).formatNumber=function(t){return t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")},a}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"row"},o.a.createElement(b,{amount:this.formatNumber(this.props.budget),title:"Budget",colorClass:"bg-aqua",iconClass:"ion-cash"}),o.a.createElement(b,{amount:this.formatNumber(this.props.total_spent),title:"Total spent",colorClass:"bg-green",iconClass:"ion-ios-cart"}),o.a.createElement(b,{amount:this.formatNumber(this.props.wallet_balance),title:"Wallet balance",colorClass:"bg-yellow",iconClass:"ion-home"}),o.a.createElement(b,{amount:this.formatNumber(this.props.last_month_spent),title:"Last month spent",colorClass:"bg-red",iconClass:"ion-calendar"}))}}]),e}(n.Component),f=a(16),g=a.n(f),v=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(i.a)(this,Object(m.a)(e).call(this,t))).state={smallBox:{budget:0,total_spent:0,wallet_balance:0,last_month_spent:0}},a}return Object(u.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this;p.a.get("https://moneystat-api.herokuapp.com/api/v1/dashboards.json?wallet_id=1").then(function(e){var a=g()(t.state.smallBox,{$set:e.data.small_box});t.setState({smallBox:a})}).catch(function(t){return console.log(t)})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(d,{budget:this.state.smallBox.budget,total_spent:this.state.smallBox.total_spent,wallet_balance:this.state.smallBox.wallet_balance,last_month_spent:this.state.smallBox.last_month_spent}))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.028ddb89.chunk.js.map