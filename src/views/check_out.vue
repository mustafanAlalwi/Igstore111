<template>
    <div class="check_out pa-6"
    height="1000"
    position="absolute"
    >
   <v-card>
    <v-card-title>
    Checkout
    </v-card-title>
    <v-card-subtitle>
        Your order
    </v-card-subtitle>
    <v-card-subtitle>
        Product
    </v-card-subtitle>
    <v-card-text>
        image of the courrnt Product
    </v-card-text>
    <v-card-text>Subtotal:##</v-card-text>
    <v-card-text>Shipping:##</v-card-text>
   <v-card-text>Total = shipping + subtotal</v-card-text>
<v-dialog
      v-model="dialog"
      persistent
      max-width="400"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="green"
          class="text-h6 font-weight-light white--text mb-2"
          dark
          block
          v-bind="attrs"
          v-on="on"
        >
          Pay
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5">
          your purchase has complete
        </v-card-title>
        <v-card-text>thank you for buying from us :D</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
         
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            DONE
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

   </v-card>
</div>

  </template>
<script>

export default {

  data: () => ({
    reveal: false,
    dialog: false,
  }),
}
</script>
<style>
</style>
