import { State, Callable } from './state.js';
import { layoutEffectsSymbol } from './symbols.js';
import { createEffect } from './create-effect.js';

function setLayoutEffects(state: State, cb: Callable) {
    state[layoutEffectsSymbol].push(cb);
}

/**
 * @function
 * @param  {Effect} callback effecting callback
 * @param  {unknown[]} [values] dependencies to the effect
 * @return {void}
 */
const useLayoutEffect = createEffect(setLayoutEffects);

export { useLayoutEffect };
