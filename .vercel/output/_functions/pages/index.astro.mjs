import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, e as renderTemplate, s as spreadAttributes, g as renderComponent, F as Fragment, u as unescapeHTML, h as renderScript, d as renderSlot } from '../chunks/astro/server_CjNNo8J6.mjs';
import 'kleur/colors';
import { _ as _export_sfc, $ as $$Layout } from '../chunks/_plugin-vue_export-helper_DFzz1zqG.mjs';
import 'clsx';
/* empty css                                 */
import { getIconData, iconToSVG } from '@iconify/utils';
import { defineComponent, useSSRContext, mergeProps, ref, computed, nextTick } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Cover = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Cover;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="cover" data-astro-cid-e5kvktnr> <img${addAttribute(props.path, "src")} alt="Cover Image" data-astro-cid-e5kvktnr> <section id="info" data-astro-cid-e5kvktnr> <h1 data-astro-cid-e5kvktnr>Jam Villarrica</h1> <h3 data-astro-cid-e5kvktnr>1 y 2 de Marzo</h3> </section> </div> `;
}, "/home/dani/Documentos/libGDX/rt_villarrica_landing/src/components/Cover.astro", void 0);

const icons = {"local":{"prefix":"local","lastModified":1739728564,"icons":{"insta":{"body":"<path fill=\"currentColor\" d=\"M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h14c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2M9.984 15.523a5.54 5.54 0 0 0 5.538-5.539c0-.338-.043-.664-.103-.984H17v7.216a.69.69 0 0 1-.693.69H3.693a.69.69 0 0 1-.693-.69V9h1.549c-.061.32-.104.646-.104.984a5.54 5.54 0 0 0 5.539 5.539M6.523 9.984a3.461 3.461 0 1 1 6.922 0 3.461 3.461 0 0 1-6.922 0M16.307 6h-1.615A.694.694 0 0 1 14 5.308V3.691c0-.382.31-.691.691-.691h1.615c.384 0 .694.309.694.691v1.616c0 .381-.31.693-.693.693\"/>","width":20,"height":20}}}};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, desc, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  const { viewBox } = normalizedProps;
  if (includeSymbol) {
    delete normalizedProps.viewBox;
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${desc && renderTemplate`<desc>${desc}</desc>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}${addAttribute(viewBox, "viewBox")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "href")}></use> ` })}`} </svg>`;
}, "/home/dani/Documentos/libGDX/rt_villarrica_landing/node_modules/astro-icon/components/Icon.astro", void 0);

const $$ContactUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="container" data-astro-cid-ypgb7zfc> <h1 data-astro-cid-ypgb7zfc>Contáctanos!</h1> <div class="icon-wrapper" data-astro-cid-ypgb7zfc> <p data-astro-cid-ypgb7zfc>Envianos un mensaje</p> ${renderComponent($$result, "Icon", $$Icon, { "name": "insta", "id": "insta", "data-astro-cid-ypgb7zfc": true })} </div> </div> ${renderScript($$result, "/home/dani/Documentos/libGDX/rt_villarrica_landing/src/components/ContactUs.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/dani/Documentos/libGDX/rt_villarrica_landing/src/components/ContactUs.astro", void 0);

const $$Main = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="container" data-astro-cid-ivdev4kk> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "ContactUs", $$ContactUs, { "data-astro-cid-ivdev4kk": true })} </div> `;
}, "/home/dani/Documentos/libGDX/rt_villarrica_landing/src/components/Main.astro", void 0);

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Card",
  props: {
    card: {},
    isExpanded: { type: Boolean }
  },
  emits: ["click"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const handleClick = () => {
      if (props.isExpanded) {
        if (props.card?.link) {
          const url = new URL(props.card.link, window.location.origin);
          url.searchParams.append("from", window.location.pathname);
          window.open(url.toString(), "_blank");
        } else if (props.card?.scrollTo) {
          const element = document.getElementById(props.card.scrollTo);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
      emit("click");
    };
    const __returned__ = { props, emit, handleClick };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["card", { expanded: $props.isExpanded }]
  }, _attrs))} data-v-f594ac8a><h2 data-v-f594ac8a>${ssrInterpolate($props.card?.title)}</h2>`);
  if ($props.isExpanded) {
    _push(`<p data-v-f594ac8a>${ssrInterpolate($props.card?.description)}</p>`);
  } else {
    _push(`<p data-v-f594ac8a>${ssrInterpolate($props.card?.previewText)}</p>`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/vue/Card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Card = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-f594ac8a"]]);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CardWrapper",
  props: {
    cards: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const expandedCardIndex = ref(null);
    const animationDelay = ref(0);
    const handleCardClick = async (index) => {
      event.stopPropagation();
      if (expandedCardIndex.value === index) {
        expandedCardIndex.value = null;
      } else {
        expandedCardIndex.value = index;
        await nextTick();
        animationDelay.value = 0;
      }
    };
    const handleWrapperClick = () => {
      expandedCardIndex.value = null;
    };
    const isAnyCardExpanded = computed(() => expandedCardIndex.value !== null);
    const __returned__ = { props, expandedCardIndex, animationDelay, handleCardClick, handleWrapperClick, isAnyCardExpanded, Card };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["card-wrapper", { "expanded-wrapper": $setup.isAnyCardExpanded }]
  }, _attrs))} data-v-d90028a0><!--[-->`);
  ssrRenderList($props.cards, (card, index) => {
    _push(ssrRenderComponent($setup["Card"], {
      key: index,
      card,
      "is-expanded": $setup.expandedCardIndex === index,
      onClick: () => $setup.handleCardClick(index),
      style: { transitionDelay: `${$setup.animationDelay.value * index}s` }
    }, null, _parent));
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/vue/CardWrapper.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CardWrapper = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d90028a0"]]);

const cards = [
	{
		title: "Sobre el Evento",
		description: "Únete a nosotros en Villarrica para un emocionante evento de Parkour, Freerunning y Acrobacias. Este evento reúne a los mejores atletas para mostrar sus habilidades y compartir su pasión por el deporte.",
		previewText: "JAM: Parkour, Freerunning y Acrobacias en Villarrica"
	},
	{
		title: "Fechas",
		description: "El evento se llevará a cabo los días 1 y 2 de marzo de 2025. Con alojo y incluido, los participantes podrán disfrutar de dos días de competencias y actividades.",
		previewText: "1-2 Marizo 2025"
	},
	{
		title: "Participantes",
		description: "Contaremos con la participación de destacados atletas tales como la MANG, en colaboración con la OMJ.",
		previewText: "MANG & OMJ"
	},
	{
		title: "Inscripción",
		description: "Presiona aquí!",
		previewText: "Inscribete en las compes aquí",
		link: "/inscription"
	},
	{
		title: "Competencias",
		description: "El evento incluirá competencias de Freestyle & Best Trick y Speed. Los participantes tendrán la oportunidad de mostrar su creatividad y velocidad en estas compentencias.",
		previewText: "Freestyle & Best Trick, Speed"
	}
];

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Cover", $$Cover, { "path": "cover.jpg" })} ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardWrapper", CardWrapper, { "client:idle": true, "cards": cards, "client:component-hydration": "idle", "client:component-path": "/home/dani/Documentos/libGDX/rt_villarrica_landing/src/components/vue/CardWrapper.vue", "client:component-export": "default" })} ` })} ` })} `;
}, "/home/dani/Documentos/libGDX/rt_villarrica_landing/src/pages/index.astro", void 0);

const $$file = "/home/dani/Documentos/libGDX/rt_villarrica_landing/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
