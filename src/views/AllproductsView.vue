<template>
    <div class="container">
        <h1 id="title" style="text-align:center">All products</h1>

        <div class="row">
            <div class="card" style="width: 18rem;" v-for="item in products" :key="item.name">
                <h2 class="card-title1">{{ item.name }}</h2>
                <img :src="item.image" class="card-img-top" alt="../assets/logo.png">
                <div class="card-body">
                    <h5 class="card-title">Marque       :{{ item.name }}</h5>
                    <h5 class="card-title">Prix        : {{ item.price }}</h5>
                    <h6 class="card-title">Description</h6>
                      <p class="card-text">{{ item.description }}</p>
                    <a to="#" class="btn btn-primary">Contact Dealer</a>
                </div>
            </div>
        </div>
    </div>
</template>
       
<script>
import firebase from '../Firebase.js'
export default {
    name: 'AllproductsView',
    data() {
        return {
            products: [],
            ref: firebase.firestore().collection('products')
        }
    },
    created() {
        this.ref.onSnapshot(query => {
            this.products = []
            query.forEach(doc => {
                //  console.log(doc.data())
                this.products.push({
                    key: doc.id,
                    name: doc.data().name,
                    marque: doc.data().marque,
                    year: doc.data().year,
                    price: doc.data().price,
                    description: doc.data().description,
                    image: doc.data().image,
                })
            })
        })
    }

}
</script>

<style>
body {
    font-family: 'Open Sans', sans-serif;
}
#title {
    color: white;
    padding-bottom: 20px;
}
.container {
    padding: 20px;
}

.row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
}

/* Headings */
h1 {
    text-align: center;
    margin-bottom: 30px;
}

#addp {
    margin-bottom: 30px;
}

/* Add new product button */
.btn-primary {
    background-color: #007bff;
    border-color: #007bff;
    color: white;
}

.btn-primary:hover {
    background-color: #0069d9;
    border-color: #0062cc;
}

/* Card */
.card {
    width: 300px;
    margin: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
}

.card-title1 {
    margin-left: 0;
}

.card img {
    width: 100%;
    height: 170px;
    object-fit: cover;
}


/* Card buttons */
.card .btn-primary {
    background-color: #4CAF50;
    border-color: #4CAF50;
    color: white;
}

.card .btn-primary:hover {
    background-color: #3e8e41;
    border-color: #3e8e41;
}

.card .btn-info {
    background-color: #17a2b8;
    border-color: #17a2b8;
    color: white;
}

.card .btn-info:hover {
    background-color: #138496;
    border-color: #138496;
}

.card .btn-danger {
    background-color: #dc3545;
    border-color: #dc3545;
    color: white;
}

.card .btn-danger:hover {
    background-color: #c82333;
    border-color: #c82333;
}

/* Modal */
.modal-header {
    background-color: #007bff;
    color: white;
}

.modal-footer {
    background-color: #f8f9fa;
}

/* Form */
form {
    margin-top: 30px;
    padding: 20px;
}

form input[type="text"],
form input[type="number"],
form textarea {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
}

form input[type="file"] {
    margin-top: 10px;
}

form button[type="submit"] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

/* Submit button on hover */
form button[type="submit"]:hover {
    background-color: #45a049;
}
</style>
