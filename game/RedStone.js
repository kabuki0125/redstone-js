import MainCanvas from "./MainCanvas";
import GameMap from "./GameMap";
import LoadingScreen from "./interface/LoadingScreen";
import Listener from "./Listener";
import Player from "./Player";
import CommonUI from "./interface/CommonUI";

class RedStone {

    /**
     * @type {MainCanvas}
     */
    static mainCanvas;
    /**
     * @type {GameMap}
     */
    static gameMap;
    /**
     * @type {Player}
     */
    static player;

    static async init() {
        RedStone.mainCanvas = new MainCanvas();
        RedStone.gameMap = new GameMap();
        RedStone.player = new Player();

        // display loading screen
        await LoadingScreen.init();
        LoadingScreen.render();

        // load common resources
        await CommonUI.init();

        // check save data

        // load common resources
        await RedStone.gameMap.loadCommon();

        // load player

        // init map
        await RedStone.gameMap.init();

        // water mark click event
        document.querySelector(".water-mark").addEventListener("click", () => {
            location.href = "https://github.com/LostMyCode/redstone-js";
        });

        LoadingScreen.destroy();
    }
}

export default RedStone;