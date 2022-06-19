const form = document.querySelector('#quiz-form');
const answers = Array.from(document.querySelectorAll('.answer'));
const questions = Array.from(document.querySelectorAll('.question-item'));
const alert = document.querySelector('#alert');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  questions.forEach(questionItem => {
    questionItem.classList.add('incorrect')
    questionItem.classList.remove('correct')
  });

  const filtered = answers.filter(a => a.checked);
  
  filtered.forEach(x => updateSelection(x));
  
  const isAllCorrect = !questions.some(q => q.classList.contains('incorrect'));
  const allAnswered = filtered.length === questions.length

  if(isAllCorrect && allAnswered) {
    alert.classList.add('active');
    setTimeout(() => {
      alert.classList.remove('active');
    }, 1000);
  }
});

function updateSelection(element) {
  const value = element.value
  const parent = element.closest('.question-item');
  
  if(value === 'true') {
    parent.classList.remove('incorrect')
    parent.classList.add('correct')
   } else {
    parent.classList.remove('correct')
    parent.classList.add('incorrect')
   }
}