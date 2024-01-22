<template>
    <div class="container">
        <div class="contact-container">
            <b>MADRID</b>
            <span>C/ Pepito Grillo</span>
            <i>+34 600 00 00 00</i>
            <span>Como llegar:</span>
            <p>
                Ubicado en pleno centro de la ciudad en un enclave privilegiado, en el distrito de Malasaña/Chueca, a 2 pasos caminando de
                la estación de Metro de Gran Vía. [jTG8] Nuestro establecimiento se encuentra a aproximadamente 20 minutos (en coche/taxi)
                del aeropuerto y aproximadamente 15 minutos (en coche/taxi) de la estación de autobuses de Avenida América..
            </p>
            <div class="map_container mt-2">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.6952194630762!2d-3.6675368246470956!3d40.393447057057145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422674d5d99e01%3A0x275b2e80f7c7b009!2sC.%20del%20Arroyo%20del%20Olivar%2C%2012%2C%20Puente%20de%20Vallecas%2C%2028053%20Madrid!5e0!3m2!1ses!2ses!4v1705920040583!5m2!1ses!2ses"
                    class="map_body"
                    allowfullscreen="true"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.contact-container {
    text-align: center;
    display: flex;
    flex-direction: column;
}
.map_body {
    border:0;
    width: 650px;
    height: 450px;
}
@media screen and (max-width: 720px) {
    .map_body {
        width: 400px;
        height: 300px;
    }
}
@media screen and (max-width: 450px) {
    .map_body {
        width: 271px;
        height: 338px;
    }
}
</style>