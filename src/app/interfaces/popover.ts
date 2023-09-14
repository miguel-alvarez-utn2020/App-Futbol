export type PopoverSize = 'cover' | 'auto';
export type TriggerAction = 'click' | 'hover' | 'context-menu';
export type PositionReference = 'trigger' | 'event';
export type PositionSide = 'top' | 'right' | 'bottom' | 'left' | 'start' | 'end';
export type PositionAlign = 'start' | 'center' | 'end';
export type PopoverOptions = {
    cssClass?: string | string[] | undefined,
    side?: PositionSide,
    size?: PopoverSize,
    alignment?: PositionAlign,
    backdropDismiss?: boolean,
}