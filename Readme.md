# 🎥 Movie Search Webpage – HTML, JS & Bootstrap

![Movie Search Banner](assets/banner.jpg)

A **responsive, single-page movie search application** powered by the [OMDb API](https://www.omdbapi.com/).  
Search any movie title and instantly view details like posters, release years, and types — all styled with **Bootstrap** and enhanced with **Toastr** notifications.

---

## 🌐 Live Demo

▶️ **Play it Online:**  
[🔗 Movie Search Webpage](https://najam-hassan-kazmi.github.io/Movie-Search-Webpage/)

---


## 🖼️ Screenshots

> See the movie search page in action:

---

![Search in Progress](assets/screenshot1.png)  
*Search in progress with toastr notification*

---

![Displayed Movie Cards](assets/screenshot2.png)  
*Movie results displayed using Bootstrap cards*


---

## 🧩 Features

- 🔎 Real-time search via OMDb API  
- 🎴 Results shown using **Bootstrap Cards**  
- 🚨 Toastr notifications for:
  - Search progress
  - No results
  - Success/failure
- 🚀 Responsive layout using Bootstrap grid system  
- ⚙️ Uses modern **JavaScript features** like `async/await`, `fetch()`, and event listeners

---

## 🛠️ Tech Stack

- **HTML5**  
- **JavaScript (ES6)**  
- **Bootstrap 5.3**  
- **Toastr.js** for notifications  
- **OMDb API** for movie data

---

## 🧠 Key Learnings

This project strengthened understanding of:
- JavaScript DOM manipulation
- Working with APIs using `fetch()` and `async/await`
- Error handling with `try/catch`
- Creating dynamic components (cards) from API data
- Using third-party libraries like Toastr for better UX

---

## 📦 Project Structure

├── index.html              # Main webpage (HTML + Bootstrap)
├── movie_site.js           # JavaScript logic (API fetch + rendering)
├── README.md               # Project documentation
└── assets/                 # Folder containing images/screenshots for README
    ├── banner.png
    ├── screenshot1.png     # Search in progress
    └── screenshot2.png     # Displayed movie cards

---


## 📚 Project Background & Requirements

This project was developed as a practical exercise to strengthen my frontend and API skills.  
Below are the core requirements and how I implemented them:

### ✅ Features Implemented

- 🔍 Movie search using the **OMDb API** via `fetch()` and `async/await`
- 💬 **Toastr** notifications for feedback during searches
- 🎴 Responsive UI built using **Bootstrap 5 cards**
- 🧠 JavaScript event handling with form prevention and error handling
- 💡 Results update dynamically without reloading the page

### 🧪 Task Overview

> The following learning goals were outlined for this exercise:

- Connect to the [OMDb API](https://www.omdbapi.com/) using an API key
- Capture movie title input and prevent form submission reload (`event.preventDefault()`)
- Fetch and display movies using async/await
- Show details for each movie:
  - Poster (or a placeholder)
  - Title
  - Year
  - Type (e.g., movie or series)
- Render results in **Bootstrap card** format
- Display real-time **Toastr** messages:
  - Searching…
  - Success: Movies found
  - Error: No results or fetch failure
- Clear previous results on each new search
- Handle unexpected errors with `try/catch`

> 📎 API key was obtained using a temporary email from [10MinuteMail.com](https://10minutemail.com)

---


## 🧪 Sample Search Flow

1. Enter a movie name (e.g. `Harry Potter`)
2. Press `Search`
3. View cards with:
   - Movie poster
   - Title
   - Year
   - Type (movie, series, etc.)

> 🎉 Bonus: Toastr messages will guide you through every step of the search!

---

## 🧙‍♂️ Developer

**Najam Ul Hassan Kazmi**

📧 [connect.najam@gmail.com](mailto:connect.najam@gmail.com)  
🔗 [GitHub](https://github.com/Najam-Hassan-Kazmi)  
🔗 [LinkedIn](https://linkedin.com/in/najam-ul-hassan-indie-web-developer)

---

## 🙌 Contribution & Feedback

Feel free to:
- Fork the repo ⭐  
- Suggest features  
- Report issues  

---

**Happy Movie Hunting!** 🎬🍿
