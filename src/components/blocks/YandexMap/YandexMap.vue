<template>
    <div id="map" style="width: 600px; height: 400px"></div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'YandexMap',
    props: {},
    mounted() {
        ymaps.ready(init);
        function init() {
            // Создание карты.
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const myMap = new ymaps.Map('map', {
                // Координаты центра карты.
                // Порядок по умолчанию: «широта, долгота».
                // Чтобы не определять координаты центра карты вручную,
                // воспользуйтесь инструментом Определение координат.
                center: [55.76, 37.64],
                // Уровень масштабирования. Допустимые значения:
                // от 0 (весь мир) до 19.
                zoom: 7
            });
        }
    }
});
</script>

<style scoped lang="scss"></style>
