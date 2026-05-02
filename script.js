const studentForm = document.getElementById('student-form');
const formContainer = document.getElementById('form-container');
const cardContainer = document.getElementById('card-container');
const resetBtn = document.getElementById('reset-btn');

studentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameValue = document.getElementById('name-input').value;
    const ageValue = parseInt(document.getElementById('age-input').value);
    const cityValue = document.getElementById('city-input').value;
    const courseValue = document.getElementById('course-input').value;

    let statusText = "";
    if (ageValue >= 18) {
        statusText = "Adult";
    } else {
        statusText = "Minor";
    }

    const ageInFiveYears = ageValue + 5;

    document.getElementById('display-name').textContent = nameValue;
    document.getElementById('display-age').textContent = ageValue;
    document.getElementById('display-city').textContent = cityValue;
    document.getElementById('display-course').textContent = courseValue;
    document.getElementById('display-status').textContent = statusText;
    document.getElementById('future-age').textContent = ageInFiveYears;

    formContainer.animate([
        { transform: 'translateX(0)', opacity: 1 },
        { transform: 'translateX(-150px)', opacity: 0 }
    ], { duration: 300, easing: 'ease-in' }).onfinish = () => {
        
        formContainer.classList.add('hidden');
        cardContainer.classList.remove('hidden');

        cardContainer.animate([
            { transform: 'translateX(150px)', opacity: 0 },
            { transform: 'translateX(0)', opacity: 1 }
        ], { duration: 300, easing: 'ease-out' });
    };
});

resetBtn.addEventListener('click', function() {
    studentForm.reset();
    
    cardContainer.animate([
        { transform: 'translateX(0)', opacity: 1 },
        { transform: 'translateX(-150px)', opacity: 0 }
    ], { duration: 200, easing: 'ease-in' }).onfinish = () => {
        
        cardContainer.classList.add('hidden');
        formContainer.classList.remove('hidden');

        formContainer.animate([
            { transform: 'translateX(150px)', opacity: 0 },
            { transform: 'translateX(0)', opacity: 1 }
        ], { duration: 250, easing: 'ease-out' });
    };
});
