import { Application } from "pixi.js";
import { gameConfig } from "./config";
import { Background } from "./components/background";
import { MainMenu } from "./main-menu";

/**
 * The core of the application. 
 * The application is responsible for managing sub components of the game and conducting high level game flow
 */
export class App extends Application<HTMLCanvasElement> {
    private _background: Background;
    private _mainMenu: MainMenu;

    constructor(){
        super(gameConfig.canvas)
        this._background = new Background();
        this._mainMenu = new MainMenu();
        

        this.stage.addChild(this._background, this._mainMenu);

        this.scaleContent(this.screen.width, this.screen.height);

        // listen for window resize wait a frame so content scales after renderer
        window.addEventListener("resize", () => 
            requestAnimationFrame(() => {
                this.scaleContent(this.screen.width, this.screen.height);
            })
        );            
    }



    /**
     * call resize handler on components 
     */
    private scaleContent(width: number, height: number): void{
        this._background.resize(width, height);
        this._mainMenu.resize(width, height);
    }
}