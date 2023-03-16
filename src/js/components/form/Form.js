import Warning from "../warning/Warning";

class Form {
  constructor(element) {
    this.element = element;
  }

  addForm() {
    this.form = document.createElement("form");
    this.form.className = "search__form";
    this.form.innerHTML = Form.elementHTML;
    this.element.append(this.form);
    return this.form;
  }

  static get elementHTML() {
    return `
        <input type="text" class="search__input" placeholder="Введите репозиторий">
        <input type="submit" class="search__submit" value="">
    `;
  }

  onSubmit(e) {
    e.preventDefault();
    const input = this.form.querySelector(".search__input");
    const inputValue = input.value.trim();
    input.blur();

    if (this.validInput(inputValue)) return false;
    this.form.reset();
    return inputValue;
  }

  validInput(elem) {
    const output = document.querySelector(".output");
    const warning = new Warning(this.form, output);

    if (!elem) {
      warning.showWarning("Введите запрос");
      return true;
    } else if (!/^[0-9a-z]/i.test(elem)) {
      warning.showWarning("Запрос должен начинаться<hr>с букв или цифр");
      return true;
    }
    return false;
  }
}

export default Form;
