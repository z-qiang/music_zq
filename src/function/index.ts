import { copyRight, isPlay } from '../api/home/index';


//歌曲是否需要vip
const val = {
    copyRight: {},
    isPlay: true,
}
const copy = async (id: number | string) => {
    let res = await isPlay(id);
    val.isPlay = res.data.data[0].freeTrialInfo;
    let rr = await copyRight(id);
    val.copyRight = rr.data.success;
    return val;
}

export {
    copy,
}