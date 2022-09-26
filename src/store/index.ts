import { defineStore } from 'pinia';

const mainStore = defineStore('main', {
    state: () => {
        return {
            //当前歌单
            musicList: [
                {
                    id: 476659144,
                    al: {
                        id: 35458196,
                        name: "小宇",
                        pic: 109951164548112690,
                        picUrl: "https://p1.music.126.net/4azOvzVWCzln6E84lPKZ9A==/109951164548112691.jpg",
                        pic_str: "109951164548112691",
                    },
                    name: "小宇",
                }
            ],
            //历史歌单
            historyMusicList: new Array(),
            //歌曲播放状态
            musicState: false,
            //当前播放歌曲的id
            index: 0,
            //播放歌单的id
            musicId: 0,
            //歌词
            lyric: '',
            //歌曲时长
            duration: 0,
        }
    },
    actions: {
        //切换下一首歌曲
        nextMusic: () => {

        },
        //切换上一首歌曲
        backMusic: () => { },
        //添加音乐，判断state来区分添加方式
        addMusic(val: any, state: string) {
            if (state === "歌单") {
                this.musicList = val;
            } else if (state === '单曲') {
                this.musicList.unshift(val);
            }
        },
        //播放音乐，传入audio
        playMusic() {
            // //修改播放状态
            this.musicState = true;
        },
    },
});

export {
    mainStore,
}