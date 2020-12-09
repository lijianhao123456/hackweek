module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  css: {
    loaderOptions: {
      less: {
        // 若使用 less-loader@5，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            // 'text-color': '#ffffff',
            // 'border-color': '#eee',
            // 'text-color': '#111',
            'tab-text-color':'#ffffff',
            'tab-font-size':'15px',
            'search-left-icon-color':'#FF9E9A',
            'search-input-height':'26px',
            'tabbar-background-color':'#FF9E9A',
            'tabbar-item-text-color':'#ffffff'
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            // hack: `true; @import "~@/styles/vant.less";`,
          },
        },
      },
    },
  },
}