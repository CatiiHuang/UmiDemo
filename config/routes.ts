export const routes = [
  {
    path: '/index',
    component: '@/pages/Index/index',
    routes: [
      { path: '/index', redirect: '/index/water-marked' },
      {
        exact: true,
        path: '/index/water-marked',
        name: '页面水印',
        component: '@/pages/WaterMarked/index',
      },
      {
        exact: true,
        path: '/index/virtual-scroll',
        name: '虚拟滚动',
        component: '@/pages/VirtualScroll/index',
      },
    ],
  },

  // 末位匹配
  { path: '/', redirect: '/index' },
];
