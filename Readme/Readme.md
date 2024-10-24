# Movie Search Page Via HTML, CSS and JS

I used a 10 minute mail to gain the api. By using Bootstrap Cards and other elements, I have made it as responsive as possible.

Apart from API, we have worked on:
- Toastr Notifications
- Script tags
- New Functions about Javascript

I have added the comments in order to help you understand how things are working in this all. Please let me know in case you feel confused.

 Here is the task board I used to accomplish my task:

 We want to create a movie search page using The Open Movie Database (http://www.omdbapi.com/). The HTML for the website is provided in the movie_template.html file. Write the JavaScript code to complete the following features:

Connect to the OMDb API:

Obtain an API key from the OMDb website (http://www.omdbapi.com/apikey.aspx). You can use a temporary email to obtain the API key: https://10minutemail.com/ 

Implement the search feature:

When the user submits the search form, capture the value of the movie title entered in the search input field. Don’t forget that to prevent the form from “navigating” to another page, you need to call “event.preventDefault()” when capturing the submit event.

Use the async/await syntax and the fetch() function to send an HTTP GET request to OMDb to search for movies based on the user's input. Read the API documentation to see what is the endpoint and how you need to provide the API key.

Display all the movies returned by the search inside the searchResults div in a card format (as shown in the provided HTML).

Handle the search results:

The movie poster.

The movie title.

The release year.

The movie type (e.g., movie, series).

For each movie result, display:

Ensure that each movie is displayed in a Bootstrap card component.

Provide user feedback with Toastr notifications:

Show an info notification ("Searching for movies...") when the search starts.

If the search is successful, show a success notification ("Movies found!").

If no results are found, show an error notification ("No movies found for this query").

If there’s a network error or another issue, show an error notification ("An error occurred while searching").

Use the Toastr library to provide real-time notifications:

Clear previous results:

Ensure that when a new search is performed, the previous movie search results are cleared from the page before displaying new results. You can use our example from class to guide you.

Error handling:

Implement proper error handling using try/catch to catch any errors during the fetch() process and display appropriate error messages using Toastr.