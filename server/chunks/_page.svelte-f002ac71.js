import { c as create_ssr_component, b as add_attribute } from './index-1b2b3cdb.js';

const logo = "/Frontend_course_project/_app/immutable/assets/svelte-logo-87df40b8.svg";
const css = {
  code: "h1.svelte-dxgwct{width:100%}.main_content.svelte-dxgwct{display:flex;flex-direction:row;justify-content:space-between;align-items:center;flex:0.6}.features.svelte-dxgwct{margin:var(--mb-1);padding:0;line-height:200%;font-size:var(--h3-font-size)}.addition.svelte-dxgwct{display:flex;flex-direction:column;justify-content:space-evenly;align-items:center;flex:0.6}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-15rdp64 -->${$$result.title = `<title>Home</title>`, ""}<meta name="${"description"}" content="${"MindHelp app"}"><!-- HEAD_svelte-15rdp64 -->`, ""}

<section class="${"main_content svelte-dxgwct"}"><div class="${"Intro"}"><h1 class="${"svelte-dxgwct"}">User-friendly Artificial <br>Intelligence Helper<br></h1>

		<h1 class="${"svelte-dxgwct"}">Use power of AI<br>for text or images! <br></h1></div>
	<ul class="${"features svelte-dxgwct"}"><h1 class="${"svelte-dxgwct"}">MindHelp allows you to: <br></h1>
		<li>Understand the language of an unknown text and substract the keywords.</li>
		<li>Understand the sentiment of a text.</li>
		<li>Blur the images.</li>
		<li>Detect all the objects in the image.</li></ul>
	<div></div></section>

<section class="${"addition svelte-dxgwct"}"><h1 class="${"svelte-dxgwct"}">Build on SvelteKit:</h1>
	<a href="${"https://kit.svelte.dev"}"><img${add_attribute("src", logo, 0)} alt="${"SvelteKit"}"></a>
</section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f002ac71.js.map
