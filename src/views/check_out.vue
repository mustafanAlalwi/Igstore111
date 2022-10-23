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
<!-- 
here i put snackbar

-->
    <v-btn 
    @click="snackbar = true"
    block
    color="green"
    class="text-h6 font-weight-light white--text mb-2"
    >PAY</v-btn>
    
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
   </v-card>
</div>

  </template>
<script>
export default {
  data: () => ({
    reveal: false,
    snackbar: false,
      text: 'bla bla bla',
      timeout: 3000,
  }),
}
</script>
<style>
</style>
