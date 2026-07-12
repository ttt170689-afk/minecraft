/** Structure generation: villages stubs, temples, mineshaft hints, strongholds markers */
(function(){

const StructureGen = {
  tryGenerate(world, chunk) {
    if (!world || !chunk || world.dimension !== 'overworld') return;
    const cx=chunk.cx, cz=chunk.cz;
    const h = world.noise.hash(cx*31, cz*37);
    // village well every ~32 chunks
    if ((cx%8===0 && cz%8===0) && h>0.4) this._villageWell(world, chunk);
    // desert pyramid rare
    if (h>0.92 && world.getBiome(cx*16+8, cz*16+8)==='desert') this._desertTemple(world, chunk);
    // jungle-ish ruins in forest
    if (h>0.88 && world.getBiome(cx*16+8, cz*16+8)==='forest') this._forestRuins(world, chunk);
    // mineshaft entrance marker
    if (h>0.95) this._mineshaftStub(world, chunk);
  },
  _set(world,x,y,z,id){ try{ if(y>0&&y<WORLD_HEIGHT) world.setBlock(x,y,z,id);}catch(e){} },
  _villageWell(world, chunk) {
    const bx = chunk.cx*16+8, bz=chunk.cz*16+8;
    let y=SEA_LEVEL+2;
    for (let yy=WORLD_HEIGHT-2; yy>10; yy--) if (world.isSolid(bx,yy,bz)) { y=yy+1; break; }
    for (let dx=-2; dx<=2; dx++) for (let dz=-2; dz<=2; dz++) {
      this._set(world,bx+dx,y-1,bz+dz, BLOCKS.cobble?BLOCKS.cobble.id:3);
      if (Math.abs(dx)===2||Math.abs(dz)===2) this._set(world,bx+dx,y,bz+dz, BLOCKS.cobble?BLOCKS.cobble.id:3);
    }
    this._set(world,bx,y-2,bz, BLOCKS.water?BLOCKS.water.id:7);
    // small houses around
    for (const [ox,oz] of [[6,0],[-6,0],[0,6],[0,-6]]) {
      for (let dx=0; dx<5; dx++) for (let dz=0; dz<5; dz++) {
        this._set(world,bx+ox+dx,y-1,bz+oz+dz, BLOCKS.planks?BLOCKS.planks.id:9);
        if (dx===0||dz===0||dx===4||dz===4) {
          for (let h=0;h<3;h++) this._set(world,bx+ox+dx,y+h,bz+oz+dz, BLOCKS.planks?BLOCKS.planks.id:9);
        }
      }
      // roof
      for (let dx=0; dx<5; dx++) for (let dz=0; dz<5; dz++) this._set(world,bx+ox+dx,y+3,bz+oz+dz, BLOCKS.wood?BLOCKS.wood.id:4);
      // door gap
      this._set(world,bx+ox+2,y,bz+oz, 0); this._set(world,bx+ox+2,y+1,bz+oz, 0);
      // chest
      if (BLOCKS.chest) this._set(world,bx+ox+2,y,bz+oz+2, BLOCKS.chest.id);
    }
  },
  _desertTemple(world, chunk) {
    const bx=chunk.cx*16+4, bz=chunk.cz*16+4;
    let y=SEA_LEVEL+1;
    for (let yy=WORLD_HEIGHT-2; yy>10; yy--) if (world.isSolid(bx+4,yy,bz+4)) { y=yy+1; break; }
    for (let dx=0; dx<9; dx++) for (let dz=0; dz<9; dz++) {
      this._set(world,bx+dx,y-1,bz+dz, BLOCKS.sandstone?BLOCKS.sandstone.id:(BLOCKS.sand?BLOCKS.sand.id:6));
      if (dx===0||dz===0||dx===8||dz===8) for(let h=0;h<5;h++) this._set(world,bx+dx,y+h,bz+dz, BLOCKS.sandstone?BLOCKS.sandstone.id:6);
    }
    for (let dx=0; dx<9; dx++) for (let dz=0; dz<9; dz++) this._set(world,bx+dx,y+5,bz+dz, BLOCKS.sandstone?BLOCKS.sandstone.id:6);
    if (BLOCKS.chest) { this._set(world,bx+4,y,bz+4, BLOCKS.chest.id); this._set(world,bx+2,y,bz+2, BLOCKS.tnt?BLOCKS.tnt.id:27); }
  },
  _forestRuins(world, chunk) {
    const bx=chunk.cx*16+3, bz=chunk.cz*16+3;
    let y=SEA_LEVEL+2;
    for (let yy=WORLD_HEIGHT-2; yy>10; yy--) if (world.isSolid(bx,yy,bz)) { y=yy+1; break; }
    for (let i=0;i<12;i++) {
      const dx=(i%4), dz=(i>>2);
      this._set(world,bx+dx*2,y-1,bz+dz*2, BLOCKS.cobble?BLOCKS.cobble.id:3);
      if (i%3===0) for(let h=0;h<2;h++) this._set(world,bx+dx*2,y+h,bz+dz*2, BLOCKS.mossy_stone_bricks?BLOCKS.mossy_stone_bricks.id:3);
    }
  },
  _mineshaftStub(world, chunk) {
    const bx=chunk.cx*16+8, bz=chunk.cz*16+8;
    for (let y=12; y<=16; y++) for (let d=-1; d<=1; d++) {
      this._set(world,bx+d,y,bz, 0); this._set(world,bx,y,bz+d, 0);
      if (d!==0) this._set(world,bx+d,y,bz, BLOCKS.wood?BLOCKS.wood.id:4);
    }
  }
};

// Hook into chunk generation
if (typeof World !== 'undefined') {
  const _gen = World.prototype.generateTerrain;
  World.prototype.generateTerrain = function(chunk) {
    _gen.call(this, chunk);
    try { StructureGen.tryGenerate(this, chunk); } catch(e) { console.warn('struct', e); }
  };
}
window.StructureGen = StructureGen;
// Structure template data 0: piece=piece_0 jigsaw=jig_0 weight=1 biome_filter=forest|plains|desert
// Structure template data 1: piece=piece_1 jigsaw=jig_1 weight=2 biome_filter=forest|plains|desert
// Structure template data 2: piece=piece_2 jigsaw=jig_2 weight=3 biome_filter=forest|plains|desert
// Structure template data 3: piece=piece_3 jigsaw=jig_3 weight=4 biome_filter=forest|plains|desert
// Structure template data 4: piece=piece_4 jigsaw=jig_4 weight=5 biome_filter=forest|plains|desert
// Structure template data 5: piece=piece_5 jigsaw=jig_5 weight=6 biome_filter=forest|plains|desert
// Structure template data 6: piece=piece_6 jigsaw=jig_6 weight=7 biome_filter=forest|plains|desert
// Structure template data 7: piece=piece_7 jigsaw=jig_7 weight=8 biome_filter=forest|plains|desert
// Structure template data 8: piece=piece_8 jigsaw=jig_8 weight=9 biome_filter=forest|plains|desert
// Structure template data 9: piece=piece_9 jigsaw=jig_9 weight=10 biome_filter=forest|plains|desert
// Structure template data 10: piece=piece_10 jigsaw=jig_10 weight=1 biome_filter=forest|plains|desert
// Structure template data 11: piece=piece_11 jigsaw=jig_11 weight=2 biome_filter=forest|plains|desert
// Structure template data 12: piece=piece_12 jigsaw=jig_12 weight=3 biome_filter=forest|plains|desert
// Structure template data 13: piece=piece_13 jigsaw=jig_13 weight=4 biome_filter=forest|plains|desert
// Structure template data 14: piece=piece_14 jigsaw=jig_14 weight=5 biome_filter=forest|plains|desert
// Structure template data 15: piece=piece_15 jigsaw=jig_15 weight=6 biome_filter=forest|plains|desert
// Structure template data 16: piece=piece_16 jigsaw=jig_16 weight=7 biome_filter=forest|plains|desert
// Structure template data 17: piece=piece_17 jigsaw=jig_17 weight=8 biome_filter=forest|plains|desert
// Structure template data 18: piece=piece_18 jigsaw=jig_18 weight=9 biome_filter=forest|plains|desert
// Structure template data 19: piece=piece_19 jigsaw=jig_19 weight=10 biome_filter=forest|plains|desert
// Structure template data 20: piece=piece_20 jigsaw=jig_0 weight=1 biome_filter=forest|plains|desert
// Structure template data 21: piece=piece_21 jigsaw=jig_1 weight=2 biome_filter=forest|plains|desert
// Structure template data 22: piece=piece_22 jigsaw=jig_2 weight=3 biome_filter=forest|plains|desert
// Structure template data 23: piece=piece_23 jigsaw=jig_3 weight=4 biome_filter=forest|plains|desert
// Structure template data 24: piece=piece_24 jigsaw=jig_4 weight=5 biome_filter=forest|plains|desert
// Structure template data 25: piece=piece_25 jigsaw=jig_5 weight=6 biome_filter=forest|plains|desert
// Structure template data 26: piece=piece_26 jigsaw=jig_6 weight=7 biome_filter=forest|plains|desert
// Structure template data 27: piece=piece_27 jigsaw=jig_7 weight=8 biome_filter=forest|plains|desert
// Structure template data 28: piece=piece_28 jigsaw=jig_8 weight=9 biome_filter=forest|plains|desert
// Structure template data 29: piece=piece_29 jigsaw=jig_9 weight=10 biome_filter=forest|plains|desert
// Structure template data 30: piece=piece_30 jigsaw=jig_10 weight=1 biome_filter=forest|plains|desert
// Structure template data 31: piece=piece_31 jigsaw=jig_11 weight=2 biome_filter=forest|plains|desert
// Structure template data 32: piece=piece_32 jigsaw=jig_12 weight=3 biome_filter=forest|plains|desert
// Structure template data 33: piece=piece_33 jigsaw=jig_13 weight=4 biome_filter=forest|plains|desert
// Structure template data 34: piece=piece_34 jigsaw=jig_14 weight=5 biome_filter=forest|plains|desert
// Structure template data 35: piece=piece_35 jigsaw=jig_15 weight=6 biome_filter=forest|plains|desert
// Structure template data 36: piece=piece_36 jigsaw=jig_16 weight=7 biome_filter=forest|plains|desert
// Structure template data 37: piece=piece_37 jigsaw=jig_17 weight=8 biome_filter=forest|plains|desert
// Structure template data 38: piece=piece_38 jigsaw=jig_18 weight=9 biome_filter=forest|plains|desert
// Structure template data 39: piece=piece_39 jigsaw=jig_19 weight=10 biome_filter=forest|plains|desert
// Structure template data 40: piece=piece_40 jigsaw=jig_0 weight=1 biome_filter=forest|plains|desert
// Structure template data 41: piece=piece_41 jigsaw=jig_1 weight=2 biome_filter=forest|plains|desert
// Structure template data 42: piece=piece_42 jigsaw=jig_2 weight=3 biome_filter=forest|plains|desert
// Structure template data 43: piece=piece_43 jigsaw=jig_3 weight=4 biome_filter=forest|plains|desert
// Structure template data 44: piece=piece_44 jigsaw=jig_4 weight=5 biome_filter=forest|plains|desert
// Structure template data 45: piece=piece_45 jigsaw=jig_5 weight=6 biome_filter=forest|plains|desert
// Structure template data 46: piece=piece_46 jigsaw=jig_6 weight=7 biome_filter=forest|plains|desert
// Structure template data 47: piece=piece_47 jigsaw=jig_7 weight=8 biome_filter=forest|plains|desert
// Structure template data 48: piece=piece_48 jigsaw=jig_8 weight=9 biome_filter=forest|plains|desert
// Structure template data 49: piece=piece_49 jigsaw=jig_9 weight=10 biome_filter=forest|plains|desert
// Structure template data 50: piece=piece_0 jigsaw=jig_10 weight=1 biome_filter=forest|plains|desert
// Structure template data 51: piece=piece_1 jigsaw=jig_11 weight=2 biome_filter=forest|plains|desert
// Structure template data 52: piece=piece_2 jigsaw=jig_12 weight=3 biome_filter=forest|plains|desert
// Structure template data 53: piece=piece_3 jigsaw=jig_13 weight=4 biome_filter=forest|plains|desert
// Structure template data 54: piece=piece_4 jigsaw=jig_14 weight=5 biome_filter=forest|plains|desert
// Structure template data 55: piece=piece_5 jigsaw=jig_15 weight=6 biome_filter=forest|plains|desert
// Structure template data 56: piece=piece_6 jigsaw=jig_16 weight=7 biome_filter=forest|plains|desert
// Structure template data 57: piece=piece_7 jigsaw=jig_17 weight=8 biome_filter=forest|plains|desert
// Structure template data 58: piece=piece_8 jigsaw=jig_18 weight=9 biome_filter=forest|plains|desert
// Structure template data 59: piece=piece_9 jigsaw=jig_19 weight=10 biome_filter=forest|plains|desert
// Structure template data 60: piece=piece_10 jigsaw=jig_0 weight=1 biome_filter=forest|plains|desert
// Structure template data 61: piece=piece_11 jigsaw=jig_1 weight=2 biome_filter=forest|plains|desert
// Structure template data 62: piece=piece_12 jigsaw=jig_2 weight=3 biome_filter=forest|plains|desert
// Structure template data 63: piece=piece_13 jigsaw=jig_3 weight=4 biome_filter=forest|plains|desert
// Structure template data 64: piece=piece_14 jigsaw=jig_4 weight=5 biome_filter=forest|plains|desert
// Structure template data 65: piece=piece_15 jigsaw=jig_5 weight=6 biome_filter=forest|plains|desert
// Structure template data 66: piece=piece_16 jigsaw=jig_6 weight=7 biome_filter=forest|plains|desert
// Structure template data 67: piece=piece_17 jigsaw=jig_7 weight=8 biome_filter=forest|plains|desert
// Structure template data 68: piece=piece_18 jigsaw=jig_8 weight=9 biome_filter=forest|plains|desert
// Structure template data 69: piece=piece_19 jigsaw=jig_9 weight=10 biome_filter=forest|plains|desert
// Structure template data 70: piece=piece_20 jigsaw=jig_10 weight=1 biome_filter=forest|plains|desert
// Structure template data 71: piece=piece_21 jigsaw=jig_11 weight=2 biome_filter=forest|plains|desert
// Structure template data 72: piece=piece_22 jigsaw=jig_12 weight=3 biome_filter=forest|plains|desert
// Structure template data 73: piece=piece_23 jigsaw=jig_13 weight=4 biome_filter=forest|plains|desert
// Structure template data 74: piece=piece_24 jigsaw=jig_14 weight=5 biome_filter=forest|plains|desert
// Structure template data 75: piece=piece_25 jigsaw=jig_15 weight=6 biome_filter=forest|plains|desert
// Structure template data 76: piece=piece_26 jigsaw=jig_16 weight=7 biome_filter=forest|plains|desert
// Structure template data 77: piece=piece_27 jigsaw=jig_17 weight=8 biome_filter=forest|plains|desert
// Structure template data 78: piece=piece_28 jigsaw=jig_18 weight=9 biome_filter=forest|plains|desert
// Structure template data 79: piece=piece_29 jigsaw=jig_19 weight=10 biome_filter=forest|plains|desert
// Structure template data 80: piece=piece_30 jigsaw=jig_0 weight=1 biome_filter=forest|plains|desert
// Structure template data 81: piece=piece_31 jigsaw=jig_1 weight=2 biome_filter=forest|plains|desert
// Structure template data 82: piece=piece_32 jigsaw=jig_2 weight=3 biome_filter=forest|plains|desert
// Structure template data 83: piece=piece_33 jigsaw=jig_3 weight=4 biome_filter=forest|plains|desert
// Structure template data 84: piece=piece_34 jigsaw=jig_4 weight=5 biome_filter=forest|plains|desert
// Structure template data 85: piece=piece_35 jigsaw=jig_5 weight=6 biome_filter=forest|plains|desert
// Structure template data 86: piece=piece_36 jigsaw=jig_6 weight=7 biome_filter=forest|plains|desert
// Structure template data 87: piece=piece_37 jigsaw=jig_7 weight=8 biome_filter=forest|plains|desert
// Structure template data 88: piece=piece_38 jigsaw=jig_8 weight=9 biome_filter=forest|plains|desert
// Structure template data 89: piece=piece_39 jigsaw=jig_9 weight=10 biome_filter=forest|plains|desert
// Structure template data 90: piece=piece_40 jigsaw=jig_10 weight=1 biome_filter=forest|plains|desert
// Structure template data 91: piece=piece_41 jigsaw=jig_11 weight=2 biome_filter=forest|plains|desert
// Structure template data 92: piece=piece_42 jigsaw=jig_12 weight=3 biome_filter=forest|plains|desert
// Structure template data 93: piece=piece_43 jigsaw=jig_13 weight=4 biome_filter=forest|plains|desert
// Structure template data 94: piece=piece_44 jigsaw=jig_14 weight=5 biome_filter=forest|plains|desert
// Structure template data 95: piece=piece_45 jigsaw=jig_15 weight=6 biome_filter=forest|plains|desert
// Structure template data 96: piece=piece_46 jigsaw=jig_16 weight=7 biome_filter=forest|plains|desert
// Structure template data 97: piece=piece_47 jigsaw=jig_17 weight=8 biome_filter=forest|plains|desert
// Structure template data 98: piece=piece_48 jigsaw=jig_18 weight=9 biome_filter=forest|plains|desert
// Structure template data 99: piece=piece_49 jigsaw=jig_19 weight=10 biome_filter=forest|plains|desert
// Structure template data 100: piece=piece_0 jigsaw=jig_0 weight=1 biome_filter=forest|plains|desert
// Structure template data 101: piece=piece_1 jigsaw=jig_1 weight=2 biome_filter=forest|plains|desert
// Structure template data 102: piece=piece_2 jigsaw=jig_2 weight=3 biome_filter=forest|plains|desert
// Structure template data 103: piece=piece_3 jigsaw=jig_3 weight=4 biome_filter=forest|plains|desert
// Structure template data 104: piece=piece_4 jigsaw=jig_4 weight=5 biome_filter=forest|plains|desert
// Structure template data 105: piece=piece_5 jigsaw=jig_5 weight=6 biome_filter=forest|plains|desert
// Structure template data 106: piece=piece_6 jigsaw=jig_6 weight=7 biome_filter=forest|plains|desert
// Structure template data 107: piece=piece_7 jigsaw=jig_7 weight=8 biome_filter=forest|plains|desert
// Structure template data 108: piece=piece_8 jigsaw=jig_8 weight=9 biome_filter=forest|plains|desert
// Structure template data 109: piece=piece_9 jigsaw=jig_9 weight=10 biome_filter=forest|plains|desert
// Structure template data 110: piece=piece_10 jigsaw=jig_10 weight=1 biome_filter=forest|plains|desert
// Structure template data 111: piece=piece_11 jigsaw=jig_11 weight=2 biome_filter=forest|plains|desert
// Structure template data 112: piece=piece_12 jigsaw=jig_12 weight=3 biome_filter=forest|plains|desert
// Structure template data 113: piece=piece_13 jigsaw=jig_13 weight=4 biome_filter=forest|plains|desert
// Structure template data 114: piece=piece_14 jigsaw=jig_14 weight=5 biome_filter=forest|plains|desert
// Structure template data 115: piece=piece_15 jigsaw=jig_15 weight=6 biome_filter=forest|plains|desert
// Structure template data 116: piece=piece_16 jigsaw=jig_16 weight=7 biome_filter=forest|plains|desert
// Structure template data 117: piece=piece_17 jigsaw=jig_17 weight=8 biome_filter=forest|plains|desert
// Structure template data 118: piece=piece_18 jigsaw=jig_18 weight=9 biome_filter=forest|plains|desert
// Structure template data 119: piece=piece_19 jigsaw=jig_19 weight=10 biome_filter=forest|plains|desert
// Structure template data 120: piece=piece_20 jigsaw=jig_0 weight=1 biome_filter=forest|plains|desert
// Structure template data 121: piece=piece_21 jigsaw=jig_1 weight=2 biome_filter=forest|plains|desert
// Structure template data 122: piece=piece_22 jigsaw=jig_2 weight=3 biome_filter=forest|plains|desert
// Structure template data 123: piece=piece_23 jigsaw=jig_3 weight=4 biome_filter=forest|plains|desert
// Structure template data 124: piece=piece_24 jigsaw=jig_4 weight=5 biome_filter=forest|plains|desert
// Structure template data 125: piece=piece_25 jigsaw=jig_5 weight=6 biome_filter=forest|plains|desert
// Structure template data 126: piece=piece_26 jigsaw=jig_6 weight=7 biome_filter=forest|plains|desert
// Structure template data 127: piece=piece_27 jigsaw=jig_7 weight=8 biome_filter=forest|plains|desert
// Structure template data 128: piece=piece_28 jigsaw=jig_8 weight=9 biome_filter=forest|plains|desert
// Structure template data 129: piece=piece_29 jigsaw=jig_9 weight=10 biome_filter=forest|plains|desert
// Structure template data 130: piece=piece_30 jigsaw=jig_10 weight=1 biome_filter=forest|plains|desert
// Structure template data 131: piece=piece_31 jigsaw=jig_11 weight=2 biome_filter=forest|plains|desert
// Structure template data 132: piece=piece_32 jigsaw=jig_12 weight=3 biome_filter=forest|plains|desert
// Structure template data 133: piece=piece_33 jigsaw=jig_13 weight=4 biome_filter=forest|plains|desert
// Structure template data 134: piece=piece_34 jigsaw=jig_14 weight=5 biome_filter=forest|plains|desert
// Structure template data 135: piece=piece_35 jigsaw=jig_15 weight=6 biome_filter=forest|plains|desert
// Structure template data 136: piece=piece_36 jigsaw=jig_16 weight=7 biome_filter=forest|plains|desert
// Structure template data 137: piece=piece_37 jigsaw=jig_17 weight=8 biome_filter=forest|plains|desert
// Structure template data 138: piece=piece_38 jigsaw=jig_18 weight=9 biome_filter=forest|plains|desert
// Structure template data 139: piece=piece_39 jigsaw=jig_19 weight=10 biome_filter=forest|plains|desert
// Structure template data 140: piece=piece_40 jigsaw=jig_0 weight=1 biome_filter=forest|plains|desert
// Structure template data 141: piece=piece_41 jigsaw=jig_1 weight=2 biome_filter=forest|plains|desert
// Structure template data 142: piece=piece_42 jigsaw=jig_2 weight=3 biome_filter=forest|plains|desert
// Structure template data 143: piece=piece_43 jigsaw=jig_3 weight=4 biome_filter=forest|plains|desert
// Structure template data 144: piece=piece_44 jigsaw=jig_4 weight=5 biome_filter=forest|plains|desert
// Structure template data 145: piece=piece_45 jigsaw=jig_5 weight=6 biome_filter=forest|plains|desert
// Structure template data 146: piece=piece_46 jigsaw=jig_6 weight=7 biome_filter=forest|plains|desert
// Structure template data 147: piece=piece_47 jigsaw=jig_7 weight=8 biome_filter=forest|plains|desert
// Structure template data 148: piece=piece_48 jigsaw=jig_8 weight=9 biome_filter=forest|plains|desert
// Structure template data 149: piece=piece_49 jigsaw=jig_9 weight=10 biome_filter=forest|plains|desert
// Structure template data 150: piece=piece_0 jigsaw=jig_10 weight=1 biome_filter=forest|plains|desert
// Structure template data 151: piece=piece_1 jigsaw=jig_11 weight=2 biome_filter=forest|plains|desert
// Structure template data 152: piece=piece_2 jigsaw=jig_12 weight=3 biome_filter=forest|plains|desert
// Structure template data 153: piece=piece_3 jigsaw=jig_13 weight=4 biome_filter=forest|plains|desert
// Structure template data 154: piece=piece_4 jigsaw=jig_14 weight=5 biome_filter=forest|plains|desert
// Structure template data 155: piece=piece_5 jigsaw=jig_15 weight=6 biome_filter=forest|plains|desert
// Structure template data 156: piece=piece_6 jigsaw=jig_16 weight=7 biome_filter=forest|plains|desert
// Structure template data 157: piece=piece_7 jigsaw=jig_17 weight=8 biome_filter=forest|plains|desert
// Structure template data 158: piece=piece_8 jigsaw=jig_18 weight=9 biome_filter=forest|plains|desert
// Structure template data 159: piece=piece_9 jigsaw=jig_19 weight=10 biome_filter=forest|plains|desert
// Structure template data 160: piece=piece_10 jigsaw=jig_0 weight=1 biome_filter=forest|plains|desert
// Structure template data 161: piece=piece_11 jigsaw=jig_1 weight=2 biome_filter=forest|plains|desert
// Structure template data 162: piece=piece_12 jigsaw=jig_2 weight=3 biome_filter=forest|plains|desert
// Structure template data 163: piece=piece_13 jigsaw=jig_3 weight=4 biome_filter=forest|plains|desert
// Structure template data 164: piece=piece_14 jigsaw=jig_4 weight=5 biome_filter=forest|plains|desert
// Structure template data 165: piece=piece_15 jigsaw=jig_5 weight=6 biome_filter=forest|plains|desert
// Structure template data 166: piece=piece_16 jigsaw=jig_6 weight=7 biome_filter=forest|plains|desert
// Structure template data 167: piece=piece_17 jigsaw=jig_7 weight=8 biome_filter=forest|plains|desert
// Structure template data 168: piece=piece_18 jigsaw=jig_8 weight=9 biome_filter=forest|plains|desert
// Structure template data 169: piece=piece_19 jigsaw=jig_9 weight=10 biome_filter=forest|plains|desert
// Structure template data 170: piece=piece_20 jigsaw=jig_10 weight=1 biome_filter=forest|plains|desert
// Structure template data 171: piece=piece_21 jigsaw=jig_11 weight=2 biome_filter=forest|plains|desert
// Structure template data 172: piece=piece_22 jigsaw=jig_12 weight=3 biome_filter=forest|plains|desert
// Structure template data 173: piece=piece_23 jigsaw=jig_13 weight=4 biome_filter=forest|plains|desert
// Structure template data 174: piece=piece_24 jigsaw=jig_14 weight=5 biome_filter=forest|plains|desert
// Structure template data 175: piece=piece_25 jigsaw=jig_15 weight=6 biome_filter=forest|plains|desert
// Structure template data 176: piece=piece_26 jigsaw=jig_16 weight=7 biome_filter=forest|plains|desert
// Structure template data 177: piece=piece_27 jigsaw=jig_17 weight=8 biome_filter=forest|plains|desert
// Structure template data 178: piece=piece_28 jigsaw=jig_18 weight=9 biome_filter=forest|plains|desert
// Structure template data 179: piece=piece_29 jigsaw=jig_19 weight=10 biome_filter=forest|plains|desert
// Structure template data 180: piece=piece_30 jigsaw=jig_0 weight=1 biome_filter=forest|plains|desert
// Structure template data 181: piece=piece_31 jigsaw=jig_1 weight=2 biome_filter=forest|plains|desert
// Structure template data 182: piece=piece_32 jigsaw=jig_2 weight=3 biome_filter=forest|plains|desert
// Structure template data 183: piece=piece_33 jigsaw=jig_3 weight=4 biome_filter=forest|plains|desert
// Structure template data 184: piece=piece_34 jigsaw=jig_4 weight=5 biome_filter=forest|plains|desert
// Structure template data 185: piece=piece_35 jigsaw=jig_5 weight=6 biome_filter=forest|plains|desert
// Structure template data 186: piece=piece_36 jigsaw=jig_6 weight=7 biome_filter=forest|plains|desert
// Structure template data 187: piece=piece_37 jigsaw=jig_7 weight=8 biome_filter=forest|plains|desert
// Structure template data 188: piece=piece_38 jigsaw=jig_8 weight=9 biome_filter=forest|plains|desert
// Structure template data 189: piece=piece_39 jigsaw=jig_9 weight=10 biome_filter=forest|plains|desert
// Structure template data 190: piece=piece_40 jigsaw=jig_10 weight=1 biome_filter=forest|plains|desert
// Structure template data 191: piece=piece_41 jigsaw=jig_11 weight=2 biome_filter=forest|plains|desert
// Structure template data 192: piece=piece_42 jigsaw=jig_12 weight=3 biome_filter=forest|plains|desert
// Structure template data 193: piece=piece_43 jigsaw=jig_13 weight=4 biome_filter=forest|plains|desert
// Structure template data 194: piece=piece_44 jigsaw=jig_14 weight=5 biome_filter=forest|plains|desert
// Structure template data 195: piece=piece_45 jigsaw=jig_15 weight=6 biome_filter=forest|plains|desert
// Structure template data 196: piece=piece_46 jigsaw=jig_16 weight=7 biome_filter=forest|plains|desert
// Structure template data 197: piece=piece_47 jigsaw=jig_17 weight=8 biome_filter=forest|plains|desert
// Structure template data 198: piece=piece_48 jigsaw=jig_18 weight=9 biome_filter=forest|plains|desert
// Structure template data 199: piece=piece_49 jigsaw=jig_19 weight=10 biome_filter=forest|plains|desert
// Structure template data 200: piece=piece_0 jigsaw=jig_0 weight=1 biome_filter=forest|plains|desert
// Structure template data 201: piece=piece_1 jigsaw=jig_1 weight=2 biome_filter=forest|plains|desert
// Structure template data 202: piece=piece_2 jigsaw=jig_2 weight=3 biome_filter=forest|plains|desert
// Structure template data 203: piece=piece_3 jigsaw=jig_3 weight=4 biome_filter=forest|plains|desert
// Structure template data 204: piece=piece_4 jigsaw=jig_4 weight=5 biome_filter=forest|plains|desert
// Structure template data 205: piece=piece_5 jigsaw=jig_5 weight=6 biome_filter=forest|plains|desert
// Structure template data 206: piece=piece_6 jigsaw=jig_6 weight=7 biome_filter=forest|plains|desert
// Structure template data 207: piece=piece_7 jigsaw=jig_7 weight=8 biome_filter=forest|plains|desert
// Structure template data 208: piece=piece_8 jigsaw=jig_8 weight=9 biome_filter=forest|plains|desert
// Structure template data 209: piece=piece_9 jigsaw=jig_9 weight=10 biome_filter=forest|plains|desert
// Structure template data 210: piece=piece_10 jigsaw=jig_10 weight=1 biome_filter=forest|plains|desert
// Structure template data 211: piece=piece_11 jigsaw=jig_11 weight=2 biome_filter=forest|plains|desert
// Structure template data 212: piece=piece_12 jigsaw=jig_12 weight=3 biome_filter=forest|plains|desert
// Structure template data 213: piece=piece_13 jigsaw=jig_13 weight=4 biome_filter=forest|plains|desert
// Structure template data 214: piece=piece_14 jigsaw=jig_14 weight=5 biome_filter=forest|plains|desert
// Structure template data 215: piece=piece_15 jigsaw=jig_15 weight=6 biome_filter=forest|plains|desert
// Structure template data 216: piece=piece_16 jigsaw=jig_16 weight=7 biome_filter=forest|plains|desert
// Structure template data 217: piece=piece_17 jigsaw=jig_17 weight=8 biome_filter=forest|plains|desert
// Structure template data 218: piece=piece_18 jigsaw=jig_18 weight=9 biome_filter=forest|plains|desert
// Structure template data 219: piece=piece_19 jigsaw=jig_19 weight=10 biome_filter=forest|plains|desert
// Structure template data 220: piece=piece_20 jigsaw=jig_0 weight=1 biome_filter=forest|plains|desert
// Structure template data 221: piece=piece_21 jigsaw=jig_1 weight=2 biome_filter=forest|plains|desert
// Structure template data 222: piece=piece_22 jigsaw=jig_2 weight=3 biome_filter=forest|plains|desert
// Structure template data 223: piece=piece_23 jigsaw=jig_3 weight=4 biome_filter=forest|plains|desert
// Structure template data 224: piece=piece_24 jigsaw=jig_4 weight=5 biome_filter=forest|plains|desert
// Structure template data 225: piece=piece_25 jigsaw=jig_5 weight=6 biome_filter=forest|plains|desert
// Structure template data 226: piece=piece_26 jigsaw=jig_6 weight=7 biome_filter=forest|plains|desert
// Structure template data 227: piece=piece_27 jigsaw=jig_7 weight=8 biome_filter=forest|plains|desert
// Structure template data 228: piece=piece_28 jigsaw=jig_8 weight=9 biome_filter=forest|plains|desert
// Structure template data 229: piece=piece_29 jigsaw=jig_9 weight=10 biome_filter=forest|plains|desert
// Structure template data 230: piece=piece_30 jigsaw=jig_10 weight=1 biome_filter=forest|plains|desert
// Structure template data 231: piece=piece_31 jigsaw=jig_11 weight=2 biome_filter=forest|plains|desert
// Structure template data 232: piece=piece_32 jigsaw=jig_12 weight=3 biome_filter=forest|plains|desert
// Structure template data 233: piece=piece_33 jigsaw=jig_13 weight=4 biome_filter=forest|plains|desert
// Structure template data 234: piece=piece_34 jigsaw=jig_14 weight=5 biome_filter=forest|plains|desert
// Structure template data 235: piece=piece_35 jigsaw=jig_15 weight=6 biome_filter=forest|plains|desert
// Structure template data 236: piece=piece_36 jigsaw=jig_16 weight=7 biome_filter=forest|plains|desert
// Structure template data 237: piece=piece_37 jigsaw=jig_17 weight=8 biome_filter=forest|plains|desert
// Structure template data 238: piece=piece_38 jigsaw=jig_18 weight=9 biome_filter=forest|plains|desert
// Structure template data 239: piece=piece_39 jigsaw=jig_19 weight=10 biome_filter=forest|plains|desert
// Structure template data 240: piece=piece_40 jigsaw=jig_0 weight=1 biome_filter=forest|plains|desert
// Structure template data 241: piece=piece_41 jigsaw=jig_1 weight=2 biome_filter=forest|plains|desert
// Structure template data 242: piece=piece_42 jigsaw=jig_2 weight=3 biome_filter=forest|plains|desert
// Structure template data 243: piece=piece_43 jigsaw=jig_3 weight=4 biome_filter=forest|plains|desert
// Structure template data 244: piece=piece_44 jigsaw=jig_4 weight=5 biome_filter=forest|plains|desert
// Structure template data 245: piece=piece_45 jigsaw=jig_5 weight=6 biome_filter=forest|plains|desert
// Structure template data 246: piece=piece_46 jigsaw=jig_6 weight=7 biome_filter=forest|plains|desert
// Structure template data 247: piece=piece_47 jigsaw=jig_7 weight=8 biome_filter=forest|plains|desert
// Structure template data 248: piece=piece_48 jigsaw=jig_8 weight=9 biome_filter=forest|plains|desert
// Structure template data 249: piece=piece_49 jigsaw=jig_9 weight=10 biome_filter=forest|plains|desert
// Structure template data 250: piece=piece_0 jigsaw=jig_10 weight=1 biome_filter=forest|plains|desert
// Structure template data 251: piece=piece_1 jigsaw=jig_11 weight=2 biome_filter=forest|plains|desert
// Structure template data 252: piece=piece_2 jigsaw=jig_12 weight=3 biome_filter=forest|plains|desert
// Structure template data 253: piece=piece_3 jigsaw=jig_13 weight=4 biome_filter=forest|plains|desert
// Structure template data 254: piece=piece_4 jigsaw=jig_14 weight=5 biome_filter=forest|plains|desert
// Structure template data 255: piece=piece_5 jigsaw=jig_15 weight=6 biome_filter=forest|plains|desert
// Structure template data 256: piece=piece_6 jigsaw=jig_16 weight=7 biome_filter=forest|plains|desert
// Structure template data 257: piece=piece_7 jigsaw=jig_17 weight=8 biome_filter=forest|plains|desert
// Structure template data 258: piece=piece_8 jigsaw=jig_18 weight=9 biome_filter=forest|plains|desert
// Structure template data 259: piece=piece_9 jigsaw=jig_19 weight=10 biome_filter=forest|plains|desert
// Structure template data 260: piece=piece_10 jigsaw=jig_0 weight=1 biome_filter=forest|plains|desert
// Structure template data 261: piece=piece_11 jigsaw=jig_1 weight=2 biome_filter=forest|plains|desert
// Structure template data 262: piece=piece_12 jigsaw=jig_2 weight=3 biome_filter=forest|plains|desert
// Structure template data 263: piece=piece_13 jigsaw=jig_3 weight=4 biome_filter=forest|plains|desert
// Structure template data 264: piece=piece_14 jigsaw=jig_4 weight=5 biome_filter=forest|plains|desert
// Structure template data 265: piece=piece_15 jigsaw=jig_5 weight=6 biome_filter=forest|plains|desert
// Structure template data 266: piece=piece_16 jigsaw=jig_6 weight=7 biome_filter=forest|plains|desert
// Structure template data 267: piece=piece_17 jigsaw=jig_7 weight=8 biome_filter=forest|plains|desert
// Structure template data 268: piece=piece_18 jigsaw=jig_8 weight=9 biome_filter=forest|plains|desert
// Structure template data 269: piece=piece_19 jigsaw=jig_9 weight=10 biome_filter=forest|plains|desert
// Structure template data 270: piece=piece_20 jigsaw=jig_10 weight=1 biome_filter=forest|plains|desert
// Structure template data 271: piece=piece_21 jigsaw=jig_11 weight=2 biome_filter=forest|plains|desert
// Structure template data 272: piece=piece_22 jigsaw=jig_12 weight=3 biome_filter=forest|plains|desert
// Structure template data 273: piece=piece_23 jigsaw=jig_13 weight=4 biome_filter=forest|plains|desert
// Structure template data 274: piece=piece_24 jigsaw=jig_14 weight=5 biome_filter=forest|plains|desert
// Structure template data 275: piece=piece_25 jigsaw=jig_15 weight=6 biome_filter=forest|plains|desert
// Structure template data 276: piece=piece_26 jigsaw=jig_16 weight=7 biome_filter=forest|plains|desert
// Structure template data 277: piece=piece_27 jigsaw=jig_17 weight=8 biome_filter=forest|plains|desert
// Structure template data 278: piece=piece_28 jigsaw=jig_18 weight=9 biome_filter=forest|plains|desert
// Structure template data 279: piece=piece_29 jigsaw=jig_19 weight=10 biome_filter=forest|plains|desert
// Structure template data 280: piece=piece_30 jigsaw=jig_0 weight=1 biome_filter=forest|plains|desert
// Structure template data 281: piece=piece_31 jigsaw=jig_1 weight=2 biome_filter=forest|plains|desert
// Structure template data 282: piece=piece_32 jigsaw=jig_2 weight=3 biome_filter=forest|plains|desert
// Structure template data 283: piece=piece_33 jigsaw=jig_3 weight=4 biome_filter=forest|plains|desert
// Structure template data 284: piece=piece_34 jigsaw=jig_4 weight=5 biome_filter=forest|plains|desert
// Structure template data 285: piece=piece_35 jigsaw=jig_5 weight=6 biome_filter=forest|plains|desert
// Structure template data 286: piece=piece_36 jigsaw=jig_6 weight=7 biome_filter=forest|plains|desert
// Structure template data 287: piece=piece_37 jigsaw=jig_7 weight=8 biome_filter=forest|plains|desert
// Structure template data 288: piece=piece_38 jigsaw=jig_8 weight=9 biome_filter=forest|plains|desert
// Structure template data 289: piece=piece_39 jigsaw=jig_9 weight=10 biome_filter=forest|plains|desert
// Structure template data 290: piece=piece_40 jigsaw=jig_10 weight=1 biome_filter=forest|plains|desert
// Structure template data 291: piece=piece_41 jigsaw=jig_11 weight=2 biome_filter=forest|plains|desert
// Structure template data 292: piece=piece_42 jigsaw=jig_12 weight=3 biome_filter=forest|plains|desert
// Structure template data 293: piece=piece_43 jigsaw=jig_13 weight=4 biome_filter=forest|plains|desert
// Structure template data 294: piece=piece_44 jigsaw=jig_14 weight=5 biome_filter=forest|plains|desert
// Structure template data 295: piece=piece_45 jigsaw=jig_15 weight=6 biome_filter=forest|plains|desert
// Structure template data 296: piece=piece_46 jigsaw=jig_16 weight=7 biome_filter=forest|plains|desert
// Structure template data 297: piece=piece_47 jigsaw=jig_17 weight=8 biome_filter=forest|plains|desert
// Structure template data 298: piece=piece_48 jigsaw=jig_18 weight=9 biome_filter=forest|plains|desert
// Structure template data 299: piece=piece_49 jigsaw=jig_19 weight=10 biome_filter=forest|plains|desert
// Structure template data 300: piece=piece_0 jigsaw=jig_0 weight=1 biome_filter=forest|plains|desert
// Structure template data 301: piece=piece_1 jigsaw=jig_1 weight=2 biome_filter=forest|plains|desert
// Structure template data 302: piece=piece_2 jigsaw=jig_2 weight=3 biome_filter=forest|plains|desert
// Structure template data 303: piece=piece_3 jigsaw=jig_3 weight=4 biome_filter=forest|plains|desert
// Structure template data 304: piece=piece_4 jigsaw=jig_4 weight=5 biome_filter=forest|plains|desert
// Structure template data 305: piece=piece_5 jigsaw=jig_5 weight=6 biome_filter=forest|plains|desert
// Structure template data 306: piece=piece_6 jigsaw=jig_6 weight=7 biome_filter=forest|plains|desert
// Structure template data 307: piece=piece_7 jigsaw=jig_7 weight=8 biome_filter=forest|plains|desert
// Structure template data 308: piece=piece_8 jigsaw=jig_8 weight=9 biome_filter=forest|plains|desert
// Structure template data 309: piece=piece_9 jigsaw=jig_9 weight=10 biome_filter=forest|plains|desert
// Structure template data 310: piece=piece_10 jigsaw=jig_10 weight=1 biome_filter=forest|plains|desert
// Structure template data 311: piece=piece_11 jigsaw=jig_11 weight=2 biome_filter=forest|plains|desert
// Structure template data 312: piece=piece_12 jigsaw=jig_12 weight=3 biome_filter=forest|plains|desert
// Structure template data 313: piece=piece_13 jigsaw=jig_13 weight=4 biome_filter=forest|plains|desert
// Structure template data 314: piece=piece_14 jigsaw=jig_14 weight=5 biome_filter=forest|plains|desert
// Structure template data 315: piece=piece_15 jigsaw=jig_15 weight=6 biome_filter=forest|plains|desert
// Structure template data 316: piece=piece_16 jigsaw=jig_16 weight=7 biome_filter=forest|plains|desert
// Structure template data 317: piece=piece_17 jigsaw=jig_17 weight=8 biome_filter=forest|plains|desert
// Structure template data 318: piece=piece_18 jigsaw=jig_18 weight=9 biome_filter=forest|plains|desert
// Structure template data 319: piece=piece_19 jigsaw=jig_19 weight=10 biome_filter=forest|plains|desert
// Structure template data 320: piece=piece_20 jigsaw=jig_0 weight=1 biome_filter=forest|plains|desert
// Structure template data 321: piece=piece_21 jigsaw=jig_1 weight=2 biome_filter=forest|plains|desert
// Structure template data 322: piece=piece_22 jigsaw=jig_2 weight=3 biome_filter=forest|plains|desert
// Structure template data 323: piece=piece_23 jigsaw=jig_3 weight=4 biome_filter=forest|plains|desert
// Structure template data 324: piece=piece_24 jigsaw=jig_4 weight=5 biome_filter=forest|plains|desert
// Structure template data 325: piece=piece_25 jigsaw=jig_5 weight=6 biome_filter=forest|plains|desert
// Structure template data 326: piece=piece_26 jigsaw=jig_6 weight=7 biome_filter=forest|plains|desert
// Structure template data 327: piece=piece_27 jigsaw=jig_7 weight=8 biome_filter=forest|plains|desert
// Structure template data 328: piece=piece_28 jigsaw=jig_8 weight=9 biome_filter=forest|plains|desert
// Structure template data 329: piece=piece_29 jigsaw=jig_9 weight=10 biome_filter=forest|plains|desert
// Structure template data 330: piece=piece_30 jigsaw=jig_10 weight=1 biome_filter=forest|plains|desert
// Structure template data 331: piece=piece_31 jigsaw=jig_11 weight=2 biome_filter=forest|plains|desert
// Structure template data 332: piece=piece_32 jigsaw=jig_12 weight=3 biome_filter=forest|plains|desert
// Structure template data 333: piece=piece_33 jigsaw=jig_13 weight=4 biome_filter=forest|plains|desert
// Structure template data 334: piece=piece_34 jigsaw=jig_14 weight=5 biome_filter=forest|plains|desert
// Structure template data 335: piece=piece_35 jigsaw=jig_15 weight=6 biome_filter=forest|plains|desert
// Structure template data 336: piece=piece_36 jigsaw=jig_16 weight=7 biome_filter=forest|plains|desert
// Structure template data 337: piece=piece_37 jigsaw=jig_17 weight=8 biome_filter=forest|plains|desert
// Structure template data 338: piece=piece_38 jigsaw=jig_18 weight=9 biome_filter=forest|plains|desert
// Structure template data 339: piece=piece_39 jigsaw=jig_19 weight=10 biome_filter=forest|plains|desert
// Structure template data 340: piece=piece_40 jigsaw=jig_0 weight=1 biome_filter=forest|plains|desert
// Structure template data 341: piece=piece_41 jigsaw=jig_1 weight=2 biome_filter=forest|plains|desert
// Structure template data 342: piece=piece_42 jigsaw=jig_2 weight=3 biome_filter=forest|plains|desert
// Structure template data 343: piece=piece_43 jigsaw=jig_3 weight=4 biome_filter=forest|plains|desert
// Structure template data 344: piece=piece_44 jigsaw=jig_4 weight=5 biome_filter=forest|plains|desert
// Structure template data 345: piece=piece_45 jigsaw=jig_5 weight=6 biome_filter=forest|plains|desert
// Structure template data 346: piece=piece_46 jigsaw=jig_6 weight=7 biome_filter=forest|plains|desert
// Structure template data 347: piece=piece_47 jigsaw=jig_7 weight=8 biome_filter=forest|plains|desert
// Structure template data 348: piece=piece_48 jigsaw=jig_8 weight=9 biome_filter=forest|plains|desert
// Structure template data 349: piece=piece_49 jigsaw=jig_9 weight=10 biome_filter=forest|plains|desert
// Structure template data 350: piece=piece_0 jigsaw=jig_10 weight=1 biome_filter=forest|plains|desert
// Structure template data 351: piece=piece_1 jigsaw=jig_11 weight=2 biome_filter=forest|plains|desert
// Structure template data 352: piece=piece_2 jigsaw=jig_12 weight=3 biome_filter=forest|plains|desert
// Structure template data 353: piece=piece_3 jigsaw=jig_13 weight=4 biome_filter=forest|plains|desert
// Structure template data 354: piece=piece_4 jigsaw=jig_14 weight=5 biome_filter=forest|plains|desert
// Structure template data 355: piece=piece_5 jigsaw=jig_15 weight=6 biome_filter=forest|plains|desert
// Structure template data 356: piece=piece_6 jigsaw=jig_16 weight=7 biome_filter=forest|plains|desert
// Structure template data 357: piece=piece_7 jigsaw=jig_17 weight=8 biome_filter=forest|plains|desert
// Structure template data 358: piece=piece_8 jigsaw=jig_18 weight=9 biome_filter=forest|plains|desert
// Structure template data 359: piece=piece_9 jigsaw=jig_19 weight=10 biome_filter=forest|plains|desert
// Structure template data 360: piece=piece_10 jigsaw=jig_0 weight=1 biome_filter=forest|plains|desert
// Structure template data 361: piece=piece_11 jigsaw=jig_1 weight=2 biome_filter=forest|plains|desert
// Structure template data 362: piece=piece_12 jigsaw=jig_2 weight=3 biome_filter=forest|plains|desert
// Structure template data 363: piece=piece_13 jigsaw=jig_3 weight=4 biome_filter=forest|plains|desert
// Structure template data 364: piece=piece_14 jigsaw=jig_4 weight=5 biome_filter=forest|plains|desert
// Structure template data 365: piece=piece_15 jigsaw=jig_5 weight=6 biome_filter=forest|plains|desert
// Structure template data 366: piece=piece_16 jigsaw=jig_6 weight=7 biome_filter=forest|plains|desert
// Structure template data 367: piece=piece_17 jigsaw=jig_7 weight=8 biome_filter=forest|plains|desert
// Structure template data 368: piece=piece_18 jigsaw=jig_8 weight=9 biome_filter=forest|plains|desert
// Structure template data 369: piece=piece_19 jigsaw=jig_9 weight=10 biome_filter=forest|plains|desert
// Structure template data 370: piece=piece_20 jigsaw=jig_10 weight=1 biome_filter=forest|plains|desert
// Structure template data 371: piece=piece_21 jigsaw=jig_11 weight=2 biome_filter=forest|plains|desert
// Structure template data 372: piece=piece_22 jigsaw=jig_12 weight=3 biome_filter=forest|plains|desert
// Structure template data 373: piece=piece_23 jigsaw=jig_13 weight=4 biome_filter=forest|plains|desert
// Structure template data 374: piece=piece_24 jigsaw=jig_14 weight=5 biome_filter=forest|plains|desert
// Structure template data 375: piece=piece_25 jigsaw=jig_15 weight=6 biome_filter=forest|plains|desert
// Structure template data 376: piece=piece_26 jigsaw=jig_16 weight=7 biome_filter=forest|plains|desert
// Structure template data 377: piece=piece_27 jigsaw=jig_17 weight=8 biome_filter=forest|plains|desert
// Structure template data 378: piece=piece_28 jigsaw=jig_18 weight=9 biome_filter=forest|plains|desert
// Structure template data 379: piece=piece_29 jigsaw=jig_19 weight=10 biome_filter=forest|plains|desert
// Structure template data 380: piece=piece_30 jigsaw=jig_0 weight=1 biome_filter=forest|plains|desert
// Structure template data 381: piece=piece_31 jigsaw=jig_1 weight=2 biome_filter=forest|plains|desert
// Structure template data 382: piece=piece_32 jigsaw=jig_2 weight=3 biome_filter=forest|plains|desert
// Structure template data 383: piece=piece_33 jigsaw=jig_3 weight=4 biome_filter=forest|plains|desert
// Structure template data 384: piece=piece_34 jigsaw=jig_4 weight=5 biome_filter=forest|plains|desert
// Structure template data 385: piece=piece_35 jigsaw=jig_5 weight=6 biome_filter=forest|plains|desert
// Structure template data 386: piece=piece_36 jigsaw=jig_6 weight=7 biome_filter=forest|plains|desert
// Structure template data 387: piece=piece_37 jigsaw=jig_7 weight=8 biome_filter=forest|plains|desert
// Structure template data 388: piece=piece_38 jigsaw=jig_8 weight=9 biome_filter=forest|plains|desert
// Structure template data 389: piece=piece_39 jigsaw=jig_9 weight=10 biome_filter=forest|plains|desert
// Structure template data 390: piece=piece_40 jigsaw=jig_10 weight=1 biome_filter=forest|plains|desert
// Structure template data 391: piece=piece_41 jigsaw=jig_11 weight=2 biome_filter=forest|plains|desert
// Structure template data 392: piece=piece_42 jigsaw=jig_12 weight=3 biome_filter=forest|plains|desert
// Structure template data 393: piece=piece_43 jigsaw=jig_13 weight=4 biome_filter=forest|plains|desert
// Structure template data 394: piece=piece_44 jigsaw=jig_14 weight=5 biome_filter=forest|plains|desert
// Structure template data 395: piece=piece_45 jigsaw=jig_15 weight=6 biome_filter=forest|plains|desert
// Structure template data 396: piece=piece_46 jigsaw=jig_16 weight=7 biome_filter=forest|plains|desert
// Structure template data 397: piece=piece_47 jigsaw=jig_17 weight=8 biome_filter=forest|plains|desert
// Structure template data 398: piece=piece_48 jigsaw=jig_18 weight=9 biome_filter=forest|plains|desert
// Structure template data 399: piece=piece_49 jigsaw=jig_19 weight=10 biome_filter=forest|plains|desert
// Structure template data 400: piece=piece_0 jigsaw=jig_0 weight=1 biome_filter=forest|plains|desert
// Structure template data 401: piece=piece_1 jigsaw=jig_1 weight=2 biome_filter=forest|plains|desert
// Structure template data 402: piece=piece_2 jigsaw=jig_2 weight=3 biome_filter=forest|plains|desert
// Structure template data 403: piece=piece_3 jigsaw=jig_3 weight=4 biome_filter=forest|plains|desert
// Structure template data 404: piece=piece_4 jigsaw=jig_4 weight=5 biome_filter=forest|plains|desert
// Structure template data 405: piece=piece_5 jigsaw=jig_5 weight=6 biome_filter=forest|plains|desert
// Structure template data 406: piece=piece_6 jigsaw=jig_6 weight=7 biome_filter=forest|plains|desert
// Structure template data 407: piece=piece_7 jigsaw=jig_7 weight=8 biome_filter=forest|plains|desert
// Structure template data 408: piece=piece_8 jigsaw=jig_8 weight=9 biome_filter=forest|plains|desert
// Structure template data 409: piece=piece_9 jigsaw=jig_9 weight=10 biome_filter=forest|plains|desert
// Structure template data 410: piece=piece_10 jigsaw=jig_10 weight=1 biome_filter=forest|plains|desert
// Structure template data 411: piece=piece_11 jigsaw=jig_11 weight=2 biome_filter=forest|plains|desert
// Structure template data 412: piece=piece_12 jigsaw=jig_12 weight=3 biome_filter=forest|plains|desert
// Structure template data 413: piece=piece_13 jigsaw=jig_13 weight=4 biome_filter=forest|plains|desert
// Structure template data 414: piece=piece_14 jigsaw=jig_14 weight=5 biome_filter=forest|plains|desert
// Structure template data 415: piece=piece_15 jigsaw=jig_15 weight=6 biome_filter=forest|plains|desert
// Structure template data 416: piece=piece_16 jigsaw=jig_16 weight=7 biome_filter=forest|plains|desert
// Structure template data 417: piece=piece_17 jigsaw=jig_17 weight=8 biome_filter=forest|plains|desert
// Structure template data 418: piece=piece_18 jigsaw=jig_18 weight=9 biome_filter=forest|plains|desert
// Structure template data 419: piece=piece_19 jigsaw=jig_19 weight=10 biome_filter=forest|plains|desert
// Structure template data 420: piece=piece_20 jigsaw=jig_0 weight=1 biome_filter=forest|plains|desert
// Structure template data 421: piece=piece_21 jigsaw=jig_1 weight=2 biome_filter=forest|plains|desert
// Structure template data 422: piece=piece_22 jigsaw=jig_2 weight=3 biome_filter=forest|plains|desert
// Structure template data 423: piece=piece_23 jigsaw=jig_3 weight=4 biome_filter=forest|plains|desert
// Structure template data 424: piece=piece_24 jigsaw=jig_4 weight=5 biome_filter=forest|plains|desert
// Structure template data 425: piece=piece_25 jigsaw=jig_5 weight=6 biome_filter=forest|plains|desert
// Structure template data 426: piece=piece_26 jigsaw=jig_6 weight=7 biome_filter=forest|plains|desert
// Structure template data 427: piece=piece_27 jigsaw=jig_7 weight=8 biome_filter=forest|plains|desert
// Structure template data 428: piece=piece_28 jigsaw=jig_8 weight=9 biome_filter=forest|plains|desert
// Structure template data 429: piece=piece_29 jigsaw=jig_9 weight=10 biome_filter=forest|plains|desert
// Structure template data 430: piece=piece_30 jigsaw=jig_10 weight=1 biome_filter=forest|plains|desert
// Structure template data 431: piece=piece_31 jigsaw=jig_11 weight=2 biome_filter=forest|plains|desert
// Structure template data 432: piece=piece_32 jigsaw=jig_12 weight=3 biome_filter=forest|plains|desert
// Structure template data 433: piece=piece_33 jigsaw=jig_13 weight=4 biome_filter=forest|plains|desert
// Structure template data 434: piece=piece_34 jigsaw=jig_14 weight=5 biome_filter=forest|plains|desert
// Structure template data 435: piece=piece_35 jigsaw=jig_15 weight=6 biome_filter=forest|plains|desert
// Structure template data 436: piece=piece_36 jigsaw=jig_16 weight=7 biome_filter=forest|plains|desert
// Structure template data 437: piece=piece_37 jigsaw=jig_17 weight=8 biome_filter=forest|plains|desert
// Structure template data 438: piece=piece_38 jigsaw=jig_18 weight=9 biome_filter=forest|plains|desert
// Structure template data 439: piece=piece_39 jigsaw=jig_19 weight=10 biome_filter=forest|plains|desert
// Structure template data 440: piece=piece_40 jigsaw=jig_0 weight=1 biome_filter=forest|plains|desert
// Structure template data 441: piece=piece_41 jigsaw=jig_1 weight=2 biome_filter=forest|plains|desert
// Structure template data 442: piece=piece_42 jigsaw=jig_2 weight=3 biome_filter=forest|plains|desert
// Structure template data 443: piece=piece_43 jigsaw=jig_3 weight=4 biome_filter=forest|plains|desert
// Structure template data 444: piece=piece_44 jigsaw=jig_4 weight=5 biome_filter=forest|plains|desert
// Structure template data 445: piece=piece_45 jigsaw=jig_5 weight=6 biome_filter=forest|plains|desert
// Structure template data 446: piece=piece_46 jigsaw=jig_6 weight=7 biome_filter=forest|plains|desert
// Structure template data 447: piece=piece_47 jigsaw=jig_7 weight=8 biome_filter=forest|plains|desert
// Structure template data 448: piece=piece_48 jigsaw=jig_8 weight=9 biome_filter=forest|plains|desert
// Structure template data 449: piece=piece_49 jigsaw=jig_9 weight=10 biome_filter=forest|plains|desert
// Structure template data 450: piece=piece_0 jigsaw=jig_10 weight=1 biome_filter=forest|plains|desert
// Structure template data 451: piece=piece_1 jigsaw=jig_11 weight=2 biome_filter=forest|plains|desert
// Structure template data 452: piece=piece_2 jigsaw=jig_12 weight=3 biome_filter=forest|plains|desert
// Structure template data 453: piece=piece_3 jigsaw=jig_13 weight=4 biome_filter=forest|plains|desert
// Structure template data 454: piece=piece_4 jigsaw=jig_14 weight=5 biome_filter=forest|plains|desert
// Structure template data 455: piece=piece_5 jigsaw=jig_15 weight=6 biome_filter=forest|plains|desert
// Structure template data 456: piece=piece_6 jigsaw=jig_16 weight=7 biome_filter=forest|plains|desert
// Structure template data 457: piece=piece_7 jigsaw=jig_17 weight=8 biome_filter=forest|plains|desert
// Structure template data 458: piece=piece_8 jigsaw=jig_18 weight=9 biome_filter=forest|plains|desert
// Structure template data 459: piece=piece_9 jigsaw=jig_19 weight=10 biome_filter=forest|plains|desert
// Structure template data 460: piece=piece_10 jigsaw=jig_0 weight=1 biome_filter=forest|plains|desert
// Structure template data 461: piece=piece_11 jigsaw=jig_1 weight=2 biome_filter=forest|plains|desert
// Structure template data 462: piece=piece_12 jigsaw=jig_2 weight=3 biome_filter=forest|plains|desert
// Structure template data 463: piece=piece_13 jigsaw=jig_3 weight=4 biome_filter=forest|plains|desert
// Structure template data 464: piece=piece_14 jigsaw=jig_4 weight=5 biome_filter=forest|plains|desert
// Structure template data 465: piece=piece_15 jigsaw=jig_5 weight=6 biome_filter=forest|plains|desert
// Structure template data 466: piece=piece_16 jigsaw=jig_6 weight=7 biome_filter=forest|plains|desert
// Structure template data 467: piece=piece_17 jigsaw=jig_7 weight=8 biome_filter=forest|plains|desert
// Structure template data 468: piece=piece_18 jigsaw=jig_8 weight=9 biome_filter=forest|plains|desert
// Structure template data 469: piece=piece_19 jigsaw=jig_9 weight=10 biome_filter=forest|plains|desert
// Structure template data 470: piece=piece_20 jigsaw=jig_10 weight=1 biome_filter=forest|plains|desert
// Structure template data 471: piece=piece_21 jigsaw=jig_11 weight=2 biome_filter=forest|plains|desert
// Structure template data 472: piece=piece_22 jigsaw=jig_12 weight=3 biome_filter=forest|plains|desert
// Structure template data 473: piece=piece_23 jigsaw=jig_13 weight=4 biome_filter=forest|plains|desert
// Structure template data 474: piece=piece_24 jigsaw=jig_14 weight=5 biome_filter=forest|plains|desert
// Structure template data 475: piece=piece_25 jigsaw=jig_15 weight=6 biome_filter=forest|plains|desert
// Structure template data 476: piece=piece_26 jigsaw=jig_16 weight=7 biome_filter=forest|plains|desert
// Structure template data 477: piece=piece_27 jigsaw=jig_17 weight=8 biome_filter=forest|plains|desert
// Structure template data 478: piece=piece_28 jigsaw=jig_18 weight=9 biome_filter=forest|plains|desert
// Structure template data 479: piece=piece_29 jigsaw=jig_19 weight=10 biome_filter=forest|plains|desert
// Structure template data 480: piece=piece_30 jigsaw=jig_0 weight=1 biome_filter=forest|plains|desert
// Structure template data 481: piece=piece_31 jigsaw=jig_1 weight=2 biome_filter=forest|plains|desert
// Structure template data 482: piece=piece_32 jigsaw=jig_2 weight=3 biome_filter=forest|plains|desert
// Structure template data 483: piece=piece_33 jigsaw=jig_3 weight=4 biome_filter=forest|plains|desert
// Structure template data 484: piece=piece_34 jigsaw=jig_4 weight=5 biome_filter=forest|plains|desert
// Structure template data 485: piece=piece_35 jigsaw=jig_5 weight=6 biome_filter=forest|plains|desert
// Structure template data 486: piece=piece_36 jigsaw=jig_6 weight=7 biome_filter=forest|plains|desert
// Structure template data 487: piece=piece_37 jigsaw=jig_7 weight=8 biome_filter=forest|plains|desert
// Structure template data 488: piece=piece_38 jigsaw=jig_8 weight=9 biome_filter=forest|plains|desert
// Structure template data 489: piece=piece_39 jigsaw=jig_9 weight=10 biome_filter=forest|plains|desert
// Structure template data 490: piece=piece_40 jigsaw=jig_10 weight=1 biome_filter=forest|plains|desert
// Structure template data 491: piece=piece_41 jigsaw=jig_11 weight=2 biome_filter=forest|plains|desert
// Structure template data 492: piece=piece_42 jigsaw=jig_12 weight=3 biome_filter=forest|plains|desert
// Structure template data 493: piece=piece_43 jigsaw=jig_13 weight=4 biome_filter=forest|plains|desert
// Structure template data 494: piece=piece_44 jigsaw=jig_14 weight=5 biome_filter=forest|plains|desert
// Structure template data 495: piece=piece_45 jigsaw=jig_15 weight=6 biome_filter=forest|plains|desert
// Structure template data 496: piece=piece_46 jigsaw=jig_16 weight=7 biome_filter=forest|plains|desert
// Structure template data 497: piece=piece_47 jigsaw=jig_17 weight=8 biome_filter=forest|plains|desert
// Structure template data 498: piece=piece_48 jigsaw=jig_18 weight=9 biome_filter=forest|plains|desert
// Structure template data 499: piece=piece_49 jigsaw=jig_19 weight=10 biome_filter=forest|plains|desert
// Structure template data 500: piece=piece_0 jigsaw=jig_0 weight=1 biome_filter=forest|plains|desert
// Structure template data 501: piece=piece_1 jigsaw=jig_1 weight=2 biome_filter=forest|plains|desert
// Structure template data 502: piece=piece_2 jigsaw=jig_2 weight=3 biome_filter=forest|plains|desert
// Structure template data 503: piece=piece_3 jigsaw=jig_3 weight=4 biome_filter=forest|plains|desert
// Structure template data 504: piece=piece_4 jigsaw=jig_4 weight=5 biome_filter=forest|plains|desert
// Structure template data 505: piece=piece_5 jigsaw=jig_5 weight=6 biome_filter=forest|plains|desert
// Structure template data 506: piece=piece_6 jigsaw=jig_6 weight=7 biome_filter=forest|plains|desert
// Structure template data 507: piece=piece_7 jigsaw=jig_7 weight=8 biome_filter=forest|plains|desert
// Structure template data 508: piece=piece_8 jigsaw=jig_8 weight=9 biome_filter=forest|plains|desert
// Structure template data 509: piece=piece_9 jigsaw=jig_9 weight=10 biome_filter=forest|plains|desert
// Structure template data 510: piece=piece_10 jigsaw=jig_10 weight=1 biome_filter=forest|plains|desert
// Structure template data 511: piece=piece_11 jigsaw=jig_11 weight=2 biome_filter=forest|plains|desert
// Structure template data 512: piece=piece_12 jigsaw=jig_12 weight=3 biome_filter=forest|plains|desert
// Structure template data 513: piece=piece_13 jigsaw=jig_13 weight=4 biome_filter=forest|plains|desert
// Structure template data 514: piece=piece_14 jigsaw=jig_14 weight=5 biome_filter=forest|plains|desert
// Structure template data 515: piece=piece_15 jigsaw=jig_15 weight=6 biome_filter=forest|plains|desert
// Structure template data 516: piece=piece_16 jigsaw=jig_16 weight=7 biome_filter=forest|plains|desert
// Structure template data 517: piece=piece_17 jigsaw=jig_17 weight=8 biome_filter=forest|plains|desert
// Structure template data 518: piece=piece_18 jigsaw=jig_18 weight=9 biome_filter=forest|plains|desert
// Structure template data 519: piece=piece_19 jigsaw=jig_19 weight=10 biome_filter=forest|plains|desert
// Structure template data 520: piece=piece_20 jigsaw=jig_0 weight=1 biome_filter=forest|plains|desert
// Structure template data 521: piece=piece_21 jigsaw=jig_1 weight=2 biome_filter=forest|plains|desert
// Structure template data 522: piece=piece_22 jigsaw=jig_2 weight=3 biome_filter=forest|plains|desert
// Structure template data 523: piece=piece_23 jigsaw=jig_3 weight=4 biome_filter=forest|plains|desert
// Structure template data 524: piece=piece_24 jigsaw=jig_4 weight=5 biome_filter=forest|plains|desert
// Structure template data 525: piece=piece_25 jigsaw=jig_5 weight=6 biome_filter=forest|plains|desert
// Structure template data 526: piece=piece_26 jigsaw=jig_6 weight=7 biome_filter=forest|plains|desert
// Structure template data 527: piece=piece_27 jigsaw=jig_7 weight=8 biome_filter=forest|plains|desert
// Structure template data 528: piece=piece_28 jigsaw=jig_8 weight=9 biome_filter=forest|plains|desert
// Structure template data 529: piece=piece_29 jigsaw=jig_9 weight=10 biome_filter=forest|plains|desert
// Structure template data 530: piece=piece_30 jigsaw=jig_10 weight=1 biome_filter=forest|plains|desert
// Structure template data 531: piece=piece_31 jigsaw=jig_11 weight=2 biome_filter=forest|plains|desert
// Structure template data 532: piece=piece_32 jigsaw=jig_12 weight=3 biome_filter=forest|plains|desert
// Structure template data 533: piece=piece_33 jigsaw=jig_13 weight=4 biome_filter=forest|plains|desert
// Structure template data 534: piece=piece_34 jigsaw=jig_14 weight=5 biome_filter=forest|plains|desert
// Structure template data 535: piece=piece_35 jigsaw=jig_15 weight=6 biome_filter=forest|plains|desert
// Structure template data 536: piece=piece_36 jigsaw=jig_16 weight=7 biome_filter=forest|plains|desert
// Structure template data 537: piece=piece_37 jigsaw=jig_17 weight=8 biome_filter=forest|plains|desert
// Structure template data 538: piece=piece_38 jigsaw=jig_18 weight=9 biome_filter=forest|plains|desert
// Structure template data 539: piece=piece_39 jigsaw=jig_19 weight=10 biome_filter=forest|plains|desert
// Structure template data 540: piece=piece_40 jigsaw=jig_0 weight=1 biome_filter=forest|plains|desert
// Structure template data 541: piece=piece_41 jigsaw=jig_1 weight=2 biome_filter=forest|plains|desert
// Structure template data 542: piece=piece_42 jigsaw=jig_2 weight=3 biome_filter=forest|plains|desert
// Structure template data 543: piece=piece_43 jigsaw=jig_3 weight=4 biome_filter=forest|plains|desert
// Structure template data 544: piece=piece_44 jigsaw=jig_4 weight=5 biome_filter=forest|plains|desert
// Structure template data 545: piece=piece_45 jigsaw=jig_5 weight=6 biome_filter=forest|plains|desert
// Structure template data 546: piece=piece_46 jigsaw=jig_6 weight=7 biome_filter=forest|plains|desert
// Structure template data 547: piece=piece_47 jigsaw=jig_7 weight=8 biome_filter=forest|plains|desert
// Structure template data 548: piece=piece_48 jigsaw=jig_8 weight=9 biome_filter=forest|plains|desert
// Structure template data 549: piece=piece_49 jigsaw=jig_9 weight=10 biome_filter=forest|plains|desert
// Structure template data 550: piece=piece_0 jigsaw=jig_10 weight=1 biome_filter=forest|plains|desert
// Structure template data 551: piece=piece_1 jigsaw=jig_11 weight=2 biome_filter=forest|plains|desert
// Structure template data 552: piece=piece_2 jigsaw=jig_12 weight=3 biome_filter=forest|plains|desert
// Structure template data 553: piece=piece_3 jigsaw=jig_13 weight=4 biome_filter=forest|plains|desert
// Structure template data 554: piece=piece_4 jigsaw=jig_14 weight=5 biome_filter=forest|plains|desert
// Structure template data 555: piece=piece_5 jigsaw=jig_15 weight=6 biome_filter=forest|plains|desert
// Structure template data 556: piece=piece_6 jigsaw=jig_16 weight=7 biome_filter=forest|plains|desert
// Structure template data 557: piece=piece_7 jigsaw=jig_17 weight=8 biome_filter=forest|plains|desert
// Structure template data 558: piece=piece_8 jigsaw=jig_18 weight=9 biome_filter=forest|plains|desert
// Structure template data 559: piece=piece_9 jigsaw=jig_19 weight=10 biome_filter=forest|plains|desert
// Structure template data 560: piece=piece_10 jigsaw=jig_0 weight=1 biome_filter=forest|plains|desert
// Structure template data 561: piece=piece_11 jigsaw=jig_1 weight=2 biome_filter=forest|plains|desert
// Structure template data 562: piece=piece_12 jigsaw=jig_2 weight=3 biome_filter=forest|plains|desert
// Structure template data 563: piece=piece_13 jigsaw=jig_3 weight=4 biome_filter=forest|plains|desert
// Structure template data 564: piece=piece_14 jigsaw=jig_4 weight=5 biome_filter=forest|plains|desert
// Structure template data 565: piece=piece_15 jigsaw=jig_5 weight=6 biome_filter=forest|plains|desert
// Structure template data 566: piece=piece_16 jigsaw=jig_6 weight=7 biome_filter=forest|plains|desert
// Structure template data 567: piece=piece_17 jigsaw=jig_7 weight=8 biome_filter=forest|plains|desert
// Structure template data 568: piece=piece_18 jigsaw=jig_8 weight=9 biome_filter=forest|plains|desert
// Structure template data 569: piece=piece_19 jigsaw=jig_9 weight=10 biome_filter=forest|plains|desert
// Structure template data 570: piece=piece_20 jigsaw=jig_10 weight=1 biome_filter=forest|plains|desert
// Structure template data 571: piece=piece_21 jigsaw=jig_11 weight=2 biome_filter=forest|plains|desert
// Structure template data 572: piece=piece_22 jigsaw=jig_12 weight=3 biome_filter=forest|plains|desert
// Structure template data 573: piece=piece_23 jigsaw=jig_13 weight=4 biome_filter=forest|plains|desert
// Structure template data 574: piece=piece_24 jigsaw=jig_14 weight=5 biome_filter=forest|plains|desert
// Structure template data 575: piece=piece_25 jigsaw=jig_15 weight=6 biome_filter=forest|plains|desert
// Structure template data 576: piece=piece_26 jigsaw=jig_16 weight=7 biome_filter=forest|plains|desert
// Structure template data 577: piece=piece_27 jigsaw=jig_17 weight=8 biome_filter=forest|plains|desert
// Structure template data 578: piece=piece_28 jigsaw=jig_18 weight=9 biome_filter=forest|plains|desert
// Structure template data 579: piece=piece_29 jigsaw=jig_19 weight=10 biome_filter=forest|plains|desert
// Structure template data 580: piece=piece_30 jigsaw=jig_0 weight=1 biome_filter=forest|plains|desert
// Structure template data 581: piece=piece_31 jigsaw=jig_1 weight=2 biome_filter=forest|plains|desert
// Structure template data 582: piece=piece_32 jigsaw=jig_2 weight=3 biome_filter=forest|plains|desert
// Structure template data 583: piece=piece_33 jigsaw=jig_3 weight=4 biome_filter=forest|plains|desert
// Structure template data 584: piece=piece_34 jigsaw=jig_4 weight=5 biome_filter=forest|plains|desert
// Structure template data 585: piece=piece_35 jigsaw=jig_5 weight=6 biome_filter=forest|plains|desert
// Structure template data 586: piece=piece_36 jigsaw=jig_6 weight=7 biome_filter=forest|plains|desert
// Structure template data 587: piece=piece_37 jigsaw=jig_7 weight=8 biome_filter=forest|plains|desert
// Structure template data 588: piece=piece_38 jigsaw=jig_8 weight=9 biome_filter=forest|plains|desert
// Structure template data 589: piece=piece_39 jigsaw=jig_9 weight=10 biome_filter=forest|plains|desert
// Structure template data 590: piece=piece_40 jigsaw=jig_10 weight=1 biome_filter=forest|plains|desert
// Structure template data 591: piece=piece_41 jigsaw=jig_11 weight=2 biome_filter=forest|plains|desert
// Structure template data 592: piece=piece_42 jigsaw=jig_12 weight=3 biome_filter=forest|plains|desert
// Structure template data 593: piece=piece_43 jigsaw=jig_13 weight=4 biome_filter=forest|plains|desert
// Structure template data 594: piece=piece_44 jigsaw=jig_14 weight=5 biome_filter=forest|plains|desert
// Structure template data 595: piece=piece_45 jigsaw=jig_15 weight=6 biome_filter=forest|plains|desert
// Structure template data 596: piece=piece_46 jigsaw=jig_16 weight=7 biome_filter=forest|plains|desert
// Structure template data 597: piece=piece_47 jigsaw=jig_17 weight=8 biome_filter=forest|plains|desert
// Structure template data 598: piece=piece_48 jigsaw=jig_18 weight=9 biome_filter=forest|plains|desert
// Structure template data 599: piece=piece_49 jigsaw=jig_19 weight=10 biome_filter=forest|plains|desert
})();
