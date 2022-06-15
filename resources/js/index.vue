<template>
    <div>
        <nav class="navbar bg-white border-bottom navbar-light px-3">
            <router-link class="navbar-brand mr-auto" :to="{ name: 'home' }">Laravel BNB</router-link>
            <router-link class="btn nav-button" :to="{ name: 'bookables' }">Bookables</router-link>
        </nav>
        <div class="container my-4 px-4">
            <router-view></router-view>
        </div>
    </div>
</template>
