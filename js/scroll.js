let scrollTimeout

const menuItems = document.querySelectorAll('.header__menu__item')
const sections = [
    document.getElementById("home"),
    document.getElementById("about"),
    document.getElementById("skills"),
    document.getElementById("work"),
    document.getElementById("license"),
    document.getElementById("contact")
]

document.addEventListener("scroll", () => {
    if (scrollTimeout) clearTimeout(scrollTimeout)
    scrollTimeout = setTimeout(() => {
        const scrollPosition = window.scrollY
        if (scrollPosition > 3207) {
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
            updateActiveMenu(5)
        } else if (scrollPosition > 2650) {
            document.getElementById("license").scrollIntoView({ behavior: "smooth" })
            updateActiveMenu(4)
        } else if (scrollPosition > 1920) {
            document.getElementById("work").scrollIntoView({ behavior: "smooth" })
            updateActiveMenu(3)
        } else if (scrollPosition > 1000) {
            document.getElementById("skills").scrollIntoView({ behavior: "smooth" })
            updateActiveMenu(2)
        } else if (scrollPosition > 250) {
            document.getElementById("about").scrollIntoView({ behavior: "smooth" })
            updateActiveMenu(1)
        } else if (scrollPosition <= 250) {
            document.getElementById("home").scrollIntoView({ behavior: "smooth" })
            updateActiveMenu(0)
        }
    }, 100)
})

function updateActiveMenu(activeIndex) {
    menuItems.forEach((item, index) => {
        if (index === activeIndex) item.classList.add('active')
        else item.classList.remove('active')
    })
}
