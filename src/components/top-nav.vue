<template>
  <el-menu theme="dark" default-active="1" mode="horizontal" class="ele-rounded-0" @select="handleSelect">
    <template v-for="(link, key) in navMap">
      <el-menu-item :index="key.toString()">{{ link.text }}</el-menu-item>
    </template>
    <slot></slot>
  </el-menu>
</template>

<script>
  export default {
    props: ['navMap'],
    methods: {
      handleSelect (key, keyPath) {
        if (this.navMap[key] !== undefined) {
          console.log(this.navMap[key].location)
          this.$router.push(this.navMap[key].location)
        }
      }
    }
  }
</script>
