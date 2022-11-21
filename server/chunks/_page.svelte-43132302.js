import { c as create_ssr_component, b as add_attribute, e as escape } from './index-1b2b3cdb.js';

const css = {
  code: ".landmarks.svelte-7bllef.svelte-7bllef{position:relative;top:2em;left:2em}.grid-containers-images.svelte-7bllef.svelte-7bllef{display:grid;float:left;grid-template-columns:1fr 1fr;gap:120px;padding:10px;width:100%}.grid-containers-images.svelte-7bllef>div.svelte-7bllef{float:left;position:relative;border:2px solid rgb(180, 190, 198);background-color:rgb(197, 210, 220);border-style:dashed;border-width:4px;border-radius:2em;box-shadow:2em;height:450px;width:450px}.dropped.svelte-7bllef.svelte-7bllef{display:flex;border-radius:2em;border-color:aqua;box-shadow:2em;height:100%;width:100%}.logo.svelte-7bllef.svelte-7bllef{position:relative;margin:auto;text-align:center;margin-top:9em;right:0.5em;height:100px;width:100px}.chan.svelte-7bllef.svelte-7bllef{margin:auto;height:100px;text-align:center;width:300px}.proc-img.svelte-7bllef.svelte-7bllef{height:100px;width:100px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let dropped;
  let result;
  try {
    if (data) {
      if (data.hasOwnProperty("response")) {
        if (data.response.hasOwnProperty("faces")) {
          if (data.response.faces[0].hasOwnProperty("landmarks")) {
            const { landmarks } = data.response.faces[0];
            result = landmarks;
          }
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-y7jco5 -->${$$result.title = `<title>About</title>`, ""}<meta name="${"description"}" content="${"About this app"}"><!-- HEAD_svelte-y7jco5 -->`, ""}
<form method="${"POST"}"><h1>Image Detection
		<div class="${"conver"}"><button>click to process</button></div></h1>
	<div class="${"grid-containers-images svelte-7bllef"}"><div class="${"upload svelte-7bllef"}">${`<div class="${"logo svelte-7bllef"}"><img class="${"proc-img svelte-7bllef"}" src="${"https://static.thenounproject.com/png/625182-200.png"}" alt="${""}"></div>
				<div class="${"chan svelte-7bllef"}">Upload an image or drag it here</div>`}</div>
		
		<input style="${"display:none"}" type="${"file"}" accept="${".jpg, .jpeg, .png"}">
		
		<input style="${"display:none"}" name="${"orgimg"}"${add_attribute("value", dropped, 0)}>

		<div class="${"result svelte-7bllef"}">${result ? `
			
			<p class="${"landmarks svelte-7bllef"}" style="${"font-size:20px"}">\u{1F441} Left eye ${escape("{")} x: ${escape(result.leftEye.x)}, y: ${escape(result.leftEye.y)} ${escape("}")}</p>
			<p class="${"landmarks svelte-7bllef"}" style="${"font-size:20px"}">\u{1F441} Right eye ${escape("{")} x: ${escape(result.rightEye.x)}, y: ${escape(result.rightEye.y)} ${escape("}")}</p>

			<p class="${"landmarks svelte-7bllef"}" style="${"font-size:20px"}">\u{1F443} Nose tip ${escape("{")} x: ${escape(result.noseTip.x)}, y: ${escape(result.noseTip.y)} ${escape("}")}</p>

			<p class="${"landmarks svelte-7bllef"}" style="${"font-size:20px"}">\u{1F444} Left mouth corner tip ${escape("{")} x: ${escape(result.leftMouthCorner.x)}, y: ${escape(result.leftMouthCorner.y)} ${escape("}")}</p>
			<p class="${"landmarks svelte-7bllef"}" style="${"font-size:20px"}">\u{1F444} Right mouth corner tip ${escape("{")} x: ${escape(result.rightMouthCorner.x)}, y: ${escape(result.rightMouthCorner.y)} ${escape("}")}</p>` : ``}</div></div>
</form>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-43132302.js.map
