<template>
  <div class="container">
    <br />
    <br />
    <form @submit.prevent="registerUser()">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label text-white">Name</label>
        <input type="text" class="form-control" aria-describedby="emailHelp" v-model="user.name" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label text-white">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          v-model="user.email" />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label text-white">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" v-model="user.password" />
      </div>

      <button type="submit" class="btn btn-primary">Register</button>
      <p v-if="error" class="error">{{error}}</p>
    </form>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
import firebase from "../Firebase.js";
import router from "../router/index.js";

export default {
  name: "SignUp",
  data() {
    return {
user: {
        name: "",
        email: "",
        password: "",
        uid: "",
        error: null
      },
    };
  },
  methods: {
 
    registerUser() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then((dataUser) => {
          console.log("User created in Firebase Authentication: ", dataUser.user.uid);
          firebase
            .firestore()
            .collection("users")
            .doc(dataUser.user.uid)
            .set({
              name: this.user.name,
              email: this.user.email,
              uid: dataUser.user.uid,
              createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
              console.log("User document added to Firestore: ", dataUser.user.uid);
              router.push({ name: "home" });
            })
            .catch((error) => {
              console.error("Error adding user document to Firestore: ", error);
            });
        })
        .catch((error) => {
          console.error("Error creating user in Firebase Authentication: ", error);
        });
    }
  },
};

</script>
