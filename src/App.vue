
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
      size="sm"
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
              color="brown"
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
                color="brown"
              >
                <span class="white--text text-h5">{{ user.initials }}</span>
              </v-avatar>
              <h3>{{ user.fullName }}</h3>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
              >
                Edit Account
              </v-btn>
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
          {title: 'Check out',icon:'mdi-cash-register',to: '/check_out'},
          
        ],
        user: {
        initials: 'JA',
        fullName: 'jafar ali',
        email: 'jafar.ali@doe.com',
      },
    }),
  }
      
</script>
