var ca=Object.defineProperty;var da=(e,t,a)=>t in e?ca(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var b=(e,t,a)=>da(e,typeof t!="symbol"?t+"":t,a);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=a(i);fetch(i.href,o)}})();const it="https://huggingface.co",Ot="https://router.huggingface.co",pa="X-HF-Bill-To",vt={baseten:{},"black-forest-labs":{},cerebras:{},clarifai:{},cohere:{},"fal-ai":{},"featherless-ai":{},"fireworks-ai":{},groq:{},"hf-inference":{},hyperbolic:{},nebius:{},novita:{},nscale:{},openai:{},publicai:{},ovhcloud:{},replicate:{},sambanova:{},scaleway:{},together:{},wavespeed:{},"zai-org":{}};class qe extends Error{constructor(t){super(t),this.name="InferenceClientError"}}class q extends qe{constructor(t){super(t),this.name="InputError"}}class ua extends qe{constructor(t){super(t),this.name="RoutingError"}}class qt extends qe{constructor(a,n,i){super(a);b(this,"httpRequest");b(this,"httpResponse");this.httpRequest={...n,...n.headers?{headers:{...n.headers,..."Authorization"in n.headers?{Authorization:"Bearer [redacted]"}:void 0}}:void 0},this.httpResponse=i}}class F extends qt{constructor(t,a,n){super(t,a,n),this.name="ProviderApiError"}}class Se extends qt{constructor(t,a,n){super(t,a,n),this.name="HubApiError"}}class y extends qe{constructor(t){super(t),this.name="ProviderOutputError"}}function Ft(e){return Array.isArray(e)?e:[e]}class Q{constructor(t,a,n=!1){b(this,"provider");b(this,"baseUrl");b(this,"clientSideRoutingOnly");this.provider=t,this.baseUrl=a,this.clientSideRoutingOnly=n}makeBaseUrl(t){return t.authMethod!=="provider-key"?`${Ot}/${this.provider}`:this.baseUrl}makeBody(t){return"data"in t.args&&t.args.data?t.args.data:JSON.stringify(this.preparePayload(t))}makeUrl(t){const a=this.makeBaseUrl(t),n=this.makeRoute(t).replace(/^\/+/,"");return`${a}/${n}`}prepareHeaders(t,a){const n={};return t.authMethod!=="none"&&(n.Authorization=`Bearer ${t.accessToken}`),a||(n["Content-Type"]="application/json"),n}}class V extends Q{constructor(t,a,n=!1){super(t,a,n)}makeRoute(){return"v1/chat/completions"}preparePayload(t){return{...t.args,model:t.model}}async getResponse(t){if(typeof t=="object"&&Array.isArray(t==null?void 0:t.choices)&&typeof(t==null?void 0:t.created)=="number"&&typeof(t==null?void 0:t.id)=="string"&&typeof(t==null?void 0:t.model)=="string"&&(t.system_fingerprint===void 0||t.system_fingerprint===null||typeof t.system_fingerprint=="string")&&typeof(t==null?void 0:t.usage)=="object")return t;throw new y("Expected ChatCompletionOutput")}}class le extends Q{constructor(t,a,n=!1){super(t,a,n)}preparePayload(t){return{...t.args,model:t.model}}makeRoute(){return"v1/completions"}async getResponse(t){const a=Ft(t);if(Array.isArray(a)&&a.length>0&&a.every(n=>typeof n=="object"&&!!n&&"generated_text"in n&&typeof n.generated_text=="string"))return a[0];throw new y("Expected Array<{generated_text: string}>")}}class ma extends V{constructor(){super("auto","https://router.huggingface.co")}makeBaseUrl(t){if(t.authMethod!=="hf-token")throw new ua("Cannot select auto-router when using non-Hugging Face API key.");return this.baseUrl}}function X(e){if(globalThis.Buffer)return globalThis.Buffer.from(e).toString("base64");{const t=[];return e.forEach(a=>{t.push(String.fromCharCode(a))}),globalThis.btoa(t.join(""))}}function fa(e,t){return Object.assign({},...t.map(a=>{if(e[a]!==void 0)return{[a]:e[a]}}))}function at(e,t){return e.includes(t)}function E(e,t){const a=Array.isArray(t)?t:[t],n=Object.keys(e).filter(i=>!at(a,i));return fa(e,n)}const wt=["feature-extraction","sentence-similarity"];class j extends Q{constructor(){super("hf-inference",`${Ot}/hf-inference`)}preparePayload(t){return t.args}makeUrl(t){return t.model.startsWith("http://")||t.model.startsWith("https://")?t.model:super.makeUrl(t)}makeRoute(t){return t.task&&["feature-extraction","sentence-similarity"].includes(t.task)?`models/${t.model}/pipeline/${t.task}`:`models/${t.model}`}async getResponse(t){return t}}class ga extends j{async getResponse(t,a,n,i){if(!t)throw new y("Received malformed response from HF-Inference text-to-image API: response is undefined");if(typeof t=="object"){if(i==="json")return{...t};if("data"in t&&Array.isArray(t.data)&&t.data[0].b64_json){const o=t.data[0].b64_json;return i==="url"?`data:image/jpeg;base64,${o}`:await(await fetch(`data:image/jpeg;base64,${o}`)).blob()}if("output"in t&&Array.isArray(t.output))return i==="url"?t.output[0]:await(await fetch(t.output[0])).blob()}if(t instanceof Blob){if(i==="url"||i==="json"){const o=await t.arrayBuffer().then(s=>Buffer.from(s).toString("base64"));return i==="url"?`data:image/jpeg;base64,${o}`:{output:`data:image/jpeg;base64,${o}`}}return t}throw new y("Received malformed response from HF-Inference text-to-image API: expected a Blob")}}class ha extends j{makeUrl(t){let a;return t.model.startsWith("http://")||t.model.startsWith("https://")?a=t.model.trim():a=`${this.makeBaseUrl(t)}/models/${t.model}`,a=a.replace(/\/+$/,""),a.endsWith("/v1")?a+="/chat/completions":a.endsWith("/chat/completions")||(a+="/v1/chat/completions"),a}preparePayload(t){return{...t.args,model:t.model}}async getResponse(t){return t}}class ba extends j{async getResponse(t){const a=Ft(t);if(Array.isArray(a)&&a.every(n=>"generated_text"in n&&typeof(n==null?void 0:n.generated_text)=="string"))return a==null?void 0:a[0];throw new y("Received malformed response from HF-Inference text generation API: expected Array<{generated_text: string}>")}}class ya extends j{async getResponse(t){if(Array.isArray(t)&&t.every(a=>typeof a=="object"&&a!==null&&typeof a.label=="string"&&typeof a.score=="number"))return t;throw new y("Received malformed response from HF-Inference audio-classification API: expected Array<{label: string, score: number}> but received different format")}}class va extends j{async getResponse(t){return t}async preparePayloadAsync(t){return"data"in t?t:{...E(t,"inputs"),data:t.inputs}}}class wa extends j{async getResponse(t){if(!Array.isArray(t))throw new y("Received malformed response from HF-Inference audio-to-audio API: expected Array");if(!t.every(a=>typeof a=="object"&&a&&"label"in a&&typeof a.label=="string"&&"content-type"in a&&typeof a["content-type"]=="string"&&"blob"in a&&typeof a.blob=="string"))throw new y("Received malformed response from HF-Inference audio-to-audio API: expected Array<{label: string, audio: Blob}>");return t}}class _a extends j{async getResponse(t){if(Array.isArray(t)&&t.every(a=>typeof a=="object"&&!!a&&typeof(a==null?void 0:a.answer)=="string"&&(typeof a.end=="number"||typeof a.end>"u")&&(typeof a.score=="number"||typeof a.score>"u")&&(typeof a.start=="number"||typeof a.start>"u")))return t[0];throw new y("Received malformed response from HF-Inference document-question-answering API: expected Array<{answer: string, end: number, score: number, start: number}>")}}class xa extends j{async getResponse(t){const a=(n,i,o=0)=>o>i?!1:n.every(s=>Array.isArray(s))?n.every(s=>a(s,i,o+1)):n.every(s=>typeof s=="number");if(Array.isArray(t)&&a(t,3,0))return t;throw new y("Received malformed response from HF-Inference feature-extraction API: expected Array<number[][][] | number[][] | number[] | number>")}}class ka extends j{async getResponse(t){if(Array.isArray(t)&&t.every(a=>typeof a.label=="string"&&typeof a.score=="number"))return t;throw new y("Received malformed response from HF-Inference image-classification API: expected Array<{label: string, score: number}>")}}class Aa extends j{async getResponse(t){if(Array.isArray(t)&&t.every(a=>typeof a.label=="string"&&typeof a.mask=="string"&&(a.score===void 0||typeof a.score=="number")))return t;throw new y("Received malformed response from HF-Inference image-segmentation API: expected Array<{label: string, mask: string, score: number}>")}async preparePayloadAsync(t){return{...t,inputs:X(new Uint8Array(t.inputs instanceof ArrayBuffer?t.inputs:await t.inputs.arrayBuffer()))}}}class Ia extends j{async getResponse(t){if(typeof(t==null?void 0:t.generated_text)!="string")throw new y("Received malformed response from HF-Inference image-to-text API: expected {generated_text: string}");return t}}class Ta extends j{async preparePayloadAsync(t){return t.parameters?{...t,inputs:X(new Uint8Array(t.inputs instanceof ArrayBuffer?t.inputs:await t.inputs.arrayBuffer()))}:{...t,model:t.model,data:t.inputs}}async getResponse(t){if(t instanceof Blob)return t;throw new y("Received malformed response from HF-Inference image-to-image API: expected Blob")}}class Sa extends j{async getResponse(t){if(Array.isArray(t)&&t.every(a=>typeof a.label=="string"&&typeof a.score=="number"&&typeof a.box.xmin=="number"&&typeof a.box.ymin=="number"&&typeof a.box.xmax=="number"&&typeof a.box.ymax=="number"))return t;throw new y("Received malformed response from HF-Inference object-detection API: expected Array<{label: string, score: number, box: {xmin: number, ymin: number, xmax: number, ymax: number}}>")}}class Ea extends j{async getResponse(t){if(Array.isArray(t)&&t.every(a=>typeof a.label=="string"&&typeof a.score=="number"))return t;throw new y("Received malformed response from HF-Inference zero-shot-image-classification API: expected Array<{label: string, score: number}>")}}class Pa extends j{async getResponse(t){const a=t==null?void 0:t[0];if(Array.isArray(a)&&a.every(n=>typeof(n==null?void 0:n.label)=="string"&&typeof n.score=="number"))return a;throw new y("Received malformed response from HF-Inference text-classification API: expected Array<{label: string, score: number}>")}}class Ca extends j{async getResponse(t){if(Array.isArray(t)?t.every(a=>typeof a=="object"&&!!a&&typeof a.answer=="string"&&typeof a.end=="number"&&typeof a.score=="number"&&typeof a.start=="number"):typeof t=="object"&&t&&typeof t.answer=="string"&&typeof t.end=="number"&&typeof t.score=="number"&&typeof t.start=="number")return Array.isArray(t)?t[0]:t;throw new y("Received malformed response from HF-Inference question-answering API: expected Array<{answer: string, end: number, score: number, start: number}>")}}class Da extends j{async getResponse(t){if(Array.isArray(t)&&t.every(a=>typeof a.score=="number"&&typeof a.sequence=="string"&&typeof a.token=="number"&&typeof a.token_str=="string"))return t;throw new y("Received malformed response from HF-Inference fill-mask API: expected Array<{score: number, sequence: string, token: number, token_str: string}>")}}class ot extends j{async getResponse(t){if(typeof t=="object"&&t!==null&&"labels"in t&&"scores"in t&&Array.isArray(t.labels)&&Array.isArray(t.scores)&&t.labels.length===t.scores.length&&t.labels.every(a=>typeof a=="string")&&t.scores.every(a=>typeof a=="number")){const a=t.scores;return t.labels.map((n,i)=>({label:n,score:a[i]}))}if(Array.isArray(t)&&t.every(ot.validateOutputElement))return t;throw new y("Received malformed response from HF-Inference zero-shot-classification API: expected Array<{label: string, score: number}>")}static validateOutputElement(t){return typeof t=="object"&&!!t&&"label"in t&&"score"in t&&typeof t.label=="string"&&typeof t.score=="number"}}class Ra extends j{async getResponse(t){if(Array.isArray(t)&&t.every(a=>typeof a=="number"))return t;throw new y("Received malformed response from HF-Inference sentence-similarity API: expected Array<number>")}}class Ue extends j{static validate(t){return typeof t=="object"&&!!t&&"aggregator"in t&&typeof t.aggregator=="string"&&"answer"in t&&typeof t.answer=="string"&&"cells"in t&&Array.isArray(t.cells)&&t.cells.every(a=>typeof a=="string")&&"coordinates"in t&&Array.isArray(t.coordinates)&&t.coordinates.every(a=>Array.isArray(a)&&a.every(n=>typeof n=="number"))}async getResponse(t){if(Array.isArray(t)&&Array.isArray(t)?t.every(a=>Ue.validate(a)):Ue.validate(t))return Array.isArray(t)?t[0]:t;throw new y("Received malformed response from HF-Inference table-question-answering API: expected {aggregator: string, answer: string, cells: string[], coordinates: number[][]}")}}class $a extends j{async getResponse(t){if(Array.isArray(t)&&t.every(a=>typeof a.end=="number"&&typeof a.entity_group=="string"&&typeof a.score=="number"&&typeof a.start=="number"&&typeof a.word=="string"))return t;throw new y("Received malformed response from HF-Inference token-classification API: expected Array<{end: number, entity_group: string, score: number, start: number, word: string}>")}}class ja extends j{async getResponse(t){if(Array.isArray(t)&&t.every(a=>typeof(a==null?void 0:a.translation_text)=="string"))return(t==null?void 0:t.length)===1?t==null?void 0:t[0]:t;throw new y("Received malformed response from HF-Inference translation API: expected Array<{translation_text: string}>")}}class La extends j{async getResponse(t){if(Array.isArray(t)&&t.every(a=>typeof(a==null?void 0:a.summary_text)=="string"))return t==null?void 0:t[0];throw new y("Received malformed response from HF-Inference summarization API: expected Array<{summary_text: string}>")}}class Ma extends j{async getResponse(t){return t}}class Na extends j{async getResponse(t){if(Array.isArray(t)&&t.every(a=>typeof a=="number"))return t;throw new y("Received malformed response from HF-Inference tabular-classification API: expected Array<number>")}}class Ua extends j{async getResponse(t){if(Array.isArray(t)&&t.every(a=>typeof a=="object"&&!!a&&typeof(a==null?void 0:a.answer)=="string"&&typeof a.score=="number"))return t[0];throw new y("Received malformed response from HF-Inference visual-question-answering API: expected Array<{answer: string, score: number}>")}}class Ba extends j{async getResponse(t){if(Array.isArray(t)&&t.every(a=>typeof a=="number"))return t;throw new y("Received malformed response from HF-Inference tabular-regression API: expected Array<number>")}}class Oa extends j{async getResponse(t){return t}}let qa=console;function Pe(){return qa}const Ze=new Map;function Fa(e,t){return t?Array.isArray(t)?t:Object.entries(t).map(([a,n])=>({provider:a,hfModelId:e,providerId:n.providerId,status:n.status,task:n.task,adapter:n.adapter,adapterWeightsPath:n.adapterWeightsPath})):[]}async function Ht(e,t,a){var i;let n;if(Ze.has(e))n=Ze.get(e);else{const o=`${it}/api/models/${e}?expand[]=inferenceProviderMapping`,s=await((a==null?void 0:a.fetch)??fetch)(o,{headers:t!=null&&t.startsWith("hf_")?{Authorization:`Bearer ${t}`}:{}});if(!s.ok)if((i=s.headers.get("Content-Type"))!=null&&i.startsWith("application/json")){const c=await s.json();if("error"in c&&typeof c.error=="string")throw new Se(`Failed to fetch inference provider mapping for model ${e}: ${c.error}`,{url:o,method:"GET"},{requestId:s.headers.get("x-request-id")??"",status:s.status,body:c})}else throw new Se(`Failed to fetch inference provider mapping for model ${e}`,{url:o,method:"GET"},{requestId:s.headers.get("x-request-id")??"",status:s.status,body:await s.text()});let r=null;try{r=await s.json()}catch{throw new Se(`Failed to fetch inference provider mapping for model ${e}: malformed API response, invalid JSON`,{url:o,method:"GET"},{requestId:s.headers.get("x-request-id")??"",status:s.status,body:await s.text()})}if(!(r!=null&&r.inferenceProviderMapping))throw new Se(`We have not been able to find inference provider information for model ${e}.`,{url:o,method:"GET"},{requestId:s.headers.get("x-request-id")??"",status:s.status,body:await s.text()});n=Fa(e,r.inferenceProviderMapping),Ze.set(e,n)}return n}async function Ha(e,t){const a=Pe();if(e.provider==="auto"&&e.task==="conversational")return{hfModelId:e.modelId,provider:"auto",providerId:e.modelId,status:"live",task:"conversational"};if(vt[e.provider][e.modelId])return vt[e.provider][e.modelId];const i=(await Ht(e.modelId,e.accessToken,t)).find(o=>o.provider===e.provider);if(i){const o=e.provider==="hf-inference"&&at(wt,e.task)?wt:[e.task];if(!at(o,i.task))throw new q(`Model ${e.modelId} is not supported for task ${e.task} and provider ${e.provider}. Supported task: ${i.task}.`);return i.status==="staging"&&a.warn(`Model ${e.modelId} is in staging mode for provider ${e.provider}. Meant for test purposes only.`),i}return null}async function P(e,t,a){var i;const n=Pe();if(a){if(e)throw new q("Specifying both endpointUrl and provider is not supported.");return"hf-inference"}if(e||(n.log("Defaulting to 'auto' which will select the first provider available for the model, sorted by the user's order in https://hf.co/settings/inference-providers."),e="auto"),e==="auto"){if(!t)throw new q("Specifying a model is required when provider is 'auto'");e=(i=(await Ht(t))[0])==null?void 0:i.provider,n.log("Auto selected provider:",e)}if(!e)throw new q(`No Inference Provider available for model ${t}.`);return e}const Va="https://inference.baseten.co";class za extends V{constructor(){super("baseten",Va)}}const Ka="https://api.clarifai.com";class Wa extends V{constructor(){super("clarifai",Ka)}makeRoute(){return"/v2/ext/openai/v1/chat/completions"}prepareHeaders(t,a){const n={Authorization:t.authMethod!=="provider-key"?`Bearer ${t.accessToken}`:`Key ${t.accessToken}`};return a||(n["Content-Type"]="application/json"),n}}function Fe(e){return new Promise(t=>{setTimeout(()=>t(),e)})}const Xa="https://api.us1.bfl.ai";class Qa extends Q{constructor(){super("black-forest-labs",Xa)}preparePayload(t){return{...E(t.args,["inputs","parameters"]),...t.args.parameters,prompt:t.args.inputs}}prepareHeaders(t,a){const n={Authorization:t.authMethod!=="provider-key"?`Bearer ${t.accessToken}`:`X-Key ${t.accessToken}`};return a||(n["Content-Type"]="application/json"),n}makeRoute(t){if(!t)throw new q("Params are required");return`/v1/${t.model}`}async getResponse(t,a,n,i){const o=Pe(),s=new URL(t.polling_url);for(let r=0;r<5;r++){await Fe(1e3),o.debug(`Polling Black Forest Labs API for the result... ${r+1}/5`),s.searchParams.set("attempt",r.toString(10));const c=await fetch(s,{headers:{"Content-Type":"application/json"}});if(!c.ok)throw new F("Failed to fetch result from black forest labs API",{url:s.toString(),method:"GET",headers:{"Content-Type":"application/json"}},{requestId:c.headers.get("x-request-id")??"",status:c.status,body:await c.text()});const l=await c.json();if(typeof l=="object"&&l&&"status"in l&&typeof l.status=="string"&&l.status==="Ready"&&"result"in l&&typeof l.result=="object"&&l.result&&"sample"in l.result&&typeof l.result.sample=="string")return i==="json"?l.result:i==="url"?l.result.sample:await(await fetch(l.result.sample)).blob()}throw new y("Timed out while waiting for the result from black forest labs API - aborting after 5 attempts")}}class Ja extends V{constructor(){super("cerebras","https://api.cerebras.ai")}}class Ya extends V{constructor(){super("cohere","https://api.cohere.com")}makeRoute(){return"/compatibility/v1/chat/completions"}}function me(e){return/^http(s?):/.test(e)||e.startsWith("/")}const _t=["audio/mpeg","audio/mp4","audio/wav","audio/x-wav"];class He extends Q{constructor(t){super("fal-ai",t||"https://fal.run")}preparePayload(t){return t.args}makeRoute(t){return`/${t.model}`}prepareHeaders(t,a){const n={Authorization:t.authMethod!=="provider-key"?`Bearer ${t.accessToken}`:`Key ${t.accessToken}`};return a||(n["Content-Type"]="application/json"),n}}class Ve extends He{async getResponseFromQueueApi(t,a,n){if(!a||!n)throw new q(`URL and headers are required for ${this.task} task`);if(!t.request_id)throw new y(`Received malformed response from Fal.ai ${this.task} API: no request ID found in the response`);let o=t.status;const s=new URL(a),r=`${s.protocol}//${s.host}${s.host==="router.huggingface.co"?"/fal-ai":""}`,c=new URL(t.response_url).pathname,l=s.search,g=`${r}${c}/status${l}`,u=`${r}${c}${l}`;for(;o!=="COMPLETED";){await Fe(500);const N=await fetch(g,{headers:n});if(!N.ok)throw new F("Failed to fetch response status from fal-ai API",{url:g,method:"GET"},{requestId:N.headers.get("x-request-id")??"",status:N.status,body:await N.text()});try{o=(await N.json()).status}catch{throw new y("Failed to parse status response from fal-ai API: received malformed response")}}const v=await fetch(u,{headers:n});let $;try{$=await v.json()}catch{throw new y("Failed to parse result response from fal-ai API: received malformed response")}return $}}function Vt(e,t){return`${it}/${e}/resolve/main/${t}`}class Za extends He{preparePayload(t){var n;const a={...E(t.args,["inputs","parameters"]),...t.args.parameters,sync_mode:!0,prompt:t.args.inputs};return((n=t.mapping)==null?void 0:n.adapter)==="lora"&&t.mapping.adapterWeightsPath&&(a.loras=[{path:Vt(t.mapping.hfModelId,t.mapping.adapterWeightsPath),scale:1}],t.mapping.providerId==="fal-ai/lora"&&(a.model_name="stabilityai/stable-diffusion-xl-base-1.0")),a}async getResponse(t,a,n,i){if(typeof t=="object"&&"images"in t&&Array.isArray(t.images)&&t.images.length>0&&"url"in t.images[0]&&typeof t.images[0].url=="string")return i==="json"?{...t}:i==="url"?t.images[0].url:await(await fetch(t.images[0].url)).blob();throw new y("Received malformed response from Fal.ai text-to-image API")}}class Ga extends Ve{constructor(){super("https://queue.fal.run");b(this,"task");this.task="image-to-image"}makeRoute(a){return a.authMethod!=="provider-key"?`/${a.model}?_subdomain=queue`:`/${a.model}`}preparePayload(a){var i;const n=a.args;return((i=a.mapping)==null?void 0:i.adapter)==="lora"&&a.mapping.adapterWeightsPath&&(n.loras=[{path:Vt(a.mapping.hfModelId,a.mapping.adapterWeightsPath),scale:1}]),n}async preparePayloadAsync(a){const n=a.inputs instanceof Blob?a.inputs.type:"image/png";return{...E(a,["inputs","parameters"]),image_url:`data:${n};base64,${X(new Uint8Array(a.inputs instanceof ArrayBuffer?a.inputs:await a.inputs.arrayBuffer()))}`,...a.parameters,...a}}async getResponse(a,n,i){const o=await this.getResponseFromQueueApi(a,n,i);if(typeof o=="object"&&o&&"images"in o&&Array.isArray(o.images)&&o.images.length>0&&typeof o.images[0]=="object"&&o.images[0]&&"url"in o.images[0]&&typeof o.images[0].url=="string"&&me(o.images[0].url))return await(await fetch(o.images[0].url)).blob();throw new y(`Received malformed response from Fal.ai image-to-image API: expected { images: Array<{ url: string }> } result format, got instead: ${JSON.stringify(o)}`)}}class en extends Ve{constructor(){super("https://queue.fal.run");b(this,"task");this.task="text-to-video"}makeRoute(a){return a.authMethod!=="provider-key"?`/${a.model}?_subdomain=queue`:`/${a.model}`}preparePayload(a){return{...E(a.args,["inputs","parameters"]),...a.args.parameters,prompt:a.args.inputs}}async getResponse(a,n,i){const o=await this.getResponseFromQueueApi(a,n,i);if(typeof o=="object"&&o&&"video"in o&&typeof o.video=="object"&&o.video&&"url"in o.video&&typeof o.video.url=="string"&&me(o.video.url))return await(await fetch(o.video.url)).blob();throw new y(`Received malformed response from Fal.ai text-to-video API: expected { video: { url: string } } result format, got instead: ${JSON.stringify(o)}`)}}class tn extends Ve{constructor(){super("https://queue.fal.run");b(this,"task");this.task="image-to-video"}makeRoute(a){return a.authMethod!=="provider-key"?`/${a.model}?_subdomain=queue`:`/${a.model}`}preparePayload(a){return{...E(a.args,["inputs","parameters"]),...a.args.parameters,image_url:a.args.image_url}}async preparePayloadAsync(a){const n=a.inputs instanceof Blob?a.inputs.type:"image/png";return{...E(a,["inputs","parameters"]),image_url:`data:${n};base64,${X(new Uint8Array(a.inputs instanceof ArrayBuffer?a.inputs:await a.inputs.arrayBuffer()))}`,...a.parameters,...a}}async getResponse(a,n,i){const o=await this.getResponseFromQueueApi(a,n,i);if(typeof o=="object"&&o!==null&&"video"in o&&typeof o.video=="object"&&o.video!==null&&"url"in o.video&&typeof o.video.url=="string"&&"url"in o.video&&me(o.video.url))return await(await fetch(o.video.url)).blob();throw new y(`Received malformed response from Fal.ai image‑to‑video API: expected { video: { url: string } }, got: ${JSON.stringify(o)}`)}}class an extends He{prepareHeaders(t,a){const n=super.prepareHeaders(t,a);return n["Content-Type"]="application/json",n}async getResponse(t){const a=t;if(typeof(a==null?void 0:a.text)!="string")throw new y(`Received malformed response from Fal.ai Automatic Speech Recognition API: expected { text: string } format, got instead: ${JSON.stringify(t)}`);return{text:a.text}}async preparePayloadAsync(t){const a="data"in t&&t.data instanceof Blob?t.data:"inputs"in t?t.inputs:void 0,n=a==null?void 0:a.type;if(!n)throw new q("Unable to determine the input's content-type. Make sure your are passing a Blob when using provider fal-ai.");if(!_t.includes(n))throw new q(`Provider fal-ai does not support blob type ${n} - supported content types are: ${_t.join(", ")}`);const i=X(new Uint8Array(await a.arrayBuffer()));return{..."data"in t?E(t,"data"):E(t,"inputs"),audio_url:`data:${n};base64,${i}`}}}class nn extends He{preparePayload(t){return{...E(t.args,["inputs","parameters"]),...t.args.parameters,text:t.args.inputs}}async getResponse(t){var i;const a=t;if(typeof((i=a==null?void 0:a.audio)==null?void 0:i.url)!="string")throw new y(`Received malformed response from Fal.ai Text-to-Speech API: expected { audio: { url: string } } format, got instead: ${JSON.stringify(t)}`);const n=await fetch(a.audio.url);if(!n.ok)throw new F(`Failed to fetch audio from ${a.audio.url}: ${n.statusText}`,{url:a.audio.url,method:"GET",headers:{"Content-Type":"application/json"}},{requestId:n.headers.get("x-request-id")??"",status:n.status,body:await n.text()});try{return await n.blob()}catch(o){throw new F(`Failed to fetch audio from ${a.audio.url}: ${o instanceof Error?o.message:String(o)}`,{url:a.audio.url,method:"GET",headers:{"Content-Type":"application/json"}},{requestId:n.headers.get("x-request-id")??"",status:n.status,body:await n.text()})}}}class on extends Ve{constructor(){super("https://queue.fal.run");b(this,"task");this.task="image-segmentation"}makeRoute(a){return a.authMethod!=="provider-key"?`/${a.model}?_subdomain=queue`:`/${a.model}`}preparePayload(a){return{...E(a.args,["inputs","parameters"]),...a.args.parameters,sync_mode:!0}}async preparePayloadAsync(a){const n="data"in a&&a.data instanceof Blob?a.data:"inputs"in a?a.inputs:void 0,i=n instanceof Blob?n.type:"image/png",o=X(new Uint8Array(n instanceof ArrayBuffer?n:await n.arrayBuffer()));return{...E(a,["inputs","parameters","data"]),...a.parameters,...a,image_url:`data:${i};base64,${o}`,sync_mode:!0}}async getResponse(a,n,i){const o=await this.getResponseFromQueueApi(a,n,i);if(typeof o=="object"&&o!==null&&"image"in o&&typeof o.image=="object"&&o.image!==null&&"url"in o.image&&typeof o.image.url=="string"){const s=await fetch(o.image.url);if(!s.ok)throw new F(`Failed to fetch segmentation mask from ${o.image.url}`,{url:o.image.url,method:"GET"},{requestId:s.headers.get("x-request-id")??"",status:s.status,body:await s.text()});const c=await(await s.blob()).arrayBuffer();return[{label:"mask",score:1,mask:X(new Uint8Array(c))}]}throw new y(`Received malformed response from Fal.ai image-segmentation API: expected { image: { url: string } } format, got instead: ${JSON.stringify(a)}`)}}const zt="https://api.featherless.ai";class sn extends V{constructor(){super("featherless-ai",zt)}}class rn extends le{constructor(){super("featherless-ai",zt)}preparePayload(t){return{model:t.model,...E(t.args,["inputs","parameters"]),...t.args.parameters?{max_tokens:t.args.parameters.max_new_tokens,...E(t.args.parameters,"max_new_tokens")}:void 0,prompt:t.args.inputs}}async getResponse(t){if(typeof t=="object"&&"choices"in t&&Array.isArray(t==null?void 0:t.choices)&&typeof(t==null?void 0:t.model)=="string")return{generated_text:t.choices[0].text};throw new y("Received malformed response from Featherless AI text generation API")}}class ln extends V{constructor(){super("fireworks-ai","https://api.fireworks.ai")}makeRoute(){return"/inference/v1/chat/completions"}}const Kt="https://api.groq.com";class cn extends le{constructor(){super("groq",Kt)}makeRoute(){return"/openai/v1/chat/completions"}}class dn extends V{constructor(){super("groq",Kt)}makeRoute(){return"/openai/v1/chat/completions"}}const st="https://api.hyperbolic.xyz";class pn extends V{constructor(){super("hyperbolic",st)}}class un extends le{constructor(){super("hyperbolic",st)}makeRoute(){return"v1/chat/completions"}preparePayload(t){return{messages:[{content:t.args.inputs,role:"user"}],...t.args.parameters?{max_tokens:t.args.parameters.max_new_tokens,...E(t.args.parameters,"max_new_tokens")}:void 0,...E(t.args,["inputs","parameters"]),model:t.model}}async getResponse(t){if(typeof t=="object"&&"choices"in t&&Array.isArray(t==null?void 0:t.choices)&&typeof(t==null?void 0:t.model)=="string")return{generated_text:t.choices[0].message.content};throw new y("Received malformed response from Hyperbolic text generation API")}}class mn extends Q{constructor(){super("hyperbolic",st)}makeRoute(t){return"/v1/images/generations"}preparePayload(t){return{...E(t.args,["inputs","parameters"]),...t.args.parameters,prompt:t.args.inputs,model_name:t.model}}async getResponse(t,a,n,i){if(typeof t=="object"&&"images"in t&&Array.isArray(t.images)&&t.images[0]&&typeof t.images[0].image=="string")return i==="json"?{...t}:i==="url"?`data:image/jpeg;base64,${t.images[0].image}`:fetch(`data:image/jpeg;base64,${t.images[0].image}`).then(o=>o.blob());throw new y("Received malformed response from Hyperbolic text-to-image API")}}const ze="https://api.studio.nebius.ai";class fn extends V{constructor(){super("nebius",ze)}preparePayload(t){var i;const a=super.preparePayload(t),n=t.args.response_format;return(n==null?void 0:n.type)==="json_schema"&&((i=n.json_schema)!=null&&i.schema)&&(a.guided_json=n.json_schema.schema),a}}class gn extends le{constructor(){super("nebius",ze)}preparePayload(t){return{...t.args,model:t.model,prompt:t.args.inputs}}async getResponse(t){var a;if(typeof t=="object"&&"choices"in t&&Array.isArray(t==null?void 0:t.choices)&&t.choices.length>0&&typeof((a=t.choices[0])==null?void 0:a.text)=="string")return{generated_text:t.choices[0].text};throw new y("Received malformed response from Nebius text generation API")}}class hn extends Q{constructor(){super("nebius",ze)}preparePayload(t){return{...E(t.args,["inputs","parameters"]),...t.args.parameters,response_format:"b64_json",prompt:t.args.inputs,model:t.model}}makeRoute(){return"v1/images/generations"}async getResponse(t,a,n,i){if(typeof t=="object"&&"data"in t&&Array.isArray(t.data)&&t.data.length>0&&"b64_json"in t.data[0]&&typeof t.data[0].b64_json=="string"){if(i==="json")return{...t};const o=t.data[0].b64_json;return i==="url"?`data:image/jpeg;base64,${o}`:fetch(`data:image/jpeg;base64,${o}`).then(s=>s.blob())}throw new y("Received malformed response from Nebius text-to-image API")}}class bn extends Q{constructor(){super("nebius",ze)}preparePayload(t){return{input:t.args.inputs,model:t.model}}makeRoute(){return"v1/embeddings"}async getResponse(t){return t.data.map(a=>a.embedding)}}const rt="https://api.novita.ai";class yn extends le{constructor(){super("novita",rt)}makeRoute(){return"/v3/openai/chat/completions"}}class vn extends V{constructor(){super("novita",rt)}makeRoute(){return"/v3/openai/chat/completions"}}class wn extends Q{constructor(){super("novita",rt)}makeRoute(t){return`/v3/async/${t.model}`}preparePayload(t){const{num_inference_steps:a,...n}=t.args.parameters??{};return{...E(t.args,["inputs","parameters"]),...n,steps:a,prompt:t.args.inputs}}async getResponse(t,a,n){if(!a||!n)throw new q("URL and headers are required for text-to-video task");const i=t.task_id;if(!i)throw new y("Received malformed response from Novita text-to-video API: no task ID found in the response");const o=new URL(a),r=`${`${o.protocol}//${o.host}${o.host==="router.huggingface.co"?"/novita":""}`}/v3/async/task-result?task_id=${i}`;let c="",l;for(;c!=="TASK_STATUS_SUCCEED"&&c!=="TASK_STATUS_FAILED";){await Fe(500);const g=await fetch(r,{headers:n});if(!g.ok)throw new F("Failed to fetch task result",{url:r,method:"GET",headers:n},{requestId:g.headers.get("x-request-id")??"",status:g.status,body:await g.text()});try{if(l=await g.json(),l&&typeof l=="object"&&"task"in l&&l.task&&typeof l.task=="object"&&"status"in l.task&&typeof l.task.status=="string")c=l.task.status;else throw new y("Received malformed response from Novita text-to-video API: failed to get task status")}catch{throw new y("Received malformed response from Novita text-to-video API: failed to parse task result")}}if(c==="TASK_STATUS_FAILED")throw new y("Novita text-to-video task failed");if(typeof l=="object"&&l&&"videos"in l&&typeof l.videos=="object"&&l.videos&&Array.isArray(l.videos)&&l.videos.length>0&&"video_url"in l.videos[0]&&typeof l.videos[0].video_url=="string"&&me(l.videos[0].video_url))return await(await fetch(l.videos[0].video_url)).blob();throw new y(`Received malformed response from Novita text-to-video API: expected { videos: [{ video_url: string }] } format, got instead: ${JSON.stringify(l)}`)}}const Wt="https://inference.api.nscale.com";class _n extends V{constructor(){super("nscale",Wt)}}class xn extends Q{constructor(){super("nscale",Wt)}preparePayload(t){return{...E(t.args,["inputs","parameters"]),...t.args.parameters,response_format:"b64_json",prompt:t.args.inputs,model:t.model}}makeRoute(){return"v1/images/generations"}async getResponse(t,a,n,i){if(typeof t=="object"&&"data"in t&&Array.isArray(t.data)&&t.data.length>0&&"b64_json"in t.data[0]&&typeof t.data[0].b64_json=="string"){if(i==="json")return{...t};const o=t.data[0].b64_json;return i==="url"?`data:image/jpeg;base64,${o}`:fetch(`data:image/jpeg;base64,${o}`).then(s=>s.blob())}throw new y("Received malformed response from Nscale text-to-image API")}}const kn="https://api.openai.com";class An extends V{constructor(){super("openai",kn,!0)}}const Xt="https://oai.endpoints.kepler.ai.cloud.ovh.net";class In extends V{constructor(){super("ovhcloud",Xt)}}class Tn extends le{constructor(){super("ovhcloud",Xt)}preparePayload(t){return{model:t.model,...E(t.args,["inputs","parameters"]),...t.args.parameters?{max_tokens:t.args.parameters.max_new_tokens,...E(t.args.parameters,"max_new_tokens")}:void 0,prompt:t.args.inputs}}async getResponse(t){if(typeof t=="object"&&"choices"in t&&Array.isArray(t==null?void 0:t.choices)&&typeof(t==null?void 0:t.model)=="string")return{generated_text:t.choices[0].text};throw new y("Received malformed response from OVHcloud text generation API")}}class Sn extends V{constructor(){super("publicai","https://api.publicai.co")}}class Ce extends Q{constructor(t){super("replicate",t||"https://api.replicate.com")}makeRoute(t){return t.model.includes(":")?"v1/predictions":`v1/models/${t.model}/predictions`}preparePayload(t){return{input:{...E(t.args,["inputs","parameters"]),...t.args.parameters,prompt:t.args.inputs},version:t.model.includes(":")?t.model.split(":")[1]:void 0}}prepareHeaders(t,a){const n={Authorization:`Bearer ${t.accessToken}`,Prefer:"wait"};return a||(n["Content-Type"]="application/json"),n}makeUrl(t){const a=this.makeBaseUrl(t);return t.model.includes(":")?`${a}/v1/predictions`:`${a}/v1/models/${t.model}/predictions`}}class En extends Ce{preparePayload(t){var a;return{input:{...E(t.args,["inputs","parameters"]),...t.args.parameters,prompt:t.args.inputs,lora_weights:((a=t.mapping)==null?void 0:a.adapter)==="lora"&&t.mapping.adapterWeightsPath?`https://huggingface.co/${t.mapping.hfModelId}`:void 0},version:t.model.includes(":")?t.model.split(":")[1]:void 0}}async getResponse(t,a,n,i){if(typeof t=="object"&&"output"in t&&Array.isArray(t.output)&&t.output.length>0&&typeof t.output[0]=="string")return i==="json"?{...t}:i==="url"?t.output[0]:await(await fetch(t.output[0])).blob();throw new y("Received malformed response from Replicate text-to-image API")}}class Pn extends Ce{preparePayload(t){const a=super.preparePayload(t),n=a.input;if(typeof n=="object"&&n!==null&&"prompt"in n){const i=n;i.text=i.prompt,delete i.prompt}return a}async getResponse(t){if(t instanceof Blob)return t;if(t&&typeof t=="object"&&"output"in t){if(typeof t.output=="string")return await(await fetch(t.output)).blob();if(Array.isArray(t.output))return await(await fetch(t.output[0])).blob()}throw new y("Received malformed response from Replicate text-to-speech API")}}class Cn extends Ce{async getResponse(t){if(typeof t=="object"&&t&&"output"in t&&typeof t.output=="string"&&me(t.output))return await(await fetch(t.output)).blob();throw new y("Received malformed response from Replicate text-to-video API")}}class Dn extends Ce{preparePayload(t){return{input:{...E(t.args,["inputs","parameters"]),...t.args.parameters,audio:t.args.inputs},version:t.model.includes(":")?t.model.split(":")[1]:void 0}}async preparePayloadAsync(t){const a="data"in t&&t.data instanceof Blob?t.data:"inputs"in t?t.inputs:void 0;if(!a||!(a instanceof Blob))throw new Error("Audio input must be a Blob");const n=new Uint8Array(await a.arrayBuffer()),i=X(n),o=`data:${a.type||"audio/wav"};base64,${i}`;return{..."data"in t?E(t,"data"):E(t,"inputs"),inputs:o}}async getResponse(t){if(typeof(t==null?void 0:t.output)=="string")return{text:t.output};if(Array.isArray(t==null?void 0:t.output)&&typeof t.output[0]=="string")return{text:t.output[0]};const a=t==null?void 0:t.output;if(a&&typeof a=="object"){if(typeof a.transcription=="string")return{text:a.transcription};if(typeof a.translation=="string")return{text:a.translation};if(typeof a.txt_file=="string")return{text:await(await fetch(a.txt_file)).text()}}throw new y("Received malformed response from Replicate automatic-speech-recognition API")}}class Rn extends Ce{preparePayload(t){var a;return{input:{...E(t.args,["inputs","parameters"]),...t.args.parameters,input_image:t.args.inputs,lora_weights:((a=t.mapping)==null?void 0:a.adapter)==="lora"&&t.mapping.adapterWeightsPath?`https://huggingface.co/${t.mapping.hfModelId}`:void 0},version:t.model.includes(":")?t.model.split(":")[1]:void 0}}async preparePayloadAsync(t){const{inputs:a,...n}=t,i=new Uint8Array(await a.arrayBuffer()),o=X(i),s=`data:${a.type||"image/jpeg"};base64,${o}`;return{...n,inputs:s}}async getResponse(t){if(typeof t=="object"&&t&&"output"in t&&Array.isArray(t.output)&&t.output.length>0&&typeof t.output[0]=="string")return await(await fetch(t.output[0])).blob();if(typeof t=="object"&&t&&"output"in t&&typeof t.output=="string"&&me(t.output))return await(await fetch(t.output)).blob();throw new y("Received malformed response from Replicate image-to-image API")}}class $n extends V{constructor(){super("sambanova","https://api.sambanova.ai")}preparePayload(t){const a=t.args.response_format;return(a==null?void 0:a.type)==="json_schema"&&a.json_schema&&(a.json_schema.strict??!0)&&(a.json_schema.strict=!1),super.preparePayload(t)}}class jn extends Q{constructor(){super("sambanova","https://api.sambanova.ai")}makeRoute(){return"/v1/embeddings"}async getResponse(t){if(typeof t=="object"&&"data"in t&&Array.isArray(t.data))return t.data.map(a=>a.embedding);throw new y("Received malformed response from Sambanova feature-extraction (embeddings) API")}preparePayload(t){return{model:t.model,input:t.args.inputs,...t.args}}}const lt="https://api.scaleway.ai";class Ln extends V{constructor(){super("scaleway",lt)}}class Mn extends le{constructor(){super("scaleway",lt)}preparePayload(t){return{model:t.model,...t.args,prompt:t.args.inputs}}async getResponse(t){if(typeof t=="object"&&t!==null&&"choices"in t&&Array.isArray(t.choices)&&t.choices.length>0){const a=t.choices[0];if(typeof a=="object"&&a&&"text"in a&&a.text&&typeof a.text=="string")return{generated_text:a.text}}throw new y("Received malformed response from Scaleway text generation API")}}class Nn extends Q{constructor(){super("scaleway",lt)}preparePayload(t){return{input:t.args.inputs,model:t.model}}makeRoute(){return"v1/embeddings"}async getResponse(t){return t.data.map(a=>a.embedding)}}const ct="https://api.together.xyz";class Un extends V{constructor(){super("together",ct)}preparePayload(t){var i;const a=super.preparePayload(t),n=a.response_format;return(n==null?void 0:n.type)==="json_schema"&&((i=n==null?void 0:n.json_schema)!=null&&i.schema)&&(a.response_format={type:"json_schema",schema:n.json_schema.schema}),a}}class Bn extends le{constructor(){super("together",ct)}preparePayload(t){return{model:t.model,...t.args,prompt:t.args.inputs}}async getResponse(t){if(typeof t=="object"&&"choices"in t&&Array.isArray(t==null?void 0:t.choices)&&typeof(t==null?void 0:t.model)=="string")return{generated_text:t.choices[0].text};throw new y("Received malformed response from Together text generation API")}}class On extends Q{constructor(){super("together",ct)}makeRoute(){return"v1/images/generations"}preparePayload(t){return{...E(t.args,["inputs","parameters"]),...t.args.parameters,prompt:t.args.inputs,response_format:"base64",model:t.model}}async getResponse(t,a,n,i){if(typeof t=="object"&&"data"in t&&Array.isArray(t.data)&&t.data.length>0&&"b64_json"in t.data[0]&&typeof t.data[0].b64_json=="string"){if(i==="json")return{...t};const o=t.data[0].b64_json;return i==="url"?`data:image/jpeg;base64,${o}`:fetch(`data:image/jpeg;base64,${o}`).then(s=>s.blob())}throw new y("Received malformed response from Together text-to-image API")}}const De="https://api.wavespeed.ai";class Ke extends Q{constructor(t){super("wavespeed",t||De)}makeRoute(t){return`/api/v3/${t.model}`}preparePayload(t){var n;const a={...E(t.args,["inputs","parameters"]),...t.args.parameters,prompt:t.args.inputs};return((n=t.mapping)==null?void 0:n.adapter)==="lora"&&(a.loras=[{path:t.mapping.hfModelId,scale:1}]),a}async getResponse(t,a,n){var c;if(!a||!n)throw new q("Headers are required for WaveSpeed AI API calls");const i=new URL(a),o=new URL(t.data.urls.get).pathname,r=`${`${i.protocol}//${i.host}${i.host==="router.huggingface.co"?"/wavespeed":""}`}${o}`;for(;;){const l=await fetch(r,{headers:n});if(!l.ok)throw new F("Failed to fetch response status from WaveSpeed AI API",{url:r,method:"GET"},{requestId:l.headers.get("x-request-id")??"",status:l.status,body:await l.text()});const u=(await l.json()).data;switch(u.status){case"completed":{if(!((c=u.outputs)!=null&&c[0]))throw new y("Received malformed response from WaveSpeed AI API: No output URL in completed response");const v=await fetch(u.outputs[0]);if(!v.ok)throw new F("Failed to fetch generation output from WaveSpeed AI API",{url:u.outputs[0],method:"GET"},{requestId:v.headers.get("x-request-id")??"",status:v.status,body:await v.text()});return await v.blob()}case"failed":throw new y(u.error||"Task failed");default:{await Fe(500);continue}}}}}class qn extends Ke{constructor(){super(De)}}class Fn extends Ke{constructor(){super(De)}}class Hn extends Ke{constructor(){super(De)}async preparePayloadAsync(t){var a;return{...t,inputs:(a=t.parameters)==null?void 0:a.prompt,image:X(new Uint8Array(t.inputs instanceof ArrayBuffer?t.inputs:await t.inputs.arrayBuffer()))}}}class Vn extends Ke{constructor(){super(De)}async preparePayloadAsync(t){var a;return{...t,inputs:(a=t.parameters)==null?void 0:a.prompt,image:X(new Uint8Array(t.inputs instanceof ArrayBuffer?t.inputs:await t.inputs.arrayBuffer()))}}}const zn="https://api.z.ai";class Kn extends V{constructor(){super("zai-org",zn)}prepareHeaders(t,a){const n=super.prepareHeaders(t,a);return n["x-source-channel"]="hugging_face",n["accept-language"]="en-US,en",n}makeRoute(){return"/api/paas/v4/chat/completions"}}const Ge={baseten:{conversational:new za},"black-forest-labs":{"text-to-image":new Qa},cerebras:{conversational:new Ja},clarifai:{conversational:new Wa},cohere:{conversational:new Ya},"fal-ai":{"text-to-image":new Za,"text-to-speech":new nn,"text-to-video":new en,"image-to-image":new Ga,"automatic-speech-recognition":new an,"image-segmentation":new on,"image-to-video":new tn},"featherless-ai":{conversational:new sn,"text-generation":new rn},"hf-inference":{"text-to-image":new ga,conversational:new ha,"text-generation":new ba,"text-classification":new Pa,"question-answering":new Ca,"audio-classification":new ya,"automatic-speech-recognition":new va,"fill-mask":new Da,"feature-extraction":new xa,"image-classification":new ka,"image-segmentation":new Aa,"document-question-answering":new _a,"image-to-text":new Ia,"object-detection":new Sa,"audio-to-audio":new wa,"zero-shot-image-classification":new Ea,"zero-shot-classification":new ot,"image-to-image":new Ta,"sentence-similarity":new Ra,"table-question-answering":new Ue,"tabular-classification":new Na,"text-to-speech":new Ma,"token-classification":new $a,translation:new ja,summarization:new La,"visual-question-answering":new Ua,"tabular-regression":new Ba,"text-to-audio":new Oa},"fireworks-ai":{conversational:new ln},groq:{conversational:new dn,"text-generation":new cn},hyperbolic:{"text-to-image":new mn,conversational:new pn,"text-generation":new un},nebius:{"text-to-image":new hn,conversational:new fn,"text-generation":new gn,"feature-extraction":new bn},novita:{conversational:new vn,"text-generation":new yn,"text-to-video":new wn},nscale:{"text-to-image":new xn,conversational:new _n},openai:{conversational:new An},ovhcloud:{conversational:new In,"text-generation":new Tn},publicai:{conversational:new Sn},replicate:{"text-to-image":new En,"text-to-speech":new Pn,"text-to-video":new Cn,"image-to-image":new Rn,"automatic-speech-recognition":new Dn},sambanova:{conversational:new $n,"feature-extraction":new jn},scaleway:{conversational:new Ln,"text-generation":new Mn,"feature-extraction":new Nn},together:{"text-to-image":new On,conversational:new Un,"text-generation":new Bn},wavespeed:{"text-to-image":new qn,"text-to-video":new Fn,"image-to-image":new Hn,"image-to-video":new Vn},"zai-org":{conversational:new Kn}};function C(e,t){if(e==="hf-inference"&&!t||e==="auto")return new j;if(!t)throw new q("you need to provide a task name when using an external provider, e.g. 'text-to-image'");if(!(e in Ge))throw new q(`Provider '${e}' not supported. Available providers: ${Object.keys(Ge)}`);const a=Ge[e];if(!a||!(t in a))throw new q(`Task '${t}' not supported for provider '${e}'. Available tasks: ${Object.keys(a??{})}`);return a[t]}const Wn="4.13.0",Xn="@huggingface/inference";let et=null;async function fe(e,t,a){const{model:n}=e,i=t.provider,{task:o}=a??{};if(e.endpointUrl&&i!=="hf-inference")throw new q("Cannot use endpointUrl with a third-party provider.");if(n&&me(n))throw new q("Model URLs are no longer supported. Use endpointUrl instead.");if(e.endpointUrl)return xt(n??e.endpointUrl,t,e,void 0,a);if(!n&&!o)throw new q("No model provided, and no task has been specified.");const s=n??await Qn(o);if(t.clientSideRoutingOnly&&!n)throw new q(`Provider ${i} requires a model ID to be passed directly.`);const r=t.clientSideRoutingOnly?{provider:i,providerId:Yn(n,i),hfModelId:n,status:"live",task:o}:await Ha({modelId:s,task:o,provider:i,accessToken:e.accessToken},{fetch:a==null?void 0:a.fetch});if(!r)throw new q(`We have not been able to find inference provider information for model ${s}.`);return xt(r.providerId,t,e,r,a)}function xt(e,t,a,n,i){const{accessToken:o,endpointUrl:s,provider:r,model:c,...l}=a,g=t.provider,{includeCredentials:u,task:v,signal:$,billTo:N}=i??{},L=(()=>{if(t.clientSideRoutingOnly&&o&&o.startsWith("hf_"))throw new q(`Provider ${g} is closed-source and does not support HF tokens.`);return o?o.startsWith("hf_")?"hf-token":"provider-key":u==="include"?"credentials-include":"none"})(),G=s??e,Y=t.makeUrl({authMethod:L,model:G,task:v}),ye=t.prepareHeaders({accessToken:o,authMethod:L},"data"in a&&!!a.data);N&&(ye[pa]=N);const Re=[`${Xn}/${Wn}`,typeof navigator<"u"?navigator.userAgent:void 0].filter(Ye=>Ye!==void 0).join(" ");ye["User-Agent"]=Re;const Ae=t.makeBody({args:l,model:e,task:v,mapping:n});let ve;typeof u=="string"?ve=u:u===!0&&(ve="include");const $e={headers:ye,method:"POST",body:Ae,...ve?{credentials:ve}:void 0,signal:$};return{url:Y,info:$e}}async function Qn(e){et||(et=await Jn());const t=et[e];if(((t==null?void 0:t.models.length)??0)<=0)throw new q(`No default model defined for task ${e}, please define the model explicitly.`);return t.models[0].id}async function Jn(){const e=`${it}/api/tasks`,t=await fetch(e);if(!t.ok)throw new Se("Failed to load tasks definitions from Hugging Face Hub.",{url:e,method:"GET"},{requestId:t.headers.get("x-request-id")??"",status:t.status,body:await t.text()});return await t.json()}function Yn(e,t){if(!e.startsWith(`${t}/`))throw new q(`Models from ${t} must be prefixed by "${t}/". Got "${e}".`);return e.slice(t.length+1)}function Zn(e){let t,a,n,i=!1;return function(s){t===void 0?(t=s,a=0,n=-1):t=ei(t,s);const r=t.length;let c=0;for(;a<r;){i&&(t[a]===10&&(c=++a),i=!1);let l=-1;for(;a<r&&l===-1;++a)switch(t[a]){case 58:n===-1&&(n=a-c);break;case 13:i=!0;case 10:l=a;break}if(l===-1)break;e(t.subarray(c,l),n),c=a,n=-1}c===r?t=void 0:c!==0&&(t=t.subarray(c),a-=c)}}function Gn(e,t,a){let n=kt();const i=new TextDecoder;return function(s,r){if(s.length===0)a==null||a(n),n=kt();else if(r>0){const c=i.decode(s.subarray(0,r)),l=r+(s[r+1]===32?2:1),g=i.decode(s.subarray(l));switch(c){case"data":n.data=n.data?n.data+`
`+g:g;break;case"event":n.event=g;break;case"id":e(n.id=g);break;case"retry":{const u=parseInt(g,10);isNaN(u)||t(n.retry=u);break}}}}}function ei(e,t){const a=new Uint8Array(e.length+t.length);return a.set(e),a.set(t,e.length),a}function kt(){return{data:"",event:"",id:"",retry:void 0}}function ee(e){let t=null;if(e instanceof Blob||e instanceof ArrayBuffer)t="[Blob or ArrayBuffer]";else if(typeof e=="string")try{t=JSON.parse(e)}catch{t=e}return t.accessToken&&(t.accessToken="[REDACTED]"),t}async function R(e,t,a){var c;const{url:n,info:i}=await fe(e,t,a),o=await((a==null?void 0:a.fetch)??fetch)(n,i),s={url:n,info:i};if((a==null?void 0:a.retry_on_error)!==!1&&o.status===503)return R(e,t,a);if(!o.ok){const l=o.headers.get("Content-Type");if(["application/json","application/problem+json"].some(u=>l==null?void 0:l.startsWith(u))){const u=await o.json();throw[400,422,404,500].includes(o.status)&&(a!=null&&a.chatCompletion)?new F(`Provider ${e.provider} does not seem to support chat completion for model ${e.model} . Error: ${JSON.stringify(u.error)}`,{url:n,method:i.method??"GET",headers:i.headers,body:ee(i.body)},{requestId:o.headers.get("x-request-id")??"",status:o.status,body:u}):typeof u.error=="string"||typeof u.detail=="string"||typeof u.message=="string"?new F(`Failed to perform inference: ${u.error??u.detail??u.message}`,{url:n,method:i.method??"GET",headers:i.headers,body:ee(i.body)},{requestId:o.headers.get("x-request-id")??"",status:o.status,body:u}):new F("Failed to perform inference: an HTTP error occurred when requesting the provider.",{url:n,method:i.method??"GET",headers:i.headers,body:ee(i.body)},{requestId:o.headers.get("x-request-id")??"",status:o.status,body:u})}const g=l!=null&&l.startsWith("text/plain;")?await o.text():void 0;throw new F(`Failed to perform inference: ${g??"an HTTP error occurred when requesting the provider"}`,{url:n,method:i.method??"GET",headers:i.headers,body:ee(i.body)},{requestId:o.headers.get("x-request-id")??"",status:o.status,body:g??""})}return(c=o.headers.get("Content-Type"))!=null&&c.startsWith("application/json")?{data:await o.json(),requestContext:s}:{data:await o.blob(),requestContext:s}}async function*We(e,t,a){var g,u;const{url:n,info:i}=await fe({...e,stream:!0},t,a),o=await((a==null?void 0:a.fetch)??fetch)(n,i);if((a==null?void 0:a.retry_on_error)!==!1&&o.status===503)return yield*We(e,t,a);if(!o.ok){if((g=o.headers.get("Content-Type"))!=null&&g.startsWith("application/json")){const v=await o.json();if([400,422,404,500].includes(o.status)&&(a!=null&&a.chatCompletion))throw new F(`Provider ${e.provider} does not seem to support chat completion for model ${e.model} . Error: ${JSON.stringify(v.error)}`,{url:n,method:i.method??"GET",headers:i.headers,body:ee(i.body)},{requestId:o.headers.get("x-request-id")??"",status:o.status,body:v});if(typeof v.error=="string")throw new F(`Failed to perform inference: ${v.error}`,{url:n,method:i.method??"GET",headers:i.headers,body:ee(i.body)},{requestId:o.headers.get("x-request-id")??"",status:o.status,body:v});if(v.error&&"message"in v.error&&typeof v.error.message=="string")throw new F(`Failed to perform inference: ${v.error.message}`,{url:n,method:i.method??"GET",headers:i.headers,body:ee(i.body)},{requestId:o.headers.get("x-request-id")??"",status:o.status,body:v});if(typeof v.message=="string")throw new F(`Failed to perform inference: ${v.message}`,{url:n,method:i.method??"GET",headers:i.headers,body:ee(i.body)},{requestId:o.headers.get("x-request-id")??"",status:o.status,body:v})}throw new F("Failed to perform inference: an HTTP error occurred when requesting the provider.",{url:n,method:i.method??"GET",headers:i.headers,body:ee(i.body)},{requestId:o.headers.get("x-request-id")??"",status:o.status,body:""})}if(!((u=o.headers.get("content-type"))!=null&&u.startsWith("text/event-stream")))throw new F("Failed to perform inference: server does not support event stream content type, it returned "+o.headers.get("content-type"),{url:n,method:i.method??"GET",headers:i.headers,body:ee(i.body)},{requestId:o.headers.get("x-request-id")??"",status:o.status,body:""});if(!o.body)return;const s=o.body.getReader();let r=[];const l=Zn(Gn(()=>{},()=>{},v=>{r.push(v)}));try{for(;;){const{done:v,value:$}=await s.read();if(v)return;l($);for(const N of r)if(N.data.length>0){if(N.data==="[DONE]")return;const L=JSON.parse(N.data);if(typeof L=="object"&&L!==null&&"error"in L){const G=typeof L.error=="string"?L.error:typeof L.error=="object"&&L.error&&"message"in L.error&&typeof L.error.message=="string"?L.error.message:JSON.stringify(L.error);throw new F(`Failed to perform inference: an occurred while streaming the response: ${G}`,{url:n,method:i.method??"GET",headers:i.headers,body:ee(i.body)},{requestId:o.headers.get("x-request-id")??"",status:o.status,body:L})}yield L}r=[]}}finally{s.releaseLock()}}async function ti(e,t){Pe().warn("The request method is deprecated and will be removed in a future version of huggingface.js. Use specific task functions instead.");const n=await P(e.provider,e.model,e.endpointUrl),i=C(n,t==null?void 0:t.task);return(await R(e,i,t)).data}async function*ai(e,t){Pe().warn("The streamingRequest method is deprecated and will be removed in a future version of huggingface.js. Use specific task functions instead.");const n=await P(e.provider,e.model,e.endpointUrl),i=C(n,t==null?void 0:t.task);yield*We(e,i,t)}function Qt(e){return"data"in e?e:{...E(e,"inputs"),data:e.inputs}}async function ni(e,t){const a=await P(e.provider,e.model,e.endpointUrl),n=C(a,"audio-classification"),i=Qt(e),{data:o}=await R(i,n,{...t,task:"audio-classification"});return n.getResponse(o)}async function ii(e,t){const a="inputs"in e?e.model:void 0,n=await P(e.provider,a),i=C(n,"audio-to-audio"),o=Qt(e),{data:s}=await R(o,i,{...t,task:"audio-to-audio"});return i.getResponse(s)}async function oi(e,t){const a=await P(e.provider,e.model,e.endpointUrl),n=C(a,"automatic-speech-recognition"),i=await n.preparePayloadAsync(e),{data:o}=await R(i,n,{...t,task:"automatic-speech-recognition"});return n.getResponse(o)}async function si(e,t){const a=await P(e.provider,e.model,e.endpointUrl),n=C(a,"text-to-speech"),{data:i}=await R(e,n,{...t,task:"text-to-speech"});return n.getResponse(i)}function dt(e){return"data"in e?e:{...E(e,"inputs"),data:e.inputs}}async function ri(e,t){const a=await P(e.provider,e.model,e.endpointUrl),n=C(a,"image-classification"),i=dt(e),{data:o}=await R(i,n,{...t,task:"image-classification"});return n.getResponse(o)}async function li(e,t){const a=await P(e.provider,e.model,e.endpointUrl),n=C(a,"image-segmentation"),i=await n.preparePayloadAsync(e),{data:o}=await R(i,n,{...t,task:"image-segmentation"}),{url:s,info:r}=await fe(e,n,{...t,task:"image-segmentation"});return n.getResponse(o,s,r.headers)}async function ci(e,t){const a=await P(e.provider,e.model,e.endpointUrl),n=C(a,"image-to-image"),i=await n.preparePayloadAsync(e),{data:o}=await R(i,n,{...t,task:"image-to-image"}),{url:s,info:r}=await fe(e,n,{...t,task:"image-to-image"});return n.getResponse(o,s,r.headers)}async function di(e,t){const a=await P(e.provider,e.model,e.endpointUrl),n=C(a,"image-to-text"),i=dt(e),{data:o}=await R(i,n,{...t,task:"image-to-text"});return n.getResponse(o[0])}async function pi(e,t){const a=await P(e.provider,e.model,e.endpointUrl),n=C(a,"image-to-video"),i=await n.preparePayloadAsync(e),{data:o}=await R(i,n,{...t,task:"image-to-video"}),{url:s,info:r}=await fe(e,n,{...t,task:"image-to-video"});return n.getResponse(o,s,r.headers)}async function ui(e,t){const a=await P(e.provider,e.model,e.endpointUrl),n=C(a,"object-detection"),i=dt(e),{data:o}=await R(i,n,{...t,task:"object-detection"});return n.getResponse(o)}async function mi(e,t){const a=await P(e.provider,e.model,e.endpointUrl),n=C(a,"text-to-image"),{data:i}=await R(e,n,{...t,task:"text-to-image"}),{url:o,info:s}=await fe(e,n,{...t,task:"text-to-image"});return n.getResponse(i,o,s.headers,t==null?void 0:t.outputType)}async function fi(e,t){const a=await P(e.provider,e.model,e.endpointUrl),n=C(a,"text-to-video"),{data:i}=await R(e,n,{...t,task:"text-to-video"}),{url:o,info:s}=await fe(e,n,{...t,task:"text-to-video"});return n.getResponse(i,o,s.headers)}async function gi(e){return e.inputs instanceof Blob?{...e,inputs:{image:X(new Uint8Array(await e.inputs.arrayBuffer()))}}:{...e,inputs:{image:X(new Uint8Array(e.inputs.image instanceof ArrayBuffer?e.inputs.image:await e.inputs.image.arrayBuffer()))}}}async function hi(e,t){const a=await P(e.provider,e.model,e.endpointUrl),n=C(a,"zero-shot-image-classification"),i=await gi(e),{data:o}=await R(i,n,{...t,task:"zero-shot-image-classification"});return n.getResponse(o)}async function bi(e,t){let a;if(!e.provider||e.provider==="auto")a=new ma;else{const i=await P(e.provider,e.model,e.endpointUrl);a=C(i,"conversational")}const{data:n}=await R(e,a,{...t,task:"conversational"});return a.getResponse(n)}async function*yi(e,t){const a=await P(e.provider,e.model,e.endpointUrl),n=C(a,"conversational");yield*We(e,n,{...t,task:"conversational"})}async function vi(e,t){const a=await P(e.provider,e.model,e.endpointUrl),n=C(a,"feature-extraction"),{data:i}=await R(e,n,{...t,task:"feature-extraction"});return n.getResponse(i)}async function wi(e,t){const a=await P(e.provider,e.model,e.endpointUrl),n=C(a,"fill-mask"),{data:i}=await R(e,n,{...t,task:"fill-mask"});return n.getResponse(i)}async function _i(e,t){const a=await P(e.provider,e.model,e.endpointUrl),n=C(a,"question-answering"),{data:i}=await R(e,n,{...t,task:"question-answering"});return n.getResponse(i)}async function xi(e,t){const a=await P(e.provider,e.model,e.endpointUrl),n=C(a,"sentence-similarity"),{data:i}=await R(e,n,{...t,task:"sentence-similarity"});return n.getResponse(i)}async function ki(e,t){const a=await P(e.provider,e.model,e.endpointUrl),n=C(a,"summarization"),{data:i}=await R(e,n,{...t,task:"summarization"});return n.getResponse(i)}async function Ai(e,t){const a=await P(e.provider,e.model,e.endpointUrl),n=C(a,"table-question-answering"),{data:i}=await R(e,n,{...t,task:"table-question-answering"});return n.getResponse(i)}async function Ii(e,t){const a=await P(e.provider,e.model,e.endpointUrl),n=C(a,"text-classification"),{data:i}=await R(e,n,{...t,task:"text-classification"});return n.getResponse(i)}async function Ti(e,t){const a=await P(e.provider,e.model,e.endpointUrl),n=C(a,"text-generation"),{data:i}=await R(e,n,{...t,task:"text-generation"});return n.getResponse(i)}async function*Si(e,t){const a=await P(e.provider,e.model,e.endpointUrl),n=C(a,"text-generation");yield*We(e,n,{...t,task:"text-generation"})}async function Ei(e,t){const a=await P(e.provider,e.model,e.endpointUrl),n=C(a,"token-classification"),{data:i}=await R(e,n,{...t,task:"token-classification"});return n.getResponse(i)}async function Pi(e,t){const a=await P(e.provider,e.model,e.endpointUrl),n=C(a,"translation"),{data:i}=await R(e,n,{...t,task:"translation"});return n.getResponse(i)}async function Ci(e,t){const a=await P(e.provider,e.model,e.endpointUrl),n=C(a,"zero-shot-classification"),{data:i}=await R(e,n,{...t,task:"zero-shot-classification"});return n.getResponse(i)}async function Di(e,t){const a=await P(e.provider,e.model,e.endpointUrl),n=C(a,"document-question-answering"),i={...e,inputs:{question:e.inputs.question,image:X(new Uint8Array(await e.inputs.image.arrayBuffer()))}},{data:o}=await R(i,n,{...t,task:"document-question-answering"});return n.getResponse(o)}async function Ri(e,t){const a=await P(e.provider,e.model,e.endpointUrl),n=C(a,"visual-question-answering"),i={...e,inputs:{question:e.inputs.question,image:X(new Uint8Array(await e.inputs.image.arrayBuffer()))}},{data:o}=await R(i,n,{...t,task:"visual-question-answering"});return n.getResponse(o)}async function $i(e,t){const a=await P(e.provider,e.model,e.endpointUrl),n=C(a,"tabular-classification"),{data:i}=await R(e,n,{...t,task:"tabular-classification"});return n.getResponse(i)}async function ji(e,t){const a=await P(e.provider,e.model,e.endpointUrl),n=C(a,"tabular-regression"),{data:i}=await R(e,n,{...t,task:"tabular-regression"});return n.getResponse(i)}const Li=Object.freeze(Object.defineProperty({__proto__:null,audioClassification:ni,audioToAudio:ii,automaticSpeechRecognition:oi,chatCompletion:bi,chatCompletionStream:yi,documentQuestionAnswering:Di,featureExtraction:vi,fillMask:wi,imageClassification:ri,imageSegmentation:li,imageToImage:ci,imageToText:di,imageToVideo:pi,objectDetection:ui,questionAnswering:_i,request:ti,sentenceSimilarity:xi,streamingRequest:ai,summarization:ki,tableQuestionAnswering:Ai,tabularClassification:$i,tabularRegression:ji,textClassification:Ii,textGeneration:Ti,textGenerationStream:Si,textToImage:mi,textToSpeech:si,textToVideo:fi,tokenClassification:Ei,translation:Pi,visualQuestionAnswering:Ri,zeroShotClassification:Ci,zeroShotImageClassification:hi},Symbol.toStringTag,{value:"Module"}));function Mi(e){return Object.entries(e)}class pt{constructor(t="",a={}){b(this,"accessToken");b(this,"defaultOptions");this.accessToken=t,this.defaultOptions=a;for(const[n,i]of Mi(Li))Object.defineProperty(this,n,{enumerable:!1,value:(o,s)=>i({endpointUrl:a.endpointUrl,accessToken:t,...o},{...E(a,["endpointUrl"]),...s})})}endpoint(t){return new pt(this.accessToken,{...this.defaultOptions,endpointUrl:t})}}class Ni extends pt{}var p=Object.freeze({Text:"Text",NumericLiteral:"NumericLiteral",StringLiteral:"StringLiteral",Identifier:"Identifier",Equals:"Equals",OpenParen:"OpenParen",CloseParen:"CloseParen",OpenStatement:"OpenStatement",CloseStatement:"CloseStatement",OpenExpression:"OpenExpression",CloseExpression:"CloseExpression",OpenSquareBracket:"OpenSquareBracket",CloseSquareBracket:"CloseSquareBracket",OpenCurlyBracket:"OpenCurlyBracket",CloseCurlyBracket:"CloseCurlyBracket",Comma:"Comma",Dot:"Dot",Colon:"Colon",Pipe:"Pipe",CallOperator:"CallOperator",AdditiveBinaryOperator:"AdditiveBinaryOperator",MultiplicativeBinaryOperator:"MultiplicativeBinaryOperator",ComparisonBinaryOperator:"ComparisonBinaryOperator",UnaryOperator:"UnaryOperator",Comment:"Comment"}),re=class{constructor(e,t){this.value=e,this.type=t}};function At(e){return/\w/.test(e)}function Ie(e){return/[0-9]/.test(e)}var Ui=[["{%",p.OpenStatement],["%}",p.CloseStatement],["{{",p.OpenExpression],["}}",p.CloseExpression],["(",p.OpenParen],[")",p.CloseParen],["{",p.OpenCurlyBracket],["}",p.CloseCurlyBracket],["[",p.OpenSquareBracket],["]",p.CloseSquareBracket],[",",p.Comma],[".",p.Dot],[":",p.Colon],["|",p.Pipe],["<=",p.ComparisonBinaryOperator],[">=",p.ComparisonBinaryOperator],["==",p.ComparisonBinaryOperator],["!=",p.ComparisonBinaryOperator],["<",p.ComparisonBinaryOperator],[">",p.ComparisonBinaryOperator],["+",p.AdditiveBinaryOperator],["-",p.AdditiveBinaryOperator],["~",p.AdditiveBinaryOperator],["*",p.MultiplicativeBinaryOperator],["/",p.MultiplicativeBinaryOperator],["%",p.MultiplicativeBinaryOperator],["=",p.Equals]],Bi=new Map([["n",`
`],["t","	"],["r","\r"],["b","\b"],["f","\f"],["v","\v"],["'","'"],['"','"'],["\\","\\"]]);function Oi(e,t={}){return e.endsWith(`
`)&&(e=e.slice(0,-1)),t.lstrip_blocks&&(e=e.replace(/^[ \t]*({[#%-])/gm,"$1")),t.trim_blocks&&(e=e.replace(/([#%-]})\n/g,"$1")),e.replace(/-%}\s*/g,"%}").replace(/\s*{%-/g,"{%").replace(/-}}\s*/g,"}}").replace(/\s*{{-/g,"{{").replace(/-#}\s*/g,"#}").replace(/\s*{#-/g,"{#").replace(/{%\s*(end)?generation\s*%}/gs,"")}function qi(e,t={}){var r,c;const a=[],n=Oi(e,t);let i=0,o=0;const s=l=>{let g="";for(;l(n[i]);){if(n[i]==="\\"){if(++i,i>=n.length)throw new SyntaxError("Unexpected end of input");const u=n[i++],v=Bi.get(u);if(v===void 0)throw new SyntaxError(`Unexpected escaped character: ${u}`);g+=v;continue}if(g+=n[i++],i>=n.length)throw new SyntaxError("Unexpected end of input")}return g};e:for(;i<n.length;){const l=(r=a.at(-1))==null?void 0:r.type;if(l===void 0||l===p.CloseStatement||l===p.CloseExpression||l===p.Comment){let u="";for(;i<n.length&&!(n[i]==="{"&&(n[i+1]==="%"||n[i+1]==="{"||n[i+1]==="#"));)u+=n[i++];if(u.length>0){a.push(new re(u,p.Text));continue}}if(n[i]==="{"&&n[i+1]==="#"){i+=2;let u="";for(;n[i]!=="#"||n[i+1]!=="}";){if(i+2>=n.length)throw new SyntaxError("Missing end of comment tag");u+=n[i++]}a.push(new re(u,p.Comment)),i+=2;continue}s(u=>/\s/.test(u));const g=n[i];if(g==="-"||g==="+"){const u=(c=a.at(-1))==null?void 0:c.type;if(u===p.Text||u===void 0)throw new SyntaxError(`Unexpected character: ${g}`);switch(u){case p.Identifier:case p.NumericLiteral:case p.StringLiteral:case p.CloseParen:case p.CloseSquareBracket:break;default:{++i;const v=s(Ie);a.push(new re(`${g}${v}`,v.length>0?p.NumericLiteral:p.UnaryOperator));continue}}}for(const[u,v]of Ui){if(u==="}}"&&o>0)continue;if(n.slice(i,i+u.length)===u){a.push(new re(u,v)),v===p.OpenExpression?o=0:v===p.OpenCurlyBracket?++o:v===p.CloseCurlyBracket&&--o,i+=u.length;continue e}}if(g==="'"||g==='"'){++i;const u=s(v=>v!==g);a.push(new re(u,p.StringLiteral)),++i;continue}if(Ie(g)){let u=s(Ie);if(n[i]==="."&&Ie(n[i+1])){++i;const v=s(Ie);u=`${u}.${v}`}a.push(new re(u,p.NumericLiteral));continue}if(At(g)){const u=s(At);a.push(new re(u,p.Identifier));continue}throw new SyntaxError(`Unexpected character: ${g}`)}return a}var ae=class{constructor(){b(this,"type","Statement")}},Fi=class extends ae{constructor(t){super();b(this,"type","Program");this.body=t}},Hi=class extends ae{constructor(t,a,n){super();b(this,"type","If");this.test=t,this.body=a,this.alternate=n}},Vi=class extends ae{constructor(t,a,n,i){super();b(this,"type","For");this.loopvar=t,this.iterable=a,this.body=n,this.defaultBlock=i}},zi=class extends ae{constructor(){super(...arguments);b(this,"type","Break")}},Ki=class extends ae{constructor(){super(...arguments);b(this,"type","Continue")}},Wi=class extends ae{constructor(t,a,n){super();b(this,"type","Set");this.assignee=t,this.value=a,this.body=n}},Xi=class extends ae{constructor(t,a,n){super();b(this,"type","Macro");this.name=t,this.args=a,this.body=n}},Qi=class extends ae{constructor(t){super();b(this,"type","Comment");this.value=t}},Z=class extends ae{constructor(){super(...arguments);b(this,"type","Expression")}},Ji=class extends Z{constructor(t,a,n){super();b(this,"type","MemberExpression");this.object=t,this.property=a,this.computed=n}},It=class extends Z{constructor(t,a){super();b(this,"type","CallExpression");this.callee=t,this.args=a}},we=class extends Z{constructor(t){super();b(this,"type","Identifier");this.value=t}},_e=class extends Z{constructor(t){super();b(this,"type","Literal");this.value=t}},Yi=class extends _e{constructor(){super(...arguments);b(this,"type","IntegerLiteral")}},Zi=class extends _e{constructor(){super(...arguments);b(this,"type","FloatLiteral")}},Tt=class extends _e{constructor(){super(...arguments);b(this,"type","StringLiteral")}},Gi=class extends _e{constructor(){super(...arguments);b(this,"type","ArrayLiteral")}},St=class extends _e{constructor(){super(...arguments);b(this,"type","TupleLiteral")}},eo=class extends _e{constructor(){super(...arguments);b(this,"type","ObjectLiteral")}},Te=class extends Z{constructor(t,a,n){super();b(this,"type","BinaryExpression");this.operator=t,this.left=a,this.right=n}},to=class extends Z{constructor(t,a){super();b(this,"type","FilterExpression");this.operand=t,this.filter=a}},ao=class extends ae{constructor(t,a){super();b(this,"type","FilterStatement");this.filter=t,this.body=a}},no=class extends Z{constructor(t,a){super();b(this,"type","SelectExpression");this.lhs=t,this.test=a}},io=class extends Z{constructor(t,a,n){super();b(this,"type","TestExpression");this.operand=t,this.negate=a,this.test=n}},oo=class extends Z{constructor(t,a){super();b(this,"type","UnaryExpression");this.operator=t,this.argument=a}},so=class extends Z{constructor(t=void 0,a=void 0,n=void 0){super();b(this,"type","SliceExpression");this.start=t,this.stop=a,this.step=n}},ro=class extends Z{constructor(t,a){super();b(this,"type","KeywordArgumentExpression");this.key=t,this.value=a}},lo=class extends Z{constructor(t){super();b(this,"type","SpreadExpression");this.argument=t}},co=class extends ae{constructor(t,a,n){super();b(this,"type","CallStatement");this.call=t,this.callerArgs=a,this.body=n}},po=class extends Z{constructor(t,a,n){super();b(this,"type","Ternary");this.condition=t,this.trueExpr=a,this.falseExpr=n}};function uo(e){const t=new Fi([]);let a=0;function n(m,f){const h=e[a++];if(!h||h.type!==m)throw new Error(`Parser Error: ${f}. ${h.type} !== ${m}.`);return h}function i(m){if(!c(m))throw new SyntaxError(`Expected ${m}`);++a}function o(){switch(e[a].type){case p.Comment:return new Qi(e[a++].value);case p.Text:return l();case p.OpenStatement:return g();case p.OpenExpression:return u();default:throw new SyntaxError(`Unexpected token type: ${e[a].type}`)}}function s(...m){return a+m.length<=e.length&&m.every((f,h)=>f===e[a+h].type)}function r(...m){var f,h,B;return((f=e[a])==null?void 0:f.type)===p.OpenStatement&&((h=e[a+1])==null?void 0:h.type)===p.Identifier&&m.includes((B=e[a+1])==null?void 0:B.value)}function c(...m){return a+m.length<=e.length&&m.every((f,h)=>e[a+h].type==="Identifier"&&f===e[a+h].value)}function l(){return new Tt(n(p.Text,"Expected text token").value)}function g(){if(n(p.OpenStatement,"Expected opening statement token"),e[a].type!==p.Identifier)throw new SyntaxError(`Unknown statement, got ${e[a].type}`);const m=e[a].value;let f;switch(m){case"set":++a,f=v();break;case"if":++a,f=$(),n(p.OpenStatement,"Expected {% token"),i("endif"),n(p.CloseStatement,"Expected %} token");break;case"macro":++a,f=N(),n(p.OpenStatement,"Expected {% token"),i("endmacro"),n(p.CloseStatement,"Expected %} token");break;case"for":++a,f=G(),n(p.OpenStatement,"Expected {% token"),i("endfor"),n(p.CloseStatement,"Expected %} token");break;case"call":{++a;let h=null;s(p.OpenParen)&&(h=Le());const B=se();if(B.type!=="Identifier")throw new SyntaxError("Expected identifier following call statement");const ra=Le();n(p.CloseStatement,"Expected closing statement token");const yt=[];for(;!r("endcall");)yt.push(o());n(p.OpenStatement,"Expected '{%'"),i("endcall"),n(p.CloseStatement,"Expected closing statement token");const la=new It(B,ra);f=new co(la,h,yt);break}case"break":++a,n(p.CloseStatement,"Expected closing statement token"),f=new zi;break;case"continue":++a,n(p.CloseStatement,"Expected closing statement token"),f=new Ki;break;case"filter":{++a;let h=se();h instanceof we&&s(p.OpenParen)&&(h=je(h)),n(p.CloseStatement,"Expected closing statement token");const B=[];for(;!r("endfilter");)B.push(o());n(p.OpenStatement,"Expected '{%'"),i("endfilter"),n(p.CloseStatement,"Expected '%}'"),f=new ao(h,B);break}default:throw new SyntaxError(`Unknown statement type: ${m}`)}return f}function u(){n(p.OpenExpression,"Expected opening expression token");const m=Y();return n(p.CloseExpression,"Expected closing expression token"),m}function v(){const m=L();let f=null;const h=[];if(s(p.Equals))++a,f=L();else{for(n(p.CloseStatement,"Expected %} token");!r("endset");)h.push(o());n(p.OpenStatement,"Expected {% token"),i("endset")}return n(p.CloseStatement,"Expected closing statement token"),new Wi(m,f,h)}function $(){const m=Y();n(p.CloseStatement,"Expected closing statement token");const f=[],h=[];for(;!r("elif","else","endif");)f.push(o());if(r("elif")){++a,++a;const B=$();h.push(B)}else if(r("else"))for(++a,++a,n(p.CloseStatement,"Expected closing statement token");!r("endif");)h.push(o());return new Hi(m,f,h)}function N(){const m=se();if(m.type!=="Identifier")throw new SyntaxError("Expected identifier following macro statement");const f=Le();n(p.CloseStatement,"Expected closing statement token");const h=[];for(;!r("endmacro");)h.push(o());return new Xi(m,f,h)}function L(m=!1){const f=m?se:Y,h=[f()],B=s(p.Comma);for(;B&&(++a,h.push(f()),!!s(p.Comma)););return B?new St(h):h[0]}function G(){const m=L(!0);if(!(m instanceof we||m instanceof St))throw new SyntaxError(`Expected identifier/tuple for the loop variable, got ${m.type} instead`);if(!c("in"))throw new SyntaxError("Expected `in` keyword following loop variable");++a;const f=Y();n(p.CloseStatement,"Expected closing statement token");const h=[];for(;!r("endfor","else");)h.push(o());const B=[];if(r("else"))for(++a,++a,n(p.CloseStatement,"Expected closing statement token");!r("endfor");)B.push(o());return new Vi(m,f,h,B)}function Y(){return ye()}function ye(){const m=Je();if(c("if")){++a;const f=Je();if(c("else")){++a;const h=ye();return new po(f,m,h)}else return new no(m,f)}return m}function Je(){let m=Re();for(;c("or");){const f=e[a];++a;const h=Re();m=new Te(f,m,h)}return m}function Re(){let m=Ae();for(;c("and");){const f=e[a];++a;const h=Ae();m=new Te(f,m,h)}return m}function Ae(){let m;for(;c("not");){const f=e[a];++a;const h=Ae();m=new oo(f,h)}return m??ve()}function ve(){let m=$e();for(;;){let f;if(c("not","in"))f=new re("not in",p.Identifier),a+=2;else if(c("in"))f=e[a++];else if(s(p.ComparisonBinaryOperator))f=e[a++];else break;const h=$e();m=new Te(f,m,h)}return m}function $e(){let m=ht();for(;s(p.AdditiveBinaryOperator);){const f=e[a];++a;const h=ht();m=new Te(f,m,h)}return m}function Ye(){const m=gt(se());return s(p.OpenParen)?je(m):m}function je(m){let f=new It(m,Le());return f=gt(f),s(p.OpenParen)&&(f=je(f)),f}function Le(){n(p.OpenParen,"Expected opening parenthesis for arguments list");const m=ia();return n(p.CloseParen,"Expected closing parenthesis for arguments list"),m}function ia(){const m=[];for(;!s(p.CloseParen);){let f;if(e[a].type===p.MultiplicativeBinaryOperator&&e[a].value==="*"){++a;const h=Y();f=new lo(h)}else if(f=Y(),s(p.Equals)){if(++a,!(f instanceof we))throw new SyntaxError("Expected identifier for keyword argument");const h=Y();f=new ro(f,h)}m.push(f),s(p.Comma)&&++a}return m}function oa(){const m=[];let f=!1;for(;!s(p.CloseSquareBracket);)s(p.Colon)?(m.push(void 0),++a,f=!0):(m.push(Y()),s(p.Colon)&&(++a,f=!0));if(m.length===0)throw new SyntaxError("Expected at least one argument for member/slice expression");if(f){if(m.length>3)throw new SyntaxError("Expected 0-3 arguments for slice expression");return new so(...m)}return m[0]}function gt(m){for(;s(p.Dot)||s(p.OpenSquareBracket);){const f=e[a];++a;let h;const B=f.type===p.OpenSquareBracket;if(B)h=oa(),n(p.CloseSquareBracket,"Expected closing square bracket");else if(h=se(),h.type!=="Identifier")throw new SyntaxError("Expected identifier following dot operator");m=new Ji(m,h,B)}return m}function ht(){let m=bt();for(;s(p.MultiplicativeBinaryOperator);){const f=e[a++],h=bt();m=new Te(f,m,h)}return m}function bt(){let m=sa();for(;c("is");){++a;const f=c("not");f&&++a;const h=se();if(!(h instanceof we))throw new SyntaxError("Expected identifier for the test");m=new io(m,f,h)}return m}function sa(){let m=Ye();for(;s(p.Pipe);){++a;let f=se();if(!(f instanceof we))throw new SyntaxError("Expected identifier for the filter");s(p.OpenParen)&&(f=je(f)),m=new to(m,f)}return m}function se(){const m=e[a++];switch(m.type){case p.NumericLiteral:{const f=m.value;return f.includes(".")?new Zi(Number(f)):new Yi(Number(f))}case p.StringLiteral:{let f=m.value;for(;s(p.StringLiteral);)f+=e[a++].value;return new Tt(f)}case p.Identifier:return new we(m.value);case p.OpenParen:{const f=L();return n(p.CloseParen,"Expected closing parenthesis, got ${tokens[current].type} instead."),f}case p.OpenSquareBracket:{const f=[];for(;!s(p.CloseSquareBracket);)f.push(Y()),s(p.Comma)&&++a;return++a,new Gi(f)}case p.OpenCurlyBracket:{const f=new Map;for(;!s(p.CloseCurlyBracket);){const h=Y();n(p.Colon,"Expected colon between key and value in object literal");const B=Y();f.set(h,B),s(p.Comma)&&++a}return++a,new eo(f)}default:throw new SyntaxError(`Unexpected token: ${m.type}`)}}for(;a<e.length;)t.body.push(o());return t}function mo(e,t,a=1){t===void 0&&(t=e,e=0);const n=[];for(let i=e;i<t;i+=a)n.push(i);return n}function Et(e,t,a,n=1){const i=Math.sign(n);i>=0?(t=(t??(t=0))<0?Math.max(e.length+t,0):Math.min(t,e.length),a=(a??(a=e.length))<0?Math.max(e.length+a,0):Math.min(a,e.length)):(t=(t??(t=e.length-1))<0?Math.max(e.length+t,-1):Math.min(t,e.length-1),a=(a??(a=-1))<-1?Math.max(e.length+a,-1):Math.min(a,e.length-1));const o=[];for(let s=t;i*s<i*a;s+=n)o.push(e[s]);return o}function fo(e){return e.replace(/\b\w/g,t=>t.toUpperCase())}function go(e){return ho(new Date,e)}function ho(e,t){const a=new Intl.DateTimeFormat(void 0,{month:"long"}),n=new Intl.DateTimeFormat(void 0,{month:"short"}),i=o=>o<10?"0"+o:o.toString();return t.replace(/%[YmdbBHM%]/g,o=>{switch(o){case"%Y":return e.getFullYear().toString();case"%m":return i(e.getMonth()+1);case"%d":return i(e.getDate());case"%b":return n.format(e);case"%B":return a.format(e);case"%H":return i(e.getHours());case"%M":return i(e.getMinutes());case"%%":return"%";default:return o}})}function bo(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function yo(e,t,a,n){if(n===0)return e;let i=n==null||n<0?1/0:n;const o=t.length===0?new RegExp("(?=)","gu"):new RegExp(bo(t),"gu");return e.replaceAll(o,s=>i>0?(--i,a):s)}var Pt=class extends Error{},Ct=class extends Error{},ie=class{constructor(e=void 0){b(this,"type","RuntimeValue");b(this,"value");b(this,"builtins",new Map);this.value=e}__bool__(){return new S(!!this.value)}toString(){return String(this.value)}},I=class extends ie{constructor(){super(...arguments);b(this,"type","IntegerValue")}},O=class extends ie{constructor(){super(...arguments);b(this,"type","FloatValue")}toString(){return this.value%1===0?this.value.toFixed(1):this.value.toString()}},w=class extends ie{constructor(){super(...arguments);b(this,"type","StringValue");b(this,"builtins",new Map([["upper",new U(()=>new w(this.value.toUpperCase()))],["lower",new U(()=>new w(this.value.toLowerCase()))],["strip",new U(()=>new w(this.value.trim()))],["title",new U(()=>new w(fo(this.value)))],["capitalize",new U(()=>new w(this.value.charAt(0).toUpperCase()+this.value.slice(1)))],["length",new I(this.value.length)],["rstrip",new U(()=>new w(this.value.trimEnd()))],["lstrip",new U(()=>new w(this.value.trimStart()))],["startswith",new U(t=>{if(t.length===0)throw new Error("startswith() requires at least one argument");const a=t[0];if(a instanceof w)return new S(this.value.startsWith(a.value));if(a instanceof D){for(const n of a.value){if(!(n instanceof w))throw new Error("startswith() tuple elements must be strings");if(this.value.startsWith(n.value))return new S(!0)}return new S(!1)}throw new Error("startswith() argument must be a string or tuple of strings")})],["endswith",new U(t=>{if(t.length===0)throw new Error("endswith() requires at least one argument");const a=t[0];if(a instanceof w)return new S(this.value.endsWith(a.value));if(a instanceof D){for(const n of a.value){if(!(n instanceof w))throw new Error("endswith() tuple elements must be strings");if(this.value.endsWith(n.value))return new S(!0)}return new S(!1)}throw new Error("endswith() argument must be a string or tuple of strings")})],["split",new U(t=>{const a=t[0]??new W;if(!(a instanceof w||a instanceof W))throw new Error("sep argument must be a string or null");const n=t[1]??new I(-1);if(!(n instanceof I))throw new Error("maxsplit argument must be a number");let i=[];if(a instanceof W){const o=this.value.trimStart();for(const{0:s,index:r}of o.matchAll(/\S+/g)){if(n.value!==-1&&i.length>=n.value&&r!==void 0){i.push(s+o.slice(r+s.length));break}i.push(s)}}else{if(a.value==="")throw new Error("empty separator");i=this.value.split(a.value),n.value!==-1&&i.length>n.value&&i.push(i.splice(n.value).join(a.value))}return new D(i.map(o=>new w(o)))})],["replace",new U(t=>{if(t.length<2)throw new Error("replace() requires at least two arguments");const a=t[0],n=t[1];if(!(a instanceof w&&n instanceof w))throw new Error("replace() arguments must be strings");let i;if(t.length>2?t[2].type==="KeywordArgumentsValue"?i=t[2].value.get("count")??new W:i=t[2]:i=new W,!(i instanceof I||i instanceof W))throw new Error("replace() count argument must be a number or null");return new w(yo(this.value,a.value,n.value,i.value))})]]))}},S=class extends ie{constructor(){super(...arguments);b(this,"type","BooleanValue")}},J=class extends ie{constructor(){super(...arguments);b(this,"type","ObjectValue");b(this,"builtins",new Map([["get",new U(([t,a])=>{if(!(t instanceof w))throw new Error(`Object key must be a string: got ${t.type}`);return this.value.get(t.value)??a??new W})],["items",new U(()=>this.items())],["keys",new U(()=>this.keys())],["values",new U(()=>this.values())]]))}__bool__(){return new S(this.value.size>0)}items(){return new D(Array.from(this.value.entries()).map(([t,a])=>new D([new w(t),a])))}keys(){return new D(Array.from(this.value.keys()).map(t=>new w(t)))}values(){return new D(Array.from(this.value.values()))}},tt=class extends J{constructor(){super(...arguments);b(this,"type","KeywordArgumentsValue")}},D=class extends ie{constructor(){super(...arguments);b(this,"type","ArrayValue");b(this,"builtins",new Map([["length",new I(this.value.length)]]))}__bool__(){return new S(this.value.length>0)}},vo=class extends D{constructor(){super(...arguments);b(this,"type","TupleValue")}},U=class extends ie{constructor(){super(...arguments);b(this,"type","FunctionValue")}},W=class extends ie{constructor(){super(...arguments);b(this,"type","NullValue")}},z=class extends ie{constructor(){super(...arguments);b(this,"type","UndefinedValue")}},ce=class{constructor(e){b(this,"variables",new Map([["namespace",new U(e=>{if(e.length===0)return new J(new Map);if(e.length!==1||!(e[0]instanceof J))throw new Error("`namespace` expects either zero arguments or a single object argument");return e[0]})]]));b(this,"tests",new Map([["boolean",e=>e.type==="BooleanValue"],["callable",e=>e instanceof U],["odd",e=>{if(!(e instanceof I))throw new Error(`cannot odd on ${e.type}`);return e.value%2!==0}],["even",e=>{if(!(e instanceof I))throw new Error(`cannot even on ${e.type}`);return e.value%2===0}],["false",e=>e.type==="BooleanValue"&&!e.value],["true",e=>e.type==="BooleanValue"&&e.value],["none",e=>e.type==="NullValue"],["string",e=>e.type==="StringValue"],["number",e=>e instanceof I||e instanceof O],["integer",e=>e instanceof I],["iterable",e=>e.type==="ArrayValue"||e.type==="StringValue"],["mapping",e=>e.type==="ObjectValue"],["lower",e=>{const t=e.value;return e.type==="StringValue"&&t===t.toLowerCase()}],["upper",e=>{const t=e.value;return e.type==="StringValue"&&t===t.toUpperCase()}],["none",e=>e.type==="NullValue"],["defined",e=>e.type!=="UndefinedValue"],["undefined",e=>e.type==="UndefinedValue"],["equalto",(e,t)=>e.value===t.value],["eq",(e,t)=>e.value===t.value]]));this.parent=e}set(e,t){return this.declareVariable(e,Me(t))}declareVariable(e,t){if(this.variables.has(e))throw new SyntaxError(`Variable already declared: ${e}`);return this.variables.set(e,t),t}setVariable(e,t){return this.variables.set(e,t),t}resolve(e){if(this.variables.has(e))return this;if(this.parent)return this.parent.resolve(e);throw new Error(`Unknown variable: ${e}`)}lookupVariable(e){try{return this.resolve(e).variables.get(e)??new z}catch{return new z}}};function wo(e){e.set("false",!1),e.set("true",!0),e.set("none",null),e.set("raise_exception",t=>{throw new Error(t)}),e.set("range",mo),e.set("strftime_now",go),e.set("True",!0),e.set("False",!1),e.set("None",null)}var _o=class{constructor(e){b(this,"global");this.global=e??new ce}run(e){return this.evaluate(e,this.global)}evaluateBinaryExpression(e,t){const a=this.evaluate(e.left,t);switch(e.operator.value){case"and":return a.__bool__().value?this.evaluate(e.right,t):a;case"or":return a.__bool__().value?a:this.evaluate(e.right,t)}const n=this.evaluate(e.right,t);switch(e.operator.value){case"==":return new S(a.value==n.value);case"!=":return new S(a.value!=n.value)}if(a instanceof z||n instanceof z){if(n instanceof z&&["in","not in"].includes(e.operator.value))return new S(e.operator.value==="not in");throw new Error(`Cannot perform operation ${e.operator.value} on undefined values`)}else{if(a instanceof W||n instanceof W)throw new Error("Cannot perform operation on null values");if(e.operator.value==="~")return new w(a.value.toString()+n.value.toString());if((a instanceof I||a instanceof O)&&(n instanceof I||n instanceof O)){const i=a.value,o=n.value;switch(e.operator.value){case"+":case"-":case"*":{const s=e.operator.value==="+"?i+o:e.operator.value==="-"?i-o:i*o;return a instanceof O||n instanceof O?new O(s):new I(s)}case"/":return new O(i/o);case"%":{const s=i%o;return a instanceof O||n instanceof O?new O(s):new I(s)}case"<":return new S(i<o);case">":return new S(i>o);case">=":return new S(i>=o);case"<=":return new S(i<=o)}}else if(a instanceof D&&n instanceof D)switch(e.operator.value){case"+":return new D(a.value.concat(n.value))}else if(n instanceof D){const i=n.value.find(o=>o.value===a.value)!==void 0;switch(e.operator.value){case"in":return new S(i);case"not in":return new S(!i)}}}if(a instanceof w||n instanceof w)switch(e.operator.value){case"+":return new w(a.value.toString()+n.value.toString())}if(a instanceof w&&n instanceof w)switch(e.operator.value){case"in":return new S(n.value.includes(a.value));case"not in":return new S(!n.value.includes(a.value))}if(a instanceof w&&n instanceof J)switch(e.operator.value){case"in":return new S(n.value.has(a.value));case"not in":return new S(!n.value.has(a.value))}throw new SyntaxError(`Unknown operator "${e.operator.value}" between ${a.type} and ${n.type}`)}evaluateArguments(e,t){const a=[],n=new Map;for(const i of e)if(i.type==="SpreadExpression"){const o=i,s=this.evaluate(o.argument,t);if(!(s instanceof D))throw new Error(`Cannot unpack non-iterable type: ${s.type}`);for(const r of s.value)a.push(r)}else if(i.type==="KeywordArgumentExpression"){const o=i;n.set(o.key.value,this.evaluate(o.value,t))}else{if(n.size>0)throw new Error("Positional arguments must come before keyword arguments");a.push(this.evaluate(i,t))}return[a,n]}applyFilter(e,t,a){if(t.type==="Identifier"){const n=t;if(n.value==="tojson")return new w(Ee(e));if(e instanceof D)switch(n.value){case"list":return e;case"first":return e.value[0];case"last":return e.value[e.value.length-1];case"length":return new I(e.value.length);case"reverse":return new D(e.value.reverse());case"sort":return new D(e.value.sort((i,o)=>{if(i.type!==o.type)throw new Error(`Cannot compare different types: ${i.type} and ${o.type}`);switch(i.type){case"IntegerValue":case"FloatValue":return i.value-o.value;case"StringValue":return i.value.localeCompare(o.value);default:throw new Error(`Cannot compare type: ${i.type}`)}}));case"join":return new w(e.value.map(i=>i.value).join(""));case"string":return new w(Ee(e));case"unique":{const i=new Set,o=[];for(const s of e.value)i.has(s.value)||(i.add(s.value),o.push(s));return new D(o)}default:throw new Error(`Unknown ArrayValue filter: ${n.value}`)}else if(e instanceof w)switch(n.value){case"length":case"upper":case"lower":case"title":case"capitalize":{const i=e.builtins.get(n.value);if(i instanceof U)return i.value([],a);if(i instanceof I)return i;throw new Error(`Unknown StringValue filter: ${n.value}`)}case"trim":return new w(e.value.trim());case"indent":return new w(e.value.split(`
`).map((i,o)=>o===0||i.length===0?i:"    "+i).join(`
`));case"join":case"string":return e;case"int":{const i=parseInt(e.value,10);return new I(isNaN(i)?0:i)}case"float":{const i=parseFloat(e.value);return new O(isNaN(i)?0:i)}default:throw new Error(`Unknown StringValue filter: ${n.value}`)}else if(e instanceof I||e instanceof O)switch(n.value){case"abs":return e instanceof I?new I(Math.abs(e.value)):new O(Math.abs(e.value));case"int":return new I(Math.floor(e.value));case"float":return new O(e.value);default:throw new Error(`Unknown NumericValue filter: ${n.value}`)}else if(e instanceof J)switch(n.value){case"items":return new D(Array.from(e.value.entries()).map(([i,o])=>new D([new w(i),o])));case"length":return new I(e.value.size);default:throw new Error(`Unknown ObjectValue filter: ${n.value}`)}else if(e instanceof S)switch(n.value){case"bool":return new S(e.value);case"int":return new I(e.value?1:0);case"float":return new O(e.value?1:0);case"string":return new w(e.value?"true":"false");default:throw new Error(`Unknown BooleanValue filter: ${n.value}`)}throw new Error(`Cannot apply filter "${n.value}" to type: ${e.type}`)}else if(t.type==="CallExpression"){const n=t;if(n.callee.type!=="Identifier")throw new Error(`Unknown filter: ${n.callee.type}`);const i=n.callee.value;if(i==="tojson"){const[,o]=this.evaluateArguments(n.args,a),s=o.get("indent")??new W;if(!(s instanceof I||s instanceof W))throw new Error("If set, indent must be a number");return new w(Ee(e,s.value))}else if(i==="join"){let o;if(e instanceof w)o=Array.from(e.value);else if(e instanceof D)o=e.value.map(l=>l.value);else throw new Error(`Cannot apply filter "${i}" to type: ${e.type}`);const[s,r]=this.evaluateArguments(n.args,a),c=s.at(0)??r.get("separator")??new w("");if(!(c instanceof w))throw new Error("separator must be a string");return new w(o.join(c.value))}else if(i==="int"||i==="float"){const[o,s]=this.evaluateArguments(n.args,a),r=o.at(0)??s.get("default")??(i==="int"?new I(0):new O(0));if(e instanceof w){const c=i==="int"?parseInt(e.value,10):parseFloat(e.value);return isNaN(c)?r:i==="int"?new I(c):new O(c)}else{if(e instanceof I||e instanceof O)return e;if(e instanceof S)return i==="int"?new I(e.value?1:0):new O(e.value?1:0);throw new Error(`Cannot apply filter "${i}" to type: ${e.type}`)}}else if(i==="default"){const[o,s]=this.evaluateArguments(n.args,a),r=o[0]??new w(""),c=o[1]??s.get("boolean")??new S(!1);if(!(c instanceof S))throw new Error("`default` filter flag must be a boolean");return e instanceof z||c.value&&!e.__bool__().value?r:e}if(e instanceof D){switch(i){case"selectattr":case"rejectattr":{const o=i==="selectattr";if(e.value.some(u=>!(u instanceof J)))throw new Error(`\`${i}\` can only be applied to array of objects`);if(n.args.some(u=>u.type!=="StringLiteral"))throw new Error(`arguments of \`${i}\` must be strings`);const[s,r,c]=n.args.map(u=>this.evaluate(u,a));let l;if(r){const u=a.tests.get(r.value);if(!u)throw new Error(`Unknown test: ${r.value}`);l=u}else l=(...u)=>u[0].__bool__().value;const g=e.value.filter(u=>{const v=u.value.get(s.value),$=v?l(v,c):!1;return o?$:!$});return new D(g)}case"map":{const[,o]=this.evaluateArguments(n.args,a);if(o.has("attribute")){const s=o.get("attribute");if(!(s instanceof w))throw new Error("attribute must be a string");const r=o.get("default"),c=e.value.map(l=>{if(!(l instanceof J))throw new Error("items in map must be an object");return l.value.get(s.value)??r??new z});return new D(c)}else throw new Error("`map` expressions without `attribute` set are not currently supported.")}}throw new Error(`Unknown ArrayValue filter: ${i}`)}else if(e instanceof w){switch(i){case"indent":{const[o,s]=this.evaluateArguments(n.args,a),r=o.at(0)??s.get("width")??new I(4);if(!(r instanceof I))throw new Error("width must be a number");const c=o.at(1)??s.get("first")??new S(!1),l=o.at(2)??s.get("blank")??new S(!1),g=e.value.split(`
`),u=" ".repeat(r.value),v=g.map(($,N)=>!c.value&&N===0||!l.value&&$.length===0?$:u+$);return new w(v.join(`
`))}case"replace":{const o=e.builtins.get("replace");if(!(o instanceof U))throw new Error("replace filter not available");const[s,r]=this.evaluateArguments(n.args,a);return o.value([...s,new tt(r)],a)}}throw new Error(`Unknown StringValue filter: ${i}`)}else throw new Error(`Cannot apply filter "${i}" to type: ${e.type}`)}throw new Error(`Unknown filter: ${t.type}`)}evaluateFilterExpression(e,t){const a=this.evaluate(e.operand,t);return this.applyFilter(a,e.filter,t)}evaluateTestExpression(e,t){const a=this.evaluate(e.operand,t),n=t.tests.get(e.test.value);if(!n)throw new Error(`Unknown test: ${e.test.value}`);const i=n(a);return new S(e.negate?!i:i)}evaluateSelectExpression(e,t){return this.evaluate(e.test,t).__bool__().value?this.evaluate(e.lhs,t):new z}evaluateUnaryExpression(e,t){const a=this.evaluate(e.argument,t);switch(e.operator.value){case"not":return new S(!a.value);default:throw new SyntaxError(`Unknown operator: ${e.operator.value}`)}}evaluateTernaryExpression(e,t){return this.evaluate(e.condition,t).__bool__().value?this.evaluate(e.trueExpr,t):this.evaluate(e.falseExpr,t)}evalProgram(e,t){return this.evaluateBlock(e.body,t)}evaluateBlock(e,t){let a="";for(const n of e){const i=this.evaluate(n,t);i.type!=="NullValue"&&i.type!=="UndefinedValue"&&(a+=i.toString())}return new w(a)}evaluateIdentifier(e,t){return t.lookupVariable(e.value)}evaluateCallExpression(e,t){const[a,n]=this.evaluateArguments(e.args,t);n.size>0&&a.push(new tt(n));const i=this.evaluate(e.callee,t);if(i.type!=="FunctionValue")throw new Error(`Cannot call something that is not a function: got ${i.type}`);return i.value(a,t)}evaluateSliceExpression(e,t,a){if(!(e instanceof D||e instanceof w))throw new Error("Slice object must be an array or string");const n=this.evaluate(t.start,a),i=this.evaluate(t.stop,a),o=this.evaluate(t.step,a);if(!(n instanceof I||n instanceof z))throw new Error("Slice start must be numeric or undefined");if(!(i instanceof I||i instanceof z))throw new Error("Slice stop must be numeric or undefined");if(!(o instanceof I||o instanceof z))throw new Error("Slice step must be numeric or undefined");return e instanceof D?new D(Et(e.value,n.value,i.value,o.value)):new w(Et(Array.from(e.value),n.value,i.value,o.value).join(""))}evaluateMemberExpression(e,t){const a=this.evaluate(e.object,t);let n;if(e.computed){if(e.property.type==="SliceExpression")return this.evaluateSliceExpression(a,e.property,t);n=this.evaluate(e.property,t)}else n=new w(e.property.value);let i;if(a instanceof J){if(!(n instanceof w))throw new Error(`Cannot access property with non-string: got ${n.type}`);i=a.value.get(n.value)??a.builtins.get(n.value)}else if(a instanceof D||a instanceof w)if(n instanceof I)i=a.value.at(n.value),a instanceof w&&(i=new w(a.value.at(n.value)));else if(n instanceof w)i=a.builtins.get(n.value);else throw new Error(`Cannot access property with non-string/non-number: got ${n.type}`);else{if(!(n instanceof w))throw new Error(`Cannot access property with non-string: got ${n.type}`);i=a.builtins.get(n.value)}return i instanceof ie?i:new z}evaluateSet(e,t){const a=e.value?this.evaluate(e.value,t):this.evaluateBlock(e.body,t);if(e.assignee.type==="Identifier"){const n=e.assignee.value;t.setVariable(n,a)}else if(e.assignee.type==="TupleLiteral"){const n=e.assignee;if(!(a instanceof D))throw new Error(`Cannot unpack non-iterable type in set: ${a.type}`);const i=a.value;if(i.length!==n.value.length)throw new Error(`Too ${n.value.length>i.length?"few":"many"} items to unpack in set`);for(let o=0;o<n.value.length;++o){const s=n.value[o];if(s.type!=="Identifier")throw new Error(`Cannot unpack to non-identifier in set: ${s.type}`);t.setVariable(s.value,i[o])}}else if(e.assignee.type==="MemberExpression"){const n=e.assignee,i=this.evaluate(n.object,t);if(!(i instanceof J))throw new Error("Cannot assign to member of non-object");if(n.property.type!=="Identifier")throw new Error("Cannot assign to member with non-identifier property");i.value.set(n.property.value,a)}else throw new Error(`Invalid LHS inside assignment expression: ${JSON.stringify(e.assignee)}`);return new W}evaluateIf(e,t){const a=this.evaluate(e.test,t);return this.evaluateBlock(a.__bool__().value?e.body:e.alternate,t)}evaluateFor(e,t){const a=new ce(t);let n,i;if(e.iterable.type==="SelectExpression"){const l=e.iterable;i=this.evaluate(l.lhs,a),n=l.test}else i=this.evaluate(e.iterable,a);if(!(i instanceof D||i instanceof J))throw new Error(`Expected iterable or object type in for loop: got ${i.type}`);i instanceof J&&(i=i.keys());const o=[],s=[];for(let l=0;l<i.value.length;++l){const g=new ce(a),u=i.value[l];let v;if(e.loopvar.type==="Identifier")v=$=>$.setVariable(e.loopvar.value,u);else if(e.loopvar.type==="TupleLiteral"){const $=e.loopvar;if(u.type!=="ArrayValue")throw new Error(`Cannot unpack non-iterable type: ${u.type}`);const N=u;if($.value.length!==N.value.length)throw new Error(`Too ${$.value.length>N.value.length?"few":"many"} items to unpack`);v=L=>{for(let G=0;G<$.value.length;++G){if($.value[G].type!=="Identifier")throw new Error(`Cannot unpack non-identifier type: ${$.value[G].type}`);L.setVariable($.value[G].value,N.value[G])}}}else throw new Error(`Invalid loop variable(s): ${e.loopvar.type}`);n&&(v(g),!this.evaluate(n,g).__bool__().value)||(o.push(u),s.push(v))}let r="",c=!0;for(let l=0;l<o.length;++l){const g=new Map([["index",new I(l+1)],["index0",new I(l)],["revindex",new I(o.length-l)],["revindex0",new I(o.length-l-1)],["first",new S(l===0)],["last",new S(l===o.length-1)],["length",new I(o.length)],["previtem",l>0?o[l-1]:new z],["nextitem",l<o.length-1?o[l+1]:new z]]);a.setVariable("loop",new J(g)),s[l](a);try{const u=this.evaluateBlock(e.body,a);r+=u.value}catch(u){if(u instanceof Ct)continue;if(u instanceof Pt)break;throw u}c=!1}if(c){const l=this.evaluateBlock(e.defaultBlock,a);r+=l.value}return new w(r)}evaluateMacro(e,t){return t.setVariable(e.name.value,new U((a,n)=>{var s;const i=new ce(n);a=a.slice();let o;((s=a.at(-1))==null?void 0:s.type)==="KeywordArgumentsValue"&&(o=a.pop());for(let r=0;r<e.args.length;++r){const c=e.args[r],l=a[r];if(c.type==="Identifier"){const g=c;if(!l)throw new Error(`Missing positional argument: ${g.value}`);i.setVariable(g.value,l)}else if(c.type==="KeywordArgumentExpression"){const g=c,u=l??(o==null?void 0:o.value.get(g.key.value))??this.evaluate(g.value,i);i.setVariable(g.key.value,u)}else throw new Error(`Unknown argument type: ${c.type}`)}return this.evaluateBlock(e.body,i)})),new W}evaluateCallStatement(e,t){const a=new U((r,c)=>{const l=new ce(c);if(e.callerArgs)for(let g=0;g<e.callerArgs.length;++g){const u=e.callerArgs[g];if(u.type!=="Identifier")throw new Error(`Caller parameter must be an identifier, got ${u.type}`);l.setVariable(u.value,r[g]??new z)}return this.evaluateBlock(e.body,l)}),[n,i]=this.evaluateArguments(e.call.args,t);n.push(new tt(i));const o=this.evaluate(e.call.callee,t);if(o.type!=="FunctionValue")throw new Error(`Cannot call something that is not a function: got ${o.type}`);const s=new ce(t);return s.setVariable("caller",a),o.value(n,s)}evaluateFilterStatement(e,t){const a=this.evaluateBlock(e.body,t);return this.applyFilter(a,e.filter,t)}evaluate(e,t){if(!e)return new z;switch(e.type){case"Program":return this.evalProgram(e,t);case"Set":return this.evaluateSet(e,t);case"If":return this.evaluateIf(e,t);case"For":return this.evaluateFor(e,t);case"Macro":return this.evaluateMacro(e,t);case"CallStatement":return this.evaluateCallStatement(e,t);case"Break":throw new Pt;case"Continue":throw new Ct;case"IntegerLiteral":return new I(e.value);case"FloatLiteral":return new O(e.value);case"StringLiteral":return new w(e.value);case"ArrayLiteral":return new D(e.value.map(a=>this.evaluate(a,t)));case"TupleLiteral":return new vo(e.value.map(a=>this.evaluate(a,t)));case"ObjectLiteral":{const a=new Map;for(const[n,i]of e.value){const o=this.evaluate(n,t);if(!(o instanceof w))throw new Error(`Object keys must be strings: got ${o.type}`);a.set(o.value,this.evaluate(i,t))}return new J(a)}case"Identifier":return this.evaluateIdentifier(e,t);case"CallExpression":return this.evaluateCallExpression(e,t);case"MemberExpression":return this.evaluateMemberExpression(e,t);case"UnaryExpression":return this.evaluateUnaryExpression(e,t);case"BinaryExpression":return this.evaluateBinaryExpression(e,t);case"FilterExpression":return this.evaluateFilterExpression(e,t);case"FilterStatement":return this.evaluateFilterStatement(e,t);case"TestExpression":return this.evaluateTestExpression(e,t);case"SelectExpression":return this.evaluateSelectExpression(e,t);case"Ternary":return this.evaluateTernaryExpression(e,t);case"Comment":return new W;default:throw new SyntaxError(`Unknown node type: ${e.type}`)}}};function Me(e){switch(typeof e){case"number":return Number.isInteger(e)?new I(e):new O(e);case"string":return new w(e);case"boolean":return new S(e);case"undefined":return new z;case"object":return e===null?new W:Array.isArray(e)?new D(e.map(Me)):new J(new Map(Object.entries(e).map(([t,a])=>[t,Me(a)])));case"function":return new U((t,a)=>{const n=e(...t.map(i=>i.value))??null;return Me(n)});default:throw new Error(`Cannot convert to runtime value: ${e}`)}}function Ee(e,t,a){const n=a??0;switch(e.type){case"NullValue":case"UndefinedValue":return"null";case"IntegerValue":case"FloatValue":case"StringValue":case"BooleanValue":return JSON.stringify(e.value);case"ArrayValue":case"ObjectValue":{const i=t?" ".repeat(t):"",o=`
`+i.repeat(n),s=o+i;if(e.type==="ArrayValue"){const r=e.value.map(c=>Ee(c,t,n+1));return t?`[${s}${r.join(`,${s}`)}${o}]`:`[${r.join(", ")}]`}else{const r=Array.from(e.value.entries()).map(([c,l])=>{const g=`"${c}": ${Ee(l,t,n+1)}`;return t?`${s}${g}`:g});return t?`{${r.join(",")}${o}}`:`{${r.join(", ")}}`}}default:throw new Error(`Cannot convert to JSON: ${e.type}`)}}var H=`
`,xo="{%- ",ko=" -%}";function Ao(e){switch(e.operator.type){case"MultiplicativeBinaryOperator":return 4;case"AdditiveBinaryOperator":return 3;case"ComparisonBinaryOperator":return 2;case"Identifier":return e.operator.value==="and"?1:e.operator.value==="in"||e.operator.value==="not in"?2:0}return 0}function Io(e,t="	"){const a=typeof t=="number"?" ".repeat(t):t;return te(e.body,0,a).replace(/\n$/,"")}function K(...e){return xo+e.join(" ")+ko}function te(e,t,a){return e.map(n=>To(n,t,a)).join(H)}function To(e,t,a){const n=a.repeat(t);switch(e.type){case"Program":return te(e.body,t,a);case"If":return So(e,t,a);case"For":return Eo(e,t,a);case"Set":return Po(e,t,a);case"Macro":return Co(e,t,a);case"Break":return n+K("break");case"Continue":return n+K("continue");case"CallStatement":return Do(e,t,a);case"FilterStatement":return Ro(e,t,a);case"Comment":return n+"{# "+e.value+" #}";default:return n+"{{- "+T(e)+" -}}"}}function So(e,t,a){const n=a.repeat(t),i=[];let o=e;for(;o&&(i.push({test:o.test,body:o.body}),o.alternate.length===1&&o.alternate[0].type==="If");)o=o.alternate[0];let s=n+K("if",T(i[0].test))+H+te(i[0].body,t+1,a);for(let r=1;r<i.length;++r)s+=H+n+K("elif",T(i[r].test))+H+te(i[r].body,t+1,a);return o&&o.alternate.length>0&&(s+=H+n+K("else")+H+te(o.alternate,t+1,a)),s+=H+n+K("endif"),s}function Eo(e,t,a){const n=a.repeat(t);let i="";if(e.iterable.type==="SelectExpression"){const s=e.iterable;i=`${T(s.lhs)} if ${T(s.test)}`}else i=T(e.iterable);let o=n+K("for",T(e.loopvar),"in",i)+H+te(e.body,t+1,a);return e.defaultBlock.length>0&&(o+=H+n+K("else")+H+te(e.defaultBlock,t+1,a)),o+=H+n+K("endfor"),o}function Po(e,t,a){const n=a.repeat(t),i=T(e.assignee),o=e.value?T(e.value):"",s=n+K("set",`${i}${e.value?" = "+o:""}`);return e.body.length===0?s:s+H+te(e.body,t+1,a)+H+n+K("endset")}function Co(e,t,a){const n=a.repeat(t),i=e.args.map(T).join(", ");return n+K("macro",`${e.name.value}(${i})`)+H+te(e.body,t+1,a)+H+n+K("endmacro")}function Do(e,t,a){const n=a.repeat(t),i=e.callerArgs&&e.callerArgs.length>0?`(${e.callerArgs.map(T).join(", ")})`:"",o=T(e.call);let s=n+K(`call${i}`,o)+H;return s+=te(e.body,t+1,a)+H,s+=n+K("endcall"),s}function Ro(e,t,a){const n=a.repeat(t),i=e.filter.type==="Identifier"?e.filter.value:T(e.filter);let o=n+K("filter",i)+H;return o+=te(e.body,t+1,a)+H,o+=n+K("endfilter"),o}function T(e,t=-1){switch(e.type){case"SpreadExpression":return`*${T(e.argument)}`;case"Identifier":return e.value;case"IntegerLiteral":return`${e.value}`;case"FloatLiteral":return`${e.value}`;case"StringLiteral":return JSON.stringify(e.value);case"BinaryExpression":{const a=e,n=Ao(a),i=T(a.left,n),o=T(a.right,n+1),s=`${i} ${a.operator.value} ${o}`;return n<t?`(${s})`:s}case"UnaryExpression":{const a=e;return a.operator.value+(a.operator.value==="not"?" ":"")+T(a.argument,1/0)}case"CallExpression":{const a=e,n=a.args.map(T).join(", ");return`${T(a.callee)}(${n})`}case"MemberExpression":{const a=e;let n=T(a.object);["Identifier","MemberExpression","CallExpression","StringLiteral","IntegerLiteral","FloatLiteral","ArrayLiteral","TupleLiteral","ObjectLiteral"].includes(a.object.type)||(n=`(${n})`);let i=T(a.property);return!a.computed&&a.property.type!=="Identifier"&&(i=`(${i})`),a.computed?`${n}[${i}]`:`${n}.${i}`}case"FilterExpression":{const a=e,n=T(a.operand,1/0);return a.filter.type==="CallExpression"?`${n} | ${T(a.filter)}`:`${n} | ${a.filter.value}`}case"SelectExpression":{const a=e;return`${T(a.lhs)} if ${T(a.test)}`}case"TestExpression":{const a=e;return`${T(a.operand)} is${a.negate?" not":""} ${a.test.value}`}case"ArrayLiteral":case"TupleLiteral":{const a=e.value.map(T),n=e.type==="ArrayLiteral"?"[]":"()";return`${n[0]}${a.join(", ")}${n[1]}`}case"ObjectLiteral":return`{${Array.from(e.value.entries()).map(([n,i])=>`${T(n)}: ${T(i)}`).join(", ")}}`;case"SliceExpression":{const a=e,n=a.start?T(a.start):"",i=a.stop?T(a.stop):"",o=a.step?`:${T(a.step)}`:"";return`${n}:${i}${o}`}case"KeywordArgumentExpression":{const a=e;return`${a.key.value}=${T(a.value)}`}case"Ternary":{const a=e,n=`${T(a.trueExpr)} if ${T(a.condition,0)} else ${T(a.falseExpr)}`;return t>-1?`(${n})`:n}default:throw new Error(`Unknown expression type: ${e.type}`)}}var $o=class{constructor(e){b(this,"parsed");const t=qi(e,{lstrip_blocks:!0,trim_blocks:!0});this.parsed=uo(t)}render(e){const t=new ce;if(wo(t),e)for(const[i,o]of Object.entries(e))t.set(i,o);return new _o(t).run(this.parsed).value}format(e){return Io(this.parsed,(e==null?void 0:e.indent)||"	")}};const jo={transformers:["audio-classification","automatic-speech-recognition","depth-estimation","document-question-answering","feature-extraction","fill-mask","image-classification","image-feature-extraction","image-segmentation","image-to-image","image-to-text","image-text-to-text","mask-generation","object-detection","question-answering","summarization","table-question-answering","text-classification","text-generation","text-to-audio","text-to-speech","token-classification","translation","video-classification","visual-question-answering","zero-shot-classification","zero-shot-image-classification","zero-shot-object-detection"]},ut={"text-classification":{name:"Text Classification",subtasks:[{type:"acceptability-classification",name:"Acceptability Classification"},{type:"entity-linking-classification",name:"Entity Linking Classification"},{type:"fact-checking",name:"Fact Checking"},{type:"intent-classification",name:"Intent Classification"},{type:"language-identification",name:"Language Identification"},{type:"multi-class-classification",name:"Multi Class Classification"},{type:"multi-label-classification",name:"Multi Label Classification"},{type:"multi-input-text-classification",name:"Multi-input Text Classification"},{type:"natural-language-inference",name:"Natural Language Inference"},{type:"semantic-similarity-classification",name:"Semantic Similarity Classification"},{type:"sentiment-classification",name:"Sentiment Classification"},{type:"topic-classification",name:"Topic Classification"},{type:"semantic-similarity-scoring",name:"Semantic Similarity Scoring"},{type:"sentiment-scoring",name:"Sentiment Scoring"},{type:"sentiment-analysis",name:"Sentiment Analysis"},{type:"hate-speech-detection",name:"Hate Speech Detection"},{type:"text-scoring",name:"Text Scoring"}],modality:"nlp"},"token-classification":{name:"Token Classification",subtasks:[{type:"named-entity-recognition",name:"Named Entity Recognition"},{type:"part-of-speech",name:"Part of Speech"},{type:"parsing",name:"Parsing"},{type:"lemmatization",name:"Lemmatization"},{type:"word-sense-disambiguation",name:"Word Sense Disambiguation"},{type:"coreference-resolution",name:"Coreference-resolution"}],modality:"nlp"},"table-question-answering":{name:"Table Question Answering",modality:"nlp"},"question-answering":{name:"Question Answering",subtasks:[{type:"extractive-qa",name:"Extractive QA"},{type:"open-domain-qa",name:"Open Domain QA"},{type:"closed-domain-qa",name:"Closed Domain QA"}],modality:"nlp"},"zero-shot-classification":{name:"Zero-Shot Classification",modality:"nlp"},translation:{name:"Translation",modality:"nlp"},summarization:{name:"Summarization",subtasks:[{type:"news-articles-summarization",name:"News Articles Summarization"},{type:"news-articles-headline-generation",name:"News Articles Headline Generation"}],modality:"nlp"},"feature-extraction":{name:"Feature Extraction",modality:"nlp"},"text-generation":{name:"Text Generation",subtasks:[{type:"dialogue-modeling",name:"Dialogue Modeling"},{type:"dialogue-generation",name:"Dialogue Generation"},{type:"conversational",name:"Conversational"},{type:"language-modeling",name:"Language Modeling"},{type:"text-simplification",name:"Text simplification"},{type:"explanation-generation",name:"Explanation Generation"},{type:"abstractive-qa",name:"Abstractive QA"},{type:"open-domain-abstractive-qa",name:"Open Domain Abstractive QA"},{type:"closed-domain-qa",name:"Closed Domain QA"},{type:"open-book-qa",name:"Open Book QA"},{type:"closed-book-qa",name:"Closed Book QA"},{type:"text2text-generation",name:"Text2Text Generation"}],modality:"nlp"},"fill-mask":{name:"Fill-Mask",subtasks:[{type:"slot-filling",name:"Slot Filling"},{type:"masked-language-modeling",name:"Masked Language Modeling"}],modality:"nlp"},"sentence-similarity":{name:"Sentence Similarity",modality:"nlp"},"text-to-speech":{name:"Text-to-Speech",modality:"audio"},"text-to-audio":{name:"Text-to-Audio",modality:"audio"},"automatic-speech-recognition":{name:"Automatic Speech Recognition",modality:"audio"},"audio-to-audio":{name:"Audio-to-Audio",modality:"audio"},"audio-classification":{name:"Audio Classification",subtasks:[{type:"keyword-spotting",name:"Keyword Spotting"},{type:"speaker-identification",name:"Speaker Identification"},{type:"audio-intent-classification",name:"Audio Intent Classification"},{type:"audio-emotion-recognition",name:"Audio Emotion Recognition"},{type:"audio-language-identification",name:"Audio Language Identification"}],modality:"audio"},"audio-text-to-text":{name:"Audio-Text-to-Text",modality:"multimodal",hideInDatasets:!0},"voice-activity-detection":{name:"Voice Activity Detection",modality:"audio"},"depth-estimation":{name:"Depth Estimation",modality:"cv"},"image-classification":{name:"Image Classification",subtasks:[{type:"multi-label-image-classification",name:"Multi Label Image Classification"},{type:"multi-class-image-classification",name:"Multi Class Image Classification"}],modality:"cv"},"object-detection":{name:"Object Detection",subtasks:[{type:"face-detection",name:"Face Detection"},{type:"vehicle-detection",name:"Vehicle Detection"}],modality:"cv"},"image-segmentation":{name:"Image Segmentation",subtasks:[{type:"instance-segmentation",name:"Instance Segmentation"},{type:"semantic-segmentation",name:"Semantic Segmentation"},{type:"panoptic-segmentation",name:"Panoptic Segmentation"}],modality:"cv"},"text-to-image":{name:"Text-to-Image",modality:"cv"},"image-to-text":{name:"Image-to-Text",subtasks:[{type:"image-captioning",name:"Image Captioning"}],modality:"cv"},"image-to-image":{name:"Image-to-Image",subtasks:[{type:"image-inpainting",name:"Image Inpainting"},{type:"image-colorization",name:"Image Colorization"},{type:"super-resolution",name:"Super Resolution"}],modality:"cv"},"image-to-video":{name:"Image-to-Video",modality:"cv"},"unconditional-image-generation":{name:"Unconditional Image Generation",modality:"cv"},"video-classification":{name:"Video Classification",modality:"cv"},"reinforcement-learning":{name:"Reinforcement Learning",modality:"rl"},robotics:{name:"Robotics",modality:"rl",subtasks:[{type:"grasping",name:"Grasping"},{type:"task-planning",name:"Task Planning"}]},"tabular-classification":{name:"Tabular Classification",modality:"tabular",subtasks:[{type:"tabular-multi-class-classification",name:"Tabular Multi Class Classification"},{type:"tabular-multi-label-classification",name:"Tabular Multi Label Classification"}]},"tabular-regression":{name:"Tabular Regression",modality:"tabular",subtasks:[{type:"tabular-single-column-regression",name:"Tabular Single Column Regression"}]},"tabular-to-text":{name:"Tabular to Text",modality:"tabular",subtasks:[{type:"rdf-to-text",name:"RDF to text"}],hideInModels:!0},"table-to-text":{name:"Table to Text",modality:"nlp",hideInModels:!0},"multiple-choice":{name:"Multiple Choice",subtasks:[{type:"multiple-choice-qa",name:"Multiple Choice QA"},{type:"multiple-choice-coreference-resolution",name:"Multiple Choice Coreference Resolution"}],modality:"nlp",hideInModels:!0},"text-ranking":{name:"Text Ranking",modality:"nlp"},"text-retrieval":{name:"Text Retrieval",subtasks:[{type:"document-retrieval",name:"Document Retrieval"},{type:"utterance-retrieval",name:"Utterance Retrieval"},{type:"entity-linking-retrieval",name:"Entity Linking Retrieval"},{type:"fact-checking-retrieval",name:"Fact Checking Retrieval"}],modality:"nlp",hideInModels:!0},"time-series-forecasting":{name:"Time Series Forecasting",modality:"tabular",subtasks:[{type:"univariate-time-series-forecasting",name:"Univariate Time Series Forecasting"},{type:"multivariate-time-series-forecasting",name:"Multivariate Time Series Forecasting"}]},"text-to-video":{name:"Text-to-Video",modality:"cv"},"image-text-to-text":{name:"Image-Text-to-Text",modality:"multimodal"},"visual-question-answering":{name:"Visual Question Answering",subtasks:[{type:"visual-question-answering",name:"Visual Question Answering"}],modality:"multimodal"},"document-question-answering":{name:"Document Question Answering",subtasks:[{type:"document-question-answering",name:"Document Question Answering"}],modality:"multimodal",hideInDatasets:!0},"zero-shot-image-classification":{name:"Zero-Shot Image Classification",modality:"cv"},"graph-ml":{name:"Graph Machine Learning",modality:"other"},"mask-generation":{name:"Mask Generation",modality:"cv"},"zero-shot-object-detection":{name:"Zero-Shot Object Detection",modality:"cv"},"text-to-3d":{name:"Text-to-3D",modality:"cv"},"image-to-3d":{name:"Image-to-3D",modality:"cv"},"image-feature-extraction":{name:"Image Feature Extraction",modality:"cv"},"video-text-to-text":{name:"Video-Text-to-Text",modality:"multimodal",hideInDatasets:!1},"keypoint-detection":{name:"Keypoint Detection",subtasks:[{type:"pose-estimation",name:"Pose Estimation"}],modality:"cv",hideInDatasets:!0},"visual-document-retrieval":{name:"Visual Document Retrieval",modality:"multimodal"},"any-to-any":{name:"Any-to-Any",modality:"multimodal"},"video-to-video":{name:"Video-to-Video",modality:"cv",hideInDatasets:!0},other:{name:"Other",modality:"other",hideInModels:!0,hideInDatasets:!0}},Lo=Object.keys(ut);Object.values(ut).flatMap(e=>"subtasks"in e?e.subtasks:[]).map(e=>e.type);new Set(Lo);const Mo={datasets:[{description:"A dataset with multiple modality input and output pairs.",id:"PKU-Alignment/align-anything"}],demo:{inputs:[{filename:"any-to-any-input.jpg",type:"img"},{label:"Text Prompt",content:"What is the significance of this place?",type:"text"}],outputs:[{label:"Generated Text",content:"The place in the picture is Osaka Castle, located in Osaka, Japan. Osaka Castle is a historic castle that was originally built in the 16th century by Toyotomi Hideyoshi, a powerful warlord of the time. It is one of the most famous landmarks in Osaka and is known for its distinctive white walls and black roof tiles. The castle has been rebuilt several times over the centuries and is now a popular tourist attraction, offering visitors a glimpse into Japan's rich history and culture.",type:"text"},{filename:"any-to-any-output.wav",type:"audio"}]},metrics:[],models:[{description:"Strong model that can take in video, audio, image, text and output text and natural speech.",id:"Qwen/Qwen2.5-Omni-7B"},{description:"Robust model that can take in image and text and generate image and text.",id:"OmniGen2/OmniGen2"},{description:"Any-to-any model with speech, video, audio, image and text understanding capabilities.",id:"openbmb/MiniCPM-o-2_6"},{description:"A model that can understand image and text and generate image and text.",id:"ByteDance-Seed/BAGEL-7B-MoT"}],spaces:[{description:"An application to chat with an any-to-any (image & text) model.",id:"OmniGen2/OmniGen2"}],summary:"Any-to-any models can understand two or more modalities and output two or more modalities.",widgetModels:[],youtubeId:""},No={datasets:[{description:"A benchmark of 10 different audio tasks.",id:"s3prl/superb"},{description:"A dataset of YouTube clips and their sound categories.",id:"agkphysics/AudioSet"}],demo:{inputs:[{filename:"audio.wav",type:"audio"}],outputs:[{data:[{label:"Up",score:.2},{label:"Down",score:.8}],type:"chart"}]},metrics:[{description:"",id:"accuracy"},{description:"",id:"recall"},{description:"",id:"precision"},{description:"",id:"f1"}],models:[{description:"An easy-to-use model for command recognition.",id:"speechbrain/google_speech_command_xvector"},{description:"An emotion recognition model.",id:"ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition"},{description:"A language identification model.",id:"facebook/mms-lid-126"}],spaces:[{description:"An application that can classify music into different genre.",id:"kurianbenoy/audioclassification"}],summary:"Audio classification is the task of assigning a label or class to a given audio. It can be used for recognizing which command a user is giving or the emotion of a statement, as well as identifying a speaker.",widgetModels:["MIT/ast-finetuned-audioset-10-10-0.4593"],youtubeId:"KWwzcmG98Ds"},Uo={datasets:[{description:"A dataset containing audio conversations with question–answer pairs.",id:"nvidia/AF-Think"},{description:"A more advanced and comprehensive dataset that contains characteristics of the audio as well",id:"tsinghua-ee/QualiSpeech"}],demo:{inputs:[{filename:"audio.wav",type:"audio"},{label:"Text Prompt",content:"What is the gender of the speaker?",type:"text"}],outputs:[{label:"Generated Text",content:"The gender of the speaker is female.",type:"text"}]},metrics:[],models:[{description:"A lightweight model that has capabilities of taking both audio and text as inputs and generating responses.",id:"fixie-ai/ultravox-v0_5-llama-3_2-1b"},{description:"A multimodal model that supports voice chat and audio analysis.",id:"Qwen/Qwen2-Audio-7B-Instruct"},{description:"A model for audio understanding, speech translation, and transcription.",id:"mistralai/Voxtral-Small-24B-2507"},{description:"A new model capable of audio question answering and reasoning.",id:"nvidia/audio-flamingo-3"}],spaces:[{description:"A space that takes input as both audio and text and generates answers.",id:"iamomtiwari/ATTT"},{description:"A web application that demonstrates chatting with the Qwen2Audio Model.",id:"freddyaboulton/talk-to-qwen-webrtc"}],summary:"Audio-text-to-text models take both an audio clip and a text prompt as input, and generate natural language text as output. These models can answer questions about spoken content, summarize meetings, analyze music, or interpret speech beyond simple transcription. They are useful for applications that combine speech understanding with reasoning or conversation.",widgetModels:[],youtubeId:""},Bo={datasets:[{description:"512-element X-vector embeddings of speakers from CMU ARCTIC dataset.",id:"Matthijs/cmu-arctic-xvectors"}],demo:{inputs:[{filename:"input.wav",type:"audio"}],outputs:[{filename:"label-0.wav",type:"audio"},{filename:"label-1.wav",type:"audio"}]},metrics:[{description:"The Signal-to-Noise ratio is the relationship between the target signal level and the background noise level. It is calculated as the logarithm of the target signal divided by the background noise, in decibels.",id:"snri"},{description:"The Signal-to-Distortion ratio is the relationship between the target signal and the sum of noise, interference, and artifact errors",id:"sdri"}],models:[{description:"A speech enhancement model.",id:"ResembleAI/resemble-enhance"},{description:"A model that can change the voice in a speech recording.",id:"microsoft/speecht5_vc"}],spaces:[{description:"An application for speech separation.",id:"younver/speechbrain-speech-separation"},{description:"An application for audio style transfer.",id:"nakas/audio-diffusion_style_transfer"}],summary:"Audio-to-Audio is a family of tasks in which the input is an audio and the output is one or multiple generated audios. Some example tasks are speech enhancement and source separation.",widgetModels:["speechbrain/sepformer-wham"],youtubeId:"iohj7nCCYoM"},Oo={datasets:[{description:"31,175 hours of multilingual audio-text dataset in 108 languages.",id:"mozilla-foundation/common_voice_17_0"},{description:"Multilingual and diverse audio dataset with 101k hours of audio.",id:"amphion/Emilia-Dataset"},{description:"A dataset with 44.6k hours of English speaker data and 6k hours of other language speakers.",id:"parler-tts/mls_eng"},{description:"A multilingual audio dataset with 370K hours of audio.",id:"espnet/yodas"}],demo:{inputs:[{filename:"input.flac",type:"audio"}],outputs:[{label:"Transcript",content:"Going along slushy country roads and speaking to damp audiences in...",type:"text"}]},metrics:[{description:"",id:"wer"},{description:"",id:"cer"}],models:[{description:"A powerful ASR model by OpenAI.",id:"openai/whisper-large-v3"},{description:"A good generic speech model by MetaAI for fine-tuning.",id:"facebook/w2v-bert-2.0"},{description:"An end-to-end model that performs ASR and Speech Translation by MetaAI.",id:"facebook/seamless-m4t-v2-large"},{description:"A powerful multilingual ASR and Speech Translation model by Nvidia.",id:"nvidia/canary-1b"},{description:"Powerful speaker diarization model.",id:"pyannote/speaker-diarization-3.1"}],spaces:[{description:"A powerful general-purpose speech recognition application.",id:"hf-audio/whisper-large-v3"},{description:"Latest ASR model from Useful Sensors.",id:"mrfakename/Moonshinex"},{description:"A high quality speech and text translation model by Meta.",id:"facebook/seamless_m4t"},{description:"A powerful multilingual ASR and Speech Translation model by Nvidia",id:"nvidia/canary-1b"}],summary:"Automatic Speech Recognition (ASR), also known as Speech to Text (STT), is the task of transcribing a given audio to text. It has many applications, such as voice user interfaces.",widgetModels:["openai/whisper-large-v3"],youtubeId:"TksaY_FDgnk"},qo={datasets:[{description:"Largest document understanding dataset.",id:"HuggingFaceM4/Docmatix"},{description:"Dataset from the 2020 DocVQA challenge. The documents are taken from the UCSF Industry Documents Library.",id:"eliolio/docvqa"}],demo:{inputs:[{label:"Question",content:"What is the idea behind the consumer relations efficiency team?",type:"text"},{filename:"document-question-answering-input.png",type:"img"}],outputs:[{label:"Answer",content:"Balance cost efficiency with quality customer service",type:"text"}]},metrics:[{description:"The evaluation metric for the DocVQA challenge is the Average Normalized Levenshtein Similarity (ANLS). This metric is flexible to character regognition errors and compares the predicted answer with the ground truth answer.",id:"anls"},{description:"Exact Match is a metric based on the strict character match of the predicted answer and the right answer. For answers predicted correctly, the Exact Match will be 1. Even if only one character is different, Exact Match will be 0",id:"exact-match"}],models:[{description:"A robust document question answering model.",id:"impira/layoutlm-document-qa"},{description:"A document question answering model specialized in invoices.",id:"impira/layoutlm-invoices"},{description:"A special model for OCR-free document question answering.",id:"microsoft/udop-large"},{description:"A powerful model for document question answering.",id:"google/pix2struct-docvqa-large"}],spaces:[{description:"A robust document question answering application.",id:"impira/docquery"},{description:"An application that can answer questions from invoices.",id:"impira/invoices"},{description:"An application to compare different document question answering models.",id:"merve/compare_docvqa_models"}],summary:"Document Question Answering (also known as Document Visual Question Answering) is the task of answering questions on document images. Document question answering models take a (document, question) pair as input and return an answer in natural language. Models usually rely on multi-modal features, combining text, position of words (bounding-boxes) and image.",widgetModels:["impira/layoutlm-invoices"],youtubeId:""},Fo={datasets:[{description:"Wikipedia dataset containing cleaned articles of all languages. Can be used to train `feature-extraction` models.",id:"wikipedia"}],demo:{inputs:[{label:"Input",content:"India, officially the Republic of India, is a country in South Asia.",type:"text"}],outputs:[{table:[["Dimension 1","Dimension 2","Dimension 3"],["2.583383083343506","2.757075071334839","0.9023529887199402"],["8.29393482208252","1.1071064472198486","2.03399395942688"],["-0.7754912972450256","-1.647324562072754","-0.6113331913948059"],["0.07087723910808563","1.5942802429199219","1.4610432386398315"]],type:"tabular"}]},metrics:[],models:[{description:"A powerful feature extraction model for natural language processing tasks.",id:"thenlper/gte-large"},{description:"A strong feature extraction model for retrieval.",id:"Alibaba-NLP/gte-Qwen1.5-7B-instruct"}],spaces:[{description:"A leaderboard to rank text feature extraction models based on a benchmark.",id:"mteb/leaderboard"},{description:"A leaderboard to rank best feature extraction models based on human feedback.",id:"mteb/arena"}],summary:"Feature extraction is the task of extracting features learnt in a model.",widgetModels:["facebook/bart-base"]},Ho={datasets:[{description:"A common dataset that is used to train models for many languages.",id:"wikipedia"},{description:"A large English dataset with text crawled from the web.",id:"c4"}],demo:{inputs:[{label:"Input",content:"The <mask> barked at me",type:"text"}],outputs:[{type:"chart",data:[{label:"wolf",score:.487},{label:"dog",score:.061},{label:"cat",score:.058},{label:"fox",score:.047},{label:"squirrel",score:.025}]}]},metrics:[{description:"Cross Entropy is a metric that calculates the difference between two probability distributions. Each probability distribution is the distribution of predicted words",id:"cross_entropy"},{description:"Perplexity is the exponential of the cross-entropy loss. It evaluates the probabilities assigned to the next word by the model. Lower perplexity indicates better performance",id:"perplexity"}],models:[{description:"State-of-the-art masked language model.",id:"answerdotai/ModernBERT-large"},{description:"A multilingual model trained on 100 languages.",id:"FacebookAI/xlm-roberta-base"}],spaces:[],summary:"Masked language modeling is the task of masking some of the words in a sentence and predicting which words should replace those masks. These models are useful when we want to get a statistical understanding of the language in which the model is trained in.",widgetModels:["distilroberta-base"],youtubeId:"mqElG5QJWUg"},Vo={datasets:[{description:"Benchmark dataset used for image classification with images that belong to 100 classes.",id:"cifar100"},{description:"Dataset consisting of images of garments.",id:"fashion_mnist"}],demo:{inputs:[{filename:"image-classification-input.jpeg",type:"img"}],outputs:[{type:"chart",data:[{label:"Egyptian cat",score:.514},{label:"Tabby cat",score:.193},{label:"Tiger cat",score:.068}]}]},metrics:[{description:"",id:"accuracy"},{description:"",id:"recall"},{description:"",id:"precision"},{description:"",id:"f1"}],models:[{description:"A strong image classification model.",id:"google/vit-base-patch16-224"},{description:"A robust image classification model.",id:"facebook/deit-base-distilled-patch16-224"},{description:"A strong image classification model.",id:"facebook/convnext-large-224"}],spaces:[{description:"A leaderboard to evaluate different image classification models.",id:"timm/leaderboard"}],summary:"Image classification is the task of assigning a label or class to an entire image. Images are expected to have only one class for each image. Image classification models take an image as input and return a prediction about which class the image belongs to.",widgetModels:["google/vit-base-patch16-224"],youtubeId:"tjAIM7BOYhw"},zo={datasets:[{description:"ImageNet-1K is a image classification dataset in which images are used to train image-feature-extraction models.",id:"imagenet-1k"}],demo:{inputs:[{filename:"mask-generation-input.png",type:"img"}],outputs:[{table:[["Dimension 1","Dimension 2","Dimension 3"],["0.21236686408519745","1.0919708013534546","0.8512550592422485"],["0.809657871723175","-0.18544459342956543","-0.7851548194885254"],["1.3103108406066895","-0.2479034662246704","-0.9107287526130676"],["1.8536205291748047","-0.36419737339019775","0.09717650711536407"]],type:"tabular"}]},metrics:[],models:[{description:"A powerful image feature extraction model.",id:"timm/vit_large_patch14_dinov2.lvd142m"},{description:"A strong image feature extraction model.",id:"nvidia/MambaVision-T-1K"},{description:"A robust image feature extraction model.",id:"facebook/dino-vitb16"},{description:"Cutting-edge image feature extraction model.",id:"apple/aimv2-large-patch14-336-distilled"},{description:"Strong image feature extraction model that can be used on images and documents.",id:"OpenGVLab/InternViT-6B-448px-V1-2"}],spaces:[{description:"A leaderboard to evaluate different image-feature-extraction models on classification performances",id:"timm/leaderboard"}],summary:"Image feature extraction is the task of extracting features learnt in a computer vision model.",widgetModels:[]},Ko={datasets:[{description:"Synthetic dataset, for image relighting",id:"VIDIT"},{description:"Multiple images of celebrities, used for facial expression translation",id:"huggan/CelebA-faces"},{description:"12M image-caption pairs.",id:"Spawning/PD12M"}],demo:{inputs:[{filename:"image-to-image-input.jpeg",type:"img"}],outputs:[{filename:"image-to-image-output.png",type:"img"}]},isPlaceholder:!1,metrics:[{description:"Peak Signal to Noise Ratio (PSNR) is an approximation of the human perception, considering the ratio of the absolute intensity with respect to the variations. Measured in dB, a high value indicates a high fidelity.",id:"PSNR"},{description:"Structural Similarity Index (SSIM) is a perceptual metric which compares the luminance, contrast and structure of two images. The values of SSIM range between -1 and 1, and higher values indicate closer resemblance to the original image.",id:"SSIM"},{description:"Inception Score (IS) is an analysis of the labels predicted by an image classification model when presented with a sample of the generated images.",id:"IS"}],models:[{description:"An image-to-image model to improve image resolution.",id:"fal/AuraSR-v2"},{description:"Powerful image editing model.",id:"black-forest-labs/FLUX.1-Kontext-dev"},{description:"Virtual try-on model.",id:"yisol/IDM-VTON"},{description:"Image re-lighting model.",id:"kontext-community/relighting-kontext-dev-lora-v3"},{description:"Strong model for inpainting and outpainting.",id:"black-forest-labs/FLUX.1-Fill-dev"},{description:"Strong model for image editing using depth maps.",id:"black-forest-labs/FLUX.1-Depth-dev-lora"}],spaces:[{description:"Image editing application.",id:"black-forest-labs/FLUX.1-Kontext-Dev"},{description:"Image relighting application.",id:"lllyasviel/iclight-v2-vary"},{description:"An application for image upscaling.",id:"jasperai/Flux.1-dev-Controlnet-Upscaler"}],summary:"Image-to-image is the task of transforming an input image through a variety of possible manipulations and enhancements, such as super-resolution, image inpainting, colorization, and more.",widgetModels:["Qwen/Qwen-Image"],youtubeId:""},Wo={datasets:[{description:"Dataset from 12M image-text of Reddit",id:"red_caps"},{description:"Dataset from 3.3M images of Google",id:"datasets/conceptual_captions"}],demo:{inputs:[{filename:"savanna.jpg",type:"img"}],outputs:[{label:"Detailed description",content:"a herd of giraffes and zebras grazing in a field",type:"text"}]},metrics:[],models:[{description:"Strong OCR model.",id:"allenai/olmOCR-7B-0725"},{description:"Powerful image captioning model.",id:"fancyfeast/llama-joycaption-beta-one-hf-llava"}],spaces:[{description:"SVG generator app from images.",id:"multimodalart/OmniSVG-3B"},{description:"An application that converts documents to markdown.",id:"numind/NuMarkdown-8B-Thinking"},{description:"An application that can caption images.",id:"fancyfeast/joy-caption-beta-one"}],summary:"Image to text models output a text from a given image. Image captioning or optical character recognition can be considered as the most common applications of image to text.",widgetModels:["Salesforce/blip-image-captioning-large"],youtubeId:""},Xo={datasets:[{description:"Instructions composed of image and text.",id:"liuhaotian/LLaVA-Instruct-150K"},{description:"Collection of image-text pairs on scientific topics.",id:"DAMO-NLP-SG/multimodal_textbook"},{description:"A collection of datasets made for model fine-tuning.",id:"HuggingFaceM4/the_cauldron"},{description:"Screenshots of websites with their HTML/CSS codes.",id:"HuggingFaceM4/WebSight"}],demo:{inputs:[{filename:"image-text-to-text-input.png",type:"img"},{label:"Text Prompt",content:"Describe the position of the bee in detail.",type:"text"}],outputs:[{label:"Answer",content:"The bee is sitting on a pink flower, surrounded by other flowers. The bee is positioned in the center of the flower, with its head and front legs sticking out.",type:"text"}]},metrics:[],models:[{description:"Small and efficient yet powerful vision language model.",id:"HuggingFaceTB/SmolVLM-Instruct"},{description:"Cutting-edge reasoning vision language model.",id:"zai-org/GLM-4.5V"},{description:"Cutting-edge small vision language model to convert documents to text.",id:"rednote-hilab/dots.ocr"},{description:"Small yet powerful model.",id:"Qwen/Qwen2.5-VL-3B-Instruct"},{description:"Image-text-to-text model with agentic capabilities.",id:"microsoft/Magma-8B"}],spaces:[{description:"Leaderboard to evaluate vision language models.",id:"opencompass/open_vlm_leaderboard"},{description:"An application that compares object detection capabilities of different vision language models.",id:"sergiopaniego/vlm_object_understanding"},{description:"An application to compare different OCR models.",id:"prithivMLmods/Multimodal-OCR"}],summary:"Image-text-to-text models take in an image and text prompt and output text. These models are also called vision-language models, or VLMs. The difference from image-to-text models is that these models take an additional text input, not restricting the model to certain use cases like image captioning, and may also be trained to accept a conversation as input.",widgetModels:["zai-org/GLM-4.5V"],youtubeId:"IoGaGfU1CIg"},Qo={datasets:[{description:"Scene segmentation dataset.",id:"scene_parse_150"}],demo:{inputs:[{filename:"image-segmentation-input.jpeg",type:"img"}],outputs:[{filename:"image-segmentation-output.png",type:"img"}]},metrics:[{description:"Average Precision (AP) is the Area Under the PR Curve (AUC-PR). It is calculated for each semantic class separately",id:"Average Precision"},{description:"Mean Average Precision (mAP) is the overall average of the AP values",id:"Mean Average Precision"},{description:"Intersection over Union (IoU) is the overlap of segmentation masks. Mean IoU is the average of the IoU of all semantic classes",id:"Mean Intersection over Union"},{description:"APα is the Average Precision at the IoU threshold of a α value, for example, AP50 and AP75",id:"APα"}],models:[{description:"Solid panoptic segmentation model trained on COCO.",id:"tue-mps/coco_panoptic_eomt_large_640"},{description:"Background removal model.",id:"briaai/RMBG-1.4"},{description:"A multipurpose image segmentation model for high resolution images.",id:"ZhengPeng7/BiRefNet"},{description:"Powerful human-centric image segmentation model.",id:"facebook/sapiens-seg-1b"},{description:"Panoptic segmentation model trained on the COCO (common objects) dataset.",id:"facebook/mask2former-swin-large-coco-panoptic"}],spaces:[{description:"A semantic segmentation application that can predict unseen instances out of the box.",id:"facebook/ov-seg"},{description:"One of the strongest segmentation applications.",id:"jbrinkma/segment-anything"},{description:"A human-centric segmentation model.",id:"facebook/sapiens-pose"},{description:"An instance segmentation application to predict neuronal cell types from microscopy images.",id:"rashmi/sartorius-cell-instance-segmentation"},{description:"An application that segments videos.",id:"ArtGAN/Segment-Anything-Video"},{description:"An panoptic segmentation application built for outdoor environments.",id:"segments/panoptic-segment-anything"}],summary:"Image Segmentation divides an image into segments where each pixel in the image is mapped to an object. This task has multiple variants such as instance segmentation, panoptic segmentation and semantic segmentation.",widgetModels:["nvidia/segformer-b0-finetuned-ade-512-512"],youtubeId:"dKE8SIt9C-w"},Jo={datasets:[{description:"A benchmark dataset for reference image controlled video generation.",id:"ali-vilab/VACE-Benchmark"},{description:"A dataset of video generation style preferences.",id:"Rapidata/sora-video-generation-style-likert-scoring"},{description:"A dataset with videos and captions throughout the videos.",id:"BestWishYsh/ChronoMagic"}],demo:{inputs:[{filename:"image-to-video-input.jpg",type:"img"},{label:"Optional Text Prompt",content:"This penguin is dancing",type:"text"}],outputs:[{filename:"image-to-video-output.gif",type:"img"}]},metrics:[{description:"Fréchet Video Distance (FVD) measures the perceptual similarity between the distributions of generated videos and a set of real videos, assessing overall visual quality and temporal coherence of the video generated from an input image.",id:"fvd"},{description:"CLIP Score measures the semantic similarity between a textual prompt (if provided alongside the input image) and the generated video frames. It evaluates how well the video's generated content and motion align with the textual description, conditioned on the initial image.",id:"clip_score"},{description:"First Frame Fidelity, often measured using LPIPS (Learned Perceptual Image Patch Similarity), PSNR, or SSIM, quantifies how closely the first frame of the generated video matches the input conditioning image.",id:"lpips"},{description:"Identity Preservation Score measures the consistency of identity (e.g., a person's face or a specific object's characteristics) between the input image and throughout the generated video frames, often calculated using features from specialized models like face recognition (e.g., ArcFace) or re-identification models.",id:"identity_preservation"},{description:"Motion Score evaluates the quality, realism, and temporal consistency of motion in the video generated from a static image. This can be based on optical flow analysis (e.g., smoothness, magnitude), consistency of object trajectories, or specific motion plausibility assessments.",id:"motion_score"}],models:[{description:"LTX-Video, a 13B parameter model for high quality video generation",id:"Lightricks/LTX-Video-0.9.7-dev"},{description:"A 14B parameter model for reference image controlled video generation",id:"Wan-AI/Wan2.1-VACE-14B"},{description:"An image-to-video generation model using FramePack F1 methodology with Hunyuan-DiT architecture",id:"lllyasviel/FramePack_F1_I2V_HY_20250503"},{description:"A distilled version of the LTX-Video-0.9.7-dev model for faster inference",id:"Lightricks/LTX-Video-0.9.7-distilled"},{description:"An image-to-video generation model by Skywork AI, 14B parameters, producing 720p videos.",id:"Skywork/SkyReels-V2-I2V-14B-720P"},{description:"Image-to-video variant of Tencent's HunyuanVideo.",id:"tencent/HunyuanVideo-I2V"},{description:"A 14B parameter model for 720p image-to-video generation by Wan-AI.",id:"Wan-AI/Wan2.1-I2V-14B-720P"},{description:"A Diffusers version of the Wan2.1-I2V-14B-720P model for 720p image-to-video generation.",id:"Wan-AI/Wan2.1-I2V-14B-720P-Diffusers"}],spaces:[{description:"An application to generate videos fast.",id:"Lightricks/ltx-video-distilled"},{description:"Generate videos with the FramePack-F1",id:"linoyts/FramePack-F1"},{description:"Generate videos with the FramePack",id:"lisonallen/framepack-i2v"},{description:"Wan2.1 with CausVid LoRA",id:"multimodalart/wan2-1-fast"},{description:"A demo for Stable Video Diffusion",id:"multimodalart/stable-video-diffusion"}],summary:"Image-to-video models take a still image as input and generate a video. These models can be guided by text prompts to influence the content and style of the output video.",widgetModels:[],youtubeId:void 0},Yo={datasets:[{description:"Widely used benchmark dataset for multiple Vision tasks.",id:"merve/coco2017"},{description:"Medical Imaging dataset of the Human Brain for segmentation and mask generating tasks",id:"rocky93/BraTS_segmentation"}],demo:{inputs:[{filename:"mask-generation-input.png",type:"img"}],outputs:[{filename:"mask-generation-output.png",type:"img"}]},metrics:[{description:"IoU is used to measure the overlap between predicted mask and the ground truth mask.",id:"Intersection over Union (IoU)"}],models:[{description:"Small yet powerful mask generation model.",id:"Zigeng/SlimSAM-uniform-50"},{description:"Very strong mask generation model.",id:"facebook/sam2-hiera-large"}],spaces:[{description:"An application that combines a mask generation model with a zero-shot object detection model for text-guided image segmentation.",id:"merve/OWLSAM2"},{description:"An application that compares the performance of a large and a small mask generation model.",id:"merve/slimsam"},{description:"An application based on an improved mask generation model.",id:"SkalskiP/segment-anything-model-2"},{description:"An application to remove objects from videos using mask generation models.",id:"SkalskiP/SAM_and_ProPainter"}],summary:"Mask generation is the task of generating masks that identify a specific object or region of interest in a given image. Masks are often used in segmentation tasks, where they provide a precise way to isolate the object of interest for further processing or analysis.",widgetModels:[],youtubeId:""},Zo={datasets:[{description:"Widely used benchmark dataset for multiple vision tasks.",id:"merve/coco2017"},{description:"Multi-task computer vision benchmark.",id:"merve/pascal-voc"}],demo:{inputs:[{filename:"object-detection-input.jpg",type:"img"}],outputs:[{filename:"object-detection-output.jpg",type:"img"}]},metrics:[{description:"The Average Precision (AP) metric is the Area Under the PR Curve (AUC-PR). It is calculated for each class separately",id:"Average Precision"},{description:"The Mean Average Precision (mAP) metric is the overall average of the AP values",id:"Mean Average Precision"},{description:"The APα metric is the Average Precision at the IoU threshold of a α value, for example, AP50 and AP75",id:"APα"}],models:[{description:"Solid object detection model pre-trained on the COCO 2017 dataset.",id:"facebook/detr-resnet-50"},{description:"Accurate object detection model.",id:"IDEA-Research/dab-detr-resnet-50"},{description:"Fast and accurate object detection model.",id:"PekingU/rtdetr_v2_r50vd"},{description:"Object detection model for low-lying objects.",id:"StephanST/WALDO30"}],spaces:[{description:"Real-time object detection demo.",id:"Roboflow/RF-DETR"},{description:"An application that contains various object detection models to try from.",id:"Gradio-Blocks/Object-Detection-With-DETR-and-YOLOS"},{description:"A cutting-edge object detection application.",id:"sunsmarterjieleaf/yolov12"},{description:"An object tracking, segmentation and inpainting application.",id:"VIPLab/Track-Anything"},{description:"Very fast object tracking application based on object detection.",id:"merve/RT-DETR-tracking-coco"}],summary:"Object Detection models allow users to identify objects of certain defined classes. Object detection models receive an image as input and output the images with bounding boxes and labels on detected objects.",widgetModels:["facebook/detr-resnet-50"],youtubeId:"WdAeKSOpxhw"},Go={datasets:[{description:"NYU Depth V2 Dataset: Video dataset containing both RGB and depth sensor data.",id:"sayakpaul/nyu_depth_v2"},{description:"Monocular depth estimation benchmark based without noise and errors.",id:"depth-anything/DA-2K"}],demo:{inputs:[{filename:"depth-estimation-input.jpg",type:"img"}],outputs:[{filename:"depth-estimation-output.png",type:"img"}]},metrics:[],models:[{description:"Cutting-edge depth estimation model.",id:"depth-anything/Depth-Anything-V2-Large"},{description:"A strong monocular depth estimation model.",id:"jingheya/lotus-depth-g-v1-0"},{description:"A depth estimation model that predicts depth in videos.",id:"tencent/DepthCrafter"},{description:"A robust depth estimation model.",id:"apple/DepthPro-hf"}],spaces:[{description:"An application that predicts the depth of an image and then reconstruct the 3D model as voxels.",id:"radames/dpt-depth-estimation-3d-voxels"},{description:"An application for bleeding-edge depth estimation.",id:"akhaliq/depth-pro"},{description:"An application on cutting-edge depth estimation in videos.",id:"tencent/DepthCrafter"},{description:"A human-centric depth estimation application.",id:"facebook/sapiens-depth"}],summary:"Depth estimation is the task of predicting depth of the objects present in an image.",widgetModels:[""],youtubeId:""},es={datasets:[],demo:{inputs:[],outputs:[]},isPlaceholder:!0,metrics:[],models:[],spaces:[],summary:"",widgetModels:[],youtubeId:void 0,canonicalId:void 0},ts={datasets:[{description:"A curation of widely used datasets for Data Driven Deep Reinforcement Learning (D4RL)",id:"edbeeching/decision_transformer_gym_replay"}],demo:{inputs:[{label:"State",content:"Red traffic light, pedestrians are about to pass.",type:"text"}],outputs:[{label:"Action",content:"Stop the car.",type:"text"},{label:"Next State",content:"Yellow light, pedestrians have crossed.",type:"text"}]},metrics:[{description:"Accumulated reward across all time steps discounted by a factor that ranges between 0 and 1 and determines how much the agent optimizes for future relative to immediate rewards. Measures how good is the policy ultimately found by a given algorithm considering uncertainty over the future.",id:"Discounted Total Reward"},{description:"Average return obtained after running the policy for a certain number of evaluation episodes. As opposed to total reward, mean reward considers how much reward a given algorithm receives while learning.",id:"Mean Reward"},{description:"Measures how good a given algorithm is after a predefined time. Some algorithms may be guaranteed to converge to optimal behavior across many time steps. However, an agent that reaches an acceptable level of optimality after a given time horizon may be preferable to one that ultimately reaches optimality but takes a long time.",id:"Level of Performance After Some Time"}],models:[{description:"A Reinforcement Learning model trained on expert data from the Gym Hopper environment",id:"edbeeching/decision-transformer-gym-hopper-expert"},{description:"A PPO agent playing seals/CartPole-v0 using the stable-baselines3 library and the RL Zoo.",id:"HumanCompatibleAI/ppo-seals-CartPole-v0"}],spaces:[{description:"An application for a cute puppy agent learning to catch a stick.",id:"ThomasSimonini/Huggy"},{description:"An application to play Snowball Fight with a reinforcement learning agent.",id:"ThomasSimonini/SnowballFight"}],summary:"Reinforcement learning is the computational approach of learning from action by interacting with an environment through trial and error and receiving rewards (negative or positive) as feedback",widgetModels:[],youtubeId:"q0BiUn5LiBc"},as={datasets:[{description:"A famous question answering dataset based on English articles from Wikipedia.",id:"squad_v2"},{description:"A dataset of aggregated anonymized actual queries issued to the Google search engine.",id:"natural_questions"}],demo:{inputs:[{label:"Question",content:"Which name is also used to describe the Amazon rainforest in English?",type:"text"},{label:"Context",content:"The Amazon rainforest, also known in English as Amazonia or the Amazon Jungle",type:"text"}],outputs:[{label:"Answer",content:"Amazonia",type:"text"}]},metrics:[{description:"Exact Match is a metric based on the strict character match of the predicted answer and the right answer. For answers predicted correctly, the Exact Match will be 1. Even if only one character is different, Exact Match will be 0",id:"exact-match"},{description:" The F1-Score metric is useful if we value both false positives and false negatives equally. The F1-Score is calculated on each word in the predicted sequence against the correct answer",id:"f1"}],models:[{description:"A robust baseline model for most question answering domains.",id:"deepset/roberta-base-squad2"},{description:"Small yet robust model that can answer questions.",id:"distilbert/distilbert-base-cased-distilled-squad"},{description:"A special model that can answer questions from tables.",id:"google/tapas-base-finetuned-wtq"}],spaces:[{description:"An application that can answer a long question from Wikipedia.",id:"deepset/wikipedia-assistant"}],summary:"Question Answering models can retrieve the answer to a question from a given text, which is useful for searching for an answer in a document. Some question answering models can generate answers without context!",widgetModels:["deepset/roberta-base-squad2"],youtubeId:"ajPx5LwJD-I"},ns={datasets:[{description:"Bing queries with relevant passages from various web sources.",id:"microsoft/ms_marco"}],demo:{inputs:[{label:"Source sentence",content:"Machine learning is so easy.",type:"text"},{label:"Sentences to compare to",content:"Deep learning is so straightforward.",type:"text"},{label:"",content:"This is so difficult, like rocket science.",type:"text"},{label:"",content:"I can't believe how much I struggled with this.",type:"text"}],outputs:[{type:"chart",data:[{label:"Deep learning is so straightforward.",score:.623},{label:"This is so difficult, like rocket science.",score:.413},{label:"I can't believe how much I struggled with this.",score:.256}]}]},metrics:[{description:"Reciprocal Rank is a measure used to rank the relevancy of documents given a set of documents. Reciprocal Rank is the reciprocal of the rank of the document retrieved, meaning, if the rank is 3, the Reciprocal Rank is 0.33. If the rank is 1, the Reciprocal Rank is 1",id:"Mean Reciprocal Rank"},{description:"The similarity of the embeddings is evaluated mainly on cosine similarity. It is calculated as the cosine of the angle between two vectors. It is particularly useful when your texts are not the same length",id:"Cosine Similarity"}],models:[{description:"This model works well for sentences and paragraphs and can be used for clustering/grouping and semantic searches.",id:"sentence-transformers/all-mpnet-base-v2"},{description:"A multilingual robust sentence similarity model.",id:"BAAI/bge-m3"},{description:"A robust sentence similarity model.",id:"HIT-TMG/KaLM-embedding-multilingual-mini-instruct-v1.5"}],spaces:[{description:"An application that leverages sentence similarity to answer questions from YouTube videos.",id:"Gradio-Blocks/Ask_Questions_To_YouTube_Videos"},{description:"An application that retrieves relevant PubMed abstracts for a given online article which can be used as further references.",id:"Gradio-Blocks/pubmed-abstract-retriever"},{description:"An application that leverages sentence similarity to summarize text.",id:"nickmuchi/article-text-summarizer"},{description:"A guide that explains how Sentence Transformers can be used for semantic search.",id:"sentence-transformers/Sentence_Transformers_for_semantic_search"}],summary:"Sentence Similarity is the task of determining how similar two texts are. Sentence similarity models convert input texts into vectors (embeddings) that capture semantic information and calculate how close (similar) they are between them. This task is particularly useful for information retrieval and clustering/grouping.",widgetModels:["sentence-transformers/all-MiniLM-L6-v2"],youtubeId:"VCZq5AkbNEU"},is={canonicalId:"text-generation",datasets:[{description:"News articles in five different languages along with their summaries. Widely used for benchmarking multilingual summarization models.",id:"mlsum"},{description:"English conversations and their summaries. Useful for benchmarking conversational agents.",id:"samsum"}],demo:{inputs:[{label:"Input",content:"The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. It was the first structure to reach a height of 300 metres. Excluding transmitters, the Eiffel Tower is the second tallest free-standing structure in France after the Millau Viaduct.",type:"text"}],outputs:[{label:"Output",content:"The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building. It was the first structure to reach a height of 300 metres.",type:"text"}]},metrics:[{description:"The generated sequence is compared against its summary, and the overlap of tokens are counted. ROUGE-N refers to overlap of N subsequent tokens, ROUGE-1 refers to overlap of single tokens and ROUGE-2 is the overlap of two subsequent tokens.",id:"rouge"}],models:[{description:"A strong summarization model trained on English news articles. Excels at generating factual summaries.",id:"facebook/bart-large-cnn"},{description:"A summarization model trained on medical articles.",id:"Falconsai/medical_summarization"}],spaces:[{description:"An application that can summarize long paragraphs.",id:"pszemraj/summarize-long-text"},{description:"A much needed summarization application for terms and conditions.",id:"ml6team/distilbart-tos-summarizer-tosdr"},{description:"An application that summarizes long documents.",id:"pszemraj/document-summarization"},{description:"An application that can detect errors in abstractive summarization.",id:"ml6team/post-processing-summarization"}],summary:"Summarization is the task of producing a shorter version of a document while preserving its important information. Some models can extract text from the original input, while other models can generate entirely new text.",widgetModels:["facebook/bart-large-cnn"],youtubeId:"yHnr5Dk2zCI"},os={datasets:[{description:"The WikiTableQuestions dataset is a large-scale dataset for the task of question answering on semi-structured tables.",id:"wikitablequestions"},{description:"WikiSQL is a dataset of 80654 hand-annotated examples of questions and SQL queries distributed across 24241 tables from Wikipedia.",id:"wikisql"}],demo:{inputs:[{table:[["Rank","Name","No.of reigns","Combined days"],["1","lou Thesz","3","3749"],["2","Ric Flair","8","3103"],["3","Harley Race","7","1799"]],type:"tabular"},{label:"Question",content:"What is the number of reigns for Harley Race?",type:"text"}],outputs:[{label:"Result",content:"7",type:"text"}]},metrics:[{description:"Checks whether the predicted answer(s) is the same as the ground-truth answer(s).",id:"Denotation Accuracy"}],models:[{description:"A table question answering model that is capable of neural SQL execution, i.e., employ TAPEX to execute a SQL query on a given table.",id:"microsoft/tapex-base"},{description:"A robust table question answering model.",id:"google/tapas-base-finetuned-wtq"}],spaces:[{description:"An application that answers questions based on table CSV files.",id:"katanaml/table-query"}],summary:"Table Question Answering (Table QA) is the answering a question about an information on a given table.",widgetModels:["google/tapas-base-finetuned-wtq"]},ss={datasets:[{description:"A comprehensive curation of datasets covering all benchmarks.",id:"inria-soda/tabular-benchmark"}],demo:{inputs:[{table:[["Glucose","Blood Pressure ","Skin Thickness","Insulin","BMI"],["148","72","35","0","33.6"],["150","50","30","0","35.1"],["141","60","29","1","39.2"]],type:"tabular"}],outputs:[{table:[["Diabetes"],["1"],["1"],["0"]],type:"tabular"}]},metrics:[{description:"",id:"accuracy"},{description:"",id:"recall"},{description:"",id:"precision"},{description:"",id:"f1"}],models:[{description:"Breast cancer prediction model based on decision trees.",id:"scikit-learn/cancer-prediction-trees"}],spaces:[{description:"An application that can predict defective products on a production line.",id:"scikit-learn/tabular-playground"},{description:"An application that compares various tabular classification techniques on different datasets.",id:"scikit-learn/classification"}],summary:"Tabular classification is the task of classifying a target category (a group) based on set of attributes.",widgetModels:["scikit-learn/tabular-playground"],youtubeId:""},rs={datasets:[{description:"A comprehensive curation of datasets covering all benchmarks.",id:"inria-soda/tabular-benchmark"}],demo:{inputs:[{table:[["Car Name","Horsepower","Weight"],["ford torino","140","3,449"],["amc hornet","97","2,774"],["toyota corolla","65","1,773"]],type:"tabular"}],outputs:[{table:[["MPG (miles per gallon)"],["17"],["18"],["31"]],type:"tabular"}]},metrics:[{description:"",id:"mse"},{description:"Coefficient of determination (or R-squared) is a measure of how well the model fits the data. Higher R-squared is considered a better fit.",id:"r-squared"}],models:[{description:"Fish weight prediction based on length measurements and species.",id:"scikit-learn/Fish-Weight"}],spaces:[{description:"An application that can predict weight of a fish based on set of attributes.",id:"scikit-learn/fish-weight-prediction"}],summary:"Tabular regression is the task of predicting a numerical value given a set of attributes.",widgetModels:["scikit-learn/Fish-Weight"],youtubeId:""},ls={datasets:[{description:"RedCaps is a large-scale dataset of 12M image-text pairs collected from Reddit.",id:"red_caps"},{description:"Conceptual Captions is a dataset consisting of ~3.3M images annotated with captions.",id:"conceptual_captions"},{description:"12M image-caption pairs.",id:"Spawning/PD12M"}],demo:{inputs:[{label:"Input",content:"A city above clouds, pastel colors, Victorian style",type:"text"}],outputs:[{filename:"image.jpeg",type:"img"}]},metrics:[{description:"The Inception Score (IS) measure assesses diversity and meaningfulness. It uses a generated image sample to predict its label. A higher score signifies more diverse and meaningful images.",id:"IS"},{description:"The Fréchet Inception Distance (FID) calculates the distance between distributions between synthetic and real samples. A lower FID score indicates better similarity between the distributions of real and generated images.",id:"FID"},{description:"R-precision assesses how the generated image aligns with the provided text description. It uses the generated images as queries to retrieve relevant text descriptions. The top 'r' relevant descriptions are selected and used to calculate R-precision as r/R, where 'R' is the number of ground truth descriptions associated with the generated images. A higher R-precision value indicates a better model.",id:"R-Precision"}],models:[{description:"One of the most powerful image generation models that can generate realistic outputs.",id:"black-forest-labs/FLUX.1-Krea-dev"},{description:"A powerful image generation model.",id:"Qwen/Qwen-Image"},{description:"Powerful and fast image generation model.",id:"ByteDance/SDXL-Lightning"},{description:"A powerful text-to-image model.",id:"ByteDance/Hyper-SD"}],spaces:[{description:"A powerful text-to-image application.",id:"stabilityai/stable-diffusion-3-medium"},{description:"A text-to-image application to generate comics.",id:"jbilcke-hf/ai-comic-factory"},{description:"An application to match multiple custom image generation models.",id:"multimodalart/flux-lora-lab"},{description:"A powerful yet very fast image generation application.",id:"latent-consistency/lcm-lora-for-sdxl"},{description:"A gallery to explore various text-to-image models.",id:"multimodalart/LoraTheExplorer"},{description:"An application for `text-to-image`, `image-to-image` and image inpainting.",id:"ArtGAN/Stable-Diffusion-ControlNet-WebUI"},{description:"An application to generate realistic images given photos of a person and a prompt.",id:"InstantX/InstantID"}],summary:"Text-to-image is the task of generating images from input text. These pipelines can also be used to modify and edit images based on text prompts.",widgetModels:["black-forest-labs/FLUX.1-dev"],youtubeId:""},cs={canonicalId:"text-to-audio",datasets:[{description:"10K hours of multi-speaker English dataset.",id:"parler-tts/mls_eng_10k"},{description:"Multi-speaker English dataset.",id:"mythicinfinity/libritts_r"},{description:"Multi-lingual dataset.",id:"facebook/multilingual_librispeech"}],demo:{inputs:[{label:"Input",content:"I love audio models on the Hub!",type:"text"}],outputs:[{filename:"audio.wav",type:"audio"}]},metrics:[{description:"The Mel Cepstral Distortion (MCD) metric is used to calculate the quality of generated speech.",id:"mel cepstral distortion"}],models:[{description:"Small yet powerful TTS model.",id:"KittenML/kitten-tts-nano-0.1"},{description:"Bleeding edge TTS model.",id:"ResembleAI/chatterbox"},{description:"A massively multi-lingual TTS model.",id:"fishaudio/fish-speech-1.5"},{description:"A text-to-dialogue model.",id:"nari-labs/Dia-1.6B-0626"}],spaces:[{description:"An application for generate high quality speech in different languages.",id:"hexgrad/Kokoro-TTS"},{description:"A multilingual text-to-speech application.",id:"fishaudio/fish-speech-1"},{description:"Performant TTS application.",id:"ResembleAI/Chatterbox"},{description:"An application to compare different TTS models.",id:"TTS-AGI/TTS-Arena-V2"},{description:"An application that generates podcast episodes.",id:"ngxson/kokoro-podcast-generator"}],summary:"Text-to-Speech (TTS) is the task of generating natural sounding speech given text input. TTS models can be extended to have a single model that generates speech for multiple speakers and multiple languages.",widgetModels:["suno/bark"],youtubeId:"NW62DpzJ274"},ds={datasets:[{description:"A widely used dataset useful to benchmark named entity recognition models.",id:"eriktks/conll2003"},{description:"A multilingual dataset of Wikipedia articles annotated for named entity recognition in over 150 different languages.",id:"unimelb-nlp/wikiann"}],demo:{inputs:[{label:"Input",content:"My name is Omar and I live in Zürich.",type:"text"}],outputs:[{text:"My name is Omar and I live in Zürich.",tokens:[{type:"PERSON",start:11,end:15},{type:"GPE",start:30,end:36}],type:"text-with-tokens"}]},metrics:[{description:"",id:"accuracy"},{description:"",id:"recall"},{description:"",id:"precision"},{description:"",id:"f1"}],models:[{description:"A robust performance model to identify people, locations, organizations and names of miscellaneous entities.",id:"dslim/bert-base-NER"},{description:"A strong model to identify people, locations, organizations and names in multiple languages.",id:"FacebookAI/xlm-roberta-large-finetuned-conll03-english"},{description:"A token classification model specialized on medical entity recognition.",id:"blaze999/Medical-NER"},{description:"Flair models are typically the state of the art in named entity recognition tasks.",id:"flair/ner-english"}],spaces:[{description:"An application that can recognizes entities, extracts noun chunks and recognizes various linguistic features of each token.",id:"spacy/gradio_pipeline_visualizer"}],summary:"Token classification is a natural language understanding task in which a label is assigned to some tokens in a text. Some popular token classification subtasks are Named Entity Recognition (NER) and Part-of-Speech (PoS) tagging. NER models could be trained to identify specific entities in a text, such as dates, individuals and places; and PoS tagging would identify, for example, which words in a text are verbs, nouns, and punctuation marks.",widgetModels:["FacebookAI/xlm-roberta-large-finetuned-conll03-english"],youtubeId:"wVHdVlPScxA"},ps={canonicalId:"text-generation",datasets:[{description:"A dataset of copyright-free books translated into 16 different languages.",id:"Helsinki-NLP/opus_books"},{description:"An example of translation between programming languages. This dataset consists of functions in Java and C#.",id:"google/code_x_glue_cc_code_to_code_trans"}],demo:{inputs:[{label:"Input",content:"My name is Omar and I live in Zürich.",type:"text"}],outputs:[{label:"Output",content:"Mein Name ist Omar und ich wohne in Zürich.",type:"text"}]},metrics:[{description:"BLEU score is calculated by counting the number of shared single or subsequent tokens between the generated sequence and the reference. Subsequent n tokens are called “n-grams”. Unigram refers to a single token while bi-gram refers to token pairs and n-grams refer to n subsequent tokens. The score ranges from 0 to 1, where 1 means the translation perfectly matched and 0 did not match at all",id:"bleu"},{description:"",id:"sacrebleu"}],models:[{description:"Very powerful model that can translate many languages between each other, especially low-resource languages.",id:"facebook/nllb-200-1.3B"},{description:"A general-purpose Transformer that can be used to translate from English to German, French, or Romanian.",id:"google-t5/t5-base"}],spaces:[{description:"An application that can translate between 100 languages.",id:"Iker/Translate-100-languages"},{description:"An application that can translate between many languages.",id:"Geonmo/nllb-translation-demo"}],summary:"Translation is the task of converting text from one language to another.",widgetModels:["facebook/mbart-large-50-many-to-many-mmt"],youtubeId:"1JvfrvZgi6c"},us={datasets:[{description:"A widely used dataset used to benchmark multiple variants of text classification.",id:"nyu-mll/glue"},{description:"A text classification dataset used to benchmark natural language inference models",id:"stanfordnlp/snli"}],demo:{inputs:[{label:"Input",content:"I love Hugging Face!",type:"text"}],outputs:[{type:"chart",data:[{label:"POSITIVE",score:.9},{label:"NEUTRAL",score:.1},{label:"NEGATIVE",score:0}]}]},metrics:[{description:"",id:"accuracy"},{description:"",id:"recall"},{description:"",id:"precision"},{description:"The F1 metric is the harmonic mean of the precision and recall. It can be calculated as: F1 = 2 * (precision * recall) / (precision + recall)",id:"f1"}],models:[{description:"A robust model trained for sentiment analysis.",id:"distilbert/distilbert-base-uncased-finetuned-sst-2-english"},{description:"A sentiment analysis model specialized in financial sentiment.",id:"ProsusAI/finbert"},{description:"A sentiment analysis model specialized in analyzing tweets.",id:"cardiffnlp/twitter-roberta-base-sentiment-latest"},{description:"A model that can classify languages.",id:"papluca/xlm-roberta-base-language-detection"},{description:"A model that can classify text generation attacks.",id:"meta-llama/Prompt-Guard-86M"}],spaces:[{description:"An application that can classify financial sentiment.",id:"IoannisTr/Tech_Stocks_Trading_Assistant"},{description:"A dashboard that contains various text classification tasks.",id:"miesnerjacob/Multi-task-NLP"},{description:"An application that analyzes user reviews in healthcare.",id:"spacy/healthsea-demo"}],summary:"Text Classification is the task of assigning a label or class to a given text. Some use cases are sentiment analysis, natural language inference, and assessing grammatical correctness.",widgetModels:["distilbert/distilbert-base-uncased-finetuned-sst-2-english"],youtubeId:"leNG9fN9FQU"},ms={datasets:[{description:"Multilingual dataset used to evaluate text generation models.",id:"CohereForAI/Global-MMLU"},{description:"High quality multilingual data used to train text-generation models.",id:"HuggingFaceFW/fineweb-2"},{description:"Truly open-source, curated and cleaned dialogue dataset.",id:"HuggingFaceH4/ultrachat_200k"},{description:"A reasoning dataset.",id:"open-r1/OpenThoughts-114k-math"},{description:"A multilingual instruction dataset with preference ratings on responses.",id:"allenai/tulu-3-sft-mixture"},{description:"A large synthetic dataset for alignment of text generation models.",id:"HuggingFaceTB/smoltalk"},{description:"A dataset made for training text generation models solving math questions.",id:"HuggingFaceTB/finemath"}],demo:{inputs:[{label:"Input",content:"Once upon a time,",type:"text"}],outputs:[{label:"Output",content:"Once upon a time, we knew that our ancestors were on the verge of extinction. The great explorers and poets of the Old World, from Alexander the Great to Chaucer, are dead and gone. A good many of our ancient explorers and poets have",type:"text"}]},metrics:[{description:"Cross Entropy is a metric that calculates the difference between two probability distributions. Each probability distribution is the distribution of predicted words",id:"Cross Entropy"},{description:"The Perplexity metric is the exponential of the cross-entropy loss. It evaluates the probabilities assigned to the next word by the model. Lower perplexity indicates better performance",id:"Perplexity"}],models:[{description:"A text-generation model trained to follow instructions.",id:"google/gemma-2-2b-it"},{description:"Powerful text generation model for coding.",id:"Qwen/Qwen3-Coder-480B-A35B-Instruct"},{description:"Great text generation model with top-notch tool calling capabilities.",id:"openai/gpt-oss-120b"},{description:"Powerful text generation model.",id:"zai-org/GLM-4.5"},{description:"A powerful small model with reasoning capabilities.",id:"Qwen/Qwen3-4B-Thinking-2507"},{description:"Strong conversational model that supports very long instructions.",id:"Qwen/Qwen2.5-7B-Instruct-1M"},{description:"Text generation model used to write code.",id:"Qwen/Qwen2.5-Coder-32B-Instruct"},{description:"Powerful reasoning based open large language model.",id:"deepseek-ai/DeepSeek-R1"}],spaces:[{description:"An application that writes and executes code from text instructions and supports many models.",id:"akhaliq/anycoder"},{description:"An application that builds websites from natural language prompts.",id:"enzostvs/deepsite"},{description:"A leaderboard for comparing chain-of-thought performance of models.",id:"logikon/open_cot_leaderboard"},{description:"An text generation based application based on a very powerful LLaMA2 model.",id:"ysharma/Explore_llamav2_with_TGI"},{description:"An text generation based application to converse with Zephyr model.",id:"HuggingFaceH4/zephyr-chat"},{description:"A leaderboard that ranks text generation models based on blind votes from people.",id:"lmsys/chatbot-arena-leaderboard"},{description:"An chatbot to converse with a very powerful text generation model.",id:"mlabonne/phixtral-chat"}],summary:"Generating text is the task of generating new text given another text. These models can, for example, fill in incomplete text or paraphrase.",widgetModels:["mistralai/Mistral-Nemo-Instruct-2407"],youtubeId:"e9gNEAlsOvU"},fs={datasets:[{description:"Bing queries with relevant passages from various web sources.",id:"microsoft/ms_marco"}],demo:{inputs:[{label:"Source sentence",content:"Machine learning is so easy.",type:"text"},{label:"Sentences to compare to",content:"Deep learning is so straightforward.",type:"text"},{label:"",content:"This is so difficult, like rocket science.",type:"text"},{label:"",content:"I can't believe how much I struggled with this.",type:"text"}],outputs:[{type:"chart",data:[{label:"Deep learning is so straightforward.",score:2.2006407},{label:"This is so difficult, like rocket science.",score:-6.2634873},{label:"I can't believe how much I struggled with this.",score:-10.251488}]}]},metrics:[{description:"Discounted Cumulative Gain (DCG) measures the gain, or usefulness, of search results discounted by their position. The normalization is done by dividing the DCG by the ideal DCG, which is the DCG of the perfect ranking.",id:"Normalized Discounted Cumulative Gain"},{description:"Reciprocal Rank is a measure used to rank the relevancy of documents given a set of documents. Reciprocal Rank is the reciprocal of the rank of the document retrieved, meaning, if the rank is 3, the Reciprocal Rank is 0.33. If the rank is 1, the Reciprocal Rank is 1",id:"Mean Reciprocal Rank"},{description:"Mean Average Precision (mAP) is the overall average of the Average Precision (AP) values, where AP is the Area Under the PR Curve (AUC-PR)",id:"Mean Average Precision"}],models:[{description:"An extremely efficient text ranking model trained on a web search dataset.",id:"cross-encoder/ms-marco-MiniLM-L6-v2"},{description:"A strong multilingual text reranker model.",id:"Alibaba-NLP/gte-multilingual-reranker-base"},{description:"An efficient text ranking model that punches above its weight.",id:"Alibaba-NLP/gte-reranker-modernbert-base"}],spaces:[],summary:"Text Ranking is the task of ranking a set of texts based on their relevance to a query. Text ranking models are trained on large datasets of queries and relevant documents to learn how to rank documents based on their relevance to the query. This task is particularly useful for search engines and information retrieval systems.",widgetModels:["cross-encoder/ms-marco-MiniLM-L6-v2"],youtubeId:""},gs={datasets:[{description:"Microsoft Research Video to Text is a large-scale dataset for open domain video captioning",id:"iejMac/CLIP-MSR-VTT"},{description:"UCF101 Human Actions dataset consists of 13,320 video clips from YouTube, with 101 classes.",id:"quchenyuan/UCF101-ZIP"},{description:"A high-quality dataset for human action recognition in YouTube videos.",id:"nateraw/kinetics"},{description:"A dataset of video clips of humans performing pre-defined basic actions with everyday objects.",id:"HuggingFaceM4/something_something_v2"},{description:"This dataset consists of text-video pairs and contains noisy samples with irrelevant video descriptions",id:"HuggingFaceM4/webvid"},{description:"A dataset of short Flickr videos for the temporal localization of events with descriptions.",id:"iejMac/CLIP-DiDeMo"}],demo:{inputs:[{label:"Input",content:"Darth Vader is surfing on the waves.",type:"text"}],outputs:[{filename:"text-to-video-output.gif",type:"img"}]},metrics:[{description:"Inception Score uses an image classification model that predicts class labels and evaluates how distinct and diverse the images are. A higher score indicates better video generation.",id:"is"},{description:"Frechet Inception Distance uses an image classification model to obtain image embeddings. The metric compares mean and standard deviation of the embeddings of real and generated images. A smaller score indicates better video generation.",id:"fid"},{description:"Frechet Video Distance uses a model that captures coherence for changes in frames and the quality of each frame. A smaller score indicates better video generation.",id:"fvd"},{description:"CLIPSIM measures similarity between video frames and text using an image-text similarity model. A higher score indicates better video generation.",id:"clipsim"}],models:[{description:"A strong model for consistent video generation.",id:"tencent/HunyuanVideo"},{description:"A text-to-video model with high fidelity motion and strong prompt adherence.",id:"Lightricks/LTX-Video"},{description:"A text-to-video model focusing on physics-aware applications like robotics.",id:"nvidia/Cosmos-1.0-Diffusion-7B-Text2World"},{description:"Very fast model for video generation.",id:"Lightricks/LTX-Video-0.9.8-13B-distilled"}],spaces:[{description:"An application that generates video from text.",id:"VideoCrafter/VideoCrafter"},{description:"Consistent video generation application.",id:"Wan-AI/Wan2.1"},{description:"A cutting edge video generation application.",id:"Pyramid-Flow/pyramid-flow"}],summary:"Text-to-video models can be used in any application that requires generating consistent sequence of images from text. ",widgetModels:["Wan-AI/Wan2.2-TI2V-5B"],youtubeId:void 0},hs={datasets:[{description:"The CIFAR-100 dataset consists of 60000 32x32 colour images in 100 classes, with 600 images per class.",id:"cifar100"},{description:"Multiple images of celebrities, used for facial expression translation.",id:"CelebA"}],demo:{inputs:[{label:"Seed",content:"42",type:"text"},{label:"Number of images to generate:",content:"4",type:"text"}],outputs:[{filename:"unconditional-image-generation-output.jpeg",type:"img"}]},metrics:[{description:"The inception score (IS) evaluates the quality of generated images. It measures the diversity of the generated images (the model predictions are evenly distributed across all possible labels) and their 'distinction' or 'sharpness' (the model confidently predicts a single label for each image).",id:"Inception score (IS)"},{description:"The Fréchet Inception Distance (FID) evaluates the quality of images created by a generative model by calculating the distance between feature vectors for real and generated images.",id:"Frećhet Inception Distance (FID)"}],models:[{description:"High-quality image generation model trained on the CIFAR-10 dataset. It synthesizes images of the ten classes presented in the dataset using diffusion probabilistic models, a class of latent variable models inspired by considerations from nonequilibrium thermodynamics.",id:"google/ddpm-cifar10-32"},{description:"High-quality image generation model trained on the 256x256 CelebA-HQ dataset. It synthesizes images of faces using diffusion probabilistic models, a class of latent variable models inspired by considerations from nonequilibrium thermodynamics.",id:"google/ddpm-celebahq-256"}],spaces:[{description:"An application that can generate realistic faces.",id:"CompVis/celeba-latent-diffusion"}],summary:"Unconditional image generation is the task of generating images with no condition in any context (like a prompt text or another image). Once trained, the model will create images that resemble its training data distribution.",widgetModels:[""],youtubeId:""},bs={datasets:[{description:"Benchmark dataset used for video classification with videos that belong to 400 classes.",id:"kinetics400"}],demo:{inputs:[{filename:"video-classification-input.gif",type:"img"}],outputs:[{type:"chart",data:[{label:"Playing Guitar",score:.514},{label:"Playing Tennis",score:.193},{label:"Cooking",score:.068}]}]},metrics:[{description:"",id:"accuracy"},{description:"",id:"recall"},{description:"",id:"precision"},{description:"",id:"f1"}],models:[{description:"Strong Video Classification model trained on the Kinetics 400 dataset.",id:"google/vivit-b-16x2-kinetics400"},{description:"Strong Video Classification model trained on the Kinetics 400 dataset.",id:"microsoft/xclip-base-patch32"}],spaces:[{description:"An application that classifies video at different timestamps.",id:"nateraw/lavila"},{description:"An application that classifies video.",id:"fcakyon/video-classification"}],summary:"Video classification is the task of assigning a label or class to an entire video. Videos are expected to have only one class for each video. Video classification models take a video as input and return a prediction about which class the video belongs to.",widgetModels:[],youtubeId:""},ys={datasets:[{description:"A large dataset used to train visual document retrieval models.",id:"vidore/colpali_train_set"}],demo:{inputs:[{filename:"input.png",type:"img"},{label:"Question",content:"Is the model in this paper the fastest for inference?",type:"text"}],outputs:[{type:"chart",data:[{label:"Page 10",score:.7},{label:"Page 11",score:.06},{label:"Page 9",score:.003}]}]},isPlaceholder:!1,metrics:[{description:"NDCG@k scores ranked recommendation lists for top-k results. 0 is the worst, 1 is the best.",id:"Normalized Discounted Cumulative Gain at K"}],models:[{description:"Very accurate visual document retrieval model for multilingual queries and documents.",id:"vidore/colqwen2-v1.0"},{description:"Very fast and efficient visual document retrieval model that can also take in other modalities like audio.",id:"Tevatron/OmniEmbed-v0.1"}],spaces:[{description:"A leaderboard of visual document retrieval models.",id:"vidore/vidore-leaderboard"},{description:"Visual retrieval augmented generation demo based on ColQwen2 model.",id:"vidore/visual-rag-tool"}],summary:"Visual document retrieval is the task of searching for relevant image-based documents, such as PDFs. These models take a text query and multiple documents as input and return the top-most relevant documents and relevancy scores as output.",widgetModels:[""],youtubeId:""},vs={datasets:[{description:"A widely used dataset containing questions (with answers) about images.",id:"Graphcore/vqa"},{description:"A dataset to benchmark visual reasoning based on text in images.",id:"facebook/textvqa"}],demo:{inputs:[{filename:"elephant.jpeg",type:"img"},{label:"Question",content:"What is in this image?",type:"text"}],outputs:[{type:"chart",data:[{label:"elephant",score:.97},{label:"elephants",score:.06},{label:"animal",score:.003}]}]},isPlaceholder:!1,metrics:[{description:"",id:"accuracy"},{description:"Measures how much a predicted answer differs from the ground truth based on the difference in their semantic meaning.",id:"wu-palmer similarity"}],models:[{description:"A visual question answering model trained to convert charts and plots to text.",id:"google/deplot"},{description:"A visual question answering model trained for mathematical reasoning and chart derendering from images.",id:"google/matcha-base"},{description:"A strong visual question answering that answers questions from book covers.",id:"google/pix2struct-ocrvqa-large"}],spaces:[{description:"An application that compares visual question answering models across different tasks.",id:"merve/pix2struct"},{description:"An application that can answer questions based on images.",id:"nielsr/vilt-vqa"},{description:"An application that can caption images and answer questions about a given image. ",id:"Salesforce/BLIP"},{description:"An application that can caption images and answer questions about a given image. ",id:"vumichien/Img2Prompt"}],summary:"Visual Question Answering is the task of answering open-ended questions based on an image. They output natural language responses to natural language questions.",widgetModels:["dandelin/vilt-b32-finetuned-vqa"],youtubeId:""},ws={datasets:[{description:"A widely used dataset used to benchmark multiple variants of text classification.",id:"nyu-mll/glue"},{description:"The Multi-Genre Natural Language Inference (MultiNLI) corpus is a crowd-sourced collection of 433k sentence pairs annotated with textual entailment information.",id:"nyu-mll/multi_nli"},{description:"FEVER is a publicly available dataset for fact extraction and verification against textual sources.",id:"fever/fever"}],demo:{inputs:[{label:"Text Input",content:"Dune is the best movie ever.",type:"text"},{label:"Candidate Labels",content:"CINEMA, ART, MUSIC",type:"text"}],outputs:[{type:"chart",data:[{label:"CINEMA",score:.9},{label:"ART",score:.1},{label:"MUSIC",score:0}]}]},metrics:[],models:[{description:"Powerful zero-shot text classification model.",id:"facebook/bart-large-mnli"},{description:"Cutting-edge zero-shot multilingual text classification model.",id:"MoritzLaurer/ModernBERT-large-zeroshot-v2.0"},{description:"Zero-shot text classification model that can be used for topic and sentiment classification.",id:"knowledgator/gliclass-modern-base-v2.0-init"}],spaces:[],summary:"Zero-shot text classification is a task in natural language processing where a model is trained on a set of labeled examples but is then able to classify new examples from previously unseen classes.",widgetModels:["facebook/bart-large-mnli"]},_s={datasets:[{description:"",id:""}],demo:{inputs:[{filename:"image-classification-input.jpeg",type:"img"},{label:"Classes",content:"cat, dog, bird",type:"text"}],outputs:[{type:"chart",data:[{label:"Cat",score:.664},{label:"Dog",score:.329},{label:"Bird",score:.008}]}]},metrics:[{description:"Computes the number of times the correct label appears in top K labels predicted",id:"top-K accuracy"}],models:[{description:"Multilingual image classification model for 80 languages.",id:"visheratin/mexma-siglip"},{description:"Strong zero-shot image classification model.",id:"google/siglip2-base-patch16-224"},{description:"Robust zero-shot image classification model.",id:"intfloat/mmE5-mllama-11b-instruct"},{description:"Powerful zero-shot image classification model supporting 94 languages.",id:"jinaai/jina-clip-v2"},{description:"Strong image classification model for biomedical domain.",id:"microsoft/BiomedCLIP-PubMedBERT_256-vit_base_patch16_224"}],spaces:[{description:"An application that leverages zero-shot image classification to find best captions to generate an image. ",id:"pharma/CLIP-Interrogator"},{description:"An application to compare different zero-shot image classification models. ",id:"merve/compare_clip_siglip"}],summary:"Zero-shot image classification is the task of classifying previously unseen classes during training of a model.",widgetModels:["google/siglip-so400m-patch14-224"],youtubeId:""},xs={datasets:[],demo:{inputs:[{filename:"zero-shot-object-detection-input.jpg",type:"img"},{label:"Classes",content:"cat, dog, bird",type:"text"}],outputs:[{filename:"zero-shot-object-detection-output.jpg",type:"img"}]},metrics:[{description:"The Average Precision (AP) metric is the Area Under the PR Curve (AUC-PR). It is calculated for each class separately",id:"Average Precision"},{description:"The Mean Average Precision (mAP) metric is the overall average of the AP values",id:"Mean Average Precision"},{description:"The APα metric is the Average Precision at the IoU threshold of a α value, for example, AP50 and AP75",id:"APα"}],models:[{description:"Solid zero-shot object detection model.",id:"openmmlab-community/mm_grounding_dino_large_all"},{description:"Cutting-edge zero-shot object detection model.",id:"fushh7/LLMDet"}],spaces:[{description:"A demo to compare different zero-shot object detection models per output and latency.",id:"ariG23498/zero-shot-od"},{description:"A demo that combines a zero-shot object detection and mask generation model for zero-shot segmentation.",id:"merve/OWLSAM"}],summary:"Zero-shot object detection is a computer vision task to detect objects and their classes in images, without any prior training or knowledge of the classes. Zero-shot object detection models receive an image as input, as well as a list of candidate classes, and output the bounding boxes and labels where the objects have been detected.",widgetModels:[],youtubeId:""},ks={datasets:[{description:"A large dataset of over 10 million 3D objects.",id:"allenai/objaverse-xl"},{description:"A dataset of isolated object images for evaluating image-to-3D models.",id:"dylanebert/iso3d"}],demo:{inputs:[{filename:"image-to-3d-image-input.png",type:"img"}],outputs:[{label:"Result",content:"image-to-3d-3d-output-filename.glb",type:"text"}]},metrics:[],models:[{description:"Fast image-to-3D mesh model by Tencent.",id:"TencentARC/InstantMesh"},{description:"3D world generation model.",id:"tencent/HunyuanWorld-1"},{description:"A scaled up image-to-3D mesh model derived from TripoSR.",id:"hwjiang/Real3D"},{description:"Consistent image-to-3d generation model.",id:"stabilityai/stable-point-aware-3d"}],spaces:[{description:"Leaderboard to evaluate image-to-3D models.",id:"dylanebert/3d-arena"},{description:"Image-to-3D demo with mesh outputs.",id:"TencentARC/InstantMesh"},{description:"Image-to-3D demo.",id:"stabilityai/stable-point-aware-3d"},{description:"Image-to-3D demo with mesh outputs.",id:"hwjiang/Real3D"},{description:"Image-to-3D demo with splat outputs.",id:"dylanebert/LGM-mini"}],summary:"Image-to-3D models take in image input and produce 3D output.",widgetModels:[],youtubeId:""},As={datasets:[{description:"A large dataset of over 10 million 3D objects.",id:"allenai/objaverse-xl"},{description:"Descriptive captions for 3D objects in Objaverse.",id:"tiange/Cap3D"}],demo:{inputs:[{label:"Prompt",content:"a cat statue",type:"text"}],outputs:[{label:"Result",content:"text-to-3d-3d-output-filename.glb",type:"text"}]},metrics:[],models:[{description:"Text-to-3D mesh model by OpenAI",id:"openai/shap-e"},{description:"Generative 3D gaussian splatting model.",id:"ashawkey/LGM"}],spaces:[{description:"Text-to-3D demo with mesh outputs.",id:"hysts/Shap-E"},{description:"Text/image-to-3D demo with splat outputs.",id:"ashawkey/LGM"}],summary:"Text-to-3D models take in text input and produce 3D output.",widgetModels:[],youtubeId:""},Is={datasets:[{description:"A dataset of hand keypoints of over 500k examples.",id:"Vincent-luo/hagrid-mediapipe-hands"}],demo:{inputs:[{filename:"keypoint-detection-input.png",type:"img"}],outputs:[{filename:"keypoint-detection-output.png",type:"img"}]},metrics:[],models:[{description:"A robust keypoint detection model.",id:"magic-leap-community/superpoint"},{description:"A robust keypoint matching model.",id:"magic-leap-community/superglue_outdoor"},{description:"Strong keypoint detection model used to detect human pose.",id:"qualcomm/RTMPose-Body2d"},{description:"Powerful keypoint matching model.",id:"ETH-CVG/lightglue_disk"}],spaces:[{description:"An application that detects hand keypoints in real-time.",id:"datasciencedojo/Hand-Keypoint-Detection-Realtime"},{description:"An application for keypoint detection and matching.",id:"ETH-CVG/LightGlue"}],summary:"Keypoint detection is the task of identifying meaningful distinctive points or features in an image.",widgetModels:[],youtubeId:""},Ts={datasets:[{description:"Multiple-choice questions and answers about videos.",id:"lmms-lab/Video-MME"},{description:"A dataset of instructions and question-answer pairs about videos.",id:"lmms-lab/VideoChatGPT"},{description:"Large video understanding dataset.",id:"HuggingFaceFV/finevideo"}],demo:{inputs:[{filename:"video-text-to-text-input.gif",type:"img"},{label:"Text Prompt",content:"What is happening in this video?",type:"text"}],outputs:[{label:"Answer",content:"The video shows a series of images showing a fountain with water jets and a variety of colorful flowers and butterflies in the background.",type:"text"}]},metrics:[],models:[{description:"A robust video-text-to-text model.",id:"Vision-CAIR/LongVU_Qwen2_7B"},{description:"Strong video-text-to-text model with reasoning capabilities.",id:"GoodiesHere/Apollo-LMMs-Apollo-7B-t32"},{description:"Strong video-text-to-text model.",id:"HuggingFaceTB/SmolVLM2-2.2B-Instruct"}],spaces:[{description:"An application to chat with a video-text-to-text model.",id:"llava-hf/video-llava"},{description:"A leaderboard for various video-text-to-text models.",id:"opencompass/openvlm_video_leaderboard"},{description:"An application to generate highlights from a video.",id:"HuggingFaceTB/SmolVLM2-HighlightGenerator"}],summary:"Video-text-to-text models take in a video and a text prompt and output text. These models are also called video-language models.",widgetModels:[""],youtubeId:""},Ss={datasets:[{description:"Dataset with detailed annotations for training and benchmarking video instance editing.",id:"suimu/VIRESET"},{description:"Dataset to evaluate models on long video generation and understanding.",id:"zhangsh2001/LongV-EVAL"},{description:"Collection of 104 demo videos from the SeedVR/SeedVR2 series showcasing model outputs.",id:"Iceclear/SeedVR_VideoDemos"}],demo:{inputs:[{filename:"input.gif",type:"img"}],outputs:[{filename:"output.gif",type:"img"}]},metrics:[],models:[{description:"Model for editing outfits, character, and scenery in videos.",id:"decart-ai/Lucy-Edit-Dev"},{description:"Framework that uses 3D mesh proxies for precise, consistent video editing.",id:"LeoLau/Shape-for-Motion"},{description:"Model for generating physics-aware videos from input videos and control conditions.",id:"nvidia/Cosmos-Transfer2.5-2B"},{description:"A model to upscale videos at input, designed for seamless use with ComfyUI.",id:"numz/SeedVR2_comfyUI"}],spaces:[{description:"Interactive demo space for Lucy-Edit-Dev video editing.",id:"decart-ai/lucy-edit-dev"},{description:"Demo space for SeedVR2-3B showcasing video upscaling and restoration.",id:"ByteDance-Seed/SeedVR2-3B"}],summary:"Video-to-video models take one or more videos as input and generate new videos as output. They can enhance quality, interpolate frames, modify styles, or create new motion dynamics, enabling creative applications, video production, and research.",widgetModels:[],youtubeId:""},Es={"audio-classification":["speechbrain","transformers","transformers.js"],"audio-to-audio":["asteroid","fairseq","speechbrain"],"automatic-speech-recognition":["espnet","nemo","speechbrain","transformers","transformers.js"],"audio-text-to-text":["transformers"],"depth-estimation":["transformers","transformers.js"],"document-question-answering":["transformers","transformers.js"],"feature-extraction":["sentence-transformers","transformers","transformers.js"],"fill-mask":["transformers","transformers.js"],"graph-ml":["transformers"],"image-classification":["keras","timm","transformers","transformers.js"],"image-feature-extraction":["timm","transformers"],"image-segmentation":["transformers","transformers.js"],"image-text-to-text":["transformers"],"image-to-image":["diffusers","transformers","transformers.js"],"image-to-text":["transformers","transformers.js"],"image-to-video":["diffusers"],"keypoint-detection":["transformers"],"video-classification":["transformers"],"mask-generation":["transformers"],"multiple-choice":["transformers"],"object-detection":["transformers","transformers.js","ultralytics"],other:[],"question-answering":["adapter-transformers","allennlp","transformers","transformers.js"],robotics:[],"reinforcement-learning":["transformers","stable-baselines3","ml-agents","sample-factory"],"sentence-similarity":["sentence-transformers","spacy","transformers.js"],summarization:["transformers","transformers.js"],"table-question-answering":["transformers"],"table-to-text":["transformers"],"tabular-classification":["sklearn"],"tabular-regression":["sklearn"],"tabular-to-text":["transformers"],"text-classification":["adapter-transformers","setfit","spacy","transformers","transformers.js"],"text-generation":["transformers","transformers.js"],"text-ranking":["sentence-transformers","transformers"],"text-retrieval":[],"text-to-image":["diffusers"],"text-to-speech":["espnet","tensorflowtts","transformers","transformers.js"],"text-to-audio":["transformers","transformers.js"],"text-to-video":["diffusers"],"time-series-forecasting":[],"token-classification":["adapter-transformers","flair","spacy","span-marker","stanza","transformers","transformers.js"],translation:["transformers","transformers.js"],"unconditional-image-generation":["diffusers"],"video-text-to-text":["transformers"],"visual-question-answering":["transformers","transformers.js"],"voice-activity-detection":[],"zero-shot-classification":["transformers","transformers.js"],"zero-shot-image-classification":["transformers","transformers.js"],"zero-shot-object-detection":["transformers","transformers.js"],"text-to-3d":["diffusers"],"image-to-3d":["diffusers"],"any-to-any":["transformers"],"visual-document-retrieval":["transformers"],"video-to-video":["diffusers"]};function x(e,t=es){return{...t,id:e,label:ut[e].name,libraries:Es[e]}}x("any-to-any",Mo),x("audio-classification",No),x("audio-to-audio",Bo),x("audio-text-to-text",Uo),x("automatic-speech-recognition",Oo),x("depth-estimation",Go),x("document-question-answering",qo),x("visual-document-retrieval",ys),x("feature-extraction",Fo),x("fill-mask",Ho),x("image-classification",Vo),x("image-feature-extraction",zo),x("image-segmentation",Qo),x("image-to-image",Ko),x("image-text-to-text",Xo),x("image-to-text",Wo),x("image-to-video",Jo),x("keypoint-detection",Is),x("mask-generation",Yo),x("object-detection",Zo),x("video-classification",bs),x("question-answering",as),x("reinforcement-learning",ts),x("sentence-similarity",ns),x("summarization",is),x("table-question-answering",os),x("tabular-classification",ss),x("tabular-regression",rs),x("text-classification",us),x("text-generation",ms),x("text-ranking",fs),x("text-to-image",ls),x("text-to-speech",cs),x("text-to-video",gs),x("token-classification",ds),x("translation",ps),x("unconditional-image-generation",hs),x("video-text-to-text",Ts),x("video-to-video",Ss),x("visual-question-answering",vs),x("zero-shot-classification",ws),x("zero-shot-image-classification",_s),x("zero-shot-object-detection",xs),x("text-to-3d",As),x("image-to-3d",ks);const Ps=()=>'"Hi, I recently bought a device from your company but it is not working as advertised and I would like to get reimbursed!"',Cs=()=>'"Меня зовут Вольфганг и я живу в Берлине"',Ds=()=>'"The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest man-made structure in the world, a title it held for 41 years until the Chrysler Building in New York City was finished in 1930. It was the first structure to reach a height of 300 metres. Due to the addition of a broadcasting aerial at the top of the tower in 1957, it is now taller than the Chrysler Building by 5.2 metres (17 ft). Excluding transmitters, the Eiffel Tower is the second tallest free-standing structure in France after the Millau Viaduct."',Rs=()=>`{
    "query": "How many stars does the transformers repository have?",
    "table": {
        "Repository": ["Transformers", "Datasets", "Tokenizers"],
        "Stars": ["36542", "4512", "3934"],
        "Contributors": ["651", "77", "34"],
        "Programming language": [
            "Python",
            "Python",
            "Rust, Python and NodeJS"
        ]
    }
}`,$s=()=>`{
        "image": "cat.png",
        "question": "What is in this image?"
    }`,js=()=>`{
    "question": "What is my name?",
    "context": "My name is Clara and I live in Berkeley."
}`,Ls=()=>'"I like you. I love you"',Ms=()=>'"My name is Sarah Jessica Parker but you can call me Jessica"',Dt=e=>e.tags.includes("conversational")?e.pipeline_tag==="text-generation"?[{role:"user",content:"What is the capital of France?"}]:[{role:"user",content:[{type:"text",text:"Describe this image in one sentence."},{type:"image_url",image_url:{url:"https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg"}}]}]:'"Can you please let us know more details about your "',Ns=e=>`"The answer to the universe is ${e.mask_token}."`,Us=()=>`{
    "source_sentence": "That is a happy person",
    "sentences": [
        "That is a happy dog",
        "That is a very happy person",
        "Today is a sunny day"
    ]
}`,Bs=()=>'"Today is a sunny day and I will get some ice cream."',Os=()=>'"cats.jpg"',qs=()=>'"cats.jpg"',Fs=()=>`{
    "image": "cat.png",
    "prompt": "Turn the cat into a tiger."
}`,Hs=()=>`{
    "image": "cat.png",
    "prompt": "The cat starts to dance"
}`,Vs=()=>'"cats.jpg"',zs=()=>'"cats.jpg"',Ks=()=>'"sample1.flac"',Ws=()=>'"sample1.flac"',Xs=()=>'"Astronaut riding a horse"',Qs=()=>'"A young man walking on the street"',Js=()=>'"The answer to the universe is 42"',Ys=()=>'"liquid drum and bass, atmospheric synths, airy sounds"',Zs=()=>'"sample1.flac"',Rt=()=>`'{"Height":[11.52,12.48],"Length1":[23.2,24.0],"Length2":[25.4,26.3],"Species": ["Bream","Bream"]}'`,Gs=()=>'"cats.jpg"',er={"audio-to-audio":Ks,"audio-classification":Ws,"automatic-speech-recognition":Zs,"document-question-answering":$s,"feature-extraction":Bs,"fill-mask":Ns,"image-classification":Os,"image-to-text":qs,"image-to-image":Fs,"image-to-video":Hs,"image-segmentation":Vs,"object-detection":zs,"question-answering":js,"sentence-similarity":Us,summarization:Ds,"table-question-answering":Rs,"tabular-regression":Rt,"tabular-classification":Rt,"text-classification":Ls,"text-generation":Dt,"image-text-to-text":Dt,"text-to-image":Xs,"text-to-video":Qs,"text-to-speech":Js,"text-to-audio":Ys,"token-classification":Ms,translation:Cs,"zero-shot-classification":Ps,"zero-shot-image-classification":Gs};function tr(e,t=!1,a=!1){if(e.pipeline_tag){const n=er[e.pipeline_tag];if(n){let i=n(e);if(typeof i=="string"&&(t&&(i=i.replace(/(?:(?:\r?\n|\r)\t*)|\t+/g," ")),a)){const o=/^"(.+)"$/s,s=i.match(o);i=s?s[1]:i}return i}}return"No input example has been defined for this model task."}function ar(e,t){let a=JSON.stringify(e,null,"	");return t!=null&&t.indent&&(a=a.replaceAll(`
`,`
${t.indent}`)),t!=null&&t.attributeKeyQuotes||(a=a.replace(/"([^"]+)":/g,"$1:")),t!=null&&t.customContentEscaper&&(a=t.customContentEscaper(a)),a}const Jt="custom_code";function ne(e){const t=e.split("/");return t.length===1?t[0]:t[1]}const nr=e=>JSON.stringify(e).slice(1,-1),ir=e=>{var t,a;return[`from adapters import AutoAdapterModel

model = AutoAdapterModel.from_pretrained("${(a=(t=e.config)==null?void 0:t.adapter_transformers)==null?void 0:a.model_name}")
model.load_adapter("${e.id}", set_active=True)`]},or=e=>[`import allennlp_models
from allennlp.predictors.predictor import Predictor

predictor = Predictor.from_path("hf://${e.id}")`],sr=e=>[`import allennlp_models
from allennlp.predictors.predictor import Predictor

predictor = Predictor.from_path("hf://${e.id}")
predictor_input = {"passage": "My name is Wolfgang and I live in Berlin", "question": "Where do I live?"}
predictions = predictor.predict_json(predictor_input)`],rr=e=>e.tags.includes("question-answering")?sr(e):or(e),lr=e=>[`from araclip import AraClip

model = AraClip.from_pretrained("${e.id}")`],cr=e=>[`from asteroid.models import BaseModel

model = BaseModel.from_pretrained("${e.id}")`],dr=e=>{const t=`# Watermark Generator
from audioseal import AudioSeal

model = AudioSeal.load_generator("${e.id}")
# pass a tensor (tensor_wav) of shape (batch, channels, samples) and a sample rate
wav, sr = tensor_wav, 16000
	
watermark = model.get_watermark(wav, sr)
watermarked_audio = wav + watermark`,a=`# Watermark Detector
from audioseal import AudioSeal

detector = AudioSeal.load_detector("${e.id}")
	
result, message = detector.detect_watermark(watermarked_audio, sr)`;return[t,a]};function xe(e){var t,a;return((a=(t=e.cardData)==null?void 0:t.base_model)==null?void 0:a.toString())??"fill-in-base-model"}function ge(e){var a,n,i;const t=((n=(a=e.widgetData)==null?void 0:a[0])==null?void 0:n.text)??((i=e.cardData)==null?void 0:i.instance_prompt);if(t)return nr(t)}const pr=e=>[`import requests
from PIL import Image
from ben2 import AutoModel

url = "https://huggingface.co/datasets/mishig/sample_images/resolve/main/teapot.jpg"
image = Image.open(requests.get(url, stream=True).raw)

model = AutoModel.from_pretrained("${e.id}")
model.to("cuda").eval()
foreground = model.inference(image)
`],ur=e=>[`from bertopic import BERTopic

model = BERTopic.load("${e.id}")`],mr=e=>[`from bm25s.hf import BM25HF

retriever = BM25HF.load_from_hub("${e.id}")`],fr=()=>[`# pip install chatterbox-tts
import torchaudio as ta
from chatterbox.tts import ChatterboxTTS

model = ChatterboxTTS.from_pretrained(device="cuda")

text = "Ezreal and Jinx teamed up with Ahri, Yasuo, and Teemo to take down the enemy's Nexus in an epic late-game pentakill."
wav = model.generate(text)
ta.save("test-1.wav", wav, model.sr)

# If you want to synthesize with a different voice, specify the audio prompt
AUDIO_PROMPT_PATH="YOUR_FILE.wav"
wav = model.generate(text, audio_prompt_path=AUDIO_PROMPT_PATH)
ta.save("test-2.wav", wav, model.sr)`],gr=()=>["pip install git+https://github.com/SAP-samples/contexttab",`# Run a classification task
from sklearn.datasets import load_breast_cancer
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split

from contexttab import ConTextTabClassifier

# Load sample data
X, y = load_breast_cancer(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.5, random_state=42)

# Initialize a classifier
# You can omit checkpoint and checkpoint_revision to use the default model
clf = ConTextTabClassifier(checkpoint="l2/base.pt", checkpoint_revision="v1.0.0", bagging=1, max_context_size=2048)

clf.fit(X_train, y_train)

# Predict probabilities
prediction_probabilities = clf.predict_proba(X_test)
# Predict labels
predictions = clf.predict(X_test)
print("Accuracy", accuracy_score(y_test, predictions))`,`# Run a regression task
from sklearn.datasets import fetch_openml
from sklearn.metrics import r2_score
from sklearn.model_selection import train_test_split

from contexttab import ConTextTabRegressor


# Load sample data
df = fetch_openml(data_id=531, as_frame=True)
X = df.data
y = df.target.astype(float)

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.5, random_state=42)

# Initialize the regressor
# You can omit checkpoint and checkpoint_revision to use the default model
regressor = ConTextTabRegressor(checkpoint="l2/base.pt", checkpoint_revision="v1.0.0", bagging=1, max_context_size=2048)

regressor.fit(X_train, y_train)

# Predict on the test set
predictions = regressor.predict(X_test)

r2 = r2_score(y_test, predictions)
print("R² Score:", r2)`],hr=()=>[`# pip install git+https://github.com/Google-Health/cxr-foundation.git#subdirectory=python

# Load image as grayscale (Stillwaterising, CC0, via Wikimedia Commons)
import requests
from PIL import Image
from io import BytesIO
image_url = "https://upload.wikimedia.org/wikipedia/commons/c/c8/Chest_Xray_PA_3-8-2010.png"
img = Image.open(requests.get(image_url, headers={'User-Agent': 'Demo'}, stream=True).raw).convert('L')

# Run inference
from clientside.clients import make_hugging_face_client
cxr_client = make_hugging_face_client('cxr_model')
print(cxr_client.get_image_embeddings_from_images([img]))`],br=e=>{let t,a,n;return t="<ENCODER>",a="<NUMBER_OF_FEATURES>",n="<OUT_CHANNELS>",e.id==="depth-anything/Depth-Anything-V2-Small"?(t="vits",a="64",n="[48, 96, 192, 384]"):e.id==="depth-anything/Depth-Anything-V2-Base"?(t="vitb",a="128",n="[96, 192, 384, 768]"):e.id==="depth-anything/Depth-Anything-V2-Large"&&(t="vitl",a="256",n="[256, 512, 1024, 1024"),[`
# Install from https://github.com/DepthAnything/Depth-Anything-V2

# Load the model and infer depth from an image
import cv2
import torch

from depth_anything_v2.dpt import DepthAnythingV2

# instantiate the model
model = DepthAnythingV2(encoder="${t}", features=${a}, out_channels=${n})

# load the weights
filepath = hf_hub_download(repo_id="${e.id}", filename="depth_anything_v2_${t}.pth", repo_type="model")
state_dict = torch.load(filepath, map_location="cpu")
model.load_state_dict(state_dict).eval()

raw_img = cv2.imread("your/image/path")
depth = model.infer_image(raw_img) # HxW raw depth map in numpy
    `]},yr=e=>[`# Download checkpoint
pip install huggingface-hub
huggingface-cli download --local-dir checkpoints ${e.id}`,`import depth_pro

# Load model and preprocessing transform
model, transform = depth_pro.create_model_and_transforms()
model.eval()

# Load and preprocess an image.
image, _, f_px = depth_pro.load_rgb("example.png")
image = transform(image)

# Run inference.
prediction = model.infer(image, f_px=f_px)

# Results: 1. Depth in meters
depth = prediction["depth"]
# Results: 2. Focal length in pixels
focallength_px = prediction["focallength_px"]`],vr=()=>[`from huggingface_hub import from_pretrained_keras
import tensorflow as tf, requests

# Load and format input
IMAGE_URL = "https://storage.googleapis.com/dx-scin-public-data/dataset/images/3445096909671059178.png"
input_tensor = tf.train.Example(
    features=tf.train.Features(
        feature={
            "image/encoded": tf.train.Feature(
                bytes_list=tf.train.BytesList(value=[requests.get(IMAGE_URL, stream=True).content])
            )
        }
    )
).SerializeToString()

# Load model and run inference
loaded_model = from_pretrained_keras("google/derm-foundation")
infer = loaded_model.signatures["serving_default"]
print(infer(inputs=tf.constant([input_tensor])))`],wr=e=>[`import soundfile as sf
from dia.model import Dia

model = Dia.from_pretrained("${e.id}")
text = "[S1] Dia is an open weights text to dialogue model. [S2] You get full control over scripts and voices. [S1] Wow. Amazing. (laughs) [S2] Try it now on Git hub or Hugging Face."
output = model.generate(text)

sf.write("simple.mp3", output, 44100)`],_r=e=>[`# pip install git+https://github.com/NVlabs/describe-anything
from huggingface_hub import snapshot_download
from dam import DescribeAnythingModel

snapshot_download(${e.id}, local_dir="checkpoints")

dam = DescribeAnythingModel(
	model_path="checkpoints",
	conv_mode="v1",
	prompt_mode="focal_prompt",
)`],xr="pip install -U diffusers transformers",Yt="Astronaut in a jungle, cold color palette, muted colors, detailed, 8k",Zt="Turn this cat into a dog",mt="A man with short gray hair plays a red electric guitar.",kr=e=>[`from diffusers import DiffusionPipeline

pipe = DiffusionPipeline.from_pretrained("${e.id}")

prompt = "${ge(e)??Yt}"
image = pipe(prompt).images[0]`],Ar=e=>[`from diffusers import DiffusionPipeline
from diffusers.utils import load_image

pipe = DiffusionPipeline.from_pretrained("${e.id}")

prompt = "${ge(e)??Zt}"
input_image = load_image("https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/cat.png")

image = pipe(image=input_image, prompt=prompt).images[0]`],Ir=e=>[`import torch
from diffusers import DiffusionPipeline
from diffusers.utils import load_image, export_to_video

pipe = DiffusionPipeline.from_pretrained("${e.id}", torch_dtype=torch.float16)
pipe.to("cuda")

prompt = "${ge(e)??mt}"
image = load_image(
    "https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/guitar-man.png"
)

output = pipe(image=image, prompt=prompt).frames[0]
export_to_video(output, "output.mp4")`],Tr=e=>[`from diffusers import ControlNetModel, StableDiffusionControlNetPipeline

controlnet = ControlNetModel.from_pretrained("${e.id}")
pipe = StableDiffusionControlNetPipeline.from_pretrained(
	"${xe(e)}", controlnet=controlnet
)`],Sr=e=>[`from diffusers import DiffusionPipeline

pipe = DiffusionPipeline.from_pretrained("${xe(e)}")
pipe.load_lora_weights("${e.id}")

prompt = "${ge(e)??Yt}"
image = pipe(prompt).images[0]`],Er=e=>[`from diffusers import DiffusionPipeline
from diffusers.utils import load_image

pipe = DiffusionPipeline.from_pretrained("${xe(e)}")
pipe.load_lora_weights("${e.id}")

prompt = "${ge(e)??Zt}"
input_image = load_image("https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/cat.png")

image = pipe(image=input_image, prompt=prompt).images[0]`],Pr=e=>[`from diffusers import DiffusionPipeline
from diffusers.utils import export_to_video

pipe = DiffusionPipeline.from_pretrained("${xe(e)}")
pipe.load_lora_weights("${e.id}")

prompt = "${ge(e)??mt}"

output = pipe(prompt=prompt).frames[0]
export_to_video(output, "output.mp4")`],Cr=e=>[`from diffusers import DiffusionPipeline
from diffusers.utils import load_image, export_to_video

pipe = DiffusionPipeline.from_pretrained("${xe(e)}")
pipe.load_lora_weights("${e.id}")

prompt = "${ge(e)??mt}"
input_image = load_image("https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/guitar-man.png")

image = pipe(image=input_image, prompt=prompt).frames[0]
export_to_video(output, "output.mp4")`],Dr=e=>[`from diffusers import DiffusionPipeline

pipe = DiffusionPipeline.from_pretrained("${xe(e)}")
pipe.load_textual_inversion("${e.id}")`],Rr=e=>[`import torch
from diffusers import FluxFillPipeline
from diffusers.utils import load_image

image = load_image("https://huggingface.co/datasets/diffusers/diffusers-images-docs/resolve/main/cup.png")
mask = load_image("https://huggingface.co/datasets/diffusers/diffusers-images-docs/resolve/main/cup_mask.png")

pipe = FluxFillPipeline.from_pretrained("${e.id}", torch_dtype=torch.bfloat16).to("cuda")
image = pipe(
    prompt="a white paper cup",
    image=image,
    mask_image=mask,
    height=1632,
    width=1232,
    guidance_scale=30,
    num_inference_steps=50,
    max_sequence_length=512,
    generator=torch.Generator("cpu").manual_seed(0)
).images[0]
image.save(f"flux-fill-dev.png")`],$r=e=>[`import torch
from diffusers import AutoPipelineForInpainting
from diffusers.utils import load_image

pipe = AutoPipelineForInpainting.from_pretrained("${e.id}", torch_dtype=torch.float16, variant="fp16").to("cuda")

img_url = "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png"
mask_url = "https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png"

image = load_image(img_url).resize((1024, 1024))
mask_image = load_image(mask_url).resize((1024, 1024))

prompt = "a tiger sitting on a park bench"
generator = torch.Generator(device="cuda").manual_seed(0)

image = pipe(
  prompt=prompt,
  image=image,
  mask_image=mask_image,
  guidance_scale=8.0,
  num_inference_steps=20,  # steps between 15 and 30 work well for us
  strength=0.99,  # make sure to use \`strength\` below 1.0
  generator=generator,
).images[0]`],Gt=e=>{let t;return e.tags.includes("StableDiffusionInpaintPipeline")||e.tags.includes("StableDiffusionXLInpaintPipeline")?t=$r(e):e.tags.includes("controlnet")?t=Tr(e):e.tags.includes("lora")?e.pipeline_tag==="image-to-image"?t=Er(e):e.pipeline_tag==="image-to-video"?t=Cr(e):e.pipeline_tag==="text-to-video"?t=Pr(e):t=Sr(e):e.tags.includes("textual_inversion")?t=Dr(e):e.tags.includes("FluxFillPipeline")?t=Rr(e):e.pipeline_tag==="image-to-video"?t=Ir(e):e.pipeline_tag==="image-to-image"?t=Ar(e):t=kr(e),[xr,...t]},jr=e=>{const t=`# Pipeline for Stable Diffusion 3
from diffusionkit.mlx import DiffusionPipeline

pipeline = DiffusionPipeline(
	shift=3.0,
	use_t5=False,
	model_version=${e.id},
	low_memory_mode=True,
	a16=True,
	w16=True,
)`,a=`# Pipeline for Flux
from diffusionkit.mlx import FluxPipeline

pipeline = FluxPipeline(
  shift=1.0,
  model_version=${e.id},
  low_memory_mode=True,
  a16=True,
  w16=True,
)`,n=`# Image Generation
HEIGHT = 512
WIDTH = 512
NUM_STEPS = ${e.tags.includes("flux")?4:50}
CFG_WEIGHT = ${e.tags.includes("flux")?0:5}

image, _ = pipeline.generate_image(
  "a photo of a cat",
  cfg_weight=CFG_WEIGHT,
  num_steps=NUM_STEPS,
  latent_size=(HEIGHT // 8, WIDTH // 8),
)`;return[e.tags.includes("flux")?a:t,n]},Lr=e=>[`# pip install --no-binary :all: cartesia-pytorch
from cartesia_pytorch import ReneLMHeadModel
from transformers import AutoTokenizer

model = ReneLMHeadModel.from_pretrained("${e.id}")
tokenizer = AutoTokenizer.from_pretrained("allenai/OLMo-1B-hf")

in_message = ["Rene Descartes was"]
inputs = tokenizer(in_message, return_tensors="pt")

outputs = model.generate(inputs.input_ids, max_length=50, top_k=100, top_p=0.99)
out_message = tokenizer.batch_decode(outputs, skip_special_tokens=True)[0]

print(out_message)
)`],Mr=e=>[`import mlx.core as mx
import cartesia_mlx as cmx

model = cmx.from_pretrained("${e.id}")
model.set_dtype(mx.float32)   

prompt = "Rene Descartes was"

for text in model.generate(
    prompt,
    max_tokens=500,
    eval_every_n=5,
    verbose=True,
    top_p=0.99,
    temperature=0.85,
):
    print(text, end="", flush=True)
`],Nr=e=>{const t=ne(e.id).replaceAll("-","_");return[`# Load it from the Hub directly
import edsnlp
nlp = edsnlp.load("${e.id}")
`,`# Or install it as a package
!pip install git+https://huggingface.co/${e.id}

# and import it as a module
import ${t}

nlp = ${t}.load()  # or edsnlp.load("${t}")
`]},Ur=e=>[`from espnet2.bin.tts_inference import Text2Speech

model = Text2Speech.from_pretrained("${e.id}")

speech, *_ = model("text to generate speech from")`],Br=e=>[`from espnet2.bin.asr_inference import Speech2Text

model = Speech2Text.from_pretrained(
  "${e.id}"
)

speech, rate = soundfile.read("speech.wav")
text, *_ = model(speech)[0]`],Or=()=>["unknown model type (must be text-to-speech or automatic-speech-recognition)"],qr=e=>e.tags.includes("text-to-speech")?Ur(e):e.tags.includes("automatic-speech-recognition")?Br(e):Or(),Fr=e=>[`from fairseq.checkpoint_utils import load_model_ensemble_and_task_from_hf_hub

models, cfg, task = load_model_ensemble_and_task_from_hf_hub(
    "${e.id}"
)`],Hr=e=>[`from flair.models import SequenceTagger

tagger = SequenceTagger.load("${e.id}")`],Vr=e=>[`from gliner import GLiNER

model = GLiNER.from_pretrained("${e.id}")`],zr=e=>[`# Download model
from huggingface_hub import snapshot_download

snapshot_download(${e.id}, local_dir="checkpoints")

from indextts.infer import IndexTTS

# Ensure config.yaml is present in the checkpoints directory
tts = IndexTTS(model_dir="checkpoints", cfg_path="checkpoints/config.yaml")

voice = "path/to/your/reference_voice.wav"  # Path to the voice reference audio file
text = "Hello, how are you?"
output_path = "output_index.wav"

tts.infer(voice, text, output_path)`],Kr=e=>[`# CLI usage
# see docs: https://ai-riksarkivet.github.io/htrflow/latest/getting_started/quick_start.html
htrflow pipeline <path/to/pipeline.yaml> <path/to/image>`,`# Python usage
from htrflow.pipeline.pipeline import Pipeline
from htrflow.pipeline.steps import Task
from htrflow.models.framework.model import ModelClass

pipeline = Pipeline(
    [
        Task(
            ModelClass, {"model": "${e.id}"}, {}
        ),
    ])`],Wr=e=>[`# Available backend options are: "jax", "torch", "tensorflow".
import os
os.environ["KERAS_BACKEND"] = "jax"
	
import keras

model = keras.saving.load_model("hf://${e.id}")
`],Xr=e=>`
import keras_hub

# Load CausalLM model (optional: use half precision for inference)
causal_lm = keras_hub.models.CausalLM.from_preset("hf://${e}", dtype="bfloat16")
causal_lm.compile(sampler="greedy")  # (optional) specify a sampler

# Generate text
causal_lm.generate("Keras: deep learning for", max_length=64)
`,Qr=e=>`
import keras_hub

# Load TextToImage model (optional: use half precision for inference)
text_to_image = keras_hub.models.TextToImage.from_preset("hf://${e}", dtype="bfloat16")

# Generate images with a TextToImage model.
text_to_image.generate("Astronaut in a jungle")
`,Jr=e=>`
import keras_hub

# Load TextClassifier model
text_classifier = keras_hub.models.TextClassifier.from_preset(
    "hf://${e}",
    num_classes=2,
)
# Fine-tune
text_classifier.fit(x=["Thilling adventure!", "Total snoozefest."], y=[1, 0])
# Classify text
text_classifier.predict(["Not my cup of tea."])
`,Yr=e=>`
import keras_hub
import keras

# Load ImageClassifier model
image_classifier = keras_hub.models.ImageClassifier.from_preset(
    "hf://${e}",
    num_classes=2,
)
# Fine-tune
image_classifier.fit(
    x=keras.random.randint((32, 64, 64, 3), 0, 256),
    y=keras.random.randint((32, 1), 0, 2),
)
# Classify image
image_classifier.predict(keras.random.randint((1, 64, 64, 3), 0, 256))
`,$t={CausalLM:Xr,TextToImage:Qr,TextClassifier:Jr,ImageClassifier:Yr},Zr=(e,t)=>`
import keras_hub

# Create a ${e} model
task = keras_hub.models.${e}.from_preset("hf://${t}")
`,Gr=e=>`
import keras_hub

# Create a Backbone model unspecialized for any task
backbone = keras_hub.models.Backbone.from_preset("hf://${e}")
`,el=e=>{var i,o;const t=e.id,a=((o=(i=e.config)==null?void 0:i.keras_hub)==null?void 0:o.tasks)??[],n=[];for(const[s,r]of Object.entries($t))a.includes(s)&&n.push(r(t));for(const s of a)Object.keys($t).includes(s)||n.push(Zr(s,t));return n.push(Gr(t)),n},tl=e=>[`# Example usage for KimiAudio
# pip install git+https://github.com/MoonshotAI/Kimi-Audio.git

from kimia_infer.api.kimia import KimiAudio

model = KimiAudio(model_path="${e.id}", load_detokenizer=True)

sampling_params = {
    "audio_temperature": 0.8,
    "audio_top_k": 10,
    "text_temperature": 0.0,
    "text_top_k": 5,
}

# For ASR
asr_audio = "asr_example.wav"
messages_asr = [
    {"role": "user", "message_type": "text", "content": "Please transcribe the following audio:"},
    {"role": "user", "message_type": "audio", "content": asr_audio}
]
_, text = model.generate(messages_asr, **sampling_params, output_type="text")
print(text)

# For Q&A
qa_audio = "qa_example.wav"
messages_conv = [{"role": "user", "message_type": "audio", "content": qa_audio}]
wav, text = model.generate(messages_conv, **sampling_params, output_type="both")
sf.write("output_audio.wav", wav.cpu().view(-1).numpy(), 24000)
print(text)
`],al=e=>[`from kittentts import KittenTTS
m = KittenTTS("${e.id}")

audio = m.generate("This high quality TTS model works without a GPU")

# Save the audio
import soundfile as sf
sf.write('output.wav', audio, 24000)`],nl=e=>e.tags.includes("bi-encoder")?[`#install from https://github.com/webis-de/lightning-ir

from lightning_ir import BiEncoderModule
model = BiEncoderModule("${e.id}")

model.score("query", ["doc1", "doc2", "doc3"])`]:e.tags.includes("cross-encoder")?[`#install from https://github.com/webis-de/lightning-ir

from lightning_ir import CrossEncoderModule
model = CrossEncoderModule("${e.id}")

model.score("query", ["doc1", "doc2", "doc3"])`]:[`#install from https://github.com/webis-de/lightning-ir

from lightning_ir import BiEncoderModule, CrossEncoderModule

# depending on the model type, use either BiEncoderModule or CrossEncoderModule
model = BiEncoderModule("${e.id}") 
# model = CrossEncoderModule("${e.id}")

model.score("query", ["doc1", "doc2", "doc3"])`],il=e=>{const t=[`# !pip install llama-cpp-python

from llama_cpp import Llama

llm = Llama.from_pretrained(
	repo_id="${e.id}",
	filename="{{GGUF_FILE}}",
)
`];if(e.tags.includes("conversational")){const a=tr(e);t.push(`llm.create_chat_completion(
	messages = ${ar(a,{attributeKeyQuotes:!0,indent:"	"})}
)`)}else t.push(`output = llm(
	"Once upon a time,",
	max_tokens=512,
	echo=True
)
print(output)`);return t},ol=e=>{if(e.tags.includes("smolvla")){const t=[`# See https://github.com/huggingface/lerobot?tab=readme-ov-file#installation for more details
git clone https://github.com/huggingface/lerobot.git
cd lerobot
pip install -e .[smolvla]`,`# Launch finetuning on your dataset
python lerobot/scripts/train.py \\
--policy.path=${e.id} \\
--dataset.repo_id=lerobot/svla_so101_pickplace \\ 
--batch_size=64 \\
--steps=20000 \\
--output_dir=outputs/train/my_smolvla \\
--job_name=my_smolvla_training \\
--policy.device=cuda \\
--wandb.enable=true`];return e.id!=="lerobot/smolvla_base"&&t.push(`# Run the policy using the record function	
python -m lerobot.record \\
  --robot.type=so101_follower \\
  --robot.port=/dev/ttyACM0 \\ # <- Use your port
  --robot.id=my_blue_follower_arm \\ # <- Use your robot id
  --robot.cameras="{ front: {type: opencv, index_or_path: 8, width: 640, height: 480, fps: 30}}" \\ # <- Use your cameras
  --dataset.single_task="Grasp a lego block and put it in the bin." \\ # <- Use the same task description you used in your dataset recording
  --dataset.repo_id=HF_USER/dataset_name \\  # <- This will be the dataset name on HF Hub
  --dataset.episode_time_s=50 \\
  --dataset.num_episodes=10 \\
  --policy.path=${e.id}`),t}return[]},sl=e=>[`# Note: 'keras<3.x' or 'tf_keras' must be installed (legacy)
# See https://github.com/keras-team/tf-keras for more details.
from huggingface_hub import from_pretrained_keras

model = from_pretrained_keras("${e.id}")
`],rl=e=>[`from mamba_ssm import MambaLMHeadModel

model = MambaLMHeadModel.from_pretrained("${e.id}")`],ll=e=>[`# Install from https://github.com/Camb-ai/MARS5-TTS

from inference import Mars5TTS
mars5 = Mars5TTS.from_pretrained("${e.id}")`],cl=e=>[`# Install from https://github.com/pq-yang/MatAnyone.git

from matanyone.model.matanyone import MatAnyone
model = MatAnyone.from_pretrained("${e.id}")`,`
from matanyone import InferenceCore
processor = InferenceCore("${e.id}")`],dl=()=>[`# Install from https://github.com/buaacyw/MeshAnything.git

from MeshAnything.models.meshanything import MeshAnything

# refer to https://github.com/buaacyw/MeshAnything/blob/main/main.py#L91 on how to define args
# and https://github.com/buaacyw/MeshAnything/blob/main/app.py regarding usage
model = MeshAnything(args)`],pl=e=>[`import open_clip

model, preprocess_train, preprocess_val = open_clip.create_model_and_transforms('hf-hub:${e.id}')
tokenizer = open_clip.get_tokenizer('hf-hub:${e.id}')`],ul=e=>{var t,a;if((a=(t=e.config)==null?void 0:t.architectures)!=null&&a[0]){const n=e.config.architectures[0];return[[`from paddlenlp.transformers import AutoTokenizer, ${n}`,"",`tokenizer = AutoTokenizer.from_pretrained("${e.id}", from_hf_hub=True)`,`model = ${n}.from_pretrained("${e.id}", from_hf_hub=True)`].join(`
`)]}else return[["# ⚠️ Type of model unknown","from paddlenlp.transformers import AutoTokenizer, AutoModel","",`tokenizer = AutoTokenizer.from_pretrained("${e.id}", from_hf_hub=True)`,`model = AutoModel.from_pretrained("${e.id}", from_hf_hub=True)`].join(`
`)]},ml=e=>{const t={textline_detection:{className:"TextDetection"},textline_recognition:{className:"TextRecognition"},seal_text_detection:{className:"SealTextDetection"},doc_img_unwarping:{className:"TextImageUnwarping"},doc_img_orientation_classification:{className:"DocImgOrientationClassification"},textline_orientation_classification:{className:"TextLineOrientationClassification"},chart_parsing:{className:"ChartParsing"},formula_recognition:{className:"FormulaRecognition"},layout_detection:{className:"LayoutDetection"},table_cells_detection:{className:"TableCellsDetection"},wired_table_classification:{className:"TableClassification"},table_structure_recognition:{className:"TableStructureRecognition"}};if(e.tags.includes("doc_vlm"))return[`# 1. See https://www.paddlepaddle.org.cn/en/install to install paddlepaddle
# 2. pip install paddleocr

from paddleocr import DocVLM
model = DocVLM(model_name="${ne(e.id)}")
output = model.predict(
    input={"image": "path/to/image.png", "query": "Parsing this image and output the content in Markdown format."},
    batch_size=1
)
for res in output:
    res.print()
    res.save_to_json(save_path="./output/res.json")`];if(e.tags.includes("document-parse"))return[`# See https://www.paddleocr.ai/latest/version3.x/pipeline_usage/PaddleOCR-VL.html to installation

from paddleocr import PaddleOCRVL
pipeline = PaddleOCRVL()
output = pipeline.predict("path/to/document_image.png")
for res in output:
	res.print()
	res.save_to_json(save_path="output")
	res.save_to_markdown(save_path="output")`];for(const a of e.tags)if(a in t){const{className:n}=t[a];return[`# 1. See https://www.paddlepaddle.org.cn/en/install to install paddlepaddle
# 2. pip install paddleocr

from paddleocr import ${n}
model = ${n}(model_name="${ne(e.id)}")
output = model.predict(input="path/to/image.png", batch_size=1)
for res in output:
    res.print()
    res.save_to_img(save_path="./output/")
    res.save_to_json(save_path="./output/res.json")`]}return[`# Please refer to the document for information on how to use the model. 
# https://paddlepaddle.github.io/PaddleOCR/latest/en/version3.x/module_usage/module_overview.html`]},fl=e=>{const t=`# Use PE-Core models as CLIP models
import core.vision_encoder.pe as pe

model = pe.CLIP.from_config("${e.id}", pretrained=True)`,a=`# Use any PE model as a vision encoder
import core.vision_encoder.pe as pe

model = pe.VisionTransformer.from_config("${e.id}", pretrained=True)`;return e.id.includes("Core")?[t,a]:[a]},gl=e=>[`from huggingface_hub import snapshot_download
from phantom_wan import WANI2V, configs

checkpoint_dir = snapshot_download("${e.id}")
wan_i2v = WanI2V(
            config=configs.WAN_CONFIGS['i2v-14B'],
            checkpoint_dir=checkpoint_dir,
        )
 video = wan_i2v.generate(text_prompt, image_prompt)`],hl=e=>[`from pyannote.audio import Pipeline
  
pipeline = Pipeline.from_pretrained("${e.id}")

# inference on the whole file
pipeline("file.wav")

# inference on an excerpt
from pyannote.core import Segment
excerpt = Segment(start=2.0, end=5.0)

from pyannote.audio import Audio
waveform, sample_rate = Audio().crop("file.wav", excerpt)
pipeline({"waveform": waveform, "sample_rate": sample_rate})`],bl=e=>[`from pyannote.audio import Model, Inference

model = Model.from_pretrained("${e.id}")
inference = Inference(model)

# inference on the whole file
inference("file.wav")

# inference on an excerpt
from pyannote.core import Segment
excerpt = Segment(start=2.0, end=5.0)
inference.crop("file.wav", excerpt)`],yl=e=>e.tags.includes("pyannote-audio-pipeline")?hl(e):bl(e),vl=e=>[`from relik import Relik
 
relik = Relik.from_pretrained("${e.id}")`],wl=e=>[`# Install from https://github.com/microsoft/renderformer

from renderformer import RenderFormerRenderingPipeline
pipeline = RenderFormerRenderingPipeline.from_pretrained("${e.id}")`],_l=e=>[`from tensorflow_tts.inference import AutoProcessor, TFAutoModel

processor = AutoProcessor.from_pretrained("${e.id}")
model = TFAutoModel.from_pretrained("${e.id}")
`],xl=e=>[`from tensorflow_tts.inference import TFAutoModel

model = TFAutoModel.from_pretrained("${e.id}")
audios = model.inference(mels)
`],kl=e=>[`from tensorflow_tts.inference import TFAutoModel

model = TFAutoModel.from_pretrained("${e.id}")
`],Al=e=>e.tags.includes("text-to-mel")?_l(e):e.tags.includes("mel-to-wav")?xl(e):kl(e),Il=e=>[`import timm

model = timm.create_model("hf_hub:${e.id}", pretrained=True)`],Tl=()=>[`# pip install sae-lens
from sae_lens import SAE

sae, cfg_dict, sparsity = SAE.from_pretrained(
    release = "RELEASE_ID", # e.g., "gpt2-small-res-jb". See other options in https://github.com/jbloomAus/SAELens/blob/main/sae_lens/pretrained_saes.yaml
    sae_id = "SAE_ID", # e.g., "blocks.8.hook_resid_pre". Won't always be a hook point
)`],Sl=()=>[`# seed_story_cfg_path refers to 'https://github.com/TencentARC/SEED-Story/blob/master/configs/clm_models/agent_7b_sft.yaml'
# llm_cfg_path refers to 'https://github.com/TencentARC/SEED-Story/blob/master/configs/clm_models/llama2chat7b_lora.yaml'
from omegaconf import OmegaConf
import hydra

# load Llama2
llm_cfg = OmegaConf.load(llm_cfg_path)
llm = hydra.utils.instantiate(llm_cfg, torch_dtype="fp16")

# initialize seed_story
seed_story_cfg = OmegaConf.load(seed_story_cfg_path)
seed_story = hydra.utils.instantiate(seed_story_cfg, llm=llm) `],El=(e,t)=>[`import joblib
from skops.hub_utils import download
download("${e.id}", "path_to_folder")
model = joblib.load(
	"${t}"
)
# only load pickle files from sources you trust
# read more about it here https://skops.readthedocs.io/en/stable/persistence.html`],Pl=(e,t)=>[`from skops.hub_utils import download
from skops.io import load
download("${e.id}", "path_to_folder")
# make sure model file is in skops format
# if model is a pickle file, make sure it's from a source you trust
model = load("path_to_folder/${t}")`],Cl=e=>[`from huggingface_hub import hf_hub_download
import joblib
model = joblib.load(
	hf_hub_download("${e.id}", "sklearn_model.joblib")
)
# only load pickle files from sources you trust
# read more about it here https://skops.readthedocs.io/en/stable/persistence.html`],Dl=e=>{var t,a,n,i,o;if(e.tags.includes("skops")){const s=(n=(a=(t=e.config)==null?void 0:t.sklearn)==null?void 0:a.model)==null?void 0:n.file,r=(o=(i=e.config)==null?void 0:i.sklearn)==null?void 0:o.model_format;return s?r==="pickle"?El(e,s):Pl(e,s):["# ⚠️ Model filename not specified in config.json"]}else return Cl(e)},Rl=e=>[`import torch
import torchaudio
from einops import rearrange
from stable_audio_tools import get_pretrained_model
from stable_audio_tools.inference.generation import generate_diffusion_cond

device = "cuda" if torch.cuda.is_available() else "cpu"

# Download model
model, model_config = get_pretrained_model("${e.id}")
sample_rate = model_config["sample_rate"]
sample_size = model_config["sample_size"]

model = model.to(device)

# Set up text and timing conditioning
conditioning = [{
	"prompt": "128 BPM tech house drum loop",
}]

# Generate stereo audio
output = generate_diffusion_cond(
	model,
	conditioning=conditioning,
	sample_size=sample_size,
	device=device
)

# Rearrange audio batch to a single sequence
output = rearrange(output, "b d n -> d (b n)")

# Peak normalize, clip, convert to int16, and save to file
output = output.to(torch.float32).div(torch.max(torch.abs(output))).clamp(-1, 1).mul(32767).to(torch.int16).cpu()
torchaudio.save("output.wav", output, sample_rate)`],$l=e=>[`from huggingface_hub import from_pretrained_fastai

learn = from_pretrained_fastai("${e.id}")`],jl=e=>{const t=`# Use SAM2 with images
import torch
from sam2.sam2_image_predictor import SAM2ImagePredictor

predictor = SAM2ImagePredictor.from_pretrained(${e.id})

with torch.inference_mode(), torch.autocast("cuda", dtype=torch.bfloat16):
    predictor.set_image(<your_image>)
    masks, _, _ = predictor.predict(<input_prompts>)`,a=`# Use SAM2 with videos
import torch
from sam2.sam2_video_predictor import SAM2VideoPredictor
	
predictor = SAM2VideoPredictor.from_pretrained(${e.id})

with torch.inference_mode(), torch.autocast("cuda", dtype=torch.bfloat16):
    state = predictor.init_state(<your_video>)

    # add new prompts and instantly get the output on the same frame
    frame_idx, object_ids, masks = predictor.add_new_points(state, <your_prompts>):

    # propagate the prompts to get masklets throughout the video
    for frame_idx, object_ids, masks in predictor.propagate_in_video(state):
        ...`;return[t,a]},Ll=e=>[`python -m sample_factory.huggingface.load_from_hub -r ${e.id} -d ./train_dir`];function Ml(e){var a,n;const t=(a=e.widgetData)==null?void 0:a[0];if(t!=null&&t.source_sentence&&((n=t==null?void 0:t.sentences)!=null&&n.length))return[t.source_sentence,...t.sentences]}const Nl=e=>{const t=e.tags.includes(Jt)?", trust_remote_code=True":"";if(e.tags.includes("PyLate"))return[`from pylate import models

queries = [
    "Which planet is known as the Red Planet?",
    "What is the largest planet in our solar system?",
]

documents = [
    ["Mars is the Red Planet.", "Venus is Earth's twin."],
    ["Jupiter is the largest planet.", "Saturn has rings."],
]

model = models.ColBERT(model_name_or_path="${e.id}")

queries_emb = model.encode(queries, is_query=True)
docs_emb = model.encode(documents, is_query=False)`];if(e.tags.includes("cross-encoder")||e.pipeline_tag=="text-ranking")return[`from sentence_transformers import CrossEncoder

model = CrossEncoder("${e.id}"${t})

query = "Which planet is known as the Red Planet?"
passages = [
	"Venus is often called Earth's twin because of its similar size and proximity.",
	"Mars, known for its reddish appearance, is often referred to as the Red Planet.",
	"Jupiter, the largest planet in our solar system, has a prominent red spot.",
	"Saturn, famous for its rings, is sometimes mistaken for the Red Planet."
]

scores = model.predict([(query, passage) for passage in passages])
print(scores)`];const a=Ml(e)??["The weather is lovely today.","It's so sunny outside!","He drove to the stadium."];return[`from sentence_transformers import SentenceTransformer

model = SentenceTransformer("${e.id}"${t})

sentences = ${JSON.stringify(a,null,4)}
embeddings = model.encode(sentences)

similarities = model.similarity(embeddings, embeddings)
print(similarities.shape)
# [${a.length}, ${a.length}]`]},Ul=e=>[`from setfit import SetFitModel

model = SetFitModel.from_pretrained("${e.id}")`],Bl=e=>[`!pip install https://huggingface.co/${e.id}/resolve/main/${ne(e.id)}-any-py3-none-any.whl

# Using spacy.load().
import spacy
nlp = spacy.load("${ne(e.id)}")

# Importing as module.
import ${ne(e.id)}
nlp = ${ne(e.id)}.load()`],Ol=e=>[`from span_marker import SpanMarkerModel

model = SpanMarkerModel.from_pretrained("${e.id}")`],ql=e=>[`import stanza

stanza.download("${ne(e.id).replace("stanza-","")}")
nlp = stanza.Pipeline("${ne(e.id).replace("stanza-","")}")`],Fl=e=>{switch(e){case"EncoderClassifier":return"classify_file";case"EncoderDecoderASR":case"EncoderASR":return"transcribe_file";case"SpectralMaskEnhancement":return"enhance_file";case"SepformerSeparation":return"separate_file";default:return}},Hl=e=>{var n,i;const t=(i=(n=e.config)==null?void 0:n.speechbrain)==null?void 0:i.speechbrain_interface;if(t===void 0)return["# interface not specified in config.json"];const a=Fl(t);return a===void 0?["# interface in config.json invalid"]:[`from speechbrain.pretrained import ${t}
model = ${t}.from_hparams(
  "${e.id}"
)
model.${a}("file.wav")`]},Vl=e=>[`from terratorch.registry import BACKBONE_REGISTRY

model = BACKBONE_REGISTRY.build("${e.id}")`],zl=e=>{var t,a,n,i,o;return((a=(t=e.config)==null?void 0:t.tokenizer_config)==null?void 0:a.chat_template)!==void 0||((i=(n=e.config)==null?void 0:n.processor_config)==null?void 0:i.chat_template)!==void 0||((o=e.config)==null?void 0:o.chat_template_jinja)!==void 0},ea=e=>{var i;const t=e.transformersInfo;if(!t)return["# ⚠️ Type of model unknown"];const a=e.tags.includes(Jt)?", trust_remote_code=True":"",n=[];if(t.processor){const o=t.processor==="AutoTokenizer"?"tokenizer":t.processor==="AutoFeatureExtractor"?"extractor":"processor";n.push("# Load model directly",`from transformers import ${t.processor}, ${t.auto_model}`,"",`${o} = ${t.processor}.from_pretrained("${e.id}"`+a+")",`model = ${t.auto_model}.from_pretrained("${e.id}"`+a+")"),e.tags.includes("conversational")&&zl(e)&&(e.tags.includes("image-text-to-text")?n.push("messages = [",["    {",'        "role": "user",','        "content": [','            {"type": "image", "url": "https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/p-blog/candy.JPG"},','            {"type": "text", "text": "What animal is on the candy?"}',"        ]","    },"].join(`
`),"]"):n.push("messages = [",'    {"role": "user", "content": "Who are you?"},',"]"),n.push(`inputs = ${o}.apply_chat_template(`,"	messages,","	add_generation_prompt=True,","	tokenize=True,","	return_dict=True,",'	return_tensors="pt",',").to(model.device)","","outputs = model.generate(**inputs, max_new_tokens=40)",`print(${o}.decode(outputs[0][inputs["input_ids"].shape[-1]:]))`))}else n.push("# Load model directly",`from transformers import ${t.auto_model}`,`model = ${t.auto_model}.from_pretrained("${e.id}"`+a+', torch_dtype="auto")');if(e.pipeline_tag&&((i=jo.transformers)!=null&&i.includes(e.pipeline_tag))){const o=["# Use a pipeline as a high-level helper","from transformers import pipeline","",`pipe = pipeline("${e.pipeline_tag}", model="${e.id}"`+a+")"];return e.tags.includes("conversational")?e.tags.includes("image-text-to-text")?(o.push("messages = [",["    {",'        "role": "user",','        "content": [','            {"type": "image", "url": "https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/p-blog/candy.JPG"},','            {"type": "text", "text": "What animal is on the candy?"}',"        ]","    },"].join(`
`),"]"),o.push("pipe(text=messages)")):(o.push("messages = [",'    {"role": "user", "content": "Who are you?"},',"]"),o.push("pipe(messages)")):e.pipeline_tag==="zero-shot-image-classification"?o.push("pipe(",'    "https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/parrots.png",','    candidate_labels=["animals", "humans", "landscape"],',")"):e.pipeline_tag==="image-classification"&&o.push('pipe("https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/parrots.png")'),[o.join(`
`),n.join(`
`)]}return[n.join(`
`)]},Kl=e=>{if(!e.pipeline_tag)return["// ⚠️ Unknown pipeline tag"];const t="@huggingface/transformers";return[`// npm i ${t}
import { pipeline } from '${t}';

// Allocate pipeline
const pipe = await pipeline('${e.pipeline_tag}', '${e.id}');`]},Wl=e=>{switch(e){case"CAUSAL_LM":return"CausalLM";case"SEQ_2_SEQ_LM":return"Seq2SeqLM";case"TOKEN_CLS":return"TokenClassification";case"SEQ_CLS":return"SequenceClassification";default:return}},Xl=e=>{var i;const{base_model_name_or_path:t,task_type:a}=((i=e.config)==null?void 0:i.peft)??{},n=Wl(a);return n?t?[`from peft import PeftModel
from transformers import AutoModelFor${n}

base_model = AutoModelFor${n}.from_pretrained("${t}")
model = PeftModel.from_pretrained(base_model, "${e.id}")`]:["Base model is not found."]:["Task type is invalid."]},Ql=e=>[`from huggingface_hub import hf_hub_download
import fasttext

model = fasttext.load_model(hf_hub_download("${e.id}", "model.bin"))`],Jl=e=>[`from huggingface_sb3 import load_from_hub
checkpoint = load_from_hub(
	repo_id="${e.id}",
	filename="{MODEL FILENAME}.zip",
)`],Yl=(e,t)=>{switch(e){case"ASR":return[`import nemo.collections.asr as nemo_asr
asr_model = nemo_asr.models.ASRModel.from_pretrained("${t.id}")

transcriptions = asr_model.transcribe(["file.wav"])`];default:return}},Zl=e=>[`mlagents-load-from-hf --repo-id="${e.id}" --local-dir="./download: string[]s"`],Gl=()=>[`string modelName = "[Your model name here].sentis";
Model model = ModelLoader.Load(Application.streamingAssetsPath + "/" + modelName);
IWorker engine = WorkerFactory.CreateWorker(BackendType.GPUCompute, model);
// Please see provided C# file for more details
`],ec=e=>[`
# Load the model and infer image from text
import torch
from app.sana_pipeline import SanaPipeline
from torchvision.utils import save_image

sana = SanaPipeline("configs/sana_config/1024ms/Sana_1600M_img1024.yaml")
sana.from_pretrained("hf://${e.id}")

image = sana(
    prompt='a cyberpunk cat with a neon sign that says "Sana"',
    height=1024,
    width=1024,
    guidance_scale=5.0,
    pag_guidance_scale=2.0,
    num_inference_steps=18,
) `],tc=e=>[`import torch, soundfile as sf, librosa, numpy as np
from vibevoice.processor.vibevoice_processor import VibeVoiceProcessor
from vibevoice.modular.modeling_vibevoice_inference import VibeVoiceForConditionalGenerationInference

# Load voice sample (should be 24kHz mono)
voice, sr = sf.read("path/to/voice_sample.wav")
if voice.ndim > 1: voice = voice.mean(axis=1)
if sr != 24000: voice = librosa.resample(voice, sr, 24000)

processor = VibeVoiceProcessor.from_pretrained("${e.id}")
model = VibeVoiceForConditionalGenerationInference.from_pretrained(
    "${e.id}", torch_dtype=torch.bfloat16
).to("cuda").eval()
model.set_ddpm_inference_steps(5)

inputs = processor(text=["Speaker 0: Hello!\\nSpeaker 1: Hi there!"],
                   voice_samples=[[voice]], return_tensors="pt")
audio = model.generate(**inputs, cfg_scale=1.3,
                       tokenizer=processor.tokenizer).speech_outputs[0]
sf.write("output.wav", audio.cpu().numpy().squeeze(), 24000)`],ac=e=>[`# Install from https://github.com/google-deepmind/videoprism
import jax
from videoprism import models as vp

flax_model = vp.get_model("${e.id}")
loaded_state = vp.load_pretrained_weights("${e.id}")

@jax.jit
def forward_fn(inputs, train=False):
  return flax_model.apply(loaded_state, inputs, train=train)`],nc=e=>[`from Trainer_finetune import Model

model = Model.from_pretrained("${e.id}")`],ic=e=>[`from huggingface_hub import hf_hub_download
	 from inference_onnx import LVFaceONNXInferencer

model_path = hf_hub_download("${e.id}", "LVFace-L_Glint360K/LVFace-L_Glint360K.onnx")
inferencer = LVFaceONNXInferencer(model_path, use_gpu=True, timeout=300)
img_path = 'path/to/image1.jpg'
embedding = inferencer.infer_from_image(img_path)`],oc=e=>[`from voicecraft import VoiceCraft

model = VoiceCraft.from_pretrained("${e.id}")`],sc=e=>[`import soundfile as sf
from voxcpm import VoxCPM

model = VoxCPM.from_pretrained("${e.id}")

wav = model.generate(
    text="VoxCPM is an innovative end-to-end TTS model from ModelBest, designed to generate highly expressive speech.",
    prompt_wav_path=None,      # optional: path to a prompt speech for voice cloning
    prompt_text=None,          # optional: reference text
    cfg_value=2.0,             # LM guidance on LocDiT, higher for better adherence to the prompt, but maybe worse
    inference_timesteps=10,   # LocDiT inference timesteps, higher for better result, lower for fast speed
    normalize=True,           # enable external TN tool
    denoise=True,             # enable external Denoise tool
    retry_badcase=True,        # enable retrying mode for some bad cases (unstoppable)
    retry_badcase_max_times=3,  # maximum retrying times
    retry_badcase_ratio_threshold=6.0, # maximum length restriction for bad case detection (simple but effective), it could be adjusted for slow pace speech
)

sf.write("output.wav", wav, 16000)
print("saved: output.wav")`],rc=()=>[`# !pip install git+https://github.com/fluxions-ai/vui

import torchaudio

from vui.inference import render
from vui.model import Vui,

model = Vui.from_pretrained().cuda()
waveform = render(
    model,
    "Hey, here is some random stuff, usually something quite long as the shorter the text the less likely the model can cope!",
)
print(waveform.shape)
torchaudio.save("out.opus", waveform[0], 22050)
`],lc=()=>[`import ChatTTS
import torchaudio

chat = ChatTTS.Chat()
chat.load_models(compile=False) # Set to True for better performance

texts = ["PUT YOUR TEXT HERE",]

wavs = chat.infer(texts, )

torchaudio.save("output1.wav", torch.from_numpy(wavs[0]), 24000)`],jt=e=>{const t=e.tags.find(i=>i.match(/^yolov\d+$/)),a=t?`YOLOv${t.slice(4)}`:"YOLOvXX";return[(t?"":`# Couldn't find a valid YOLO version tag.
# Replace XX with the correct version.
`)+`from ultralytics import ${a}

model = ${a}.from_pretrained("${e.id}")
source = 'http://images.cocodataset.org/val2017/000000039769.jpg'
model.predict(source=source, save=True)`]},cc=e=>[`# Option 1: use with transformers

from transformers import AutoModelForImageSegmentation
birefnet = AutoModelForImageSegmentation.from_pretrained("${e.id}", trust_remote_code=True)
`,`# Option 2: use with BiRefNet

# Install from https://github.com/ZhengPeng7/BiRefNet

from models.birefnet import BiRefNet
model = BiRefNet.from_pretrained("${e.id}")`],dc=e=>[`from swarmformer import SwarmFormerModel

model = SwarmFormerModel.from_pretrained("${e.id}")
`],pc=e=>[`# Follow installation instructions at https://github.com/PKU-YuanGroup/UniWorld-V1

from univa.models.qwen2p5vl.modeling_univa_qwen2p5vl import UnivaQwen2p5VLForConditionalGeneration
	model = UnivaQwen2p5VLForConditionalGeneration.from_pretrained(
        "${e.id}",
        torch_dtype=torch.bfloat16,
        attn_implementation="flash_attention_2",
    ).to("cuda")
	processor = AutoProcessor.from_pretrained("${e.id}")
`],uc=e=>[`# Download the model from the Hub
pip install huggingface_hub[hf_xet]

huggingface-cli download --local-dir ${ne(e.id)} ${e.id}`],mc=e=>[`# Make sure mlx-lm is installed
# pip install --upgrade mlx-lm
# if on a CUDA device, also pip install mlx[cuda]

# Generate text with mlx-lm
from mlx_lm import load, generate

model, tokenizer = load("${e.id}")

prompt = "Once upon a time in"
text = generate(model, tokenizer, prompt=prompt, verbose=True)`],fc=e=>[`# Make sure mlx-lm is installed
# pip install --upgrade mlx-lm

# Generate text with mlx-lm
from mlx_lm import load, generate

model, tokenizer = load("${e.id}")

prompt = "Write a story about Einstein"
messages = [{"role": "user", "content": prompt}]
prompt = tokenizer.apply_chat_template(
    messages, add_generation_prompt=True
)

text = generate(model, tokenizer, prompt=prompt, verbose=True)`],gc=e=>[`# Make sure mlx-vlm is installed
# pip install --upgrade mlx-vlm

from mlx_vlm import load, generate
from mlx_vlm.prompt_utils import apply_chat_template
from mlx_vlm.utils import load_config

# Load the model
model, processor = load("${e.id}")
config = load_config("${e.id}")

# Prepare input
image = ["http://images.cocodataset.org/val2017/000000039769.jpg"]
prompt = "Describe this image."

# Apply chat template
formatted_prompt = apply_chat_template(
    processor, config, prompt, num_images=1
)

# Generate output
output = generate(model, processor, formatted_prompt, image)
print(output)`],hc=e=>[`from mlxim.model import create_model

model = create_model(${e.id})`],bc=e=>e.pipeline_tag==="image-text-to-text"?gc(e):e.pipeline_tag==="text-generation"?e.tags.includes("conversational")?fc(e):mc(e):uc(e),yc=e=>[`from model2vec import StaticModel

model = StaticModel.from_pretrained("${e.id}")`],vc=e=>{let t;e.tags.includes("diffusers")?t=wc(e):e.tags.includes("transformers")?t=_c(e):t=xc(e);const a=n=>/^from pruna import PrunaModel/m.test(n)?n:`from pruna import PrunaModel
${n}`;return t=t.map(a),e.tags.includes("pruna_pro-ai")?t.map(n=>n.replace(/\bpruna\b/g,"pruna_pro").replace(/\bPrunaModel\b/g,"PrunaProModel")):t},wc=e=>Gt(e).map(a=>a.replace(/\b\w*Pipeline\w*\b/g,"PrunaModel").replace(/from diffusers import ([^,\n]*PrunaModel[^,\n]*)/g,"").replace(/from diffusers import ([^,\n]+),?\s*([^,\n]*PrunaModel[^,\n]*)/g,"from diffusers import $1").replace(/from diffusers import\s*(\n|$)/g,"").replace(/from diffusers import PrunaModel/g,"from pruna import PrunaModel").replace(/from diffusers import ([^,\n]+), PrunaModel/g,"from diffusers import $1").replace(/from diffusers import PrunaModel, ([^,\n]+)/g,"from diffusers import $1").replace(/\n\n+/g,`
`).trim()),_c=e=>{const t=e.transformersInfo;let n=ea(e).map(i=>i.replace(/from transformers import pipeline/g,"from pruna import PrunaModel").replace(/pipeline\([^)]*\)/g,`PrunaModel.from_pretrained("${e.id}")`));return t!=null&&t.auto_model&&(n=n.map(i=>i.replace(new RegExp(`from transformers import ${t.auto_model}
?`,"g"),"").replace(new RegExp(`${t.auto_model}.from_pretrained`,"g"),"PrunaModel.from_pretrained").replace(new RegExp(`^.*from.*import.*(, *${t.auto_model})+.*$`,"gm"),o=>o.replace(new RegExp(`, *${t.auto_model}`,"g"),"")))),n},xc=e=>[`from pruna import PrunaModel
model = PrunaModel.from_pretrained("${e.id}")
`],kc=e=>{let t;return e.tags.includes("automatic-speech-recognition")&&(t=Yl("ASR",e)),t??["# tag did not correspond to a valid NeMo domain."]},Ac=e=>{const t=e.tags??[];return t.includes("gguf")||t.includes("onnx")?[]:[`
  import outetts
  
  enum = outetts.Models("${e.id}".split("/", 1)[1])       # VERSION_1_0_SIZE_1B
  cfg  = outetts.ModelConfig.auto_config(enum, outetts.Backend.HF)
  tts  = outetts.Interface(cfg)
  
  speaker = tts.load_default_speaker("EN-FEMALE-1-NEUTRAL")
  tts.generate(
	  outetts.GenerationConfig(
		  text="Hello there, how are you doing?",
		  speaker=speaker,
	  )
  ).save("output.wav")
  `]},Ic=e=>[`from pxia import AutoModel

model = AutoModel.from_pretrained("${e.id}")`],Tc=e=>[`from pythae.models import AutoModel

model = AutoModel.load_from_hf_hub("${e.id}")`],Sc=e=>[`from audiocraft.models import MusicGen

model = MusicGen.get_pretrained("${e.id}")

descriptions = ['happy rock', 'energetic EDM', 'sad jazz']
wav = model.generate(descriptions)  # generates 3 samples.`],Ec=e=>[`from audiocraft.models import MAGNeT
	
model = MAGNeT.get_pretrained("${e.id}")

descriptions = ['disco beat', 'energetic EDM', 'funky groove']
wav = model.generate(descriptions)  # generates 3 samples.`],Pc=e=>[`from audiocraft.models import AudioGen
	
model = AudioGen.get_pretrained("${e.id}")
model.set_generation_params(duration=5)  # generate 5 seconds.
descriptions = ['dog barking', 'sirene of an emergency vehicle', 'footsteps in a corridor']
wav = model.generate(descriptions)  # generates 3 samples.`],Cc=e=>[`from anemoi.inference.runners.default import DefaultRunner
from anemoi.inference.config.run import RunConfiguration
# Create Configuration
config = RunConfiguration(checkpoint = {"huggingface":"${e.id}"})
# Load Runner
runner = DefaultRunner(config)`],Dc=e=>e.tags.includes("musicgen")?Sc(e):e.tags.includes("audiogen")?Pc(e):e.tags.includes("magnet")?Ec(e):["# Type of model unknown."],Rc=()=>[`# Install CLI with Homebrew on macOS device
brew install whisperkit-cli

# View all available inference options
whisperkit-cli transcribe --help
	
# Download and run inference using whisper base model
whisperkit-cli transcribe --audio-path /path/to/audio.mp3

# Or use your preferred model variant
whisperkit-cli transcribe --model "large-v3" --model-prefix "distil" --audio-path /path/to/audio.mp3 --verbose`],$c=e=>[`from threedtopia_xl.models import threedtopia_xl

model = threedtopia_xl.from_pretrained("${e.id}")
model.generate(cond="path/to/image.png")`],jc=e=>[`# pip install git+https://github.com/Zyphra/Zonos.git
import torchaudio
from zonos.model import Zonos
from zonos.conditioning import make_cond_dict

model = Zonos.from_pretrained("${e.id}", device="cuda")

wav, sr = torchaudio.load("speaker.wav")           # 5-10s reference clip
speaker = model.make_speaker_embedding(wav, sr)

cond  = make_cond_dict(text="Hello, world!", speaker=speaker, language="en-us")
codes = model.generate(model.prepare_conditioning(cond))

audio = model.autoencoder.decode(codes)[0].cpu()
torchaudio.save("sample.wav", audio, model.autoencoder.sampling_rate)
`],Lc={acestep:{prettyLabel:"ACE-Step",repoName:"ACE-Step",repoUrl:"https://github.com/ace-step/ACE-Step",filter:!1,countDownloads:'path:"ace_step_transformer/config.json"'},"adapter-transformers":{prettyLabel:"Adapters",repoName:"adapters",repoUrl:"https://github.com/Adapter-Hub/adapters",docsUrl:"https://huggingface.co/docs/hub/adapters",snippets:ir,filter:!0,countDownloads:'path:"adapter_config.json"'},allennlp:{prettyLabel:"AllenNLP",repoName:"AllenNLP",repoUrl:"https://github.com/allenai/allennlp",docsUrl:"https://huggingface.co/docs/hub/allennlp",snippets:rr,filter:!0},anemoi:{prettyLabel:"AnemoI",repoName:"AnemoI",repoUrl:"https://github.com/ecmwf/anemoi-inference",docsUrl:"https://anemoi.readthedocs.io/en/latest/",filter:!1,countDownloads:'path_extension:"ckpt"',snippets:Cc},araclip:{prettyLabel:"AraClip",repoName:"AraClip",repoUrl:"https://huggingface.co/Arabic-Clip/araclip",filter:!1,snippets:lr},asteroid:{prettyLabel:"Asteroid",repoName:"Asteroid",repoUrl:"https://github.com/asteroid-team/asteroid",docsUrl:"https://huggingface.co/docs/hub/asteroid",snippets:cr,filter:!0,countDownloads:'path:"pytorch_model.bin"'},audiocraft:{prettyLabel:"Audiocraft",repoName:"audiocraft",repoUrl:"https://github.com/facebookresearch/audiocraft",snippets:Dc,filter:!1,countDownloads:'path:"state_dict.bin"'},audioseal:{prettyLabel:"AudioSeal",repoName:"audioseal",repoUrl:"https://github.com/facebookresearch/audioseal",filter:!1,countDownloads:'path_extension:"pth"',snippets:dr},"bagel-mot":{prettyLabel:"Bagel",repoName:"Bagel",repoUrl:"https://github.com/ByteDance-Seed/Bagel/",filter:!1,countDownloads:'path:"llm_config.json"'},bboxmaskpose:{prettyLabel:"BBoxMaskPose",repoName:"BBoxMaskPose",repoUrl:"https://github.com/MiraPurkrabek/BBoxMaskPose",filter:!1,countDownloads:'path_extension:"pth"'},ben2:{prettyLabel:"BEN2",repoName:"BEN2",repoUrl:"https://github.com/PramaLLC/BEN2",snippets:pr,filter:!1},bertopic:{prettyLabel:"BERTopic",repoName:"BERTopic",repoUrl:"https://github.com/MaartenGr/BERTopic",snippets:ur,filter:!0},big_vision:{prettyLabel:"Big Vision",repoName:"big_vision",repoUrl:"https://github.com/google-research/big_vision",filter:!1,countDownloads:'path_extension:"npz"'},birder:{prettyLabel:"Birder",repoName:"Birder",repoUrl:"https://gitlab.com/birder/birder",filter:!1,countDownloads:'path_extension:"pt"'},birefnet:{prettyLabel:"BiRefNet",repoName:"BiRefNet",repoUrl:"https://github.com/ZhengPeng7/BiRefNet",snippets:cc,filter:!1},bm25s:{prettyLabel:"BM25S",repoName:"bm25s",repoUrl:"https://github.com/xhluca/bm25s",snippets:mr,filter:!1,countDownloads:'path:"params.index.json"'},champ:{prettyLabel:"Champ",repoName:"Champ",repoUrl:"https://github.com/fudan-generative-vision/champ",countDownloads:'path:"champ/motion_module.pth"'},chatterbox:{prettyLabel:"Chatterbox",repoName:"Chatterbox",repoUrl:"https://github.com/resemble-ai/chatterbox",snippets:fr,countDownloads:'path:"tokenizer.json"',filter:!1},chat_tts:{prettyLabel:"ChatTTS",repoName:"ChatTTS",repoUrl:"https://github.com/2noise/ChatTTS.git",snippets:lc,filter:!1,countDownloads:'path:"asset/GPT.pt"'},"cloud-agents":{prettyLabel:"Cloud Agents",repoName:"Cloud Agents",repoUrl:"https://huggingface.co/OpenPeerAI/Cloud-Agents",filter:!1,countDownloads:'path:"setup.py"'},colpali:{prettyLabel:"ColPali",repoName:"ColPali",repoUrl:"https://github.com/ManuelFay/colpali",filter:!1,countDownloads:'path:"adapter_config.json"'},comet:{prettyLabel:"COMET",repoName:"COMET",repoUrl:"https://github.com/Unbabel/COMET/",countDownloads:'path:"hparams.yaml"'},contexttab:{prettyLabel:"ConTextTab",repoName:"ConTextTab",repoUrl:"https://github.com/SAP-samples/contexttab",countDownloads:'path_extension:"pt"',snippets:gr},cosmos:{prettyLabel:"Cosmos",repoName:"Cosmos",repoUrl:"https://github.com/NVIDIA/Cosmos",countDownloads:'path:"config.json" OR path_extension:"pt"'},"cxr-foundation":{prettyLabel:"CXR Foundation",repoName:"cxr-foundation",repoUrl:"https://github.com/google-health/cxr-foundation",snippets:hr,filter:!1,countDownloads:'path:"precomputed_embeddings/embeddings.npz" OR path:"pax-elixr-b-text/saved_model.pb"'},deepforest:{prettyLabel:"DeepForest",repoName:"deepforest",docsUrl:"https://deepforest.readthedocs.io/en/latest/",repoUrl:"https://github.com/weecology/DeepForest"},"depth-anything-v2":{prettyLabel:"DepthAnythingV2",repoName:"Depth Anything V2",repoUrl:"https://github.com/DepthAnything/Depth-Anything-V2",snippets:br,filter:!1,countDownloads:'path_extension:"pth"'},"depth-pro":{prettyLabel:"Depth Pro",repoName:"Depth Pro",repoUrl:"https://github.com/apple/ml-depth-pro",countDownloads:'path_extension:"pt"',snippets:yr,filter:!1},"derm-foundation":{prettyLabel:"Derm Foundation",repoName:"derm-foundation",repoUrl:"https://github.com/google-health/derm-foundation",snippets:vr,filter:!1,countDownloads:'path:"scin_dataset_precomputed_embeddings.npz" OR path:"saved_model.pb"'},"describe-anything":{prettyLabel:"Describe Anything",repoName:"Describe Anything",repoUrl:"https://github.com/NVlabs/describe-anything",snippets:_r,filter:!1},"dia-tts":{prettyLabel:"Dia",repoName:"Dia",repoUrl:"https://github.com/nari-labs/dia",snippets:wr,filter:!1},"diff-interpretation-tuning":{prettyLabel:"Diff Interpretation Tuning",repoName:"Diff Interpretation Tuning",repoUrl:"https://github.com/Aviously/diff-interpretation-tuning",filter:!1,countDownloads:'path_extension:"pt"'},diffree:{prettyLabel:"Diffree",repoName:"Diffree",repoUrl:"https://github.com/OpenGVLab/Diffree",filter:!1,countDownloads:'path:"diffree-step=000010999.ckpt"'},diffusers:{prettyLabel:"Diffusers",repoName:"🤗/diffusers",repoUrl:"https://github.com/huggingface/diffusers",docsUrl:"https://huggingface.co/docs/hub/diffusers",snippets:Gt,filter:!0},diffusionkit:{prettyLabel:"DiffusionKit",repoName:"DiffusionKit",repoUrl:"https://github.com/argmaxinc/DiffusionKit",snippets:jr},doctr:{prettyLabel:"docTR",repoName:"doctr",repoUrl:"https://github.com/mindee/doctr"},cartesia_pytorch:{prettyLabel:"Cartesia Pytorch",repoName:"Cartesia Pytorch",repoUrl:"https://github.com/cartesia-ai/cartesia_pytorch",snippets:Lr},cartesia_mlx:{prettyLabel:"Cartesia MLX",repoName:"Cartesia MLX",repoUrl:"https://github.com/cartesia-ai/cartesia_mlx",snippets:Mr},clipscope:{prettyLabel:"clipscope",repoName:"clipscope",repoUrl:"https://github.com/Lewington-pitsos/clipscope",filter:!1,countDownloads:'path_extension:"pt"'},cosyvoice:{prettyLabel:"CosyVoice",repoName:"CosyVoice",repoUrl:"https://github.com/FunAudioLLM/CosyVoice",filter:!1,countDownloads:'path_extension:"onnx" OR path_extension:"pt"'},cotracker:{prettyLabel:"CoTracker",repoName:"CoTracker",repoUrl:"https://github.com/facebookresearch/co-tracker",filter:!1,countDownloads:'path_extension:"pth"'},edsnlp:{prettyLabel:"EDS-NLP",repoName:"edsnlp",repoUrl:"https://github.com/aphp/edsnlp",docsUrl:"https://aphp.github.io/edsnlp/latest/",filter:!1,snippets:Nr,countDownloads:'path_filename:"config" AND path_extension:"cfg"'},elm:{prettyLabel:"ELM",repoName:"elm",repoUrl:"https://github.com/slicex-ai/elm",filter:!1,countDownloads:'path_filename:"slicex_elm_config" AND path_extension:"json"'},espnet:{prettyLabel:"ESPnet",repoName:"ESPnet",repoUrl:"https://github.com/espnet/espnet",docsUrl:"https://huggingface.co/docs/hub/espnet",snippets:qr,filter:!0},fairseq:{prettyLabel:"Fairseq",repoName:"fairseq",repoUrl:"https://github.com/pytorch/fairseq",snippets:Fr,filter:!0},fastai:{prettyLabel:"fastai",repoName:"fastai",repoUrl:"https://github.com/fastai/fastai",docsUrl:"https://huggingface.co/docs/hub/fastai",snippets:$l,filter:!0},fastprint:{prettyLabel:"Fast Print",repoName:"Fast Print",repoUrl:"https://huggingface.co/OpenPeerAI/FastPrint",countDownloads:'path_extension:"cs"'},fasttext:{prettyLabel:"fastText",repoName:"fastText",repoUrl:"https://fasttext.cc/",snippets:Ql,filter:!0,countDownloads:'path_extension:"bin"'},flair:{prettyLabel:"Flair",repoName:"Flair",repoUrl:"https://github.com/flairNLP/flair",docsUrl:"https://huggingface.co/docs/hub/flair",snippets:Hr,filter:!0,countDownloads:'path:"pytorch_model.bin"'},fme:{prettyLabel:"Full Model Emulation",repoName:"Full Model Emulation",repoUrl:"https://github.com/ai2cm/ace",docsUrl:"https://ai2-climate-emulator.readthedocs.io/en/latest/",filter:!1,countDownloads:'path_extension:"tar"'},"gemma.cpp":{prettyLabel:"gemma.cpp",repoName:"gemma.cpp",repoUrl:"https://github.com/google/gemma.cpp",filter:!1,countDownloads:'path_extension:"sbs"'},"geometry-crafter":{prettyLabel:"GeometryCrafter",repoName:"GeometryCrafter",repoUrl:"https://github.com/TencentARC/GeometryCrafter",countDownloads:'path:"point_map_vae/diffusion_pytorch_model.safetensors"'},gliner:{prettyLabel:"GLiNER",repoName:"GLiNER",repoUrl:"https://github.com/urchade/GLiNER",snippets:Vr,filter:!1,countDownloads:'path:"gliner_config.json"'},"glyph-byt5":{prettyLabel:"Glyph-ByT5",repoName:"Glyph-ByT5",repoUrl:"https://github.com/AIGText/Glyph-ByT5",filter:!1,countDownloads:'path:"checkpoints/byt5_model.pt"'},grok:{prettyLabel:"Grok",repoName:"Grok",repoUrl:"https://github.com/xai-org/grok-1",filter:!1,countDownloads:'path:"ckpt/tensor00000_000" OR path:"ckpt-0/tensor00000_000"'},hallo:{prettyLabel:"Hallo",repoName:"Hallo",repoUrl:"https://github.com/fudan-generative-vision/hallo",countDownloads:'path:"hallo/net.pth"'},hermes:{prettyLabel:"HERMES",repoName:"HERMES",repoUrl:"https://github.com/LMD0311/HERMES",filter:!1,countDownloads:'path:"ckpt/hermes_final.pth"'},hezar:{prettyLabel:"Hezar",repoName:"Hezar",repoUrl:"https://github.com/hezarai/hezar",docsUrl:"https://hezarai.github.io/hezar",countDownloads:'path:"model_config.yaml" OR path:"embedding/embedding_config.yaml"'},htrflow:{prettyLabel:"HTRflow",repoName:"HTRflow",repoUrl:"https://github.com/AI-Riksarkivet/htrflow",docsUrl:"https://ai-riksarkivet.github.io/htrflow",snippets:Kr},"hunyuan-dit":{prettyLabel:"HunyuanDiT",repoName:"HunyuanDiT",repoUrl:"https://github.com/Tencent/HunyuanDiT",countDownloads:'path:"pytorch_model_ema.pt" OR path:"pytorch_model_distill.pt"'},"hunyuan3d-2":{prettyLabel:"Hunyuan3D-2",repoName:"Hunyuan3D-2",repoUrl:"https://github.com/Tencent/Hunyuan3D-2",countDownloads:'path_filename:"model_index" OR path_filename:"config"'},"hunyuanworld-voyager":{prettyLabel:"HunyuanWorld-voyager",repoName:"HunyuanWorld-voyager",repoUrl:"https://github.com/Tencent-Hunyuan/HunyuanWorld-Voyager"},imstoucan:{prettyLabel:"IMS Toucan",repoName:"IMS-Toucan",repoUrl:"https://github.com/DigitalPhonetics/IMS-Toucan",countDownloads:'path:"embedding_gan.pt" OR path:"Vocoder.pt" OR path:"ToucanTTS.pt"'},"index-tts":{prettyLabel:"IndexTTS",repoName:"IndexTTS",repoUrl:"https://github.com/index-tts/index-tts",snippets:zr,filter:!1},infinitetalk:{prettyLabel:"InfiniteTalk",repoName:"InfiniteTalk",repoUrl:"https://github.com/MeiGen-AI/InfiniteTalk",filter:!1,countDownloads:'path_extension:"safetensors"'},"infinite-you":{prettyLabel:"InfiniteYou",repoName:"InfiniteYou",repoUrl:"https://github.com/bytedance/InfiniteYou",filter:!1,countDownloads:'path:"infu_flux_v1.0/sim_stage1/image_proj_model.bin" OR path:"infu_flux_v1.0/aes_stage2/image_proj_model.bin"'},keras:{prettyLabel:"Keras",repoName:"Keras",repoUrl:"https://github.com/keras-team/keras",docsUrl:"https://huggingface.co/docs/hub/keras",snippets:Wr,filter:!0,countDownloads:'path:"config.json" OR path_extension:"keras"'},"tf-keras":{prettyLabel:"TF-Keras",repoName:"TF-Keras",repoUrl:"https://github.com/keras-team/tf-keras",docsUrl:"https://huggingface.co/docs/hub/tf-keras",snippets:sl,countDownloads:'path:"saved_model.pb"'},"keras-hub":{prettyLabel:"KerasHub",repoName:"KerasHub",repoUrl:"https://github.com/keras-team/keras-hub",docsUrl:"https://keras.io/keras_hub/",snippets:el,filter:!0},"kimi-audio":{prettyLabel:"KimiAudio",repoName:"KimiAudio",repoUrl:"https://github.com/MoonshotAI/Kimi-Audio",snippets:tl,filter:!1},kittentts:{prettyLabel:"KittenTTS",repoName:"KittenTTS",repoUrl:"https://github.com/KittenML/KittenTTS",snippets:al},kronos:{prettyLabel:"KRONOS",repoName:"KRONOS",repoUrl:"https://github.com/mahmoodlab/KRONOS",filter:!1,countDownloads:'path_extension:"pt"'},k2:{prettyLabel:"K2",repoName:"k2",repoUrl:"https://github.com/k2-fsa/k2"},"lightning-ir":{prettyLabel:"Lightning IR",repoName:"Lightning IR",repoUrl:"https://github.com/webis-de/lightning-ir",snippets:nl},litert:{prettyLabel:"LiteRT",repoName:"LiteRT",repoUrl:"https://github.com/google-ai-edge/LiteRT",filter:!1,countDownloads:'path_extension:"tflite"'},"litert-lm":{prettyLabel:"LiteRT-LM",repoName:"LiteRT-LM",repoUrl:"https://github.com/google-ai-edge/LiteRT-LM",filter:!1,countDownloads:'path_extension:"litertlm" OR path_extension:"task"'},lerobot:{prettyLabel:"LeRobot",repoName:"LeRobot",repoUrl:"https://github.com/huggingface/lerobot",docsUrl:"https://huggingface.co/docs/lerobot",filter:!1,snippets:ol},liveportrait:{prettyLabel:"LivePortrait",repoName:"LivePortrait",repoUrl:"https://github.com/KwaiVGI/LivePortrait",filter:!1,countDownloads:'path:"liveportrait/landmark.onnx"'},"llama-cpp-python":{prettyLabel:"llama-cpp-python",repoName:"llama-cpp-python",repoUrl:"https://github.com/abetlen/llama-cpp-python",snippets:il},"mini-omni2":{prettyLabel:"Mini-Omni2",repoName:"Mini-Omni2",repoUrl:"https://github.com/gpt-omni/mini-omni2",countDownloads:'path:"model_config.yaml"'},mindspore:{prettyLabel:"MindSpore",repoName:"mindspore",repoUrl:"https://github.com/mindspore-ai/mindspore"},"magi-1":{prettyLabel:"MAGI-1",repoName:"MAGI-1",repoUrl:"https://github.com/SandAI-org/MAGI-1",countDownloads:'path:"ckpt/vae/config.json"'},"magenta-realtime":{prettyLabel:"Magenta RT",repoName:"Magenta RT",repoUrl:"https://github.com/magenta/magenta-realtime",countDownloads:'path:"checkpoints/llm_base_x4286_c1860k.tar" OR path:"checkpoints/llm_large_x3047_c1860k.tar" OR path:"checkpoints/llm_large_x3047_c1860k/checkpoint"'},"mamba-ssm":{prettyLabel:"MambaSSM",repoName:"MambaSSM",repoUrl:"https://github.com/state-spaces/mamba",filter:!1,snippets:rl},"mars5-tts":{prettyLabel:"MARS5-TTS",repoName:"MARS5-TTS",repoUrl:"https://github.com/Camb-ai/MARS5-TTS",filter:!1,countDownloads:'path:"mars5_ar.safetensors"',snippets:ll},matanyone:{prettyLabel:"MatAnyone",repoName:"MatAnyone",repoUrl:"https://github.com/pq-yang/MatAnyone",snippets:cl,filter:!1},"mesh-anything":{prettyLabel:"MeshAnything",repoName:"MeshAnything",repoUrl:"https://github.com/buaacyw/MeshAnything",filter:!1,countDownloads:'path:"MeshAnything_350m.pth"',snippets:dl},merlin:{prettyLabel:"Merlin",repoName:"Merlin",repoUrl:"https://github.com/StanfordMIMI/Merlin",filter:!1,countDownloads:'path_extension:"pt"'},medvae:{prettyLabel:"MedVAE",repoName:"MedVAE",repoUrl:"https://github.com/StanfordMIMI/MedVAE",filter:!1,countDownloads:'path_extension:"ckpt"'},mitie:{prettyLabel:"MITIE",repoName:"MITIE",repoUrl:"https://github.com/mit-nlp/MITIE",countDownloads:'path_filename:"total_word_feature_extractor"'},"ml-agents":{prettyLabel:"ml-agents",repoName:"ml-agents",repoUrl:"https://github.com/Unity-Technologies/ml-agents",docsUrl:"https://huggingface.co/docs/hub/ml-agents",snippets:Zl,filter:!0,countDownloads:'path_extension:"onnx"'},mlx:{prettyLabel:"MLX",repoName:"MLX",repoUrl:"https://github.com/ml-explore/mlx-examples/tree/main",snippets:bc,filter:!0},"mlx-image":{prettyLabel:"mlx-image",repoName:"mlx-image",repoUrl:"https://github.com/riccardomusmeci/mlx-image",docsUrl:"https://huggingface.co/docs/hub/mlx-image",snippets:hc,filter:!1,countDownloads:'path:"model.safetensors"'},"mlc-llm":{prettyLabel:"MLC-LLM",repoName:"MLC-LLM",repoUrl:"https://github.com/mlc-ai/mlc-llm",docsUrl:"https://llm.mlc.ai/docs/",filter:!1,countDownloads:'path:"mlc-chat-config.json"'},model2vec:{prettyLabel:"Model2Vec",repoName:"model2vec",repoUrl:"https://github.com/MinishLab/model2vec",snippets:yc,filter:!1},moshi:{prettyLabel:"Moshi",repoName:"Moshi",repoUrl:"https://github.com/kyutai-labs/moshi",filter:!1,countDownloads:'path:"tokenizer-e351c8d8-checkpoint125.safetensors"'},mtvcraft:{prettyLabel:"MTVCraft",repoName:"MTVCraft",repoUrl:"https://github.com/baaivision/MTVCraft",filter:!1,countDownloads:'path:"vae/3d-vae.pt"'},nemo:{prettyLabel:"NeMo",repoName:"NeMo",repoUrl:"https://github.com/NVIDIA/NeMo",snippets:kc,filter:!0,countDownloads:'path_extension:"nemo" OR path:"model_config.yaml" OR path_extension:"json"'},"open-oasis":{prettyLabel:"open-oasis",repoName:"open-oasis",repoUrl:"https://github.com/etched-ai/open-oasis",countDownloads:'path:"oasis500m.safetensors"'},open_clip:{prettyLabel:"OpenCLIP",repoName:"OpenCLIP",repoUrl:"https://github.com/mlfoundations/open_clip",snippets:pl,filter:!0,countDownloads:`path:"open_clip_model.safetensors"
			OR path:"model.safetensors"
			OR path:"open_clip_pytorch_model.bin"
			OR path:"pytorch_model.bin"`},openpeerllm:{prettyLabel:"OpenPeerLLM",repoName:"OpenPeerLLM",repoUrl:"https://huggingface.co/openpeerai/openpeerllm",docsUrl:"https://huggingface.co/OpenPeerAI/OpenPeerLLM/blob/main/README.md",countDownloads:'path:".meta-huggingface.json"',filter:!1},"open-sora":{prettyLabel:"Open-Sora",repoName:"Open-Sora",repoUrl:"https://github.com/hpcaitech/Open-Sora",filter:!1,countDownloads:'path:"Open_Sora_v2.safetensors"'},outetts:{prettyLabel:"OuteTTS",repoName:"OuteTTS",repoUrl:"https://github.com/edwko/OuteTTS",snippets:Ac,filter:!1},paddlenlp:{prettyLabel:"paddlenlp",repoName:"PaddleNLP",repoUrl:"https://github.com/PaddlePaddle/PaddleNLP",docsUrl:"https://huggingface.co/docs/hub/paddlenlp",snippets:ul,filter:!0,countDownloads:'path:"model_config.json"'},PaddleOCR:{prettyLabel:"PaddleOCR",repoName:"PaddleOCR",repoUrl:"https://github.com/PaddlePaddle/PaddleOCR",docsUrl:"https://www.paddleocr.ai/",snippets:ml,filter:!0,countDownloads:'path_extension:"safetensors" OR path:"inference.pdiparams"'},peft:{prettyLabel:"PEFT",repoName:"PEFT",repoUrl:"https://github.com/huggingface/peft",snippets:Xl,filter:!0,countDownloads:'path:"adapter_config.json"'},"perception-encoder":{prettyLabel:"PerceptionEncoder",repoName:"PerceptionModels",repoUrl:"https://github.com/facebookresearch/perception_models",filter:!1,snippets:fl,countDownloads:'path_extension:"pt"'},"phantom-wan":{prettyLabel:"Phantom",repoName:"Phantom",repoUrl:"https://github.com/Phantom-video/Phantom",snippets:gl,filter:!1,countDownloads:'path_extension:"pth"'},"pruna-ai":{prettyLabel:"Pruna AI",repoName:"Pruna AI",repoUrl:"https://github.com/PrunaAI/pruna",snippets:vc,docsUrl:"https://docs.pruna.ai"},pxia:{prettyLabel:"pxia",repoName:"pxia",repoUrl:"https://github.com/not-lain/pxia",snippets:Ic,filter:!1},"pyannote-audio":{prettyLabel:"pyannote.audio",repoName:"pyannote-audio",repoUrl:"https://github.com/pyannote/pyannote-audio",snippets:yl,filter:!0},"py-feat":{prettyLabel:"Py-Feat",repoName:"Py-Feat",repoUrl:"https://github.com/cosanlab/py-feat",docsUrl:"https://py-feat.org/",filter:!1},pythae:{prettyLabel:"pythae",repoName:"pythae",repoUrl:"https://github.com/clementchadebec/benchmark_VAE",snippets:Tc,filter:!1},quantumpeer:{prettyLabel:"QuantumPeer",repoName:"QuantumPeer",repoUrl:"https://github.com/OpenPeer-AI/QuantumPeer",filter:!1,countDownloads:'path_extension:"setup.py"'},recurrentgemma:{prettyLabel:"RecurrentGemma",repoName:"recurrentgemma",repoUrl:"https://github.com/google-deepmind/recurrentgemma",filter:!1,countDownloads:'path:"tokenizer.model"'},relik:{prettyLabel:"Relik",repoName:"Relik",repoUrl:"https://github.com/SapienzaNLP/relik",snippets:vl,filter:!1},refiners:{prettyLabel:"Refiners",repoName:"Refiners",repoUrl:"https://github.com/finegrain-ai/refiners",docsUrl:"https://refine.rs/",filter:!1,countDownloads:'path:"model.safetensors"'},renderformer:{prettyLabel:"RenderFormer",repoName:"RenderFormer",repoUrl:"https://github.com/microsoft/renderformer",snippets:wl,filter:!1},reverb:{prettyLabel:"Reverb",repoName:"Reverb",repoUrl:"https://github.com/revdotcom/reverb",filter:!1},rkllm:{prettyLabel:"RKLLM",repoName:"RKLLM",repoUrl:"https://github.com/airockchip/rknn-llm",countDownloads:'path_extension:"rkllm"'},saelens:{prettyLabel:"SAELens",repoName:"SAELens",repoUrl:"https://github.com/jbloomAus/SAELens",snippets:Tl,filter:!1},sam2:{prettyLabel:"sam2",repoName:"sam2",repoUrl:"https://github.com/facebookresearch/segment-anything-2",filter:!1,snippets:jl,countDownloads:'path_extension:"pt"'},"sample-factory":{prettyLabel:"sample-factory",repoName:"sample-factory",repoUrl:"https://github.com/alex-petrenko/sample-factory",docsUrl:"https://huggingface.co/docs/hub/sample-factory",snippets:Ll,filter:!0,countDownloads:'path:"cfg.json"'},sapiens:{prettyLabel:"sapiens",repoName:"sapiens",repoUrl:"https://github.com/facebookresearch/sapiens",filter:!1,countDownloads:'path_extension:"pt2" OR path_extension:"pth" OR path_extension:"onnx"'},seedvr:{prettyLabel:"SeedVR",repoName:"SeedVR",repoUrl:"https://github.com/ByteDance-Seed/SeedVR",filter:!1,countDownloads:'path_extension:"pth"'},"self-forcing":{prettyLabel:"SelfForcing",repoName:"SelfForcing",repoUrl:"https://github.com/guandeh17/Self-Forcing",filter:!1,countDownloads:'path_extension:"pt"'},"sentence-transformers":{prettyLabel:"sentence-transformers",repoName:"sentence-transformers",repoUrl:"https://github.com/UKPLab/sentence-transformers",docsUrl:"https://huggingface.co/docs/hub/sentence-transformers",snippets:Nl,filter:!0},setfit:{prettyLabel:"setfit",repoName:"setfit",repoUrl:"https://github.com/huggingface/setfit",docsUrl:"https://huggingface.co/docs/hub/setfit",snippets:Ul,filter:!0},sklearn:{prettyLabel:"Scikit-learn",repoName:"Scikit-learn",repoUrl:"https://github.com/scikit-learn/scikit-learn",snippets:Dl,filter:!0,countDownloads:'path:"sklearn_model.joblib"'},spacy:{prettyLabel:"spaCy",repoName:"spaCy",repoUrl:"https://github.com/explosion/spaCy",docsUrl:"https://huggingface.co/docs/hub/spacy",snippets:Bl,filter:!0,countDownloads:'path_extension:"whl"'},"span-marker":{prettyLabel:"SpanMarker",repoName:"SpanMarkerNER",repoUrl:"https://github.com/tomaarsen/SpanMarkerNER",docsUrl:"https://huggingface.co/docs/hub/span_marker",snippets:Ol,filter:!0},speechbrain:{prettyLabel:"speechbrain",repoName:"speechbrain",repoUrl:"https://github.com/speechbrain/speechbrain",docsUrl:"https://huggingface.co/docs/hub/speechbrain",snippets:Hl,filter:!0,countDownloads:'path:"hyperparams.yaml"'},"ssr-speech":{prettyLabel:"SSR-Speech",repoName:"SSR-Speech",repoUrl:"https://github.com/WangHelin1997/SSR-Speech",filter:!1,countDownloads:'path_extension:".pth"'},"stable-audio-tools":{prettyLabel:"Stable Audio Tools",repoName:"stable-audio-tools",repoUrl:"https://github.com/Stability-AI/stable-audio-tools.git",filter:!1,countDownloads:'path:"model.safetensors"',snippets:Rl},monkeyocr:{prettyLabel:"MonkeyOCR",repoName:"monkeyocr",repoUrl:"https://github.com/Yuliang-Liu/MonkeyOCR",filter:!1,countDownloads:'path:"Recognition/config.json"'},"diffusion-single-file":{prettyLabel:"Diffusion Single File",repoName:"diffusion-single-file",repoUrl:"https://github.com/comfyanonymous/ComfyUI",filter:!1,countDownloads:'path_extension:"safetensors"'},"seed-story":{prettyLabel:"SEED-Story",repoName:"SEED-Story",repoUrl:"https://github.com/TencentARC/SEED-Story",filter:!1,countDownloads:'path:"cvlm_llama2_tokenizer/tokenizer.model"',snippets:Sl},soloaudio:{prettyLabel:"SoloAudio",repoName:"SoloAudio",repoUrl:"https://github.com/WangHelin1997/SoloAudio",filter:!1,countDownloads:'path:"soloaudio_v2.pt"'},songbloom:{prettyLabel:"SongBloom",repoName:"SongBloom",repoUrl:"https://github.com/Cypress-Yang/SongBloom",filter:!1,countDownloads:'path_extension:"pt"'},"stable-baselines3":{prettyLabel:"stable-baselines3",repoName:"stable-baselines3",repoUrl:"https://github.com/huggingface/huggingface_sb3",docsUrl:"https://huggingface.co/docs/hub/stable-baselines3",snippets:Jl,filter:!0,countDownloads:'path_extension:"zip"'},stanza:{prettyLabel:"Stanza",repoName:"stanza",repoUrl:"https://github.com/stanfordnlp/stanza",docsUrl:"https://huggingface.co/docs/hub/stanza",snippets:ql,filter:!0,countDownloads:'path:"models/default.zip"'},swarmformer:{prettyLabel:"SwarmFormer",repoName:"SwarmFormer",repoUrl:"https://github.com/takara-ai/SwarmFormer",snippets:dc,filter:!1},"f5-tts":{prettyLabel:"F5-TTS",repoName:"F5-TTS",repoUrl:"https://github.com/SWivid/F5-TTS",filter:!1,countDownloads:'path_extension:"safetensors" OR path_extension:"pt"'},genmo:{prettyLabel:"Genmo",repoName:"Genmo",repoUrl:"https://github.com/genmoai/models",filter:!1,countDownloads:'path:"vae_stats.json"'},"tencent-song-generation":{prettyLabel:"SongGeneration",repoName:"SongGeneration",repoUrl:"https://github.com/tencent-ailab/songgeneration",filter:!1,countDownloads:'path:"ckpt/songgeneration_base/model.pt"'},tensorflowtts:{prettyLabel:"TensorFlowTTS",repoName:"TensorFlowTTS",repoUrl:"https://github.com/TensorSpeech/TensorFlowTTS",snippets:Al},tensorrt:{prettyLabel:"TensorRT",repoName:"TensorRT",repoUrl:"https://github.com/NVIDIA/TensorRT",countDownloads:'path_extension:"onnx"'},tabpfn:{prettyLabel:"TabPFN",repoName:"TabPFN",repoUrl:"https://github.com/PriorLabs/TabPFN"},terratorch:{prettyLabel:"TerraTorch",repoName:"TerraTorch",repoUrl:"https://github.com/IBM/terratorch",docsUrl:"https://ibm.github.io/terratorch/",filter:!1,countDownloads:'path_extension:"pt" OR path_extension:"ckpt"',snippets:Vl},"tic-clip":{prettyLabel:"TiC-CLIP",repoName:"TiC-CLIP",repoUrl:"https://github.com/apple/ml-tic-clip",filter:!1,countDownloads:'path_extension:"pt" AND path_prefix:"checkpoints/"'},timesfm:{prettyLabel:"TimesFM",repoName:"timesfm",repoUrl:"https://github.com/google-research/timesfm",filter:!1,countDownloads:'path:"checkpoints/checkpoint_1100000/state/checkpoint" OR path:"checkpoints/checkpoint_2150000/state/checkpoint" OR path_extension:"ckpt"'},timm:{prettyLabel:"timm",repoName:"pytorch-image-models",repoUrl:"https://github.com/rwightman/pytorch-image-models",docsUrl:"https://huggingface.co/docs/hub/timm",snippets:Il,filter:!0,countDownloads:'path:"pytorch_model.bin" OR path:"model.safetensors"'},tirex:{prettyLabel:"TiRex",repoName:"TiRex",repoUrl:"https://github.com/NX-AI/tirex",countDownloads:'path_extension:"ckpt"'},torchgeo:{prettyLabel:"TorchGeo",repoName:"TorchGeo",repoUrl:"https://github.com/microsoft/torchgeo",docsUrl:"https://torchgeo.readthedocs.io/",filter:!1,countDownloads:'path_extension:"pt" OR path_extension:"pth"'},transformers:{prettyLabel:"Transformers",repoName:"🤗/transformers",repoUrl:"https://github.com/huggingface/transformers",docsUrl:"https://huggingface.co/docs/hub/transformers",snippets:ea,filter:!0},"transformers.js":{prettyLabel:"Transformers.js",repoName:"transformers.js",repoUrl:"https://github.com/huggingface/transformers.js",docsUrl:"https://huggingface.co/docs/hub/transformers-js",snippets:Kl,filter:!0},trellis:{prettyLabel:"Trellis",repoName:"Trellis",repoUrl:"https://github.com/microsoft/TRELLIS",countDownloads:'path_extension:"safetensors"'},ultralytics:{prettyLabel:"ultralytics",repoName:"ultralytics",repoUrl:"https://github.com/ultralytics/ultralytics",docsUrl:"https://github.com/ultralytics/ultralytics",filter:!1,countDownloads:'path_extension:"pt"',snippets:jt},univa:{prettyLabel:"univa",repoName:"univa",repoUrl:"https://github.com/PKU-YuanGroup/UniWorld-V1",snippets:pc,filter:!0,countDownloads:'path:"config.json"'},"uni-3dar":{prettyLabel:"Uni-3DAR",repoName:"Uni-3DAR",repoUrl:"https://github.com/dptech-corp/Uni-3DAR",docsUrl:"https://github.com/dptech-corp/Uni-3DAR",countDownloads:'path_extension:"pt"'},"unity-sentis":{prettyLabel:"unity-sentis",repoName:"unity-sentis",repoUrl:"https://github.com/Unity-Technologies/sentis-samples",snippets:Gl,filter:!0,countDownloads:'path_extension:"sentis"'},sana:{prettyLabel:"Sana",repoName:"Sana",repoUrl:"https://github.com/NVlabs/Sana",countDownloads:'path_extension:"pth"',snippets:ec},videoprism:{prettyLabel:"VideoPrism",repoName:"VideoPrism",repoUrl:"https://github.com/google-deepmind/videoprism",countDownloads:'path_extension:"npz"',snippets:ac},"vfi-mamba":{prettyLabel:"VFIMamba",repoName:"VFIMamba",repoUrl:"https://github.com/MCG-NJU/VFIMamba",countDownloads:'path_extension:"pkl"',snippets:nc},lvface:{prettyLabel:"LVFace",repoName:"LVFace",repoUrl:"https://github.com/bytedance/LVFace",countDownloads:'path_extension:"pt" OR path_extension:"onnx"',snippets:ic},voicecraft:{prettyLabel:"VoiceCraft",repoName:"VoiceCraft",repoUrl:"https://github.com/jasonppy/VoiceCraft",docsUrl:"https://github.com/jasonppy/VoiceCraft",snippets:oc},voxcpm:{prettyLabel:"VoxCPM",repoName:"VoxCPM",repoUrl:"https://github.com/OpenBMB/VoxCPM",snippets:sc,filter:!1},vui:{prettyLabel:"Vui",repoName:"Vui",repoUrl:"https://github.com/vui-ai/vui",countDownloads:'path_extension:"pt"',snippets:rc},vibevoice:{prettyLabel:"VibeVoice",repoName:"VibeVoice",repoUrl:"https://github.com/microsoft/VibeVoice",snippets:tc,filter:!1},"wan2.2":{prettyLabel:"Wan2.2",repoName:"Wan2.2",repoUrl:"https://github.com/Wan-Video/Wan2.2",countDownloads:'path_filename:"config" AND path_extension:"json"'},wham:{prettyLabel:"WHAM",repoName:"wham",repoUrl:"https://huggingface.co/microsoft/wham",docsUrl:"https://huggingface.co/microsoft/wham/blob/main/README.md",countDownloads:'path_extension:"ckpt"'},whisperkit:{prettyLabel:"WhisperKit",repoName:"WhisperKit",repoUrl:"https://github.com/argmaxinc/WhisperKit",docsUrl:"https://github.com/argmaxinc/WhisperKit?tab=readme-ov-file#homebrew",snippets:Rc,countDownloads:'path_filename:"model" AND path_extension:"mil" AND _exists_:"path_prefix"'},yolov10:{prettyLabel:"YOLOv10",repoName:"YOLOv10",repoUrl:"https://github.com/THU-MIG/yolov10",docsUrl:"https://github.com/THU-MIG/yolov10",countDownloads:'path_extension:"pt" OR path_extension:"safetensors"',snippets:jt},zonos:{prettyLabel:"Zonos",repoName:"Zonos",repoUrl:"https://github.com/Zyphra/Zonos",docsUrl:"https://github.com/Zyphra/Zonos",snippets:jc,filter:!1},"3dtopia-xl":{prettyLabel:"3DTopia-XL",repoName:"3DTopia-XL",repoUrl:"https://github.com/3DTopia/3DTopia-XL",filter:!1,countDownloads:'path:"model_vae_fp16.pt"',snippets:$c}};Object.entries(Lc).filter(([e,t])=>t.filter).map(([e])=>e);var _;(function(e){e[e.F32=0]="F32",e[e.F16=1]="F16",e[e.Q4_0=2]="Q4_0",e[e.Q4_1=3]="Q4_1",e[e.Q4_1_SOME_F16=4]="Q4_1_SOME_F16",e[e.Q4_2=5]="Q4_2",e[e.Q4_3=6]="Q4_3",e[e.Q8_0=7]="Q8_0",e[e.Q5_0=8]="Q5_0",e[e.Q5_1=9]="Q5_1",e[e.Q2_K=10]="Q2_K",e[e.Q3_K_S=11]="Q3_K_S",e[e.Q3_K_M=12]="Q3_K_M",e[e.Q3_K_L=13]="Q3_K_L",e[e.Q4_K_S=14]="Q4_K_S",e[e.Q4_K_M=15]="Q4_K_M",e[e.Q5_K_S=16]="Q5_K_S",e[e.Q5_K_M=17]="Q5_K_M",e[e.Q6_K=18]="Q6_K",e[e.IQ2_XXS=19]="IQ2_XXS",e[e.IQ2_XS=20]="IQ2_XS",e[e.Q2_K_S=21]="Q2_K_S",e[e.IQ3_XS=22]="IQ3_XS",e[e.IQ3_XXS=23]="IQ3_XXS",e[e.IQ1_S=24]="IQ1_S",e[e.IQ4_NL=25]="IQ4_NL",e[e.IQ3_S=26]="IQ3_S",e[e.IQ3_M=27]="IQ3_M",e[e.IQ2_S=28]="IQ2_S",e[e.IQ2_M=29]="IQ2_M",e[e.IQ4_XS=30]="IQ4_XS",e[e.IQ1_M=31]="IQ1_M",e[e.BF16=32]="BF16",e[e.Q4_0_4_4=33]="Q4_0_4_4",e[e.Q4_0_4_8=34]="Q4_0_4_8",e[e.Q4_0_8_8=35]="Q4_0_8_8",e[e.TQ1_0=36]="TQ1_0",e[e.TQ2_0=37]="TQ2_0",e[e.MXFP4_MOE=38]="MXFP4_MOE",e[e.Q2_K_XL=1e3]="Q2_K_XL",e[e.Q3_K_XL=1001]="Q3_K_XL",e[e.Q4_K_XL=1002]="Q4_K_XL",e[e.Q5_K_XL=1003]="Q5_K_XL",e[e.Q6_K_XL=1004]="Q6_K_XL",e[e.Q8_K_XL=1005]="Q8_K_XL"})(_||(_={}));const Mc=Object.values(_).filter(e=>typeof e=="string");new RegExp(`(?<quant>${Mc.join("|")})(_(?<sizeVariation>[A-Z]+))?`);_.F32,_.BF16,_.F16,_.Q8_K_XL,_.Q8_0,_.Q6_K_XL,_.Q6_K,_.Q5_K_XL,_.Q5_K_M,_.Q5_K_S,_.Q5_0,_.Q5_1,_.Q4_K_XL,_.Q4_K_M,_.Q4_K_S,_.IQ4_NL,_.IQ4_XS,_.Q4_0_4_4,_.Q4_0_4_8,_.Q4_0_8_8,_.Q4_1_SOME_F16,_.Q4_0,_.Q4_1,_.Q4_2,_.Q4_3,_.MXFP4_MOE,_.Q3_K_XL,_.Q3_K_L,_.Q3_K_M,_.Q3_K_S,_.IQ3_M,_.IQ3_S,_.IQ3_XS,_.IQ3_XXS,_.Q2_K_XL,_.Q2_K,_.Q2_K_S,_.IQ2_M,_.IQ2_S,_.IQ2_XS,_.IQ2_XXS,_.IQ1_S,_.IQ1_M,_.TQ1_0,_.TQ2_0;var Lt;(function(e){e[e.F32=0]="F32",e[e.F16=1]="F16",e[e.Q4_0=2]="Q4_0",e[e.Q4_1=3]="Q4_1",e[e.Q5_0=6]="Q5_0",e[e.Q5_1=7]="Q5_1",e[e.Q8_0=8]="Q8_0",e[e.Q8_1=9]="Q8_1",e[e.Q2_K=10]="Q2_K",e[e.Q3_K=11]="Q3_K",e[e.Q4_K=12]="Q4_K",e[e.Q5_K=13]="Q5_K",e[e.Q6_K=14]="Q6_K",e[e.Q8_K=15]="Q8_K",e[e.IQ2_XXS=16]="IQ2_XXS",e[e.IQ2_XS=17]="IQ2_XS",e[e.IQ3_XXS=18]="IQ3_XXS",e[e.IQ1_S=19]="IQ1_S",e[e.IQ4_NL=20]="IQ4_NL",e[e.IQ3_S=21]="IQ3_S",e[e.IQ2_S=22]="IQ2_S",e[e.IQ4_XS=23]="IQ4_XS",e[e.I8=24]="I8",e[e.I16=25]="I16",e[e.I32=26]="I32",e[e.I64=27]="I64",e[e.F64=28]="F64",e[e.IQ1_M=29]="IQ1_M",e[e.BF16=30]="BF16",e[e.TQ1_0=34]="TQ1_0",e[e.TQ2_0=35]="TQ2_0",e[e.MXFP4=39]="MXFP4"})(Lt||(Lt={}));const Nc={js:{fetch:{basic:`async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "application/json",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

query({ inputs: {{ providerInputs.asObj.inputs }} }).then((response) => {
    console.log(JSON.stringify(response));
});`,basicAudio:`async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "audio/flac",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

query({ inputs: {{ providerInputs.asObj.inputs }} }).then((response) => {
    console.log(JSON.stringify(response));
});`,basicImage:`async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "image/jpeg",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

query({ inputs: {{ providerInputs.asObj.inputs }} }).then((response) => {
    console.log(JSON.stringify(response));
});`,conversational:`async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "application/json",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

query({ 
{{ autoInputs.asTsString }}
}).then((response) => {
    console.log(JSON.stringify(response));
});`,imageToImage:`const image = fs.readFileSync("{{inputs.asObj.inputs}}");

async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "image/jpeg",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: {
				"inputs": \`data:image/png;base64,\${data.inputs.encode("base64")}\`,
				"parameters": data.parameters,
			}
		}
	);
	const result = await response.json();
	return result;
}

query({ 
	inputs: image,
	parameters: {
		prompt: "{{ inputs.asObj.parameters.prompt }}",
	}
}).then((response) => {
    console.log(JSON.stringify(response));
});`,imageToVideo:`const image = fs.readFileSync("{{inputs.asObj.inputs}}");

async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "image/jpeg",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: {
				"image_url": \`data:image/png;base64,\${data.image.encode("base64")}\`,
				"prompt": data.prompt,
			}
		}
	);
	const result = await response.json();
	return result;
}

query({
	"image": image,
	"prompt": "{{inputs.asObj.parameters.prompt}}",
}).then((response) => {
    // Use video
});`,textToAudio:`{% if model.library_name == "transformers" %}
async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "application/json",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.blob();
    return result;
}

query({ inputs: {{ providerInputs.asObj.inputs }} }).then((response) => {
    // Returns a byte object of the Audio wavform. Use it directly!
});
{% else %}
async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
    const result = await response.json();
    return result;
}

query({ inputs: {{ providerInputs.asObj.inputs }} }).then((response) => {
    console.log(JSON.stringify(response));
});
{% endif %} `,textToImage:`async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "application/json",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.blob();
	return result;
}


query({ {{ providerInputs.asTsString }} }).then((response) => {
    // Use image
});`,textToSpeech:`{% if model.library_name == "transformers" %}
async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "application/json",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.blob();
    return result;
}

query({ text: {{ inputs.asObj.inputs }} }).then((response) => {
    // Returns a byte object of the Audio wavform. Use it directly!
});
{% else %}
async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
    const result = await response.json();
    return result;
}

query({ text: {{ inputs.asObj.inputs }} }).then((response) => {
    console.log(JSON.stringify(response));
});
{% endif %} `,zeroShotClassification:`async function query(data) {
    const response = await fetch(
		"{{ fullUrl }}",
        {
            headers: {
				Authorization: "{{ authorizationHeader }}",
                "Content-Type": "application/json",
{% if billTo %}
                "X-HF-Bill-To": "{{ billTo }}",
{% endif %}         },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    return result;
}

query({
    inputs: {{ providerInputs.asObj.inputs }},
    parameters: { candidate_labels: ["refund", "legal", "faq"] }
}).then((response) => {
    console.log(JSON.stringify(response));
});`},"huggingface.js":{basic:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const output = await client.{{ methodName }}({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
	model: "{{ model.id }}",
	inputs: {{ inputs.asObj.inputs }},
	provider: "{{ provider }}",
}{% if billTo %}, {
	billTo: "{{ billTo }}",
}{% endif %});

console.log(output);`,basicAudio:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const data = fs.readFileSync({{inputs.asObj.inputs}});

const output = await client.{{ methodName }}({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
	data,
	model: "{{ model.id }}",
	provider: "{{ provider }}",
}{% if billTo %}, {
	billTo: "{{ billTo }}",
}{% endif %});

console.log(output);`,basicImage:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const data = fs.readFileSync({{inputs.asObj.inputs}});

const output = await client.{{ methodName }}({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
	data,
	model: "{{ model.id }}",
	provider: "{{ provider }}",
}{% if billTo %}, {
	billTo: "{{ billTo }}",
}{% endif %});

console.log(output);`,conversational:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const chatCompletion = await client.chatCompletion({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
    provider: "{{ provider }}",
    model: "{{ model.id }}",
{{ inputs.asTsString }}
}{% if billTo %}, {
    billTo: "{{ billTo }}",
}{% endif %});

console.log(chatCompletion.choices[0].message);`,conversationalStream:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

let out = "";

const stream = client.chatCompletionStream({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
    provider: "{{ provider }}",
    model: "{{ model.id }}",
{{ inputs.asTsString }}
}{% if billTo %}, {
    billTo: "{{ billTo }}",
}{% endif %});

for await (const chunk of stream) {
	if (chunk.choices && chunk.choices.length > 0) {
		const newContent = chunk.choices[0].delta.content;
		out += newContent;
		console.log(newContent);
	}
}`,imageToImage:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const data = fs.readFileSync("{{inputs.asObj.inputs}}");

const image = await client.imageToImage({
{% if endpointUrl %}
	endpointUrl: "{{ endpointUrl }}",
{% endif %}
	provider: "{{provider}}",
	model: "{{model.id}}",
	inputs: data,
	parameters: { prompt: "{{inputs.asObj.parameters.prompt}}", },
}{% if billTo %}, {
	billTo: "{{ billTo }}",
}{% endif %});
/// Use the generated image (it's a Blob)
// For example, you can save it to a file or display it in an image element
`,imageToVideo:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const data = fs.readFileSync("{{inputs.asObj.inputs}}");

const video = await client.imageToVideo({
{% if endpointUrl %}
	endpointUrl: "{{ endpointUrl }}",
{% endif %}
	provider: "{{provider}}",
	model: "{{model.id}}",
	inputs: data,
	parameters: { prompt: "{{inputs.asObj.parameters.prompt}}", },
}{% if billTo %}, {
	billTo: "{{ billTo }}",
}{% endif %});

/// Use the generated video (it's a Blob)
// For example, you can save it to a file or display it in a video element
`,textToImage:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const image = await client.textToImage({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
    provider: "{{ provider }}",
    model: "{{ model.id }}",
	inputs: {{ inputs.asObj.inputs }},
	parameters: { num_inference_steps: 5 },
}{% if billTo %}, {
    billTo: "{{ billTo }}",
}{% endif %});
/// Use the generated image (it's a Blob)`,textToSpeech:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const audio = await client.textToSpeech({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
    provider: "{{ provider }}",
    model: "{{ model.id }}",
	inputs: {{ inputs.asObj.inputs }},
}{% if billTo %}, {
    billTo: "{{ billTo }}",
}{% endif %});
// Use the generated audio (it's a Blob)`,textToVideo:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const video = await client.textToVideo({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
    provider: "{{ provider }}",
    model: "{{ model.id }}",
	inputs: {{ inputs.asObj.inputs }},
}{% if billTo %}, {
    billTo: "{{ billTo }}",
}{% endif %});
// Use the generated video (it's a Blob)`},openai:{conversational:`import { OpenAI } from "openai";

const client = new OpenAI({
	baseURL: "{{ baseUrl }}",
	apiKey: "{{ accessToken }}",
{% if billTo %}
	defaultHeaders: {
		"X-HF-Bill-To": "{{ billTo }}" 
	}
{% endif %}
});

const chatCompletion = await client.chat.completions.create({
	model: "{{ providerModelId }}",
{{ inputs.asTsString }}
});

console.log(chatCompletion.choices[0].message);`,conversationalStream:`import { OpenAI } from "openai";

const client = new OpenAI({
	baseURL: "{{ baseUrl }}",
	apiKey: "{{ accessToken }}",
{% if billTo %}
    defaultHeaders: {
		"X-HF-Bill-To": "{{ billTo }}" 
	}
{% endif %}
});

const stream = await client.chat.completions.create({
    model: "{{ providerModelId }}",
{{ inputs.asTsString }}
    stream: true,
});

for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0]?.delta?.content || "");
}`}},python:{fal_client:{imageToImage:`{%if provider == "fal-ai" %}
import fal_client
import base64

def on_queue_update(update):
    if isinstance(update, fal_client.InProgress):
        for log in update.logs:
           print(log["message"])

with open("{{inputs.asObj.inputs}}", "rb") as image_file:
    image_base_64 = base64.b64encode(image_file.read()).decode('utf-8')

result = fal_client.subscribe(
    "fal-ai/flux-kontext/dev",
    arguments={
        "prompt": f"data:image/png;base64,{image_base_64}",
        "image_url": "{{ providerInputs.asObj.inputs }}",
    },
    with_logs=True,
    on_queue_update=on_queue_update,
)
print(result)
{%endif%}
`,imageToVideo:`{%if provider == "fal-ai" %}
import fal_client
import base64

def on_queue_update(update):
    if isinstance(update, fal_client.InProgress):
        for log in update.logs:
           print(log["message"])

with open("{{inputs.asObj.inputs}}", "rb") as image_file:
    image_base_64 = base64.b64encode(image_file.read()).decode('utf-8')

result = fal_client.subscribe(
    "{{model.id}}",
    arguments={
        "image_url": f"data:image/png;base64,{image_base_64}",
        "prompt": "{{inputs.asObj.parameters.prompt}}",
    },
    with_logs=True,
    on_queue_update=on_queue_update,
)
print(result)
{%endif%}
`,textToImage:`{% if provider == "fal-ai" %}
import fal_client

{% if providerInputs.asObj.loras is defined and providerInputs.asObj.loras != none %}
result = fal_client.subscribe(
    "{{ providerModelId }}",
    arguments={
        "prompt": {{ inputs.asObj.inputs }},
        "loras":{{ providerInputs.asObj.loras | tojson }},
    },
)
{% else %}
result = fal_client.subscribe(
    "{{ providerModelId }}",
    arguments={
        "prompt": {{ inputs.asObj.inputs }},
    },
)
{% endif %} 
print(result)
{% endif %} `},huggingface_hub:{basic:`result = client.{{ methodName }}(
    {{ inputs.asObj.inputs }},
    model="{{ model.id }}",
)`,basicAudio:'output = client.{{ methodName }}({{ inputs.asObj.inputs }}, model="{{ model.id }}")',basicImage:'output = client.{{ methodName }}({{ inputs.asObj.inputs }}, model="{{ model.id }}")',conversational:`completion = client.chat.completions.create(
    model="{{ model.id }}",
{{ inputs.asPythonString }}
)

print(completion.choices[0].message) `,conversationalStream:`stream = client.chat.completions.create(
    model="{{ model.id }}",
{{ inputs.asPythonString }}
    stream=True,
)

for chunk in stream:
    print(chunk.choices[0].delta.content, end="") `,documentQuestionAnswering:`output = client.document_question_answering(
    "{{ inputs.asObj.image }}",
    question="{{ inputs.asObj.question }}",
    model="{{ model.id }}",
) `,imageToImage:`with open("{{ inputs.asObj.inputs }}", "rb") as image_file:
   input_image = image_file.read()

# output is a PIL.Image object
image = client.image_to_image(
    input_image,
    prompt="{{ inputs.asObj.parameters.prompt }}",
    model="{{ model.id }}",
)
`,imageToVideo:`with open("{{ inputs.asObj.inputs }}", "rb") as image_file:
   input_image = image_file.read()

video = client.image_to_video(
    input_image,
    prompt="{{ inputs.asObj.parameters.prompt }}",
    model="{{ model.id }}",
) 
`,importInferenceClient:`from huggingface_hub import InferenceClient

client = InferenceClient(
{% if endpointUrl %}
    base_url="{{ baseUrl }}",
{% endif %}
    provider="{{ provider }}",
    api_key="{{ accessToken }}",
{% if billTo %}
    bill_to="{{ billTo }}",
{% endif %}
)`,questionAnswering:`answer = client.question_answering(
    question="{{ inputs.asObj.question }}",
    context="{{ inputs.asObj.context }}",
    model="{{ model.id }}",
) `,tableQuestionAnswering:`answer = client.table_question_answering(
    query="{{ inputs.asObj.query }}",
    table={{ inputs.asObj.table }},
    model="{{ model.id }}",
) `,textToImage:`# output is a PIL.Image object
image = client.text_to_image(
    {{ inputs.asObj.inputs }},
    model="{{ model.id }}",
) `,textToSpeech:`# audio is returned as bytes
audio = client.text_to_speech(
    {{ inputs.asObj.inputs }},
    model="{{ model.id }}",
) 
`,textToVideo:`video = client.text_to_video(
    {{ inputs.asObj.inputs }},
    model="{{ model.id }}",
) `},openai:{conversational:`from openai import OpenAI

client = OpenAI(
    base_url="{{ baseUrl }}",
    api_key="{{ accessToken }}",
{% if billTo %}
    default_headers={
        "X-HF-Bill-To": "{{ billTo }}"
    }
{% endif %}
)

completion = client.chat.completions.create(
    model="{{ providerModelId }}",
{{ inputs.asPythonString }}
)

print(completion.choices[0].message) `,conversationalStream:`from openai import OpenAI

client = OpenAI(
    base_url="{{ baseUrl }}",
    api_key="{{ accessToken }}",
{% if billTo %}
    default_headers={
        "X-HF-Bill-To": "{{ billTo }}"
    }
{% endif %}
)

stream = client.chat.completions.create(
    model="{{ providerModelId }}",
{{ inputs.asPythonString }}
    stream=True,
)

for chunk in stream:
    print(chunk.choices[0].delta.content, end="")`},requests:{basic:`def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

output = query({
    "inputs": {{ providerInputs.asObj.inputs }},
}) `,basicAudio:`def query(filename):
    with open(filename, "rb") as f:
        data = f.read()
    response = requests.post(API_URL, headers={"Content-Type": "audio/flac", **headers}, data=data)
    return response.json()

output = query({{ providerInputs.asObj.inputs }})`,basicImage:`def query(filename):
    with open(filename, "rb") as f:
        data = f.read()
    response = requests.post(API_URL, headers={"Content-Type": "image/jpeg", **headers}, data=data)
    return response.json()

output = query({{ providerInputs.asObj.inputs }})`,conversational:`def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

response = query({
{{ autoInputs.asJsonString }}
})

print(response["choices"][0]["message"])`,conversationalStream:`def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload, stream=True)
    for line in response.iter_lines():
        if not line.startswith(b"data:"):
            continue
        if line.strip() == b"data: [DONE]":
            return
        yield json.loads(line.decode("utf-8").lstrip("data:").rstrip("/n"))

chunks = query({
{{ autoInputs.asJsonString }},
    "stream": True,
})

for chunk in chunks:
    print(chunk["choices"][0]["delta"]["content"], end="")`,documentQuestionAnswering:`def query(payload):
    with open(payload["image"], "rb") as f:
        img = f.read()
        payload["image"] = base64.b64encode(img).decode("utf-8")
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

output = query({
    "inputs": {
        "image": "{{ inputs.asObj.image }}",
        "question": "{{ inputs.asObj.question }}",
    },
}) `,imageToImage:`
def query(payload):
    with open(payload["inputs"], "rb") as f:
        img = f.read()
        payload["inputs"] = base64.b64encode(img).decode("utf-8")
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.content

image_bytes = query({
{{ providerInputs.asJsonString }}
})

# You can access the image with PIL.Image for example
import io
from PIL import Image
image = Image.open(io.BytesIO(image_bytes)) `,imageToVideo:`
def query(payload):
    with open(payload["inputs"], "rb") as f:
        img = f.read()
        payload["inputs"] = base64.b64encode(img).decode("utf-8")
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.content

video_bytes = query({
{{ inputs.asJsonString }}
})
`,importRequests:`{% if importBase64 %}
import base64
{% endif %}
{% if importJson %}
import json
{% endif %}
import requests

API_URL = "{{ fullUrl }}"
headers = {
    "Authorization": "{{ authorizationHeader }}",
{% if billTo %}
    "X-HF-Bill-To": "{{ billTo }}"
{% endif %}
}`,tabular:`def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.content

response = query({
    "inputs": {
        "data": {{ providerInputs.asObj.inputs }}
    },
}) `,textToAudio:`{% if model.library_name == "transformers" %}
def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.content

audio_bytes = query({
    "inputs": {{ inputs.asObj.inputs }},
})
# You can access the audio with IPython.display for example
from IPython.display import Audio
Audio(audio_bytes)
{% else %}
def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

audio, sampling_rate = query({
    "inputs": {{ inputs.asObj.inputs }},
})
# You can access the audio with IPython.display for example
from IPython.display import Audio
Audio(audio, rate=sampling_rate)
{% endif %} `,textToImage:`{% if provider == "hf-inference" %}
def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.content

image_bytes = query({
    "inputs": {{ providerInputs.asObj.inputs }},
})

# You can access the image with PIL.Image for example
import io
from PIL import Image
image = Image.open(io.BytesIO(image_bytes))
{% endif %}`,textToSpeech:`{% if model.library_name == "transformers" %}
def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.content

audio_bytes = query({
    "text": {{ inputs.asObj.inputs }},
})
# You can access the audio with IPython.display for example
from IPython.display import Audio
Audio(audio_bytes)
{% else %}
def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

audio, sampling_rate = query({
    "text": {{ inputs.asObj.inputs }},
})
# You can access the audio with IPython.display for example
from IPython.display import Audio
Audio(audio, rate=sampling_rate)
{% endif %} `,zeroShotClassification:`def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

output = query({
    "inputs": {{ providerInputs.asObj.inputs }},
    "parameters": {"candidate_labels": ["refund", "legal", "faq"]},
}) `,zeroShotImageClassification:`def query(data):
    with open(data["image_path"], "rb") as f:
        img = f.read()
    payload={
        "parameters": data["parameters"],
        "inputs": base64.b64encode(img).decode("utf-8")
    }
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

output = query({
    "image_path": {{ providerInputs.asObj.inputs }},
    "parameters": {"candidate_labels": ["cat", "dog", "llama"]},
}) `}},sh:{curl:{basic:`curl {{ fullUrl }} \\
    -X POST \\
    -H 'Authorization: {{ authorizationHeader }}' \\
    -H 'Content-Type: application/json' \\
{% if billTo %}
    -H 'X-HF-Bill-To: {{ billTo }}' \\
{% endif %}
    -d '{
{{ providerInputs.asCurlString }}
    }'`,basicAudio:`curl {{ fullUrl }} \\
    -X POST \\
    -H 'Authorization: {{ authorizationHeader }}' \\
    -H 'Content-Type: audio/flac' \\
{% if billTo %}
    -H 'X-HF-Bill-To: {{ billTo }}' \\
{% endif %}
    --data-binary @{{ providerInputs.asObj.inputs }}`,basicImage:`curl {{ fullUrl }} \\
    -X POST \\
    -H 'Authorization: {{ authorizationHeader }}' \\
    -H 'Content-Type: image/jpeg' \\
{% if billTo %}
    -H 'X-HF-Bill-To: {{ billTo }}' \\
{% endif %}
    --data-binary @{{ providerInputs.asObj.inputs }}`,conversational:`curl {{ fullUrl }} \\
    -H 'Authorization: {{ authorizationHeader }}' \\
    -H 'Content-Type: application/json' \\
{% if billTo %}
    -H 'X-HF-Bill-To: {{ billTo }}' \\
{% endif %}
    -d '{
{{ autoInputs.asCurlString }},
        "stream": false
    }'`,conversationalStream:`curl {{ fullUrl }} \\
    -H 'Authorization: {{ authorizationHeader }}' \\
    -H 'Content-Type: application/json' \\
{% if billTo %}
    -H 'X-HF-Bill-To: {{ billTo }}' \\
{% endif %}
    -d '{
{{ autoInputs.asCurlString }},
        "stream": true
    }'`,zeroShotClassification:`curl {{ fullUrl }} \\
    -X POST \\
    -d '{"inputs": {{ providerInputs.asObj.inputs }}, "parameters": {"candidate_labels": ["refund", "legal", "faq"]}}' \\
    -H 'Content-Type: application/json' \\
    -H 'Authorization: {{ authorizationHeader }}'
{% if billTo %} \\
    -H 'X-HF-Bill-To: {{ billTo }}'
{% endif %}`}}},ta=(e,t,a)=>{var i,o;const n=(o=(i=Nc[e])==null?void 0:i[t])==null?void 0:o[a];if(!n)throw new Error(`Template not found: ${e}/${t}/${a}`);return s=>new $o(n).render({...s})};ta("python","huggingface_hub","importInferenceClient");ta("python","requests","importRequests");window.bootstrap||console.warn("Bootstrap no se ha cargado correctamente");let k="landing",d=null,pe=[],Mt=!1;const oe=document.querySelector("#app");function A(){try{const e=document.getElementById("app");if(!e){console.error('No se encontró el elemento con ID "app"');return}e.innerHTML="",k==="landing"&&!d?Nt():k==="login"?qc():k==="register"?Fc():k==="dashboard"&&d?Hc():k==="projects"&&d?zc():k==="pricing"&&d?Vc():k==="teams"&&d?Xc():k==="calendar"&&d?Yc():k==="settings"&&d?ad():k==="profile"&&d?nd():(k="landing",Nt()),d&&setTimeout(Uc,0)}catch(e){console.error("Error en la función render:",e);const t=document.getElementById("app");t&&(t.innerHTML=`
        <div class="alert alert-danger m-4">
          <h4>Error al cargar la página</h4>
          <p>Por favor, recarga la página. Si el problema persiste, contacta al soporte.</p>
          <p><small>${e.message}</small></p>
        </div>
      `)}}function Uc(){document.querySelectorAll(".nav-link").forEach(a=>{a.classList.remove("active"),a.style.backgroundColor=""});const t={dashboard:"navDashboard",projects:"navProjects",teams:"navTeams",calendar:"navCalendar",settings:"navSettings"}[k];if(t){const a=document.getElementById(t);a&&(a.classList.add("active"),a.style.backgroundColor="rgba(255,255,255,0.1)")}}async function Bc(e){throw new Error("Token de Hugging Face no configurado. Por favor, agrega VITE_HF_TOKEN a tu archivo .env.development")}async function Oc(e){if(!e||e.length===0)return console.log("No hay tareas para analizar"),e;if(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1")try{const a="tu_token_aqui",n=new Ni(a),o=`Eres un experto en gestión de proyectos. Analiza estas tareas y clasifícalas por dificultad según estos criterios:

**CRITERIOS DE DIFICULTAD:**

🟢 FÁCIL (1): 
- Tareas simples y rápidas (menos de 30 minutos)
- No requieren conocimientos técnicos avanzados
- Ejemplos: enviar email, actualizar documento, hacer llamada, revisar texto

🟡 MEDIA (2):
- Tareas que requieren 1-3 horas
- Conocimientos técnicos básicos o intermedios
- Ejemplos: crear presentación, configurar herramienta, investigar tema, escribir artículo

🔴 DIFÍCIL (3):
- Tareas complejas (más de 3 horas)
- Requieren conocimientos técnicos avanzados
- Múltiples pasos o dependencias
- Ejemplos: desarrollar API, diseñar arquitectura, implementar base de datos, crear sistema completo

**TAREAS A ANALIZAR:**
${e.map((g,u)=>`${u+1}. ${g.name}`).join(`
`)}

**INSTRUCCIONES:**
- Analiza cada tarea considerando: complejidad técnica, tiempo estimado, conocimientos requeridos
- Responde SOLO con números (1, 2 o 3) separados por comas
- Un número por cada tarea en el mismo orden
- NO agregues explicaciones, SOLO números

Ejemplo de respuesta correcta: 1,3,2,1,3`,c=(await n.chatCompletion({model:"meta-llama/Llama-3.2-3B-Instruct",messages:[{role:"system",content:"Eres un experto en gestión de proyectos que clasifica tareas por dificultad de forma precisa y consistente."},{role:"user",content:o}],max_tokens:100,temperature:.2})).choices[0].message.content.match(/[1-3]/g)||[];return e.forEach((g,u)=>{g.difficulty=parseInt(c[u])||2;const v={1:"🟢 Fácil",2:"🟡 Media",3:"🔴 Difícil"};g.difficultyLabel=v[g.difficulty]}),e.sort((g,u)=>(g.difficulty||0)-(u.difficulty||0))}catch(a){throw console.error("Error en desarrollo:",a),new Error("Error al analizar tareas en modo desarrollo")}else try{const a=await fetch("/api/analyze-tasks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tasks:e})});if(!a.ok)throw new Error("Error en el análisis de IA");return(await a.json()).sortedTasks}catch(a){throw console.error("Error:",a),a}}function Nt(){oe.innerHTML=`
    <!-- Navbar -->
    <nav class="navbar navbar-dark" style="background-color: #2d3748;">
      <div class="container-fluid px-4">
        <span class="navbar-brand mb-0 h1 fs-2 fw-bold">ZeroChaos</span>
        <div class="d-flex gap-2">
          <button class="btn btn-primary px-4" id="btnLogin">
            Login
          </button>
          <button class="btn btn-light px-4" id="btnRegister">
            Register
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <div class="d-flex align-items-center justify-content-center" 
         style="min-height: calc(100vh - 72px); background-color: #e2e8f0;">
      <div class="text-center px-4">
        <h1 class="display-3 fw-bold mb-3" style="color: #1a202c;">
          Organiza tus proyectos con
        </h1>
        <h2 class="display-3 fw-bold mb-4" style="color: #0d6efd;">
          ZeroChaos
        </h2>
        <p class="fs-4 mb-5" style="color: #4a5568; max-width: 700px; margin: 0 auto;">
          Un plataforma moderna de gestion de proyectos para mejorar tu productividad
        </p>
        <button class="btn btn-primary btn-lg px-5 py-3" id="btnEmpezar">
          Empezar
        </button>
      </div>
    </div>
  `,document.getElementById("btnLogin").addEventListener("click",()=>{k="login",A()}),document.getElementById("btnRegister").addEventListener("click",()=>{k="register",A()}),document.getElementById("btnEmpezar").addEventListener("click",()=>{k="login",A()})}function qc(){oe.innerHTML=`
    <div class="min-vh-100 d-flex align-items-center justify-content-center p-4" 
         style="background: linear-gradient(135deg, #0d6efd 0%, #4c1d95 100%);">
      <div style="width: 100%; max-width: 450px;">
        <div class="text-center mb-4">
          <h1 class="display-4 fw-bold text-white mb-2">ZeroChaos</h1>
          <p class="text-white-50">Gestor de Proyectos Inteligente</p>
        </div>

        <div class="card shadow-lg">
          <div class="card-body p-4">
            <h2 class="h3 fw-bold mb-4">Iniciar Sesión</h2>

            <div id="loginError" class="alert alert-danger d-none"></div>

            <div class="mb-3">
              <label class="form-label fw-semibold">Email</label>
              <input type="email" class="form-control form-control-lg" 
                     id="loginEmail" placeholder="correo@ejemplo.com">
            </div>

            <div class="mb-4">
              <label class="form-label fw-semibold">Contraseña</label>
              <input type="password" class="form-control form-control-lg" 
                     id="loginPassword" placeholder="••••••">
            </div>

            <button class="btn btn-primary btn-lg w-100 mb-3" id="btnLoginSubmit">
              Iniciar Sesión
            </button>

            <p class="text-center mb-0">
              ¿No tienes cuenta? 
              <a href="#" class="text-primary fw-semibold text-decoration-none" id="linkRegister">
                Regístrate aquí
              </a>
            </p>
          </div>
        </div>

        <div class="alert alert-info mt-3">
          <p class="fw-semibold mb-2">Para probar, registra un usuario primero:</p>
          <p class="mb-0">Luego inicia sesión con tus credenciales</p>
        </div>
      </div>
    </div>
  `,document.getElementById("btnLoginSubmit").addEventListener("click",Bt),document.getElementById("loginPassword").addEventListener("keypress",e=>{e.key==="Enter"&&Bt()}),document.getElementById("linkRegister").addEventListener("click",e=>{e.preventDefault(),k="register",A()})}function Fc(){oe.innerHTML=`
    <div class="min-vh-100 d-flex align-items-center justify-content-center p-4" 
         style="background: linear-gradient(135deg, #0d6efd 0%, #4c1d95 100%);">
      <div style="width: 100%; max-width: 450px;">
        <div class="text-center mb-4">
          <h1 class="display-4 fw-bold text-white mb-2">ZeroChaos</h1>
          <p class="text-white-50">Gestiona tus proyectos sin caos</p>
        </div>

        <div class="card shadow-lg">
          <div class="card-body p-4">
            <h2 class="h3 fw-bold mb-4">Crear Cuenta</h2>

            <div id="registerError" class="alert alert-danger d-none"></div>

            <div class="mb-3">
              <label class="form-label fw-semibold">Nombre Completo</label>
              <input type="text" class="form-control form-control-lg" 
                     id="registerName" placeholder="Tu nombre">
            </div>

            <div class="mb-3">
              <label class="form-label fw-semibold">Email</label>
              <input type="email" class="form-control form-control-lg" 
                     id="registerEmail" placeholder="correo@ejemplo.com">
            </div>

            <div class="mb-3">
              <label class="form-label fw-semibold">Contraseña</label>
              <input type="password" class="form-control form-control-lg" 
                     id="registerPassword" placeholder="••••••">
            </div>

            <div class="mb-4">
              <label class="form-label fw-semibold">Confirmar Contraseña</label>
              <input type="password" class="form-control form-control-lg" 
                     id="registerConfirmPassword" placeholder="••••••">
            </div>

            <button class="btn btn-success btn-lg w-100 mb-3" id="btnRegisterSubmit">
              Registrarse
            </button>

            <p class="text-center mb-0">
              ¿Ya tienes cuenta? 
              <a href="#" class="text-primary fw-semibold text-decoration-none" id="linkLogin">
                Inicia sesión aquí
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  `,document.getElementById("btnRegisterSubmit").addEventListener("click",fd),document.getElementById("linkLogin").addEventListener("click",e=>{e.preventDefault(),k="login",A()})}function Hc(){oe.innerHTML=`
    <div style="display: flex; min-height: 100vh;">
      ${be()}

      <!-- Main Content -->
      <div class="flex-grow-1" style="background-color: #f8f9fa;">
        <!-- Top Bar -->
        <div class="bg-white border-bottom p-3">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-md-6">
                <div class="input-group">
                  <span class="input-group-text bg-white border-end-0">
                    <i class="bi bi-search"></i>
                  </span>
                  <input type="text" class="form-control border-start-0" placeholder="Search">
                </div>
              </div>
              <div class="col-md-6 text-end">
                <button class="btn btn-light rounded-circle me-2">
                  <i class="bi bi-inbox-fill"></i>
                </button>
                <button class="btn btn-light rounded-circle me-2">
                  <i class="bi bi-clock-fill"></i>
                </button>
                <div class="dropdown d-inline-block">
                  <button class="btn btn-light rounded-circle dropdown-toggle" type="button" id="btnProfile" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-person-fill"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="btnProfile">
                    <li><a class="dropdown-item" href="#" id="menuProfile">
                      <i class="bi bi-person me-2"></i>Profile
                    </a></li>
                    <li><a class="dropdown-item" href="#" id="menuSettings">
                      <i class="bi bi-gear me-2"></i>Settings
                    </a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item text-danger" href="#" id="menuLogout">
                      <i class="bi bi-box-arrow-right me-2"></i>Logout
                    </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Dashboard Content -->
        <div class="container-fluid p-4">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h2 class="h3 fw-bold">Dashboard</h2>
          </div>

          <!-- Projects Section -->
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h3 class="h5 fw-bold">Projects</h3>
            <button class="btn btn-primary" id="btnNewProject">
              <i class="bi bi-plus-lg me-2"></i>Nuevo Proyecto
            </button>
          </div>

          <!-- Projects Grid -->
          <div class="row g-3 mb-5" id="projectsGrid">
            ${Be()}
          </div>

          <!-- Recent Projects -->
          <h3 class="h5 fw-bold mb-3">Recent Projects</h3>
          <div class="row g-3">
            <div class="col-md-4">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">To Do</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal: Nuevo Proyecto -->
    <div class="modal fade" id="newProjectModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Nuevo Proyecto</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Project Name</label>
              <input type="text" class="form-control" id="newProjectName" placeholder="Enter project name">
            </div>
            <div class="mb-3">
              <label class="form-label">Due Date (optional)</label>
              <input type="text" class="form-control" id="newProjectDue" placeholder="e.g., in 5 days, 2 weeks">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary" id="btnCreateProject">Crear Proyecto</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal: Project Details -->
    <div class="modal fade" id="projectDetailModal" tabindex="-1">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header bg-primary text-white">
            <h5 class="modal-title" id="projectDetailTitle">Project Name</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <!-- Sección Agregar Tarea -->
            <div class="card mb-4">
              <div class="card-body">
                <div class="input-group">
                  <input type="text" class="form-control" id="newTaskName" placeholder="Agregar nueva tarea...">
                  <button class="btn btn-success" id="btnAddTask">
                    <i class="bi bi-plus-lg"></i> Agregar Tarea
                  </button>
                  <button class="btn btn-primary" id="btnAISort">
                    🤖 Ordenar con IA
                  </button>
                  <button class="btn btn-info" id="btnAIAnalyze">
                    🧠 Analizar con IA
                  </button>
                </div>
              </div>
            </div>

            <!-- Tasks List -->
            <div id="tasksList"></div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" id="btnDeleteProject">
              <i class="bi bi-trash"></i> Eliminar Proyecto
            </button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal: Detalles de Tarea (Avanzado) -->
    <div class="modal fade" id="taskDetailModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Detalles de Tarea</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <!-- Task Name -->
            <div class="mb-3">
              <label class="form-label fw-bold">Nombre de Tarea</label>
              <input type="text" class="form-control" id="taskDetailName" placeholder="Nombre de la tarea">
            </div>

            <!-- Description -->
            <div class="mb-3">
              <label class="form-label fw-bold">Descripción</label>
              <textarea class="form-control" id="taskDetailDescription" rows="3" placeholder="Agregar descripción..."></textarea>
            </div>

            <div class="row">
              <!-- AI Difficulty -->
              <div class="col-md-4 mb-3">
                <label class="form-label fw-bold">AI Difficulty</label>
                <div id="taskDetailAIDifficulty" class="form-control bg-light" style="display: flex; align-items: center; min-height: 38px;">
                  <span class="text-muted">Not analyzed yet</span>
                </div>
              </div>

              <!-- Priority -->
              <div class="col-md-4 mb-3">
                <label class="form-label fw-bold">Priority</label>
                <select class="form-select" id="taskDetailPriority">
                  <option value="low">🟢 Low</option>
                  <option value="medium" selected>🟡 Medium</option>
                  <option value="high">🔴 High</option>
                </select>
              </div>

              <!-- Estimated Duration (AI) -->
              <div class="col-md-4 mb-3">
                <label class="form-label fw-bold">Estimated Duration (AI)</label>
                <div id="taskDetailEstimatedDuration" class="form-control bg-light" style="display: flex; align-items: center; min-height: 38px;">
                  <span class="text-muted">Not analyzed yet</span>
                </div>
              </div>
            </div>

            <!-- Tags -->
            <div class="mb-3">
              <label class="form-label fw-bold">Tags</label>
              <div class="input-group mb-2">
                <input type="text" class="form-control" id="taskDetailNewTag" placeholder="Add tag...">
                <button class="btn btn-outline-primary" id="btnAddTag">
                  <i class="bi bi-plus"></i> Add
                </button>
              </div>
              <div id="taskDetailTags" class="d-flex flex-wrap gap-2"></div>
            </div>

            <!-- Dependencies -->
            <div class="mb-3">
              <label class="form-label fw-bold">Dependencies</label>
              <select class="form-select" id="taskDetailDependencies" multiple size="3">
                <!-- Options will be populated dynamically -->
              </select>
              <small class="text-muted">Hold Ctrl/Cmd to select multiple tasks</small>
            </div>

            <!-- Subtasks -->
            <div class="mb-3">
              <label class="form-label fw-bold">Subtasks</label>
              <div class="input-group mb-2">
                <input type="text" class="form-control" id="taskDetailNewSubtask" placeholder="Add subtask...">
                <button class="btn btn-outline-success" id="btnAddSubtask">
                  <i class="bi bi-plus"></i> Add
                </button>
              </div>
              <div id="taskDetailSubtasks"></div>
            </div>

            <!-- AI Suggestions -->
            <div id="taskDetailAISuggestions" class="alert alert-info d-none">
              <h6 class="alert-heading"><i class="bi bi-lightbulb"></i> AI Suggestions</h6>
              <div id="aiSuggestionsContent"></div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" id="btnAITaskAnalyze">
              🤖 Analizar con IA
            </button>
            <button type="button" class="btn btn-success" id="btnSaveTaskDetail">
              <i class="bi bi-check-lg"></i> Guardar Cambios
            </button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  `,pd()}function Vc(){const e=(d==null?void 0:d.plan)||"basico";oe.innerHTML=`
    <div class="d-flex" style="min-height: 100vh;">
      ${be()}

      <!-- Main Content -->
      <div class="flex-grow-1" style="background-color: #f7fafc;">
        ${ke()}

        <!-- Pricing Content -->
        <div class="container py-5">
          <div class="text-center mb-5">
            <h1 class="display-4 fw-bold mb-3">Escoge el plan que creas necesitar</h1>
            
            <!-- Toggle Mensual/Anual -->
            <div class="d-flex justify-content-center align-items-center gap-3 mb-5">
              <span class="fw-semibold" id="monthlyLabel" style="color: #000;">Mensual</span>
              <div class="form-check form-switch" style="font-size: 1.5rem;">
                <input class="form-check-input" type="checkbox" id="billingToggle" style="cursor: pointer;">
              </div>
              <span class="fw-semibold text-muted" id="annualLabel">Anual</span>
            </div>
          </div>

          <!-- Plans Grid -->
          <div class="row g-4 justify-content-center">
            <!-- Plan Básico -->
            <div class="col-md-4">
              <div class="card h-100 shadow-sm" style="border-radius: 12px;">
                <div class="card-body p-4 text-center">
                  <h3 class="h4 fw-bold mb-4">Básico</h3>
                  <div class="mb-4">
                    <span class="display-4 fw-bold">$</span>
                    <span class="display-4 fw-bold" id="basicPrice">0</span>
                    <span class="text-muted" id="basicPeriod"></span>
                  </div>

                  <ul class="list-unstyled text-start mb-4">
                    <li class="mb-3">• Hasta 3 proyectos activos</li>
                    <li class="mb-3">• Hasta 3 miembros por equipo</li>
                    <li class="mb-3">• IA Básica: para ordenar tareas por dificultades</li>
                    <li class="mb-3">• Chat básico</li>
                    <li class="mb-3">• Almacenamiento limitado 2Gb</li>
                  </ul>

                  <button class="btn btn-dark w-100 py-2" id="btnBasicPlan" 
                          ${e==="basico"?"disabled":""}>
                    ${e==="basico"?"Plan Actual":"Empezar"}
                  </button>
                </div>
              </div>
            </div>

            <!-- Plan Premium -->
            <div class="col-md-4">
              <div class="card h-100 shadow-lg" style="border-radius: 12px; background-color: #2d3748; color: white;">
                <div class="card-body p-4 text-center">
                  <h3 class="h4 fw-bold mb-4">Premium</h3>
                  <div class="mb-4">
                    <span class="display-4 fw-bold">$</span>
                    <span class="display-4 fw-bold" id="premiumPrice">9.99</span>
                    <span class="text-white-50" id="premiumPeriod">/ mes</span>
                  </div>

                  <ul class="list-unstyled text-start mb-4">
                    <li class="mb-3">• Incluye todo lo anterior+</li>
                    <li class="mb-3">• Hasta 10 proyectos activos</li>
                    <li class="mb-3">• Hasta 10 miembros por equipo</li>
                    <li class="mb-3">• Dashboard analítico básico</li>
                    <li class="mb-3">• Almacenamiento limitado 15Gb</li>
                  </ul>

                  <button class="btn btn-light w-100 py-2" id="btnPremiumPlan"
                          ${e==="premium"?"disabled":""}>
                    ${e==="premium"?"Plan Actual":"Comprar ahora"}
                  </button>
                </div>
              </div>
            </div>

            <!-- Plan Professional -->
            <div class="col-md-4">
              <div class="card h-100 shadow-sm" style="border-radius: 12px;">
                <div class="card-body p-4 text-center">
                  <h3 class="h4 fw-bold mb-4">Professional</h3>
                  <div class="mb-4">
                    <span class="display-4 fw-bold">$</span>
                    <span class="display-4 fw-bold" id="professionalPrice">19.99</span>
                    <span class="text-muted" id="professionalPeriod">/ mes</span>
                  </div>

                  <ul class="list-unstyled text-start mb-4">
                    <li class="mb-3">• Incluye todo lo anterior +</li>
                    <li class="mb-3">• Hasta 30 miembros</li>
                    <li class="mb-3">• Dashboard analítico completo</li>
                    <li class="mb-3">• Subequipos / departamentos</li>
                    <li class="mb-3">• Almacenamiento ilimitado</li>
                  </ul>

                  <button class="btn btn-dark w-100 py-2" id="btnProfessionalPlan"
                          ${e==="professional"?"disabled":""}>
                    ${e==="professional"?"Plan Actual":"Comprar ahora"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal de Pago -->
    <div class="modal fade" id="paymentModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Procesar Pago</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="alert alert-info">
              <strong>Modo Demo:</strong> Este es un pago simulado. No se procesará ningún cargo real.
            </div>

            <h6 class="mb-3">Plan seleccionado: <strong id="selectedPlanName"></strong></h6>
            <h4 class="mb-4">Total: <strong id="selectedPlanPrice"></strong></h4>

            <div class="mb-3">
              <label class="form-label">Número de tarjeta</label>
              <input type="text" class="form-control" placeholder="1234 5678 9012 3456" maxlength="19">
            </div>

            <div class="row">
              <div class="col-6">
                <label class="form-label">Fecha de expiración</label>
                <input type="text" class="form-control" placeholder="MM/AA" maxlength="5">
              </div>
              <div class="col-6">
                <label class="form-label">CVV</label>
                <input type="text" class="form-control" placeholder="123" maxlength="3">
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary" id="btnConfirmPayment">Confirmar Pago</button>
          </div>
        </div>
      </div>
    </div>
  `,rd()}function he(){if(Mt)return;Mt=!0,document.addEventListener("click",t=>{const a=t.target.closest('a[id^="nav"], a[id^="link"]');a&&(t.preventDefault(),document.querySelectorAll(".nav-link").forEach(n=>{n.classList.remove("active"),n.style.backgroundColor=""}),a.classList.contains("nav-link")&&(a.classList.add("active"),a.style.backgroundColor="rgba(255,255,255,0.1)"),a.id==="navDashboard"?(k="dashboard",A()):a.id==="navProjects"?(k="projects",A()):a.id==="navTeams"?(k="teams",A()):a.id==="navCalendar"?(k="calendar",A()):a.id==="navSettings"?(k="settings",A()):a.id==="linkPlans"&&(k="pricing",A()))}),document.addEventListener("click",t=>{if(t.target.closest("#btnProfile")){t.preventDefault(),t.stopPropagation();const a=t.target.closest(".dropdown"),n=a==null?void 0:a.querySelector(".dropdown-menu");if(n){const i=n.classList.contains("show");document.querySelectorAll(".dropdown-menu.show").forEach(o=>o.classList.remove("show")),i||n.classList.add("show")}return}t.target.closest("#menuProfile")?(t.preventDefault(),k="profile",document.querySelectorAll(".dropdown-menu.show").forEach(a=>a.classList.remove("show")),A()):t.target.closest("#menuSettings")?(t.preventDefault(),k="settings",document.querySelectorAll(".dropdown-menu.show").forEach(a=>a.classList.remove("show")),A()):t.target.closest("#menuLogout")?(t.preventDefault(),document.querySelectorAll(".dropdown-menu.show").forEach(a=>a.classList.remove("show")),confirm("¿Cerrar sesión?")&&na()):t.target.closest(".dropdown")||document.querySelectorAll(".dropdown-menu.show").forEach(a=>a.classList.remove("show"))});let e=!0;document.addEventListener("click",t=>{const a=t.target.closest("#toggleSidebar");if(!a)return;const n=document.getElementById("sidebar"),i=document.querySelectorAll(".sidebar-text"),o=document.querySelector(".sidebar-title"),s=document.querySelector(".sidebar-footer"),r=document.querySelectorAll(".nav-link");e?(n.style.width="80px",a.innerHTML='<i class="bi bi-chevron-right"></i>',i.forEach(c=>{c.style.opacity="0",c.style.width="0",c.style.overflow="hidden"}),o&&(o.style.opacity="0",o.style.width="0"),s&&(s.style.opacity="0",s.style.height="0",s.style.padding="0"),r.forEach(c=>{c.style.justifyContent="center",c.style.paddingLeft="0",c.style.paddingRight="0"})):(n.style.width="280px",a.innerHTML='<i class="bi bi-chevron-left"></i>',i.forEach(c=>{c.style.opacity="1",c.style.width="auto",c.style.overflow="visible"}),o&&(o.style.opacity="1",o.style.width="auto"),s&&(s.style.opacity="1",s.style.height="auto",s.style.padding="1rem"),r.forEach(c=>{c.style.justifyContent="flex-start",c.style.paddingLeft="0.75rem",c.style.paddingRight="0.75rem"})),e=!e})}function zc(){d.projects||(d.projects=[]),oe.innerHTML=`
    <div style="display: flex; min-height: 100vh;">
      ${be()}
      
      <!-- Main Content -->
      <div class="flex-grow-1" style="background-color: #f8f9fa;">
        ${ke()}

        <!-- Projects Content -->
        <div class="container-fluid p-4">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h3 class="h5 fw-bold mb-1">Todos los Proyectos</h3>
              <p class="text-muted mb-0">Gestiona y organiza tus proyectos</p>
            </div>
            <button class="btn btn-primary" id="btnNewProjectPage">
              <i class="bi bi-plus-circle me-2"></i>Nuevo Proyecto
            </button>
          </div>

          <!-- Projects Grid -->
          <div class="row g-4" id="projectsGridPage">
            ${Kc()}
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Nuevo Proyecto -->
    <div class="modal fade" id="newProjectModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Nuevo Proyecto</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Nombre del Proyecto</label>
              <input type="text" class="form-control" id="newProjectName" placeholder="Ej: Rediseño de sitio web">
            </div>
            <div class="mb-3">
              <label class="form-label">Fecha de Entrega</label>
              <input type="date" class="form-control" id="newProjectDue">
            </div>
            <div class="mb-3">
              <label class="form-label">Descripción</label>
              <textarea class="form-control" id="newProjectDesc" rows="3" placeholder="Descripción del proyecto..."></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary" id="btnCreateProject">Crear Proyecto</button>
          </div>
        </div>
      </div>
    </div>
  `,Wc()}function Kc(){return!d.projects||d.projects.length===0?`
      <div class="col-12">
        <div class="text-center py-5">
          <i class="bi bi-folder" style="font-size: 4rem; color: #dee2e6;"></i>
          <p class="text-muted mt-3">No tienes proyectos creados</p>
          <p class="text-muted">Crea tu primer proyecto para comenzar</p>
        </div>
      </div>
    `:d.projects.map(e=>{var i,o;const t=((i=e.tasks)==null?void 0:i.length)||0,a=((o=e.tasks)==null?void 0:o.filter(s=>s.completed).length)||0,n=t>0?Math.round(a/t*100):0;return`
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 shadow-sm project-card" style="cursor: pointer;" data-project-id="${e.id}">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-3">
              <h5 class="card-title mb-0">${e.name}</h5>
              <div class="dropdown">
                <button class="btn btn-sm btn-link text-muted" data-bs-toggle="dropdown" onclick="event.stopPropagation()">
                  <i class="bi bi-three-dots-vertical"></i>
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#" onclick="event.stopPropagation(); editProject(${e.id})">
                    <i class="bi bi-pencil me-2"></i>Editar
                  </a></li>
                  <li><a class="dropdown-item text-danger" href="#" onclick="event.stopPropagation(); deleteProject(${e.id})">
                    <i class="bi bi-trash me-2"></i>Eliminar
                  </a></li>
                </ul>
              </div>
            </div>

            ${e.description?`<p class="text-muted small mb-3">${e.description}</p>`:""}

            <div class="mb-3">
              <div class="d-flex justify-content-between align-items-center mb-1">
                <span class="small text-muted">Progreso</span>
                <span class="small fw-bold">${n}%</span>
              </div>
              <div class="progress" style="height: 8px;">
                <div class="progress-bar ${n===100?"bg-success":"bg-primary"}" 
                     style="width: ${n}%"></div>
              </div>
            </div>

            <div class="d-flex justify-content-between align-items-center text-muted small">
              <div>
                <i class="bi bi-list-task me-1"></i>
                ${t} tareas
              </div>
              <div>
                <i class="bi bi-calendar me-1"></i>
                ${e.dueDate||"Sin fecha"}
              </div>
            </div>

            ${e.createdAt?`
              <div class="mt-2 text-muted small">
                <i class="bi bi-clock me-1"></i>
                Creado: ${e.createdAt}
              </div>
            `:""}
          </div>
        </div>
      </div>
    `}).join("")}function Wc(){var e,t;he(),(e=document.getElementById("btnNewProjectPage"))==null||e.addEventListener("click",()=>{new bootstrap.Modal(document.getElementById("newProjectModal")).show()}),(t=document.getElementById("btnCreateProject"))==null||t.addEventListener("click",()=>{const a=document.getElementById("newProjectName").value.trim(),n=document.getElementById("newProjectDue").value,i=document.getElementById("newProjectDesc").value.trim();if(!a){alert("Por favor ingresa un nombre para el proyecto");return}const o={id:Date.now(),name:a,dueDate:n||"Sin fecha",description:i,tasks:[],createdAt:new Date().toLocaleDateString("es-ES")};d.projects||(d.projects=[]),d.projects.push(o),M(),bootstrap.Modal.getInstance(document.getElementById("newProjectModal")).hide(),document.getElementById("newProjectName").value="",document.getElementById("newProjectDue").value="",document.getElementById("newProjectDesc").value="",A()}),document.querySelectorAll(".project-card").forEach(a=>{a.addEventListener("click",()=>{const n=parseInt(a.dataset.projectId);Oe(n)})})}window.deleteProject=function(e){confirm("¿Estás seguro de eliminar este proyecto y todas sus tareas?")&&(d.projects=d.projects.filter(t=>t.id!==e),M(),A())};function Xc(){d.teams||(d.teams=[]),oe.innerHTML=`
    <div style="display: flex; min-height: 100vh;">
      ${be()}
      
      <!-- Main Content -->
      <div class="flex-grow-1" style="background-color: #f8f9fa;">
        ${ke()}

        <!-- Teams Content -->
        <div class="container-fluid p-4">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h3 class="h5 fw-bold mb-1">Gestión de Equipos</h3>
              <p class="text-muted mb-0">Administra tus equipos y miembros</p>
            </div>
            <button class="btn btn-primary" id="btnAddTeam">
              <i class="bi bi-plus-circle me-2"></i>Nuevo Equipo
            </button>
          </div>

          <!-- Teams Grid -->
          <div class="row g-4" id="teamsGrid">
            ${Qc()}
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Nuevo Equipo -->
    <div class="modal fade" id="modalNewTeam" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Nuevo Equipo</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Nombre del Equipo</label>
              <input type="text" class="form-control" id="inputTeamName" placeholder="Ej: Desarrollo Frontend">
            </div>
            <div class="mb-3">
              <label class="form-label">Descripción</label>
              <textarea class="form-control" id="inputTeamDesc" rows="3" placeholder="Descripción del equipo..."></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary" id="btnSaveTeam">Crear Equipo</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Agregar Miembro -->
    <div class="modal fade" id="modalAddMember" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Agregar Miembro</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Nombre del Miembro</label>
              <input type="text" class="form-control" id="inputMemberName" placeholder="Nombre completo">
            </div>
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input type="email" class="form-control" id="inputMemberEmail" placeholder="email@ejemplo.com">
            </div>
            <div class="mb-3">
              <label class="form-label">Rol</label>
              <select class="form-select" id="inputMemberRole">
                <option value="member">Miembro</option>
                <option value="leader">Líder</option>
                <option value="admin">Administrador</option>
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary" id="btnSaveMember">Agregar</button>
          </div>
        </div>
      </div>
    </div>
  `,Jc()}function Qc(){return!d.teams||d.teams.length===0?`
      <div class="col-12">
        <div class="text-center py-5">
          <i class="bi bi-people" style="font-size: 4rem; color: #dee2e6;"></i>
          <p class="text-muted mt-3">No tienes equipos creados</p>
          <p class="text-muted">Crea tu primer equipo para comenzar</p>
        </div>
      </div>
    `:d.teams.map(e=>{var t;return`
    <div class="col-md-6 col-lg-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-start mb-3">
            <h5 class="card-title mb-0">${e.name}</h5>
            <div class="dropdown">
              <button class="btn btn-sm btn-link text-muted" data-bs-toggle="dropdown">
                <i class="bi bi-three-dots-vertical"></i>
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#" onclick="editTeam('${e.id}')">Editar</a></li>
                <li><a class="dropdown-item text-danger" href="#" onclick="deleteTeam('${e.id}')">Eliminar</a></li>
              </ul>
            </div>
          </div>
          <p class="text-muted small mb-3">${e.description||"Sin descripción"}</p>
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center gap-2">
              <i class="bi bi-people-fill text-primary"></i>
              <span class="small">${((t=e.members)==null?void 0:t.length)||0} miembros</span>
            </div>
            <button class="btn btn-sm btn-outline-primary" onclick="addMemberToTeam('${e.id}')">
              <i class="bi bi-plus"></i> Agregar
            </button>
          </div>
          ${e.members&&e.members.length>0?`
            <div class="mt-3">
              <div class="d-flex flex-wrap gap-2">
                ${e.members.slice(0,3).map(a=>`
                  <span class="badge bg-light text-dark">${a.name}</span>
                `).join("")}
                ${e.members.length>3?`<span class="badge bg-secondary">+${e.members.length-3}</span>`:""}
              </div>
            </div>
          `:""}
        </div>
      </div>
    </div>
  `}).join("")}function Jc(){var e,t,a,n,i,o;he(),(e=document.getElementById("btnAddTeam"))==null||e.addEventListener("click",()=>{new bootstrap.Modal(document.getElementById("modalNewTeam")).show()}),(t=document.getElementById("btnSaveTeam"))==null||t.addEventListener("click",()=>{const s=document.getElementById("inputTeamName").value.trim(),r=document.getElementById("inputTeamDesc").value.trim();if(!s){alert("Por favor ingresa un nombre para el equipo");return}const c={id:Date.now().toString(),name:s,description:r,members:[],createdAt:new Date().toISOString()};d.teams||(d.teams=[]),d.teams.push(c),M(),bootstrap.Modal.getInstance(document.getElementById("modalNewTeam")).hide(),A()}),(a=document.getElementById("navDashboard"))==null||a.addEventListener("click",s=>{s.preventDefault(),k="dashboard",A()}),(n=document.getElementById("navTeams"))==null||n.addEventListener("click",s=>{s.preventDefault(),k="teams",A()}),(i=document.getElementById("navCalendar"))==null||i.addEventListener("click",s=>{s.preventDefault(),k="calendar",A()}),(o=document.getElementById("navSettings"))==null||o.addEventListener("click",s=>{s.preventDefault(),k="settings",A()})}window.addMemberToTeam=function(e){window.currentTeamId=e,new bootstrap.Modal(document.getElementById("modalAddMember")).show(),document.getElementById("btnSaveMember").onclick=()=>{const a=document.getElementById("inputMemberName").value.trim(),n=document.getElementById("inputMemberEmail").value.trim(),i=document.getElementById("inputMemberRole").value;if(!a||!n){alert("Por favor completa todos los campos");return}const o=d.teams.find(s=>s.id===e);o&&(o.members||(o.members=[]),o.members.push({id:Date.now().toString(),name:a,email:n,role:i}),M(),bootstrap.Modal.getInstance(document.getElementById("modalAddMember")).hide(),A())}};window.deleteTeam=function(e){confirm("¿Estás seguro de eliminar este equipo?")&&(d.teams=d.teams.filter(t=>t.id!==e),M(),A())};function Yc(){d.events||(d.events=[]);const e=new Date,t=e.getMonth(),a=e.getFullYear();oe.innerHTML=`
    <div style="display: flex; min-height: 100vh;">
      ${be()}
      
      <!-- Main Content -->
      <div class="flex-grow-1" style="background-color: #f8f9fa;">
        ${ke()}

        <!-- Calendar Content -->
        <div class="container-fluid p-4">
          <div class="row g-4">
            <!-- Calendar View -->
            <div class="col-lg-8">
              <div class="card shadow-sm">
                <div class="card-header bg-white d-flex justify-content-between align-items-center">
                  <h5 class="mb-0">${Zc(t)} ${a}</h5>
                  <button class="btn btn-primary btn-sm" id="btnAddEvent">
                    <i class="bi bi-plus-circle me-1"></i>Nuevo Evento
                  </button>
                </div>
                <div class="card-body">
                  ${Gc(t,a)}
                </div>
              </div>
            </div>

            <!-- Upcoming Events -->
            <div class="col-lg-4">
              <div class="card shadow-sm">
                <div class="card-header bg-white">
                  <h5 class="mb-0">Próximos Eventos</h5>
                </div>
                <div class="card-body">
                  ${ed()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Nuevo Evento -->
    <div class="modal fade" id="modalNewEvent" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Nuevo Evento</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Título del Evento</label>
              <input type="text" class="form-control" id="inputEventTitle" placeholder="Reunión de equipo">
            </div>
            <div class="mb-3">
              <label class="form-label">Fecha</label>
              <input type="date" class="form-control" id="inputEventDate">
            </div>
            <div class="mb-3">
              <label class="form-label">Hora</label>
              <input type="time" class="form-control" id="inputEventTime">
            </div>
            <div class="mb-3">
              <label class="form-label">Descripción</label>
              <textarea class="form-control" id="inputEventDesc" rows="3"></textarea>
            </div>
            <div class="mb-3">
              <label class="form-label">Tipo</label>
              <select class="form-select" id="inputEventType">
                <option value="meeting">Reunión</option>
                <option value="deadline">Fecha límite</option>
                <option value="reminder">Recordatorio</option>
                <option value="other">Otro</option>
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary" id="btnSaveEvent">Guardar</button>
          </div>
        </div>
      </div>
    </div>
  `,td()}function Zc(e){return["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"][e]}function Gc(e,t){var l;const a=new Date(t,e,1).getDay(),n=new Date(t,e+1,0).getDate(),i=new Date().getDate(),o=new Date().getMonth(),s=new Date().getFullYear();let r=`
    <div class="calendar-grid">
      <div class="row text-center fw-bold mb-2">
        <div class="col">Dom</div>
        <div class="col">Lun</div>
        <div class="col">Mar</div>
        <div class="col">Mié</div>
        <div class="col">Jue</div>
        <div class="col">Vie</div>
        <div class="col">Sáb</div>
      </div>
  `,c=1;for(let g=0;g<6;g++){r+='<div class="row mb-2">';for(let u=0;u<7;u++)if(g===0&&u<a||c>n)r+='<div class="col p-2"></div>';else{const v=c===i&&e===o&&t===s,$=(l=d.events)==null?void 0:l.some(N=>{const L=new Date(N.date);return L.getDate()===c&&L.getMonth()===e&&L.getFullYear()===t});r+=`
          <div class="col p-2">
            <div class="calendar-day ${v?"bg-primary text-white":""} ${$?"border border-warning":""} 
                        rounded p-2 text-center" style="min-height: 50px; cursor: pointer;">
              ${c}
              ${$?'<div class="mt-1"><i class="bi bi-circle-fill text-warning" style="font-size: 6px;"></i></div>':""}
            </div>
          </div>
        `,c++}if(r+="</div>",c>n)break}return r+="</div>",r}function ed(){if(!d.events||d.events.length===0)return'<p class="text-muted text-center">No hay eventos próximos</p>';const e=new Date,t=d.events.filter(a=>new Date(a.date)>=e).sort((a,n)=>new Date(a.date)-new Date(n.date)).slice(0,5);return t.length===0?'<p class="text-muted text-center">No hay eventos próximos</p>':t.map(a=>{const n=new Date(a.date);return`
      <div class="mb-3 pb-3 border-bottom">
        <div class="d-flex align-items-start gap-2">
          <i class="bi ${{meeting:"bi-camera-video",deadline:"bi-alarm",reminder:"bi-bell",other:"bi-calendar-event"}[a.type]||"bi-calendar-event"} text-primary mt-1"></i>
          <div class="flex-grow-1">
            <h6 class="mb-1">${a.title}</h6>
            <p class="text-muted small mb-1">
              ${n.toLocaleDateString("es-ES",{day:"numeric",month:"long",year:"numeric"})}
              ${a.time?`- ${a.time}`:""}
            </p>
            ${a.description?`<p class="small text-muted mb-0">${a.description}</p>`:""}
          </div>
          <button class="btn btn-sm btn-link text-danger" onclick="deleteEvent('${a.id}')">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </div>
    `}).join("")}function td(){var e,t,a,n,i,o;he(),(e=document.getElementById("btnAddEvent"))==null||e.addEventListener("click",()=>{new bootstrap.Modal(document.getElementById("modalNewEvent")).show()}),(t=document.getElementById("btnSaveEvent"))==null||t.addEventListener("click",()=>{const s=document.getElementById("inputEventTitle").value.trim(),r=document.getElementById("inputEventDate").value,c=document.getElementById("inputEventTime").value,l=document.getElementById("inputEventDesc").value.trim(),g=document.getElementById("inputEventType").value;if(!s||!r){alert("Por favor completa el título y la fecha");return}const u={id:Date.now().toString(),title:s,date:r,time:c,description:l,type:g,createdAt:new Date().toISOString()};d.events||(d.events=[]),d.events.push(u),M(),bootstrap.Modal.getInstance(document.getElementById("modalNewEvent")).hide(),A()}),(a=document.getElementById("navDashboard"))==null||a.addEventListener("click",s=>{s.preventDefault(),k="dashboard",A()}),(n=document.getElementById("navTeams"))==null||n.addEventListener("click",s=>{s.preventDefault(),k="teams",A()}),(i=document.getElementById("navCalendar"))==null||i.addEventListener("click",s=>{s.preventDefault(),k="calendar",A()}),(o=document.getElementById("navSettings"))==null||o.addEventListener("click",s=>{s.preventDefault(),k="settings",A()})}window.deleteEvent=function(e){confirm("¿Eliminar este evento?")&&(d.events=d.events.filter(t=>t.id!==e),M(),A())};function ad(){var e,t,a,n,i;oe.innerHTML=`
    <div style="display: flex; min-height: 100vh;">
      ${be()}
      
      <!-- Main Content -->
      <div class="flex-grow-1" style="background-color: #f8f9fa;">
        ${ke()}

        <!-- Settings Content -->
        <div class="container-fluid p-4">
          <div class="row g-4">
            <!-- Profile Settings -->
            <div class="col-lg-8">
              <div class="card shadow-sm mb-4">
                <div class="card-header bg-white">
                  <h5 class="mb-0"><i class="bi bi-person-circle me-2"></i>Perfil</h5>
                </div>
                <div class="card-body">
                  <div class="mb-3">
                    <label class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="inputProfileName" value="${d.name}">
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputProfileEmail" value="${d.email}">
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Empresa</label>
                    <input type="text" class="form-control" id="inputProfileCompany" value="${d.company||""}" placeholder="Nombre de tu empresa">
                  </div>
                  <button class="btn btn-primary" id="btnSaveProfile">
                    <i class="bi bi-check-circle me-2"></i>Guardar Cambios
                  </button>
                </div>
              </div>

              <!-- Password Settings -->
              <div class="card shadow-sm mb-4">
                <div class="card-header bg-white">
                  <h5 class="mb-0"><i class="bi bi-shield-lock me-2"></i>Seguridad</h5>
                </div>
                <div class="card-body">
                  <div class="mb-3">
                    <label class="form-label">Contraseña Actual</label>
                    <input type="password" class="form-control" id="inputCurrentPassword">
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Nueva Contraseña</label>
                    <input type="password" class="form-control" id="inputNewPassword">
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Confirmar Nueva Contraseña</label>
                    <input type="password" class="form-control" id="inputConfirmPassword">
                  </div>
                  <button class="btn btn-warning" id="btnChangePassword">
                    <i class="bi bi-key me-2"></i>Cambiar Contraseña
                  </button>
                </div>
              </div>

              <!-- Notifications Settings -->
              <div class="card shadow-sm">
                <div class="card-header bg-white">
                  <h5 class="mb-0"><i class="bi bi-bell me-2"></i>Notificaciones</h5>
                </div>
                <div class="card-body">
                  <div class="form-check form-switch mb-3">
                    <input class="form-check-input" type="checkbox" id="notifEmail" ${((e=d.notifications)==null?void 0:e.email)!==!1?"checked":""}>
                    <label class="form-check-label" for="notifEmail">
                      Notificaciones por Email
                    </label>
                  </div>
                  <div class="form-check form-switch mb-3">
                    <input class="form-check-input" type="checkbox" id="notifTasks" ${((t=d.notifications)==null?void 0:t.tasks)!==!1?"checked":""}>
                    <label class="form-check-label" for="notifTasks">
                      Recordatorios de Tareas
                    </label>
                  </div>
                  <div class="form-check form-switch mb-3">
                    <input class="form-check-input" type="checkbox" id="notifEvents" ${((a=d.notifications)==null?void 0:a.events)!==!1?"checked":""}>
                    <label class="form-check-label" for="notifEvents">
                      Recordatorios de Eventos
                    </label>
                  </div>
                  <button class="btn btn-primary" id="btnSaveNotifications">
                    <i class="bi bi-check-circle me-2"></i>Guardar Preferencias
                  </button>
                </div>
              </div>
            </div>

            <!-- Account Info -->
            <div class="col-lg-4">
              <div class="card shadow-sm mb-4">
                <div class="card-header bg-white">
                  <h5 class="mb-0">Información de Cuenta</h5>
                </div>
                <div class="card-body">
                  <div class="mb-3">
                    <label class="text-muted small">Plan Actual</label>
                    <p class="fw-bold mb-0 text-capitalize">${d.plan||"Básico"}</p>
                  </div>
                  <div class="mb-3">
                    <label class="text-muted small">Ciclo de Facturación</label>
                    <p class="fw-bold mb-0 text-capitalize">${d.billingCycle==="annual"?"Anual":"Mensual"}</p>
                  </div>
                  <div class="mb-3">
                    <label class="text-muted small">Proyectos Activos</label>
                    <p class="fw-bold mb-0">${((n=d.projects)==null?void 0:n.length)||0}</p>
                  </div>
                  <div class="mb-3">
                    <label class="text-muted small">Equipos</label>
                    <p class="fw-bold mb-0">${((i=d.teams)==null?void 0:i.length)||0}</p>
                  </div>
                  <button class="btn btn-outline-primary w-100" id="btnUpgradePlan">
                    <i class="bi bi-arrow-up-circle me-2"></i>Mejorar Plan
                  </button>
                </div>
              </div>

              <!-- Danger Zone -->
              <div class="card shadow-sm border-danger">
                <div class="card-header bg-danger text-white">
                  <h5 class="mb-0">Zona de Peligro</h5>
                </div>
                <div class="card-body">
                  <p class="text-muted small">Eliminar tu cuenta es permanente y no se puede deshacer.</p>
                  <button class="btn btn-danger w-100" id="btnDeleteAccount">
                    <i class="bi bi-trash me-2"></i>Eliminar Cuenta
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,sd()}function nd(){var e,t,a;oe.innerHTML=`
    <div style="display: flex; min-height: 100vh;">
      ${be()}

      <!-- Main Content -->
      <div class="flex-grow-1" style="background-color: #f8f9fa;">
        ${ke()}

        <!-- Profile Content -->
        <div class="container py-5">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <h1 class="h2 fw-bold mb-4">Mi Perfil</h1>

              <!-- Información Personal -->
              <div class="card mb-4">
                <div class="card-header bg-primary text-white">
                  <h5 class="mb-0"><i class="bi bi-person-circle me-2"></i>Información Personal</h5>
                </div>
                <div class="card-body">
                  <div class="row mb-3">
                    <div class="col-md-4 text-center">
                      <div class="mb-3">
                        <div class="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center" 
                             style="width: 120px; height: 120px; font-size: 48px;">
                          <i class="bi bi-person-fill"></i>
                        </div>
                      </div>
                      <button class="btn btn-sm btn-outline-primary" id="btnChangeAvatar">
                        <i class="bi bi-camera me-1"></i>Cambiar Foto
                      </button>
                    </div>
                    <div class="col-md-8">
                      <div class="mb-3">
                        <label class="form-label fw-semibold">Nombre Completo</label>
                        <input type="text" class="form-control" id="profileName" value="${(d==null?void 0:d.name)||""}" placeholder="Tu nombre">
                      </div>
                      <div class="mb-3">
                        <label class="form-label fw-semibold">Email</label>
                        <input type="email" class="form-control" id="profileEmail" value="${(d==null?void 0:d.email)||""}" readonly>
                        <small class="text-muted">El email no se puede cambiar</small>
                      </div>
                      <div class="mb-3">
                        <label class="form-label fw-semibold">Empresa</label>
                        <input type="text" class="form-control" id="profileCompany" value="${(d==null?void 0:d.company)||""}" placeholder="Nombre de tu empresa">
                      </div>
                      <div class="mb-3">
                        <label class="form-label fw-semibold">Biografía</label>
                        <textarea class="form-control" id="profileBio" rows="3" placeholder="Cuéntanos sobre ti...">${(d==null?void 0:d.bio)||""}</textarea>
                      </div>
                    </div>
                  </div>
                  <button class="btn btn-primary" id="btnSaveProfileInfo">
                    <i class="bi bi-check-lg me-2"></i>Guardar Cambios
                  </button>
                </div>
              </div>

              <!-- Estadísticas -->
              <div class="card mb-4">
                <div class="card-header bg-info text-white">
                  <h5 class="mb-0"><i class="bi bi-graph-up me-2"></i>Estadísticas</h5>
                </div>
                <div class="card-body">
                  <div class="row text-center">
                    <div class="col-md-3">
                      <div class="p-3">
                        <i class="bi bi-folder-fill text-primary fs-1"></i>
                        <h3 class="mt-2 mb-0">${((e=d==null?void 0:d.projects)==null?void 0:e.length)||0}</h3>
                        <p class="text-muted small mb-0">Proyectos</p>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="p-3">
                        <i class="bi bi-check-circle-fill text-success fs-1"></i>
                        <h3 class="mt-2 mb-0">${id()}</h3>
                        <p class="text-muted small mb-0">Tareas Completadas</p>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="p-3">
                        <i class="bi bi-people-fill text-warning fs-1"></i>
                        <h3 class="mt-2 mb-0">${((t=d==null?void 0:d.teams)==null?void 0:t.length)||0}</h3>
                        <p class="text-muted small mb-0">Equipos</p>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="p-3">
                        <i class="bi bi-calendar-check-fill text-danger fs-1"></i>
                        <h3 class="mt-2 mb-0">${((a=d==null?void 0:d.events)==null?void 0:a.length)||0}</h3>
                        <p class="text-muted small mb-0">Eventos</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Plan Actual -->
              <div class="card mb-4">
                <div class="card-header bg-success text-white">
                  <h5 class="mb-0"><i class="bi bi-star-fill me-2"></i>Plan Actual</h5>
                </div>
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <h4 class="mb-1">Plan ${(d==null?void 0:d.plan)==="premium"?"Premium":(d==null?void 0:d.plan)==="professional"?"Professional":"Básico"}</h4>
                      <p class="text-muted mb-0">
                        ${(d==null?void 0:d.plan)==="basico"?"Funcionalidades básicas gratuitas":(d==null?void 0:d.plan)==="premium"?"Acceso a funcionalidades premium":"Acceso completo a todas las funcionalidades"}
                      </p>
                    </div>
                    ${(d==null?void 0:d.plan)==="basico"?`
                      <button class="btn btn-success" id="btnUpgradePlanProfile">
                        <i class="bi bi-arrow-up-circle me-2"></i>Mejorar Plan
                      </button>
                    `:""}
                  </div>
                </div>
              </div>

              <!-- Seguridad -->
              <div class="card mb-4">
                <div class="card-header bg-warning text-dark">
                  <h5 class="mb-0"><i class="bi bi-shield-lock me-2"></i>Seguridad</h5>
                </div>
                <div class="card-body">
                  <button class="btn btn-warning w-100 mb-2" id="btnChangePassword">
                    <i class="bi bi-key me-2"></i>Cambiar Contraseña
                  </button>
                  <button class="btn btn-outline-secondary w-100" id="btnEnable2FA">
                    <i class="bi bi-shield-check me-2"></i>Habilitar Autenticación de Dos Factores
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,od()}function id(){return d!=null&&d.projects?d.projects.reduce((e,t)=>{var n;const a=((n=t.tasks)==null?void 0:n.filter(i=>i.completed).length)||0;return e+a},0):0}function od(){var e,t,a,n,i;he(),(e=document.getElementById("btnSaveProfileInfo"))==null||e.addEventListener("click",()=>{d.name=document.getElementById("profileName").value.trim(),d.company=document.getElementById("profileCompany").value.trim(),d.bio=document.getElementById("profileBio").value.trim(),M(),alert("✅ Perfil actualizado correctamente")}),(t=document.getElementById("btnChangeAvatar"))==null||t.addEventListener("click",()=>{alert("Funcionalidad de cambio de avatar próximamente")}),(a=document.getElementById("btnUpgradePlanProfile"))==null||a.addEventListener("click",()=>{k="pricing",A()}),(n=document.getElementById("btnChangePassword"))==null||n.addEventListener("click",()=>{const o=prompt("Ingresa tu nueva contraseña:");o&&o.length>=6?(d.password=o,M(),alert("✅ Contraseña cambiada correctamente")):o&&alert("❌ La contraseña debe tener al menos 6 caracteres")}),(i=document.getElementById("btnEnable2FA"))==null||i.addEventListener("click",()=>{alert("Funcionalidad de 2FA próximamente")})}function sd(){var e,t,a,n,i,o,s,r,c;he(),(e=document.getElementById("btnSaveProfile"))==null||e.addEventListener("click",()=>{d.name=document.getElementById("inputProfileName").value.trim(),d.email=document.getElementById("inputProfileEmail").value.trim(),d.company=document.getElementById("inputProfileCompany").value.trim(),M(),alert("✅ Perfil actualizado correctamente")}),(t=document.getElementById("btnChangePassword"))==null||t.addEventListener("click",()=>{const l=document.getElementById("inputCurrentPassword").value,g=document.getElementById("inputNewPassword").value,u=document.getElementById("inputConfirmPassword").value;if(!l||!g||!u){alert("Por favor completa todos los campos");return}if(l!==d.password){alert("❌ Contraseña actual incorrecta");return}if(g!==u){alert("❌ Las contraseñas no coinciden");return}if(g.length<6){alert("❌ La contraseña debe tener al menos 6 caracteres");return}d.password=g,M(),alert("✅ Contraseña cambiada correctamente"),document.getElementById("inputCurrentPassword").value="",document.getElementById("inputNewPassword").value="",document.getElementById("inputConfirmPassword").value=""}),(a=document.getElementById("btnSaveNotifications"))==null||a.addEventListener("click",()=>{d.notifications||(d.notifications={}),d.notifications.email=document.getElementById("notifEmail").checked,d.notifications.tasks=document.getElementById("notifTasks").checked,d.notifications.events=document.getElementById("notifEvents").checked,M(),alert("✅ Preferencias de notificaciones guardadas")}),(n=document.getElementById("btnUpgradePlan"))==null||n.addEventListener("click",()=>{k="pricing",A()}),(i=document.getElementById("btnDeleteAccount"))==null||i.addEventListener("click",()=>{confirm("⚠️ ¿Estás seguro? Esta acción no se puede deshacer.")&&confirm("¿Realmente deseas eliminar tu cuenta y todos tus datos?")&&(pe=pe.filter(l=>l.email!==d.email),na(),alert("Tu cuenta ha sido eliminada"))}),(o=document.getElementById("navDashboard"))==null||o.addEventListener("click",l=>{l.preventDefault(),k="dashboard",A()}),(s=document.getElementById("navTeams"))==null||s.addEventListener("click",l=>{l.preventDefault(),k="teams",A()}),(r=document.getElementById("navCalendar"))==null||r.addEventListener("click",l=>{l.preventDefault(),k="calendar",A()}),(c=document.getElementById("navSettings"))==null||c.addEventListener("click",l=>{l.preventDefault(),k="settings",A()})}function rd(){const e=document.getElementById("billingToggle"),t=document.getElementById("monthlyLabel"),a=document.getElementById("annualLabel");let n=!1;const i={basic:{monthly:0,annual:0},premium:{monthly:9.99,annual:(9.99*12*.85).toFixed(2)},professional:{monthly:19.99,annual:(19.99*12*.85).toFixed(2)}};function o(){const l=n?"annual":"monthly",g=n?"/ año":"/ mes";document.getElementById("basicPrice").textContent=i.basic[l],document.getElementById("basicPeriod").textContent=i.basic[l]>0?g:"",document.getElementById("premiumPrice").textContent=i.premium[l],document.getElementById("premiumPeriod").textContent=g,document.getElementById("professionalPrice").textContent=i.professional[l],document.getElementById("professionalPeriod").textContent=g,n?(t.style.color="#9ca3af",a.style.color="#000"):(t.style.color="#000",a.style.color="#9ca3af")}e.addEventListener("change",()=>{n=e.checked,o()}),o();const s=document.getElementById("btnBasicPlan");s&&!s.disabled&&s.addEventListener("click",()=>{ld("basico","Básico")});const r=document.getElementById("btnPremiumPlan");r&&!r.disabled&&r.addEventListener("click",()=>{const l=n?`$${i.premium.annual} / año`:`$${i.premium.monthly} / mes`;Ut("premium","Premium",l,n)});const c=document.getElementById("btnProfessionalPlan");c&&!c.disabled&&c.addEventListener("click",()=>{const l=n?`$${i.professional.annual} / año`:`$${i.professional.monthly} / mes`;Ut("professional","Professional",l,n)}),setupPricingNavigation()}function ld(e,t,a){d.plan=e,d.billingCycle="monthly",M(),nt(`✅ Plan ${t} activado correctamente`,"success"),setTimeout(()=>{k="dashboard",A()},1500)}let Ne=null;function Ut(e,t,a,n){Ne={planId:e,planName:t,price:a,isAnnual:n},document.getElementById("selectedPlanName").textContent=t,document.getElementById("selectedPlanPrice").textContent=a,new bootstrap.Modal(document.getElementById("paymentModal")).show(),document.getElementById("btnConfirmPayment").onclick=()=>{cd()}}function cd(){bootstrap.Modal.getInstance(document.getElementById("paymentModal")).hide(),nt("⏳ Procesando pago...","info"),setTimeout(()=>{d.plan=Ne.planId,d.billingCycle=Ne.isAnnual?"annual":"monthly",M(),nt(`✅ ¡Pago exitoso! Plan ${Ne.planName} activado`,"success"),setTimeout(()=>{k="dashboard",A()},2e3)},2e3)}function nt(e,t="info"){let a=document.getElementById("toastContainer");a||(a=document.createElement("div"),a.id="toastContainer",a.style.cssText="position: fixed; top: 20px; right: 20px; z-index: 9999;",document.body.appendChild(a));const n={success:"#10b981",error:"#ef4444",info:"#3b82f6",warning:"#f59e0b"},i=document.createElement("div");i.style.cssText=`
    background-color: ${n[t]||n.info};
    color: white;
    padding: 16px 24px;
    border-radius: 8px;
    margin-bottom: 10px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    animation: slideIn 0.3s ease-out;
    min-width: 300px;
  `,i.textContent=e,a.appendChild(i),setTimeout(()=>{i.style.animation="slideOut 0.3s ease-in",setTimeout(()=>i.remove(),300)},3e3)}const aa=document.createElement("style");aa.textContent=`
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
  
  /* Ocultar flecha del dropdown en botón de perfil */
  #btnProfile.dropdown-toggle::after {
    display: none;
  }
`;document.head.appendChild(aa);function be(){return`
    <div id="sidebar" class="bg-dark text-white d-flex flex-column" style="width: 280px; min-height: 100vh; transition: width 0.3s ease; position: relative;">
      <div class="p-4">
        <div class="d-flex justify-content-between align-items-center mb-5">
          <h1 class="h3 fw-bold mb-0 sidebar-title" style="white-space: nowrap; overflow: hidden; transition: opacity 0.2s ease, width 0.2s ease;">ZeroChaos</h1>
          <button id="toggleSidebar" class="btn btn-sm btn-dark border-0" style="background-color: rgba(255,255,255,0.1); flex-shrink: 0;">
            <i class="bi bi-chevron-left"></i>
          </button>
        </div>
        
        <nav class="nav flex-column gap-2">
          <a href="#" class="nav-link text-white d-flex align-items-center py-3 px-3 rounded hover-link" 
             style="white-space: nowrap; overflow: hidden; transition: all 0.3s ease;" id="navDashboard" title="Dashboard">
            <i class="bi bi-grid-fill fs-5" style="min-width: 24px; margin-right: 12px;"></i>
            <span class="sidebar-text" style="transition: opacity 0.2s ease, width 0.2s ease;">Dashboard</span>
          </a>
          <a href="#" class="nav-link text-white d-flex align-items-center py-3 px-3 rounded hover-link" 
             style="white-space: nowrap; overflow: hidden; transition: all 0.3s ease;" id="navProjects" title="Projects">
            <i class="bi bi-folder-fill fs-5" style="min-width: 24px; margin-right: 12px;"></i>
            <span class="sidebar-text" style="transition: opacity 0.2s ease, width 0.2s ease;">Projects</span>
          </a>
          <a href="#" class="nav-link text-white d-flex align-items-center py-3 px-3 rounded hover-link" 
             style="white-space: nowrap; overflow: hidden; transition: all 0.3s ease;" id="navTeams" title="Teams">
            <i class="bi bi-people-fill fs-5" style="min-width: 24px; margin-right: 12px;"></i>
            <span class="sidebar-text" style="transition: opacity 0.2s ease, width 0.2s ease;">Teams</span>
          </a>
          <a href="#" class="nav-link text-white d-flex align-items-center py-3 px-3 rounded hover-link" 
             style="white-space: nowrap; overflow: hidden; transition: all 0.3s ease;" id="navCalendar" title="Calendar">
            <i class="bi bi-calendar-fill fs-5" style="min-width: 24px; margin-right: 12px;"></i>
            <span class="sidebar-text" style="transition: opacity 0.2s ease, width 0.2s ease;">Calendar</span>
          </a>
          <a href="#" class="nav-link text-white d-flex align-items-center py-3 px-3 rounded hover-link" 
             style="white-space: nowrap; overflow: hidden; transition: all 0.3s ease;" id="navSettings" title="Settings">
            <i class="bi bi-gear-fill fs-5" style="min-width: 24px; margin-right: 12px;"></i>
            <span class="sidebar-text" style="transition: opacity 0.2s ease, width 0.2s ease;">Settings</span>
          </a>
        </nav>
      </div>

      <div class="mt-auto p-4 sidebar-footer" style="overflow: hidden; transition: all 0.3s ease;">
        <div class="bg-secondary rounded p-3">
          <p class="mb-1 small fw-semibold sidebar-text" style="white-space: nowrap; overflow: hidden; transition: opacity 0.2s ease, width 0.2s ease;">Plan ${(d==null?void 0:d.plan)==="premium"?"Premium":(d==null?void 0:d.plan)==="professional"?"Professional":"Básico"}</p>
          <a href="#" class="text-white small text-decoration-none sidebar-text" style="white-space: nowrap; overflow: hidden; display: block; transition: opacity 0.2s ease, width 0.2s ease;" id="linkPlans">Ver planes →</a>
        </div>
      </div>
    </div>
  `}function ke(){return`
    <div class="bg-white border-bottom p-3">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="input-group">
              <span class="input-group-text bg-white border-end-0">
                <i class="bi bi-search"></i>
              </span>
              <input type="text" class="form-control border-start-0" placeholder="Search">
            </div>
          </div>
          <div class="col-md-6 text-end">
            <button class="btn btn-light rounded-circle me-2">
              <i class="bi bi-inbox-fill"></i>
            </button>
            <button class="btn btn-light rounded-circle me-2">
              <i class="bi bi-clock-fill"></i>
            </button>
            <div class="dropdown d-inline-block">
              <button class="btn btn-light rounded-circle dropdown-toggle" type="button" id="btnProfile" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-person-fill"></i>
              </button>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="btnProfile">
                <li><a class="dropdown-item" href="#" id="menuProfile">
                  <i class="bi bi-person me-2"></i>Profile
                </a></li>
                <li><a class="dropdown-item" href="#" id="menuSettings">
                  <i class="bi bi-gear me-2"></i>Settings
                </a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item text-danger" href="#" id="menuLogout">
                  <i class="bi bi-box-arrow-right me-2"></i>Logout
                </a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function Be(){return!d.projects||d.projects.length===0?`
      <div class="col-12">
        <div class="alert alert-info">
          No hay proyectos aún. ¡Haz clic en "Nuevo Proyecto" para crear uno!
        </div>
      </div>
    `:d.projects.map(e=>{const t=dd(e.tasks),a=t>70?"success":t>30?"primary":"warning";return`
      <div class="col-md-4">
        <div class="card h-100 project-card" data-project-id="${e.id}" style="cursor: pointer;">
          <div class="card-body">
            <h5 class="card-title fw-bold mb-3">${e.name}</h5>
            <div class="progress mb-2" style="height: 8px;">
              <div class="progress-bar bg-${a}" style="width: ${t}%"></div>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <small class="text-muted">${e.dueDate||"No due date"}</small>
              <strong>${t}%</strong>
            </div>
          </div>
        </div>
      </div>
    `}).join("")}function dd(e){if(!e||e.length===0)return 0;const t=e.filter(a=>a.completed).length;return Math.round(t/e.length*100)}function pd(){he(),setTimeout(()=>{[...document.querySelectorAll('[data-bs-toggle="dropdown"]')].map(n=>new bootstrap.Dropdown(n))},100);const e=document.getElementById("btnNewProject");e&&e.addEventListener("click",()=>{const a=document.getElementById("newProjectModal");new bootstrap.Modal(a).show()});const t=document.getElementById("btnCreateProject");t&&t.addEventListener("click",()=>{const a=document.getElementById("newProjectName").value,n=document.getElementById("newProjectDue").value;if(!a.trim()){alert("Please enter a project name");return}d.projects||(d.projects=[]);const i={id:Date.now(),name:a,dueDate:n||"No due date",tasks:[],createdAt:new Date().toLocaleDateString("es-ES")};d.projects.push(i),M();const o=document.getElementById("newProjectModal");bootstrap.Modal.getInstance(o).hide(),document.getElementById("newProjectName").value="",document.getElementById("newProjectDue").value="",A()}),document.querySelectorAll(".project-card").forEach(a=>{a.addEventListener("click",()=>{const n=parseInt(a.dataset.projectId);Oe(n)})})}let ue=null;function Oe(e){const t=document.getElementById("btnAISort");t&&(t.onclick=async()=>{if(!a.tasks||a.tasks.length===0){alert("No hay tareas para ordenar");return}t.disabled=!0,t.innerHTML="⏳ Analizando...";try{const c=await Oc([...a.tasks]);a.tasks=c,M(),de(a.tasks),t.disabled=!1,t.innerHTML="🤖 Ordenar con IA",alert("✅ Tareas ordenadas por dificultad")}catch(c){console.error("Error:",c),t.disabled=!1,t.innerHTML="🤖 Ordenar con IA",alert("❌ Error: "+c.message)}}),ue=e;const a=d.projects.find(c=>c.id===e);if(!a){console.error("Project not found:",e);return}const n=document.getElementById("projectDetailTitle");n&&(n.textContent=a.name),a.tasks||(a.tasks=[]),de(a.tasks);const i=document.getElementById("projectDetailModal");new bootstrap.Modal(i).show();const s=document.getElementById("btnAddTask");s&&(s.onclick=()=>{const c=document.getElementById("newTaskName").value;if(!c.trim()){alert("Please enter a task name");return}a.tasks.push({id:Date.now(),name:c,completed:!1,description:"",priority:"medium",tags:[],subtasks:[],dependencies:[],estimatedDuration:null,aiSuggestions:null}),document.getElementById("newTaskName").value="",de(a.tasks),M();const l=document.getElementById("projectsGrid");l&&(l.innerHTML=Be())});const r=document.getElementById("btnDeleteProject");r&&(r.onclick=()=>{confirm("Are you sure you want to delete this project?")&&(d.projects=d.projects.filter(l=>l.id!==e),M(),bootstrap.Modal.getInstance(i).hide(),A())})}function de(e){const t=document.getElementById("tasksList");if(!e||e.length===0){t.innerHTML='<p class="text-muted">No tasks yet. Add your first task!</p>';return}t.innerHTML=e.map(a=>`
    <div class="card mb-3 task-card" data-task-id="${a.id}" style="cursor: pointer; transition: all 0.2s;">
      <div class="card-body">
        <div class="d-flex align-items-start gap-3">
          <input type="checkbox" class="form-check-input task-checkbox mt-1" 
                 data-task-id="${a.id}" ${a.completed?"checked":""} 
                 onclick="event.stopPropagation()">
          
          <div class="flex-grow-1">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <h6 class="mb-1 ${a.completed?"text-decoration-line-through text-muted":""}">
                ${a.name}
              </h6>
              <div class="d-flex gap-2">
                ${a.difficultyLabel?`<span class="badge bg-info">${a.difficultyLabel}</span>`:""}
                <button class="btn btn-sm btn-outline-danger task-delete" data-task-id="${a.id}" onclick="event.stopPropagation()">
                  <i class="bi bi-trash"></i>
                </button>
              </div>
            </div>
            
            ${a.description?`<p class="text-muted small mb-2">${a.description.substring(0,100)}${a.description.length>100?"...":""}</p>`:""}
            
            <div class="d-flex flex-wrap gap-2 align-items-center">
              ${a.tags&&a.tags.length>0?a.tags.map(n=>`
                <span class="badge bg-primary">${n}</span>
              `).join(""):""}
              
              ${a.estimatedDuration?`<small class="text-muted"><i class="bi bi-clock"></i> ${a.estimatedDuration}</small>`:""}
              
              ${a.subtasks&&a.subtasks.length>0?`
                <small class="text-muted">
                  <i class="bi bi-list-check"></i> ${a.subtasks.filter(n=>n.completed).length}/${a.subtasks.length}
                </small>
              `:""}
              
              ${a.dependencies&&a.dependencies.length>0?`
                <small class="text-muted"><i class="bi bi-link-45deg"></i> ${a.dependencies.length} dependencies</small>
              `:""}
            </div>
          </div>
        </div>
      </div>
    </div>
  `).join(""),document.querySelectorAll(".task-checkbox").forEach(a=>{a.addEventListener("change",n=>{const i=parseInt(n.target.dataset.taskId),o=d.projects.find(c=>c.id===ue),s=o.tasks.find(c=>c.id===i);s.completed=n.target.checked,de(o.tasks),M();const r=document.getElementById("projectsGrid");r&&(r.innerHTML=Be(),document.querySelectorAll(".project-card").forEach(c=>{c.addEventListener("click",()=>{const l=parseInt(c.dataset.projectId);Oe(l)})}))})}),document.querySelectorAll(".task-delete").forEach(a=>{a.addEventListener("click",n=>{const i=parseInt(n.currentTarget.dataset.taskId),o=d.projects.find(r=>r.id===ue);o.tasks=o.tasks.filter(r=>r.id!==i),de(o.tasks),M();const s=document.getElementById("projectsGrid");s&&(s.innerHTML=Be(),document.querySelectorAll(".project-card").forEach(r=>{r.addEventListener("click",()=>{const c=parseInt(r.dataset.projectId);Oe(c)})}))})}),document.querySelectorAll(".task-card").forEach(a=>{a.addEventListener("click",n=>{const i=parseInt(a.dataset.taskId);ud(i)})})}let Xe=null;function ud(e){Xe=e;const t=d.projects.find(r=>r.id===ue),a=t.tasks.find(r=>r.id===e);if(!a)return;a.tags||(a.tags=[]),a.subtasks||(a.subtasks=[]),a.dependencies||(a.dependencies=[]),a.priority||(a.priority="medium"),document.getElementById("taskDetailName").value=a.name||"",document.getElementById("taskDetailDescription").value=a.description||"",document.getElementById("taskDetailPriority").value=a.priority||"medium";const n=document.getElementById("taskDetailAIDifficulty");a.difficultyLabel?n.innerHTML=`<span class="badge bg-info">${a.difficultyLabel}</span>`:n.innerHTML='<span class="text-muted">Not analyzed yet</span>';const i=document.getElementById("taskDetailEstimatedDuration");a.estimatedDuration?i.innerHTML=`<span class="badge bg-success"><i class="bi bi-clock"></i> ${a.estimatedDuration}</span>`:i.innerHTML='<span class="text-muted">Not analyzed yet</span>',ft(a.tags),Qe(a.subtasks);const o=document.getElementById("taskDetailDependencies");o.innerHTML=t.tasks.filter(r=>r.id!==e).map(r=>`<option value="${r.id}" ${a.dependencies.includes(r.id)?"selected":""}>${r.name}</option>`).join(""),a.aiSuggestions?(document.getElementById("taskDetailAISuggestions").classList.remove("d-none"),document.getElementById("aiSuggestionsContent").innerHTML=a.aiSuggestions):document.getElementById("taskDetailAISuggestions").classList.add("d-none"),new bootstrap.Modal(document.getElementById("taskDetailModal")).show(),md(a,t)}function ft(e){const t=document.getElementById("taskDetailTags");t.innerHTML=e.map(a=>`
    <span class="badge bg-primary d-flex align-items-center gap-1">
      ${a}
      <i class="bi bi-x-circle" style="cursor: pointer;" onclick="removeTag('${a}')"></i>
    </span>
  `).join("")}function Qe(e){const t=document.getElementById("taskDetailSubtasks");t.innerHTML=e.map((a,n)=>`
    <div class="d-flex align-items-center gap-2 mb-2">
      <input type="checkbox" class="form-check-input" ${a.completed?"checked":""} 
             onchange="toggleSubtask(${n})">
      <span class="${a.completed?"text-decoration-line-through text-muted":""}">${a.name}</span>
      <button class="btn btn-sm btn-outline-danger ms-auto" onclick="removeSubtask(${n})">
        <i class="bi bi-trash"></i>
      </button>
    </div>
  `).join("")}window.removeTag=function(e){const a=d.projects.find(n=>n.id===ue).tasks.find(n=>n.id===Xe);a.tags=a.tags.filter(n=>n!==e),ft(a.tags)};window.toggleSubtask=function(e){const a=d.projects.find(n=>n.id===ue).tasks.find(n=>n.id===Xe);a.subtasks[e].completed=!a.subtasks[e].completed,Qe(a.subtasks)};window.removeSubtask=function(e){const a=d.projects.find(n=>n.id===ue).tasks.find(n=>n.id===Xe);a.subtasks.splice(e,1),Qe(a.subtasks)};function md(e,t){document.getElementById("btnAddTag").onclick=()=>{const a=document.getElementById("taskDetailNewTag"),n=a.value.trim();n&&!e.tags.includes(n)&&(e.tags.push(n),ft(e.tags),a.value="")},document.getElementById("btnAddSubtask").onclick=()=>{const a=document.getElementById("taskDetailNewSubtask"),n=a.value.trim();n&&(e.subtasks.push({name:n,completed:!1}),Qe(e.subtasks),a.value="")},document.getElementById("btnAITaskAnalyze").onclick=async()=>{const a=document.getElementById("btnAITaskAnalyze");a.disabled=!0,a.innerHTML="⏳ Analyzing...";try{const n=await Bc(e);e.aiSuggestions=n,e.difficultyLabel&&(document.getElementById("taskDetailAIDifficulty").innerHTML=`<span class="badge bg-info">${e.difficultyLabel}</span>`),e.estimatedDuration&&(document.getElementById("taskDetailEstimatedDuration").innerHTML=`<span class="badge bg-success"><i class="bi bi-clock"></i> ${e.estimatedDuration}</span>`),document.getElementById("taskDetailAISuggestions").classList.remove("d-none"),document.getElementById("aiSuggestionsContent").innerHTML=n,M(),de(t.tasks),a.disabled=!1,a.innerHTML="🤖 Analizar con IA",alert("✅ ¡Tarea analizada exitosamente!")}catch(n){console.error("Error:",n),a.disabled=!1,a.innerHTML="🤖 Analizar con IA",alert("❌ Error: "+n.message)}},document.getElementById("btnSaveTaskDetail").onclick=()=>{e.name=document.getElementById("taskDetailName").value.trim(),e.description=document.getElementById("taskDetailDescription").value.trim(),e.priority=document.getElementById("taskDetailPriority").value;const a=Array.from(document.getElementById("taskDetailDependencies").selectedOptions);e.dependencies=a.map(i=>parseInt(i.value)),M(),de(t.tasks),bootstrap.Modal.getInstance(document.getElementById("taskDetailModal")).hide()}}function Bt(){const e=document.getElementById("loginEmail").value,t=document.getElementById("loginPassword").value,a=document.getElementById("loginError");if(!e.trim()||!t){a.textContent="Email y contraseña son requeridos",a.classList.remove("d-none");return}const n=pe.find(i=>i.email===e&&i.password===t);if(!n){a.textContent="Email o contraseña incorrectos",a.classList.remove("d-none");return}d=n,M(),k="dashboard",A()}function fd(){const e=document.getElementById("registerName").value,t=document.getElementById("registerEmail").value,a=document.getElementById("registerPassword").value,n=document.getElementById("registerConfirmPassword").value,i=document.getElementById("registerError");if(!e.trim()||!t.trim()||!a){i.textContent="Todos los campos son obligatorios",i.classList.remove("d-none");return}if(a!==n){i.textContent="Las contraseñas no coinciden",i.classList.remove("d-none");return}if(a.length<6){i.textContent="La contraseña debe tener al menos 6 caracteres",i.classList.remove("d-none");return}if(pe.some(s=>s.email===t)){i.textContent="El email ya está registrado",i.classList.remove("d-none");return}const o={id:Date.now(),name:e,email:t,password:a,projects:[],plan:"basico",billingCycle:"monthly"};pe.push(o),M(),k="login",A()}function na(){d=null,localStorage.removeItem("zerochaos_logged_user"),k="landing",A()}function M(){localStorage.setItem("zerochaos_users",JSON.stringify(pe)),d&&localStorage.setItem("zerochaos_logged_user",JSON.stringify(d))}function gd(){const e=localStorage.getItem("zerochaos_users"),t=localStorage.getItem("zerochaos_logged_user");e&&(pe=JSON.parse(e)),t&&(d=JSON.parse(t),k="dashboard")}gd();function hd(){try{if(A(),d)try{he()}catch(e){console.error("Error initializing navigation:",e)}}catch(e){console.error("Error initializing application:",e);const t=document.getElementById("app");t&&(t.innerHTML=`
        <div class="alert alert-danger m-4">
          <h4>Error al cargar la aplicación</h4>
          <p>Por favor, recarga la página. Si el problema persiste, contacta al soporte.</p>
          <p><small>${e.message}</small></p>
        </div>
      `)}}document.addEventListener("DOMContentLoaded",hd);
