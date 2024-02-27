let btn_dark = document.querySelector ('.dark_mode')
let btn_light = document.querySelector ('.light_mode')
let header = document.querySelector ('header')
let main = document.querySelector ('main')


btn_dark.addEventListener('click',() =>{
    header.style.background = '#2B3844'
    main.style.background = '#202C36'
})

btn_light.addEventListener('click',() =>{
    header.style.background = 'white'
    main.style.background = 'white'
    
})

