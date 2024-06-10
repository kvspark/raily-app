// Mobile Menu button Toggle 
const menu = document.querySelector('.menu-btn')
const nav = document.querySelector('.nav')
menu.addEventListener('click',function(){
    nav.classList.toggle('active')

})



//Change Globe Background on Scroll
function changeGlobeBackground()
{
    const bgPosition = window.scrollY
    const globeBg = document.querySelector('.globe-bg')
    const globeText = document.querySelector('.globe-text-box')
    if(bgPosition >= 400)
    {
        globeBg.classList.add('active')
        globeText.classList.add('active')
    }else{
        globeBg.classList.remove('active')
        globeText.classList.remove('active')
    }
    if(bgPosition >= 600)
    {
        globeText.classList.add('active')
    }else{
        globeText.classList.remove('active')
    }
} 


// AOS
AOS.init({
    once: true,
    duration: 500,
});

// Play and pause audio on click
const togglePlay = document.querySelector('.play-btn-1')
let isPlaying = false
var x = document.getElementById("myAudio")


togglePlay.addEventListener('click',function(){
    isPlaying = !isPlaying
    if(isPlaying)
    {
        x.play()
    }else{
        x.pause()
    }
})



// Meet Raily Follow script
$(document).ready(function (){
    $('#meetRaily').mousemove((event) => {
      
        if(event.pageX < 870)
        {
            $('#follow').css({
                left: event.pageX
            })
        }
        
        
    })
})