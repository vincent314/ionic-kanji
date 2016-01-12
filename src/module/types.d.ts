interface CordovaPlugins {
  Keyboard:Keyboard;
}

declare module wanakana{
  function isHiragana(input:string):boolean;
  function isKatakana(input:string):boolean;
  function isRomaji(input:string):boolean;
  function toRomaji(input:string):string;
}
