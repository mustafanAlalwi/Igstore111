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

    <v-btn block
    color="green"
    class="text-h6 font-weight-light white--text mb-2"
    >PAY</v-btn>
   </v-card>
</div>
  </template>
<script>
export default {
  data: () => ({
    reveal: false,
  }),
}
</script>
<style>
</style>
