const taskButton = document.getElementById("taskButtonSubmit");
const task = document.getElementById("task");

taskButton.addEventListener("click", () => {
  const taskName = document.getElementById("taskName").value;
  task.innerHTML += `
  <div>
    <p>${taskName}</p>
    <button>✔️</button>
  </div>
  `;
});
