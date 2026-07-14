<script setup>
import ClipboardEditOutlineIcon from '@iconify-vue/mdi/clipboard-edit-outline';
import CoffeeOutlineIcon from '@iconify-vue/mdi/coffee-outline';
import FruitLemonIcon from '@iconify-vue/mdi/fruit-lemon';
import SeedIcon from '@iconify-vue/mdi/seed';
import SmellIcon from '@iconify-vue/mdi/smell';
import CupFullIcon from '@iconify-vue/mdi/cup-full';
import LightbulbOn10Icon from '@iconify-vue/mdi/lightbulb-on-10';
import SyncIcon from '@iconify-vue/mdi/sync';
import { ref } from 'vue';

const nome = ref('');
const produtor = ref('');
const aroma = ref(0);
const sabor = ref(0);
const acidez = ref(0);
const corpo = ref(0);
const finalizacao = ref(0);
const obs = ref('');

function autoCorrecao() {
    if (aroma.value > 10) {
        aroma.value = 10;
    } else if (aroma.value < 1) {
        aroma.value = 0;
    };
}

</script>

<template>
    <div class="whatever">
        <h2><ClipboardEditOutlineIcon width="2vw"/> Nova Avaliação</h2>
    <form action="">
        <div class="textos">
            <div class="nome">
                <h4>Nome do Café</h4>
                <input type="text" placeholder="Ex.: Bourbon Amarelo" v-model="nome">
            </div>
            <div class="produtor">
                <h4>Produtor</h4>
                <input type="text" placeholder="Ex.: Fazenda Boa Vista" v-model="produtor">
            </div>
        </div>
        <div class="notas">
            <h3>Notas SCA (0 a 10)</h3>
            <div class="inputs">
                <ul>
                    <li>
                        <h4><SmellIcon width="1.2vw"/>Aroma</h4>
                        <input type="number" v-model="aroma" max="10" min="0" v-on:input="autoCorrecao()">
                    </li>
                    <li>
                        <h4><CoffeeOutlineIcon width="1.2vw"/>Sabor</h4>
                        <input type="number" v-model="sabor" max="10" min="0">
                    </li>
                    <li>
                        <h4><FruitLemonIcon width="1.2vw"/>Acidez</h4>
                        <input type="number" v-model="acidez" max="10" min="0">
                    </li>
                    <li>
                        <h4><SeedIcon width="1.2vw"/>Corpo</h4>
                        <input type="number" v-model="corpo" max="10" min="0">
                    </li>
                    <li>
                        <h4><CupFullIcon width="1.2vw"/>Finalização</h4>
                        <input type="number" v-model="finalizacao" max="10" min="0">
                    </li>
                </ul>
            </div>
        </div>
        <div class="obs">
                <h3>Observações</h3>
                <input type="text" placeholder="Digite suas observações sobre o café..." v-model="obs" maxlength="300">
        </div>
        <div class="stuff">
            <div class="media">
                <h3>Média SCA(calculada automaticamente)</h3>
                <span>{{ (aroma+sabor+acidez+corpo+finalizacao)/5 }}</span>
            </div>
            <div class="observ">
                <div>
                    <LightbulbOn10Icon  width="2vw"/>
                    <p>A média é calculada com base na soma das 5 notas dividas por 5</p> 
                </div>
                <p>(Aroma + Sabor + Acidez + Corpo + Finalização) / 5</p>
            </div>
        </div>
        <div class="botoes">
            <button><SyncIcon width="2vw"/> Limpar</button>
            <button><ClipboardEditOutlineIcon width="2vw"/> Salvar Avaliação</button>
        </div>
    </form>
    </div>
</template>

<style scoped>
.whatever {
    border: solid #F0F0F0 0.16vw;
    border-radius: 1vw;
    padding: 2vw 5vw;
}
.textos {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
ul {
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
}
ul li {
    display: flex;
    flex-direction: column;
}
ul li h4 {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>