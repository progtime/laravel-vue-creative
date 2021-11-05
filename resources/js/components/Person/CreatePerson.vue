<template>
    <div class="w-25">
        <h1>Добавить пользователя</h1>
        <div class="mb-3">
            <input
                v-model="name"
                type="text"
                class="form-control"
                id="name"
                placeholder="your name"
            />
        </div>
        <div class="mb-3">
            <input
                v-model="age"
                type="number"
                class="form-control"
                id="age"
                placeholder="age"
            />
        </div>
        <div class="mb-3">
            <input
                v-model="job"
                type="text"
                class="form-control"
                id="job"
                placeholder="job"
            />
        </div>
        <div class="mb-3">
            <input
                @click.prevent="addPerson"
                type="button"
                class="btn btn-primary"
                id="send"
                value="Save"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "CreatePerson",
    data() {
        return {
            name: null,
            age: null,
            job: null
        };
    },
    methods: {
        addPerson() {
            axios
                .post("/api/people", {
                    name: this.name,
                    age: this.age,
                    job: this.job
                })
                .then(res => {
                    console.log(res);

                    this.name = null;
                    this.age = null;
                    this.job = null;
                });
        }
    }
};
</script>
