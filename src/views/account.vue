<template>
    <div>
     <v-container>
         <v-row>
             <v-col>
             </v-col>
             <v-col
             cols="12"
             >
             <h2>{{ user.email }}</h2>
                <label>{{ user.wallet }}</label>
                
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
import axios from 'axios';
export default {
    
  data: () => ({
      user: {
      wallet: '',
      email: '',
    },
  }),
  methods: {




fetchData:function(){
if(this.email != '' && this.password != '')
{

axios.get('http://localhost:8080/#/account', {  email:this.email, password:this.password,wallet:"5000",admin: "1" })
.then(function(response){ alert(response.data); });

}
},
},
}

</script>