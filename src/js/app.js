import OutputElement from "./OutputElement";
import Loader from "./components/loader/Loader";
import Response from "./Response";
import Warning from "./components/warning/Warning";

const form = document.forms[0];
const output = document.querySelector(".output");
const warning = new Warning(form, output);
const loader = new Loader(output);

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const input = form.querySelector(".search__input");
  const inputValue = input.value.trim();

  if (validInput(inputValue)) return;
  loader.addLoader();

  const res = await new Response(input.value).responseFetch();

  if (res.message === "Not Found") {
    loader.removeLoader();
    return warning.showWarning("Произошла внутренняя ошибка");
  }

  res.items.length === 0
    ? warning.showWarning("Ничего не найдено<hr>попробуте изменить запрос")
    : render(res.items);

  input.blur();
  form.reset();
});

function render(arr) {
  while (output.firstChild) output.firstChild.remove();

  arr.forEach((item) => {
    output.append(new OutputElement(item).createElement());
  });
}

function validInput(elem) {
  if (!elem) {
    warning.showWarning("Введите запрос");
    return true;
  } else if (!/^[0-9a-z]/i.test(elem)) {
    warning.showWarning("Запрос должен начинаться<hr>с букв или цифр");
    return true;
  }
  return false;
}
