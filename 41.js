webpackJsonp([41],{1190:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),l=n.n(o),i=n(19),u=n.n(i),s=n(111),m=n(6),b=n(15),p=n(261),d=n(12),f=(n.n(d),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()),E=function(e){function t(){return a(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),f(t,[{key:"_onClaim",value:function(e,t){t.preventDefault(),p.a.claimVestingBalance(this.props.account.id,this.props.vb,e)}},{key:"render",value:function(){var e=this.props,t=e.account,n=e.vb;if(!this.props.vb)return null;var a=void 0,c=void 0,r=void 0,o=void 0,i=void 0;n&&(i=n.balance.amount,a=m.b.getAsset(n.balance.asset_id),r=n.policy[1].coin_seconds_earned,c=n.policy[1].vesting_seconds,o=r/(c*i));t.name;return a&&i?l.a.createElement("div",{style:{paddingBottom:"1rem"}},l.a.createElement("div",{className:""},l.a.createElement("div",{className:"grid-content no-padding"},l.a.createElement(u.a,{component:"h5",content:"account.vesting.balance_number",id:n.id}),l.a.createElement("table",{className:"table key-value-table"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(u.a,{content:"account.member.cashback"})," "),l.a.createElement("td",null,l.a.createElement(s.a,{amount:n.balance.amount,asset:n.balance.asset_id}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(u.a,{content:"account.member.earned"})),l.a.createElement("td",null,b.a.format_number(b.a.get_asset_amount(r/86400,a),0)," ",l.a.createElement(u.a,{content:"account.member.coindays"}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(u.a,{content:"account.member.required"})),l.a.createElement("td",null,b.a.format_number(b.a.get_asset_amount(n.balance.amount*c/86400,a),0)," ",l.a.createElement(u.a,{content:"account.member.coindays"}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(u.a,{content:"account.member.remaining"})),l.a.createElement("td",null,b.a.format_number(c*(1-o)/86400,2)," days")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(u.a,{content:"account.member.available"})),l.a.createElement("td",null,b.a.format_number(100*o,2),"% / ",l.a.createElement(s.a,{amount:o*n.balance.amount,asset:a.get("id")}))),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"2",style:{textAlign:"right"}},l.a.createElement("button",{onClick:this._onClaim.bind(this,!1),className:"button outline"},l.a.createElement(u.a,{content:"account.member.claim"})),l.a.createElement("button",{onClick:this._onClaim.bind(this,!0),className:"button outline"},l.a.createElement(u.a,{content:"account.member.claim_all"}))))))))):null}}]),t}(l.a.Component),v=function(e){function t(){a(this,t);var e=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={vbs:null},e}return r(t,e),f(t,[{key:"componentWillMount",value:function(){var e=this;d.Apis.instance().db_api().exec("get_vesting_balances",[this.props.account.get("id")]).then(function(t){e.setState({vbs:t})}).catch(function(e){console.log("error:",e)})}},{key:"render",value:function(){var e=this.state.vbs;if(!e||!this.props.account||!this.props.account.get("vesting_balances"))return null;var t=this.props.account.toJS(),n=e.map(function(e){if(e.balance.amount)return l.a.createElement(E,{key:e.id,vb:e,account:t})}).filter(function(e){return!!e});return l.a.createElement("div",{className:"grid-content",style:{overflowX:"hidden"}},l.a.createElement("div",{className:"grid-content"},l.a.createElement(u.a,{content:"account.vesting.explain",component:"p"}),n.length?n:l.a.createElement("h4",{style:{paddingTop:"1rem"}},l.a.createElement(u.a,{content:"account.vesting.no_balances"}))))}}]),t}(l.a.Component);v.VestingBalance=E,t.default=v}});
//# sourceMappingURL=41.js.map