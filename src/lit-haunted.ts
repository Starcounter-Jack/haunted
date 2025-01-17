import { html, render } from 'lit';
import haunted from './core.js';
import { makeVirtual } from './virtual.js';

const { component, createContext } = haunted({ render });

const virtual = makeVirtual();

export {
    component,
    createContext,
    virtual,
    html,
    render
};
