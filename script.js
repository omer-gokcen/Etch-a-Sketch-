const container = document.querySelector(".container");
const rowsCountButton = document.querySelector("#rowCount");

const defaultRowsCount = 4;

const getUserInput = () => {
  rows = prompt("Enter a number smaller then 10");
  while (rows >= 10) {
    rows = prompt("Enter a number smaller then 10");
  }
  if (rows == null) return defaultRowsCount;

  return rows;
};

function makeRows(rows) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", rows);

  for (let i = 0; i < rows * rows; i++) {
    let squares = document.createElement("div");

    container.appendChild(squares).className = "grid-item";
  }
}

rowsCountButton.addEventListener("click", () => {
  getUserInput();
  container.replaceChildren();
  makeRows(getUserInput());
});

container.addEventListener("mouseover", (e) => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  e.target.style.background = `rgb(${red}, ${green} , ${blue})`;
});

makeRows(getUserInput());
