function loader(){
    let tl = gsap.timeline();

    tl.from("#loader h3",{
        x: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2 
    })

    tl.to("#loader h3",{
        opacity: 0,
        x: -20,
        duration: 0.8,
        stagger: 0.2
    })
    tl.to("#loader", {
        opacity: 0,
    })
    tl.from(".name span",{
        y: -100,
        opacity:0,
        stagger: 0.1,
        duration: 0.5,
        delay: -0.5,
    })
    tl.to("#loader", {
        display: "none"
    })
}
loader()

function changeMenuColor(){
    let menus = document.querySelectorAll(".navbar-nav .nav-item a");
    
    menus.forEach((link)=>{
        link.addEventListener("click", ()=>{
            menus.forEach((list) =>{
                list.classList.add("active");   
                console.log(link)
            })
            // this.classList ="active";
        })
    })
    
}
changeMenuColor()