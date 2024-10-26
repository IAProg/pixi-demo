import { Texture, Assets } from "pixi.js";
import { IAssetDefinition } from "./types";


/**
 * asset manifest, lists all assets to be loaded
 * With some more time this would have been loaded externally as JSON
 * 
 */
const textureManifest = [
    { alias: "background", src: "textures/background.png"},
    { alias: "menu-button", src: "textures/menu-button.png"},
    { alias: "close-button", src: "textures/close-button.png"},
    { alias: "scene-bg-1", src: "textures/scene_bg_01.png"},
    { alias: "scene-bg-2", src: "textures/scene_bg_02.png"},
    { alias: "scene-bg-3", src: "textures/scene_bg_03.png"},
    { alias: "emoji-1", src: "textures/emoji-1.png"},
    { alias: "emoji-2", src: "textures/emoji-2.png"},
    { alias: "emoji-3", src: "textures/emoji-3.png"},
    { alias: "emoji-4", src: "textures/emoji-4.png"},
    { alias: "emoji-5", src: "textures/emoji-5.png"},
    { alias: "dollar", src: "textures/dollar.png"}
] as Array<IAssetDefinition>



/**
 * A simple asset loader. Loading assets from a config allows for some changes to be made without touching the code
 */
export async function loadAssets(): Promise<void>{
    await Assets.load(textureManifest);
}
/**
 * A wrapper method used to access textures on the loader, if the requested texture does not exist an error is thrown
 */
export function getTexture(textureName: string): Texture{
    const texture = Assets.cache.get(textureName);
    if (texture){
        return texture;
    }
    throw `could not find texture ${textureName}`
}
