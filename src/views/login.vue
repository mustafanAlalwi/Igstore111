<template>
     <v-container class="mt-10">
     <v-row>    
        <v-col cols="3" sm="3">
          <v-form 
          
         ref="form"
         v-model="valid"
         lazy-validation
  >
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
    <v-text-field type="password"
      v-model="password"
      :counter="20"
      :rules="passwordRules"
      label="password"
      required
    ></v-text-field>
      
    
  
      <v-btn
      color="success"
      class="mr-4"
      @click="submitData()"
    >
      log in
    </v-btn>

      <v-btn
      class="mr-4"
      @click="submitData()"
      to="/sign_up"
      >

        sign up
      </v-btn>
    </v-form>
        </v-col>
     </v-row>
     </v-container>
  </template>
  
  <script>
  import axios from 'axios'

  export default({
      valid: true,
      password: '',
      passwordRules: [
        v => !!v || 'password is required',
        v => (v && v.length >= 6 ) || 'password must be more than 6 characters',
        v => (v && v.length <= 20 ) || 'password must be less than 20 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
   
    

    methods: {
      validate () {
        this.$refs.form.validate()
      },
    


    submitData:function(){
     
   if(this.email != '' && this.password != '')
   {
    
     axios.post('http://localhost:7070/insert.php', {  email:this.email, password:this.password}).then(function(response){ alert(response.data); });
    
  }
}
},

  });
</script>
