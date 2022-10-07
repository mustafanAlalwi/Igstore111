<template>
<div>
  <v-carousel  :show-arrows="true" 
class="mx-auto"
     
      max-width="1864"
      position="absolute"
      height="1000 " >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
  <v-container>
  <v-hover v-slot="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="1864"
      position="absolute"
    >
      <v-img
        :aspect-ratio="16/9"
        src="maxresdefault.jpg"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out black v-card--reveal text-h2 white--text"
            style="height: 100%;"
          >
            $1800.00
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-6"
        style="position: relative;"
      >
        <v-label>
          <v-btn src="">BUY</v-btn>
        </v-label>
        <div class="font-weight-light grey--text text-h6 mb-2">
          for the best gaming experience
        </div>
        <h3 class="text-h4 font-weight-light green--text mb-2">
          Give your visuals a boost with the best graphics card in 2022
        </h3>
        <v-simple-table>
          <thead>
        <tr>
          
          <th class="text-center">
            Nvidia GeForce RTX 4090
          </th>
          <th class="text">
            graphics card details
          </th>
        </tr>
        
          
          
      
      </thead>
      <tbody>

          <tr>
            <th class="text-left">
              Architecture
          </th>
          <th>
            Ada Lovelace
          </th>
         
        </tr>
        <tr>
          <th>
            Process node
          
          </th>
          <th>
            5nm TSMC
          </th>
         
        </tr>
        <tr>
          <th>
            CUDA cores
          
          </th>
          <th>
            16,384
          </th>
         
        </tr>
        <tr>
          <th>
            Ray tracing cores
          
          </th>
          <th>
            144 3rd-gen (rumored)
          </th>
         
        </tr>
        <tr>
          <th>
            Tensor cores
          
          </th>
          <th>
            576 4th-gen (rumored)
          </th>
         
        </tr>
        <tr>
          <th>
            Base clock speed
          
          </th>
          <th>
            2235MHz
          </th>
         
        </tr>
          <tr>
          <th>
            Boost clock speed
          
          </th>
          <th>
            2520MHz
          </th>
         
        </tr>
          <tr>
          <th>
            VRAM GDDR6X
          
          </th>
          <th>
            24GB
          </th>
         
        </tr>
        <tr>
          <th>
            Memory speed
          
          </th>
          <th>
            21Gbps (rumored)
          </th>
         
        </tr>
        <tr>
        <th>
          Bus width
          
          </th>
          <th>
            384-width
          </th>
         
        </tr>
        <tr>
        <th>
          TDP
          
          </th>
          <th>
            450W
          </th>
        </tr>
      </tbody>
        </v-simple-table>
      </v-card-text>
    </v-card>
  </v-hover>
  </v-container> 
  <v-container>
  <v-hover v-slot="{ hover }">
    <v-card
    class="mx-auto"
      color="grey lighten-4"
      max-width="1864"
      position="absolute"
    >
      <v-img
        :aspect-ratio="16/9"
        src="71YC16-yKPL.jpg"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out green darken-2 v-card--reveal text-h2 white--text"
            style="height: 100%;"
          >
            $1200.00
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-6"
        style="position: relative;"
      >
        <div class="font-weight-light grey--text text-h6 mb-2">
         <v-btn>BUY</v-btn>
          <br>
          Up Your Creative Game
        </div>
        <h3 class="text-h4 font-weight-light green--text mb-2">
          8K HDR Gaming
        </h3>
        <div class="font-weight-light text-h6 mb-2">
          Connect, play, capture, and watch in brilliant HDR at resolutions 
          up to 8K with GeForce RTX 3090 Ti or RTX 3090. Capture up to 8K
           HDR footage with the GeForce Experience™ ShadowPlay™ feature 
           and play back smoothly with AV1 decode.
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
</v-container>
</div>
</template>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>
   <script>
    
   
   
  export default {
    data () {
      return {
        items: [
          {
            src: 'maxresdefault.jpg',
          },
          {
            src: 'dlss301.jpg',
          },
          {
            src: 'shop-2080-ti-1070@2x.jpg',
          },
          {
            src: 'maxresdefault1.jpg',
          },
        ],
      }
    },
  }
</script>
   