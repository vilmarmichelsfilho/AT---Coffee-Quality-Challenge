<script setup>
import RankCardComponent from '@/components/RankCardComponent.vue';
import TrophyOutlineIcon from '@iconify-vue/mdi/trophy-outline';
import GoogleAnalyticsIcon from '@iconify-vue/mdi/google-analytics';
import { cafesAvaliados } from '@/data/cafesAvaliados';
import { computed } from 'vue';

const ranking = computed(() => {
    return [...cafesAvaliados].sort((a, b) => b.media - a.media)
})
</script>

<template>
    <main>
        <div class="whatever">
            <div class="texto">
                <TrophyOutlineIcon width="3vw" style="color: #380000;" />
                <div>
                    <h2>Ranking Geral</h2>
                    <p>Classificação dos melhores cafés do campeonato.</p>
                </div>
            </div>
            <div class="total">
                <GoogleAnalyticsIcon width="3vw" style="color: #380000;"/>
                <div>
                    <h3>Total de Cafés Avaliados</h3>
                    <span>{{ cafesAvaliados.length }}</span>
                </div>
            </div>
        </div>
        <div class="rank">
            <ul class="something">
                <li>Posição</li>
                <li>Café</li>
                <li>Produtor</li>
                <li>Nota Final(Média SCA)</li>
                <li>Ações</li>
            </ul>
            <ul class="lista">
                <RankCardComponent v-for="(cafe,index) in ranking" :key="cafe.id" :posicao="index+1" :nome="cafe.nome" :produtor="cafe.produtor" :nota="cafe.media"/>
            </ul>
        </div>
    </main>
</template>

<style scoped>
.lista {
    list-style: none;
    padding: 0;
}
.rank {
    margin-top: 3vw;
    background: #FCFBFA;
    padding: 1vw;
    border: solid #DDDDDD 0.15vw;
    border-radius: 1vw;
}
.something li {
    font-weight: bolder;
    font-size: 0.9vw;
}
.something {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-between;
}
main {
    margin: 2vw 5vw;
}
.total {
    display: flex;
    align-items: center;
    text-align: center;
    background: #F9F8F7;
    border: solid #F1F0F0 0.15vw;
    border-radius: 1vw;
    padding: 1vw;
    gap: 1vw;
}
.total h3 {
    font-weight: bolder;
}
.total span {
    font-weight: bolder;
    color: #380000;
    font-size: 1.5vw;
}
.whatever {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.texto {
    display: flex;
    align-items: center;
}
.texto h2 {
    font-weight: bolder;
    font-size: 1.6vw;
}
.texto p {
    font-size: 1vw;
}
</style>