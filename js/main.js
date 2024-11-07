// html을 읽고 js 작동할 수 있도록 defer 적용 후
// 페이지 아래로 스크롤시 header 스타일링 적용
const header = document.querySelector('.header')
// 요소의 총 높이
const headerHeight = header.offsetHeight
document.addEventListener('scroll', () => {
    if(window.scrollY > headerHeight){
        header.classList.add('header--dark')
    }else{
        header.classList.remove('header--dark')
    }
})

// Home 섹션을 아래로 스크롤 시 투명하게 처리함
const home = document.querySelector('.home__container')
const homeHeight = home.offsetHeight
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight
})

// Arrow ip 버튼을 아래로 스크롤시 투명하게 처리함
const arrowUp = document.querySelector('.arrow-up')
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2){
        arrowUp.style.opacity = 1
    }else{
        arrowUp.style.opacity = 0
    }
})

// Navbar 토글 버튼 클릭 처리
const navbarMenu = document.querySelector('.header__menu')
const navbarToggle = document.querySelector('.header__toggle')
navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('open')
})

// Navbar 메뉴 클릭 시 메뉴를 자동으로 닫아줌
navbarMenu.addEventListener('click', () => {
    navbarMenu.classList.remove('open')
})