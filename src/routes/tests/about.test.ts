import '@testing-library/jest-dom';
import {render} from '@testing-library/svelte';
import Page__SvelteComponent_ from "src/routes/about/+page.svelte";

test("should render", () => {
  const results = render(Page__SvelteComponent_);

  expect(() => results.getByText("About Dreamteam")).not.toThrow();
});