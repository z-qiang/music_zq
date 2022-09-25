import service from '../index';

type serve = {
    methods: string,
    url: string,
}

//获取banner
function getBanner<serve>() {
    return service({
        method: "GET",
        url: '/banner?type=2',
    })
}

//获取歌单musiclist
function getMusicList<serve>() {
    return service({
        method: "GET",
        url: '/personalized?limit=10',
    })
}

//获取音乐
function getMusic(id: number | string) {
    return service({
        method:'GET',
        url: `/song/url/v1?id=${id}&level=standard`,
        // url: `/song/url?id=${id}`,
    })
}
//获取歌词
function getLyric(id: string | number) {
    return service({
        method: 'GET',
        url: `/lyric?id=${id}`
    })
}

export {
    getBanner,
    getMusicList,
    getMusic,
    getLyric,
}