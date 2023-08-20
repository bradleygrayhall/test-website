var count = 0;
var basketBall = document.getElementById("basketball");
var baseBall = document.getElementById("baseball");
var centerChecker = -1000;
console.log(baseBall);
console.log(getComputedStyle(baseBall, "").transform.indexOf("-1000"))
window.addEventListener("keydown", (event) => {
    //console.log(event.key)
    if (event.key === "ArrowDown") {
        //console.log("I get here");
        count++;
        animateImages(count);
    }
})

function translateX(el, count) {
    if (el.id == "baseball") {
        el.style.transform = `matrix3D(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.00142857, ${-1000 + (10 * count)}, 0, 0, 1)`;
    }
    else {
        el.style.transform = `matrix3D(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.00142857, ${1000 + (10 * count)}, 0, 0, 1)`;
    }
}
function translateZ(el, count) {
    el.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.00142857, 0, 0, 0, ${count + 1 / 2})`
}

function animateImages(count) {
    //console.log(count)
    var basketBall = document.getElementById("basketball");
    var baseBall = document.getElementById("baseball");
    console.log(getComputedStyle(baseBall, "").transform.substring(55, 59))
    console.log(getComputedStyle(baseBall, "").transform[55])
    if (centerChecker != 0) {
        console.log(`I get triggered? and my value is ${getComputedStyle(baseBall, "").transform[55]}`)
        console.log(`the value of x should be 0 but it is ${getComputedStyle(baseBall, "").transform[55]}`)
        translateX(baseBall, count);
        centerChecker = getComputedStyle(baseBall, "").transform[55]
    }
    else if (centerChecker == 0) {
        console.log("i get triggered");
        translateZ(baseBall, count - 100)
        centerChecker = 0;
        console.log("i should be 0 but i am " + getComputedStyle(baseBall, "").transform[54])
    }
    if (count === 1) {
        basketBall.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.00142857, 0, 0, 0, 1.5)`
        //translateZ(baseBall, count);
        //console.log(basketBall)
    }
    else if (count === 2) {
        basketBall.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.00142857, 0, 0, 0, 2)`
        //translateZ(baseBall, count);
        //console.log(basketBall)
    }
    else {
        basketBall.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.00142857, 0, 0, 0, ${count + 1 / 2})`
        //translateZ(baseBall, count);
        //console.log(basketBall);

    }
}