import { c as create_ssr_component, e as escape } from './index-1b2b3cdb.js';

const css = {
  code: '.user_question.svelte-husduc{text-align:center}.answer.svelte-husduc{position:relative;top:30pm}.button-23.svelte-husduc{background-color:#FFFFFF;border:1px solid #222222;border-radius:8px;box-sizing:border-box;color:#222222;cursor:pointer;display:inline-block;font-family:Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;font-size:16px;font-weight:600;line-height:20px;margin:0;outline:none;padding:13px 23px;position:relative;text-align:center;text-decoration:none;touch-action:manipulation;transition:box-shadow .2s,-ms-transform .1s,-webkit-transform .1s,transform .1s;user-select:none;-webkit-user-select:none;width:auto}.button-23.svelte-husduc:focus-visible{box-shadow:#222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;transition:box-shadow .2s}.button-23.svelte-husduc:active{background-color:#F7F7F7;border-color:#000000;transform:scale(.96)}.button-23.svelte-husduc:disabled{border-color:#DDDDDD;color:#DDDDDD;cursor:not-allowed;opacity:1}textarea.svelte-husduc{margin-top:10px;margin-left:50px;-moz-border-bottom-colors:none;-moz-border-left-colors:none;-moz-border-right-colors:none;-moz-border-top-colors:none;background:none repeat scroll 0 0 rgba(0, 0, 0, 0.07);border-color:-moz-use-text-color #FFFFFF #FFFFFF -moz-use-text-color;border-image:none;border-radius:6px 6px 6px 6px;border-style:none solid solid none;border-width:medium 1px 1px medium;box-shadow:0 1px 2px rgba(0, 0, 0, 0.12) inset;color:#555555;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:1em;line-height:1.4em;padding:5px 8px;transition:background-color 0.2s ease 0s}textarea.svelte-husduc:focus{background:none repeat scroll 0 0 #FFFFFF;outline-width:0}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let answer = "Answer will be here";
  let { data } = $$props;
  try {
    if (data) {
      if (data.hasOwnProperty("response")) {
        const { response } = data;
        if (response.hasOwnProperty("document")) {
          answer = response.document.answer.answer;
          console.log(response);
          console.log(response.document);
        } else {
          alert("Try again!");
        }
      }
    } else {
      answer = "No answer yet";
    }
  } catch (err) {
    console.log(err);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1f90nzu -->${$$result.title = `<title>Question answerer</title>`, ""}<meta name="${"description"}" content="${"About this app"}"><!-- HEAD_svelte-1f90nzu -->`, ""}

<h1>Question answerer</h1>
<div class="${"user_question svelte-husduc"}"><div class="${"input_question"}"><h3>Your question</h3>
		<form method="${"POST"}" id="${"question"}"><textarea rows="${"1"}" cols="${"100"}" name="${"user_question"}" form="${"question"}" class="${"svelte-husduc"}">${"Paste your question here..."}</textarea>
		<textarea rows="${"1"}" cols="${"100"}" name="${"user_context"}" form="${"question"}" class="${"svelte-husduc"}">${"Add some context..."}</textarea>
		<div class="${"button_class"}"><button class="${"button-23 svelte-husduc"}" type="${"submit"}">Find answer</button></div></form></div>
	<div class="${"answer svelte-husduc"}"><textarea rows="${"20"}" cols="${"100"}" class="${"svelte-husduc"}">${"			" + escape(answer, true) + "\n		"}</textarea></div>

</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-232d485f.js.map
