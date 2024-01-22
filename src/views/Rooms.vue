<template>
    <div class="container card rooms">
        <Galleria
            ref="galleria"
            v-model:activeIndex="activeIndex"
            :value="images"
            :numVisible="5"
            containerStyle="max-width: 640px"
            :showThumbnails="showThumbnails"
            :showItemNavigators="true"
            :showItemNavigatorsOnHover="true"
            :circular="true"
            :autoPlay="isAutoPlay"
            :transitionInterval="3000"
            :responsiveOptions="responsiveOptions"
            :pt="{
                root: {
                    class: [{ 'flex flex-column': fullScreen }]
                },
                content: {
                    class: ['relative', { 'flex-1 justify-content-center': fullScreen }]
                },

                thumbnailwrapper: 'absolute w-full left-0 bottom-0'
            }"
        >
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" :style="[{ width: !fullScreen ? '100%' : '', display: !fullScreen ? 'block' : '' }]" />
            </template>
            <template #thumbnail="slotProps">
                <div class="grid grid-nogutter justify-content-center">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
                </div>
            </template>
            <template #footer>
                <div class="flex align-items-center bg-black-alpha-90 text-white">
                    <Button icon="pi pi-list" @click="onThumbnailButtonClick" :pt="{ root: { class: 'border-none border-noround hover:bg-white-alpha-10', style: 'background: transparent' } }" />
                    <Button :icon="slideButtonIcon" @click="toggleAutoSlide" :pt="{ root: { class: 'border-none border-noround hover:bg-white-alpha-10', style: 'background: transparent' } }" />
                    <span v-if="images" class="title-container">
                        <span class="text-sm p-3">{{ activeIndex + 1 }}/{{ images.length }}</span>
                        <span class="font-bold text-sm p-3">{{ images[activeIndex].title }}</span>
                        <span class="text-sm p-3">{{ images[activeIndex].alt }}</span>
                    </span>
                    <Button :icon="fullScreenIcon" @click="toggleFullScreen" :pt="{ root: { class: 'border-none border-noround ml-auto hover:bg-white-alpha-10', style: 'background: transparent' } }" />
                </div>
            </template>
        </Galleria>
    </div>
</template>

<script setup lang='ts'>
import { ref, computed, onMounted } from "vue";
import { photoService } from '../services/photoService';

// PRIMEVUE COMPONENTS
import Galleria from 'primevue/galleria';

onMounted(() => {
    photoService.getImages().then((data) => (images.value = data));
    bindDocumentListeners();
});

const galleria = ref();
const images = ref();
const activeIndex = ref(0);
const showThumbnails = ref(false);
const fullScreen = ref(false);
const isAutoPlay = ref(true);

const toggleAutoSlide = () => {
    isAutoPlay.value  = !isAutoPlay.value ;
};
const onThumbnailButtonClick = () => {
    showThumbnails.value  = !showThumbnails.value ;
};

const responsiveOptions = ref([
    {
        breakpoint: '1300px',
        numVisible: 4
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);

const toggleFullScreen = () => {
    if (fullScreen.value ) {
        closeFullScreen();
    } else {
        openFullScreen();
    }
};
const onFullScreenChange = () => {
    fullScreen.value  = !fullScreen.value ;
};
const openFullScreen = () =>{
    let elem = galleria.value.$el;

    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen();
    }
};
const closeFullScreen = () => {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
};
const bindDocumentListeners = () => {
    document.addEventListener('fullscreenchange', onFullScreenChange);
    document.addEventListener('mozfullscreenchange', onFullScreenChange);
    document.addEventListener('webkitfullscreenchange', onFullScreenChange);
    document.addEventListener('msfullscreenchange', onFullScreenChange);
};

const fullScreenIcon = computed(() => {
    return `pi ${fullScreen.value ? 'pi-window-minimize' : 'pi-window-maximize'}`;
});
const slideButtonIcon = computed(() => {
    return `pi ${isAutoPlay.value ? 'pi-pause' : 'pi-play'}`;
});
</script>
<style lang='scss' scoped>
.rooms {
    text-align: -webkit-center;
}
</style>
