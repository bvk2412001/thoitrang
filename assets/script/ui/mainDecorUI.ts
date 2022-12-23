
import { _decorator, Component, Node, Label, Button, Color, instantiate } from 'cc';
import { constants } from '../constants/constants';
import { dollConstants } from '../constants/dollConstants';
import { resourceUtil } from '../framework/resourceUtil';
import { maingame } from '../gameplay/maingame';
import { characterScrollTap } from './characterScrollTap';
import { spriteButton } from './spriteButton';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = mainDecorUI
 * DateTime = Fri Mar 25 2022 12:01:33 GMT+0700 (Indochina Time)
 * Author = hoantancong
 * FileBasename = mainDecorUI.ts
 * FileBasenameNoExtension = mainDecorUI
 * URL = db://assets/script/ui/mainDecorUI.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('mainDecorUI')
export class mainDecorUI extends Component {
    @property(Label)
    title:Label | null = null;

    mainGame:maingame | null = null;

    @property(spriteButton)
    taplistButtons: spriteButton[] = [];

    characterScrollTap;

    currentTapListIndex:number = 0;

    start() {

    }

    setUp(mainGame){
        this.mainGame = mainGame;
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
