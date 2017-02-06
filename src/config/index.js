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
      text: '基础',
      url: '/articles/1'
    }, {
      text: '技巧',
      url: '/articles/2'
    }, {
      text: '分享',
      url: '/articles/3'
    }, {
      text: '插件',
      url: '/articles/4'
    }, {
      text: '框架',
      url: '/articles/5'
    }]
  }, {
    text: '成员',
    url: '/group'
  }],
  personer: [{
    text: '个人信息',
    sub: [{
      text: '我的信息',
      url: '/center/info',
      icon: 'icon-username'
    }, {
      text: '修改密码',
      url: '/center/edit_pwd',
      icon: 'icon-mima'
    }, {
      text: '修改头像',
      url: '/center/edit_face',
      icon: 'icon-crop'
    }, {
      text: '修改邮箱',
      url: '/center/edit_email',
      icon: 'icon-email'
    }]
  }, {
    text: '项目',
    sub: [{
      text: '我的项目',
      url: '/center/project',
      icon: 'icon-project'
    }, {
      text: '收藏项目',
      url: '/center/project_love',
      icon: 'icon-shoucang'
    }, {
      text: '上传项目',
      url: '/center/project_add',
      icon: 'icon-shangchuan'
    }]
  }, {
    text: '文摘',
    sub: [{
      text: '我的文摘',
      url: '/center/article',
      icon: 'icon-article'
    }, {
      text: '采集文摘',
      url: '/center/article_love',
      icon: 'icon-shoucang'
    }, {
      text: '写文章',
      url: '/center/article_add',
      icon: 'icon-xiepinglun'
    }]
  }, {
    text: '成员',
    sub: [{
      text: '我的好友',
      url: '/center/friends',
      icon: 'icon-username'
    }, {
      text: '分组',
      url: '/center/groups',
      icon: 'icon-fenzu'
    }]
  }, {
    text: '其他',
    sub: [{
      text: '设置',
      url: '/center/setting',
      icon: 'icon-xitong'
    }, {
      text: '关于我们',
      url: '/center/us',
      icon: 'icon-guanyu'
    }]
  }]
}
export default config
