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
            'tabbar-item-text-color':'#ffffff',
            'nav-bar-icon-color':'#FFFFFF',
            'nav-bar-arrow-size':'0.6rem',
            'field-label-color':'#FF9E9A',
            'field-word-limit-color':'#FF9E9A',
            'field-placeholder-text-color':'#FF9E9A',
            'nav-bar-background-color':'#FF9E9A', 
            'nav-bar-text-color':'#FFFFFF',
            'nav-bar-title-text-color':'#FFFFFF',
            'cell-border-color':'#F5E0E0',
            'cell-text-color':'#FF9E9A',
            'cell-right-icon-color':'#FF9E9A',
            'search-content-background-color':'#FFE7E7',
            'field-input-text-color':'#FF9E9A'
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            // hack: `true; @import "~@/styles/vant.less";`,
          },
        },
      },
    },
  },
}