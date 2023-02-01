<template>
    <div>
        
        <b-card :title="product.title" :img-src="product.imgSrc" img-alt="Image" img-top tag="article"
            style="max-width: 20rem;" class="mb-2">
            <b-card-text>
                {{ product.description }}
            </b-card-text>
            <b-card-sub-title class="mb-2">Prix : {{ product.price }}</b-card-sub-title>
            <p>Propriétaire : {{ product.ownerName }}</p>
            <b-button href="#" variant="primary">Voir plus...</b-button>
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'ProduitView',
    data() {
        return {
            product: {
                ownerName: 'John Doe',
                title: "Marque de la voiture",
                price: "1000€",
                imgSrc: "https://picsum.photos/600/300/?image=25",
                description: "Voiture en bonne état."
            }
        }
    },
    components: {}
}
</script>
