
import { _decorator, Component, Node, instantiate, Vec3, ScrollView } from 'cc';
import { constants } from '../constants/constants';
import { resourceUtil } from '../framework/resourceUtil';
import { spriteButton } from './spriteButton';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = itemScroll
 * DateTime = Sun Apr 03 2022 16:05:53 GMT+0700 (Indochina Time)
 * Author = hoantancong
 * FileBasename = itemScroll.ts
 * FileBasenameNoExtension = itemScroll
 * URL = db://assets/script/ui/itemScroll.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('itemScroll')
export class itemScroll extends Component {
    
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
