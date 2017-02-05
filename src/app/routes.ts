// src/app/routes.ts
import {Home} from './components/home';     // ./components/home/index.ts
import {Duty} from './components/duty';
import {Admin} from './components/admin';

export default [
    {path: '/', component: Home, name: 'Home'},
    {path: '/duty', component: Duty, name: 'Duty'},
    {path: '/admin', component: Admin, name: 'Admin'}
];
