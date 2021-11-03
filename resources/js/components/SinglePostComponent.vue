<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Job</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(person, i) in personAgeTwenty"
                    :key="person.name + i"
                >
                    <th scope="row">{{ i + 1 }}</th>
                    <td>{{ person.name }}</td>
                    <td>{{ person.age }}</td>
                    <td>{{ person.job }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "SinglePostComponent",
    data() {
        return {
            persons: [
                {
                    name: "Вася",
                    age: 20,
                    job: "Тренер"
                },
                {
                    name: "Петя",
                    age: 25,
                    job: "Менед"
                },
                {
                    name: "Миша",
                    age: 22,
                    job: "Студент"
                }
            ]
        };
    },
    computed: {
        personAgeTwenty() {
            return this.persons.filter(person => person.age > 20);
        }
    }
};
</script>
