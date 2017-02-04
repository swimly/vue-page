const config = {
  url: 'http://192.168.4.151/LCDC/app/app.php',
  fileUrl: 'http://192.168.4.151/LCDC/app/',
  menu: [{
    text: '首页',
    url: '/index'
  }, {
    text: '项目',
    url: '/projects',
    sub: [{
      text: '全部',
      url: '/projects'
    }, {
      text: '手机页面',
      url: '/projects/1'
    }, {
      text: '手机app',
      url: '/projects/2'
    }, {
      text: '保险类网站',
      url: '/projects/3'
    }, {
      text: '系统',
      url: '/projects/4'
    }, {
      text: '演示网站',
      url: '/projects/5'
    }, {
      text: '其他',
      url: '/projects/6'
    }]
  }, {
    text: '文摘',
    url: '/articles',
    sub: [{
      text: '全部',
      url: '/articles'
    }, {
      text: '心得',
      url: '/articles/1'
    }]
  }, {
    text: '成员',
    url: '/group'
  }]
}
export default config
