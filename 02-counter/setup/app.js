// let count = 0;
// const decrease = document.getElementById('decrease');
// const reset = document.getElementById('reset');
// const increase = document.getElementById('increase');
// const counter= document.querySelector('.counter');

// decrease.addEventListener('click',function(){
//     count--;
//     counter.textContent = count;
// })
// reset.addEventListener('click', function(){
//     count = 0
//     counter.textContent = count;
// })

// increase.addEventListener('click', function(){
//     count++;
//     counter.textContent = count;
// })
let count = 0;

const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }else if (styles.contains('increase')){
            count++;
        }else{
            count = 0;
        }
        if(count> 0){
            value.style.color = 'green';
        }
        if(count < 0){
            value.style.color = 'red';
        }
        if( count == 0){
            value.style.color = 'black';
        }
        value.textContent = count;
    })
})