const logInBtn = document.querySelector(".loginbtn");
const closeLogIn = document.querySelector(".closemodal")
const loginBotn = document.querySelector(".login")
const navList = document.querySelector(".infodiv");
const signUp = document.querySelector(".Sign-Up")
const closeSignUp = document.querySelector(".close-btn")
const signUpForm = document.querySelector(".signupmodal")
const signUpBtn = document.querySelector(".signupbtn");
const logInForm = document.querySelector(".loginmodal")
const bookBas=document.querySelector(".bookss")
function cambiar_login() {
    document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";  
  document.querySelector('.cont_form_login').style.display = "block";
  document.querySelector('.cont_form_sign_up').style.opacity = "0";               
  
  setTimeout(function(){  document.querySelector('.cont_form_login').style.opacity = "1"; },400);  
    
  setTimeout(function(){    
  document.querySelector('.cont_form_sign_up').style.display = "none";
  },200);  
    }
  
  function cambiar_sign_up(at) {
    document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
    document.querySelector('.cont_form_sign_up').style.display = "block";
  document.querySelector('.cont_form_login').style.opacity = "0";
    
  setTimeout(function(){  document.querySelector('.cont_form_sign_up').style.opacity = "1";
  },100);  
  
  setTimeout(function(){   document.querySelector('.cont_form_login').style.display = "none";
  },400);  
  
  
  }    
  
  
  
  function ocultar_login_sign_up() {
  
  document.querySelector('.cont_forms').className = "cont_forms";  
  document.querySelector('.cont_form_sign_up').style.opacity = "0";               
  document.querySelector('.cont_form_login').style.opacity = "0"; 
  
  setTimeout(function(){
  document.querySelector('.cont_form_sign_up').style.display = "none";
  document.querySelector('.cont_form_login').style.display = "none";
  },500);  
    
    }
  
  





closeLogIn.addEventListener("click", () => {
    document.querySelector(".cotn_principal").style.display = "none"
})

loginBotn.addEventListener("click", () => {
    document.querySelector(".cotn_principal").style.display = "block"
})



signUpBtn.addEventListener("click", () => {

    axios.post("http://localhost:3000/api/books/signup", {
        name: document.querySelector("#inputname").value,

        surname: document.querySelector("#inputsurname").value,

        mail: document.querySelector("#inputmail").value,

        password: document.querySelector("#inputpassword").value

    }).then(() => {
        
    })
        .catch(() => {
            document.querySelector(".errorsingup").style.display = "block";;
            document.querySelector("#inputname").value=""
            document.querySelector("#inputsurname").value=""
            document.querySelector("#inputmail").value=""
            document.querySelector("#inputpassword").value=""
        })

})

logInBtn.addEventListener("click", () => {

    axios.post("http://localhost:3000/api/books/login", {


        mail: document.querySelector("#loginmail").value,
        password: document.querySelector("#loginpassword").value

    }).then(() => {

        localStorage.setItem("email", document.querySelector("#loginmail").value)
        localStorage.setItem("password", document.querySelector("#loginpassword").value)

        
        document.querySelector(".cotn_principal").style.display = "none"
        document.querySelector(".login").style.display="none"
        
        const newNav = `
        <p class="loginmaill">${document.querySelector("#loginmail").value}</p>
        <div class="dasssh"><a class="dash" href="./dashboard.html">DashBoard</a></div>
        <div class="logout"><a class="dash" href="./index.html">Log out</a></div>`;

        navList.insertAdjacentHTML("beforeend", newNav);
        document.querySelector(".logout").addEventListener("click", () => {
        
            localStorage.clear()
 
          })
       
        
    })

  
        .catch(() => {
            document.querySelector(".errorlogin").style.display = "block";
            document.querySelector("#loginmail").value=""
            document.querySelector("#loginpassword").value=""
        })
})

