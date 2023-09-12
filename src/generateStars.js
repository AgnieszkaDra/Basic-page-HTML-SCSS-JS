function generateStars(person, amount) {
    const container = document.querySelector(`.stars-cont.${person}`); 
   
    for (let i = 0; i < amount; i++) {
        const span = document.createElement("span");
        span.classList.add(`fa`); 
        span.classList.add(`fa-star`);
        container.appendChild(span);
    }
}

generateStars('Rita', 2)
generateStars('Mark', 4)
generateStars('Robert', 7)
