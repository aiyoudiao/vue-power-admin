<template>
  <div>
    <el-popover
      ref="pop"
      placement="right"
      :title="icon"
      width="300"
      trigger="click"
    >
      <div class="icon-group">
        <i :class="'fa fa-' + icon" />
      </div>
      <el-row :gutter="10">
        <el-col :span="8">
          <el-tooltip effect="dark" :content="iconClass" placement="top">
            <el-button style="width: 100%;" @click="copy(iconClass)">Class</el-button>
          </el-tooltip>
        </el-col>
        <el-col :span="8">
          <el-tooltip effect="dark" :content="iconHtml" placement="top">
            <el-button style="width: 100%;" @click="copy(iconHtml)">HTML</el-button>
          </el-tooltip>
        </el-col>
        <el-col :span="8">
          <el-tooltip effect="dark" :content="iconComponent" placement="top">
            <el-button style="width: 100%;" @click="copy(iconComponent)">组件</el-button>
          </el-tooltip>
        </el-col>
      </el-row>
    </el-popover>
    <span v-popover:pop>
      <el-tag type="info">
        <i :class="'fa fa-' + icon" />
      </el-tag>
      <span style="font-size: 10px;">{{ icon }}</span>
    </span>
  </div>
</template>

<script>
import clipboard from 'clipboard-polyfill'
export default {
  name: 'NxIconCell',
  props: {
    icon: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    iconClass() {
      return `fa fa-${this.icon}`
    },
    iconHtml() {
      return `<i class="fa fa-${this.icon}" aria-hidden="true"></i>`
    },
    iconComponent() {
      return `<nx-icon name="${this.icon}"/>`
    }
  },
  methods: {
    copy(text) {
      clipboard.writeText(text)
      this.$message({
        message: `${text} 复制到剪贴板`,
        type: 'success'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-group {
  text-align: center;
  font-size: 200px;
}
</style>
