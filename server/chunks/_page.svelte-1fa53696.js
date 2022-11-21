import { c as create_ssr_component, v as validate_component, b as add_attribute } from './index-1b2b3cdb.js';
import './client-e4cff38a.js';

const SignUpForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  let nickname = "";
  return `${`<p>Singup</p>
	<input type="${"email"}" id="${"email"}" placeholder="${"email"}"${add_attribute("value", email, 0)}>
  	<input id="${"nickname"}" placeholder="${"nickname"}"${add_attribute("value", nickname, 0)}>
	<input type="${"password"}" id="${"password"}" placeholder="${"password"}"${add_attribute("value", password, 0)}>
	<button>Signup</button>
	<button>or Login </button>`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SignUpForm, "SignUp").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-1fa53696.js.map
