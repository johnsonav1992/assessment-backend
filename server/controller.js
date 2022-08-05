const affirmationsDB = []

let baseId = 1

module.exports = {

	getCompliment: (req, res) => {
		const compliments = [
			"Gee, you're a smart cookie!",
			'Cool shirt!',
			'Your Javascript skills are stellar.',
		]

		// choose random compliment
		let randomIndex = Math.floor(Math.random() * compliments.length)
		let randomCompliment = compliments[randomIndex]

		res.status(200).send(randomCompliment)
	},

	getFortune: (req, res) => {
		const fortunes = [
			'A truly rich life contains love and art in abundance.',
			'All your hard work will soon pay off.',
			'An inch of time is an inch of gold.',
			'Believe it can be done.',
			'When nature calls, there is no voicemail.'
		]

		let randomIndex = Math.floor(Math.random() * fortunes.length)
        console.log(randomIndex)
		let randomFortune = fortunes[randomIndex]

		res.status(200).send(randomFortune)
	},

    postAffirmation: (req, res) => {

        let { affirmation } = req.body

        const postedAffirmation = {
            id: baseId,
            affirmation: affirmation
        }

        affirmationsDB.push(postedAffirmation)
        baseId++
        console.log(affirmationsDB)
        res.status(200).send(affirmationsDB)
    },

	deleteAffirmation: (req, res) => {
		let { id } = req.params
		let index = affirmationsDB.findIndex(affirmationObj => affirmationObj.id === +id)

		affirmationsDB.splice(index, 1)
		res.status(200).send(affirmationsDB)
	},

    getQuote: (req, res) => {
		const quotes = [`There is always light. If only we're brave enough to see it. If only we're brave enough to be it. - Amanda Gorman`, `I have learned not to allow rejection to move me. - Cicely Tyson`, `You’re braver than you believe, stronger than you seem, and smarter than you think. - A. A. Milne`]

		let randomIndex = Math.floor(Math.random() * quotes.length)
        console.log(randomIndex)
		let randomQuote = quotes[randomIndex]

		res.status(200).send(randomQuote)
	},
}
