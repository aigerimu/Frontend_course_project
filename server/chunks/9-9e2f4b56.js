const prerender = false;
let result;
let api_key = "Bearer 6996ad5869ded7fcd10a4e07a8f6e75a";
let api_url = "https://api.pretrained.ai/test-8/questions";
let text_res;
const load = async ({ params }) => {
  return result;
};
const actions = {
  default: async ({ request }) => {
    const form = await request.formData();
    const question = form.get("user_question");
    const context = form.get("user_context");
    const bodyinit = {
      "text": String(question),
      "config": {
        "question-answerer": {
          "context": String(context)
        }
      }
    };
    console.log("Before fetch");
    const response = await fetch(api_url, {
      method: "POST",
      body: JSON.stringify(bodyinit),
      headers: {
        "Authorization": api_key,
        "Content-Type": "application/json"
      }
    });
    console.log("after fetch");
    result = await response.json();
    console.log(result);
    return result;
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load,
  prerender: prerender,
  text_res: text_res
});

const index = 9;
const component = async () => (await import('./_page.svelte-232d485f.js')).default;
const file = '_app/immutable/components/pages/question_answerer/_page.svelte-80bf3fd0.js';
const imports = ["_app/immutable/components/pages/question_answerer/_page.svelte-80bf3fd0.js","_app/immutable/chunks/index-86dd8f8c.js"];
const stylesheets = ["_app/immutable/assets/_page-b55c1358.css"];

export { component, file, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=9-9e2f4b56.js.map
