const booksList = document.querySelector(".table-body")
const infoMail = localStorage.getItem("email")
const infoPass = localStorage.getItem("password")
const navListdash = document.querySelector(".infodiv");
const signUpdash = document.querySelector(".Sign-Up")
const loginBotndash = document.querySelector(".login")
const addBook = document.querySelector(".lasttd");
const dashWrapper = document.querySelector(".dashwrapper")
let checkArr = [];


addBook.addEventListener("click", () => {
    const bookRow = `
                <div class="publishdiv">
                    <div class="publish">
                        <div class="close-btnn">x</div>
                        <form class="publishform">
                            <input class="formpublish" type="text" placeholder="#id" disabled>
                            <input class="formpublish" id="title" type="text" placeholder="Title">
                            <input class="formpublish" id="author" type="text" placeholder="Book Author">
                            <input class="formpublish" id="publisher" type="text" placeholder="Publisher">
                            <input class="formpublish" id="price" type="text" placeholder="Enter Price">
                            <input class="formpublish" id="url" type="text" placeholder="Enter IMG URL">
                            <div class="genres">Genres:
                                <div>
                                    <input type="checkbox" class="input1" id="drama" >Drama
                                    <input type="checkbox" class="input2" id="drama">Classics
                                    <input type="checkbox" id="drama">Novel
                                    <input type="checkbox" id="drama">History
                                    <input type="checkbox" id="drama">Children
                                    <input type="checkbox" id="drama">biography
                                    <input type="checkbox" id="drama">Fivtion
                                    <input type="checkbox" id="drama">Animal
                                    <input type="checkbox" id="drama">Detective
                                    <input type="checkbox" id="drama">Fantasy
                                    <input type="checkbox" id="drama">Espionage
                                </div>

                            </div>
                            <input class="formpubli" id="synopsis" type="text" placeholder="Enter Short Description">
                            <div class="radiodiv">Book Cover:
                                <input type="radio" id="coverhard" name="cover" checked>
                                <label for="coverhard" class="hard">Hard</label>
                                <input type="radio" id="coversoft" name="cover">
                                <label for="coversoft">Soft</label>
                                </div>
                            <input class="formpublish" id="date" type="text" placeholder="Published In">
                            <input class="formpublish" id="sold" type="text" placeholder="Units Sold">
                            <div class="btnpublish">Publish</div>
                        </form>
                        
                    </div>
                </div>
    `
    dashWrapper.insertAdjacentHTML("afterbegin", bookRow)

    document.querySelector(".publishdiv").style.display = "block"

    document.querySelector(".btnpublish").addEventListener("click", () => {

        axios.post("http://localhost:3000/api/books", {

            title: document.querySelector("#title").value,
            author: document.querySelector("#author").value,
            publishDay: document.querySelector("#date").value,
            imageUrl: document.querySelector("#url").value,
            price: document.querySelector("#price").value,
            publisher: document.querySelector("#publisher").value,
            sold: document.querySelector("#sold").value,
            synopsis: document.querySelector("#synopsis").value,
            bookCover: document.querySelector("#coverhard").checked ? "Hard" : "Soft",
            genre: "drama"

        }).then(

        )
    })

    document.querySelector(".close-btnn").addEventListener("click", () => {
        document.querySelector(".publishdiv").style.display = "none"
    })

})



if (localStorage.length > 0) {
    axios.post("http://localhost:3000/api/books/login", {


        mail: localStorage.getItem("email"),
        password: localStorage.getItem("password")

    }).then(() => {

        document.querySelector(".suc").style.display = "block";
        document.querySelector(".loginmodal").style.display = "none"
        signUpdash.style.display = "none"
        loginBotndash.style.display = "none"
        const newNav = `
        <p class="loginmaill">${localStorage.getItem("email")}</p>
        <div class="dasssh"><a class="dash" href="./dashboard.html">DashBoard</a></div>
        <div class="logout"><a class="dash" href="./index.html">Log out</a></div>`;

        navListdash.insertAdjacentHTML("beforeend", newNav);
        //Buraaaaa log outtt
        document.querySelector(".logout").addEventListener("click", () => {

            localStorage.clear()

        })

    })
}
function getBooks() {
    document.querySelector(".spinnerR").style.display = "block"
    axios.get("http://localhost:3000/api/books").then(books => {
        document.querySelector(".spinnerR").style.display = "none"
        renderBookCard(books.data)
    })
}



function renderBookCard(bookList) {
    booksList.innerHTML = ""
    bookList.map(book => {
        const bookHTML = `
        <tr>
        <td>${book.id}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>$${book.price}</td>
        <td>${book.genre}</td>
        <td>${book.bookCover}</td>
        <td class="lasttdd" >
            <img class="icons" id="book-${book.id}" src="../assets/photos/delete-icon-13.jpg" alt="">
            <img class="icons" id="edit-${book.id}"  src="../assets/photos/ff3fa44f1e75c25cd7b11bf8a8392d74.png" alt="">
         </td>
    </tr>
        `
        booksList.insertAdjacentHTML('beforeend', bookHTML)

        document.getElementById("book-" + book.id).addEventListener("click", () => {

            axios.delete(`http://localhost:3000/api/books/${book.id}`)


        })

        document.getElementById("edit-" + book.id).addEventListener("click", () => {

            axios.get(`http://localhost:3000/api/books/${book.id}`).then(bookk => {

                const bookRow = `
                <div class="publishdiv">
                    <div class="publish">
                        <div class="close-btnn">x</div>
                        <form class="publishform">
                            <input class="formpublish" type="text" id="oldid" placeholder="#id" disabled>
                            <input class="formpublish" id="title" type="text" placeholder="Title">
                            <input class="formpublish" id="author" type="text" placeholder="Book Author">
                            <input class="formpublish" id="publisher" type="text" placeholder="Publisher">
                            <input class="formpublish" id="price" type="text" placeholder="Enter Price">
                            <input class="formpublish" id="url" type="text" placeholder="Enter IMG URL">
                            <div class="genres">Genres:
                                <div>
                                    <input type="checkbox" class="input1" id="drama" >Drama
                                    <input type="checkbox" class="input2" id="drama">Classics
                                    <input type="checkbox" id="drama">Novel
                                    <input type="checkbox" id="drama">History
                                    <input type="checkbox" id="drama">Children
                                    <input type="checkbox" id="drama">biography
                                    <input type="checkbox" id="drama">Fivtion
                                    <input type="checkbox" id="drama">Animal
                                    <input type="checkbox" id="drama">Detective
                                    <input type="checkbox" id="drama">Fantasy
                                    <input type="checkbox" id="drama">Espionage
                                </div>

                            </div>
                            <input class="formpubli" id="synopsis" type="text" placeholder="Enter Short Description">
                            <div class="radiodiv">Book Cover:
                                <input type="radio" id="coverhard" name="cover" checked>
                                <label for="coverhard" class="hard">Hard</label>
                                <input type="radio" id="coversoft" name="cover">
                                <label for="coversoft">Soft</label>
                                </div>
                            <input class="formpublish" id="date" type="text" placeholder="Published In">
                            <input class="formpublish" id="sold" type="text" placeholder="Units Sold">
                            <div class="btnpublish">Edit</div>
                        </form>
                        
                    </div>
                </div>
             `
                dashWrapper.insertAdjacentHTML("afterbegin", bookRow)
                document.querySelector(".publishdiv").style.display = "block"
                document.querySelector("#title").value = bookk.data.title
                document.querySelector("#author").value = bookk.data.author
                document.querySelector("#date").value = bookk.data.publishDay
                document.querySelector("#url").value = bookk.data.imageUrl
                document.querySelector("#price").value = bookk.data.price
                document.querySelector("#publisher").value = bookk.data.publisher
                document.querySelector("#sold").value = bookk.data.sold
                document.querySelector("#synopsis").value = bookk.data.synopsis
                document.querySelector("#oldid").value = bookk.data.id

                document.querySelector(".btnpublish").addEventListener("click", () => {

                    bookk.data.title = document.querySelector("#title").value
                    bookk.data.author = document.querySelector("#author").value
                    bookk.data.publishDay = document.querySelector("#date").value
                    bookk.data.imageUrl = document.querySelector("#url").value
                    bookk.data.price = document.querySelector("#price").value
                    bookk.data.publisher = document.querySelector("#publisher").value
                    bookk.data.sold = document.querySelector("#sold").value
                    bookk.data.synopsis = document.querySelector("#synopsis").value
                    bookk.data.id = document.querySelector("#oldid").value

                    axios.post("http://localhost:3000/api/books", {
                        id:bookk.data.id,
                        title: bookk.data.title,
                        author:bookk.data.author ,
                        publishDay:bookk.data.publishDay ,
                        imageUrl:bookk.data.imageUrl ,
                        price: bookk.data.price,
                        publisher: bookk.data.publisher,
                        sold: bookk.data.sold,
                        synopsis:bookk.data.synopsis ,
                        bookCover:"Hard" ,
                        genre: "drama"

                    }).then(
                        renderBookCard(bookList)
                    )


                })


                document.querySelector(".close-btnn").addEventListener("click", () => {
                    document.querySelector(".publishdiv").style.display = "none"
                })

            })


        })
    })

}



getBooks();

