const oneBook = document.querySelector(".align");
const twoBook = document.querySelector(".two-books");
const topSelling = document.querySelector(".containerr");
const allAuthors = document.querySelector(".card-grid")




if(localStorage.length>0){
    axios.post("http://localhost:3000/api/books/login", {


        mail: localStorage.getItem("email"),
        password: localStorage.getItem("password")

    }).then(() => {

       
        loginBotn.style.display = "none"
        const newNav = `
        <p class="loginmaill">${localStorage.getItem("email")}</p>
        <div class="dasssh"><a class="dash" href="./dashboard.html">DashBoard</a></div>
        <div class="logout"><a class="dash" href="./index.html">Log out</a></div>`;

        navList.insertAdjacentHTML("beforeend", newNav);
        
        document.querySelector(".logout").addEventListener("click", () => {
        
            localStorage.clear()
 
          })
    })
}

function getAuthors() {
    
    axios.get("http://localhost:3000/api/authors").then(authors => {

        
        renderAuthorCard(authors.data)
        
    })
}

function renderAuthorCard(authorList) {

    authorList.map((author,index) => {
            if(index<8){
                const authorHTML = `
                <a class="card" href="#">
                <div class="card__background"
                    style="background-image: url(${author.imgUrl})">
                </div>
                <div class="card__content">
                   
                    <h3 class="card__heading">${author.name}</h3>
                </div>
            </a>
        
                `
    
    
                allAuthors.insertAdjacentHTML('beforeend', authorHTML)
                
            }
            
        

    })

}

getAuthors();

function getBooks() {
    document.querySelector(".spinnerRR").style.display="block"
    axios.get("http://localhost:3000/api/books").then(books => {

        document.querySelector(".spinnerRR").style.display="none"
        renderBookCard(books.data)
        
        sortListRender(books.data)
    })
}

function renderBookCard(bookList) {

    bookList.map((book, index) => {
        if (index < 4) {
            const bookHTML = `
            
            <li>
            <figure class='book'>
                <!-- Front -->
                <ul class='hardcover_front'>
                    <li>
                        <img src="${book.imageUrl}" alt="" width="100%" height="100%">
                        <span class="ribbon bestseller">Nº1</span>
                    </li>
                    <li></li>
                </ul>
                <!-- Pages -->
                <ul class='page'>
                    <li></li>
                    <li>
                      <p class="synopsisbook">${book.synopsis}</p>
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <!-- Back -->
                <ul class='hardcover_back'>
                    <li></li>
                    <li></li>
                </ul>
                <ul class='book_spine'>
                    <li></li>
                    <li></li>
                </ul>
                <figcaption>
                    <h1>${book.title}</h1>
                    <span>By ${book.author}</span>
                    <p>Genre: ${book.genre}</p>
                    <h3 class="prices">$${book.price}</h3>
                </figcaption>
            </figure>
        </li>
            
            `;

            oneBook.insertAdjacentHTML('beforeend', bookHTML)
        }


    })

}

getBooks();



function sortListRender(sortbookList) {
   
    sortbookList.sort((book1,book2)=>{

        return book2.sold-book1.sold
    })

    sortbookList.map((bookss, index) => {
        if (index < 5) {
            const bookssHTML = `
            <div class="cardd">
            <div class="Boxx">
              <img class="img" src="${bookss.imageUrl}">
            </div>
            <div class="detailss">
              <h2>By ${bookss.author}</h2>
              <p class="synop">${bookss.synopsis} </p>
            </div>
          </div>
             
             `


            topSelling.insertAdjacentHTML('beforeend', bookssHTML)
        }


    })

}







