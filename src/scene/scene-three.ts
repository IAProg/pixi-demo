import { Emitter } from "@pixi/particle-emitter";
import { getTexture } from "../asset-loader";
import { Scene } from "./scene";
import { Container, Ticker } from "pixi.js";

/**
 * scene showing a flame particle animation 
 */
export class SceneThree extends Scene {
    private _particleContainer: Container;
    private _ticker: Ticker;
    private _emitter: Emitter;
    private _elapsed: number;

    constructor(){
        super(getTexture("scene-bg-3"));  

        this._particleContainer = new Container();

        this._emitter = new Emitter(
            this._particleContainer as any,
            {
                lifetime: {
                    min: 0.5,
                    max: 0.5
                },
                frequency: 0.008,
                spawnChance: 1,
                particlesPerWave: 1,
                maxParticles: 1000,
                pos: {
                    x: 0,
                    y: 0
                },
                addAtBack: false,
                behaviors: [
                    {
                        type: 'alpha',
                        config: {
                            alpha: {
                                list: [
                                    {
                                        value: 0.8,
                                        time: 0
                                    },
                                    {
                                        value: 0.1,
                                        time: 1
                                    }
                                ],
                            },
                        }
                    },
                    {
                        type: 'scale',
                        config: {
                            scale: {
                                list: [
                                    {
                                        value: 1,
                                        time: 0
                                    },
                                    {
                                        value: 0.3,
                                        time: 1
                                    }
                                ],
                            },
                        }
                    },
                    {
                        type: 'color',
                        config: {
                            color: {
                                list: [
                                    {
                                        value: "fb1010",
                                        time: 0
                                    },
                                    {
                                        value: "f5b830",
                                        time: 1
                                    }
                                ],
                            },
                        }
                    },
                    {
                        type: 'moveSpeed',
                        config: {
                            speed: {
                                list: [
                                    {
                                        value: 200,
                                        time: 0
                                    },
                                    {
                                        value: 100,
                                        time: 1
                                    }
                                ],
                                isStepped: false
                            },
                        }
                    },
                    {
                        type: 'spawnShape',
                        config: {
                            type: 'torus',
                            data: {
                                x: 0,
                                y: 0,
                                radius: 10
                            }
                        }
                    },
                    {
                        type: 'textureSingle',
                        config: {
                            texture: getTexture("fire")
                        }
                    }
                ],
            }
        );

        this._emitter.autoUpdate = true;


        this._elapsed = Date.now();

        this._ticker = new Ticker();
        this._ticker.add(this._updateParticles, this);
        this._ticker.start();

        this.addChild(this._particleContainer);        
    }

    /**
     * play through current scene
     */
    public async play(): Promise<void>{
        await this.awaitClose();
    }

    private _updateParticles( dt: number ): void{
       //var now = Date.now();

       //this._emitter.update((now - this._elapsed) * 0.001);

       //console.log("e")

       //this._elapsed = now;
    }
}