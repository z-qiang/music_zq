import service from "../../index"

type list = {
    methods: string,
    url: string,
}

//获取发现好歌单详情
function getmusicListItem<list>(id:string) {
    return service({
        method: 'GET',
        url: `/playlist/detail?id=${id}`
    })
}
//获取发现好歌单歌曲
function getmusicListItemMusic<list>(id:string | string[]){
    return service({
        method: 'GET',
        url: `/playlist/track/all?id=${id}&limit=20&offset=0`
    })
}

export {
    getmusicListItem,
    getmusicListItemMusic,
}