function animatedForm(){
 const skulls = document.querySelectorAll('fa-skull');
 
 skulls.forEach(skulls => {
    skulls.addEventListener("click", () => {
        const input = skulls.previousElementSibling;
        const parent = skulls.parentElement;
    });
 });
}





animatedForm();