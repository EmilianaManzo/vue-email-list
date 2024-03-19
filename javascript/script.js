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
      for(let i= 0; i < 10; i++){
        axios.get(this.apiUrl)
              .then( (res) => {
                console.log('Dati');
                console.log(res.data);
                console.log(res.data.response);
                this.emails.push(res.data.response)
              })
              .catch( (err) => {
                console.log(err);
              })
      }

      }
  },

  mounted(){
    this.getApi()
    console.log(this.emails);
  }
  
}).mount('#app')