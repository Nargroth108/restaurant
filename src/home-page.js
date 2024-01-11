import Image1 from './1.jpg';
const mainContainer = document.querySelector('#container');

const homeLoad = () => {
	const bodyContainer = document.createElement('div');
	bodyContainer.classList.add('body-container');
	mainContainer.appendChild(bodyContainer);

	const mainTitle = document.createElement('header');
	mainTitle.classList.add('main-title');
	mainTitle.innerText = 'Dream Bakery';
	bodyContainer.appendChild(mainTitle);

	const homeImage = new Image();
	homeImage.src = Image1;
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

const initialLoad = () => {
	const mainHeader = document.createElement('header');
	mainHeader.classList.add('main-header');
	mainContainer.appendChild(mainHeader);

	const navBtn1 = document.createElement('button');
	const navBtn2 = document.createElement('button');
	const navBtn3 = document.createElement('button');
	navBtn1.setAttribute('id', 'home-button');
	navBtn2.setAttribute('id', 'menu-button');
	navBtn3.setAttribute('id', 'contact-button');
	navBtn1.innerText = 'Home';
	navBtn2.innerText = 'Items';
	navBtn3.innerText = 'Contact';
	mainHeader.appendChild(navBtn1);
	mainHeader.appendChild(navBtn2);
	mainHeader.appendChild(navBtn3);

	homeLoad();
};

export { initialLoad, homeLoad };
