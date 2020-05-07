(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{286:function(e,t,a){"use strict";a.r(t);var o=a(38),s=Object(o.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"week-13-cordova"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#week-13-cordova","aria-hidden":"true"}},[e._v("#")]),e._v(" Week 13 - Cordova")]),e._v(" "),a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("SWITCH TO WINDOWS")]),e._v(" "),a("ul",[a("li",[e._v("We are now using Windows 10.")]),e._v(" "),a("li",[e._v("Make sure that you have installed NodeJS and VSCode for Windows.")]),e._v(" "),a("li",[e._v("You also need Gradle, Android Studio version 3.x, JDK version 8.x, and Cordova installed.")])])]),e._v(" "),a("h2",{attrs:{id:"domcontentloaded-vs-deviceready"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#domcontentloaded-vs-deviceready","aria-hidden":"true"}},[e._v("#")]),e._v(" DOMContentLoaded vs deviceready")]),e._v(" "),a("p",[e._v("As discussed in week 11, there is a difference between Cordova and web apps, that has to do with waiting for your page to be ready.")]),e._v(" "),a("p",[e._v("With a web app we only need to wait for "),a("code",[e._v("DOMContentLoaded")]),e._v(".")]),e._v(" "),a("p",[e._v("With a Cordova app we need to wait for "),a("code",[e._v("deviceready")]),e._v(".")]),e._v(" "),a("p",[e._v("The difference is that the "),a("code",[e._v("deviceready")]),e._v(" event lets us know that "),a("code",[e._v("DOMContentLoaded")]),e._v(" has happened as well as all the Cordova features and plugins are ready to use. With a Cordova app we always wait for the "),a("code",[e._v("deviceready")]),e._v(" event before doing anything.")]),e._v(" "),a("h3",{attrs:{id:"code-for-both-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-for-both-events","aria-hidden":"true"}},[e._v("#")]),e._v(" Code for Both Events")]),e._v(" "),a("p",[e._v("When building Cordova apps, we typically start testing in the browser before we move to the emulator or devices. In the browser there is no "),a("code",[e._v("deviceready")]),e._v(" event. So, we need to write code that will work in both places - the browser as a webpage AND in the emulator or Android device as a Cordova App.")]),e._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" ready "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"cordova"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" window "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"deviceready"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"DOMContentLoaded"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//check if cordova object exists and use deviceready if it does")]),e._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("ready"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//assuming that init is your function to run to start your app")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("This code sample checks to see if there is an object called "),a("code",[e._v("cordova")]),e._v(" inside the "),a("code",[e._v("Window")]),e._v(" object. If the cordova JS file is loaded, this is something that it will create. That object will create the "),a("code",[e._v("deviceready")]),e._v(" event.")]),e._v(" "),a("p",[e._v("So, if the "),a("code",[e._v("cordova")]),e._v(" object exists inside the Window object, that means the cordova JS file was loaded and ran. This script is only added to our webpage through the Cordova compiling process. If you don't compile your app then the script and the object will not exist.")]),e._v(" "),a("h2",{attrs:{id:"custom-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-events","aria-hidden":"true"}},[e._v("#")]),e._v(" Custom Events")]),e._v(" "),a("p",[e._v("We have been working, until now, with events that are built into core JavaScript or the DOM. Things like "),a("code",[e._v("DOMContentLoaded")]),e._v(", "),a("code",[e._v("load")]),e._v(", and "),a("code",[e._v("click")]),e._v(" are always available in our webpages. However, you can also use JavaScript to create your own.")]),e._v(" "),a("p",[e._v("As some of you have noticed by now, some of the SPA code samples include events like "),a("code",[e._v("pageShow")]),e._v(". This is not something built into JS.")]),e._v(" "),a("p",[e._v("Cordova includes the "),a("code",[e._v("deviceready")]),e._v(" event. This is a JavaScript event that the Cordova JS file creates.")]),e._v(" "),a("p",[e._v("You can create your own custom events too.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN custom Event reference"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Here is a CodePen showing how a Custom Event could be created and used.")]),e._v(" "),a("iframe",{staticStyle:{width:"100%"},attrs:{height:"500",scrolling:"no",title:"PageShow Event ",src:"https://codepen.io/mad-d/embed/raweyY?height=500&theme-id=default&default-tab=js,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}}),e._v(" "),a("p",[a("a",{attrs:{href:"https://codepen.io/mad-d/pen/raweyY",target:"_blank",rel:"noopener noreferrer"}},[e._v("CodePen Link"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"cordova-cheatsheet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cordova-cheatsheet","aria-hidden":"true"}},[e._v("#")]),e._v(" Cordova Cheatsheet")]),e._v(" "),a("p",[e._v("Here is a CodePen with a summary of the majority of the Android, iOS and Cordova commands that you will use when building Cordova apps.")]),e._v(" "),a("iframe",{staticStyle:{width:"100%"},attrs:{height:"500",scrolling:"no",title:"Cordova Cheatsheet",src:"https://codepen.io/mad-d/embed/OPPyOw?height=500&theme-id=default&default-tab=result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}})])},[],!1,null,null,null);t.default=s.exports}}]);