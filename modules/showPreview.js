const showPreview = (arg) => {
  const result = document.createElement("div");
  result.className = "result-container";
  currentContainer.appendChild(result);

  arg.forEach((el, idx) => {
    let paragraph = document.createElement("p");
    paragraph.innerHTML = `${el.id} - ${el.title}`;
    paragraph.className = "shadow-sm p-2 mb-2 bg-white border border-primary";
    result.appendChild(paragraph);
  });
};
