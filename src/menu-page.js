import Image2 from './2.jpg';
import Image3 from './3.jpg';
import Image4 from './4.jpg';
const mainContainer = document.querySelector('#container');

const menuLoad = () => {
	const bodyContainer = document.createElement('div');
	bodyContainer.classList.add('body-container');
	mainContainer.appendChild(bodyContainer);

	const mainTitle = document.createElement('header');
	mainTitle.classList.add('main-title');
	mainTitle.innerText = "Today's best selling items";
	bodyContainer.appendChild(mainTitle);

	const itemContainer1 = document.createElement('div');
	itemContainer1.classList.add('item-container');
	bodyContainer.appendChild(itemContainer1);

	const foodImg1 = new Image();
	foodImg1.src = Image2;
	foodImg1.classList.add('item-image');
	itemContainer1.appendChild(foodImg1);

	const itemSideContainer1 = document.createElement('div');
	itemSideContainer1.classList.add('side-container');
	itemContainer1.appendChild(itemSideContainer1);

	const itemSideHeader1 = document.createElement('header');
	itemSideHeader1.classList.add('side-header');
	itemSideHeader1.innerText = 'Item #1';
	itemSideContainer1.appendChild(itemSideHeader1);

	const paragraph1 = document.createElement('p');
	paragraph1.innerText =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit.\nCum dolor eveniet tempora magnam accusamus id,\n atque libero vitae. Dolor tempore accusamus earum iste. Vero alias dolorum voluptatum suscipit ullam. Aperiam!';
	itemSideContainer1.appendChild(paragraph1);

	const itemContainer2 = document.createElement('div');
	itemContainer2.classList.add('item-container');
	bodyContainer.appendChild(itemContainer2);

	const foodImg2 = new Image();
	foodImg2.src = Image3;
	foodImg2.classList.add('item-image');
	itemContainer2.appendChild(foodImg2);

	const itemSideContainer2 = document.createElement('div');
	itemSideContainer2.classList.add('side-container');
	itemContainer2.appendChild(itemSideContainer2);

	const itemSideHeader2 = document.createElement('header');
	itemSideHeader2.classList.add('side-header');
	itemSideHeader2.innerText = 'Item #2';
	itemSideContainer2.appendChild(itemSideHeader2);

	const paragraph2 = document.createElement('p');
	paragraph2.innerText =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit.\nCum dolor eveniet tempora magnam accusamus id,\n atque libero vitae. Dolor tempore accusamus earum iste. Vero alias dolorum voluptatum suscipit ullam. Aperiam!';
	itemSideContainer2.appendChild(paragraph2);

	const itemContainer3 = document.createElement('div');
	itemContainer3.classList.add('item-container');
	bodyContainer.appendChild(itemContainer3);

	const foodImg3 = new Image();
	foodImg3.src = Image4;
	foodImg3.classList.add('item-image');
	itemContainer3.appendChild(foodImg3);

	const itemSideContainer3 = document.createElement('div');
	itemSideContainer3.classList.add('side-container');
	itemContainer3.appendChild(itemSideContainer3);

	const itemSideHeader3 = document.createElement('header');
	itemSideHeader3.classList.add('side-header');
	itemSideHeader3.innerText = 'Item #3';
	itemSideContainer3.appendChild(itemSideHeader3);

	const paragraph3 = document.createElement('p');
	paragraph3.innerText =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit.\nCum dolor eveniet tempora magnam accusamus id,\n atque libero vitae. Dolor tempore accusamus earum iste. Vero alias dolorum voluptatum suscipit ullam. Aperiam!';
	itemSideContainer3.appendChild(paragraph3);
};

export default menuLoad;
