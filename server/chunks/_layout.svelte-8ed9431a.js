import { c as create_ssr_component, b as add_attribute } from './index-1b2b3cdb.js';
import './client-e4cff38a.js';

const github = "/Frontend_course_project/_app/immutable/assets/github-1ea8d62e.svg";
const css = {
  code: "ul.svelte-iqxcsy.svelte-iqxcsy{list-style:none;margin:0;padding:0;line-height:200%}.app.svelte-iqxcsy.svelte-iqxcsy{display:flex;flex-direction:column;min-height:100vh}.corner.svelte-iqxcsy.svelte-iqxcsy{font-size:var(--h2-font-size);margin-left:var(--mb-1);margin-right:var(--mb-1)}.corner.svelte-iqxcsy a.svelte-iqxcsy{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.corner.svelte-iqxcsy img.svelte-iqxcsy{width:2em;height:2em;object-fit:contain}.adress.svelte-iqxcsy.svelte-iqxcsy{margin-left:var(--mb-1);margin-right:var(--mb-1);font-size:var(--h2-font-size)}main.svelte-iqxcsy.svelte-iqxcsy{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}footer.svelte-iqxcsy.svelte-iqxcsy{display:flex;justify-content:space-between;align-items:center;padding:12px}footer.svelte-iqxcsy a.svelte-iqxcsy{font-weight:bold}@media(min-width: 480px){footer.svelte-iqxcsy.svelte-iqxcsy{padding:12px 0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"app svelte-iqxcsy"}">${``}
	<main class="${"svelte-iqxcsy"}">${slots.default ? slots.default({}) : ``}</main>

	<footer class="${"svelte-iqxcsy"}"><ul class="${"adress svelte-iqxcsy"}"><li>1, Universitetskaya Str.,</li>
			<li>Innopolis, 420500, Russia</li>
			<li><a href="${"https://innopolis.university/en/"}" class="${"svelte-iqxcsy"}">Innopolis University </a></li></ul>

		<ul class="${"corner svelte-iqxcsy"}"><li>Source code</li>
			<li><a href="${"https://github.com/aigerimu/Frontend_course_project"}" class="${"svelte-iqxcsy"}"><img${add_attribute("src", github, 0)} alt="${"GitHub"}" class="${"svelte-iqxcsy"}"></a></li></ul></footer>
</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-8ed9431a.js.map
