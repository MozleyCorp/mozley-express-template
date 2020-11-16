module.exports = (eve) => {
	eve.on("hero.added", hero => {
		console.log(`${hero.name} is here to save the day!`)
	})
}