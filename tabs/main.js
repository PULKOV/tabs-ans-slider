const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');

//console.log(tabs.children); //можно смотреть детей родительского элемента
const changeClass = el => {
    for (let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active'); //таким образом удалил active у всех классов в div tabs в html
    }
    el.classList.add('active'); //добавлю active, куда кликну 
}

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
    for (let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        if (content[i].dataset.content == currTab) {
            content[i].classList.add('active');
        }
    }
})

const tabsDop = document.getElementById('tabs-dop');
const contentDop = document.querySelectorAll('.content-dop');

//console.log(tabs.children); //можно смотреть детей родительского элемента
const changeClassDop = el => {
    for (let i = 0; i < tabsDop.children.length; i++) {
        tabsDop.children[i].classList.remove('active'); //таким образом удалил active у всех классов в div tabs в html
    }
    el.classList.add('active'); //добавлю active, куда кликну 
}

tabsDop.addEventListener('click', e => {
    const currTabDop = e.target.dataset.btn;
    changeClassDop(e.target);
    for (let i = 0; i < contentDop.length; i++) {
        contentDop[i].classList.remove('active');
        if (contentDop[i].dataset.content_dop == currTabDop) {
            contentDop[i].classList.add('active');
        }
    }
})