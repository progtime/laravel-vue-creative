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
                                @click.prevent="changeEditPersonId(person.id)"
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
                        <td><input type="text" class="form-control" /></td>
                        <td><input type="number" class="form-control" /></td>
                        <td><input type="text" class="form-control" /></td>
                        <td>
                            <a
                                href="#"
                                @click.prevent="changeEditPersonId(null)"
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
            editPersonId: null
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
        changeEditPersonId(id) {
            this.editPersonId = id;
        },
        isEdit(id) {
            return this.editPersonId === id;
        }
    }
};
</script>
