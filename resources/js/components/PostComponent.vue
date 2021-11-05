<template>
    <div>
        <CreatePerson />
    </div>
</template>

<script>
import CreatePerson from "./Person/CreatePerson.vue";
export default {
    name: "PostComponent",
    components: { CreatePerson }
};
</script>
