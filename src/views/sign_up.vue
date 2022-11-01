<template>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="5"
          >
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="First name"
              required
            ></v-text-field>
          </v-col>
  
          <v-col
            cols="12"
            md="5"
          >
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="10"
              label="Last name"
              required
            ></v-text-field>
          </v-col>
  
          <v-col
            cols="12"
            md="8"
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
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
      :rules="passwordRules"
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
      v-model="password"
      :counter="20"
      :rules="confirmPasswordRules"
      label="confirm password"
      required
    ></v-text-field>
          </v-col>
          <v-col 
           cols="12"
            md="5"
            ><v-btn
            @click="submitData"
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



     valid: false,
     firstname: '',
     lastname: '',
     nameRules: [
       v => !!v || 'Name is required',
       v => v.length <= 10 || 'Name must be less than 10 characters',
     ],
     
     email: '',
     emailRules: [
       v => !!v || 'E-mail is required',
       v => /.+@.+/.test(v) || 'E-mail must be valid',
     ],
     password: '',
     
      passwordRules: [
        v => !!v || 'password is required',
        v => (v && v.length >= 6 ) || 'password must be more than 6 characters',
        v => (v && v.length <= 20 ) || 'password must be less than 20 characters',
      ],
      confirmPasswordRules: [
        v => !!v || 'password is required',
        v => (v && v.length >= 6 ) || 'password must be more than 6 characters',
        v => (v && v.length <= 20 ) || 'password must be less than 20 characters',
       
      ],

      submitData:function(){
   if(application.email != '' && application.password != '')
   {
    
     axios.post('http://localhost/insert.php', {  email:application.email, password:application.password}).then(function(response){ alert(response.data.message); });
    
  }
}
      
   });
 
</script>