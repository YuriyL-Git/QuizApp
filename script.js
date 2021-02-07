//Select elements
const form = document.getElementById("quiz-form")
const answers = Array.from(document.querySelectorAll('.answer'))
const questionItems = Array.from(document.querySelectorAll('.question-item'))
const alert = document.querySelector('#alert')

//Add listener to the form
form.addEventListener('submit', e =>
{
    //Prevent the default behaviour of form
    e.preventDefault()

    questionItems.forEach(item => item.classList.add('incorrect'))
    const checkedAnswers = answers.filter(a => a.checked)

    checkedAnswers.forEach(ans =>
    {
        const answerIsCorrect = ans.value === 'true'
        const questionItem = ans.closest('.question-item')

        //  For each correct answer add the class `correct` to the parent with the class `question-item` and remove the class `incorrect`.
        if (answerIsCorrect)
        {
            questionItem.classList.add('correct')
            questionItem.classList.remove('incorrect')

        } else
        {
            questionItem.classList.add('f')
            questionItem.classList.remove('correct')
        }
    })

    const allAnswered = checkedAnswers.length === questionItems.length
    const answeredAreTrue = checkedAnswers.every(answer => answer.value === 'true')

    if (allAnswered && answeredAreTrue)
    {
        alert.classList.add('active')
        setTimeout(() =>
        {
            alert.classList.remove('active')
        }, 1500)

    }

})



