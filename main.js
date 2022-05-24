var myAudio = new Audio('sounds/bg-music.mp3');
if (typeof myAudio.loop == 'boolean') {
	myAudio.loop = true;
} else {
	myAudio.addEventListener(
		'ended',
		function () {
			this.currentTime = 0;
			this.play();
		},
		false
	);
}
myAudio.play();

setTimeout(() => {
	const ganeshElement = document.getElementById('ganesh');
	const flowers = document.getElementById('bg-flowers');
	ganeshElement.style.display = 'none';
	flowers.style.display = 'none';
}, 6000);

setTimeout(() => {
	const mainElement = document.getElementById('content');
	mainElement.style.display = 'block';
	setTimeout(() => {
		const cardContent = document.getElementById('card-content');
		cardContent.style.display = 'none';
		const venueContent = document.getElementById('venue-content');
		venueContent.style.display = 'block';
		setTimeout(() => {
			venueContent.style.display = 'none';
			const peopleContent = document.getElementById('people-content');
			peopleContent.style.display = 'block';
			setTimeout(() => {
				peopleContent.style.display = 'none';
				const welcomeContent =
					document.getElementById('welcome-content');
				welcomeContent.style.display = 'block';
			}, 14000);
		}, 14000);
	}, 18000);
}, 7000);
