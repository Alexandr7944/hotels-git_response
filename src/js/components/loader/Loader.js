import "./loader-style.sass";

class Loader {
  constructor(element) {
    this.element = element;
  }

  addLoader() {
    this.removeLoader();
    const circle = document.createElement("div");
    circle.className = "lds-circle";
    circle.innerHTML = "<div></div>";
    this.element.prepend(circle);
  }

  removeLoader() {
    this.element.querySelector(".lds-circle")?.remove();
  }
}

export default Loader;
