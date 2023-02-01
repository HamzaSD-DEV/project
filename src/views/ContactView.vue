<template>
    <div>
        <section class="contact-us">
            <div class="container text-white">
                <h2 class="text-white">Contact Us</h2>

                <form>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Enter your name">
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter your email">
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea class="form-control" id="message" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Send</button>
                </form>
                <div class="col-md-4">
                    <p>Email: contact@carsforsale.com</p>
                    <p>Phone: 555-555-5555</p>
                    <br>
                </div>
            </div>

        </section>

    </div>
</template>

<script>

export default {

    name: 'ContactView',
    components: {

    },
    data() {
        return {
            ecole: "suptech",
        }
    }
}
</script>
<style>
.col-md-4 {
    text-align: center;
    width: 100%;
    padding: auto;
    margin: auto;
}

.ontact-us {
    align-items: center;
    justify-content: center;
}

form {
    width: 60%;
    padding: auto;
    margin: auto;
}
</style>