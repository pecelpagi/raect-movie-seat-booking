(this["webpackJsonpreact-movie-seat-booking"]=this["webpackJsonpreact-movie-seat-booking"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(6),a=c.n(s),r=(c(12),c(7)),o=c(5),l=(c(13),c(0)),d=function(e){var t=e.id,c=e.data,n=e.value,i=e.onChange,s=c.map((function(e){return Object(l.jsx)("option",{value:e.id,children:e.name},e.id)}));return Object(l.jsx)("select",{id:t,value:n,onChange:function(e){return i(e.target.value)},children:s})},j=function(){return Object(l.jsxs)("ul",{className:"showcase",children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("div",{className:"seat"}),Object(l.jsx)("small",{children:"N/A"})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("div",{className:"seat selected"}),Object(l.jsx)("small",{children:"Selected"})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("div",{className:"seat occupied"}),Object(l.jsx)("small",{children:"Occupied"})]})]})},u=[13,16,22,23,25,26,27,32,33,44],b=function(e){for(var t=e.row,c=e.onClick,n=e.selectedSeats,i=[],s=function(){var e=a+1,t=function(){},s="",r=function(e){return!!u.find((function(t){return t===e}))}(e),o=function(e,t){return!!e.find((function(e){return e===t}))}(n,e);r||(t=function(){return c(e)}),r?s="occupied":o&&(s="selected"),i.push(Object(l.jsx)("div",{className:"seat ".concat(s),onClick:t},a))},a=8*t;a<8*(t+1);a+=1)s();return Object(l.jsx)("div",{className:"row",children:i})},f=function(e){for(var t=e.selectedSeats,c=e.onClick,n=[],i=0;i<6;i+=1)n.push(Object(l.jsx)(b,{row:i,onClick:c,selectedSeats:t},i));return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{className:"screen"}),n]})},O=[{id:"10",name:"Avengers: Endgame ($10)",price:10},{id:"12",name:"Joker ($12)",price:12},{id:"8",name:"Toy Story 4 ($8)",price:8},{id:"9",name:"The Lion King ($9)",price:9}],h=function(e,t){localStorage.setItem("data",JSON.stringify({selectedMovie:e,selectedSeats:t}))},v=function(){var e=localStorage.getItem("data");e&&(e=JSON.parse(e));var t=Object(n.useState)(e?e.selectedSeats:[]),c=Object(o.a)(t,2),i=c[0],s=c[1],a=Object(n.useState)(e?e.selectedMovie:"10"),u=Object(o.a)(a,2),b=u[0],v=u[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("div",{className:"movie-container",children:[Object(l.jsx)("label",{children:"Pick a movie:"}),Object(l.jsx)(d,{id:"movie",data:O,value:b,onChange:function(e){v(e),h(e,i)}})]}),Object(l.jsx)(j,{}),Object(l.jsx)(f,{selectedSeats:i,onClick:function(e){var t=i.find((function(t){return t===e})),c=[].concat(Object(r.a)(i),[e]);t&&(c=i.filter((function(t){return t!==e}))),s(c),h(b,c)}}),Object(l.jsxs)("p",{className:"text",children:["You have selected ",Object(l.jsx)("span",{children:i.length})," seats for a price of $",Object(l.jsx)("span",{children:O.find((function(e){return e.id===b})).price*i.length})]})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.93052849.chunk.js.map