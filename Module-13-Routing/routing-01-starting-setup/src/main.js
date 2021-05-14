import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from '@/components/teams/TeamsList';
import UsersList from '@/components/users/UsersList';
import TeamMembers from '@/components/teams/TeamMembers';
import NotFound from '@/components/nav/NotFound';
import TeamsFooter from '@/components/teams/TeamsFooter';
import UsersFooter from '@/components/users/UsersFooter';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      path: '/teams',
      // component: TeamsList,
      components: {
        default: TeamsList,
        footer: TeamsFooter
      },
      name: 'teams',
      children: [
        { path: ':teamId', component: TeamMembers, props: true, name: 'team-members' }
      ]
    },
    {
      path: '/users',
      // component: UsersList,
      components: {
        default: UsersList,
        footer: UsersFooter
      }
    },
    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'active',
  scrollBehavior: (_, _2, savedPosition) => {
    // console.log(to);
    // console.log(from);
    // console.log(savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0, left: 0 };
  }
});

router.beforeEach(function(to, from, next) {
  console.log(to, from, next);
  next();
});

const app = createApp(App);

app.use(router);

app.mount('#app');
