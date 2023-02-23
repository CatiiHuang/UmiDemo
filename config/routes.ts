export const routes = [
  {
    exact: true,
    path: '/Index/index',
    component: '@/pages/Index/index',
    routes: [
      {
        path: '/',
        name: '页面水印',
        component: '@/pages/WaterMarked/index',
      },
      {
        path: '/virtual-scroll',
        name: '虚拟滚动',
        component: '@/pages/VirtualScroll/index',
      },
    ],
  },

  // 末位匹配
  { path: '/', redirect: '/Index/index' },
];
