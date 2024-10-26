import { Emitter, EmitterConfigV3 } from "@pixi/particle-emitter";
import { getTexture } from "../asset-loader";
import { Scene } from "./scene";
import { Container, Ticker } from "pixi.js";
import { gameConfig } from "../config";

/**
 * scene showing a flame particle animation 
 */
export class SceneThree extends Scene {
    private _particleContainer: Container;
    private _emitter: Emitter;

    constructor(){
        super(getTexture("scene-bg-3"));  
        this._particleContainer = new Container();

        const { particleConfig }  = gameConfig.sceneThree;
        particleConfig.behaviors = particleConfig.behaviors.map(( behaviour ) => {
            if ( behaviour.type === "textureRandom" ){
                for ( let i = 0; i < behaviour.config.textures.length; i++ ){
                    const textureName = behaviour.config.textures[i]
                    behaviour.config.textures[i] = getTexture(textureName);
                }
            }
            return behaviour;
        })

        this._emitter = new Emitter(
            this._particleContainer as any,
            particleConfig
        );

        this._emitter.autoUpdate = true;
        this.addChild(this._particleContainer);        
    }

    /**
     * play through current scene
     */
    public async play(): Promise<void>{
        await this.awaitClose();
        this._cleanUpScene();
    }

    /**
     *  Clean up any processing associated with scene so it can be safely disposed 
     */
    private _cleanUpScene(): void{
        this._emitter.destroy();
    }
}