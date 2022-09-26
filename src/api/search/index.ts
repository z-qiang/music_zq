import service from "../index";

//获取默认搜索关键词
function defaultSearch() {
    return service({
        method: 'GET',
        url: '/search/default',
    })
}



export {
    defaultSearch,
}