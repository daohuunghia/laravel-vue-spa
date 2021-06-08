<template>
    <div>
        <h3 class="text-center">All Books</h3><br/>
        <router-link to="add" class="btn btn-info mb-2">Add</router-link>

        <table class="table table-bordered">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Author</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(book, k) in books" :key="k">
                <td>{{ k }}</td>
                <td>{{ book.name }}</td>
                <td>{{ book.author }}</td>
                <td>{{ book.created_at }}</td>
                <td>{{ book.updated_at }}</td>
                <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{ name:'edit', params: { id: book.id } }" class="btn btn-primary">Edit</router-link>
                        <button class="btn btn-danger ml-1" @click="deleteBook(book.id)">Delete</button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            books: []
        }
    },
    created () {
        this.fetchBooks()
    },
    methods: {
        fetchBooks () {
            axios.get('/api/books').then(res => {
                this.books = res.data
            })
            .catch(e => {
                console.log(e)
            })
        },
        deleteBook (id) {
            axios.delete(`/api/book/delete/${id}`)
            .then(res => {
                let index = this.books.map(item => item.id).indexOf(id)
                this.books.splice(index, 1)
            })
        }
    }
}
</script>
