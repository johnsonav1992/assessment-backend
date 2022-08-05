const complimentBtn = document.getElementById("complimentButton")
const fortuneButton = document.querySelector('.fortune-button')
const affirmationsForm = document.querySelector('.affirmations-form')
const affirmationsList = document.querySelector('.affirmations-list')
const affirmationInput = document.querySelector('.affirmation-input')
const quotesButton = document.querySelector('.quotes-button')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

const getFortune = () => {
    axios.get(`http://localhost:4000/api/fortune/`)
        .then(response => {
            alert(response.data)
        })
        .catch(err => console.log(err))
}

const getQuote = () => {
    axios.get(`http://localhost:4000/api/quotes/`)
        .then(response => {
            alert(response.data)
        })
        .catch(err => console.log(err))
}

const postAffirmation = (e) => {
    e.preventDefault()

    let affirmation = affirmationInput.value

    axios.post(`http://localhost:4000/api/affirmation/`, {affirmation})
        .then(response => displayAffirmations(response.data))
        .catch(err => console.log(err))

    affirmationInput.value = ''
}

const createAffirmation = affirmationObj => {
    let newAffirmation = affirmationObj.affirmation
    let newAffirmationLi = document.createElement('li')
    newAffirmationLi.textContent = newAffirmation
    affirmationsList.append(newAffirmationLi)
}

const displayAffirmations = arr => {
    affirmationsList.innerHTML = ``
    for(let i = 0; i < arr.length; i++) {
        createAffirmation(arr[i])
    }
}

complimentBtn.addEventListener('click', getCompliment)
fortuneButton.addEventListener('click', getFortune)
affirmationsForm.addEventListener('submit', postAffirmation)
quotesButton.addEventListener('click', getQuote)

