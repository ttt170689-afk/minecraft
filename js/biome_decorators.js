/** Biome decoration rules — trees, grass, ores per biome */
window.BIOME_DECORATORS={
  ocean: {
    surface: "grass", temperature: 0.26, downfall: 0.72,
    features: [
      { feature:"feature_ocean_0", tries:1, minY:0, maxY:40, rarity:1 },
      { feature:"feature_ocean_1", tries:2, minY:1, maxY:41, rarity:2 },
      { feature:"feature_ocean_2", tries:3, minY:2, maxY:42, rarity:3 },
      { feature:"feature_ocean_3", tries:4, minY:3, maxY:43, rarity:4 },
      { feature:"feature_ocean_4", tries:5, minY:4, maxY:44, rarity:5 },
      { feature:"feature_ocean_5", tries:6, minY:5, maxY:45, rarity:6 },
      { feature:"feature_ocean_6", tries:7, minY:6, maxY:46, rarity:7 },
      { feature:"feature_ocean_7", tries:8, minY:7, maxY:47, rarity:8 },
      { feature:"feature_ocean_8", tries:9, minY:8, maxY:48, rarity:9 },
      { feature:"feature_ocean_9", tries:10, minY:9, maxY:49, rarity:10 },
      { feature:"feature_ocean_10", tries:11, minY:10, maxY:50, rarity:11 },
      { feature:"feature_ocean_11", tries:12, minY:11, maxY:51, rarity:12 },
      { feature:"feature_ocean_12", tries:1, minY:12, maxY:52, rarity:13 },
      { feature:"feature_ocean_13", tries:2, minY:13, maxY:53, rarity:14 },
      { feature:"feature_ocean_14", tries:3, minY:14, maxY:54, rarity:15 },
      { feature:"feature_ocean_15", tries:4, minY:15, maxY:55, rarity:16 },
      { feature:"feature_ocean_16", tries:5, minY:16, maxY:56, rarity:17 },
      { feature:"feature_ocean_17", tries:6, minY:17, maxY:57, rarity:18 },
      { feature:"feature_ocean_18", tries:7, minY:18, maxY:58, rarity:19 },
      { feature:"feature_ocean_19", tries:8, minY:19, maxY:59, rarity:20 },
      { feature:"feature_ocean_20", tries:9, minY:20, maxY:60, rarity:1 },
      { feature:"feature_ocean_21", tries:10, minY:21, maxY:61, rarity:2 },
      { feature:"feature_ocean_22", tries:11, minY:22, maxY:62, rarity:3 },
      { feature:"feature_ocean_23", tries:12, minY:23, maxY:63, rarity:4 },
      { feature:"feature_ocean_24", tries:1, minY:24, maxY:64, rarity:5 },
      { feature:"feature_ocean_25", tries:2, minY:25, maxY:65, rarity:6 },
      { feature:"feature_ocean_26", tries:3, minY:26, maxY:66, rarity:7 },
      { feature:"feature_ocean_27", tries:4, minY:27, maxY:67, rarity:8 },
      { feature:"feature_ocean_28", tries:5, minY:28, maxY:68, rarity:9 },
      { feature:"feature_ocean_29", tries:6, minY:29, maxY:69, rarity:10 },
      { feature:"feature_ocean_30", tries:7, minY:30, maxY:70, rarity:11 },
      { feature:"feature_ocean_31", tries:8, minY:31, maxY:71, rarity:12 },
      { feature:"feature_ocean_32", tries:9, minY:32, maxY:72, rarity:13 },
      { feature:"feature_ocean_33", tries:10, minY:33, maxY:73, rarity:14 },
      { feature:"feature_ocean_34", tries:11, minY:34, maxY:74, rarity:15 },
      { feature:"feature_ocean_35", tries:12, minY:35, maxY:75, rarity:16 },
      { feature:"feature_ocean_36", tries:1, minY:36, maxY:76, rarity:17 },
      { feature:"feature_ocean_37", tries:2, minY:37, maxY:77, rarity:18 },
      { feature:"feature_ocean_38", tries:3, minY:38, maxY:78, rarity:19 },
      { feature:"feature_ocean_39", tries:4, minY:39, maxY:79, rarity:20 },
    ],
    spawns: {
      monster: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      ambient: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      underground_water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      axolotls: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      misc: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
    }
  },
  plains: {
    surface: "grass", temperature: 0.58, downfall: 0.51,
    features: [
      { feature:"feature_plains_0", tries:1, minY:0, maxY:40, rarity:1 },
      { feature:"feature_plains_1", tries:2, minY:1, maxY:41, rarity:2 },
      { feature:"feature_plains_2", tries:3, minY:2, maxY:42, rarity:3 },
      { feature:"feature_plains_3", tries:4, minY:3, maxY:43, rarity:4 },
      { feature:"feature_plains_4", tries:5, minY:4, maxY:44, rarity:5 },
      { feature:"feature_plains_5", tries:6, minY:5, maxY:45, rarity:6 },
      { feature:"feature_plains_6", tries:7, minY:6, maxY:46, rarity:7 },
      { feature:"feature_plains_7", tries:8, minY:7, maxY:47, rarity:8 },
      { feature:"feature_plains_8", tries:9, minY:8, maxY:48, rarity:9 },
      { feature:"feature_plains_9", tries:10, minY:9, maxY:49, rarity:10 },
      { feature:"feature_plains_10", tries:11, minY:10, maxY:50, rarity:11 },
      { feature:"feature_plains_11", tries:12, minY:11, maxY:51, rarity:12 },
      { feature:"feature_plains_12", tries:1, minY:12, maxY:52, rarity:13 },
      { feature:"feature_plains_13", tries:2, minY:13, maxY:53, rarity:14 },
      { feature:"feature_plains_14", tries:3, minY:14, maxY:54, rarity:15 },
      { feature:"feature_plains_15", tries:4, minY:15, maxY:55, rarity:16 },
      { feature:"feature_plains_16", tries:5, minY:16, maxY:56, rarity:17 },
      { feature:"feature_plains_17", tries:6, minY:17, maxY:57, rarity:18 },
      { feature:"feature_plains_18", tries:7, minY:18, maxY:58, rarity:19 },
      { feature:"feature_plains_19", tries:8, minY:19, maxY:59, rarity:20 },
      { feature:"feature_plains_20", tries:9, minY:20, maxY:60, rarity:1 },
      { feature:"feature_plains_21", tries:10, minY:21, maxY:61, rarity:2 },
      { feature:"feature_plains_22", tries:11, minY:22, maxY:62, rarity:3 },
      { feature:"feature_plains_23", tries:12, minY:23, maxY:63, rarity:4 },
      { feature:"feature_plains_24", tries:1, minY:24, maxY:64, rarity:5 },
      { feature:"feature_plains_25", tries:2, minY:25, maxY:65, rarity:6 },
      { feature:"feature_plains_26", tries:3, minY:26, maxY:66, rarity:7 },
      { feature:"feature_plains_27", tries:4, minY:27, maxY:67, rarity:8 },
      { feature:"feature_plains_28", tries:5, minY:28, maxY:68, rarity:9 },
      { feature:"feature_plains_29", tries:6, minY:29, maxY:69, rarity:10 },
      { feature:"feature_plains_30", tries:7, minY:30, maxY:70, rarity:11 },
      { feature:"feature_plains_31", tries:8, minY:31, maxY:71, rarity:12 },
      { feature:"feature_plains_32", tries:9, minY:32, maxY:72, rarity:13 },
      { feature:"feature_plains_33", tries:10, minY:33, maxY:73, rarity:14 },
      { feature:"feature_plains_34", tries:11, minY:34, maxY:74, rarity:15 },
      { feature:"feature_plains_35", tries:12, minY:35, maxY:75, rarity:16 },
      { feature:"feature_plains_36", tries:1, minY:36, maxY:76, rarity:17 },
      { feature:"feature_plains_37", tries:2, minY:37, maxY:77, rarity:18 },
      { feature:"feature_plains_38", tries:3, minY:38, maxY:78, rarity:19 },
      { feature:"feature_plains_39", tries:4, minY:39, maxY:79, rarity:20 },
    ],
    spawns: {
      monster: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      ambient: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      underground_water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      axolotls: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      misc: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
    }
  },
  forest: {
    surface: "grass", temperature: 0.48, downfall: 0.48,
    features: [
      { feature:"feature_forest_0", tries:1, minY:0, maxY:40, rarity:1 },
      { feature:"feature_forest_1", tries:2, minY:1, maxY:41, rarity:2 },
      { feature:"feature_forest_2", tries:3, minY:2, maxY:42, rarity:3 },
      { feature:"feature_forest_3", tries:4, minY:3, maxY:43, rarity:4 },
      { feature:"feature_forest_4", tries:5, minY:4, maxY:44, rarity:5 },
      { feature:"feature_forest_5", tries:6, minY:5, maxY:45, rarity:6 },
      { feature:"feature_forest_6", tries:7, minY:6, maxY:46, rarity:7 },
      { feature:"feature_forest_7", tries:8, minY:7, maxY:47, rarity:8 },
      { feature:"feature_forest_8", tries:9, minY:8, maxY:48, rarity:9 },
      { feature:"feature_forest_9", tries:10, minY:9, maxY:49, rarity:10 },
      { feature:"feature_forest_10", tries:11, minY:10, maxY:50, rarity:11 },
      { feature:"feature_forest_11", tries:12, minY:11, maxY:51, rarity:12 },
      { feature:"feature_forest_12", tries:1, minY:12, maxY:52, rarity:13 },
      { feature:"feature_forest_13", tries:2, minY:13, maxY:53, rarity:14 },
      { feature:"feature_forest_14", tries:3, minY:14, maxY:54, rarity:15 },
      { feature:"feature_forest_15", tries:4, minY:15, maxY:55, rarity:16 },
      { feature:"feature_forest_16", tries:5, minY:16, maxY:56, rarity:17 },
      { feature:"feature_forest_17", tries:6, minY:17, maxY:57, rarity:18 },
      { feature:"feature_forest_18", tries:7, minY:18, maxY:58, rarity:19 },
      { feature:"feature_forest_19", tries:8, minY:19, maxY:59, rarity:20 },
      { feature:"feature_forest_20", tries:9, minY:20, maxY:60, rarity:1 },
      { feature:"feature_forest_21", tries:10, minY:21, maxY:61, rarity:2 },
      { feature:"feature_forest_22", tries:11, minY:22, maxY:62, rarity:3 },
      { feature:"feature_forest_23", tries:12, minY:23, maxY:63, rarity:4 },
      { feature:"feature_forest_24", tries:1, minY:24, maxY:64, rarity:5 },
      { feature:"feature_forest_25", tries:2, minY:25, maxY:65, rarity:6 },
      { feature:"feature_forest_26", tries:3, minY:26, maxY:66, rarity:7 },
      { feature:"feature_forest_27", tries:4, minY:27, maxY:67, rarity:8 },
      { feature:"feature_forest_28", tries:5, minY:28, maxY:68, rarity:9 },
      { feature:"feature_forest_29", tries:6, minY:29, maxY:69, rarity:10 },
      { feature:"feature_forest_30", tries:7, minY:30, maxY:70, rarity:11 },
      { feature:"feature_forest_31", tries:8, minY:31, maxY:71, rarity:12 },
      { feature:"feature_forest_32", tries:9, minY:32, maxY:72, rarity:13 },
      { feature:"feature_forest_33", tries:10, minY:33, maxY:73, rarity:14 },
      { feature:"feature_forest_34", tries:11, minY:34, maxY:74, rarity:15 },
      { feature:"feature_forest_35", tries:12, minY:35, maxY:75, rarity:16 },
      { feature:"feature_forest_36", tries:1, minY:36, maxY:76, rarity:17 },
      { feature:"feature_forest_37", tries:2, minY:37, maxY:77, rarity:18 },
      { feature:"feature_forest_38", tries:3, minY:38, maxY:78, rarity:19 },
      { feature:"feature_forest_39", tries:4, minY:39, maxY:79, rarity:20 },
    ],
    spawns: {
      monster: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      ambient: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      underground_water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      axolotls: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      misc: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
    }
  },
  desert: {
    surface: "grass", temperature: 0.02, downfall: 0.16,
    features: [
      { feature:"feature_desert_0", tries:1, minY:0, maxY:40, rarity:1 },
      { feature:"feature_desert_1", tries:2, minY:1, maxY:41, rarity:2 },
      { feature:"feature_desert_2", tries:3, minY:2, maxY:42, rarity:3 },
      { feature:"feature_desert_3", tries:4, minY:3, maxY:43, rarity:4 },
      { feature:"feature_desert_4", tries:5, minY:4, maxY:44, rarity:5 },
      { feature:"feature_desert_5", tries:6, minY:5, maxY:45, rarity:6 },
      { feature:"feature_desert_6", tries:7, minY:6, maxY:46, rarity:7 },
      { feature:"feature_desert_7", tries:8, minY:7, maxY:47, rarity:8 },
      { feature:"feature_desert_8", tries:9, minY:8, maxY:48, rarity:9 },
      { feature:"feature_desert_9", tries:10, minY:9, maxY:49, rarity:10 },
      { feature:"feature_desert_10", tries:11, minY:10, maxY:50, rarity:11 },
      { feature:"feature_desert_11", tries:12, minY:11, maxY:51, rarity:12 },
      { feature:"feature_desert_12", tries:1, minY:12, maxY:52, rarity:13 },
      { feature:"feature_desert_13", tries:2, minY:13, maxY:53, rarity:14 },
      { feature:"feature_desert_14", tries:3, minY:14, maxY:54, rarity:15 },
      { feature:"feature_desert_15", tries:4, minY:15, maxY:55, rarity:16 },
      { feature:"feature_desert_16", tries:5, minY:16, maxY:56, rarity:17 },
      { feature:"feature_desert_17", tries:6, minY:17, maxY:57, rarity:18 },
      { feature:"feature_desert_18", tries:7, minY:18, maxY:58, rarity:19 },
      { feature:"feature_desert_19", tries:8, minY:19, maxY:59, rarity:20 },
      { feature:"feature_desert_20", tries:9, minY:20, maxY:60, rarity:1 },
      { feature:"feature_desert_21", tries:10, minY:21, maxY:61, rarity:2 },
      { feature:"feature_desert_22", tries:11, minY:22, maxY:62, rarity:3 },
      { feature:"feature_desert_23", tries:12, minY:23, maxY:63, rarity:4 },
      { feature:"feature_desert_24", tries:1, minY:24, maxY:64, rarity:5 },
      { feature:"feature_desert_25", tries:2, minY:25, maxY:65, rarity:6 },
      { feature:"feature_desert_26", tries:3, minY:26, maxY:66, rarity:7 },
      { feature:"feature_desert_27", tries:4, minY:27, maxY:67, rarity:8 },
      { feature:"feature_desert_28", tries:5, minY:28, maxY:68, rarity:9 },
      { feature:"feature_desert_29", tries:6, minY:29, maxY:69, rarity:10 },
      { feature:"feature_desert_30", tries:7, minY:30, maxY:70, rarity:11 },
      { feature:"feature_desert_31", tries:8, minY:31, maxY:71, rarity:12 },
      { feature:"feature_desert_32", tries:9, minY:32, maxY:72, rarity:13 },
      { feature:"feature_desert_33", tries:10, minY:33, maxY:73, rarity:14 },
      { feature:"feature_desert_34", tries:11, minY:34, maxY:74, rarity:15 },
      { feature:"feature_desert_35", tries:12, minY:35, maxY:75, rarity:16 },
      { feature:"feature_desert_36", tries:1, minY:36, maxY:76, rarity:17 },
      { feature:"feature_desert_37", tries:2, minY:37, maxY:77, rarity:18 },
      { feature:"feature_desert_38", tries:3, minY:38, maxY:78, rarity:19 },
      { feature:"feature_desert_39", tries:4, minY:39, maxY:79, rarity:20 },
    ],
    spawns: {
      monster: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      ambient: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      underground_water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      axolotls: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      misc: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
    }
  },
  snow: {
    surface: "grass", temperature: 0.06, downfall: 0.05,
    features: [
      { feature:"feature_snow_0", tries:1, minY:0, maxY:40, rarity:1 },
      { feature:"feature_snow_1", tries:2, minY:1, maxY:41, rarity:2 },
      { feature:"feature_snow_2", tries:3, minY:2, maxY:42, rarity:3 },
      { feature:"feature_snow_3", tries:4, minY:3, maxY:43, rarity:4 },
      { feature:"feature_snow_4", tries:5, minY:4, maxY:44, rarity:5 },
      { feature:"feature_snow_5", tries:6, minY:5, maxY:45, rarity:6 },
      { feature:"feature_snow_6", tries:7, minY:6, maxY:46, rarity:7 },
      { feature:"feature_snow_7", tries:8, minY:7, maxY:47, rarity:8 },
      { feature:"feature_snow_8", tries:9, minY:8, maxY:48, rarity:9 },
      { feature:"feature_snow_9", tries:10, minY:9, maxY:49, rarity:10 },
      { feature:"feature_snow_10", tries:11, minY:10, maxY:50, rarity:11 },
      { feature:"feature_snow_11", tries:12, minY:11, maxY:51, rarity:12 },
      { feature:"feature_snow_12", tries:1, minY:12, maxY:52, rarity:13 },
      { feature:"feature_snow_13", tries:2, minY:13, maxY:53, rarity:14 },
      { feature:"feature_snow_14", tries:3, minY:14, maxY:54, rarity:15 },
      { feature:"feature_snow_15", tries:4, minY:15, maxY:55, rarity:16 },
      { feature:"feature_snow_16", tries:5, minY:16, maxY:56, rarity:17 },
      { feature:"feature_snow_17", tries:6, minY:17, maxY:57, rarity:18 },
      { feature:"feature_snow_18", tries:7, minY:18, maxY:58, rarity:19 },
      { feature:"feature_snow_19", tries:8, minY:19, maxY:59, rarity:20 },
      { feature:"feature_snow_20", tries:9, minY:20, maxY:60, rarity:1 },
      { feature:"feature_snow_21", tries:10, minY:21, maxY:61, rarity:2 },
      { feature:"feature_snow_22", tries:11, minY:22, maxY:62, rarity:3 },
      { feature:"feature_snow_23", tries:12, minY:23, maxY:63, rarity:4 },
      { feature:"feature_snow_24", tries:1, minY:24, maxY:64, rarity:5 },
      { feature:"feature_snow_25", tries:2, minY:25, maxY:65, rarity:6 },
      { feature:"feature_snow_26", tries:3, minY:26, maxY:66, rarity:7 },
      { feature:"feature_snow_27", tries:4, minY:27, maxY:67, rarity:8 },
      { feature:"feature_snow_28", tries:5, minY:28, maxY:68, rarity:9 },
      { feature:"feature_snow_29", tries:6, minY:29, maxY:69, rarity:10 },
      { feature:"feature_snow_30", tries:7, minY:30, maxY:70, rarity:11 },
      { feature:"feature_snow_31", tries:8, minY:31, maxY:71, rarity:12 },
      { feature:"feature_snow_32", tries:9, minY:32, maxY:72, rarity:13 },
      { feature:"feature_snow_33", tries:10, minY:33, maxY:73, rarity:14 },
      { feature:"feature_snow_34", tries:11, minY:34, maxY:74, rarity:15 },
      { feature:"feature_snow_35", tries:12, minY:35, maxY:75, rarity:16 },
      { feature:"feature_snow_36", tries:1, minY:36, maxY:76, rarity:17 },
      { feature:"feature_snow_37", tries:2, minY:37, maxY:77, rarity:18 },
      { feature:"feature_snow_38", tries:3, minY:38, maxY:78, rarity:19 },
      { feature:"feature_snow_39", tries:4, minY:39, maxY:79, rarity:20 },
    ],
    spawns: {
      monster: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      ambient: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      underground_water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      axolotls: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      misc: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
    }
  },
  taiga: {
    surface: "grass", temperature: 0.03, downfall: 0.71,
    features: [
      { feature:"feature_taiga_0", tries:1, minY:0, maxY:40, rarity:1 },
      { feature:"feature_taiga_1", tries:2, minY:1, maxY:41, rarity:2 },
      { feature:"feature_taiga_2", tries:3, minY:2, maxY:42, rarity:3 },
      { feature:"feature_taiga_3", tries:4, minY:3, maxY:43, rarity:4 },
      { feature:"feature_taiga_4", tries:5, minY:4, maxY:44, rarity:5 },
      { feature:"feature_taiga_5", tries:6, minY:5, maxY:45, rarity:6 },
      { feature:"feature_taiga_6", tries:7, minY:6, maxY:46, rarity:7 },
      { feature:"feature_taiga_7", tries:8, minY:7, maxY:47, rarity:8 },
      { feature:"feature_taiga_8", tries:9, minY:8, maxY:48, rarity:9 },
      { feature:"feature_taiga_9", tries:10, minY:9, maxY:49, rarity:10 },
      { feature:"feature_taiga_10", tries:11, minY:10, maxY:50, rarity:11 },
      { feature:"feature_taiga_11", tries:12, minY:11, maxY:51, rarity:12 },
      { feature:"feature_taiga_12", tries:1, minY:12, maxY:52, rarity:13 },
      { feature:"feature_taiga_13", tries:2, minY:13, maxY:53, rarity:14 },
      { feature:"feature_taiga_14", tries:3, minY:14, maxY:54, rarity:15 },
      { feature:"feature_taiga_15", tries:4, minY:15, maxY:55, rarity:16 },
      { feature:"feature_taiga_16", tries:5, minY:16, maxY:56, rarity:17 },
      { feature:"feature_taiga_17", tries:6, minY:17, maxY:57, rarity:18 },
      { feature:"feature_taiga_18", tries:7, minY:18, maxY:58, rarity:19 },
      { feature:"feature_taiga_19", tries:8, minY:19, maxY:59, rarity:20 },
      { feature:"feature_taiga_20", tries:9, minY:20, maxY:60, rarity:1 },
      { feature:"feature_taiga_21", tries:10, minY:21, maxY:61, rarity:2 },
      { feature:"feature_taiga_22", tries:11, minY:22, maxY:62, rarity:3 },
      { feature:"feature_taiga_23", tries:12, minY:23, maxY:63, rarity:4 },
      { feature:"feature_taiga_24", tries:1, minY:24, maxY:64, rarity:5 },
      { feature:"feature_taiga_25", tries:2, minY:25, maxY:65, rarity:6 },
      { feature:"feature_taiga_26", tries:3, minY:26, maxY:66, rarity:7 },
      { feature:"feature_taiga_27", tries:4, minY:27, maxY:67, rarity:8 },
      { feature:"feature_taiga_28", tries:5, minY:28, maxY:68, rarity:9 },
      { feature:"feature_taiga_29", tries:6, minY:29, maxY:69, rarity:10 },
      { feature:"feature_taiga_30", tries:7, minY:30, maxY:70, rarity:11 },
      { feature:"feature_taiga_31", tries:8, minY:31, maxY:71, rarity:12 },
      { feature:"feature_taiga_32", tries:9, minY:32, maxY:72, rarity:13 },
      { feature:"feature_taiga_33", tries:10, minY:33, maxY:73, rarity:14 },
      { feature:"feature_taiga_34", tries:11, minY:34, maxY:74, rarity:15 },
      { feature:"feature_taiga_35", tries:12, minY:35, maxY:75, rarity:16 },
      { feature:"feature_taiga_36", tries:1, minY:36, maxY:76, rarity:17 },
      { feature:"feature_taiga_37", tries:2, minY:37, maxY:77, rarity:18 },
      { feature:"feature_taiga_38", tries:3, minY:38, maxY:78, rarity:19 },
      { feature:"feature_taiga_39", tries:4, minY:39, maxY:79, rarity:20 },
    ],
    spawns: {
      monster: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      ambient: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      underground_water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      axolotls: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      misc: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
    }
  },
  mountains: {
    surface: "grass", temperature: 0.23, downfall: 0.21,
    features: [
      { feature:"feature_mountains_0", tries:1, minY:0, maxY:40, rarity:1 },
      { feature:"feature_mountains_1", tries:2, minY:1, maxY:41, rarity:2 },
      { feature:"feature_mountains_2", tries:3, minY:2, maxY:42, rarity:3 },
      { feature:"feature_mountains_3", tries:4, minY:3, maxY:43, rarity:4 },
      { feature:"feature_mountains_4", tries:5, minY:4, maxY:44, rarity:5 },
      { feature:"feature_mountains_5", tries:6, minY:5, maxY:45, rarity:6 },
      { feature:"feature_mountains_6", tries:7, minY:6, maxY:46, rarity:7 },
      { feature:"feature_mountains_7", tries:8, minY:7, maxY:47, rarity:8 },
      { feature:"feature_mountains_8", tries:9, minY:8, maxY:48, rarity:9 },
      { feature:"feature_mountains_9", tries:10, minY:9, maxY:49, rarity:10 },
      { feature:"feature_mountains_10", tries:11, minY:10, maxY:50, rarity:11 },
      { feature:"feature_mountains_11", tries:12, minY:11, maxY:51, rarity:12 },
      { feature:"feature_mountains_12", tries:1, minY:12, maxY:52, rarity:13 },
      { feature:"feature_mountains_13", tries:2, minY:13, maxY:53, rarity:14 },
      { feature:"feature_mountains_14", tries:3, minY:14, maxY:54, rarity:15 },
      { feature:"feature_mountains_15", tries:4, minY:15, maxY:55, rarity:16 },
      { feature:"feature_mountains_16", tries:5, minY:16, maxY:56, rarity:17 },
      { feature:"feature_mountains_17", tries:6, minY:17, maxY:57, rarity:18 },
      { feature:"feature_mountains_18", tries:7, minY:18, maxY:58, rarity:19 },
      { feature:"feature_mountains_19", tries:8, minY:19, maxY:59, rarity:20 },
      { feature:"feature_mountains_20", tries:9, minY:20, maxY:60, rarity:1 },
      { feature:"feature_mountains_21", tries:10, minY:21, maxY:61, rarity:2 },
      { feature:"feature_mountains_22", tries:11, minY:22, maxY:62, rarity:3 },
      { feature:"feature_mountains_23", tries:12, minY:23, maxY:63, rarity:4 },
      { feature:"feature_mountains_24", tries:1, minY:24, maxY:64, rarity:5 },
      { feature:"feature_mountains_25", tries:2, minY:25, maxY:65, rarity:6 },
      { feature:"feature_mountains_26", tries:3, minY:26, maxY:66, rarity:7 },
      { feature:"feature_mountains_27", tries:4, minY:27, maxY:67, rarity:8 },
      { feature:"feature_mountains_28", tries:5, minY:28, maxY:68, rarity:9 },
      { feature:"feature_mountains_29", tries:6, minY:29, maxY:69, rarity:10 },
      { feature:"feature_mountains_30", tries:7, minY:30, maxY:70, rarity:11 },
      { feature:"feature_mountains_31", tries:8, minY:31, maxY:71, rarity:12 },
      { feature:"feature_mountains_32", tries:9, minY:32, maxY:72, rarity:13 },
      { feature:"feature_mountains_33", tries:10, minY:33, maxY:73, rarity:14 },
      { feature:"feature_mountains_34", tries:11, minY:34, maxY:74, rarity:15 },
      { feature:"feature_mountains_35", tries:12, minY:35, maxY:75, rarity:16 },
      { feature:"feature_mountains_36", tries:1, minY:36, maxY:76, rarity:17 },
      { feature:"feature_mountains_37", tries:2, minY:37, maxY:77, rarity:18 },
      { feature:"feature_mountains_38", tries:3, minY:38, maxY:78, rarity:19 },
      { feature:"feature_mountains_39", tries:4, minY:39, maxY:79, rarity:20 },
    ],
    spawns: {
      monster: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      ambient: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      underground_water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      axolotls: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      misc: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
    }
  },
  swamp: {
    surface: "grass", temperature: 0.02, downfall: 0.32,
    features: [
      { feature:"feature_swamp_0", tries:1, minY:0, maxY:40, rarity:1 },
      { feature:"feature_swamp_1", tries:2, minY:1, maxY:41, rarity:2 },
      { feature:"feature_swamp_2", tries:3, minY:2, maxY:42, rarity:3 },
      { feature:"feature_swamp_3", tries:4, minY:3, maxY:43, rarity:4 },
      { feature:"feature_swamp_4", tries:5, minY:4, maxY:44, rarity:5 },
      { feature:"feature_swamp_5", tries:6, minY:5, maxY:45, rarity:6 },
      { feature:"feature_swamp_6", tries:7, minY:6, maxY:46, rarity:7 },
      { feature:"feature_swamp_7", tries:8, minY:7, maxY:47, rarity:8 },
      { feature:"feature_swamp_8", tries:9, minY:8, maxY:48, rarity:9 },
      { feature:"feature_swamp_9", tries:10, minY:9, maxY:49, rarity:10 },
      { feature:"feature_swamp_10", tries:11, minY:10, maxY:50, rarity:11 },
      { feature:"feature_swamp_11", tries:12, minY:11, maxY:51, rarity:12 },
      { feature:"feature_swamp_12", tries:1, minY:12, maxY:52, rarity:13 },
      { feature:"feature_swamp_13", tries:2, minY:13, maxY:53, rarity:14 },
      { feature:"feature_swamp_14", tries:3, minY:14, maxY:54, rarity:15 },
      { feature:"feature_swamp_15", tries:4, minY:15, maxY:55, rarity:16 },
      { feature:"feature_swamp_16", tries:5, minY:16, maxY:56, rarity:17 },
      { feature:"feature_swamp_17", tries:6, minY:17, maxY:57, rarity:18 },
      { feature:"feature_swamp_18", tries:7, minY:18, maxY:58, rarity:19 },
      { feature:"feature_swamp_19", tries:8, minY:19, maxY:59, rarity:20 },
      { feature:"feature_swamp_20", tries:9, minY:20, maxY:60, rarity:1 },
      { feature:"feature_swamp_21", tries:10, minY:21, maxY:61, rarity:2 },
      { feature:"feature_swamp_22", tries:11, minY:22, maxY:62, rarity:3 },
      { feature:"feature_swamp_23", tries:12, minY:23, maxY:63, rarity:4 },
      { feature:"feature_swamp_24", tries:1, minY:24, maxY:64, rarity:5 },
      { feature:"feature_swamp_25", tries:2, minY:25, maxY:65, rarity:6 },
      { feature:"feature_swamp_26", tries:3, minY:26, maxY:66, rarity:7 },
      { feature:"feature_swamp_27", tries:4, minY:27, maxY:67, rarity:8 },
      { feature:"feature_swamp_28", tries:5, minY:28, maxY:68, rarity:9 },
      { feature:"feature_swamp_29", tries:6, minY:29, maxY:69, rarity:10 },
      { feature:"feature_swamp_30", tries:7, minY:30, maxY:70, rarity:11 },
      { feature:"feature_swamp_31", tries:8, minY:31, maxY:71, rarity:12 },
      { feature:"feature_swamp_32", tries:9, minY:32, maxY:72, rarity:13 },
      { feature:"feature_swamp_33", tries:10, minY:33, maxY:73, rarity:14 },
      { feature:"feature_swamp_34", tries:11, minY:34, maxY:74, rarity:15 },
      { feature:"feature_swamp_35", tries:12, minY:35, maxY:75, rarity:16 },
      { feature:"feature_swamp_36", tries:1, minY:36, maxY:76, rarity:17 },
      { feature:"feature_swamp_37", tries:2, minY:37, maxY:77, rarity:18 },
      { feature:"feature_swamp_38", tries:3, minY:38, maxY:78, rarity:19 },
      { feature:"feature_swamp_39", tries:4, minY:39, maxY:79, rarity:20 },
    ],
    spawns: {
      monster: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      ambient: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      underground_water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      axolotls: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      misc: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
    }
  },
  savanna: {
    surface: "grass", temperature: 0.80, downfall: 0.60,
    features: [
      { feature:"feature_savanna_0", tries:1, minY:0, maxY:40, rarity:1 },
      { feature:"feature_savanna_1", tries:2, minY:1, maxY:41, rarity:2 },
      { feature:"feature_savanna_2", tries:3, minY:2, maxY:42, rarity:3 },
      { feature:"feature_savanna_3", tries:4, minY:3, maxY:43, rarity:4 },
      { feature:"feature_savanna_4", tries:5, minY:4, maxY:44, rarity:5 },
      { feature:"feature_savanna_5", tries:6, minY:5, maxY:45, rarity:6 },
      { feature:"feature_savanna_6", tries:7, minY:6, maxY:46, rarity:7 },
      { feature:"feature_savanna_7", tries:8, minY:7, maxY:47, rarity:8 },
      { feature:"feature_savanna_8", tries:9, minY:8, maxY:48, rarity:9 },
      { feature:"feature_savanna_9", tries:10, minY:9, maxY:49, rarity:10 },
      { feature:"feature_savanna_10", tries:11, minY:10, maxY:50, rarity:11 },
      { feature:"feature_savanna_11", tries:12, minY:11, maxY:51, rarity:12 },
      { feature:"feature_savanna_12", tries:1, minY:12, maxY:52, rarity:13 },
      { feature:"feature_savanna_13", tries:2, minY:13, maxY:53, rarity:14 },
      { feature:"feature_savanna_14", tries:3, minY:14, maxY:54, rarity:15 },
      { feature:"feature_savanna_15", tries:4, minY:15, maxY:55, rarity:16 },
      { feature:"feature_savanna_16", tries:5, minY:16, maxY:56, rarity:17 },
      { feature:"feature_savanna_17", tries:6, minY:17, maxY:57, rarity:18 },
      { feature:"feature_savanna_18", tries:7, minY:18, maxY:58, rarity:19 },
      { feature:"feature_savanna_19", tries:8, minY:19, maxY:59, rarity:20 },
      { feature:"feature_savanna_20", tries:9, minY:20, maxY:60, rarity:1 },
      { feature:"feature_savanna_21", tries:10, minY:21, maxY:61, rarity:2 },
      { feature:"feature_savanna_22", tries:11, minY:22, maxY:62, rarity:3 },
      { feature:"feature_savanna_23", tries:12, minY:23, maxY:63, rarity:4 },
      { feature:"feature_savanna_24", tries:1, minY:24, maxY:64, rarity:5 },
      { feature:"feature_savanna_25", tries:2, minY:25, maxY:65, rarity:6 },
      { feature:"feature_savanna_26", tries:3, minY:26, maxY:66, rarity:7 },
      { feature:"feature_savanna_27", tries:4, minY:27, maxY:67, rarity:8 },
      { feature:"feature_savanna_28", tries:5, minY:28, maxY:68, rarity:9 },
      { feature:"feature_savanna_29", tries:6, minY:29, maxY:69, rarity:10 },
      { feature:"feature_savanna_30", tries:7, minY:30, maxY:70, rarity:11 },
      { feature:"feature_savanna_31", tries:8, minY:31, maxY:71, rarity:12 },
      { feature:"feature_savanna_32", tries:9, minY:32, maxY:72, rarity:13 },
      { feature:"feature_savanna_33", tries:10, minY:33, maxY:73, rarity:14 },
      { feature:"feature_savanna_34", tries:11, minY:34, maxY:74, rarity:15 },
      { feature:"feature_savanna_35", tries:12, minY:35, maxY:75, rarity:16 },
      { feature:"feature_savanna_36", tries:1, minY:36, maxY:76, rarity:17 },
      { feature:"feature_savanna_37", tries:2, minY:37, maxY:77, rarity:18 },
      { feature:"feature_savanna_38", tries:3, minY:38, maxY:78, rarity:19 },
      { feature:"feature_savanna_39", tries:4, minY:39, maxY:79, rarity:20 },
    ],
    spawns: {
      monster: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      ambient: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      underground_water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      axolotls: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      misc: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
    }
  },
  jungle: {
    surface: "grass", temperature: 0.19, downfall: 0.96,
    features: [
      { feature:"feature_jungle_0", tries:1, minY:0, maxY:40, rarity:1 },
      { feature:"feature_jungle_1", tries:2, minY:1, maxY:41, rarity:2 },
      { feature:"feature_jungle_2", tries:3, minY:2, maxY:42, rarity:3 },
      { feature:"feature_jungle_3", tries:4, minY:3, maxY:43, rarity:4 },
      { feature:"feature_jungle_4", tries:5, minY:4, maxY:44, rarity:5 },
      { feature:"feature_jungle_5", tries:6, minY:5, maxY:45, rarity:6 },
      { feature:"feature_jungle_6", tries:7, minY:6, maxY:46, rarity:7 },
      { feature:"feature_jungle_7", tries:8, minY:7, maxY:47, rarity:8 },
      { feature:"feature_jungle_8", tries:9, minY:8, maxY:48, rarity:9 },
      { feature:"feature_jungle_9", tries:10, minY:9, maxY:49, rarity:10 },
      { feature:"feature_jungle_10", tries:11, minY:10, maxY:50, rarity:11 },
      { feature:"feature_jungle_11", tries:12, minY:11, maxY:51, rarity:12 },
      { feature:"feature_jungle_12", tries:1, minY:12, maxY:52, rarity:13 },
      { feature:"feature_jungle_13", tries:2, minY:13, maxY:53, rarity:14 },
      { feature:"feature_jungle_14", tries:3, minY:14, maxY:54, rarity:15 },
      { feature:"feature_jungle_15", tries:4, minY:15, maxY:55, rarity:16 },
      { feature:"feature_jungle_16", tries:5, minY:16, maxY:56, rarity:17 },
      { feature:"feature_jungle_17", tries:6, minY:17, maxY:57, rarity:18 },
      { feature:"feature_jungle_18", tries:7, minY:18, maxY:58, rarity:19 },
      { feature:"feature_jungle_19", tries:8, minY:19, maxY:59, rarity:20 },
      { feature:"feature_jungle_20", tries:9, minY:20, maxY:60, rarity:1 },
      { feature:"feature_jungle_21", tries:10, minY:21, maxY:61, rarity:2 },
      { feature:"feature_jungle_22", tries:11, minY:22, maxY:62, rarity:3 },
      { feature:"feature_jungle_23", tries:12, minY:23, maxY:63, rarity:4 },
      { feature:"feature_jungle_24", tries:1, minY:24, maxY:64, rarity:5 },
      { feature:"feature_jungle_25", tries:2, minY:25, maxY:65, rarity:6 },
      { feature:"feature_jungle_26", tries:3, minY:26, maxY:66, rarity:7 },
      { feature:"feature_jungle_27", tries:4, minY:27, maxY:67, rarity:8 },
      { feature:"feature_jungle_28", tries:5, minY:28, maxY:68, rarity:9 },
      { feature:"feature_jungle_29", tries:6, minY:29, maxY:69, rarity:10 },
      { feature:"feature_jungle_30", tries:7, minY:30, maxY:70, rarity:11 },
      { feature:"feature_jungle_31", tries:8, minY:31, maxY:71, rarity:12 },
      { feature:"feature_jungle_32", tries:9, minY:32, maxY:72, rarity:13 },
      { feature:"feature_jungle_33", tries:10, minY:33, maxY:73, rarity:14 },
      { feature:"feature_jungle_34", tries:11, minY:34, maxY:74, rarity:15 },
      { feature:"feature_jungle_35", tries:12, minY:35, maxY:75, rarity:16 },
      { feature:"feature_jungle_36", tries:1, minY:36, maxY:76, rarity:17 },
      { feature:"feature_jungle_37", tries:2, minY:37, maxY:77, rarity:18 },
      { feature:"feature_jungle_38", tries:3, minY:38, maxY:78, rarity:19 },
      { feature:"feature_jungle_39", tries:4, minY:39, maxY:79, rarity:20 },
    ],
    spawns: {
      monster: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      ambient: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      underground_water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      axolotls: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      misc: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
    }
  },
  badlands: {
    surface: "grass", temperature: 0.78, downfall: 0.59,
    features: [
      { feature:"feature_badlands_0", tries:1, minY:0, maxY:40, rarity:1 },
      { feature:"feature_badlands_1", tries:2, minY:1, maxY:41, rarity:2 },
      { feature:"feature_badlands_2", tries:3, minY:2, maxY:42, rarity:3 },
      { feature:"feature_badlands_3", tries:4, minY:3, maxY:43, rarity:4 },
      { feature:"feature_badlands_4", tries:5, minY:4, maxY:44, rarity:5 },
      { feature:"feature_badlands_5", tries:6, minY:5, maxY:45, rarity:6 },
      { feature:"feature_badlands_6", tries:7, minY:6, maxY:46, rarity:7 },
      { feature:"feature_badlands_7", tries:8, minY:7, maxY:47, rarity:8 },
      { feature:"feature_badlands_8", tries:9, minY:8, maxY:48, rarity:9 },
      { feature:"feature_badlands_9", tries:10, minY:9, maxY:49, rarity:10 },
      { feature:"feature_badlands_10", tries:11, minY:10, maxY:50, rarity:11 },
      { feature:"feature_badlands_11", tries:12, minY:11, maxY:51, rarity:12 },
      { feature:"feature_badlands_12", tries:1, minY:12, maxY:52, rarity:13 },
      { feature:"feature_badlands_13", tries:2, minY:13, maxY:53, rarity:14 },
      { feature:"feature_badlands_14", tries:3, minY:14, maxY:54, rarity:15 },
      { feature:"feature_badlands_15", tries:4, minY:15, maxY:55, rarity:16 },
      { feature:"feature_badlands_16", tries:5, minY:16, maxY:56, rarity:17 },
      { feature:"feature_badlands_17", tries:6, minY:17, maxY:57, rarity:18 },
      { feature:"feature_badlands_18", tries:7, minY:18, maxY:58, rarity:19 },
      { feature:"feature_badlands_19", tries:8, minY:19, maxY:59, rarity:20 },
      { feature:"feature_badlands_20", tries:9, minY:20, maxY:60, rarity:1 },
      { feature:"feature_badlands_21", tries:10, minY:21, maxY:61, rarity:2 },
      { feature:"feature_badlands_22", tries:11, minY:22, maxY:62, rarity:3 },
      { feature:"feature_badlands_23", tries:12, minY:23, maxY:63, rarity:4 },
      { feature:"feature_badlands_24", tries:1, minY:24, maxY:64, rarity:5 },
      { feature:"feature_badlands_25", tries:2, minY:25, maxY:65, rarity:6 },
      { feature:"feature_badlands_26", tries:3, minY:26, maxY:66, rarity:7 },
      { feature:"feature_badlands_27", tries:4, minY:27, maxY:67, rarity:8 },
      { feature:"feature_badlands_28", tries:5, minY:28, maxY:68, rarity:9 },
      { feature:"feature_badlands_29", tries:6, minY:29, maxY:69, rarity:10 },
      { feature:"feature_badlands_30", tries:7, minY:30, maxY:70, rarity:11 },
      { feature:"feature_badlands_31", tries:8, minY:31, maxY:71, rarity:12 },
      { feature:"feature_badlands_32", tries:9, minY:32, maxY:72, rarity:13 },
      { feature:"feature_badlands_33", tries:10, minY:33, maxY:73, rarity:14 },
      { feature:"feature_badlands_34", tries:11, minY:34, maxY:74, rarity:15 },
      { feature:"feature_badlands_35", tries:12, minY:35, maxY:75, rarity:16 },
      { feature:"feature_badlands_36", tries:1, minY:36, maxY:76, rarity:17 },
      { feature:"feature_badlands_37", tries:2, minY:37, maxY:77, rarity:18 },
      { feature:"feature_badlands_38", tries:3, minY:38, maxY:78, rarity:19 },
      { feature:"feature_badlands_39", tries:4, minY:39, maxY:79, rarity:20 },
    ],
    spawns: {
      monster: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      ambient: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      underground_water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      axolotls: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      misc: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
    }
  },
  mushroom_fields: {
    surface: "grass", temperature: 0.20, downfall: 0.27,
    features: [
      { feature:"feature_mushroom_fields_0", tries:1, minY:0, maxY:40, rarity:1 },
      { feature:"feature_mushroom_fields_1", tries:2, minY:1, maxY:41, rarity:2 },
      { feature:"feature_mushroom_fields_2", tries:3, minY:2, maxY:42, rarity:3 },
      { feature:"feature_mushroom_fields_3", tries:4, minY:3, maxY:43, rarity:4 },
      { feature:"feature_mushroom_fields_4", tries:5, minY:4, maxY:44, rarity:5 },
      { feature:"feature_mushroom_fields_5", tries:6, minY:5, maxY:45, rarity:6 },
      { feature:"feature_mushroom_fields_6", tries:7, minY:6, maxY:46, rarity:7 },
      { feature:"feature_mushroom_fields_7", tries:8, minY:7, maxY:47, rarity:8 },
      { feature:"feature_mushroom_fields_8", tries:9, minY:8, maxY:48, rarity:9 },
      { feature:"feature_mushroom_fields_9", tries:10, minY:9, maxY:49, rarity:10 },
      { feature:"feature_mushroom_fields_10", tries:11, minY:10, maxY:50, rarity:11 },
      { feature:"feature_mushroom_fields_11", tries:12, minY:11, maxY:51, rarity:12 },
      { feature:"feature_mushroom_fields_12", tries:1, minY:12, maxY:52, rarity:13 },
      { feature:"feature_mushroom_fields_13", tries:2, minY:13, maxY:53, rarity:14 },
      { feature:"feature_mushroom_fields_14", tries:3, minY:14, maxY:54, rarity:15 },
      { feature:"feature_mushroom_fields_15", tries:4, minY:15, maxY:55, rarity:16 },
      { feature:"feature_mushroom_fields_16", tries:5, minY:16, maxY:56, rarity:17 },
      { feature:"feature_mushroom_fields_17", tries:6, minY:17, maxY:57, rarity:18 },
      { feature:"feature_mushroom_fields_18", tries:7, minY:18, maxY:58, rarity:19 },
      { feature:"feature_mushroom_fields_19", tries:8, minY:19, maxY:59, rarity:20 },
      { feature:"feature_mushroom_fields_20", tries:9, minY:20, maxY:60, rarity:1 },
      { feature:"feature_mushroom_fields_21", tries:10, minY:21, maxY:61, rarity:2 },
      { feature:"feature_mushroom_fields_22", tries:11, minY:22, maxY:62, rarity:3 },
      { feature:"feature_mushroom_fields_23", tries:12, minY:23, maxY:63, rarity:4 },
      { feature:"feature_mushroom_fields_24", tries:1, minY:24, maxY:64, rarity:5 },
      { feature:"feature_mushroom_fields_25", tries:2, minY:25, maxY:65, rarity:6 },
      { feature:"feature_mushroom_fields_26", tries:3, minY:26, maxY:66, rarity:7 },
      { feature:"feature_mushroom_fields_27", tries:4, minY:27, maxY:67, rarity:8 },
      { feature:"feature_mushroom_fields_28", tries:5, minY:28, maxY:68, rarity:9 },
      { feature:"feature_mushroom_fields_29", tries:6, minY:29, maxY:69, rarity:10 },
      { feature:"feature_mushroom_fields_30", tries:7, minY:30, maxY:70, rarity:11 },
      { feature:"feature_mushroom_fields_31", tries:8, minY:31, maxY:71, rarity:12 },
      { feature:"feature_mushroom_fields_32", tries:9, minY:32, maxY:72, rarity:13 },
      { feature:"feature_mushroom_fields_33", tries:10, minY:33, maxY:73, rarity:14 },
      { feature:"feature_mushroom_fields_34", tries:11, minY:34, maxY:74, rarity:15 },
      { feature:"feature_mushroom_fields_35", tries:12, minY:35, maxY:75, rarity:16 },
      { feature:"feature_mushroom_fields_36", tries:1, minY:36, maxY:76, rarity:17 },
      { feature:"feature_mushroom_fields_37", tries:2, minY:37, maxY:77, rarity:18 },
      { feature:"feature_mushroom_fields_38", tries:3, minY:38, maxY:78, rarity:19 },
      { feature:"feature_mushroom_fields_39", tries:4, minY:39, maxY:79, rarity:20 },
    ],
    spawns: {
      monster: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      ambient: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      underground_water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      axolotls: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      misc: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
    }
  },
  beach: {
    surface: "grass", temperature: 0.61, downfall: 0.86,
    features: [
      { feature:"feature_beach_0", tries:1, minY:0, maxY:40, rarity:1 },
      { feature:"feature_beach_1", tries:2, minY:1, maxY:41, rarity:2 },
      { feature:"feature_beach_2", tries:3, minY:2, maxY:42, rarity:3 },
      { feature:"feature_beach_3", tries:4, minY:3, maxY:43, rarity:4 },
      { feature:"feature_beach_4", tries:5, minY:4, maxY:44, rarity:5 },
      { feature:"feature_beach_5", tries:6, minY:5, maxY:45, rarity:6 },
      { feature:"feature_beach_6", tries:7, minY:6, maxY:46, rarity:7 },
      { feature:"feature_beach_7", tries:8, minY:7, maxY:47, rarity:8 },
      { feature:"feature_beach_8", tries:9, minY:8, maxY:48, rarity:9 },
      { feature:"feature_beach_9", tries:10, minY:9, maxY:49, rarity:10 },
      { feature:"feature_beach_10", tries:11, minY:10, maxY:50, rarity:11 },
      { feature:"feature_beach_11", tries:12, minY:11, maxY:51, rarity:12 },
      { feature:"feature_beach_12", tries:1, minY:12, maxY:52, rarity:13 },
      { feature:"feature_beach_13", tries:2, minY:13, maxY:53, rarity:14 },
      { feature:"feature_beach_14", tries:3, minY:14, maxY:54, rarity:15 },
      { feature:"feature_beach_15", tries:4, minY:15, maxY:55, rarity:16 },
      { feature:"feature_beach_16", tries:5, minY:16, maxY:56, rarity:17 },
      { feature:"feature_beach_17", tries:6, minY:17, maxY:57, rarity:18 },
      { feature:"feature_beach_18", tries:7, minY:18, maxY:58, rarity:19 },
      { feature:"feature_beach_19", tries:8, minY:19, maxY:59, rarity:20 },
      { feature:"feature_beach_20", tries:9, minY:20, maxY:60, rarity:1 },
      { feature:"feature_beach_21", tries:10, minY:21, maxY:61, rarity:2 },
      { feature:"feature_beach_22", tries:11, minY:22, maxY:62, rarity:3 },
      { feature:"feature_beach_23", tries:12, minY:23, maxY:63, rarity:4 },
      { feature:"feature_beach_24", tries:1, minY:24, maxY:64, rarity:5 },
      { feature:"feature_beach_25", tries:2, minY:25, maxY:65, rarity:6 },
      { feature:"feature_beach_26", tries:3, minY:26, maxY:66, rarity:7 },
      { feature:"feature_beach_27", tries:4, minY:27, maxY:67, rarity:8 },
      { feature:"feature_beach_28", tries:5, minY:28, maxY:68, rarity:9 },
      { feature:"feature_beach_29", tries:6, minY:29, maxY:69, rarity:10 },
      { feature:"feature_beach_30", tries:7, minY:30, maxY:70, rarity:11 },
      { feature:"feature_beach_31", tries:8, minY:31, maxY:71, rarity:12 },
      { feature:"feature_beach_32", tries:9, minY:32, maxY:72, rarity:13 },
      { feature:"feature_beach_33", tries:10, minY:33, maxY:73, rarity:14 },
      { feature:"feature_beach_34", tries:11, minY:34, maxY:74, rarity:15 },
      { feature:"feature_beach_35", tries:12, minY:35, maxY:75, rarity:16 },
      { feature:"feature_beach_36", tries:1, minY:36, maxY:76, rarity:17 },
      { feature:"feature_beach_37", tries:2, minY:37, maxY:77, rarity:18 },
      { feature:"feature_beach_38", tries:3, minY:38, maxY:78, rarity:19 },
      { feature:"feature_beach_39", tries:4, minY:39, maxY:79, rarity:20 },
    ],
    spawns: {
      monster: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      ambient: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      underground_water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      axolotls: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      misc: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
    }
  },
  river: {
    surface: "grass", temperature: 0.25, downfall: 0.19,
    features: [
      { feature:"feature_river_0", tries:1, minY:0, maxY:40, rarity:1 },
      { feature:"feature_river_1", tries:2, minY:1, maxY:41, rarity:2 },
      { feature:"feature_river_2", tries:3, minY:2, maxY:42, rarity:3 },
      { feature:"feature_river_3", tries:4, minY:3, maxY:43, rarity:4 },
      { feature:"feature_river_4", tries:5, minY:4, maxY:44, rarity:5 },
      { feature:"feature_river_5", tries:6, minY:5, maxY:45, rarity:6 },
      { feature:"feature_river_6", tries:7, minY:6, maxY:46, rarity:7 },
      { feature:"feature_river_7", tries:8, minY:7, maxY:47, rarity:8 },
      { feature:"feature_river_8", tries:9, minY:8, maxY:48, rarity:9 },
      { feature:"feature_river_9", tries:10, minY:9, maxY:49, rarity:10 },
      { feature:"feature_river_10", tries:11, minY:10, maxY:50, rarity:11 },
      { feature:"feature_river_11", tries:12, minY:11, maxY:51, rarity:12 },
      { feature:"feature_river_12", tries:1, minY:12, maxY:52, rarity:13 },
      { feature:"feature_river_13", tries:2, minY:13, maxY:53, rarity:14 },
      { feature:"feature_river_14", tries:3, minY:14, maxY:54, rarity:15 },
      { feature:"feature_river_15", tries:4, minY:15, maxY:55, rarity:16 },
      { feature:"feature_river_16", tries:5, minY:16, maxY:56, rarity:17 },
      { feature:"feature_river_17", tries:6, minY:17, maxY:57, rarity:18 },
      { feature:"feature_river_18", tries:7, minY:18, maxY:58, rarity:19 },
      { feature:"feature_river_19", tries:8, minY:19, maxY:59, rarity:20 },
      { feature:"feature_river_20", tries:9, minY:20, maxY:60, rarity:1 },
      { feature:"feature_river_21", tries:10, minY:21, maxY:61, rarity:2 },
      { feature:"feature_river_22", tries:11, minY:22, maxY:62, rarity:3 },
      { feature:"feature_river_23", tries:12, minY:23, maxY:63, rarity:4 },
      { feature:"feature_river_24", tries:1, minY:24, maxY:64, rarity:5 },
      { feature:"feature_river_25", tries:2, minY:25, maxY:65, rarity:6 },
      { feature:"feature_river_26", tries:3, minY:26, maxY:66, rarity:7 },
      { feature:"feature_river_27", tries:4, minY:27, maxY:67, rarity:8 },
      { feature:"feature_river_28", tries:5, minY:28, maxY:68, rarity:9 },
      { feature:"feature_river_29", tries:6, minY:29, maxY:69, rarity:10 },
      { feature:"feature_river_30", tries:7, minY:30, maxY:70, rarity:11 },
      { feature:"feature_river_31", tries:8, minY:31, maxY:71, rarity:12 },
      { feature:"feature_river_32", tries:9, minY:32, maxY:72, rarity:13 },
      { feature:"feature_river_33", tries:10, minY:33, maxY:73, rarity:14 },
      { feature:"feature_river_34", tries:11, minY:34, maxY:74, rarity:15 },
      { feature:"feature_river_35", tries:12, minY:35, maxY:75, rarity:16 },
      { feature:"feature_river_36", tries:1, minY:36, maxY:76, rarity:17 },
      { feature:"feature_river_37", tries:2, minY:37, maxY:77, rarity:18 },
      { feature:"feature_river_38", tries:3, minY:38, maxY:78, rarity:19 },
      { feature:"feature_river_39", tries:4, minY:39, maxY:79, rarity:20 },
    ],
    spawns: {
      monster: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      ambient: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      underground_water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      axolotls: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      misc: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
    }
  },
  frozen_river: {
    surface: "grass", temperature: 0.90, downfall: 0.81,
    features: [
      { feature:"feature_frozen_river_0", tries:1, minY:0, maxY:40, rarity:1 },
      { feature:"feature_frozen_river_1", tries:2, minY:1, maxY:41, rarity:2 },
      { feature:"feature_frozen_river_2", tries:3, minY:2, maxY:42, rarity:3 },
      { feature:"feature_frozen_river_3", tries:4, minY:3, maxY:43, rarity:4 },
      { feature:"feature_frozen_river_4", tries:5, minY:4, maxY:44, rarity:5 },
      { feature:"feature_frozen_river_5", tries:6, minY:5, maxY:45, rarity:6 },
      { feature:"feature_frozen_river_6", tries:7, minY:6, maxY:46, rarity:7 },
      { feature:"feature_frozen_river_7", tries:8, minY:7, maxY:47, rarity:8 },
      { feature:"feature_frozen_river_8", tries:9, minY:8, maxY:48, rarity:9 },
      { feature:"feature_frozen_river_9", tries:10, minY:9, maxY:49, rarity:10 },
      { feature:"feature_frozen_river_10", tries:11, minY:10, maxY:50, rarity:11 },
      { feature:"feature_frozen_river_11", tries:12, minY:11, maxY:51, rarity:12 },
      { feature:"feature_frozen_river_12", tries:1, minY:12, maxY:52, rarity:13 },
      { feature:"feature_frozen_river_13", tries:2, minY:13, maxY:53, rarity:14 },
      { feature:"feature_frozen_river_14", tries:3, minY:14, maxY:54, rarity:15 },
      { feature:"feature_frozen_river_15", tries:4, minY:15, maxY:55, rarity:16 },
      { feature:"feature_frozen_river_16", tries:5, minY:16, maxY:56, rarity:17 },
      { feature:"feature_frozen_river_17", tries:6, minY:17, maxY:57, rarity:18 },
      { feature:"feature_frozen_river_18", tries:7, minY:18, maxY:58, rarity:19 },
      { feature:"feature_frozen_river_19", tries:8, minY:19, maxY:59, rarity:20 },
      { feature:"feature_frozen_river_20", tries:9, minY:20, maxY:60, rarity:1 },
      { feature:"feature_frozen_river_21", tries:10, minY:21, maxY:61, rarity:2 },
      { feature:"feature_frozen_river_22", tries:11, minY:22, maxY:62, rarity:3 },
      { feature:"feature_frozen_river_23", tries:12, minY:23, maxY:63, rarity:4 },
      { feature:"feature_frozen_river_24", tries:1, minY:24, maxY:64, rarity:5 },
      { feature:"feature_frozen_river_25", tries:2, minY:25, maxY:65, rarity:6 },
      { feature:"feature_frozen_river_26", tries:3, minY:26, maxY:66, rarity:7 },
      { feature:"feature_frozen_river_27", tries:4, minY:27, maxY:67, rarity:8 },
      { feature:"feature_frozen_river_28", tries:5, minY:28, maxY:68, rarity:9 },
      { feature:"feature_frozen_river_29", tries:6, minY:29, maxY:69, rarity:10 },
      { feature:"feature_frozen_river_30", tries:7, minY:30, maxY:70, rarity:11 },
      { feature:"feature_frozen_river_31", tries:8, minY:31, maxY:71, rarity:12 },
      { feature:"feature_frozen_river_32", tries:9, minY:32, maxY:72, rarity:13 },
      { feature:"feature_frozen_river_33", tries:10, minY:33, maxY:73, rarity:14 },
      { feature:"feature_frozen_river_34", tries:11, minY:34, maxY:74, rarity:15 },
      { feature:"feature_frozen_river_35", tries:12, minY:35, maxY:75, rarity:16 },
      { feature:"feature_frozen_river_36", tries:1, minY:36, maxY:76, rarity:17 },
      { feature:"feature_frozen_river_37", tries:2, minY:37, maxY:77, rarity:18 },
      { feature:"feature_frozen_river_38", tries:3, minY:38, maxY:78, rarity:19 },
      { feature:"feature_frozen_river_39", tries:4, minY:39, maxY:79, rarity:20 },
    ],
    spawns: {
      monster: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      ambient: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      underground_water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      axolotls: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      misc: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
    }
  },
  ice_spikes: {
    surface: "grass", temperature: 0.11, downfall: 0.35,
    features: [
      { feature:"feature_ice_spikes_0", tries:1, minY:0, maxY:40, rarity:1 },
      { feature:"feature_ice_spikes_1", tries:2, minY:1, maxY:41, rarity:2 },
      { feature:"feature_ice_spikes_2", tries:3, minY:2, maxY:42, rarity:3 },
      { feature:"feature_ice_spikes_3", tries:4, minY:3, maxY:43, rarity:4 },
      { feature:"feature_ice_spikes_4", tries:5, minY:4, maxY:44, rarity:5 },
      { feature:"feature_ice_spikes_5", tries:6, minY:5, maxY:45, rarity:6 },
      { feature:"feature_ice_spikes_6", tries:7, minY:6, maxY:46, rarity:7 },
      { feature:"feature_ice_spikes_7", tries:8, minY:7, maxY:47, rarity:8 },
      { feature:"feature_ice_spikes_8", tries:9, minY:8, maxY:48, rarity:9 },
      { feature:"feature_ice_spikes_9", tries:10, minY:9, maxY:49, rarity:10 },
      { feature:"feature_ice_spikes_10", tries:11, minY:10, maxY:50, rarity:11 },
      { feature:"feature_ice_spikes_11", tries:12, minY:11, maxY:51, rarity:12 },
      { feature:"feature_ice_spikes_12", tries:1, minY:12, maxY:52, rarity:13 },
      { feature:"feature_ice_spikes_13", tries:2, minY:13, maxY:53, rarity:14 },
      { feature:"feature_ice_spikes_14", tries:3, minY:14, maxY:54, rarity:15 },
      { feature:"feature_ice_spikes_15", tries:4, minY:15, maxY:55, rarity:16 },
      { feature:"feature_ice_spikes_16", tries:5, minY:16, maxY:56, rarity:17 },
      { feature:"feature_ice_spikes_17", tries:6, minY:17, maxY:57, rarity:18 },
      { feature:"feature_ice_spikes_18", tries:7, minY:18, maxY:58, rarity:19 },
      { feature:"feature_ice_spikes_19", tries:8, minY:19, maxY:59, rarity:20 },
      { feature:"feature_ice_spikes_20", tries:9, minY:20, maxY:60, rarity:1 },
      { feature:"feature_ice_spikes_21", tries:10, minY:21, maxY:61, rarity:2 },
      { feature:"feature_ice_spikes_22", tries:11, minY:22, maxY:62, rarity:3 },
      { feature:"feature_ice_spikes_23", tries:12, minY:23, maxY:63, rarity:4 },
      { feature:"feature_ice_spikes_24", tries:1, minY:24, maxY:64, rarity:5 },
      { feature:"feature_ice_spikes_25", tries:2, minY:25, maxY:65, rarity:6 },
      { feature:"feature_ice_spikes_26", tries:3, minY:26, maxY:66, rarity:7 },
      { feature:"feature_ice_spikes_27", tries:4, minY:27, maxY:67, rarity:8 },
      { feature:"feature_ice_spikes_28", tries:5, minY:28, maxY:68, rarity:9 },
      { feature:"feature_ice_spikes_29", tries:6, minY:29, maxY:69, rarity:10 },
      { feature:"feature_ice_spikes_30", tries:7, minY:30, maxY:70, rarity:11 },
      { feature:"feature_ice_spikes_31", tries:8, minY:31, maxY:71, rarity:12 },
      { feature:"feature_ice_spikes_32", tries:9, minY:32, maxY:72, rarity:13 },
      { feature:"feature_ice_spikes_33", tries:10, minY:33, maxY:73, rarity:14 },
      { feature:"feature_ice_spikes_34", tries:11, minY:34, maxY:74, rarity:15 },
      { feature:"feature_ice_spikes_35", tries:12, minY:35, maxY:75, rarity:16 },
      { feature:"feature_ice_spikes_36", tries:1, minY:36, maxY:76, rarity:17 },
      { feature:"feature_ice_spikes_37", tries:2, minY:37, maxY:77, rarity:18 },
      { feature:"feature_ice_spikes_38", tries:3, minY:38, maxY:78, rarity:19 },
      { feature:"feature_ice_spikes_39", tries:4, minY:39, maxY:79, rarity:20 },
    ],
    spawns: {
      monster: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      ambient: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      underground_water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      axolotls: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      misc: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
    }
  },
  flower_forest: {
    surface: "grass", temperature: 0.07, downfall: 0.56,
    features: [
      { feature:"feature_flower_forest_0", tries:1, minY:0, maxY:40, rarity:1 },
      { feature:"feature_flower_forest_1", tries:2, minY:1, maxY:41, rarity:2 },
      { feature:"feature_flower_forest_2", tries:3, minY:2, maxY:42, rarity:3 },
      { feature:"feature_flower_forest_3", tries:4, minY:3, maxY:43, rarity:4 },
      { feature:"feature_flower_forest_4", tries:5, minY:4, maxY:44, rarity:5 },
      { feature:"feature_flower_forest_5", tries:6, minY:5, maxY:45, rarity:6 },
      { feature:"feature_flower_forest_6", tries:7, minY:6, maxY:46, rarity:7 },
      { feature:"feature_flower_forest_7", tries:8, minY:7, maxY:47, rarity:8 },
      { feature:"feature_flower_forest_8", tries:9, minY:8, maxY:48, rarity:9 },
      { feature:"feature_flower_forest_9", tries:10, minY:9, maxY:49, rarity:10 },
      { feature:"feature_flower_forest_10", tries:11, minY:10, maxY:50, rarity:11 },
      { feature:"feature_flower_forest_11", tries:12, minY:11, maxY:51, rarity:12 },
      { feature:"feature_flower_forest_12", tries:1, minY:12, maxY:52, rarity:13 },
      { feature:"feature_flower_forest_13", tries:2, minY:13, maxY:53, rarity:14 },
      { feature:"feature_flower_forest_14", tries:3, minY:14, maxY:54, rarity:15 },
      { feature:"feature_flower_forest_15", tries:4, minY:15, maxY:55, rarity:16 },
      { feature:"feature_flower_forest_16", tries:5, minY:16, maxY:56, rarity:17 },
      { feature:"feature_flower_forest_17", tries:6, minY:17, maxY:57, rarity:18 },
      { feature:"feature_flower_forest_18", tries:7, minY:18, maxY:58, rarity:19 },
      { feature:"feature_flower_forest_19", tries:8, minY:19, maxY:59, rarity:20 },
      { feature:"feature_flower_forest_20", tries:9, minY:20, maxY:60, rarity:1 },
      { feature:"feature_flower_forest_21", tries:10, minY:21, maxY:61, rarity:2 },
      { feature:"feature_flower_forest_22", tries:11, minY:22, maxY:62, rarity:3 },
      { feature:"feature_flower_forest_23", tries:12, minY:23, maxY:63, rarity:4 },
      { feature:"feature_flower_forest_24", tries:1, minY:24, maxY:64, rarity:5 },
      { feature:"feature_flower_forest_25", tries:2, minY:25, maxY:65, rarity:6 },
      { feature:"feature_flower_forest_26", tries:3, minY:26, maxY:66, rarity:7 },
      { feature:"feature_flower_forest_27", tries:4, minY:27, maxY:67, rarity:8 },
      { feature:"feature_flower_forest_28", tries:5, minY:28, maxY:68, rarity:9 },
      { feature:"feature_flower_forest_29", tries:6, minY:29, maxY:69, rarity:10 },
      { feature:"feature_flower_forest_30", tries:7, minY:30, maxY:70, rarity:11 },
      { feature:"feature_flower_forest_31", tries:8, minY:31, maxY:71, rarity:12 },
      { feature:"feature_flower_forest_32", tries:9, minY:32, maxY:72, rarity:13 },
      { feature:"feature_flower_forest_33", tries:10, minY:33, maxY:73, rarity:14 },
      { feature:"feature_flower_forest_34", tries:11, minY:34, maxY:74, rarity:15 },
      { feature:"feature_flower_forest_35", tries:12, minY:35, maxY:75, rarity:16 },
      { feature:"feature_flower_forest_36", tries:1, minY:36, maxY:76, rarity:17 },
      { feature:"feature_flower_forest_37", tries:2, minY:37, maxY:77, rarity:18 },
      { feature:"feature_flower_forest_38", tries:3, minY:38, maxY:78, rarity:19 },
      { feature:"feature_flower_forest_39", tries:4, minY:39, maxY:79, rarity:20 },
    ],
    spawns: {
      monster: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      ambient: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      underground_water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      axolotls: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      misc: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
    }
  },
  birch_forest: {
    surface: "grass", temperature: 0.11, downfall: 0.52,
    features: [
      { feature:"feature_birch_forest_0", tries:1, minY:0, maxY:40, rarity:1 },
      { feature:"feature_birch_forest_1", tries:2, minY:1, maxY:41, rarity:2 },
      { feature:"feature_birch_forest_2", tries:3, minY:2, maxY:42, rarity:3 },
      { feature:"feature_birch_forest_3", tries:4, minY:3, maxY:43, rarity:4 },
      { feature:"feature_birch_forest_4", tries:5, minY:4, maxY:44, rarity:5 },
      { feature:"feature_birch_forest_5", tries:6, minY:5, maxY:45, rarity:6 },
      { feature:"feature_birch_forest_6", tries:7, minY:6, maxY:46, rarity:7 },
      { feature:"feature_birch_forest_7", tries:8, minY:7, maxY:47, rarity:8 },
      { feature:"feature_birch_forest_8", tries:9, minY:8, maxY:48, rarity:9 },
      { feature:"feature_birch_forest_9", tries:10, minY:9, maxY:49, rarity:10 },
      { feature:"feature_birch_forest_10", tries:11, minY:10, maxY:50, rarity:11 },
      { feature:"feature_birch_forest_11", tries:12, minY:11, maxY:51, rarity:12 },
      { feature:"feature_birch_forest_12", tries:1, minY:12, maxY:52, rarity:13 },
      { feature:"feature_birch_forest_13", tries:2, minY:13, maxY:53, rarity:14 },
      { feature:"feature_birch_forest_14", tries:3, minY:14, maxY:54, rarity:15 },
      { feature:"feature_birch_forest_15", tries:4, minY:15, maxY:55, rarity:16 },
      { feature:"feature_birch_forest_16", tries:5, minY:16, maxY:56, rarity:17 },
      { feature:"feature_birch_forest_17", tries:6, minY:17, maxY:57, rarity:18 },
      { feature:"feature_birch_forest_18", tries:7, minY:18, maxY:58, rarity:19 },
      { feature:"feature_birch_forest_19", tries:8, minY:19, maxY:59, rarity:20 },
      { feature:"feature_birch_forest_20", tries:9, minY:20, maxY:60, rarity:1 },
      { feature:"feature_birch_forest_21", tries:10, minY:21, maxY:61, rarity:2 },
      { feature:"feature_birch_forest_22", tries:11, minY:22, maxY:62, rarity:3 },
      { feature:"feature_birch_forest_23", tries:12, minY:23, maxY:63, rarity:4 },
      { feature:"feature_birch_forest_24", tries:1, minY:24, maxY:64, rarity:5 },
      { feature:"feature_birch_forest_25", tries:2, minY:25, maxY:65, rarity:6 },
      { feature:"feature_birch_forest_26", tries:3, minY:26, maxY:66, rarity:7 },
      { feature:"feature_birch_forest_27", tries:4, minY:27, maxY:67, rarity:8 },
      { feature:"feature_birch_forest_28", tries:5, minY:28, maxY:68, rarity:9 },
      { feature:"feature_birch_forest_29", tries:6, minY:29, maxY:69, rarity:10 },
      { feature:"feature_birch_forest_30", tries:7, minY:30, maxY:70, rarity:11 },
      { feature:"feature_birch_forest_31", tries:8, minY:31, maxY:71, rarity:12 },
      { feature:"feature_birch_forest_32", tries:9, minY:32, maxY:72, rarity:13 },
      { feature:"feature_birch_forest_33", tries:10, minY:33, maxY:73, rarity:14 },
      { feature:"feature_birch_forest_34", tries:11, minY:34, maxY:74, rarity:15 },
      { feature:"feature_birch_forest_35", tries:12, minY:35, maxY:75, rarity:16 },
      { feature:"feature_birch_forest_36", tries:1, minY:36, maxY:76, rarity:17 },
      { feature:"feature_birch_forest_37", tries:2, minY:37, maxY:77, rarity:18 },
      { feature:"feature_birch_forest_38", tries:3, minY:38, maxY:78, rarity:19 },
      { feature:"feature_birch_forest_39", tries:4, minY:39, maxY:79, rarity:20 },
    ],
    spawns: {
      monster: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      ambient: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      underground_water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      axolotls: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      misc: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
    }
  },
  dark_forest: {
    surface: "grass", temperature: 0.75, downfall: 0.11,
    features: [
      { feature:"feature_dark_forest_0", tries:1, minY:0, maxY:40, rarity:1 },
      { feature:"feature_dark_forest_1", tries:2, minY:1, maxY:41, rarity:2 },
      { feature:"feature_dark_forest_2", tries:3, minY:2, maxY:42, rarity:3 },
      { feature:"feature_dark_forest_3", tries:4, minY:3, maxY:43, rarity:4 },
      { feature:"feature_dark_forest_4", tries:5, minY:4, maxY:44, rarity:5 },
      { feature:"feature_dark_forest_5", tries:6, minY:5, maxY:45, rarity:6 },
      { feature:"feature_dark_forest_6", tries:7, minY:6, maxY:46, rarity:7 },
      { feature:"feature_dark_forest_7", tries:8, minY:7, maxY:47, rarity:8 },
      { feature:"feature_dark_forest_8", tries:9, minY:8, maxY:48, rarity:9 },
      { feature:"feature_dark_forest_9", tries:10, minY:9, maxY:49, rarity:10 },
      { feature:"feature_dark_forest_10", tries:11, minY:10, maxY:50, rarity:11 },
      { feature:"feature_dark_forest_11", tries:12, minY:11, maxY:51, rarity:12 },
      { feature:"feature_dark_forest_12", tries:1, minY:12, maxY:52, rarity:13 },
      { feature:"feature_dark_forest_13", tries:2, minY:13, maxY:53, rarity:14 },
      { feature:"feature_dark_forest_14", tries:3, minY:14, maxY:54, rarity:15 },
      { feature:"feature_dark_forest_15", tries:4, minY:15, maxY:55, rarity:16 },
      { feature:"feature_dark_forest_16", tries:5, minY:16, maxY:56, rarity:17 },
      { feature:"feature_dark_forest_17", tries:6, minY:17, maxY:57, rarity:18 },
      { feature:"feature_dark_forest_18", tries:7, minY:18, maxY:58, rarity:19 },
      { feature:"feature_dark_forest_19", tries:8, minY:19, maxY:59, rarity:20 },
      { feature:"feature_dark_forest_20", tries:9, minY:20, maxY:60, rarity:1 },
      { feature:"feature_dark_forest_21", tries:10, minY:21, maxY:61, rarity:2 },
      { feature:"feature_dark_forest_22", tries:11, minY:22, maxY:62, rarity:3 },
      { feature:"feature_dark_forest_23", tries:12, minY:23, maxY:63, rarity:4 },
      { feature:"feature_dark_forest_24", tries:1, minY:24, maxY:64, rarity:5 },
      { feature:"feature_dark_forest_25", tries:2, minY:25, maxY:65, rarity:6 },
      { feature:"feature_dark_forest_26", tries:3, minY:26, maxY:66, rarity:7 },
      { feature:"feature_dark_forest_27", tries:4, minY:27, maxY:67, rarity:8 },
      { feature:"feature_dark_forest_28", tries:5, minY:28, maxY:68, rarity:9 },
      { feature:"feature_dark_forest_29", tries:6, minY:29, maxY:69, rarity:10 },
      { feature:"feature_dark_forest_30", tries:7, minY:30, maxY:70, rarity:11 },
      { feature:"feature_dark_forest_31", tries:8, minY:31, maxY:71, rarity:12 },
      { feature:"feature_dark_forest_32", tries:9, minY:32, maxY:72, rarity:13 },
      { feature:"feature_dark_forest_33", tries:10, minY:33, maxY:73, rarity:14 },
      { feature:"feature_dark_forest_34", tries:11, minY:34, maxY:74, rarity:15 },
      { feature:"feature_dark_forest_35", tries:12, minY:35, maxY:75, rarity:16 },
      { feature:"feature_dark_forest_36", tries:1, minY:36, maxY:76, rarity:17 },
      { feature:"feature_dark_forest_37", tries:2, minY:37, maxY:77, rarity:18 },
      { feature:"feature_dark_forest_38", tries:3, minY:38, maxY:78, rarity:19 },
      { feature:"feature_dark_forest_39", tries:4, minY:39, maxY:79, rarity:20 },
    ],
    spawns: {
      monster: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      ambient: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      underground_water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      axolotls: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      misc: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
    }
  },
  windswept_hills: {
    surface: "grass", temperature: 0.87, downfall: 0.63,
    features: [
      { feature:"feature_windswept_hills_0", tries:1, minY:0, maxY:40, rarity:1 },
      { feature:"feature_windswept_hills_1", tries:2, minY:1, maxY:41, rarity:2 },
      { feature:"feature_windswept_hills_2", tries:3, minY:2, maxY:42, rarity:3 },
      { feature:"feature_windswept_hills_3", tries:4, minY:3, maxY:43, rarity:4 },
      { feature:"feature_windswept_hills_4", tries:5, minY:4, maxY:44, rarity:5 },
      { feature:"feature_windswept_hills_5", tries:6, minY:5, maxY:45, rarity:6 },
      { feature:"feature_windswept_hills_6", tries:7, minY:6, maxY:46, rarity:7 },
      { feature:"feature_windswept_hills_7", tries:8, minY:7, maxY:47, rarity:8 },
      { feature:"feature_windswept_hills_8", tries:9, minY:8, maxY:48, rarity:9 },
      { feature:"feature_windswept_hills_9", tries:10, minY:9, maxY:49, rarity:10 },
      { feature:"feature_windswept_hills_10", tries:11, minY:10, maxY:50, rarity:11 },
      { feature:"feature_windswept_hills_11", tries:12, minY:11, maxY:51, rarity:12 },
      { feature:"feature_windswept_hills_12", tries:1, minY:12, maxY:52, rarity:13 },
      { feature:"feature_windswept_hills_13", tries:2, minY:13, maxY:53, rarity:14 },
      { feature:"feature_windswept_hills_14", tries:3, minY:14, maxY:54, rarity:15 },
      { feature:"feature_windswept_hills_15", tries:4, minY:15, maxY:55, rarity:16 },
      { feature:"feature_windswept_hills_16", tries:5, minY:16, maxY:56, rarity:17 },
      { feature:"feature_windswept_hills_17", tries:6, minY:17, maxY:57, rarity:18 },
      { feature:"feature_windswept_hills_18", tries:7, minY:18, maxY:58, rarity:19 },
      { feature:"feature_windswept_hills_19", tries:8, minY:19, maxY:59, rarity:20 },
      { feature:"feature_windswept_hills_20", tries:9, minY:20, maxY:60, rarity:1 },
      { feature:"feature_windswept_hills_21", tries:10, minY:21, maxY:61, rarity:2 },
      { feature:"feature_windswept_hills_22", tries:11, minY:22, maxY:62, rarity:3 },
      { feature:"feature_windswept_hills_23", tries:12, minY:23, maxY:63, rarity:4 },
      { feature:"feature_windswept_hills_24", tries:1, minY:24, maxY:64, rarity:5 },
      { feature:"feature_windswept_hills_25", tries:2, minY:25, maxY:65, rarity:6 },
      { feature:"feature_windswept_hills_26", tries:3, minY:26, maxY:66, rarity:7 },
      { feature:"feature_windswept_hills_27", tries:4, minY:27, maxY:67, rarity:8 },
      { feature:"feature_windswept_hills_28", tries:5, minY:28, maxY:68, rarity:9 },
      { feature:"feature_windswept_hills_29", tries:6, minY:29, maxY:69, rarity:10 },
      { feature:"feature_windswept_hills_30", tries:7, minY:30, maxY:70, rarity:11 },
      { feature:"feature_windswept_hills_31", tries:8, minY:31, maxY:71, rarity:12 },
      { feature:"feature_windswept_hills_32", tries:9, minY:32, maxY:72, rarity:13 },
      { feature:"feature_windswept_hills_33", tries:10, minY:33, maxY:73, rarity:14 },
      { feature:"feature_windswept_hills_34", tries:11, minY:34, maxY:74, rarity:15 },
      { feature:"feature_windswept_hills_35", tries:12, minY:35, maxY:75, rarity:16 },
      { feature:"feature_windswept_hills_36", tries:1, minY:36, maxY:76, rarity:17 },
      { feature:"feature_windswept_hills_37", tries:2, minY:37, maxY:77, rarity:18 },
      { feature:"feature_windswept_hills_38", tries:3, minY:38, maxY:78, rarity:19 },
      { feature:"feature_windswept_hills_39", tries:4, minY:39, maxY:79, rarity:20 },
    ],
    spawns: {
      monster: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      ambient: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      underground_water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      axolotls: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      misc: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
    }
  },
  meadow: {
    surface: "grass", temperature: 0.48, downfall: 0.08,
    features: [
      { feature:"feature_meadow_0", tries:1, minY:0, maxY:40, rarity:1 },
      { feature:"feature_meadow_1", tries:2, minY:1, maxY:41, rarity:2 },
      { feature:"feature_meadow_2", tries:3, minY:2, maxY:42, rarity:3 },
      { feature:"feature_meadow_3", tries:4, minY:3, maxY:43, rarity:4 },
      { feature:"feature_meadow_4", tries:5, minY:4, maxY:44, rarity:5 },
      { feature:"feature_meadow_5", tries:6, minY:5, maxY:45, rarity:6 },
      { feature:"feature_meadow_6", tries:7, minY:6, maxY:46, rarity:7 },
      { feature:"feature_meadow_7", tries:8, minY:7, maxY:47, rarity:8 },
      { feature:"feature_meadow_8", tries:9, minY:8, maxY:48, rarity:9 },
      { feature:"feature_meadow_9", tries:10, minY:9, maxY:49, rarity:10 },
      { feature:"feature_meadow_10", tries:11, minY:10, maxY:50, rarity:11 },
      { feature:"feature_meadow_11", tries:12, minY:11, maxY:51, rarity:12 },
      { feature:"feature_meadow_12", tries:1, minY:12, maxY:52, rarity:13 },
      { feature:"feature_meadow_13", tries:2, minY:13, maxY:53, rarity:14 },
      { feature:"feature_meadow_14", tries:3, minY:14, maxY:54, rarity:15 },
      { feature:"feature_meadow_15", tries:4, minY:15, maxY:55, rarity:16 },
      { feature:"feature_meadow_16", tries:5, minY:16, maxY:56, rarity:17 },
      { feature:"feature_meadow_17", tries:6, minY:17, maxY:57, rarity:18 },
      { feature:"feature_meadow_18", tries:7, minY:18, maxY:58, rarity:19 },
      { feature:"feature_meadow_19", tries:8, minY:19, maxY:59, rarity:20 },
      { feature:"feature_meadow_20", tries:9, minY:20, maxY:60, rarity:1 },
      { feature:"feature_meadow_21", tries:10, minY:21, maxY:61, rarity:2 },
      { feature:"feature_meadow_22", tries:11, minY:22, maxY:62, rarity:3 },
      { feature:"feature_meadow_23", tries:12, minY:23, maxY:63, rarity:4 },
      { feature:"feature_meadow_24", tries:1, minY:24, maxY:64, rarity:5 },
      { feature:"feature_meadow_25", tries:2, minY:25, maxY:65, rarity:6 },
      { feature:"feature_meadow_26", tries:3, minY:26, maxY:66, rarity:7 },
      { feature:"feature_meadow_27", tries:4, minY:27, maxY:67, rarity:8 },
      { feature:"feature_meadow_28", tries:5, minY:28, maxY:68, rarity:9 },
      { feature:"feature_meadow_29", tries:6, minY:29, maxY:69, rarity:10 },
      { feature:"feature_meadow_30", tries:7, minY:30, maxY:70, rarity:11 },
      { feature:"feature_meadow_31", tries:8, minY:31, maxY:71, rarity:12 },
      { feature:"feature_meadow_32", tries:9, minY:32, maxY:72, rarity:13 },
      { feature:"feature_meadow_33", tries:10, minY:33, maxY:73, rarity:14 },
      { feature:"feature_meadow_34", tries:11, minY:34, maxY:74, rarity:15 },
      { feature:"feature_meadow_35", tries:12, minY:35, maxY:75, rarity:16 },
      { feature:"feature_meadow_36", tries:1, minY:36, maxY:76, rarity:17 },
      { feature:"feature_meadow_37", tries:2, minY:37, maxY:77, rarity:18 },
      { feature:"feature_meadow_38", tries:3, minY:38, maxY:78, rarity:19 },
      { feature:"feature_meadow_39", tries:4, minY:39, maxY:79, rarity:20 },
    ],
    spawns: {
      monster: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      ambient: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      underground_water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      axolotls: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      misc: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
    }
  },
  grove: {
    surface: "grass", temperature: 0.12, downfall: 0.55,
    features: [
      { feature:"feature_grove_0", tries:1, minY:0, maxY:40, rarity:1 },
      { feature:"feature_grove_1", tries:2, minY:1, maxY:41, rarity:2 },
      { feature:"feature_grove_2", tries:3, minY:2, maxY:42, rarity:3 },
      { feature:"feature_grove_3", tries:4, minY:3, maxY:43, rarity:4 },
      { feature:"feature_grove_4", tries:5, minY:4, maxY:44, rarity:5 },
      { feature:"feature_grove_5", tries:6, minY:5, maxY:45, rarity:6 },
      { feature:"feature_grove_6", tries:7, minY:6, maxY:46, rarity:7 },
      { feature:"feature_grove_7", tries:8, minY:7, maxY:47, rarity:8 },
      { feature:"feature_grove_8", tries:9, minY:8, maxY:48, rarity:9 },
      { feature:"feature_grove_9", tries:10, minY:9, maxY:49, rarity:10 },
      { feature:"feature_grove_10", tries:11, minY:10, maxY:50, rarity:11 },
      { feature:"feature_grove_11", tries:12, minY:11, maxY:51, rarity:12 },
      { feature:"feature_grove_12", tries:1, minY:12, maxY:52, rarity:13 },
      { feature:"feature_grove_13", tries:2, minY:13, maxY:53, rarity:14 },
      { feature:"feature_grove_14", tries:3, minY:14, maxY:54, rarity:15 },
      { feature:"feature_grove_15", tries:4, minY:15, maxY:55, rarity:16 },
      { feature:"feature_grove_16", tries:5, minY:16, maxY:56, rarity:17 },
      { feature:"feature_grove_17", tries:6, minY:17, maxY:57, rarity:18 },
      { feature:"feature_grove_18", tries:7, minY:18, maxY:58, rarity:19 },
      { feature:"feature_grove_19", tries:8, minY:19, maxY:59, rarity:20 },
      { feature:"feature_grove_20", tries:9, minY:20, maxY:60, rarity:1 },
      { feature:"feature_grove_21", tries:10, minY:21, maxY:61, rarity:2 },
      { feature:"feature_grove_22", tries:11, minY:22, maxY:62, rarity:3 },
      { feature:"feature_grove_23", tries:12, minY:23, maxY:63, rarity:4 },
      { feature:"feature_grove_24", tries:1, minY:24, maxY:64, rarity:5 },
      { feature:"feature_grove_25", tries:2, minY:25, maxY:65, rarity:6 },
      { feature:"feature_grove_26", tries:3, minY:26, maxY:66, rarity:7 },
      { feature:"feature_grove_27", tries:4, minY:27, maxY:67, rarity:8 },
      { feature:"feature_grove_28", tries:5, minY:28, maxY:68, rarity:9 },
      { feature:"feature_grove_29", tries:6, minY:29, maxY:69, rarity:10 },
      { feature:"feature_grove_30", tries:7, minY:30, maxY:70, rarity:11 },
      { feature:"feature_grove_31", tries:8, minY:31, maxY:71, rarity:12 },
      { feature:"feature_grove_32", tries:9, minY:32, maxY:72, rarity:13 },
      { feature:"feature_grove_33", tries:10, minY:33, maxY:73, rarity:14 },
      { feature:"feature_grove_34", tries:11, minY:34, maxY:74, rarity:15 },
      { feature:"feature_grove_35", tries:12, minY:35, maxY:75, rarity:16 },
      { feature:"feature_grove_36", tries:1, minY:36, maxY:76, rarity:17 },
      { feature:"feature_grove_37", tries:2, minY:37, maxY:77, rarity:18 },
      { feature:"feature_grove_38", tries:3, minY:38, maxY:78, rarity:19 },
      { feature:"feature_grove_39", tries:4, minY:39, maxY:79, rarity:20 },
    ],
    spawns: {
      monster: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      ambient: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      underground_water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      axolotls: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      misc: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
    }
  },
  snowy_slopes: {
    surface: "grass", temperature: 0.76, downfall: 0.16,
    features: [
      { feature:"feature_snowy_slopes_0", tries:1, minY:0, maxY:40, rarity:1 },
      { feature:"feature_snowy_slopes_1", tries:2, minY:1, maxY:41, rarity:2 },
      { feature:"feature_snowy_slopes_2", tries:3, minY:2, maxY:42, rarity:3 },
      { feature:"feature_snowy_slopes_3", tries:4, minY:3, maxY:43, rarity:4 },
      { feature:"feature_snowy_slopes_4", tries:5, minY:4, maxY:44, rarity:5 },
      { feature:"feature_snowy_slopes_5", tries:6, minY:5, maxY:45, rarity:6 },
      { feature:"feature_snowy_slopes_6", tries:7, minY:6, maxY:46, rarity:7 },
      { feature:"feature_snowy_slopes_7", tries:8, minY:7, maxY:47, rarity:8 },
      { feature:"feature_snowy_slopes_8", tries:9, minY:8, maxY:48, rarity:9 },
      { feature:"feature_snowy_slopes_9", tries:10, minY:9, maxY:49, rarity:10 },
      { feature:"feature_snowy_slopes_10", tries:11, minY:10, maxY:50, rarity:11 },
      { feature:"feature_snowy_slopes_11", tries:12, minY:11, maxY:51, rarity:12 },
      { feature:"feature_snowy_slopes_12", tries:1, minY:12, maxY:52, rarity:13 },
      { feature:"feature_snowy_slopes_13", tries:2, minY:13, maxY:53, rarity:14 },
      { feature:"feature_snowy_slopes_14", tries:3, minY:14, maxY:54, rarity:15 },
      { feature:"feature_snowy_slopes_15", tries:4, minY:15, maxY:55, rarity:16 },
      { feature:"feature_snowy_slopes_16", tries:5, minY:16, maxY:56, rarity:17 },
      { feature:"feature_snowy_slopes_17", tries:6, minY:17, maxY:57, rarity:18 },
      { feature:"feature_snowy_slopes_18", tries:7, minY:18, maxY:58, rarity:19 },
      { feature:"feature_snowy_slopes_19", tries:8, minY:19, maxY:59, rarity:20 },
      { feature:"feature_snowy_slopes_20", tries:9, minY:20, maxY:60, rarity:1 },
      { feature:"feature_snowy_slopes_21", tries:10, minY:21, maxY:61, rarity:2 },
      { feature:"feature_snowy_slopes_22", tries:11, minY:22, maxY:62, rarity:3 },
      { feature:"feature_snowy_slopes_23", tries:12, minY:23, maxY:63, rarity:4 },
      { feature:"feature_snowy_slopes_24", tries:1, minY:24, maxY:64, rarity:5 },
      { feature:"feature_snowy_slopes_25", tries:2, minY:25, maxY:65, rarity:6 },
      { feature:"feature_snowy_slopes_26", tries:3, minY:26, maxY:66, rarity:7 },
      { feature:"feature_snowy_slopes_27", tries:4, minY:27, maxY:67, rarity:8 },
      { feature:"feature_snowy_slopes_28", tries:5, minY:28, maxY:68, rarity:9 },
      { feature:"feature_snowy_slopes_29", tries:6, minY:29, maxY:69, rarity:10 },
      { feature:"feature_snowy_slopes_30", tries:7, minY:30, maxY:70, rarity:11 },
      { feature:"feature_snowy_slopes_31", tries:8, minY:31, maxY:71, rarity:12 },
      { feature:"feature_snowy_slopes_32", tries:9, minY:32, maxY:72, rarity:13 },
      { feature:"feature_snowy_slopes_33", tries:10, minY:33, maxY:73, rarity:14 },
      { feature:"feature_snowy_slopes_34", tries:11, minY:34, maxY:74, rarity:15 },
      { feature:"feature_snowy_slopes_35", tries:12, minY:35, maxY:75, rarity:16 },
      { feature:"feature_snowy_slopes_36", tries:1, minY:36, maxY:76, rarity:17 },
      { feature:"feature_snowy_slopes_37", tries:2, minY:37, maxY:77, rarity:18 },
      { feature:"feature_snowy_slopes_38", tries:3, minY:38, maxY:78, rarity:19 },
      { feature:"feature_snowy_slopes_39", tries:4, minY:39, maxY:79, rarity:20 },
    ],
    spawns: {
      monster: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      ambient: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      underground_water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      axolotls: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      misc: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
    }
  },
  frozen_peaks: {
    surface: "grass", temperature: 0.18, downfall: 0.39,
    features: [
      { feature:"feature_frozen_peaks_0", tries:1, minY:0, maxY:40, rarity:1 },
      { feature:"feature_frozen_peaks_1", tries:2, minY:1, maxY:41, rarity:2 },
      { feature:"feature_frozen_peaks_2", tries:3, minY:2, maxY:42, rarity:3 },
      { feature:"feature_frozen_peaks_3", tries:4, minY:3, maxY:43, rarity:4 },
      { feature:"feature_frozen_peaks_4", tries:5, minY:4, maxY:44, rarity:5 },
      { feature:"feature_frozen_peaks_5", tries:6, minY:5, maxY:45, rarity:6 },
      { feature:"feature_frozen_peaks_6", tries:7, minY:6, maxY:46, rarity:7 },
      { feature:"feature_frozen_peaks_7", tries:8, minY:7, maxY:47, rarity:8 },
      { feature:"feature_frozen_peaks_8", tries:9, minY:8, maxY:48, rarity:9 },
      { feature:"feature_frozen_peaks_9", tries:10, minY:9, maxY:49, rarity:10 },
      { feature:"feature_frozen_peaks_10", tries:11, minY:10, maxY:50, rarity:11 },
      { feature:"feature_frozen_peaks_11", tries:12, minY:11, maxY:51, rarity:12 },
      { feature:"feature_frozen_peaks_12", tries:1, minY:12, maxY:52, rarity:13 },
      { feature:"feature_frozen_peaks_13", tries:2, minY:13, maxY:53, rarity:14 },
      { feature:"feature_frozen_peaks_14", tries:3, minY:14, maxY:54, rarity:15 },
      { feature:"feature_frozen_peaks_15", tries:4, minY:15, maxY:55, rarity:16 },
      { feature:"feature_frozen_peaks_16", tries:5, minY:16, maxY:56, rarity:17 },
      { feature:"feature_frozen_peaks_17", tries:6, minY:17, maxY:57, rarity:18 },
      { feature:"feature_frozen_peaks_18", tries:7, minY:18, maxY:58, rarity:19 },
      { feature:"feature_frozen_peaks_19", tries:8, minY:19, maxY:59, rarity:20 },
      { feature:"feature_frozen_peaks_20", tries:9, minY:20, maxY:60, rarity:1 },
      { feature:"feature_frozen_peaks_21", tries:10, minY:21, maxY:61, rarity:2 },
      { feature:"feature_frozen_peaks_22", tries:11, minY:22, maxY:62, rarity:3 },
      { feature:"feature_frozen_peaks_23", tries:12, minY:23, maxY:63, rarity:4 },
      { feature:"feature_frozen_peaks_24", tries:1, minY:24, maxY:64, rarity:5 },
      { feature:"feature_frozen_peaks_25", tries:2, minY:25, maxY:65, rarity:6 },
      { feature:"feature_frozen_peaks_26", tries:3, minY:26, maxY:66, rarity:7 },
      { feature:"feature_frozen_peaks_27", tries:4, minY:27, maxY:67, rarity:8 },
      { feature:"feature_frozen_peaks_28", tries:5, minY:28, maxY:68, rarity:9 },
      { feature:"feature_frozen_peaks_29", tries:6, minY:29, maxY:69, rarity:10 },
      { feature:"feature_frozen_peaks_30", tries:7, minY:30, maxY:70, rarity:11 },
      { feature:"feature_frozen_peaks_31", tries:8, minY:31, maxY:71, rarity:12 },
      { feature:"feature_frozen_peaks_32", tries:9, minY:32, maxY:72, rarity:13 },
      { feature:"feature_frozen_peaks_33", tries:10, minY:33, maxY:73, rarity:14 },
      { feature:"feature_frozen_peaks_34", tries:11, minY:34, maxY:74, rarity:15 },
      { feature:"feature_frozen_peaks_35", tries:12, minY:35, maxY:75, rarity:16 },
      { feature:"feature_frozen_peaks_36", tries:1, minY:36, maxY:76, rarity:17 },
      { feature:"feature_frozen_peaks_37", tries:2, minY:37, maxY:77, rarity:18 },
      { feature:"feature_frozen_peaks_38", tries:3, minY:38, maxY:78, rarity:19 },
      { feature:"feature_frozen_peaks_39", tries:4, minY:39, maxY:79, rarity:20 },
    ],
    spawns: {
      monster: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      ambient: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      underground_water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      axolotls: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      misc: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
    }
  },
  jagged_peaks: {
    surface: "grass", temperature: 0.42, downfall: 0.51,
    features: [
      { feature:"feature_jagged_peaks_0", tries:1, minY:0, maxY:40, rarity:1 },
      { feature:"feature_jagged_peaks_1", tries:2, minY:1, maxY:41, rarity:2 },
      { feature:"feature_jagged_peaks_2", tries:3, minY:2, maxY:42, rarity:3 },
      { feature:"feature_jagged_peaks_3", tries:4, minY:3, maxY:43, rarity:4 },
      { feature:"feature_jagged_peaks_4", tries:5, minY:4, maxY:44, rarity:5 },
      { feature:"feature_jagged_peaks_5", tries:6, minY:5, maxY:45, rarity:6 },
      { feature:"feature_jagged_peaks_6", tries:7, minY:6, maxY:46, rarity:7 },
      { feature:"feature_jagged_peaks_7", tries:8, minY:7, maxY:47, rarity:8 },
      { feature:"feature_jagged_peaks_8", tries:9, minY:8, maxY:48, rarity:9 },
      { feature:"feature_jagged_peaks_9", tries:10, minY:9, maxY:49, rarity:10 },
      { feature:"feature_jagged_peaks_10", tries:11, minY:10, maxY:50, rarity:11 },
      { feature:"feature_jagged_peaks_11", tries:12, minY:11, maxY:51, rarity:12 },
      { feature:"feature_jagged_peaks_12", tries:1, minY:12, maxY:52, rarity:13 },
      { feature:"feature_jagged_peaks_13", tries:2, minY:13, maxY:53, rarity:14 },
      { feature:"feature_jagged_peaks_14", tries:3, minY:14, maxY:54, rarity:15 },
      { feature:"feature_jagged_peaks_15", tries:4, minY:15, maxY:55, rarity:16 },
      { feature:"feature_jagged_peaks_16", tries:5, minY:16, maxY:56, rarity:17 },
      { feature:"feature_jagged_peaks_17", tries:6, minY:17, maxY:57, rarity:18 },
      { feature:"feature_jagged_peaks_18", tries:7, minY:18, maxY:58, rarity:19 },
      { feature:"feature_jagged_peaks_19", tries:8, minY:19, maxY:59, rarity:20 },
      { feature:"feature_jagged_peaks_20", tries:9, minY:20, maxY:60, rarity:1 },
      { feature:"feature_jagged_peaks_21", tries:10, minY:21, maxY:61, rarity:2 },
      { feature:"feature_jagged_peaks_22", tries:11, minY:22, maxY:62, rarity:3 },
      { feature:"feature_jagged_peaks_23", tries:12, minY:23, maxY:63, rarity:4 },
      { feature:"feature_jagged_peaks_24", tries:1, minY:24, maxY:64, rarity:5 },
      { feature:"feature_jagged_peaks_25", tries:2, minY:25, maxY:65, rarity:6 },
      { feature:"feature_jagged_peaks_26", tries:3, minY:26, maxY:66, rarity:7 },
      { feature:"feature_jagged_peaks_27", tries:4, minY:27, maxY:67, rarity:8 },
      { feature:"feature_jagged_peaks_28", tries:5, minY:28, maxY:68, rarity:9 },
      { feature:"feature_jagged_peaks_29", tries:6, minY:29, maxY:69, rarity:10 },
      { feature:"feature_jagged_peaks_30", tries:7, minY:30, maxY:70, rarity:11 },
      { feature:"feature_jagged_peaks_31", tries:8, minY:31, maxY:71, rarity:12 },
      { feature:"feature_jagged_peaks_32", tries:9, minY:32, maxY:72, rarity:13 },
      { feature:"feature_jagged_peaks_33", tries:10, minY:33, maxY:73, rarity:14 },
      { feature:"feature_jagged_peaks_34", tries:11, minY:34, maxY:74, rarity:15 },
      { feature:"feature_jagged_peaks_35", tries:12, minY:35, maxY:75, rarity:16 },
      { feature:"feature_jagged_peaks_36", tries:1, minY:36, maxY:76, rarity:17 },
      { feature:"feature_jagged_peaks_37", tries:2, minY:37, maxY:77, rarity:18 },
      { feature:"feature_jagged_peaks_38", tries:3, minY:38, maxY:78, rarity:19 },
      { feature:"feature_jagged_peaks_39", tries:4, minY:39, maxY:79, rarity:20 },
    ],
    spawns: {
      monster: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      ambient: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      underground_water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      axolotls: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      misc: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
    }
  },
  stony_peaks: {
    surface: "grass", temperature: 0.76, downfall: 0.59,
    features: [
      { feature:"feature_stony_peaks_0", tries:1, minY:0, maxY:40, rarity:1 },
      { feature:"feature_stony_peaks_1", tries:2, minY:1, maxY:41, rarity:2 },
      { feature:"feature_stony_peaks_2", tries:3, minY:2, maxY:42, rarity:3 },
      { feature:"feature_stony_peaks_3", tries:4, minY:3, maxY:43, rarity:4 },
      { feature:"feature_stony_peaks_4", tries:5, minY:4, maxY:44, rarity:5 },
      { feature:"feature_stony_peaks_5", tries:6, minY:5, maxY:45, rarity:6 },
      { feature:"feature_stony_peaks_6", tries:7, minY:6, maxY:46, rarity:7 },
      { feature:"feature_stony_peaks_7", tries:8, minY:7, maxY:47, rarity:8 },
      { feature:"feature_stony_peaks_8", tries:9, minY:8, maxY:48, rarity:9 },
      { feature:"feature_stony_peaks_9", tries:10, minY:9, maxY:49, rarity:10 },
      { feature:"feature_stony_peaks_10", tries:11, minY:10, maxY:50, rarity:11 },
      { feature:"feature_stony_peaks_11", tries:12, minY:11, maxY:51, rarity:12 },
      { feature:"feature_stony_peaks_12", tries:1, minY:12, maxY:52, rarity:13 },
      { feature:"feature_stony_peaks_13", tries:2, minY:13, maxY:53, rarity:14 },
      { feature:"feature_stony_peaks_14", tries:3, minY:14, maxY:54, rarity:15 },
      { feature:"feature_stony_peaks_15", tries:4, minY:15, maxY:55, rarity:16 },
      { feature:"feature_stony_peaks_16", tries:5, minY:16, maxY:56, rarity:17 },
      { feature:"feature_stony_peaks_17", tries:6, minY:17, maxY:57, rarity:18 },
      { feature:"feature_stony_peaks_18", tries:7, minY:18, maxY:58, rarity:19 },
      { feature:"feature_stony_peaks_19", tries:8, minY:19, maxY:59, rarity:20 },
      { feature:"feature_stony_peaks_20", tries:9, minY:20, maxY:60, rarity:1 },
      { feature:"feature_stony_peaks_21", tries:10, minY:21, maxY:61, rarity:2 },
      { feature:"feature_stony_peaks_22", tries:11, minY:22, maxY:62, rarity:3 },
      { feature:"feature_stony_peaks_23", tries:12, minY:23, maxY:63, rarity:4 },
      { feature:"feature_stony_peaks_24", tries:1, minY:24, maxY:64, rarity:5 },
      { feature:"feature_stony_peaks_25", tries:2, minY:25, maxY:65, rarity:6 },
      { feature:"feature_stony_peaks_26", tries:3, minY:26, maxY:66, rarity:7 },
      { feature:"feature_stony_peaks_27", tries:4, minY:27, maxY:67, rarity:8 },
      { feature:"feature_stony_peaks_28", tries:5, minY:28, maxY:68, rarity:9 },
      { feature:"feature_stony_peaks_29", tries:6, minY:29, maxY:69, rarity:10 },
      { feature:"feature_stony_peaks_30", tries:7, minY:30, maxY:70, rarity:11 },
      { feature:"feature_stony_peaks_31", tries:8, minY:31, maxY:71, rarity:12 },
      { feature:"feature_stony_peaks_32", tries:9, minY:32, maxY:72, rarity:13 },
      { feature:"feature_stony_peaks_33", tries:10, minY:33, maxY:73, rarity:14 },
      { feature:"feature_stony_peaks_34", tries:11, minY:34, maxY:74, rarity:15 },
      { feature:"feature_stony_peaks_35", tries:12, minY:35, maxY:75, rarity:16 },
      { feature:"feature_stony_peaks_36", tries:1, minY:36, maxY:76, rarity:17 },
      { feature:"feature_stony_peaks_37", tries:2, minY:37, maxY:77, rarity:18 },
      { feature:"feature_stony_peaks_38", tries:3, minY:38, maxY:78, rarity:19 },
      { feature:"feature_stony_peaks_39", tries:4, minY:39, maxY:79, rarity:20 },
    ],
    spawns: {
      monster: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      ambient: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      underground_water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      axolotls: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      misc: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
    }
  },
  cherry_grove: {
    surface: "grass", temperature: 0.65, downfall: 0.12,
    features: [
      { feature:"feature_cherry_grove_0", tries:1, minY:0, maxY:40, rarity:1 },
      { feature:"feature_cherry_grove_1", tries:2, minY:1, maxY:41, rarity:2 },
      { feature:"feature_cherry_grove_2", tries:3, minY:2, maxY:42, rarity:3 },
      { feature:"feature_cherry_grove_3", tries:4, minY:3, maxY:43, rarity:4 },
      { feature:"feature_cherry_grove_4", tries:5, minY:4, maxY:44, rarity:5 },
      { feature:"feature_cherry_grove_5", tries:6, minY:5, maxY:45, rarity:6 },
      { feature:"feature_cherry_grove_6", tries:7, minY:6, maxY:46, rarity:7 },
      { feature:"feature_cherry_grove_7", tries:8, minY:7, maxY:47, rarity:8 },
      { feature:"feature_cherry_grove_8", tries:9, minY:8, maxY:48, rarity:9 },
      { feature:"feature_cherry_grove_9", tries:10, minY:9, maxY:49, rarity:10 },
      { feature:"feature_cherry_grove_10", tries:11, minY:10, maxY:50, rarity:11 },
      { feature:"feature_cherry_grove_11", tries:12, minY:11, maxY:51, rarity:12 },
      { feature:"feature_cherry_grove_12", tries:1, minY:12, maxY:52, rarity:13 },
      { feature:"feature_cherry_grove_13", tries:2, minY:13, maxY:53, rarity:14 },
      { feature:"feature_cherry_grove_14", tries:3, minY:14, maxY:54, rarity:15 },
      { feature:"feature_cherry_grove_15", tries:4, minY:15, maxY:55, rarity:16 },
      { feature:"feature_cherry_grove_16", tries:5, minY:16, maxY:56, rarity:17 },
      { feature:"feature_cherry_grove_17", tries:6, minY:17, maxY:57, rarity:18 },
      { feature:"feature_cherry_grove_18", tries:7, minY:18, maxY:58, rarity:19 },
      { feature:"feature_cherry_grove_19", tries:8, minY:19, maxY:59, rarity:20 },
      { feature:"feature_cherry_grove_20", tries:9, minY:20, maxY:60, rarity:1 },
      { feature:"feature_cherry_grove_21", tries:10, minY:21, maxY:61, rarity:2 },
      { feature:"feature_cherry_grove_22", tries:11, minY:22, maxY:62, rarity:3 },
      { feature:"feature_cherry_grove_23", tries:12, minY:23, maxY:63, rarity:4 },
      { feature:"feature_cherry_grove_24", tries:1, minY:24, maxY:64, rarity:5 },
      { feature:"feature_cherry_grove_25", tries:2, minY:25, maxY:65, rarity:6 },
      { feature:"feature_cherry_grove_26", tries:3, minY:26, maxY:66, rarity:7 },
      { feature:"feature_cherry_grove_27", tries:4, minY:27, maxY:67, rarity:8 },
      { feature:"feature_cherry_grove_28", tries:5, minY:28, maxY:68, rarity:9 },
      { feature:"feature_cherry_grove_29", tries:6, minY:29, maxY:69, rarity:10 },
      { feature:"feature_cherry_grove_30", tries:7, minY:30, maxY:70, rarity:11 },
      { feature:"feature_cherry_grove_31", tries:8, minY:31, maxY:71, rarity:12 },
      { feature:"feature_cherry_grove_32", tries:9, minY:32, maxY:72, rarity:13 },
      { feature:"feature_cherry_grove_33", tries:10, minY:33, maxY:73, rarity:14 },
      { feature:"feature_cherry_grove_34", tries:11, minY:34, maxY:74, rarity:15 },
      { feature:"feature_cherry_grove_35", tries:12, minY:35, maxY:75, rarity:16 },
      { feature:"feature_cherry_grove_36", tries:1, minY:36, maxY:76, rarity:17 },
      { feature:"feature_cherry_grove_37", tries:2, minY:37, maxY:77, rarity:18 },
      { feature:"feature_cherry_grove_38", tries:3, minY:38, maxY:78, rarity:19 },
      { feature:"feature_cherry_grove_39", tries:4, minY:39, maxY:79, rarity:20 },
    ],
    spawns: {
      monster: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      ambient: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      underground_water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      axolotls: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      misc: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
    }
  },
  mangrove_swamp: {
    surface: "grass", temperature: 0.05, downfall: 0.44,
    features: [
      { feature:"feature_mangrove_swamp_0", tries:1, minY:0, maxY:40, rarity:1 },
      { feature:"feature_mangrove_swamp_1", tries:2, minY:1, maxY:41, rarity:2 },
      { feature:"feature_mangrove_swamp_2", tries:3, minY:2, maxY:42, rarity:3 },
      { feature:"feature_mangrove_swamp_3", tries:4, minY:3, maxY:43, rarity:4 },
      { feature:"feature_mangrove_swamp_4", tries:5, minY:4, maxY:44, rarity:5 },
      { feature:"feature_mangrove_swamp_5", tries:6, minY:5, maxY:45, rarity:6 },
      { feature:"feature_mangrove_swamp_6", tries:7, minY:6, maxY:46, rarity:7 },
      { feature:"feature_mangrove_swamp_7", tries:8, minY:7, maxY:47, rarity:8 },
      { feature:"feature_mangrove_swamp_8", tries:9, minY:8, maxY:48, rarity:9 },
      { feature:"feature_mangrove_swamp_9", tries:10, minY:9, maxY:49, rarity:10 },
      { feature:"feature_mangrove_swamp_10", tries:11, minY:10, maxY:50, rarity:11 },
      { feature:"feature_mangrove_swamp_11", tries:12, minY:11, maxY:51, rarity:12 },
      { feature:"feature_mangrove_swamp_12", tries:1, minY:12, maxY:52, rarity:13 },
      { feature:"feature_mangrove_swamp_13", tries:2, minY:13, maxY:53, rarity:14 },
      { feature:"feature_mangrove_swamp_14", tries:3, minY:14, maxY:54, rarity:15 },
      { feature:"feature_mangrove_swamp_15", tries:4, minY:15, maxY:55, rarity:16 },
      { feature:"feature_mangrove_swamp_16", tries:5, minY:16, maxY:56, rarity:17 },
      { feature:"feature_mangrove_swamp_17", tries:6, minY:17, maxY:57, rarity:18 },
      { feature:"feature_mangrove_swamp_18", tries:7, minY:18, maxY:58, rarity:19 },
      { feature:"feature_mangrove_swamp_19", tries:8, minY:19, maxY:59, rarity:20 },
      { feature:"feature_mangrove_swamp_20", tries:9, minY:20, maxY:60, rarity:1 },
      { feature:"feature_mangrove_swamp_21", tries:10, minY:21, maxY:61, rarity:2 },
      { feature:"feature_mangrove_swamp_22", tries:11, minY:22, maxY:62, rarity:3 },
      { feature:"feature_mangrove_swamp_23", tries:12, minY:23, maxY:63, rarity:4 },
      { feature:"feature_mangrove_swamp_24", tries:1, minY:24, maxY:64, rarity:5 },
      { feature:"feature_mangrove_swamp_25", tries:2, minY:25, maxY:65, rarity:6 },
      { feature:"feature_mangrove_swamp_26", tries:3, minY:26, maxY:66, rarity:7 },
      { feature:"feature_mangrove_swamp_27", tries:4, minY:27, maxY:67, rarity:8 },
      { feature:"feature_mangrove_swamp_28", tries:5, minY:28, maxY:68, rarity:9 },
      { feature:"feature_mangrove_swamp_29", tries:6, minY:29, maxY:69, rarity:10 },
      { feature:"feature_mangrove_swamp_30", tries:7, minY:30, maxY:70, rarity:11 },
      { feature:"feature_mangrove_swamp_31", tries:8, minY:31, maxY:71, rarity:12 },
      { feature:"feature_mangrove_swamp_32", tries:9, minY:32, maxY:72, rarity:13 },
      { feature:"feature_mangrove_swamp_33", tries:10, minY:33, maxY:73, rarity:14 },
      { feature:"feature_mangrove_swamp_34", tries:11, minY:34, maxY:74, rarity:15 },
      { feature:"feature_mangrove_swamp_35", tries:12, minY:35, maxY:75, rarity:16 },
      { feature:"feature_mangrove_swamp_36", tries:1, minY:36, maxY:76, rarity:17 },
      { feature:"feature_mangrove_swamp_37", tries:2, minY:37, maxY:77, rarity:18 },
      { feature:"feature_mangrove_swamp_38", tries:3, minY:38, maxY:78, rarity:19 },
      { feature:"feature_mangrove_swamp_39", tries:4, minY:39, maxY:79, rarity:20 },
    ],
    spawns: {
      monster: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      ambient: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      underground_water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      axolotls: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      misc: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
    }
  },
  deep_dark: {
    surface: "grass", temperature: 0.48, downfall: 0.33,
    features: [
      { feature:"feature_deep_dark_0", tries:1, minY:0, maxY:40, rarity:1 },
      { feature:"feature_deep_dark_1", tries:2, minY:1, maxY:41, rarity:2 },
      { feature:"feature_deep_dark_2", tries:3, minY:2, maxY:42, rarity:3 },
      { feature:"feature_deep_dark_3", tries:4, minY:3, maxY:43, rarity:4 },
      { feature:"feature_deep_dark_4", tries:5, minY:4, maxY:44, rarity:5 },
      { feature:"feature_deep_dark_5", tries:6, minY:5, maxY:45, rarity:6 },
      { feature:"feature_deep_dark_6", tries:7, minY:6, maxY:46, rarity:7 },
      { feature:"feature_deep_dark_7", tries:8, minY:7, maxY:47, rarity:8 },
      { feature:"feature_deep_dark_8", tries:9, minY:8, maxY:48, rarity:9 },
      { feature:"feature_deep_dark_9", tries:10, minY:9, maxY:49, rarity:10 },
      { feature:"feature_deep_dark_10", tries:11, minY:10, maxY:50, rarity:11 },
      { feature:"feature_deep_dark_11", tries:12, minY:11, maxY:51, rarity:12 },
      { feature:"feature_deep_dark_12", tries:1, minY:12, maxY:52, rarity:13 },
      { feature:"feature_deep_dark_13", tries:2, minY:13, maxY:53, rarity:14 },
      { feature:"feature_deep_dark_14", tries:3, minY:14, maxY:54, rarity:15 },
      { feature:"feature_deep_dark_15", tries:4, minY:15, maxY:55, rarity:16 },
      { feature:"feature_deep_dark_16", tries:5, minY:16, maxY:56, rarity:17 },
      { feature:"feature_deep_dark_17", tries:6, minY:17, maxY:57, rarity:18 },
      { feature:"feature_deep_dark_18", tries:7, minY:18, maxY:58, rarity:19 },
      { feature:"feature_deep_dark_19", tries:8, minY:19, maxY:59, rarity:20 },
      { feature:"feature_deep_dark_20", tries:9, minY:20, maxY:60, rarity:1 },
      { feature:"feature_deep_dark_21", tries:10, minY:21, maxY:61, rarity:2 },
      { feature:"feature_deep_dark_22", tries:11, minY:22, maxY:62, rarity:3 },
      { feature:"feature_deep_dark_23", tries:12, minY:23, maxY:63, rarity:4 },
      { feature:"feature_deep_dark_24", tries:1, minY:24, maxY:64, rarity:5 },
      { feature:"feature_deep_dark_25", tries:2, minY:25, maxY:65, rarity:6 },
      { feature:"feature_deep_dark_26", tries:3, minY:26, maxY:66, rarity:7 },
      { feature:"feature_deep_dark_27", tries:4, minY:27, maxY:67, rarity:8 },
      { feature:"feature_deep_dark_28", tries:5, minY:28, maxY:68, rarity:9 },
      { feature:"feature_deep_dark_29", tries:6, minY:29, maxY:69, rarity:10 },
      { feature:"feature_deep_dark_30", tries:7, minY:30, maxY:70, rarity:11 },
      { feature:"feature_deep_dark_31", tries:8, minY:31, maxY:71, rarity:12 },
      { feature:"feature_deep_dark_32", tries:9, minY:32, maxY:72, rarity:13 },
      { feature:"feature_deep_dark_33", tries:10, minY:33, maxY:73, rarity:14 },
      { feature:"feature_deep_dark_34", tries:11, minY:34, maxY:74, rarity:15 },
      { feature:"feature_deep_dark_35", tries:12, minY:35, maxY:75, rarity:16 },
      { feature:"feature_deep_dark_36", tries:1, minY:36, maxY:76, rarity:17 },
      { feature:"feature_deep_dark_37", tries:2, minY:37, maxY:77, rarity:18 },
      { feature:"feature_deep_dark_38", tries:3, minY:38, maxY:78, rarity:19 },
      { feature:"feature_deep_dark_39", tries:4, minY:39, maxY:79, rarity:20 },
    ],
    spawns: {
      monster: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      ambient: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      underground_water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      axolotls: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      misc: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
    }
  },
  lush_caves: {
    surface: "grass", temperature: 0.80, downfall: 0.10,
    features: [
      { feature:"feature_lush_caves_0", tries:1, minY:0, maxY:40, rarity:1 },
      { feature:"feature_lush_caves_1", tries:2, minY:1, maxY:41, rarity:2 },
      { feature:"feature_lush_caves_2", tries:3, minY:2, maxY:42, rarity:3 },
      { feature:"feature_lush_caves_3", tries:4, minY:3, maxY:43, rarity:4 },
      { feature:"feature_lush_caves_4", tries:5, minY:4, maxY:44, rarity:5 },
      { feature:"feature_lush_caves_5", tries:6, minY:5, maxY:45, rarity:6 },
      { feature:"feature_lush_caves_6", tries:7, minY:6, maxY:46, rarity:7 },
      { feature:"feature_lush_caves_7", tries:8, minY:7, maxY:47, rarity:8 },
      { feature:"feature_lush_caves_8", tries:9, minY:8, maxY:48, rarity:9 },
      { feature:"feature_lush_caves_9", tries:10, minY:9, maxY:49, rarity:10 },
      { feature:"feature_lush_caves_10", tries:11, minY:10, maxY:50, rarity:11 },
      { feature:"feature_lush_caves_11", tries:12, minY:11, maxY:51, rarity:12 },
      { feature:"feature_lush_caves_12", tries:1, minY:12, maxY:52, rarity:13 },
      { feature:"feature_lush_caves_13", tries:2, minY:13, maxY:53, rarity:14 },
      { feature:"feature_lush_caves_14", tries:3, minY:14, maxY:54, rarity:15 },
      { feature:"feature_lush_caves_15", tries:4, minY:15, maxY:55, rarity:16 },
      { feature:"feature_lush_caves_16", tries:5, minY:16, maxY:56, rarity:17 },
      { feature:"feature_lush_caves_17", tries:6, minY:17, maxY:57, rarity:18 },
      { feature:"feature_lush_caves_18", tries:7, minY:18, maxY:58, rarity:19 },
      { feature:"feature_lush_caves_19", tries:8, minY:19, maxY:59, rarity:20 },
      { feature:"feature_lush_caves_20", tries:9, minY:20, maxY:60, rarity:1 },
      { feature:"feature_lush_caves_21", tries:10, minY:21, maxY:61, rarity:2 },
      { feature:"feature_lush_caves_22", tries:11, minY:22, maxY:62, rarity:3 },
      { feature:"feature_lush_caves_23", tries:12, minY:23, maxY:63, rarity:4 },
      { feature:"feature_lush_caves_24", tries:1, minY:24, maxY:64, rarity:5 },
      { feature:"feature_lush_caves_25", tries:2, minY:25, maxY:65, rarity:6 },
      { feature:"feature_lush_caves_26", tries:3, minY:26, maxY:66, rarity:7 },
      { feature:"feature_lush_caves_27", tries:4, minY:27, maxY:67, rarity:8 },
      { feature:"feature_lush_caves_28", tries:5, minY:28, maxY:68, rarity:9 },
      { feature:"feature_lush_caves_29", tries:6, minY:29, maxY:69, rarity:10 },
      { feature:"feature_lush_caves_30", tries:7, minY:30, maxY:70, rarity:11 },
      { feature:"feature_lush_caves_31", tries:8, minY:31, maxY:71, rarity:12 },
      { feature:"feature_lush_caves_32", tries:9, minY:32, maxY:72, rarity:13 },
      { feature:"feature_lush_caves_33", tries:10, minY:33, maxY:73, rarity:14 },
      { feature:"feature_lush_caves_34", tries:11, minY:34, maxY:74, rarity:15 },
      { feature:"feature_lush_caves_35", tries:12, minY:35, maxY:75, rarity:16 },
      { feature:"feature_lush_caves_36", tries:1, minY:36, maxY:76, rarity:17 },
      { feature:"feature_lush_caves_37", tries:2, minY:37, maxY:77, rarity:18 },
      { feature:"feature_lush_caves_38", tries:3, minY:38, maxY:78, rarity:19 },
      { feature:"feature_lush_caves_39", tries:4, minY:39, maxY:79, rarity:20 },
    ],
    spawns: {
      monster: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      ambient: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      underground_water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      axolotls: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      misc: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
    }
  },
  dripstone_caves: {
    surface: "grass", temperature: 0.03, downfall: 0.57,
    features: [
      { feature:"feature_dripstone_caves_0", tries:1, minY:0, maxY:40, rarity:1 },
      { feature:"feature_dripstone_caves_1", tries:2, minY:1, maxY:41, rarity:2 },
      { feature:"feature_dripstone_caves_2", tries:3, minY:2, maxY:42, rarity:3 },
      { feature:"feature_dripstone_caves_3", tries:4, minY:3, maxY:43, rarity:4 },
      { feature:"feature_dripstone_caves_4", tries:5, minY:4, maxY:44, rarity:5 },
      { feature:"feature_dripstone_caves_5", tries:6, minY:5, maxY:45, rarity:6 },
      { feature:"feature_dripstone_caves_6", tries:7, minY:6, maxY:46, rarity:7 },
      { feature:"feature_dripstone_caves_7", tries:8, minY:7, maxY:47, rarity:8 },
      { feature:"feature_dripstone_caves_8", tries:9, minY:8, maxY:48, rarity:9 },
      { feature:"feature_dripstone_caves_9", tries:10, minY:9, maxY:49, rarity:10 },
      { feature:"feature_dripstone_caves_10", tries:11, minY:10, maxY:50, rarity:11 },
      { feature:"feature_dripstone_caves_11", tries:12, minY:11, maxY:51, rarity:12 },
      { feature:"feature_dripstone_caves_12", tries:1, minY:12, maxY:52, rarity:13 },
      { feature:"feature_dripstone_caves_13", tries:2, minY:13, maxY:53, rarity:14 },
      { feature:"feature_dripstone_caves_14", tries:3, minY:14, maxY:54, rarity:15 },
      { feature:"feature_dripstone_caves_15", tries:4, minY:15, maxY:55, rarity:16 },
      { feature:"feature_dripstone_caves_16", tries:5, minY:16, maxY:56, rarity:17 },
      { feature:"feature_dripstone_caves_17", tries:6, minY:17, maxY:57, rarity:18 },
      { feature:"feature_dripstone_caves_18", tries:7, minY:18, maxY:58, rarity:19 },
      { feature:"feature_dripstone_caves_19", tries:8, minY:19, maxY:59, rarity:20 },
      { feature:"feature_dripstone_caves_20", tries:9, minY:20, maxY:60, rarity:1 },
      { feature:"feature_dripstone_caves_21", tries:10, minY:21, maxY:61, rarity:2 },
      { feature:"feature_dripstone_caves_22", tries:11, minY:22, maxY:62, rarity:3 },
      { feature:"feature_dripstone_caves_23", tries:12, minY:23, maxY:63, rarity:4 },
      { feature:"feature_dripstone_caves_24", tries:1, minY:24, maxY:64, rarity:5 },
      { feature:"feature_dripstone_caves_25", tries:2, minY:25, maxY:65, rarity:6 },
      { feature:"feature_dripstone_caves_26", tries:3, minY:26, maxY:66, rarity:7 },
      { feature:"feature_dripstone_caves_27", tries:4, minY:27, maxY:67, rarity:8 },
      { feature:"feature_dripstone_caves_28", tries:5, minY:28, maxY:68, rarity:9 },
      { feature:"feature_dripstone_caves_29", tries:6, minY:29, maxY:69, rarity:10 },
      { feature:"feature_dripstone_caves_30", tries:7, minY:30, maxY:70, rarity:11 },
      { feature:"feature_dripstone_caves_31", tries:8, minY:31, maxY:71, rarity:12 },
      { feature:"feature_dripstone_caves_32", tries:9, minY:32, maxY:72, rarity:13 },
      { feature:"feature_dripstone_caves_33", tries:10, minY:33, maxY:73, rarity:14 },
      { feature:"feature_dripstone_caves_34", tries:11, minY:34, maxY:74, rarity:15 },
      { feature:"feature_dripstone_caves_35", tries:12, minY:35, maxY:75, rarity:16 },
      { feature:"feature_dripstone_caves_36", tries:1, minY:36, maxY:76, rarity:17 },
      { feature:"feature_dripstone_caves_37", tries:2, minY:37, maxY:77, rarity:18 },
      { feature:"feature_dripstone_caves_38", tries:3, minY:38, maxY:78, rarity:19 },
      { feature:"feature_dripstone_caves_39", tries:4, minY:39, maxY:79, rarity:20 },
    ],
    spawns: {
      monster: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      ambient: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      underground_water_creature: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      axolotls: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
      misc: [
        { type:"mob_0", weight:1, min:1, max:1 },
        { type:"mob_1", weight:3, min:1, max:2 },
        { type:"mob_2", weight:5, min:1, max:3 },
        { type:"mob_3", weight:7, min:1, max:4 },
        { type:"mob_4", weight:9, min:1, max:1 },
        { type:"mob_5", weight:11, min:1, max:2 },
        { type:"mob_6", weight:13, min:1, max:3 },
        { type:"mob_7", weight:15, min:1, max:4 },
      ],
    }
  },
};
// biome noise sampler 0: continentalness=-1.00 erosion=-1.00 weirdness=-1.00
// biome noise sampler 1: continentalness=-0.90 erosion=-0.90 weirdness=-0.90
// biome noise sampler 2: continentalness=-0.80 erosion=-0.80 weirdness=-0.80
// biome noise sampler 3: continentalness=-0.70 erosion=-0.70 weirdness=-0.70
// biome noise sampler 4: continentalness=-0.60 erosion=-0.60 weirdness=-0.60
// biome noise sampler 5: continentalness=-0.50 erosion=-0.50 weirdness=-0.50
// biome noise sampler 6: continentalness=-0.40 erosion=-0.40 weirdness=-0.40
// biome noise sampler 7: continentalness=-0.30 erosion=-0.30 weirdness=-0.30
// biome noise sampler 8: continentalness=-0.20 erosion=-0.20 weirdness=-0.20
// biome noise sampler 9: continentalness=-0.10 erosion=-0.10 weirdness=-0.10
// biome noise sampler 10: continentalness=0.00 erosion=0.00 weirdness=0.00
// biome noise sampler 11: continentalness=0.10 erosion=0.10 weirdness=0.10
// biome noise sampler 12: continentalness=0.20 erosion=0.20 weirdness=0.20
// biome noise sampler 13: continentalness=0.30 erosion=0.30 weirdness=0.30
// biome noise sampler 14: continentalness=0.40 erosion=0.40 weirdness=0.40
// biome noise sampler 15: continentalness=0.50 erosion=-1.00 weirdness=0.50
// biome noise sampler 16: continentalness=0.60 erosion=-0.90 weirdness=0.60
// biome noise sampler 17: continentalness=0.70 erosion=-0.80 weirdness=-1.00
// biome noise sampler 18: continentalness=0.80 erosion=-0.70 weirdness=-0.90
// biome noise sampler 19: continentalness=0.90 erosion=-0.60 weirdness=-0.80
// biome noise sampler 20: continentalness=-1.00 erosion=-0.50 weirdness=-0.70
// biome noise sampler 21: continentalness=-0.90 erosion=-0.40 weirdness=-0.60
// biome noise sampler 22: continentalness=-0.80 erosion=-0.30 weirdness=-0.50
// biome noise sampler 23: continentalness=-0.70 erosion=-0.20 weirdness=-0.40
// biome noise sampler 24: continentalness=-0.60 erosion=-0.10 weirdness=-0.30
// biome noise sampler 25: continentalness=-0.50 erosion=0.00 weirdness=-0.20
// biome noise sampler 26: continentalness=-0.40 erosion=0.10 weirdness=-0.10
// biome noise sampler 27: continentalness=-0.30 erosion=0.20 weirdness=0.00
// biome noise sampler 28: continentalness=-0.20 erosion=0.30 weirdness=0.10
// biome noise sampler 29: continentalness=-0.10 erosion=0.40 weirdness=0.20
// biome noise sampler 30: continentalness=0.00 erosion=-1.00 weirdness=0.30
// biome noise sampler 31: continentalness=0.10 erosion=-0.90 weirdness=0.40
// biome noise sampler 32: continentalness=0.20 erosion=-0.80 weirdness=0.50
// biome noise sampler 33: continentalness=0.30 erosion=-0.70 weirdness=0.60
// biome noise sampler 34: continentalness=0.40 erosion=-0.60 weirdness=-1.00
// biome noise sampler 35: continentalness=0.50 erosion=-0.50 weirdness=-0.90
// biome noise sampler 36: continentalness=0.60 erosion=-0.40 weirdness=-0.80
// biome noise sampler 37: continentalness=0.70 erosion=-0.30 weirdness=-0.70
// biome noise sampler 38: continentalness=0.80 erosion=-0.20 weirdness=-0.60
// biome noise sampler 39: continentalness=0.90 erosion=-0.10 weirdness=-0.50
// biome noise sampler 40: continentalness=-1.00 erosion=0.00 weirdness=-0.40
// biome noise sampler 41: continentalness=-0.90 erosion=0.10 weirdness=-0.30
// biome noise sampler 42: continentalness=-0.80 erosion=0.20 weirdness=-0.20
// biome noise sampler 43: continentalness=-0.70 erosion=0.30 weirdness=-0.10
// biome noise sampler 44: continentalness=-0.60 erosion=0.40 weirdness=0.00
// biome noise sampler 45: continentalness=-0.50 erosion=-1.00 weirdness=0.10
// biome noise sampler 46: continentalness=-0.40 erosion=-0.90 weirdness=0.20
// biome noise sampler 47: continentalness=-0.30 erosion=-0.80 weirdness=0.30
// biome noise sampler 48: continentalness=-0.20 erosion=-0.70 weirdness=0.40
// biome noise sampler 49: continentalness=-0.10 erosion=-0.60 weirdness=0.50
// biome noise sampler 50: continentalness=0.00 erosion=-0.50 weirdness=0.60
// biome noise sampler 51: continentalness=0.10 erosion=-0.40 weirdness=-1.00
// biome noise sampler 52: continentalness=0.20 erosion=-0.30 weirdness=-0.90
// biome noise sampler 53: continentalness=0.30 erosion=-0.20 weirdness=-0.80
// biome noise sampler 54: continentalness=0.40 erosion=-0.10 weirdness=-0.70
// biome noise sampler 55: continentalness=0.50 erosion=0.00 weirdness=-0.60
// biome noise sampler 56: continentalness=0.60 erosion=0.10 weirdness=-0.50
// biome noise sampler 57: continentalness=0.70 erosion=0.20 weirdness=-0.40
// biome noise sampler 58: continentalness=0.80 erosion=0.30 weirdness=-0.30
// biome noise sampler 59: continentalness=0.90 erosion=0.40 weirdness=-0.20
// biome noise sampler 60: continentalness=-1.00 erosion=-1.00 weirdness=-0.10
// biome noise sampler 61: continentalness=-0.90 erosion=-0.90 weirdness=0.00
// biome noise sampler 62: continentalness=-0.80 erosion=-0.80 weirdness=0.10
// biome noise sampler 63: continentalness=-0.70 erosion=-0.70 weirdness=0.20
// biome noise sampler 64: continentalness=-0.60 erosion=-0.60 weirdness=0.30
// biome noise sampler 65: continentalness=-0.50 erosion=-0.50 weirdness=0.40
// biome noise sampler 66: continentalness=-0.40 erosion=-0.40 weirdness=0.50
// biome noise sampler 67: continentalness=-0.30 erosion=-0.30 weirdness=0.60
// biome noise sampler 68: continentalness=-0.20 erosion=-0.20 weirdness=-1.00
// biome noise sampler 69: continentalness=-0.10 erosion=-0.10 weirdness=-0.90
// biome noise sampler 70: continentalness=0.00 erosion=0.00 weirdness=-0.80
// biome noise sampler 71: continentalness=0.10 erosion=0.10 weirdness=-0.70
// biome noise sampler 72: continentalness=0.20 erosion=0.20 weirdness=-0.60
// biome noise sampler 73: continentalness=0.30 erosion=0.30 weirdness=-0.50
// biome noise sampler 74: continentalness=0.40 erosion=0.40 weirdness=-0.40
// biome noise sampler 75: continentalness=0.50 erosion=-1.00 weirdness=-0.30
// biome noise sampler 76: continentalness=0.60 erosion=-0.90 weirdness=-0.20
// biome noise sampler 77: continentalness=0.70 erosion=-0.80 weirdness=-0.10
// biome noise sampler 78: continentalness=0.80 erosion=-0.70 weirdness=0.00
// biome noise sampler 79: continentalness=0.90 erosion=-0.60 weirdness=0.10
// biome noise sampler 80: continentalness=-1.00 erosion=-0.50 weirdness=0.20
// biome noise sampler 81: continentalness=-0.90 erosion=-0.40 weirdness=0.30
// biome noise sampler 82: continentalness=-0.80 erosion=-0.30 weirdness=0.40
// biome noise sampler 83: continentalness=-0.70 erosion=-0.20 weirdness=0.50
// biome noise sampler 84: continentalness=-0.60 erosion=-0.10 weirdness=0.60
// biome noise sampler 85: continentalness=-0.50 erosion=0.00 weirdness=-1.00
// biome noise sampler 86: continentalness=-0.40 erosion=0.10 weirdness=-0.90
// biome noise sampler 87: continentalness=-0.30 erosion=0.20 weirdness=-0.80
// biome noise sampler 88: continentalness=-0.20 erosion=0.30 weirdness=-0.70
// biome noise sampler 89: continentalness=-0.10 erosion=0.40 weirdness=-0.60
// biome noise sampler 90: continentalness=0.00 erosion=-1.00 weirdness=-0.50
// biome noise sampler 91: continentalness=0.10 erosion=-0.90 weirdness=-0.40
// biome noise sampler 92: continentalness=0.20 erosion=-0.80 weirdness=-0.30
// biome noise sampler 93: continentalness=0.30 erosion=-0.70 weirdness=-0.20
// biome noise sampler 94: continentalness=0.40 erosion=-0.60 weirdness=-0.10
// biome noise sampler 95: continentalness=0.50 erosion=-0.50 weirdness=0.00
// biome noise sampler 96: continentalness=0.60 erosion=-0.40 weirdness=0.10
// biome noise sampler 97: continentalness=0.70 erosion=-0.30 weirdness=0.20
// biome noise sampler 98: continentalness=0.80 erosion=-0.20 weirdness=0.30
// biome noise sampler 99: continentalness=0.90 erosion=-0.10 weirdness=0.40
// biome noise sampler 100: continentalness=-1.00 erosion=0.00 weirdness=0.50
// biome noise sampler 101: continentalness=-0.90 erosion=0.10 weirdness=0.60
// biome noise sampler 102: continentalness=-0.80 erosion=0.20 weirdness=-1.00
// biome noise sampler 103: continentalness=-0.70 erosion=0.30 weirdness=-0.90
// biome noise sampler 104: continentalness=-0.60 erosion=0.40 weirdness=-0.80
// biome noise sampler 105: continentalness=-0.50 erosion=-1.00 weirdness=-0.70
// biome noise sampler 106: continentalness=-0.40 erosion=-0.90 weirdness=-0.60
// biome noise sampler 107: continentalness=-0.30 erosion=-0.80 weirdness=-0.50
// biome noise sampler 108: continentalness=-0.20 erosion=-0.70 weirdness=-0.40
// biome noise sampler 109: continentalness=-0.10 erosion=-0.60 weirdness=-0.30
// biome noise sampler 110: continentalness=0.00 erosion=-0.50 weirdness=-0.20
// biome noise sampler 111: continentalness=0.10 erosion=-0.40 weirdness=-0.10
// biome noise sampler 112: continentalness=0.20 erosion=-0.30 weirdness=0.00
// biome noise sampler 113: continentalness=0.30 erosion=-0.20 weirdness=0.10
// biome noise sampler 114: continentalness=0.40 erosion=-0.10 weirdness=0.20
// biome noise sampler 115: continentalness=0.50 erosion=0.00 weirdness=0.30
// biome noise sampler 116: continentalness=0.60 erosion=0.10 weirdness=0.40
// biome noise sampler 117: continentalness=0.70 erosion=0.20 weirdness=0.50
// biome noise sampler 118: continentalness=0.80 erosion=0.30 weirdness=0.60
// biome noise sampler 119: continentalness=0.90 erosion=0.40 weirdness=-1.00
// biome noise sampler 120: continentalness=-1.00 erosion=-1.00 weirdness=-0.90
// biome noise sampler 121: continentalness=-0.90 erosion=-0.90 weirdness=-0.80
// biome noise sampler 122: continentalness=-0.80 erosion=-0.80 weirdness=-0.70
// biome noise sampler 123: continentalness=-0.70 erosion=-0.70 weirdness=-0.60
// biome noise sampler 124: continentalness=-0.60 erosion=-0.60 weirdness=-0.50
// biome noise sampler 125: continentalness=-0.50 erosion=-0.50 weirdness=-0.40
// biome noise sampler 126: continentalness=-0.40 erosion=-0.40 weirdness=-0.30
// biome noise sampler 127: continentalness=-0.30 erosion=-0.30 weirdness=-0.20
// biome noise sampler 128: continentalness=-0.20 erosion=-0.20 weirdness=-0.10
// biome noise sampler 129: continentalness=-0.10 erosion=-0.10 weirdness=0.00
// biome noise sampler 130: continentalness=0.00 erosion=0.00 weirdness=0.10
// biome noise sampler 131: continentalness=0.10 erosion=0.10 weirdness=0.20
// biome noise sampler 132: continentalness=0.20 erosion=0.20 weirdness=0.30
// biome noise sampler 133: continentalness=0.30 erosion=0.30 weirdness=0.40
// biome noise sampler 134: continentalness=0.40 erosion=0.40 weirdness=0.50
// biome noise sampler 135: continentalness=0.50 erosion=-1.00 weirdness=0.60
// biome noise sampler 136: continentalness=0.60 erosion=-0.90 weirdness=-1.00
// biome noise sampler 137: continentalness=0.70 erosion=-0.80 weirdness=-0.90
// biome noise sampler 138: continentalness=0.80 erosion=-0.70 weirdness=-0.80
// biome noise sampler 139: continentalness=0.90 erosion=-0.60 weirdness=-0.70
// biome noise sampler 140: continentalness=-1.00 erosion=-0.50 weirdness=-0.60
// biome noise sampler 141: continentalness=-0.90 erosion=-0.40 weirdness=-0.50
// biome noise sampler 142: continentalness=-0.80 erosion=-0.30 weirdness=-0.40
// biome noise sampler 143: continentalness=-0.70 erosion=-0.20 weirdness=-0.30
// biome noise sampler 144: continentalness=-0.60 erosion=-0.10 weirdness=-0.20
// biome noise sampler 145: continentalness=-0.50 erosion=0.00 weirdness=-0.10
// biome noise sampler 146: continentalness=-0.40 erosion=0.10 weirdness=0.00
// biome noise sampler 147: continentalness=-0.30 erosion=0.20 weirdness=0.10
// biome noise sampler 148: continentalness=-0.20 erosion=0.30 weirdness=0.20
// biome noise sampler 149: continentalness=-0.10 erosion=0.40 weirdness=0.30
// biome noise sampler 150: continentalness=0.00 erosion=-1.00 weirdness=0.40
// biome noise sampler 151: continentalness=0.10 erosion=-0.90 weirdness=0.50
// biome noise sampler 152: continentalness=0.20 erosion=-0.80 weirdness=0.60
// biome noise sampler 153: continentalness=0.30 erosion=-0.70 weirdness=-1.00
// biome noise sampler 154: continentalness=0.40 erosion=-0.60 weirdness=-0.90
// biome noise sampler 155: continentalness=0.50 erosion=-0.50 weirdness=-0.80
// biome noise sampler 156: continentalness=0.60 erosion=-0.40 weirdness=-0.70
// biome noise sampler 157: continentalness=0.70 erosion=-0.30 weirdness=-0.60
// biome noise sampler 158: continentalness=0.80 erosion=-0.20 weirdness=-0.50
// biome noise sampler 159: continentalness=0.90 erosion=-0.10 weirdness=-0.40
// biome noise sampler 160: continentalness=-1.00 erosion=0.00 weirdness=-0.30
// biome noise sampler 161: continentalness=-0.90 erosion=0.10 weirdness=-0.20
// biome noise sampler 162: continentalness=-0.80 erosion=0.20 weirdness=-0.10
// biome noise sampler 163: continentalness=-0.70 erosion=0.30 weirdness=0.00
// biome noise sampler 164: continentalness=-0.60 erosion=0.40 weirdness=0.10
// biome noise sampler 165: continentalness=-0.50 erosion=-1.00 weirdness=0.20
// biome noise sampler 166: continentalness=-0.40 erosion=-0.90 weirdness=0.30
// biome noise sampler 167: continentalness=-0.30 erosion=-0.80 weirdness=0.40
// biome noise sampler 168: continentalness=-0.20 erosion=-0.70 weirdness=0.50
// biome noise sampler 169: continentalness=-0.10 erosion=-0.60 weirdness=0.60
// biome noise sampler 170: continentalness=0.00 erosion=-0.50 weirdness=-1.00
// biome noise sampler 171: continentalness=0.10 erosion=-0.40 weirdness=-0.90
// biome noise sampler 172: continentalness=0.20 erosion=-0.30 weirdness=-0.80
// biome noise sampler 173: continentalness=0.30 erosion=-0.20 weirdness=-0.70
// biome noise sampler 174: continentalness=0.40 erosion=-0.10 weirdness=-0.60
// biome noise sampler 175: continentalness=0.50 erosion=0.00 weirdness=-0.50
// biome noise sampler 176: continentalness=0.60 erosion=0.10 weirdness=-0.40
// biome noise sampler 177: continentalness=0.70 erosion=0.20 weirdness=-0.30
// biome noise sampler 178: continentalness=0.80 erosion=0.30 weirdness=-0.20
// biome noise sampler 179: continentalness=0.90 erosion=0.40 weirdness=-0.10
// biome noise sampler 180: continentalness=-1.00 erosion=-1.00 weirdness=0.00
// biome noise sampler 181: continentalness=-0.90 erosion=-0.90 weirdness=0.10
// biome noise sampler 182: continentalness=-0.80 erosion=-0.80 weirdness=0.20
// biome noise sampler 183: continentalness=-0.70 erosion=-0.70 weirdness=0.30
// biome noise sampler 184: continentalness=-0.60 erosion=-0.60 weirdness=0.40
// biome noise sampler 185: continentalness=-0.50 erosion=-0.50 weirdness=0.50
// biome noise sampler 186: continentalness=-0.40 erosion=-0.40 weirdness=0.60
// biome noise sampler 187: continentalness=-0.30 erosion=-0.30 weirdness=-1.00
// biome noise sampler 188: continentalness=-0.20 erosion=-0.20 weirdness=-0.90
// biome noise sampler 189: continentalness=-0.10 erosion=-0.10 weirdness=-0.80
// biome noise sampler 190: continentalness=0.00 erosion=0.00 weirdness=-0.70
// biome noise sampler 191: continentalness=0.10 erosion=0.10 weirdness=-0.60
// biome noise sampler 192: continentalness=0.20 erosion=0.20 weirdness=-0.50
// biome noise sampler 193: continentalness=0.30 erosion=0.30 weirdness=-0.40
// biome noise sampler 194: continentalness=0.40 erosion=0.40 weirdness=-0.30
// biome noise sampler 195: continentalness=0.50 erosion=-1.00 weirdness=-0.20
// biome noise sampler 196: continentalness=0.60 erosion=-0.90 weirdness=-0.10
// biome noise sampler 197: continentalness=0.70 erosion=-0.80 weirdness=0.00
// biome noise sampler 198: continentalness=0.80 erosion=-0.70 weirdness=0.10
// biome noise sampler 199: continentalness=0.90 erosion=-0.60 weirdness=0.20
// biome noise sampler 200: continentalness=-1.00 erosion=-0.50 weirdness=0.30
// biome noise sampler 201: continentalness=-0.90 erosion=-0.40 weirdness=0.40
// biome noise sampler 202: continentalness=-0.80 erosion=-0.30 weirdness=0.50
// biome noise sampler 203: continentalness=-0.70 erosion=-0.20 weirdness=0.60
// biome noise sampler 204: continentalness=-0.60 erosion=-0.10 weirdness=-1.00
// biome noise sampler 205: continentalness=-0.50 erosion=0.00 weirdness=-0.90
// biome noise sampler 206: continentalness=-0.40 erosion=0.10 weirdness=-0.80
// biome noise sampler 207: continentalness=-0.30 erosion=0.20 weirdness=-0.70
// biome noise sampler 208: continentalness=-0.20 erosion=0.30 weirdness=-0.60
// biome noise sampler 209: continentalness=-0.10 erosion=0.40 weirdness=-0.50
// biome noise sampler 210: continentalness=0.00 erosion=-1.00 weirdness=-0.40
// biome noise sampler 211: continentalness=0.10 erosion=-0.90 weirdness=-0.30
// biome noise sampler 212: continentalness=0.20 erosion=-0.80 weirdness=-0.20
// biome noise sampler 213: continentalness=0.30 erosion=-0.70 weirdness=-0.10
// biome noise sampler 214: continentalness=0.40 erosion=-0.60 weirdness=0.00
// biome noise sampler 215: continentalness=0.50 erosion=-0.50 weirdness=0.10
// biome noise sampler 216: continentalness=0.60 erosion=-0.40 weirdness=0.20
// biome noise sampler 217: continentalness=0.70 erosion=-0.30 weirdness=0.30
// biome noise sampler 218: continentalness=0.80 erosion=-0.20 weirdness=0.40
// biome noise sampler 219: continentalness=0.90 erosion=-0.10 weirdness=0.50
// biome noise sampler 220: continentalness=-1.00 erosion=0.00 weirdness=0.60
// biome noise sampler 221: continentalness=-0.90 erosion=0.10 weirdness=-1.00
// biome noise sampler 222: continentalness=-0.80 erosion=0.20 weirdness=-0.90
// biome noise sampler 223: continentalness=-0.70 erosion=0.30 weirdness=-0.80
// biome noise sampler 224: continentalness=-0.60 erosion=0.40 weirdness=-0.70
// biome noise sampler 225: continentalness=-0.50 erosion=-1.00 weirdness=-0.60
// biome noise sampler 226: continentalness=-0.40 erosion=-0.90 weirdness=-0.50
// biome noise sampler 227: continentalness=-0.30 erosion=-0.80 weirdness=-0.40
// biome noise sampler 228: continentalness=-0.20 erosion=-0.70 weirdness=-0.30
// biome noise sampler 229: continentalness=-0.10 erosion=-0.60 weirdness=-0.20
// biome noise sampler 230: continentalness=0.00 erosion=-0.50 weirdness=-0.10
// biome noise sampler 231: continentalness=0.10 erosion=-0.40 weirdness=0.00
// biome noise sampler 232: continentalness=0.20 erosion=-0.30 weirdness=0.10
// biome noise sampler 233: continentalness=0.30 erosion=-0.20 weirdness=0.20
// biome noise sampler 234: continentalness=0.40 erosion=-0.10 weirdness=0.30
// biome noise sampler 235: continentalness=0.50 erosion=0.00 weirdness=0.40
// biome noise sampler 236: continentalness=0.60 erosion=0.10 weirdness=0.50
// biome noise sampler 237: continentalness=0.70 erosion=0.20 weirdness=0.60
// biome noise sampler 238: continentalness=0.80 erosion=0.30 weirdness=-1.00
// biome noise sampler 239: continentalness=0.90 erosion=0.40 weirdness=-0.90
// biome noise sampler 240: continentalness=-1.00 erosion=-1.00 weirdness=-0.80
// biome noise sampler 241: continentalness=-0.90 erosion=-0.90 weirdness=-0.70
// biome noise sampler 242: continentalness=-0.80 erosion=-0.80 weirdness=-0.60
// biome noise sampler 243: continentalness=-0.70 erosion=-0.70 weirdness=-0.50
// biome noise sampler 244: continentalness=-0.60 erosion=-0.60 weirdness=-0.40
// biome noise sampler 245: continentalness=-0.50 erosion=-0.50 weirdness=-0.30
// biome noise sampler 246: continentalness=-0.40 erosion=-0.40 weirdness=-0.20
// biome noise sampler 247: continentalness=-0.30 erosion=-0.30 weirdness=-0.10
// biome noise sampler 248: continentalness=-0.20 erosion=-0.20 weirdness=0.00
// biome noise sampler 249: continentalness=-0.10 erosion=-0.10 weirdness=0.10
// biome noise sampler 250: continentalness=0.00 erosion=0.00 weirdness=0.20
// biome noise sampler 251: continentalness=0.10 erosion=0.10 weirdness=0.30
// biome noise sampler 252: continentalness=0.20 erosion=0.20 weirdness=0.40
// biome noise sampler 253: continentalness=0.30 erosion=0.30 weirdness=0.50
// biome noise sampler 254: continentalness=0.40 erosion=0.40 weirdness=0.60
// biome noise sampler 255: continentalness=0.50 erosion=-1.00 weirdness=-1.00
// biome noise sampler 256: continentalness=0.60 erosion=-0.90 weirdness=-0.90
// biome noise sampler 257: continentalness=0.70 erosion=-0.80 weirdness=-0.80
// biome noise sampler 258: continentalness=0.80 erosion=-0.70 weirdness=-0.70
// biome noise sampler 259: continentalness=0.90 erosion=-0.60 weirdness=-0.60
// biome noise sampler 260: continentalness=-1.00 erosion=-0.50 weirdness=-0.50
// biome noise sampler 261: continentalness=-0.90 erosion=-0.40 weirdness=-0.40
// biome noise sampler 262: continentalness=-0.80 erosion=-0.30 weirdness=-0.30
// biome noise sampler 263: continentalness=-0.70 erosion=-0.20 weirdness=-0.20
// biome noise sampler 264: continentalness=-0.60 erosion=-0.10 weirdness=-0.10
// biome noise sampler 265: continentalness=-0.50 erosion=0.00 weirdness=0.00
// biome noise sampler 266: continentalness=-0.40 erosion=0.10 weirdness=0.10
// biome noise sampler 267: continentalness=-0.30 erosion=0.20 weirdness=0.20
// biome noise sampler 268: continentalness=-0.20 erosion=0.30 weirdness=0.30
// biome noise sampler 269: continentalness=-0.10 erosion=0.40 weirdness=0.40
// biome noise sampler 270: continentalness=0.00 erosion=-1.00 weirdness=0.50
// biome noise sampler 271: continentalness=0.10 erosion=-0.90 weirdness=0.60
// biome noise sampler 272: continentalness=0.20 erosion=-0.80 weirdness=-1.00
// biome noise sampler 273: continentalness=0.30 erosion=-0.70 weirdness=-0.90
// biome noise sampler 274: continentalness=0.40 erosion=-0.60 weirdness=-0.80
// biome noise sampler 275: continentalness=0.50 erosion=-0.50 weirdness=-0.70
// biome noise sampler 276: continentalness=0.60 erosion=-0.40 weirdness=-0.60
// biome noise sampler 277: continentalness=0.70 erosion=-0.30 weirdness=-0.50
// biome noise sampler 278: continentalness=0.80 erosion=-0.20 weirdness=-0.40
// biome noise sampler 279: continentalness=0.90 erosion=-0.10 weirdness=-0.30
// biome noise sampler 280: continentalness=-1.00 erosion=0.00 weirdness=-0.20
// biome noise sampler 281: continentalness=-0.90 erosion=0.10 weirdness=-0.10
// biome noise sampler 282: continentalness=-0.80 erosion=0.20 weirdness=0.00
// biome noise sampler 283: continentalness=-0.70 erosion=0.30 weirdness=0.10
// biome noise sampler 284: continentalness=-0.60 erosion=0.40 weirdness=0.20
// biome noise sampler 285: continentalness=-0.50 erosion=-1.00 weirdness=0.30
// biome noise sampler 286: continentalness=-0.40 erosion=-0.90 weirdness=0.40
// biome noise sampler 287: continentalness=-0.30 erosion=-0.80 weirdness=0.50
// biome noise sampler 288: continentalness=-0.20 erosion=-0.70 weirdness=0.60
// biome noise sampler 289: continentalness=-0.10 erosion=-0.60 weirdness=-1.00
// biome noise sampler 290: continentalness=0.00 erosion=-0.50 weirdness=-0.90
// biome noise sampler 291: continentalness=0.10 erosion=-0.40 weirdness=-0.80
// biome noise sampler 292: continentalness=0.20 erosion=-0.30 weirdness=-0.70
// biome noise sampler 293: continentalness=0.30 erosion=-0.20 weirdness=-0.60
// biome noise sampler 294: continentalness=0.40 erosion=-0.10 weirdness=-0.50
// biome noise sampler 295: continentalness=0.50 erosion=0.00 weirdness=-0.40
// biome noise sampler 296: continentalness=0.60 erosion=0.10 weirdness=-0.30
// biome noise sampler 297: continentalness=0.70 erosion=0.20 weirdness=-0.20
// biome noise sampler 298: continentalness=0.80 erosion=0.30 weirdness=-0.10
// biome noise sampler 299: continentalness=0.90 erosion=0.40 weirdness=0.00
// biome noise sampler 300: continentalness=-1.00 erosion=-1.00 weirdness=0.10
// biome noise sampler 301: continentalness=-0.90 erosion=-0.90 weirdness=0.20
// biome noise sampler 302: continentalness=-0.80 erosion=-0.80 weirdness=0.30
// biome noise sampler 303: continentalness=-0.70 erosion=-0.70 weirdness=0.40
// biome noise sampler 304: continentalness=-0.60 erosion=-0.60 weirdness=0.50
// biome noise sampler 305: continentalness=-0.50 erosion=-0.50 weirdness=0.60
// biome noise sampler 306: continentalness=-0.40 erosion=-0.40 weirdness=-1.00
// biome noise sampler 307: continentalness=-0.30 erosion=-0.30 weirdness=-0.90
// biome noise sampler 308: continentalness=-0.20 erosion=-0.20 weirdness=-0.80
// biome noise sampler 309: continentalness=-0.10 erosion=-0.10 weirdness=-0.70
// biome noise sampler 310: continentalness=0.00 erosion=0.00 weirdness=-0.60
// biome noise sampler 311: continentalness=0.10 erosion=0.10 weirdness=-0.50
// biome noise sampler 312: continentalness=0.20 erosion=0.20 weirdness=-0.40
// biome noise sampler 313: continentalness=0.30 erosion=0.30 weirdness=-0.30
// biome noise sampler 314: continentalness=0.40 erosion=0.40 weirdness=-0.20
// biome noise sampler 315: continentalness=0.50 erosion=-1.00 weirdness=-0.10
// biome noise sampler 316: continentalness=0.60 erosion=-0.90 weirdness=0.00
// biome noise sampler 317: continentalness=0.70 erosion=-0.80 weirdness=0.10
// biome noise sampler 318: continentalness=0.80 erosion=-0.70 weirdness=0.20
// biome noise sampler 319: continentalness=0.90 erosion=-0.60 weirdness=0.30
// biome noise sampler 320: continentalness=-1.00 erosion=-0.50 weirdness=0.40
// biome noise sampler 321: continentalness=-0.90 erosion=-0.40 weirdness=0.50
// biome noise sampler 322: continentalness=-0.80 erosion=-0.30 weirdness=0.60
// biome noise sampler 323: continentalness=-0.70 erosion=-0.20 weirdness=-1.00
// biome noise sampler 324: continentalness=-0.60 erosion=-0.10 weirdness=-0.90
// biome noise sampler 325: continentalness=-0.50 erosion=0.00 weirdness=-0.80
// biome noise sampler 326: continentalness=-0.40 erosion=0.10 weirdness=-0.70
// biome noise sampler 327: continentalness=-0.30 erosion=0.20 weirdness=-0.60
// biome noise sampler 328: continentalness=-0.20 erosion=0.30 weirdness=-0.50
// biome noise sampler 329: continentalness=-0.10 erosion=0.40 weirdness=-0.40
// biome noise sampler 330: continentalness=0.00 erosion=-1.00 weirdness=-0.30
// biome noise sampler 331: continentalness=0.10 erosion=-0.90 weirdness=-0.20
// biome noise sampler 332: continentalness=0.20 erosion=-0.80 weirdness=-0.10
// biome noise sampler 333: continentalness=0.30 erosion=-0.70 weirdness=0.00
// biome noise sampler 334: continentalness=0.40 erosion=-0.60 weirdness=0.10
// biome noise sampler 335: continentalness=0.50 erosion=-0.50 weirdness=0.20
// biome noise sampler 336: continentalness=0.60 erosion=-0.40 weirdness=0.30
// biome noise sampler 337: continentalness=0.70 erosion=-0.30 weirdness=0.40
// biome noise sampler 338: continentalness=0.80 erosion=-0.20 weirdness=0.50
// biome noise sampler 339: continentalness=0.90 erosion=-0.10 weirdness=0.60
// biome noise sampler 340: continentalness=-1.00 erosion=0.00 weirdness=-1.00
// biome noise sampler 341: continentalness=-0.90 erosion=0.10 weirdness=-0.90
// biome noise sampler 342: continentalness=-0.80 erosion=0.20 weirdness=-0.80
// biome noise sampler 343: continentalness=-0.70 erosion=0.30 weirdness=-0.70
// biome noise sampler 344: continentalness=-0.60 erosion=0.40 weirdness=-0.60
// biome noise sampler 345: continentalness=-0.50 erosion=-1.00 weirdness=-0.50
// biome noise sampler 346: continentalness=-0.40 erosion=-0.90 weirdness=-0.40
// biome noise sampler 347: continentalness=-0.30 erosion=-0.80 weirdness=-0.30
// biome noise sampler 348: continentalness=-0.20 erosion=-0.70 weirdness=-0.20
// biome noise sampler 349: continentalness=-0.10 erosion=-0.60 weirdness=-0.10
// biome noise sampler 350: continentalness=0.00 erosion=-0.50 weirdness=0.00
// biome noise sampler 351: continentalness=0.10 erosion=-0.40 weirdness=0.10
// biome noise sampler 352: continentalness=0.20 erosion=-0.30 weirdness=0.20
// biome noise sampler 353: continentalness=0.30 erosion=-0.20 weirdness=0.30
// biome noise sampler 354: continentalness=0.40 erosion=-0.10 weirdness=0.40
// biome noise sampler 355: continentalness=0.50 erosion=0.00 weirdness=0.50
// biome noise sampler 356: continentalness=0.60 erosion=0.10 weirdness=0.60
// biome noise sampler 357: continentalness=0.70 erosion=0.20 weirdness=-1.00
// biome noise sampler 358: continentalness=0.80 erosion=0.30 weirdness=-0.90
// biome noise sampler 359: continentalness=0.90 erosion=0.40 weirdness=-0.80
// biome noise sampler 360: continentalness=-1.00 erosion=-1.00 weirdness=-0.70
// biome noise sampler 361: continentalness=-0.90 erosion=-0.90 weirdness=-0.60
// biome noise sampler 362: continentalness=-0.80 erosion=-0.80 weirdness=-0.50
// biome noise sampler 363: continentalness=-0.70 erosion=-0.70 weirdness=-0.40
// biome noise sampler 364: continentalness=-0.60 erosion=-0.60 weirdness=-0.30
// biome noise sampler 365: continentalness=-0.50 erosion=-0.50 weirdness=-0.20
// biome noise sampler 366: continentalness=-0.40 erosion=-0.40 weirdness=-0.10
// biome noise sampler 367: continentalness=-0.30 erosion=-0.30 weirdness=0.00
// biome noise sampler 368: continentalness=-0.20 erosion=-0.20 weirdness=0.10
// biome noise sampler 369: continentalness=-0.10 erosion=-0.10 weirdness=0.20
// biome noise sampler 370: continentalness=0.00 erosion=0.00 weirdness=0.30
// biome noise sampler 371: continentalness=0.10 erosion=0.10 weirdness=0.40
// biome noise sampler 372: continentalness=0.20 erosion=0.20 weirdness=0.50
// biome noise sampler 373: continentalness=0.30 erosion=0.30 weirdness=0.60
// biome noise sampler 374: continentalness=0.40 erosion=0.40 weirdness=-1.00
// biome noise sampler 375: continentalness=0.50 erosion=-1.00 weirdness=-0.90
// biome noise sampler 376: continentalness=0.60 erosion=-0.90 weirdness=-0.80
// biome noise sampler 377: continentalness=0.70 erosion=-0.80 weirdness=-0.70
// biome noise sampler 378: continentalness=0.80 erosion=-0.70 weirdness=-0.60
// biome noise sampler 379: continentalness=0.90 erosion=-0.60 weirdness=-0.50
// biome noise sampler 380: continentalness=-1.00 erosion=-0.50 weirdness=-0.40
// biome noise sampler 381: continentalness=-0.90 erosion=-0.40 weirdness=-0.30
// biome noise sampler 382: continentalness=-0.80 erosion=-0.30 weirdness=-0.20
// biome noise sampler 383: continentalness=-0.70 erosion=-0.20 weirdness=-0.10
// biome noise sampler 384: continentalness=-0.60 erosion=-0.10 weirdness=0.00
// biome noise sampler 385: continentalness=-0.50 erosion=0.00 weirdness=0.10
// biome noise sampler 386: continentalness=-0.40 erosion=0.10 weirdness=0.20
// biome noise sampler 387: continentalness=-0.30 erosion=0.20 weirdness=0.30
// biome noise sampler 388: continentalness=-0.20 erosion=0.30 weirdness=0.40
// biome noise sampler 389: continentalness=-0.10 erosion=0.40 weirdness=0.50
// biome noise sampler 390: continentalness=0.00 erosion=-1.00 weirdness=0.60
// biome noise sampler 391: continentalness=0.10 erosion=-0.90 weirdness=-1.00
// biome noise sampler 392: continentalness=0.20 erosion=-0.80 weirdness=-0.90
// biome noise sampler 393: continentalness=0.30 erosion=-0.70 weirdness=-0.80
// biome noise sampler 394: continentalness=0.40 erosion=-0.60 weirdness=-0.70
// biome noise sampler 395: continentalness=0.50 erosion=-0.50 weirdness=-0.60
// biome noise sampler 396: continentalness=0.60 erosion=-0.40 weirdness=-0.50
// biome noise sampler 397: continentalness=0.70 erosion=-0.30 weirdness=-0.40
// biome noise sampler 398: continentalness=0.80 erosion=-0.20 weirdness=-0.30
// biome noise sampler 399: continentalness=0.90 erosion=-0.10 weirdness=-0.20
// biome noise sampler 400: continentalness=-1.00 erosion=0.00 weirdness=-0.10
// biome noise sampler 401: continentalness=-0.90 erosion=0.10 weirdness=0.00
// biome noise sampler 402: continentalness=-0.80 erosion=0.20 weirdness=0.10
// biome noise sampler 403: continentalness=-0.70 erosion=0.30 weirdness=0.20
// biome noise sampler 404: continentalness=-0.60 erosion=0.40 weirdness=0.30
// biome noise sampler 405: continentalness=-0.50 erosion=-1.00 weirdness=0.40
// biome noise sampler 406: continentalness=-0.40 erosion=-0.90 weirdness=0.50
// biome noise sampler 407: continentalness=-0.30 erosion=-0.80 weirdness=0.60
// biome noise sampler 408: continentalness=-0.20 erosion=-0.70 weirdness=-1.00
// biome noise sampler 409: continentalness=-0.10 erosion=-0.60 weirdness=-0.90
// biome noise sampler 410: continentalness=0.00 erosion=-0.50 weirdness=-0.80
// biome noise sampler 411: continentalness=0.10 erosion=-0.40 weirdness=-0.70
// biome noise sampler 412: continentalness=0.20 erosion=-0.30 weirdness=-0.60
// biome noise sampler 413: continentalness=0.30 erosion=-0.20 weirdness=-0.50
// biome noise sampler 414: continentalness=0.40 erosion=-0.10 weirdness=-0.40
// biome noise sampler 415: continentalness=0.50 erosion=0.00 weirdness=-0.30
// biome noise sampler 416: continentalness=0.60 erosion=0.10 weirdness=-0.20
// biome noise sampler 417: continentalness=0.70 erosion=0.20 weirdness=-0.10
// biome noise sampler 418: continentalness=0.80 erosion=0.30 weirdness=0.00
// biome noise sampler 419: continentalness=0.90 erosion=0.40 weirdness=0.10
// biome noise sampler 420: continentalness=-1.00 erosion=-1.00 weirdness=0.20
// biome noise sampler 421: continentalness=-0.90 erosion=-0.90 weirdness=0.30
// biome noise sampler 422: continentalness=-0.80 erosion=-0.80 weirdness=0.40
// biome noise sampler 423: continentalness=-0.70 erosion=-0.70 weirdness=0.50
// biome noise sampler 424: continentalness=-0.60 erosion=-0.60 weirdness=0.60
// biome noise sampler 425: continentalness=-0.50 erosion=-0.50 weirdness=-1.00
// biome noise sampler 426: continentalness=-0.40 erosion=-0.40 weirdness=-0.90
// biome noise sampler 427: continentalness=-0.30 erosion=-0.30 weirdness=-0.80
// biome noise sampler 428: continentalness=-0.20 erosion=-0.20 weirdness=-0.70
// biome noise sampler 429: continentalness=-0.10 erosion=-0.10 weirdness=-0.60
// biome noise sampler 430: continentalness=0.00 erosion=0.00 weirdness=-0.50
// biome noise sampler 431: continentalness=0.10 erosion=0.10 weirdness=-0.40
// biome noise sampler 432: continentalness=0.20 erosion=0.20 weirdness=-0.30
// biome noise sampler 433: continentalness=0.30 erosion=0.30 weirdness=-0.20
// biome noise sampler 434: continentalness=0.40 erosion=0.40 weirdness=-0.10
// biome noise sampler 435: continentalness=0.50 erosion=-1.00 weirdness=0.00
// biome noise sampler 436: continentalness=0.60 erosion=-0.90 weirdness=0.10
// biome noise sampler 437: continentalness=0.70 erosion=-0.80 weirdness=0.20
// biome noise sampler 438: continentalness=0.80 erosion=-0.70 weirdness=0.30
// biome noise sampler 439: continentalness=0.90 erosion=-0.60 weirdness=0.40
// biome noise sampler 440: continentalness=-1.00 erosion=-0.50 weirdness=0.50
// biome noise sampler 441: continentalness=-0.90 erosion=-0.40 weirdness=0.60
// biome noise sampler 442: continentalness=-0.80 erosion=-0.30 weirdness=-1.00
// biome noise sampler 443: continentalness=-0.70 erosion=-0.20 weirdness=-0.90
// biome noise sampler 444: continentalness=-0.60 erosion=-0.10 weirdness=-0.80
// biome noise sampler 445: continentalness=-0.50 erosion=0.00 weirdness=-0.70
// biome noise sampler 446: continentalness=-0.40 erosion=0.10 weirdness=-0.60
// biome noise sampler 447: continentalness=-0.30 erosion=0.20 weirdness=-0.50
// biome noise sampler 448: continentalness=-0.20 erosion=0.30 weirdness=-0.40
// biome noise sampler 449: continentalness=-0.10 erosion=0.40 weirdness=-0.30
// biome noise sampler 450: continentalness=0.00 erosion=-1.00 weirdness=-0.20
// biome noise sampler 451: continentalness=0.10 erosion=-0.90 weirdness=-0.10
// biome noise sampler 452: continentalness=0.20 erosion=-0.80 weirdness=0.00
// biome noise sampler 453: continentalness=0.30 erosion=-0.70 weirdness=0.10
// biome noise sampler 454: continentalness=0.40 erosion=-0.60 weirdness=0.20
// biome noise sampler 455: continentalness=0.50 erosion=-0.50 weirdness=0.30
// biome noise sampler 456: continentalness=0.60 erosion=-0.40 weirdness=0.40
// biome noise sampler 457: continentalness=0.70 erosion=-0.30 weirdness=0.50
// biome noise sampler 458: continentalness=0.80 erosion=-0.20 weirdness=0.60
// biome noise sampler 459: continentalness=0.90 erosion=-0.10 weirdness=-1.00
// biome noise sampler 460: continentalness=-1.00 erosion=0.00 weirdness=-0.90
// biome noise sampler 461: continentalness=-0.90 erosion=0.10 weirdness=-0.80
// biome noise sampler 462: continentalness=-0.80 erosion=0.20 weirdness=-0.70
// biome noise sampler 463: continentalness=-0.70 erosion=0.30 weirdness=-0.60
// biome noise sampler 464: continentalness=-0.60 erosion=0.40 weirdness=-0.50
// biome noise sampler 465: continentalness=-0.50 erosion=-1.00 weirdness=-0.40
// biome noise sampler 466: continentalness=-0.40 erosion=-0.90 weirdness=-0.30
// biome noise sampler 467: continentalness=-0.30 erosion=-0.80 weirdness=-0.20
// biome noise sampler 468: continentalness=-0.20 erosion=-0.70 weirdness=-0.10
// biome noise sampler 469: continentalness=-0.10 erosion=-0.60 weirdness=0.00
// biome noise sampler 470: continentalness=0.00 erosion=-0.50 weirdness=0.10
// biome noise sampler 471: continentalness=0.10 erosion=-0.40 weirdness=0.20
// biome noise sampler 472: continentalness=0.20 erosion=-0.30 weirdness=0.30
// biome noise sampler 473: continentalness=0.30 erosion=-0.20 weirdness=0.40
// biome noise sampler 474: continentalness=0.40 erosion=-0.10 weirdness=0.50
// biome noise sampler 475: continentalness=0.50 erosion=0.00 weirdness=0.60
// biome noise sampler 476: continentalness=0.60 erosion=0.10 weirdness=-1.00
// biome noise sampler 477: continentalness=0.70 erosion=0.20 weirdness=-0.90
// biome noise sampler 478: continentalness=0.80 erosion=0.30 weirdness=-0.80
// biome noise sampler 479: continentalness=0.90 erosion=0.40 weirdness=-0.70
// biome noise sampler 480: continentalness=-1.00 erosion=-1.00 weirdness=-0.60
// biome noise sampler 481: continentalness=-0.90 erosion=-0.90 weirdness=-0.50
// biome noise sampler 482: continentalness=-0.80 erosion=-0.80 weirdness=-0.40
// biome noise sampler 483: continentalness=-0.70 erosion=-0.70 weirdness=-0.30
// biome noise sampler 484: continentalness=-0.60 erosion=-0.60 weirdness=-0.20
// biome noise sampler 485: continentalness=-0.50 erosion=-0.50 weirdness=-0.10
// biome noise sampler 486: continentalness=-0.40 erosion=-0.40 weirdness=0.00
// biome noise sampler 487: continentalness=-0.30 erosion=-0.30 weirdness=0.10
// biome noise sampler 488: continentalness=-0.20 erosion=-0.20 weirdness=0.20
// biome noise sampler 489: continentalness=-0.10 erosion=-0.10 weirdness=0.30
// biome noise sampler 490: continentalness=0.00 erosion=0.00 weirdness=0.40
// biome noise sampler 491: continentalness=0.10 erosion=0.10 weirdness=0.50
// biome noise sampler 492: continentalness=0.20 erosion=0.20 weirdness=0.60
// biome noise sampler 493: continentalness=0.30 erosion=0.30 weirdness=-1.00
// biome noise sampler 494: continentalness=0.40 erosion=0.40 weirdness=-0.90
// biome noise sampler 495: continentalness=0.50 erosion=-1.00 weirdness=-0.80
// biome noise sampler 496: continentalness=0.60 erosion=-0.90 weirdness=-0.70
// biome noise sampler 497: continentalness=0.70 erosion=-0.80 weirdness=-0.60
// biome noise sampler 498: continentalness=0.80 erosion=-0.70 weirdness=-0.50
// biome noise sampler 499: continentalness=0.90 erosion=-0.60 weirdness=-0.40
// biome noise sampler 500: continentalness=-1.00 erosion=-0.50 weirdness=-0.30
// biome noise sampler 501: continentalness=-0.90 erosion=-0.40 weirdness=-0.20
// biome noise sampler 502: continentalness=-0.80 erosion=-0.30 weirdness=-0.10
// biome noise sampler 503: continentalness=-0.70 erosion=-0.20 weirdness=0.00
// biome noise sampler 504: continentalness=-0.60 erosion=-0.10 weirdness=0.10
// biome noise sampler 505: continentalness=-0.50 erosion=0.00 weirdness=0.20
// biome noise sampler 506: continentalness=-0.40 erosion=0.10 weirdness=0.30
// biome noise sampler 507: continentalness=-0.30 erosion=0.20 weirdness=0.40
// biome noise sampler 508: continentalness=-0.20 erosion=0.30 weirdness=0.50
// biome noise sampler 509: continentalness=-0.10 erosion=0.40 weirdness=0.60
// biome noise sampler 510: continentalness=0.00 erosion=-1.00 weirdness=-1.00
// biome noise sampler 511: continentalness=0.10 erosion=-0.90 weirdness=-0.90
// biome noise sampler 512: continentalness=0.20 erosion=-0.80 weirdness=-0.80
// biome noise sampler 513: continentalness=0.30 erosion=-0.70 weirdness=-0.70
// biome noise sampler 514: continentalness=0.40 erosion=-0.60 weirdness=-0.60
// biome noise sampler 515: continentalness=0.50 erosion=-0.50 weirdness=-0.50
// biome noise sampler 516: continentalness=0.60 erosion=-0.40 weirdness=-0.40
// biome noise sampler 517: continentalness=0.70 erosion=-0.30 weirdness=-0.30
// biome noise sampler 518: continentalness=0.80 erosion=-0.20 weirdness=-0.20
// biome noise sampler 519: continentalness=0.90 erosion=-0.10 weirdness=-0.10
// biome noise sampler 520: continentalness=-1.00 erosion=0.00 weirdness=0.00
// biome noise sampler 521: continentalness=-0.90 erosion=0.10 weirdness=0.10
// biome noise sampler 522: continentalness=-0.80 erosion=0.20 weirdness=0.20
// biome noise sampler 523: continentalness=-0.70 erosion=0.30 weirdness=0.30
// biome noise sampler 524: continentalness=-0.60 erosion=0.40 weirdness=0.40
// biome noise sampler 525: continentalness=-0.50 erosion=-1.00 weirdness=0.50
// biome noise sampler 526: continentalness=-0.40 erosion=-0.90 weirdness=0.60
// biome noise sampler 527: continentalness=-0.30 erosion=-0.80 weirdness=-1.00
// biome noise sampler 528: continentalness=-0.20 erosion=-0.70 weirdness=-0.90
// biome noise sampler 529: continentalness=-0.10 erosion=-0.60 weirdness=-0.80
// biome noise sampler 530: continentalness=0.00 erosion=-0.50 weirdness=-0.70
// biome noise sampler 531: continentalness=0.10 erosion=-0.40 weirdness=-0.60
// biome noise sampler 532: continentalness=0.20 erosion=-0.30 weirdness=-0.50
// biome noise sampler 533: continentalness=0.30 erosion=-0.20 weirdness=-0.40
// biome noise sampler 534: continentalness=0.40 erosion=-0.10 weirdness=-0.30
// biome noise sampler 535: continentalness=0.50 erosion=0.00 weirdness=-0.20
// biome noise sampler 536: continentalness=0.60 erosion=0.10 weirdness=-0.10
// biome noise sampler 537: continentalness=0.70 erosion=0.20 weirdness=0.00
// biome noise sampler 538: continentalness=0.80 erosion=0.30 weirdness=0.10
// biome noise sampler 539: continentalness=0.90 erosion=0.40 weirdness=0.20
// biome noise sampler 540: continentalness=-1.00 erosion=-1.00 weirdness=0.30
// biome noise sampler 541: continentalness=-0.90 erosion=-0.90 weirdness=0.40
// biome noise sampler 542: continentalness=-0.80 erosion=-0.80 weirdness=0.50
// biome noise sampler 543: continentalness=-0.70 erosion=-0.70 weirdness=0.60
// biome noise sampler 544: continentalness=-0.60 erosion=-0.60 weirdness=-1.00
// biome noise sampler 545: continentalness=-0.50 erosion=-0.50 weirdness=-0.90
// biome noise sampler 546: continentalness=-0.40 erosion=-0.40 weirdness=-0.80
// biome noise sampler 547: continentalness=-0.30 erosion=-0.30 weirdness=-0.70
// biome noise sampler 548: continentalness=-0.20 erosion=-0.20 weirdness=-0.60
// biome noise sampler 549: continentalness=-0.10 erosion=-0.10 weirdness=-0.50
// biome noise sampler 550: continentalness=0.00 erosion=0.00 weirdness=-0.40
// biome noise sampler 551: continentalness=0.10 erosion=0.10 weirdness=-0.30
// biome noise sampler 552: continentalness=0.20 erosion=0.20 weirdness=-0.20
// biome noise sampler 553: continentalness=0.30 erosion=0.30 weirdness=-0.10
// biome noise sampler 554: continentalness=0.40 erosion=0.40 weirdness=0.00
// biome noise sampler 555: continentalness=0.50 erosion=-1.00 weirdness=0.10
// biome noise sampler 556: continentalness=0.60 erosion=-0.90 weirdness=0.20
// biome noise sampler 557: continentalness=0.70 erosion=-0.80 weirdness=0.30
// biome noise sampler 558: continentalness=0.80 erosion=-0.70 weirdness=0.40
// biome noise sampler 559: continentalness=0.90 erosion=-0.60 weirdness=0.50
// biome noise sampler 560: continentalness=-1.00 erosion=-0.50 weirdness=0.60
// biome noise sampler 561: continentalness=-0.90 erosion=-0.40 weirdness=-1.00
// biome noise sampler 562: continentalness=-0.80 erosion=-0.30 weirdness=-0.90
// biome noise sampler 563: continentalness=-0.70 erosion=-0.20 weirdness=-0.80
// biome noise sampler 564: continentalness=-0.60 erosion=-0.10 weirdness=-0.70
// biome noise sampler 565: continentalness=-0.50 erosion=0.00 weirdness=-0.60
// biome noise sampler 566: continentalness=-0.40 erosion=0.10 weirdness=-0.50
// biome noise sampler 567: continentalness=-0.30 erosion=0.20 weirdness=-0.40
// biome noise sampler 568: continentalness=-0.20 erosion=0.30 weirdness=-0.30
// biome noise sampler 569: continentalness=-0.10 erosion=0.40 weirdness=-0.20
// biome noise sampler 570: continentalness=0.00 erosion=-1.00 weirdness=-0.10
// biome noise sampler 571: continentalness=0.10 erosion=-0.90 weirdness=0.00
// biome noise sampler 572: continentalness=0.20 erosion=-0.80 weirdness=0.10
// biome noise sampler 573: continentalness=0.30 erosion=-0.70 weirdness=0.20
// biome noise sampler 574: continentalness=0.40 erosion=-0.60 weirdness=0.30
// biome noise sampler 575: continentalness=0.50 erosion=-0.50 weirdness=0.40
// biome noise sampler 576: continentalness=0.60 erosion=-0.40 weirdness=0.50
// biome noise sampler 577: continentalness=0.70 erosion=-0.30 weirdness=0.60
// biome noise sampler 578: continentalness=0.80 erosion=-0.20 weirdness=-1.00
// biome noise sampler 579: continentalness=0.90 erosion=-0.10 weirdness=-0.90
// biome noise sampler 580: continentalness=-1.00 erosion=0.00 weirdness=-0.80
// biome noise sampler 581: continentalness=-0.90 erosion=0.10 weirdness=-0.70
// biome noise sampler 582: continentalness=-0.80 erosion=0.20 weirdness=-0.60
// biome noise sampler 583: continentalness=-0.70 erosion=0.30 weirdness=-0.50
// biome noise sampler 584: continentalness=-0.60 erosion=0.40 weirdness=-0.40
// biome noise sampler 585: continentalness=-0.50 erosion=-1.00 weirdness=-0.30
// biome noise sampler 586: continentalness=-0.40 erosion=-0.90 weirdness=-0.20
// biome noise sampler 587: continentalness=-0.30 erosion=-0.80 weirdness=-0.10
// biome noise sampler 588: continentalness=-0.20 erosion=-0.70 weirdness=0.00
// biome noise sampler 589: continentalness=-0.10 erosion=-0.60 weirdness=0.10
// biome noise sampler 590: continentalness=0.00 erosion=-0.50 weirdness=0.20
// biome noise sampler 591: continentalness=0.10 erosion=-0.40 weirdness=0.30
// biome noise sampler 592: continentalness=0.20 erosion=-0.30 weirdness=0.40
// biome noise sampler 593: continentalness=0.30 erosion=-0.20 weirdness=0.50
// biome noise sampler 594: continentalness=0.40 erosion=-0.10 weirdness=0.60
// biome noise sampler 595: continentalness=0.50 erosion=0.00 weirdness=-1.00
// biome noise sampler 596: continentalness=0.60 erosion=0.10 weirdness=-0.90
// biome noise sampler 597: continentalness=0.70 erosion=0.20 weirdness=-0.80
// biome noise sampler 598: continentalness=0.80 erosion=0.30 weirdness=-0.70
// biome noise sampler 599: continentalness=0.90 erosion=0.40 weirdness=-0.60
// biome noise sampler 600: continentalness=-1.00 erosion=-1.00 weirdness=-0.50
// biome noise sampler 601: continentalness=-0.90 erosion=-0.90 weirdness=-0.40
// biome noise sampler 602: continentalness=-0.80 erosion=-0.80 weirdness=-0.30
// biome noise sampler 603: continentalness=-0.70 erosion=-0.70 weirdness=-0.20
// biome noise sampler 604: continentalness=-0.60 erosion=-0.60 weirdness=-0.10
// biome noise sampler 605: continentalness=-0.50 erosion=-0.50 weirdness=0.00
// biome noise sampler 606: continentalness=-0.40 erosion=-0.40 weirdness=0.10
// biome noise sampler 607: continentalness=-0.30 erosion=-0.30 weirdness=0.20
// biome noise sampler 608: continentalness=-0.20 erosion=-0.20 weirdness=0.30
// biome noise sampler 609: continentalness=-0.10 erosion=-0.10 weirdness=0.40
// biome noise sampler 610: continentalness=0.00 erosion=0.00 weirdness=0.50
// biome noise sampler 611: continentalness=0.10 erosion=0.10 weirdness=0.60
// biome noise sampler 612: continentalness=0.20 erosion=0.20 weirdness=-1.00
// biome noise sampler 613: continentalness=0.30 erosion=0.30 weirdness=-0.90
// biome noise sampler 614: continentalness=0.40 erosion=0.40 weirdness=-0.80
// biome noise sampler 615: continentalness=0.50 erosion=-1.00 weirdness=-0.70
// biome noise sampler 616: continentalness=0.60 erosion=-0.90 weirdness=-0.60
// biome noise sampler 617: continentalness=0.70 erosion=-0.80 weirdness=-0.50
// biome noise sampler 618: continentalness=0.80 erosion=-0.70 weirdness=-0.40
// biome noise sampler 619: continentalness=0.90 erosion=-0.60 weirdness=-0.30
// biome noise sampler 620: continentalness=-1.00 erosion=-0.50 weirdness=-0.20
// biome noise sampler 621: continentalness=-0.90 erosion=-0.40 weirdness=-0.10
// biome noise sampler 622: continentalness=-0.80 erosion=-0.30 weirdness=0.00
// biome noise sampler 623: continentalness=-0.70 erosion=-0.20 weirdness=0.10
// biome noise sampler 624: continentalness=-0.60 erosion=-0.10 weirdness=0.20
// biome noise sampler 625: continentalness=-0.50 erosion=0.00 weirdness=0.30
// biome noise sampler 626: continentalness=-0.40 erosion=0.10 weirdness=0.40
// biome noise sampler 627: continentalness=-0.30 erosion=0.20 weirdness=0.50
// biome noise sampler 628: continentalness=-0.20 erosion=0.30 weirdness=0.60
// biome noise sampler 629: continentalness=-0.10 erosion=0.40 weirdness=-1.00
// biome noise sampler 630: continentalness=0.00 erosion=-1.00 weirdness=-0.90
// biome noise sampler 631: continentalness=0.10 erosion=-0.90 weirdness=-0.80
// biome noise sampler 632: continentalness=0.20 erosion=-0.80 weirdness=-0.70
// biome noise sampler 633: continentalness=0.30 erosion=-0.70 weirdness=-0.60
// biome noise sampler 634: continentalness=0.40 erosion=-0.60 weirdness=-0.50
// biome noise sampler 635: continentalness=0.50 erosion=-0.50 weirdness=-0.40
// biome noise sampler 636: continentalness=0.60 erosion=-0.40 weirdness=-0.30
// biome noise sampler 637: continentalness=0.70 erosion=-0.30 weirdness=-0.20
// biome noise sampler 638: continentalness=0.80 erosion=-0.20 weirdness=-0.10
// biome noise sampler 639: continentalness=0.90 erosion=-0.10 weirdness=0.00
// biome noise sampler 640: continentalness=-1.00 erosion=0.00 weirdness=0.10
// biome noise sampler 641: continentalness=-0.90 erosion=0.10 weirdness=0.20
// biome noise sampler 642: continentalness=-0.80 erosion=0.20 weirdness=0.30
// biome noise sampler 643: continentalness=-0.70 erosion=0.30 weirdness=0.40
// biome noise sampler 644: continentalness=-0.60 erosion=0.40 weirdness=0.50
// biome noise sampler 645: continentalness=-0.50 erosion=-1.00 weirdness=0.60
// biome noise sampler 646: continentalness=-0.40 erosion=-0.90 weirdness=-1.00
// biome noise sampler 647: continentalness=-0.30 erosion=-0.80 weirdness=-0.90
// biome noise sampler 648: continentalness=-0.20 erosion=-0.70 weirdness=-0.80
// biome noise sampler 649: continentalness=-0.10 erosion=-0.60 weirdness=-0.70
// biome noise sampler 650: continentalness=0.00 erosion=-0.50 weirdness=-0.60
// biome noise sampler 651: continentalness=0.10 erosion=-0.40 weirdness=-0.50
// biome noise sampler 652: continentalness=0.20 erosion=-0.30 weirdness=-0.40
// biome noise sampler 653: continentalness=0.30 erosion=-0.20 weirdness=-0.30
// biome noise sampler 654: continentalness=0.40 erosion=-0.10 weirdness=-0.20
// biome noise sampler 655: continentalness=0.50 erosion=0.00 weirdness=-0.10
// biome noise sampler 656: continentalness=0.60 erosion=0.10 weirdness=0.00
// biome noise sampler 657: continentalness=0.70 erosion=0.20 weirdness=0.10
// biome noise sampler 658: continentalness=0.80 erosion=0.30 weirdness=0.20
// biome noise sampler 659: continentalness=0.90 erosion=0.40 weirdness=0.30
// biome noise sampler 660: continentalness=-1.00 erosion=-1.00 weirdness=0.40
// biome noise sampler 661: continentalness=-0.90 erosion=-0.90 weirdness=0.50
// biome noise sampler 662: continentalness=-0.80 erosion=-0.80 weirdness=0.60
// biome noise sampler 663: continentalness=-0.70 erosion=-0.70 weirdness=-1.00
// biome noise sampler 664: continentalness=-0.60 erosion=-0.60 weirdness=-0.90
// biome noise sampler 665: continentalness=-0.50 erosion=-0.50 weirdness=-0.80
// biome noise sampler 666: continentalness=-0.40 erosion=-0.40 weirdness=-0.70
// biome noise sampler 667: continentalness=-0.30 erosion=-0.30 weirdness=-0.60
// biome noise sampler 668: continentalness=-0.20 erosion=-0.20 weirdness=-0.50
// biome noise sampler 669: continentalness=-0.10 erosion=-0.10 weirdness=-0.40
// biome noise sampler 670: continentalness=0.00 erosion=0.00 weirdness=-0.30
// biome noise sampler 671: continentalness=0.10 erosion=0.10 weirdness=-0.20
// biome noise sampler 672: continentalness=0.20 erosion=0.20 weirdness=-0.10
// biome noise sampler 673: continentalness=0.30 erosion=0.30 weirdness=0.00
// biome noise sampler 674: continentalness=0.40 erosion=0.40 weirdness=0.10
// biome noise sampler 675: continentalness=0.50 erosion=-1.00 weirdness=0.20
// biome noise sampler 676: continentalness=0.60 erosion=-0.90 weirdness=0.30
// biome noise sampler 677: continentalness=0.70 erosion=-0.80 weirdness=0.40
// biome noise sampler 678: continentalness=0.80 erosion=-0.70 weirdness=0.50
// biome noise sampler 679: continentalness=0.90 erosion=-0.60 weirdness=0.60
// biome noise sampler 680: continentalness=-1.00 erosion=-0.50 weirdness=-1.00
// biome noise sampler 681: continentalness=-0.90 erosion=-0.40 weirdness=-0.90
// biome noise sampler 682: continentalness=-0.80 erosion=-0.30 weirdness=-0.80
// biome noise sampler 683: continentalness=-0.70 erosion=-0.20 weirdness=-0.70
// biome noise sampler 684: continentalness=-0.60 erosion=-0.10 weirdness=-0.60
// biome noise sampler 685: continentalness=-0.50 erosion=0.00 weirdness=-0.50
// biome noise sampler 686: continentalness=-0.40 erosion=0.10 weirdness=-0.40
// biome noise sampler 687: continentalness=-0.30 erosion=0.20 weirdness=-0.30
// biome noise sampler 688: continentalness=-0.20 erosion=0.30 weirdness=-0.20
// biome noise sampler 689: continentalness=-0.10 erosion=0.40 weirdness=-0.10
// biome noise sampler 690: continentalness=0.00 erosion=-1.00 weirdness=0.00
// biome noise sampler 691: continentalness=0.10 erosion=-0.90 weirdness=0.10
// biome noise sampler 692: continentalness=0.20 erosion=-0.80 weirdness=0.20
// biome noise sampler 693: continentalness=0.30 erosion=-0.70 weirdness=0.30
// biome noise sampler 694: continentalness=0.40 erosion=-0.60 weirdness=0.40
// biome noise sampler 695: continentalness=0.50 erosion=-0.50 weirdness=0.50
// biome noise sampler 696: continentalness=0.60 erosion=-0.40 weirdness=0.60
// biome noise sampler 697: continentalness=0.70 erosion=-0.30 weirdness=-1.00
// biome noise sampler 698: continentalness=0.80 erosion=-0.20 weirdness=-0.90
// biome noise sampler 699: continentalness=0.90 erosion=-0.10 weirdness=-0.80
// biome noise sampler 700: continentalness=-1.00 erosion=0.00 weirdness=-0.70
// biome noise sampler 701: continentalness=-0.90 erosion=0.10 weirdness=-0.60
// biome noise sampler 702: continentalness=-0.80 erosion=0.20 weirdness=-0.50
// biome noise sampler 703: continentalness=-0.70 erosion=0.30 weirdness=-0.40
// biome noise sampler 704: continentalness=-0.60 erosion=0.40 weirdness=-0.30
// biome noise sampler 705: continentalness=-0.50 erosion=-1.00 weirdness=-0.20
// biome noise sampler 706: continentalness=-0.40 erosion=-0.90 weirdness=-0.10
// biome noise sampler 707: continentalness=-0.30 erosion=-0.80 weirdness=0.00
// biome noise sampler 708: continentalness=-0.20 erosion=-0.70 weirdness=0.10
// biome noise sampler 709: continentalness=-0.10 erosion=-0.60 weirdness=0.20
// biome noise sampler 710: continentalness=0.00 erosion=-0.50 weirdness=0.30
// biome noise sampler 711: continentalness=0.10 erosion=-0.40 weirdness=0.40
// biome noise sampler 712: continentalness=0.20 erosion=-0.30 weirdness=0.50
// biome noise sampler 713: continentalness=0.30 erosion=-0.20 weirdness=0.60
// biome noise sampler 714: continentalness=0.40 erosion=-0.10 weirdness=-1.00
// biome noise sampler 715: continentalness=0.50 erosion=0.00 weirdness=-0.90
// biome noise sampler 716: continentalness=0.60 erosion=0.10 weirdness=-0.80
// biome noise sampler 717: continentalness=0.70 erosion=0.20 weirdness=-0.70
// biome noise sampler 718: continentalness=0.80 erosion=0.30 weirdness=-0.60
// biome noise sampler 719: continentalness=0.90 erosion=0.40 weirdness=-0.50
// biome noise sampler 720: continentalness=-1.00 erosion=-1.00 weirdness=-0.40
// biome noise sampler 721: continentalness=-0.90 erosion=-0.90 weirdness=-0.30
// biome noise sampler 722: continentalness=-0.80 erosion=-0.80 weirdness=-0.20
// biome noise sampler 723: continentalness=-0.70 erosion=-0.70 weirdness=-0.10
// biome noise sampler 724: continentalness=-0.60 erosion=-0.60 weirdness=0.00
// biome noise sampler 725: continentalness=-0.50 erosion=-0.50 weirdness=0.10
// biome noise sampler 726: continentalness=-0.40 erosion=-0.40 weirdness=0.20
// biome noise sampler 727: continentalness=-0.30 erosion=-0.30 weirdness=0.30
// biome noise sampler 728: continentalness=-0.20 erosion=-0.20 weirdness=0.40
// biome noise sampler 729: continentalness=-0.10 erosion=-0.10 weirdness=0.50
// biome noise sampler 730: continentalness=0.00 erosion=0.00 weirdness=0.60
// biome noise sampler 731: continentalness=0.10 erosion=0.10 weirdness=-1.00
// biome noise sampler 732: continentalness=0.20 erosion=0.20 weirdness=-0.90
// biome noise sampler 733: continentalness=0.30 erosion=0.30 weirdness=-0.80
// biome noise sampler 734: continentalness=0.40 erosion=0.40 weirdness=-0.70
// biome noise sampler 735: continentalness=0.50 erosion=-1.00 weirdness=-0.60
// biome noise sampler 736: continentalness=0.60 erosion=-0.90 weirdness=-0.50
// biome noise sampler 737: continentalness=0.70 erosion=-0.80 weirdness=-0.40
// biome noise sampler 738: continentalness=0.80 erosion=-0.70 weirdness=-0.30
// biome noise sampler 739: continentalness=0.90 erosion=-0.60 weirdness=-0.20
// biome noise sampler 740: continentalness=-1.00 erosion=-0.50 weirdness=-0.10
// biome noise sampler 741: continentalness=-0.90 erosion=-0.40 weirdness=0.00
// biome noise sampler 742: continentalness=-0.80 erosion=-0.30 weirdness=0.10
// biome noise sampler 743: continentalness=-0.70 erosion=-0.20 weirdness=0.20
// biome noise sampler 744: continentalness=-0.60 erosion=-0.10 weirdness=0.30
// biome noise sampler 745: continentalness=-0.50 erosion=0.00 weirdness=0.40
// biome noise sampler 746: continentalness=-0.40 erosion=0.10 weirdness=0.50
// biome noise sampler 747: continentalness=-0.30 erosion=0.20 weirdness=0.60
// biome noise sampler 748: continentalness=-0.20 erosion=0.30 weirdness=-1.00
// biome noise sampler 749: continentalness=-0.10 erosion=0.40 weirdness=-0.90
// biome noise sampler 750: continentalness=0.00 erosion=-1.00 weirdness=-0.80
// biome noise sampler 751: continentalness=0.10 erosion=-0.90 weirdness=-0.70
// biome noise sampler 752: continentalness=0.20 erosion=-0.80 weirdness=-0.60
// biome noise sampler 753: continentalness=0.30 erosion=-0.70 weirdness=-0.50
// biome noise sampler 754: continentalness=0.40 erosion=-0.60 weirdness=-0.40
// biome noise sampler 755: continentalness=0.50 erosion=-0.50 weirdness=-0.30
// biome noise sampler 756: continentalness=0.60 erosion=-0.40 weirdness=-0.20
// biome noise sampler 757: continentalness=0.70 erosion=-0.30 weirdness=-0.10
// biome noise sampler 758: continentalness=0.80 erosion=-0.20 weirdness=0.00
// biome noise sampler 759: continentalness=0.90 erosion=-0.10 weirdness=0.10
// biome noise sampler 760: continentalness=-1.00 erosion=0.00 weirdness=0.20
// biome noise sampler 761: continentalness=-0.90 erosion=0.10 weirdness=0.30
// biome noise sampler 762: continentalness=-0.80 erosion=0.20 weirdness=0.40
// biome noise sampler 763: continentalness=-0.70 erosion=0.30 weirdness=0.50
// biome noise sampler 764: continentalness=-0.60 erosion=0.40 weirdness=0.60
// biome noise sampler 765: continentalness=-0.50 erosion=-1.00 weirdness=-1.00
// biome noise sampler 766: continentalness=-0.40 erosion=-0.90 weirdness=-0.90
// biome noise sampler 767: continentalness=-0.30 erosion=-0.80 weirdness=-0.80
// biome noise sampler 768: continentalness=-0.20 erosion=-0.70 weirdness=-0.70
// biome noise sampler 769: continentalness=-0.10 erosion=-0.60 weirdness=-0.60
// biome noise sampler 770: continentalness=0.00 erosion=-0.50 weirdness=-0.50
// biome noise sampler 771: continentalness=0.10 erosion=-0.40 weirdness=-0.40
// biome noise sampler 772: continentalness=0.20 erosion=-0.30 weirdness=-0.30
// biome noise sampler 773: continentalness=0.30 erosion=-0.20 weirdness=-0.20
// biome noise sampler 774: continentalness=0.40 erosion=-0.10 weirdness=-0.10
// biome noise sampler 775: continentalness=0.50 erosion=0.00 weirdness=0.00
// biome noise sampler 776: continentalness=0.60 erosion=0.10 weirdness=0.10
// biome noise sampler 777: continentalness=0.70 erosion=0.20 weirdness=0.20
// biome noise sampler 778: continentalness=0.80 erosion=0.30 weirdness=0.30
// biome noise sampler 779: continentalness=0.90 erosion=0.40 weirdness=0.40
// biome noise sampler 780: continentalness=-1.00 erosion=-1.00 weirdness=0.50
// biome noise sampler 781: continentalness=-0.90 erosion=-0.90 weirdness=0.60
// biome noise sampler 782: continentalness=-0.80 erosion=-0.80 weirdness=-1.00
// biome noise sampler 783: continentalness=-0.70 erosion=-0.70 weirdness=-0.90
// biome noise sampler 784: continentalness=-0.60 erosion=-0.60 weirdness=-0.80
// biome noise sampler 785: continentalness=-0.50 erosion=-0.50 weirdness=-0.70
// biome noise sampler 786: continentalness=-0.40 erosion=-0.40 weirdness=-0.60
// biome noise sampler 787: continentalness=-0.30 erosion=-0.30 weirdness=-0.50
// biome noise sampler 788: continentalness=-0.20 erosion=-0.20 weirdness=-0.40
// biome noise sampler 789: continentalness=-0.10 erosion=-0.10 weirdness=-0.30
// biome noise sampler 790: continentalness=0.00 erosion=0.00 weirdness=-0.20
// biome noise sampler 791: continentalness=0.10 erosion=0.10 weirdness=-0.10
// biome noise sampler 792: continentalness=0.20 erosion=0.20 weirdness=0.00
// biome noise sampler 793: continentalness=0.30 erosion=0.30 weirdness=0.10
// biome noise sampler 794: continentalness=0.40 erosion=0.40 weirdness=0.20
// biome noise sampler 795: continentalness=0.50 erosion=-1.00 weirdness=0.30
// biome noise sampler 796: continentalness=0.60 erosion=-0.90 weirdness=0.40
// biome noise sampler 797: continentalness=0.70 erosion=-0.80 weirdness=0.50
// biome noise sampler 798: continentalness=0.80 erosion=-0.70 weirdness=0.60
// biome noise sampler 799: continentalness=0.90 erosion=-0.60 weirdness=-1.00
