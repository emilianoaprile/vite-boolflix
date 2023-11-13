<script>
import { store } from '../store'
export default {
    data() {
        return {
            store: store
        }
    }
}
</script>

<template>
    <header>
        <nav class="nav container">
            <span>
                Boolflix
            </span>
            <input @keyup.enter="$emit('search')" v-model.trim="store.searchText" placeholder="Cerca film">
        </nav>
    </header>
</template>