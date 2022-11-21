const prerender = false;
let result;
let api_key = "Bearer 6996ad5869ded7fcd10a4e07a8f6e75a";
let url = "https://api.pretrained.ai/test-8/text_analysis-1";
let text_res;
const load = async ({ params }) => {
  return result;
};
const actions = {
  default: async ({ request }) => {
    const form = await request.formData();
    const text_ = form.get("text_inp");
    const bodyinit = {
      "text": String(text_)
    };
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(bodyinit),
      headers: {
        "Authorization": api_key,
        "Content-Type": "application/json"
      }
    });
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

const index = 10;
const component = async () => (await import('./_page.svelte-e76f330a.js')).default;
const file = '_app/immutable/components/pages/text_analysis/_page.svelte-3d3aee3f.js';
const imports = ["_app/immutable/components/pages/text_analysis/_page.svelte-3d3aee3f.js","_app/immutable/chunks/index-86dd8f8c.js"];
const stylesheets = ["_app/immutable/assets/_page-3ccc966a.css"];

export { component, file, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=10-53889fc1.js.map
