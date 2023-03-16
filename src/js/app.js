import Form from "./components/form/Form";
import OutputElement from "./OutputElement";
import Loader from "./components/loader/Loader";
import Response from "./Response";
import Warning from "./components/warning/Warning";

const form = new Form(document.querySelector(".search"));
const formEl = form.addForm();
const output = document.querySelector(".output");
const warning = new Warning(formEl, output);
const loader = new Loader(output);

formEl.addEventListener("submit", async (e) => {
  const inputValue = form.onSubmit(e);
  if (!inputValue) return;
  loader.addLoader();

  const res = await new Response(inputValue).responseFetch();

  loader.removeLoader();

  if (!res) {
    return warning.showWarning("Произошла внутренняя ошибка");
  }

  res.items.length === 0
    ? warning.showWarning("Ничего не найдено<hr>попробуте изменить запрос")
    : render(res.items);
});

function render(arr) {
  while (output.firstChild) output.firstChild.remove();

  arr.forEach((item) => {
    output.append(new OutputElement(item).createElement());
  });
}
