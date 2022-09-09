const bookWrapper = document.querySelector(".books-container")

const infoMail = localStorage.getItem("email")
const infoPass = localStorage.getItem("password")
const navListt = document.querySelector(".infodiv");
const signUpp = document.querySelector(".Sign-Up")
const loginBotnn = document.querySelector(".login")

if (localStorage.length > 0) {
  
    loginBotnn.style.display = "none"
    const newNav = `
    <p class="loginmaill">${localStorage.getItem("email")}</p>
    <div class="dasssh"><a class="dash" href="./dashboard.html">DashBoard</a></div>
    <div class="logout"><a class="dash" href="./index.html">Log out</a></div>`;

    navListt.insertAdjacentHTML("beforeend", newNav);
    document.querySelector(".logout").addEventListener("click", () => {

        localStorage.clear()

    })
}

function getBooks() {
    // SHOW LOADING 
    document.querySelector(".spinnerrr").style.display = "block"
    axios.get("http://localhost:3000/api/books").then(books => {
        // HIDE LOADING
        document.querySelector(".spinnerrr").style.display = "none"
        renderBookCard(books.data)
    })
}

function renderBookCard(bookList) {

    bookList.map(book => {
        const bookHTML = `
        <div class="book">
        <div class="book-front">
          <div>
            <img src="${book.imageUrl}" alt="The Grapes Of Wrath" class="book-cover" />
          </div>
          <div></div>
        </div>
        <div class="book-pages">
          <div></div>
          <div>
            <h1 class="title">${book.title}</h1>
            <h4 class="author">By ${book.author}</h4>
            <p class="summary">
              ${book.synopsis}
            </p>
            <h6 class="year">Price: $${book.price}</h6>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="book-back"></div>
      </div>
        `
        bookWrapper.insertAdjacentHTML('beforeend', bookHTML)
    })

}

getBooks();