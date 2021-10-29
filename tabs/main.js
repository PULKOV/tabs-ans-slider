const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');

//console.log(tabs.children); //можно смотреть детей родительского элемента
const changeClass = el => {
	for(let i = 0; i < tabs.children.length; i++) {
		tabs.children[i].classList.remove('active'); //таким образом удалил active у всех классов в div tabs в html
	}
	el.classList.add('active'); //добавилю active, куда кликну 
}

tabs.addEventListener('click', e => {
	const currTab = e.target.dataset.btn;
	changeClass(e.target);
	for(let i = 0; i < content.length; i++) {
		content[i].classList.remove('active');
			if(content[i].dataset.content == currTab) {
				content[i].classList.add('active');
			}
	}
})