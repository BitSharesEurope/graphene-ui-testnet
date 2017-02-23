webpackJsonp([8],{1136:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(1),c=n.n(i),s=n(1137),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.account,n=e.image,r=this.props.size,a=r.height,o=r.width,i=n?c.a.createElement("img",{src:n,height:a+"px",width:o+"px"}):c.a.createElement(s.a,{id:t,account:t,size:this.props.size});return c.a.createElement("div",{className:"account-image"},i)}}]),t}(i.Component);l.defaultProps={src:"",account:"",size:{height:120,width:120}},l.propTypes={src:i.PropTypes.string,account:i.PropTypes.string,size:i.PropTypes.object.isRequired},t.a=l},1137:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(1),c=n.n(i),s=n(1140),u=n.n(s),l=n(1139),f=n.n(l),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=0,d=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.canvas_id="identicon_"+(n.props.account||"")+ ++h,n}return o(t,e),p(t,[{key:"shouldComponentUpdate",value:function(e){return e.size.height!==this.props.size.height||e.size.width!==this.props.size.width||e.account!==this.props.account}},{key:"render",value:function(){var e=this.props.account,t=this.props.size,n=t.height,r=t.width,a=e?u()(e):null;return c.a.createElement("canvas",{id:this.canvas_id,ref:"canvas",style:{height:n,width:r},width:2*r,height:2*n,"data-jdenticon-hash":a})}},{key:"repaint",value:function(){if(this.props.account)f.a.updateById(this.canvas_id);else{var e=this.refs.canvas.getContext("2d");e.fillStyle="rgba(255, 255, 255, 0.2)";var t=e.canvas.width;e.clearRect(0,0,t,t),e.fillRect(0,0,t,t),e.clearRect(1,1,t-2,t-2),e.font=t+"px sans-serif",e.fillText("?",t/4,t-t/6)}}},{key:"componentDidMount",value:function(){this.repaint()}},{key:"componentDidUpdate",value:function(){this.repaint()}}]),t}(i.Component);d.propTypes={size:i.PropTypes.object.isRequired,account:i.PropTypes.string},t.a=d},1138:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(1),c=n.n(i),s=n(127),u=n(60),l=n(59),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),f(t,[{key:"render",value:function(){var e=Number(this.props.balance.get("balance")),t=this.props.balance.get("asset_type");return c.a.createElement(s.a,{amount:e,asset:t,asPercentage:this.props.asPercentage,assetInfo:this.props.assetInfo})}}]),t}(c.a.Component);p.propTypes={balance:u.a.ChainObject.isRequired,assetInfo:c.a.PropTypes.node},t.a=n.i(l.a)(p,{keep_updating:!0})},1139:function(e,t,n){(function(e){var n,r;!function(a,o,i){var c=a.jQuery,s=i(a,c);"undefined"!=typeof e&&"exports"in e?e.exports=s:(n=[],r=function(){return s}.apply(t,n),!(void 0!==r&&(e.exports=r)))}(this,"jdenticon",function(e,t){"use strict";function n(){}function r(e,t,n,r){this._x=e,this._y=t,this._size=n,this._rotation=r}function a(e,t){this._ctx=e,this._transform=t||r.noTransform,e.beginPath()}function o(e,t,n){var r=(e="string"==typeof e?document.querySelector(e):e).getContext("2d"),a=Math.min(e.width)*(1-2*(n===u?.08:n));r.save(),r.clearRect(0,0,e.width,e.height),r.translate(0|(e.width-a)/2,0|(e.height-a)/2),i(r,t||e.getAttribute(f),a),r.restore()}function i(e,t,o){function i(e,n,o,i,c){var s,u,f,p=i?parseInt(t.charAt(i),16):0,h=n[parseInt(t.charAt(o),16)%n.length];for(s=0;s<c.length;s++)f=new r(c[s][0]*l,c[s][1]*l,l,p++%4),u=new a(e,f),h(u,l,s),u.fill()}function c(e){if(e.indexOf(u)>=0)for(var t=0;t<e.length;t++)if(y.indexOf(e[t])>=0)return!0}function s(t){e.fillStyle=d[y[t]].toString()}if(o<30)throw new Error("Jdenticon cannot render identicons smaller than 30 pixels.");if(!/^[0-9a-f]{11,}$/i.test(t))throw new Error("Invalid hash passed to Jdenticon.");if(!e)throw new Error("No canvas specified.");o|=0;for(var u,l=2*(0|o/8),f=parseInt(t.substr(-7),16)/268435455,d=[n.rgb(128,128,128),n.correctedHsl(f,.5,.6),n.rgb(190,190,190),n.correctedHsl(f,.5,.7),n.hsl(f,.5,.5)],y=[],b=0;b<3;b++)u=parseInt(t.charAt(8+b),16)%d.length,(c([0,4])||c([2,3]))&&(u=1),y.push(u);e.clearRect(0,0,o,o),s(0),i(e,h,2,3,[[1,0],[2,0],[2,3],[1,3],[0,1],[3,1],[3,2],[0,2]]),s(1),i(e,h,4,5,[[0,0],[3,0],[3,3],[0,3]]),s(2),i(e,p,1,null,[[1,1],[2,1],[2,2],[1,2]])}function c(e){var t,n=document.getElementById(e);t=n.getAttribute(f),t&&o(n,t,0)}function s(){for(var t,n=("document"in e?document.getElementsByTagName("canvas"):[]),r=0;r<n.length;r++)t=n[r].getAttribute(f),t&&o(n[r],t,0)}var u,l="{version}",f="data-jdenticon-hash";n.rgb=function(e,t,r,a){var o=new n;return o.s="rgba("+(255&e)+","+(255&t)+","+(255&r)+","+(a===u?1:a)+")",o},n.hsl=function(e,t,r,a){var o=new n;return o.s="hsla("+(360*e|0)+","+(100*t|0)+"%,"+(100*r|0)+"%,"+(a===u?1:a)+")",o},n.correctedHsl=function(e,t,r){var a=[.95,1,1,1,.7,.8,.8];return n.hsl(e,t,1-a[6*e+.5|0]*(1-r))},n.prototype={toString:function(){return this.s}},r.noTransform=new r(0,0,0,0),r.prototype={transformPoint:function(e,t,n,r){var a=this._x+this._size,o=this._y+this._size;return 1===this._rotation?[a-t-(r||0),this._y+e]:2===this._rotation?[a-e-(n||0),o-t-(r||0)]:3===this._rotation?[this._x+t,o-e-(n||0)]:[this._x+e,this._y+t]}},a.prototype={addPolygon:function(e,t){var n=t?-2:2,r=t?e.length-2:0,a=this._ctx;for(a.moveTo.apply(a,this._transform.transformPoint(e[r],e[r+1])),r+=n;r<e.length&&r>=0;r+=n)a.lineTo.apply(a,this._transform.transformPoint(e[r],e[r+1]));a.closePath()},addEllipse:function(e,t,n,r,a){var o=this._ctx,i=.5522848,c=this._transform.transformPoint(e,t,n,r),e=c[0],t=c[1],s=n/2*i,u=r/2*i,l=e+n,f=t+r,p=e+n/2,h=t+r/2;a&&(f=t,t+=r,u=-u),o.moveTo(e,h),o.bezierCurveTo(e,h-u,p-s,t,p,t),o.bezierCurveTo(p+s,t,l,h-u,l,h),o.bezierCurveTo(l,h+u,p+s,f,p,f),o.bezierCurveTo(p-s,f,e,h+u,e,h),o.closePath()},addRectangle:function(e,t,n,r,a){this.addPolygon([e,t,e+n,t,e+n,t+r,e,t+r],a)},addTriangle:function(e,t,n,r,a,o){var i=[e+n,t,e+n,t+r,e,t+r,e,t];i.splice((a||0)%4*2,2),this.addPolygon(i,o)},addRhombus:function(e,t,n,r,a){this.addPolygon([e+n/2,t,e+n,t+r/2,e+n/2,t+r,e,t+r/2],a)},fill:function(){this._ctx.fill()}};var p=[function(e,t,n){var r=.42*t;e.addPolygon([0,0,t,0,t,t-2*r,t-r,t,0,t])},function(e,t,n){var r=0|.5*t,a=0|.8*t;e.addTriangle(t-r,0,r,a,2)},function(e,t,n){var r=0|t/3;e.addRectangle(r,r,t-r,t-r)},function(e,t,n){var r=0|.1*t,a=0|.25*t;e.addRectangle(a,a,t-r-a,t-r-a)},function(e,t,n){var r=0|.15*t,a=0|.5*t;e.addEllipse(t-a-r,t-a-r,a,a)},function(e,t,n){var r=.1*t,a=4*r;e.addRectangle(0,0,t,t),e.addPolygon([a,a,t-r,a,a+(t-a-r)/2,t-r],!0)},function(e,t,n){e.addPolygon([0,0,t,0,t,.7*t,.4*t,.4*t,.7*t,t,0,t])},function(e,t,n){e.addTriangle(t/2,t/2,t/2,t/2,3)},function(e,t,n){e.addRectangle(0,0,t,t/2),e.addRectangle(0,t/2,t/2,t/2),e.addTriangle(t/2,t/2,t/2,t/2,1)},function(e,t,n){var r=0|.14*t,a=0|.35*t;e.addRectangle(0,0,t,t),e.addRectangle(a,a,t-a-r,t-a-r,!0)},function(e,t,n){var r=.12*t,a=3*r;e.addRectangle(0,0,t,t),e.addEllipse(a,a,t-r-a,t-r-a,!0)},function(e,t,n){e.addTriangle(t/2,t/2,t/2,t/2,3)},function(e,t,n){var r=.25*t;e.addRectangle(0,0,t,t),e.addRhombus(r,r,t-r,t-r,!0)},function(e,t,n){var r=.4*t,a=1.2*t;n||e.addEllipse(r,r,a,a)}],h=[function(e,t,n){e.addTriangle(0,0,t,t,0)},function(e,t,n){e.addTriangle(0,t/2,t,t/2,0)},function(e,t,n){e.addRhombus(0,0,t,t)},function(e,t,n){var r=t/6;e.addEllipse(r,r,t-2*r,t-2*r)}];return s.drawIcon=i,s.update=o,s.version=l,s.updateById=c,t&&(t.fn.jdenticon=function(e,t){return this.each(function(n,r){o(r,e,t)}),this}),"function"==typeof setTimeout&&setTimeout(s,0),s})}).call(t,n(377)(e))},1140:function(e,t,n){(function(t){!function(n,r){"use strict";var a="undefined"!=typeof e;a&&(n=t);var o="undefined"!=typeof Uint8Array,i="0123456789abcdef".split(""),c=[-2147483648,8388608,32768,128],s=[24,16,8,0],u=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],l=[];Array.prototype.__ARRAY__=!0,o&&(Uint8Array.prototype.__ARRAY__=!0);var f=function(e){return p(e,!0)},p=function(e,t){var n,r,a,o,f,p,h,d,y,b,v,g,m,_,w,k,E,O,P,j,C,T,x=!0,R=!1,S=0,A=0,z=0,I=e.length;t?(n=3238371032,r=914150663,a=812702999,o=4144912697,f=4290775857,p=1750603025,h=1694076839,d=3204075428):(n=1779033703,r=3144134277,a=1013904242,o=2773480762,f=1359893119,p=2600822924,h=528734635,d=1541459225),y=0;do{if(l[0]=y,l[16]=l[1]=l[2]=l[3]=l[4]=l[5]=l[6]=l[7]=l[8]=l[9]=l[10]=l[11]=l[12]=l[13]=l[14]=l[15]=0,e.__ARRAY__)for(v=A;S<I&&v<64;++S)l[v>>2]|=e[S]<<s[3&v++];else for(v=A;S<I&&v<64;++S)b=e.charCodeAt(S),b<128?l[v>>2]|=b<<s[3&v++]:b<2048?(l[v>>2]|=(192|b>>6)<<s[3&v++],l[v>>2]|=(128|63&b)<<s[3&v++]):b<55296||b>=57344?(l[v>>2]|=(224|b>>12)<<s[3&v++],l[v>>2]|=(128|b>>6&63)<<s[3&v++],l[v>>2]|=(128|63&b)<<s[3&v++]):(b=65536+((1023&b)<<10|1023&e.charCodeAt(++S)),l[v>>2]|=(240|b>>18)<<s[3&v++],l[v>>2]|=(128|b>>12&63)<<s[3&v++],l[v>>2]|=(128|b>>6&63)<<s[3&v++],l[v>>2]|=(128|63&b)<<s[3&v++]);z+=v-A,A=v-64,S==I&&(l[v>>2]|=c[3&v],++S),y=l[16],S>I&&v<56&&(l[15]=z<<3,R=!0);var B=n,N=r,K=a,q=o,U=f,M=p,D=h,H=d;for(g=16;g<64;++g)k=l[g-15],m=(k>>>7|k<<25)^(k>>>18|k<<14)^k>>>3,k=l[g-2],_=(k>>>17|k<<15)^(k>>>19|k<<13)^k>>>10,l[g]=l[g-16]+m+l[g-7]+_<<0;for(T=N&K,g=0;g<64;g+=4)x?(t?(P=300032,k=l[0]-1413257819,H=k-150054599<<0,q=k+24177077<<0):(P=704751109,k=l[0]-210244248,H=k-1521486534<<0,q=k+143694565<<0),x=!1):(m=(B>>>2|B<<30)^(B>>>13|B<<19)^(B>>>22|B<<10),_=(U>>>6|U<<26)^(U>>>11|U<<21)^(U>>>25|U<<7),P=B&N,w=P^B&K^T,O=U&M^~U&D,k=H+_+O+u[g]+l[g],E=m+w,H=q+k<<0,q=k+E<<0),m=(q>>>2|q<<30)^(q>>>13|q<<19)^(q>>>22|q<<10),_=(H>>>6|H<<26)^(H>>>11|H<<21)^(H>>>25|H<<7),j=q&B,w=j^q&N^P,O=H&U^~H&M,k=D+_+O+u[g+1]+l[g+1],E=m+w,D=K+k<<0,K=k+E<<0,m=(K>>>2|K<<30)^(K>>>13|K<<19)^(K>>>22|K<<10),_=(D>>>6|D<<26)^(D>>>11|D<<21)^(D>>>25|D<<7),C=K&q,w=C^K&B^j,O=D&H^~D&U,k=M+_+O+u[g+2]+l[g+2],E=m+w,M=N+k<<0,N=k+E<<0,m=(N>>>2|N<<30)^(N>>>13|N<<19)^(N>>>22|N<<10),_=(M>>>6|M<<26)^(M>>>11|M<<21)^(M>>>25|M<<7),T=N&K,w=T^N&q^C,O=M&D^~M&H,k=U+_+O+u[g+3]+l[g+3],E=m+w,U=B+k<<0,B=k+E<<0;n=n+B<<0,r=r+N<<0,a=a+K<<0,o=o+q<<0,f=f+U<<0,p=p+M<<0,h=h+D<<0,d=d+H<<0}while(!R);var J=i[n>>28&15]+i[n>>24&15]+i[n>>20&15]+i[n>>16&15]+i[n>>12&15]+i[n>>8&15]+i[n>>4&15]+i[15&n]+i[r>>28&15]+i[r>>24&15]+i[r>>20&15]+i[r>>16&15]+i[r>>12&15]+i[r>>8&15]+i[r>>4&15]+i[15&r]+i[a>>28&15]+i[a>>24&15]+i[a>>20&15]+i[a>>16&15]+i[a>>12&15]+i[a>>8&15]+i[a>>4&15]+i[15&a]+i[o>>28&15]+i[o>>24&15]+i[o>>20&15]+i[o>>16&15]+i[o>>12&15]+i[o>>8&15]+i[o>>4&15]+i[15&o]+i[f>>28&15]+i[f>>24&15]+i[f>>20&15]+i[f>>16&15]+i[f>>12&15]+i[f>>8&15]+i[f>>4&15]+i[15&f]+i[p>>28&15]+i[p>>24&15]+i[p>>20&15]+i[p>>16&15]+i[p>>12&15]+i[p>>8&15]+i[p>>4&15]+i[15&p]+i[h>>28&15]+i[h>>24&15]+i[h>>20&15]+i[h>>16&15]+i[h>>12&15]+i[h>>8&15]+i[h>>4&15]+i[15&h];return t||(J+=i[d>>28&15]+i[d>>24&15]+i[d>>20&15]+i[d>>16&15]+i[d>>12&15]+i[d>>8&15]+i[d>>4&15]+i[15&d]),J};!n.JS_SHA256_TEST&&a?(p.sha256=p,p.sha224=f,e.exports=p):n&&(n.sha256=p,n.sha224=f)}(this)}).call(t,n(49))},1193:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i,c=n(1),s=n.n(c),u=n(61),l=n.n(u),f=n(7),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=function(e){function t(){r(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={brnkey:"",loading:!0},e}return o(t,e),p(t,[{key:"componentWillMount",value:function(){var e=this;fetch("/dictionary.json").then(function(t){return t.json().then(function(t){i=new Set(t.en.split(",")),e.setState({loading:!1})})}).catch(function(e){console.log("fetch dictionary error:",e)})}},{key:"_checkBrainKey",value:function(){var e=this.state.brnkey.split(" "),t=[];e.forEach(function(e,n){if(""!==e){var r=e.toLowerCase();r=r.match(/[a-z]+/),null===r||i.has(r[0])?t.push(s.a.createElement("span",{key:n,style:{padding:"1px",margin:"1px"}},e)):t.push(s.a.createElement(d,{key:n},e))}});var n=void 0,r=!0,a=!0;return t.length>0&&(this.state.brnkey.length<50?(n=this.state.brnkey.length+" characters (50 minimum)",a=!1):t.length<16?n=t.length+" words (16 recommended)":(n=t.length+" words",r=!1)),{warn:r,valid:a,word_count_label:n,checked_words:t}}},{key:"render",value:function(){if(this.state.loading||!i)return s.a.createElement("div",{style:{padding:20}},"Fetching dictionary....");var e=this._checkBrainKey(),t=e.warn,n=e.word_count_label,r=e.checked_words;return s.a.createElement("span",{className:""},s.a.createElement("div",null,s.a.createElement("textarea",{tabIndex:this.props.tabIndex||1,onChange:this.formChange.bind(this),value:this.state.brnkey,id:"brnkey",style:{height:100,minWidth:450}}),s.a.createElement("div",{style:{textAlign:"left"},className:"grid-content no-padding no-overflow"},r),this.state.check_digits&&!this.props.hideCheckDigits?s.a.createElement("div",null,s.a.createElement("br",null),s.a.createElement("pre",{className:"no-overflow"},this.state.check_digits," * Check Digits"),s.a.createElement("br",null)):null,s.a.createElement("p",null,s.a.createElement("i",{className:l()({error:t})},n))))}},{key:"formChange",value:function(e){var t=e.target,n=t.id,r=t.value,a=this._checkBrainKey(),o=a.valid,i={};if(i[n]=r,"brnkey"===n){var c=f.e.normalize_brainKey(r);this.props.onChange(c.length<50?null:c),i.check_digits=c.length<50?null:f.m.sha1(c).toString("hex").substring(0,4)}this.setState(i),this.props.errorCallback&&this.props.errorCallback(o)}}]),t}(c.Component);h.propTypes={onChange:c.PropTypes.func.isRequired},t.a=h;var d=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),p(t,[{key:"render",value:function(){return s.a.createElement("span",{style:{borderBottom:"1px dotted #ff0000",padding:"1px",margin:"1px"}},s.a.createElement("span",{style:{borderBottom:"1px dotted #ff0000"}},this.props.children))}}]),t}(c.Component)},1283:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=n(9),o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){r(this,e)}return o(e,[{key:"setBrainkey",value:function(e){return e}}]),e}(),c=a.a.createActions(i);t.a=c},1357:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(1),c=n.n(i),s=n(1138),u=n(1136),l=n(60),f=n(59),p=n(90),h=n(7),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),d(t,[{key:"onCardClick",value:function(e){e.preventDefault();var t=this.props.account.get("name");this.context.router.push("/account/"+t+"/overview/")}},{key:"render",value:function(){var e=null,t=null,n=!1;if(this.props.account){e=this.props.account.get("name");var r=this.props.account.get("balances");r&&(t=r.map(function(e){var t=h.b.getObject(e);return t.get("balance")?c.a.createElement("li",{key:e},c.a.createElement(s.a,{balance:e})):null}).toArray()),n=p.a.isMyAccount(this.props.account)}return c.a.createElement("div",{className:"grid-content account-card",onClick:this.onCardClick.bind(this)},c.a.createElement("div",{className:"card"+(n?" my-account":"")},c.a.createElement("h4",{className:"text-center"},e),c.a.createElement("div",{className:"card-content clearfix"},c.a.createElement("div",{className:"float-left"},c.a.createElement(u.a,{account:e,size:{height:64,width:64}})),c.a.createElement("ul",{className:"balances"},t))))}}]),t}(c.a.Component);y.contextTypes={router:c.a.PropTypes.object.isRequired},y.propTypes={account:l.a.ChainAccount.isRequired},t.a=n.i(f.a)(y)},1408:function(e,t,n){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){var t=e.toPublicKey().toPublicKeyString(),n={private_key:e,public_string:t};return n}var c=n(9),s=n(24),u=n.n(s),l=n(7),f=n(64),p=n(1283),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=function(){function e(){o(this,e)}return h(e,null,[{key:"getInstance",value:function(t){var n=e.instances.get(t);n||(n=c.a.createStore(b,"BrainkeyStore"),e.instances.set(t,n));var r=t+" subscribed_instance";if(!e.instances.get(r)){var a=n.chainStoreUpdate.bind(n);l.b.subscribe(a),e.instances.set(r,a)}return n}},{key:"closeInstance",value:function(t){var n=e.instances.get(t);if(!n)throw new Error("unknown instance "+t);var r=t+" subscribed_instance",a=e.instances.get(r);e.instances.delete(r),l.b.unsubscribe(a),n.clearCache()}}]),e}();d.instances=new Map,t.a=d;var y=10,b=function(e){function t(){o(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.clearCache(),e.bindListeners({onSetBrainkey:p.a.setBrainkey}),e._export("inSync","chainStoreUpdate","clearCache"),e}return a(t,e),h(t,[{key:"clearCache",value:function(){this.state={brnkey:"",account_ids:u.a.Set()},this.derived_keys=new Array,this.account_ids_by_key=null}},{key:"onSetBrainkey",value:function(e){this.clearCache(),this.setState({brnkey:e}),this.deriveKeys(e),this.chainStoreUpdate()}},{key:"inSync",value:function(){return this.derived_keys.forEach(function(e){if(v(e))return!1}),!0}},{key:"chainStoreUpdate",value:function(){this.derived_keys.length&&this.account_ids_by_key!==l.b.account_ids_by_key&&(this.account_ids_by_key=l.b.account_ids_by_key,this.updateAccountIds())}},{key:"deriveKeys",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state.brnkey,t=this.derived_keys.length,n=l.e.get_brainPrivateKey(e,t),r=i(n);this.derived_keys.push(r),this.derived_keys.length<y&&this.deriveKeys(e)}},{key:"updateAccountIds",value:function(){var e=this,t=u.a.Set().withMutations(function(t){var n=function(e){var n=l.b.getAccountRefsOfKey(e);n&&n.forEach(function(e){t.add(e)})};e.derived_keys.forEach(function(e){return n(e.public_string)})});t.equals(this.state.account_ids)||(this.state.account_ids=t,this.setState({account_ids:t}))}}]),t}(f.a),v=function(e){return void 0===l.b.getAccountRefsOfKey(e.public_string)}},403:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),c=n.n(i),s=n(62),u=(n.n(s),n(24)),l=n.n(u),f=n(61),p=n.n(f),h=n(1283),d=n(1408),y=n(59),b=n(60),v=n(1193),g=n(109),m=(n.n(g),n(23)),_=n.n(m),w=n(1357);n.d(t,"BrainkeyInputAccept",function(){return C});var k=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),E={listenTo:function(){return[d.a.getInstance("wmc")]},getProps:function(){return d.a.getInstance("wmc").getState()}},O=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),k(t,[{key:"componentWillUnmount",value:function(){d.a.closeInstance("wmc")}},{key:"render",value:function(){return c.a.createElement("span",null,c.a.createElement("h3",null,c.a.createElement(_.a,{content:"wallet.brainkey"})),c.a.createElement(C,null,c.a.createElement(P,null)))}}]),t}(i.Component);O=n.i(s.connect)(O,E),t.default=O;var P=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),k(t,[{key:"render",value:function(){var e=this.props.brnkey.substring(0,10);return c.a.createElement("span",null,c.a.createElement("div",null,c.a.createElement("span",{className:""},e),"…"),c.a.createElement("p",null),this.props.account_ids.size?c.a.createElement(j,{accounts:l.a.List(this.props.account_ids.toArray())}):c.a.createElement("h5",null,c.a.createElement(_.a,{content:"wallet.no_accounts"})))}}]),t}(i.Component);P=n.i(s.connect)(P,E);var j=function(){function e(){r(this,e)}return k(e,[{key:"render",value:function(){var e=n.i(g.pairs)(this.props.accounts).filter(function(e){return!!e[1]}).map(function(e){return e[1].get("name")}).sort().map(function(e){return c.a.createElement(w.a,{key:e,account:e})});return c.a.createElement("span",null,e)}}]),e}();j.propTypes={accounts:b.a.ChainAccountsList.isRequired},j=n.i(y.a)(j,{keep_updating:!0});var C=function(e){function t(){r(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={brnkey:"",accept:!1},e}return o(t,e),k(t,[{key:"render",value:function(){if(this.state.accept)return c.a.createElement("span",null,this.props.children);var e=this.state.brnkey&&""!==this.state.brnkey;return c.a.createElement("span",{className:"grid-container"},c.a.createElement("div",null,c.a.createElement(v.a,{onChange:this.onBrainkeyChange.bind(this)})),c.a.createElement("div",{className:p()("button success",{disabled:!e}),onClick:this.onAccept.bind(this)},c.a.createElement(_.a,{content:"wallet.accept"})))}},{key:"onBrainkeyChange",value:function(e){this.setState({brnkey:e})}},{key:"onAccept",value:function(){this.setState({accept:!0}),h.a.setBrainkey(this.state.brnkey)}}]),t}(i.Component)}});
//# sourceMappingURL=8.js.map