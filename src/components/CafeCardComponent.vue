<script setup>
const props = defineProps(['nome','produtor','data','media']);
import SeedIcon from '@iconify-vue/mdi/seed';
</script>

<template>
    <li>
        <div class="image">
            <SeedIcon width="2.5vw"/>
        </div>
        <div class="info">
            <h2>{{ props.nome }}</h2>
            <p>Produtor: {{ props.produtor }}</p>
            <p>Avaliado em: {{ props.data }}</p>
        </div>
        <div class="media">
            <span>Média SCA</span>
            <h3>{{ props.media }}</h3>
        </div>
    </li>
</template>

<style scoped>
h2 {
    font-weight: bolder;
}
li {
    display: flex;
    align-items: center;
    gap: 1vw;
    border: solid #E8E8E8 0.16vw;
    padding: 0.5vw;
    border-radius: 0.7vw;
}
.image {
    color: #896A48;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F7F1EC;
    border: solid #F0EDE7 0.15vw;
    border-radius: 0.5vw;
    padding: 1vw;
}
.media {
    margin-left: 5vw;
    text-align: center;
}
.media span {
    font-weight: 500;
}
.media h3 {
    font-weight: 600;
    font-size: 1.2vw;
    color: #174310;
}
</style>