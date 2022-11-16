/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppRoot {
    }
    interface TodoInput {
    }
    interface TodoItem {
        "checked": boolean;
        "text": string;
    }
}
export interface TodoInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLTodoInputElement;
}
export interface TodoItemCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLTodoItemElement;
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLTodoInputElement extends Components.TodoInput, HTMLStencilElement {
    }
    var HTMLTodoInputElement: {
        prototype: HTMLTodoInputElement;
        new (): HTMLTodoInputElement;
    };
    interface HTMLTodoItemElement extends Components.TodoItem, HTMLStencilElement {
    }
    var HTMLTodoItemElement: {
        prototype: HTMLTodoItemElement;
        new (): HTMLTodoItemElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "todo-input": HTMLTodoInputElement;
        "todo-item": HTMLTodoItemElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
    }
    interface TodoInput {
        "onInputSubmit"?: (event: TodoInputCustomEvent<any>) => void;
    }
    interface TodoItem {
        "checked"?: boolean;
        "onItemCheck"?: (event: TodoItemCustomEvent<any>) => void;
        "onItemRemove"?: (event: TodoItemCustomEvent<any>) => void;
        "text"?: string;
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "todo-input": TodoInput;
        "todo-item": TodoItem;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "todo-input": LocalJSX.TodoInput & JSXBase.HTMLAttributes<HTMLTodoInputElement>;
            "todo-item": LocalJSX.TodoItem & JSXBase.HTMLAttributes<HTMLTodoItemElement>;
        }
    }
}
