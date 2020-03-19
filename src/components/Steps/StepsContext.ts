import { createContext, Context } from 'react';

interface StepsContext {
    registerStep: Function;
}

export const StepsContext: Context<StepsContext> = createContext<StepsContext>({ registerStep: () => { } });