import ContactPage from './components/ContactPage.vue'
import PublicPage from './components/PublicPage.vue'
import AdminPage from './components/AdminPage.vue'
import AddCert from './components/AddCert.vue'
import RemoveCert from './components/RemoveCert.vue'
import NavFeature from './components/NavFeature.vue'
import UpdateCert from './components/UpdateCert.vue'
import viewAllCert from './components/viewAllCert.vue'
import CertDownload from './components/CertDownload.vue'
import verifyCert from './components/verifyCert.vue'
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/contact',
        name: 'Contact',
        component: ContactPage
    },
    {
        path: '/',
        name: 'Public',
        component: PublicPage
    },
    {
        path: '/admin',
        name: 'Admin',
        component: AdminPage
    },
    {
        path: '/AddCert',
        name: 'AddCert',
        component: AddCert
    },
    {
        path: '/remove',
        name: 'RemoveCert',
        component: RemoveCert
    },
    {
        path: '/viewAll',
        name: 'viewAllCert',
        component: viewAllCert
    },
    {
        path: '/feature',
        name: 'NavFeature',
        component:NavFeature
    },
    {
        path: '/update',
        name: 'UpdateCert',
        component: UpdateCert
    },
    {
        path: '/download',
        name: 'CertDownload',
        component: CertDownload
    },
    {
        path: '/verify',
        name:'verifyCert',
        component: verifyCert
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router