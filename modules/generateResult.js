const generateResult = (arg) => {
  const result = document.createElement("div");
  result.className = "result-container";
  list.appendChild(result);

  arg.forEach((el, idx) => {
    let paragraph = document.createElement("p");
    let index = document.createElement("span");

    index.innerText = `${idx + 1}`;
    paragraph.innerHTML = `${el.id} - ${el.title}`;
    paragraph.className =
      "shadow-sm p-2 mb-2 bg-white rounded border border-primary";

    paragraph.appendChild(index);
    result.appendChild(paragraph);
  });
};
