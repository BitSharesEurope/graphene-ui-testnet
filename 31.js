webpackJsonp([31],{1206:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(0),c=n.n(l),i=n(13),s=n.n(i),u=n(54),m=n(34),p=n(3),h=n(1),f=(n.n(h),n(2)),d=n.n(f),v=n(69),g=n.n(v),E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},y=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),b=function(e){function t(){a(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={value:null,error:null,existing_account:!1},e.handleChange=e.handleChange.bind(e),e.onKeyDown=e.onKeyDown.bind(e),e}return o(t,e),y(t,[{key:"shouldComponentUpdate",value:function(e,t){return t.value!==this.state.value||t.error!==this.state.error||t.account_name!==this.state.account_name||t.existing_account!==this.state.existing_account||e.searchAccounts!==this.props.searchAccounts}},{key:"componentDidUpdate",value:function(){this.props.onChange&&this.props.onChange({valid:!this.getError()})}},{key:"getValue",value:function(){return this.state.value}},{key:"setValue",value:function(e){this.setState({value:e})}},{key:"clear",value:function(){this.setState({account_name:null,error:null,warning:null})}},{key:"focus",value:function(){this.refs.input.focus()}},{key:"valid",value:function(){return!this.getError()}},{key:"getError",value:function(){var e=this;if(null===this.state.value)return null;var t=null;if(this.state.error)t=this.state.error;else if(this.props.accountShouldExist||this.props.accountShouldNotExist){var n=this.props.searchAccounts.find(function(t){return t===e.state.value});this.props.accountShouldNotExist&&n&&(t=d.a.translate("account.name_input.name_is_taken")),this.props.accountShouldExist&&!n&&(t=d.a.translate("account.name_input.not_found"))}return t}},{key:"validateAccountName",value:function(e){this.state.error=""===e?"Please enter valid account name":p.d.is_account_name_error(e),this.state.warning=null,this.props.cheapNameOnly?this.state.error||p.d.is_cheap_name(e)||(this.state.error=d.a.translate("account.name_input.premium_name_faucet")):this.state.error||p.d.is_cheap_name(e)||(this.state.warning=d.a.translate("account.name_input.premium_name_warning")),this.setState({value:e,error:this.state.error,warning:this.state.warning}),this.props.onChange&&this.props.onChange({value:e,valid:!this.getError()}),(this.props.accountShouldExist||this.props.accountShouldNotExist)&&u.a.accountSearch(e)}},{key:"handleChange",value:function(e){e.preventDefault(),e.stopPropagation();var t=e.target.value.toLowerCase();t=t.match(/[a-z0-9\.-]+/),t=t?t[0]:null,this.setState({account_name:t}),this.validateAccountName(t)}},{key:"onKeyDown",value:function(e){this.props.onEnter&&13===event.keyCode&&this.props.onEnter(e)}},{key:"render",value:function(){var e=this.getError()||"",t=s()("form-group","account-name",{"has-error":!1}),n=this.state.warning;return c.a.createElement("div",{className:t},c.a.createElement("section",null,c.a.createElement("label",{className:"left-label"},this.props.placeholder),c.a.createElement("input",{name:"username",id:"username",type:"text",ref:"input",autoComplete:"off",placeholder:null,onChange:this.handleChange,onKeyDown:this.onKeyDown,value:this.state.account_name||this.props.initial_value})),c.a.createElement("div",{style:{textAlign:"left"},className:"facolor-error"},e),c.a.createElement("div",{style:{textAlign:"left"},className:"facolor-warning"},e?null:n))}}]),t}(c.a.Component);b.propTypes={id:l.PropTypes.string,placeholder:l.PropTypes.string,initial_value:l.PropTypes.string,onChange:l.PropTypes.func,onEnter:l.PropTypes.func,accountShouldExist:l.PropTypes.bool,accountShouldNotExist:l.PropTypes.bool,cheapNameOnly:l.PropTypes.bool,noLabel:l.PropTypes.bool},b.defaultProps={noLabel:!1};var _=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),y(t,[{key:"render",value:function(){return c.a.createElement(g.a,{stores:[m.a],inject:{searchAccounts:function(){return m.a.getState().searchAccounts}}},c.a.createElement(b,E({ref:"nameInput"},this.props)))}}]),t}(c.a.Component);t.a=_},1533:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(0),i=n.n(c),s=n(15),u=(n.n(s),n(13)),m=n.n(u),p=n(54),h=n(34),f=n(1206),d=n(381),v=n(16),g=n(35),E=n(23),y=n(140),b=n(45),_=n(213),w=n(66),k=n(41),C=n(1),N=n.n(C),S=n(3),A=n(225),x=n(85),O=n.n(x),P=n(8),T=n(18),j=n(2),W=n.n(j),F=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),D=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e._onBackupDownload=function(){e.setState({step:3})},e.state={validAccountName:!1,accountName:"",validPassword:!1,registrar_account:null,loading:!1,hide_refcode:!0,show_identicon:!1,step:1},e.onFinishConfirm=e.onFinishConfirm.bind(e),e.accountNameInput=null,e}return l(t,e),F(t,[{key:"componentWillMount",value:function(){T.a.changeSetting({setting:"passwordLogin",value:!1})}},{key:"componentDidMount",value:function(){O.a.rebuild()}},{key:"shouldComponentUpdate",value:function(e,t){return!P.a.are_equal_shallow(t,this.state)}},{key:"isValid",value:function(){var e=0===h.a.getMyAccounts().length,t=this.state.validAccountName;return v.a.getWallet()||(t=t&&this.state.validPassword),e||(t=t&&this.state.registrar_account),t}},{key:"onAccountNameChange",value:function(e){var t={};void 0!==e.valid&&(t.validAccountName=e.valid),void 0!==e.value&&(t.accountName=e.value),this.state.show_identicon||(t.show_identicon=!0),this.setState(t)}},{key:"onPasswordChange",value:function(e){this.setState({validPassword:e.valid})}},{key:"onFinishConfirm",value:function(e){var t=this;e.included&&e.broadcasted_transaction&&(_.a.unlisten(this.onFinishConfirm),_.a.reset(),Object(S.f)("getAccount",this.state.accountName,void 0,a({},this.state.accountName,!0)).then(function(){console.log("onFinishConfirm"),t.props.router.push("/wallet/backup/create?newAccount=true")}))}},{key:"createAccount",value:function(e){var t=this,n=this.refs.refcode?this.refs.refcode.value():null,r=h.a.getState().referralAccount;b.a.unlock().then(function(){t.setState({loading:!0}),p.a.createAccount(e,t.state.registrar_account,r||t.state.registrar_account,0,n).then(function(){t.state.registrar_account?(Object(S.f)("getAccount",e,void 0,a({},e,!0)).then(function(){t.setState({step:2,loading:!1})}),_.a.listen(t.onFinishConfirm)):Object(S.f)("getAccount",e,void 0,a({},e,!0)).then(function(){t.setState({step:2,loading:!1})})}).catch(function(n){console.log("ERROR AccountActions.createAccount",n);var a=n.base&&n.base.length&&n.base.length>0?n.base[0]:"unknown error";n.remote_ip&&(a=n.remote_ip[0]),g.a.addNotification({message:"Failed to create account: "+e+" - "+a,level:"error",autoDismiss:10}),t.setState({loading:!1})})}).catch(function(){})}},{key:"createWallet",value:function(e){return k.a.setWallet("default",e).then(function(){console.log("Congratulations, your wallet was successfully created.")}).catch(function(e){console.log("CreateWallet failed:",e),g.a.addNotification({message:"Failed to create wallet: "+e,level:"error",autoDismiss:10})})}},{key:"onSubmit",value:function(e){var t=this;if(e.preventDefault(),this.isValid()){var n=this.accountNameInput.getValue();if(v.a.getWallet())this.createAccount(n);else{var a=this.refs.password.value();this.createWallet(a).then(function(){return t.createAccount(n)})}}}},{key:"onRegistrarAccountChange",value:function(e){this.setState({registrar_account:e})}},{key:"_renderAccountCreateForm",value:function(){var e=this,t=this.state.registrar_account,n=h.a.getMyAccounts(),a=0===n.length,r=v.a.getWallet(),o=this.isValid(),l=!1,c=t?S.b.getAccount(t):null;c&&c.get("lifetime_referrer")==c.get("id")&&(l=!0);var s=m()("submit-button button no-margin",{disabled:!o||t&&!l});return i.a.createElement("form",{style:{maxWidth:"40rem"},onSubmit:this.onSubmit.bind(this),noValidate:!0},i.a.createElement("p",{style:{fontWeight:"normal",fontFamily:"Roboto-Medium, arial, sans-serif",fontStyle:"normal"}},a?i.a.createElement(N.a,{content:"wallet.create_w_a"}):i.a.createElement(N.a,{content:"wallet.create_a"})),i.a.createElement(f.a,{ref:function(t){t&&(e.accountNameInput=t.refs.nameInput)},cheapNameOnly:!!a,onChange:this.onAccountNameChange.bind(this),accountShouldNotExist:!0,placeholder:W.a.translate("wallet.account_public"),noLabel:!0}),r?null:i.a.createElement(d.a,{ref:"password",confirmation:!0,onChange:this.onPasswordChange.bind(this),noLabel:!0,checkStrength:!0}),a?null:i.a.createElement("div",{className:"full-width-content form-group no-overflow"},i.a.createElement("label",null,i.a.createElement(N.a,{content:"account.pay_from"})),i.a.createElement(y.a,{account_names:n,onChange:this.onRegistrarAccountChange.bind(this)}),t&&!l?i.a.createElement("div",{style:{textAlign:"left"},className:"facolor-error"},i.a.createElement(N.a,{content:"wallet.must_be_ltm"})):null),i.a.createElement("div",{className:"divider"}),this.state.loading?i.a.createElement(w.a,{type:"three-bounce"}):i.a.createElement("button",{style:{width:"100%"},className:s},i.a.createElement(N.a,{content:"account.create_account"})),i.a.createElement("div",{style:{paddingTop:40}},i.a.createElement("label",null,i.a.createElement(E.b,{to:"/existing-account"},i.a.createElement(N.a,{content:"wallet.restore"}))),i.a.createElement("label",null,i.a.createElement(E.b,{to:"/create-wallet-brainkey"},i.a.createElement(N.a,{content:"settings.backup_brainkey"})))),!r||a?null:i.a.createElement("div",{style:{paddingTop:20}},i.a.createElement("label",null,i.a.createElement("a",{onClick:function(){e.setState({step:3})}},i.a.createElement(N.a,{content:"wallet.go_get_started"})))))}},{key:"_renderAccountCreateText",value:function(){var e=v.a.getWallet(),t=h.a.getMyAccounts(),n=0===t.length;return i.a.createElement("div",{className:"confirm-checks"},i.a.createElement("h4",{style:{fontWeight:"normal",fontFamily:"Roboto-Medium, arial, sans-serif",fontStyle:"normal",paddingBottom:15,marginTop:0}},i.a.createElement(N.a,{content:"wallet.wallet_browser"})),i.a.createElement("p",null,e?null:i.a.createElement(N.a,{content:"wallet.has_wallet"})),i.a.createElement(N.a,{style:{textAlign:"left"},component:"p",content:"wallet.create_account_text"}),n?i.a.createElement(N.a,{style:{textAlign:"left"},component:"p",content:"wallet.first_account_paid"}):i.a.createElement(N.a,{style:{textAlign:"left"},component:"p",content:"wallet.not_first_account"}))}},{key:"_renderBackup",value:function(){return i.a.createElement("div",{className:"backup-submit"},i.a.createElement("p",null,i.a.createElement(N.a,{unsafe:!0,content:"wallet.wallet_crucial"})),i.a.createElement("div",{className:"divider"}),i.a.createElement(A.BackupCreate,{noText:!0,downloadCb:this._onBackupDownload}))}},{key:"_renderBackupText",value:function(){return i.a.createElement("div",null,i.a.createElement("p",{style:{fontWeight:"normal",fontFamily:"Roboto-Medium, arial, sans-serif",fontStyle:"normal"}},i.a.createElement(N.a,{content:"footer.backup"})),i.a.createElement("p",null,i.a.createElement(N.a,{content:"wallet.wallet_move",unsafe:!0})),i.a.createElement("p",{className:"txtlabel warning"},i.a.createElement(N.a,{unsafe:!0,content:"wallet.wallet_lose_warning"})))}},{key:"_renderGetStarted",value:function(){return i.a.createElement("div",null,i.a.createElement("table",{className:"table"},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement(N.a,{content:"wallet.tips_dashboard"}),":"),i.a.createElement("td",null,i.a.createElement(E.b,{to:"/"},i.a.createElement(N.a,{content:"header.dashboard"})))),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement(N.a,{content:"wallet.tips_account"}),":"),i.a.createElement("td",null,i.a.createElement(E.b,{to:"/account/"+this.state.accountName+"/overview"},i.a.createElement(N.a,{content:"wallet.link_account"})))),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement(N.a,{content:"wallet.tips_deposit"}),":"),i.a.createElement("td",null,i.a.createElement(E.b,{to:"/deposit-withdraw"},i.a.createElement(N.a,{content:"wallet.link_deposit"})))),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement(N.a,{content:"wallet.tips_transfer"}),":"),i.a.createElement("td",null,i.a.createElement(E.b,{to:"/transfer"},i.a.createElement(N.a,{content:"wallet.link_transfer"})))),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement(N.a,{content:"wallet.tips_settings"}),":"),i.a.createElement("td",null,i.a.createElement(E.b,{to:"/settings"},i.a.createElement(N.a,{content:"header.settings"})))))))}},{key:"_renderGetStartedText",value:function(){return i.a.createElement("div",null,i.a.createElement("p",{style:{fontWeight:"normal",fontFamily:"Roboto-Medium, arial, sans-serif",fontStyle:"normal"}},i.a.createElement(N.a,{content:"wallet.congrat"})),i.a.createElement("p",null,i.a.createElement(N.a,{content:"wallet.tips_explore"})),i.a.createElement("p",null,i.a.createElement(N.a,{content:"wallet.tips_header"})),i.a.createElement("p",{className:"txtlabel warning"},i.a.createElement(N.a,{content:"wallet.tips_login"})))}},{key:"render",value:function(){var e=this.state.step;return i.a.createElement("div",{className:"sub-content"},i.a.createElement("div",{style:{maxWidth:"95vw"}},1!==e?i.a.createElement("p",{style:{fontWeight:"normal",fontFamily:"Roboto-Medium, arial, sans-serif",fontStyle:"normal"}},i.a.createElement(N.a,{content:"wallet.step_"+e})):null,1===e?this._renderAccountCreateForm():2===e?this._renderBackup():this._renderGetStarted()),i.a.createElement("div",{style:{maxWidth:"95vw",paddingTop:"2rem"}},1===e?this._renderAccountCreateText():2===e?this._renderBackupText():this._renderGetStartedText()),i.a.createElement(E.b,{to:"/"},i.a.createElement("button",{className:"button primary hollow"},i.a.createElement(N.a,{content:"wallet.back"}))))}}]),t}(i.a.Component);t.default=Object(s.connect)(D,{listenTo:function(){return[h.a]},getProps:function(){return{}}})}});
//# sourceMappingURL=31.js.map