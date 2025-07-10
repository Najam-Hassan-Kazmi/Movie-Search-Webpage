document.getElementById("searchForm").addEventListener("submit", async function (event) {
    event.preventDefault();   //As in the requirements, I am adding this to stop theform submission to reload the page.

    toastr.info("Meanwhile We Search Your Movies, Smile On The Camera!");   //Toastr is already installed in the HTML file and we are using it here to show messages while loading. 

    const searchQuery = document.getElementById("searchQuery").value;   //Value of what was searched has been captured.
    const apiKey = "cc3bac8f";
    const url = `https://www.omdbapi.com/?s=${searchQuery}&apikey=cc3bac8f`   //My endpoint

    try {
        const response = await fetch(url);   //Assigning the data I get from the api in responce variable. "await" makes the compiler wait for the request if it takes time.
        const data = await response.json();
        if (data.Response === "False") {   //Handling "No Movies Found" case.
            const searchResults = document.getElementById("searchResults");
            searchResults.innerHTML = "";   //Added this line at the end as the older movies were not going away in case a wrong search is made.
            toastr.error("Mankind has not created this Movie yet. Your Idea is still safe!😉");
            return;
        }

        displayMovies(data.Search);   //Function call for movies to start rendering.
        toastr.success("Nice Search. Check these movies out!");
    } catch {
        toastr.error("Unknown error occured! Please try again.");   //In case an error is catched.
    }
});

function displayMovies(searchedMovies) {
    const searchResults = document.getElementById("searchResults");
    searchResults.innerHTML = "";

    searchedMovies.forEach(eachMovie => {
        const movieCard = `
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${eachMovie.Poster !== "N/A" ? eachMovie.Poster : "https://via.placeholder.com/100x180"}" alt="Card image Movie Poster">
                    <div class="card-body">
                        <h5 class="card-title">${eachMovie.Title}</h5>
                        <p class="card-text">Year: ${eachMovie.Year}</p>
                        <p class="card-text">Type: ${eachMovie.Type}</p>
                    </div>
            </div>
            `;
        searchResults.innerHTML += movieCard;
    });
}