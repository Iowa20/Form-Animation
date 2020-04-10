function animatedForm(){
 const skulls = document.querySelectorAll(".fa-skull");
 
 skulls.forEach(skulls => {
    skulls.addEventListener("click", () => {
        const input = skulls.previousElementSibling;
        const parent = skulls.parentElement;
        const nextForm = parent.nextElementSibling;

        //check for validation
        if(input.type === "text" && validateUser(input)){
            nextForm(parent, nextForm);    
        }
    });
 });
}


function validateUser(user) {
    if (user.value.length < 6){
        console.log("not enough characters");
        error("rgb(189,87,87)");
    }
        else {
            error("rgb (50, 100, 83)");
            return true;
        }
    }

function nextForm(parent, nextForm){
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}


function error(color){
    document.body.style.backgroundColor = color;
}



animatedForm();