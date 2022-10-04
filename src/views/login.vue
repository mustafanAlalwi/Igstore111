<template>
     <v-container class="mt-10">
     <v-row>    
        <v-col cols="3" sm="3">

    <form><v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="passowrd"
        :error-messages="passowrdErrors"
        :counter="10"
        label="password"
        required
        @input="$v.passowrd.$touch()"
        @blur="$v.passowrd.$touch()"
      ></v-text-field>
      
    
  
      <v-btn
        class="mr-4"
        @click="submit"
      >
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </form>
        </v-col>
     </v-row>
     </v-container>
  </template>