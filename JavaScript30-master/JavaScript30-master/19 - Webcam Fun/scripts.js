const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getvideo(){
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
         .then(localMediaStream => {
            console.log(localMediaStream);
            video.src = window.URL.createObjectURL(localMediaStream);
            video.play();
        })
        .catch(err => {
            console.error('OH NO!!!', err);
        });
    }


function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width  =width;
    canvas.hegith = height;

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height)
        let pixels = ctx.getImageData(0,0, width, height);
        
        
        pixels = rgbSplit(pixels);
       
       
       
        ctx.putImageData(pixels, 0, 0);
    }, 16);

}


function takePhoto(){

    snap.currentTime = 0;
    snap.play();

    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'handsome');
    link.innerHTML = `<img src = "${data}" alt="handsome Man" />`
    strip.insertBefore(link, strip.firstChild);
}


function redEffect(pixels){
    for(let i = 0 ; i < pixels.data.length; i = i +=4){
        pixels.data[i + 0] = pixels.data[i + 0] +100; //R
        pixels.data[i + 1] = pixels.data[i + 1] -50;  //G
        pixels.data[i + 2] = pixels.data[i + 2]* 0.5; //B
    }
    return pixels;
}


function rgbSplit(pixels){
    for(let i = 0 ; i < pixels.data.length; i = i +=4){
        pixels.data[i - 150] = pixels.data[i + 0]  //R
        pixels.data[i + 100] = pixels.data[i + 1]  //G
        pixels.data[i - 150] = pixels.data[i + 2]  //B
    }
    return pixels;
}

function greenScreen(pixels) {
    const levels = {};
  
    document.querySelectorAll('.rgb input').forEach((input) => {
      levels[input.name] = input.value;
    });
    
        console.log(levels)

    for (i = 0; i < pixels.data.length; i = i + 4) {
      red = pixels.data[i + 0];
      green = pixels.data[i + 1];
      blue = pixels.data[i + 2];
      alpha = pixels.data[i + 3];
  
      if (red >= levels.rmin
        && green >= levels.gmin
        && blue >= levels.bmin
        && red <= levels.rmax
        && green <= levels.gmax
        && blue <= levels.bmax) {
        
        pixels.data[i + 3] = 0; //투명도 alpha를 의미 
      }
    }
  
    return pixels;
  }



// 전체적으로는 색깔을 어떻게 활용하는지 그리고 색깔 관련 데이터를 뽑아내는 것이 주요 핵심임



getvideo();








video.addEventListener('canplay', paintToCanvas);