(this["webpackJsonpsolar-metering"]=this["webpackJsonpsolar-metering"]||[]).push([[0],{216:function(e,r,n){},240:function(e,r){},242:function(e,r){},391:function(e,r,n){"use strict";n.r(r);var t=n(7),a=n(1),o=n.n(a),c=n(74),l=n.n(c),s=(n(216),n(217),n(218),n(219),n(100)),i=n(189),d=n.n(i),u=n(207),p=n(93);function m(e,r){var n,t=Object(p.a)(Object.keys(e[0]).filter((function(e){return e.includes("time")})));try{var a=function(){var r=n.value;e.forEach((function(e){e[r]=new Date(e[r]).toUTCString()}))};for(t.s();!(n=t.n()).done;)a()}catch(o){t.e(o)}finally{t.f()}return{tableData:e,key:Object.keys(e[0]).filter((function(e){return!r||r.includes(e)})).map((function(e){return{label:e.split("_").join(" "),field:e}}))}}function T(e){var r=m(e.data,e.fields),n=r.key,a=r.tableData;return Object(t.jsx)(u.c,{striped:!0,borderless:!0,small:!0,data:{columns:n,rows:a}})}function O(){return Object(t.jsx)("h1",{children:"No data found!"})}var j=n(404),w=n(406),b=n(410),R=n(408),f=n(405),h=n(401);function S(e){var r=m(e.data).tableData,n=function(){var e=Object(a.useState)({width:void 0,height:void 0}),r=Object(s.a)(e,2),n=r[0],t=r[1];return Object(a.useEffect)((function(){function e(){t({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n}();return Object(t.jsx)("div",{style:{height:500},children:Object(t.jsxs)(j.a,{theme:w.a.material,width:n.width-10,scale:{x:"time",y:"linear"},children:[Object(t.jsx)(b.a,{animate:!0,children:x(["Vb min daily","Vb max daily"],r)}),Object(t.jsx)(R.a,{axisLabelComponent:Object(t.jsx)(f.a,{dy:20}),label:"Date"}),Object(t.jsx)(R.a,{axisLabelComponent:Object(t.jsx)(f.a,{dy:-20}),label:"Value",dependentAxis:!0})]})})}function x(e,r){var n,a,o=[],c=Object(p.a)(e);try{var l=function(){var e=function(e,r){return r.map((function(r){return{x:new Date(r["time (UTC)"]),y:Number(r[e.split(" ").join("_")])}}))}(a.value,r);n?(e=e.map((function(e,r){return e.y=e.y-n[r],e})),n=n.map((function(r,n){return r+e[n].y}))):n=e.map((function(e){return e.y})),console.log(e),o.push(Object(t.jsx)(h.a,{data:e}))};for(c.s();!(a=c.n()).done;)l()}catch(s){c.e(s)}finally{c.f()}return o}var y=n(48),C=n(14);var v=function(){var e=Object(a.useState)([]),r=Object(s.a)(e,2),n=r[0],o=r[1];return Object(a.useEffect)((function(){d()('"time (UTC)","Flags","Vb_max_daily","Vb_min_daily","Va_max_daily","Ahc_daily","Whc_daily","time_equalize_daily","time_absorption_daily","time_float_daily","fault_daily","alarm_daily"\r\n"2020-09-19T09:01:43.000+00:00","power on reset, alarm occurred","50.78","50.38","107.06","28.50","1440","0","0","0","","RTS Open, Controller was Reset"\r\n"2020-09-20T01:01:43.000+00:00","power on reset, alarm occurred","50.78","50.55","105.55","11.30","570","0","0","0","","RTS Open, Controller was Reset"\r\n"2020-09-21T01:01:43.000+00:00","alarm occurred","51.22","50.59","110.95","80.90","4130","0","0","0","","RTS Open"\r\n"2020-09-22T01:01:43.000+00:00","alarm occurred","51.15","50.89","105.84","28.20","1440","0","0","0","","RTS Open"\r\n"2020-09-23T00:01:43.000+00:00","power on reset, alarm occurred","51.69","51.00","111.95","93.70","4820","0","0","0","","RTS Open, Controller was Reset"\r\n"2020-09-24T00:01:43.000+00:00","alarm occurred","51.98","51.34","111.13","82.40","4270","0","0","0","","RTS Open"\r\n"2020-09-25T00:01:43.000+00:00","alarm occurred","52.44","51.71","110.81","81.20","4240","0","0","0","","RTS Open"\r\n"2020-09-25T22:01:43.000+00:00","power on reset, alarm occurred","53.28","52.37","109.53","86.20","4560","0","0","0","","RTS Open, Controller was Reset"\r\n"2020-09-26T02:01:43.000+00:00","alarm occurred","53.81","53.03","112.86","29.90","1600","0","0","0","","RTS Open"\r\n"2020-09-27T03:01:43.000+00:00","power on reset, alarm occurred","53.60","53.38","0.10","0.00","0","0","0","0","","RTS Open, Controller was Reset"\r\n"2020-09-28T04:01:43.000+00:00","alarm occurred","53.40","53.25","0.10","0.00","0","0","0","0","","RTS Open"\r\n"2020-09-29T05:01:43.000+00:00","alarm occurred","53.27","53.13","0.10","0.00","0","0","0","0","","RTS Open"\r\n"2020-09-30T06:01:43.000+00:00","alarm occurred","53.15","53.06","0.10","0.00","0","0","0","0","","RTS Open"\r\n"2020-09-30T07:01:43.000+00:00","alarm occurred","53.09","53.04","100.12","0.00","0","0","0","0","","RTS Open"\r\n"2020-09-30T21:01:43.000+00:00","alarm occurred","53.11","53.00","100.09","0.60","30","0","0","0","","RTS Open"\r\n"2020-10-01T07:01:43.000+00:00","alarm occurred, fault occurred","54.14","52.99","111.37","39.40","2120","0","0","0","Overcurrent, Software Fault","RTS Open"\r\n"2020-10-02T00:01:43.000+00:00","power on reset, alarm occurred, fault occurred","54.07","53.27","104.15","0.90","40","0","0","0","Software Fault","RTS Open, Controller was Reset"\r\n"2020-10-02T14:01:43.000+00:00","power on reset, alarm occurred","53.10","52.94","102.01","1.60","80","0","0","0","","RTS Open, Controller was Reset"\r\n"2020-10-03T02:01:43.000+00:00","alarm occurred","54.51","52.94","111.79","100.70","5440","0","1","0","","RTS Open"\r\n"2020-10-03T16:01:43.000+00:00","power on reset, alarm occurred","53.07","52.92","94.65","0.30","10","0","0","0","","RTS Open, Controller was Reset"\r\n"2020-10-04T03:01:43.000+00:00","alarm occurred","53.46","52.90","110.12","21.80","1160","0","3","0","","RTS Open"\r\n"2020-10-04T11:01:43.000+00:00","power on reset, alarm occurred","54.03","53.31","111.53","43.80","2360","0","205","0","","RTS Open, Controller was Reset"\r\n"2020-10-04T23:01:43.000+00:00","power on reset, alarm occurred","54.00","53.79","64.09","0.00","0","0","3","0","","RTS Open, Controller was Reset"\r\n"2020-10-05T23:01:43.000+00:00","alarm occurred","54.02","53.76","108.84","13.00","700","0","370","0","","RTS Open"\r\n"2020-10-06T13:01:43.000+00:00","power on reset, alarm occurred","53.76","53.03","98.71","0.50","20","0","1","0","","RTS Open, Controller was Reset"\r\n"2020-10-07T13:01:43.000+00:00","alarm occurred","54.02","53.01","111.28","72.40","3900","0","394","0","","RTS Open"\r\n"2020-10-07T15:01:43.000+00:00","power on reset, alarm occurred","53.01","52.79","108.18","8.50","450","0","0","0","","RTS Open, Controller was Reset"\r\n"2020-10-08T05:01:43.000+00:00","power on reset, alarm occurred","52.87","52.33","105.79","2.30","120","0","0","0","","RTS Open, Controller was Reset"\r\n"2020-10-08T08:01:43.000+00:00","alarm occurred","52.51","52.31","107.63","5.60","290","0","0","0","","RTS Open"\r\n"2020-10-08T10:01:43.000+00:00","power on reset, alarm occurred, fault occurred","52.83","52.34","113.65","8.80","460","0","0","0","Software Fault","RTS Open, Controller was Reset"\r\n"2020-10-08T11:01:43.000+00:00","power on reset, alarm occurred","52.80","52.33","110.02","11.80","620","0","0","0","","RTS Open, Controller was Reset"\r\n"2020-10-09T02:01:43.000+00:00","power on reset, alarm occurred","52.59","52.04","109.21","8.90","460","0","0","0","","RTS Open, Controller was Reset"\r\n"2020-10-09T09:01:43.000+00:00","alarm occurred","52.86","52.00","111.80","44.80","2350","0","0","0","","RTS Open"\r\n"2020-10-10T01:01:43.000+00:00","power on reset, alarm occurred","52.70","52.00","107.70","15.60","820","0","0","0","","RTS Open, Controller was Reset"\r\n"2020-10-11T01:01:43.000+00:00","alarm occurred","52.13","51.59","109.36","24.40","1270","0","0","0","","RTS Open"\r\n"2020-10-12T01:01:43.000+00:00","power on reset, alarm occurred","52.20","51.51","110.99","64.70","3350","0","0","0","","RTS Open, Controller was Reset"\r\n"2020-10-12T22:01:43.000+00:00","power on reset, alarm occurred","52.67","52.06","108.22","14.80","780","0","0","0","","RTS Open, Controller was Reset"\r\n"2020-10-13T06:01:43.000+00:00","alarm occurred","52.89","52.06","111.41","65.80","3450","0","0","0","","RTS Open"\r\n"2020-10-13T21:01:43.000+00:00","power on reset, alarm occurred","52.78","52.09","108.39","8.60","450","0","0","0","","RTS Open, Controller was Reset"\r\n"2020-10-14T15:01:43.000+00:00","power on reset, alarm occurred, fault occurred","80.19","54.91","108.28","2.30","130","0","0","0","Battery HVD","RTS Open, Controller was Reset"\r\n"2020-10-14T20:01:43.000+00:00","power on reset, alarm occurred, fault occurred","52.81","52.60","107.47","8.30","440","0","0","0","Software Fault","RTS Open, Controller was Reset"\r\n"2020-10-14T23:01:43.000+00:00","power on reset, alarm occurred, fault occurred","52.65","52.50","104.77","2.90","150","0","0","0","Software Fault","RTS Open, Controller was Reset"\r\n"2020-10-15T10:01:43.000+00:00","power on reset, alarm occurred","52.52","52.14","56.16","0.00","0","0","0","0","","RTS Open, Controller was Reset"\r\n"2020-10-15T15:01:43.000+00:00","alarm occurred","52.17","52.00","106.20","4.50","230","0","0","0","","RTS Open"\r\n"2020-10-15T18:01:43.000+00:00","power on reset, alarm occurred","55.93","55.87","0.07","0.00","0","0","0","0","","RTS Open, Controller was Reset"\r\n"2020-10-15T19:01:43.000+00:00","power on reset, alarm occurred, fault occurred","52.05","51.95","104.32","2.80","140","0","0","0","Software Fault","RTS Open, Controller was Reset"\r\n"2020-10-16T08:01:43.000+00:00","power on reset, alarm occurred","51.97","51.64","100.37","0.30","10","0","0","0","","RTS Open, Controller was Reset"\r\n"2020-10-16T10:01:43.000+00:00","alarm occurred","51.70","51.63","106.04","2.80","150","0","0","0","","RTS Open"\r\n"2020-10-16T19:01:43.000+00:00","power on reset, alarm occurred","52.51","51.61","111.26","105.70","5520","0","0","0","","RTS Open, Controller was Reset"\r\n',{comment:"#",delimiter:",",columns:!0},(function(e,r){e?console.error(e):o(r)}))}),[!0]),Object(t.jsx)(y.a,{basename:"/solar-metering",children:Object(t.jsxs)("div",{children:[Object(t.jsx)("nav",{children:Object(t.jsxs)("ul",{children:[Object(t.jsx)("li",{children:Object(t.jsx)(y.b,{to:"/",children:"Home"})}),Object(t.jsx)("li",{children:Object(t.jsx)(y.b,{to:"/full-table",children:"FullTable"})})]})}),Object(t.jsxs)(C.c,{children:[Object(t.jsx)(C.a,{path:"/full-table",children:Object(t.jsx)(l,{})}),Object(t.jsx)(C.a,{path:"/",children:Object(t.jsx)(c,{})})]})]})});function c(){return Object(t.jsxs)("div",{className:"App",children:[Object(t.jsx)("div",{className:"title_component",children:Object(t.jsx)("header",{className:"App-header",children:Object(t.jsx)("h1",{className:"App-title",children:"Real-Time Solar Output (updates [hourly?] [daily?] [weekly?])"})})}),n.length>0?Object(t.jsx)(S,{data:n}):Object(t.jsx)(O,{}),Object(t.jsx)("div",{style:{padding:15,overflowX:"auto"},children:n.length>0?Object(t.jsx)(t.Fragment,{children:Object(t.jsx)(T,{data:n,fields:["time (UTC)","Vb_max_daily","Vb_min_daily","Whc_daily","alarm_daily"]})}):Object(t.jsx)(O,{})})]})}function l(){return Object(t.jsxs)("div",{className:"App",children:[Object(t.jsx)("div",{className:"title_component",children:Object(t.jsx)("header",{className:"App-header",children:Object(t.jsx)("h1",{className:"App-title",children:"Complete Solar Data from MSView"})})}),Object(t.jsx)("div",{style:{padding:15,overflowX:"auto"},children:n.length>0?Object(t.jsx)(t.Fragment,{children:Object(t.jsx)(T,{data:n})}):Object(t.jsx)(O,{})})]})}},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,411)).then((function(r){var n=r.getCLS,t=r.getFID,a=r.getFCP,o=r.getLCP,c=r.getTTFB;n(e),t(e),a(e),o(e),c(e)}))};l.a.render(Object(t.jsx)(o.a.StrictMode,{children:Object(t.jsx)(v,{})}),document.getElementById("root")),_()}},[[391,1,2]]]);
//# sourceMappingURL=main.f09b7d70.chunk.js.map