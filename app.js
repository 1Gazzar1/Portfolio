function balatroEffect(e) {
    const area = this.getBoundingClientRect();
    const [centerX, centerY] = [area.left + area.width / 2, area.top + area.height / 2];
    
    const xOffset = (e.clientX - centerX) / 20; 
    const yOffset = (e.clientY - centerY) / 40; 

    requestAnimationFrame(() => {
        this.style.transform = `perspective(5000px) rotateX(${-yOffset}deg) rotateY(${xOffset}deg)`;
    })
}

function resetEffect() {
    this.style.transform = "rotateX(0deg) rotateY(0deg)";
}

const cards = document.querySelectorAll(".project-card");
cards.forEach(c => c.addEventListener("mouseleave", resetEffect));
cards.forEach(c => c.addEventListener("mousemove", balatroEffect));
