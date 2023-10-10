<template>
    <nav>
        <router-link :to="{'name': 'home'}">Home</router-link> |
        <router-link :to="{'name': 'about'}">About</router-link> |
        <router-link :to="{'name': 'service'}">Service</router-link> |
        <router-link :to="{'name': 'contact'}">Contact</router-link> |
        <router-link :to="{'name': 'animate'}">Animated</router-link>
    </nav>
</template>