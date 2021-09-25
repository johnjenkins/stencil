/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { CarData } from "./car-list/car-data";
import { AnimationBuilder, Color, RouterDirection, RouterEventDetail } from "../node_modules/ionic-git/core/src/interface.d";
import { NavigationHookCallback } from "../node_modules/ionic-git/core/src/components/route/route-interface";
import { Title } from "./mixin-cmp/interfaces";
export namespace Components {
    interface AppRoot {
    }
    interface BuildData {
    }
    interface CarDetail {
        "car": CarData;
    }
    interface CarList {
        "cars": CarData[];
        "selected": CarData;
    }
    interface DomApi {
    }
    interface DomInteraction {
    }
    interface DomVisible {
    }
    interface ElementCmp {
    }
    interface EnvData {
    }
    interface EventCmp {
        "methodThatFiresEventWithOptions": () => Promise<void>;
        "methodThatFiresMyDocumentEvent": () => Promise<void>;
        "methodThatFiresMyWindowEvent": (value: number) => Promise<void>;
    }
    interface ImportAssets {
    }
    interface IonButton {
        /**
          * The type of button.
         */
        "buttonType": string;
        /**
          * The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics).
         */
        "color"?: Color;
        /**
          * If `true`, the user cannot interact with the button.
         */
        "disabled": boolean;
        /**
          * This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want).
         */
        "download": string | undefined;
        /**
          * Set to `"block"` for a full-width button or to `"full"` for a full-width button without left and right borders.
         */
        "expand"?: 'full' | 'block';
        /**
          * Set to `"clear"` for a transparent button, to `"outline"` for a transparent button with a border, or to `"solid"`. The default style is `"solid"` except inside of a toolbar, where the default is `"clear"`.
         */
        "fill"?: 'clear' | 'outline' | 'solid' | 'default';
        /**
          * Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.
         */
        "href": string | undefined;
        /**
          * The mode determines which platform styles to use.
         */
        "mode"?: "ios" | "md";
        /**
          * Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
         */
        "rel": string | undefined;
        /**
          * When using a router, it specifies the transition animation when navigating to another page using `href`.
         */
        "routerAnimation": AnimationBuilder | undefined;
        /**
          * When using a router, it specifies the transition direction when navigating to another page using `href`.
         */
        "routerDirection": RouterDirection;
        /**
          * The button shape.
         */
        "shape"?: 'round';
        /**
          * The button size.
         */
        "size"?: 'small' | 'default' | 'large';
        /**
          * If `true`, activates a button with a heavier font weight.
         */
        "strong": boolean;
        /**
          * Specifies where to display the linked URL. Only applies when an `href` is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
         */
        "target": string | undefined;
        /**
          * The type of the button.
         */
        "type": 'submit' | 'reset' | 'button';
    }
    interface IonRoute {
        /**
          * A navigation hook that is fired when the route tries to enter. Returning `true` allows the navigation to proceed, while returning `false` causes it to be cancelled. Returning a `NavigationHookOptions` object causes the router to redirect to the path specified.
         */
        "beforeEnter"?: NavigationHookCallback;
        /**
          * A navigation hook that is fired when the route tries to leave. Returning `true` allows the navigation to proceed, while returning `false` causes it to be cancelled. Returning a `NavigationHookOptions` object causes the router to redirect to the path specified.
         */
        "beforeLeave"?: NavigationHookCallback;
        /**
          * Name of the component to load/select in the navigation outlet (`ion-tabs`, `ion-nav`) when the route matches.  The value of this property is not always the tagname of the component to load, in `ion-tabs` it actually refers to the name of the `ion-tab` to select.
         */
        "component": string;
        /**
          * A key value `{ 'red': true, 'blue': 'white'}` containing props that should be passed to the defined component when rendered.
         */
        "componentProps"?: {[key: string]: any};
        /**
          * Relative path that needs to match in order for this route to apply.  Accepts paths similar to expressjs so that you can define parameters in the url /foo/:bar where bar would be available in incoming props.
         */
        "url": string;
    }
    interface IonRouter {
        /**
          * Go back to previous page in the window.history.
         */
        "back": () => Promise<void>;
        "canTransition": () => Promise<string | boolean>;
        "navChanged": (direction: RouterDirection) => Promise<boolean>;
        "printDebug": () => Promise<void>;
        /**
          * Navigate to the specified URL.
          * @param url The url to navigate to.
          * @param direction The direction of the animation. Defaults to `"forward"`.
         */
        "push": (url: string, direction?: RouterDirection, animation?: AnimationBuilder) => Promise<boolean>;
        /**
          * The root path to use when matching URLs. By default, this is set to "/", but you can specify an alternate prefix for all URL paths.
         */
        "root": string;
        /**
          * The router can work in two "modes": - With hash: `/index.html#/path/to/page` - Without hash: `/path/to/page`  Using one or another might depend in the requirements of your app and/or where it's deployed.  Usually "hash-less" navigation works better for SEO and it's more user friendly too, but it might requires additional server-side configuration in order to properly work.  On the other side hash-navigation is much easier to deploy, it even works over the file protocol.  By default, this property is `true`, change to `false` to allow hash-less URLs.
         */
        "useHash": boolean;
    }
    interface ListenCmp {
        "opened": boolean;
    }
    interface MethodCmp {
        "someMethod": () => Promise<number>;
        "someMethodWithArgs": (unit: string, value: number) => Promise<string>;
        "someProp": number;
    }
    interface MixedInCmp {
        "middleName": string;
    }
    interface MixinCmp {
        /**
          * The type of button.
         */
        "buttonType": string;
        /**
          * The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics).
         */
        "color"?: Color;
        /**
          * If `true`, the user cannot interact with the button.
         */
        "disabled": boolean;
        /**
          * This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want).
         */
        "download": string | undefined;
        /**
          * Set to `"block"` for a full-width button or to `"full"` for a full-width button without left and right borders.
         */
        "expand"?: 'full' | 'block';
        /**
          * Set to `"clear"` for a transparent button, to `"outline"` for a transparent button with a border, or to `"solid"`. The default style is `"solid"` except inside of a toolbar, where the default is `"clear"`.
         */
        "fill"?: 'clear' | 'outline' | 'solid' | 'default';
        "firstName": string;
        /**
          * Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.
         */
        "href": string | undefined;
        "middleName": string;
        "nameTitle": Title;
        /**
          * Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
         */
        "rel": string | undefined;
        /**
          * When using a router, it specifies the transition animation when navigating to another page using `href`.
         */
        "routerAnimation": AnimationBuilder | undefined;
        /**
          * When using a router, it specifies the transition direction when navigating to another page using `href`.
         */
        "routerDirection": RouterDirection;
        /**
          * The button shape.
         */
        "shape"?: 'round';
        /**
          * The button size.
         */
        "size"?: 'small' | 'default' | 'large';
        /**
          * If `true`, activates a button with a heavier font weight.
         */
        "strong": boolean;
        "surname": string;
        "surnameWithTitle": () => Promise<string>;
        /**
          * Specifies where to display the linked URL. Only applies when an `href` is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
         */
        "target": string | undefined;
        /**
          * The type of the button.
         */
        "type": 'submit' | 'reset' | 'button';
    }
    interface PathAliasCmp {
    }
    interface PrerenderCmp {
        "mixinTest": string;
    }
    interface PropCmp {
        "clothes": string;
        "first": string;
        "fullName": string;
        "lastName": string;
        /**
          * Mode
         */
        "mode"?: any;
    }
    interface SlotCmp {
    }
    interface SlotCmpContainer {
    }
    interface SlotParentCmp {
        "label": string;
    }
    interface StateCmp {
    }
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLBuildDataElement extends Components.BuildData, HTMLStencilElement {
    }
    var HTMLBuildDataElement: {
        prototype: HTMLBuildDataElement;
        new (): HTMLBuildDataElement;
    };
    interface HTMLCarDetailElement extends Components.CarDetail, HTMLStencilElement {
    }
    var HTMLCarDetailElement: {
        prototype: HTMLCarDetailElement;
        new (): HTMLCarDetailElement;
    };
    interface HTMLCarListElement extends Components.CarList, HTMLStencilElement {
    }
    var HTMLCarListElement: {
        prototype: HTMLCarListElement;
        new (): HTMLCarListElement;
    };
    interface HTMLDomApiElement extends Components.DomApi, HTMLStencilElement {
    }
    var HTMLDomApiElement: {
        prototype: HTMLDomApiElement;
        new (): HTMLDomApiElement;
    };
    interface HTMLDomInteractionElement extends Components.DomInteraction, HTMLStencilElement {
    }
    var HTMLDomInteractionElement: {
        prototype: HTMLDomInteractionElement;
        new (): HTMLDomInteractionElement;
    };
    interface HTMLDomVisibleElement extends Components.DomVisible, HTMLStencilElement {
    }
    var HTMLDomVisibleElement: {
        prototype: HTMLDomVisibleElement;
        new (): HTMLDomVisibleElement;
    };
    interface HTMLElementCmpElement extends Components.ElementCmp, HTMLStencilElement {
    }
    var HTMLElementCmpElement: {
        prototype: HTMLElementCmpElement;
        new (): HTMLElementCmpElement;
    };
    interface HTMLEnvDataElement extends Components.EnvData, HTMLStencilElement {
    }
    var HTMLEnvDataElement: {
        prototype: HTMLEnvDataElement;
        new (): HTMLEnvDataElement;
    };
    interface HTMLEventCmpElement extends Components.EventCmp, HTMLStencilElement {
    }
    var HTMLEventCmpElement: {
        prototype: HTMLEventCmpElement;
        new (): HTMLEventCmpElement;
    };
    interface HTMLImportAssetsElement extends Components.ImportAssets, HTMLStencilElement {
    }
    var HTMLImportAssetsElement: {
        prototype: HTMLImportAssetsElement;
        new (): HTMLImportAssetsElement;
    };
    interface HTMLIonButtonElement extends Components.IonButton, HTMLStencilElement {
    }
    var HTMLIonButtonElement: {
        prototype: HTMLIonButtonElement;
        new (): HTMLIonButtonElement;
    };
    interface HTMLIonRouteElement extends Components.IonRoute, HTMLStencilElement {
    }
    var HTMLIonRouteElement: {
        prototype: HTMLIonRouteElement;
        new (): HTMLIonRouteElement;
    };
    interface HTMLIonRouterElement extends Components.IonRouter, HTMLStencilElement {
    }
    var HTMLIonRouterElement: {
        prototype: HTMLIonRouterElement;
        new (): HTMLIonRouterElement;
    };
    interface HTMLListenCmpElement extends Components.ListenCmp, HTMLStencilElement {
    }
    var HTMLListenCmpElement: {
        prototype: HTMLListenCmpElement;
        new (): HTMLListenCmpElement;
    };
    interface HTMLMethodCmpElement extends Components.MethodCmp, HTMLStencilElement {
    }
    var HTMLMethodCmpElement: {
        prototype: HTMLMethodCmpElement;
        new (): HTMLMethodCmpElement;
    };
    interface HTMLMixedInCmpElement extends Components.MixedInCmp, HTMLStencilElement {
    }
    var HTMLMixedInCmpElement: {
        prototype: HTMLMixedInCmpElement;
        new (): HTMLMixedInCmpElement;
    };
    interface HTMLMixinCmpElement extends Components.MixinCmp, HTMLStencilElement {
    }
    var HTMLMixinCmpElement: {
        prototype: HTMLMixinCmpElement;
        new (): HTMLMixinCmpElement;
    };
    interface HTMLPathAliasCmpElement extends Components.PathAliasCmp, HTMLStencilElement {
    }
    var HTMLPathAliasCmpElement: {
        prototype: HTMLPathAliasCmpElement;
        new (): HTMLPathAliasCmpElement;
    };
    interface HTMLPrerenderCmpElement extends Components.PrerenderCmp, HTMLStencilElement {
    }
    var HTMLPrerenderCmpElement: {
        prototype: HTMLPrerenderCmpElement;
        new (): HTMLPrerenderCmpElement;
    };
    interface HTMLPropCmpElement extends Components.PropCmp, HTMLStencilElement {
    }
    var HTMLPropCmpElement: {
        prototype: HTMLPropCmpElement;
        new (): HTMLPropCmpElement;
    };
    interface HTMLSlotCmpElement extends Components.SlotCmp, HTMLStencilElement {
    }
    var HTMLSlotCmpElement: {
        prototype: HTMLSlotCmpElement;
        new (): HTMLSlotCmpElement;
    };
    interface HTMLSlotCmpContainerElement extends Components.SlotCmpContainer, HTMLStencilElement {
    }
    var HTMLSlotCmpContainerElement: {
        prototype: HTMLSlotCmpContainerElement;
        new (): HTMLSlotCmpContainerElement;
    };
    interface HTMLSlotParentCmpElement extends Components.SlotParentCmp, HTMLStencilElement {
    }
    var HTMLSlotParentCmpElement: {
        prototype: HTMLSlotParentCmpElement;
        new (): HTMLSlotParentCmpElement;
    };
    interface HTMLStateCmpElement extends Components.StateCmp, HTMLStencilElement {
    }
    var HTMLStateCmpElement: {
        prototype: HTMLStateCmpElement;
        new (): HTMLStateCmpElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "build-data": HTMLBuildDataElement;
        "car-detail": HTMLCarDetailElement;
        "car-list": HTMLCarListElement;
        "dom-api": HTMLDomApiElement;
        "dom-interaction": HTMLDomInteractionElement;
        "dom-visible": HTMLDomVisibleElement;
        "element-cmp": HTMLElementCmpElement;
        "env-data": HTMLEnvDataElement;
        "event-cmp": HTMLEventCmpElement;
        "import-assets": HTMLImportAssetsElement;
        "ion-button": HTMLIonButtonElement;
        "ion-route": HTMLIonRouteElement;
        "ion-router": HTMLIonRouterElement;
        "listen-cmp": HTMLListenCmpElement;
        "method-cmp": HTMLMethodCmpElement;
        "mixed-in-cmp": HTMLMixedInCmpElement;
        "mixin-cmp": HTMLMixinCmpElement;
        "path-alias-cmp": HTMLPathAliasCmpElement;
        "prerender-cmp": HTMLPrerenderCmpElement;
        "prop-cmp": HTMLPropCmpElement;
        "slot-cmp": HTMLSlotCmpElement;
        "slot-cmp-container": HTMLSlotCmpContainerElement;
        "slot-parent-cmp": HTMLSlotParentCmpElement;
        "state-cmp": HTMLStateCmpElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
    }
    interface BuildData {
    }
    interface CarDetail {
        "car"?: CarData;
    }
    interface CarList {
        "cars"?: CarData[];
        "onCarSelected"?: (event: CustomEvent<CarData>) => void;
        "selected"?: CarData;
    }
    interface DomApi {
    }
    interface DomInteraction {
    }
    interface DomVisible {
    }
    interface ElementCmp {
    }
    interface EnvData {
    }
    interface EventCmp {
        "onMy-event-with-options"?: (event: CustomEvent<{ mph: number }>) => void;
        "onMyDocumentEvent"?: (event: CustomEvent<any>) => void;
        "onMyWindowEvent"?: (event: CustomEvent<number>) => void;
    }
    interface ImportAssets {
    }
    interface IonButton {
        /**
          * The type of button.
         */
        "buttonType"?: string;
        /**
          * The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics).
         */
        "color"?: Color;
        /**
          * If `true`, the user cannot interact with the button.
         */
        "disabled"?: boolean;
        /**
          * This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want).
         */
        "download"?: string | undefined;
        /**
          * Set to `"block"` for a full-width button or to `"full"` for a full-width button without left and right borders.
         */
        "expand"?: 'full' | 'block';
        /**
          * Set to `"clear"` for a transparent button, to `"outline"` for a transparent button with a border, or to `"solid"`. The default style is `"solid"` except inside of a toolbar, where the default is `"clear"`.
         */
        "fill"?: 'clear' | 'outline' | 'solid' | 'default';
        /**
          * Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.
         */
        "href"?: string | undefined;
        /**
          * The mode determines which platform styles to use.
         */
        "mode"?: "ios" | "md";
        /**
          * Emitted when the button loses focus.
         */
        "onIonBlur"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the button has focus.
         */
        "onIonFocus"?: (event: CustomEvent<void>) => void;
        /**
          * Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
         */
        "rel"?: string | undefined;
        /**
          * When using a router, it specifies the transition animation when navigating to another page using `href`.
         */
        "routerAnimation"?: AnimationBuilder | undefined;
        /**
          * When using a router, it specifies the transition direction when navigating to another page using `href`.
         */
        "routerDirection"?: RouterDirection;
        /**
          * The button shape.
         */
        "shape"?: 'round';
        /**
          * The button size.
         */
        "size"?: 'small' | 'default' | 'large';
        /**
          * If `true`, activates a button with a heavier font weight.
         */
        "strong"?: boolean;
        /**
          * Specifies where to display the linked URL. Only applies when an `href` is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
         */
        "target"?: string | undefined;
        /**
          * The type of the button.
         */
        "type"?: 'submit' | 'reset' | 'button';
    }
    interface IonRoute {
        /**
          * A navigation hook that is fired when the route tries to enter. Returning `true` allows the navigation to proceed, while returning `false` causes it to be cancelled. Returning a `NavigationHookOptions` object causes the router to redirect to the path specified.
         */
        "beforeEnter"?: NavigationHookCallback;
        /**
          * A navigation hook that is fired when the route tries to leave. Returning `true` allows the navigation to proceed, while returning `false` causes it to be cancelled. Returning a `NavigationHookOptions` object causes the router to redirect to the path specified.
         */
        "beforeLeave"?: NavigationHookCallback;
        /**
          * Name of the component to load/select in the navigation outlet (`ion-tabs`, `ion-nav`) when the route matches.  The value of this property is not always the tagname of the component to load, in `ion-tabs` it actually refers to the name of the `ion-tab` to select.
         */
        "component": string;
        /**
          * A key value `{ 'red': true, 'blue': 'white'}` containing props that should be passed to the defined component when rendered.
         */
        "componentProps"?: {[key: string]: any};
        /**
          * Used internally by `ion-router` to know when this route did change.
         */
        "onIonRouteDataChanged"?: (event: CustomEvent<any>) => void;
        /**
          * Relative path that needs to match in order for this route to apply.  Accepts paths similar to expressjs so that you can define parameters in the url /foo/:bar where bar would be available in incoming props.
         */
        "url"?: string;
    }
    interface IonRouter {
        /**
          * Emitted when the route had changed
         */
        "onIonRouteDidChange"?: (event: CustomEvent<RouterEventDetail>) => void;
        /**
          * Event emitted when the route is about to change
         */
        "onIonRouteWillChange"?: (event: CustomEvent<RouterEventDetail>) => void;
        /**
          * The root path to use when matching URLs. By default, this is set to "/", but you can specify an alternate prefix for all URL paths.
         */
        "root"?: string;
        /**
          * The router can work in two "modes": - With hash: `/index.html#/path/to/page` - Without hash: `/path/to/page`  Using one or another might depend in the requirements of your app and/or where it's deployed.  Usually "hash-less" navigation works better for SEO and it's more user friendly too, but it might requires additional server-side configuration in order to properly work.  On the other side hash-navigation is much easier to deploy, it even works over the file protocol.  By default, this property is `true`, change to `false` to allow hash-less URLs.
         */
        "useHash"?: boolean;
    }
    interface ListenCmp {
        "opened"?: boolean;
    }
    interface MethodCmp {
        "someProp"?: number;
    }
    interface MixedInCmp {
        "middleName"?: string;
    }
    interface MixinCmp {
        /**
          * The type of button.
         */
        "buttonType"?: string;
        /**
          * The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics).
         */
        "color"?: Color;
        /**
          * If `true`, the user cannot interact with the button.
         */
        "disabled"?: boolean;
        /**
          * This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want).
         */
        "download"?: string | undefined;
        /**
          * Set to `"block"` for a full-width button or to `"full"` for a full-width button without left and right borders.
         */
        "expand"?: 'full' | 'block';
        /**
          * Set to `"clear"` for a transparent button, to `"outline"` for a transparent button with a border, or to `"solid"`. The default style is `"solid"` except inside of a toolbar, where the default is `"clear"`.
         */
        "fill"?: 'clear' | 'outline' | 'solid' | 'default';
        "firstName"?: string;
        /**
          * Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.
         */
        "href"?: string | undefined;
        "middleName"?: string;
        "nameTitle"?: Title;
        /**
          * Emitted when the button loses focus.
         */
        "onIonBlur"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the button has focus.
         */
        "onIonFocus"?: (event: CustomEvent<void>) => void;
        /**
          * Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
         */
        "rel"?: string | undefined;
        /**
          * When using a router, it specifies the transition animation when navigating to another page using `href`.
         */
        "routerAnimation"?: AnimationBuilder | undefined;
        /**
          * When using a router, it specifies the transition direction when navigating to another page using `href`.
         */
        "routerDirection"?: RouterDirection;
        /**
          * The button shape.
         */
        "shape"?: 'round';
        /**
          * The button size.
         */
        "size"?: 'small' | 'default' | 'large';
        /**
          * If `true`, activates a button with a heavier font weight.
         */
        "strong"?: boolean;
        "surname"?: string;
        /**
          * Specifies where to display the linked URL. Only applies when an `href` is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
         */
        "target"?: string | undefined;
        /**
          * The type of the button.
         */
        "type"?: 'submit' | 'reset' | 'button';
    }
    interface PathAliasCmp {
    }
    interface PrerenderCmp {
        "mixinTest"?: string;
    }
    interface PropCmp {
        "clothes"?: string;
        "first"?: string;
        "fullName"?: string;
        "lastName"?: string;
        /**
          * Mode
         */
        "mode"?: any;
    }
    interface SlotCmp {
    }
    interface SlotCmpContainer {
    }
    interface SlotParentCmp {
        "label"?: string;
    }
    interface StateCmp {
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "build-data": BuildData;
        "car-detail": CarDetail;
        "car-list": CarList;
        "dom-api": DomApi;
        "dom-interaction": DomInteraction;
        "dom-visible": DomVisible;
        "element-cmp": ElementCmp;
        "env-data": EnvData;
        "event-cmp": EventCmp;
        "import-assets": ImportAssets;
        "ion-button": IonButton;
        "ion-route": IonRoute;
        "ion-router": IonRouter;
        "listen-cmp": ListenCmp;
        "method-cmp": MethodCmp;
        "mixed-in-cmp": MixedInCmp;
        "mixin-cmp": MixinCmp;
        "path-alias-cmp": PathAliasCmp;
        "prerender-cmp": PrerenderCmp;
        "prop-cmp": PropCmp;
        "slot-cmp": SlotCmp;
        "slot-cmp-container": SlotCmpContainer;
        "slot-parent-cmp": SlotParentCmp;
        "state-cmp": StateCmp;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "build-data": LocalJSX.BuildData & JSXBase.HTMLAttributes<HTMLBuildDataElement>;
            "car-detail": LocalJSX.CarDetail & JSXBase.HTMLAttributes<HTMLCarDetailElement>;
            "car-list": LocalJSX.CarList & JSXBase.HTMLAttributes<HTMLCarListElement>;
            "dom-api": LocalJSX.DomApi & JSXBase.HTMLAttributes<HTMLDomApiElement>;
            "dom-interaction": LocalJSX.DomInteraction & JSXBase.HTMLAttributes<HTMLDomInteractionElement>;
            "dom-visible": LocalJSX.DomVisible & JSXBase.HTMLAttributes<HTMLDomVisibleElement>;
            "element-cmp": LocalJSX.ElementCmp & JSXBase.HTMLAttributes<HTMLElementCmpElement>;
            "env-data": LocalJSX.EnvData & JSXBase.HTMLAttributes<HTMLEnvDataElement>;
            "event-cmp": LocalJSX.EventCmp & JSXBase.HTMLAttributes<HTMLEventCmpElement>;
            "import-assets": LocalJSX.ImportAssets & JSXBase.HTMLAttributes<HTMLImportAssetsElement>;
            "ion-button": LocalJSX.IonButton & JSXBase.HTMLAttributes<HTMLIonButtonElement>;
            "ion-route": LocalJSX.IonRoute & JSXBase.HTMLAttributes<HTMLIonRouteElement>;
            "ion-router": LocalJSX.IonRouter & JSXBase.HTMLAttributes<HTMLIonRouterElement>;
            "listen-cmp": LocalJSX.ListenCmp & JSXBase.HTMLAttributes<HTMLListenCmpElement>;
            "method-cmp": LocalJSX.MethodCmp & JSXBase.HTMLAttributes<HTMLMethodCmpElement>;
            "mixed-in-cmp": LocalJSX.MixedInCmp & JSXBase.HTMLAttributes<HTMLMixedInCmpElement>;
            "mixin-cmp": LocalJSX.MixinCmp & JSXBase.HTMLAttributes<HTMLMixinCmpElement>;
            "path-alias-cmp": LocalJSX.PathAliasCmp & JSXBase.HTMLAttributes<HTMLPathAliasCmpElement>;
            "prerender-cmp": LocalJSX.PrerenderCmp & JSXBase.HTMLAttributes<HTMLPrerenderCmpElement>;
            "prop-cmp": LocalJSX.PropCmp & JSXBase.HTMLAttributes<HTMLPropCmpElement>;
            "slot-cmp": LocalJSX.SlotCmp & JSXBase.HTMLAttributes<HTMLSlotCmpElement>;
            "slot-cmp-container": LocalJSX.SlotCmpContainer & JSXBase.HTMLAttributes<HTMLSlotCmpContainerElement>;
            "slot-parent-cmp": LocalJSX.SlotParentCmp & JSXBase.HTMLAttributes<HTMLSlotParentCmpElement>;
            "state-cmp": LocalJSX.StateCmp & JSXBase.HTMLAttributes<HTMLStateCmpElement>;
        }
    }
}
