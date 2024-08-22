import { CreateOptionsType } from 'embla-carousel';
export type OptionsType = CreateOptionsType<{
    delay: number;
    jump: boolean;
    playOnInit: boolean;
    stopOnFocusIn: boolean;
    stopOnInteraction: boolean;
    stopOnMouseEnter: boolean;
    stopOnLastSnap: boolean;
    rootNode: ((emblaRoot: HTMLElement) => HTMLElement | null) | null;
}>;
export declare const defaultOptions: OptionsType;
