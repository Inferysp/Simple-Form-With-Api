const clearPreview = () => {
  while (currentContainer.firstChild) {
    currentContainer.removeChild(currentContainer.firstChild);
  }
};
