(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/a9y":function(e,t,n){"use strict";var a=n("lwsE"),r=n("W8MJ"),l=n("7W2i"),i=n("a1gu"),o=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=o(e);if(t){var r=o(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return i(this,n)}}var c=n("TqRt");t.__esModule=!0,t.default=void 0;var s=c(n("q1tI")),d=c(n("8Kt/")),m={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function f(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var g=function(e){l(n,e);var t=u(n);function n(){return a(this,n),t.apply(this,arguments)}return r(n,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||m[e]||"An unexpected error has occurred";return s.default.createElement("div",{style:p.error},s.default.createElement(d.default,null,s.default.createElement("title",null,e,": ",t)),s.default.createElement("div",null,s.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?s.default.createElement("h1",{style:p.h1},e):null,s.default.createElement("div",{style:p.desc},s.default.createElement("h2",{style:p.h2},t,"."))))}}]),n}(s.default.Component);t.default=g,g.displayName="ErrorPage",g.getInitialProps=f,g.origGetInitialProps=f;var p={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"3slx":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return q})),n.d(t,"default",(function(){return C}));var a=n("q1tI"),r=n.n(a),l=n("nOHt"),i=n("eomm"),o=n.n(i),u=n("vUxr"),c=n("qtBi"),s=n.n(c),d=r.a.createElement;function m(e){var t=e.content;return d("div",{className:"max-w-2xl mx-auto"},d("div",{className:s.a.markdown,dangerouslySetInnerHTML:{__html:t}}))}var f=n("YFqc"),g=n.n(f),p=r.a.createElement;function h(){return p("h2",{className:"text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8"},p(g.a,{href:"/"},p("a",{className:"hover:underline"},"Nosoff.info")))}var v=n("i2FJ"),x=n("m662"),y=n("zK7a"),b=r.a.createElement;function w(e){var t=e.children;return b("h1",{className:"text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left"},t)}var N=r.a.createElement;function k(e){var t=e.title,n=e.coverImage,a=e.date,l=e.author;return N(r.a.Fragment,null,N(w,null,t),N("div",{className:"hidden md:block md:mb-12"},N(v.a,{name:l.name,picture:l.picture})),N("div",{className:"mb-8 md:mb-16 -mx-5 sm:mx-0"},N(y.a,{title:t,src:n})),N("div",{className:"max-w-2xl mx-auto"},N("div",{className:"block md:hidden mb-6"},N(v.a,{name:l.name,picture:l.picture})),N("div",{className:"mb-6 text-lg"},N(x.a,{dateString:a}))))}var E=n("CafY"),_=n("8Kt/"),I=n.n(_),S=n("YSmr"),R=r.a.createElement,q=!0;function C(e){var t=e.post,n=(e.morePosts,e.preview),a=Object(l.useRouter)();return a.isFallback||(null===t||void 0===t?void 0:t.slug)?R(E.a,{preview:n},R(u.a,null,R(h,null),a.isFallback?R(w,null,"Loading\u2026"):R(r.a.Fragment,null,R("article",{className:"mb-32"},R(I.a,null,R("title",null,t.title," | Next.js Blog Example with ",S.a),R("meta",{property:"og:image",content:t.ogImage.url})),R(k,{title:t.title,coverImage:t.coverImage,date:t.date,author:t.author}),R(m,{content:t.content}))))):R(o.a,{statusCode:404})}},eomm:function(e,t,n){e.exports=n("/a9y")},qtBi:function(e,t,n){e.exports={markdown:"markdown-styles_markdown__1x9gM"}},qvmo:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n("3slx")}])}},[["qvmo",0,2,1,3]]]);