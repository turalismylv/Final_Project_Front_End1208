const oneBook = document.querySelector(".one-book");
const twoBook = document.querySelector(".two-books");
const topSelling = document.querySelector(".section2div");
const allAuthors = document.querySelector(".section3div")




if(localStorage.length>0){
    axios.post("http://localhost:3000/api/books/login", {


        mail: localStorage.getItem("email"),
        password: localStorage.getItem("password")

    }).then(() => {

        document.querySelector(".suc").style.display = "block";
        document.querySelector(".loginmodal").style.display = "none"
        signUp.style.display = "none"
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

    authorList.map((author, index) => {
        if (index < 6) {
            const authorHTML = `
            <div class="sec3div">
                           
                 <img class="sec3img" src="${author.imgUrl}" alt="">
                 <p class="sec3p">${author.name}</p>
             </div>
    
            `


            allAuthors.insertAdjacentHTML('afterbegin', authorHTML)
        }

    })

}

getAuthors();

function getBooks() {
    document.querySelector(".spinnerRR").style.display="block"
    axios.get("http://localhost:3000/api/books").then(books => {

        document.querySelector(".spinnerRR").style.display="none"
        renderBookCard(books.data)
        renderBookkCard(books.data)
        sortListRender(books.data)
    })
}

function renderBookCard(bookList) {

    bookList.map((book, index) => {
        if (index < 1) {
            const bookHTML = `
            
                    <div >
                        <img class="left" src="${book.imageUrl}" alt="">
                    </div>
                    <div class="right">
                        <div>
                            <p class="first-p">${book.title}</p>
                        </div>
                        <div class="second-line">
                            <div>
                                <p class="second-p">Author</p>
                                <p class="secondd-p">${book.author}</p>
                            </div>
                            <div>
                                <p class="second-p" >Type</p>
                                <p class="secondd-p">${book.genre}</p>
                            </div>
                            <div>
                                <p class="second-p">Layout</p>
                                <p class="secondd-p">${book.bookCover}</p>
                            </div>
                        
                        </div>
                        <div>
                            <p class="three-p">${book.price}$</p>
                        </div>
                    </div>
            
            `;

            oneBook.insertAdjacentHTML('afterbegin', bookHTML)
        }


    })

}

getBooks();


// function getTwoBooks(){

//     axios.get("http://localhost:3000/api/books").then(books=>renderBookkCard(books.data))
//  }



function renderBookkCard(twobookList) {

    twobookList.map((books, index) => {
        if (index == 1 || index == 2) {
            const booksHTML = `
            <div class="twobookdiv">
            
            <div>
             <img class="two-left" src="${books.imageUrl}"
                 alt="">
             </div>
         <div class="two-right">
             <div>
                 <p class="first-pp">${books.title}</p>
             </div>
             <div class="second-line">
                 <div>
                     <p class="second-p">Author</p>
                     <p class="secondd-p">${books.author}</p>
                 </div>
                 <div>
                     <p class="second-p">Type</p>
                     <p class="secondd-p">${books.genre}</p>
                 </div>
                 <div>
                     <p class="second-p">Layout</p>
                     <p class="secondd-p">Hard Cover</p>
                 </div>

             </div>
             <div>
                 <p class="three-p">18$</p>
             </div>
         </div>
     </div>
            </div>
             
             
             
             `


            twoBook.insertAdjacentHTML('afterbegin', booksHTML)
        }


    })

}

function sortListRender(sortbookList) {
   
    sortbookList.sort((book1,book2)=>{

        return book2.sold-book1.sold
    })

    sortbookList.map((bookss, index) => {
        if (index < 5) {
            const bookssHTML = `
            
            <div class="divbook">
            <img class="divbookimg" src="${bookss.imageUrl}" alt="">
            <h3 class="divbookh3">${bookss.title}</h3>
            <p class="divbookp"><span class="divbooksp">By</span>${bookss.author}</p>
            <p class="divbookprice">$${bookss.price}</p>
             </div>
             
             `


            topSelling.insertAdjacentHTML('beforeend', bookssHTML)
        }


    })

}




//  getTwoBooks();