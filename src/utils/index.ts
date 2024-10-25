import gsap from "gsap";
import { IRenderer, Ticker } from "pixi.js";

/**
 * A gsap tween wrapper allowing a tween to treated as a promise without writing extra code
 */
export async function asyncTween (targets: gsap.TweenTarget, vars: gsap.TweenVars): Promise<void>{
    return new Promise(resolve => {
        vars.onComplete = () => {
            vars.onComplete && vars.onComplete();
            resolve();
        }
        gsap.to(targets, vars)
    });
}

export function getRandomElement<T>(arr: Array<any>): T {
    return arr[getRandomIndex(arr)];
}

export function getRandomIndex(arr: Array<any>): number {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return randomIndex;
}

/**
 * promise timeout wrapper function
 */
export const delay = (ms: number) => new Promise<void>(
    (resolve) => setTimeout(resolve, ms)
);

/**
 * generate a random float between two values
 * @param min - lowest possible value
 * @param max - highest possible value
 */
export function randomFloat(min: number, max: number): number {
    return (Math.random() * (max - min)) + min;
}

/**
 * generate a random integer between two values
 * @param min - lowest possible value
 * @param max - highest possible value
 */
export function randomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


export function getAppRenderer(): IRenderer{
    return (globalThis as any).__PIXI_APP__.renderer;
}

export function getAppTicker(): Ticker{
    return (globalThis as any).__PIXI_APP__.ticker;
}

