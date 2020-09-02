const delateAllResult = () => {
  while (heading.nextSibling) {
    list.removeChild(heading.nextSibling);
  }
  userId.value = null;
  startId.value = null;
  stopId.value = null;
};
