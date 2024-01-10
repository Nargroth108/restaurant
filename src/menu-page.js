import Image2 from './2.jpg';
const mainContainer = document.querySelector('#container');

const menuLoad = () => {
	const bodyContainer = document.createElement('div');
	bodyContainer.classList.add('body-container');
	mainContainer.appendChild(bodyContainer);

	const mainTitle = document.createElement('header');
	mainTitle.classList.add('main-title');
	mainTitle.innerText = 'Dream Bakery';
	bodyContainer.appendChild(mainTitle);

	const homeImage = new Image();
	homeImage.src = Image2;
	homeImage.classList.add('home-image');
	bodyContainer.appendChild(homeImage);

	const sideContainer = document.createElement('div');
	sideContainer.classList.add('side-container');
	bodyContainer.appendChild(sideContainer);

	const sideHeader = document.createElement('header');
	sideHeader.classList.add('side-header');
	sideHeader.innerText = 'About Us';
	sideContainer.appendChild(sideHeader);

	const paragraph = document.createElement('p');
	paragraph.innerText =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit.\nCum dolor eveniet tempora magnam accusamus id, atque libero vitae. Dolor tempore accusamus earum iste. Vero alias dolorum voluptatum suscipit ullam. Aperiam!\nLorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor eveniet tempora magnam accusamus id, atque libero vitae. Dolor tempore accusamus earum iste. Vero alias dolorum voluptatum suscipit ullam.\nAperiam!';
	sideContainer.appendChild(paragraph);
};

export default menuLoad;
