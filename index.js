!function(e){var t={};function o(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)o.d(n,l,function(t){return e[t]}.bind(null,l));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=11)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.wp.primitives}()},function(e){e.exports=JSON.parse('{"name":"ideabox/toc","title":"Table of Contents","description":"Improve readability and navigation of your websites with the Table of Contents Block.","category":"widgets"}')},function(e,t,o){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var o={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var c=l.apply(null,n);c&&e.push(c)}else if("object"===a)for(var r in n)o.call(n,r)&&n[r]&&e.push(r)}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){function o(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=o=function(e){return typeof e}:e.exports=o=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(t)}e.exports=o},,function(e,t,o){},function(e,t,o){"use strict";o.r(t);var n=o(7),l=o(1),a=o(0),c=o(5),r=o.n(c),i=o(6),b=o(2),s=o(3),u=Object(a.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(a.createElement)(s.Path,{d:"M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"})),d=Object(a.createElement)(s.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(a.createElement)(s.Path,{d:"M17 9.4L12 14 7 9.4l-1 1.2 6 5.4 6-5.4z"})),p=o(8),f=o.n(p),h=(o(10),wp.components),m=h.BaseControl,O=h.Button,g=h.ColorPicker,j=h.Dropdown,C=h.Dashicon,v=h.Tooltip,y=wp.element.Fragment,_=wp.i18n.__,k=function(e){var t=e.value;return Object(a.createElement)(m,{label:e.label,help:e.help,className:"ib-block-control__color-picker"},Object(a.createElement)(j,{className:"ib-block-control__color-picker-dropdown",contentClassName:"ib-block-control__color-picker-inner",renderToggle:function(o){var n=o.isOpen,l=o.onToggle;return Object(a.createElement)(y,null,t&&Object(a.createElement)(v,{text:_("Reset","pp-gutenberg")},Object(a.createElement)(O,{onClick:function(){return e.onChange(void 0)},"aria-label":_("Reset","pp-gutenberg"),className:"ib-block-control__color-picker-reset"},Object(a.createElement)(C,{icon:"image-rotate"}))),Object(a.createElement)(O,{"aria-expanded":n,onClick:l,"aria-label":e.label,className:"ib-block-control__color-picker-value"},Object(a.createElement)("span",{style:{backgroundColor:t}})))},renderContent:function(){return Object(a.createElement)(g,{color:t,onChangeComplete:function(t){return e.onChange(function(e){if("object"===f()(e)){var t="undefined"===e.a?1:e.a;if(void 0!==e.h)return"hsl(".concat(e.h,"%, ").concat(e.s,"%, ").concat(e.l,"%, ").concat(t,")");if(void 0!==e.r)return"rgba(".concat(e.r,", ").concat(e.g,", ").concat(e.b,", ").concat(t,")")}return e}(t[t.source]))},disableAlpha:e.disableAlpha})}}))},x=function(e){var t=e.attributes,o=e.setAttributes;return Object(a.createElement)(i.InspectorControls,null,Object(a.createElement)(b.PanelBody,{title:Object(l.__)("Header","ib-block-toc"),initialOpen:!0},Object(a.createElement)(b.TextControl,{label:Object(l.__)("Title","ib-block-toc"),value:t.title,onChange:function(e){return o({title:e})}}),Object(a.createElement)(k,{label:Object(l.__)("Background Color","ib-block-toc"),value:t.headerBgColor,onChange:function(e){return o({headerBgColor:e})}}),Object(a.createElement)(k,{label:Object(l.__)("Text Color","ib-block-toc"),value:t.headerTextColor,onChange:function(e){return o({headerTextColor:e})}}),Object(a.createElement)(b.RangeControl,{label:Object(l.__)("Text Size","ib-block-toc"),value:t.headerFontSize,min:"1",max:"100",allowReset:!0,onChange:function(e){return o({headerFontSize:e})}})),Object(a.createElement)(b.PanelBody,{title:Object(l.__)("Separator","ib-block-toc"),initialOpen:!1},Object(a.createElement)(k,{label:Object(l.__)("Separator Color","ib-block-toc"),value:t.separatorColor,onChange:function(e){return o({separatorColor:e})}}),Object(a.createElement)(b.RangeControl,{label:Object(l.__)("Separator Thickness","ib-block-toc"),value:t.separatorHeight,min:"0",max:"20",initialPosition:"2",allowReset:!0,onChange:function(e){o(void 0===e?{separatorHeight:2}:{separatorHeight:e})}})),Object(a.createElement)(b.PanelBody,{title:Object(l.__)("Body","ib-block-toc"),initialOpen:!1},Object(a.createElement)(b.SelectControl,{label:Object(l.__)("List Style","ib-block-toc"),value:t.listStyle,onChange:function(e){return o({listStyle:e})},options:[{value:"numbers",label:Object(l.__)("Numbers","ib-block-toc")},{value:"bullets",label:Object(l.__)("Bullets","ib-block-toc")}]}),Object(a.createElement)(b.ToggleControl,{label:Object(l.__)("Hierarchical View","ib-block-toc"),checked:t.hierarchicalView,onChange:function(e){return o({hierarchicalView:e})}}),Object(a.createElement)(k,{label:Object(l.__)("Background Color","ib-block-toc"),value:t.bgColor,onChange:function(e){return o({bgColor:e})}}),Object(a.createElement)(k,{label:Object(l.__)("Text Color","ib-block-toc"),value:t.textColor,onChange:function(e){return o({textColor:e})}}),Object(a.createElement)(k,{label:Object(l.__)("Link Color","ib-block-toc"),value:t.linkColor,onChange:function(e){return o({linkColor:e})}}),Object(a.createElement)(b.RangeControl,{label:Object(l.__)("Text Size","ib-block-toc"),value:t.fontSize,min:"1",max:"100",allowReset:!0,onChange:function(e){return o({fontSize:e})}}),Object(a.createElement)(b.RangeControl,{label:Object(l.__)("List Spacing","ib-block-toc"),value:t.listSpacing,min:"1",max:"100",allowReset:!0,onChange:function(e){return o({listSpacing:e})}}),Object(a.createElement)(b.RangeControl,{label:Object(l.__)("Border Width","ib-block-toc"),value:t.borderWidth,min:"0",max:"10",initialPosition:"0",allowReset:!0,onChange:function(e){o(void 0===e?{borderWidth:0}:{borderWidth:e})}}),Object(a.createElement)(k,{label:Object(l.__)("Border Color","ib-block-toc"),value:t.borderColor,onChange:function(e){return o({borderColor:e})}}),Object(a.createElement)(b.RangeControl,{label:Object(l.__)("Border Radius","ib-block-toc"),value:t.borderRadius,min:"0",max:"10",initialPosition:"0",allowReset:!0,onChange:function(e){o(void 0===e?{borderRadius:0}:{borderRadius:e})}})),Object(a.createElement)(b.PanelBody,{title:Object(l.__)("Include/Exclude","ib-block-toc"),initialOpen:!1},Object(a.createElement)(b.SelectControl,{multiple:!0,label:Object(l.__)("Include Anchors by Tags","ib-block-toc"),value:t.anchorsByTags,onChange:function(e){return o({anchorsByTags:e})},options:[{value:"h1",label:"H1"},{value:"h2",label:"H2"},{value:"h3",label:"H3"},{value:"h4",label:"H4"},{value:"h5",label:"H5"},{value:"h6",label:"H6"}],help:Object(l.__)("Select multiple headings you want to include with Shift + Click","ib-block-toc")}),Object(a.createElement)(b.TextControl,{label:Object(l.__)("Include Container","ib-block-toc"),value:t.includeContainer,onChange:function(e){return o({includeContainer:e})},help:Object(l.__)("Ex: body or .container-class, #container-id","ib-block-toc")}),Object(a.createElement)(b.TextControl,{label:Object(l.__)("Exclude Container","ib-block-toc"),value:t.excludeContainer,onChange:function(e){return o({excludeContainer:e})},help:Object(l.__)("Ex: .container-class, #container-id","ib-block-toc")})),Object(a.createElement)(b.PanelBody,{title:Object(l.__)("Collapsable ToC","ib-block-toc"),initialOpen:!1},Object(a.createElement)(b.ToggleControl,{label:Object(l.__)("Enable Collapsable","ib-block-toc"),checked:t.collapsable,onChange:function(e){return o({collapsable:e})}}),Object(a.createElement)(b.BaseControl,{label:Object(l.__)("Collapsable Icons","ib-block-toc"),className:"ib-block-control--dropdown-menu"},Object(a.createElement)(b.DropdownMenu,{label:Object(l.__)("Choose icon","ib-block-toc"),icon:"standard"===t.collapsableIcons?u:d,controls:[{icon:u,title:Object(l.__)("Plus / Minus","ib-block-toc"),onClick:function(){return o({collapsableIcons:"standard"})}},{icon:d,title:Object(l.__)("Chevrons","ib-block-toc"),onClick:function(){return o({collapsableIcons:"chevrons"})}}]}))),Object(a.createElement)(b.PanelBody,{title:Object(l.__)("Additional Settings","ib-block-toc"),initialOpen:!1},Object(a.createElement)(b.RangeControl,{label:Object(l.__)("Extra Offset","ib-block-toc"),help:Object(l.__)("You can define some extra offset if your site has sticky header.","ib-block-toc"),value:t.extraOffset,min:"0",max:"300",onChange:function(e){o(void 0===e?{extraOffset:0}:{extraOffset:e})}})))},E=function(e){var t=e.headerFontSize,o=e.headerBgColor,n=e.headerTextColor,l=e.separatorHeight,a=e.separatorColor,c=e.bgColor,r=e.textColor,i=e.linkColor,b=e.fontSize,s=e.listSpacing,u=e.borderWidth,d=e.borderColor,p=e.borderRadius;return{container:{borderWidth:u||void 0,borderStyle:u?"solid":void 0,borderColor:d||void 0,borderRadius:p||void 0,overflow:p?"hidden":void 0},header:{fontSize:t||void 0,backgroundColor:o||void 0,color:n||void 0,"--fill":n||void 0},separator:{backgroundColor:a||void 0,height:l?l+"px":"2px"},body:{backgroundColor:c||void 0,color:r||void 0,"--linkColor":i||void 0,fontSize:b||void 0,"--listSpacing":s?s+"px":void 0}}};var w=function(e){var t=e.attributes,o=e.setAttributes;"undefined"!=typeof IBToCBlock&&setTimeout((function(){new IBToCBlock({anchors:t.anchorsByTags.join(),includeContainer:t.includeContainer,excludeContainer:t.excludeContainer,isHierarchical:t.hierarchicalView,isCollapsable:t.collapsable,extraOffset:t.extraOffset})}),500);var n="numbers"===t.listStyle?"ol":"ul",c=E(t);return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(x,{attributes:t,setAttributes:o}),Object(a.createElement)("div",{className:"ib-block-toc","data-anchors":t.anchorsByTags.join(),"data-include":t.includeContainer,"data-exclude":t.excludeContainer,"data-collapsable":t.collapsable,"data-offset":t.extraOffset},Object(a.createElement)("div",{className:r()("ib-toc-container","ib-toc-list-style-".concat(t.listStyle),{"ib-toc-hierarchical":t.hierarchicalView},"ib-toc-expanded"),style:c.container},Object(a.createElement)("div",{className:"ib-toc-header",style:c.header},Object(a.createElement)("div",{className:"ib-toc-header-title"},Object(a.createElement)(i.RichText,{placeholder:Object(l.__)("Table of Contents","ib-block-toc"),value:t.title,onChange:function(e){return o({title:e})},allowedFormats:["core/bold","core/italic"],disableLineBreaks:!0,withoutIteractiveFormatting:!0,identifier:"text"})),t.collapsable&&Object(a.createElement)("div",{className:"ib-toc-header-right"},Object(a.createElement)("span",{className:"ib-toc-icon-collapse"},Object(a.createElement)(b.Dashicon,{icon:"standard"===t.collapsableIcons?"minus":"arrow-up-alt2"})),Object(a.createElement)("span",{className:"ib-toc-icon-expand"},Object(a.createElement)(b.Dashicon,{icon:"standard"===t.collapsableIcons?"plus":"arrow-down-alt2"})))),Object(a.createElement)("div",{className:"ib-toc-separator",style:c.separator}),Object(a.createElement)("div",{className:"ib-toc-body",style:c.body},Object(a.createElement)(n,{className:"ib-toc-anchors"})))))},S=function(e){var t=e.attributes,o="numbers"===t.listStyle?"ol":"ul",n=E(t);return Object(a.createElement)("div",{className:"ib-block-toc","data-anchors":t.anchorsByTags.join(),"data-include":t.includeContainer,"data-exclude":t.excludeContainer,"data-collapsable":t.collapsable,"data-offset":t.extraOffset},Object(a.createElement)("div",{className:r()("ib-toc-container","ib-toc-list-style-".concat(t.listStyle),{"ib-toc-hierarchical":t.hierarchicalView},"ib-toc-expanded"),style:n.container},Object(a.createElement)("div",{className:"ib-toc-header",style:n.header},Object(a.createElement)("div",{className:"ib-toc-header-title"},t.title),t.collapsable&&Object(a.createElement)("div",{className:"ib-toc-header-right"},Object(a.createElement)("span",{className:"ib-toc-icon-collapse"},Object(a.createElement)(b.Dashicon,{icon:"standard"===t.collapsableIcons?"minus":"arrow-up-alt2"})),Object(a.createElement)("span",{className:"ib-toc-icon-expand"},Object(a.createElement)(b.Dashicon,{icon:"standard"===t.collapsableIcons?"plus":"arrow-down-alt2"})))),Object(a.createElement)("div",{className:"ib-toc-separator",style:n.separator}),Object(a.createElement)("div",{className:"ib-toc-body",style:n.body},Object(a.createElement)(o,{className:"ib-toc-anchors"}))))},T=Object(a.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(a.createElement)(s.Path,{d:"M11.1 15.8H20v-1.5h-8.9v1.5zM4 7.2v1.5h16V7.2H4zm.2 6.8l.8-.3V17h1v-4.7l-2.2.7.4 1z"})),B=o(4),N=B.name,R=B.title,P=B.description,H=B.category;Object(n.registerBlockType)(N,{title:R,description:P,category:H,icon:T,keywords:["toc"],supports:{align:!0,html:!1},attributes:{title:{type:"sring",default:Object(l.__)("Table of Contents","ib-block-toc")},headerFontSize:{type:"integer",default:""},headerBgColor:{type:"string",default:""},headerTextColor:{type:"string",default:""},separatorHeight:{type:"integer",default:2},separatorColor:{type:"string",default:""},listStyle:{type:"string",default:"numbers"},hierarchicalView:{type:"boolean",default:!0},bgColor:{type:"string",default:""},textColor:{type:"string",default:""},linkColor:{type:"string",default:""},fontSize:{type:"integer",default:""},listSpacing:{type:"integer",default:""},borderWidth:{type:"integer",default:""},borderColor:{type:"string",default:""},borderRadius:{type:"integer",default:""},anchorsByTags:{type:"object",default:["h2","h3","h4","h5","h6"]},includeContainer:{type:"string",default:""},excludeContainer:{type:"string",default:""},collapsable:{type:"boolean",default:!0},collapsableIcons:{type:"string",default:"standard"},extraOffset:{type:"integer",default:""}},edit:w,save:S})}]);