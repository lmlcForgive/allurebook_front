<template>
  <el-container class="home-container">
    <el-header>
      <el-input placeholder="请输入书名" v-model="bookName" class="search-input"
                @keyup.enter.native="search">
        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
      </el-input>
    </el-header>
    <el-main>
      <el-table :data="books" style="width: 100%" class="novel-table">
        <el-table-column prop="bookName" label="书名" width="180" align="center">
        </el-table-column>
        <el-table-column prop="author" label="作者" width="180" align="center">
        </el-table-column>
        <el-table-column label="链接" width="200" align="center">
          <template slot-scope="scope">
            <a :href="scope.row.url" target="_blank">{{scope.row.url}}</a>
          </template>
        </el-table-column>
        <el-table-column label="书源" width="150" align="center">
          <template slot-scope="scope">
            <el-select v-model="scope.row.url" placeholder="请选择" popper-class="source-select">
              <el-option v-for="item in toArray(scope.row.source)"
                         :key="item.sUrl"
                         :label="item.sName"
                         :value="item.sUrl"></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column label="书源信息" width="180" align="center">
          <template slot-scope="scope">
            {{toString(scope.row.source)}}
          </template>
        </el-table-column>
        <el-table-column label="下载" width="180" align="center">TXT下载
        </el-table-column>
      </el-table>
      <!--      {{timestamp}}-->
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
      // window.setInterval(this.rf, 1000)
    },
    methods: {
      search () {
        const rLoading = this.openLoading()
        this.$http.post('/book', {
          bookName: this.bookName
        }).then(response => {
          this.books = response.data
          rLoading.close()
          // eslint-disable-next-line handle-callback-err
        }, err => {
          rLoading.close()
        })
        // this.books = res
      },
      toArray (map) {
        // console.log(map)
        const list = []
        for (const key in map) {
          list.push({
            sName: key,
            sUrl: map[key]
          })
        }
        // console.log(list)
        return list
      },
      toString (map) {
        let str = ''
        for (const key in map) {
          str = key + ',' + str
        }
        return str.substring(0, str.lastIndexOf(','))
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

  .search-input {
  }
</style>
