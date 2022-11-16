const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//#f15025
const btn = document.getElementById('btn');
const colors = document.querySelector('.color');

btn.addEventListener('click', function (){
    const randomVal = getColor();
    // console.log(randomVal);
    document.body.style.backgroundColor = randomVal;
    colors.textContent = randomVal;
})

function getColor(){
    let colorString = "#"
    for(let i = 0; i < 6; i++){
        let temp = Math.floor(Math.random()*hex.length);
        colorString = colorString.concat(hex[temp]);
    }
    return colorString;
}