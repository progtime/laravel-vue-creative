<template>
    <div class="p-3">
        <h1>Список пользователей</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Job</th>
                    <th scope="col">Edit</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="person in persons">
                    <tr :key="person.id">
                        <th scope="row">{{ person.id }}</th>
                        <td>{{ person.name }}</td>
                        <td>{{ person.age }}</td>
                        <td>{{ person.job }}</td>
                        <td>
                            <a
                                href="#"
                                @click.prevent="changeEditPersonId(person)"
                                class="btn btn-success"
                                >Edit</a
                            >
                        </td>
                    </tr>
                    <tr
                        :class="isEdit(person.id) ? '' : 'd-none'"
                        :key="person.id"
                    >
                        <th scope="row">{{ person.id }}</th>
                        <td><input type="text" class="form-control" v-model="currentPerson.name" /></td>
                        <td><input type="number" class="form-control" v-model="currentPerson.age" /></td>
                        <td><input type="text" class="form-control" v-model="currentPerson.job" /></td>
                        <td>
                            <a
                                href="#"
                                @click.prevent="updatePerson"
                                class="btn btn-success"
                                >Update</a
                            >
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "IndexPerson",
    data() {
        return {
            persons: [],
            editPersonId: null,
            currentPerson: {
                name: '',
                age: null,
                job: ''
            }
        };
    },
    mounted() {
        this.getPeoples();
    },
    methods: {
        getPeoples() {
            axios.get("/api/people").then(res => {
                this.persons = res.data;
            });
        },
        changeEditPersonId(person) {
            this.editPersonId = person.id;
            this.currentPerson = person;
        },
        updatePerson() {
            this.editPersonId = null;
            this.currentPerson = {
                name: '',
                age: null,
                job: ''
            };
        },
        isEdit(id) {
            return this.editPersonId === id;
        }
    }
};
</script>
