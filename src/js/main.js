const search = document.getElementById('search');
const searchTxt = document.getElementById('search-text');
let mainOutput = document.getElementById('main-output');
const deleteBtn = document.querySelector('.delete');

const ListGroup = document.querySelector('.list-group-item');
let output = '';
const d = new Date();
const date = d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear();
// let localStorageOutput = [];




console.log(mainOutput);

//Add items

document.querySelector('#add-to-list').addEventListener('click', () => {



    //Get form val
    const getInput = search.value;
    const getInputTxt = searchTxt.value;

    function saveTask(e) {



        //Create object
        var tasks = {
            name: getInput,
            description: getInputTxt
        }

        if (localStorage.getItem('task') === null) {
            var task = [];
            task.push(tasks);

            // localStorageOutput.push(newItem);

            localStorage.setItem('task', JSON.stringify(task));
        } else {
            var myTask = JSON.parse(localStorage.getItem('task'));
            myTask.push(tasks);

            localStorage.setItem('task', JSON.stringify(myTask));
        }


        fetchTask();

        search.value = '';
        searchTxt.value = '';
    }
    saveTask();

});

function deleteTask(name) {
    var task = JSON.parse(localStorage.getItem('task'));
    for (var i = 0; i < task.length; i++) {
        if (task[i].name == name) {
            task.splice(i, 1);
        }
    }

    localStorage.setItem('task', JSON.stringify(task));

    fetchTask();
}

// console.log(editBtn);


const containsClass = mainOutput.classList.contains("editMode");
const editInput = mainOutput.querySelector('input[type=text]');
const editTextarea = mainOutput.querySelector('textarea.text');


function editTask(name) {
    var task = JSON.parse(localStorage.getItem('task'));
    for (var i = 0; i < task.length; i++) {
        // console.log(task[i].name);
        if (task[i].name == name) {
            console.log('33333')
        } else if(task[i].description == description){
            console.log('222222')
        }
        localStorage.setItem('task', JSON.stringify(task));
    }
    
    

    // fetchTask();
}



// var editBtn = document.getElementById('edt');
// console.log(editBtn);
// // document.addEventListener('DOMContentLoaded', () => {

//     document.addEventListener('click', (e) => {
//     e.preventDefault();
//     var target = e.target.parentNode.parentNode.parentNode;
//     var task = JSON.parse(localStorage.getItem('task'));
//     const containsClass = mainOutput.classList.contains("editMode");
//         var aaa = editBtn.parentNode.parentNode.parentNode;
//         console.log(e.target);
//             var target = aaa;
//             console.log(target);
            

//     for (var i = 0; i < task.length; i++) {
//         if (containsClass) {
//             task[i].name = editInput.value;
//             task[i].description = editTextarea.value;
//         } else {
//             console.log(task[i].name)
//             search.value = task[i].name;
//             searchTxt.value = task[i].description;
//         }
    // }


            // const containsClass = mainOutput.classList.contains("editMode");
            // const editInput = mainOutput.querySelector('input[type=text]');
            // const editTextarea = mainOutput.querySelector('textarea.text');
            // var task = JSON.parse(localStorage.getItem('task'));
            // // for (var i = 0; i < task.length; i++) {
            //     if(containsClass){

                
            //     console.log(task[i]);
            //     console.log(editInput.value);
        
            //         task[i].name = editInput.value;
            //         localStorage.setItem('task', JSON.stringify(task));

            //     }
            

    //         target.classList.toggle("editMode");
    // });

    // fetchTask();
// });




function fetchTask() {
    var task = JSON.parse(localStorage.getItem('task'));

    console.log(task);

    mainOutput.innerHTML = '';
    for (let i = 0; i < task.length; i++) {
        let name = task[i].name;
        let description = task[i].description;

        mainOutput.innerHTML += `
        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
              <div class="row">
                <div class="col-md-10">
                  <div class=" w-100 justify-content-between">
                    <h5 class="mb-1 title">
                      <label class="label">${name}</label>
                      <input type="text">
                    </h5>
                    <p class="mb-1 txt-content">
                      <label class="label-2">${description}</label>
                      <textarea class="text" rows="3"></textarea>
                    </p>
                  </div>
                </div>
                <div class="col-md-2">
                <small>${date}</small>
                    <button onclick="deleteTask('${name}')" id="del"><i class="fas fa-trash delete btn btn-outline-primary"></i></button>
                    <button onclick="editTask('${name}')" id="edt"><i class="fas fa-pen edit btn btn-outline-primary"></i></button>
                </div>
              </div>
            </a>
            <hr class="mb-4">
        `;
    }
}


// document.addEventListener('DOMContentLoaded', () => {
//     mainOutput.addEventListener('click', (e) => {
// if (containsClass) {
//                 label.innerText = editInput.value;
//                 label_2.innerText = editTextarea.value;
//                 editIcon.classList.remove("fa-check");
//                 editIcon.classList.add('fa-pen');
//                 // saveLocal();
//             } else {
//                 editInput.value = label.innerText;
//                 editTextarea.value = label_2.innerText;
//                 editIcon.classList.remove("fa-pen");
//                 editIcon.classList.add('fa-check');
//                 // saveLocal();
//             }
//     });
// });

// getLocal();
// function getLocal() {
//     for (let i = 0; i < localStorage.length; i++) {
//         mainOutput.insertAdjacentHTML('beforeend', localStorage.getItem(localStorage.key(i)));
//         console.log('111')
//     }
// }


//Delete items

// document.addEventListener('DOMContentLoaded', () => {
//     mainOutput.addEventListener('click', (e) => {
//         const listItem = e.target.parentNode.parentNode.parentNode;
//         const editInput = listItem.querySelector('input[type=text]');
//         const editTextarea = listItem.querySelector('textarea.text');
//         const label = listItem.querySelector(".label");
//         const label_2 = listItem.querySelector(".label-2");
//         const containsClass = listItem.classList.contains("editMode");
//         const editIcon = listItem.querySelector('.edit');
//         // console.log(editIcon);
//         var task = JSON.parse(localStorage.getItem('task'));
//         // console.log(editInput, label, containsClass);
//         for(var i =0; i < task.length; i++){
//        if (containsClass) {
//         localStorage.setItem('task', JSON.stringify(task));
//             console.log(i);
//             task[i] = editInput.value;
//             task[i] = editTextarea.value;
//             editIcon.classList.remove("fa-check");
//             editIcon.classList.add('fa-pen');
//             // saveLocal();
//         } else {
//             editInput.value = task[i];
//             editTextarea.value = task[i];
//             editIcon.classList.remove("fa-pen");
//             editIcon.classList.add('fa-check');
//             // saveLocal();
//         }

//         listItem.classList.toggle("editMode");
//         console.log(listItem.classList);
//     }
// // for(let i=0; i<=localStorage; i++){
// //     let elementID = "element-" +i;
// //     localStorage.setItem('Title-' + i, editInput.value);
// // }

// // mainOutput.forEach(localStorage.setItem('Title-', editInput.value));



//     });
// });

// function saveLocal() {
//     let elementID = "element-" + i;
//     for (let i = 0; i < mainOutput.length; i++) {
//         window.localStorage.setItem("task" + i, output);
//     }
// }

// function loadList(){
//     for (var i = 0; i < localStorage.length; i++) {
//         // var obj = ;
//         mainOutput.insertAdjacentHTML('beforeend', localStorage.getItem(localStorage.key(i)));
//     }
//     // console.log(obj);

// }
// loadList();