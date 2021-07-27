<template>
    <p>
        <span><slot /></span>
    </p>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'TextBlock'
});
</script>

<style scoped lang="scss"></style>
