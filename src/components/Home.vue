<template>
  <el-container class="home-container">
    <el-header>
      <el-input placeholder="请输入书名" v-model="bookName">
        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
      </el-input>
    </el-header>
    <el-main>Main</el-main>
  </el-container>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        bookName: ''
      }
    },
    created () {
    },
    methods: {
      async search () {
        const { data: res } = await this.$http.post('/book', { bookName: this.bookName })
        console.log(res)
      }
    }
  }
</script>

<style lang="less" scoped>
  .home-container {
    height: 100%;
  }

  .el-header {
    background-color: #409EFF;
    display: flex;
    align-items: center;
  }

  .el-main {
    background-color: #E4E7ED;
  }
</style>
