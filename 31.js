webpackJsonp([31],{1513:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"b",function(){return g}),n.d(t,"a",function(){return v});var s=n(1),c=n.n(s),l=n(3),u=n.n(l),p=n(29),m=n.n(p),b=n(26),d=(n.n(b),n(27)),f=n(38),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),v=function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),h(t,[{key:"render",value:function(){var e=this.props,t=e.isActive,n=e.index,a=e.changeTab,i=e.title,r=e.className,o=e.disabled,s=m()({"is-active":t},r);return this.props.collapsed?c.a.createElement("option",{value:n,"data-is-link-to":this.props.isLinkTo},"string"==typeof i&&i.indexOf(".")>0?c.a.createElement(u.a,{className:"tab-title",content:i}):c.a.createElement("span",{className:"tab-title"},i)):c.a.createElement("li",{className:s,onClick:o?null:a.bind(this,n,this.props.isLinkTo)},c.a.createElement("a",null,"string"==typeof i&&i.indexOf(".")>0?c.a.createElement(u.a,{className:"tab-title",content:i}):c.a.createElement("span",{className:"tab-title"},i),this.props.subText?c.a.createElement("div",{className:"tab-subtext"},this.props.subText):null))}}]),t}(c.a.Component);v.propTypes={changeTab:s.PropTypes.func,isActive:s.PropTypes.bool.isRequired,index:s.PropTypes.number.isRequired,className:s.PropTypes.string,isLinkTo:s.PropTypes.string},v.defaultProps={isActive:!1,index:0,className:"",isLinkTo:""};var g=function(e){function t(e){i(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={activeTab:e.setting?e.viewSettings.get(e.setting,e.defaultActiveTab):e.defaultActiveTab,width:window.innerWidth},n._setDimensions=n._setDimensions.bind(n),n}return o(t,e),h(t,[{key:"componentDidMount",value:function(){this._setDimensions(),window.addEventListener("resize",this._setDimensions,{capture:!1,passive:!0})}},{key:"componentWillReceiveProps",value:function(e){var t=e.viewSettings.get(e.setting);t!==this.props.viewSettings.get(this.props.setting)&&this.setState({activeTab:t})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._setDimensions)}},{key:"_setDimensions",value:function(){var e=window.innerWidth;e!==this.state.width&&this.setState({width:e})}},{key:"_changeTab",value:function(e,t){if(e!==this.state.activeTab){if(""!==t)return void this.context.router.push(t);this.props.setting&&d.a.changeViewSetting(a({},this.props.setting,e)),this.setState({activeTab:e}),this.props.onChangeTab&&this.props.onChangeTab(e)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.contentClass,i=t.tabsClass,r=t.style,o=t.segmented,s=this.state.width<900&&c.a.Children.count(n)>2,l=null,u=[],p=c.a.Children.map(n,function(t,n){if(!t)return null;if(s&&t.props.disabled)return null;var a=n===e.state.activeTab;return a&&(l=t.props.children),c.a.cloneElement(t,{collapsed:s,isActive:a,changeTab:e._changeTab.bind(e),index:n})}).filter(function(e){return e&&u.push(e.props.index),null!==e});return l||(l=p[0].props.children),c.a.createElement("div",{className:m()(this.props.actionButtons?"with-buttons":"",this.props.className)},c.a.createElement("div",{className:"service-selector"},c.a.createElement("ul",{style:r,className:m()("button-group no-margin",i,{segmented:o})},s?c.a.createElement("li",{style:{paddingLeft:10,paddingRight:10,minWidth:"15rem"}},c.a.createElement("select",{value:this.state.activeTab,style:{marginTop:10,marginBottom:10},className:"bts-select",onChange:function(t){var n=parseInt(t.target.value,10);e._changeTab(n,t.target[n].attributes["data-is-link-to"].value)}},p)):p,this.props.actionButtons?c.a.createElement("li",{className:"tabs-action-buttons"},this.props.actionButtons):null)),c.a.createElement("div",{className:a+" tab-content"},l))}}]),t}(c.a.Component);g.propTypes={setting:s.PropTypes.string,defaultActiveTab:s.PropTypes.number,segmented:s.PropTypes.bool},g.defaultProps={active:0,defaultActiveTab:0,segmented:!0,contentClass:"",style:{}},g.contextTypes={router:c.a.PropTypes.object.isRequired},g=Object(b.connect)(g,{listenTo:function(){return[f.a]},getProps:function(){return{viewSettings:f.a.getState().viewSettings}}})},1873:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),s=n.n(o),c=n(3),l=n.n(c),u=n(68),p=n(4),m=n(16),b=n(71),d=n(8),f=(n.n(d),n(1513)),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),v=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),h(t,[{key:"_onClaim",value:function(e,t){var n=this;t.preventDefault(),b.a.claimVestingBalance(this.props.account.id,this.props.vb,e).then(function(){"function"==typeof n.props.handleChanged&&n.props.handleChanged()})}},{key:"render",value:function(){var e=this.props.vb;if(!this.props.vb)return null;var t=void 0,n=void 0,a=void 0,i=void 0,r=void 0;return e&&(r=e.balance.amount,t=p.b.getAsset(e.balance.asset_id),a=e.policy[1].coin_seconds_earned,n=e.policy[1].vesting_seconds,i=0===n?1:a/(n*r)),t&&r?s.a.createElement("div",null,s.a.createElement(l.a,{component:"h5",content:"account.vesting.balance_number",id:e.id}),s.a.createElement("table",{className:"table key-value-table"},s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement(l.a,{content:"account.member.cashback"})),s.a.createElement("td",null,s.a.createElement(u.a,{amount:e.balance.amount,asset:e.balance.asset_id}))),s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement(l.a,{content:"account.member.earned"})),s.a.createElement("td",null,m.a.format_number(m.a.get_asset_amount(a/86400,t),0)," ",s.a.createElement(l.a,{content:"account.member.coindays"}))),s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement(l.a,{content:"account.member.required"})),s.a.createElement("td",null,m.a.format_number(m.a.get_asset_amount(e.balance.amount*n/86400,t),0)," ",s.a.createElement(l.a,{content:"account.member.coindays"}))),s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement(l.a,{content:"account.member.remaining"})),s.a.createElement("td",null,m.a.format_number(n*(1-i)/86400||0,2)," days")),s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement(l.a,{content:"account.member.available"})),s.a.createElement("td",null,m.a.format_number(100*i,2),"% / ",s.a.createElement(u.a,{amount:i*e.balance.amount,asset:t.get("id")}))),s.a.createElement("tr",null,s.a.createElement("td",{colSpan:"2",style:{textAlign:"right"}},s.a.createElement("button",{onClick:this._onClaim.bind(this,!1),className:"button"},s.a.createElement(l.a,{content:"account.member.claim"}))))))):null}}]),t}(s.a.Component),g=function(e){function t(){a(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={vbs:null},e}return r(t,e),h(t,[{key:"componentWillMount",value:function(){this.retrieveVestingBalances.call(this,this.props.account.get("id"))}},{key:"componentWillUpdate",value:function(e){var t=e.account.get("id");t!==this.props.account.get("id")&&this.retrieveVestingBalances.call(this,t)}},{key:"retrieveVestingBalances",value:function(e){var t=this;e=e||this.props.account.get("id"),d.Apis.instance().db_api().exec("get_vesting_balances",[e]).then(function(e){t.setState({vbs:e})}).catch(function(e){console.log("error:",e)})}},{key:"render",value:function(){var e=this,t=this.state.vbs;if(!t||!this.props.account||!this.props.account.get("vesting_balances"))return null;var n=this.props.account.toJS(),a=t.map(function(t){if(t.balance.amount)return s.a.createElement(v,{key:t.id,vb:t,account:n,handleChanged:e.retrieveVestingBalances.bind(e)})}).filter(function(e){return!!e});return s.a.createElement("div",{className:"grid-content app-tables no-padding",ref:"appTables"},s.a.createElement("div",{className:"content-block small-12"},s.a.createElement("div",{className:"tabs-container generic-bordered-box"},s.a.createElement(f.b,{segmented:!1,setting:"vestingTab",className:"account-tabs",tabsClass:"account-overview bordered-header content-block"},s.a.createElement(f.a,{title:"account.vesting.title"},s.a.createElement(l.a,{content:"account.vesting.explain",component:"p"}),a.length?a:s.a.createElement("h4",{style:{paddingTop:"1rem"}},s.a.createElement(l.a,{content:"account.vesting.no_balances"})))))))}}]),t}(s.a.Component);g.VestingBalance=v,t.default=g}});
//# sourceMappingURL=31.js.map