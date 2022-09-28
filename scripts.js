//function NewTodo() {
    // console.log("Hello Class");
//    let listItem = document.createElement("li");
//    let inputField = document.getElementById("myInput").value;
//    let  tNode = document.createTextNode(inputField);

//    listItem.appendChild(tNode);

//    document.getElementById("myUL").appendChild(listItem);
//}


document.querySelector('#push').onclick = function
    (){
        if(document.querySelector('#newtask input').value.length
        == 0){
            alert("please enter a task")
        }
        else{
            document.querySelector('#tasks').innerHTML
            += `
                <div class="task">
                    <span id="taskname">
                        ${document.querySelector
                        ('#newtask input').value}
                    </span>
                    <a class="delete">
                    <img src="img/mulleimer.png"/>
                    </a>
                </div>
            `;
        
            const current_tasks = document.
            querySelectorAll(".delete");
            for(let i=0; i<current_tasks.length; i++) {
                current_tasks[i].onclick = function(){
                    this.parentNode.remove();
                }
            }
            const tasks = document.querySelectorAll(".task");
            for(let i=0; i<tasks.length; i++) {
                tasks[i].onclick = function(){
                    this.classList.toggle("completed");
                }
            }
            document.querySelector('#newtask input').value = "";
        }
}
