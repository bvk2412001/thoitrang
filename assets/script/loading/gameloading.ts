
import { _decorator, Component, Node, Label, ProgressBar, director } from 'cc';
import { resourceUtil } from '../framework/resourceUtil';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = gameloading
 * DateTime = Thu Mar 17 2022 12:24:12 GMT+0700 (Indochina Time)
 * Author = hoantancong
 * FileBasename = gameloading.ts
 * FileBasenameNoExtension = gameloading
 * URL = db://assets/script/loading/gameloading.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('gameloading')
export class gameloading extends Component {
    @property(Label)
    loadingLbl: Label | null = null;
    @property(ProgressBar)
    loadingProgressBar: ProgressBar | null = null;
    @property( String)
    nextSceneName: string | null = null;
    start () {
        // [3]
        this.preloadingResource();
        director.preloadScene(this.nextSceneName,(completedCount,totalCount)=>{
            let progress = completedCount/totalCount;
            this.loadingProgressBar.progress = progress;
        },
        ()=>{
            director.loadScene(this.nextSceneName);
        })
    }
    private preloadingResource(){
        resourceUtil.preloadPrefab('character/character');
        resourceUtil.preloadPrefab('game/mainDecorUI')
        resourceUtil.preloadPrefab('game/createCharacterUI');
        resourceUtil.preloadPrefab('ui/yesNoBox');
    }
    // update (deltaTime: number) {
    //     // [4]
    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
