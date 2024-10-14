<template>
  <div class="common-layout">
    <el-container class="lay-container">
      <!--自定义左侧组件-->
      <common-aside />
      <!--右侧包裹-->
      <el-container>
        <!--右侧上-->
        <el-header class="el-header">
          <!--自定义右上侧组件-->
<!--          // 引入自定义header-->
          <common-header />
        </el-header>
<!--        // 引入Tab-->
        <common-tab/>
        <el-main class="right-main">
<!--          // 主要内容使用路由切换-->
          <router-view></router-view>
        </el-main>
        <!--右侧下-->
      </el-container>
    </el-container>
  </div>
</template>

<script setup>

// import {Comment} from "@element-plus/icons-vue";
import CommonAside from "@/components/CommonAside.vue";
import CommonHeader from "@/components/CommonHeader.vue";
import CommonTab from "@/components/CommonTab.vue";
</script>


<style scoped lang="less">
  .common-layout,.lay-container {
    height: 100%;
  }
  .el-header {
    background-color: #333;
  }
</style>
