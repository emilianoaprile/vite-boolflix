import { reactive } from 'vue'

export const store = reactive({
    searchText: '',
    movies: [],
    series: [],
    API_KEY: 'e99307154c6dfb0b4750f6603256716d',
    flags: {
    },
})