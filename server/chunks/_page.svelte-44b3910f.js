import { c as create_ssr_component, b as add_attribute } from './index-1b2b3cdb.js';

const css = {
  code: ".grid-containers-images.svelte-n50ix7.svelte-n50ix7{display:grid;float:left;grid-template-columns:1fr 1fr;gap:120px;padding:10px;width:100%}.grid-containers-images.svelte-n50ix7>div.svelte-n50ix7{float:left;position:relative;border:2px solid rgb(180, 190, 198);background-color:rgb(197, 210, 220);border-style:dashed;border-width:4px;border-radius:2em;box-shadow:2em;height:450px;width:450px}.dropped.svelte-n50ix7.svelte-n50ix7{display:flex;border-radius:2em;border-color:aqua;box-shadow:2em;height:100%;width:100%}.logo.svelte-n50ix7.svelte-n50ix7{position:relative;margin:auto;text-align:center;margin-top:9em;right:0.5em;height:100px;width:100px}.chan.svelte-n50ix7.svelte-n50ix7{margin:auto;height:100px;text-align:center;width:300px}.proc-img.svelte-n50ix7.svelte-n50ix7{height:100px;width:100px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let dropped;
  let result;
  try {
    if (data) {
      if (data.hasOwnProperty("response")) {
        const { response } = data;
        if (response.hasOwnProperty("blurred")) {
          result = response.blurred;
        } else {
          alert("Try again!");
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1ds1qyu -->${$$result.title = `<title>About</title>`, ""}<meta name="${"description"}" content="${"About this app"}"><!-- HEAD_svelte-1ds1qyu -->`, ""}
<form method="${"POST"}"><h1>Image Blurring
		<div class="${"conver"}"><button>click to process</button></div></h1>
	<div class="${"grid-containers-images svelte-n50ix7"}"><div class="${"upload svelte-n50ix7"}">${`<div class="${"logo svelte-n50ix7"}"><img class="${"proc-img svelte-n50ix7"}" src="${"https://static.thenounproject.com/png/625182-200.png"}" alt="${""}"></div>
				<div class="${"chan svelte-n50ix7"}">Upload an image or drag it here</div>`}</div>
		
		<input style="${"display:none"}" type="${"file"}" accept="${".jpg, .jpeg, .png"}">
		
		<input style="${"display:none"}" name="${"orgimg"}"${add_attribute("value", dropped, 0)}>

		<div class="${"result svelte-n50ix7"}">
				<img class="${"dropped svelte-n50ix7"}"${add_attribute("src", result, 0)} alt="${"wait or try again"}">
			
				<div class="${"logo svelte-n50ix7"}">Result
				</div>
			</div></div>
</form>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-44b3910f.js.map
