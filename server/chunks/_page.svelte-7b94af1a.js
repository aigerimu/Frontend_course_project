import { c as create_ssr_component, v as validate_component, b as add_attribute } from './index-1b2b3cdb.js';
import './client-e4cff38a.js';

const SignInForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  return `<p>Login</p>
	<input type="${"email"}" id="${"email"}" placeholder="${"email"}"${add_attribute("value", email, 0)}>
	<input type="${"password"}" id="${"password"}" placeholder="${"password"}"${add_attribute("value", password, 0)}>
	<button>Login</button>
	<button>or Signup </button>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SignInForm, "SignInForm").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-7b94af1a.js.map
