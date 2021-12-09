const app = new Vue({
    el: '#app',
    data: {
        songs: null
    },
    mounted() {
        axios
            .get('../songs.php')
            .then(response => {
                console.log(response);
                this.songs = response.data
            }).catch(error => {
                console.log(error);
            })
    }
})