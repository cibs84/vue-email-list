// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

var app = new Vue (
    {
        el: '#root',
        data: {
            emailList: [],
            emailRandom: "",
        },
        mounted() {
            // Creo 10 email random che vado ad inserire nella lista delle email
            for (let i = 0; i < 10; i++) {
                const email = this.emailList[i];
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(response => {
                    this.emailRandom = response.data.response
                    this.emailList.push(this.emailRandom);
                    alert(this.emailList);
                });
            }
        }
    }
);