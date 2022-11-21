const prerender = false;
let result;
const load = async ({ params }) => {
  return result;
};
const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const img = data.get("orgimg");
    const bodyinit = {
      "image": {
        "content": String(img)
      }
    };
    const res = await fetch("https://api.pretrained.ai/aigerim-1/face-detection", {
      method: "POST",
      body: JSON.stringify(bodyinit),
      headers: {
        "Authorization": "Bearer 6383c985270f2c0b45fb6185d7ba7815",
        "Content-Type": "application/json"
      }
    });
    result = await res.json();
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load,
  prerender: prerender
});

const index = 8;
const component = async () => (await import('./_page.svelte-43132302.js')).default;
const file = '_app/immutable/components/pages/image_detection/_page.svelte-1ea997e5.js';
const imports = ["_app/immutable/components/pages/image_detection/_page.svelte-1ea997e5.js","_app/immutable/chunks/index-86dd8f8c.js"];
const stylesheets = ["_app/immutable/assets/_page-f06842eb.css"];

export { component, file, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=8-98c54d04.js.map
