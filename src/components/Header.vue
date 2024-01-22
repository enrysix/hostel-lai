<template>
    <div class="card header-container">
        <Menubar
            :model="items"
            :pt="{
                action: ({ context }) => ({
                    class: context.active ? 'bg-menu-active border-round-sm' : context.focused ? 'bg-menu-active border-round-sm' : undefined
                })
            }"
        />
        <Button class="btn-book" label="Reservar" severity="info" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import Menubar from 'primevue/menubar';
import Button from 'primevue/button';

const router = useRouter();

const items = ref<Array<{}>>([
    {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => { router.push('/home') }
    },
    {
        label: 'Rooms',
        icon: 'pi pi-star',
        command: () => { router.push('/rooms') }
    },
    {
        label: 'Services',
        icon: 'pi pi-search',
        items: [
            {
                label: 'Cooking',
                icon: 'pi pi-bolt',
                command: () => { router.push('/services') }
            },
            {
                label: 'Gym',
                icon: 'pi pi-server',
                command: () => { router.push('/services') }
            },
            {
                label: 'Restaurant',
                icon: 'pi pi-pencil',
                command: () => { router.push('/services') }
            },
            {
                label: 'Booking',
                icon: 'pi pi-palette',
                command: () => { router.push('/services') }
            }
        ]
    },
    {
        label: 'FAQs',
        icon: 'pi pi-question',
        command: () => { router.push('/faqs') }
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope',
        command: () => { router.push('/contact') }
    }
]);
</script>

<style lang="scss" scoped>
.header-container {
    position: fixed;
    width: 100%;
    z-index: 1;
}
.btn-book {
    margin: 16px;
}

@media screen and (min-width: 961px) {
    .header-container {
        justify-content: flex-end;
        display: flex;
        background: #f9fafb;
    }
}
@media screen and (max-width: 960px) {
    .btn-book {
        position: absolute;
        top: 0;
        right: 0;
    }
}
</style>