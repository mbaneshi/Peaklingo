/*! For license information please see 720.main.js.LICENSE.txt */
"use strict";(self.webpackChunkwebpack_template_react_ts=self.webpackChunkwebpack_template_react_ts||[]).push([[720],{720:(e,t,r)=>{r.r(t),r.d(t,{default:()=>D});var n=r(294),a=r(804);const s=a.vJ`
  body {
    margin: 0;
    padding: 1rem;
    background: palegoldenrod;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;var o=r(893);const c=a.ZP.div`
  color: #666;
`;f=c;const l=a.ZP.h2`
  font-size: 7rem;
`;function i(e){return(0,o.jsx)(c,{children:(0,o.jsx)(l,{children:e.initialDate})})}d=l,R=i;const h=i;var f,d,R;$RefreshReg$(f,"HeaderWrapper"),$RefreshReg$(d,"H2"),$RefreshReg$(R,"Header");const p=a.ZP.div`
  color: #666;
  width: 900px;
  height: 900px;
`;function $(e){const t=e.clickHandler;return(0,o.jsx)(p,{children:(0,o.jsx)("button",{onClick:()=>t(),children:"Start countDown"})})}g=$;const u=$;var g;$RefreshReg$(p,"BodyWrapper"),$RefreshReg$(g,"Body");var v=$RefreshSig$();let x=new Date("Jan 5, 2023 15:37:25").getTime();const m=a.ZP.div`
  color: #666;
`;function k(){v();const[e,t]=(0,n.useState)("");return(0,o.jsxs)(m,{children:[(0,o.jsx)(h,{initialDate:e}),(0,o.jsx)(u,{clickHandler:()=>{(()=>{let e=setInterval((function(){let r=(new Date).getTime(),n=x-r,a=Math.floor(n/864e5)+"d "+Math.floor(n%864e5/36e5)+"h "+Math.floor(n%36e5/6e4)+"m "+Math.floor(n%6e4/1e3)+"s ";n<0&&(clearInterval(e),a="EXPIRED"),t(a)}),1e3)})()}})]})}w=m,v(k,"0mOTnnL7xtny1x+C/RBFqWkPa1c="),P=k;const j=k;var w,P;function b(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s,{}),(0,o.jsx)(j,{})]})}$RefreshReg$(w,"ParentWrapper"),$RefreshReg$(P,"Parent"),H=b;const D=S=(0,n.memo)(b);var H,S;$RefreshReg$(H,"App"),$RefreshReg$(S,"%default%")}}]);