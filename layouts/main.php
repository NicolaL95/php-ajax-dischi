  <div id="app">
 <main id='main_container'>
     <div class="container">
         <div class="row">  
     <div class="song_container"  v-for='song in songs'>
               <img :src="song.poster" alt="" />
               <h3>{{song.title}}</h3>
            <p>
              {{song.author}}
            </p>
            <p>
              {{song.year}}
            </p>
           </div>
           </div>
     </div>    
    </main>
          </div>