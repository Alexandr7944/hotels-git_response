/**
 * @jest-environment jsdom
 */

import Loader from "../components/loader/Loader";

test("class Loader.addLoader()", () => {
  new Loader(document.body).addLoader();

  expect(document.body.firstChild.className).toBe("lds-circle");
});

test("class Loader.removeLoader()", () => {
  new Loader(document.body).addLoader();
  new Loader(document.body).removeLoader();

  expect(!!document.body.firstChild).toEqual(false);
});
