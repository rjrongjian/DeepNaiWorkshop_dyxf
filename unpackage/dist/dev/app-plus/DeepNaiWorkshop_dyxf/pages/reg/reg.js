
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"btn-row-1 { margin-top: ",[0,50],"; }\n",],undefined,{path:"./pages/reg/reg.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/reg/reg.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      