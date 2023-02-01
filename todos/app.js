const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

// add new todo
const addTodo = (newTodo) => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${newTodo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;
    list.innerHTML += html;
};

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTodo = addForm.add.value.trim();
    if(newTodo.length){
        addTodo(newTodo);
        addForm.reset();
    }
});


// delete todos

list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});


// search and filter todo

const deleteTodo = (term) => {
    Array.from(list.children).forEach( todo => {
        if (!todo.textContent.includes(term)) {
            todo.classList.add('filtered');
        } else {
            todo.classList.remove('filtered');
        }
    })
};

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    deleteTodo(term);
});
































// const createTodo = (todo) => {
//     const html = `
//         <li class="list-group-item d-flex justify-content-between align-items-center">  
//             <span>${todo}</span>
//             <i class="far fa-trash-alt delete"></i>
//         </li>
//     `;

//     list.innerHTML += html;
// }

// addForm.addEventListener('submit', e => {
//     e.preventDefault();

//     const todo = addForm.add.value.trim();
    
//     if(todo.length){
//         createTodo(todo);
//         addForm.reset();
//     }
    

// });

// delete to-dos

// list.addEventListener('click', e => {
//     if(e.target.classList.contains('delete')){
//         e.target.parentElement.remove();
//     }
// });



// searching and filtering todo


// const filteredTodos = (term) => {
    // console.log(list.children);

    // shauns solution
    // Array.from(list.children)
    //     .filter( todo => {
    //         return !todo.textContent.includes(term);
    //     }).forEach( todo => {
    //         todo.classList.add('filtered');
    //     })

    // Array.from(list.children)
    // .filter( todo => {
    //     return todo.textContent.includes(term);
    // }).forEach( todo => {
    //     todo.classList.remove('filtered');
    // })


    // my solution
//     Array.from(list.children).forEach( todo => {
//         if(!todo.textContent.includes(term)){
//             todo.classList.add('filtered');
//         }else{
//             todo.classList.remove('filtered');
//         }
//     })
// };



// search.addEventListener('keyup', () => {
//     const term = search.value.trim().toLowerCase();
//     // console.log(term);
    
//     filteredTodos(term);
// });