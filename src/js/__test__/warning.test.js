/**
 * @jest-environment jsdom
 */

import Form from "../components/form/Form";
import Warning from "../components/warning/Warning";

test("class Warning.showWarning()", () => {
  document.body.innerHTML = `
    <div class="container">
      <div class="search">
        <h1 class="search__title">Поиск репозиториев GitHub</h1>
      </div>
      <div class="output"></div>
  `;

  const search = document.querySelector(".search");
  const output = document.querySelector(".output");
  const form = new Form(search);
  const formEl = form.addForm();
  const warning = new Warning(formEl, output);
  warning.showWarning("text error");

  expect(output.firstChild.classList.contains("warning")).toEqual(true);
});

test("class Warning.removeWarning()", () => {
  document.body.innerHTML = `
    <div class="container">
      <div class="search">
        <h1 class="search__title">Поиск репозиториев GitHub</h1>
      </div>
      <div class="output"></div>
  `;

  const search = document.querySelector(".search");
  const output = document.querySelector(".output");
  const form = new Form(search);
  const formEl = form.addForm();
  const warning = new Warning(formEl, output);
  warning.showWarning("text error");
  warning.removeWarning();
  expect(!!output.firstChild).toEqual(false);
});
