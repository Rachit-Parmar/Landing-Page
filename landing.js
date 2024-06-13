const signupmodal=document.querySelector(".signup-form-wrapper");
const loginmodal=document.querySelector(".login-form-wrapper");
const signupbtn=document.querySelector(".signup-btn");
const loginbtn=document.querySelector(".login-btn");

const signupx=document.querySelector(".signup-x");
const loginx=document.querySelector(".login-x");
const formcontainer=document.querySelector(".form-container");

signupbtn.addEventListener("click",()=>{
    signupmodal.classList.add("display");
    formcontainer.classList.add("disable");
});

loginbtn.addEventListener("click",()=>{
    loginmodal.classList.add("display");
    formcontainer.classList.add("disable");
});

signupx.addEventListener("click",()=>{
    signupmodal.classList.remove("display");
    formcontainer.classList.remove("disable");
});
loginx.addEventListener("click",()=>{
    loginmodal.classList.remove("display");
    formcontainer.classList.remove("disable");
});