<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">C&C</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="#">RSVP</b-nav-item>             
                    <b-nav-item-dropdown text="ABOUT" right>
                        <b-dropdown-item href="#">GIFTS</b-dropdown-item>
                        <b-dropdown-item href="#">OUR STORY</b-dropdown-item>
                        <b-dropdown-item href="#">Q + A</b-dropdown-item>
                        <b-dropdown-item href="#">TRAVEL</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>