//using selectors inside the element
// traversing the dom

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         const qarticle = e.currentTarget.parentElement.parentElement;
//         qarticle.classList.toggle('show-text');
//     })
// })

const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
    // console.log(question);
    const btn = question.querySelector('.question-btn');
    // console.log(btn);
    btn.addEventListener('click', function(){

        questions.forEach(function(q){
            if (q !== question){
                q.classList.remove('show-text');
            }
        })

        question.classList.toggle('show-text');
    })
})