const todoControl = document.querySelector('.todo-control')
const headerInput = document.querySelector('.header-input')
const todoList = document.querySelector('.todo-list')
const todoRemove = document.querySelector('.todo-remove')
const todoComplited = document.querySelector('.todo-completed')

const toDoData = []

const render = function(){
   todoList.innerHTML = ''
   todoComplited.innerHTML = ''
 
  
   let listData = localStorage.getItem('toDoData')
//    let was_here = ''
   
//    try {
//        was_here = localStorage.getItem('me')
//    } catch {}

//    if (was_here == 'ok'){
//         document.write('was')
//     }else{
//         document.write('first')
//         localStorage.setItem ('me', 'ok')
//     }

   let parseData = JSON.parse (listData)
   parseData.forEach(function (item, i) {
        const li = document.createElement('li') 

        li.classList.add('todo-item')
        
        li.innerHTML = '<span class="text-todo">' + item.text + '</span>' +
            '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
            '</div>'
        if(item.text == ''){
            alert ('Так какие планы?')
        }else if(item.completed){
            todoComplited.append(li)
        }else {
            todoList.append(li)
        }
        
        li.querySelector('.todo-complete').addEventListener('click', function(){
            item.completed = !item.completed
            render()
        })
        li.querySelector('.todo-remove').addEventListener('click', function(){
            const todo = document.querySelectorAll('.todo-item')
            todo[i].remove()  
            //console.log(todo)
        })

    })
}

//toDoData.splice(toDoData.indexOf(item),1)


todoControl.addEventListener('submit', function(event){
    event.preventDefault()

    let newToDo = {
        text: headerInput.value,
        completed: false
    }

    toDoData.push(newToDo)
    localStorage.setItem('toDoData', JSON.stringify(toDoData))
    headerInput.value = ''
    render()
})






