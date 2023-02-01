<template>
  <div class="home">
    <header class="bg-dark py-5">
      <div class="container px-4 px-lg-5 my-5 ">
        <div class="text-center text-white">
          <h1 class="display-4 fw-bolder text-white ">The Perfect Vehicle</h1>
          <p class="lead fw-normal text-white-50 mb-0">Buy and Sell Cars with Ease</p>
        </div>
      </div>
    </header>
    <section class="testimonials">
      <div class="container">
        <div class="carddiv">
                  <div class="row">
                    <div class="card" style="width: 18rem;" v-for="item in products" :key="item.name">
                      <h2 class="card-title1">{{ item.name }}</h2>
                      <img :src="item.image" class="card-img-top" alt="../assets/logo.png">
                      <div class="card-body">
                        <h5 class="card-title">Model : {{ item.name }}</h5>
                        <h5 class="card-title">Marque : {{ item.model }}</h5>
                        <h5 class="card-title">Year : {{ item.year }}</h5>
                        <h5 class="card-title">Prix : {{ item.price }}</h5>
                        <p class="card-text">Notes : {{ item.description }}</p>
                        <routerLink to="/login" class="btn btn-primary">Contact Dealer</routerLink>
                      </div>
                    </div>
                  </div>
        </div>
        <h2 class="text-white">Testimonials</h2>
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <p class="card-text">I had a great experience buying my car through this website. The process was easy
                  and
                  the customer service was excellent. I highly recommend this website to anyone looking to buy a car.
                </p>
                <p class="card-text">- John Doe</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <p class="card-text">I was able to find the perfect car for me at a great price thanks to this website.
                  The
                  inventory was extensive and the search filters made it easy to find exactly what I was looking for.
                </p>
                <p class="card-text">- Jane Smith</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <router-view />
  </div>
</template>

<script>

import firebase from '../Firebase.js'
export default {
  name: 'HomeView',
  data() {
    return {
      counter: 0,
      products: [],
      ref: firebase.firestore().collection('products')
    }
  },
  created() {
    while (this.counter < 3) {
    this.ref.onSnapshot(query => {
     
              this.products = []
      query.forEach(doc => {
        //  console.log(doc.data())
        this.products.push({
          key: doc.id,
          name: doc.data().name,
          description: doc.data().description,
          price: doc.data().price,
          image: doc.data().image,
        })
      })
    })
          this.counter++;
      }
  }


}
</script>
<style>
.carddiv{
  margin: 10%;
  padding: 10px;
}
.bg-dark {
  height: 297px;
  width: 99.9%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.testimonials {
  display: flex;
  align-items: center;
  justify-content: center;
}

h2{
  text-align: center;
}
</style>