import { c as create_ssr_component, b as add_attribute } from './index-1b2b3cdb.js';

const Ravil = "/_app/immutable/assets/ravil-e2c17f9a.jpg";
const Aigerim = "/_app/immutable/assets/aigerim-ebe95960.jpg";
const Guzel = "/_app/immutable/assets/guzel-19b282dd.jpg";
const css = {
  code: ".svelte-1v4euum,.svelte-1v4euum:before,.svelte-1v4euum:after{box-sizing:inherit}.column.svelte-1v4euum{float:left;width:33.3%;margin-bottom:16px;padding:0 8px}.card.svelte-1v4euum{box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2);margin:8px}.about-section.svelte-1v4euum{padding:50px;text-align:center;background-color:#474e5d;color:white}.container.svelte-1v4euum{padding:0 16px}.container.svelte-1v4euum::after,.row.svelte-1v4euum::after{content:'';clear:both;display:table}.title.svelte-1v4euum{color:grey}@media screen and (max-width: 650px){.column.svelte-1v4euum{width:100%;display:block}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1ds1qyu -->${$$result.title = `<title>About</title>`, ""}<meta name="${"description"}" content="${"About this app"}" class="${"svelte-1v4euum"}"><!-- HEAD_svelte-1ds1qyu -->`, ""}

<div class="${"about-section svelte-1v4euum"}"><h1 class="${"svelte-1v4euum"}">About Dreamteam</h1>
	<p class="${"svelte-1v4euum"}">We are a team of website developers</p>
	</div>

<h2 style="${"text-align:center"}" class="${"svelte-1v4euum"}">Our Team</h2>
<div class="${"row svelte-1v4euum"}"><div class="${"column svelte-1v4euum"}"><div class="${"card svelte-1v4euum"}"><img${add_attribute("src", Ravil, 0)} alt="${"Ravil"}" style="${"width:100%;height:380px"}" class="${"svelte-1v4euum"}">
			<div class="${"container svelte-1v4euum"}"><h2 class="${"svelte-1v4euum"}">Ravil</h2>
				<p class="${"title svelte-1v4euum"}">CEO &amp; Founder</p>
				<p class="${"svelte-1v4euum"}">Finding the best and most modern solutions</p>
				<p class="${"svelte-1v4euum"}">r.akhmetzhanov@innopolis.university</p></div></div></div>

	<div class="${"column svelte-1v4euum"}"><div class="${"card svelte-1v4euum"}"><img${add_attribute("src", Aigerim, 0)} alt="${"Aigerim"}" style="${"width:100%;height:380px"}" class="${"svelte-1v4euum"}">
			<div class="${"container svelte-1v4euum"}"><h2 class="${"svelte-1v4euum"}">Aigerim</h2>
				<p class="${"title svelte-1v4euum"}">Art Director</p>
				<p class="${"svelte-1v4euum"}">Responsible for the general ideology of the projects</p>
				<p class="${"svelte-1v4euum"}">a.gilmanova@innopolis.university</p></div></div></div>

	<div class="${"column svelte-1v4euum"}"><div class="${"card svelte-1v4euum"}"><img${add_attribute("src", Guzel, 0)} alt="${"Guzel"}" style="${"width:100%;height:380px"}" class="${"svelte-1v4euum"}">
			<div class="${"container svelte-1v4euum"}"><h2 class="${"svelte-1v4euum"}">Guzel</h2>
				<p class="${"title svelte-1v4euum"}">Designer</p>
				<p class="${"svelte-1v4euum"}">Creating better visual solutions</p>
				<p class="${"svelte-1v4euum"}">gu.safiullina@innopolis.university</p></div></div></div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-60316d98.js.map
