<script setup>
import { cafesAvaliados } from '@/data/cafesAvaliados';
import PersonGroupOutlineIcon from '@iconify-vue/mdi/person-group-outline';
import TrophyOutlineIcon from '@iconify-vue/mdi/trophy-outline';
import WatchLaterIcon from '@iconify-vue/mdi/watch-later';
import { computed } from 'vue';

const props = defineProps(['tipo','texto','nome']);
const indiceMaiorMedia = computed(() => {
    return cafesAvaliados.reduce((maiorIndice, atual, indice, array) => {
        return (parseFloat(atual.media) || 0) >
               (parseFloat(array[maiorIndice].media) || 0)
            ? indice
            : maiorIndice
    }, 0)
})
const ultimoPos = Number(cafesAvaliados.length-1);
const ultimoCafe = cafesAvaliados[ultimoPos];
</script>

<template>
    <div class="container">
        <div class="logoTotal" v-show="tipo=='total'" style="width: 7vw;height: 7vw;display: flex;justify-content: center;align-items: center;border-radius: 100vw;"><PersonGroupOutlineIcon width="5vw"/></div>
        <div class="logoUltimo" v-show="tipo=='ultimo'" style="width: 7vw;height: 7vw;display: flex;justify-content: center;align-items: center;border-radius: 100vw;"><WatchLaterIcon width="5vw"/></div>
        <div class="logoMaior" v-show="tipo=='maior'" style="width: 7vw;height: 7vw;display: flex;justify-content: center;align-items: center;border-radius: 100vw;"><TrophyOutlineIcon width="5vw"/></div>
        <div class="info">
            <h2>{{ props.nome }}</h2>
            <span class="total" v-show="tipo=='total'" style="color: #5A361E;">{{ cafesAvaliados.length }}</span>
            <span class="media" v-show="tipo=='maior'" style="color: #3E5C11;">{{ cafesAvaliados[indiceMaiorMedia].media }}</span>
            <span class="ultimo" v-show="tipo=='ultimo'" style="color: #275181;">{{ ultimoCafe.media }}</span>
            <h3 v-show="tipo=='ultimo'">{{ ultimoCafe.nome }}</h3>
            <h3 v-show="tipo=='maior'">{{ cafesAvaliados[indiceMaiorMedia].nome }}</h3>
            <h4 v-show="tipo=='maior'">{{ cafesAvaliados[indiceMaiorMedia].produtor }}</h4>
            <h4 v-show="tipo=='ultimo'">{{ ultimoCafe.data }}</h4>
            <p>{{props.texto}}</p>
        </div>
    </div>
</template>

<style scoped>
.info h3 {
    font-weight: bolder;
    font-size: 0.9vw;
}
.info h2 {
    font-weight: bolder;
    font-size: 1vw;
}
.info span {
    font-weight: bolder;
    font-size: 2vw;
}
.info {
    text-align: center;
}
.container {
    border: solid #E7E8E9 0.18vw;
    border-radius: 1vw;
    display: flex;
    padding: 2vw;
    gap: 1vw;
    display: flex;
    justify-content: center;
    min-width: 30vw;
}
.logoTotal {
    color: #5A361E;
    background-color: #FCF0DD;
}
.logoUltimo {
    color: #275181;
    background-color: #E5EBF3;
}
.logoMaior {
    color: #3E5C11;
    background-color: #EDF1E5;
}
</style>