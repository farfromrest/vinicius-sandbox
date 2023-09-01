import "./style.css";

function onSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const todo = form.elements.description.value;
  const node = document.createElement("li");
  const id = "" + new Date().getDate();
  const list = document.getElementById("todos");
  node.id = id;
  node.innerText = todo;
  node.addEventListener("click", function () {
    list?.removeChild(node);
  });
  list?.appendChild(node);
  form.reset();
}

document.getElementById("todo-form")?.addEventListener("submit", onSubmit);
