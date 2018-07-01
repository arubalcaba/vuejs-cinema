import Vue from 'vue';
import './style.scss'

new Vue({
    el: '#app',
    components:{
        'movie-list': {
            template: `<div id="movie-list">
                        <div v-for="movie in movies">{{movie.title}}</div>    
                      <div>     
            `,
        data: function(){
            return{
                movies: [
                    {title: 'Jurassic Pork'}, 
                    {title:'Good Will Humping'},
                    {title:'ET: The Extra Testicle'}, 
                    {title:'Saturday Night Beaver'}, 
                    {title:'Womb Raider'}]
            };
        }    
        },
        'movie-filter': {
            template: `<div id="movie-filter"
                            <h2>Filter Results</h2>
                       <div>     
            `
        }
    }
})
