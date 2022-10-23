<template>
    <div>
     <v-container>
         <v-row>
             <v-col
             cols="12"
             md="4"
             >
               
                 <h2>welcome: {{ user.fullName }}</h2>
                
             </v-col>
             <v-col>
                <v-btn
                elevation="6"
                 plain
                 rounded
                >edit</v-btn>
             </v-col>
             <v-col
             cols="12"
             >
               
                 <h2>email: {{ user.email }}</h2>
                
             </v-col>

             
         </v-row>
         <v-row>
            <v-col
             cols="12"
             md="1">
                <v-btn
                elevation="6"
                 plain
                 rounded
                 color="blue"
                >Disconnect</v-btn>
             </v-col>
             <v-col>
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
export default {
  data: () => ({
      user: {
      fullName: 'fullName',
      email: 'example@doe.com',
    },
  }),
}
    
</script>