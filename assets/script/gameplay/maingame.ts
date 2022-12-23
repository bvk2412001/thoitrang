
import { _decorator, Component, Node, instantiate } from 'cc';
import { resourceUtil } from '../framework/resourceUtil';
import { createCharacterUI } from '../ui/createCharacterUI';
import { mainDecorUI } from '../ui/mainDecorUI';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = maingame
 * DateTime = Thu Mar 24 2022 16:31:53 GMT+0700 (Indochina Time)
 * Author = hoantancong
 * FileBasename = maingame.ts
 * FileBasenameNoExtension = maingame
 * URL = db://assets/script/gameplay/maingame.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('maingame')
export class maingame extends Component {
    decorUI:Node | null = null;
    createCharacterUI:Node | null = null;
    messageBox:Node | null = null;


    start(){
        this.openMainDecor();
    }

    private openMainDecor(){
        if(this.decorUI == null){
            resourceUtil.loadPrefab('game/mainDecorUI', (prefab)=>{
                this.decorUI = instantiate(prefab);
                this.decorUI.getComponent(mainDecorUI).setUp(this.node.getComponent(maingame));
                this.decorUI.parent = this.node;
            })
        }else{
            this.createCharacterUI.parent = this.node;
        }
    }

    public openCreateCharacterUI(){
        if(this.createCharacterUI == null){
            resourceUtil.loadPrefab('game/createCharacterUI', (prefab)=>{
                this.createCharacterUI = instantiate(prefab);
                this.createCharacterUI.getComponent(createCharacterUI);
                this.createCharacterUI.parent = this.node;
            })
        }
        else{
            this.createCharacterUI.parent = this.node;
        }
    }

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
