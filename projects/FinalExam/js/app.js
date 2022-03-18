//function that stores the quotes and author
(function() {
    const movies = [
        {
            movie:
               "The Equalizer",
            revenue: "Box Office: 192.3 Million"
        },
        {
            movie:
               "Skyfall 007",
            revenue: "Box Office: 1.109 Billion"
        },
        {
            movie:
               "My Cousin Vinny",
            revenue: "Box Office: 64.1 Million"
        },
        {
            movie:
               "Cars 2",
            revenue: "Box Office: 562.1 Billion"
        },
        {
            movie:
               "Saving Private Ryan",
            revenue: "Box Office: 482.3 Million"
        },
        {
            movie:
               "Knight and Day",
            revenue: "Box Office: 262 Million "
        }
    ];

    const btn = document.getElementById("generate-btn");

    //Event for the button
    btn.addEventListener("click", function() {
        let random = Math.floor(Math.random() * movies.length);
        console.log(random);

        document.getElementById("quote").textContent = movies[random].movie;
        document.querySelector(".author").textContent = movies[random].revenue;
    });
})();