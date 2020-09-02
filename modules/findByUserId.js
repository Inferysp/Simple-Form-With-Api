const findByUserId = () => {
  fetch(fetchURL)
    .then((response) => response.json())
    .then((json) => {
      let byUserId = json.filter((task) => {
        return task.userId == userId.value;
      });
      const resTitle = document.createElement("h2");
      resTitle.innerText = `Filtered By user Id "${userId.value}"`;
      list.appendChild(resTitle);
      clearPreview();
      showPreview(byUserId);
      generateResult(byUserId);
    });
};
