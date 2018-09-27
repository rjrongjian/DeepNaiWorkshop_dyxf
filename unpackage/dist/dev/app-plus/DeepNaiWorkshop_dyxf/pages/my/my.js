
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"btn { height: ",[0,30],"; }\n",],undefined,{path:"./pages/my/my.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/my/my.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      