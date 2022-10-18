import { defineStore } from 'pinia';
import { copy } from '../function/index';

type mL = {
    id: number,
    al: {
        id: number,
        name: string,
        picUrl: string,
    },
    name: string,
}

type pM = {
    copyRight: Object | null,
    isPlay: boolean,
}

const mainStore = defineStore('main', {
    state: () => {
        return {
            //当前歌单
            musicList: [
                {
                    id: 476659144,
                    al: {
                        name: "张震岳",
                        picUrl: "https://p1.music.126.net/4azOvzVWCzln6E84lPKZ9A==/109951164548112691.jpg",
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
            //历史记录
            searchHistory: new Array(),
            //底部播放器
            bMusic: true,
            //是否可以播放
            playMessage: false
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
            //检查歌曲是否需要vip
            const getIsPlayMsg = async (id: number) => {
                const aa: pM = await copy(id);
                if (aa.isPlay == null && aa.copyRight) {
                    //分开添加单曲和歌单
                    // if (state === "歌单") {
                    //     val.forEach((ele: any,index:number) => {
                    //         this.musicList.forEach((element: any,index:number) => {
                    //             if(element.id == ele.id){
                    //                 this.musicList.slice(index,index+1);
                    //             }
                    //         });
                    //         this.musicList.unshift(val[index]);
                    //     });
                    //     if (this.musicList.length >= 20) {
                    //         // this.musicList.slice(21,this.musicList.length);
                    //     }
                    //     this.musicState = true;
                    //     this.index = 0;
                    // } else if (state === '单曲') {

                    //每次只添加一首歌曲
                    this.musicList.forEach((item: any, index: number) => {
                        //去重
                        if (item.id == val.id) {
                            //防止歌曲列表没有歌曲
                            if (this.musicList.length > 1) {
                                this.musicList.slice(index, index + 1);
                            }
                        }
                    })
                    this.musicList.unshift(val);
                    //点击歌曲播放
                    this.index = 0;
                    this.musicState = true
                    //歌曲列表只存储20首
                    if (this.musicList.length >= 20) {
                        this.musicList.pop();
                    }
                    // }
                } else {
                    this.playMessage = true;
                    this.index = 0;
                }
            };
            if (state == '单曲') {
                getIsPlayMsg(val.id);
            } else {
                getIsPlayMsg(val[0].id);
            }
            // this.playMessage = !this.playMessage
        },
        //播放音乐，传入audio
        playMusic() {
            // //修改播放状态
            this.musicState = true;
        },

        //储存历史记录
        addSearchHistory(historyList: string) {
            if (this.searchHistory.length < 10) {
                this.searchHistory.unshift(historyList);
                this.searchHistory = [...new Set(this.searchHistory)];
            } else {
                this.searchHistory.unshift(historyList);
                this.searchHistory = [...new Set(this.searchHistory)];
            }
        }
    },
});

export {
    mainStore,
}