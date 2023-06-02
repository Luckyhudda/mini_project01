const point =document.querySelector('.points')
point.addEventListener('click',function(e){
    if(e.target.classList.contains('point')){
        e.target.classList.toggle('funny')
    }
})
