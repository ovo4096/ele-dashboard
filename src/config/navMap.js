export default [
  {
    text: '主导航 1',
    icon: 'el-icon-star-on',
    location: {name: 'home-welcome'},
    children: [
      {
        text: '导航 1-1',
        icon: 'el-icon-picture',
        location: {name: 'home-welcome'}
      },
      {
        text: '导航 1-2',
        icon: 'el-icon-time',
        location: {name: 'home-demo'}
      }
    ]
  },
  {
    text: '主导航 2',
    icon: 'el-icon-star-on',
    location: {name: 'settings-demo'},
    children: [
      {
        text: '导航 2-1',
        icon: 'el-icon-star-on',
        location: {name: 'settings-demo'}
      },
      {
        text: '导航 2-2',
        icon: 'el-icon-star-off',
        location: {name: 'settings-demo2'}
      }
    ]
  },
  {
    text: '主导航 3',
    icon: 'el-icon-star-off',
    location: {name: ''}
  }
]
