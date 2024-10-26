import { Point } from "pixi.js";

export interface IAssetDefinition {
    alias: string;
    src: string;
}

export interface ISizeRef {
    width: number;
    height: number;
}

export interface IButtonConfig {
    pos: Point;
    onClick: Function;
    tint: number;
}
