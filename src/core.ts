import { makeComponent, ComponentCreator } from './component.js';
import { makeContext, ContextCreator } from './create-context.js';
import { ChildPart } from 'lit/html';

type Component<P> = HTMLElement & P;

type ComponentOrVirtualComponent<
    T extends HTMLElement | ChildPart,
    P extends object
> = T extends HTMLElement ? Component<P> : ChildPart;

type GenericRenderer<T extends HTMLElement | ChildPart, P extends object = {}> =
    (this: ComponentOrVirtualComponent<T, P>, ...args: any[]) => unknown | void;
type RenderFunction = (result: unknown, container: DocumentFragment | HTMLElement) => void;

interface Options {
    render: RenderFunction;
}

function haunted({ render }: Options): { component: ComponentCreator, createContext: ContextCreator } {
    const component = makeComponent(render);
    const createContext = makeContext(component);

    return { component, createContext };
}

export { haunted as default, Options, GenericRenderer, RenderFunction, ComponentOrVirtualComponent };
export { useCallback } from './use-callback.js';
export { useController } from './use-controller.js';
export { useEffect } from './use-effect.js';
export { useLayoutEffect } from './use-layout-effect.js';
export { useState } from './use-state.js';
export { useReducer } from './use-reducer.js';
export { useMemo } from './use-memo.js';
export { useContext } from './use-context.js';
export { useRef } from './use-ref.js';
export { hook, Hook } from './hook.js';
export { BaseScheduler } from './scheduler.js';
export { State } from './state.js';
