export{}

type A = any;
type N = number;
type V = void ;

var input : A ;
input = document.getElementById('input')!;

var addButton : A ;
addButton = document.getElementById('add-btn')!;

var clearAllButton : A ;
clearAllButton = document.getElementById('clear-all-btn')!;

var todoList : A ;
todoList = document.getElementById('todo-list')!;

var tasks : A[] = [] ;

type task = {
    id : N ;
    value : A ; 
}

// Add Task

addButton.addEventListener('click' , () : V => {
    
    var task : task = {
        id : Math.floor(Math.random() * 1000) ,
        value : input.value ,
    }

    if(task.value === ''){
        input.focus();
    }else{
        tasks.push(task);

        var newTask : A ;
        newTask = document.createElement('li');

        tasks.map((task) => {
            newTask.id = 'task';
            newTask.innerHTML = task.value ;
            newTask.innerHTML += '<i onclick = "removeTask(this)" class="bi bi-x"></i>';
            todoList.appendChild(newTask);
        })

        input.value = '' ;
    }
})

// Remove Task

function removeTask(e : A) : V {
    e.parentElement.remove();
};

// Delete All Tasks

clearAllButton.addEventListener('click' , () : V => {

    while(todoList.firstChild){
        todoList.removeChild(todoList.firstChild);
    }
    tasks.length = 0 ;
})

// Add Task With Event Keypress

input.addEventListener('keypress' , ( Event : A ) : V => {
    if(Event.which === 13){

        var task = {
            id: Math.floor(Math.random() * 1000) ,
            value : input.value ,
        }
    
        if(task.value === ''){
            input.focus();
        }else{
            tasks.push(task);

            var newTask : A;
            newTask = document.createElement('li');
    
            tasks.map((task) => {
                newTask.id = 'task';
                newTask.innerHTML = task.value ;
                newTask.innerHTML += '<i onclick = "removeTask(this)" class="bi bi-x"></i>';
                todoList.appendChild(newTask);
            })
    
            input.value = '' ;
        }
    }
})
