<template>
    <h3 class="text-left">Ventajas por reservar en nuestra web:</h3>
    <div class="card">
        <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
                    <div class="mt-5 flex align-items-center justify-content-center gap-2">
                        <i :class="slotProps.data.icon" style="font-size: 3.5rem"></i>
                    </div>
                    <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import { productService } from '../services/productService'

// PRIMEVUE COMPONENTS
import Carousel from 'primevue/carousel';

onMounted(() => {
    productService.getProductsSmall().then((data) => (products.value = data.slice(0, 9)));
})

const products = ref();
const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);
</script>

<style scoped>
</style>