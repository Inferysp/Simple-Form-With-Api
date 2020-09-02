const findByIdScope = () => {
  fetch(fetchURL)
    .then((response) => response.json())
    .then((json) => {
      let idScope = json.filter((task) => {
        return task.id >= startId.value && task.id <= stopId.value;
      });
      const resTitle = document.createElement("h2");
      resTitle.innerText = `Filtered by userId "${userId.value}" and by id scope from "${startId.value}" to "${stopId.value}".`;
      list.appendChild(resTitle);
      clearPreview();
      showPreview(idScope);
      generateResult(idScope);
    });
};
