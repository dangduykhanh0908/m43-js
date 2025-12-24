export const getElement = <T extends Element> (Selector:string): T | null => document.querySelector<T>(Selector);

export {};