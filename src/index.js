document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let inPut = document.getElementById("new-task-description").value;
    // create the todo list
    let list = document.createElement("p");
    // create the delete button
    let button = document.createElement("button");
    button.addEventListener("click", (e) => {
      e.target.parentNode.remove();
    });
    // display on the button
    button.textContent = "Done";
    // content list
    list.textContent = `${inPut} `;
    // append button to list
    list.appendChild(button);
    // append list to ul idtask
    document.querySelector("#tasks").appendChild(list);
    document.querySelector("h1").remove();
  });
});
