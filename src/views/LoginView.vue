<template>
    <div class="container">
        <br />
        <br />
        <form @submit.prevent="loginUser">
            <div class="mb-3">
                <label class="form-label text-white">Email address</label>
                <input type="text" class="form-control" v-model="user.email" />
            </div>
            <div class="mb-3">
                <label class="form-label text-white">Password</label>
                <input type="password" class="form-control" v-model="user.password" />
            </div>
            <div class="alert alert-danger" v-if="messageError">
                {{ messageError }}
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
            <br>
            <span class="text-white">You need an account : </span>
            <router-link to="/signup"   >SignUp</router-link>
        </form>
        <br>
        <br><br><br><br><br>
    </div>
</template>

<script>
import firebase from "../Firebase";
import router from "../router";

export default {
    name: "SigninView",
    data() {
        return {
            user: {
                email: "",
                password: "",
            },
            messageError: "",
        };
    },
 
    methods: {
        loginUser() {
            firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password)
                .then((dataUser) => {
                    localStorage.setItem("uidUser", dataUser.user.uid);
                    router.push({ name: "home"});
                   
                })
                .catch(() => {
                    this.messageError = "pm invalide";
                });
        },
    },
};
</script>
