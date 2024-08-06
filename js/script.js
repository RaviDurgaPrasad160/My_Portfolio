const effs = document.querySelectorAll('.eff')

window.addEventListener('scroll',checkEff) 

function checkEff(){
    let endLine = window.innerHeight * 0.67
    effs.forEach((ef) => {
        // console.log(ef.getBoundingClientRect().top) 
        let effTop = ef.getBoundingClientRect().top
        if(effTop < endLine){
            ef.classList.add('show')
        }else {
            ef.classList.remove('show')
        }
    })   
}

// auto Type 

var typed = new Typed('.autoType', {
    strings: ["Full Stack Web Developer", "Web Developer", "Frontend Developer"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});
