document.getElementById("save").addEventListener("click",saveViaLink);

function saveViaLink(){
    const savedInputs = document.querySelectorAll(".selection select[id],.selection input[id]");
    let url = window.location.origin+window.location.pathname+"?load=";
    let savedata ="?";
    for (const obj of savedInputs) {
        savedata += obj.value?obj.id+"="+obj.value+"&":"";
    }
    savedata=savedata.replace(/\&$/,"");
    Promise.resolve(savedata).then(sav => gzipEncode(sav)).then(sav64 => {
        url += sav64;
        navigator.clipboard.writeText(url);
        window.location.href=url;
    });
}
function loadViaLink(){
    if (!window.location.href.match(/\?load=/)){return;}
    let url = window.location.href.split("?load=");
    let decodedUrl = "";
    Promise.resolve(url[1]).then(sav64 => gzipDecode(sav64)).then(sav => {
        let params = new URLSearchParams(sav);
        for(const p of params){ document.getElementById(p[0]).value=p[1]; }
        refreshCanvas();
    });
}
loadViaLink();//run on script load

//gzip implementation from asidko gzip.js gist
const gzipEncode=e=>{const r=(new TextEncoder).encode(e),n=new CompressionStream("gzip"),t=n.writable.getWriter();return t.write(r),t.close(),new Response(n.readable).blob().then(e=>new Promise((r,n)=>{const t=new FileReader;t.onloadend=()=>r(t.result.split(",")[1]),t.readAsDataURL(e)}))};
const gzipDecode=e=>{const r=Uint8Array.from(atob(e),e=>e.charCodeAt(0)),n=new DecompressionStream("gzip"),t=n.writable.getWriter();return t.write(r),t.close(),new Response(n.readable).arrayBuffer().then(function(e){return(new TextDecoder).decode(e)})};