const ratting = document.querySelectorAll("[data-value]");
const submit = document.querySelector(".round-submit");
const box = document.querySelector('.box')

for (const li of ratting) {
    li.addEventListener("mouseover", () => {
        for (const li of ratting) {
            li.classList.remove("active")
            li.classList.remove("choosen")
        }
        li.classList.add("active")

        for (let i = 0; i <= li.dataset.value - 1; i++) {
            ratting[i].classList.remove("choosen")
            ratting[i].classList.add("active")
            if (i == li.dataset.value - 1) {
                ratting[i].classList.add("choosen")
            }

        }
    })
}


submit.addEventListener('click', () => {
    let theChoosen = [...ratting].filter(element => element.classList.contains('choosen'));
    if (theChoosen) {
        box.innerHTML = `
        <div class="box center">
          <div class="icon-rate">
            <span>
              <img src="./images/illustration-thank-you.svg" alt="thank-you">
            </span>
          </div>
      
          <div class="your-rate">
            <p>You selected ${theChoosen[0].dataset.value} out of 5</p>
          </div>
      
          <h1 class="thank"> Thank you!</h1>
          <p class="feedback rate-feedback">
            We appreciate you taking the time to give a rating. If you ever need more support,
            don’t hesitate to get in touch! </p>
      
        </div>`

    } else {

    }
})