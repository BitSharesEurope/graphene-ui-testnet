webpackJsonp([23,35],{1096:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"b",function(){return y}),n.d(t,"a",function(){return g});var s=n(0),l=n.n(s),c=n(1),u=(n.n(c),n(13)),p=n.n(u),d=n(15),h=(n.n(d),n(18)),m=n(26),f=n(2),b=n.n(f),v=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),g=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),v(t,[{key:"render",value:function(){var e=this.props,t=e.isActive,n=e.index,a=e.changeTab,r=e.title,o=e.className,i=e.updatedTab,s=e.disabled,c=e.subText,u=p()({"is-active":t},o);return"string"==typeof r&&r.indexOf(".")>0&&(r=b.a.translate(r)),this.props.collapsed?("string"==typeof c&&(c=c.trim()),l.a.createElement("option",{value:n,"data-is-link-to":this.props.isLinkTo},l.a.createElement("span",{className:"tab-title"},r,i?"*":"",c&&" (",c&&c,c&&")"))):l.a.createElement("li",{className:u,onClick:s?null:a.bind(this,n,this.props.isLinkTo)},l.a.createElement("a",null,l.a.createElement("span",{className:"tab-title"},r,i?"*":""),c&&l.a.createElement("div",{className:"tab-subtext"},c)))}}]),t}(l.a.Component);g.propTypes={changeTab:s.PropTypes.func,isActive:s.PropTypes.bool.isRequired,index:s.PropTypes.number.isRequired,className:s.PropTypes.string,isLinkTo:s.PropTypes.string,subText:s.PropTypes.oneOfType([s.PropTypes.object,s.PropTypes.string])},g.defaultProps={isActive:!1,index:0,className:"",isLinkTo:"",subText:null};var y=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={activeTab:e.setting?e.viewSettings.get(e.setting,e.defaultActiveTab):e.defaultActiveTab,width:window.innerWidth},n._setDimensions=n._setDimensions.bind(n),n}return i(t,e),v(t,[{key:"componentDidMount",value:function(){this._setDimensions(),window.addEventListener("resize",this._setDimensions,{capture:!1,passive:!0})}},{key:"componentWillReceiveProps",value:function(e){var t=e.viewSettings.get(e.setting);t!==this.props.viewSettings.get(this.props.setting)&&this.setState({activeTab:t})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._setDimensions)}},{key:"_setDimensions",value:function(){var e=window.innerWidth;e!==this.state.width&&this.setState({width:e})}},{key:"_changeTab",value:function(e,t){if(e!==this.state.activeTab){if(""!==t)return void this.context.router.push(t);this.props.setting&&h.a.changeViewSetting(a({},this.props.setting,e)),this.setState({activeTab:e}),this.props.onChangeTab&&this.props.onChangeTab(e)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.contentClass,r=t.tabsClass,o=t.style,i=t.segmented,s=this.state.width<900&&l.a.Children.count(n)>2,c=null,u=l.a.Children.map(n,function(t,n){if(!t)return null;if(s&&t.props.disabled)return null;var a=n===e.state.activeTab;return a&&(c=t.props.children),l.a.cloneElement(t,{collapsed:s,isActive:a,changeTab:e._changeTab.bind(e),index:n})}).filter(function(e){return null!==e});return c||(c=u[0].props.children),l.a.createElement("div",{className:p()(this.props.actionButtons?"with-buttons":"",this.props.className)},l.a.createElement("div",{className:"service-selector"},l.a.createElement("ul",{style:o,className:p()("button-group no-margin",r,{segmented:i})},s?l.a.createElement("li",{style:{paddingLeft:10,paddingRight:10,minWidth:"15rem"}},l.a.createElement("select",{value:this.state.activeTab,style:{marginTop:10,marginBottom:10},className:"bts-select",onChange:function(t){var n=parseInt(t.target.value,10);e._changeTab(n,t.target[n].attributes["data-is-link-to"].value)}},u)):u,this.props.actionButtons?l.a.createElement("li",{className:"tabs-action-buttons"},this.props.actionButtons):null)),l.a.createElement("div",{className:p()("tab-content",a)},c))}}]),t}(l.a.Component);y.propTypes={setting:s.PropTypes.string,defaultActiveTab:s.PropTypes.number,segmented:s.PropTypes.bool},y.defaultProps={active:0,defaultActiveTab:0,segmented:!0,contentClass:"",style:{}},y.contextTypes={router:l.a.PropTypes.object.isRequired},y=Object(d.connect)(y,{listenTo:function(){return[m.a]},getProps:function(){return{viewSettings:m.a.getState().viewSettings}}})},147:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),s=n.n(i),l=n(15),c=(n.n(l),n(34)),u=n(23),p=n(1),d=n.n(p),h=n(210),m=n(378),f=n(18),b=n(45),v=n(374),g=n.n(v),y=n(26),E=n(103),T=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),k=n(218),_=function(e){var t=e.flag,n=e.width,a=void 0===n?50:n,r=e.height,o=void 0===r?50:r;return s.a.createElement("img",{height:o,width:a,src:"/language-dropdown/"+t.toUpperCase()+".png"})},w=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={step:1,locales:y.a.getState().defaults.locale,currentLocale:y.a.getState().settings.get("locale")},n}return o(t,e),T(t,[{key:"componentDidUpdate",value:function(){var e=c.a.getMyAccounts(),t=s.a.Children.count(this.props.children);this.props.router&&Array.isArray(e)&&0!==e.length&&0===t&&this.props.router.push("/account/"+this.props.currentAccount)}},{key:"componentWillMount",value:function(){var e=this;Object(m.a)(function(t){e.setState({incognito:t})})}},{key:"onSelect",value:function(e){this.props.router.push("/create-account/"+e)}},{key:"render",value:function(){var e=this,t=n(2),a=s.a.Children.count(this.props.children),r=s.a.createElement(g.a,null,s.a.createElement(g.a.Button,{title:"",style:{width:"64px"}},s.a.createElement("a",{style:{padding:"1rem",border:"none"},className:"button arrow-down"},s.a.createElement(_,{flag:this.state.currentLocale}))),s.a.createElement(g.a.Content,null,s.a.createElement("ul",{className:"no-first-element-top-border"},this.state.locales.map(function(t){return s.a.createElement("li",{key:t},s.a.createElement("a",{href:!0,onClick:function(n){n.preventDefault(),E.a.switchLocale(t),e.setState({currentLocale:t})}},s.a.createElement("div",{className:"table-cell"},s.a.createElement(_,{width:"20",height:"20",flag:t})),s.a.createElement("div",{className:"table-cell",style:{paddingLeft:10}},s.a.createElement(d.a,{content:"languages."+t}))))}))));return s.a.createElement("div",{className:"grid-block align-center"},s.a.createElement("div",{className:"grid-block shrink vertical"},s.a.createElement("div",{className:"grid-content shrink text-center account-creation"},s.a.createElement("div",null,s.a.createElement("img",{src:k})),0==a?null:s.a.createElement("div",null,s.a.createElement(d.a,{content:"header.create_account",component:"h4"})),1==a?null:s.a.createElement("div",null,s.a.createElement(d.a,{content:"account.intro_text_title",component:"h4"}),s.a.createElement(d.a,{unsafe:!0,content:"account.intro_text_1",component:"p"}),s.a.createElement("div",{className:"shrink text-center"},s.a.createElement("div",{className:"grp-menu-item overflow-visible account-drop-down"},s.a.createElement("div",{className:"grp-menu-item overflow-visible",style:{margin:"0 auto"},"data-intro":t.translate("walkthrough.language_flag")},r)))),a?null:s.a.createElement("div",{className:"grid-block account-login-options"},s.a.createElement(u.b,{id:"account_login_button",to:"/create-account/password",className:"button primary","data-intro":t.translate("walkthrough.create_cloud_wallet")},s.a.createElement(d.a,{content:"header.create_account"})),s.a.createElement("span",{className:"button hollow primary",onClick:function(){f.a.changeSetting({setting:"passwordLogin",value:!0}),b.a.unlock.defer()}},s.a.createElement(d.a,{content:"header.unlock_short"}))),a?null:s.a.createElement("div",{className:"additional-account-options"},s.a.createElement("h5",{style:{textAlign:"center"}},s.a.createElement(h.a,{string:"account.optional.formatter",keys:[{type:"link",value:"/wallet/backup/restore",translation:"account.optional.restore_link",dataIntro:t.translate("walkthrough.restore_account"),arg:"restore_link"},{type:"link",value:"/create-account/wallet",translation:"account.optional.restore_form",dataIntro:t.translate("walkthrough.create_local_wallet"),arg:"restore_form"}]}))),this.props.children)))}}]),t}(s.a.Component);t.default=Object(l.connect)(w,{listenTo:function(){return[c.a]},getProps:function(){return{currentAccount:c.a.getState().currentAccount||c.a.getState().passwordAccount}}})},1519:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var h=n(0),m=n.n(h),f=n(15),b=n(66),v=n(147),g=n(34),y=n(1096),E=n(10),T=n(8),k=n(26),_=n(207),w=n(23),S=n(3),O=n(1),N=n.n(O),P=n(13),C=n.n(P),B=n(18),D=n(29),A=n(33),j=n(84),M=n(25),x=n(132),U=n(55),R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},L=function(){function e(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{!a&&s.return&&s.return()}finally{if(r)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),H=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),I=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.statsInterval=null,e.state={imgError:!1},e}return i(t,e),H(t,[{key:"_checkStats",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{close:{}},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{close:{}};return e.volumeBase!==t.volumeBase||!T.a.are_equal_shallow(e.close&&e.close.base,t.close&&t.close.base)||!T.a.are_equal_shallow(e.close&&e.close.quote,t.close&&t.close.quote)}},{key:"shouldComponentUpdate",value:function(e,t){return this._checkStats(e.marketStats,this.props.marketStats)||e.base.get("id")!==this.props.base.get("id")||e.quote.get("id")!==this.props.quote.get("id")||e.visible!==this.props.visible||t.imgError!==this.state.imgError||e.starredMarkets.size!==this.props.starredMarkets}},{key:"componentWillMount",value:function(){this._setInterval()}},{key:"componentWillUnmount",value:function(){this._clearInterval()}},{key:"componentWillReceiveProps",value:function(e){e.base.get("id")===this.props.base.get("id")&&e.quote.get("id")===this.props.quote.get("id")||(this._clearInterval(),this._setInterval(e))}},{key:"_setInterval",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=e||this.props,n=t.base,a=t.quote;x.a.getMarketStats(n,a),this.statsChecked=new Date,this.statsInterval=setInterval(x.a.getMarketStats.bind(this,n,a),35e3)}},{key:"_clearInterval",value:function(){clearInterval(this.statsInterval)}},{key:"_onError",value:function(e){this.state.imgError||(this.refs[e.toLowerCase()].src="asset-symbols/bts.png",this.setState({imgError:!0}))}},{key:"_toggleFavoriteMarket",value:function(e,t){var n=e+"_"+t;this.props.starredMarkets.has(n)?B.a.removeStarMarket(e,t):B.a.addStarMarket(e,t)}},{key:"render",value:function(){var e=this.props,t=e.base,n=e.quote,a=e.marketStats,r=e.isHidden,o=e.inverted,i=e.visible,s=e.handleHide,l=e.handleFlip,c=function(e){var t=e.get("symbol");if("OPEN.BTC"===t||"GDEX.BTC"===t)return t;var n=e.get("symbol").split(".");return 2===n.length?n[1]:n[0]}(n),u=a?parseFloat(a.change)>0?"change-up":parseFloat(a.change)<0?"change-down":"":"",p=n.get("symbol")+"_"+t.get("symbol"),d=this.props.starredMarkets.has(p)?"gold-star":"grey-star";return m.a.createElement("tr",{style:{display:i?"":"none"}},m.a.createElement("td",null,m.a.createElement("div",{onClick:this._toggleFavoriteMarket.bind(this,n.get("symbol"),t.get("symbol"))},m.a.createElement(A.a,{style:{cursor:"pointer"},className:d,name:"fi-star"}))),m.a.createElement("td",{style:{textAlign:"left"}},m.a.createElement(w.b,{to:"/market/"+this.props.quote.get("symbol")+"_"+this.props.base.get("symbol")},m.a.createElement("img",{ref:c.toLowerCase(),className:"column-hide-small",onError:this._onError.bind(this,c),style:{maxWidth:20,marginRight:10},src:"/asset-symbols/"+c.toLowerCase()+".png"}),m.a.createElement(j.a,{dataPlace:"top",name:n.get("symbol")})," ",":"," ",m.a.createElement(j.a,{dataPlace:"top",name:t.get("symbol")}))),m.a.createElement("td",{style:{textAlign:"right"}},a&&a.price?T.a.price_text(a.price.toReal(),n,t):null),m.a.createElement("td",{style:{textAlign:"right"},className:C()(u)},a?a.change:null,"%"),m.a.createElement("td",{className:"column-hide-small",style:{textAlign:"right"}},a?T.a.format_volume(a.volumeBase,t.get("precision")):null),null===o?null:m.a.createElement("td",{className:"column-hide-small"},m.a.createElement("a",{onClick:l},m.a.createElement(A.a,{name:"shuffle"}))),m.a.createElement("td",null,m.a.createElement("a",{style:{marginRight:0},className:r?"action-plus":"order-cancel",onClick:s},m.a.createElement(A.a,{name:r?"plus-circle":"cross-circle",className:"icon-14px"}))))}}]),t}(m.a.Component);I.propTypes={quote:D.a.ChainAsset.isRequired,base:D.a.ChainAsset.isRequired},I.defaultProps={tempComponent:"tr"},I=Object(M.a)(I),I=Object(f.connect)(I,{listenTo:function(){return[_.a]},getProps:function(e){return{marketStats:_.a.getState().allMarketStats.get(e.marketId),starredMarkets:k.a.getState().starredMarkets}}});var X=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={filter:"",showFlip:!0,showHidden:!1,markets:[]},e.update=e.update.bind(e),e}return i(t,e),H(t,[{key:"componentWillReceiveProps",value:function(e){this.update(e)}},{key:"componentWillMount",value:function(){S.b.subscribe(this.update),this.update()}},{key:"componentWillUnmount",value:function(){S.b.unsubscribe(this.update)}},{key:"update",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=e||this.props,n=!t.forceDirection||t.handleFlip,a=t.markets.map(function(e){var a=L(e,2),r=a[0],o=a[1];if(t.forceDirection){var i=r+"_"+o;return{key:i,inverted:!n&&null,marketId:i,quote:r,base:o,isHidden:t.hiddenMarkets.includes(i)}}var s=U.a.getMarketName(S.b.getAsset(r),S.b.getAsset(o)),l=s.marketName,c=s.first,u=s.second;if(!c||!u)return null;var p=t.marketDirections.get(l);if(p){var d=[u,c];c=d[0],u=d[1]}return{key:l,inverted:p,marketId:c.get("symbol")+"_"+u.get("symbol"),quote:c.get("symbol"),base:u.get("symbol"),isHidden:t.hiddenMarkets.includes(l)}}).filter(function(e){return null!==e});this.setState({showFlip:n,markets:a})}},{key:"_toggleShowHidden",value:function(e){this.state.showHidden!==e&&this.setState({showHidden:e})}},{key:"_handleFilterInput",value:function(e){e.preventDefault(),this.setState({filter:e.target.value.toUpperCase()})}},{key:"_handleHide",value:function(e,t){if(this.props.handleHide)return this.props.handleHide(e,t);B.a.hideMarket(e.key,t)}},{key:"_handleFlip",value:function(e,t){if(this.props.handleFlip)return this.props.handleFlip(e,t);B.a.changeMarketDirection(a({},e.key,t))}},{key:"render",value:function(){var e=this,t=this.state,n=t.markets,a=t.showFlip,r=t.showHidden,o=t.filter;this.loaded=!0;var i=0;return n=n.map(function(t){var n=!0;if(t.isHidden!==e.state.showHidden)n=!1;else if(o){var a=S.b.getAsset(t.quote),r=S.b.getAsset(t.base),s=T.a.replaceName(a),l=s.isBitAsset,c=T.a.replaceName(r),u=c.isBitAsset,p=t.quote,d=t.base;l&&(p="bit"+p),u&&(d="bit"+d);var h=o.includes(":");if(h){var f=o.split(":")[0].trim(),b=o.split(":")[1].trim();n=p.toLowerCase().includes(String(f).toLowerCase())&&d.toLowerCase().includes(String(b).toLowerCase())}else n=p.toLowerCase().includes(String(o).toLowerCase())||d.toLowerCase().includes(String(o).toLowerCase())}return n&&++i,m.a.createElement(I,R({},t,{visible:n,handleHide:e._handleHide.bind(e,t,!t.isHidden),handleFlip:e._handleFlip.bind(e,t,!t.inverted)}))}),m.a.createElement("div",null,m.a.createElement("div",{className:"header-selector"},m.a.createElement("div",{className:"filter inline-block"},m.a.createElement("input",{type:"text",placeholder:"Filter",onChange:this._handleFilterInput.bind(this)})),m.a.createElement("div",{className:"selector inline-block"},m.a.createElement("div",{className:C()("inline-block",{inactive:r}),onClick:this._toggleShowHidden.bind(this,!1)},m.a.createElement(N.a,{content:"account.hide_hidden"})),m.a.createElement("div",{className:C()("inline-block",{inactive:!r}),onClick:this._toggleShowHidden.bind(this,!0)},m.a.createElement(N.a,{content:"account.show_hidden"})))),m.a.createElement("table",{className:"table dashboard-table table-hover"},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",{style:{textAlign:"left",width:"75px"}}),m.a.createElement("th",{style:{textAlign:"left"}},m.a.createElement(N.a,{component:"span",content:"account.asset"})),m.a.createElement("th",{style:{textAlign:"right"}},m.a.createElement(N.a,{content:"exchange.price"})),m.a.createElement("th",{style:{textAlign:"right"}},m.a.createElement(N.a,{content:"account.hour_24_short"})),m.a.createElement("th",{className:"column-hide-small",style:{textAlign:"right"}},m.a.createElement(N.a,{content:"exchange.volume"})),a?m.a.createElement("th",{className:"column-hide-small"},m.a.createElement(N.a,{content:"exchange.flip"})):null,m.a.createElement("th",null,m.a.createElement(N.a,{content:r?"account.perm.show":"exchange.hide"})))),m.a.createElement("tbody",null,m.a.createElement("tr",{className:"table-empty",style:{display:i?"none":""}},m.a.createElement("td",{colSpan:a?6:5},m.a.createElement(N.a,{content:"dashboard.table_empty"}))),n)))}}]),t}(m.a.Component),G=Object(f.connect)(X,{listenTo:function(){return[k.a]},getProps:function(){var e=k.a.getState();return{marketDirections:e.marketDirections,hiddenMarkets:e.hiddenMarkets}}}),q=function(){function e(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{!a&&s.return&&s.return()}finally{if(r)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),Y=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),W=function(e){function t(){return s(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),Y(t,[{key:"render",value:function(){var e=this.props.starredMarkets,t=[];if(e.size){var n=!0,a=!1,r=void 0;try{for(var o,i=e.values()[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var s=o.value;t.push([s.quote,s.base])}}catch(e){a=!0,r=e}finally{try{!n&&i.return&&i.return()}finally{if(a)throw r}}}return m.a.createElement(G,{markets:t,forceDirection:!0})}}]),t}(m.a.Component);W=Object(f.connect)(W,{listenTo:function(){return[k.a]},getProps:function(){return{starredMarkets:k.a.getState().starredMarkets}}});var F=function(e){function t(){s(this,t);var e=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));e.marketsByChain={"4018d784":[["USD","BTS"],["USD","OPEN.BTC"],["USD","OPEN.USDT"],["USD","OPEN.ETH"],["USD","OPEN.DASH"],["USD","GOLD"],["USD","HERO"],["USD","GDEX.BTC"],["USD","GDEX.ETH"],["USD","GDEX.EOS"],["USD","GDEX.BTO"],["CNY","BTS"],["CNY","OPEN.BTC"],["CNY","USD"],["CNY","OPEN.ETH"],["CNY","YOYOW"],["CNY","OCT"],["CNY","GDEX.BTC"],["CNY","GDEX.ETH"],["CNY","GDEX.EOS"],["CNY","GDEX.BTO"],["CNY","GDEX.BTM"],["OPEN.BTC","BTS"],["OPEN.BTC","OPEN.ETH"],["OPEN.BTC","OPEN.DASH"],["OPEN.BTC","BLOCKPAY"],["OPEN.BTC","OPEN.DGD"],["OPEN.BTC","OPEN.STEEM"],["BTS","OPEN.ETH"],["BTS","OPEN.EOS"],["BTS","PPY"],["BTS","OPEN.STEEM"],["BTS","OBITS"],["BTS","RUBLE"],["BTS","HERO"],["BTS","OCT"],["BTS","SILVER"],["BTS","GOLD"],["BTS","BLOCKPAY"],["BTS","BTWTY"],["BTS","SMOKE"],["BTS","GDEX.BTC"],["BTS","GDEX.ETH"],["BTS","GDEX.EOS"],["BTS","GDEX.BTO"],["KAPITAL","OPEN.BTC"],["USD","OPEN.STEEM"],["USD","OPEN.MAID"],["OPEN.USDT","OPEN.BTC"],["OPEN.BTC","OPEN.MAID"],["BTS","OPEN.MAID"],["BTS","OPEN.HEAT"],["BTS","OPEN.INCENT"],["HEMPSWEET","OPEN.BTC"],["KAPITAL","BTS"],["BTS","RUDEX.STEEM"],["USD","RUDEX.STEEM"],["BTS","RUDEX.SBD"],["BTS","RUDEX.KRM"],["USD","RUDEX.KRM"],["RUBLE","RUDEX.GOLOS"],["CNY","RUDEX.GOLOS"],["RUBLE","RUDEX.GBG"],["CNY","RUDEX.GBG"],["BTS","RUDEX.MUSE"],["BTS","RUDEX.TT"],["BTS","RUDEX.SCR"],["BTS","ZEPH"]],"39f5e2ed":[["TEST","PEG.FAKEUSD"],["TEST","BTWTY"]]};var n=E.Apis.instance().chain_id;return n&&(n=n.substr(0,8)),e.state={chainID:n,markets:[]},e.update=e.update.bind(e),e}return c(t,e),Y(t,[{key:"shouldComponentUpdate",value:function(e){return!T.a.are_equal_shallow(e,this.props)}},{key:"componentWillMount",value:function(){this.update()}},{key:"componentWillReceiveProps",value:function(e){this.update(e)}},{key:"update",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=e||this.props,n=t.lowVolumeMarkets,a=this.marketsByChain[this.state.chainID]||this.marketsByChain["4018d784"];a=a.filter(function(e){var t=q(e,2),a=t[0],r=t[1];return!(n.get(a+"_"+r)||n.get(r+"_"+a))}),this.setState({markets:a})}},{key:"render",value:function(){return m.a.createElement(G,{markets:this.state.markets})}}]),t}(m.a.Component);F=Object(f.connect)(F,{listenTo:function(){return[_.a]},getProps:function(){return{lowVolumeMarkets:_.a.getState().lowVolumeMarkets}}});var K=(function(e){function t(){return s(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}c(t,e),Y(t,[{key:"render",value:function(){return m.a.createElement(G,{markets:[]})}}])}(m.a.Component),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()),z=function(e){function t(){return u(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,e),K(t,[{key:"render",value:function(){var e=this.props,t=e.myActiveAccounts,n=e.myHiddenAccounts,a=e.accountsReady,r=e.passwordAccount;return a?t.size+n.size+(r?1:0)?m.a.createElement("div",{className:"grid-block page-layout"},m.a.createElement("div",{className:"grid-block no-padding"},m.a.createElement("div",{className:"grid-content app-tables no-padding",ref:"appTables"},m.a.createElement("div",{className:"content-block small-12"},m.a.createElement("div",{className:"tabs-container generic-bordered-box"},m.a.createElement(y.b,{defaultActiveTab:1,segmented:!1,setting:"dashboardTab",className:"account-tabs",tabsClass:"account-overview no-padding bordered-header content-block"},m.a.createElement(y.a,{title:"dashboard.starred_markets"},m.a.createElement(W,null)),m.a.createElement(y.a,{title:"dashboard.featured_markets"},m.a.createElement(F,null)))))))):m.a.createElement(v.default,null):m.a.createElement(b.a,null)}}]),t}(m.a.Component);t.default=Object(f.connect)(z,{listenTo:function(){return[g.a]},getProps:function(){var e=g.a.getState(),t=e.myActiveAccounts,n=e.myHiddenAccounts,a=e.passwordAccount,r=e.accountsLoaded,o=e.refsLoaded;return{myActiveAccounts:t,myHiddenAccounts:n,passwordAccount:a,accountsReady:r&&o}}})}});
//# sourceMappingURL=23.js.map