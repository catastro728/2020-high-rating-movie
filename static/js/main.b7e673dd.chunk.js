(this["webpackJsonpmovie-app-2020"]=this["webpackJsonpmovie-app-2020"]||[]).push([[0],{34:function(e,t,a){e.exports=a(67)},59:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(29),s=a.n(i),c=a(8),l=a(7),m=a(16),o=a.n(m),u=a(30),d=a(10),p=a(11),g=a(13),v=a(12),_=a(14),E=a(31),y=a.n(E),b=a(2),h=a.n(b);a(59);function f(e){var t=e.id,a=e.year,n=e.title,i=e.summary,s=e.poster,l=e.rating,m=e.genres,o=e.big_poster,u=e.runtime;return r.a.createElement(c.b,{to:{pathname:"/movie/".concat(t),state:{year:a,title:n,summary:i,poster:s,rating:l,genres:m,big_poster:o,runtime:u}},style:{color:"black",textDecoration:"none"}},r.a.createElement("div",{className:"movie"},r.a.createElement("img",{className:"poster",src:s,alt:n,title:n}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},n),r.a.createElement("div",{className:"middle"},r.a.createElement("ul",{className:"movie__genres"},m.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))),r.a.createElement("h4",{className:"movie__rating"},"\u2605",l)),r.a.createElement("p",{className:"movie__summary"},i.slice(0,250),"..."))))}f.prototype={id:h.a.number.isRequired,year:h.a.number.isRequired,title:h.a.string.isRequired,summary:h.a.string.isRequired,poster:h.a.string.isRequired,rating:h.a.number.isRequired,genres:h.a.arrayOf(h.a.string).isRequired,big_poster:h.a.string.isRequired,runtime:h.a.number.isRequired};var N=f,k=(a(63),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[]},a.getMovies=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:t=e.sent,n=t.data.data,a.setState({data:n,isLoading:!1});case 5:case"end":return e.stop()}}),e)}))),a}return Object(_.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.data;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("h1",{className:"loader__text"},"Loading...")):a.movies.map((function(e){return r.a.createElement(N,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,rating:e.rating,genres:e.genres,big_poster:e.large_cover_image,runtime:e.runtime})})))}}]),t}(r.a.Component));a(64);var j=function(){return r.a.createElement("div",{className:"info"},r.a.createElement("p",{id:"ab"},"API from ",r.a.createElement("a",{href:"https://yts.mx"},"https://yts.mx")),r.a.createElement("p",{id:"ab"},"By SeungyongBae"))},x=(a(65),function(e){function t(){return Object(d.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location.state;return console.log(e),e?r.a.createElement("div",{className:"detail"},r.a.createElement("div",{className:"box_poster"},r.a.createElement("img",{className:"detail__poster",src:e.big_poster,alt:e.title,title:e.title})),r.a.createElement("div",{className:"detail__data"},r.a.createElement("h1",{className:"detail__title"},e.title),r.a.createElement("h4",{className:"detail__year"},"release : ",e.year),r.a.createElement("h4",{className:"detail__rating"},"rating : ",e.rating," / 10"),r.a.createElement("h4",{className:"detail__runtime"},"runtime : ",e.runtime," min"),r.a.createElement("ul",{className:"detail__genres"},e.genres.map((function(e,t){return r.a.createElement("li",{key:t,className:"detail__genres__genre"},e)}))),r.a.createElement("p",{className:"detail__summary"},e.summary))):null}}]),t}(r.a.Component));a(66);var O=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement("div",{className:"nav__link"},r.a.createElement(c.b,{to:"/",style:{color:"black",textDecoration:"none"}},"Home"),r.a.createElement("a",{className:"blank"}),r.a.createElement(c.b,{to:"/about",style:{color:"black",textDecoration:"none"}},"About")))};var q=function(){return r.a.createElement(c.a,null,r.a.createElement(O,null),r.a.createElement(l.a,{path:"/",exact:!0,component:k}),r.a.createElement(l.a,{path:"/about",component:j}),r.a.createElement(l.a,{path:"/movie/:id",component:x}))};s.a.render(r.a.createElement(q,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.b7e673dd.chunk.js.map