const findByAllFilters = () => {
  fetch(fetchURL)
    .then((response) => response.json())
    .then((json) => {
      let output = json.filter((task) => {
        return (
          task.userId == userId.value &&
          task.id >= startId.value &&
          task.id <= stopId.value
        );
      });
      const resTitle = document.createElement("h2");
      resTitle.innerText = `Filtered by userId "${userId.value}" and by id scope from "${startId.value}" to "${stopId.value}".`;
      list.appendChild(resTitle);
      clearPreview();
      showPreview(output);
      generateResult(output);
    });
};
