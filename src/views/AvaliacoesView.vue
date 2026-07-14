<script setup>
import { cafesAvaliados } from '@/data/cafesAvaliados';
import CafeCardComponent from '@/components/CafeCardComponent.vue';
import FormularioComponent from '@/components/FormularioComponent.vue';
</script>

<template>
    <main>
        <div class="avaliacoes">
            <h2>Avaliações de Cafés</h2>
            <p>Veja os cafés já avaliados e adicione uma nova avaliação.</p>
            <div class="cafes" v-show="cafesAvaliados.length!=0">
                <h3 style="font-weight: bolder;">Cafés Avaliados ({{ cafesAvaliados.length }})</h3>
                <div class="container">
                    <ul>
                        <CafeCardComponent v-for="cafe in cafesAvaliados" :key="cafe.id" :nome="cafe.nome" :data="cafe.data" :media="cafe.media" :produtor="cafe.produtor"></CafeCardComponent>
                    </ul>
                </div>
            </div>
        </div>
        <div class="form">
            <FormularioComponent />
        </div>
    </main>
</template>

<style scoped>
.cafes {
    border: solid #F0F0F0 0.16vw;
    padding: 1vw;
    border-radius: 1vw;
    max-height: 31vw;
    overflow: auto;
}
h2 {
    font-weight: bolder;
}
h3 {
    margin-bottom: 1vw;
}
p {
    font-size: 0.8vw;
    margin-bottom: 1vw;
}
main {
    display: flex;
    margin: 2vw 5vw; 
    justify-content: center;
    gap: 5vw;
}
ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1vw;
}
</style>