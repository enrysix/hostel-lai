<template>
  <div class="container home-container">
    <div class="items-container card flex flex-wrap gap-3 p-fluid align-items-end">
      <div class="flex-auto">
        <label for="dateIn" class="item-text font-bold block mb-2"> Fecha Entrada </label>
        <Calendar v-model="dateIn" showIcon iconDisplay="input" inputId="dateIn" />
      </div>
      <div class="flex-auto">
          <label for="dateOut" class="item-text font-bold block mb-2"> Fecha Salida </label>
          <Calendar v-model="dateOut" showIcon iconDisplay="input" inputId="dateOut" />
      </div>
      <div class="flex-auto">
        <label for="numRooms" class="item-text font-bold block mb-2"> Camas </label>
        <Dropdown v-model="selectedItem" :options="items" optionLabel="label" optionValue="value"
          :virtualScrollerOptions="{ itemSize: 38 }" inputId="numRooms" />
      </div>
      <div class="flex-auto">
        <Button type="submit" class="btn-search" label="Buscar" />
      </div>
    </div>
  </div>

  <div class="body-content">
    <span class="body-content_title">
      UNA NUEVA EXPERIENCIA DE CONFORT A PRECIO IMBATIBLE
    </span>
    <p>
      Hostel Lai proporciona un nivel de confort superior al hostel
      convencional y a un precio insuperable.
    </p>

    <Divider class="bg-divider">⚝⚝⚝⚝⚝</Divider>

    <Carousel></Carousel>
  </div>
</template>

<script setup lang='ts'>
import { ref } from "vue";

// PRIMEVUE COMPONENTS
import Calendar from 'primevue/calendar';
import Divider from 'primevue/divider';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';

// COMPONENTS
import Carousel from '../components/Carousel.vue';

const dateIn = ref();
const dateOut = ref();
const selectedItem = ref();
const items = ref(Array.from({ length: 50 }, (_, i) => ({ label: i+1, value: i+1 })));
</script>

<style lang='scss' scoped>
.home-container {
  background-image: url(/src/assets/images/la_latina.png);
  height: 510px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.items-container {
  padding: 4rem 16rem;
}
.item-text {
  text-shadow: black 0.1em 0.1em 0.2em;
}
.btn-search {
  margin-top: 1.5rem;
}
.body-content {
  margin: 1.5rem;
  text-align: center;
}
.body-content_title {
  font-size: x-large;
}

@media screen and (max-width: 643px) {
  .home-container {
    padding: 3rem 16px 16px;
  }
  .items-container {
    padding: 5rem 2rem 2rem;
  }
}
</style>
