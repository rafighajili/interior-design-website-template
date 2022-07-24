/* NAVBAR */
//scrolled
window.addEventListener("scroll", () => {
    var navbar = this.document.querySelector("nav");
    navbar.classList.toggle("scrolled", window.scrollY > 100);
})

//active tab
const navTabs = document.querySelectorAll("nav div ul li a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        
        if (pageYOffset >= sectionTop - 200){
            current = section.getAttribute("id");
        }
    })

    navTabs.forEach(navTab => {
        navTab.classList.remove("active")

        if(navTab.classList.contains(current)){
            navTab.classList.add("active")
        }
    })
})

//burger
const openBtn = document.querySelector("#openNav");
const closeBtn = document.querySelector("#closeNav");
const menu = document.querySelector("nav .container ul");
const links = document.querySelectorAll("nav .container ul li a");
const darkener = document.querySelector(".brightnessReducer");

openBtn.addEventListener("click", () => {
    openBtn.classList.add("out");
    menu.classList.add("in", "active");
    darkener.classList.add("in", "active");
    setTimeout(() => {
        openBtn.classList.remove("active", "in", "out");
        closeBtn.classList.add("in", "active");
    }, 500);
})

closeBtn.addEventListener("click", () => {
    closeBtn.classList.add("out");
    menu.classList.add("out");
    darkener.classList.add("out");
    setTimeout(() => {
        closeBtn.classList.remove("active", "in", "out");
        menu.classList.remove("active", "in", "out");
        darkener.classList.remove("active", "in", "out");
        openBtn.classList.add("in", "active");
    }, 500);
})

links.forEach(link => {
    link.addEventListener("click", () => {
        closeBtn.classList.add("out");
        menu.classList.add("out");
        darkener.classList.add("out");
        setTimeout(() => {
            closeBtn.classList.remove("active", "in", "out");
            menu.classList.remove("active", "in", "out");
            darkener.classList.remove("active", "in", "out");
            openBtn.classList.add("in", "active");
        }, 500);
    })
})



/* PROJECTS */
const projectTabs = document.querySelectorAll("section#projects ul li button");
const projectImages = document.querySelectorAll(".imgProject");

projectTabs.forEach(projectTab => {
    projectTab.addEventListener("click", () => {
        projectTabs.forEach(projectTab => {
            projectTab.classList.remove("active")
        })

        projectTab.classList.add("active")

        if(projectTab.getAttribute("id")=="all"){
            projectImages.forEach(projectImage => {
                projectImage.classList.add("active")
            })
        }
        else{
            projectImages.forEach(projectImage => {
                projectImage.classList.remove("active")
                if(projectImage.classList.contains(projectTab.getAttribute("id"))){
                    projectImage.classList.add("active")
                }
            })
        }
    })
})