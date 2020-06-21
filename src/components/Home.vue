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
        <el-table-column label="链接" width="200">
          <template slot-scope="scope">
            <a :href="scope.row.url" target="_blank">{{scope.row.url}}</a>
          </template>
        </el-table-column>
        <el-table-column label="书源" width="200">
          <template slot-scope="scope">
            <el-select v-model="scope.row.url" placeholder="请选择">
              <el-option v-for="item in toArray(scope.row.source)"
                         :key="item.sUrl"
                         :label="item.sName"
                         :value="item.sUrl"></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column label="书源信息" width="180">
          <template slot-scope="scope">
            {{toString(scope.row.source)}}
          </template>
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
        books: [],
        src: '',
        timestamp: ''
      }
    },
    created () {
      // window.setInterval(this.rf, 1000)
    },
    methods: {
      search () {
        this.timestamp = new Date().getTime()
        const interval = window.setInterval(() => {
          setTimeout(this.rf, 0)
        }, 1000)
        this.$http.post('/book', {
          bookName: this.bookName,
          timestamp: this.timestamp
        }).then(response => {
          window.clearInterval(interval)
          this.$message.success('搜索结束')
          // eslint-disable-next-line handle-callback-err
        }, err => {
          window.clearInterval(interval)
          this.$message.error('搜索失败！')
        })
        // const data = await this.$http.post('/book', {
        //   bookName: this.bookName,
        //   timestamp: this.timestamp
        // })
        // console.log(data)
        // this.$message.success('搜索结束')

        // console.log(res)
        // this.books = res
        // window.setInterval()
        // const { data: res1 } = await this.$http.post('/test', {
        //   bookName: this.bookName,
        //   timestamp: this.timestamp
        // })
        // this.books = res1
      },
      async rf () {
        const { data: res } = await this.$http.post('/test', {
          bookName: this.bookName,
          timestamp: this.timestamp
        })
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
      },
      toString (map) {
        var str = ''
        for (var key in map) {
          str = key + ' ' + str
        }
        return str.trim()
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
