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
        <el-table-column prop="url" label="链接" width="200">
        </el-table-column>
        <el-table-column label="书源">
          <template slot-scope="scope">
            <el-select v-model="scope.row.url" placeholder="请选择">
              <el-option v-for="item in toArray(scope.row.source)"
                         :key="item.sUrl"
                         :label="item.sName"
                         :value="item.sUrl"></el-option>
            </el-select>
          </template>
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
        books: [],
        src: ''
      }
    },
    created () {
    },
    methods: {
      async search () {
        const { data: res } = await this.$http.post('/book', { bookName: this.bookName })
        console.log(res)
        // console.log(res[0].source)
        // for (var key in res[0].source) {
        //   console.log(key)
        //   console.log(res[0].source[key])
        // }
        this.books = res
      },
      toArray (map) {
        // console.log(map)
        var list = []
        for (var key in map) {
          list.push({
            sName: key,
            sUrl: map[key]
          })
        }
        // console.log(list)
        return list
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
