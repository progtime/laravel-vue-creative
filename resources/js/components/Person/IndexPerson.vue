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
    </tr>
  </thead>
  <tbody>
    <tr v-for="person in persons" :key="person.id">
      <th scope="row">{{person.id}}</th>
      <td>{{person.name}}</td>
      <td>{{person.age}}</td>
      <td>{{person.job}}</td>
    </tr>
  </tbody>
</table>
    </div>
</template>

<script>
export default {
    name: "IndexPerson",
    data() {
        return {
           persons: []
        };
    },
    mounted() {
        this.getPeoples();
    },
    methods: {
        getPeoples(){
            axios
            .get('/api/people')
            .then(res => {
                this.persons = res.data;
            })
        }
    }
};
</script>
