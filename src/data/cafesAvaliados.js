import { reactive } from "vue";
const cafesAvaliados = reactive([
    {
        id: 1,
        nome: 'Bourboun Amarelo',
        produtor: 'Fazenda Boa Vista',
        aroma: 2,
        sabor: 5,
        acidez: 3,
        corpo: 7,
        finalizacao: 9,
        media: 5.2,
        data: '14/07/2026, 15:40:41',
        observacoes: 'Este é um café esquisito'
    },
    {
        id: 2,
        nome: 'Bourboun Vermelho',
        produtor: 'Fazenda Vila Nova',
        aroma: 3,
        sabor: 5,
        acidez: 5,
        corpo: 7,
        finalizacao: 9,
        media: 6.2,
        data: '12/07/2026, 12:50:41',
        observacoes: 'Fds'
    },
    {
        id: 3,
        nome: 'Bourboun Laranja',
        produtor: 'Fazenda Botas de Judas',
        aroma: 2,
        sabor: 5,
        acidez: 3,
        corpo: 7,
        finalizacao: 9,
        media: 4.3,
        data: '09/07/2026, 12:35:51',
        observacoes: 'Este é um café esquisito'
    },
])
export {cafesAvaliados}