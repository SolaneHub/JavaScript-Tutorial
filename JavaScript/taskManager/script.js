const taskButton = document.getElementById("taskButtonSubmit");
const taskContainerMain = document.getElementById("task");

let tasksList = JSON.parse(localStorage.getItem("myTasks")) || [];

function getSecureRandom() {
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  return array[0] / (0xffffffff + 1);
}

function createTaskElement(taskData) {
  const taskBox = document.createElement("div");
  const taskText = document.createElement("span");
  const btnComplete = document.createElement("button");
  const btnDelete = document.createElement("button");

  taskText.innerText = taskData.name;
  btnComplete.innerHTML = `<img src="assets/check-mark.png" width="25" height="25">`;
  btnDelete.innerHTML = `<img src="assets/cross.png" width="25" height="25">`;

  taskBox.classList.add("boxTasksText");

  taskBox.style.position = "absolute";
  taskBox.style.left = `${taskData.x}px`;
  taskBox.style.top = `${taskData.y}px`;
  taskBox.style.transform = taskData.rotation;

  btnDelete.addEventListener("click", () => {
    tasksList = tasksList.filter((t) => t.name !== taskData.name);
    localStorage.setItem("myTasks", JSON.stringify(tasksList));
    taskBox.remove();
  });

  btnComplete.addEventListener("click", () => {
    taskText.style.textDecoration = "line-through";
  });

  const boxButtons = document.createElement("div");
  boxButtons.classList.add("taskButtons");
  boxButtons.append(btnComplete, btnDelete);

  taskBox.append(taskText, boxButtons);
  taskContainerMain.append(taskBox);
}

tasksList.forEach((t) => createTaskElement(t));

taskButton.addEventListener("click", () => {
  const taskNameInput = document.getElementById("taskName");
  const taskName = taskNameInput.value.trim();

  if (taskName === "") {
    alert("Inserisci una task");
    return;
  }

  const taskSize = 150;
  let x, y;
  let overlap = true;
  while (overlap) {
    x = getSecureRandom() * (window.innerWidth - taskSize);
    y = getSecureRandom() * (window.innerHeight - taskSize);
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    if (
      Math.abs(x + taskSize / 2 - centerX) > 200 ||
      Math.abs(y + taskSize / 2 - centerY) > 150
    ) {
      overlap = false;
    }
  }

  const newTask = {
    name: taskName,
    x: x,
    y: y,
    rotation: `rotate(${(getSecureRandom() - 0.5) * 15}deg)`,
  };

  tasksList.push(newTask);
  localStorage.setItem("myTasks", JSON.stringify(tasksList));

  createTaskElement(newTask);

  taskNameInput.value = "";
});
