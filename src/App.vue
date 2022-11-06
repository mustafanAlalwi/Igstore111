
<template>
  <v-app id="inspire">
    <v-navigation-drawer 
    v-model="drawer"
    app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            welcome to igstore!
          </v-list-item-title>
          <v-list-item-subtitle>
            best pc parts!
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
      
        <v-list-item
        
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
        
          <v-list-item-icon>
            
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-card class="overflow-hidden">
       <v-app-bar
      
      app
      color="#000000"
      dark
      size="sm"
      
      hide-on-scroll
     
      
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top ,rgba(0, 0, 0),rgba(0, 204, 0)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>IG Store</v-app-bar-title>

      <v-spacer></v-spacer>

   
      <v-menu
        bottom
        min-width="200px"
        rounded
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            x-large
            v-on="on"
          >
            <v-avatar
              color="black"
              size="48"
            >
              <span class="white--text text-h5">{{ user.initials }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar
                color="black"
              >
                <span class="white--text text-h5">{{ user.initials }}</span>
              </v-avatar>
              
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>
            <h5>{{ user.wallet }}</h5>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
              >
                Disconnect
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
    </v-app-bar>
  </v-card>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>


<script>
  export default {
    data: () => ({
       drawer: null,
       items: [
          { title: 'home', icon: 'mdi-home-circle',to: '/' },
          { title: 'admin', icon: 'mdi-account-supervisor-circle',to: '/admin' },
          { title: 'account', icon: 'mdi-account-circle',to: '/login' },
          { title: 'About', icon: 'mdi-information',to: '/about' },
          { title: 'check_out',icon:'mdi-cash-register',to: '/check_out'},
  
          
        ],
        user: {
        initials: 'ini',
        wallet: 'wallet',
        email: 'example@doe.com',
      },
    }),
  }
      
</script>
