"use strict";!function(c,e){var t=e.getItem("clashEditor:config:general")||"",n=e.getItem("clashEditor:config:proxy")||"",o=e.getItem("clashEditor:config:proxygroup")||"",i=e.getItem("clashEditor:config:rule")||"",r="".concat(t,"\n").concat(n,"\n").concat(o,"\n").concat(i);c.getElementById("finish-preview-yaml").addEventListener("click",function e(){var t=c.getElementById("finish-yml");t.innerHTML=r,Prism.highlightElement(t,!0),c.getElementById("finish-preview-yaml").removeEventListener("click",e)});function l(e,t,n){var o=c.getElementById(e),i=new Blob([t],{type:"text/plain; charset=utf-8"});o.href=URL.createObjectURL(i),o.download=n}l("finish-download-yaml",r.toString(),"config.yaml"),l("finish-download-json",JSON.stringify(jsyaml.load(r)),"config.json"),c.getElementById("finish-clean-cache").addEventListener("click",function(){e.removeItem("clashEditor:config:general"),e.removeItem("clashEditor:config:proxy"),e.removeItem("clashEditor:config:proxygroup"),e.removeItem("clashEditor:config:rule"),Modal("清理成功！","Clash Editor 已经清除了您浏览器中保存的 General、Proxy、Proxy Group、Rule 配置！在您下次编辑时这些配置将不会自动恢复！")})}(document,localStorage);