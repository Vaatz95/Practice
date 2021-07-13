const image = document.body.querySelectorAll('.gallery');
function change(e){
    image.forEach( image => {
        const imageSet = (window.scrollY + window.innerHeight) - image.offsetHeight/2;
        const imageBottom =  image.offsetTop + image.offsetHeight;
        const isHafShown = imageSet > image.offsetTop;
        const isNotPassed = window.scrollY < imageBottom;

     if(isHafShown && isNotPassed){
        image.classList.add('active')


     }else {image.classList.remove('active')}


    })


}


window.addEventListener('scroll',change)