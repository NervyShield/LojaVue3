

<script> 
export default {
    
    name:'TempoHoje',
    data(){
        return{
            tempMaxima: 0,
        }
    },
    methods: {
        puxarTempo() {
            fetch("https://api.origamid.dev/weather/rio")
            .then(r=> r.json())
            .then(r => {
                this.tempMaxima = r.consolidated_weather[0].max_temp.toFixed(2);
            })
        }
    },
    created(){
      this.puxarTempo();  
    },
    template: `<p>Rio de Janeiro, máxima de: {{tempMaxima}}</p>`
}

</script>
