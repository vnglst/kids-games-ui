var e,n=require("react"),r=(e=require("styled-components"))&&"object"==typeof e&&"default"in e?e.default:e,t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])})(e,n)};function o(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}var a=function(){return(a=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)};function i(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&(r[t[o]]=e[t[o]])}return r}function l(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}var c,p,s,u=function(e){var r=e.children,t=e.className,o=i(e,["children","className"]);return n.createElement(d,a({className:t},o),r)},d=r.button(c||(c=l(["\n  font-weight: 900;\n  font-size: 18px;\n  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);\n  background: var(--geel);\n  border-radius: 10px;\n  border: 1px solid #011627;\n  color: #011627;\n  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);\n  text-decoration: none;\n  padding: 15px;\n\n  &:disabled {\n    background: grey;\n    color: #002747;\n  }\n"],["\n  font-weight: 900;\n  font-size: 18px;\n  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);\n  background: var(--geel);\n  border-radius: 10px;\n  border: 1px solid #011627;\n  color: #011627;\n  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);\n  text-decoration: none;\n  padding: 15px;\n\n  &:disabled {\n    background: grey;\n    color: #002747;\n  }\n"]))),f=r.div(p||(p=l(["\n  background-image: ",";\n  background-size: cover;\n  display: block;\n  filter: blur(2px);\n  height: 100%;\n  left: 0;\n  right: 0;\n  position: fixed;\n  transform: scale(\n    1.1\n  ); /* adds scaling to avoid white border on blurred image */\n"],["\n  background-image: ",";\n  background-size: cover;\n  display: block;\n  filter: blur(2px);\n  height: 100%;\n  left: 0;\n  right: 0;\n  position: fixed;\n  transform: scale(\n    1.1\n  ); /* adds scaling to avoid white border on blurred image */\n"])),function(e){return"url("+e.imageSrc+")"}),m=r.div(s||(s=l(["\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n"],["\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n"]))),g=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return o(r,e),r.prototype.render=function(){var e=this.generateChildren();return n.createElement("div",{className:"bottom-bar"},e)},r.prototype.generateChildren=function(){var e=this.props,r=e.value,t=e.onChange;return n.Children.map(e.children,function(e,o){if(!n.isValidElement(e))return null;var a=e.props,i=void 0===a.value?o:a.value;return n.cloneElement(e,{onChange:t,selected:i===r,value:i})})},r}(n.Component);g.Item=function(e){var r=e.value,t=e.label,o=e.onChange,a="item";return e.selected&&(a+=" item-selected"),n.createElement("button",{className:a,onMouseDown:function(){return o(r)}},e.icon,t&&n.createElement("p",null,t))};var x=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return o(r,e),r.prototype.render=function(){return n.createElement("div",{className:"grid"},this.props.children)},r}(n.Component);x.Item=function(e){var r=e.children,t=e.correct,o=e.wrong,l=e.almostCorrect,c=i(e,["children","correct","wrong","almostCorrect"]),p="grid-item";return t&&(p+=" correct"),o&&(p+=" wrong"),l&&(p+=" almost-correct"),n.createElement(u,a({className:p},c),r)};var b=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return o(r,e),r.prototype.render=function(){return n.createElement("div",{className:"overlay"},n.createElement("div",{className:"overlay-content slide-in-top "+this.props.className},this.props.children))},r}(n.Component);exports.Button=u,exports.BackgroundImage=function(e){var r=e.className,t=e.imageSrc,o=e.children,l=i(e,["className","imageSrc","children"]);return n.createElement("div",null,n.createElement(f,a({className:r,imageSrc:t},l)),n.createElement(m,null,o))},exports.BottomBar=g,exports.Grid=x,exports.Input=function(e){var r=e.className,t=e.valid,o=i(e,["className","valid"]);return n.createElement("input",a({className:"my-input "+(t?"valid":"invalid")+" "+r},o))},exports.Overlay=b;
//# sourceMappingURL=index.js.map
