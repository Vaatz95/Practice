const nav = document.body.querySelector('nav')
const navCoords = nav.offsetTop
const text = nav.querySelector('.menu_left')
const title = text. querySelector('h1')
const text2 = nav. querySelector('.menu_right')
const title2 = text2. querySelector('h1')


function change(){
    const navCoords = nav. offsetTop;

    if( window.scrollY > navCoords){
        nav.classList.add('box')
        text.classList.add('change')
        text2.classList.add('change')
        title.textContent = "Schwartz Media";
      

    }else {
        nav.classList.remove('box')
        text.classList.remove('change')
        text2.classList.remove('change')
        title.textContent = "Schwartz";
       
    }


}

window.addEventListener('scroll', change);