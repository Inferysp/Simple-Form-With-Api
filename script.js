const heading = document.getElementById("method-description");
const listCont = document.getElementById("list-container");
const userId = document.getElementById("choose-userId");
const startId = document.getElementById("choose-Id-start");
const stopId = document.getElementById("choose-Id-stop");
const fetchURL = "https://jsonplaceholder.typicode.com/todos";

const clearLastAction = () => {
  const resultCont = document.querySelector(".result-container");
  // userId.value = 0;
  // startId.value = 0;
  // stopId.value = 0;
  resultCont.remove();
};

const wypisz = (arg) => {
  const resultCont = document.createElement("div");
  resultCont.className = "result-container";
  listCont.appendChild(resultCont);
  arg.forEach((el, idx) => {
    let paragraph = document.createElement("p");
    let index = document.createElement("span");

    index.innerText = `${idx + 1}`;
    paragraph.innerHTML = `${el.id} - ${el.title}`;
    paragraph.className = "shadow-sm p-2 mb-2 bg-white rounded";

    paragraph.appendChild(index);
    resultCont.appendChild(paragraph);
  });
};

const findFromIdScope = () => {
  fetch(fetchURL)
    .then((response) => response.json())
    .then((json) => {
      let idScope = json.filter((task) => {
        return task.id >= startId.value && task.id <= stopId.value;
      });
      console.log(idScope);
      heading.innerText = `By Id scope from ${startId.value} to ${startId.value}`;
      wypisz(idScope);
    });
};

const filterByUserId = () => {
  fetch(fetchURL)
    .then((response) => response.json())
    .then((json) => {
      let byUserId = json.filter((task) => {
        return task.userId == userId.value;
      });
      console.log(byUserId);
      heading.innerText = `By user Id "${userId.value}"`;
      wypisz(byUserId);
    });
};
