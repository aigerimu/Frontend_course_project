import { c as create_ssr_component, e as escape } from './index-1b2b3cdb.js';

const css = {
  code: '.user_text.svelte-1qqw9qn{position:relative}h3.svelte-1qqw9qn{margin-left:55px}.result.svelte-1qqw9qn{position:absolute;right:10px;top:10px}.button-23.svelte-1qqw9qn{background-color:#FFFFFF;border:1px solid #222222;border-radius:8px;box-sizing:border-box;color:#222222;cursor:pointer;display:inline-block;font-family:Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;font-size:16px;font-weight:600;line-height:20px;margin:0;outline:none;padding:13px 23px;position:relative;text-align:center;text-decoration:none;touch-action:manipulation;transition:box-shadow .2s,-ms-transform .1s,-webkit-transform .1s,transform .1s;user-select:none;-webkit-user-select:none;width:auto}.button-23.svelte-1qqw9qn:focus-visible{box-shadow:#222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;transition:box-shadow .2s}.button-23.svelte-1qqw9qn:active{background-color:#F7F7F7;border-color:#000000;transform:scale(.96)}.button-23.svelte-1qqw9qn:disabled{border-color:#DDDDDD;color:#DDDDDD;cursor:not-allowed;opacity:1}textarea.svelte-1qqw9qn{margin-top:10px;margin-left:50px;-moz-border-bottom-colors:none;-moz-border-left-colors:none;-moz-border-right-colors:none;-moz-border-top-colors:none;background:none repeat scroll 0 0 rgba(0, 0, 0, 0.07);border-color:-moz-use-text-color #FFFFFF #FFFFFF -moz-use-text-color;border-image:none;border-radius:6px 6px 6px 6px;border-style:none solid solid none;border-width:medium 1px 1px medium;box-shadow:0 1px 2px rgba(0, 0, 0, 0.12) inset;color:#555555;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:1em;line-height:1.4em;padding:5px 8px;transition:background-color 0.2s ease 0s}textarea.svelte-1qqw9qn:focus{background:none repeat scroll 0 0 #FFFFFF;outline-width:0}',
  map: null
};
let text_input = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let result_language = "";
  let result_keywords = "";
  let { data } = $$props;
  try {
    if (data) {
      if (data.hasOwnProperty("response")) {
        const { response } = data;
        if (response.hasOwnProperty("document")) {
          result_language = response.document.language;
          result_keywords = response.document.keywords;
          console.log(response);
          console.log(response.document);
        } else {
          alert("Try again!");
        }
      }
    } else {
      result_language = "Please, try another text";
      result_keywords = "Please, try another text";
    }
  } catch (err) {
    console.log(err);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1ds1qyu -->${$$result.title = `<title>About</title>`, ""}<meta name="${"description"}" content="${"About this app"}"><!-- HEAD_svelte-1ds1qyu -->`, ""}


	

<h1>Text analysis</h1>
<div class="${"user_text svelte-1qqw9qn"}"><div class="${"input_text"}"><h3 class="${"svelte-1qqw9qn"}">Your text</h3>
		<form method="${"post"}" id="${"testformid"}"><input style="${"display:none"}" type="${"text"}" placeholder="${"Paste your text here.."}">
		<textarea form="${"testformid"}" name="${"text_inp"}" id="${"taid"}" cols="${"35"}" rows="${"25"}" wrap="${"soft"}" class="${"svelte-1qqw9qn"}">${escape(text_input, true)}</textarea>
		<div class="${"button_class"}"><button class="${"button-23 svelte-1qqw9qn"}" type="${"submit"}">Analyse text</button></div></form>
		

		

		</div>
	<div class="${"result svelte-1qqw9qn"}"><div class="${"result_language"}"><h3 class="${"svelte-1qqw9qn"}">Language</h3>
			<textarea rows="${"3"}" cols="${"35"}" form="${"text_content"}" class="${"svelte-1qqw9qn"}">${escape(result_language, true)}</textarea></div>
		<div class="${"result_keywords"}"><h3 class="${"svelte-1qqw9qn"}">Keywords</h3>
			<textarea rows="${"17"}" cols="${"35"}" form="${"text_content"}" class="${"svelte-1qqw9qn"}">${escape(result_keywords, true)}</textarea></div></div>
	
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-e76f330a.js.map
