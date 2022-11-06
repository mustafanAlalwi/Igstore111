<template>
    <div>
     <v-container>
         <v-row>
             <v-col>
             </v-col>
             <v-col
             cols="12"
             >
             <h1>{{ user}}</h1>
                
             </v-col>

             
         </v-row>
         <v-row>
            <v-col
             cols="12"
             md="2">
                <v-btn
                elevation="6"
                 plain
                 rounded
                 color="blue"
                >Disconnect</v-btn>
             </v-col>
             <v-col 
                cols="12"
                md="2">
                <v-btn
                
                elevation="6"
                 plain
                 rounded
                 color="red"
                >delete account</v-btn>
             </v-col>
         </v-row>
     </v-container>
    </div>
</template>
<script>
import Vue from 'vue';
import axios from 'axios';
export default ({
  data: () =>{
   return{
    email:[],
    wallet:[],
   }
},
mounted() {
  axios
  .get('http://localhost:5000',{email:this.email, password:this.password,wallet:"5000",admin: "0"})
  .then(res => (this.user = res))
},
})
</script>