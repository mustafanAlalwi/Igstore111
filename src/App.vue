
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
      color="#fcb69f"
      dark
      prominent
      src="ice.jpg"
      hide-on-scroll
     
      
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>IG Store</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn
      class="mx-2"
      fab
      dark
      large
      color="blue"
      to="/account"
      
    >
      <v-icon dark >
        
        mdi-account-circle
      </v-icon>
    </v-btn>
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
          
          { title: 'account', icon: 'mdi-account-circle',to: '/login' },
          { title: 'About', icon: 'mdi-information',to: '/about' },
          { title: 'admin', icon: 'mdi-account-supervisor-circle',to: '/admin' },
        ],
      }),

  }
</script>
