webpackJsonp([0],{174:function(e,t,a){"use strict";function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),a.d(t,"WalletManager",function(){return b}),a.d(t,"WalletOptions",function(){return y}),a.d(t,"ChangeActiveWallet",function(){return k}),a.d(t,"WalletDelete",function(){return g});var r=a(1),o=a.n(r),s=a(41),i=a(65),u=(a.n(i),a(261)),m=a(168),d=a(19),p=a.n(d),w=a(48),E=a.n(w),h=a(22),f=a.n(h),_=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),v={listenTo:function(){return[m.a]},getProps:function(){return m.a.getState()}},b=function(e){function t(){return l(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),_(t,[{key:"getTitle",value:function(){switch(this.props.location.pathname){case"/wallet/create":return"wallet.create_wallet";case"/wallet/backup/create":return"wallet.create_backup";case"/wallet/backup/restore":return"wallet.restore_backup";case"/wallet/backup/brainkey":return"wallet.backup_brainkey";case"/wallet/delete":return"wallet.delete_wallet";case"/wallet/change-password":return"wallet.change_password";case"/wallet/import-keys":return"wallet.import_keys";default:return"wallet.console"}}},{key:"render",value:function(){return o.a.createElement("div",{className:"grid-block vertical"},o.a.createElement("div",{className:"grid-container",style:{maxWidth:"40rem"}},o.a.createElement("div",{className:"content-block center-content"},o.a.createElement("div",{className:"page-header"},o.a.createElement(p.a,{component:"h3",content:this.getTitle()})),o.a.createElement("div",{className:"content-block"},this.props.children))))}}]),t}(r.Component);b=a.i(i.connect)(b,v);var y=function(e){function t(){return l(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),_(t,[{key:"render",value:function(){var e=!!this.props.current_wallet,t=this.props.wallet_names.size>1,a=this.props.current_wallet?this.props.current_wallet.toUpperCase():"";return o.a.createElement("span",null,o.a.createElement("div",{className:"grid-block"},o.a.createElement("div",{className:"grid-content"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-content"},o.a.createElement("label",null,o.a.createElement(p.a,{content:"wallet.active_wallet"}),":"),o.a.createElement("div",null,a),o.a.createElement("br",null),t?o.a.createElement(s.f,{to:"/wallet/change"},o.a.createElement("div",{className:"button outline success"},o.a.createElement(p.a,{content:"wallet.change_wallet"}))):null))),o.a.createElement("div",{className:"grid-content"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-content"},o.a.createElement("label",null,o.a.createElement(p.a,{content:"wallet.import_keys_tool"})),o.a.createElement("div",{style:{visibility:"hidden"}},"Dummy"),o.a.createElement("br",null),e?o.a.createElement(s.f,{to:"/wallet/import-keys"},o.a.createElement("div",{className:"button outline success"},o.a.createElement(p.a,{content:"wallet.import_keys"}))):null))),e?o.a.createElement("div",{className:"grid-content"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-content"},o.a.createElement("label",null,o.a.createElement(p.a,{content:"wallet.balance_claims"})),o.a.createElement("div",{style:{visibility:"hidden"}},"Dummy"),o.a.createElement("br",null),o.a.createElement(s.f,{to:"wallet/balance-claims"},o.a.createElement("div",{className:"button outline success"},o.a.createElement(p.a,{content:"wallet.balance_claim_lookup"})))))):null),e?o.a.createElement(s.f,{to:"wallet/backup/create"},o.a.createElement("div",{className:"button outline success"},o.a.createElement(p.a,{content:"wallet.create_backup"}))):null,e?o.a.createElement(s.f,{to:"wallet/backup/brainkey"},o.a.createElement("div",{className:"button outline success"},o.a.createElement(p.a,{content:"wallet.backup_brainkey"}))):null,o.a.createElement(s.f,{to:"wallet/backup/restore"},o.a.createElement("div",{className:"button outline success"},o.a.createElement(p.a,{content:"wallet.restore_backup"}))),o.a.createElement("br",null),e?o.a.createElement("br",null):null,o.a.createElement(s.f,{to:"wallet/create"},o.a.createElement("div",{className:"button outline success"},o.a.createElement(p.a,{content:"wallet.new_wallet"}))),e?o.a.createElement(s.f,{to:"wallet/delete"},o.a.createElement("div",{className:"button outline success"},o.a.createElement(p.a,{content:"wallet.delete_wallet"}))):null,e?o.a.createElement(s.f,{to:"wallet/change-password"},o.a.createElement("div",{className:"button outline success"},o.a.createElement(p.a,{content:"wallet.change_password"}))):null)}}]),t}(r.Component);y=a.i(i.connect)(y,v);var k=function(e){function t(){l(this,t);var e=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={},e}return c(t,e),_(t,[{key:"componentWillMount",value:function(){var e=this.props.current_wallet;this.setState({current_wallet:e})}},{key:"render",value:function(){var e=m.a.getState(),t=[];e.wallet_names.forEach(function(e){t.push(o.a.createElement("option",{key:e,value:e},e.toLowerCase()))});var a=this.state.current_wallet!==this.props.current_wallet;return o.a.createElement("div",null,o.a.createElement("section",{className:"block-list"},o.a.createElement("header",null,o.a.createElement(p.a,{content:"wallet.active_wallet"}),":"),o.a.createElement("ul",null,o.a.createElement("li",{className:"with-dropdown"},e.wallet_names.count()<=1?o.a.createElement("div",{style:{paddingLeft:10}},this.state.current_wallet):o.a.createElement("select",{value:this.state.current_wallet,onChange:this.onChange.bind(this)},t)))),o.a.createElement(s.f,{to:"wallet/create"},o.a.createElement("div",{className:"button outline"},o.a.createElement(p.a,{content:"wallet.new_wallet"}))),a?o.a.createElement("div",{className:"button outline",onClick:this.onConfirm.bind(this)},o.a.createElement(p.a,{content:"wallet.change",name:this.state.current_wallet})):null)}},{key:"onConfirm",value:function(){u.a.setWallet(this.state.current_wallet)}},{key:"onChange",value:function(e){var t=e.target.value;this.setState({current_wallet:t})}}]),t}(r.Component);k=a.i(i.connect)(k,v);var g=function(e){function t(){l(this,t);var e=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={selected_wallet:null,confirm:0},e}return c(t,e),_(t,[{key:"_onCancel",value:function(){this.setState({confirm:0,selected_wallet:null})}},{key:"render",value:function(){if(1===this.state.confirm)return o.a.createElement("div",{style:{paddingTop:20}},o.a.createElement("h4",null,o.a.createElement(p.a,{content:"wallet.delete_confirm_line1"})),o.a.createElement(p.a,{component:"p",content:"wallet.delete_confirm_line3"}),o.a.createElement("br",null),o.a.createElement("div",{className:"button outline",onClick:this.onConfirm2.bind(this)},o.a.createElement(p.a,{content:"wallet.delete_confirm_line4",name:this.state.selected_wallet})),o.a.createElement("div",{className:"button outline",onClick:this._onCancel.bind(this)},o.a.createElement(p.a,{content:"wallet.cancel"})));var e=o.a.createElement("option",{key:"placeholder",value:"",disabled:this.props.wallet_names.size>1}),t=[e];t.push(o.a.createElement("option",{key:"select_option",value:""},f.a.translate("settings.delete_select"),"…")),this.props.wallet_names.forEach(function(e){t.push(o.a.createElement("option",{key:e,value:e},e.toLowerCase()))});var a=!!this.state.selected_wallet;return o.a.createElement("div",{style:{paddingTop:20}},o.a.createElement("section",{className:"block-list"},o.a.createElement("header",null,o.a.createElement(p.a,{content:"wallet.delete_wallet"})),o.a.createElement("ul",null,o.a.createElement("li",{className:"with-dropdown"},o.a.createElement("select",{value:this.state.selected_wallet||"",style:{margin:"0 auto"},onChange:this.onChange.bind(this)},t)))),o.a.createElement("div",{className:E()("button outline",{disabled:!a}),onClick:this.onConfirm.bind(this)},o.a.createElement(p.a,{content:this.state.selected_wallet?"wallet.delete_wallet_name":"wallet.delete_wallet",name:this.state.selected_wallet})))}},{key:"onConfirm",value:function(){this.setState({confirm:1})}},{key:"onConfirm2",value:function(){m.a.onDeleteWallet(this.state.selected_wallet),this._onCancel()}},{key:"onChange",value:function(e){var t=e.target.value;this.setState({selected_wallet:t})}}]),t}(r.Component);g=a.i(i.connect)(g,v)}});
//# sourceMappingURL=0.js.map