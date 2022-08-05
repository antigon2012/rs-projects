export { getLocalStorage, setLocalStorage };
const name = document.querySelector(".name");

const setLocalStorage = () => {
  localStorage.setItem("name", name.value);
};

const getLocalStorage = () => {
  if (localStorage.getItem("name")) {
    name.value = localStorage.getItem("name");
  }
};
