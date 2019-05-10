 
 
 Vue.component('footer', {  
  data: function(){
    return {
    }  
  },
  template:`<v-footer fixed>
    <v-spacer/>
    <span class="font-weight-light copyright text-xs-center">
      &copy; {{ (new Date()).getFullYear() }}
      <a href="https://www.themesine.com/" target="_blank"> ThemeSine </a>
      , made with
      <v-icon color="tertiary" size="17">mdi-heart</v-icon>
      for a better web
    </span>
  </v-footer>` ,
    mounted () { 
    },
    methods : { 
    }
  
}) ;




new Vue({
    el: '#app',
   });