<template>
    <el-container class="wrap">
        <el-aside width="200px" class="slide-nav" :class="{'aside-toggle':isCollapse}">
            <el-menu
                class="slide-menu"
                backgroundColor='#424f63'
                textColor="#ffffff"
                activeTextColor="#ffd04b"
                unique-opened
                :default-active="$route.path"
                router
                :collapse="isCollapse"
            >
                <div class="slide-logo">
                    <img src="@/assets/logo.png" alt="">
                </div>
                <template v-for="(item, index) in addRouters">
                    <el-submenu 
                        :index="item.path" 
                        :key="index" 
                        v-if="item.children && item.children.length>0"
                    >
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span v-text="item.title"></span>
                        </template>
                        <el-menu-item v-for="(child,childIndex) in item.children" 
                            :key="childIndex" 
                            :index="child.path"
                            v-text="child.title"
                        >
                        </el-menu-item>
                    </el-submenu>
                    
                </template>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header class="wrap-header">
                <div class="menu-toggle" @click="collapse">
                    <i class="el-icon-s-fold" v-show="!isCollapse" title="展开"></i>
                    <i class="el-icon-s-unfold" v-show="isCollapse" title="收起"></i>
                </div>
                <el-dropdown trigger="click">
                    <p class="user">
                        <img src="@/assets/user.jpg">
                        <span>管理员</span>
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </p>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="loginOut">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-header>
            <el-main class="con">
                <el-scrollbar style="height: 100%;">
                    <router-view></router-view>
                </el-scrollbar>
            </el-main>
        </el-container>
    </el-container>
</template>

<script type="text/ecmascript-6">
import {mapGetters} from 'vuex'
export default {
    data() {
        return {
            isCollapse: false,
        }
    },
    methods:{
        collapse(){
            this.isCollapse = !this.isCollapse
        }
    },
    computed:{
        ...mapGetters(["addRouters"])
    }
}
</script>

<style scoped>
    .wrap{
        height: 100vh;
    }
    .slide-nav{
        background:#424f63;
        min-height: 100%;
    }
    .wrap-header{
        width: 100%;
        display:flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ccc;
    }
    /* .con{
        margin: 0;
        padding: 0;
    } */
    .slide-logo{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60px;
        border-bottom: 1px solid #ccc;
    }
    .slide-logo img{
        height: 40px;
    }
    .slide-menu{
        border:none
    }
    .menu-toggle{
        width: 50px;
        color:rgb(14, 13, 13);
        font-size:40px;
    }
    .aside-toggle{
        width:64px!important;
    }
    .user img{
        width: 35px;
        height: 35px;
        border-radius:50%;
        margin-right:10px;
    }
</style>
<style>
.el-scrollbar__wrap{
    overflow-x:auto;
}
</style>
