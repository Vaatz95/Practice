const nav = document.querySelector("nav")

const navtop = nav.offsetTop;

function fix(){
 if(window.scrollY > navtop){
     nav.classList.add ('change');
}else {
    nav.classList.remove('change');

}

}

window.addEventListener('scroll',fix)



const wrapper = document.querySelector(".wrapper");
const text = wrapper.querySelector('h1');
const image = document.querySelectorAll("img");
const footer = document.querySelector('footer');
const main = document.body.querySelector('main');
const sub = document.body.querySelector('.sub');
const gallery = document.body.querySelectorAll('.gallery')


function changeBackground(){
    const footerset =  (window.scrollY + window.innerHeight)  - footer.offsetHeight/5;
    const footerBottom = footer.offsetTop + footer.offsetHeight;
    const isShown =  footerset > footer.offsetTop;
    const isNotPassed  = window.scrollY < footerBottom;


    if (isShown && isNotPassed){
        document.body.classList.add('change')
        main.classList.add('change');
        sub.classList.add('change');
        gallery.forEach( gallery => gallery.classList.add('change'))
       

    }else {
        document.body.classList.remove('change')
        main.classList.remove('change');
        sub.classList.remove('change');
        gallery.forEach(gallery => gallery.classList.remove('change'))
       
     }


}

window.addEventListener('scroll',changeBackground)

/*
function Changeword() {
    image.forEach( image =>  {
     const ImageSet = (window.scrollY + window.innerHeight) - image.height/2;
     const ImageBottom =  image.offsetTop + image.height;
     const isShown =  ImageSet > image.offsetTop;
     const isNotPassed = window.scrollY < ImageBottom;
     
    if(isShown && isNotPassed){
        text.innerText = `aaaaaaaaaaaaaaaa`
   

    } else{

        text.innerText = `b`

    }


    }
        
        
        
        
        
        
        
        )

}

window.addEventListener('scroll', Changeword);
*/