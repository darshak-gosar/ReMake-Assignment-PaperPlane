(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,a){e.exports=a(32)},23:function(e,t,a){},24:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),s=a.n(i),l=(a(21),a(22),a(23),a(24),a(6)),c=a.n(l),u=a(8),o=a(11),m=a(12),d=a(7),p=a(15),h=a(14),v=a(34),f=a(35),g=a(36),k="a5d4b72b32ca6d7281a849a4bbe3eacf",E=["https://api.themoviedb.org/3/movie/now_playing?api_key="+k,"https://api.themoviedb.org/3/genre/movie/list?api_key="+k],y=function(){var e=Object(u.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([fetch(E[0]),fetch(E[1])]);case 2:return t=e.sent,e.abrupt("return",Promise.all(t.map((function(e){return e.json()}))));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=a(13),L=a.n(b),N=function(e){return r.a.createElement("div",{className:"filter"},r.a.createElement("h3",null,"Rating"),r.a.createElement("div",{className:"slider orientation-reversed"},r.a.createElement("div",{className:"slider-group"},r.a.createElement("div",{className:"slider-horizontal"},r.a.createElement(L.a,{min:0,max:10,step:.5,value:e.currentValue,labels:{0:"0",5:"5",10:"10"},onChange:e.change})))))},_=function(e){return r.a.createElement("div",{className:"card style_1"},r.a.createElement("div",{className:"image"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("a",{className:"image",href:"#",title:e.movie.title},r.a.createElement("img",{className:"poster lazyload lazyloaded",alt:"",src:"https://image.tmdb.org/t/p/w500/"+e.movie.poster_path,"data-loaded":"true"})))),r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,r.a.createElement("a",{href:"#",title:e.movie.title},e.movie.title)),r.a.createElement("p",null,r.a.createElement("b",null,"Genres: "),e.clicked(e.movie.genre_ids)),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("b",null,"Rating: "),e.movie.vote_average)))},w=function(e){return r.a.createElement("section",{id:"media_results",className:"panel"},r.a.createElement("div",{className:"media_items results"},r.a.createElement("div",{className:"page_wrapper"},e.movieList.map((function(t){return r.a.createElement(_,{key:t.id,movie:t,clicked:e.click})})))))},C=function(e){return r.a.createElement("div",{className:"filter"},r.a.createElement("h3",null,"Genres"),r.a.createElement("ul",{id:"genres",className:"multi_select text"},e.genureList.map((function(t){return r.a.createElement("li",{onClick:function(){return e.click(t.id)},className:-1!==e.activeLinks.indexOf(t.id)?"selected":"",key:t.id,"data-value":t.id},r.a.createElement("a",{href:"#"},t.name))}))))},V=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).currentValues={},n.updateLink=[],n.updatedCurrentValues={},n.rangeFilterChange=function(e){var t,a=e,r=n.updatedCurrentValues;t=n.updateLink&&n.updateLink.length>0?r.filter((function(e){return e.vote_average>=a})):n.currentValues.filter((function(e){return e.vote_average>=a})),n.setState({movies:t.sort((function(e,t){return t.popularity-e.popularity})),value:a})},n.state={error:null,isLoaded:!1,movies:[],genres:[],activeLink:[],value:3},n.getGenres=n.getGenres.bind(Object(d.a)(n)),n.handleClick=n.handleClick.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(c.a.mark((function e(){var t,a,n,r=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,this.currentValues=t[0].results,a=[],t[1].genres.map((function(e){t[0].results.filter((function(t){t.genre_ids.includes(e.id)&&!a.some((function(t){return t.id===e.id}))&&a.push(e)}))})),n=t[0].results.filter((function(e){return e.vote_average>=r.state.value})),this.setState({isLoaded:!0,movies:n.sort((function(e,t){return t.popularity-e.popularity})),genres:a,value:3});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getGenres",value:function(e){var t=this.state.genres.filter((function(t){return e.includes(t.id)}));return Object.keys(t).map((function(e){return t[e].name})).join()}},{key:"handleClick",value:function(e){var t=this,a=this.currentValues,n=this.updateLink.indexOf(e);if(this.updateLink&&0===this.updateLink.length)this.updateLink.push(e),a=this.updateData(a,this.state.movies),this.updatedCurrentValues=a;else if(this.updateLink&&this.updateLink.length>0)if(-1===n)this.updateLink.push(e),a=this.updateData(a,this.state.movies),this.updatedCurrentValues=a;else{this.updateLink.splice(n,1);var r=this.currentValues;this.updateLink.map((function(e){r=r.filter((function(t){return t.genre_ids.includes(e)}))})),a=r,this.updatedCurrentValues=a}a=a.filter((function(e){return e.vote_average>=t.state.value})),this.setState({activeLink:this.updateLink,movies:a.sort((function(e,t){return t.popularity-e.popularity}))})}},{key:"updateData",value:function(e,t){var a=e;return this.updateLink.map((function(e){a=t.filter((function(t){return t.genre_ids.includes(e)}))})),a}},{key:"render",value:function(){var e=this.state,t=e.value,a=e.activeLink;return r.a.createElement(v.a,{className:"custom-conatiner"},r.a.createElement(f.a,null,r.a.createElement(g.a,{md:3,sm:12,xs:12},r.a.createElement("div",{className:"filter_panel card"},r.a.createElement(C,{activeLinks:a,genureList:this.state.genres,click:this.handleClick}),r.a.createElement(N,{currentValue:t,change:this.rangeFilterChange}))),r.a.createElement(g.a,{md:9,sm:12,xs:12},r.a.createElement(w,{movieList:this.state.movies,click:this.getGenres}))))}}]),a}(r.a.Component);var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"ReMake Assignment: PaperPlane")),r.a.createElement(V,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.cc427772.chunk.js.map