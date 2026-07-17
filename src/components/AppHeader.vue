<script setup>
import { RouterLink } from 'vue-router';
import CoffeeOutlineIcon from '@iconify-vue/mdi/coffee-outline';
import HomeOutlineIcon from '@iconify-vue/mdi/home-outline';
import ClipboardTextOutlineIcon from '@iconify-vue/mdi/clipboard-text-outline';
import TrophyOutlineIcon from '@iconify-vue/mdi/trophy-outline';
import PersonIcon from '@iconify-vue/mdi/person';
</script>

<template>
    <header>
        <div class="logo" style="display: flex;">
            <CoffeeOutlineIcon width="3vw"/>
            <h1>COFFEE QUALITY <br> CHALLENGE</h1>
        </div>
        <div class="navegacao">
            <nav>
                <ul>
                    <li><RouterLink to="/"><HomeOutlineIcon width="2vw"/>Home</RouterLink></li>
                    <li><RouterLink to="/avaliacoes"><ClipboardTextOutlineIcon width="2vw"/>Avaliações</RouterLink></li>
                    <li><RouterLink to="/ranking"><TrophyOutlineIcon width="2vw"/>Ranking</RouterLink></li>
                </ul>
            </nav>
        </div>
        <div class="user">
            <PersonIcon width="3vw"/>
        </div>
    </header>
</template>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    padding: 0.5vw 2vw; 
    outline: solid #E8E6E8 0.15vw;
    align-items: center;
}
.navegacao ul {
    display: flex;
    list-style: none;
    padding: 0;
    gap: 5vw;
}
a {
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    font-size: 1vw;
    transition: 0.3s;
}
a:hover {
    transform: scale(1.1);
    text-shadow: 0.1vw 0.1vw 0.1vw black;
}
.logo {
    color: #340200;
    align-items: center;
    font-size: 0.6vw;
    gap: 1vw;
}
.logo h1 {
    font-weight: bolder;
    cursor: default;
}
.user {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #A5A5A4;
    background-color: #E7E7E7;
    width: 60px;
    height: 60px;
    border-radius: 100vw;
}
</style>