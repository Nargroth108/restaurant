import { initialLoad, homeLoad } from './home-page';
import menuLoad from './menu-page';
import contactLoad from './contact-page';

onload = initialLoad();

const mainContainer = document.getElementById('container');
const navBtn1 = document.getElementById('home-button');
const navBtn2 = document.getElementById('menu-button');
const navBtn3 = document.getElementById('contact-button');

navBtn1.addEventListener('click', () => {
	const bodyContainer = document.querySelector('.body-container');
	mainContainer.removeChild(bodyContainer);
	homeLoad();
});

navBtn2.addEventListener('click', () => {
	const bodyContainer = document.querySelector('.body-container');
	mainContainer.removeChild(bodyContainer);
	menuLoad();
});

navBtn3.addEventListener('click', () => {
	const bodyContainer = document.querySelector('.body-container');
	mainContainer.removeChild(bodyContainer);
	contactLoad();
});
