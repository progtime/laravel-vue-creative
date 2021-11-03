<template>
    <div>
        <SinglePostComponent></SinglePostComponent>
        <div>name: {{ name }}</div>
        <div>job: {{ vasyaJob }}</div>
        <button @click="sayHello">Say Hello</button>
    </div>
</template>

<script>
import SinglePostComponent from "./SinglePostComponent";
export default {
    name: "PostComponent",
    components: { SinglePostComponent },
    data() {
        return {
            name: "vasya"
        };
    },
    methods: {
        sayHello() {
            console.log("hello");
        }
    },
    computed: {
        vasyaJob() {
            return this.name + " Work in shop";
        }
    }
};
</script>
