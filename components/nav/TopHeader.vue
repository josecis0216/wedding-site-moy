<template>
    <div>
        <b-navbar>
            <b-navbar-nav class="m-auto">
                <nuxt-link to="/" class="nav-link">HOME</nuxt-link>
                <nuxt-link to="/rsvp" class="nav-link">RSVP</nuxt-link>
                <nuxt-link to="/story" class="nav-link">OUR STORY</nuxt-link>
                <nuxt-link to="/qa" class="nav-link">Q + A</nuxt-link>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<style scoped>
a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.5);
}

a:hover {
    text-decoration: none;
    color: white;
}

a.nav-link {
    margin: 10px;
    font-size: 25px;
}

.nuxt-link-exact-active {
    border-bottom: 5px solid pink;
}
</style>