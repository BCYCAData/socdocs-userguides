import { o as onDestroy, c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_attribute_value, d as escape_object, f as add_attribute, g as subscribe, v as validate_component, h as escape, i as createEventDispatcher, m as missing_component, j as compute_slots, k as each, l as set_store_value } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { g as getI18nContext, u as uppercaseFirstLetter, a as getNavbarContext, b as getSidebarContext, i as isActiveSidebarLink, c as getNavigationContext, s as setNavigationContext, d as setNavbarContext, e as setSidebarContext, f as createSidebarContext, h as setI18nContext, D as DEFAULT_NAVIGATION_CONFIG, j as DEFAULT_I18N_TRANSLATIONS } from "../../chunks/contexts.js";
import { _ as __kitDocs, k as kitDocs } from "../../chunks/kit-docs.js";
import clsx from "clsx";
import { r as readable, d as derived, w as writable } from "../../chunks/index2.js";
import { i as isUndefined, a as isNull, b as isFunction } from "../../chunks/unit.js";
function createDisposalBin() {
  let bin = [];
  function add(callback) {
    bin.push(callback);
  }
  function dispose() {
    bin.forEach((fn) => fn());
    bin = [];
  }
  try {
    onDestroy(dispose);
  } catch (e) {
  }
  return {
    add,
    dispose
  };
}
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isButton;
  let buttonClass;
  let contentClass;
  let arrowClass;
  let $$restProps = compute_rest_props($$props, ["primary", "type", "arrow", "as", "class"]);
  let { primary = false } = $$props;
  let { type = "flat" } = $$props;
  let { arrow = null } = $$props;
  let { as: __as = "button" } = $$props;
  let { class: __class = "" } = $$props;
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0)
    $$bindings.primary(primary);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.arrow === void 0 && $$bindings.arrow && arrow !== void 0)
    $$bindings.arrow(arrow);
  if ($$props.as === void 0 && $$bindings.as && __as !== void 0)
    $$bindings.as(__as);
  if ($$props.class === void 0 && $$bindings.class && __class !== void 0)
    $$bindings.class(__class);
  isButton = __as === "button" && isUndefined($$restProps["href"]);
  buttonClass = clsx(
    "group transform-gpu text-base font-medium transition-transform hover:scale-105",
    type === "raised" && "flex items-center justify-center",
    (isButton || type === "raised") && "rounded-md px-4 992:px-5 py-2",
    type === "raised" ? primary ? "bg-inverse text-body hover:bg-inverse/90" : "bg-body border-2 border-inverse text-inverse" : "text-soft hover:text-inverse",
    __class
  );
  contentClass = clsx("inline-block transform transition-transform duration-100 group-hover:translate-x-0", arrow === "left" && "-translate-x-3 ", arrow === "right" && "translate-x-2");
  arrowClass = clsx(arrow && "opacity-0 transition-opacity duration-100 group-hover:visible group-hover:opacity-100", !arrow ? "hidden" : "inline-block");
  return `${isButton ? `<button${spread(
    [
      {
        class: escape_attribute_value(buttonClass)
      },
      escape_object($$restProps)
    ],
    {}
  )}>${arrow === "left" ? `<span${add_attribute("class", arrowClass, 0)}>&lt;-</span>` : ``} <span${add_attribute("class", contentClass, 0)}>${slots.default ? slots.default({}) : ``}</span> ${arrow === "right" ? `<span${add_attribute("class", arrowClass, 0)}>-&gt;</span>` : ``}</button>` : ` <a${spread(
    [
      {
        class: escape_attribute_value(buttonClass)
      },
      escape_object($$restProps)
    ],
    {}
  )}>${arrow === "left" ? `<span${add_attribute("class", arrowClass, 0)}>&lt;-</span>` : ``} <span${add_attribute("class", contentClass, 0)}>${slots.default ? slots.default({}) : ``}</span> ${arrow === "right" ? `<span${add_attribute("class", arrowClass, 0)}>-&gt;</span>` : ``}</a>`}`;
});
const Button$1 = Button;
const Moon_clear_fill = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M9.822 2.238a9 9 0 0 0 11.94 11.94C20.768 18.654 16.775 22 12 22C6.477 22 2 17.523 2 12c0-4.775 3.346-8.768 7.822-9.762m8.342.053L19 2.5v1l-.836.209a2 2 0 0 0-1.455 1.455L16.5 6h-1l-.209-.836a2 2 0 0 0-1.455-1.455L13 3.5v-1l.836-.209A2 2 0 0 0 15.29.836L15.5 0h1l.209.836a2 2 0 0 0 1.455 1.455m5 5L24 7.5v1l-.836.209a2 2 0 0 0-1.455 1.455L21.5 11h-1l-.209-.836a2 2 0 0 0-1.455-1.455L18 8.5v-1l.836-.209a2 2 0 0 0 1.455-1.455L20.5 5h1l.209.836a2 2 0 0 0 1.455 1.455"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Sun_fill = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12M11 1h2v3h-2zm0 19h2v3h-2zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05zM16.95 18.364l1.414-1.414l2.121 2.121l-1.414 1.414zm2.121-14.85l1.414 1.415l-2.121 2.121l-1.414-1.414zM5.636 16.95l1.414 1.414l-2.121 2.121l-1.414-1.414zM23 11v2h-3v-2zM4 11v2H1v-2z"/>`}<!-- HTML_TAG_END --></svg>`;
});
function mediaQuery(query) {
  return readable(false);
}
const prefersDarkColorScheme = mediaQuery();
const __colorScheme = writable(currentColorScheme());
const colorScheme = {
  ...__colorScheme,
  set(scheme) {
    __colorScheme.set(scheme);
  }
};
const isDarkColorScheme = derived([colorScheme, prefersDarkColorScheme], ([$scheme, $prefersDark]) => $scheme === "dark" || $scheme === "system" && $prefersDark);
function currentColorScheme() {
  return "system";
}
const ColorSchemeToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isDarkColorScheme, $$unsubscribe_isDarkColorScheme;
  let $$unsubscribe_colorScheme;
  let $i18n, $$unsubscribe_i18n;
  $$unsubscribe_isDarkColorScheme = subscribe(isDarkColorScheme, (value) => $isDarkColorScheme = value);
  $$unsubscribe_colorScheme = subscribe(colorScheme, (value) => value);
  const i18n = getI18nContext();
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  $$unsubscribe_isDarkColorScheme();
  $$unsubscribe_colorScheme();
  $$unsubscribe_i18n();
  return `<button class="min-w-[40px] min-h-[40px] flex items-center justify-center p-2 transform-gpu rounded-md border-0 transition-transform hover:scale-[1.1]">${!$isDarkColorScheme ? `${validate_component(Sun_fill, "SunIcon").$$render($$result, { width: "20", height: "20" }, {}, {})}` : `${validate_component(Moon_clear_fill, "MoonIcon").$$render($$result, { width: "20", height: "20" }, {}, {})}`} <span class="sr-only">${escape($i18n.colorScheme.title)}</span></button>`;
});
const ColorSchemeToggle$1 = ColorSchemeToggle;
const css$1 = {
  code: "[hidden]{display:none !important}",
  map: null
};
const Transition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { toggle = void 0 } = $$props;
  let { transitions = "" } = $$props;
  let { inTransition = "" } = $$props;
  let { outTransition = inTransition } = $$props;
  let { inState = "" } = $$props;
  let { onState = "" } = $$props;
  let { outState = inState } = $$props;
  let { offVisible = false } = $$props;
  let div;
  let slot;
  const setClasses = (...classes) => {
    const toRemove = clean(transitions, inTransition, outTransition, inState, onState, outState);
    slot.classList.value = clean(slot.classList.value).split(" ").filter((c) => !toRemove.includes(c)).join(" ") + " " + classes.join(" ");
  };
  const clean = (...args) => args.join(" ").replace(/\s+/g, " ").trim();
  let initialized = false;
  let firstToggleState = toggle;
  const event = (toggle2) => {
    slot.toggle = toggle2;
    toggle2 ? enterEvent() : leaveEvent();
  };
  const enterEvent = () => {
    if (slot.hidden)
      ;
    else {
      setClasses(transitions, inTransition, onState);
    }
  };
  const leaveEvent = () => {
    setClasses(transitions, outTransition, outState);
  };
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  if ($$props.transitions === void 0 && $$bindings.transitions && transitions !== void 0)
    $$bindings.transitions(transitions);
  if ($$props.inTransition === void 0 && $$bindings.inTransition && inTransition !== void 0)
    $$bindings.inTransition(inTransition);
  if ($$props.outTransition === void 0 && $$bindings.outTransition && outTransition !== void 0)
    $$bindings.outTransition(outTransition);
  if ($$props.inState === void 0 && $$bindings.inState && inState !== void 0)
    $$bindings.inState(inState);
  if ($$props.onState === void 0 && $$bindings.onState && onState !== void 0)
    $$bindings.onState(onState);
  if ($$props.outState === void 0 && $$bindings.outState && outState !== void 0)
    $$bindings.outState(outState);
  if ($$props.offVisible === void 0 && $$bindings.offVisible && offVisible !== void 0)
    $$bindings.offVisible(offVisible);
  $$result.css.add(css$1);
  firstToggleState !== toggle && (initialized = true);
  initialized && event(toggle);
  return `<div hidden${add_attribute("this", div, 0)}></div> ${``}`;
});
function ariaBool(value) {
  return value ? "true" : "false";
}
const Overlay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  return `<div${add_attribute("class", clsx("pointer-events-auto fixed top-0 left-0 z-40 backdrop-blur-sm backdrop-filter transition-opacity duration-75", "bg-body/20 dark:bg-body/60", "h-screen w-screen", open ? "visible opacity-100" : "invisible opacity-0"), 0)}></div>`;
});
const Overlay$1 = Overlay;
const Close_fill = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="m12 10.587l4.95-4.95l1.414 1.414l-4.95 4.95l4.95 4.95l-1.415 1.414l-4.95-4.95l-4.949 4.95l-1.414-1.415l4.95-4.95l-4.95-4.95L7.05 5.638z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const isLargeScreen = mediaQuery();
mediaQuery();
function hideDocumentScrollbar(hidden) {
  window.requestAnimationFrame(() => {
    document.documentElement.classList[hidden ? "add" : "remove"]("overflow-hidden");
    document.documentElement.classList[!hidden ? "add" : "remove"]("overflow-x-hidden");
  });
}
let idCount = 0;
const Popover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isLargeScreen, $$unsubscribe_isLargeScreen;
  $$unsubscribe_isLargeScreen = subscribe(isLargeScreen, (value) => $isLargeScreen = value);
  let { open = false } = $$props;
  let { overlay = false } = $$props;
  createEventDispatcher();
  let popoverId = `popover-${idCount += 1}`;
  let popoverButtonId = `popover-button-${idCount}`;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.overlay === void 0 && $$bindings.overlay && overlay !== void 0)
    $$bindings.overlay(overlay);
  {
    if ($isLargeScreen) {
      hideDocumentScrollbar(false);
    }
  }
  $$unsubscribe_isLargeScreen();
  return `<div class="not-prose relative inline-block text-left"><button${add_attribute("id", popoverButtonId, 0)} type="button"${add_attribute("class", clsx("inline-flex w-full justify-center rounded-md p-2 text-lg font-medium", "transform-gpu transition-transform hover:scale-[1.025]", open ? "text-inverse" : "text-soft hover:text-inverse"), 0)}${add_attribute("aria-controls", popoverId, 0)}${add_attribute("aria-expanded", ariaBool(open), 0)} aria-haspopup="true">${slots.button ? slots.button({}) : ``}</button> ${overlay ? `${validate_component(Overlay$1, "Overlay").$$render($$result, { open }, {}, {})}` : ``} ${validate_component(Transition, "Transition").$$render(
    $$result,
    {
      toggle: open,
      transitions: "transition transform",
      inTransition: "ease-out duration-150",
      inState: "opacity-0 scale-95",
      onState: "opacity-100 scale-100",
      outTransition: "ease-out duration-100"
    },
    {},
    {
      default: () => {
        return `<div${add_attribute("id", popoverId, 0)}${add_attribute("class", clsx("absolute -top-4 -right-0 z-50 min-w-[340px] origin-top-right p-5 pt-4", !open && "invisible"), 0)} tabindex="-1" role="dialog"><div class="bg-elevate border-border flex min-h-[60px] flex-col overflow-hidden rounded-md border-[1.5px]"><div class="z-20 flex items-center"><div class="flex-1"></div> <button${add_attribute("class", clsx("text-soft hover:text-inverse mt-[0.125rem] mr-[0.125rem] p-4", !open && "pointer-events-none"), 0)}>${validate_component(Close_fill, "CloseIcon").$$render($$result, { width: "28", height: "28" }, {}, {})} <span class="sr-only" data-svelte-h="svelte-1pewzs3">Close</span></button></div> <div class="-mt-[2.5rem] px-4 pt-8 pb-6">${slots.default ? slots.default({}) : ``}</div></div></div>`;
      }
    }
  )}</div>`;
});
const Popover$1 = Popover;
const Arrow_drop_down_fill = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="m12 14l-4-4h8z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Discord_fill = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M19.303 5.337A17.32 17.32 0 0 0 14.963 4c-.191.329-.403.775-.552 1.125a16.592 16.592 0 0 0-4.808 0C9.454 4.775 9.23 4.329 9.05 4a17.075 17.075 0 0 0-4.342 1.337C1.961 9.391 1.218 13.35 1.59 17.255a17.69 17.69 0 0 0 5.318 2.664a12.94 12.94 0 0 0 1.136-1.836c-.627-.234-1.22-.52-1.794-.86c.149-.106.297-.223.435-.34c3.46 1.582 7.207 1.582 10.624 0c.149.117.287.234.435.34c-.573.34-1.167.626-1.793.86a12.94 12.94 0 0 0 1.135 1.836a17.594 17.594 0 0 0 5.318-2.664c.457-4.52-.722-8.448-3.1-11.918M8.52 14.846c-1.04 0-1.889-.945-1.889-2.101c0-1.157.828-2.102 1.89-2.102c1.05 0 1.91.945 1.888 2.102c0 1.156-.838 2.1-1.889 2.1m6.974 0c-1.04 0-1.89-.945-1.89-2.101c0-1.157.828-2.102 1.89-2.102c1.05 0 1.91.945 1.889 2.102c0 1.156-.828 2.1-1.89 2.1"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Github_fill = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M12.001 2c-5.525 0-10 4.475-10 10a9.994 9.994 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.28 9.28 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Twitter_fill = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M22.213 5.656a8.384 8.384 0 0 1-2.402.658A4.195 4.195 0 0 0 21.649 4c-.82.488-1.719.83-2.655 1.015a4.182 4.182 0 0 0-7.126 3.814a11.874 11.874 0 0 1-8.621-4.37a4.168 4.168 0 0 0-.566 2.103c0 1.45.739 2.731 1.86 3.481a4.169 4.169 0 0 1-1.894-.523v.051a4.185 4.185 0 0 0 3.355 4.102a4.205 4.205 0 0 1-1.89.072A4.185 4.185 0 0 0 8.02 16.65a8.394 8.394 0 0 1-6.192 1.732a11.831 11.831 0 0 0 6.41 1.88c7.694 0 11.9-6.373 11.9-11.9c0-.18-.004-.362-.012-.541a8.497 8.497 0 0 0 2.086-2.164"/>`}<!-- HTML_TAG_END --></svg>`;
});
const SocialLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { type } = $$props;
  let { title = uppercaseFirstLetter(type) } = $$props;
  let { href } = $$props;
  let { iconWidth = 24 } = $$props;
  let { iconHeight = 24 } = $$props;
  let { class: __class = "" } = $$props;
  const icons = {
    discord: Discord_fill,
    gitHub: Github_fill,
    twitter: Twitter_fill
  };
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.iconWidth === void 0 && $$bindings.iconWidth && iconWidth !== void 0)
    $$bindings.iconWidth(iconWidth);
  if ($$props.iconHeight === void 0 && $$bindings.iconHeight && iconHeight !== void 0)
    $$bindings.iconHeight(iconHeight);
  if ($$props.class === void 0 && $$bindings.class && __class !== void 0)
    $$bindings.class(__class);
  return ` <a${add_attribute("class", clsx("relative flex transform-gpu items-center rounded-md border-0 p-2 transition-transform hover:scale-[1.1]", __class), 0)}${add_attribute("href", href, 0)} target="_blank">${validate_component(icons[type] || missing_component, "svelte:component").$$render(
    $$result,
    {
      class: clsx($$slots.default && "mr-2.5"),
      width: iconWidth,
      height: iconHeight
    },
    {},
    {}
  )} <span class="sr-only">${escape(title)}</span> ${slots.default ? slots.default({}) : ``}</a>`;
});
const SocialLink$1 = SocialLink;
function useActiveHeaderLinks(navContext) {
  const index = writable(-1);
  createDisposalBin();
  const destroyDisposal = createDisposalBin();
  destroyDisposal.add(isLargeScreen.subscribe(($is) => {
  }));
  destroyDisposal.add(navContext.subscribe((config) => {
    config.canUpdateHash;
  }));
  return index;
}
const KitDocs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { meta = null } = $$props;
  onDestroy(() => {
    __kitDocs.set({ meta: null });
  });
  if ($$props.meta === void 0 && $$bindings.meta && meta !== void 0)
    $$bindings.meta(meta);
  {
    __kitDocs.set({ meta });
  }
  return `${slots.default ? slots.default({}) : ``}`;
});
const KitDocs$1 = KitDocs;
const Menu_unfold_fill = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M21 18v2H3v-2zM17.05 3.55L22 8.5l-4.95 4.95zM12 11v2H3v-2zm0-7v2H3V4z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Arrow_right_s_line = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="m13.172 12l-4.95-4.95l1.414-1.413L16 12l-6.364 6.364l-1.414-1.415z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Menu_5_line = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M18 18v2H6v-2zm3-7v2H3v-2zm-3-7v2H6V4z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const NavLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { slug } = $$props;
  let { match = null } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  if ($$props.match === void 0 && $$bindings.match && match !== void 0)
    $$bindings.match(match);
  return `<li class="mt-4 first:mt-0 992:mt-0"><a class="text-soft text-base hover:font-medium font-base hover:underline hover:text-brand"${add_attribute("href", slug, 0)}${add_attribute("target", isNull(match) ? "_blank" : null, 0)}>${escape(title)}</a></li>`;
});
const NavLinkItem = NavLink;
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let navLinks;
  let $context, $$unsubscribe_context;
  let $i18n, $$unsubscribe_i18n;
  let $colorScheme, $$unsubscribe_colorScheme;
  $$unsubscribe_colorScheme = subscribe(colorScheme, (value) => $colorScheme = value);
  let { search = false } = $$props;
  createEventDispatcher();
  const context = getNavbarContext();
  $$unsubscribe_context = subscribe(context, (value) => $context = value);
  const i18n = getI18nContext();
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  if ($$props.search === void 0 && $$bindings.search && search !== void 0)
    $$bindings.search(search);
  navLinks = $context.links;
  $$unsubscribe_context();
  $$unsubscribe_i18n();
  $$unsubscribe_colorScheme();
  return `<div class="flex w-full flex-col items-center justify-center mx-auto max-w-[var(--kd-navbar-max-width)] p-[var(--kd-navbar-padding)] h-[var(--kd--navbar-height)]"><div${add_attribute("class", clsx("flex w-full items-center"), 0)}>${slots.left ? slots.left({}) : ``} <div class="flex-1"></div> <div class="992:hidden -mr-2 flex items-center">${search ? `${slots.search ? slots.search({}) : ``}` : ``} ${validate_component(Popover$1, "Popover").$$render($$result, { overlay: true }, {}, {
    button: () => {
      return `${validate_component(Menu_5_line, "MenuIcon").$$render($$result, { width: "30", height: "30" }, {}, {})} <span class="sr-only">${escape($i18n.nav.mainMenu)}</span> `;
    },
    default: () => {
      return `${slots["popover-top"] ? slots["popover-top"]({}) : ``} <section class="flex flex-col items-start"><h1 class="mb-6 text-xl font-medium">${escape($i18n.nav.links)}</h1> <nav><ul>${each(navLinks, (navLink) => {
        return `${validate_component(NavLinkItem, "NavLinkItem").$$render($$result, Object.assign({}, navLink), {}, {})}`;
      })}</ul></nav></section> ${slots["popover-middle"] ? slots["popover-middle"]({}) : ``} <hr class="my-6 h-2 w-full border-t border-dashed border-border"> <section class="flex flex-col items-start"><h1 class="mb-6 text-xl font-medium">${escape($i18n.nav.options)}</h1> <div class="flex flex-col space-y-6">${slots["popover-options"] ? slots["popover-options"]({}) : ``} <div class="flex items-center">Theme

              <label class="relative ml-4 flex items-center border border-border px-4 py-1 rounded-md focus-within:ring-2" style="--tw-ring-color: var(--kd-color-focus);"><span class="sr-only">${escape($i18n.colorScheme.theme)}</span> ${escape(uppercaseFirstLetter($colorScheme))} ${validate_component(Arrow_drop_down_fill, "ArrowDropDownIcon").$$render($$result, { width: "20", height: "20", class: "ml-1" }, {}, {})} <select class="absolute inset-0 appearance-none opacity-0"><option value="light">${escape($i18n.colorScheme.light)}</option><option value="dark">${escape($i18n.colorScheme.dark)}</option><option value="system">${escape($i18n.colorScheme.system)}</option></select></label></div></div></section> ${slots["popover-bottom"] ? slots["popover-bottom"]({}) : ``}`;
    }
  })}</div> <div class="992:flex 992:items-center hidden"><nav><ul class="flex items-center space-x-8">${each(navLinks, (navLink) => {
    return `${validate_component(NavLinkItem, "NavLinkItem").$$render($$result, Object.assign({}, navLink), {}, {})}`;
  })}</ul></nav> ${slots.right ? slots.right({}) : ``} <div class="hidden 992:flex items-center ml-6">${slots["right-alt"] ? slots["right-alt"]({}) : ``} ${validate_component(ColorSchemeToggle$1, "ColorSchemeToggle").$$render($$result, {}, {}, {})}</div></div></div> ${slots.bottom ? slots.bottom({}) : ``}</div>`;
});
const Navbar$1 = Navbar;
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_activeLink;
  let $isLargeScreen, $$unsubscribe_isLargeScreen;
  let $config, $$unsubscribe_config;
  let $page, $$unsubscribe_page;
  $$unsubscribe_isLargeScreen = subscribe(isLargeScreen, (value) => $isLargeScreen = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  createEventDispatcher();
  let sidebar;
  let { open = false } = $$props;
  let { search = false } = $$props;
  let { class: _class = "" } = $$props;
  let { style = "" } = $$props;
  const { config, activeLink } = getSidebarContext();
  $$unsubscribe_config = subscribe(config, (value) => $config = value);
  $$unsubscribe_activeLink = subscribe(activeLink, (value) => value);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.search === void 0 && $$bindings.search && search !== void 0)
    $$bindings.search(search);
  if ($$props.class === void 0 && $$bindings.class && _class !== void 0)
    $$bindings.class(_class);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$unsubscribe_activeLink();
  $$unsubscribe_isLargeScreen();
  $$unsubscribe_config();
  $$unsubscribe_page();
  return `<aside id="main-sidebar"${add_attribute("class", clsx("sidebar", isFunction(_class) ? _class({ open }) : _class), 0)}${add_attribute("role", !$isLargeScreen ? "dialog" : null, 0)}${add_attribute("aria-modal", ariaBool(!$isLargeScreen), 0)}${add_attribute("style", style, 0)}${add_attribute("this", sidebar, 0)}><div class="992:hidden sticky top-0 left-0 flex items-center"><div class="flex-1"></div> <button${add_attribute("class", clsx("text-soft hover:text-inverse p-4 -mx-6", !open && "pointer-events-none"), 0)}>${validate_component(Close_fill, "CloseIcon").$$render($$result, { width: "24", height: "24" }, {}, {})} <span class="sr-only" data-svelte-h="svelte-13q18xv">Close sidebar</span></button></div> <nav class="992:px-1 scrollbar">${search ? `<div class="pointer-events-none sticky top-0 z-0 -ml-0.5 min-h-[80px]"><div class="992:h-6 bg-body"></div> <div class="bg-body pointer-events-auto relative"><div class="992:block hidden">${slots.search ? slots.search({}) : ``}</div></div> <div class="from-body h-8 bg-gradient-to-b"></div></div>` : ``} ${slots.top ? slots.top({}) : ``} <ul${add_attribute("class", clsx(!search && "mt-8", "pb-28 992:pb-0"), 0)}>${each(Object.keys($config.links), (category) => {
    let links = $config.links[category];
    return ` <li class="992:mt-10 mt-12 first:mt-0">${category !== "." ? `<h5 class="text-strong 992:mb-3 mb-8 text-lg font-semibold">${escape(category)} </h5>` : `<div class="mt-10"></div>`} <ul class="border-border space-y-3 border-l">${each(links, (link) => {
      return `<li class="first:mt-6"><a${add_attribute(
        "class",
        clsx("992:py-1 -ml-px flex items-center border-l py-2 pl-4", isActiveSidebarLink(link, $page.url.pathname) ? "text-brand font-semibold" : "hover:border-inverse focus-visible:border-inverse text-soft hover:text-inverse focus-visible:text-inverse border-transparent font-normal"),
        0
      )}${add_attribute("href", link.slug, 0)}${add_attribute(
        "style",
        isActiveSidebarLink(link, $page.url.pathname) ? "border-color: var(--kd-sidebar-border-active);" : "",
        0
      )}>${link.icon?.before ? `${validate_component(link.icon.before || missing_component, "svelte:component").$$render($$result, { class: "mr-1", width: "24", height: "24" }, {}, {})}` : ``} ${escape(link.title)} ${link.icon?.after ? `${validate_component(link.icon.after || missing_component, "svelte:component").$$render($$result, { class: "ml-1", width: "24", height: "24" }, {}, {})}` : ``}</a> </li>`;
    })}</ul> </li>`;
  })}</ul> ${slots.bottom ? slots.bottom({}) : ``}</nav></aside> <div class="992:hidden z-40">${validate_component(Overlay$1, "Overlay").$$render($$result, { open }, {}, {})}</div>`;
});
const Sidebar$1 = Sidebar;
const Arrow_drop_right_line = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M12.172 12L9.343 9.173l1.415-1.414L15 12l-4.242 4.242l-1.415-1.414z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const OnThisPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $kitDocs, $$unsubscribe_kitDocs;
  let $i18n, $$unsubscribe_i18n;
  let $index, $$unsubscribe_index;
  $$unsubscribe_kitDocs = subscribe(kitDocs, (value) => $kitDocs = value);
  let { class: __class = "" } = $$props;
  let { style = "" } = $$props;
  const nav = getNavigationContext();
  const i18n = getI18nContext();
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  const index = useActiveHeaderLinks(nav);
  $$unsubscribe_index = subscribe(index, (value) => $index = value);
  let headings = [];
  function calcIndex(header) {
    let sum = 0;
    for (let i = 0; i < headings.length; i++) {
      if (headings[i] === header)
        return sum;
      sum += 1 + headings[i].children.length;
    }
    return sum;
  }
  if ($$props.class === void 0 && $$bindings.class && __class !== void 0)
    $$bindings.class(__class);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  {
    {
      headings = [];
      const currentHeadings = ($kitDocs.meta?.headers ?? []).filter(({ level }) => level > 1);
      for (const heading of currentHeadings) {
        const header = { ...heading, children: [] };
        headings.push(header);
        if (heading.children) {
          for (const child of heading.children) {
            header.children.push(child);
          }
        }
      }
    }
  }
  $$unsubscribe_kitDocs();
  $$unsubscribe_i18n();
  $$unsubscribe_index();
  return `<div${add_attribute("class", clsx("on-this-page scrollbar", __class), 0)}${add_attribute("style", style, 0)}>${headings.length > 1 || headings[0]?.children.length ? `<h5 class="text-inverse w-full text-left text-lg font-semibold">${escape($i18n.toc.title)}</h5> <ul class="mt-4 space-y-4 px-2">${each(headings, (heading) => {
    let i = calcIndex(heading), activeParent = i === $index || heading.children.some((_, j) => i + j + 1 === $index);
    return `  <li${add_attribute(
      "class",
      clsx(activeParent ? "text-brand" : "text-soft hover:text-inverse"),
      0
    )}><a${add_attribute("href", `#${heading.slug}`, 0)}>${escape(heading.title)}</a></li> ${heading.children.length > 0 ? `<ul class="space-y-3">${each(heading.children, (childHeader, j) => {
      return `<li${add_attribute(
        "class",
        clsx("group group flex", i + j + 1 === $index ? "text-brand" : "text-soft hover:text-inverse"),
        0
      )}>${validate_component(Arrow_drop_right_line, "RightArrowIcon").$$render(
        $$result,
        {
          width: "20",
          height: "20",
          class: "group-hover:text-inverse mt-px mr-px text-soft"
        },
        {},
        {}
      )} <a${add_attribute("href", `#${childHeader.slug}`, 0)}>${escape(childHeader.title)}</a> </li>`;
    })} </ul>` : ``}`;
  })}</ul>` : ``}</div>`;
});
const OnThisPage$1 = OnThisPage;
const scrollTop = readable(0, (set) => {
  return;
});
const scrollDirection = readable("none", (set) => {
  return;
});
const KitDocsLayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let collapseNavbar;
  let showSidebar;
  let showBottomNav;
  let $activeLink, $$unsubscribe_activeLink;
  let $sidebarLinks, $$unsubscribe_sidebarLinks;
  let $scrollDirection, $$unsubscribe_scrollDirection;
  let $scrollTop, $$unsubscribe_scrollTop;
  let $isLargeScreen, $$unsubscribe_isLargeScreen;
  let $i18nContext, $$unsubscribe_i18nContext;
  let $sidebarConfig, $$unsubscribe_sidebarConfig;
  let $navbarContext, $$unsubscribe_navbarContext;
  let $navigatonContext, $$unsubscribe_navigatonContext;
  let $kitDocs, $$unsubscribe_kitDocs;
  let $activeCategory, $$unsubscribe_activeCategory;
  let $previousLink, $$unsubscribe_previousLink;
  let $nextLink, $$unsubscribe_nextLink;
  $$unsubscribe_scrollDirection = subscribe(scrollDirection, (value) => $scrollDirection = value);
  $$unsubscribe_scrollTop = subscribe(scrollTop, (value) => $scrollTop = value);
  $$unsubscribe_isLargeScreen = subscribe(isLargeScreen, (value) => $isLargeScreen = value);
  $$unsubscribe_kitDocs = subscribe(kitDocs, (value) => $kitDocs = value);
  let { navigation = null } = $$props;
  let { navbar } = $$props;
  let { sidebar = null } = $$props;
  let { i18n = null } = $$props;
  let { isSidebarOpen = false } = $$props;
  let { isNavPopoverOpen = false } = $$props;
  let { search = false } = $$props;
  const navigatonContext = writable();
  $$unsubscribe_navigatonContext = subscribe(navigatonContext, (value) => $navigatonContext = value);
  setNavigationContext(navigatonContext);
  const navbarContext = writable();
  $$unsubscribe_navbarContext = subscribe(navbarContext, (value) => $navbarContext = value);
  setNavbarContext(navbarContext);
  const sidebarConfig = writable();
  $$unsubscribe_sidebarConfig = subscribe(sidebarConfig, (value) => $sidebarConfig = value);
  setSidebarContext(createSidebarContext(sidebarConfig));
  const i18nContext = writable();
  $$unsubscribe_i18nContext = subscribe(i18nContext, (value) => $i18nContext = value);
  setI18nContext(i18nContext);
  const { activeCategory, allLinks: sidebarLinks, activeLink, nextLink, previousLink } = getSidebarContext();
  $$unsubscribe_activeCategory = subscribe(activeCategory, (value) => $activeCategory = value);
  $$unsubscribe_sidebarLinks = subscribe(sidebarLinks, (value) => $sidebarLinks = value);
  $$unsubscribe_activeLink = subscribe(activeLink, (value) => $activeLink = value);
  $$unsubscribe_nextLink = subscribe(nextLink, (value) => $nextLink = value);
  $$unsubscribe_previousLink = subscribe(previousLink, (value) => $previousLink = value);
  if ($$props.navigation === void 0 && $$bindings.navigation && navigation !== void 0)
    $$bindings.navigation(navigation);
  if ($$props.navbar === void 0 && $$bindings.navbar && navbar !== void 0)
    $$bindings.navbar(navbar);
  if ($$props.sidebar === void 0 && $$bindings.sidebar && sidebar !== void 0)
    $$bindings.sidebar(sidebar);
  if ($$props.i18n === void 0 && $$bindings.i18n && i18n !== void 0)
    $$bindings.i18n(i18n);
  if ($$props.isSidebarOpen === void 0 && $$bindings.isSidebarOpen && isSidebarOpen !== void 0)
    $$bindings.isSidebarOpen(isSidebarOpen);
  if ($$props.isNavPopoverOpen === void 0 && $$bindings.isNavPopoverOpen && isNavPopoverOpen !== void 0)
    $$bindings.isNavPopoverOpen(isNavPopoverOpen);
  if ($$props.search === void 0 && $$bindings.search && search !== void 0)
    $$bindings.search(search);
  set_store_value(
    navigatonContext,
    $navigatonContext = {
      ...DEFAULT_NAVIGATION_CONFIG,
      ...navigation
    },
    $navigatonContext
  );
  set_store_value(navbarContext, $navbarContext = navbar ? navbar : { links: [] }, $navbarContext);
  set_store_value(sidebarConfig, $sidebarConfig = sidebar, $sidebarConfig);
  set_store_value(i18nContext, $i18nContext = { ...DEFAULT_I18N_TRANSLATIONS, ...i18n }, $i18nContext);
  collapseNavbar = $isLargeScreen ? false : $scrollTop > 60 && $scrollDirection === "down";
  showSidebar = $sidebarLinks.length > 0;
  showBottomNav = showSidebar || $activeLink;
  $$unsubscribe_activeLink();
  $$unsubscribe_sidebarLinks();
  $$unsubscribe_scrollDirection();
  $$unsubscribe_scrollTop();
  $$unsubscribe_isLargeScreen();
  $$unsubscribe_i18nContext();
  $$unsubscribe_sidebarConfig();
  $$unsubscribe_navbarContext();
  $$unsubscribe_navigatonContext();
  $$unsubscribe_kitDocs();
  $$unsubscribe_activeCategory();
  $$unsubscribe_previousLink();
  $$unsubscribe_nextLink();
  return `<div class="kit-docs bg-body text-inverse min-h-full min-w-full h-full transition-transform duration-150 ease-out"${add_attribute("style", clsx("font-family: var(--kd-font-family-sans, inherit);", !showBottomNav && "--kd-breadcrumbs-height: 0px;", `--kd--navbar-height: calc(var(--kd-navbar-height) + var(--kd-breadcrumbs-height));`), 0)}>${navbar ? `<div${add_attribute(
    "class",
    clsx("fixed top-0 z-30 w-full flex-none transform-gpu transition-transform duration-150 ease-out", isNavPopoverOpen ? "" : "blur-bg", collapseNavbar ? "-translate-y-[calc(calc(var(--kd--navbar-height)-var(--kd-breadcrumbs-height))+1px)]" : "translate-y-0"),
    0
  )} style="border-bottom: var(--kd-navbar-border-bottom);">${validate_component(Navbar$1, "Navbar").$$render($$result, { search }, {}, {
    "popover-bottom": () => {
      return `${slots["navbar-popover-bottom"] ? slots["navbar-popover-bottom"]({}) : ``} `;
    },
    "popover-options": () => {
      return `${slots["navbar-popover-options"] ? slots["navbar-popover-options"]({}) : ``} `;
    },
    "popover-middle": () => {
      return `${slots["navbar-popover-middle"] ? slots["navbar-popover-middle"]({}) : ``} `;
    },
    "popover-top": () => {
      return `${slots["navbar-popover-top"] ? slots["navbar-popover-top"]({}) : ``} `;
    },
    bottom: () => {
      return `${showBottomNav ? `<div class="border-border 992:hidden flex w-full items-center mt-4 pt-4 border-t">${showSidebar ? `<button id="main-sidebar-button" type="button" class="text-soft hover:text-inverse inline-flex justify-center rounded-md p-2 text-sm font-medium" aria-controls="main-sidebar"${add_attribute("aria-expanded", ariaBool(isSidebarOpen), 0)} aria-haspopup="true"><span class="sr-only">${escape($i18nContext.nav.openSidebar)}</span> ${validate_component(Menu_unfold_fill, "MenuUnfoldIcon").$$render($$result, { width: "28", height: "28" }, {}, {})}</button>` : ``} ${$activeLink || $kitDocs.meta?.title ? `<ol${add_attribute("class", clsx("text-md text-soft flex items-center whitespace-nowrap leading-6", showSidebar ? "mt-px ml-2.5" : "mt-2"), 0)}>${$activeCategory && $activeCategory !== "." ? `<li class="flex items-center">${escape($activeCategory)} ${validate_component(Arrow_right_s_line, "RightArrowIcon").$$render($$result, { class: "mx-1", width: "16", height: "16" }, {}, {})}</li>` : ``} <li class="truncate font-semibold text-slate-900 dark:text-slate-200">${escape($activeLink?.title || $kitDocs.meta?.title)}</li></ol>` : ``}</div>` : ``} ${slots["navbar-bottom"] ? slots["navbar-bottom"]({}) : ``} `;
    },
    "right-alt": () => {
      return `${slots["navbar-right-alt"] ? slots["navbar-right-alt"]({}) : ``} `;
    },
    right: () => {
      return `${slots["navbar-right"] ? slots["navbar-right"]({}) : ``} `;
    },
    left: () => {
      return `${slots["navbar-left"] ? slots["navbar-left"]({}) : ``} `;
    },
    search: () => {
      return `${slots.search ? slots.search({}) : ``}`;
    }
  })}</div>` : ``} <div${add_attribute("class", clsx("mx-auto w-full flex flex-row min-h-full max-w-[var(--kd-content-max-width)]", navbar && "pt-[var(--kd--navbar-height)] z-20"), 0)}>${showSidebar ? `${validate_component(Sidebar$1, "Sidebar").$$render(
    $$result,
    {
      search,
      class: ({ open }) => clsx("self-start fixed top-0 left-0 transform bg-body z-50 border-border border-r scrollbar", "-translate-x-full transform transition-transform duration-200 ease-out will-change-transform", "max-h-screen min-h-screen min-w-[var(--kd-sidebar-min-width)] max-w-[var(--kd-sidebar-max-width)]", "992:translate-x-0 922:block 992:sticky 992:z-0 overflow-y-auto p-[var(--kd-sidebar-padding)]", open && "translate-x-0", navbar ? "992:top-[var(--kd--navbar-height)] 992:min-h-[calc(100vh-var(--kd--navbar-height))] 992:max-h-[calc(100vh-var(--kd--navbar-height))]" : "992:top-0 min-h-screen max-h-screen"),
      open: isSidebarOpen
    },
    {},
    {
      search: () => {
        return `${slots.search ? slots.search({}) : ``} `;
      },
      bottom: () => {
        return `${slots["sidebar-bottom"] ? slots["sidebar-bottom"]({}) : ``} `;
      },
      top: () => {
        return `${slots["sidebar-top"] ? slots["sidebar-top"]({}) : ``}`;
      }
    }
  )}` : ``} <main${add_attribute(
    "class",
    clsx(
      "w-full overflow-x-hidden",
      navbar ? `992:min-h-[calc(100vh-var(--kd--navbar-height))]` : "min-h-screen",
      navbar && "min-h-[calc(100vh-var(--kd--navbar-height))]",
      $kitDocs.meta && (showSidebar ? "px-8 992:px-16" : "px-6"),
      $kitDocs.meta && (navbar || showBottomNav ? "pt-8" : "")
    ),
    0
  )}${add_attribute(
    "style",
    clsx(`max-width: ${$kitDocs.meta ? "var(--kd-main-max-width, var(--kd-article-max-width))" : "var(--kd-main-max-width)"};`),
    0
  )}>${slots["main-top"] ? slots["main-top"]({}) : ``} ${$kitDocs.meta ? `<article class="markdown prose dark:prose-invert z-10 max-w-[var(--kd-article-max-width)]">${$activeCategory && $activeCategory !== "." ? `<p class="text-brand mb-3.5 text-[15px] font-semibold leading-6">${escape($activeCategory)}</p>` : ``} ${slots.default ? slots.default({}) : ``}</article>` : `${slots.default ? slots.default({}) : ``}`} ${$previousLink || $nextLink ? `<hr class="border-border mt-20"> <div class="992:text-xl flex items-center pt-12 pb-20 text-lg font-semibold text-gray-300">${$previousLink ? `<div class="mb-4 flex flex-col items-start"><span class="text-inverse ml-3 mb-4 inline-block">${escape($i18nContext.nav.previous)}</span> ${validate_component(Button$1, "Button").$$render(
    $$result,
    {
      arrow: "left",
      href: $previousLink.slug,
      class: "hover:text-inverse",
      "data-sveltekit-prefetch": true
    },
    {},
    {
      default: () => {
        return `${escape($previousLink.title)}`;
      }
    }
  )}</div>` : ``} ${$nextLink ? `<div class="ml-auto mb-4 flex flex-col items-end"><span class="text-inverse mr-3 mb-4 inline-block">${escape($i18nContext.nav.next)}</span> ${validate_component(Button$1, "Button").$$render(
    $$result,
    {
      arrow: "right",
      href: $nextLink.slug,
      class: "hover:text-inverse",
      "data-sveltekit-prefetch": true
    },
    {},
    {
      default: () => {
        return `${escape($nextLink.title)}`;
      }
    }
  )}</div>` : ``}</div>` : ``} ${slots["main-bottom"] ? slots["main-bottom"]({}) : ``}</main> <div class="992:flex-1"></div> ${validate_component(OnThisPage$1, "OnThisPage").$$render(
    $$result,
    {
      class: clsx("pt-8 pb-8 hidden overflow-auto min-w-[160px] sticky right-4 pr-4 1440:right-6 1440:pr-2 1280:block pl-0.5", navbar ? "top-[var(--kd--navbar-height)] max-h-[calc(100vh-var(--kd--navbar-height))]" : "top-0 max-h-screen")
    },
    {},
    {}
  )}</div></div>`;
});
const KitDocsLayout$1 = KitDocsLayout;
const css = {
  code: ":root{--kd-color-brand-rgb:234, 88, 12}:root.dark{--kd-color-brand-rgb:213, 149, 76}.logo.svelte-1616dhh a{display:flex;align-items:center;justify-content:center}.logo.svelte-1616dhh{display:flex;align-items:center;justify-content:center}.logo.svelte-1616dhh svg{height:36px;overflow:hidden}.bookName.svelte-1616dhh{font-size:20px;font-weight:bolder;color:tomato}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let meta;
  let sidebar;
  let category;
  let title;
  let description;
  let bookName;
  let $page, $$unsubscribe_page;
  let $activeCategory, $$unsubscribe_activeCategory;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const navbar = {
    links: [
      {
        title: "Frequently Asked Questions",
        slug: "/faqs",
        match: /\/faqs/
      },
      {
        title: "Recording Your Data",
        slug: "/recording-your-data",
        match: /\/recording-your-data/
      },
      {
        title: "Using Your Data",
        slug: "/using-your-data",
        match: /\/using-your-data/
      },
      {
        title: "Messaging",
        slug: "/messaging",
        match: /\/messaging/
      }
    ]
  };
  const { activeCategory } = createSidebarContext(sidebar);
  $$unsubscribe_activeCategory = subscribe(activeCategory, (value) => $activeCategory = value);
  const bookNames = {
    faqs: "Frequently Asked Questions",
    "recording-your-data": "Recording Your Data",
    "using-your-data": "Using Your Data",
    messaging: "Messaging"
  };
  let book = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  ({ meta, sidebar } = data);
  category = $activeCategory ? `${$activeCategory}: ` : "";
  title = meta ? `${category}${meta.title} | KitDocs` : null;
  description = meta?.description;
  book = $page.url.pathname.split("/")[1];
  bookName = bookNames[book];
  $$unsubscribe_page();
  $$unsubscribe_activeCategory();
  return `${$$result.head += `<!-- HEAD_svelte-18oalgx_START -->${title ? `${$$result.title = `<title>${escape(title)}</title>`, ""}` : ``} ${description ? `<meta name="description"${add_attribute("content", description, 0)}>` : ``}<!-- HEAD_svelte-18oalgx_END -->`, ""} ${validate_component(KitDocs$1, "KitDocs").$$render($$result, { meta }, {}, {
    default: () => {
      return `${validate_component(KitDocsLayout$1, "KitDocsLayout").$$render($$result, { navbar, sidebar }, {}, {
        "main-bottom": () => {
          return `<div slot="main-bottom" data-svelte-h="svelte-1kg7zek">Main Bottom</div>`;
        },
        "main-top": () => {
          return `<div slot="main-top" data-svelte-h="svelte-11jzwts">Main Top</div>`;
        },
        "sidebar-top": () => {
          return `<div slot="sidebar-top"><h1 class="bookName svelte-1616dhh">${escape(bookName)}</h1></div>`;
        },
        "navbar-left": () => {
          return `<div class="logo svelte-1616dhh" slot="navbar-left" data-svelte-h="svelte-n43v6b"><a href="/"><img height="24" src="/SOCLogo_quarter.png" alt="SOC Documentation"> <h1 style="padding-left: 20px; font-size: 1.5em; color:#050B17">SOC Documentation</h1></a></div>`;
        },
        "navbar-right-alt": () => {
          return `<div class="socials" slot="navbar-right-alt">${validate_component(SocialLink$1, "SocialLink").$$render(
            $$result,
            {
              type: "gitHub",
              href: "https://github.com/sveltejs/svelte"
            },
            {},
            {}
          )}</div>`;
        },
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })}`;
    }
  })}`;
});
export {
  Layout as default
};
