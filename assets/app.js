const app = new Vue({
    el: '#app',
    data: {
        songs: null,
        genreSongs: [],
        selGen: 'all',
        fisong: []
    },
    mounted() {
        axios
            .get('./songs.php')
            .then(response => {
                console.log(response);
                this.songs = response.data
                this.songs.forEach(element => {
                    if (!this.genreSongs.includes(element.genre)) {
                        this.genreSongs.push(element.genre)
                    }
                });
            }).catch(error => {
                console.log(error);
            })
    },
    methods: {
        filterGenre() {
        }
    }
})