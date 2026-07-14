<script setup>
import CoffeeOutlineIcon from '@iconify-vue/mdi/coffee-outline';
</script>

<template>
    <div class="container">
        <CoffeeOutlineIcon width="15vw" style="color: #54331C;"/>
        <div>
            <h2>Campeonato de Avaliação <br> de Qualidade de Café</h2>
            <div style="width: 4vw; height: 0.3vw; background: #B99D86; border-radius: 1vw;"></div>
            <p>Avalie, compare e descubra os melhores <br> cafés especiais.</p>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15vw;
    background: #F8F5F2;
    margin: 2vw 3vw;
    padding: 2vw 0;
    border: solid #EAE5E2 0.2vw;
    border-radius: 1vw;
}
.container div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1vw;
}
.container div h2 {
    font-weight: bolder;
    font-size: 2vw;
}
.container div p {
    font-size: 1vw;
    font-weight: 400;
}
</style>