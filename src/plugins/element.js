import Vue from 'vue'
import {
  Button, Container, Message, Header, Main, Input, Table, TableColumn,
  Select, Option, Loading
} from 'element-ui'

Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Input)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Select)
Vue.use(Option)
Vue.use(Loading)

Vue.prototype.openLoading = function() {
  const loading = this.$loading({
    lock: true,
    text: '正在加载...',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.3)',
    target: '.novel-table'
    // body: true,
    // customClass: 'mask'
  })
  setTimeout(function() {
    loading.close()
  }, 10000)
  return loading
}

Vue.prototype.$message = Message
