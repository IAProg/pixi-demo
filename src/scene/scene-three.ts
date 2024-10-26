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
                addAtBack: false,
                pos: {x: 0, y: 200},
                frequency: 0.000001,
                lifetime: {
                    min: 0.1,
                    max: 0.25
                },
                maxParticles: 10,
                behaviors:[
                    {
                        type: "alpha",
                        config:{
                            alpha:{
                                list: [
                                    {time: 0, value: 0.62},
                                    {time: 1, value: 0}
                                ]
                            }
                        }
                    },
                    {
                        type: "color",
                        config:{
                            color:{
                                list: [
                                    {time: 0, value: 'fff191'},
                                    {time: 1, value: 'fc3a52'}
                                ]
                            }
                        }
                    },
                    {
                        type: "moveSpeedStatic",
                        config:{
                            max: 1000,
                            min: 1000
                        }
                    },
                    {
                        type: "scale",
                        config:{
                            minMult: 1,
                            scale: {
                                list: [
                                    {time: 0, value:0.5},
                                    {time: 1, value:1.5},
                                ]
                            }
                        }
                    },
                    {
                        type: "rotation",
                        config:{
                            accel: 0,
                            maxSpeed: 50,
                            maxStart: 275,
                            minSpeed: 50,
                            minStart: 265
                        }
                    },
                    {
                        type: "textureRandom",
                        config:{
                            textures: [
                                getTexture("fire-1"),
                                getTexture("fire-2")
                            ]
                        }
                    },
                    {
                        type: "spawnShape",
                        config:{
                            data: {
                                affectRotation: false,
                                innerRadius: 0,
                                radius: 10,
                                x: 0,
                                y: 0                                
                            },
                            type: "torus"
                        }
                    }
                ]
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