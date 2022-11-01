
<template>
  
 
     <v-container class="mt-10">
      <v-row>
         <header>
         </header>
      </v-row>
     <v-row>    
        <v-col cols="3" sm="3">
          <v-form 
          
         ref="form"
         lazy-validation
  >
    <v-text-field
      v-model="email"
      label="E-mail"
      required
    ></v-text-field>
    <v-text-field type="password"
      v-model="password"
      :counter="20"
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

  import axios from 'axios';
  export default({
      data(){
        return{
        email: '',
        password: '',
        }
      },
   
    

    methods: {


    submitData:function(){
     
   if(this.email != '' && this.password != '')
   {
    
   axios.post('http://localhost/insert.php', {  email:this.email, password:this.password}).then(function(response){ alert(response.data); });
    
  }
}
},
  });
</script>
