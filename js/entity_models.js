/** Entity model part definitions (detailed) */
window.ENTITY_MODELS={
  player: {
    texture:"entity/player.png", textureSize:[64,64], parts:[
      { name:"head", parent:"None", pivot:[0,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"body", parent:"body", pivot:[1,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightArm", parent:"body", pivot:[2,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftArm", parent:"body", pivot:[3,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightLeg", parent:"body", pivot:[4,12,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftLeg", parent:"body", pivot:[0,15,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hat", parent:"body", pivot:[1,2,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"jacket", parent:"body", pivot:[2,5,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftSleeve", parent:"body", pivot:[3,8,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightSleeve", parent:"body", pivot:[4,11,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftPants", parent:"body", pivot:[0,14,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightPants", parent:"body", pivot:[1,1,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"cloak", parent:"body", pivot:[2,4,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"ear", parent:"body", pivot:[3,7,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"snout", parent:"body", pivot:[4,10,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"tail", parent:"body", pivot:[0,13,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingLeft", parent:"body", pivot:[1,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingRight", parent:"body", pivot:[2,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornLeft", parent:"body", pivot:[3,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornRight", parent:"body", pivot:[4,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
    ], animations: {
      idle: { length:2, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      walk: { length:3, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      run: { length:1, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      jump: { length:2, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      attack: { length:1, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      death: { length:2, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      swim: { length:3, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      fly: { length:2, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      sit: { length:2, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      sneak: { length:1, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
    }
  },
  zombie: {
    texture:"entity/zombie.png", textureSize:[64,64], parts:[
      { name:"head", parent:"None", pivot:[0,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"body", parent:"body", pivot:[1,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightArm", parent:"body", pivot:[2,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftArm", parent:"body", pivot:[3,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightLeg", parent:"body", pivot:[4,12,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftLeg", parent:"body", pivot:[0,15,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hat", parent:"body", pivot:[1,2,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"jacket", parent:"body", pivot:[2,5,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftSleeve", parent:"body", pivot:[3,8,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightSleeve", parent:"body", pivot:[4,11,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftPants", parent:"body", pivot:[0,14,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightPants", parent:"body", pivot:[1,1,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"cloak", parent:"body", pivot:[2,4,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"ear", parent:"body", pivot:[3,7,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"snout", parent:"body", pivot:[4,10,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"tail", parent:"body", pivot:[0,13,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingLeft", parent:"body", pivot:[1,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingRight", parent:"body", pivot:[2,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornLeft", parent:"body", pivot:[3,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornRight", parent:"body", pivot:[4,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
    ], animations: {
      idle: { length:2, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      walk: { length:1, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      run: { length:2, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      jump: { length:3, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      attack: { length:2, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      death: { length:3, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      swim: { length:2, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      fly: { length:2, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      sit: { length:3, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      sneak: { length:3, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
    }
  },
  skeleton: {
    texture:"entity/skeleton.png", textureSize:[64,64], parts:[
      { name:"head", parent:"None", pivot:[0,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"body", parent:"body", pivot:[1,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightArm", parent:"body", pivot:[2,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftArm", parent:"body", pivot:[3,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightLeg", parent:"body", pivot:[4,12,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftLeg", parent:"body", pivot:[0,15,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hat", parent:"body", pivot:[1,2,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"jacket", parent:"body", pivot:[2,5,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftSleeve", parent:"body", pivot:[3,8,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightSleeve", parent:"body", pivot:[4,11,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftPants", parent:"body", pivot:[0,14,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightPants", parent:"body", pivot:[1,1,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"cloak", parent:"body", pivot:[2,4,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"ear", parent:"body", pivot:[3,7,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"snout", parent:"body", pivot:[4,10,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"tail", parent:"body", pivot:[0,13,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingLeft", parent:"body", pivot:[1,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingRight", parent:"body", pivot:[2,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornLeft", parent:"body", pivot:[3,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornRight", parent:"body", pivot:[4,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
    ], animations: {
      idle: { length:2, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      walk: { length:3, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      run: { length:2, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      jump: { length:3, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      attack: { length:2, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      death: { length:3, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      swim: { length:2, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      fly: { length:2, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      sit: { length:1, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      sneak: { length:2, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
    }
  },
  creeper: {
    texture:"entity/creeper.png", textureSize:[64,64], parts:[
      { name:"head", parent:"None", pivot:[0,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"body", parent:"body", pivot:[1,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightArm", parent:"body", pivot:[2,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftArm", parent:"body", pivot:[3,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightLeg", parent:"body", pivot:[4,12,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftLeg", parent:"body", pivot:[0,15,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hat", parent:"body", pivot:[1,2,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"jacket", parent:"body", pivot:[2,5,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftSleeve", parent:"body", pivot:[3,8,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightSleeve", parent:"body", pivot:[4,11,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftPants", parent:"body", pivot:[0,14,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightPants", parent:"body", pivot:[1,1,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"cloak", parent:"body", pivot:[2,4,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"ear", parent:"body", pivot:[3,7,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"snout", parent:"body", pivot:[4,10,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"tail", parent:"body", pivot:[0,13,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingLeft", parent:"body", pivot:[1,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingRight", parent:"body", pivot:[2,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornLeft", parent:"body", pivot:[3,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornRight", parent:"body", pivot:[4,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
    ], animations: {
      idle: { length:1, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      walk: { length:1, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      run: { length:3, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      jump: { length:1, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      attack: { length:1, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      death: { length:2, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      swim: { length:1, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      fly: { length:2, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      sit: { length:3, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      sneak: { length:1, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
    }
  },
  spider: {
    texture:"entity/spider.png", textureSize:[64,64], parts:[
      { name:"head", parent:"None", pivot:[0,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"body", parent:"body", pivot:[1,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightArm", parent:"body", pivot:[2,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftArm", parent:"body", pivot:[3,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightLeg", parent:"body", pivot:[4,12,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftLeg", parent:"body", pivot:[0,15,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hat", parent:"body", pivot:[1,2,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"jacket", parent:"body", pivot:[2,5,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftSleeve", parent:"body", pivot:[3,8,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightSleeve", parent:"body", pivot:[4,11,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftPants", parent:"body", pivot:[0,14,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightPants", parent:"body", pivot:[1,1,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"cloak", parent:"body", pivot:[2,4,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"ear", parent:"body", pivot:[3,7,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"snout", parent:"body", pivot:[4,10,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"tail", parent:"body", pivot:[0,13,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingLeft", parent:"body", pivot:[1,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingRight", parent:"body", pivot:[2,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornLeft", parent:"body", pivot:[3,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornRight", parent:"body", pivot:[4,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
    ], animations: {
      idle: { length:2, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
      walk: { length:1, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
      run: { length:1, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
      jump: { length:2, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
      attack: { length:2, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
      death: { length:2, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
      swim: { length:2, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
      fly: { length:1, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
      sit: { length:1, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
      sneak: { length:3, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
    }
  },
  enderman: {
    texture:"entity/enderman.png", textureSize:[64,64], parts:[
      { name:"head", parent:"None", pivot:[0,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"body", parent:"body", pivot:[1,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightArm", parent:"body", pivot:[2,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftArm", parent:"body", pivot:[3,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightLeg", parent:"body", pivot:[4,12,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftLeg", parent:"body", pivot:[0,15,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hat", parent:"body", pivot:[1,2,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"jacket", parent:"body", pivot:[2,5,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftSleeve", parent:"body", pivot:[3,8,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightSleeve", parent:"body", pivot:[4,11,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftPants", parent:"body", pivot:[0,14,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightPants", parent:"body", pivot:[1,1,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"cloak", parent:"body", pivot:[2,4,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"ear", parent:"body", pivot:[3,7,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"snout", parent:"body", pivot:[4,10,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"tail", parent:"body", pivot:[0,13,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingLeft", parent:"body", pivot:[1,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingRight", parent:"body", pivot:[2,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornLeft", parent:"body", pivot:[3,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornRight", parent:"body", pivot:[4,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
    ], animations: {
      idle: { length:2, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      walk: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      run: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      jump: { length:1, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      attack: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      death: { length:1, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      swim: { length:2, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      fly: { length:1, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      sit: { length:1, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      sneak: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
    }
  },
  slime: {
    texture:"entity/slime.png", textureSize:[64,64], parts:[
      { name:"head", parent:"None", pivot:[0,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"body", parent:"body", pivot:[1,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightArm", parent:"body", pivot:[2,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftArm", parent:"body", pivot:[3,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightLeg", parent:"body", pivot:[4,12,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftLeg", parent:"body", pivot:[0,15,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hat", parent:"body", pivot:[1,2,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"jacket", parent:"body", pivot:[2,5,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftSleeve", parent:"body", pivot:[3,8,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightSleeve", parent:"body", pivot:[4,11,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftPants", parent:"body", pivot:[0,14,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightPants", parent:"body", pivot:[1,1,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"cloak", parent:"body", pivot:[2,4,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"ear", parent:"body", pivot:[3,7,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"snout", parent:"body", pivot:[4,10,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"tail", parent:"body", pivot:[0,13,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingLeft", parent:"body", pivot:[1,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingRight", parent:"body", pivot:[2,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornLeft", parent:"body", pivot:[3,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornRight", parent:"body", pivot:[4,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
    ], animations: {
      idle: { length:3, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      walk: { length:3, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      run: { length:2, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      jump: { length:1, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      attack: { length:2, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      death: { length:1, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      swim: { length:1, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      fly: { length:1, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      sit: { length:1, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      sneak: { length:1, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
    }
  },
  cow: {
    texture:"entity/cow.png", textureSize:[64,64], parts:[
      { name:"head", parent:"None", pivot:[0,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"body", parent:"body", pivot:[1,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightArm", parent:"body", pivot:[2,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftArm", parent:"body", pivot:[3,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightLeg", parent:"body", pivot:[4,12,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftLeg", parent:"body", pivot:[0,15,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hat", parent:"body", pivot:[1,2,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"jacket", parent:"body", pivot:[2,5,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftSleeve", parent:"body", pivot:[3,8,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightSleeve", parent:"body", pivot:[4,11,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftPants", parent:"body", pivot:[0,14,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightPants", parent:"body", pivot:[1,1,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"cloak", parent:"body", pivot:[2,4,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"ear", parent:"body", pivot:[3,7,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"snout", parent:"body", pivot:[4,10,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"tail", parent:"body", pivot:[0,13,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingLeft", parent:"body", pivot:[1,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingRight", parent:"body", pivot:[2,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornLeft", parent:"body", pivot:[3,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornRight", parent:"body", pivot:[4,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
    ], animations: {
      idle: { length:2, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      walk: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      run: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      jump: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      attack: { length:2, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      death: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      swim: { length:1, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      fly: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      sit: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      sneak: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
    }
  },
  pig: {
    texture:"entity/pig.png", textureSize:[64,64], parts:[
      { name:"head", parent:"None", pivot:[0,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"body", parent:"body", pivot:[1,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightArm", parent:"body", pivot:[2,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftArm", parent:"body", pivot:[3,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightLeg", parent:"body", pivot:[4,12,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftLeg", parent:"body", pivot:[0,15,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hat", parent:"body", pivot:[1,2,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"jacket", parent:"body", pivot:[2,5,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftSleeve", parent:"body", pivot:[3,8,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightSleeve", parent:"body", pivot:[4,11,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftPants", parent:"body", pivot:[0,14,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightPants", parent:"body", pivot:[1,1,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"cloak", parent:"body", pivot:[2,4,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"ear", parent:"body", pivot:[3,7,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"snout", parent:"body", pivot:[4,10,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"tail", parent:"body", pivot:[0,13,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingLeft", parent:"body", pivot:[1,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingRight", parent:"body", pivot:[2,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornLeft", parent:"body", pivot:[3,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornRight", parent:"body", pivot:[4,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
    ], animations: {
      idle: { length:2, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      walk: { length:3, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      run: { length:3, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      jump: { length:3, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      attack: { length:3, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      death: { length:2, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      swim: { length:1, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      fly: { length:2, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      sit: { length:3, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      sneak: { length:1, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
    }
  },
  sheep: {
    texture:"entity/sheep.png", textureSize:[64,64], parts:[
      { name:"head", parent:"None", pivot:[0,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"body", parent:"body", pivot:[1,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightArm", parent:"body", pivot:[2,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftArm", parent:"body", pivot:[3,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightLeg", parent:"body", pivot:[4,12,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftLeg", parent:"body", pivot:[0,15,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hat", parent:"body", pivot:[1,2,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"jacket", parent:"body", pivot:[2,5,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftSleeve", parent:"body", pivot:[3,8,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightSleeve", parent:"body", pivot:[4,11,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftPants", parent:"body", pivot:[0,14,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightPants", parent:"body", pivot:[1,1,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"cloak", parent:"body", pivot:[2,4,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"ear", parent:"body", pivot:[3,7,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"snout", parent:"body", pivot:[4,10,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"tail", parent:"body", pivot:[0,13,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingLeft", parent:"body", pivot:[1,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingRight", parent:"body", pivot:[2,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornLeft", parent:"body", pivot:[3,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornRight", parent:"body", pivot:[4,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
    ], animations: {
      idle: { length:2, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      walk: { length:1, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      run: { length:1, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      jump: { length:3, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      attack: { length:2, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      death: { length:2, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      swim: { length:2, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      fly: { length:3, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      sit: { length:2, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      sneak: { length:1, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
    }
  },
  chicken: {
    texture:"entity/chicken.png", textureSize:[64,64], parts:[
      { name:"head", parent:"None", pivot:[0,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"body", parent:"body", pivot:[1,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightArm", parent:"body", pivot:[2,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftArm", parent:"body", pivot:[3,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightLeg", parent:"body", pivot:[4,12,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftLeg", parent:"body", pivot:[0,15,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hat", parent:"body", pivot:[1,2,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"jacket", parent:"body", pivot:[2,5,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftSleeve", parent:"body", pivot:[3,8,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightSleeve", parent:"body", pivot:[4,11,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftPants", parent:"body", pivot:[0,14,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightPants", parent:"body", pivot:[1,1,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"cloak", parent:"body", pivot:[2,4,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"ear", parent:"body", pivot:[3,7,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"snout", parent:"body", pivot:[4,10,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"tail", parent:"body", pivot:[0,13,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingLeft", parent:"body", pivot:[1,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingRight", parent:"body", pivot:[2,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornLeft", parent:"body", pivot:[3,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornRight", parent:"body", pivot:[4,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
    ], animations: {
      idle: { length:2, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      walk: { length:1, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      run: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      jump: { length:1, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      attack: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      death: { length:1, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      swim: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      fly: { length:1, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      sit: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      sneak: { length:2, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
    }
  },
  wolf: {
    texture:"entity/wolf.png", textureSize:[64,64], parts:[
      { name:"head", parent:"None", pivot:[0,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"body", parent:"body", pivot:[1,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightArm", parent:"body", pivot:[2,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftArm", parent:"body", pivot:[3,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightLeg", parent:"body", pivot:[4,12,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftLeg", parent:"body", pivot:[0,15,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hat", parent:"body", pivot:[1,2,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"jacket", parent:"body", pivot:[2,5,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftSleeve", parent:"body", pivot:[3,8,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightSleeve", parent:"body", pivot:[4,11,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftPants", parent:"body", pivot:[0,14,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightPants", parent:"body", pivot:[1,1,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"cloak", parent:"body", pivot:[2,4,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"ear", parent:"body", pivot:[3,7,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"snout", parent:"body", pivot:[4,10,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"tail", parent:"body", pivot:[0,13,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingLeft", parent:"body", pivot:[1,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingRight", parent:"body", pivot:[2,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornLeft", parent:"body", pivot:[3,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornRight", parent:"body", pivot:[4,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
    ], animations: {
      idle: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      walk: { length:1, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      run: { length:2, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      jump: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      attack: { length:2, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      death: { length:2, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      swim: { length:1, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      fly: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      sit: { length:1, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      sneak: { length:2, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
    }
  },
  cat: {
    texture:"entity/cat.png", textureSize:[64,64], parts:[
      { name:"head", parent:"None", pivot:[0,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"body", parent:"body", pivot:[1,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightArm", parent:"body", pivot:[2,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftArm", parent:"body", pivot:[3,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightLeg", parent:"body", pivot:[4,12,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftLeg", parent:"body", pivot:[0,15,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hat", parent:"body", pivot:[1,2,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"jacket", parent:"body", pivot:[2,5,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftSleeve", parent:"body", pivot:[3,8,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightSleeve", parent:"body", pivot:[4,11,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftPants", parent:"body", pivot:[0,14,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightPants", parent:"body", pivot:[1,1,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"cloak", parent:"body", pivot:[2,4,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"ear", parent:"body", pivot:[3,7,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"snout", parent:"body", pivot:[4,10,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"tail", parent:"body", pivot:[0,13,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingLeft", parent:"body", pivot:[1,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingRight", parent:"body", pivot:[2,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornLeft", parent:"body", pivot:[3,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornRight", parent:"body", pivot:[4,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
    ], animations: {
      idle: { length:2, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
      walk: { length:3, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
      run: { length:1, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
      jump: { length:2, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
      attack: { length:2, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
      death: { length:2, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
      swim: { length:2, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
      fly: { length:3, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
      sit: { length:2, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
      sneak: { length:2, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
    }
  },
  horse: {
    texture:"entity/horse.png", textureSize:[64,64], parts:[
      { name:"head", parent:"None", pivot:[0,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"body", parent:"body", pivot:[1,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightArm", parent:"body", pivot:[2,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftArm", parent:"body", pivot:[3,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightLeg", parent:"body", pivot:[4,12,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftLeg", parent:"body", pivot:[0,15,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hat", parent:"body", pivot:[1,2,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"jacket", parent:"body", pivot:[2,5,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftSleeve", parent:"body", pivot:[3,8,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightSleeve", parent:"body", pivot:[4,11,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftPants", parent:"body", pivot:[0,14,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightPants", parent:"body", pivot:[1,1,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"cloak", parent:"body", pivot:[2,4,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"ear", parent:"body", pivot:[3,7,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"snout", parent:"body", pivot:[4,10,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"tail", parent:"body", pivot:[0,13,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingLeft", parent:"body", pivot:[1,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingRight", parent:"body", pivot:[2,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornLeft", parent:"body", pivot:[3,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornRight", parent:"body", pivot:[4,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
    ], animations: {
      idle: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      walk: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      run: { length:2, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      jump: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      attack: { length:2, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      death: { length:2, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      swim: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      fly: { length:2, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      sit: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      sneak: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
    }
  },
  villager: {
    texture:"entity/villager.png", textureSize:[64,64], parts:[
      { name:"head", parent:"None", pivot:[0,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"body", parent:"body", pivot:[1,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightArm", parent:"body", pivot:[2,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftArm", parent:"body", pivot:[3,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightLeg", parent:"body", pivot:[4,12,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftLeg", parent:"body", pivot:[0,15,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hat", parent:"body", pivot:[1,2,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"jacket", parent:"body", pivot:[2,5,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftSleeve", parent:"body", pivot:[3,8,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightSleeve", parent:"body", pivot:[4,11,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftPants", parent:"body", pivot:[0,14,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightPants", parent:"body", pivot:[1,1,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"cloak", parent:"body", pivot:[2,4,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"ear", parent:"body", pivot:[3,7,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"snout", parent:"body", pivot:[4,10,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"tail", parent:"body", pivot:[0,13,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingLeft", parent:"body", pivot:[1,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingRight", parent:"body", pivot:[2,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornLeft", parent:"body", pivot:[3,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornRight", parent:"body", pivot:[4,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
    ], animations: {
      idle: { length:1, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      walk: { length:2, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      run: { length:2, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      jump: { length:1, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      attack: { length:1, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      death: { length:1, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      swim: { length:1, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      fly: { length:2, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      sit: { length:1, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      sneak: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
    }
  },
  witch: {
    texture:"entity/witch.png", textureSize:[64,64], parts:[
      { name:"head", parent:"None", pivot:[0,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"body", parent:"body", pivot:[1,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightArm", parent:"body", pivot:[2,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftArm", parent:"body", pivot:[3,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightLeg", parent:"body", pivot:[4,12,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftLeg", parent:"body", pivot:[0,15,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hat", parent:"body", pivot:[1,2,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"jacket", parent:"body", pivot:[2,5,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftSleeve", parent:"body", pivot:[3,8,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightSleeve", parent:"body", pivot:[4,11,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftPants", parent:"body", pivot:[0,14,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightPants", parent:"body", pivot:[1,1,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"cloak", parent:"body", pivot:[2,4,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"ear", parent:"body", pivot:[3,7,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"snout", parent:"body", pivot:[4,10,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"tail", parent:"body", pivot:[0,13,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingLeft", parent:"body", pivot:[1,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingRight", parent:"body", pivot:[2,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornLeft", parent:"body", pivot:[3,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornRight", parent:"body", pivot:[4,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
    ], animations: {
      idle: { length:1, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      walk: { length:3, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      run: { length:2, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      jump: { length:2, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      attack: { length:2, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      death: { length:1, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      swim: { length:3, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      fly: { length:3, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      sit: { length:3, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      sneak: { length:2, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
    }
  },
  blaze: {
    texture:"entity/blaze.png", textureSize:[64,64], parts:[
      { name:"head", parent:"None", pivot:[0,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"body", parent:"body", pivot:[1,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightArm", parent:"body", pivot:[2,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftArm", parent:"body", pivot:[3,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightLeg", parent:"body", pivot:[4,12,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftLeg", parent:"body", pivot:[0,15,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hat", parent:"body", pivot:[1,2,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"jacket", parent:"body", pivot:[2,5,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftSleeve", parent:"body", pivot:[3,8,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightSleeve", parent:"body", pivot:[4,11,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftPants", parent:"body", pivot:[0,14,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightPants", parent:"body", pivot:[1,1,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"cloak", parent:"body", pivot:[2,4,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"ear", parent:"body", pivot:[3,7,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"snout", parent:"body", pivot:[4,10,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"tail", parent:"body", pivot:[0,13,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingLeft", parent:"body", pivot:[1,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingRight", parent:"body", pivot:[2,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornLeft", parent:"body", pivot:[3,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornRight", parent:"body", pivot:[4,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
    ], animations: {
      idle: { length:1, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      walk: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      run: { length:1, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      jump: { length:2, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      attack: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      death: { length:2, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      swim: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      fly: { length:2, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      sit: { length:1, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      sneak: { length:1, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
    }
  },
  ghast: {
    texture:"entity/ghast.png", textureSize:[64,64], parts:[
      { name:"head", parent:"None", pivot:[0,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"body", parent:"body", pivot:[1,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightArm", parent:"body", pivot:[2,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftArm", parent:"body", pivot:[3,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightLeg", parent:"body", pivot:[4,12,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftLeg", parent:"body", pivot:[0,15,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hat", parent:"body", pivot:[1,2,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"jacket", parent:"body", pivot:[2,5,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftSleeve", parent:"body", pivot:[3,8,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightSleeve", parent:"body", pivot:[4,11,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftPants", parent:"body", pivot:[0,14,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightPants", parent:"body", pivot:[1,1,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"cloak", parent:"body", pivot:[2,4,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"ear", parent:"body", pivot:[3,7,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"snout", parent:"body", pivot:[4,10,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"tail", parent:"body", pivot:[0,13,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingLeft", parent:"body", pivot:[1,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingRight", parent:"body", pivot:[2,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornLeft", parent:"body", pivot:[3,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornRight", parent:"body", pivot:[4,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
    ], animations: {
      idle: { length:2, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      walk: { length:3, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      run: { length:1, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      jump: { length:2, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      attack: { length:1, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      death: { length:2, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      swim: { length:1, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      fly: { length:2, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      sit: { length:2, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      sneak: { length:3, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
    }
  },
  piglin: {
    texture:"entity/piglin.png", textureSize:[64,64], parts:[
      { name:"head", parent:"None", pivot:[0,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"body", parent:"body", pivot:[1,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightArm", parent:"body", pivot:[2,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftArm", parent:"body", pivot:[3,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightLeg", parent:"body", pivot:[4,12,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftLeg", parent:"body", pivot:[0,15,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hat", parent:"body", pivot:[1,2,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"jacket", parent:"body", pivot:[2,5,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftSleeve", parent:"body", pivot:[3,8,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightSleeve", parent:"body", pivot:[4,11,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftPants", parent:"body", pivot:[0,14,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightPants", parent:"body", pivot:[1,1,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"cloak", parent:"body", pivot:[2,4,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"ear", parent:"body", pivot:[3,7,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"snout", parent:"body", pivot:[4,10,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"tail", parent:"body", pivot:[0,13,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingLeft", parent:"body", pivot:[1,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingRight", parent:"body", pivot:[2,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornLeft", parent:"body", pivot:[3,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornRight", parent:"body", pivot:[4,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
    ], animations: {
      idle: { length:3, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      walk: { length:3, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      run: { length:2, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      jump: { length:2, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      attack: { length:3, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      death: { length:1, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      swim: { length:2, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      fly: { length:2, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      sit: { length:2, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      sneak: { length:2, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
    }
  },
  hoglin: {
    texture:"entity/hoglin.png", textureSize:[64,64], parts:[
      { name:"head", parent:"None", pivot:[0,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"body", parent:"body", pivot:[1,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightArm", parent:"body", pivot:[2,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftArm", parent:"body", pivot:[3,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightLeg", parent:"body", pivot:[4,12,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftLeg", parent:"body", pivot:[0,15,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hat", parent:"body", pivot:[1,2,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"jacket", parent:"body", pivot:[2,5,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftSleeve", parent:"body", pivot:[3,8,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightSleeve", parent:"body", pivot:[4,11,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftPants", parent:"body", pivot:[0,14,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightPants", parent:"body", pivot:[1,1,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"cloak", parent:"body", pivot:[2,4,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"ear", parent:"body", pivot:[3,7,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"snout", parent:"body", pivot:[4,10,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"tail", parent:"body", pivot:[0,13,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingLeft", parent:"body", pivot:[1,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingRight", parent:"body", pivot:[2,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornLeft", parent:"body", pivot:[3,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornRight", parent:"body", pivot:[4,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
    ], animations: {
      idle: { length:3, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      walk: { length:3, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      run: { length:2, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      jump: { length:2, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      attack: { length:2, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      death: { length:2, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      swim: { length:1, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      fly: { length:1, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      sit: { length:2, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      sneak: { length:3, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
    }
  },
  warden: {
    texture:"entity/warden.png", textureSize:[64,64], parts:[
      { name:"head", parent:"None", pivot:[0,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"body", parent:"body", pivot:[1,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightArm", parent:"body", pivot:[2,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftArm", parent:"body", pivot:[3,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightLeg", parent:"body", pivot:[4,12,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftLeg", parent:"body", pivot:[0,15,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hat", parent:"body", pivot:[1,2,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"jacket", parent:"body", pivot:[2,5,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftSleeve", parent:"body", pivot:[3,8,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightSleeve", parent:"body", pivot:[4,11,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftPants", parent:"body", pivot:[0,14,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightPants", parent:"body", pivot:[1,1,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"cloak", parent:"body", pivot:[2,4,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"ear", parent:"body", pivot:[3,7,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"snout", parent:"body", pivot:[4,10,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"tail", parent:"body", pivot:[0,13,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingLeft", parent:"body", pivot:[1,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingRight", parent:"body", pivot:[2,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornLeft", parent:"body", pivot:[3,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornRight", parent:"body", pivot:[4,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
    ], animations: {
      idle: { length:3, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      walk: { length:3, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      run: { length:3, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      jump: { length:2, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      attack: { length:1, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      death: { length:1, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      swim: { length:1, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      fly: { length:3, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      sit: { length:2, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      sneak: { length:1, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
    }
  },
  iron_golem: {
    texture:"entity/iron_golem.png", textureSize:[64,64], parts:[
      { name:"head", parent:"None", pivot:[0,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"body", parent:"body", pivot:[1,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightArm", parent:"body", pivot:[2,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftArm", parent:"body", pivot:[3,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightLeg", parent:"body", pivot:[4,12,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftLeg", parent:"body", pivot:[0,15,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hat", parent:"body", pivot:[1,2,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"jacket", parent:"body", pivot:[2,5,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftSleeve", parent:"body", pivot:[3,8,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightSleeve", parent:"body", pivot:[4,11,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftPants", parent:"body", pivot:[0,14,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightPants", parent:"body", pivot:[1,1,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"cloak", parent:"body", pivot:[2,4,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"ear", parent:"body", pivot:[3,7,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"snout", parent:"body", pivot:[4,10,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"tail", parent:"body", pivot:[0,13,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingLeft", parent:"body", pivot:[1,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingRight", parent:"body", pivot:[2,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornLeft", parent:"body", pivot:[3,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornRight", parent:"body", pivot:[4,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
    ], animations: {
      idle: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      walk: { length:1, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      run: { length:1, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      jump: { length:1, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      attack: { length:1, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      death: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      swim: { length:2, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      fly: { length:1, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      sit: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      sneak: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
    }
  },
  snow_golem: {
    texture:"entity/snow_golem.png", textureSize:[64,64], parts:[
      { name:"head", parent:"None", pivot:[0,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"body", parent:"body", pivot:[1,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightArm", parent:"body", pivot:[2,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftArm", parent:"body", pivot:[3,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightLeg", parent:"body", pivot:[4,12,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftLeg", parent:"body", pivot:[0,15,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hat", parent:"body", pivot:[1,2,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"jacket", parent:"body", pivot:[2,5,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftSleeve", parent:"body", pivot:[3,8,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightSleeve", parent:"body", pivot:[4,11,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftPants", parent:"body", pivot:[0,14,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightPants", parent:"body", pivot:[1,1,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"cloak", parent:"body", pivot:[2,4,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"ear", parent:"body", pivot:[3,7,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"snout", parent:"body", pivot:[4,10,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"tail", parent:"body", pivot:[0,13,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingLeft", parent:"body", pivot:[1,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingRight", parent:"body", pivot:[2,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornLeft", parent:"body", pivot:[3,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornRight", parent:"body", pivot:[4,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
    ], animations: {
      idle: { length:2, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      walk: { length:2, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      run: { length:3, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      jump: { length:1, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      attack: { length:2, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      death: { length:3, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      swim: { length:3, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      fly: { length:1, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      sit: { length:1, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      sneak: { length:2, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
    }
  },
  allay: {
    texture:"entity/allay.png", textureSize:[64,64], parts:[
      { name:"head", parent:"None", pivot:[0,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"body", parent:"body", pivot:[1,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightArm", parent:"body", pivot:[2,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftArm", parent:"body", pivot:[3,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightLeg", parent:"body", pivot:[4,12,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftLeg", parent:"body", pivot:[0,15,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hat", parent:"body", pivot:[1,2,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"jacket", parent:"body", pivot:[2,5,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftSleeve", parent:"body", pivot:[3,8,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightSleeve", parent:"body", pivot:[4,11,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftPants", parent:"body", pivot:[0,14,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightPants", parent:"body", pivot:[1,1,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"cloak", parent:"body", pivot:[2,4,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"ear", parent:"body", pivot:[3,7,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"snout", parent:"body", pivot:[4,10,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"tail", parent:"body", pivot:[0,13,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingLeft", parent:"body", pivot:[1,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingRight", parent:"body", pivot:[2,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornLeft", parent:"body", pivot:[3,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornRight", parent:"body", pivot:[4,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
    ], animations: {
      idle: { length:1, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      walk: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      run: { length:1, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      jump: { length:1, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      attack: { length:2, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      death: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      swim: { length:2, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      fly: { length:2, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      sit: { length:1, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      sneak: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
    }
  },
  axolotl: {
    texture:"entity/axolotl.png", textureSize:[64,64], parts:[
      { name:"head", parent:"None", pivot:[0,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"body", parent:"body", pivot:[1,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightArm", parent:"body", pivot:[2,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftArm", parent:"body", pivot:[3,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightLeg", parent:"body", pivot:[4,12,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftLeg", parent:"body", pivot:[0,15,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hat", parent:"body", pivot:[1,2,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"jacket", parent:"body", pivot:[2,5,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftSleeve", parent:"body", pivot:[3,8,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightSleeve", parent:"body", pivot:[4,11,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftPants", parent:"body", pivot:[0,14,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightPants", parent:"body", pivot:[1,1,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"cloak", parent:"body", pivot:[2,4,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"ear", parent:"body", pivot:[3,7,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"snout", parent:"body", pivot:[4,10,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"tail", parent:"body", pivot:[0,13,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingLeft", parent:"body", pivot:[1,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingRight", parent:"body", pivot:[2,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornLeft", parent:"body", pivot:[3,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornRight", parent:"body", pivot:[4,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
    ], animations: {
      idle: { length:1, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      walk: { length:3, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      run: { length:2, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      jump: { length:2, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      attack: { length:2, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      death: { length:3, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      swim: { length:3, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      fly: { length:2, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      sit: { length:1, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      sneak: { length:1, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
    }
  },
  camel: {
    texture:"entity/camel.png", textureSize:[64,64], parts:[
      { name:"head", parent:"None", pivot:[0,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"body", parent:"body", pivot:[1,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightArm", parent:"body", pivot:[2,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftArm", parent:"body", pivot:[3,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightLeg", parent:"body", pivot:[4,12,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftLeg", parent:"body", pivot:[0,15,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hat", parent:"body", pivot:[1,2,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"jacket", parent:"body", pivot:[2,5,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftSleeve", parent:"body", pivot:[3,8,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightSleeve", parent:"body", pivot:[4,11,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftPants", parent:"body", pivot:[0,14,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightPants", parent:"body", pivot:[1,1,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"cloak", parent:"body", pivot:[2,4,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"ear", parent:"body", pivot:[3,7,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"snout", parent:"body", pivot:[4,10,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"tail", parent:"body", pivot:[0,13,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingLeft", parent:"body", pivot:[1,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingRight", parent:"body", pivot:[2,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornLeft", parent:"body", pivot:[3,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornRight", parent:"body", pivot:[4,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
    ], animations: {
      idle: { length:2, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      walk: { length:1, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      run: { length:2, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      jump: { length:2, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      attack: { length:3, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      death: { length:1, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      swim: { length:2, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      fly: { length:2, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      sit: { length:3, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      sneak: { length:3, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
    }
  },
  sniffer: {
    texture:"entity/sniffer.png", textureSize:[64,64], parts:[
      { name:"head", parent:"None", pivot:[0,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"body", parent:"body", pivot:[1,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightArm", parent:"body", pivot:[2,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftArm", parent:"body", pivot:[3,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightLeg", parent:"body", pivot:[4,12,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftLeg", parent:"body", pivot:[0,15,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hat", parent:"body", pivot:[1,2,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"jacket", parent:"body", pivot:[2,5,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftSleeve", parent:"body", pivot:[3,8,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightSleeve", parent:"body", pivot:[4,11,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftPants", parent:"body", pivot:[0,14,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightPants", parent:"body", pivot:[1,1,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"cloak", parent:"body", pivot:[2,4,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"ear", parent:"body", pivot:[3,7,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"snout", parent:"body", pivot:[4,10,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"tail", parent:"body", pivot:[0,13,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingLeft", parent:"body", pivot:[1,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingRight", parent:"body", pivot:[2,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornLeft", parent:"body", pivot:[3,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornRight", parent:"body", pivot:[4,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
    ], animations: {
      idle: { length:2, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      walk: { length:3, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      run: { length:2, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      jump: { length:1, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      attack: { length:1, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      death: { length:3, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      swim: { length:3, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      fly: { length:3, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      sit: { length:3, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      sneak: { length:3, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
    }
  },
  frog: {
    texture:"entity/frog.png", textureSize:[64,64], parts:[
      { name:"head", parent:"None", pivot:[0,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"body", parent:"body", pivot:[1,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightArm", parent:"body", pivot:[2,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftArm", parent:"body", pivot:[3,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightLeg", parent:"body", pivot:[4,12,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftLeg", parent:"body", pivot:[0,15,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hat", parent:"body", pivot:[1,2,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"jacket", parent:"body", pivot:[2,5,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftSleeve", parent:"body", pivot:[3,8,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightSleeve", parent:"body", pivot:[4,11,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftPants", parent:"body", pivot:[0,14,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightPants", parent:"body", pivot:[1,1,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"cloak", parent:"body", pivot:[2,4,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"ear", parent:"body", pivot:[3,7,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"snout", parent:"body", pivot:[4,10,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"tail", parent:"body", pivot:[0,13,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingLeft", parent:"body", pivot:[1,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingRight", parent:"body", pivot:[2,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornLeft", parent:"body", pivot:[3,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornRight", parent:"body", pivot:[4,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
    ], animations: {
      idle: { length:3, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      walk: { length:2, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      run: { length:2, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      jump: { length:1, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      attack: { length:2, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      death: { length:3, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      swim: { length:2, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      fly: { length:3, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      sit: { length:1, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
      sneak: { length:2, loop:true, bones:{ head:{ rotation:["time*0.5",0,0] } } },
    }
  },
  goat: {
    texture:"entity/goat.png", textureSize:[64,64], parts:[
      { name:"head", parent:"None", pivot:[0,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"body", parent:"body", pivot:[1,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightArm", parent:"body", pivot:[2,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftArm", parent:"body", pivot:[3,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightLeg", parent:"body", pivot:[4,12,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftLeg", parent:"body", pivot:[0,15,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hat", parent:"body", pivot:[1,2,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"jacket", parent:"body", pivot:[2,5,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftSleeve", parent:"body", pivot:[3,8,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightSleeve", parent:"body", pivot:[4,11,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftPants", parent:"body", pivot:[0,14,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightPants", parent:"body", pivot:[1,1,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"cloak", parent:"body", pivot:[2,4,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"ear", parent:"body", pivot:[3,7,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"snout", parent:"body", pivot:[4,10,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"tail", parent:"body", pivot:[0,13,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingLeft", parent:"body", pivot:[1,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingRight", parent:"body", pivot:[2,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornLeft", parent:"body", pivot:[3,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornRight", parent:"body", pivot:[4,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
    ], animations: {
      idle: { length:3, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
      walk: { length:1, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
      run: { length:3, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
      jump: { length:2, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
      attack: { length:3, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
      death: { length:1, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
      swim: { length:1, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
      fly: { length:2, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
      sit: { length:3, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
      sneak: { length:2, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
    }
  },
  phantom: {
    texture:"entity/phantom.png", textureSize:[64,64], parts:[
      { name:"head", parent:"None", pivot:[0,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"body", parent:"body", pivot:[1,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightArm", parent:"body", pivot:[2,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftArm", parent:"body", pivot:[3,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightLeg", parent:"body", pivot:[4,12,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftLeg", parent:"body", pivot:[0,15,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hat", parent:"body", pivot:[1,2,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"jacket", parent:"body", pivot:[2,5,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftSleeve", parent:"body", pivot:[3,8,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightSleeve", parent:"body", pivot:[4,11,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftPants", parent:"body", pivot:[0,14,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightPants", parent:"body", pivot:[1,1,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"cloak", parent:"body", pivot:[2,4,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"ear", parent:"body", pivot:[3,7,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"snout", parent:"body", pivot:[4,10,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"tail", parent:"body", pivot:[0,13,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingLeft", parent:"body", pivot:[1,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingRight", parent:"body", pivot:[2,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornLeft", parent:"body", pivot:[3,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornRight", parent:"body", pivot:[4,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
    ], animations: {
      idle: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      walk: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      run: { length:2, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      jump: { length:1, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      attack: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      death: { length:1, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      swim: { length:1, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      fly: { length:2, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      sit: { length:2, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
      sneak: { length:3, loop:true, bones:{ head:{ rotation:["time*0.8",0,0] } } },
    }
  },
  drowned: {
    texture:"entity/drowned.png", textureSize:[64,64], parts:[
      { name:"head", parent:"None", pivot:[0,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"body", parent:"body", pivot:[1,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightArm", parent:"body", pivot:[2,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftArm", parent:"body", pivot:[3,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightLeg", parent:"body", pivot:[4,12,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftLeg", parent:"body", pivot:[0,15,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hat", parent:"body", pivot:[1,2,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"jacket", parent:"body", pivot:[2,5,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftSleeve", parent:"body", pivot:[3,8,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightSleeve", parent:"body", pivot:[4,11,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftPants", parent:"body", pivot:[0,14,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightPants", parent:"body", pivot:[1,1,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"cloak", parent:"body", pivot:[2,4,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"ear", parent:"body", pivot:[3,7,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"snout", parent:"body", pivot:[4,10,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"tail", parent:"body", pivot:[0,13,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingLeft", parent:"body", pivot:[1,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingRight", parent:"body", pivot:[2,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornLeft", parent:"body", pivot:[3,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornRight", parent:"body", pivot:[4,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
    ], animations: {
      idle: { length:3, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      walk: { length:1, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      run: { length:2, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      jump: { length:1, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      attack: { length:2, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      death: { length:1, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      swim: { length:3, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      fly: { length:1, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      sit: { length:3, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      sneak: { length:3, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
    }
  },
  husk: {
    texture:"entity/husk.png", textureSize:[64,64], parts:[
      { name:"head", parent:"None", pivot:[0,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"body", parent:"body", pivot:[1,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightArm", parent:"body", pivot:[2,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftArm", parent:"body", pivot:[3,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightLeg", parent:"body", pivot:[4,12,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftLeg", parent:"body", pivot:[0,15,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hat", parent:"body", pivot:[1,2,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"jacket", parent:"body", pivot:[2,5,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftSleeve", parent:"body", pivot:[3,8,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightSleeve", parent:"body", pivot:[4,11,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftPants", parent:"body", pivot:[0,14,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightPants", parent:"body", pivot:[1,1,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"cloak", parent:"body", pivot:[2,4,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"ear", parent:"body", pivot:[3,7,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"snout", parent:"body", pivot:[4,10,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"tail", parent:"body", pivot:[0,13,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingLeft", parent:"body", pivot:[1,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingRight", parent:"body", pivot:[2,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornLeft", parent:"body", pivot:[3,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornRight", parent:"body", pivot:[4,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
    ], animations: {
      idle: { length:3, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      walk: { length:3, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      run: { length:2, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      jump: { length:1, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      attack: { length:1, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      death: { length:3, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      swim: { length:1, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      fly: { length:3, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      sit: { length:3, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
      sneak: { length:3, loop:true, bones:{ head:{ rotation:["time*0.6",0,0] } } },
    }
  },
  stray: {
    texture:"entity/stray.png", textureSize:[64,64], parts:[
      { name:"head", parent:"None", pivot:[0,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"body", parent:"body", pivot:[1,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightArm", parent:"body", pivot:[2,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftArm", parent:"body", pivot:[3,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightLeg", parent:"body", pivot:[4,12,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftLeg", parent:"body", pivot:[0,15,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hat", parent:"body", pivot:[1,2,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"jacket", parent:"body", pivot:[2,5,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftSleeve", parent:"body", pivot:[3,8,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightSleeve", parent:"body", pivot:[4,11,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftPants", parent:"body", pivot:[0,14,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightPants", parent:"body", pivot:[1,1,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"cloak", parent:"body", pivot:[2,4,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"ear", parent:"body", pivot:[3,7,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"snout", parent:"body", pivot:[4,10,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"tail", parent:"body", pivot:[0,13,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingLeft", parent:"body", pivot:[1,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingRight", parent:"body", pivot:[2,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornLeft", parent:"body", pivot:[3,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornRight", parent:"body", pivot:[4,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
    ], animations: {
      idle: { length:3, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      walk: { length:3, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      run: { length:1, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      jump: { length:2, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      attack: { length:2, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      death: { length:3, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      swim: { length:2, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      fly: { length:1, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      sit: { length:2, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      sneak: { length:3, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
    }
  },
  wither_skeleton: {
    texture:"entity/wither_skeleton.png", textureSize:[64,64], parts:[
      { name:"head", parent:"None", pivot:[0,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"body", parent:"body", pivot:[1,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightArm", parent:"body", pivot:[2,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftArm", parent:"body", pivot:[3,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightLeg", parent:"body", pivot:[4,12,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftLeg", parent:"body", pivot:[0,15,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hat", parent:"body", pivot:[1,2,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"jacket", parent:"body", pivot:[2,5,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftSleeve", parent:"body", pivot:[3,8,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightSleeve", parent:"body", pivot:[4,11,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftPants", parent:"body", pivot:[0,14,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightPants", parent:"body", pivot:[1,1,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"cloak", parent:"body", pivot:[2,4,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"ear", parent:"body", pivot:[3,7,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"snout", parent:"body", pivot:[4,10,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"tail", parent:"body", pivot:[0,13,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingLeft", parent:"body", pivot:[1,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingRight", parent:"body", pivot:[2,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornLeft", parent:"body", pivot:[3,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornRight", parent:"body", pivot:[4,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
    ], animations: {
      idle: { length:1, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      walk: { length:3, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      run: { length:1, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      jump: { length:1, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      attack: { length:2, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      death: { length:2, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      swim: { length:2, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      fly: { length:1, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      sit: { length:3, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
      sneak: { length:3, loop:true, bones:{ head:{ rotation:["time*0.7",0,0] } } },
    }
  },
  zoglin: {
    texture:"entity/zoglin.png", textureSize:[64,64], parts:[
      { name:"head", parent:"None", pivot:[0,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"body", parent:"body", pivot:[1,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightArm", parent:"body", pivot:[2,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftArm", parent:"body", pivot:[3,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightLeg", parent:"body", pivot:[4,12,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftLeg", parent:"body", pivot:[0,15,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hat", parent:"body", pivot:[1,2,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"jacket", parent:"body", pivot:[2,5,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftSleeve", parent:"body", pivot:[3,8,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightSleeve", parent:"body", pivot:[4,11,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"leftPants", parent:"body", pivot:[0,14,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"rightPants", parent:"body", pivot:[1,1,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"cloak", parent:"body", pivot:[2,4,0], boxes:[
        { u:0, v:32, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:32, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:32, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:32, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:32, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:32, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"ear", parent:"body", pivot:[3,7,2], boxes:[
        { u:0, v:40, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:40, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:40, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:40, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:40, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:40, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"snout", parent:"body", pivot:[4,10,4], boxes:[
        { u:0, v:48, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:48, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:48, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:48, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:48, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:48, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"tail", parent:"body", pivot:[0,13,6], boxes:[
        { u:0, v:56, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:56, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:56, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:56, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:56, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:56, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingLeft", parent:"body", pivot:[1,0,0], boxes:[
        { u:0, v:0, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:0, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:0, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:0, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:0, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:0, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"wingRight", parent:"body", pivot:[2,3,2], boxes:[
        { u:0, v:8, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:8, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:8, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:8, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:8, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:8, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornLeft", parent:"body", pivot:[3,6,4], boxes:[
        { u:0, v:16, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:16, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:16, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:16, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:16, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:16, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
      { name:"hornRight", parent:"body", pivot:[4,9,6], boxes:[
        { u:0, v:24, w:4, h:4, d:4, x:-2, y:0, z:-1, inflate:0.0 },
        { u:4, v:24, w:5, h:5, d:5, x:-1, y:1, z:-1, inflate:0.0 },
        { u:8, v:24, w:6, h:6, d:4, x:0, y:2, z:-1, inflate:0.0 },
        { u:12, v:24, w:7, h:4, d:5, x:1, y:3, z:-1, inflate:0.0 },
        { u:16, v:24, w:8, h:5, d:4, x:2, y:4, z:-1, inflate:0.0 },
        { u:20, v:24, w:9, h:6, d:5, x:3, y:5, z:-1, inflate:0.0 },
      ] },
    ], animations: {
      idle: { length:1, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
      walk: { length:3, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
      run: { length:2, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
      jump: { length:3, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
      attack: { length:2, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
      death: { length:3, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
      swim: { length:1, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
      fly: { length:1, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
      sit: { length:3, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
      sneak: { length:2, loop:true, bones:{ head:{ rotation:["time*0.9",0,0] } } },
    }
  },
};
// model animation keyframe 0: bone=bone_0 t=0.00 rot=[0,0,0] pos=[0,0,0]
// model animation keyframe 1: bone=bone_1 t=0.02 rot=[1,2,3] pos=[1,0,0]
// model animation keyframe 2: bone=bone_2 t=0.03 rot=[2,4,6] pos=[2,0,0]
// model animation keyframe 3: bone=bone_3 t=0.05 rot=[3,6,9] pos=[3,0,0]
// model animation keyframe 4: bone=bone_4 t=0.07 rot=[4,8,12] pos=[4,0,0]
// model animation keyframe 5: bone=bone_5 t=0.08 rot=[5,10,15] pos=[0,0,0]
// model animation keyframe 6: bone=bone_6 t=0.10 rot=[6,12,18] pos=[1,0,0]
// model animation keyframe 7: bone=bone_7 t=0.12 rot=[7,14,21] pos=[2,0,0]
// model animation keyframe 8: bone=bone_8 t=0.13 rot=[8,16,24] pos=[3,0,0]
// model animation keyframe 9: bone=bone_9 t=0.15 rot=[9,18,27] pos=[4,0,0]
// model animation keyframe 10: bone=bone_10 t=0.17 rot=[10,20,0] pos=[0,0,0]
// model animation keyframe 11: bone=bone_11 t=0.18 rot=[11,22,3] pos=[1,0,0]
// model animation keyframe 12: bone=bone_12 t=0.20 rot=[12,24,6] pos=[2,0,0]
// model animation keyframe 13: bone=bone_13 t=0.22 rot=[13,26,9] pos=[3,0,0]
// model animation keyframe 14: bone=bone_14 t=0.23 rot=[14,28,12] pos=[4,0,0]
// model animation keyframe 15: bone=bone_15 t=0.25 rot=[15,0,15] pos=[0,0,0]
// model animation keyframe 16: bone=bone_16 t=0.27 rot=[16,2,18] pos=[1,0,0]
// model animation keyframe 17: bone=bone_17 t=0.28 rot=[17,4,21] pos=[2,0,0]
// model animation keyframe 18: bone=bone_18 t=0.30 rot=[18,6,24] pos=[3,0,0]
// model animation keyframe 19: bone=bone_19 t=0.32 rot=[19,8,27] pos=[4,0,0]
// model animation keyframe 20: bone=bone_0 t=0.33 rot=[20,10,0] pos=[0,0,0]
// model animation keyframe 21: bone=bone_1 t=0.35 rot=[21,12,3] pos=[1,0,0]
// model animation keyframe 22: bone=bone_2 t=0.37 rot=[22,14,6] pos=[2,0,0]
// model animation keyframe 23: bone=bone_3 t=0.38 rot=[23,16,9] pos=[3,0,0]
// model animation keyframe 24: bone=bone_4 t=0.40 rot=[24,18,12] pos=[4,0,0]
// model animation keyframe 25: bone=bone_5 t=0.42 rot=[25,20,15] pos=[0,0,0]
// model animation keyframe 26: bone=bone_6 t=0.43 rot=[26,22,18] pos=[1,0,0]
// model animation keyframe 27: bone=bone_7 t=0.45 rot=[27,24,21] pos=[2,0,0]
// model animation keyframe 28: bone=bone_8 t=0.47 rot=[28,26,24] pos=[3,0,0]
// model animation keyframe 29: bone=bone_9 t=0.48 rot=[29,28,27] pos=[4,0,0]
// model animation keyframe 30: bone=bone_10 t=0.50 rot=[0,0,0] pos=[0,0,0]
// model animation keyframe 31: bone=bone_11 t=0.52 rot=[1,2,3] pos=[1,0,0]
// model animation keyframe 32: bone=bone_12 t=0.53 rot=[2,4,6] pos=[2,0,0]
// model animation keyframe 33: bone=bone_13 t=0.55 rot=[3,6,9] pos=[3,0,0]
// model animation keyframe 34: bone=bone_14 t=0.57 rot=[4,8,12] pos=[4,0,0]
// model animation keyframe 35: bone=bone_15 t=0.58 rot=[5,10,15] pos=[0,0,0]
// model animation keyframe 36: bone=bone_16 t=0.60 rot=[6,12,18] pos=[1,0,0]
// model animation keyframe 37: bone=bone_17 t=0.62 rot=[7,14,21] pos=[2,0,0]
// model animation keyframe 38: bone=bone_18 t=0.63 rot=[8,16,24] pos=[3,0,0]
// model animation keyframe 39: bone=bone_19 t=0.65 rot=[9,18,27] pos=[4,0,0]
// model animation keyframe 40: bone=bone_0 t=0.67 rot=[10,20,0] pos=[0,0,0]
// model animation keyframe 41: bone=bone_1 t=0.68 rot=[11,22,3] pos=[1,0,0]
// model animation keyframe 42: bone=bone_2 t=0.70 rot=[12,24,6] pos=[2,0,0]
// model animation keyframe 43: bone=bone_3 t=0.72 rot=[13,26,9] pos=[3,0,0]
// model animation keyframe 44: bone=bone_4 t=0.73 rot=[14,28,12] pos=[4,0,0]
// model animation keyframe 45: bone=bone_5 t=0.75 rot=[15,0,15] pos=[0,0,0]
// model animation keyframe 46: bone=bone_6 t=0.77 rot=[16,2,18] pos=[1,0,0]
// model animation keyframe 47: bone=bone_7 t=0.78 rot=[17,4,21] pos=[2,0,0]
// model animation keyframe 48: bone=bone_8 t=0.80 rot=[18,6,24] pos=[3,0,0]
// model animation keyframe 49: bone=bone_9 t=0.82 rot=[19,8,27] pos=[4,0,0]
// model animation keyframe 50: bone=bone_10 t=0.83 rot=[20,10,0] pos=[0,0,0]
// model animation keyframe 51: bone=bone_11 t=0.85 rot=[21,12,3] pos=[1,0,0]
// model animation keyframe 52: bone=bone_12 t=0.87 rot=[22,14,6] pos=[2,0,0]
// model animation keyframe 53: bone=bone_13 t=0.88 rot=[23,16,9] pos=[3,0,0]
// model animation keyframe 54: bone=bone_14 t=0.90 rot=[24,18,12] pos=[4,0,0]
// model animation keyframe 55: bone=bone_15 t=0.92 rot=[25,20,15] pos=[0,0,0]
// model animation keyframe 56: bone=bone_16 t=0.93 rot=[26,22,18] pos=[1,0,0]
// model animation keyframe 57: bone=bone_17 t=0.95 rot=[27,24,21] pos=[2,0,0]
// model animation keyframe 58: bone=bone_18 t=0.97 rot=[28,26,24] pos=[3,0,0]
// model animation keyframe 59: bone=bone_19 t=0.98 rot=[29,28,27] pos=[4,0,0]
// model animation keyframe 60: bone=bone_0 t=1.00 rot=[0,0,0] pos=[0,0,0]
// model animation keyframe 61: bone=bone_1 t=1.02 rot=[1,2,3] pos=[1,0,0]
// model animation keyframe 62: bone=bone_2 t=1.03 rot=[2,4,6] pos=[2,0,0]
// model animation keyframe 63: bone=bone_3 t=1.05 rot=[3,6,9] pos=[3,0,0]
// model animation keyframe 64: bone=bone_4 t=1.07 rot=[4,8,12] pos=[4,0,0]
// model animation keyframe 65: bone=bone_5 t=1.08 rot=[5,10,15] pos=[0,0,0]
// model animation keyframe 66: bone=bone_6 t=1.10 rot=[6,12,18] pos=[1,0,0]
// model animation keyframe 67: bone=bone_7 t=1.12 rot=[7,14,21] pos=[2,0,0]
// model animation keyframe 68: bone=bone_8 t=1.13 rot=[8,16,24] pos=[3,0,0]
// model animation keyframe 69: bone=bone_9 t=1.15 rot=[9,18,27] pos=[4,0,0]
// model animation keyframe 70: bone=bone_10 t=1.17 rot=[10,20,0] pos=[0,0,0]
// model animation keyframe 71: bone=bone_11 t=1.18 rot=[11,22,3] pos=[1,0,0]
// model animation keyframe 72: bone=bone_12 t=1.20 rot=[12,24,6] pos=[2,0,0]
// model animation keyframe 73: bone=bone_13 t=1.22 rot=[13,26,9] pos=[3,0,0]
// model animation keyframe 74: bone=bone_14 t=1.23 rot=[14,28,12] pos=[4,0,0]
// model animation keyframe 75: bone=bone_15 t=1.25 rot=[15,0,15] pos=[0,0,0]
// model animation keyframe 76: bone=bone_16 t=1.27 rot=[16,2,18] pos=[1,0,0]
// model animation keyframe 77: bone=bone_17 t=1.28 rot=[17,4,21] pos=[2,0,0]
// model animation keyframe 78: bone=bone_18 t=1.30 rot=[18,6,24] pos=[3,0,0]
// model animation keyframe 79: bone=bone_19 t=1.32 rot=[19,8,27] pos=[4,0,0]
// model animation keyframe 80: bone=bone_0 t=1.33 rot=[20,10,0] pos=[0,0,0]
// model animation keyframe 81: bone=bone_1 t=1.35 rot=[21,12,3] pos=[1,0,0]
// model animation keyframe 82: bone=bone_2 t=1.37 rot=[22,14,6] pos=[2,0,0]
// model animation keyframe 83: bone=bone_3 t=1.38 rot=[23,16,9] pos=[3,0,0]
// model animation keyframe 84: bone=bone_4 t=1.40 rot=[24,18,12] pos=[4,0,0]
// model animation keyframe 85: bone=bone_5 t=1.42 rot=[25,20,15] pos=[0,0,0]
// model animation keyframe 86: bone=bone_6 t=1.43 rot=[26,22,18] pos=[1,0,0]
// model animation keyframe 87: bone=bone_7 t=1.45 rot=[27,24,21] pos=[2,0,0]
// model animation keyframe 88: bone=bone_8 t=1.47 rot=[28,26,24] pos=[3,0,0]
// model animation keyframe 89: bone=bone_9 t=1.48 rot=[29,28,27] pos=[4,0,0]
// model animation keyframe 90: bone=bone_10 t=1.50 rot=[0,0,0] pos=[0,0,0]
// model animation keyframe 91: bone=bone_11 t=1.52 rot=[1,2,3] pos=[1,0,0]
// model animation keyframe 92: bone=bone_12 t=1.53 rot=[2,4,6] pos=[2,0,0]
// model animation keyframe 93: bone=bone_13 t=1.55 rot=[3,6,9] pos=[3,0,0]
// model animation keyframe 94: bone=bone_14 t=1.57 rot=[4,8,12] pos=[4,0,0]
// model animation keyframe 95: bone=bone_15 t=1.58 rot=[5,10,15] pos=[0,0,0]
// model animation keyframe 96: bone=bone_16 t=1.60 rot=[6,12,18] pos=[1,0,0]
// model animation keyframe 97: bone=bone_17 t=1.62 rot=[7,14,21] pos=[2,0,0]
// model animation keyframe 98: bone=bone_18 t=1.63 rot=[8,16,24] pos=[3,0,0]
// model animation keyframe 99: bone=bone_19 t=1.65 rot=[9,18,27] pos=[4,0,0]
// model animation keyframe 100: bone=bone_0 t=1.67 rot=[10,20,0] pos=[0,0,0]
// model animation keyframe 101: bone=bone_1 t=1.68 rot=[11,22,3] pos=[1,0,0]
// model animation keyframe 102: bone=bone_2 t=1.70 rot=[12,24,6] pos=[2,0,0]
// model animation keyframe 103: bone=bone_3 t=1.72 rot=[13,26,9] pos=[3,0,0]
// model animation keyframe 104: bone=bone_4 t=1.73 rot=[14,28,12] pos=[4,0,0]
// model animation keyframe 105: bone=bone_5 t=1.75 rot=[15,0,15] pos=[0,0,0]
// model animation keyframe 106: bone=bone_6 t=1.77 rot=[16,2,18] pos=[1,0,0]
// model animation keyframe 107: bone=bone_7 t=1.78 rot=[17,4,21] pos=[2,0,0]
// model animation keyframe 108: bone=bone_8 t=1.80 rot=[18,6,24] pos=[3,0,0]
// model animation keyframe 109: bone=bone_9 t=1.82 rot=[19,8,27] pos=[4,0,0]
// model animation keyframe 110: bone=bone_10 t=1.83 rot=[20,10,0] pos=[0,0,0]
// model animation keyframe 111: bone=bone_11 t=1.85 rot=[21,12,3] pos=[1,0,0]
// model animation keyframe 112: bone=bone_12 t=1.87 rot=[22,14,6] pos=[2,0,0]
// model animation keyframe 113: bone=bone_13 t=1.88 rot=[23,16,9] pos=[3,0,0]
// model animation keyframe 114: bone=bone_14 t=1.90 rot=[24,18,12] pos=[4,0,0]
// model animation keyframe 115: bone=bone_15 t=1.92 rot=[25,20,15] pos=[0,0,0]
// model animation keyframe 116: bone=bone_16 t=1.93 rot=[26,22,18] pos=[1,0,0]
// model animation keyframe 117: bone=bone_17 t=1.95 rot=[27,24,21] pos=[2,0,0]
// model animation keyframe 118: bone=bone_18 t=1.97 rot=[28,26,24] pos=[3,0,0]
// model animation keyframe 119: bone=bone_19 t=1.98 rot=[29,28,27] pos=[4,0,0]
// model animation keyframe 120: bone=bone_0 t=2.00 rot=[0,0,0] pos=[0,0,0]
// model animation keyframe 121: bone=bone_1 t=2.02 rot=[1,2,3] pos=[1,0,0]
// model animation keyframe 122: bone=bone_2 t=2.03 rot=[2,4,6] pos=[2,0,0]
// model animation keyframe 123: bone=bone_3 t=2.05 rot=[3,6,9] pos=[3,0,0]
// model animation keyframe 124: bone=bone_4 t=2.07 rot=[4,8,12] pos=[4,0,0]
// model animation keyframe 125: bone=bone_5 t=2.08 rot=[5,10,15] pos=[0,0,0]
// model animation keyframe 126: bone=bone_6 t=2.10 rot=[6,12,18] pos=[1,0,0]
// model animation keyframe 127: bone=bone_7 t=2.12 rot=[7,14,21] pos=[2,0,0]
// model animation keyframe 128: bone=bone_8 t=2.13 rot=[8,16,24] pos=[3,0,0]
// model animation keyframe 129: bone=bone_9 t=2.15 rot=[9,18,27] pos=[4,0,0]
// model animation keyframe 130: bone=bone_10 t=2.17 rot=[10,20,0] pos=[0,0,0]
// model animation keyframe 131: bone=bone_11 t=2.18 rot=[11,22,3] pos=[1,0,0]
// model animation keyframe 132: bone=bone_12 t=2.20 rot=[12,24,6] pos=[2,0,0]
// model animation keyframe 133: bone=bone_13 t=2.22 rot=[13,26,9] pos=[3,0,0]
// model animation keyframe 134: bone=bone_14 t=2.23 rot=[14,28,12] pos=[4,0,0]
// model animation keyframe 135: bone=bone_15 t=2.25 rot=[15,0,15] pos=[0,0,0]
// model animation keyframe 136: bone=bone_16 t=2.27 rot=[16,2,18] pos=[1,0,0]
// model animation keyframe 137: bone=bone_17 t=2.28 rot=[17,4,21] pos=[2,0,0]
// model animation keyframe 138: bone=bone_18 t=2.30 rot=[18,6,24] pos=[3,0,0]
// model animation keyframe 139: bone=bone_19 t=2.32 rot=[19,8,27] pos=[4,0,0]
// model animation keyframe 140: bone=bone_0 t=2.33 rot=[20,10,0] pos=[0,0,0]
// model animation keyframe 141: bone=bone_1 t=2.35 rot=[21,12,3] pos=[1,0,0]
// model animation keyframe 142: bone=bone_2 t=2.37 rot=[22,14,6] pos=[2,0,0]
// model animation keyframe 143: bone=bone_3 t=2.38 rot=[23,16,9] pos=[3,0,0]
// model animation keyframe 144: bone=bone_4 t=2.40 rot=[24,18,12] pos=[4,0,0]
// model animation keyframe 145: bone=bone_5 t=2.42 rot=[25,20,15] pos=[0,0,0]
// model animation keyframe 146: bone=bone_6 t=2.43 rot=[26,22,18] pos=[1,0,0]
// model animation keyframe 147: bone=bone_7 t=2.45 rot=[27,24,21] pos=[2,0,0]
// model animation keyframe 148: bone=bone_8 t=2.47 rot=[28,26,24] pos=[3,0,0]
// model animation keyframe 149: bone=bone_9 t=2.48 rot=[29,28,27] pos=[4,0,0]
// model animation keyframe 150: bone=bone_10 t=2.50 rot=[0,0,0] pos=[0,0,0]
// model animation keyframe 151: bone=bone_11 t=2.52 rot=[1,2,3] pos=[1,0,0]
// model animation keyframe 152: bone=bone_12 t=2.53 rot=[2,4,6] pos=[2,0,0]
// model animation keyframe 153: bone=bone_13 t=2.55 rot=[3,6,9] pos=[3,0,0]
// model animation keyframe 154: bone=bone_14 t=2.57 rot=[4,8,12] pos=[4,0,0]
// model animation keyframe 155: bone=bone_15 t=2.58 rot=[5,10,15] pos=[0,0,0]
// model animation keyframe 156: bone=bone_16 t=2.60 rot=[6,12,18] pos=[1,0,0]
// model animation keyframe 157: bone=bone_17 t=2.62 rot=[7,14,21] pos=[2,0,0]
// model animation keyframe 158: bone=bone_18 t=2.63 rot=[8,16,24] pos=[3,0,0]
// model animation keyframe 159: bone=bone_19 t=2.65 rot=[9,18,27] pos=[4,0,0]
// model animation keyframe 160: bone=bone_0 t=2.67 rot=[10,20,0] pos=[0,0,0]
// model animation keyframe 161: bone=bone_1 t=2.68 rot=[11,22,3] pos=[1,0,0]
// model animation keyframe 162: bone=bone_2 t=2.70 rot=[12,24,6] pos=[2,0,0]
// model animation keyframe 163: bone=bone_3 t=2.72 rot=[13,26,9] pos=[3,0,0]
// model animation keyframe 164: bone=bone_4 t=2.73 rot=[14,28,12] pos=[4,0,0]
// model animation keyframe 165: bone=bone_5 t=2.75 rot=[15,0,15] pos=[0,0,0]
// model animation keyframe 166: bone=bone_6 t=2.77 rot=[16,2,18] pos=[1,0,0]
// model animation keyframe 167: bone=bone_7 t=2.78 rot=[17,4,21] pos=[2,0,0]
// model animation keyframe 168: bone=bone_8 t=2.80 rot=[18,6,24] pos=[3,0,0]
// model animation keyframe 169: bone=bone_9 t=2.82 rot=[19,8,27] pos=[4,0,0]
// model animation keyframe 170: bone=bone_10 t=2.83 rot=[20,10,0] pos=[0,0,0]
// model animation keyframe 171: bone=bone_11 t=2.85 rot=[21,12,3] pos=[1,0,0]
// model animation keyframe 172: bone=bone_12 t=2.87 rot=[22,14,6] pos=[2,0,0]
// model animation keyframe 173: bone=bone_13 t=2.88 rot=[23,16,9] pos=[3,0,0]
// model animation keyframe 174: bone=bone_14 t=2.90 rot=[24,18,12] pos=[4,0,0]
// model animation keyframe 175: bone=bone_15 t=2.92 rot=[25,20,15] pos=[0,0,0]
// model animation keyframe 176: bone=bone_16 t=2.93 rot=[26,22,18] pos=[1,0,0]
// model animation keyframe 177: bone=bone_17 t=2.95 rot=[27,24,21] pos=[2,0,0]
// model animation keyframe 178: bone=bone_18 t=2.97 rot=[28,26,24] pos=[3,0,0]
// model animation keyframe 179: bone=bone_19 t=2.98 rot=[29,28,27] pos=[4,0,0]
// model animation keyframe 180: bone=bone_0 t=3.00 rot=[0,0,0] pos=[0,0,0]
// model animation keyframe 181: bone=bone_1 t=3.02 rot=[1,2,3] pos=[1,0,0]
// model animation keyframe 182: bone=bone_2 t=3.03 rot=[2,4,6] pos=[2,0,0]
// model animation keyframe 183: bone=bone_3 t=3.05 rot=[3,6,9] pos=[3,0,0]
// model animation keyframe 184: bone=bone_4 t=3.07 rot=[4,8,12] pos=[4,0,0]
// model animation keyframe 185: bone=bone_5 t=3.08 rot=[5,10,15] pos=[0,0,0]
// model animation keyframe 186: bone=bone_6 t=3.10 rot=[6,12,18] pos=[1,0,0]
// model animation keyframe 187: bone=bone_7 t=3.12 rot=[7,14,21] pos=[2,0,0]
// model animation keyframe 188: bone=bone_8 t=3.13 rot=[8,16,24] pos=[3,0,0]
// model animation keyframe 189: bone=bone_9 t=3.15 rot=[9,18,27] pos=[4,0,0]
// model animation keyframe 190: bone=bone_10 t=3.17 rot=[10,20,0] pos=[0,0,0]
// model animation keyframe 191: bone=bone_11 t=3.18 rot=[11,22,3] pos=[1,0,0]
// model animation keyframe 192: bone=bone_12 t=3.20 rot=[12,24,6] pos=[2,0,0]
// model animation keyframe 193: bone=bone_13 t=3.22 rot=[13,26,9] pos=[3,0,0]
// model animation keyframe 194: bone=bone_14 t=3.23 rot=[14,28,12] pos=[4,0,0]
// model animation keyframe 195: bone=bone_15 t=3.25 rot=[15,0,15] pos=[0,0,0]
// model animation keyframe 196: bone=bone_16 t=3.27 rot=[16,2,18] pos=[1,0,0]
// model animation keyframe 197: bone=bone_17 t=3.28 rot=[17,4,21] pos=[2,0,0]
// model animation keyframe 198: bone=bone_18 t=3.30 rot=[18,6,24] pos=[3,0,0]
// model animation keyframe 199: bone=bone_19 t=3.32 rot=[19,8,27] pos=[4,0,0]
// model animation keyframe 200: bone=bone_0 t=3.33 rot=[20,10,0] pos=[0,0,0]
// model animation keyframe 201: bone=bone_1 t=3.35 rot=[21,12,3] pos=[1,0,0]
// model animation keyframe 202: bone=bone_2 t=3.37 rot=[22,14,6] pos=[2,0,0]
// model animation keyframe 203: bone=bone_3 t=3.38 rot=[23,16,9] pos=[3,0,0]
// model animation keyframe 204: bone=bone_4 t=3.40 rot=[24,18,12] pos=[4,0,0]
// model animation keyframe 205: bone=bone_5 t=3.42 rot=[25,20,15] pos=[0,0,0]
// model animation keyframe 206: bone=bone_6 t=3.43 rot=[26,22,18] pos=[1,0,0]
// model animation keyframe 207: bone=bone_7 t=3.45 rot=[27,24,21] pos=[2,0,0]
// model animation keyframe 208: bone=bone_8 t=3.47 rot=[28,26,24] pos=[3,0,0]
// model animation keyframe 209: bone=bone_9 t=3.48 rot=[29,28,27] pos=[4,0,0]
// model animation keyframe 210: bone=bone_10 t=3.50 rot=[0,0,0] pos=[0,0,0]
// model animation keyframe 211: bone=bone_11 t=3.52 rot=[1,2,3] pos=[1,0,0]
// model animation keyframe 212: bone=bone_12 t=3.53 rot=[2,4,6] pos=[2,0,0]
// model animation keyframe 213: bone=bone_13 t=3.55 rot=[3,6,9] pos=[3,0,0]
// model animation keyframe 214: bone=bone_14 t=3.57 rot=[4,8,12] pos=[4,0,0]
// model animation keyframe 215: bone=bone_15 t=3.58 rot=[5,10,15] pos=[0,0,0]
// model animation keyframe 216: bone=bone_16 t=3.60 rot=[6,12,18] pos=[1,0,0]
// model animation keyframe 217: bone=bone_17 t=3.62 rot=[7,14,21] pos=[2,0,0]
// model animation keyframe 218: bone=bone_18 t=3.63 rot=[8,16,24] pos=[3,0,0]
// model animation keyframe 219: bone=bone_19 t=3.65 rot=[9,18,27] pos=[4,0,0]
// model animation keyframe 220: bone=bone_0 t=3.67 rot=[10,20,0] pos=[0,0,0]
// model animation keyframe 221: bone=bone_1 t=3.68 rot=[11,22,3] pos=[1,0,0]
// model animation keyframe 222: bone=bone_2 t=3.70 rot=[12,24,6] pos=[2,0,0]
// model animation keyframe 223: bone=bone_3 t=3.72 rot=[13,26,9] pos=[3,0,0]
// model animation keyframe 224: bone=bone_4 t=3.73 rot=[14,28,12] pos=[4,0,0]
// model animation keyframe 225: bone=bone_5 t=3.75 rot=[15,0,15] pos=[0,0,0]
// model animation keyframe 226: bone=bone_6 t=3.77 rot=[16,2,18] pos=[1,0,0]
// model animation keyframe 227: bone=bone_7 t=3.78 rot=[17,4,21] pos=[2,0,0]
// model animation keyframe 228: bone=bone_8 t=3.80 rot=[18,6,24] pos=[3,0,0]
// model animation keyframe 229: bone=bone_9 t=3.82 rot=[19,8,27] pos=[4,0,0]
// model animation keyframe 230: bone=bone_10 t=3.83 rot=[20,10,0] pos=[0,0,0]
// model animation keyframe 231: bone=bone_11 t=3.85 rot=[21,12,3] pos=[1,0,0]
// model animation keyframe 232: bone=bone_12 t=3.87 rot=[22,14,6] pos=[2,0,0]
// model animation keyframe 233: bone=bone_13 t=3.88 rot=[23,16,9] pos=[3,0,0]
// model animation keyframe 234: bone=bone_14 t=3.90 rot=[24,18,12] pos=[4,0,0]
// model animation keyframe 235: bone=bone_15 t=3.92 rot=[25,20,15] pos=[0,0,0]
// model animation keyframe 236: bone=bone_16 t=3.93 rot=[26,22,18] pos=[1,0,0]
// model animation keyframe 237: bone=bone_17 t=3.95 rot=[27,24,21] pos=[2,0,0]
// model animation keyframe 238: bone=bone_18 t=3.97 rot=[28,26,24] pos=[3,0,0]
// model animation keyframe 239: bone=bone_19 t=3.98 rot=[29,28,27] pos=[4,0,0]
// model animation keyframe 240: bone=bone_0 t=4.00 rot=[0,0,0] pos=[0,0,0]
// model animation keyframe 241: bone=bone_1 t=4.02 rot=[1,2,3] pos=[1,0,0]
// model animation keyframe 242: bone=bone_2 t=4.03 rot=[2,4,6] pos=[2,0,0]
// model animation keyframe 243: bone=bone_3 t=4.05 rot=[3,6,9] pos=[3,0,0]
// model animation keyframe 244: bone=bone_4 t=4.07 rot=[4,8,12] pos=[4,0,0]
// model animation keyframe 245: bone=bone_5 t=4.08 rot=[5,10,15] pos=[0,0,0]
// model animation keyframe 246: bone=bone_6 t=4.10 rot=[6,12,18] pos=[1,0,0]
// model animation keyframe 247: bone=bone_7 t=4.12 rot=[7,14,21] pos=[2,0,0]
// model animation keyframe 248: bone=bone_8 t=4.13 rot=[8,16,24] pos=[3,0,0]
// model animation keyframe 249: bone=bone_9 t=4.15 rot=[9,18,27] pos=[4,0,0]
// model animation keyframe 250: bone=bone_10 t=4.17 rot=[10,20,0] pos=[0,0,0]
// model animation keyframe 251: bone=bone_11 t=4.18 rot=[11,22,3] pos=[1,0,0]
// model animation keyframe 252: bone=bone_12 t=4.20 rot=[12,24,6] pos=[2,0,0]
// model animation keyframe 253: bone=bone_13 t=4.22 rot=[13,26,9] pos=[3,0,0]
// model animation keyframe 254: bone=bone_14 t=4.23 rot=[14,28,12] pos=[4,0,0]
// model animation keyframe 255: bone=bone_15 t=4.25 rot=[15,0,15] pos=[0,0,0]
// model animation keyframe 256: bone=bone_16 t=4.27 rot=[16,2,18] pos=[1,0,0]
// model animation keyframe 257: bone=bone_17 t=4.28 rot=[17,4,21] pos=[2,0,0]
// model animation keyframe 258: bone=bone_18 t=4.30 rot=[18,6,24] pos=[3,0,0]
// model animation keyframe 259: bone=bone_19 t=4.32 rot=[19,8,27] pos=[4,0,0]
// model animation keyframe 260: bone=bone_0 t=4.33 rot=[20,10,0] pos=[0,0,0]
// model animation keyframe 261: bone=bone_1 t=4.35 rot=[21,12,3] pos=[1,0,0]
// model animation keyframe 262: bone=bone_2 t=4.37 rot=[22,14,6] pos=[2,0,0]
// model animation keyframe 263: bone=bone_3 t=4.38 rot=[23,16,9] pos=[3,0,0]
// model animation keyframe 264: bone=bone_4 t=4.40 rot=[24,18,12] pos=[4,0,0]
// model animation keyframe 265: bone=bone_5 t=4.42 rot=[25,20,15] pos=[0,0,0]
// model animation keyframe 266: bone=bone_6 t=4.43 rot=[26,22,18] pos=[1,0,0]
// model animation keyframe 267: bone=bone_7 t=4.45 rot=[27,24,21] pos=[2,0,0]
// model animation keyframe 268: bone=bone_8 t=4.47 rot=[28,26,24] pos=[3,0,0]
// model animation keyframe 269: bone=bone_9 t=4.48 rot=[29,28,27] pos=[4,0,0]
// model animation keyframe 270: bone=bone_10 t=4.50 rot=[0,0,0] pos=[0,0,0]
// model animation keyframe 271: bone=bone_11 t=4.52 rot=[1,2,3] pos=[1,0,0]
// model animation keyframe 272: bone=bone_12 t=4.53 rot=[2,4,6] pos=[2,0,0]
// model animation keyframe 273: bone=bone_13 t=4.55 rot=[3,6,9] pos=[3,0,0]
// model animation keyframe 274: bone=bone_14 t=4.57 rot=[4,8,12] pos=[4,0,0]
// model animation keyframe 275: bone=bone_15 t=4.58 rot=[5,10,15] pos=[0,0,0]
// model animation keyframe 276: bone=bone_16 t=4.60 rot=[6,12,18] pos=[1,0,0]
// model animation keyframe 277: bone=bone_17 t=4.62 rot=[7,14,21] pos=[2,0,0]
// model animation keyframe 278: bone=bone_18 t=4.63 rot=[8,16,24] pos=[3,0,0]
// model animation keyframe 279: bone=bone_19 t=4.65 rot=[9,18,27] pos=[4,0,0]
// model animation keyframe 280: bone=bone_0 t=4.67 rot=[10,20,0] pos=[0,0,0]
// model animation keyframe 281: bone=bone_1 t=4.68 rot=[11,22,3] pos=[1,0,0]
// model animation keyframe 282: bone=bone_2 t=4.70 rot=[12,24,6] pos=[2,0,0]
// model animation keyframe 283: bone=bone_3 t=4.72 rot=[13,26,9] pos=[3,0,0]
// model animation keyframe 284: bone=bone_4 t=4.73 rot=[14,28,12] pos=[4,0,0]
// model animation keyframe 285: bone=bone_5 t=4.75 rot=[15,0,15] pos=[0,0,0]
// model animation keyframe 286: bone=bone_6 t=4.77 rot=[16,2,18] pos=[1,0,0]
// model animation keyframe 287: bone=bone_7 t=4.78 rot=[17,4,21] pos=[2,0,0]
// model animation keyframe 288: bone=bone_8 t=4.80 rot=[18,6,24] pos=[3,0,0]
// model animation keyframe 289: bone=bone_9 t=4.82 rot=[19,8,27] pos=[4,0,0]
// model animation keyframe 290: bone=bone_10 t=4.83 rot=[20,10,0] pos=[0,0,0]
// model animation keyframe 291: bone=bone_11 t=4.85 rot=[21,12,3] pos=[1,0,0]
// model animation keyframe 292: bone=bone_12 t=4.87 rot=[22,14,6] pos=[2,0,0]
// model animation keyframe 293: bone=bone_13 t=4.88 rot=[23,16,9] pos=[3,0,0]
// model animation keyframe 294: bone=bone_14 t=4.90 rot=[24,18,12] pos=[4,0,0]
// model animation keyframe 295: bone=bone_15 t=4.92 rot=[25,20,15] pos=[0,0,0]
// model animation keyframe 296: bone=bone_16 t=4.93 rot=[26,22,18] pos=[1,0,0]
// model animation keyframe 297: bone=bone_17 t=4.95 rot=[27,24,21] pos=[2,0,0]
// model animation keyframe 298: bone=bone_18 t=4.97 rot=[28,26,24] pos=[3,0,0]
// model animation keyframe 299: bone=bone_19 t=4.98 rot=[29,28,27] pos=[4,0,0]
// model animation keyframe 300: bone=bone_0 t=5.00 rot=[0,0,0] pos=[0,0,0]
// model animation keyframe 301: bone=bone_1 t=5.02 rot=[1,2,3] pos=[1,0,0]
// model animation keyframe 302: bone=bone_2 t=5.03 rot=[2,4,6] pos=[2,0,0]
// model animation keyframe 303: bone=bone_3 t=5.05 rot=[3,6,9] pos=[3,0,0]
// model animation keyframe 304: bone=bone_4 t=5.07 rot=[4,8,12] pos=[4,0,0]
// model animation keyframe 305: bone=bone_5 t=5.08 rot=[5,10,15] pos=[0,0,0]
// model animation keyframe 306: bone=bone_6 t=5.10 rot=[6,12,18] pos=[1,0,0]
// model animation keyframe 307: bone=bone_7 t=5.12 rot=[7,14,21] pos=[2,0,0]
// model animation keyframe 308: bone=bone_8 t=5.13 rot=[8,16,24] pos=[3,0,0]
// model animation keyframe 309: bone=bone_9 t=5.15 rot=[9,18,27] pos=[4,0,0]
// model animation keyframe 310: bone=bone_10 t=5.17 rot=[10,20,0] pos=[0,0,0]
// model animation keyframe 311: bone=bone_11 t=5.18 rot=[11,22,3] pos=[1,0,0]
// model animation keyframe 312: bone=bone_12 t=5.20 rot=[12,24,6] pos=[2,0,0]
// model animation keyframe 313: bone=bone_13 t=5.22 rot=[13,26,9] pos=[3,0,0]
// model animation keyframe 314: bone=bone_14 t=5.23 rot=[14,28,12] pos=[4,0,0]
// model animation keyframe 315: bone=bone_15 t=5.25 rot=[15,0,15] pos=[0,0,0]
// model animation keyframe 316: bone=bone_16 t=5.27 rot=[16,2,18] pos=[1,0,0]
// model animation keyframe 317: bone=bone_17 t=5.28 rot=[17,4,21] pos=[2,0,0]
// model animation keyframe 318: bone=bone_18 t=5.30 rot=[18,6,24] pos=[3,0,0]
// model animation keyframe 319: bone=bone_19 t=5.32 rot=[19,8,27] pos=[4,0,0]
// model animation keyframe 320: bone=bone_0 t=5.33 rot=[20,10,0] pos=[0,0,0]
// model animation keyframe 321: bone=bone_1 t=5.35 rot=[21,12,3] pos=[1,0,0]
// model animation keyframe 322: bone=bone_2 t=5.37 rot=[22,14,6] pos=[2,0,0]
// model animation keyframe 323: bone=bone_3 t=5.38 rot=[23,16,9] pos=[3,0,0]
// model animation keyframe 324: bone=bone_4 t=5.40 rot=[24,18,12] pos=[4,0,0]
// model animation keyframe 325: bone=bone_5 t=5.42 rot=[25,20,15] pos=[0,0,0]
// model animation keyframe 326: bone=bone_6 t=5.43 rot=[26,22,18] pos=[1,0,0]
// model animation keyframe 327: bone=bone_7 t=5.45 rot=[27,24,21] pos=[2,0,0]
// model animation keyframe 328: bone=bone_8 t=5.47 rot=[28,26,24] pos=[3,0,0]
// model animation keyframe 329: bone=bone_9 t=5.48 rot=[29,28,27] pos=[4,0,0]
// model animation keyframe 330: bone=bone_10 t=5.50 rot=[0,0,0] pos=[0,0,0]
// model animation keyframe 331: bone=bone_11 t=5.52 rot=[1,2,3] pos=[1,0,0]
// model animation keyframe 332: bone=bone_12 t=5.53 rot=[2,4,6] pos=[2,0,0]
// model animation keyframe 333: bone=bone_13 t=5.55 rot=[3,6,9] pos=[3,0,0]
// model animation keyframe 334: bone=bone_14 t=5.57 rot=[4,8,12] pos=[4,0,0]
// model animation keyframe 335: bone=bone_15 t=5.58 rot=[5,10,15] pos=[0,0,0]
// model animation keyframe 336: bone=bone_16 t=5.60 rot=[6,12,18] pos=[1,0,0]
// model animation keyframe 337: bone=bone_17 t=5.62 rot=[7,14,21] pos=[2,0,0]
// model animation keyframe 338: bone=bone_18 t=5.63 rot=[8,16,24] pos=[3,0,0]
// model animation keyframe 339: bone=bone_19 t=5.65 rot=[9,18,27] pos=[4,0,0]
// model animation keyframe 340: bone=bone_0 t=5.67 rot=[10,20,0] pos=[0,0,0]
// model animation keyframe 341: bone=bone_1 t=5.68 rot=[11,22,3] pos=[1,0,0]
// model animation keyframe 342: bone=bone_2 t=5.70 rot=[12,24,6] pos=[2,0,0]
// model animation keyframe 343: bone=bone_3 t=5.72 rot=[13,26,9] pos=[3,0,0]
// model animation keyframe 344: bone=bone_4 t=5.73 rot=[14,28,12] pos=[4,0,0]
// model animation keyframe 345: bone=bone_5 t=5.75 rot=[15,0,15] pos=[0,0,0]
// model animation keyframe 346: bone=bone_6 t=5.77 rot=[16,2,18] pos=[1,0,0]
// model animation keyframe 347: bone=bone_7 t=5.78 rot=[17,4,21] pos=[2,0,0]
// model animation keyframe 348: bone=bone_8 t=5.80 rot=[18,6,24] pos=[3,0,0]
// model animation keyframe 349: bone=bone_9 t=5.82 rot=[19,8,27] pos=[4,0,0]
// model animation keyframe 350: bone=bone_10 t=5.83 rot=[20,10,0] pos=[0,0,0]
// model animation keyframe 351: bone=bone_11 t=5.85 rot=[21,12,3] pos=[1,0,0]
// model animation keyframe 352: bone=bone_12 t=5.87 rot=[22,14,6] pos=[2,0,0]
// model animation keyframe 353: bone=bone_13 t=5.88 rot=[23,16,9] pos=[3,0,0]
// model animation keyframe 354: bone=bone_14 t=5.90 rot=[24,18,12] pos=[4,0,0]
// model animation keyframe 355: bone=bone_15 t=5.92 rot=[25,20,15] pos=[0,0,0]
// model animation keyframe 356: bone=bone_16 t=5.93 rot=[26,22,18] pos=[1,0,0]
// model animation keyframe 357: bone=bone_17 t=5.95 rot=[27,24,21] pos=[2,0,0]
// model animation keyframe 358: bone=bone_18 t=5.97 rot=[28,26,24] pos=[3,0,0]
// model animation keyframe 359: bone=bone_19 t=5.98 rot=[29,28,27] pos=[4,0,0]
// model animation keyframe 360: bone=bone_0 t=6.00 rot=[0,0,0] pos=[0,0,0]
// model animation keyframe 361: bone=bone_1 t=6.02 rot=[1,2,3] pos=[1,0,0]
// model animation keyframe 362: bone=bone_2 t=6.03 rot=[2,4,6] pos=[2,0,0]
// model animation keyframe 363: bone=bone_3 t=6.05 rot=[3,6,9] pos=[3,0,0]
// model animation keyframe 364: bone=bone_4 t=6.07 rot=[4,8,12] pos=[4,0,0]
// model animation keyframe 365: bone=bone_5 t=6.08 rot=[5,10,15] pos=[0,0,0]
// model animation keyframe 366: bone=bone_6 t=6.10 rot=[6,12,18] pos=[1,0,0]
// model animation keyframe 367: bone=bone_7 t=6.12 rot=[7,14,21] pos=[2,0,0]
// model animation keyframe 368: bone=bone_8 t=6.13 rot=[8,16,24] pos=[3,0,0]
// model animation keyframe 369: bone=bone_9 t=6.15 rot=[9,18,27] pos=[4,0,0]
// model animation keyframe 370: bone=bone_10 t=6.17 rot=[10,20,0] pos=[0,0,0]
// model animation keyframe 371: bone=bone_11 t=6.18 rot=[11,22,3] pos=[1,0,0]
// model animation keyframe 372: bone=bone_12 t=6.20 rot=[12,24,6] pos=[2,0,0]
// model animation keyframe 373: bone=bone_13 t=6.22 rot=[13,26,9] pos=[3,0,0]
// model animation keyframe 374: bone=bone_14 t=6.23 rot=[14,28,12] pos=[4,0,0]
// model animation keyframe 375: bone=bone_15 t=6.25 rot=[15,0,15] pos=[0,0,0]
// model animation keyframe 376: bone=bone_16 t=6.27 rot=[16,2,18] pos=[1,0,0]
// model animation keyframe 377: bone=bone_17 t=6.28 rot=[17,4,21] pos=[2,0,0]
// model animation keyframe 378: bone=bone_18 t=6.30 rot=[18,6,24] pos=[3,0,0]
// model animation keyframe 379: bone=bone_19 t=6.32 rot=[19,8,27] pos=[4,0,0]
// model animation keyframe 380: bone=bone_0 t=6.33 rot=[20,10,0] pos=[0,0,0]
// model animation keyframe 381: bone=bone_1 t=6.35 rot=[21,12,3] pos=[1,0,0]
// model animation keyframe 382: bone=bone_2 t=6.37 rot=[22,14,6] pos=[2,0,0]
// model animation keyframe 383: bone=bone_3 t=6.38 rot=[23,16,9] pos=[3,0,0]
// model animation keyframe 384: bone=bone_4 t=6.40 rot=[24,18,12] pos=[4,0,0]
// model animation keyframe 385: bone=bone_5 t=6.42 rot=[25,20,15] pos=[0,0,0]
// model animation keyframe 386: bone=bone_6 t=6.43 rot=[26,22,18] pos=[1,0,0]
// model animation keyframe 387: bone=bone_7 t=6.45 rot=[27,24,21] pos=[2,0,0]
// model animation keyframe 388: bone=bone_8 t=6.47 rot=[28,26,24] pos=[3,0,0]
// model animation keyframe 389: bone=bone_9 t=6.48 rot=[29,28,27] pos=[4,0,0]
// model animation keyframe 390: bone=bone_10 t=6.50 rot=[0,0,0] pos=[0,0,0]
// model animation keyframe 391: bone=bone_11 t=6.52 rot=[1,2,3] pos=[1,0,0]
// model animation keyframe 392: bone=bone_12 t=6.53 rot=[2,4,6] pos=[2,0,0]
// model animation keyframe 393: bone=bone_13 t=6.55 rot=[3,6,9] pos=[3,0,0]
// model animation keyframe 394: bone=bone_14 t=6.57 rot=[4,8,12] pos=[4,0,0]
// model animation keyframe 395: bone=bone_15 t=6.58 rot=[5,10,15] pos=[0,0,0]
// model animation keyframe 396: bone=bone_16 t=6.60 rot=[6,12,18] pos=[1,0,0]
// model animation keyframe 397: bone=bone_17 t=6.62 rot=[7,14,21] pos=[2,0,0]
// model animation keyframe 398: bone=bone_18 t=6.63 rot=[8,16,24] pos=[3,0,0]
// model animation keyframe 399: bone=bone_19 t=6.65 rot=[9,18,27] pos=[4,0,0]
// model animation keyframe 400: bone=bone_0 t=6.67 rot=[10,20,0] pos=[0,0,0]
// model animation keyframe 401: bone=bone_1 t=6.68 rot=[11,22,3] pos=[1,0,0]
// model animation keyframe 402: bone=bone_2 t=6.70 rot=[12,24,6] pos=[2,0,0]
// model animation keyframe 403: bone=bone_3 t=6.72 rot=[13,26,9] pos=[3,0,0]
// model animation keyframe 404: bone=bone_4 t=6.73 rot=[14,28,12] pos=[4,0,0]
// model animation keyframe 405: bone=bone_5 t=6.75 rot=[15,0,15] pos=[0,0,0]
// model animation keyframe 406: bone=bone_6 t=6.77 rot=[16,2,18] pos=[1,0,0]
// model animation keyframe 407: bone=bone_7 t=6.78 rot=[17,4,21] pos=[2,0,0]
// model animation keyframe 408: bone=bone_8 t=6.80 rot=[18,6,24] pos=[3,0,0]
// model animation keyframe 409: bone=bone_9 t=6.82 rot=[19,8,27] pos=[4,0,0]
// model animation keyframe 410: bone=bone_10 t=6.83 rot=[20,10,0] pos=[0,0,0]
// model animation keyframe 411: bone=bone_11 t=6.85 rot=[21,12,3] pos=[1,0,0]
// model animation keyframe 412: bone=bone_12 t=6.87 rot=[22,14,6] pos=[2,0,0]
// model animation keyframe 413: bone=bone_13 t=6.88 rot=[23,16,9] pos=[3,0,0]
// model animation keyframe 414: bone=bone_14 t=6.90 rot=[24,18,12] pos=[4,0,0]
// model animation keyframe 415: bone=bone_15 t=6.92 rot=[25,20,15] pos=[0,0,0]
// model animation keyframe 416: bone=bone_16 t=6.93 rot=[26,22,18] pos=[1,0,0]
// model animation keyframe 417: bone=bone_17 t=6.95 rot=[27,24,21] pos=[2,0,0]
// model animation keyframe 418: bone=bone_18 t=6.97 rot=[28,26,24] pos=[3,0,0]
// model animation keyframe 419: bone=bone_19 t=6.98 rot=[29,28,27] pos=[4,0,0]
// model animation keyframe 420: bone=bone_0 t=7.00 rot=[0,0,0] pos=[0,0,0]
// model animation keyframe 421: bone=bone_1 t=7.02 rot=[1,2,3] pos=[1,0,0]
// model animation keyframe 422: bone=bone_2 t=7.03 rot=[2,4,6] pos=[2,0,0]
// model animation keyframe 423: bone=bone_3 t=7.05 rot=[3,6,9] pos=[3,0,0]
// model animation keyframe 424: bone=bone_4 t=7.07 rot=[4,8,12] pos=[4,0,0]
// model animation keyframe 425: bone=bone_5 t=7.08 rot=[5,10,15] pos=[0,0,0]
// model animation keyframe 426: bone=bone_6 t=7.10 rot=[6,12,18] pos=[1,0,0]
// model animation keyframe 427: bone=bone_7 t=7.12 rot=[7,14,21] pos=[2,0,0]
// model animation keyframe 428: bone=bone_8 t=7.13 rot=[8,16,24] pos=[3,0,0]
// model animation keyframe 429: bone=bone_9 t=7.15 rot=[9,18,27] pos=[4,0,0]
// model animation keyframe 430: bone=bone_10 t=7.17 rot=[10,20,0] pos=[0,0,0]
// model animation keyframe 431: bone=bone_11 t=7.18 rot=[11,22,3] pos=[1,0,0]
// model animation keyframe 432: bone=bone_12 t=7.20 rot=[12,24,6] pos=[2,0,0]
// model animation keyframe 433: bone=bone_13 t=7.22 rot=[13,26,9] pos=[3,0,0]
// model animation keyframe 434: bone=bone_14 t=7.23 rot=[14,28,12] pos=[4,0,0]
// model animation keyframe 435: bone=bone_15 t=7.25 rot=[15,0,15] pos=[0,0,0]
// model animation keyframe 436: bone=bone_16 t=7.27 rot=[16,2,18] pos=[1,0,0]
// model animation keyframe 437: bone=bone_17 t=7.28 rot=[17,4,21] pos=[2,0,0]
// model animation keyframe 438: bone=bone_18 t=7.30 rot=[18,6,24] pos=[3,0,0]
// model animation keyframe 439: bone=bone_19 t=7.32 rot=[19,8,27] pos=[4,0,0]
// model animation keyframe 440: bone=bone_0 t=7.33 rot=[20,10,0] pos=[0,0,0]
// model animation keyframe 441: bone=bone_1 t=7.35 rot=[21,12,3] pos=[1,0,0]
// model animation keyframe 442: bone=bone_2 t=7.37 rot=[22,14,6] pos=[2,0,0]
// model animation keyframe 443: bone=bone_3 t=7.38 rot=[23,16,9] pos=[3,0,0]
// model animation keyframe 444: bone=bone_4 t=7.40 rot=[24,18,12] pos=[4,0,0]
// model animation keyframe 445: bone=bone_5 t=7.42 rot=[25,20,15] pos=[0,0,0]
// model animation keyframe 446: bone=bone_6 t=7.43 rot=[26,22,18] pos=[1,0,0]
// model animation keyframe 447: bone=bone_7 t=7.45 rot=[27,24,21] pos=[2,0,0]
// model animation keyframe 448: bone=bone_8 t=7.47 rot=[28,26,24] pos=[3,0,0]
// model animation keyframe 449: bone=bone_9 t=7.48 rot=[29,28,27] pos=[4,0,0]
// model animation keyframe 450: bone=bone_10 t=7.50 rot=[0,0,0] pos=[0,0,0]
// model animation keyframe 451: bone=bone_11 t=7.52 rot=[1,2,3] pos=[1,0,0]
// model animation keyframe 452: bone=bone_12 t=7.53 rot=[2,4,6] pos=[2,0,0]
// model animation keyframe 453: bone=bone_13 t=7.55 rot=[3,6,9] pos=[3,0,0]
// model animation keyframe 454: bone=bone_14 t=7.57 rot=[4,8,12] pos=[4,0,0]
// model animation keyframe 455: bone=bone_15 t=7.58 rot=[5,10,15] pos=[0,0,0]
// model animation keyframe 456: bone=bone_16 t=7.60 rot=[6,12,18] pos=[1,0,0]
// model animation keyframe 457: bone=bone_17 t=7.62 rot=[7,14,21] pos=[2,0,0]
// model animation keyframe 458: bone=bone_18 t=7.63 rot=[8,16,24] pos=[3,0,0]
// model animation keyframe 459: bone=bone_19 t=7.65 rot=[9,18,27] pos=[4,0,0]
// model animation keyframe 460: bone=bone_0 t=7.67 rot=[10,20,0] pos=[0,0,0]
// model animation keyframe 461: bone=bone_1 t=7.68 rot=[11,22,3] pos=[1,0,0]
// model animation keyframe 462: bone=bone_2 t=7.70 rot=[12,24,6] pos=[2,0,0]
// model animation keyframe 463: bone=bone_3 t=7.72 rot=[13,26,9] pos=[3,0,0]
// model animation keyframe 464: bone=bone_4 t=7.73 rot=[14,28,12] pos=[4,0,0]
// model animation keyframe 465: bone=bone_5 t=7.75 rot=[15,0,15] pos=[0,0,0]
// model animation keyframe 466: bone=bone_6 t=7.77 rot=[16,2,18] pos=[1,0,0]
// model animation keyframe 467: bone=bone_7 t=7.78 rot=[17,4,21] pos=[2,0,0]
// model animation keyframe 468: bone=bone_8 t=7.80 rot=[18,6,24] pos=[3,0,0]
// model animation keyframe 469: bone=bone_9 t=7.82 rot=[19,8,27] pos=[4,0,0]
// model animation keyframe 470: bone=bone_10 t=7.83 rot=[20,10,0] pos=[0,0,0]
// model animation keyframe 471: bone=bone_11 t=7.85 rot=[21,12,3] pos=[1,0,0]
// model animation keyframe 472: bone=bone_12 t=7.87 rot=[22,14,6] pos=[2,0,0]
// model animation keyframe 473: bone=bone_13 t=7.88 rot=[23,16,9] pos=[3,0,0]
// model animation keyframe 474: bone=bone_14 t=7.90 rot=[24,18,12] pos=[4,0,0]
// model animation keyframe 475: bone=bone_15 t=7.92 rot=[25,20,15] pos=[0,0,0]
// model animation keyframe 476: bone=bone_16 t=7.93 rot=[26,22,18] pos=[1,0,0]
// model animation keyframe 477: bone=bone_17 t=7.95 rot=[27,24,21] pos=[2,0,0]
// model animation keyframe 478: bone=bone_18 t=7.97 rot=[28,26,24] pos=[3,0,0]
// model animation keyframe 479: bone=bone_19 t=7.98 rot=[29,28,27] pos=[4,0,0]
// model animation keyframe 480: bone=bone_0 t=8.00 rot=[0,0,0] pos=[0,0,0]
// model animation keyframe 481: bone=bone_1 t=8.02 rot=[1,2,3] pos=[1,0,0]
// model animation keyframe 482: bone=bone_2 t=8.03 rot=[2,4,6] pos=[2,0,0]
// model animation keyframe 483: bone=bone_3 t=8.05 rot=[3,6,9] pos=[3,0,0]
// model animation keyframe 484: bone=bone_4 t=8.07 rot=[4,8,12] pos=[4,0,0]
// model animation keyframe 485: bone=bone_5 t=8.08 rot=[5,10,15] pos=[0,0,0]
// model animation keyframe 486: bone=bone_6 t=8.10 rot=[6,12,18] pos=[1,0,0]
// model animation keyframe 487: bone=bone_7 t=8.12 rot=[7,14,21] pos=[2,0,0]
// model animation keyframe 488: bone=bone_8 t=8.13 rot=[8,16,24] pos=[3,0,0]
// model animation keyframe 489: bone=bone_9 t=8.15 rot=[9,18,27] pos=[4,0,0]
// model animation keyframe 490: bone=bone_10 t=8.17 rot=[10,20,0] pos=[0,0,0]
// model animation keyframe 491: bone=bone_11 t=8.18 rot=[11,22,3] pos=[1,0,0]
// model animation keyframe 492: bone=bone_12 t=8.20 rot=[12,24,6] pos=[2,0,0]
// model animation keyframe 493: bone=bone_13 t=8.22 rot=[13,26,9] pos=[3,0,0]
// model animation keyframe 494: bone=bone_14 t=8.23 rot=[14,28,12] pos=[4,0,0]
// model animation keyframe 495: bone=bone_15 t=8.25 rot=[15,0,15] pos=[0,0,0]
// model animation keyframe 496: bone=bone_16 t=8.27 rot=[16,2,18] pos=[1,0,0]
// model animation keyframe 497: bone=bone_17 t=8.28 rot=[17,4,21] pos=[2,0,0]
// model animation keyframe 498: bone=bone_18 t=8.30 rot=[18,6,24] pos=[3,0,0]
// model animation keyframe 499: bone=bone_19 t=8.32 rot=[19,8,27] pos=[4,0,0]
// model animation keyframe 500: bone=bone_0 t=8.33 rot=[20,10,0] pos=[0,0,0]
// model animation keyframe 501: bone=bone_1 t=8.35 rot=[21,12,3] pos=[1,0,0]
// model animation keyframe 502: bone=bone_2 t=8.37 rot=[22,14,6] pos=[2,0,0]
// model animation keyframe 503: bone=bone_3 t=8.38 rot=[23,16,9] pos=[3,0,0]
// model animation keyframe 504: bone=bone_4 t=8.40 rot=[24,18,12] pos=[4,0,0]
// model animation keyframe 505: bone=bone_5 t=8.42 rot=[25,20,15] pos=[0,0,0]
// model animation keyframe 506: bone=bone_6 t=8.43 rot=[26,22,18] pos=[1,0,0]
// model animation keyframe 507: bone=bone_7 t=8.45 rot=[27,24,21] pos=[2,0,0]
// model animation keyframe 508: bone=bone_8 t=8.47 rot=[28,26,24] pos=[3,0,0]
// model animation keyframe 509: bone=bone_9 t=8.48 rot=[29,28,27] pos=[4,0,0]
// model animation keyframe 510: bone=bone_10 t=8.50 rot=[0,0,0] pos=[0,0,0]
// model animation keyframe 511: bone=bone_11 t=8.52 rot=[1,2,3] pos=[1,0,0]
// model animation keyframe 512: bone=bone_12 t=8.53 rot=[2,4,6] pos=[2,0,0]
// model animation keyframe 513: bone=bone_13 t=8.55 rot=[3,6,9] pos=[3,0,0]
// model animation keyframe 514: bone=bone_14 t=8.57 rot=[4,8,12] pos=[4,0,0]
// model animation keyframe 515: bone=bone_15 t=8.58 rot=[5,10,15] pos=[0,0,0]
// model animation keyframe 516: bone=bone_16 t=8.60 rot=[6,12,18] pos=[1,0,0]
// model animation keyframe 517: bone=bone_17 t=8.62 rot=[7,14,21] pos=[2,0,0]
// model animation keyframe 518: bone=bone_18 t=8.63 rot=[8,16,24] pos=[3,0,0]
// model animation keyframe 519: bone=bone_19 t=8.65 rot=[9,18,27] pos=[4,0,0]
// model animation keyframe 520: bone=bone_0 t=8.67 rot=[10,20,0] pos=[0,0,0]
// model animation keyframe 521: bone=bone_1 t=8.68 rot=[11,22,3] pos=[1,0,0]
// model animation keyframe 522: bone=bone_2 t=8.70 rot=[12,24,6] pos=[2,0,0]
// model animation keyframe 523: bone=bone_3 t=8.72 rot=[13,26,9] pos=[3,0,0]
// model animation keyframe 524: bone=bone_4 t=8.73 rot=[14,28,12] pos=[4,0,0]
// model animation keyframe 525: bone=bone_5 t=8.75 rot=[15,0,15] pos=[0,0,0]
// model animation keyframe 526: bone=bone_6 t=8.77 rot=[16,2,18] pos=[1,0,0]
// model animation keyframe 527: bone=bone_7 t=8.78 rot=[17,4,21] pos=[2,0,0]
// model animation keyframe 528: bone=bone_8 t=8.80 rot=[18,6,24] pos=[3,0,0]
// model animation keyframe 529: bone=bone_9 t=8.82 rot=[19,8,27] pos=[4,0,0]
// model animation keyframe 530: bone=bone_10 t=8.83 rot=[20,10,0] pos=[0,0,0]
// model animation keyframe 531: bone=bone_11 t=8.85 rot=[21,12,3] pos=[1,0,0]
// model animation keyframe 532: bone=bone_12 t=8.87 rot=[22,14,6] pos=[2,0,0]
// model animation keyframe 533: bone=bone_13 t=8.88 rot=[23,16,9] pos=[3,0,0]
// model animation keyframe 534: bone=bone_14 t=8.90 rot=[24,18,12] pos=[4,0,0]
// model animation keyframe 535: bone=bone_15 t=8.92 rot=[25,20,15] pos=[0,0,0]
// model animation keyframe 536: bone=bone_16 t=8.93 rot=[26,22,18] pos=[1,0,0]
// model animation keyframe 537: bone=bone_17 t=8.95 rot=[27,24,21] pos=[2,0,0]
// model animation keyframe 538: bone=bone_18 t=8.97 rot=[28,26,24] pos=[3,0,0]
// model animation keyframe 539: bone=bone_19 t=8.98 rot=[29,28,27] pos=[4,0,0]
// model animation keyframe 540: bone=bone_0 t=9.00 rot=[0,0,0] pos=[0,0,0]
// model animation keyframe 541: bone=bone_1 t=9.02 rot=[1,2,3] pos=[1,0,0]
// model animation keyframe 542: bone=bone_2 t=9.03 rot=[2,4,6] pos=[2,0,0]
// model animation keyframe 543: bone=bone_3 t=9.05 rot=[3,6,9] pos=[3,0,0]
// model animation keyframe 544: bone=bone_4 t=9.07 rot=[4,8,12] pos=[4,0,0]
// model animation keyframe 545: bone=bone_5 t=9.08 rot=[5,10,15] pos=[0,0,0]
// model animation keyframe 546: bone=bone_6 t=9.10 rot=[6,12,18] pos=[1,0,0]
// model animation keyframe 547: bone=bone_7 t=9.12 rot=[7,14,21] pos=[2,0,0]
// model animation keyframe 548: bone=bone_8 t=9.13 rot=[8,16,24] pos=[3,0,0]
// model animation keyframe 549: bone=bone_9 t=9.15 rot=[9,18,27] pos=[4,0,0]
// model animation keyframe 550: bone=bone_10 t=9.17 rot=[10,20,0] pos=[0,0,0]
// model animation keyframe 551: bone=bone_11 t=9.18 rot=[11,22,3] pos=[1,0,0]
// model animation keyframe 552: bone=bone_12 t=9.20 rot=[12,24,6] pos=[2,0,0]
// model animation keyframe 553: bone=bone_13 t=9.22 rot=[13,26,9] pos=[3,0,0]
// model animation keyframe 554: bone=bone_14 t=9.23 rot=[14,28,12] pos=[4,0,0]
// model animation keyframe 555: bone=bone_15 t=9.25 rot=[15,0,15] pos=[0,0,0]
// model animation keyframe 556: bone=bone_16 t=9.27 rot=[16,2,18] pos=[1,0,0]
// model animation keyframe 557: bone=bone_17 t=9.28 rot=[17,4,21] pos=[2,0,0]
// model animation keyframe 558: bone=bone_18 t=9.30 rot=[18,6,24] pos=[3,0,0]
// model animation keyframe 559: bone=bone_19 t=9.32 rot=[19,8,27] pos=[4,0,0]
// model animation keyframe 560: bone=bone_0 t=9.33 rot=[20,10,0] pos=[0,0,0]
// model animation keyframe 561: bone=bone_1 t=9.35 rot=[21,12,3] pos=[1,0,0]
// model animation keyframe 562: bone=bone_2 t=9.37 rot=[22,14,6] pos=[2,0,0]
// model animation keyframe 563: bone=bone_3 t=9.38 rot=[23,16,9] pos=[3,0,0]
// model animation keyframe 564: bone=bone_4 t=9.40 rot=[24,18,12] pos=[4,0,0]
// model animation keyframe 565: bone=bone_5 t=9.42 rot=[25,20,15] pos=[0,0,0]
// model animation keyframe 566: bone=bone_6 t=9.43 rot=[26,22,18] pos=[1,0,0]
// model animation keyframe 567: bone=bone_7 t=9.45 rot=[27,24,21] pos=[2,0,0]
// model animation keyframe 568: bone=bone_8 t=9.47 rot=[28,26,24] pos=[3,0,0]
// model animation keyframe 569: bone=bone_9 t=9.48 rot=[29,28,27] pos=[4,0,0]
// model animation keyframe 570: bone=bone_10 t=9.50 rot=[0,0,0] pos=[0,0,0]
// model animation keyframe 571: bone=bone_11 t=9.52 rot=[1,2,3] pos=[1,0,0]
// model animation keyframe 572: bone=bone_12 t=9.53 rot=[2,4,6] pos=[2,0,0]
// model animation keyframe 573: bone=bone_13 t=9.55 rot=[3,6,9] pos=[3,0,0]
// model animation keyframe 574: bone=bone_14 t=9.57 rot=[4,8,12] pos=[4,0,0]
// model animation keyframe 575: bone=bone_15 t=9.58 rot=[5,10,15] pos=[0,0,0]
// model animation keyframe 576: bone=bone_16 t=9.60 rot=[6,12,18] pos=[1,0,0]
// model animation keyframe 577: bone=bone_17 t=9.62 rot=[7,14,21] pos=[2,0,0]
// model animation keyframe 578: bone=bone_18 t=9.63 rot=[8,16,24] pos=[3,0,0]
// model animation keyframe 579: bone=bone_19 t=9.65 rot=[9,18,27] pos=[4,0,0]
// model animation keyframe 580: bone=bone_0 t=9.67 rot=[10,20,0] pos=[0,0,0]
// model animation keyframe 581: bone=bone_1 t=9.68 rot=[11,22,3] pos=[1,0,0]
// model animation keyframe 582: bone=bone_2 t=9.70 rot=[12,24,6] pos=[2,0,0]
// model animation keyframe 583: bone=bone_3 t=9.72 rot=[13,26,9] pos=[3,0,0]
// model animation keyframe 584: bone=bone_4 t=9.73 rot=[14,28,12] pos=[4,0,0]
// model animation keyframe 585: bone=bone_5 t=9.75 rot=[15,0,15] pos=[0,0,0]
// model animation keyframe 586: bone=bone_6 t=9.77 rot=[16,2,18] pos=[1,0,0]
// model animation keyframe 587: bone=bone_7 t=9.78 rot=[17,4,21] pos=[2,0,0]
// model animation keyframe 588: bone=bone_8 t=9.80 rot=[18,6,24] pos=[3,0,0]
// model animation keyframe 589: bone=bone_9 t=9.82 rot=[19,8,27] pos=[4,0,0]
// model animation keyframe 590: bone=bone_10 t=9.83 rot=[20,10,0] pos=[0,0,0]
// model animation keyframe 591: bone=bone_11 t=9.85 rot=[21,12,3] pos=[1,0,0]
// model animation keyframe 592: bone=bone_12 t=9.87 rot=[22,14,6] pos=[2,0,0]
// model animation keyframe 593: bone=bone_13 t=9.88 rot=[23,16,9] pos=[3,0,0]
// model animation keyframe 594: bone=bone_14 t=9.90 rot=[24,18,12] pos=[4,0,0]
// model animation keyframe 595: bone=bone_15 t=9.92 rot=[25,20,15] pos=[0,0,0]
// model animation keyframe 596: bone=bone_16 t=9.93 rot=[26,22,18] pos=[1,0,0]
// model animation keyframe 597: bone=bone_17 t=9.95 rot=[27,24,21] pos=[2,0,0]
// model animation keyframe 598: bone=bone_18 t=9.97 rot=[28,26,24] pos=[3,0,0]
// model animation keyframe 599: bone=bone_19 t=9.98 rot=[29,28,27] pos=[4,0,0]
