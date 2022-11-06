<template>
    <div>
        <v-continer>
            <v-row>
                <v-col 
                cols="6">
                <v-hover>
                      <v-img
                      
                      position="absolute"
                     src="maxresdefault.jpg"
                   ></v-img>
                </v-hover>
                </v-col>
                <v-col 
                cols="6">
                 <h3 class="text-h4 font-weight-light green--text mb-2">
                  NVIDIA GeForce RTX 4090TI
          
                 </h3>
                <div class="font-weight-black--text text-h6 mb-2">
                 Give your visuals a boost with the best graphics card in 2022
                </div>
                <div class="font-weight-black--text text-h6 mb-2">
                 
                </div>
                <v-divider></v-divider>
                <div class="font-weight-black--text text-h3 mb-2">
                 $1000
                </div>
                <v-btn>BUY</v-btn>
       
                </v-col>
            </v-row>
        </v-continer>
      
    </div>
  </template>
  <script>
  export default {
    data: () => ({
      width: 300,
    }),
  }
</script>