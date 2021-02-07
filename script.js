//Select elements
const form = document.getElementById("quiz-form")
const answers = Array.from(document.querySelectorAll('.answer'))


//Add listener to the form
form.addEventListener('submit', e =>
{
    e.preventDefault()
    const checkedAnswers = answers.filter(a => a.checked)

    checkedAnswers.forEach(ans =>
    {
        const answerIsCorrect = ans.value === 'true'
        const questionItem = ans.closest('.question-item')
        console.log(ans)

        //  For each correct answer add the class `correct` to the parent with the class `question-item` and remove the class `incorrect`.
        if (answerIsCorrect)
        {

        } else
        {

        }
    })
    //console.log(checkedAnswers)
})


//    1. Prevent the default behaviour
//    2. Get all selected answers (use the `checked` property on the input to determine if it is selected or not)
//    3. Loop through the selected answer to see if they are correct or not (Check the value of the answer to see if it is the string "true")
//    5. For each incorrect answer add the class `incorrect` to the parent with the class `question-item` and remove the class `correct`.
//    6. BONUS: Make sure unanswered questions show up as incorrect. The easiest way to do this is to add the incorrect class and removing the correct class from all question items before checking the correct answers
//    7. BONUS: If all answers are correct show the element with the id `alert` and hide it after one second (look into setTimeout) (use the class active to show the alert and remove the class to hide it)
