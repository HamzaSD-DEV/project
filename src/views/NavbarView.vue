<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container px-4 px-lg-5">
        <router-link class="navbar-brand" to="/">TPV</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
            class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/" exact>Home</router-link>
            </li>
            <li class="nav-item">
              <router-link v-if="user" class="nav-link" to="/myproducts">My Products</router-link>
            </li>
            <li class="nav-item">
              <router-link v-if="user" class="nav-link" to="/allproducts">All Products</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">contact</router-link>
            </li>

          </ul>
          <form class="navbar-search form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
          </form>

          <router-link v-if="user" class="nav-link" to="/user">{{ displayname }}</router-link>
          <router-link v-if="user == null" to="/login" class="btn btn-outline-success "
            type="submit">LogIn</router-link>
          <a v-if="user" v-on:click="logout" style="margin-left: 10px" class="btn btn-outline-primary"
            type="submit">Logout</a>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import router from '../router/index';
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: 'NavbarView',
  data() {
    return {
      user: null,
      displayname: "vide"
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;

      } else {
        this.user = null;

      }
    });
  },
  methods: {
    logout() {
      firebase.auth().signOut();
      this.user = null;
      router.push({ name: 'logout' })
    }
  }
};
</script>

<style>
.navbar {
  height: 56px;
}
/* Style the search container */
.navbar-search {
  float: right;
  margin-right: 10px;
}

/* Style the search form */
form.navbar-search {
  display: flex;
  align-items: center;
  height: 36px;
  width: 300px;
  padding: 0 10px;
  border-radius: 18px;

  background-color: #f2f2f2;
}

/* Style the input field */
form.navbar-search input[type="search"] {
  flex: 1;
  padding: 6px;
  border: none;
  font-size: 14px;
}

/* Style the submit button */
form.navbar-search .btn-outline-light {
  width: 50px;
  padding: 6px;
  background-color: #f2f2f2;
  color: rgb(34, 207, 71);
  border: none;
  cursor: pointer;
  font-size: 14px;
}
form.navbar-search .btn-outline-light:hover {
  background-color: #f2f2f2;
  color: #008000;
  
}
</style>