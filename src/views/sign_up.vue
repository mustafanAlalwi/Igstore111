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
              v-model="passowrd"
              :rules="PasswordRules"
              label="Password"
              type="password"
              required
            ></v-text-field>
            
          </v-col>
          <v-col
            cols="12"
            md="5"
          >
            <v-text-field
              v-model="passowrd"
              :rules="PasswordRules"
              label="confirm password"
              type="password"
              required
            ></v-text-field>
          </v-col>
          <v-col 
           cols="12"
            md="5"
            ><v-btn
            @click="signUp"
            >
            sign in
            </v-btn>
        </v-col>
            
        </v-row>
      </v-container>
    </v-form>
  </template>