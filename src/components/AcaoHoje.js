
import DolarHoje from "./DolarHoje.js";

export default {
    name:'AcaoHoje',

    data(){
        return{
            valorMercado: 0,

        }
    },
    components: {
        DolarHoje
    },
    methods: {
        puxarAcao(){
            fetch("https://api.origamid.dev/stock/aapl/quote")
            .then(r => r.json())
            .then(r => {
                this.valorMercado = r.latestPrice;
            })
        }
    },
    created(){
      this.puxarAcao();  
    },
    template: `
    <div>
    <p>Ações da apple {{valorMercado}}</p>
    <dolar-hoje></dolar-hoje>

    </div>`
}

