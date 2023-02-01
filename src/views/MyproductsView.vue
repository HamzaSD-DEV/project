<template>

    <div class="container">
        <h1 class="text-white" style="text-align:center">My products</h1>
        <button id="addp" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Add new product
        </button>
        <div class="row">
            <div class="card" style="width: 18rem;" v-for="item in Myproducts" :key="item.key">
                <h2 class="card-title1">Voiture {{ item.name }}</h2>
                <img :src="item.image" class="card-img-top" alt="../assets/logo.png">
                <div class="card-body">
                    <h5 class="card-title">Model : {{ item.name }}</h5>
                    <h5 class="card-title">Marque : {{ item.marque }}</h5>
                    <h5 class="card-title">Year : {{ item.year }}</h5>
                    <h5 class="card-title">Prix : {{ item.price }}</h5>
                    <p class="card-text">Notes : {{ item.description }}</p>
                    <button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#update"
                        v-on:click="getData(item.name, item.marque, item.year, item.price, item.description, item.image, item.key)">Update</button>
                    <button class="btn btn-danger" v-on:click="deleteProduct(item.key)">Delete</button>
                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Ajouter</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <!-- Add form start here -->
                        <form @submit.prevent="addproduct">
                            <div class="form-group">
                                <label for="name">Name:</label>
                                <input class="form-control" type="text" id="name" aria-label="default input example"
                                    v-model="product.name">
                            </div>
                            <div class="form-group">
                                <label for="price">Price:</label>
                                <input class="form-control" type="number" id="price" aria-label="default input example"
                                    v-model="product.price">
                            </div>
                            <div class="form-group">
                                <label for="image">Image:</label>
                                <input class="form-control" type="file" id="image" accept=".jpg,.png"
                                    @change="previewImage" aria-label="default input example">
                            </div>

                            <div class="form-group">
                                <label for="description">Description:</label>
                                <textarea class="form-control" id="description" rows="3"
                                    v-model="product.description"></textarea>
                            </div>
                            <div class="alert alert-success" v-if="messageSuccess">{{ messageSuccess }}</div>
                            <progress id="js-progressbar" class="uk-progress" :value="uploadValue" max="100"></progress>

                            <button type="submit" class="btn btn-success">AddProd</button>
                        </form>
                        <!-- Add form end here -->
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="update" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modifier</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <!-- update form start here -->
                        <form @submit.prevent="update">
                            <div class="form-group">
                                <label for="name">Name:</label>
                                <input class="form-control" type="text" id="name" aria-label="default input example"
                                    v-model="dataProduct.name">
                            </div>
                            <div class="form-group">
                                <label for="marque">Marque:</label>
                                <input class="form-control" type="text" id="marque"
                                    aria-label="default input example" 
                                    v-model="dataProduct.marque">
                            </div>
                            <div class="form-group">
                                <label for="year">year:</label>
                                <input class="date-own form-control" type="date-own" id="date-own"
                                    aria-label="default input example" v-model="dataProduct.year">
                            </div>
                            <div class="form-group">
                                <label for="description">Description:</label>
                                <textarea class="form-control" id="description" rows="3"
                                    v-model="dataProduct.description"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="price">Price:</label>
                                <input class="form-control" type="number" id="price" aria-label="default input example"
                                    v-model="dataProduct.price">
                            </div>
                            <div class="form-group">
                                <label for="image">Image:</label>
                                <input class="form-control" type="file" id="image" accept=".jpg,.png"
                                    @change="previewImage" aria-label="default input example">
                            </div>

                            <div class="alert alert-success" v-if="messageUpdate">{{ messageUpdate }}</div>
                            <button class="btn btn-success" type="submit">Update now</button>
                        </form>


                        <!-- update form end here -->
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" v-on:click="close()">Close</button>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
  
  
  
<script>
import firebase from '../Firebase.js'

export default {
    name: 'MyproductsView',
    data() {
        return {
            product: {
                name: '',
                marque: '',
                year: '',
                price: 0,
                image: '',
                description: '',
                uid: localStorage.getItem('uidUser')
            },
            dataProduct: {
                name: '',
                marque: '',
                year: '',
                price: 0,
                image: '',
                description: '',
                key: ''
            },
            uploadValue: 0,
            picture: null,
            imageData: null,
            imageName: '',

            messageUpdate: '',
            ref: firebase.firestore().collection('products'),
            messageSuccess: '',
            Myproducts: [],
            uid: localStorage.getItem('uidUser')
        }
    },
    methods: {
        addproduct() {
            //  upload image start here
            this.picture = null;
            const storageRef = firebase.storage().ref(`images/${this.imageName}`).put(this.imageData);
            storageRef.on(`state_changed`, snapshot => {
                this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            }, error => { console.log(error.message) },
                () => {
                    this.uploadValue = 100;
                    storageRef.snapshot.ref.getDownloadURL().then((url) => {
                        console.log(url)
                        this.product.image = url
                        this.ref.add(this.product).then(() => {
                            this.messageSuccess = 'Added'
                        }).then(() => {
                            this.product.name = ''
                            this.product.marque = ''
                            this.product.year = ''
                            this.product.price = ''
                            this.product.image = ''
                            this.product.description = ''
                        })
                    });
                }
            );

            //  upload image end here



        },
        getData(name, marque, year, price, description, image, key) {
            this.dataProduct.name = name
            this.dataProduct.marque = marque
            this.dataProduct.year = year
            this.dataProduct.price = price
            this.dataProduct.description = description
            this.dataProduct.image = image
            this.dataProduct.key = key
        },
        update() {
            console.log(this.dataProduct.key)
            this.ref.doc(this.dataProduct.key).update({
                name: this.dataProduct.name,
                marque: this.dataProduct.marque,
                year: this.dataProduct.year,
                price: this.dataProduct.price,
                description: this.dataProduct.description,
                image: this.dataProduct.image,
            }).then(() => {
                this.messageUpdate = 'Updated'
            })
        },
        deleteProduct(key) {
            this.ref.doc(key).delete()
        },
        close(){
            this.messageUpdate= ''
        },
        previewImage(event) {
            this.uploadValue = 0;
            this.picture = null;
            this.imageData = event.target.files[0];
            this.imageName = event.target.files[0].name

        },
    },

    created() {
        this.ref.onSnapshot(query => {
            this.Myproducts = []
            query.forEach(doc => {
                if (localStorage.getItem('uidUser') == doc.data().uid) {
                    this.Myproducts.push({
                        key: doc.id,
                        name: doc.data().name,
                        marque: doc.data().marque,
                        year: doc.data().year,
                        description: doc.data().description,
                        price: doc.data().price,
                        image: doc.data().image
                    })
                }
            })
        })
    }
}
</script>
<style>
body {
    font-family: 'Open Sans', sans-serif;
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