<template>
    <v-form v-model="valid">
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
        }
      },
   

      submitData:function(){
   if(application.email != '' && application.password != '')
   {
    
     axios.post('http://localhost/insert.php', {  email:application.email, password:application.password}).then(function(response){ alert(response.data.message); });
    
  }
}
      
   });
 
</script>