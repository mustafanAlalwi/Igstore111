<template>
    <v-form>
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="8"
          >
            <v-text-field
              v-model="email"
              label="E-mail"
              required

            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            md="5"
          >
          <v-text-field
          type="password"
      v-model="password"
      :counter="20"
      label="password"
      required
    ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            md="5"
          >
          <v-text-field
          type="password"
      v-model="confirmPassword"
      :counter="20"
      label="confirm password"
      required
    ></v-text-field>
          </v-col>
          <v-col 
           cols="12"
            md="5"
            ><v-btn
            @click="submitData()"
            >
            sign in
            </v-btn>
        </v-col>
            
        </v-row>
      </v-container>
    </v-form>
  </template>
 <script>
import axios from 'axios'
export default ({
  data(){
        return{
        email: '',
        password: '',
        confirmPassword: ''
        }
      },
   

      methods: {


submitData:function(){
if(this.email != '' && this.password != '')
{

axios.post('http://localhost:5000', {  email:this.email, password:this.password,wallet:"5000",admin: "0" })
.then(function(response){ alert(response.data); });

}
}
},
      
   });
 
</script>