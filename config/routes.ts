export const routes = [
  { exact: true, path: '/index', component: './Index/index' },
  {
    path: '/user',
    component: './User/index',
    routes: [{ path: '/user/detail', component: './UserDetail/index' }],
  },
  { path: '/virtual-scroll', component: './VirtualScroll/index' },
  { path: '/water-marked', component: './WaterMarked/index' },
  // 末位匹配
  { component: './Index/index' },
];
