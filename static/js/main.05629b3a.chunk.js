(window.webpackJsonprobofriends=window.webpackJsonprobofriends||[]).push([[0],{13:function(e,a,n){},14:function(e,a,n){},16:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(2),o=n.n(i),l=(n(13),n(3)),c=n(4),s=n(6),m=n(5),u=n(7),h=function(e){e.searchfield;var a=e.searchChange;return r.a.createElement("div",null,r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search robot",onChange:a}))},d=function(e){var a=e.name,n=e.id,t=e.email;return r.a.createElement("div",{className:"tc bg-light-silver dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots ",src:"https://robohash.org/".concat(n,"?200x200")}),r.a.createElement("h2",null,a),r.a.createElement("p",null,t))},b=function(e){var a=e.robots;return r.a.createElement("div",null,a.map(function(e,n){return r.a.createElement(d,{key:n,id:a[n].id,name:a[n].name,email:a[n].email})}))},f=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],g=(n(14),function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(s.a)(this,Object(m.a)(a).call(this))).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={robots:f,searchfield:""},e}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.state,a=e.robots,n=e.searchfield,t=a.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"ROBOFRIENDS"),r.a.createElement(h,{searchChange:this.onSearchChange}),r.a.createElement("scroll",null,r.a.createElement(b,{robots:t})))}}]),a}(t.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(15);o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.05629b3a.chunk.js.map