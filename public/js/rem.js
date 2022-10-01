function remSize() {
    let domSize = document.documentElement.clientWidth || window.innerWidth;
    if(domSize>=750){
        domSize = 750;
    }else if(domSize<=320){
        domSize = 320;
    }
    //设置整体大小
    document.documentElement.style.fontSize = (domSize/7.5) + 'px';
    //设置字体大小
    document.querySelector('body').style.fontSize = 0.3 + 'rem';
}
remSize();
window.onresize = () => {
    remSize();
}