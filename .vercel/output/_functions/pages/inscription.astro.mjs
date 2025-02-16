import { c as createComponent, g as renderComponent, e as renderTemplate } from '../chunks/astro/server_CjNNo8J6.mjs';
import 'kleur/colors';
import { _ as _export_sfc, $ as $$Layout } from '../chunks/_plugin-vue_export-helper_DFzz1zqG.mjs';
import { reactive, defineComponent, useSSRContext, mergeProps, onMounted } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderComponent, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
/* empty css                                       */
export { renderers } from '../renderers.mjs';

function useInscriptionForm() {
  const formData = reactive({
    nombre: "",
    email: "",
    free: false,
    speed: false,
    sex: ""
  });
  const handleSubmit = async () => {
    const payload = JSON.parse(JSON.stringify(formData));
    console.log("Payload enviado:", payload);
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const text = await response.text();
      console.log("Respuesta cruda del servidor:", text);
      const result = text ? JSON.parse(text) : null;
      console.log("Respuesta del servidor (parseada):", result);
      alert("Inscrito Correctamente!");
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };
  return { formData, handleSubmit };
}

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "FormInput",
  props: {
    id: { type: String, required: true },
    label: { type: String, required: true },
    type: { type: String, default: "text" },
    modelValue: { type: [String, Number], default: "" },
    required: { type: Boolean, default: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-group" }, _attrs))} data-v-8e6446b2><label${ssrRenderAttr("for", $props.id)} data-v-8e6446b2>${ssrInterpolate($props.label)}</label><input${ssrRenderAttr("id", $props.id)}${ssrRenderAttr("type", $props.type)}${ssrRenderAttr("value", $props.modelValue)}${ssrIncludeBooleanAttr($props.required) ? " required" : ""} data-v-8e6446b2></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/vue/Inscription/FormInput.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const FormInput = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-8e6446b2"]]);

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "PersonalDataGroup",
  props: {
    formData: { type: Object, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props, FormInput };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "personal-data-group" }, _attrs))} data-v-c39500d0>`);
  _push(ssrRenderComponent($setup["FormInput"], {
    id: "nombre",
    label: "Nombre",
    modelValue: $props.formData.nombre,
    "onUpdate:modelValue": ($event) => $props.formData.nombre = $event,
    required: ""
  }, null, _parent));
  _push(ssrRenderComponent($setup["FormInput"], {
    id: "email",
    label: "Correo electr\xF3nico",
    type: "email",
    modelValue: $props.formData.email,
    "onUpdate:modelValue": ($event) => $props.formData.email = $event,
    required: ""
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/vue/Inscription/PersonalDataGroup.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const PersonalDataGroup = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-c39500d0"]]);

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "FormCheckbox",
  props: {
    id: { type: String, required: true },
    label: { type: String, required: true },
    modelValue: { type: Boolean, default: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "checkbox-item" }, _attrs))}><input type="checkbox"${ssrRenderAttr("id", $props.id)}${ssrIncludeBooleanAttr($props.modelValue) ? " checked" : ""}><label${ssrRenderAttr("for", $props.id)}>${ssrInterpolate($props.label)}</label></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/vue/Inscription/FormCheckbox.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const FormCheckbox = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CompetenciasGroup",
  props: {
    formData: { type: Object, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props, FormCheckbox };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "competencias-group" }, _attrs))} data-v-98c3605c><label data-v-98c3605c>Competencias</label><div class="checkbox-group" data-v-98c3605c>`);
  _push(ssrRenderComponent($setup["FormCheckbox"], {
    id: "free",
    label: "Freestyle & Best Trick",
    modelValue: $props.formData.free,
    "onUpdate:modelValue": ($event) => $props.formData.free = $event
  }, null, _parent));
  _push(ssrRenderComponent($setup["FormCheckbox"], {
    id: "speed",
    label: "Speed",
    modelValue: $props.formData.speed,
    "onUpdate:modelValue": ($event) => $props.formData.speed = $event
  }, null, _parent));
  _push(`<div class="select-group" data-v-98c3605c><label for="sex" data-v-98c3605c>Tipo de compentencias:</label><select id="sex" data-v-98c3605c><option disabled value="" data-v-98c3605c${ssrIncludeBooleanAttr(Array.isArray($props.formData.sex) ? ssrLooseContain($props.formData.sex, "") : ssrLooseEqual($props.formData.sex, "")) ? " selected" : ""}>Selecciona una opci\xF3n</option><option value="femenino" data-v-98c3605c${ssrIncludeBooleanAttr(Array.isArray($props.formData.sex) ? ssrLooseContain($props.formData.sex, "femenino") : ssrLooseEqual($props.formData.sex, "femenino")) ? " selected" : ""}>Femenino</option><option value="masculino" data-v-98c3605c${ssrIncludeBooleanAttr(Array.isArray($props.formData.sex) ? ssrLooseContain($props.formData.sex, "masculino") : ssrLooseEqual($props.formData.sex, "masculino")) ? " selected" : ""}>Masculino</option></select></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/vue/Inscription/CompetenciasGroup.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CompetenciasGroup = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-98c3605c"]]);

const _sfc_main$1 = {
  setup(__props, { expose: __expose }) {
  __expose();

onMounted(() => {
  if (window.paypal) {
    window.paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: '10.00',
              },
            },
          ],
        });
      },
      onApprove: (data, actions) => {
        return actions.order.capture().then((details) => {
          alert('Transacción completada por ' + details.payer.name.given_name);
        });
      },
    }).render('#paypal-button-container');
  }
});

const __returned__ = { onMounted };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/vue/Inscription/PayPalButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined
};

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InscriptionForm",
  setup(__props, { expose: __expose }) {
    __expose();
    const { formData, handleSubmit } = useInscriptionForm();
    const __returned__ = { formData, handleSubmit, PersonalDataGroup, CompetenciasGroup };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))} data-v-8d43f794><div class="card-header" data-v-8d43f794><h2 data-v-8d43f794>Formulario de Inscripci\xF3n</h2></div><div class="card-content" data-v-8d43f794><form class="form" data-v-8d43f794><div class="form-group-container" data-v-8d43f794>`);
  _push(ssrRenderComponent($setup["PersonalDataGroup"], { formData: $setup.formData }, null, _parent));
  _push(`</div><div class="form-group-container" data-v-8d43f794>`);
  _push(ssrRenderComponent($setup["CompetenciasGroup"], { formData: $setup.formData }, null, _parent));
  _push(`</div><div class="form-group-container" data-v-8d43f794><button type="submit" class="submit-button" data-v-8d43f794>Enviar</button></div></form></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/vue/Inscription/InscriptionForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InscriptionForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8d43f794"]]);

const $$Inscription = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "InscriptionForm", InscriptionForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/dani/Documentos/libGDX/rt_villarrica_landing/src/components/vue/Inscription/InscriptionForm.vue", "client:component-export": "default" })} ` })} `;
}, "/home/dani/Documentos/libGDX/rt_villarrica_landing/src/pages/inscription.astro", void 0);

const $$file = "/home/dani/Documentos/libGDX/rt_villarrica_landing/src/pages/inscription.astro";
const $$url = "/inscription";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Inscription,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
