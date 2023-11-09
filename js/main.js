let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');


menu.onclick = () => {
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
};

window.onscroll = () =>{
    navbar.classList.remove("open-menu");
    menu.classList.remove("move");
};
//email js
function validate(){
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let sendBtn = document.querySelector(".send-btn");

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == "") {
            empyerror();
        } else{
            sendmail(name.value, email.value, msg.value);
            success();
        }
    });
}
validate();

function sendmail(name, email, msg){
    emailjs.send("service_4o1f7fi","template_0s1ixg5",{
        to_name: name,
        from_name: email,
        message: msg,
        });
}

function empyerror(){
    swal({
        title: "Oh no...",
        text: "Fields cannot be empty",
        icon: "error",
      });
}
function success(){
    swal({
        title: "Email sent successfully",
        text: "We will try to reply in 24 hours",
        icon: "success",
      });
}
//header background change on scroll
let header = document.querySelector('header')

window.addEventListener("scroll", () => {
    header.classList.toggle('header-active', window.scrollY > 0);
});
//scroll top
let scrollTop = document.querySelector('.scroll-top')

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle('scroll-active', window.scrollY >= 400);
});