
import { _decorator, Component, Node, resources, Prefab } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = resourceUtil
 * DateTime = Thu Mar 24 2022 16:34:40 GMT+0700 (Indochina Time)
 * Author = hoantancong
 * FileBasename = resourceUtil.ts
 * FileBasenameNoExtension = resourceUtil
 * URL = db://assets/script/framework/resourceUtil.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('resourceUtil')
export class resourceUtil extends Component{
    //preload
    //load
    public static preloadDir(path:string){
        resources.preloadDir(path,(error,assets) =>{
            console.log(this.name,assets);
        });
    }
    public static preloadPrefab(path:string){
        resources.preload(path,()=>{
            console.log(this.name,path+' was preloaded')
        });
    }
    public static loadPrefab(path:string,callback){
        resources.load(path,(error,prefab:Prefab)=>{
            callback(prefab);
        })
    }
    public static loadSpriteFrame(path,callback){
        resources.load(path,(error,spriteFrame)=>{
            if(!error){
                callback(spriteFrame);
            }
        })
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
