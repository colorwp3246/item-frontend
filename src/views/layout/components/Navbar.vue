<template>
  <div class="navbar">
    <hamburger :toggle-click="toggleSideBar" :is-active="sidebar.opened" class="hamburger-container"/>
    <breadcrumb />
    <!--<div>-->
      <template>
        <!--<change-language  class="right-menu-item hover-effect"/>-->
      </template>
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <span>欢迎您:{{powerName}}</span>
          <i class="el-icon-caret-bottom"/>
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <!--<router-link class="inlineBlock" to="/">-->
            <el-dropdown-item>
              <span @click="adminData">退出登陸</span>
            </el-dropdown-item>
          <!--</router-link>-->
          <!--<el-dropdown-item divided>-->
            <!--<span style="display:block;" @click="userData">用户</span>-->
          <!--</el-dropdown-item>-->
        </el-dropdown-menu>
      </el-dropdown>
    <!--</div>-->

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import {removeToken} from '@/utils/auth'
export default {
  components: {
    Breadcrumb,
    Hamburger,
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'name',
      'powerName'
    ])
  },
   create(){
     this.$store.dispatch('getmenus',1)
   },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    },
    // logout() {
    //   this.$store.dispatch('LogOut').then(() => {
    //     location.reload() // 为了重新实例化vue-router对象 避免bug
    //   })
    // },
    adminData(){
      this.$store.dispatch("LogOut").then(res=>{
        window.location.href=`${process.env.BASE_TOKEN}/api//auth/logout?redirect=${process.env.BASE_TOKEN}/example`
        removeToken()
      }).catch(err=>{
        console.log(err)
      })
      // this.$store.dispatch('getmenus',2)
      // this.$router.push("/example/approval")
    },
    userData(){
      // this.$store.dispatch('getmenus',1)
      // this.$router.push("/example/operationRecord")
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .right-menu-item {
    display: inline-block;
    padding: 0 8px;
    height: 100%;
    font-size: 18px;
    color: #5a5e66;
    vertical-align: text-bottom;

    &.hover-effect {
      cursor: pointer;
      transition: background .3s;

      &:hover {
        background: rgba(0, 0, 0, .025)
      }
    }
  }

  .navbar {
  height: 50px;
  line-height: 50px;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
     display: flex;
      flex-direction: row;
      justify-content: center;
      align-items:center;
    }
  }
}
</style>

