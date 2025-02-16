import 'kleur/colors';
import { f as decodeKey } from './chunks/astro/server_CjNNo8J6.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DkkFUtl_.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/dani/Documentos/libGDX/rt_villarrica_landing/","cacheDir":"file:///home/dani/Documentos/libGDX/rt_villarrica_landing/node_modules/.astro/","outDir":"file:///home/dani/Documentos/libGDX/rt_villarrica_landing/dist/","srcDir":"file:///home/dani/Documentos/libGDX/rt_villarrica_landing/src/","publicDir":"file:///home/dani/Documentos/libGDX/rt_villarrica_landing/public/","buildClientDir":"file:///home/dani/Documentos/libGDX/rt_villarrica_landing/dist/client/","buildServerDir":"file:///home/dani/Documentos/libGDX/rt_villarrica_landing/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/submit","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/submit\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"submit","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/submit.ts","pathname":"/api/submit","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"html,body{margin:0;width:100%;height:100%;min-height:330px;min-width:400px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;background:#fff}\n.form-group[data-v-8e6446b2]{display:flex;flex-direction:column;gap:.5rem}.personal-data-group[data-v-c39500d0],.competencias-group[data-v-98c3605c]{display:flex;flex-direction:column;gap:1rem}.checkbox-group[data-v-98c3605c]{display:flex;flex-direction:column;gap:.5rem}.select-group[data-v-98c3605c]{position:relative;display:flex;flex-direction:column;padding:4px;width:100%;max-width:400px}.select-group select[data-v-98c3605c]{width:80%;margin-block:4px;color:#333;background-color:#fff;border:2px solid #ccc;border-radius:5px;cursor:pointer}.select-group select[data-v-98c3605c]:focus{border-color:#6b85a1;outline:none}.paypal-button[data-v-2b42a331]{width:100%;border:1px solid #ccc;border-radius:.25rem;background-color:#fff;color:#1b4e6e;font-size:1rem;cursor:pointer;transition:background-color .3s ease}.paypal-button[data-v-2b42a331]:hover{background-color:#f0f0f0}.card[data-v-8d43f794]{border:1px solid #ccc;border-radius:.5rem;padding:1rem;box-shadow:0 0 10px #0000001a;max-width:400px;margin:0 auto}.card-header[data-v-8d43f794],.card-footer[data-v-8d43f794]{padding:1rem 0;border-bottom:1px solid #ccc}.card-content[data-v-8d43f794]{padding:1rem 0}.form[data-v-8d43f794]{display:flex;flex-direction:column;gap:1rem}.form-group-container[data-v-8d43f794]{margin-bottom:1rem}.submit-button[data-v-8d43f794]{width:100%;padding:.75rem;border:none;border-radius:.25rem;background-color:#1b4e6e;color:#fff;font-size:1rem;cursor:pointer;transition:background-color .3s ease}.submit-button[data-v-8d43f794]:hover{background-color:#145a7a}.donation-section[data-v-8d43f794]{width:100%;display:flex;flex-direction:column;gap:.5rem}\n"}],"routeData":{"route":"/inscription","isIndex":false,"type":"page","pattern":"^\\/inscription\\/?$","segments":[[{"content":"inscription","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/inscription.astro","pathname":"/inscription","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"html,body{margin:0;width:100%;height:100%;min-height:330px;min-width:400px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;background:#fff}\n#info[data-astro-cid-e5kvktnr]{position:absolute;padding:2rem;display:flex;flex-direction:column;justify-content:center;align-items:flex-end;width:50%;height:90%;color:#fff;h1{font-size:50px}h3{font-size:30px}h1,h3{text-shadow:-2px -2px 0 #000,2px -2px 0 #000,-2px 2px 0 #000,2px 2px 0 #000;letter-spacing:4px}}.cover[data-astro-cid-e5kvktnr]{border-radius:.5rem;overflow:hidden;position:relative;height:600px}.cover[data-astro-cid-e5kvktnr] img[data-astro-cid-e5kvktnr]{width:100%;max-height:100%;object-fit:cover;position:absolute}@media (max-width: 770px){.cover[data-astro-cid-e5kvktnr]{object-fit:fill}#info[data-astro-cid-e5kvktnr]{display:none;h1{font-size:30px}h3{font-size:20px}}}@media (max-width: 440px){.cover[data-astro-cid-e5kvktnr]{object-fit:fill}#info[data-astro-cid-e5kvktnr]{display:none;h1{font-size:20px}h3{font-size:15px}}}.container[data-astro-cid-ypgb7zfc]{padding:1rem;width:100%;height:auto;display:flex;flex-direction:column;justify-content:center;align-items:center}.icon-wrapper[data-astro-cid-ypgb7zfc]{text-decoration:none;color:#000;cursor:pointer;display:flex;flex-direction:column;justify-content:center;align-items:center}#insta[data-astro-cid-ypgb7zfc]{width:50px;height:50px;cursor:pointer}#insta[data-astro-cid-ypgb7zfc]:hover{scale:1.1}.container[data-astro-cid-ivdev4kk]{padding:3rem 1rem 1rem;border:solid #ccc;border-width:0 1px 1px 1px;border-radius:.5rem;width:auto;height:auto;background:#fff;display:flex;flex-direction:column;justify-content:center}.card[data-v-f594ac8a]{padding:1rem;border:2px solid #ccc;border-radius:.5rem;min-width:200px;min-height:200px;display:flex;flex-direction:column;justify-content:center;align-items:center;user-select:none;transition:all .2s ease-in-out;opacity:1;cursor:pointer}.card.expanded[data-v-f594ac8a]{position:absolute;width:auto;height:auto;z-index:10;background-color:#fff;box-shadow:0 0 10px #00000080;transition:all .1s ease-in-out}.card[data-v-f594ac8a]:not(.expanded){opacity:.6}.card[data-v-f594ac8a]:not(.expanded):hover{opacity:.7}.card[data-v-f594ac8a]:hover{border-color:#1b4e6e;box-shadow:0 0 15px #0080ff80}.card:hover h2[data-v-f594ac8a],.card:hover p[data-v-f594ac8a]{color:#0005da}@media (max-width: 480px){.card[data-v-f594ac8a]:not(.expanded){opacity:.9}}.card-wrapper[data-v-d90028a0]{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:1rem;padding:1rem;background-color:#e3e3e399;user-select:none;transition:all .1s ease-in-out;opacity:1;border-radius:.5rem;min-width:200px;min-height:200px}.card-wrapper.expanded-wrapper[data-v-d90028a0]{background-color:#d3d3d3}.card-wrapper[data-v-d90028a0]>*{flex:1 1 calc(33.333% - 1rem);max-width:calc(33.333% - 1rem);height:100%;box-sizing:border-box}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/dani/Documentos/libGDX/rt_villarrica_landing/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/dani/Documentos/libGDX/rt_villarrica_landing/src/pages/inscription.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/api/submit@_@ts":"pages/api/submit.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/inscription@_@astro":"pages/inscription.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/home/dani/Documentos/libGDX/rt_villarrica_landing/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_SQl7ZZMm.mjs","\u0000@astrojs-manifest":"manifest_CgXsyER7.mjs","/home/dani/Documentos/libGDX/rt_villarrica_landing/src/components/vue/Inscription/InscriptionForm.vue":"_astro/InscriptionForm.B8Z3Jiqj.js","/home/dani/Documentos/libGDX/rt_villarrica_landing/src/components/vue/CardWrapper.vue":"_astro/CardWrapper.RBa3G2Nc.js","@astrojs/vue/client.js":"_astro/client.DCqcqRo1.js","/home/dani/Documentos/libGDX/rt_villarrica_landing/src/components/ContactUs.astro?astro&type=script&index=0&lang.ts":"_astro/ContactUs.astro_astro_type_script_index_0_lang.jkw6-S1U.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/dani/Documentos/libGDX/rt_villarrica_landing/src/components/ContactUs.astro?astro&type=script&index=0&lang.ts","const o=document.querySelector(\"div.icon-wrapper\");if(o===null)console.log(\"wrapper is null\");else{const n=\"mang_teamv\",i=`instagram://user?username=${n}`,s=`https://instagram.com/${n}`,t=e=>{e?window.location.href=i:window.open(s,\"_blank\")};o.addEventListener(\"click\",()=>{const e=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);t(e)})}"]],"assets":["/cover.jpg","/favicon.svg","/_astro/CardWrapper.RBa3G2Nc.js","/_astro/InscriptionForm.B8Z3Jiqj.js","/_astro/_plugin-vue_export-helper.DlAUqK2U.js","/_astro/client.DCqcqRo1.js","/_astro/index.lqhfOzOR.css","/_astro/inscription.B-bMkz8j.css","/_astro/runtime-core.esm-bundler.BXhDXiwY.js","/_astro/runtime-dom.esm-bundler.DBgw-n-p.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"uS7hFSHOwCowH8duAuUpL+16yeZgjaz2d0cEyjUjny4="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
