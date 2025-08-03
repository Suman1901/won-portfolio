let quearyForm = document.querySelector(".queary-form");

// let messageBtn = document.querySelector(".submitBtn");

let messageField = document.getElementById("userMessage");

messageField.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault(); // Prevents newline
        quearyForm.requestSubmit(); // Triggers form submit
    }
});

quearyForm.addEventListener("submit", (eve)=>{
    eve.preventDefault(); 
    console.log( "form submited")
    let fullName = document.querySelector(".fullName");
    // console.log(fullName.value);
})