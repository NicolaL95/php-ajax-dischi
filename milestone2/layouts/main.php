  <div id="app">
 <main id='main_container'>
     <div class="container">
         <div class="row justify-content-center row_song">  
     <div class="song_container d-flex flex-column align-items-center text-center"  v-for='song in songs'>
               <img :src="song.poster" alt="Song Image" />
               <h3>{{song.title.toUpperCase()}}</h3>
            <p class='p_author'>
              {{song.author}}
            </p>
            <p class='p_year'>
              {{song.year}}
            </p>
           </div>
           </div>
     </div>    
    </main>
          </div>