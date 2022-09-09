const authorWrapper = document.querySelector(".cols")
const infoMail=localStorage.getItem("email")
const infoPass=localStorage.getItem("password")
const navLisst = document.querySelector(".infodiv");
const siggnUp = document.querySelector(".Sign-Up")
const loginBotnnn = document.querySelector(".login")

if(localStorage.length>0){
    
    loginBotnnn.style.display = "none"
    const newNav = `
    <p class="loginmaill">${localStorage.getItem("email")}</p>
    <div class="dasssh"><a class="dash" href="./dashboard.html">DashBoard</a></div>
    <div class="logout"><a class="dash" href="./index.html">Log out</a></div>`;

    navLisst.insertAdjacentHTML("beforeend", newNav);
    document.querySelector(".logout").addEventListener("click", () => {
    
        localStorage.clear()

      })
    }

     


 function getAuthors(){
    document.querySelector(".spinner").style.display="block"
   axios.get("http://localhost:3000/api/authors").then(
    
   authors=>{

    document.querySelector(".spinner").style.display="none"
    renderAuthorCard(authors.data)
   }
   )
}

 function renderAuthorCard(authorList){

    authorList.map(author=>{
        const authorHTML=`
        <div class="col" ontouchstart="this.classList.toggle('hover');">
                <div class="container">
                    <div class="front" style="background-image: url(${author.imgUrl})">
                        <div class="inner">
                            <p>${author.name}</p>
                           
                        </div>
                    </div>
                    <div class="back">
                        <div class="inner">
                            <p class="authbio" >${author.biography}</p>
                        </div>
                    </div>
                </div>
            </div>
        `
        authorWrapper.insertAdjacentHTML('beforeend',authorHTML)
    })
    
}

getAuthors();

