(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3492],{3282:function(e,n,r){"use strict";r.d(n,{I:function(){return v},z:function(){return m}});var t=r(4942),i=r(5987),c=r(8153),o=r(8714),l=r(9065),d=r(8910),a=r(5944),s=["children"],u=["children"],h=["as","children","direction","className"];function f(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?f(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var m=function(e){var n=e.children,r=(0,i.Z)(e,s);return(0,a.tZ)(b,p(p({as:d.h},r),{},{children:n}))},v=function(e){var n=e.children,r=(0,i.Z)(e,u);return(0,a.tZ)(b,p(p({as:o.Yd},r),{},{children:n}))},Z={name:"xyzkeb",styles:"align-self:flex-start"},b=function(e){var n=e.as,r=e.children,t=e.direction,o=e.className,l=(0,i.Z)(e,h),d=y[t],s="left"===t;return(0,a.BX)(c.kC,p(p({as:n,className:o,inline:!0,gap:.5,alignItems:"center",fontFamily:"body",fontWeight:"normal",link:!0,focus:!0,css:Z},l),{},{children:[s?(0,a.tZ)(d,{size:"sm"}):null,r,s?null:(0,a.tZ)(d,{size:"sm"})]}))},y={up:l.Hf,right:l.LZ,down:l.ve,left:l.Y4}},5025:function(e,n,r){"use strict";r.d(n,{x:function(){return o}});var t=r(1163),i=r(3282),c=r(5944),o=function(){var e=(0,t.useRouter)();return(0,c.tZ)(i.I,{onClick:function(){return e.back()},direction:"left",children:"Back"})}},340:function(e,n,r){"use strict";r.r(n);var t=r(8714),i=r(1163),c=r(1077),o=r(6778),l=r(5025),d=r(1282),a=r(870),s=r(6866),u=r(5944),h=d.db.users;n.default=function(){var e,n,r,f=(0,d.e3)("personID"),p=(0,d.aM)((function(){return h.get(null!==f&&void 0!==f?f:-1)}),[f]),m=(0,i.useRouter)();return(0,u.BX)(c.f,{gap:3,children:[(0,u.tZ)(l.x,{}),(0,u.tZ)(o.V,{heading:"Confirm and submit",children:"Review the person's information and permissions so that the process to add them to the facility can begin."}),(0,u.BX)(s.Z,{children:[(0,u.tZ)("dt",{children:"Email"}),(0,u.tZ)("dd",{children:null===p||void 0===p?void 0:p.email_address}),(0,u.tZ)("dt",{children:"Full name"}),(0,u.tZ)("dd",{children:null===p||void 0===p?void 0:p.first_name}),(0,u.tZ)("dt",{children:"Role"}),(0,u.tZ)("dd",{children:null===p||void 0===p||null===(e=p.permissions)||void 0===e||null===(n=e[0])||void 0===n||null===(r=n.role)||void 0===r?void 0:r.role}),(0,u.tZ)("dt",{children:"Permissions"}),(0,u.tZ)("dd",{children:(0,u.BX)("ul",{children:[(0,u.tZ)("li",{children:"Propose or vary an arrangement"}),(0,u.tZ)("li",{children:"Add, vary or remove people from management and control"}),(0,u.tZ)("li",{children:"Add, vary or remove operations"}),(0,u.tZ)("li",{children:"View and manage audits"}),(0,u.tZ)("li",{children:"Request quota allocation"})]})}),(0,u.tZ)("dt",{children:"Facility"}),(0,u.tZ)("dd",{children:"Produce Fresh Processing"})]}),(0,u.tZ)(t.hE,{children:(0,u.tZ)(t.zx,{onClick:function(){return m.push({pathname:(0,a.GA)("MP"),query:{addSuccess:!0}})},type:"submit",children:"Submit"})})]})}},5276:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage-people/confirm",function(){return r(340)}])}},function(e){e.O(0,[765,9774,2888,179],(function(){return n=5276,e(e.s=n);var n}));var n=e.O();_N_E=n}]);