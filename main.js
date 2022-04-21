let inputValue = document.querySelector('.enterTaskInput');
let btn = document.querySelector('.addBtn');
let taskDiv = document.querySelector('.tasksDiv');
let taskList = document.querySelector('ul');
let filter = document.querySelector('.filter');
let filterImg = document.querySelector('.image_filter');
let clearAll = document.querySelector('.clear-all-btn');
let clearAllImg = document.querySelector('.clear-all');

btn.addEventListener('click', () => {
    if (inputValue.value == '') {
        document.querySelector('.errorMessage').innerHTML = "Please, enter your task correctly!"
    } else {

        let taskListEl = document.createElement('li');
        let tasksText = document.createElement('span');
        
        taskListEl.id = 'taskListEl';
        tasksText.innerText = inputValue.value;
        
        taskList.appendChild(taskListEl);


        let del_img = document.createElement('img');
        let edit_img = document.createElement('img');
        let div = document.createElement('div')
        div.id = 'img-div'
        edit_img.id = 'edit_img';
        del_purple_img = 'del_img';
        del_img.id = 'del_img'
        edit_img.setAttribute('src','./assets/Photos/edit.ico')
        del_img.setAttribute('src', "./assets/Photos/delete.svg")
        taskListEl.append(tasksText)
        div.append(edit_img)
        div.append(del_img)
        taskListEl.append(div)
        

        document.querySelector('.errorMessage').innerHTML = '';
        inputValue.value = '';

        del_img.addEventListener('click', (e) => {
           taskList.removeChild(taskListEl)
        });
        del_img.addEventListener('mouseover', (e) => {
            e.target.setAttribute('src', './assets/Photos/purple_delete.svg')
        });
        del_img.addEventListener('mouseleave', (e) => {
            e.target.setAttribute('src', './assets/Photos/delete.svg')
        });

        edit_img.addEventListener('mouseover', (e) => {
            e.target.setAttribute('src', './assets/Photos/edit_purple.ico')
        });
        edit_img.addEventListener('mouseleave', (e) => {
            e.target.setAttribute('src', './assets/Photos/edit.ico')
        });

        edit_img.addEventListener('click', (e)=>{
       
            let item = tasksText.innerText;
            tasksText.innerText = ''
            let itemInput = document.createElement('input');
            itemInput.type = 'text';
            itemInput.value = item;
            itemInput.classList.add('edit');
            itemInput.addEventListener('keypress', saveItem);
            itemInput.addEventListener('click', saveItem);
            tasksText.parentNode.prepend(itemInput);
            itemInput.select();
    
    
            function saveItem(e){
            
                if(e.target.value.length > 0 && (e.keyCode === 13 || e.type === 'click')){
                    tasksText.textContent = e.target.value;
                    tasksText.parentNode.prepend(tasksText);
                    e.target.remove()
                }
            }
    
    
         })
    
        

}

    


});



filter.addEventListener('click', () => {
    var i, switching, b, shouldSwitch;
    switching = true;
    while (switching) {
        switching = false;
        b = document.querySelectorAll('li')
        for (i = 0; i < (b.length - 1); i++) {
            shouldSwitch = false;
            if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
        }

    }

    filterImg.setAttribute('src', './assets/Photos/filter2.svg')

    filterImg.addEventListener('mouseover', (e) => {
        e.target.setAttribute('src', './assets/Photos/filter2black.svg')
    });
    filterImg.addEventListener('mouseleave', (e) => {
        e.target.setAttribute('src', './assets/Photos/filter2.svg')
    });





});

filterImg.addEventListener('mouseover', (e) => {
    e.target.setAttribute('src', './assets/Photos/blackfilter.svg')
});
filterImg.addEventListener('mouseleave', (e) => {
    e.target.setAttribute('src', './assets/Photos/menu.svg')
});




inputValue.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
        btn.click();
    }
});

clearAll.addEventListener('click',()=>{
     taskList.innerHTML='';
})

clearAllImg.addEventListener('mouseover',(e)=>{
    e.target.setAttribute('src','./assets/Photos/blackdelete.png')
})
clearAllImg.addEventListener('mouseleave',(e)=>{
    e.target.setAttribute('src','./assets/Photos/delete.png')
})

