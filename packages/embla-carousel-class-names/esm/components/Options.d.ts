import { CreateOptionsType } from 'embla-carousel';
export type OptionsType = CreateOptionsType<{
    snapped: string;
    inView: string;
    draggable: string;
    dragging: string;
}>;
export declare const defaultOptions: OptionsType;
