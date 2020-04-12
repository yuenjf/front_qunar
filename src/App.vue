<template>
  <div id="app">
    <!--
      vue自带标签，路由被加载过，内容被保存到内存，下次再加载直接调用内存内容，不再渲染组件和钩子函数（activated除外）
    -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<style lang="stylus">

</style>
