;(function () {
    var playList = [{
            author: "Led Zeppelin",
            song: "Stairway to heaven",
            duration: "2:03"
        },
        {
            author: "Queen",
            song: "Bohemian rhapsody",
            duration: "2:30"
        },
        {
            author: "Lynyrd skynyrd",
            song: "Free bird",
            duration: "1:56"
        },
        {
            author: "Deep purple",
            song: "Smoke on the water",
            duration: "3:03"
        },
        {
            author: "Jimi hendrix",
            song: "All along the watchtower",
            duration: "2:53"
        },
        {
            author: "AC/DC",
            song: "Back in black",
            duration: "2:43"
        },
        {
            author: "Queen",
            song: "We will rock you",
            duration: "2:13"
        },
        {
            author: "Metallica",
            song: "Enter sandman",
            duration: "3:03"
        }
    ];

    const playsList = document.querySelector('.ba-playlist-directory');
    const songList = document.getElementById('track-templ').innerHTML;    
    let songHTML = '';
    playsList.innerHTML = '';
    playList.forEach(function (song) { 
        console.log(song);
               
        songHTML = songList
            .replace(/{{name}}/ig, song.song)
            .replace(/{{time}}/ig, song.duration)
            .replace(/{{author}}/ig, song.author);
        playsList.innerHTML += songHTML;
    });

})();