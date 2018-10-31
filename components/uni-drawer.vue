<template>
    <view class="uni-drawer" :class="{'uni-drawer-visible':visible,'uni-drawer-right':rightMode}">
        <view v-if="showMask" class="uni-drawer-mask" @tap="close"></view>
        <view class="uni-drawer-content">
            <view class="drawer-content">
            	<!--<view class="title">电影分类</view>-->
				<button type="primary" class="primary btn-extra" @tap="switchCatsInSon">换一批</button>
							
            	<view class="uni-list">
            		<block v-for="(movieCat,index) in movieCatsIntoSon" :key="movieCat.id">
            			
            			<view class="uni-list-cell" hover-class="uni-list-cell-hover">
            				<view class="uni-list-cell-navigate uni-navigate-right" @tap="loadMovieByCat(movieCat.id,movieCat.name)">
            					{{movieCat.name}}
            				</view>
            			</view>
            		</block>
            	</view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        props: {
            /**
             * 显示状态
             */
            visible: {
                type: Boolean,
                default: false
            },
            /**
             * 显示模式（左、右），只在初始化生效
             */
            mode: String,
            /**
             * 蒙层显示状态
             */
            mask: {
                type: [Boolean, String],
                default: true
            },
			movieCatsIntoSon:{
				type:Array
			},
			getMoviesByCatInSon:{
				type:Function,
				default:null
			},
			switchCatsInSon:{
				type:Function,
				default:null
			}
        },
        data() {
            return {
                rightMode: false
            }
        },
        computed: {
            showMask() {
                return String(this.mask) === 'true'
            }
        },
        created() {
            this.rightMode = this.mode === 'right'
        },
        methods: {
            close() {
                this.$emit('close')
            },
						loadMovieByCat(catId,catName){
							this.close();//关闭弹出窗
							this.getMoviesByCatInSon(catId,catName);
						}
        }
    }
</script>

<style scoped>
    .uni-drawer {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        visibility: hidden;
		z-index: 99;
    }

    .uni-drawer>.uni-drawer-mask {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
		
        background: rgba(0, 0, 0, 0.4);

		
    }

    .uni-drawer>.uni-drawer-content {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 61.8%;
        height: 100%;
        background: #FFFFFF;
        transition: all 0.3s ease-out;
        transform: translatex(-100%);
    }

    .uni-drawer.uni-drawer-right>.uni-drawer-content {
        left: auto;
        right: 0;
        transform: translatex(100%);
    }

    .uni-drawer.uni-drawer-visible {
        visibility: visible;
    }

    .uni-drawer.uni-drawer-visible>.uni-drawer-mask {
        display: block;
    }

    .uni-drawer.uni-drawer-visible>.uni-drawer-content {
        transform: translatex(0);
    }

		.btn-extra{
			width:60%;
			font-size: 26px;
		}
		.button {
			font-size: 14px;
		}
</style>
