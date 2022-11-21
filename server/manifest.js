const manifest = {
	appDir: "_app",
	appPath: "Frontend_course_project/_app",
	assets: new Set([".nojekyll","favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-e8d3b4da.js","imports":["_app/immutable/start-e8d3b4da.js","_app/immutable/chunks/index-86dd8f8c.js","_app/immutable/chunks/singletons-1aae0c83.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-729d4cc1.js'),
			() => import('./chunks/1-e32ffffd.js'),
			() => import('./chunks/2-b25cef50.js'),
			() => import('./chunks/3-070d7e43.js'),
			() => import('./chunks/4-49bd0eed.js'),
			() => import('./chunks/5-70d0a1c1.js'),
			() => import('./chunks/6-c98fff2e.js'),
			() => import('./chunks/7-fcc89852.js'),
			() => import('./chunks/8-98c54d04.js'),
			() => import('./chunks/9-9e2f4b56.js'),
			() => import('./chunks/10-53889fc1.js')
		],
		routes: [
			{
				id: "image_blurring",
				pattern: /^\/image_blurring\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "image_detection",
				pattern: /^\/image_detection\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "question_answerer",
				pattern: /^\/question_answerer\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "text_analysis",
				pattern: /^\/text_analysis\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
