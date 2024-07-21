(()=>{"use strict";var e,t={430:(e,t,r)=>{const a=window.React,l=window.wp.blocks,n=window.wp.i18n,o=window.wp.blockEditor,s=window.wp.components,i=({postCount:e,categories:t})=>(0,a.createElement)("div",{className:"blog-grid-menu"},(0,a.createElement)("h2",{className:"blog-grid-meta-results-count"},e," Results"),(0,a.createElement)("form",{id:"filters-form",className:"filters-form"},(0,a.createElement)("fieldset",null,(0,a.createElement)("legend",{className:"sr-only"},"Categories"),(0,a.createElement)("div",{className:"filters-menu"},t&&t.map((e=>{if(0!=e.count)return(0,a.createElement)("label",{className:"input-checkbox"},(0,a.createElement)("input",{type:"checkbox",name:"category",value:""})," ",e.name.replace("&amp;","&"))})))))),c=({post:e,getFeaturedImage:t,gradient:r})=>{const l=new Date(e.date).toLocaleDateString("en-us",{month:"long",day:"numeric",year:"numeric"}),n=t(e.featured_media);return(0,a.createElement)("div",{className:"blog-grid-results-featured blog-grid-results-item",style:{backgroundImage:n?"url("+n.source_url+")":"none"}},(0,a.createElement)("style",{dangerouslySetInnerHTML:{__html:`\n                .blog-grid-results-featured:before,\n                .blog-grid-results-featured:after {\n                    background-image: ${r} !important;\n                }\n                `}}),(0,a.createElement)("div",{className:"blog-grid-results-featured__content"},(0,a.createElement)("div",{className:"blog-grid-results-featured__content-wrap"},(0,a.createElement)("span",{className:"blog-grid-results-featured__date blog-grid-results-item__date"},l),(0,a.createElement)("h3",{className:"blog-grid-results-featured__title blog-grid-results-item__title"},e.title.rendered),(0,a.createElement)("button",{className:"blog-grid-results-featured__link blog-grid-results-item__link button"},"Read More"))))},g=r.p+"images/placeholder.3bda57ec.png",d=({post:e,getFeaturedImage:t})=>{const r=new Date(e.date).toLocaleDateString("en-us",{month:"long",day:"numeric",year:"numeric"}),l=t(e.featured_media);return(0,a.createElement)("div",{className:"blog-grid-results-item"},(0,a.createElement)("div",{className:"blog-grid-results-item__image"},(0,a.createElement)("img",{src:l?l.source_url:g})),(0,a.createElement)("span",{className:"blog-grid-results-item__date"},r),(0,a.createElement)("h3",{className:"blog-grid-results-item__title"},e.title.rendered),(0,a.createElement)("button",{className:"blog-grid-results-item__link button"},"Read More"))},m=({posts:e,categories:t,showFeaturedPost:r,showFilters:l,gradient:n,getFeaturedImage:o})=>{const s=r?10:9;return(0,a.createElement)("div",{id:"bd-blog-grid",className:"blog-grid"},l&&(0,a.createElement)(i,{postCount:e?e.length:"#",categories:t}),(0,a.createElement)("div",{className:"blog-grid-results"},e&&(()=>{let t=0;return e.map((e=>(t++,1==t&&r?(0,a.createElement)(c,{post:e,gradient:n,getFeaturedImage:o}):t<=s?(0,a.createElement)(d,{post:e,getFeaturedImage:o}):void 0)))})()),12>s&&(0,a.createElement)("div",{className:"blog-grid-load-more load-more-container"},(0,a.createElement)("button",{className:"button"},"Load More")))},u=JSON.parse('{"UU":"create-block/bd-blog-grid"}'),b=(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},(0,a.createElement)("path",{d:"M128 136c0-22.1-17.9-40-40-40L40 96C17.9 96 0 113.9 0 136l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM288 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM448 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"})),{withSelect:p,select:h}=wp.data;(0,l.registerBlockType)(u.UU,{icon:b,attributes:{showFeaturedPost:{type:"boolean"},showFilters:{type:"boolean"},gradient:{type:"string",default:"linear-gradient(60deg, rgba(3,21,36,1) 0%, rgba(105,59,131,1) 50%, rgba(164,65,122,1) 100%)"}},edit:p((e=>({posts:e("core").getEntityRecords("postType","post"),categories:e("core").getEntityRecords("taxonomy","category"),getFeaturedImage:t=>e("core").getEntityRecord("postType","attachment",t)})))((function({attributes:e,setAttributes:t,posts:r,categories:l,getFeaturedImage:i}){const c=(0,o.useBlockProps)(),{showFeaturedPost:g,showFilters:d,gradient:u}=e;return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(o.InspectorControls,null,(0,a.createElement)(s.PanelBody,{title:(0,n.__)("Settings")},(0,a.createElement)(s.ToggleControl,{label:"Show category filters?",checked:d,onChange:function(e){t({showFilters:e})}}),(0,a.createElement)(s.ToggleControl,{label:"Show first post as featured?",checked:g,onChange:function(e){t({showFeaturedPost:e})}}),g&&(0,a.createElement)(s.GradientPicker,{label:"Featured Post Gradient Overlay",value:u,onChange:function(e){t({gradient:e})},gradients:[{name:"Cosmic Aurora",gradient:"linear-gradient(60deg, rgba(3,21,36,1) 0%, rgba(105,59,131,1) 50%, rgba(164,65,122,1) 100%)",slug:"cosmic-aurora"},{name:"Slate",gradient:"linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)",slug:"slate"},{name:"Sunfire",gradient:"linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)",slug:"sunfire"}]}))),(0,a.createElement)("div",{...c},(0,a.createElement)(m,{posts:r,categories:l,showFeaturedPost:g,showFilters:d,gradient:u,getFeaturedImage:i})))}))})}},r={};function a(e){var l=r[e];if(void 0!==l)return l.exports;var n=r[e]={exports:{}};return t[e](n,n.exports,a),n.exports}a.m=t,e=[],a.O=(t,r,l,n)=>{if(!r){var o=1/0;for(g=0;g<e.length;g++){for(var[r,l,n]=e[g],s=!0,i=0;i<r.length;i++)(!1&n||o>=n)&&Object.keys(a.O).every((e=>a.O[e](r[i])))?r.splice(i--,1):(s=!1,n<o&&(o=n));if(s){e.splice(g--,1);var c=l();void 0!==c&&(t=c)}}return t}n=n||0;for(var g=e.length;g>0&&e[g-1][2]>n;g--)e[g]=e[g-1];e[g]=[r,l,n]},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var l=r.length-1;l>-1&&(!e||!/^http(s?):/.test(e));)e=r[l--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e={57:0,350:0};a.O.j=t=>0===e[t];var t=(t,r)=>{var l,n,[o,s,i]=r,c=0;if(o.some((t=>0!==e[t]))){for(l in s)a.o(s,l)&&(a.m[l]=s[l]);if(i)var g=i(a)}for(t&&t(r);c<o.length;c++)n=o[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(g)},r=globalThis.webpackChunkbd_blog_grid=globalThis.webpackChunkbd_blog_grid||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var l=a.O(void 0,[350],(()=>a(430)));l=a.O(l)})();