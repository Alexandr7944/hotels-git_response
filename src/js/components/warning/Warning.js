import "./warning-style.sass";

class Warning {
  constructor(form, element) {
    this.form = form;
    this.element = element;
  }

  showWarning(text) {
    this.removeWarning();
    const warning = document.createElement("div");
    warning.className = "warning";
    warning.innerHTML = text;
    this.element.prepend(warning);

    this.form.addEventListener("input", () => this.removeWarning(), {
      once: true,
    });
  }

  removeWarning() {
    this.element.querySelector(".warning")?.remove();
  }
}

export default Warning;
