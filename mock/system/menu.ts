import { resultSuccess } from '../_util'

const testRouter = {
  path: '/testRouter',
  name: 'TestRouter',
  component: 'LAYOUT',
  meta: {
    title: '测试路由',
    icon: 'mdi-account',
  },
  redirect: '/testRouter/listOne',
  children: [
    {
      path: '/testRouter/listOne',
      name: 'listOne',
      meta: {
        title: 'listOne',
        icon: 'mdi-account',
      },
      redirect: '/testRouter/listOne/testOne',
      children: [
        {
          path: '/testRouter/listOne/testOne',
          name: 'test2',
          component: '/testRouter/listOne.vue',
          meta: {
            title: 'listOne_item',
          },
        },
      ],
    },
    {
      path: '/testRouter/listTwo',
      name: 'listTwo',
      component: '/testRouter/listTwo.vue',
      meta: {
        title: 'listTwo',
      },
    },
    {
      path: '/testRouter/listThree',
      name: 'listThree',
      component: '/testRouter/listThree/index.vue',
      meta: {
        title: 'listThree',
      },
    },
  ],
}

export default [
  {
    url: '/basic-api/getMenuList',
    methods: 'get',
    response: () => {
      return resultSuccess({
        menus: [testRouter],
      })
    },
  },
]
