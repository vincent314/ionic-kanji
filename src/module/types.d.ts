interface CordovaPlugins {
  Keyboard:Keyboard;
}

declare module wanakana{
  function isHiragana(input:string):boolean;
  function isKatakana(input:string):boolean;
  function isRomaji(input:string):boolean;
  function toRomaji(input:string):string;
}

interface IIonicToast{
  show(message:string,position:string,stick:boolean,time:number);
}

declare module utf8{
  function encode(input:string):string;
  function decode(input:string):string;
}
