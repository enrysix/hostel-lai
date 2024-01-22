import { createRouter, createWebHistory, Router } from 'vue-router'

// VIEWS
import Base from '@/views/Base.vue'
import Home from '@/views/Home.vue'
import Rooms from '@/views/Rooms.vue'
import Services from '@/views/Services.vue'
import FAQs from '@/views/FAQs.vue'
import Contact from '@/views/Contact.vue'

/**
 * Define Web Router
 */
const router: Router = createRouter({
    history: createWebHistory(),
    routes: [
        {   path: '', redirect: { name: 'home' } },
        {
            path: '',
            component: Base,
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: Home
                },
                {
                    path: '/rooms',
                    name: 'rooms',
                    component: Rooms
                },
                {
                    path: '/services',
                    name: 'services',
                    component: Services
                },
                {
                    path: '/faqs',
                    name: 'faqs',
                    component: FAQs
                },
                {
                    path: '/contact',
                    name: 'contact',
                    component: Contact
                },
            ]
        },
        {   path: '/:catchAll(.*)', redirect: { name: 'home' } }
    ]
})

export default router