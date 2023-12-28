export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["SOCLogo.png","SOCLogo_lite.png","SOCLogo_quarter.png","ag.png","favicon.png","favicon_x.png","nswg.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.fBXH6Gs9.js","app":"_app/immutable/entry/app.4aNdMc5w.js","imports":["_app/immutable/entry/start.fBXH6Gs9.js","_app/immutable/chunks/scheduler.Q2oRtGFl.js","_app/immutable/chunks/singletons.bOxwbogp.js","_app/immutable/chunks/index.fY_4XAxg.js","_app/immutable/chunks/paths.xiBtOcvy.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/entry/app.4aNdMc5w.js","_app/immutable/chunks/scheduler.Q2oRtGFl.js","_app/immutable/chunks/index.rBajJ9mv.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
