<template>
    <div class="container">
        <h3>En este apartado te preparamos porque vienen curvas.</h3>
        <p>
            Te presentamos una lista de preguntas que te pueden asaltar en la noche, o en la mañana o antes de llegar.
            Las responderemos con el tono vital de OPTIMI, lleno de OPTIMISMO y hartos de tanta formalidad normativa que no hace
            más que limitarnos. Somos un espacio joven, dinámico. Queremos que disfrutes con nosotros y aquello que veas que se puede
            mejorar nos lo comentes. Ni somos un hotel ni pretendemos serlo. Pero también muchas ventajas y te animamos a descubrirlas.
            Bienvenido a esta sección donde esperas leer algunas preguntas, pero otras no. Déjanos sorprenderte porque ya podías imaginar
            que no somos precisamente un alojamiento común.
        </p>

        <div class="card">
            <Accordion>
                <AccordionTab header="¿Incluye desayuno?">
                    <p class="m-0">
                        NO. Precisamente nuestros alojamientos en Madrid, Bilbao y Málaga cuentan con negocios de prestigio en sus alrededores.
                        Hasta un café puede ser una experiencia si está preparado con el cariño y mimo con el que lo preparan en el Café de la
                        luz (La Puebla 4-Madrid) o deliciosa una tortilla en la cafetería Tucán en pleno barrio de Indautxu de Bilbao donde sus
                        tortillas son una religión. Nuestro alojamiento es simplemente eso, un espacio donde dormir bien ubicado y a buen precio
                        los extras son decisiones personales. Nosotros disponemos de máquinas para un café rapidito, pero no compares! Tomate tu
                        tiempo. Disfrútalo y conócelos.
                    </p>
                </AccordionTab>
                <AccordionTab header="¿Que hacer si un alojado de la cápsula de al lado es ruidoso?">
                    <p class="m-0">
                        Si no hay mala fe y oyeras un ronquido, alguien que está enfermo y tose es complicado echárselo en cara.
                        Las capsulas debieran aislarte en mayor medida de esos ruidos. de hecho, ofrecemos tapones que reducen aún más
                        los ruidos en recepción, pero si escucharas a alguien hablando alto o en plena charla telefónica o una alarma
                        que no cesa en la mañana eso sí es UNA MOLESTIA. En ocasiones las personas no pensamos que nuestros derechos rozan
                        con los usos de el de al lado. Rogamos que nadie haga ruido en las cápsulas, de ser así siempre se puede dar un
                        aviso sonoro con el clásico shhhh, si persigue notificado en recepción y serán avisados y si prosigue o se repite
                        serán expulsados. El silencio y el descanso es nuestra obsesión para que vuestra experiencia sea super satisfactoria.
                    </p>
                </AccordionTab>
                <AccordionTab header="¿Que ocurre si descubro que he perdido una tarjeta de acceso dentro o fuera del alojamiento?">
                    <p class="m-0">
                        Procede a comunicárnoslo. Asi te daremos pistas de cómo solucionarlo o reemplazarla. Hay que tener en cuenta que la pérdida
                        de tarjetas conlleva una leve sanción de 10€ por eso siempre animamos a darle su valor y cuidarla. En caso de haberse quedado
                        dentro de la taquilla avisa a los recepcionistas en horario de recepción y te ayudarán a recuperarla.
                        Piensa que son como las llaves de casa mientras estés alojado. No son tarjetas de visita.
                    </p>
                </AccordionTab>
            </Accordion>
        </div>
    </div>
</template>

<script setup lang="ts">
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';

</script>

<style scoped>

</style>