const complimentBtn = document.getElementById("complimentButton")
const fortuneButton = document.querySelector('.fortune-button')
const affirmationsForm = document.querySelector('.affirmations-form')
const affirmationsList = document.querySelector('.affirmations-list')
const affirmationInput = document.querySelector('.affirmation-input')
const quotesButton = document.querySelector('.quotes-button')
const updateInput = document.querySelector('.number-to-update')
const newUpdate = document.querySelector('.new-update')
const updateForm = document.querySelector('.update-form')


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

const displayAffirmations = arr => {
    affirmationsList.innerHTML = ``
    for(let i = 0; i < arr.length; i++) {
        createAffirmation(arr[i])
    }
}

const createAffirmation = affirmationObj => {
    let newAffirmation = affirmationObj.affirmation
    let newAffirmationLi = document.createElement('li')
    newAffirmationLi.classList.add('affirmation')
    newAffirmationLi.innerHTML = `<p>${newAffirmation}</p><button class="delete" onClick="deleteAffirmation(${affirmationObj.id})">Delete</button>`
    affirmationsList.append(newAffirmationLi)
}

const deleteAffirmation = id => {
    axios.delete(`http://localhost:4000/api/affirmation/${id}`)
        .then(response => displayAffirmations(response.data))
        .catch(err => console.log(err))
}

const updateAffirmation = (e) => {
    e.preventDefault()
    let id = e.target[0].value
    let input = e.target[1].value

    axios.put(`http://localhost:4000/api/affirmation/${id}`, { input })
        .then(response => displayAffirmations(response.data))
        .catch(err => console.log(err))
        
    newUpdate.value = ''
    updateInput.value = ''
}

complimentBtn.addEventListener('click', getCompliment)
fortuneButton.addEventListener('click', getFortune)
affirmationsForm.addEventListener('submit', postAffirmation)
quotesButton.addEventListener('click', getQuote)
updateForm.addEventListener('submit', updateAffirmation)



