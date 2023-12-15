function call(){
    const textinput = document.querySelector("#add-input");
    const listcontainer = document.querySelector("#list-container");
    if (textinput.value.trim().length == ''){
        alert("Error ! Type aynthing to add your list");
        return;
} //if condition finished

    var tasklist=document.createElement('div'); //create the div for task adding
    tasklist.classList.add('todo-list-container');
    tasklist.id="to-do-container";
    listcontainer.appendChild(tasklist);
    
    var output=document.createElement('p');//creating the input for display the contant we added
    output.id='List-output';
    output.innerText=textinput.value;
    tasklist.appendChild(output);
    
    var Edit = document.createElement("button");//edit button created
    Edit.id="edit";
    Edit.innerText="EDIT";
    tasklist.appendChild(Edit);

    var Completed = document.createElement("button");//completed button created
    Completed.id="completed";
    Completed.innerText="COMPLETED";
    tasklist.appendChild(Completed);

    var Delete = document.createElement("button");//delete button created
    Delete.id="delete";
    Delete.innerText="DELETE";
    tasklist.appendChild(Delete);

    textinput.value="";// to make the input box empty after add button clicked

    Edit.addEventListener('click',()=>{
        textinput.value=output.innerText;
        var ifEdit=Edit.parentElement;   // to disappear that box
        ifEdit.parentElement.removeChild(ifEdit);
    }); // edit button function is finished

    Completed.addEventListener('dblclick',()=>{
        tasklist.style.border="3px solid #1aff0d";
        output.style.color="#1aff0d";
    });//to highlite the box while complete is clicked

    Completed.addEventListener('click',()=>{
        tasklist.style.border="2px solid orangered";
        output.style.color="wheat";
    });//to highlite the box come back to original color

    Delete.addEventListener('dblclick',()=>{
        var ifDelete=Delete.parentElement;   // to disappear that box
        ifDelete.parentElement.removeChild(ifDelete);
    })//delete button function is finished

 } //add button function finished

