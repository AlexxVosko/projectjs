
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass){
    // -- Tabs -- //
    const tabs = document.querySelectorAll(tabsSelector),
          tabsContent = document.querySelectorAll(tabsContentSelector),
          tabsParent = document.querySelector(tabsParentSelector);

    // функция скрытия табов
    function hideTabContent(){
        tabsContent.forEach(item=>{
            item.style.display = 'none';
            item.classList.add('hide');
            item.classList.remove('show','fade');
        });
        tabs.forEach(tab=>{
            tab.classList.remove(activeClass);

        });
    }

    //функция показа табов
    // если функция вызывается без аргумента, то по умолчанию можно выставить i=0
    function showTabContent(i=0){
        tabsContent[i].style.display = 'block';
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');


        tabs[i].classList.add(activeClass);

    }

    hideTabContent();
    showTabContent();

    // обработчик меню

    tabsParent.addEventListener('click',(e)=>{
        const target = e.target;

        if(target && target.classList.contains(tabsSelector.slice(1))){
            tabs.forEach((item,i)=>{
                if(target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

export default tabs;