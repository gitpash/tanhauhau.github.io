(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{160:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return l});var n=a(0),r=a.n(n),o=a(166),i=a(170),c=a(171),s=a(168);t.default=function(e){var t=e.data,a=e.location,n=t.allMarkdownRemark.edges;return r.a.createElement(i.a,{location:a,title:"Back to Home Page"},r.a.createElement(c.a,{title:"Li Hau's Notes",keywords:["blog","gatsby","javascript","react","notes"]}),r.a.createElement("h1",null,"Li Hau's Notes"),n.map(function(e){var t=e.node.fields,a=t.slug,n=t.noteDate,i=t.noteTitle;return r.a.createElement("h4",{key:a,style:{marginBottom:Object(s.a)(.75),marginTop:Object(s.a)(.75)}},r.a.createElement(o.a,{style:{boxShadow:"none"},to:a},"["+n+"] "+i))}))};var l="314619980"},166:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(34),s=a.n(c);a.d(t,"a",function(){return s.a});a(167);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},167:function(e,t,a){var n;e.exports=(n=a(169))&&n.default||n},168:function(e,t,a){"use strict";a.d(t,"a",function(){return s}),a.d(t,"b",function(){return l});var n=a(173),r=a.n(n),o=a(174),i=a.n(o);a(152);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"},a:{color:"#612e77",textDecoration:"underline",fontWeight:600,textShadow:"initial",backgroundImage:"initial"},pre:{overflow:"scroll"},blockquote:{borderLeftColor:"#612e77"}}};var c=new r.a(i.a);var s=c.rhythm,l=c.scale},169:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(57),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},170:function(e,t,a){"use strict";var n=a(7),r=a.n(n),o=a(0),i=a.n(o),c=a(166),s=a(168),l=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,n=t.title,r=t.children;return e="/"===a.pathname?null:i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},i.a.createElement(c.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(24),padding:Object(s.a)(1.5)+" "+Object(s.a)(.75)}},i.a.createElement("header",null,e),i.a.createElement("main",null,r),i.a.createElement("footer",{style:{marginTop:Object(s.a)(2)}},"Built with ",i.a.createElement("span",{role:"img",className:"emoji"},"💻")," and ",i.a.createElement("span",{role:"img",className:"emoji"},"❤️")," • ",i.a.createElement(c.a,{to:"/notes"},"notes")," • ",i.a.createElement("a",{href:"https://twitter.com/lihautan"},"twitter")," • ",i.a.createElement("a",{href:"https://github.com/tanhauhau"},"github")," • ",i.a.createElement("a",{href:"https://github.com/tanhauhau/tanhauhau.github.io/issues/new?assignees=&labels=grammar%2C+typo&template=fix-typos-and-grammars.md&title=%5BTYPO%5D"},"discuss")))},t}(i.a.Component);t.a=l},171:function(e,t,a){"use strict";var n=a(172),r=a(0),o=a.n(r),i=a(4),c=a.n(i),s=a(175),l=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,c=e.title,s=n.data.site,u=t||s.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u},172:function(e){e.exports={data:{site:{siteMetadata:{title:"Tan Li Hau",description:"Tan Li Hau is a frontend engineer who is currently working in Shopee",author:"Tan Li Hau"}}}}}}]);
//# sourceMappingURL=component---src-pages-notes-js-5380e2869639971784a2.js.map