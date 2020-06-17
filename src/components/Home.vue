<template>
  <el-container class="home-container">
    <el-header>
      <el-input placeholder="请输入书名" v-model="bookName">
        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
      </el-input>
    </el-header>
    <el-main>
      <el-table :data="books" style="width: 100%">
        <el-table-column prop="bookName" label="书名" width="180">
        </el-table-column>
        <el-table-column prop="author" label="作者" width="180">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        bookName: '',
        books: []
      }
    },
    created () {
    },
    methods: {
      async search () {
        const { data: res } = await this.$http.post('/book', { bookName: this.bookName })
        // console.log(res)
        this.books = res
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
