<script setup>
const props = defineProps(['posicao','nome','produtor','nota']);
import StarIcon from '@iconify-vue/mdi/star';
import { ref } from 'vue';
const classe = ref('something'+props.posicao);
</script>

<template>
    <li :class="classe">
        <span>{{ posicao }}°</span>
        <h3>{{ nome }}</h3>
        <p>{{ produtor }}</p>
        <div class="nota">
            <span>{{ nota }}</span>
            <div class="estrelas">
                <StarIcon width="1.5vw" style="color: #F2B61E;" v-show="props.nota>2"></StarIcon>
                <StarIcon width="1.5vw" style="color: #F2B61E;" v-show="props.nota>4"></StarIcon>
                <StarIcon width="1.5vw" style="color: #F2B61E;" v-show="props.nota>6"></StarIcon>
                <StarIcon width="1.5vw" style="color: #F2B61E;" v-show="props.nota>8"></StarIcon>
                <StarIcon width="1.5vw" style="color: #F2B61E;" v-show="props.nota>=10"></StarIcon>
                <StarIcon width="1.5vw" style="color: #BDBCBC;" v-show="props.nota<2"></StarIcon>
                <StarIcon width="1.5vw" style="color: #BDBCBC;" v-show="props.nota<4"></StarIcon>
                <StarIcon width="1.5vw" style="color: #BDBCBC;" v-show="props.nota<6"></StarIcon>
                <StarIcon width="1.5vw" style="color: #BDBCBC;" v-show="props.nota<8"></StarIcon>
                <StarIcon width="1.5vw" style="color: #BDBCBC;" v-show="props.nota<10"></StarIcon>
            </div>
        </div>
        <button>Ver Detalhes</button>
    </li>
</template>

<style scoped>
.something1 {
    background: #FFF8E9;
}
.something2 {
    background: #F6F6F6;
}
.something3 {
    background: #FCF6EF;
}
button {
    background: #FFFFFF;
    outline: none;
    border: solid #B49D8A 0.15vw;
    color: #291010;
    border-radius: 0.5vw;
    font-size: 0.8vw;
    font-weight: bolder;
    padding: 0.5vw 1vw;
    cursor: pointer;
    transition: 0.3s;
}
button:hover {
    background: #E8E8E8;
    box-shadow: 0.1vw 0.1vw 0.5vw black;
    transform: scale(1.05);
}
span {
    font-weight: bolder;
}
h3 {
    font-weight: bolder;
}
li {
    padding: 1vw 0.5vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: solid #DDDDDD 0.15vw;
}
.nota {
    display: flex;
    align-items: center;
    gap: 0.5vw;
}
.nota span {
    font-size: 1.5vw;
    color: #184011;
}
</style>