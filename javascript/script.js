const { createApp } = Vue;



createApp({
  data(){
    return {
      apiUrl : 'https://flynn.boolean.careers/exercises/api/random/mail',
      emails : [],
      
    }
  },

  methods : {
    getApi(){
      // creo ciclo for per poter generare 10 email con l'apiUrl
      for(let i= 0; i < 10; i++){
        // richiamo axios 
        axios.get(this.apiUrl)
              .then( (res) => {
                // controllo i dati 
                console.log('Dati');
                console.log(res.data);
                console.log(res.data.response);
                // pusho nell'array le email
                this.emails.push(res.data.response)
              })
              .catch( (err) => {
                console.log(err);
              })
      }

      }
  },

  mounted(){
    // richiamo la funzione 
    this.getApi()
    // controllo l'array
    console.log(this.emails);
  }
  
}).mount('#app')