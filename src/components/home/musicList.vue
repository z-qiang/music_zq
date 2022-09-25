<template>
    <div class="musiclist">
        <div class="musiclist__top">
            <div class="musiclist__top-left">发现好歌单</div>
            <div class="musiclist__top-right">查看更多</div>
        </div>
        <div class="musiclist__bottom">
            <van-swipe :loop="false" :width="180" lazy-render :show-indicators="false">
                <van-swipe-item v-for="data in imag.data.result" :key="data" class="musiclist__bottom-card">
                    <router-link :to="{path:'/musiclistitem',query:{id: data.id}}">
                        <div class="musiclist__bottom-img">
                            <img :src="data.picUrl" alt="图片未找到">
                            <div class="musiclist__bottom-img-word">
                                <span></span>{{filterNum(data.playCount)}}
                            </div>
                        </div>
                        <span class="musiclist__bottom-img-wordbottom">{{data.name}}</span>
                    </router-link>
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getMusicList } from '../../api/home/index';
import { Swipe, SwipeItem } from 'vant';
let imag = await getMusicList();
console.log(imag);

let filterNum = (num: number) => {
    if(num >= 100000000){
        return (num / 100000000).toFixed(1) + '亿';
    }else if(num >= 10000){
        return (num / 10000).toFixed(1) + '万';
    }
    return num;
}
</script>

<style scoped lang="less">
@import '../../assets/CSS/measure';
.musiclist{
    width: 100%;
    height: 100%;
    overflow:hidden;
    box-sizing: border-box;
    display: flex;
    flex-flow: column;
    &__top{
        width: 100%;    
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        &-left{
            font-size: .4rem;
            font-weight: bold;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &-right{
            font-size: .2rem;
            border: 1px solid rgba(79,56,62,.3);
            border-radius: .72rem;
            padding: .12rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    &__bottom{
        margin-top: @margin-top;
        &-card{
            &:first-child {
                padding: .4rem 0 .4rem 0;
            }
            &:nth-child(n + 2) {
                padding: .4rem 0 .4rem .4rem;
            }
        }
        &-img{
            position: relative;
            &-word{
                position: absolute;
                top: 4%;
                right: 2%;
                color: white;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                span{
                    width: 0;
                    height: 0;
                    border-left: .3rem solid rgba(255, 255, 255, 0.5);
                    border-top: .16rem solid transparent;
                    border-bottom: .16rem solid transparent;
                    display: block;
                    margin-right: .08rem;
                }
            }
            &-wordbottom{
                display: block;
                font-size: .2rem;
                color: black;
                text-decoration: none;
            }
        }
        img{
            width: 100%;
            border-radius: .24rem;
        }
    }
}
</style>