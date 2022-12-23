
import { _decorator, Component, Node, instantiate, Color, SpriteFrame, Vec3 } from 'cc';
import { characterController } from '../character/characterController';
import { constants } from '../constants/constants';
import { dollConstants } from '../constants/dollConstants';
import { resourceUtil } from '../framework/resourceUtil';
import { maingame } from '../gameplay/maingame';
import { gameLogic } from '../logic/gameLogic';
import { colorpicker } from './colorpicker';
import { itemScroll } from './itemScroll';
import { spriteButton } from './spriteButton';
import { yesNoBox } from './yesNoBox';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = createCharacterUI
 * DateTime = Fri Mar 25 2022 12:01:41 GMT+0700 (Indochina Time)
 * Author = hoantancong
 * FileBasename = createCharacterUI.ts
 * FileBasenameNoExtension = createCharacterUI
 * URL = db://assets/script/ui/createCharacterUI.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('createCharacterUI')
export class createCharacterUI extends Component {
   
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
