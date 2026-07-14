<script setup>
import { RouterLink } from 'vue-router';
import BannerComponent from '@/components/BannerComponent.vue';
import BannersPrincipaisCompoent from '@/components/BannersPrincipaisCompoent.vue';
import ClipboardTextOutlineIcon from '@iconify-vue/mdi/clipboard-text-outline';
</script>

<template>
  <BannerComponent />
  <div class="principais">
    <BannersPrincipaisCompoent :tipo="'total'" :nome="'Total de Cafés Avaliados'" :texto="'cafés'"/>
    <BannersPrincipaisCompoent :tipo="'maior'" :nome="'Café com Maior Nota'" :texto="''"/>
    <BannersPrincipaisCompoent :tipo="'ultimo'" :nome="'Última Avaliação'" :texto="''"/>
  </div>
  <RouterLink class="button" to="/avaliacoes"><ClipboardTextOutlineIcon  width="1.8vw"/>Ver Avaliações</RouterLink>
</template>

<style scoped>
div.principais {
  display: flex;
  justify-content: center;
  gap: 2vw;
}
.button {
  gap: 0.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1vw;
  font-weight: bolder;
  color: white;
  text-decoration: none;
  background: #58361F;
  border-radius: 1vw;
  padding: 0.6vw 0;
  margin: 2vw 43vw;
  transition: 0.3s;
}
.button:hover {
  transform: scale(1.1);
  background: #3a2313;
}
</style>