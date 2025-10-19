declare module 'react' {
  export interface FC<P = {}> {
    (props: P): any;
  }
  
  export class Component<P = {}, S = {}> {
    props: P;
    state: S;
    context: any;
    refs: any;
    constructor(props: P);
    setState(state: Partial<S> | ((prevState: S) => Partial<S>)): void;
    forceUpdate(callback?: () => void): void;
    render(): any;
    componentDidCatch?(error: Error, errorInfo: any): void;
    static getDerivedStateFromError?(error: Error): Partial<S>;
  }
  
  export type ReactNode = any;
  
  export function useState<T>(initialState: T | (() => T)): [T, (value: T | ((prev: T) => T)) => void];
  export function useCallback<T extends (...args: any[]) => any>(callback: T, deps: any[]): T;
  
  export const createElement: any;
  export const Fragment: any;
}

declare module 'react-dom' {
  export interface Root {
    render(element: any): void;
    unmount(): void;
  }
  
  export function createRoot(container: HTMLElement): Root;
  export function render(element: any, container: HTMLElement): void;
}
