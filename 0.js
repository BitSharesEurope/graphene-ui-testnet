webpackJsonp([0],{1614:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(221),i=n.n(c),l=n(0),u=n.n(l),s=n(359),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),p(t,[{key:"render",value:function(){var e=i()(this.props.params).map(function(e){return e[1]}).join("/");return u.a.createElement("div",{className:"grid-container page-layout help-content-layout"},u.a.createElement("div",{className:"grid-block page-layout"},u.a.createElement("div",{className:"grid-block main-content wrap regular-padding"},u.a.createElement("div",{className:"grid-block medium-3"},u.a.createElement("div",{className:"grid-content help-toc responsive-list"},u.a.createElement(s.a,{path:"toc"}))),u.a.createElement("div",{className:"grid-block medium-9"},u.a.createElement("div",{className:"grid-content main-content"},u.a.createElement(s.a,{path:e||"index"}))))))}}]),t}(u.a.Component);t.default=f}});
//# sourceMappingURL=0.js.map