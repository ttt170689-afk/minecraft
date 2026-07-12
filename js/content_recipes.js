/** Expanded crafting recipes */
(function(){
if(typeof RECIPES==="undefined") return;
const EXTRA_RECIPES=[
  { out: "oak_planks", count: 1, shapeless: ["oak_log","oak_log","oak_log","oak_log","oak_log","oak_log","oak_log","oak_log","oak_log"], needTable: true },
  { out: "oak_log", count: 9, shapeless: ["oak_planks"], needTable: false },
  { out: "birch_planks", count: 1, shapeless: ["birch_log","birch_log","birch_log","birch_log","birch_log","birch_log","birch_log","birch_log","birch_log"], needTable: true },
  { out: "birch_log", count: 9, shapeless: ["birch_planks"], needTable: false },
  { out: "spruce_planks", count: 1, shapeless: ["spruce_log","spruce_log","spruce_log","spruce_log","spruce_log","spruce_log","spruce_log","spruce_log","spruce_log"], needTable: true },
  { out: "spruce_log", count: 9, shapeless: ["spruce_planks"], needTable: false },
  { out: "iron_block", count: 1, shapeless: ["iron_ingot","iron_ingot","iron_ingot","iron_ingot","iron_ingot","iron_ingot","iron_ingot","iron_ingot","iron_ingot"], needTable: true },
  { out: "iron_ingot", count: 9, shapeless: ["iron_block"], needTable: false },
  { out: "gold_block", count: 1, shapeless: ["gold_ingot","gold_ingot","gold_ingot","gold_ingot","gold_ingot","gold_ingot","gold_ingot","gold_ingot","gold_ingot"], needTable: true },
  { out: "gold_ingot", count: 9, shapeless: ["gold_block"], needTable: false },
  { out: "diamond_block", count: 1, shapeless: ["diamond","diamond","diamond","diamond","diamond","diamond","diamond","diamond","diamond"], needTable: true },
  { out: "diamond", count: 9, shapeless: ["diamond_block"], needTable: false },
  { out: "coal_block", count: 1, shapeless: ["coal","coal","coal","coal","coal","coal","coal","coal","coal"], needTable: true },
  { out: "coal", count: 9, shapeless: ["coal_block"], needTable: false },
  { out: "redstone_block", count: 1, shapeless: ["redstone","redstone","redstone","redstone","redstone","redstone","redstone","redstone","redstone"], needTable: true },
  { out: "redstone", count: 9, shapeless: ["redstone_block"], needTable: false },
  { out: "emerald_block", count: 1, shapeless: ["emerald","emerald","emerald","emerald","emerald","emerald","emerald","emerald","emerald"], needTable: true },
  { out: "emerald", count: 9, shapeless: ["emerald_block"], needTable: false },
  { out: "lapis_block", count: 1, shapeless: ["lapis_lazuli","lapis_lazuli","lapis_lazuli","lapis_lazuli","lapis_lazuli","lapis_lazuli","lapis_lazuli","lapis_lazuli","lapis_lazuli"], needTable: true },
  { out: "lapis_lazuli", count: 9, shapeless: ["lapis_block"], needTable: false },
  { out: "copper_block", count: 1, shapeless: ["copper_ingot","copper_ingot","copper_ingot","copper_ingot","copper_ingot","copper_ingot","copper_ingot","copper_ingot","copper_ingot"], needTable: true },
  { out: "copper_ingot", count: 9, shapeless: ["copper_block"], needTable: false },
  { out: "netherite_block", count: 1, shapeless: ["netherite_ingot","netherite_ingot","netherite_ingot","netherite_ingot","netherite_ingot","netherite_ingot","netherite_ingot","netherite_ingot","netherite_ingot"], needTable: true },
  { out: "netherite_ingot", count: 9, shapeless: ["netherite_block"], needTable: false },
  { out: "sword_wood", count: 1, shape: [[null,"wood_ingot".replace("wood_ingot","oak_planks").replace("stone_ingot","cobble").replace("diamond_ingot","diamond").replace("netherite_ingot_ingot","netherite_ingot"),null],[null,"wood_mat",null],[null,"stick",null]], needTable: true },
  { out: "sword_stone", count: 1, shape: [[null,"stone_ingot".replace("wood_ingot","oak_planks").replace("stone_ingot","cobble").replace("diamond_ingot","diamond").replace("netherite_ingot_ingot","netherite_ingot"),null],[null,"stone_mat",null],[null,"stick",null]], needTable: true },
  { out: "sword_iron", count: 1, shape: [[null,"iron_ingot".replace("wood_ingot","oak_planks").replace("stone_ingot","cobble").replace("diamond_ingot","diamond").replace("netherite_ingot_ingot","netherite_ingot"),null],[null,"iron_mat",null],[null,"stick",null]], needTable: true },
  { out: "sword_gold", count: 1, shape: [[null,"gold_ingot".replace("wood_ingot","oak_planks").replace("stone_ingot","cobble").replace("diamond_ingot","diamond").replace("netherite_ingot_ingot","netherite_ingot"),null],[null,"gold_mat",null],[null,"stick",null]], needTable: true },
  { out: "sword_diamond", count: 1, shape: [[null,"diamond_ingot".replace("wood_ingot","oak_planks").replace("stone_ingot","cobble").replace("diamond_ingot","diamond").replace("netherite_ingot_ingot","netherite_ingot"),null],[null,"diamond_mat",null],[null,"stick",null]], needTable: true },
  { out: "sword_netherite", count: 1, shape: [[null,"netherite_ingot_ingot".replace("wood_ingot","oak_planks").replace("stone_ingot","cobble").replace("diamond_ingot","diamond").replace("netherite_ingot_ingot","netherite_ingot"),null],[null,"netherite_mat",null],[null,"stick",null]], needTable: true },
  { out: "chest", count: 1, shape: [["oak_planks", "oak_planks", "oak_planks"], ["oak_planks", null, "oak_planks"], ["oak_planks", "oak_planks", "oak_planks"]], needTable: true },
  { out: "furnace", count: 1, shape: [["cobble", "cobble", "cobble"], ["cobble", null, "cobble"], ["cobble", "cobble", "cobble"]], needTable: true },
  { out: "bookshelf", count: 1, shape: [["oak_planks", "oak_planks", "oak_planks"], ["book", "book", "book"], ["oak_planks", "oak_planks", "oak_planks"]], needTable: true },
  { out: "ladder", count: 3, shape: [["stick", null, "stick"], ["stick", "stick", "stick"], ["stick", null, "stick"]], needTable: true },
  { out: "torch_item", count: 4, shape: [["coal"], ["stick"]], needTable: false },
  { out: "stick", count: 4, shape: [["oak_planks"], ["oak_planks"]], needTable: false },
  { out: "oak_planks", count: 4, shape: [["oak_log"]], needTable: false },
  { out: "crafting_table", count: 1, shape: [["oak_planks", "oak_planks"], ["oak_planks", "oak_planks"]], needTable: false },
  { out: "mace", count: 1, shape: [[null, "iron_ingot", null], [null, "iron_ingot", null], [null, "stick", null]], needTable: true },
  { out: "mace_diamond", count: 1, shape: [[null, "diamond", null], [null, "diamond", null], [null, "stick", null]], needTable: true },
  { out: "bow", count: 1, shape: [[null, "stick", "string"], ["stick", null, "string"], [null, "stick", "string"]], needTable: true },
  { out: "shield", count: 1, shape: [["oak_planks", "iron_ingot", "oak_planks"], ["oak_planks", "oak_planks", "oak_planks"], [null, "oak_planks", null]], needTable: true },
  { out: "bucket", count: 1, shape: [["iron_ingot", null, "iron_ingot"], [null, "iron_ingot", null]], needTable: true },
  { out: "shears", count: 1, shape: [[null, "iron_ingot"], ["iron_ingot", null]], needTable: false },
  { out: "flint_steel", count: 1, shapeless: ["iron_ingot","flint"], needTable: false },
  { out: "white_wool", count: 1, shapeless: ["white_wool", "white_dye"], needTable: false },
  { out: "orange_wool", count: 1, shapeless: ["white_wool", "orange_dye"], needTable: false },
  { out: "magenta_wool", count: 1, shapeless: ["white_wool", "magenta_dye"], needTable: false },
  { out: "light_blue_wool", count: 1, shapeless: ["white_wool", "light_blue_dye"], needTable: false },
  { out: "yellow_wool", count: 1, shapeless: ["white_wool", "yellow_dye"], needTable: false },
  { out: "lime_wool", count: 1, shapeless: ["white_wool", "lime_dye"], needTable: false },
  { out: "pink_wool", count: 1, shapeless: ["white_wool", "pink_dye"], needTable: false },
  { out: "gray_wool", count: 1, shapeless: ["white_wool", "gray_dye"], needTable: false },
  { out: "light_gray_wool", count: 1, shapeless: ["white_wool", "light_gray_dye"], needTable: false },
  { out: "cyan_wool", count: 1, shapeless: ["white_wool", "cyan_dye"], needTable: false },
  { out: "purple_wool", count: 1, shapeless: ["white_wool", "purple_dye"], needTable: false },
  { out: "blue_wool", count: 1, shapeless: ["white_wool", "blue_dye"], needTable: false },
  { out: "brown_wool", count: 1, shapeless: ["white_wool", "brown_dye"], needTable: false },
  { out: "green_wool", count: 1, shapeless: ["white_wool", "green_dye"], needTable: false },
  { out: "red_wool", count: 1, shapeless: ["white_wool", "red_dye"], needTable: false },
  { out: "black_wool", count: 1, shapeless: ["white_wool", "black_dye"], needTable: false },
  // recipe expansion slot 0
  // recipe expansion slot 1
  // recipe expansion slot 2
  // recipe expansion slot 3
  // recipe expansion slot 4
  // recipe expansion slot 5
  // recipe expansion slot 6
  // recipe expansion slot 7
  // recipe expansion slot 8
  // recipe expansion slot 9
  // recipe expansion slot 10
  // recipe expansion slot 11
  // recipe expansion slot 12
  // recipe expansion slot 13
  // recipe expansion slot 14
  // recipe expansion slot 15
  // recipe expansion slot 16
  // recipe expansion slot 17
  // recipe expansion slot 18
  // recipe expansion slot 19
  // recipe expansion slot 20
  // recipe expansion slot 21
  // recipe expansion slot 22
  // recipe expansion slot 23
  // recipe expansion slot 24
  // recipe expansion slot 25
  // recipe expansion slot 26
  // recipe expansion slot 27
  // recipe expansion slot 28
  // recipe expansion slot 29
  // recipe expansion slot 30
  // recipe expansion slot 31
  // recipe expansion slot 32
  // recipe expansion slot 33
  // recipe expansion slot 34
  // recipe expansion slot 35
  // recipe expansion slot 36
  // recipe expansion slot 37
  // recipe expansion slot 38
  // recipe expansion slot 39
  // recipe expansion slot 40
  // recipe expansion slot 41
  // recipe expansion slot 42
  // recipe expansion slot 43
  // recipe expansion slot 44
  // recipe expansion slot 45
  // recipe expansion slot 46
  // recipe expansion slot 47
  // recipe expansion slot 48
  // recipe expansion slot 49
  // recipe expansion slot 50
  // recipe expansion slot 51
  // recipe expansion slot 52
  // recipe expansion slot 53
  // recipe expansion slot 54
  // recipe expansion slot 55
  // recipe expansion slot 56
  // recipe expansion slot 57
  // recipe expansion slot 58
  // recipe expansion slot 59
  // recipe expansion slot 60
  // recipe expansion slot 61
  // recipe expansion slot 62
  // recipe expansion slot 63
  // recipe expansion slot 64
  // recipe expansion slot 65
  // recipe expansion slot 66
  // recipe expansion slot 67
  // recipe expansion slot 68
  // recipe expansion slot 69
  // recipe expansion slot 70
  // recipe expansion slot 71
  // recipe expansion slot 72
  // recipe expansion slot 73
  // recipe expansion slot 74
  // recipe expansion slot 75
  // recipe expansion slot 76
  // recipe expansion slot 77
  // recipe expansion slot 78
  // recipe expansion slot 79
  // recipe expansion slot 80
  // recipe expansion slot 81
  // recipe expansion slot 82
  // recipe expansion slot 83
  // recipe expansion slot 84
  // recipe expansion slot 85
  // recipe expansion slot 86
  // recipe expansion slot 87
  // recipe expansion slot 88
  // recipe expansion slot 89
  // recipe expansion slot 90
  // recipe expansion slot 91
  // recipe expansion slot 92
  // recipe expansion slot 93
  // recipe expansion slot 94
  // recipe expansion slot 95
  // recipe expansion slot 96
  // recipe expansion slot 97
  // recipe expansion slot 98
  // recipe expansion slot 99
  // recipe expansion slot 100
  // recipe expansion slot 101
  // recipe expansion slot 102
  // recipe expansion slot 103
  // recipe expansion slot 104
  // recipe expansion slot 105
  // recipe expansion slot 106
  // recipe expansion slot 107
  // recipe expansion slot 108
  // recipe expansion slot 109
  // recipe expansion slot 110
  // recipe expansion slot 111
  // recipe expansion slot 112
  // recipe expansion slot 113
  // recipe expansion slot 114
  // recipe expansion slot 115
  // recipe expansion slot 116
  // recipe expansion slot 117
  // recipe expansion slot 118
  // recipe expansion slot 119
  // recipe expansion slot 120
  // recipe expansion slot 121
  // recipe expansion slot 122
  // recipe expansion slot 123
  // recipe expansion slot 124
  // recipe expansion slot 125
  // recipe expansion slot 126
  // recipe expansion slot 127
  // recipe expansion slot 128
  // recipe expansion slot 129
  // recipe expansion slot 130
  // recipe expansion slot 131
  // recipe expansion slot 132
  // recipe expansion slot 133
  // recipe expansion slot 134
  // recipe expansion slot 135
  // recipe expansion slot 136
  // recipe expansion slot 137
  // recipe expansion slot 138
  // recipe expansion slot 139
  // recipe expansion slot 140
  // recipe expansion slot 141
  // recipe expansion slot 142
  // recipe expansion slot 143
  // recipe expansion slot 144
  // recipe expansion slot 145
  // recipe expansion slot 146
  // recipe expansion slot 147
  // recipe expansion slot 148
  // recipe expansion slot 149
  // recipe expansion slot 150
  // recipe expansion slot 151
  // recipe expansion slot 152
  // recipe expansion slot 153
  // recipe expansion slot 154
  // recipe expansion slot 155
  // recipe expansion slot 156
  // recipe expansion slot 157
  // recipe expansion slot 158
  // recipe expansion slot 159
  // recipe expansion slot 160
  // recipe expansion slot 161
  // recipe expansion slot 162
  // recipe expansion slot 163
  // recipe expansion slot 164
  // recipe expansion slot 165
  // recipe expansion slot 166
  // recipe expansion slot 167
  // recipe expansion slot 168
  // recipe expansion slot 169
  // recipe expansion slot 170
  // recipe expansion slot 171
  // recipe expansion slot 172
  // recipe expansion slot 173
  // recipe expansion slot 174
  // recipe expansion slot 175
  // recipe expansion slot 176
  // recipe expansion slot 177
  // recipe expansion slot 178
  // recipe expansion slot 179
  // recipe expansion slot 180
  // recipe expansion slot 181
  // recipe expansion slot 182
  // recipe expansion slot 183
  // recipe expansion slot 184
  // recipe expansion slot 185
  // recipe expansion slot 186
  // recipe expansion slot 187
  // recipe expansion slot 188
  // recipe expansion slot 189
  // recipe expansion slot 190
  // recipe expansion slot 191
  // recipe expansion slot 192
  // recipe expansion slot 193
  // recipe expansion slot 194
  // recipe expansion slot 195
  // recipe expansion slot 196
  // recipe expansion slot 197
  // recipe expansion slot 198
  // recipe expansion slot 199
  // recipe expansion slot 200
  // recipe expansion slot 201
  // recipe expansion slot 202
  // recipe expansion slot 203
  // recipe expansion slot 204
  // recipe expansion slot 205
  // recipe expansion slot 206
  // recipe expansion slot 207
  // recipe expansion slot 208
  // recipe expansion slot 209
  // recipe expansion slot 210
  // recipe expansion slot 211
  // recipe expansion slot 212
  // recipe expansion slot 213
  // recipe expansion slot 214
  // recipe expansion slot 215
  // recipe expansion slot 216
  // recipe expansion slot 217
  // recipe expansion slot 218
  // recipe expansion slot 219
  // recipe expansion slot 220
  // recipe expansion slot 221
  // recipe expansion slot 222
  // recipe expansion slot 223
  // recipe expansion slot 224
  // recipe expansion slot 225
  // recipe expansion slot 226
  // recipe expansion slot 227
  // recipe expansion slot 228
  // recipe expansion slot 229
  // recipe expansion slot 230
  // recipe expansion slot 231
  // recipe expansion slot 232
  // recipe expansion slot 233
  // recipe expansion slot 234
  // recipe expansion slot 235
  // recipe expansion slot 236
  // recipe expansion slot 237
  // recipe expansion slot 238
  // recipe expansion slot 239
  // recipe expansion slot 240
  // recipe expansion slot 241
  // recipe expansion slot 242
  // recipe expansion slot 243
  // recipe expansion slot 244
  // recipe expansion slot 245
  // recipe expansion slot 246
  // recipe expansion slot 247
  // recipe expansion slot 248
  // recipe expansion slot 249
  // recipe expansion slot 250
  // recipe expansion slot 251
  // recipe expansion slot 252
  // recipe expansion slot 253
  // recipe expansion slot 254
  // recipe expansion slot 255
  // recipe expansion slot 256
  // recipe expansion slot 257
  // recipe expansion slot 258
  // recipe expansion slot 259
  // recipe expansion slot 260
  // recipe expansion slot 261
  // recipe expansion slot 262
  // recipe expansion slot 263
  // recipe expansion slot 264
  // recipe expansion slot 265
  // recipe expansion slot 266
  // recipe expansion slot 267
  // recipe expansion slot 268
  // recipe expansion slot 269
  // recipe expansion slot 270
  // recipe expansion slot 271
  // recipe expansion slot 272
  // recipe expansion slot 273
  // recipe expansion slot 274
  // recipe expansion slot 275
  // recipe expansion slot 276
  // recipe expansion slot 277
  // recipe expansion slot 278
  // recipe expansion slot 279
  // recipe expansion slot 280
  // recipe expansion slot 281
  // recipe expansion slot 282
  // recipe expansion slot 283
  // recipe expansion slot 284
  // recipe expansion slot 285
  // recipe expansion slot 286
  // recipe expansion slot 287
  // recipe expansion slot 288
  // recipe expansion slot 289
  // recipe expansion slot 290
  // recipe expansion slot 291
  // recipe expansion slot 292
  // recipe expansion slot 293
  // recipe expansion slot 294
  // recipe expansion slot 295
  // recipe expansion slot 296
  // recipe expansion slot 297
  // recipe expansion slot 298
  // recipe expansion slot 299
  // recipe expansion slot 300
  // recipe expansion slot 301
  // recipe expansion slot 302
  // recipe expansion slot 303
  // recipe expansion slot 304
  // recipe expansion slot 305
  // recipe expansion slot 306
  // recipe expansion slot 307
  // recipe expansion slot 308
  // recipe expansion slot 309
  // recipe expansion slot 310
  // recipe expansion slot 311
  // recipe expansion slot 312
  // recipe expansion slot 313
  // recipe expansion slot 314
  // recipe expansion slot 315
  // recipe expansion slot 316
  // recipe expansion slot 317
  // recipe expansion slot 318
  // recipe expansion slot 319
  // recipe expansion slot 320
  // recipe expansion slot 321
  // recipe expansion slot 322
  // recipe expansion slot 323
  // recipe expansion slot 324
  // recipe expansion slot 325
  // recipe expansion slot 326
  // recipe expansion slot 327
  // recipe expansion slot 328
  // recipe expansion slot 329
  // recipe expansion slot 330
  // recipe expansion slot 331
  // recipe expansion slot 332
  // recipe expansion slot 333
  // recipe expansion slot 334
  // recipe expansion slot 335
  // recipe expansion slot 336
  // recipe expansion slot 337
  // recipe expansion slot 338
  // recipe expansion slot 339
  // recipe expansion slot 340
  // recipe expansion slot 341
  // recipe expansion slot 342
  // recipe expansion slot 343
  // recipe expansion slot 344
  // recipe expansion slot 345
  // recipe expansion slot 346
  // recipe expansion slot 347
  // recipe expansion slot 348
  // recipe expansion slot 349
  // recipe expansion slot 350
  // recipe expansion slot 351
  // recipe expansion slot 352
  // recipe expansion slot 353
  // recipe expansion slot 354
  // recipe expansion slot 355
  // recipe expansion slot 356
  // recipe expansion slot 357
  // recipe expansion slot 358
  // recipe expansion slot 359
  // recipe expansion slot 360
  // recipe expansion slot 361
  // recipe expansion slot 362
  // recipe expansion slot 363
  // recipe expansion slot 364
  // recipe expansion slot 365
  // recipe expansion slot 366
  // recipe expansion slot 367
  // recipe expansion slot 368
  // recipe expansion slot 369
  // recipe expansion slot 370
  // recipe expansion slot 371
  // recipe expansion slot 372
  // recipe expansion slot 373
  // recipe expansion slot 374
  // recipe expansion slot 375
  // recipe expansion slot 376
  // recipe expansion slot 377
  // recipe expansion slot 378
  // recipe expansion slot 379
  // recipe expansion slot 380
  // recipe expansion slot 381
  // recipe expansion slot 382
  // recipe expansion slot 383
  // recipe expansion slot 384
  // recipe expansion slot 385
  // recipe expansion slot 386
  // recipe expansion slot 387
  // recipe expansion slot 388
  // recipe expansion slot 389
  // recipe expansion slot 390
  // recipe expansion slot 391
  // recipe expansion slot 392
  // recipe expansion slot 393
  // recipe expansion slot 394
  // recipe expansion slot 395
  // recipe expansion slot 396
  // recipe expansion slot 397
  // recipe expansion slot 398
  // recipe expansion slot 399
];
for (const r of EXTRA_RECIPES) RECIPES.push(r);
window.EXTRA_RECIPES=EXTRA_RECIPES;
})();
