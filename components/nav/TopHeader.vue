<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand><nuxt-link id="brandLink" to="/">C&C</nuxt-link></b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <nuxt-link to="/rsvp" class="nav-link">RSVP</nuxt-link>
                    <nuxt-link to="/story" class="nav-link">OUR STORY</nuxt-link>    
                    <nuxt-link to="/qa" class="nav-link">Q + A</nuxt-link>  
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<style>
#brandLink, #brandLink:hover {
    color: white;
}
a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.5);
}
a:hover {
    text-decoration: none;
    color:white;
}
a.nav-link {
    margin: 10px;
}
</style>