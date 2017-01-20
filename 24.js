webpackJsonp([24],{1105:function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),c=n.n(r),s=n(1166),l=n(259),u=n.n(l),p=n(1163),h=n(24),d=n.n(h),f=n(23),m=n.n(f),y=n(60),b=n(59),g=n(159),v=n(256),_=n(32),w=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),E=new v.a,T=function(t){function e(){return a(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),w(e,[{key:"render",value:function(){var t=this.props,e=t.account,n=t.onRemove;return c.a.createElement("tr",null,c.a.createElement("td",null,this.props.index),c.a.createElement("td",null,e.get("id")),c.a.createElement("td",null,c.a.createElement(g.a,{account:e.get("id")})),n?c.a.createElement("td",null,c.a.createElement("button",{onClick:n.bind(this,e.get("id")),className:"button outline"},"Remove")):null)}}]),e}(c.a.Component);T.propTypes={account:y.a.ChainAccount.isRequired},T.defaultProps={tempComponent:"tr"},T=n.i(b.a)(T);var P=function(t){function e(){return a(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),w(e,[{key:"_onRemove",value:function(t,e,n){if(e){var a=this.props.getCurrentState(e),o=E.new_transaction();o.add_type_operation("account_whitelist",{fee:{amount:0,asset_id:"1.3.0"},authorizing_account:this.props.account.get("id"),account_to_list:e,new_listing:a-u.a.account_listing[t]}),_.a.process_transaction(o,null,!0)}}},{key:"render",value:function(){var t=this,e=this.props,n=e.removeButton,a=e.white,o=e.list,i=o.map(function(e,o){return c.a.createElement(T,{key:e,onRemove:n?t._onRemove.bind(t,a?"white_listed":"black_listed"):null,account:e,index:o+1})}).toArray(),r=!0;return i.length||(r=!1,i.push(c.a.createElement("tr",{key:"empty"},c.a.createElement("td",{style:{padding:"1rem 0"},colSpan:n?4:3},c.a.createElement(m.a,{content:this.props.emptyText,account:this.props.account.get("name")}))))),c.a.createElement("table",{className:"table compact"},r?c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"#"),c.a.createElement("th",null,c.a.createElement(m.a,{content:"account.id"})),c.a.createElement("th",null,c.a.createElement(m.a,{content:"account.name"})),n?c.a.createElement("th",null):null)):null,c.a.createElement("tbody",null,i))}}]),e}(c.a.Component),x=function(t){function e(){a(this,e);var t=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.state={accountName:"",accountToList:null},t}return i(e,t),w(e,[{key:"_getCurrentState",value:function(t){var e=this.props.account,n=e.get("whitelisted_accounts")||d.a.List(),a=e.get("blacklisted_accounts")||d.a.List(),o=u.a.account_listing.no_listing;return n.includes(t)&&(o+=u.a.account_listing.white_listed),a.includes(t)&&(o+=u.a.account_listing.black_listed),o}},{key:"_onAdd",value:function(t,e){var n=this.state.accountToList,a=this.props.account,o=this._getCurrentState(n);if(n){var i=E.new_transaction();i.add_type_operation("account_whitelist",{fee:{amount:0,asset_id:"1.3.0"},authorizing_account:a.get("id"),account_to_list:n,new_listing:o+u.a.account_listing[t]}),_.a.process_transaction(i,null,!0)}}},{key:"_onAccountFound",value:function(t){console.log("accountFound:",t),this.setState({accountName:t?t.get("name"):null,accountToList:t?t.get("id"):null})}},{key:"_onAccountChanged",value:function(t){console.log("account changed:",t),this.setState({accountName:t,accountToList:null})}},{key:"render",value:function(){var t=this.props.account,e=this.state.accountName;return c.a.createElement("div",{className:"grid-content"},c.a.createElement("div",{className:"generic-bordered-box"},c.a.createElement(s.a,{tabsClass:"bordered-header no-padding",setting:"whitelistTab",contentClass:"grid-content shrink small-vertical medium-horizontal"},c.a.createElement(s.b,{title:"account.whitelist.title"},c.a.createElement("div",{style:{paddingBottom:"1rem"},className:"grid-content small-12"},c.a.createElement("div",null,c.a.createElement(P,{emptyText:"account.whitelist.empty",account:t,getCurrentState:this._getCurrentState.bind(this),list:t.get("whitelisted_accounts")||d.a.List(),removeButton:!0,white:!0})),t.get("whitelisted_accounts")?null:c.a.createElement("p",{className:"has-error"},"Please note, whitelisting is not working yet due to unresolved backend issue."),c.a.createElement("div",{style:{padding:"2rem 0"}},c.a.createElement(p.a,{label:"account.whitelist.add",accountName:e,onAccountChanged:this._onAccountFound.bind(this),onChange:this._onAccountChanged.bind(this),account:e,tabIndex:2,onAction:this._onAdd.bind(this,"white_listed"),action_label:"account.perm.confirm_add",white:!1})))),c.a.createElement(s.b,{title:"account.whitelist.black"},c.a.createElement("div",{style:{paddingBottom:"1rem"},className:"grid-content small-12"},c.a.createElement("div",null,c.a.createElement(P,{emptyText:"account.whitelist.empty_black",account:t,getCurrentState:this._getCurrentState.bind(this),list:t.get("blacklisted_accounts"),removeButton:!0})),c.a.createElement("div",{style:{padding:"2rem 0"}},c.a.createElement(p.a,{label:"account.whitelist.add_black",accountName:e,onAccountChanged:this._onAccountFound.bind(this),onChange:this._onAccountChanged.bind(this),account:e,tabIndex:2,onAction:this._onAdd.bind(this,"black_listed"),action_label:"account.perm.confirm_add"})))),c.a.createElement(s.b,{title:"account.whitelist.white_by"},c.a.createElement("div",{style:{paddingBottom:"1rem"},className:"grid-content small-12"},c.a.createElement("div",null,c.a.createElement(P,{emptyText:"account.whitelist.empty_white_by",account:t,list:t.get("whitelisting_accounts")})))),c.a.createElement(s.b,{title:"account.whitelist.black_by"},c.a.createElement("div",{style:{paddingBottom:"1rem"},className:"grid-content small-12"},c.a.createElement("div",null,c.a.createElement(P,{emptyText:"account.whitelist.empty_black_by",account:t,list:t.get("blacklisting_accounts")})))))))}}]),e}(c.a.Component);e.default=x},1128:function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var r=n(1),c=n.n(r),s=n(1130),l=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),u=function(t){function e(){return a(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),l(e,[{key:"render",value:function(){var t=this.props,e=t.account,n=t.image,a=this.props.size,o=a.height,i=a.width,r=n?c.a.createElement("img",{src:n,height:o+"px",width:i+"px"}):c.a.createElement(s.a,{id:e,account:e,size:this.props.size});return c.a.createElement("div",{className:"account-image"},r)}}]),e}(r.Component);u.defaultProps={src:"",account:"",size:{height:120,width:120}},u.propTypes={src:r.PropTypes.string,account:r.PropTypes.string,size:r.PropTypes.object.isRequired},e.a=u},1130:function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var r=n(1),c=n.n(r),s=n(1132),l=n.n(s),u=n(1131),p=n.n(u),h=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),d=0,f=function(t){function e(t){a(this,e);var n=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.canvas_id="identicon_"+(n.props.account||"")+ ++d,n}return i(e,t),h(e,[{key:"shouldComponentUpdate",value:function(t){return t.size.height!==this.props.size.height||t.size.width!==this.props.size.width||t.account!==this.props.account}},{key:"render",value:function(){var t=this.props.account,e=this.props.size,n=e.height,a=e.width,o=t?l()(t):null;return c.a.createElement("canvas",{id:this.canvas_id,ref:"canvas",style:{height:n,width:a},width:2*a,height:2*n,"data-jdenticon-hash":o})}},{key:"repaint",value:function(){if(this.props.account)p.a.updateById(this.canvas_id);else{var t=this.refs.canvas.getContext("2d");t.fillStyle="rgba(255, 255, 255, 0.2)";var e=t.canvas.width;t.clearRect(0,0,e,e),t.fillRect(0,0,e,e),t.clearRect(1,1,e-2,e-2),t.font=e+"px sans-serif",t.fillText("?",e/4,e-e/6)}}},{key:"componentDidMount",value:function(){this.repaint()}},{key:"componentDidUpdate",value:function(){this.repaint()}}]),e}(r.Component);f.propTypes={size:r.PropTypes.object.isRequired,account:r.PropTypes.string},e.a=f},1131:function(t,e,n){(function(t){var n,a;!function(o,i,r){var c=o.jQuery,s=r(o,c);"undefined"!=typeof t&&"exports"in t?t.exports=s:(n=[],a=function(){return s}.apply(e,n),!(void 0!==a&&(t.exports=a)))}(this,"jdenticon",function(t,e){"use strict";function n(){}function a(t,e,n,a){this._x=t,this._y=e,this._size=n,this._rotation=a}function o(t,e){this._ctx=t,this._transform=e||a.noTransform,t.beginPath()}function i(t,e,n){var a=(t="string"==typeof t?document.querySelector(t):t).getContext("2d"),o=Math.min(t.width)*(1-2*(n===l?.08:n));a.save(),a.clearRect(0,0,t.width,t.height),a.translate(0|(t.width-o)/2,0|(t.height-o)/2),r(a,e||t.getAttribute(p),o),a.restore()}function r(t,e,i){function r(t,n,i,r,c){var s,l,p,h=r?parseInt(e.charAt(r),16):0,d=n[parseInt(e.charAt(i),16)%n.length];for(s=0;s<c.length;s++)p=new a(c[s][0]*u,c[s][1]*u,u,h++%4),l=new o(t,p),d(l,u,s),l.fill()}function c(t){if(t.indexOf(l)>=0)for(var e=0;e<t.length;e++)if(m.indexOf(t[e])>=0)return!0}function s(e){t.fillStyle=f[m[e]].toString()}if(i<30)throw new Error("Jdenticon cannot render identicons smaller than 30 pixels.");if(!/^[0-9a-f]{11,}$/i.test(e))throw new Error("Invalid hash passed to Jdenticon.");if(!t)throw new Error("No canvas specified.");i|=0;for(var l,u=2*(0|i/8),p=parseInt(e.substr(-7),16)/268435455,f=[n.rgb(128,128,128),n.correctedHsl(p,.5,.6),n.rgb(190,190,190),n.correctedHsl(p,.5,.7),n.hsl(p,.5,.5)],m=[],y=0;y<3;y++)l=parseInt(e.charAt(8+y),16)%f.length,(c([0,4])||c([2,3]))&&(l=1),m.push(l);t.clearRect(0,0,i,i),s(0),r(t,d,2,3,[[1,0],[2,0],[2,3],[1,3],[0,1],[3,1],[3,2],[0,2]]),s(1),r(t,d,4,5,[[0,0],[3,0],[3,3],[0,3]]),s(2),r(t,h,1,null,[[1,1],[2,1],[2,2],[1,2]])}function c(t){var e,n=document.getElementById(t);e=n.getAttribute(p),e&&i(n,e,0)}function s(){for(var e,n=("document"in t?document.getElementsByTagName("canvas"):[]),a=0;a<n.length;a++)e=n[a].getAttribute(p),e&&i(n[a],e,0)}var l,u="{version}",p="data-jdenticon-hash";n.rgb=function(t,e,a,o){var i=new n;return i.s="rgba("+(255&t)+","+(255&e)+","+(255&a)+","+(o===l?1:o)+")",i},n.hsl=function(t,e,a,o){var i=new n;return i.s="hsla("+(360*t|0)+","+(100*e|0)+"%,"+(100*a|0)+"%,"+(o===l?1:o)+")",i},n.correctedHsl=function(t,e,a){var o=[.95,1,1,1,.7,.8,.8];return n.hsl(t,e,1-o[6*t+.5|0]*(1-a))},n.prototype={toString:function(){return this.s}},a.noTransform=new a(0,0,0,0),a.prototype={transformPoint:function(t,e,n,a){var o=this._x+this._size,i=this._y+this._size;return 1===this._rotation?[o-e-(a||0),this._y+t]:2===this._rotation?[o-t-(n||0),i-e-(a||0)]:3===this._rotation?[this._x+e,i-t-(n||0)]:[this._x+t,this._y+e]}},o.prototype={addPolygon:function(t,e){var n=e?-2:2,a=e?t.length-2:0,o=this._ctx;for(o.moveTo.apply(o,this._transform.transformPoint(t[a],t[a+1])),a+=n;a<t.length&&a>=0;a+=n)o.lineTo.apply(o,this._transform.transformPoint(t[a],t[a+1]));o.closePath()},addEllipse:function(t,e,n,a,o){var i=this._ctx,r=.5522848,c=this._transform.transformPoint(t,e,n,a),t=c[0],e=c[1],s=n/2*r,l=a/2*r,u=t+n,p=e+a,h=t+n/2,d=e+a/2;o&&(p=e,e+=a,l=-l),i.moveTo(t,d),i.bezierCurveTo(t,d-l,h-s,e,h,e),i.bezierCurveTo(h+s,e,u,d-l,u,d),i.bezierCurveTo(u,d+l,h+s,p,h,p),i.bezierCurveTo(h-s,p,t,d+l,t,d),i.closePath()},addRectangle:function(t,e,n,a,o){this.addPolygon([t,e,t+n,e,t+n,e+a,t,e+a],o)},addTriangle:function(t,e,n,a,o,i){var r=[t+n,e,t+n,e+a,t,e+a,t,e];r.splice((o||0)%4*2,2),this.addPolygon(r,i)},addRhombus:function(t,e,n,a,o){this.addPolygon([t+n/2,e,t+n,e+a/2,t+n/2,e+a,t,e+a/2],o)},fill:function(){this._ctx.fill()}};var h=[function(t,e,n){var a=.42*e;t.addPolygon([0,0,e,0,e,e-2*a,e-a,e,0,e])},function(t,e,n){var a=0|.5*e,o=0|.8*e;t.addTriangle(e-a,0,a,o,2)},function(t,e,n){var a=0|e/3;t.addRectangle(a,a,e-a,e-a)},function(t,e,n){var a=0|.1*e,o=0|.25*e;t.addRectangle(o,o,e-a-o,e-a-o)},function(t,e,n){var a=0|.15*e,o=0|.5*e;t.addEllipse(e-o-a,e-o-a,o,o)},function(t,e,n){var a=.1*e,o=4*a;t.addRectangle(0,0,e,e),t.addPolygon([o,o,e-a,o,o+(e-o-a)/2,e-a],!0)},function(t,e,n){t.addPolygon([0,0,e,0,e,.7*e,.4*e,.4*e,.7*e,e,0,e])},function(t,e,n){t.addTriangle(e/2,e/2,e/2,e/2,3)},function(t,e,n){t.addRectangle(0,0,e,e/2),t.addRectangle(0,e/2,e/2,e/2),t.addTriangle(e/2,e/2,e/2,e/2,1)},function(t,e,n){var a=0|.14*e,o=0|.35*e;t.addRectangle(0,0,e,e),t.addRectangle(o,o,e-o-a,e-o-a,!0)},function(t,e,n){var a=.12*e,o=3*a;t.addRectangle(0,0,e,e),t.addEllipse(o,o,e-a-o,e-a-o,!0)},function(t,e,n){t.addTriangle(e/2,e/2,e/2,e/2,3)},function(t,e,n){var a=.25*e;t.addRectangle(0,0,e,e),t.addRhombus(a,a,e-a,e-a,!0)},function(t,e,n){var a=.4*e,o=1.2*e;n||t.addEllipse(a,a,o,o)}],d=[function(t,e,n){t.addTriangle(0,0,e,e,0)},function(t,e,n){t.addTriangle(0,e/2,e,e/2,0)},function(t,e,n){t.addRhombus(0,0,e,e)},function(t,e,n){var a=e/6;t.addEllipse(a,a,e-2*a,e-2*a)}];return s.drawIcon=r,s.update=i,s.version=u,s.updateById=c,e&&(e.fn.jdenticon=function(t,e){return this.each(function(n,a){i(a,t,e)}),this}),"function"==typeof setTimeout&&setTimeout(s,0),s})}).call(e,n(376)(t))},1132:function(t,e,n){(function(e){!function(n,a){"use strict";var o="undefined"!=typeof t;o&&(n=e);var i="undefined"!=typeof Uint8Array,r="0123456789abcdef".split(""),c=[-2147483648,8388608,32768,128],s=[24,16,8,0],l=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],u=[];Array.prototype.__ARRAY__=!0,i&&(Uint8Array.prototype.__ARRAY__=!0);var p=function(t){return h(t,!0)},h=function(t,e){var n,a,o,i,p,h,d,f,m,y,b,g,v,_,w,E,T,P,x,k,A,C,O=!0,N=!1,j=0,R=0,S=0,z=t.length;e?(n=3238371032,a=914150663,o=812702999,i=4144912697,p=4290775857,h=1750603025,d=1694076839,f=3204075428):(n=1779033703,a=3144134277,o=1013904242,i=2773480762,p=1359893119,h=2600822924,d=528734635,f=1541459225),m=0;do{if(u[0]=m,u[16]=u[1]=u[2]=u[3]=u[4]=u[5]=u[6]=u[7]=u[8]=u[9]=u[10]=u[11]=u[12]=u[13]=u[14]=u[15]=0,t.__ARRAY__)for(b=R;j<z&&b<64;++j)u[b>>2]|=t[j]<<s[3&b++];else for(b=R;j<z&&b<64;++j)y=t.charCodeAt(j),y<128?u[b>>2]|=y<<s[3&b++]:y<2048?(u[b>>2]|=(192|y>>6)<<s[3&b++],u[b>>2]|=(128|63&y)<<s[3&b++]):y<55296||y>=57344?(u[b>>2]|=(224|y>>12)<<s[3&b++],u[b>>2]|=(128|y>>6&63)<<s[3&b++],u[b>>2]|=(128|63&y)<<s[3&b++]):(y=65536+((1023&y)<<10|1023&t.charCodeAt(++j)),u[b>>2]|=(240|y>>18)<<s[3&b++],u[b>>2]|=(128|y>>12&63)<<s[3&b++],u[b>>2]|=(128|y>>6&63)<<s[3&b++],u[b>>2]|=(128|63&y)<<s[3&b++]);S+=b-R,R=b-64,j==z&&(u[b>>2]|=c[3&b],++j),m=u[16],j>z&&b<56&&(u[15]=S<<3,N=!0);var I=n,B=a,q=o,L=i,D=p,K=h,U=d,M=f;for(g=16;g<64;++g)E=u[g-15],v=(E>>>7|E<<25)^(E>>>18|E<<14)^E>>>3,E=u[g-2],_=(E>>>17|E<<15)^(E>>>19|E<<13)^E>>>10,u[g]=u[g-16]+v+u[g-7]+_<<0;for(C=B&q,g=0;g<64;g+=4)O?(e?(x=300032,E=u[0]-1413257819,M=E-150054599<<0,L=E+24177077<<0):(x=704751109,E=u[0]-210244248,M=E-1521486534<<0,L=E+143694565<<0),O=!1):(v=(I>>>2|I<<30)^(I>>>13|I<<19)^(I>>>22|I<<10),_=(D>>>6|D<<26)^(D>>>11|D<<21)^(D>>>25|D<<7),x=I&B,w=x^I&q^C,P=D&K^~D&U,E=M+_+P+l[g]+u[g],T=v+w,M=L+E<<0,L=E+T<<0),v=(L>>>2|L<<30)^(L>>>13|L<<19)^(L>>>22|L<<10),_=(M>>>6|M<<26)^(M>>>11|M<<21)^(M>>>25|M<<7),k=L&I,w=k^L&B^x,P=M&D^~M&K,E=U+_+P+l[g+1]+u[g+1],T=v+w,U=q+E<<0,q=E+T<<0,v=(q>>>2|q<<30)^(q>>>13|q<<19)^(q>>>22|q<<10),_=(U>>>6|U<<26)^(U>>>11|U<<21)^(U>>>25|U<<7),A=q&L,w=A^q&I^k,P=U&M^~U&D,E=K+_+P+l[g+2]+u[g+2],T=v+w,K=B+E<<0,B=E+T<<0,v=(B>>>2|B<<30)^(B>>>13|B<<19)^(B>>>22|B<<10),_=(K>>>6|K<<26)^(K>>>11|K<<21)^(K>>>25|K<<7),C=B&q,w=C^B&L^A,P=K&U^~K&M,E=D+_+P+l[g+3]+u[g+3],T=v+w,D=I+E<<0,I=E+T<<0;n=n+I<<0,a=a+B<<0,o=o+q<<0,i=i+L<<0,p=p+D<<0,h=h+K<<0,d=d+U<<0,f=f+M<<0}while(!N);var F=r[n>>28&15]+r[n>>24&15]+r[n>>20&15]+r[n>>16&15]+r[n>>12&15]+r[n>>8&15]+r[n>>4&15]+r[15&n]+r[a>>28&15]+r[a>>24&15]+r[a>>20&15]+r[a>>16&15]+r[a>>12&15]+r[a>>8&15]+r[a>>4&15]+r[15&a]+r[o>>28&15]+r[o>>24&15]+r[o>>20&15]+r[o>>16&15]+r[o>>12&15]+r[o>>8&15]+r[o>>4&15]+r[15&o]+r[i>>28&15]+r[i>>24&15]+r[i>>20&15]+r[i>>16&15]+r[i>>12&15]+r[i>>8&15]+r[i>>4&15]+r[15&i]+r[p>>28&15]+r[p>>24&15]+r[p>>20&15]+r[p>>16&15]+r[p>>12&15]+r[p>>8&15]+r[p>>4&15]+r[15&p]+r[h>>28&15]+r[h>>24&15]+r[h>>20&15]+r[h>>16&15]+r[h>>12&15]+r[h>>8&15]+r[h>>4&15]+r[15&h]+r[d>>28&15]+r[d>>24&15]+r[d>>20&15]+r[d>>16&15]+r[d>>12&15]+r[d>>8&15]+r[d>>4&15]+r[15&d];return e||(F+=r[f>>28&15]+r[f>>24&15]+r[f>>20&15]+r[f>>16&15]+r[f>>12&15]+r[f>>8&15]+r[f>>4&15]+r[15&f]),F};!n.JS_SHA256_TEST&&o?(h.sha256=h,h.sha224=p,t.exports=h):n&&(n.sha256=h,n.sha224=p)}(this)}).call(e,n(49))},1163:function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var r=n(1),c=n.n(r),s=n(19),l=n(1128),u=n(23),p=n.n(u),h=n(8),d=n(60),f=n(59),m=n(61),y=n.n(m),b=n(36),g=n.n(b),v=n(75),_=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),w=function(t){function e(){return a(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),_(e,[{key:"getAccount",value:function(){return this.props.account}},{key:"getError",value:function(){var t=this.props.error;return t||!this.props.accountName||this.getNameType(this.props.accountName)||(t=g.a.translate("account.errors.invalid")),t}},{key:"getNameType",value:function(t){return t?"#"===t[0]&&s.a.is_object_id("1.2."+t.substring(1))?"id":h.d.is_account_name(t,!0)?"name":this.props.allowPubKey&&h.f.fromPublicKeyString(t)?"pubkey":null:null}},{key:"onInputChanged",value:function(t){var e=t.target.value.trim();this.props.allowUppercase||(e=e.toLowerCase());var n=e.match(/(?:#\/account\/)(.*)(?:\/overview)/);n&&(e=n[1]),this.props.onChange&&e!==this.props.accountName&&this.props.onChange(e)}},{key:"onKeyDown",value:function(t){13===t.keyCode&&this.onAction(t)}},{key:"componentDidMount",value:function(){this.props.onAccountChanged&&this.props.account&&this.props.onAccountChanged(this.props.account)}},{key:"componentWillReceiveProps",value:function(t){this.props.onAccountChanged&&t.account&&t.account!==this.props.account&&this.props.onAccountChanged(t.account)}},{key:"onAction",value:function(t){t.preventDefault(),!this.props.onAction||this.getError()||this.props.disableActionButton||(this.props.account?this.props.onAction(this.props.account):"pubkey"===this.getNameType(this.props.accountName)&&this.props.onAction(this.props.accountName))}},{key:"render",value:function(){var t=this.getError(),e=this.getNameType(this.props.accountName),n=void 0;this.props.allowPubKey?"pubkey"===e&&(n="Public Key"):this.props.account?"name"===e?n="#"+this.props.account.get("id").substring(4):"id"===e&&(n=this.props.account.get("name")):!t&&this.props.accountName&&(t=g.a.translate("account.errors.unknown"));var a=null;this.props.account&&(a=g.a.translate("account.member."+h.b.getAccountMemberStatus(this.props.account)));var o=y()("button",{disabled:!(this.props.account||"pubkey"===e)||t||this.props.disableActionButton}),i=["polonie-wallet","polonie-xwallet","poloniex-deposit","poloniex-wallet","poloniexwall-et","poloniexwallett","poloniexwall-t","poloniexwalle","poloniex"],r=["bittrex-deopsit","bittrex-deposi","bittrex-depositt","bittrex-dposit","bittrex"];return i.indexOf(this.props.accountName)!==-1&&(t=g.a.translate("account.polo_scam")),r.indexOf(this.props.accountName)!==-1&&(t=g.a.translate("account.bittrex_scam")),c.a.createElement("div",{className:"account-selector no-overflow",style:this.props.style},c.a.createElement("div",{className:"content-area"},c.a.createElement("div",{className:"header-area"},t?null:c.a.createElement("div",{className:"right-label"},c.a.createElement("span",null,a),"   ",c.a.createElement("span",null,n)),c.a.createElement(p.a,{component:"label",content:this.props.label})),c.a.createElement("div",{className:"input-area"},c.a.createElement("div",{className:"inline-label"},c.a.createElement("input",{type:"text",value:this.props.accountName||"",placeholder:this.props.placeholder||g.a.translate("account.name"),ref:"user_input",onChange:this.onInputChanged.bind(this),onKeyDown:this.onKeyDown.bind(this),tabIndex:this.props.tabIndex}),this.props.children,this.props.onAction?c.a.createElement("button",{className:o,onClick:this.onAction.bind(this)},c.a.createElement(p.a,{content:this.props.action_label})):null)),c.a.createElement("div",{className:"error-area"},c.a.createElement("span",null,t))),"pubkey"===e?c.a.createElement("div",{className:"account-image"},c.a.createElement(v.a,{name:"key",size:"4x"})):c.a.createElement(l.a,{size:{height:this.props.size||80,width:this.props.size||80},account:this.props.account?this.props.account.get("name"):null,custom_image:null}))}}]),e}(c.a.Component);w.propTypes={label:c.a.PropTypes.string.isRequired,error:c.a.PropTypes.element,placeholder:c.a.PropTypes.string,onChange:c.a.PropTypes.func,onAccountChanged:c.a.PropTypes.func,onAction:c.a.PropTypes.func,accountName:c.a.PropTypes.string,account:d.a.ChainAccount,tabIndex:c.a.PropTypes.number,disableActionButton:c.a.PropTypes.bool,allowUppercase:c.a.PropTypes.bool},e.a=n.i(f.a)(w,{keep_updating:!0})},1166:function(t,e,n){"use strict";function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var c=n(1),s=n.n(c),l=n(23),u=n.n(l),p=n(61),h=n.n(p),d=n(62),f=(n.n(d),n(63)),m=n(43);n.d(e,"a",function(){return g}),n.d(e,"b",function(){return b});var y=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),b=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return r(e,t),y(e,[{key:"render",value:function(){var t=this.props,e=t.isActive,n=t.index,a=t.changeTab,o=t.title,i=h()("tab-item",{"is-active":e});return s.a.createElement("div",{className:i,onClick:a.bind(this,n)},o.indexOf(".")>0?s.a.createElement(u.a,{content:o}):o)}}]),e}(s.a.Component);b.propTypes={title:c.PropTypes.string.isRequired,changeTab:c.PropTypes.func,isActive:c.PropTypes.bool.isRequired,index:c.PropTypes.number.isRequired},b.defaultProps={isActive:!1,index:0};var g=function(t){function e(t){o(this,e);var n=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.state={activeTab:t.setting?t.viewSettings.get(t.setting,t.defaultActiveTab):t.defaultActiveTab},n}return r(e,t),y(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.viewSettings.get(t.setting);e!==this.props.viewSettings.get(this.props.setting)&&this.setState({activeTab:e})}},{key:"_changeTab",value:function(t){this.props.setting&&f.a.changeViewSetting(a({},this.props.setting,t)),this.setState({activeTab:t})}},{key:"render",value:function(){var t=this,e=this.props,n=e.children,a=e.contentClass,o=e.tabsClass,i=e.style,r=null,c=[],l=s.a.Children.map(n,function(e,n){if(!e)return null;var a=n===t.state.activeTab;return a&&(r=e.props.children),s.a.cloneElement(e,{isActive:a,changeTab:t._changeTab.bind(t),index:n})}).filter(function(t){return t&&c.push(t.props.index),null!==t});return r||(r=l[0].props.children),s.a.createElement("div",{className:this.props.className},s.a.createElement("div",{style:i,className:h()("tabs",o)},l),s.a.createElement("div",{className:a},r))}}]),e}(s.a.Component);g.propTypes={setting:c.PropTypes.string,defaultActiveTab:c.PropTypes.number},g.defaultProps={active:0,defaultActiveTab:0},g=n.i(d.connect)(g,{listenTo:function(){return[m.a]},getProps:function(){return{viewSettings:m.a.getState().viewSettings}}})}});
//# sourceMappingURL=24.js.map