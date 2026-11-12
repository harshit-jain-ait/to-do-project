let input = document.querySelector("#inp");
let addbtn = document.querySelector("#addbtn");
let list_container = document.querySelector(".list-container");

let Task_array = [];
let add_block = () => {
    list_container.innerHTML = "";

    Task_array.forEach((val, index) => {
        list_container.innerHTML += `<div class="list-item">
                <p style="text-decoration: ${val.isCompleted ? "line-through" : "none"} 4px red; color: ${val.isCompleted ? "green" : "white"};" >${val.task}</p>
                <div class="btns">
                <button onclick="deletTask(${index})">Delete</button>
                <button onclick="completed(${index})" id="comp">Done</button>
                </div>
            </div>`;
    });
}
addbtn.addEventListener("click", () => {
    // console.log(input.value);
    let Value_Input = input.value;
    if (Value_Input.trim() == "") {
        alert("Eneter a task");
        return;
    }
    Task_array.push({
        task: Value_Input,
        isCompleted: false,
    });

    add_block();

    input.value = "";
})

let deletTask = (index) => {
    Task_array.splice(index, 1);
    add_block();
}

let completed = (index) =>{
    console.log(index);
    Task_array[index].isCompleted = !Task_array[index].isCompleted;
    add_block();
}
