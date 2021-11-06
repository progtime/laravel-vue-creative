<template>
    <div>
        <CreatePerson />
        <IndexPerson />
    </div>
</template>

<script>
import CreatePerson from "./Person/CreatePerson.vue";
import IndexPerson from "./Person/IndexPerson.vue";
export default {
    name: "PostComponent",
    components: { CreatePerson, IndexPerson }
};
</script>
