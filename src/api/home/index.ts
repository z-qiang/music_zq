import service from '../index';
type serve = {
    methods: string,
    url: string,
};

//获取banner
function getBanner<serve>() {
    return service({
        method: "GET",
        url: '/banner?type=2',
    })
};

//获取歌单musiclist
function getMusicList<serve>() {
    return service({
        method: "GET",
        url: '/personalized?limit=10',
    })
};

//获取音乐
function getMusic(id: number | string) {
    return service({
        method:'GET',
        url: `/song/url/v1?id=${id}&level=standard`,
        // url: `/song/url?id=${id}`,
    })
};
//获取歌词
function getLyric(id: string | number) {
    return service({
        method: 'GET',
        url: `/lyric?id=${id}`
    })
};

//每日推荐
function dailyRecommendation() {
    return service({
        method: 'GET',
        url: `/personalized/newsong`,
    })
};
//歌单
function musicList() {
    return service({
        method: 'GET',
        url: '/top/song?type=7',
    })
}

//歌手排行榜
function singerRank() {
    return service({
        method: 'GET',
        url: '/toplist/artist/type=1?limit=20',
    })
}

//获取歌手大热单曲
function singerHotMusic(id: number | string) {
    return service({
        method: 'GET',
        url: `/artists?id=${id}`,
    })
}

//查看歌曲是否有版权
function copyRight(id: number | string) {
    return service({
        method: 'GET',
        url: `/check/music?id=${id}`,
    })
}
//查看歌曲是否可以播放全部
function isPlay(id: number | string) {
    return service({
        method: 'GET',
        url: `/song/url/v1?id=${id}&level=standard`,
    })
}

export {
    getBanner,
    getMusicList,
    getMusic,
    getLyric,
    dailyRecommendation,
    musicList,
    singerRank,
    singerHotMusic,
    copyRight,
    isPlay,
};