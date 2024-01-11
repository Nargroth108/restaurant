import Image5 from './5.jpg';
const mainContainer = document.querySelector('#container');

const contactLoad = () => {
	const bodyContainer = document.createElement('div');
	bodyContainer.classList.add('body-container');
	mainContainer.appendChild(bodyContainer);

	const mainTitle = document.createElement('header');
	mainTitle.classList.add('main-title');
	mainTitle.innerText = 'Our Team';
	bodyContainer.appendChild(mainTitle);

	const homeImage = new Image();
	homeImage.src = Image5;
	homeImage.classList.add('contact-image');
	bodyContainer.appendChild(homeImage);

	const sideContainer = document.createElement('div');
	sideContainer.classList.add('side-container');
	bodyContainer.appendChild(sideContainer);

	const sideHeader = document.createElement('header');
	sideHeader.classList.add('side-header');
	sideHeader.innerText = 'Stephen Screamer';
	sideContainer.appendChild(sideHeader);

	const paragraph = document.createElement('p');
	paragraph.innerText =
		'Role: CEO\nE-mail: notfake@yesmail.com\nTel: 12 34 567 8910';
	sideContainer.appendChild(paragraph);

	console.log('test');
};

export default contactLoad;
