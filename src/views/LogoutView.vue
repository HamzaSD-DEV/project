<template>
    <div class="logout">
        <div class="row">
            <div class="col-12 text-center">
                <h1 class="msg">You have successfully logged out!</h1>
            </div>

            <div class="col-12 text-center">
                <router-link to="/" class="btn btn-primary">Return to Home</router-link>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'LogoutView'
}
</script>
<style>
.row {

    padding: 4rem;
    border-radius: 1rem;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    position: relative;
    top: -4rem;
}
.text-center{
    padding: 4rem 0;
}
.logout {
    width: 100vw;
    height: 100vh;
    display: grid;
    align-items: center;
    justify-content: center;
}

.msg {
    color: white;
}
</style>