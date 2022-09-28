import service from "../index";

//获取默认搜索关键词
function defaultSearch() {
    return service({
        method: 'GET',
        url: '/search/default',
    })
}

//简易热搜列表
function hotSearch(){
    return service({
        method: 'GET',
        url: '/search/hot',
    })
}

//搜索结果
function searchResult(value: string) {
    return service({
        method: 'GET',
        url: `/cloudsearch?keywords=${value}`,
    })
};

export {
    defaultSearch,
    hotSearch,
    searchResult
}