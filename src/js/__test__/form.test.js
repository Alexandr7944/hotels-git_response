/**
 * @jest-environment jsdom
 */

import Form from "../components/form/Form";

test("class Form.addForm()", () => {
  document.body.innerHTML = `
    <div class="container">
      <div class="search">
        <h1 class="search__title">Поиск репозиториев GitHub</h1>
      </div>
      <div class="output"></div>
  `;

  const search = document.querySelector(".search");
  const form = new Form(search);
  const formEl = form.addForm();
  expect(formEl.innerHTML).toEqual(Form.elementHTML);
});
