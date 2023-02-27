import isInViewport from "./viewportChecker";

function handleScroll() {
    const divs = document.querySelectorAll(".hidden");
    const tip = document.querySelectorAll(".scroll-tip");
    divs.forEach((div) => {
      if (isInViewport(div)) {
        div.style.opacity = "1";
      }
    });

    tip.forEach((div)=> {
        if (isInViewport(div)) {
            div.classList.add("unclickable"); 
        }
    });
}

window.addEventListener("scroll", handleScroll);

export default handleScroll;