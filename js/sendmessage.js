const scriptURL = 'https://script.google.com/macros/s/AKfycbyzADAv4Yda516I9o-vel8dTa04tQkcPiazuqiJJ2teRf_7OnxfyJCl80hTGecTMBRwQw/exec'
const form = document.forms['submit-to-google-sheet']
const modal = document.getElementById("myModal")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            modal.style.display = "block"
            setTimeout(function () {
                modal.style.display = "none"
            }, 3000)
            form.reset()
        })
        .catch(error => console.error('Внимание, ошибка! ', error.message))
})