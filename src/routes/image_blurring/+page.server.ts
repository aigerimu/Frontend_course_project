export const prerender = false;

import {SECTRET_API_KEY} from '$env/static/private'
import type { Actions, PageServerLoad} from './$types';

let result: any;

export const load : PageServerLoad = async({params})=>{
  return result;
}

export const actions: Actions = {
  default: async({request}:{request:Request}) =>{
    const data = await request.formData();
    const img = data.get('orgimg');

    const bodyinit = {
      'image':{
        'content': String(img),
      }
    }

    const res = await fetch('https://api.pretrained.ai/aigerim-1/face-blurring', {
      method: 'POST',
      body: JSON.stringify(bodyinit),
      headers: {
        'Authorization': 'Bearer 6383c985270f2c0b45fb6185d7ba7815',
        'Content-Type': 'application/json'
      }
    });
    result = await res.json();
  },
};