const app = new Vue({
    el: '#app',
    data: {
        songs: null,
        genreSongs: [],
        selGen: 'all',
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
            axios
                .get('./songs.php')
                .then(response => {
                    this.songs = response.data
                    if (this.selGen != 'all') {
                        this.songs = this.songs.filter(function (item) {
                            console.log(app.selGen)
                            return item.genre == app.selGen
                        });
                    }
                })
        }
    }
})