var count = 0;

window.addEventListener("keydown", (event) => {
    console.log(event.key)
    if (event.key === "ArrowDown") {
        console.log("I get here");
        count++;
        animateImages(count);
    }
})

function animateImages(count) {
    var basketBall = document.getElementById("basketball");
    console.log(basketBall)
    basketBall.style.transformOrigin = `center center ${10 * count}px`;
    var baseBall = document.getElementById("baseball");
    baseBall.style.transformOrigin = "top left";
}