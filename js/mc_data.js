/** Massive data tables: trading, biomes params, ore distribution, villager professions */
window.MC_DATA={
 biomes:{
  ocean:{ temp:0.5, humidity:0.5, elevation:-1, grass:true },
  plains:{ temp:0.8, humidity:0.4, elevation:0.1, grass:true },
  forest:{ temp:0.7, humidity:0.8, elevation:0.2, grass:true },
  desert:{ temp:2.0, humidity:0.0, elevation:0.1, grass:true },
  snow:{ temp:0.0, humidity:0.5, elevation:0.2, grass:true },
  taiga:{ temp:0.25, humidity:0.8, elevation:0.3, grass:true },
  mountains:{ temp:0.2, humidity:0.3, elevation:1.0, grass:true },
  swamp:{ temp:0.8, humidity:0.9, elevation:-0.2, grass:true },
  savanna:{ temp:1.2, humidity:0.0, elevation:0.1, grass:true },
  badlands:{ temp:2.0, humidity:0.0, elevation:0.3, grass:true },
  jungle:{ temp:0.95, humidity:0.9, elevation:0.2, grass:true },
  mushroom_fields:{ temp:0.9, humidity:1.0, elevation:0.0, grass:true },
 },
 oreDistribution:[
  { ore:"ore_0", minY:0, maxY:40, attempts:1, size:2, biome:"any" },
  { ore:"ore_1", minY:1, maxY:41, attempts:2, size:3, biome:"any" },
  { ore:"ore_2", minY:2, maxY:42, attempts:3, size:4, biome:"any" },
  { ore:"ore_3", minY:3, maxY:43, attempts:4, size:5, biome:"any" },
  { ore:"ore_4", minY:4, maxY:44, attempts:5, size:6, biome:"any" },
  { ore:"ore_5", minY:5, maxY:45, attempts:6, size:7, biome:"any" },
  { ore:"ore_6", minY:6, maxY:46, attempts:7, size:8, biome:"any" },
  { ore:"ore_7", minY:7, maxY:47, attempts:8, size:9, biome:"any" },
  { ore:"ore_8", minY:8, maxY:48, attempts:9, size:2, biome:"any" },
  { ore:"ore_9", minY:9, maxY:49, attempts:10, size:3, biome:"any" },
  { ore:"ore_10", minY:10, maxY:50, attempts:11, size:4, biome:"any" },
  { ore:"ore_11", minY:11, maxY:51, attempts:12, size:5, biome:"any" },
  { ore:"ore_12", minY:12, maxY:52, attempts:1, size:6, biome:"any" },
  { ore:"ore_13", minY:13, maxY:53, attempts:2, size:7, biome:"any" },
  { ore:"ore_14", minY:14, maxY:54, attempts:3, size:8, biome:"any" },
  { ore:"ore_15", minY:15, maxY:55, attempts:4, size:9, biome:"any" },
  { ore:"ore_16", minY:16, maxY:56, attempts:5, size:2, biome:"any" },
  { ore:"ore_17", minY:17, maxY:57, attempts:6, size:3, biome:"any" },
  { ore:"ore_18", minY:18, maxY:58, attempts:7, size:4, biome:"any" },
  { ore:"ore_19", minY:19, maxY:59, attempts:8, size:5, biome:"any" },
  { ore:"ore_0", minY:20, maxY:60, attempts:9, size:6, biome:"any" },
  { ore:"ore_1", minY:21, maxY:61, attempts:10, size:7, biome:"any" },
  { ore:"ore_2", minY:22, maxY:62, attempts:11, size:8, biome:"any" },
  { ore:"ore_3", minY:23, maxY:63, attempts:12, size:9, biome:"any" },
  { ore:"ore_4", minY:24, maxY:64, attempts:1, size:2, biome:"any" },
  { ore:"ore_5", minY:25, maxY:65, attempts:2, size:3, biome:"any" },
  { ore:"ore_6", minY:26, maxY:66, attempts:3, size:4, biome:"any" },
  { ore:"ore_7", minY:27, maxY:67, attempts:4, size:5, biome:"any" },
  { ore:"ore_8", minY:28, maxY:68, attempts:5, size:6, biome:"any" },
  { ore:"ore_9", minY:29, maxY:69, attempts:6, size:7, biome:"any" },
  { ore:"ore_10", minY:30, maxY:70, attempts:7, size:8, biome:"any" },
  { ore:"ore_11", minY:31, maxY:71, attempts:8, size:9, biome:"any" },
  { ore:"ore_12", minY:32, maxY:72, attempts:9, size:2, biome:"any" },
  { ore:"ore_13", minY:33, maxY:73, attempts:10, size:3, biome:"any" },
  { ore:"ore_14", minY:34, maxY:74, attempts:11, size:4, biome:"any" },
  { ore:"ore_15", minY:35, maxY:75, attempts:12, size:5, biome:"any" },
  { ore:"ore_16", minY:36, maxY:76, attempts:1, size:6, biome:"any" },
  { ore:"ore_17", minY:37, maxY:77, attempts:2, size:7, biome:"any" },
  { ore:"ore_18", minY:38, maxY:78, attempts:3, size:8, biome:"any" },
  { ore:"ore_19", minY:39, maxY:79, attempts:4, size:9, biome:"any" },
  { ore:"ore_0", minY:0, maxY:80, attempts:5, size:2, biome:"any" },
  { ore:"ore_1", minY:1, maxY:81, attempts:6, size:3, biome:"any" },
  { ore:"ore_2", minY:2, maxY:82, attempts:7, size:4, biome:"any" },
  { ore:"ore_3", minY:3, maxY:83, attempts:8, size:5, biome:"any" },
  { ore:"ore_4", minY:4, maxY:84, attempts:9, size:6, biome:"any" },
  { ore:"ore_5", minY:5, maxY:85, attempts:10, size:7, biome:"any" },
  { ore:"ore_6", minY:6, maxY:86, attempts:11, size:8, biome:"any" },
  { ore:"ore_7", minY:7, maxY:87, attempts:12, size:9, biome:"any" },
  { ore:"ore_8", minY:8, maxY:88, attempts:1, size:2, biome:"any" },
  { ore:"ore_9", minY:9, maxY:89, attempts:2, size:3, biome:"any" },
  { ore:"ore_10", minY:10, maxY:40, attempts:3, size:4, biome:"any" },
  { ore:"ore_11", minY:11, maxY:41, attempts:4, size:5, biome:"any" },
  { ore:"ore_12", minY:12, maxY:42, attempts:5, size:6, biome:"any" },
  { ore:"ore_13", minY:13, maxY:43, attempts:6, size:7, biome:"any" },
  { ore:"ore_14", minY:14, maxY:44, attempts:7, size:8, biome:"any" },
  { ore:"ore_15", minY:15, maxY:45, attempts:8, size:9, biome:"any" },
  { ore:"ore_16", minY:16, maxY:46, attempts:9, size:2, biome:"any" },
  { ore:"ore_17", minY:17, maxY:47, attempts:10, size:3, biome:"any" },
  { ore:"ore_18", minY:18, maxY:48, attempts:11, size:4, biome:"any" },
  { ore:"ore_19", minY:19, maxY:49, attempts:12, size:5, biome:"any" },
  { ore:"ore_0", minY:20, maxY:50, attempts:1, size:6, biome:"any" },
  { ore:"ore_1", minY:21, maxY:51, attempts:2, size:7, biome:"any" },
  { ore:"ore_2", minY:22, maxY:52, attempts:3, size:8, biome:"any" },
  { ore:"ore_3", minY:23, maxY:53, attempts:4, size:9, biome:"any" },
  { ore:"ore_4", minY:24, maxY:54, attempts:5, size:2, biome:"any" },
  { ore:"ore_5", minY:25, maxY:55, attempts:6, size:3, biome:"any" },
  { ore:"ore_6", minY:26, maxY:56, attempts:7, size:4, biome:"any" },
  { ore:"ore_7", minY:27, maxY:57, attempts:8, size:5, biome:"any" },
  { ore:"ore_8", minY:28, maxY:58, attempts:9, size:6, biome:"any" },
  { ore:"ore_9", minY:29, maxY:59, attempts:10, size:7, biome:"any" },
  { ore:"ore_10", minY:30, maxY:60, attempts:11, size:8, biome:"any" },
  { ore:"ore_11", minY:31, maxY:61, attempts:12, size:9, biome:"any" },
  { ore:"ore_12", minY:32, maxY:62, attempts:1, size:2, biome:"any" },
  { ore:"ore_13", minY:33, maxY:63, attempts:2, size:3, biome:"any" },
  { ore:"ore_14", minY:34, maxY:64, attempts:3, size:4, biome:"any" },
  { ore:"ore_15", minY:35, maxY:65, attempts:4, size:5, biome:"any" },
  { ore:"ore_16", minY:36, maxY:66, attempts:5, size:6, biome:"any" },
  { ore:"ore_17", minY:37, maxY:67, attempts:6, size:7, biome:"any" },
  { ore:"ore_18", minY:38, maxY:68, attempts:7, size:8, biome:"any" },
  { ore:"ore_19", minY:39, maxY:69, attempts:8, size:9, biome:"any" },
  { ore:"ore_0", minY:0, maxY:70, attempts:9, size:2, biome:"any" },
  { ore:"ore_1", minY:1, maxY:71, attempts:10, size:3, biome:"any" },
  { ore:"ore_2", minY:2, maxY:72, attempts:11, size:4, biome:"any" },
  { ore:"ore_3", minY:3, maxY:73, attempts:12, size:5, biome:"any" },
  { ore:"ore_4", minY:4, maxY:74, attempts:1, size:6, biome:"any" },
  { ore:"ore_5", minY:5, maxY:75, attempts:2, size:7, biome:"any" },
  { ore:"ore_6", minY:6, maxY:76, attempts:3, size:8, biome:"any" },
  { ore:"ore_7", minY:7, maxY:77, attempts:4, size:9, biome:"any" },
  { ore:"ore_8", minY:8, maxY:78, attempts:5, size:2, biome:"any" },
  { ore:"ore_9", minY:9, maxY:79, attempts:6, size:3, biome:"any" },
  { ore:"ore_10", minY:10, maxY:80, attempts:7, size:4, biome:"any" },
  { ore:"ore_11", minY:11, maxY:81, attempts:8, size:5, biome:"any" },
  { ore:"ore_12", minY:12, maxY:82, attempts:9, size:6, biome:"any" },
  { ore:"ore_13", minY:13, maxY:83, attempts:10, size:7, biome:"any" },
  { ore:"ore_14", minY:14, maxY:84, attempts:11, size:8, biome:"any" },
  { ore:"ore_15", minY:15, maxY:85, attempts:12, size:9, biome:"any" },
  { ore:"ore_16", minY:16, maxY:86, attempts:1, size:2, biome:"any" },
  { ore:"ore_17", minY:17, maxY:87, attempts:2, size:3, biome:"any" },
  { ore:"ore_18", minY:18, maxY:88, attempts:3, size:4, biome:"any" },
  { ore:"ore_19", minY:19, maxY:89, attempts:4, size:5, biome:"any" },
  { ore:"ore_0", minY:20, maxY:40, attempts:5, size:6, biome:"any" },
  { ore:"ore_1", minY:21, maxY:41, attempts:6, size:7, biome:"any" },
  { ore:"ore_2", minY:22, maxY:42, attempts:7, size:8, biome:"any" },
  { ore:"ore_3", minY:23, maxY:43, attempts:8, size:9, biome:"any" },
  { ore:"ore_4", minY:24, maxY:44, attempts:9, size:2, biome:"any" },
  { ore:"ore_5", minY:25, maxY:45, attempts:10, size:3, biome:"any" },
  { ore:"ore_6", minY:26, maxY:46, attempts:11, size:4, biome:"any" },
  { ore:"ore_7", minY:27, maxY:47, attempts:12, size:5, biome:"any" },
  { ore:"ore_8", minY:28, maxY:48, attempts:1, size:6, biome:"any" },
  { ore:"ore_9", minY:29, maxY:49, attempts:2, size:7, biome:"any" },
  { ore:"ore_10", minY:30, maxY:50, attempts:3, size:8, biome:"any" },
  { ore:"ore_11", minY:31, maxY:51, attempts:4, size:9, biome:"any" },
  { ore:"ore_12", minY:32, maxY:52, attempts:5, size:2, biome:"any" },
  { ore:"ore_13", minY:33, maxY:53, attempts:6, size:3, biome:"any" },
  { ore:"ore_14", minY:34, maxY:54, attempts:7, size:4, biome:"any" },
  { ore:"ore_15", minY:35, maxY:55, attempts:8, size:5, biome:"any" },
  { ore:"ore_16", minY:36, maxY:56, attempts:9, size:6, biome:"any" },
  { ore:"ore_17", minY:37, maxY:57, attempts:10, size:7, biome:"any" },
  { ore:"ore_18", minY:38, maxY:58, attempts:11, size:8, biome:"any" },
  { ore:"ore_19", minY:39, maxY:59, attempts:12, size:9, biome:"any" },
  { ore:"ore_0", minY:0, maxY:60, attempts:1, size:2, biome:"any" },
  { ore:"ore_1", minY:1, maxY:61, attempts:2, size:3, biome:"any" },
  { ore:"ore_2", minY:2, maxY:62, attempts:3, size:4, biome:"any" },
  { ore:"ore_3", minY:3, maxY:63, attempts:4, size:5, biome:"any" },
  { ore:"ore_4", minY:4, maxY:64, attempts:5, size:6, biome:"any" },
  { ore:"ore_5", minY:5, maxY:65, attempts:6, size:7, biome:"any" },
  { ore:"ore_6", minY:6, maxY:66, attempts:7, size:8, biome:"any" },
  { ore:"ore_7", minY:7, maxY:67, attempts:8, size:9, biome:"any" },
  { ore:"ore_8", minY:8, maxY:68, attempts:9, size:2, biome:"any" },
  { ore:"ore_9", minY:9, maxY:69, attempts:10, size:3, biome:"any" },
  { ore:"ore_10", minY:10, maxY:70, attempts:11, size:4, biome:"any" },
  { ore:"ore_11", minY:11, maxY:71, attempts:12, size:5, biome:"any" },
  { ore:"ore_12", minY:12, maxY:72, attempts:1, size:6, biome:"any" },
  { ore:"ore_13", minY:13, maxY:73, attempts:2, size:7, biome:"any" },
  { ore:"ore_14", minY:14, maxY:74, attempts:3, size:8, biome:"any" },
  { ore:"ore_15", minY:15, maxY:75, attempts:4, size:9, biome:"any" },
  { ore:"ore_16", minY:16, maxY:76, attempts:5, size:2, biome:"any" },
  { ore:"ore_17", minY:17, maxY:77, attempts:6, size:3, biome:"any" },
  { ore:"ore_18", minY:18, maxY:78, attempts:7, size:4, biome:"any" },
  { ore:"ore_19", minY:19, maxY:79, attempts:8, size:5, biome:"any" },
  { ore:"ore_0", minY:20, maxY:80, attempts:9, size:6, biome:"any" },
  { ore:"ore_1", minY:21, maxY:81, attempts:10, size:7, biome:"any" },
  { ore:"ore_2", minY:22, maxY:82, attempts:11, size:8, biome:"any" },
  { ore:"ore_3", minY:23, maxY:83, attempts:12, size:9, biome:"any" },
  { ore:"ore_4", minY:24, maxY:84, attempts:1, size:2, biome:"any" },
  { ore:"ore_5", minY:25, maxY:85, attempts:2, size:3, biome:"any" },
  { ore:"ore_6", minY:26, maxY:86, attempts:3, size:4, biome:"any" },
  { ore:"ore_7", minY:27, maxY:87, attempts:4, size:5, biome:"any" },
  { ore:"ore_8", minY:28, maxY:88, attempts:5, size:6, biome:"any" },
  { ore:"ore_9", minY:29, maxY:89, attempts:6, size:7, biome:"any" },
  { ore:"ore_10", minY:30, maxY:40, attempts:7, size:8, biome:"any" },
  { ore:"ore_11", minY:31, maxY:41, attempts:8, size:9, biome:"any" },
  { ore:"ore_12", minY:32, maxY:42, attempts:9, size:2, biome:"any" },
  { ore:"ore_13", minY:33, maxY:43, attempts:10, size:3, biome:"any" },
  { ore:"ore_14", minY:34, maxY:44, attempts:11, size:4, biome:"any" },
  { ore:"ore_15", minY:35, maxY:45, attempts:12, size:5, biome:"any" },
  { ore:"ore_16", minY:36, maxY:46, attempts:1, size:6, biome:"any" },
  { ore:"ore_17", minY:37, maxY:47, attempts:2, size:7, biome:"any" },
  { ore:"ore_18", minY:38, maxY:48, attempts:3, size:8, biome:"any" },
  { ore:"ore_19", minY:39, maxY:49, attempts:4, size:9, biome:"any" },
  { ore:"ore_0", minY:0, maxY:50, attempts:5, size:2, biome:"any" },
  { ore:"ore_1", minY:1, maxY:51, attempts:6, size:3, biome:"any" },
  { ore:"ore_2", minY:2, maxY:52, attempts:7, size:4, biome:"any" },
  { ore:"ore_3", minY:3, maxY:53, attempts:8, size:5, biome:"any" },
  { ore:"ore_4", minY:4, maxY:54, attempts:9, size:6, biome:"any" },
  { ore:"ore_5", minY:5, maxY:55, attempts:10, size:7, biome:"any" },
  { ore:"ore_6", minY:6, maxY:56, attempts:11, size:8, biome:"any" },
  { ore:"ore_7", minY:7, maxY:57, attempts:12, size:9, biome:"any" },
  { ore:"ore_8", minY:8, maxY:58, attempts:1, size:2, biome:"any" },
  { ore:"ore_9", minY:9, maxY:59, attempts:2, size:3, biome:"any" },
  { ore:"ore_10", minY:10, maxY:60, attempts:3, size:4, biome:"any" },
  { ore:"ore_11", minY:11, maxY:61, attempts:4, size:5, biome:"any" },
  { ore:"ore_12", minY:12, maxY:62, attempts:5, size:6, biome:"any" },
  { ore:"ore_13", minY:13, maxY:63, attempts:6, size:7, biome:"any" },
  { ore:"ore_14", minY:14, maxY:64, attempts:7, size:8, biome:"any" },
  { ore:"ore_15", minY:15, maxY:65, attempts:8, size:9, biome:"any" },
  { ore:"ore_16", minY:16, maxY:66, attempts:9, size:2, biome:"any" },
  { ore:"ore_17", minY:17, maxY:67, attempts:10, size:3, biome:"any" },
  { ore:"ore_18", minY:18, maxY:68, attempts:11, size:4, biome:"any" },
  { ore:"ore_19", minY:19, maxY:69, attempts:12, size:5, biome:"any" },
  { ore:"ore_0", minY:20, maxY:70, attempts:1, size:6, biome:"any" },
  { ore:"ore_1", minY:21, maxY:71, attempts:2, size:7, biome:"any" },
  { ore:"ore_2", minY:22, maxY:72, attempts:3, size:8, biome:"any" },
  { ore:"ore_3", minY:23, maxY:73, attempts:4, size:9, biome:"any" },
  { ore:"ore_4", minY:24, maxY:74, attempts:5, size:2, biome:"any" },
  { ore:"ore_5", minY:25, maxY:75, attempts:6, size:3, biome:"any" },
  { ore:"ore_6", minY:26, maxY:76, attempts:7, size:4, biome:"any" },
  { ore:"ore_7", minY:27, maxY:77, attempts:8, size:5, biome:"any" },
  { ore:"ore_8", minY:28, maxY:78, attempts:9, size:6, biome:"any" },
  { ore:"ore_9", minY:29, maxY:79, attempts:10, size:7, biome:"any" },
  { ore:"ore_10", minY:30, maxY:80, attempts:11, size:8, biome:"any" },
  { ore:"ore_11", minY:31, maxY:81, attempts:12, size:9, biome:"any" },
  { ore:"ore_12", minY:32, maxY:82, attempts:1, size:2, biome:"any" },
  { ore:"ore_13", minY:33, maxY:83, attempts:2, size:3, biome:"any" },
  { ore:"ore_14", minY:34, maxY:84, attempts:3, size:4, biome:"any" },
  { ore:"ore_15", minY:35, maxY:85, attempts:4, size:5, biome:"any" },
  { ore:"ore_16", minY:36, maxY:86, attempts:5, size:6, biome:"any" },
  { ore:"ore_17", minY:37, maxY:87, attempts:6, size:7, biome:"any" },
  { ore:"ore_18", minY:38, maxY:88, attempts:7, size:8, biome:"any" },
  { ore:"ore_19", minY:39, maxY:89, attempts:8, size:9, biome:"any" },
  { ore:"ore_0", minY:0, maxY:40, attempts:9, size:2, biome:"any" },
  { ore:"ore_1", minY:1, maxY:41, attempts:10, size:3, biome:"any" },
  { ore:"ore_2", minY:2, maxY:42, attempts:11, size:4, biome:"any" },
  { ore:"ore_3", minY:3, maxY:43, attempts:12, size:5, biome:"any" },
  { ore:"ore_4", minY:4, maxY:44, attempts:1, size:6, biome:"any" },
  { ore:"ore_5", minY:5, maxY:45, attempts:2, size:7, biome:"any" },
  { ore:"ore_6", minY:6, maxY:46, attempts:3, size:8, biome:"any" },
  { ore:"ore_7", minY:7, maxY:47, attempts:4, size:9, biome:"any" },
  { ore:"ore_8", minY:8, maxY:48, attempts:5, size:2, biome:"any" },
  { ore:"ore_9", minY:9, maxY:49, attempts:6, size:3, biome:"any" },
  { ore:"ore_10", minY:10, maxY:50, attempts:7, size:4, biome:"any" },
  { ore:"ore_11", minY:11, maxY:51, attempts:8, size:5, biome:"any" },
  { ore:"ore_12", minY:12, maxY:52, attempts:9, size:6, biome:"any" },
  { ore:"ore_13", minY:13, maxY:53, attempts:10, size:7, biome:"any" },
  { ore:"ore_14", minY:14, maxY:54, attempts:11, size:8, biome:"any" },
  { ore:"ore_15", minY:15, maxY:55, attempts:12, size:9, biome:"any" },
  { ore:"ore_16", minY:16, maxY:56, attempts:1, size:2, biome:"any" },
  { ore:"ore_17", minY:17, maxY:57, attempts:2, size:3, biome:"any" },
  { ore:"ore_18", minY:18, maxY:58, attempts:3, size:4, biome:"any" },
  { ore:"ore_19", minY:19, maxY:59, attempts:4, size:5, biome:"any" },
  { ore:"ore_0", minY:20, maxY:60, attempts:5, size:6, biome:"any" },
  { ore:"ore_1", minY:21, maxY:61, attempts:6, size:7, biome:"any" },
  { ore:"ore_2", minY:22, maxY:62, attempts:7, size:8, biome:"any" },
  { ore:"ore_3", minY:23, maxY:63, attempts:8, size:9, biome:"any" },
  { ore:"ore_4", minY:24, maxY:64, attempts:9, size:2, biome:"any" },
  { ore:"ore_5", minY:25, maxY:65, attempts:10, size:3, biome:"any" },
  { ore:"ore_6", minY:26, maxY:66, attempts:11, size:4, biome:"any" },
  { ore:"ore_7", minY:27, maxY:67, attempts:12, size:5, biome:"any" },
  { ore:"ore_8", minY:28, maxY:68, attempts:1, size:6, biome:"any" },
  { ore:"ore_9", minY:29, maxY:69, attempts:2, size:7, biome:"any" },
  { ore:"ore_10", minY:30, maxY:70, attempts:3, size:8, biome:"any" },
  { ore:"ore_11", minY:31, maxY:71, attempts:4, size:9, biome:"any" },
  { ore:"ore_12", minY:32, maxY:72, attempts:5, size:2, biome:"any" },
  { ore:"ore_13", minY:33, maxY:73, attempts:6, size:3, biome:"any" },
  { ore:"ore_14", minY:34, maxY:74, attempts:7, size:4, biome:"any" },
  { ore:"ore_15", minY:35, maxY:75, attempts:8, size:5, biome:"any" },
  { ore:"ore_16", minY:36, maxY:76, attempts:9, size:6, biome:"any" },
  { ore:"ore_17", minY:37, maxY:77, attempts:10, size:7, biome:"any" },
  { ore:"ore_18", minY:38, maxY:78, attempts:11, size:8, biome:"any" },
  { ore:"ore_19", minY:39, maxY:79, attempts:12, size:9, biome:"any" },
  { ore:"ore_0", minY:0, maxY:80, attempts:1, size:2, biome:"any" },
  { ore:"ore_1", minY:1, maxY:81, attempts:2, size:3, biome:"any" },
  { ore:"ore_2", minY:2, maxY:82, attempts:3, size:4, biome:"any" },
  { ore:"ore_3", minY:3, maxY:83, attempts:4, size:5, biome:"any" },
  { ore:"ore_4", minY:4, maxY:84, attempts:5, size:6, biome:"any" },
  { ore:"ore_5", minY:5, maxY:85, attempts:6, size:7, biome:"any" },
  { ore:"ore_6", minY:6, maxY:86, attempts:7, size:8, biome:"any" },
  { ore:"ore_7", minY:7, maxY:87, attempts:8, size:9, biome:"any" },
  { ore:"ore_8", minY:8, maxY:88, attempts:9, size:2, biome:"any" },
  { ore:"ore_9", minY:9, maxY:89, attempts:10, size:3, biome:"any" },
  { ore:"ore_10", minY:10, maxY:40, attempts:11, size:4, biome:"any" },
  { ore:"ore_11", minY:11, maxY:41, attempts:12, size:5, biome:"any" },
  { ore:"ore_12", minY:12, maxY:42, attempts:1, size:6, biome:"any" },
  { ore:"ore_13", minY:13, maxY:43, attempts:2, size:7, biome:"any" },
  { ore:"ore_14", minY:14, maxY:44, attempts:3, size:8, biome:"any" },
  { ore:"ore_15", minY:15, maxY:45, attempts:4, size:9, biome:"any" },
  { ore:"ore_16", minY:16, maxY:46, attempts:5, size:2, biome:"any" },
  { ore:"ore_17", minY:17, maxY:47, attempts:6, size:3, biome:"any" },
  { ore:"ore_18", minY:18, maxY:48, attempts:7, size:4, biome:"any" },
  { ore:"ore_19", minY:19, maxY:49, attempts:8, size:5, biome:"any" },
  { ore:"ore_0", minY:20, maxY:50, attempts:9, size:6, biome:"any" },
  { ore:"ore_1", minY:21, maxY:51, attempts:10, size:7, biome:"any" },
  { ore:"ore_2", minY:22, maxY:52, attempts:11, size:8, biome:"any" },
  { ore:"ore_3", minY:23, maxY:53, attempts:12, size:9, biome:"any" },
  { ore:"ore_4", minY:24, maxY:54, attempts:1, size:2, biome:"any" },
  { ore:"ore_5", minY:25, maxY:55, attempts:2, size:3, biome:"any" },
  { ore:"ore_6", minY:26, maxY:56, attempts:3, size:4, biome:"any" },
  { ore:"ore_7", minY:27, maxY:57, attempts:4, size:5, biome:"any" },
  { ore:"ore_8", minY:28, maxY:58, attempts:5, size:6, biome:"any" },
  { ore:"ore_9", minY:29, maxY:59, attempts:6, size:7, biome:"any" },
  { ore:"ore_10", minY:30, maxY:60, attempts:7, size:8, biome:"any" },
  { ore:"ore_11", minY:31, maxY:61, attempts:8, size:9, biome:"any" },
  { ore:"ore_12", minY:32, maxY:62, attempts:9, size:2, biome:"any" },
  { ore:"ore_13", minY:33, maxY:63, attempts:10, size:3, biome:"any" },
  { ore:"ore_14", minY:34, maxY:64, attempts:11, size:4, biome:"any" },
  { ore:"ore_15", minY:35, maxY:65, attempts:12, size:5, biome:"any" },
  { ore:"ore_16", minY:36, maxY:66, attempts:1, size:6, biome:"any" },
  { ore:"ore_17", minY:37, maxY:67, attempts:2, size:7, biome:"any" },
  { ore:"ore_18", minY:38, maxY:68, attempts:3, size:8, biome:"any" },
  { ore:"ore_19", minY:39, maxY:69, attempts:4, size:9, biome:"any" },
  { ore:"ore_0", minY:0, maxY:70, attempts:5, size:2, biome:"any" },
  { ore:"ore_1", minY:1, maxY:71, attempts:6, size:3, biome:"any" },
  { ore:"ore_2", minY:2, maxY:72, attempts:7, size:4, biome:"any" },
  { ore:"ore_3", minY:3, maxY:73, attempts:8, size:5, biome:"any" },
  { ore:"ore_4", minY:4, maxY:74, attempts:9, size:6, biome:"any" },
  { ore:"ore_5", minY:5, maxY:75, attempts:10, size:7, biome:"any" },
  { ore:"ore_6", minY:6, maxY:76, attempts:11, size:8, biome:"any" },
  { ore:"ore_7", minY:7, maxY:77, attempts:12, size:9, biome:"any" },
  { ore:"ore_8", minY:8, maxY:78, attempts:1, size:2, biome:"any" },
  { ore:"ore_9", minY:9, maxY:79, attempts:2, size:3, biome:"any" },
  { ore:"ore_10", minY:10, maxY:80, attempts:3, size:4, biome:"any" },
  { ore:"ore_11", minY:11, maxY:81, attempts:4, size:5, biome:"any" },
  { ore:"ore_12", minY:12, maxY:82, attempts:5, size:6, biome:"any" },
  { ore:"ore_13", minY:13, maxY:83, attempts:6, size:7, biome:"any" },
  { ore:"ore_14", minY:14, maxY:84, attempts:7, size:8, biome:"any" },
  { ore:"ore_15", minY:15, maxY:85, attempts:8, size:9, biome:"any" },
  { ore:"ore_16", minY:16, maxY:86, attempts:9, size:2, biome:"any" },
  { ore:"ore_17", minY:17, maxY:87, attempts:10, size:3, biome:"any" },
  { ore:"ore_18", minY:18, maxY:88, attempts:11, size:4, biome:"any" },
  { ore:"ore_19", minY:19, maxY:89, attempts:12, size:5, biome:"any" },
  { ore:"ore_0", minY:20, maxY:40, attempts:1, size:6, biome:"any" },
  { ore:"ore_1", minY:21, maxY:41, attempts:2, size:7, biome:"any" },
  { ore:"ore_2", minY:22, maxY:42, attempts:3, size:8, biome:"any" },
  { ore:"ore_3", minY:23, maxY:43, attempts:4, size:9, biome:"any" },
  { ore:"ore_4", minY:24, maxY:44, attempts:5, size:2, biome:"any" },
  { ore:"ore_5", minY:25, maxY:45, attempts:6, size:3, biome:"any" },
  { ore:"ore_6", minY:26, maxY:46, attempts:7, size:4, biome:"any" },
  { ore:"ore_7", minY:27, maxY:47, attempts:8, size:5, biome:"any" },
  { ore:"ore_8", minY:28, maxY:48, attempts:9, size:6, biome:"any" },
  { ore:"ore_9", minY:29, maxY:49, attempts:10, size:7, biome:"any" },
  { ore:"ore_10", minY:30, maxY:50, attempts:11, size:8, biome:"any" },
  { ore:"ore_11", minY:31, maxY:51, attempts:12, size:9, biome:"any" },
  { ore:"ore_12", minY:32, maxY:52, attempts:1, size:2, biome:"any" },
  { ore:"ore_13", minY:33, maxY:53, attempts:2, size:3, biome:"any" },
  { ore:"ore_14", minY:34, maxY:54, attempts:3, size:4, biome:"any" },
  { ore:"ore_15", minY:35, maxY:55, attempts:4, size:5, biome:"any" },
  { ore:"ore_16", minY:36, maxY:56, attempts:5, size:6, biome:"any" },
  { ore:"ore_17", minY:37, maxY:57, attempts:6, size:7, biome:"any" },
  { ore:"ore_18", minY:38, maxY:58, attempts:7, size:8, biome:"any" },
  { ore:"ore_19", minY:39, maxY:59, attempts:8, size:9, biome:"any" },
  { ore:"ore_0", minY:0, maxY:60, attempts:9, size:2, biome:"any" },
  { ore:"ore_1", minY:1, maxY:61, attempts:10, size:3, biome:"any" },
  { ore:"ore_2", minY:2, maxY:62, attempts:11, size:4, biome:"any" },
  { ore:"ore_3", minY:3, maxY:63, attempts:12, size:5, biome:"any" },
  { ore:"ore_4", minY:4, maxY:64, attempts:1, size:6, biome:"any" },
  { ore:"ore_5", minY:5, maxY:65, attempts:2, size:7, biome:"any" },
  { ore:"ore_6", minY:6, maxY:66, attempts:3, size:8, biome:"any" },
  { ore:"ore_7", minY:7, maxY:67, attempts:4, size:9, biome:"any" },
  { ore:"ore_8", minY:8, maxY:68, attempts:5, size:2, biome:"any" },
  { ore:"ore_9", minY:9, maxY:69, attempts:6, size:3, biome:"any" },
  { ore:"ore_10", minY:10, maxY:70, attempts:7, size:4, biome:"any" },
  { ore:"ore_11", minY:11, maxY:71, attempts:8, size:5, biome:"any" },
  { ore:"ore_12", minY:12, maxY:72, attempts:9, size:6, biome:"any" },
  { ore:"ore_13", minY:13, maxY:73, attempts:10, size:7, biome:"any" },
  { ore:"ore_14", minY:14, maxY:74, attempts:11, size:8, biome:"any" },
  { ore:"ore_15", minY:15, maxY:75, attempts:12, size:9, biome:"any" },
  { ore:"ore_16", minY:16, maxY:76, attempts:1, size:2, biome:"any" },
  { ore:"ore_17", minY:17, maxY:77, attempts:2, size:3, biome:"any" },
  { ore:"ore_18", minY:18, maxY:78, attempts:3, size:4, biome:"any" },
  { ore:"ore_19", minY:19, maxY:79, attempts:4, size:5, biome:"any" },
  { ore:"ore_0", minY:20, maxY:80, attempts:5, size:6, biome:"any" },
  { ore:"ore_1", minY:21, maxY:81, attempts:6, size:7, biome:"any" },
  { ore:"ore_2", minY:22, maxY:82, attempts:7, size:8, biome:"any" },
  { ore:"ore_3", minY:23, maxY:83, attempts:8, size:9, biome:"any" },
  { ore:"ore_4", minY:24, maxY:84, attempts:9, size:2, biome:"any" },
  { ore:"ore_5", minY:25, maxY:85, attempts:10, size:3, biome:"any" },
  { ore:"ore_6", minY:26, maxY:86, attempts:11, size:4, biome:"any" },
  { ore:"ore_7", minY:27, maxY:87, attempts:12, size:5, biome:"any" },
  { ore:"ore_8", minY:28, maxY:88, attempts:1, size:6, biome:"any" },
  { ore:"ore_9", minY:29, maxY:89, attempts:2, size:7, biome:"any" },
  { ore:"ore_10", minY:30, maxY:40, attempts:3, size:8, biome:"any" },
  { ore:"ore_11", minY:31, maxY:41, attempts:4, size:9, biome:"any" },
  { ore:"ore_12", minY:32, maxY:42, attempts:5, size:2, biome:"any" },
  { ore:"ore_13", minY:33, maxY:43, attempts:6, size:3, biome:"any" },
  { ore:"ore_14", minY:34, maxY:44, attempts:7, size:4, biome:"any" },
  { ore:"ore_15", minY:35, maxY:45, attempts:8, size:5, biome:"any" },
  { ore:"ore_16", minY:36, maxY:46, attempts:9, size:6, biome:"any" },
  { ore:"ore_17", minY:37, maxY:47, attempts:10, size:7, biome:"any" },
  { ore:"ore_18", minY:38, maxY:48, attempts:11, size:8, biome:"any" },
  { ore:"ore_19", minY:39, maxY:49, attempts:12, size:9, biome:"any" },
  { ore:"ore_0", minY:0, maxY:50, attempts:1, size:2, biome:"any" },
  { ore:"ore_1", minY:1, maxY:51, attempts:2, size:3, biome:"any" },
  { ore:"ore_2", minY:2, maxY:52, attempts:3, size:4, biome:"any" },
  { ore:"ore_3", minY:3, maxY:53, attempts:4, size:5, biome:"any" },
  { ore:"ore_4", minY:4, maxY:54, attempts:5, size:6, biome:"any" },
  { ore:"ore_5", minY:5, maxY:55, attempts:6, size:7, biome:"any" },
  { ore:"ore_6", minY:6, maxY:56, attempts:7, size:8, biome:"any" },
  { ore:"ore_7", minY:7, maxY:57, attempts:8, size:9, biome:"any" },
  { ore:"ore_8", minY:8, maxY:58, attempts:9, size:2, biome:"any" },
  { ore:"ore_9", minY:9, maxY:59, attempts:10, size:3, biome:"any" },
  { ore:"ore_10", minY:10, maxY:60, attempts:11, size:4, biome:"any" },
  { ore:"ore_11", minY:11, maxY:61, attempts:12, size:5, biome:"any" },
  { ore:"ore_12", minY:12, maxY:62, attempts:1, size:6, biome:"any" },
  { ore:"ore_13", minY:13, maxY:63, attempts:2, size:7, biome:"any" },
  { ore:"ore_14", minY:14, maxY:64, attempts:3, size:8, biome:"any" },
  { ore:"ore_15", minY:15, maxY:65, attempts:4, size:9, biome:"any" },
  { ore:"ore_16", minY:16, maxY:66, attempts:5, size:2, biome:"any" },
  { ore:"ore_17", minY:17, maxY:67, attempts:6, size:3, biome:"any" },
  { ore:"ore_18", minY:18, maxY:68, attempts:7, size:4, biome:"any" },
  { ore:"ore_19", minY:19, maxY:69, attempts:8, size:5, biome:"any" },
  { ore:"ore_0", minY:20, maxY:70, attempts:9, size:6, biome:"any" },
  { ore:"ore_1", minY:21, maxY:71, attempts:10, size:7, biome:"any" },
  { ore:"ore_2", minY:22, maxY:72, attempts:11, size:8, biome:"any" },
  { ore:"ore_3", minY:23, maxY:73, attempts:12, size:9, biome:"any" },
  { ore:"ore_4", minY:24, maxY:74, attempts:1, size:2, biome:"any" },
  { ore:"ore_5", minY:25, maxY:75, attempts:2, size:3, biome:"any" },
  { ore:"ore_6", minY:26, maxY:76, attempts:3, size:4, biome:"any" },
  { ore:"ore_7", minY:27, maxY:77, attempts:4, size:5, biome:"any" },
  { ore:"ore_8", minY:28, maxY:78, attempts:5, size:6, biome:"any" },
  { ore:"ore_9", minY:29, maxY:79, attempts:6, size:7, biome:"any" },
  { ore:"ore_10", minY:30, maxY:80, attempts:7, size:8, biome:"any" },
  { ore:"ore_11", minY:31, maxY:81, attempts:8, size:9, biome:"any" },
  { ore:"ore_12", minY:32, maxY:82, attempts:9, size:2, biome:"any" },
  { ore:"ore_13", minY:33, maxY:83, attempts:10, size:3, biome:"any" },
  { ore:"ore_14", minY:34, maxY:84, attempts:11, size:4, biome:"any" },
  { ore:"ore_15", minY:35, maxY:85, attempts:12, size:5, biome:"any" },
  { ore:"ore_16", minY:36, maxY:86, attempts:1, size:6, biome:"any" },
  { ore:"ore_17", minY:37, maxY:87, attempts:2, size:7, biome:"any" },
  { ore:"ore_18", minY:38, maxY:88, attempts:3, size:8, biome:"any" },
  { ore:"ore_19", minY:39, maxY:89, attempts:4, size:9, biome:"any" },
  { ore:"ore_0", minY:0, maxY:40, attempts:5, size:2, biome:"any" },
  { ore:"ore_1", minY:1, maxY:41, attempts:6, size:3, biome:"any" },
  { ore:"ore_2", minY:2, maxY:42, attempts:7, size:4, biome:"any" },
  { ore:"ore_3", minY:3, maxY:43, attempts:8, size:5, biome:"any" },
  { ore:"ore_4", minY:4, maxY:44, attempts:9, size:6, biome:"any" },
  { ore:"ore_5", minY:5, maxY:45, attempts:10, size:7, biome:"any" },
  { ore:"ore_6", minY:6, maxY:46, attempts:11, size:8, biome:"any" },
  { ore:"ore_7", minY:7, maxY:47, attempts:12, size:9, biome:"any" },
  { ore:"ore_8", minY:8, maxY:48, attempts:1, size:2, biome:"any" },
  { ore:"ore_9", minY:9, maxY:49, attempts:2, size:3, biome:"any" },
  { ore:"ore_10", minY:10, maxY:50, attempts:3, size:4, biome:"any" },
  { ore:"ore_11", minY:11, maxY:51, attempts:4, size:5, biome:"any" },
  { ore:"ore_12", minY:12, maxY:52, attempts:5, size:6, biome:"any" },
  { ore:"ore_13", minY:13, maxY:53, attempts:6, size:7, biome:"any" },
  { ore:"ore_14", minY:14, maxY:54, attempts:7, size:8, biome:"any" },
  { ore:"ore_15", minY:15, maxY:55, attempts:8, size:9, biome:"any" },
  { ore:"ore_16", minY:16, maxY:56, attempts:9, size:2, biome:"any" },
  { ore:"ore_17", minY:17, maxY:57, attempts:10, size:3, biome:"any" },
  { ore:"ore_18", minY:18, maxY:58, attempts:11, size:4, biome:"any" },
  { ore:"ore_19", minY:19, maxY:59, attempts:12, size:5, biome:"any" },
  { ore:"ore_0", minY:20, maxY:60, attempts:1, size:6, biome:"any" },
  { ore:"ore_1", minY:21, maxY:61, attempts:2, size:7, biome:"any" },
  { ore:"ore_2", minY:22, maxY:62, attempts:3, size:8, biome:"any" },
  { ore:"ore_3", minY:23, maxY:63, attempts:4, size:9, biome:"any" },
  { ore:"ore_4", minY:24, maxY:64, attempts:5, size:2, biome:"any" },
  { ore:"ore_5", minY:25, maxY:65, attempts:6, size:3, biome:"any" },
  { ore:"ore_6", minY:26, maxY:66, attempts:7, size:4, biome:"any" },
  { ore:"ore_7", minY:27, maxY:67, attempts:8, size:5, biome:"any" },
  { ore:"ore_8", minY:28, maxY:68, attempts:9, size:6, biome:"any" },
  { ore:"ore_9", minY:29, maxY:69, attempts:10, size:7, biome:"any" },
  { ore:"ore_10", minY:30, maxY:70, attempts:11, size:8, biome:"any" },
  { ore:"ore_11", minY:31, maxY:71, attempts:12, size:9, biome:"any" },
  { ore:"ore_12", minY:32, maxY:72, attempts:1, size:2, biome:"any" },
  { ore:"ore_13", minY:33, maxY:73, attempts:2, size:3, biome:"any" },
  { ore:"ore_14", minY:34, maxY:74, attempts:3, size:4, biome:"any" },
  { ore:"ore_15", minY:35, maxY:75, attempts:4, size:5, biome:"any" },
  { ore:"ore_16", minY:36, maxY:76, attempts:5, size:6, biome:"any" },
  { ore:"ore_17", minY:37, maxY:77, attempts:6, size:7, biome:"any" },
  { ore:"ore_18", minY:38, maxY:78, attempts:7, size:8, biome:"any" },
  { ore:"ore_19", minY:39, maxY:79, attempts:8, size:9, biome:"any" },
  { ore:"ore_0", minY:0, maxY:80, attempts:9, size:2, biome:"any" },
  { ore:"ore_1", minY:1, maxY:81, attempts:10, size:3, biome:"any" },
  { ore:"ore_2", minY:2, maxY:82, attempts:11, size:4, biome:"any" },
  { ore:"ore_3", minY:3, maxY:83, attempts:12, size:5, biome:"any" },
  { ore:"ore_4", minY:4, maxY:84, attempts:1, size:6, biome:"any" },
  { ore:"ore_5", minY:5, maxY:85, attempts:2, size:7, biome:"any" },
  { ore:"ore_6", minY:6, maxY:86, attempts:3, size:8, biome:"any" },
  { ore:"ore_7", minY:7, maxY:87, attempts:4, size:9, biome:"any" },
  { ore:"ore_8", minY:8, maxY:88, attempts:5, size:2, biome:"any" },
  { ore:"ore_9", minY:9, maxY:89, attempts:6, size:3, biome:"any" },
  { ore:"ore_10", minY:10, maxY:40, attempts:7, size:4, biome:"any" },
  { ore:"ore_11", minY:11, maxY:41, attempts:8, size:5, biome:"any" },
  { ore:"ore_12", minY:12, maxY:42, attempts:9, size:6, biome:"any" },
  { ore:"ore_13", minY:13, maxY:43, attempts:10, size:7, biome:"any" },
  { ore:"ore_14", minY:14, maxY:44, attempts:11, size:8, biome:"any" },
  { ore:"ore_15", minY:15, maxY:45, attempts:12, size:9, biome:"any" },
  { ore:"ore_16", minY:16, maxY:46, attempts:1, size:2, biome:"any" },
  { ore:"ore_17", minY:17, maxY:47, attempts:2, size:3, biome:"any" },
  { ore:"ore_18", minY:18, maxY:48, attempts:3, size:4, biome:"any" },
  { ore:"ore_19", minY:19, maxY:49, attempts:4, size:5, biome:"any" },
  { ore:"ore_0", minY:20, maxY:50, attempts:5, size:6, biome:"any" },
  { ore:"ore_1", minY:21, maxY:51, attempts:6, size:7, biome:"any" },
  { ore:"ore_2", minY:22, maxY:52, attempts:7, size:8, biome:"any" },
  { ore:"ore_3", minY:23, maxY:53, attempts:8, size:9, biome:"any" },
  { ore:"ore_4", minY:24, maxY:54, attempts:9, size:2, biome:"any" },
  { ore:"ore_5", minY:25, maxY:55, attempts:10, size:3, biome:"any" },
  { ore:"ore_6", minY:26, maxY:56, attempts:11, size:4, biome:"any" },
  { ore:"ore_7", minY:27, maxY:57, attempts:12, size:5, biome:"any" },
  { ore:"ore_8", minY:28, maxY:58, attempts:1, size:6, biome:"any" },
  { ore:"ore_9", minY:29, maxY:59, attempts:2, size:7, biome:"any" },
  { ore:"ore_10", minY:30, maxY:60, attempts:3, size:8, biome:"any" },
  { ore:"ore_11", minY:31, maxY:61, attempts:4, size:9, biome:"any" },
  { ore:"ore_12", minY:32, maxY:62, attempts:5, size:2, biome:"any" },
  { ore:"ore_13", minY:33, maxY:63, attempts:6, size:3, biome:"any" },
  { ore:"ore_14", minY:34, maxY:64, attempts:7, size:4, biome:"any" },
  { ore:"ore_15", minY:35, maxY:65, attempts:8, size:5, biome:"any" },
  { ore:"ore_16", minY:36, maxY:66, attempts:9, size:6, biome:"any" },
  { ore:"ore_17", minY:37, maxY:67, attempts:10, size:7, biome:"any" },
  { ore:"ore_18", minY:38, maxY:68, attempts:11, size:8, biome:"any" },
  { ore:"ore_19", minY:39, maxY:69, attempts:12, size:9, biome:"any" },
  { ore:"ore_0", minY:0, maxY:70, attempts:1, size:2, biome:"any" },
  { ore:"ore_1", minY:1, maxY:71, attempts:2, size:3, biome:"any" },
  { ore:"ore_2", minY:2, maxY:72, attempts:3, size:4, biome:"any" },
  { ore:"ore_3", minY:3, maxY:73, attempts:4, size:5, biome:"any" },
  { ore:"ore_4", minY:4, maxY:74, attempts:5, size:6, biome:"any" },
  { ore:"ore_5", minY:5, maxY:75, attempts:6, size:7, biome:"any" },
  { ore:"ore_6", minY:6, maxY:76, attempts:7, size:8, biome:"any" },
  { ore:"ore_7", minY:7, maxY:77, attempts:8, size:9, biome:"any" },
  { ore:"ore_8", minY:8, maxY:78, attempts:9, size:2, biome:"any" },
  { ore:"ore_9", minY:9, maxY:79, attempts:10, size:3, biome:"any" },
  { ore:"ore_10", minY:10, maxY:80, attempts:11, size:4, biome:"any" },
  { ore:"ore_11", minY:11, maxY:81, attempts:12, size:5, biome:"any" },
  { ore:"ore_12", minY:12, maxY:82, attempts:1, size:6, biome:"any" },
  { ore:"ore_13", minY:13, maxY:83, attempts:2, size:7, biome:"any" },
  { ore:"ore_14", minY:14, maxY:84, attempts:3, size:8, biome:"any" },
  { ore:"ore_15", minY:15, maxY:85, attempts:4, size:9, biome:"any" },
  { ore:"ore_16", minY:16, maxY:86, attempts:5, size:2, biome:"any" },
  { ore:"ore_17", minY:17, maxY:87, attempts:6, size:3, biome:"any" },
  { ore:"ore_18", minY:18, maxY:88, attempts:7, size:4, biome:"any" },
  { ore:"ore_19", minY:19, maxY:89, attempts:8, size:5, biome:"any" },
 ],
 villagerTrades:[
  { profession:"prof_0", level:1, buy:"item_0", buyCount:1, sell:"item_0", sellCount:1 },
  { profession:"prof_1", level:2, buy:"item_1", buyCount:2, sell:"item_3", sellCount:2 },
  { profession:"prof_2", level:3, buy:"item_2", buyCount:3, sell:"item_6", sellCount:3 },
  { profession:"prof_3", level:4, buy:"item_3", buyCount:4, sell:"item_9", sellCount:4 },
  { profession:"prof_4", level:5, buy:"item_4", buyCount:5, sell:"item_12", sellCount:5 },
  { profession:"prof_5", level:1, buy:"item_5", buyCount:6, sell:"item_15", sellCount:6 },
  { profession:"prof_6", level:2, buy:"item_6", buyCount:7, sell:"item_18", sellCount:7 },
  { profession:"prof_7", level:3, buy:"item_7", buyCount:8, sell:"item_21", sellCount:8 },
  { profession:"prof_8", level:4, buy:"item_8", buyCount:9, sell:"item_24", sellCount:1 },
  { profession:"prof_9", level:5, buy:"item_9", buyCount:10, sell:"item_27", sellCount:2 },
  { profession:"prof_10", level:1, buy:"item_10", buyCount:11, sell:"item_30", sellCount:3 },
  { profession:"prof_11", level:2, buy:"item_11", buyCount:12, sell:"item_33", sellCount:4 },
  { profession:"prof_12", level:3, buy:"item_12", buyCount:13, sell:"item_36", sellCount:5 },
  { profession:"prof_0", level:4, buy:"item_13", buyCount:14, sell:"item_39", sellCount:6 },
  { profession:"prof_1", level:5, buy:"item_14", buyCount:15, sell:"item_42", sellCount:7 },
  { profession:"prof_2", level:1, buy:"item_15", buyCount:16, sell:"item_45", sellCount:8 },
  { profession:"prof_3", level:2, buy:"item_16", buyCount:1, sell:"item_48", sellCount:1 },
  { profession:"prof_4", level:3, buy:"item_17", buyCount:2, sell:"item_51", sellCount:2 },
  { profession:"prof_5", level:4, buy:"item_18", buyCount:3, sell:"item_54", sellCount:3 },
  { profession:"prof_6", level:5, buy:"item_19", buyCount:4, sell:"item_57", sellCount:4 },
  { profession:"prof_7", level:1, buy:"item_20", buyCount:5, sell:"item_60", sellCount:5 },
  { profession:"prof_8", level:2, buy:"item_21", buyCount:6, sell:"item_63", sellCount:6 },
  { profession:"prof_9", level:3, buy:"item_22", buyCount:7, sell:"item_66", sellCount:7 },
  { profession:"prof_10", level:4, buy:"item_23", buyCount:8, sell:"item_69", sellCount:8 },
  { profession:"prof_11", level:5, buy:"item_24", buyCount:9, sell:"item_72", sellCount:1 },
  { profession:"prof_12", level:1, buy:"item_25", buyCount:10, sell:"item_75", sellCount:2 },
  { profession:"prof_0", level:2, buy:"item_26", buyCount:11, sell:"item_78", sellCount:3 },
  { profession:"prof_1", level:3, buy:"item_27", buyCount:12, sell:"item_1", sellCount:4 },
  { profession:"prof_2", level:4, buy:"item_28", buyCount:13, sell:"item_4", sellCount:5 },
  { profession:"prof_3", level:5, buy:"item_29", buyCount:14, sell:"item_7", sellCount:6 },
  { profession:"prof_4", level:1, buy:"item_30", buyCount:15, sell:"item_10", sellCount:7 },
  { profession:"prof_5", level:2, buy:"item_31", buyCount:16, sell:"item_13", sellCount:8 },
  { profession:"prof_6", level:3, buy:"item_32", buyCount:1, sell:"item_16", sellCount:1 },
  { profession:"prof_7", level:4, buy:"item_33", buyCount:2, sell:"item_19", sellCount:2 },
  { profession:"prof_8", level:5, buy:"item_34", buyCount:3, sell:"item_22", sellCount:3 },
  { profession:"prof_9", level:1, buy:"item_35", buyCount:4, sell:"item_25", sellCount:4 },
  { profession:"prof_10", level:2, buy:"item_36", buyCount:5, sell:"item_28", sellCount:5 },
  { profession:"prof_11", level:3, buy:"item_37", buyCount:6, sell:"item_31", sellCount:6 },
  { profession:"prof_12", level:4, buy:"item_38", buyCount:7, sell:"item_34", sellCount:7 },
  { profession:"prof_0", level:5, buy:"item_39", buyCount:8, sell:"item_37", sellCount:8 },
  { profession:"prof_1", level:1, buy:"item_40", buyCount:9, sell:"item_40", sellCount:1 },
  { profession:"prof_2", level:2, buy:"item_41", buyCount:10, sell:"item_43", sellCount:2 },
  { profession:"prof_3", level:3, buy:"item_42", buyCount:11, sell:"item_46", sellCount:3 },
  { profession:"prof_4", level:4, buy:"item_43", buyCount:12, sell:"item_49", sellCount:4 },
  { profession:"prof_5", level:5, buy:"item_44", buyCount:13, sell:"item_52", sellCount:5 },
  { profession:"prof_6", level:1, buy:"item_45", buyCount:14, sell:"item_55", sellCount:6 },
  { profession:"prof_7", level:2, buy:"item_46", buyCount:15, sell:"item_58", sellCount:7 },
  { profession:"prof_8", level:3, buy:"item_47", buyCount:16, sell:"item_61", sellCount:8 },
  { profession:"prof_9", level:4, buy:"item_48", buyCount:1, sell:"item_64", sellCount:1 },
  { profession:"prof_10", level:5, buy:"item_49", buyCount:2, sell:"item_67", sellCount:2 },
  { profession:"prof_11", level:1, buy:"item_0", buyCount:3, sell:"item_70", sellCount:3 },
  { profession:"prof_12", level:2, buy:"item_1", buyCount:4, sell:"item_73", sellCount:4 },
  { profession:"prof_0", level:3, buy:"item_2", buyCount:5, sell:"item_76", sellCount:5 },
  { profession:"prof_1", level:4, buy:"item_3", buyCount:6, sell:"item_79", sellCount:6 },
  { profession:"prof_2", level:5, buy:"item_4", buyCount:7, sell:"item_2", sellCount:7 },
  { profession:"prof_3", level:1, buy:"item_5", buyCount:8, sell:"item_5", sellCount:8 },
  { profession:"prof_4", level:2, buy:"item_6", buyCount:9, sell:"item_8", sellCount:1 },
  { profession:"prof_5", level:3, buy:"item_7", buyCount:10, sell:"item_11", sellCount:2 },
  { profession:"prof_6", level:4, buy:"item_8", buyCount:11, sell:"item_14", sellCount:3 },
  { profession:"prof_7", level:5, buy:"item_9", buyCount:12, sell:"item_17", sellCount:4 },
  { profession:"prof_8", level:1, buy:"item_10", buyCount:13, sell:"item_20", sellCount:5 },
  { profession:"prof_9", level:2, buy:"item_11", buyCount:14, sell:"item_23", sellCount:6 },
  { profession:"prof_10", level:3, buy:"item_12", buyCount:15, sell:"item_26", sellCount:7 },
  { profession:"prof_11", level:4, buy:"item_13", buyCount:16, sell:"item_29", sellCount:8 },
  { profession:"prof_12", level:5, buy:"item_14", buyCount:1, sell:"item_32", sellCount:1 },
  { profession:"prof_0", level:1, buy:"item_15", buyCount:2, sell:"item_35", sellCount:2 },
  { profession:"prof_1", level:2, buy:"item_16", buyCount:3, sell:"item_38", sellCount:3 },
  { profession:"prof_2", level:3, buy:"item_17", buyCount:4, sell:"item_41", sellCount:4 },
  { profession:"prof_3", level:4, buy:"item_18", buyCount:5, sell:"item_44", sellCount:5 },
  { profession:"prof_4", level:5, buy:"item_19", buyCount:6, sell:"item_47", sellCount:6 },
  { profession:"prof_5", level:1, buy:"item_20", buyCount:7, sell:"item_50", sellCount:7 },
  { profession:"prof_6", level:2, buy:"item_21", buyCount:8, sell:"item_53", sellCount:8 },
  { profession:"prof_7", level:3, buy:"item_22", buyCount:9, sell:"item_56", sellCount:1 },
  { profession:"prof_8", level:4, buy:"item_23", buyCount:10, sell:"item_59", sellCount:2 },
  { profession:"prof_9", level:5, buy:"item_24", buyCount:11, sell:"item_62", sellCount:3 },
  { profession:"prof_10", level:1, buy:"item_25", buyCount:12, sell:"item_65", sellCount:4 },
  { profession:"prof_11", level:2, buy:"item_26", buyCount:13, sell:"item_68", sellCount:5 },
  { profession:"prof_12", level:3, buy:"item_27", buyCount:14, sell:"item_71", sellCount:6 },
  { profession:"prof_0", level:4, buy:"item_28", buyCount:15, sell:"item_74", sellCount:7 },
  { profession:"prof_1", level:5, buy:"item_29", buyCount:16, sell:"item_77", sellCount:8 },
  { profession:"prof_2", level:1, buy:"item_30", buyCount:1, sell:"item_0", sellCount:1 },
  { profession:"prof_3", level:2, buy:"item_31", buyCount:2, sell:"item_3", sellCount:2 },
  { profession:"prof_4", level:3, buy:"item_32", buyCount:3, sell:"item_6", sellCount:3 },
  { profession:"prof_5", level:4, buy:"item_33", buyCount:4, sell:"item_9", sellCount:4 },
  { profession:"prof_6", level:5, buy:"item_34", buyCount:5, sell:"item_12", sellCount:5 },
  { profession:"prof_7", level:1, buy:"item_35", buyCount:6, sell:"item_15", sellCount:6 },
  { profession:"prof_8", level:2, buy:"item_36", buyCount:7, sell:"item_18", sellCount:7 },
  { profession:"prof_9", level:3, buy:"item_37", buyCount:8, sell:"item_21", sellCount:8 },
  { profession:"prof_10", level:4, buy:"item_38", buyCount:9, sell:"item_24", sellCount:1 },
  { profession:"prof_11", level:5, buy:"item_39", buyCount:10, sell:"item_27", sellCount:2 },
  { profession:"prof_12", level:1, buy:"item_40", buyCount:11, sell:"item_30", sellCount:3 },
  { profession:"prof_0", level:2, buy:"item_41", buyCount:12, sell:"item_33", sellCount:4 },
  { profession:"prof_1", level:3, buy:"item_42", buyCount:13, sell:"item_36", sellCount:5 },
  { profession:"prof_2", level:4, buy:"item_43", buyCount:14, sell:"item_39", sellCount:6 },
  { profession:"prof_3", level:5, buy:"item_44", buyCount:15, sell:"item_42", sellCount:7 },
  { profession:"prof_4", level:1, buy:"item_45", buyCount:16, sell:"item_45", sellCount:8 },
  { profession:"prof_5", level:2, buy:"item_46", buyCount:1, sell:"item_48", sellCount:1 },
  { profession:"prof_6", level:3, buy:"item_47", buyCount:2, sell:"item_51", sellCount:2 },
  { profession:"prof_7", level:4, buy:"item_48", buyCount:3, sell:"item_54", sellCount:3 },
  { profession:"prof_8", level:5, buy:"item_49", buyCount:4, sell:"item_57", sellCount:4 },
  { profession:"prof_9", level:1, buy:"item_0", buyCount:5, sell:"item_60", sellCount:5 },
  { profession:"prof_10", level:2, buy:"item_1", buyCount:6, sell:"item_63", sellCount:6 },
  { profession:"prof_11", level:3, buy:"item_2", buyCount:7, sell:"item_66", sellCount:7 },
  { profession:"prof_12", level:4, buy:"item_3", buyCount:8, sell:"item_69", sellCount:8 },
  { profession:"prof_0", level:5, buy:"item_4", buyCount:9, sell:"item_72", sellCount:1 },
  { profession:"prof_1", level:1, buy:"item_5", buyCount:10, sell:"item_75", sellCount:2 },
  { profession:"prof_2", level:2, buy:"item_6", buyCount:11, sell:"item_78", sellCount:3 },
  { profession:"prof_3", level:3, buy:"item_7", buyCount:12, sell:"item_1", sellCount:4 },
  { profession:"prof_4", level:4, buy:"item_8", buyCount:13, sell:"item_4", sellCount:5 },
  { profession:"prof_5", level:5, buy:"item_9", buyCount:14, sell:"item_7", sellCount:6 },
  { profession:"prof_6", level:1, buy:"item_10", buyCount:15, sell:"item_10", sellCount:7 },
  { profession:"prof_7", level:2, buy:"item_11", buyCount:16, sell:"item_13", sellCount:8 },
  { profession:"prof_8", level:3, buy:"item_12", buyCount:1, sell:"item_16", sellCount:1 },
  { profession:"prof_9", level:4, buy:"item_13", buyCount:2, sell:"item_19", sellCount:2 },
  { profession:"prof_10", level:5, buy:"item_14", buyCount:3, sell:"item_22", sellCount:3 },
  { profession:"prof_11", level:1, buy:"item_15", buyCount:4, sell:"item_25", sellCount:4 },
  { profession:"prof_12", level:2, buy:"item_16", buyCount:5, sell:"item_28", sellCount:5 },
  { profession:"prof_0", level:3, buy:"item_17", buyCount:6, sell:"item_31", sellCount:6 },
  { profession:"prof_1", level:4, buy:"item_18", buyCount:7, sell:"item_34", sellCount:7 },
  { profession:"prof_2", level:5, buy:"item_19", buyCount:8, sell:"item_37", sellCount:8 },
  { profession:"prof_3", level:1, buy:"item_20", buyCount:9, sell:"item_40", sellCount:1 },
  { profession:"prof_4", level:2, buy:"item_21", buyCount:10, sell:"item_43", sellCount:2 },
  { profession:"prof_5", level:3, buy:"item_22", buyCount:11, sell:"item_46", sellCount:3 },
  { profession:"prof_6", level:4, buy:"item_23", buyCount:12, sell:"item_49", sellCount:4 },
  { profession:"prof_7", level:5, buy:"item_24", buyCount:13, sell:"item_52", sellCount:5 },
  { profession:"prof_8", level:1, buy:"item_25", buyCount:14, sell:"item_55", sellCount:6 },
  { profession:"prof_9", level:2, buy:"item_26", buyCount:15, sell:"item_58", sellCount:7 },
  { profession:"prof_10", level:3, buy:"item_27", buyCount:16, sell:"item_61", sellCount:8 },
  { profession:"prof_11", level:4, buy:"item_28", buyCount:1, sell:"item_64", sellCount:1 },
  { profession:"prof_12", level:5, buy:"item_29", buyCount:2, sell:"item_67", sellCount:2 },
  { profession:"prof_0", level:1, buy:"item_30", buyCount:3, sell:"item_70", sellCount:3 },
  { profession:"prof_1", level:2, buy:"item_31", buyCount:4, sell:"item_73", sellCount:4 },
  { profession:"prof_2", level:3, buy:"item_32", buyCount:5, sell:"item_76", sellCount:5 },
  { profession:"prof_3", level:4, buy:"item_33", buyCount:6, sell:"item_79", sellCount:6 },
  { profession:"prof_4", level:5, buy:"item_34", buyCount:7, sell:"item_2", sellCount:7 },
  { profession:"prof_5", level:1, buy:"item_35", buyCount:8, sell:"item_5", sellCount:8 },
  { profession:"prof_6", level:2, buy:"item_36", buyCount:9, sell:"item_8", sellCount:1 },
  { profession:"prof_7", level:3, buy:"item_37", buyCount:10, sell:"item_11", sellCount:2 },
  { profession:"prof_8", level:4, buy:"item_38", buyCount:11, sell:"item_14", sellCount:3 },
  { profession:"prof_9", level:5, buy:"item_39", buyCount:12, sell:"item_17", sellCount:4 },
  { profession:"prof_10", level:1, buy:"item_40", buyCount:13, sell:"item_20", sellCount:5 },
  { profession:"prof_11", level:2, buy:"item_41", buyCount:14, sell:"item_23", sellCount:6 },
  { profession:"prof_12", level:3, buy:"item_42", buyCount:15, sell:"item_26", sellCount:7 },
  { profession:"prof_0", level:4, buy:"item_43", buyCount:16, sell:"item_29", sellCount:8 },
  { profession:"prof_1", level:5, buy:"item_44", buyCount:1, sell:"item_32", sellCount:1 },
  { profession:"prof_2", level:1, buy:"item_45", buyCount:2, sell:"item_35", sellCount:2 },
  { profession:"prof_3", level:2, buy:"item_46", buyCount:3, sell:"item_38", sellCount:3 },
  { profession:"prof_4", level:3, buy:"item_47", buyCount:4, sell:"item_41", sellCount:4 },
  { profession:"prof_5", level:4, buy:"item_48", buyCount:5, sell:"item_44", sellCount:5 },
  { profession:"prof_6", level:5, buy:"item_49", buyCount:6, sell:"item_47", sellCount:6 },
  { profession:"prof_7", level:1, buy:"item_0", buyCount:7, sell:"item_50", sellCount:7 },
  { profession:"prof_8", level:2, buy:"item_1", buyCount:8, sell:"item_53", sellCount:8 },
  { profession:"prof_9", level:3, buy:"item_2", buyCount:9, sell:"item_56", sellCount:1 },
  { profession:"prof_10", level:4, buy:"item_3", buyCount:10, sell:"item_59", sellCount:2 },
  { profession:"prof_11", level:5, buy:"item_4", buyCount:11, sell:"item_62", sellCount:3 },
  { profession:"prof_12", level:1, buy:"item_5", buyCount:12, sell:"item_65", sellCount:4 },
  { profession:"prof_0", level:2, buy:"item_6", buyCount:13, sell:"item_68", sellCount:5 },
  { profession:"prof_1", level:3, buy:"item_7", buyCount:14, sell:"item_71", sellCount:6 },
  { profession:"prof_2", level:4, buy:"item_8", buyCount:15, sell:"item_74", sellCount:7 },
  { profession:"prof_3", level:5, buy:"item_9", buyCount:16, sell:"item_77", sellCount:8 },
  { profession:"prof_4", level:1, buy:"item_10", buyCount:1, sell:"item_0", sellCount:1 },
  { profession:"prof_5", level:2, buy:"item_11", buyCount:2, sell:"item_3", sellCount:2 },
  { profession:"prof_6", level:3, buy:"item_12", buyCount:3, sell:"item_6", sellCount:3 },
  { profession:"prof_7", level:4, buy:"item_13", buyCount:4, sell:"item_9", sellCount:4 },
  { profession:"prof_8", level:5, buy:"item_14", buyCount:5, sell:"item_12", sellCount:5 },
  { profession:"prof_9", level:1, buy:"item_15", buyCount:6, sell:"item_15", sellCount:6 },
  { profession:"prof_10", level:2, buy:"item_16", buyCount:7, sell:"item_18", sellCount:7 },
  { profession:"prof_11", level:3, buy:"item_17", buyCount:8, sell:"item_21", sellCount:8 },
  { profession:"prof_12", level:4, buy:"item_18", buyCount:9, sell:"item_24", sellCount:1 },
  { profession:"prof_0", level:5, buy:"item_19", buyCount:10, sell:"item_27", sellCount:2 },
  { profession:"prof_1", level:1, buy:"item_20", buyCount:11, sell:"item_30", sellCount:3 },
  { profession:"prof_2", level:2, buy:"item_21", buyCount:12, sell:"item_33", sellCount:4 },
  { profession:"prof_3", level:3, buy:"item_22", buyCount:13, sell:"item_36", sellCount:5 },
  { profession:"prof_4", level:4, buy:"item_23", buyCount:14, sell:"item_39", sellCount:6 },
  { profession:"prof_5", level:5, buy:"item_24", buyCount:15, sell:"item_42", sellCount:7 },
  { profession:"prof_6", level:1, buy:"item_25", buyCount:16, sell:"item_45", sellCount:8 },
  { profession:"prof_7", level:2, buy:"item_26", buyCount:1, sell:"item_48", sellCount:1 },
  { profession:"prof_8", level:3, buy:"item_27", buyCount:2, sell:"item_51", sellCount:2 },
  { profession:"prof_9", level:4, buy:"item_28", buyCount:3, sell:"item_54", sellCount:3 },
  { profession:"prof_10", level:5, buy:"item_29", buyCount:4, sell:"item_57", sellCount:4 },
  { profession:"prof_11", level:1, buy:"item_30", buyCount:5, sell:"item_60", sellCount:5 },
  { profession:"prof_12", level:2, buy:"item_31", buyCount:6, sell:"item_63", sellCount:6 },
  { profession:"prof_0", level:3, buy:"item_32", buyCount:7, sell:"item_66", sellCount:7 },
  { profession:"prof_1", level:4, buy:"item_33", buyCount:8, sell:"item_69", sellCount:8 },
  { profession:"prof_2", level:5, buy:"item_34", buyCount:9, sell:"item_72", sellCount:1 },
  { profession:"prof_3", level:1, buy:"item_35", buyCount:10, sell:"item_75", sellCount:2 },
  { profession:"prof_4", level:2, buy:"item_36", buyCount:11, sell:"item_78", sellCount:3 },
  { profession:"prof_5", level:3, buy:"item_37", buyCount:12, sell:"item_1", sellCount:4 },
  { profession:"prof_6", level:4, buy:"item_38", buyCount:13, sell:"item_4", sellCount:5 },
  { profession:"prof_7", level:5, buy:"item_39", buyCount:14, sell:"item_7", sellCount:6 },
  { profession:"prof_8", level:1, buy:"item_40", buyCount:15, sell:"item_10", sellCount:7 },
  { profession:"prof_9", level:2, buy:"item_41", buyCount:16, sell:"item_13", sellCount:8 },
  { profession:"prof_10", level:3, buy:"item_42", buyCount:1, sell:"item_16", sellCount:1 },
  { profession:"prof_11", level:4, buy:"item_43", buyCount:2, sell:"item_19", sellCount:2 },
  { profession:"prof_12", level:5, buy:"item_44", buyCount:3, sell:"item_22", sellCount:3 },
  { profession:"prof_0", level:1, buy:"item_45", buyCount:4, sell:"item_25", sellCount:4 },
  { profession:"prof_1", level:2, buy:"item_46", buyCount:5, sell:"item_28", sellCount:5 },
  { profession:"prof_2", level:3, buy:"item_47", buyCount:6, sell:"item_31", sellCount:6 },
  { profession:"prof_3", level:4, buy:"item_48", buyCount:7, sell:"item_34", sellCount:7 },
  { profession:"prof_4", level:5, buy:"item_49", buyCount:8, sell:"item_37", sellCount:8 },
  { profession:"prof_5", level:1, buy:"item_0", buyCount:9, sell:"item_40", sellCount:1 },
  { profession:"prof_6", level:2, buy:"item_1", buyCount:10, sell:"item_43", sellCount:2 },
  { profession:"prof_7", level:3, buy:"item_2", buyCount:11, sell:"item_46", sellCount:3 },
  { profession:"prof_8", level:4, buy:"item_3", buyCount:12, sell:"item_49", sellCount:4 },
  { profession:"prof_9", level:5, buy:"item_4", buyCount:13, sell:"item_52", sellCount:5 },
  { profession:"prof_10", level:1, buy:"item_5", buyCount:14, sell:"item_55", sellCount:6 },
  { profession:"prof_11", level:2, buy:"item_6", buyCount:15, sell:"item_58", sellCount:7 },
  { profession:"prof_12", level:3, buy:"item_7", buyCount:16, sell:"item_61", sellCount:8 },
  { profession:"prof_0", level:4, buy:"item_8", buyCount:1, sell:"item_64", sellCount:1 },
  { profession:"prof_1", level:5, buy:"item_9", buyCount:2, sell:"item_67", sellCount:2 },
  { profession:"prof_2", level:1, buy:"item_10", buyCount:3, sell:"item_70", sellCount:3 },
  { profession:"prof_3", level:2, buy:"item_11", buyCount:4, sell:"item_73", sellCount:4 },
  { profession:"prof_4", level:3, buy:"item_12", buyCount:5, sell:"item_76", sellCount:5 },
  { profession:"prof_5", level:4, buy:"item_13", buyCount:6, sell:"item_79", sellCount:6 },
  { profession:"prof_6", level:5, buy:"item_14", buyCount:7, sell:"item_2", sellCount:7 },
  { profession:"prof_7", level:1, buy:"item_15", buyCount:8, sell:"item_5", sellCount:8 },
  { profession:"prof_8", level:2, buy:"item_16", buyCount:9, sell:"item_8", sellCount:1 },
  { profession:"prof_9", level:3, buy:"item_17", buyCount:10, sell:"item_11", sellCount:2 },
  { profession:"prof_10", level:4, buy:"item_18", buyCount:11, sell:"item_14", sellCount:3 },
  { profession:"prof_11", level:5, buy:"item_19", buyCount:12, sell:"item_17", sellCount:4 },
  { profession:"prof_12", level:1, buy:"item_20", buyCount:13, sell:"item_20", sellCount:5 },
  { profession:"prof_0", level:2, buy:"item_21", buyCount:14, sell:"item_23", sellCount:6 },
  { profession:"prof_1", level:3, buy:"item_22", buyCount:15, sell:"item_26", sellCount:7 },
  { profession:"prof_2", level:4, buy:"item_23", buyCount:16, sell:"item_29", sellCount:8 },
  { profession:"prof_3", level:5, buy:"item_24", buyCount:1, sell:"item_32", sellCount:1 },
  { profession:"prof_4", level:1, buy:"item_25", buyCount:2, sell:"item_35", sellCount:2 },
  { profession:"prof_5", level:2, buy:"item_26", buyCount:3, sell:"item_38", sellCount:3 },
  { profession:"prof_6", level:3, buy:"item_27", buyCount:4, sell:"item_41", sellCount:4 },
  { profession:"prof_7", level:4, buy:"item_28", buyCount:5, sell:"item_44", sellCount:5 },
  { profession:"prof_8", level:5, buy:"item_29", buyCount:6, sell:"item_47", sellCount:6 },
  { profession:"prof_9", level:1, buy:"item_30", buyCount:7, sell:"item_50", sellCount:7 },
  { profession:"prof_10", level:2, buy:"item_31", buyCount:8, sell:"item_53", sellCount:8 },
  { profession:"prof_11", level:3, buy:"item_32", buyCount:9, sell:"item_56", sellCount:1 },
  { profession:"prof_12", level:4, buy:"item_33", buyCount:10, sell:"item_59", sellCount:2 },
  { profession:"prof_0", level:5, buy:"item_34", buyCount:11, sell:"item_62", sellCount:3 },
  { profession:"prof_1", level:1, buy:"item_35", buyCount:12, sell:"item_65", sellCount:4 },
  { profession:"prof_2", level:2, buy:"item_36", buyCount:13, sell:"item_68", sellCount:5 },
  { profession:"prof_3", level:3, buy:"item_37", buyCount:14, sell:"item_71", sellCount:6 },
  { profession:"prof_4", level:4, buy:"item_38", buyCount:15, sell:"item_74", sellCount:7 },
  { profession:"prof_5", level:5, buy:"item_39", buyCount:16, sell:"item_77", sellCount:8 },
  { profession:"prof_6", level:1, buy:"item_40", buyCount:1, sell:"item_0", sellCount:1 },
  { profession:"prof_7", level:2, buy:"item_41", buyCount:2, sell:"item_3", sellCount:2 },
  { profession:"prof_8", level:3, buy:"item_42", buyCount:3, sell:"item_6", sellCount:3 },
  { profession:"prof_9", level:4, buy:"item_43", buyCount:4, sell:"item_9", sellCount:4 },
  { profession:"prof_10", level:5, buy:"item_44", buyCount:5, sell:"item_12", sellCount:5 },
  { profession:"prof_11", level:1, buy:"item_45", buyCount:6, sell:"item_15", sellCount:6 },
  { profession:"prof_12", level:2, buy:"item_46", buyCount:7, sell:"item_18", sellCount:7 },
  { profession:"prof_0", level:3, buy:"item_47", buyCount:8, sell:"item_21", sellCount:8 },
  { profession:"prof_1", level:4, buy:"item_48", buyCount:9, sell:"item_24", sellCount:1 },
  { profession:"prof_2", level:5, buy:"item_49", buyCount:10, sell:"item_27", sellCount:2 },
  { profession:"prof_3", level:1, buy:"item_0", buyCount:11, sell:"item_30", sellCount:3 },
  { profession:"prof_4", level:2, buy:"item_1", buyCount:12, sell:"item_33", sellCount:4 },
  { profession:"prof_5", level:3, buy:"item_2", buyCount:13, sell:"item_36", sellCount:5 },
  { profession:"prof_6", level:4, buy:"item_3", buyCount:14, sell:"item_39", sellCount:6 },
  { profession:"prof_7", level:5, buy:"item_4", buyCount:15, sell:"item_42", sellCount:7 },
  { profession:"prof_8", level:1, buy:"item_5", buyCount:16, sell:"item_45", sellCount:8 },
  { profession:"prof_9", level:2, buy:"item_6", buyCount:1, sell:"item_48", sellCount:1 },
  { profession:"prof_10", level:3, buy:"item_7", buyCount:2, sell:"item_51", sellCount:2 },
  { profession:"prof_11", level:4, buy:"item_8", buyCount:3, sell:"item_54", sellCount:3 },
  { profession:"prof_12", level:5, buy:"item_9", buyCount:4, sell:"item_57", sellCount:4 },
  { profession:"prof_0", level:1, buy:"item_10", buyCount:5, sell:"item_60", sellCount:5 },
  { profession:"prof_1", level:2, buy:"item_11", buyCount:6, sell:"item_63", sellCount:6 },
  { profession:"prof_2", level:3, buy:"item_12", buyCount:7, sell:"item_66", sellCount:7 },
  { profession:"prof_3", level:4, buy:"item_13", buyCount:8, sell:"item_69", sellCount:8 },
  { profession:"prof_4", level:5, buy:"item_14", buyCount:9, sell:"item_72", sellCount:1 },
  { profession:"prof_5", level:1, buy:"item_15", buyCount:10, sell:"item_75", sellCount:2 },
  { profession:"prof_6", level:2, buy:"item_16", buyCount:11, sell:"item_78", sellCount:3 },
  { profession:"prof_7", level:3, buy:"item_17", buyCount:12, sell:"item_1", sellCount:4 },
  { profession:"prof_8", level:4, buy:"item_18", buyCount:13, sell:"item_4", sellCount:5 },
  { profession:"prof_9", level:5, buy:"item_19", buyCount:14, sell:"item_7", sellCount:6 },
  { profession:"prof_10", level:1, buy:"item_20", buyCount:15, sell:"item_10", sellCount:7 },
  { profession:"prof_11", level:2, buy:"item_21", buyCount:16, sell:"item_13", sellCount:8 },
  { profession:"prof_12", level:3, buy:"item_22", buyCount:1, sell:"item_16", sellCount:1 },
  { profession:"prof_0", level:4, buy:"item_23", buyCount:2, sell:"item_19", sellCount:2 },
  { profession:"prof_1", level:5, buy:"item_24", buyCount:3, sell:"item_22", sellCount:3 },
  { profession:"prof_2", level:1, buy:"item_25", buyCount:4, sell:"item_25", sellCount:4 },
  { profession:"prof_3", level:2, buy:"item_26", buyCount:5, sell:"item_28", sellCount:5 },
  { profession:"prof_4", level:3, buy:"item_27", buyCount:6, sell:"item_31", sellCount:6 },
  { profession:"prof_5", level:4, buy:"item_28", buyCount:7, sell:"item_34", sellCount:7 },
  { profession:"prof_6", level:5, buy:"item_29", buyCount:8, sell:"item_37", sellCount:8 },
  { profession:"prof_7", level:1, buy:"item_30", buyCount:9, sell:"item_40", sellCount:1 },
  { profession:"prof_8", level:2, buy:"item_31", buyCount:10, sell:"item_43", sellCount:2 },
  { profession:"prof_9", level:3, buy:"item_32", buyCount:11, sell:"item_46", sellCount:3 },
  { profession:"prof_10", level:4, buy:"item_33", buyCount:12, sell:"item_49", sellCount:4 },
  { profession:"prof_11", level:5, buy:"item_34", buyCount:13, sell:"item_52", sellCount:5 },
  { profession:"prof_12", level:1, buy:"item_35", buyCount:14, sell:"item_55", sellCount:6 },
  { profession:"prof_0", level:2, buy:"item_36", buyCount:15, sell:"item_58", sellCount:7 },
  { profession:"prof_1", level:3, buy:"item_37", buyCount:16, sell:"item_61", sellCount:8 },
  { profession:"prof_2", level:4, buy:"item_38", buyCount:1, sell:"item_64", sellCount:1 },
  { profession:"prof_3", level:5, buy:"item_39", buyCount:2, sell:"item_67", sellCount:2 },
  { profession:"prof_4", level:1, buy:"item_40", buyCount:3, sell:"item_70", sellCount:3 },
  { profession:"prof_5", level:2, buy:"item_41", buyCount:4, sell:"item_73", sellCount:4 },
  { profession:"prof_6", level:3, buy:"item_42", buyCount:5, sell:"item_76", sellCount:5 },
  { profession:"prof_7", level:4, buy:"item_43", buyCount:6, sell:"item_79", sellCount:6 },
  { profession:"prof_8", level:5, buy:"item_44", buyCount:7, sell:"item_2", sellCount:7 },
  { profession:"prof_9", level:1, buy:"item_45", buyCount:8, sell:"item_5", sellCount:8 },
  { profession:"prof_10", level:2, buy:"item_46", buyCount:9, sell:"item_8", sellCount:1 },
  { profession:"prof_11", level:3, buy:"item_47", buyCount:10, sell:"item_11", sellCount:2 },
  { profession:"prof_12", level:4, buy:"item_48", buyCount:11, sell:"item_14", sellCount:3 },
  { profession:"prof_0", level:5, buy:"item_49", buyCount:12, sell:"item_17", sellCount:4 },
  { profession:"prof_1", level:1, buy:"item_0", buyCount:13, sell:"item_20", sellCount:5 },
  { profession:"prof_2", level:2, buy:"item_1", buyCount:14, sell:"item_23", sellCount:6 },
  { profession:"prof_3", level:3, buy:"item_2", buyCount:15, sell:"item_26", sellCount:7 },
  { profession:"prof_4", level:4, buy:"item_3", buyCount:16, sell:"item_29", sellCount:8 },
  { profession:"prof_5", level:5, buy:"item_4", buyCount:1, sell:"item_32", sellCount:1 },
  { profession:"prof_6", level:1, buy:"item_5", buyCount:2, sell:"item_35", sellCount:2 },
  { profession:"prof_7", level:2, buy:"item_6", buyCount:3, sell:"item_38", sellCount:3 },
  { profession:"prof_8", level:3, buy:"item_7", buyCount:4, sell:"item_41", sellCount:4 },
  { profession:"prof_9", level:4, buy:"item_8", buyCount:5, sell:"item_44", sellCount:5 },
  { profession:"prof_10", level:5, buy:"item_9", buyCount:6, sell:"item_47", sellCount:6 },
  { profession:"prof_11", level:1, buy:"item_10", buyCount:7, sell:"item_50", sellCount:7 },
  { profession:"prof_12", level:2, buy:"item_11", buyCount:8, sell:"item_53", sellCount:8 },
  { profession:"prof_0", level:3, buy:"item_12", buyCount:9, sell:"item_56", sellCount:1 },
  { profession:"prof_1", level:4, buy:"item_13", buyCount:10, sell:"item_59", sellCount:2 },
  { profession:"prof_2", level:5, buy:"item_14", buyCount:11, sell:"item_62", sellCount:3 },
  { profession:"prof_3", level:1, buy:"item_15", buyCount:12, sell:"item_65", sellCount:4 },
  { profession:"prof_4", level:2, buy:"item_16", buyCount:13, sell:"item_68", sellCount:5 },
  { profession:"prof_5", level:3, buy:"item_17", buyCount:14, sell:"item_71", sellCount:6 },
  { profession:"prof_6", level:4, buy:"item_18", buyCount:15, sell:"item_74", sellCount:7 },
  { profession:"prof_7", level:5, buy:"item_19", buyCount:16, sell:"item_77", sellCount:8 },
  { profession:"prof_8", level:1, buy:"item_20", buyCount:1, sell:"item_0", sellCount:1 },
  { profession:"prof_9", level:2, buy:"item_21", buyCount:2, sell:"item_3", sellCount:2 },
  { profession:"prof_10", level:3, buy:"item_22", buyCount:3, sell:"item_6", sellCount:3 },
  { profession:"prof_11", level:4, buy:"item_23", buyCount:4, sell:"item_9", sellCount:4 },
  { profession:"prof_12", level:5, buy:"item_24", buyCount:5, sell:"item_12", sellCount:5 },
  { profession:"prof_0", level:1, buy:"item_25", buyCount:6, sell:"item_15", sellCount:6 },
  { profession:"prof_1", level:2, buy:"item_26", buyCount:7, sell:"item_18", sellCount:7 },
  { profession:"prof_2", level:3, buy:"item_27", buyCount:8, sell:"item_21", sellCount:8 },
  { profession:"prof_3", level:4, buy:"item_28", buyCount:9, sell:"item_24", sellCount:1 },
  { profession:"prof_4", level:5, buy:"item_29", buyCount:10, sell:"item_27", sellCount:2 },
  { profession:"prof_5", level:1, buy:"item_30", buyCount:11, sell:"item_30", sellCount:3 },
  { profession:"prof_6", level:2, buy:"item_31", buyCount:12, sell:"item_33", sellCount:4 },
  { profession:"prof_7", level:3, buy:"item_32", buyCount:13, sell:"item_36", sellCount:5 },
  { profession:"prof_8", level:4, buy:"item_33", buyCount:14, sell:"item_39", sellCount:6 },
  { profession:"prof_9", level:5, buy:"item_34", buyCount:15, sell:"item_42", sellCount:7 },
  { profession:"prof_10", level:1, buy:"item_35", buyCount:16, sell:"item_45", sellCount:8 },
  { profession:"prof_11", level:2, buy:"item_36", buyCount:1, sell:"item_48", sellCount:1 },
  { profession:"prof_12", level:3, buy:"item_37", buyCount:2, sell:"item_51", sellCount:2 },
  { profession:"prof_0", level:4, buy:"item_38", buyCount:3, sell:"item_54", sellCount:3 },
  { profession:"prof_1", level:5, buy:"item_39", buyCount:4, sell:"item_57", sellCount:4 },
  { profession:"prof_2", level:1, buy:"item_40", buyCount:5, sell:"item_60", sellCount:5 },
  { profession:"prof_3", level:2, buy:"item_41", buyCount:6, sell:"item_63", sellCount:6 },
  { profession:"prof_4", level:3, buy:"item_42", buyCount:7, sell:"item_66", sellCount:7 },
  { profession:"prof_5", level:4, buy:"item_43", buyCount:8, sell:"item_69", sellCount:8 },
  { profession:"prof_6", level:5, buy:"item_44", buyCount:9, sell:"item_72", sellCount:1 },
  { profession:"prof_7", level:1, buy:"item_45", buyCount:10, sell:"item_75", sellCount:2 },
  { profession:"prof_8", level:2, buy:"item_46", buyCount:11, sell:"item_78", sellCount:3 },
  { profession:"prof_9", level:3, buy:"item_47", buyCount:12, sell:"item_1", sellCount:4 },
  { profession:"prof_10", level:4, buy:"item_48", buyCount:13, sell:"item_4", sellCount:5 },
  { profession:"prof_11", level:5, buy:"item_49", buyCount:14, sell:"item_7", sellCount:6 },
  { profession:"prof_12", level:1, buy:"item_0", buyCount:15, sell:"item_10", sellCount:7 },
  { profession:"prof_0", level:2, buy:"item_1", buyCount:16, sell:"item_13", sellCount:8 },
  { profession:"prof_1", level:3, buy:"item_2", buyCount:1, sell:"item_16", sellCount:1 },
  { profession:"prof_2", level:4, buy:"item_3", buyCount:2, sell:"item_19", sellCount:2 },
  { profession:"prof_3", level:5, buy:"item_4", buyCount:3, sell:"item_22", sellCount:3 },
  { profession:"prof_4", level:1, buy:"item_5", buyCount:4, sell:"item_25", sellCount:4 },
  { profession:"prof_5", level:2, buy:"item_6", buyCount:5, sell:"item_28", sellCount:5 },
  { profession:"prof_6", level:3, buy:"item_7", buyCount:6, sell:"item_31", sellCount:6 },
  { profession:"prof_7", level:4, buy:"item_8", buyCount:7, sell:"item_34", sellCount:7 },
  { profession:"prof_8", level:5, buy:"item_9", buyCount:8, sell:"item_37", sellCount:8 },
  { profession:"prof_9", level:1, buy:"item_10", buyCount:9, sell:"item_40", sellCount:1 },
  { profession:"prof_10", level:2, buy:"item_11", buyCount:10, sell:"item_43", sellCount:2 },
  { profession:"prof_11", level:3, buy:"item_12", buyCount:11, sell:"item_46", sellCount:3 },
  { profession:"prof_12", level:4, buy:"item_13", buyCount:12, sell:"item_49", sellCount:4 },
  { profession:"prof_0", level:5, buy:"item_14", buyCount:13, sell:"item_52", sellCount:5 },
  { profession:"prof_1", level:1, buy:"item_15", buyCount:14, sell:"item_55", sellCount:6 },
  { profession:"prof_2", level:2, buy:"item_16", buyCount:15, sell:"item_58", sellCount:7 },
  { profession:"prof_3", level:3, buy:"item_17", buyCount:16, sell:"item_61", sellCount:8 },
  { profession:"prof_4", level:4, buy:"item_18", buyCount:1, sell:"item_64", sellCount:1 },
  { profession:"prof_5", level:5, buy:"item_19", buyCount:2, sell:"item_67", sellCount:2 },
  { profession:"prof_6", level:1, buy:"item_20", buyCount:3, sell:"item_70", sellCount:3 },
  { profession:"prof_7", level:2, buy:"item_21", buyCount:4, sell:"item_73", sellCount:4 },
  { profession:"prof_8", level:3, buy:"item_22", buyCount:5, sell:"item_76", sellCount:5 },
  { profession:"prof_9", level:4, buy:"item_23", buyCount:6, sell:"item_79", sellCount:6 },
  { profession:"prof_10", level:5, buy:"item_24", buyCount:7, sell:"item_2", sellCount:7 },
  { profession:"prof_11", level:1, buy:"item_25", buyCount:8, sell:"item_5", sellCount:8 },
  { profession:"prof_12", level:2, buy:"item_26", buyCount:9, sell:"item_8", sellCount:1 },
  { profession:"prof_0", level:3, buy:"item_27", buyCount:10, sell:"item_11", sellCount:2 },
  { profession:"prof_1", level:4, buy:"item_28", buyCount:11, sell:"item_14", sellCount:3 },
  { profession:"prof_2", level:5, buy:"item_29", buyCount:12, sell:"item_17", sellCount:4 },
  { profession:"prof_3", level:1, buy:"item_30", buyCount:13, sell:"item_20", sellCount:5 },
  { profession:"prof_4", level:2, buy:"item_31", buyCount:14, sell:"item_23", sellCount:6 },
  { profession:"prof_5", level:3, buy:"item_32", buyCount:15, sell:"item_26", sellCount:7 },
  { profession:"prof_6", level:4, buy:"item_33", buyCount:16, sell:"item_29", sellCount:8 },
  { profession:"prof_7", level:5, buy:"item_34", buyCount:1, sell:"item_32", sellCount:1 },
  { profession:"prof_8", level:1, buy:"item_35", buyCount:2, sell:"item_35", sellCount:2 },
  { profession:"prof_9", level:2, buy:"item_36", buyCount:3, sell:"item_38", sellCount:3 },
  { profession:"prof_10", level:3, buy:"item_37", buyCount:4, sell:"item_41", sellCount:4 },
  { profession:"prof_11", level:4, buy:"item_38", buyCount:5, sell:"item_44", sellCount:5 },
  { profession:"prof_12", level:5, buy:"item_39", buyCount:6, sell:"item_47", sellCount:6 },
  { profession:"prof_0", level:1, buy:"item_40", buyCount:7, sell:"item_50", sellCount:7 },
  { profession:"prof_1", level:2, buy:"item_41", buyCount:8, sell:"item_53", sellCount:8 },
  { profession:"prof_2", level:3, buy:"item_42", buyCount:9, sell:"item_56", sellCount:1 },
  { profession:"prof_3", level:4, buy:"item_43", buyCount:10, sell:"item_59", sellCount:2 },
  { profession:"prof_4", level:5, buy:"item_44", buyCount:11, sell:"item_62", sellCount:3 },
  { profession:"prof_5", level:1, buy:"item_45", buyCount:12, sell:"item_65", sellCount:4 },
  { profession:"prof_6", level:2, buy:"item_46", buyCount:13, sell:"item_68", sellCount:5 },
  { profession:"prof_7", level:3, buy:"item_47", buyCount:14, sell:"item_71", sellCount:6 },
  { profession:"prof_8", level:4, buy:"item_48", buyCount:15, sell:"item_74", sellCount:7 },
  { profession:"prof_9", level:5, buy:"item_49", buyCount:16, sell:"item_77", sellCount:8 },
 ],
 dimensionsInfo:{
  overworld:{hasSky:true,bedWorks:true,respawn:true},
  nether:{hasSky:false,bedWorks:false,respawn:false,ultrawarm:true},
  end:{hasSky:false,bedWorks:false,respawn:false},
 }
};
// data warehouse record 0: noise_param scale=0.0010 octaves=1 persistence=0.0
// data warehouse record 1: noise_param scale=0.0020 octaves=2 persistence=0.1
// data warehouse record 2: noise_param scale=0.0030 octaves=3 persistence=0.2
// data warehouse record 3: noise_param scale=0.0040 octaves=4 persistence=0.3
// data warehouse record 4: noise_param scale=0.0050 octaves=5 persistence=0.4
// data warehouse record 5: noise_param scale=0.0060 octaves=6 persistence=0.5
// data warehouse record 6: noise_param scale=0.0070 octaves=1 persistence=0.6
// data warehouse record 7: noise_param scale=0.0080 octaves=2 persistence=0.7
// data warehouse record 8: noise_param scale=0.0090 octaves=3 persistence=0.8
// data warehouse record 9: noise_param scale=0.0100 octaves=4 persistence=0.0
// data warehouse record 10: noise_param scale=0.0110 octaves=5 persistence=0.1
// data warehouse record 11: noise_param scale=0.0120 octaves=6 persistence=0.2
// data warehouse record 12: noise_param scale=0.0130 octaves=1 persistence=0.3
// data warehouse record 13: noise_param scale=0.0140 octaves=2 persistence=0.4
// data warehouse record 14: noise_param scale=0.0150 octaves=3 persistence=0.5
// data warehouse record 15: noise_param scale=0.0160 octaves=4 persistence=0.6
// data warehouse record 16: noise_param scale=0.0170 octaves=5 persistence=0.7
// data warehouse record 17: noise_param scale=0.0180 octaves=6 persistence=0.8
// data warehouse record 18: noise_param scale=0.0190 octaves=1 persistence=0.0
// data warehouse record 19: noise_param scale=0.0200 octaves=2 persistence=0.1
// data warehouse record 20: noise_param scale=0.0210 octaves=3 persistence=0.2
// data warehouse record 21: noise_param scale=0.0220 octaves=4 persistence=0.3
// data warehouse record 22: noise_param scale=0.0230 octaves=5 persistence=0.4
// data warehouse record 23: noise_param scale=0.0240 octaves=6 persistence=0.5
// data warehouse record 24: noise_param scale=0.0250 octaves=1 persistence=0.6
// data warehouse record 25: noise_param scale=0.0260 octaves=2 persistence=0.7
// data warehouse record 26: noise_param scale=0.0270 octaves=3 persistence=0.8
// data warehouse record 27: noise_param scale=0.0280 octaves=4 persistence=0.0
// data warehouse record 28: noise_param scale=0.0290 octaves=5 persistence=0.1
// data warehouse record 29: noise_param scale=0.0300 octaves=6 persistence=0.2
// data warehouse record 30: noise_param scale=0.0310 octaves=1 persistence=0.3
// data warehouse record 31: noise_param scale=0.0320 octaves=2 persistence=0.4
// data warehouse record 32: noise_param scale=0.0330 octaves=3 persistence=0.5
// data warehouse record 33: noise_param scale=0.0340 octaves=4 persistence=0.6
// data warehouse record 34: noise_param scale=0.0350 octaves=5 persistence=0.7
// data warehouse record 35: noise_param scale=0.0360 octaves=6 persistence=0.8
// data warehouse record 36: noise_param scale=0.0370 octaves=1 persistence=0.0
// data warehouse record 37: noise_param scale=0.0380 octaves=2 persistence=0.1
// data warehouse record 38: noise_param scale=0.0390 octaves=3 persistence=0.2
// data warehouse record 39: noise_param scale=0.0400 octaves=4 persistence=0.3
// data warehouse record 40: noise_param scale=0.0410 octaves=5 persistence=0.4
// data warehouse record 41: noise_param scale=0.0420 octaves=6 persistence=0.5
// data warehouse record 42: noise_param scale=0.0430 octaves=1 persistence=0.6
// data warehouse record 43: noise_param scale=0.0440 octaves=2 persistence=0.7
// data warehouse record 44: noise_param scale=0.0450 octaves=3 persistence=0.8
// data warehouse record 45: noise_param scale=0.0460 octaves=4 persistence=0.0
// data warehouse record 46: noise_param scale=0.0470 octaves=5 persistence=0.1
// data warehouse record 47: noise_param scale=0.0480 octaves=6 persistence=0.2
// data warehouse record 48: noise_param scale=0.0490 octaves=1 persistence=0.3
// data warehouse record 49: noise_param scale=0.0500 octaves=2 persistence=0.4
// data warehouse record 50: noise_param scale=0.0510 octaves=3 persistence=0.5
// data warehouse record 51: noise_param scale=0.0520 octaves=4 persistence=0.6
// data warehouse record 52: noise_param scale=0.0530 octaves=5 persistence=0.7
// data warehouse record 53: noise_param scale=0.0540 octaves=6 persistence=0.8
// data warehouse record 54: noise_param scale=0.0550 octaves=1 persistence=0.0
// data warehouse record 55: noise_param scale=0.0560 octaves=2 persistence=0.1
// data warehouse record 56: noise_param scale=0.0570 octaves=3 persistence=0.2
// data warehouse record 57: noise_param scale=0.0580 octaves=4 persistence=0.3
// data warehouse record 58: noise_param scale=0.0590 octaves=5 persistence=0.4
// data warehouse record 59: noise_param scale=0.0600 octaves=6 persistence=0.5
// data warehouse record 60: noise_param scale=0.0610 octaves=1 persistence=0.6
// data warehouse record 61: noise_param scale=0.0620 octaves=2 persistence=0.7
// data warehouse record 62: noise_param scale=0.0630 octaves=3 persistence=0.8
// data warehouse record 63: noise_param scale=0.0640 octaves=4 persistence=0.0
// data warehouse record 64: noise_param scale=0.0650 octaves=5 persistence=0.1
// data warehouse record 65: noise_param scale=0.0660 octaves=6 persistence=0.2
// data warehouse record 66: noise_param scale=0.0670 octaves=1 persistence=0.3
// data warehouse record 67: noise_param scale=0.0680 octaves=2 persistence=0.4
// data warehouse record 68: noise_param scale=0.0690 octaves=3 persistence=0.5
// data warehouse record 69: noise_param scale=0.0700 octaves=4 persistence=0.6
// data warehouse record 70: noise_param scale=0.0710 octaves=5 persistence=0.7
// data warehouse record 71: noise_param scale=0.0720 octaves=6 persistence=0.8
// data warehouse record 72: noise_param scale=0.0730 octaves=1 persistence=0.0
// data warehouse record 73: noise_param scale=0.0740 octaves=2 persistence=0.1
// data warehouse record 74: noise_param scale=0.0750 octaves=3 persistence=0.2
// data warehouse record 75: noise_param scale=0.0760 octaves=4 persistence=0.3
// data warehouse record 76: noise_param scale=0.0770 octaves=5 persistence=0.4
// data warehouse record 77: noise_param scale=0.0780 octaves=6 persistence=0.5
// data warehouse record 78: noise_param scale=0.0790 octaves=1 persistence=0.6
// data warehouse record 79: noise_param scale=0.0800 octaves=2 persistence=0.7
// data warehouse record 80: noise_param scale=0.0810 octaves=3 persistence=0.8
// data warehouse record 81: noise_param scale=0.0820 octaves=4 persistence=0.0
// data warehouse record 82: noise_param scale=0.0830 octaves=5 persistence=0.1
// data warehouse record 83: noise_param scale=0.0840 octaves=6 persistence=0.2
// data warehouse record 84: noise_param scale=0.0850 octaves=1 persistence=0.3
// data warehouse record 85: noise_param scale=0.0860 octaves=2 persistence=0.4
// data warehouse record 86: noise_param scale=0.0870 octaves=3 persistence=0.5
// data warehouse record 87: noise_param scale=0.0880 octaves=4 persistence=0.6
// data warehouse record 88: noise_param scale=0.0890 octaves=5 persistence=0.7
// data warehouse record 89: noise_param scale=0.0900 octaves=6 persistence=0.8
// data warehouse record 90: noise_param scale=0.0910 octaves=1 persistence=0.0
// data warehouse record 91: noise_param scale=0.0920 octaves=2 persistence=0.1
// data warehouse record 92: noise_param scale=0.0930 octaves=3 persistence=0.2
// data warehouse record 93: noise_param scale=0.0940 octaves=4 persistence=0.3
// data warehouse record 94: noise_param scale=0.0950 octaves=5 persistence=0.4
// data warehouse record 95: noise_param scale=0.0960 octaves=6 persistence=0.5
// data warehouse record 96: noise_param scale=0.0970 octaves=1 persistence=0.6
// data warehouse record 97: noise_param scale=0.0980 octaves=2 persistence=0.7
// data warehouse record 98: noise_param scale=0.0990 octaves=3 persistence=0.8
// data warehouse record 99: noise_param scale=0.1000 octaves=4 persistence=0.0
// data warehouse record 100: noise_param scale=0.0010 octaves=5 persistence=0.1
// data warehouse record 101: noise_param scale=0.0020 octaves=6 persistence=0.2
// data warehouse record 102: noise_param scale=0.0030 octaves=1 persistence=0.3
// data warehouse record 103: noise_param scale=0.0040 octaves=2 persistence=0.4
// data warehouse record 104: noise_param scale=0.0050 octaves=3 persistence=0.5
// data warehouse record 105: noise_param scale=0.0060 octaves=4 persistence=0.6
// data warehouse record 106: noise_param scale=0.0070 octaves=5 persistence=0.7
// data warehouse record 107: noise_param scale=0.0080 octaves=6 persistence=0.8
// data warehouse record 108: noise_param scale=0.0090 octaves=1 persistence=0.0
// data warehouse record 109: noise_param scale=0.0100 octaves=2 persistence=0.1
// data warehouse record 110: noise_param scale=0.0110 octaves=3 persistence=0.2
// data warehouse record 111: noise_param scale=0.0120 octaves=4 persistence=0.3
// data warehouse record 112: noise_param scale=0.0130 octaves=5 persistence=0.4
// data warehouse record 113: noise_param scale=0.0140 octaves=6 persistence=0.5
// data warehouse record 114: noise_param scale=0.0150 octaves=1 persistence=0.6
// data warehouse record 115: noise_param scale=0.0160 octaves=2 persistence=0.7
// data warehouse record 116: noise_param scale=0.0170 octaves=3 persistence=0.8
// data warehouse record 117: noise_param scale=0.0180 octaves=4 persistence=0.0
// data warehouse record 118: noise_param scale=0.0190 octaves=5 persistence=0.1
// data warehouse record 119: noise_param scale=0.0200 octaves=6 persistence=0.2
// data warehouse record 120: noise_param scale=0.0210 octaves=1 persistence=0.3
// data warehouse record 121: noise_param scale=0.0220 octaves=2 persistence=0.4
// data warehouse record 122: noise_param scale=0.0230 octaves=3 persistence=0.5
// data warehouse record 123: noise_param scale=0.0240 octaves=4 persistence=0.6
// data warehouse record 124: noise_param scale=0.0250 octaves=5 persistence=0.7
// data warehouse record 125: noise_param scale=0.0260 octaves=6 persistence=0.8
// data warehouse record 126: noise_param scale=0.0270 octaves=1 persistence=0.0
// data warehouse record 127: noise_param scale=0.0280 octaves=2 persistence=0.1
// data warehouse record 128: noise_param scale=0.0290 octaves=3 persistence=0.2
// data warehouse record 129: noise_param scale=0.0300 octaves=4 persistence=0.3
// data warehouse record 130: noise_param scale=0.0310 octaves=5 persistence=0.4
// data warehouse record 131: noise_param scale=0.0320 octaves=6 persistence=0.5
// data warehouse record 132: noise_param scale=0.0330 octaves=1 persistence=0.6
// data warehouse record 133: noise_param scale=0.0340 octaves=2 persistence=0.7
// data warehouse record 134: noise_param scale=0.0350 octaves=3 persistence=0.8
// data warehouse record 135: noise_param scale=0.0360 octaves=4 persistence=0.0
// data warehouse record 136: noise_param scale=0.0370 octaves=5 persistence=0.1
// data warehouse record 137: noise_param scale=0.0380 octaves=6 persistence=0.2
// data warehouse record 138: noise_param scale=0.0390 octaves=1 persistence=0.3
// data warehouse record 139: noise_param scale=0.0400 octaves=2 persistence=0.4
// data warehouse record 140: noise_param scale=0.0410 octaves=3 persistence=0.5
// data warehouse record 141: noise_param scale=0.0420 octaves=4 persistence=0.6
// data warehouse record 142: noise_param scale=0.0430 octaves=5 persistence=0.7
// data warehouse record 143: noise_param scale=0.0440 octaves=6 persistence=0.8
// data warehouse record 144: noise_param scale=0.0450 octaves=1 persistence=0.0
// data warehouse record 145: noise_param scale=0.0460 octaves=2 persistence=0.1
// data warehouse record 146: noise_param scale=0.0470 octaves=3 persistence=0.2
// data warehouse record 147: noise_param scale=0.0480 octaves=4 persistence=0.3
// data warehouse record 148: noise_param scale=0.0490 octaves=5 persistence=0.4
// data warehouse record 149: noise_param scale=0.0500 octaves=6 persistence=0.5
// data warehouse record 150: noise_param scale=0.0510 octaves=1 persistence=0.6
// data warehouse record 151: noise_param scale=0.0520 octaves=2 persistence=0.7
// data warehouse record 152: noise_param scale=0.0530 octaves=3 persistence=0.8
// data warehouse record 153: noise_param scale=0.0540 octaves=4 persistence=0.0
// data warehouse record 154: noise_param scale=0.0550 octaves=5 persistence=0.1
// data warehouse record 155: noise_param scale=0.0560 octaves=6 persistence=0.2
// data warehouse record 156: noise_param scale=0.0570 octaves=1 persistence=0.3
// data warehouse record 157: noise_param scale=0.0580 octaves=2 persistence=0.4
// data warehouse record 158: noise_param scale=0.0590 octaves=3 persistence=0.5
// data warehouse record 159: noise_param scale=0.0600 octaves=4 persistence=0.6
// data warehouse record 160: noise_param scale=0.0610 octaves=5 persistence=0.7
// data warehouse record 161: noise_param scale=0.0620 octaves=6 persistence=0.8
// data warehouse record 162: noise_param scale=0.0630 octaves=1 persistence=0.0
// data warehouse record 163: noise_param scale=0.0640 octaves=2 persistence=0.1
// data warehouse record 164: noise_param scale=0.0650 octaves=3 persistence=0.2
// data warehouse record 165: noise_param scale=0.0660 octaves=4 persistence=0.3
// data warehouse record 166: noise_param scale=0.0670 octaves=5 persistence=0.4
// data warehouse record 167: noise_param scale=0.0680 octaves=6 persistence=0.5
// data warehouse record 168: noise_param scale=0.0690 octaves=1 persistence=0.6
// data warehouse record 169: noise_param scale=0.0700 octaves=2 persistence=0.7
// data warehouse record 170: noise_param scale=0.0710 octaves=3 persistence=0.8
// data warehouse record 171: noise_param scale=0.0720 octaves=4 persistence=0.0
// data warehouse record 172: noise_param scale=0.0730 octaves=5 persistence=0.1
// data warehouse record 173: noise_param scale=0.0740 octaves=6 persistence=0.2
// data warehouse record 174: noise_param scale=0.0750 octaves=1 persistence=0.3
// data warehouse record 175: noise_param scale=0.0760 octaves=2 persistence=0.4
// data warehouse record 176: noise_param scale=0.0770 octaves=3 persistence=0.5
// data warehouse record 177: noise_param scale=0.0780 octaves=4 persistence=0.6
// data warehouse record 178: noise_param scale=0.0790 octaves=5 persistence=0.7
// data warehouse record 179: noise_param scale=0.0800 octaves=6 persistence=0.8
// data warehouse record 180: noise_param scale=0.0810 octaves=1 persistence=0.0
// data warehouse record 181: noise_param scale=0.0820 octaves=2 persistence=0.1
// data warehouse record 182: noise_param scale=0.0830 octaves=3 persistence=0.2
// data warehouse record 183: noise_param scale=0.0840 octaves=4 persistence=0.3
// data warehouse record 184: noise_param scale=0.0850 octaves=5 persistence=0.4
// data warehouse record 185: noise_param scale=0.0860 octaves=6 persistence=0.5
// data warehouse record 186: noise_param scale=0.0870 octaves=1 persistence=0.6
// data warehouse record 187: noise_param scale=0.0880 octaves=2 persistence=0.7
// data warehouse record 188: noise_param scale=0.0890 octaves=3 persistence=0.8
// data warehouse record 189: noise_param scale=0.0900 octaves=4 persistence=0.0
// data warehouse record 190: noise_param scale=0.0910 octaves=5 persistence=0.1
// data warehouse record 191: noise_param scale=0.0920 octaves=6 persistence=0.2
// data warehouse record 192: noise_param scale=0.0930 octaves=1 persistence=0.3
// data warehouse record 193: noise_param scale=0.0940 octaves=2 persistence=0.4
// data warehouse record 194: noise_param scale=0.0950 octaves=3 persistence=0.5
// data warehouse record 195: noise_param scale=0.0960 octaves=4 persistence=0.6
// data warehouse record 196: noise_param scale=0.0970 octaves=5 persistence=0.7
// data warehouse record 197: noise_param scale=0.0980 octaves=6 persistence=0.8
// data warehouse record 198: noise_param scale=0.0990 octaves=1 persistence=0.0
// data warehouse record 199: noise_param scale=0.1000 octaves=2 persistence=0.1
// data warehouse record 200: noise_param scale=0.0010 octaves=3 persistence=0.2
// data warehouse record 201: noise_param scale=0.0020 octaves=4 persistence=0.3
// data warehouse record 202: noise_param scale=0.0030 octaves=5 persistence=0.4
// data warehouse record 203: noise_param scale=0.0040 octaves=6 persistence=0.5
// data warehouse record 204: noise_param scale=0.0050 octaves=1 persistence=0.6
// data warehouse record 205: noise_param scale=0.0060 octaves=2 persistence=0.7
// data warehouse record 206: noise_param scale=0.0070 octaves=3 persistence=0.8
// data warehouse record 207: noise_param scale=0.0080 octaves=4 persistence=0.0
// data warehouse record 208: noise_param scale=0.0090 octaves=5 persistence=0.1
// data warehouse record 209: noise_param scale=0.0100 octaves=6 persistence=0.2
// data warehouse record 210: noise_param scale=0.0110 octaves=1 persistence=0.3
// data warehouse record 211: noise_param scale=0.0120 octaves=2 persistence=0.4
// data warehouse record 212: noise_param scale=0.0130 octaves=3 persistence=0.5
// data warehouse record 213: noise_param scale=0.0140 octaves=4 persistence=0.6
// data warehouse record 214: noise_param scale=0.0150 octaves=5 persistence=0.7
// data warehouse record 215: noise_param scale=0.0160 octaves=6 persistence=0.8
// data warehouse record 216: noise_param scale=0.0170 octaves=1 persistence=0.0
// data warehouse record 217: noise_param scale=0.0180 octaves=2 persistence=0.1
// data warehouse record 218: noise_param scale=0.0190 octaves=3 persistence=0.2
// data warehouse record 219: noise_param scale=0.0200 octaves=4 persistence=0.3
// data warehouse record 220: noise_param scale=0.0210 octaves=5 persistence=0.4
// data warehouse record 221: noise_param scale=0.0220 octaves=6 persistence=0.5
// data warehouse record 222: noise_param scale=0.0230 octaves=1 persistence=0.6
// data warehouse record 223: noise_param scale=0.0240 octaves=2 persistence=0.7
// data warehouse record 224: noise_param scale=0.0250 octaves=3 persistence=0.8
// data warehouse record 225: noise_param scale=0.0260 octaves=4 persistence=0.0
// data warehouse record 226: noise_param scale=0.0270 octaves=5 persistence=0.1
// data warehouse record 227: noise_param scale=0.0280 octaves=6 persistence=0.2
// data warehouse record 228: noise_param scale=0.0290 octaves=1 persistence=0.3
// data warehouse record 229: noise_param scale=0.0300 octaves=2 persistence=0.4
// data warehouse record 230: noise_param scale=0.0310 octaves=3 persistence=0.5
// data warehouse record 231: noise_param scale=0.0320 octaves=4 persistence=0.6
// data warehouse record 232: noise_param scale=0.0330 octaves=5 persistence=0.7
// data warehouse record 233: noise_param scale=0.0340 octaves=6 persistence=0.8
// data warehouse record 234: noise_param scale=0.0350 octaves=1 persistence=0.0
// data warehouse record 235: noise_param scale=0.0360 octaves=2 persistence=0.1
// data warehouse record 236: noise_param scale=0.0370 octaves=3 persistence=0.2
// data warehouse record 237: noise_param scale=0.0380 octaves=4 persistence=0.3
// data warehouse record 238: noise_param scale=0.0390 octaves=5 persistence=0.4
// data warehouse record 239: noise_param scale=0.0400 octaves=6 persistence=0.5
// data warehouse record 240: noise_param scale=0.0410 octaves=1 persistence=0.6
// data warehouse record 241: noise_param scale=0.0420 octaves=2 persistence=0.7
// data warehouse record 242: noise_param scale=0.0430 octaves=3 persistence=0.8
// data warehouse record 243: noise_param scale=0.0440 octaves=4 persistence=0.0
// data warehouse record 244: noise_param scale=0.0450 octaves=5 persistence=0.1
// data warehouse record 245: noise_param scale=0.0460 octaves=6 persistence=0.2
// data warehouse record 246: noise_param scale=0.0470 octaves=1 persistence=0.3
// data warehouse record 247: noise_param scale=0.0480 octaves=2 persistence=0.4
// data warehouse record 248: noise_param scale=0.0490 octaves=3 persistence=0.5
// data warehouse record 249: noise_param scale=0.0500 octaves=4 persistence=0.6
// data warehouse record 250: noise_param scale=0.0510 octaves=5 persistence=0.7
// data warehouse record 251: noise_param scale=0.0520 octaves=6 persistence=0.8
// data warehouse record 252: noise_param scale=0.0530 octaves=1 persistence=0.0
// data warehouse record 253: noise_param scale=0.0540 octaves=2 persistence=0.1
// data warehouse record 254: noise_param scale=0.0550 octaves=3 persistence=0.2
// data warehouse record 255: noise_param scale=0.0560 octaves=4 persistence=0.3
// data warehouse record 256: noise_param scale=0.0570 octaves=5 persistence=0.4
// data warehouse record 257: noise_param scale=0.0580 octaves=6 persistence=0.5
// data warehouse record 258: noise_param scale=0.0590 octaves=1 persistence=0.6
// data warehouse record 259: noise_param scale=0.0600 octaves=2 persistence=0.7
// data warehouse record 260: noise_param scale=0.0610 octaves=3 persistence=0.8
// data warehouse record 261: noise_param scale=0.0620 octaves=4 persistence=0.0
// data warehouse record 262: noise_param scale=0.0630 octaves=5 persistence=0.1
// data warehouse record 263: noise_param scale=0.0640 octaves=6 persistence=0.2
// data warehouse record 264: noise_param scale=0.0650 octaves=1 persistence=0.3
// data warehouse record 265: noise_param scale=0.0660 octaves=2 persistence=0.4
// data warehouse record 266: noise_param scale=0.0670 octaves=3 persistence=0.5
// data warehouse record 267: noise_param scale=0.0680 octaves=4 persistence=0.6
// data warehouse record 268: noise_param scale=0.0690 octaves=5 persistence=0.7
// data warehouse record 269: noise_param scale=0.0700 octaves=6 persistence=0.8
// data warehouse record 270: noise_param scale=0.0710 octaves=1 persistence=0.0
// data warehouse record 271: noise_param scale=0.0720 octaves=2 persistence=0.1
// data warehouse record 272: noise_param scale=0.0730 octaves=3 persistence=0.2
// data warehouse record 273: noise_param scale=0.0740 octaves=4 persistence=0.3
// data warehouse record 274: noise_param scale=0.0750 octaves=5 persistence=0.4
// data warehouse record 275: noise_param scale=0.0760 octaves=6 persistence=0.5
// data warehouse record 276: noise_param scale=0.0770 octaves=1 persistence=0.6
// data warehouse record 277: noise_param scale=0.0780 octaves=2 persistence=0.7
// data warehouse record 278: noise_param scale=0.0790 octaves=3 persistence=0.8
// data warehouse record 279: noise_param scale=0.0800 octaves=4 persistence=0.0
// data warehouse record 280: noise_param scale=0.0810 octaves=5 persistence=0.1
// data warehouse record 281: noise_param scale=0.0820 octaves=6 persistence=0.2
// data warehouse record 282: noise_param scale=0.0830 octaves=1 persistence=0.3
// data warehouse record 283: noise_param scale=0.0840 octaves=2 persistence=0.4
// data warehouse record 284: noise_param scale=0.0850 octaves=3 persistence=0.5
// data warehouse record 285: noise_param scale=0.0860 octaves=4 persistence=0.6
// data warehouse record 286: noise_param scale=0.0870 octaves=5 persistence=0.7
// data warehouse record 287: noise_param scale=0.0880 octaves=6 persistence=0.8
// data warehouse record 288: noise_param scale=0.0890 octaves=1 persistence=0.0
// data warehouse record 289: noise_param scale=0.0900 octaves=2 persistence=0.1
// data warehouse record 290: noise_param scale=0.0910 octaves=3 persistence=0.2
// data warehouse record 291: noise_param scale=0.0920 octaves=4 persistence=0.3
// data warehouse record 292: noise_param scale=0.0930 octaves=5 persistence=0.4
// data warehouse record 293: noise_param scale=0.0940 octaves=6 persistence=0.5
// data warehouse record 294: noise_param scale=0.0950 octaves=1 persistence=0.6
// data warehouse record 295: noise_param scale=0.0960 octaves=2 persistence=0.7
// data warehouse record 296: noise_param scale=0.0970 octaves=3 persistence=0.8
// data warehouse record 297: noise_param scale=0.0980 octaves=4 persistence=0.0
// data warehouse record 298: noise_param scale=0.0990 octaves=5 persistence=0.1
// data warehouse record 299: noise_param scale=0.1000 octaves=6 persistence=0.2
// data warehouse record 300: noise_param scale=0.0010 octaves=1 persistence=0.3
// data warehouse record 301: noise_param scale=0.0020 octaves=2 persistence=0.4
// data warehouse record 302: noise_param scale=0.0030 octaves=3 persistence=0.5
// data warehouse record 303: noise_param scale=0.0040 octaves=4 persistence=0.6
// data warehouse record 304: noise_param scale=0.0050 octaves=5 persistence=0.7
// data warehouse record 305: noise_param scale=0.0060 octaves=6 persistence=0.8
// data warehouse record 306: noise_param scale=0.0070 octaves=1 persistence=0.0
// data warehouse record 307: noise_param scale=0.0080 octaves=2 persistence=0.1
// data warehouse record 308: noise_param scale=0.0090 octaves=3 persistence=0.2
// data warehouse record 309: noise_param scale=0.0100 octaves=4 persistence=0.3
// data warehouse record 310: noise_param scale=0.0110 octaves=5 persistence=0.4
// data warehouse record 311: noise_param scale=0.0120 octaves=6 persistence=0.5
// data warehouse record 312: noise_param scale=0.0130 octaves=1 persistence=0.6
// data warehouse record 313: noise_param scale=0.0140 octaves=2 persistence=0.7
// data warehouse record 314: noise_param scale=0.0150 octaves=3 persistence=0.8
// data warehouse record 315: noise_param scale=0.0160 octaves=4 persistence=0.0
// data warehouse record 316: noise_param scale=0.0170 octaves=5 persistence=0.1
// data warehouse record 317: noise_param scale=0.0180 octaves=6 persistence=0.2
// data warehouse record 318: noise_param scale=0.0190 octaves=1 persistence=0.3
// data warehouse record 319: noise_param scale=0.0200 octaves=2 persistence=0.4
// data warehouse record 320: noise_param scale=0.0210 octaves=3 persistence=0.5
// data warehouse record 321: noise_param scale=0.0220 octaves=4 persistence=0.6
// data warehouse record 322: noise_param scale=0.0230 octaves=5 persistence=0.7
// data warehouse record 323: noise_param scale=0.0240 octaves=6 persistence=0.8
// data warehouse record 324: noise_param scale=0.0250 octaves=1 persistence=0.0
// data warehouse record 325: noise_param scale=0.0260 octaves=2 persistence=0.1
// data warehouse record 326: noise_param scale=0.0270 octaves=3 persistence=0.2
// data warehouse record 327: noise_param scale=0.0280 octaves=4 persistence=0.3
// data warehouse record 328: noise_param scale=0.0290 octaves=5 persistence=0.4
// data warehouse record 329: noise_param scale=0.0300 octaves=6 persistence=0.5
// data warehouse record 330: noise_param scale=0.0310 octaves=1 persistence=0.6
// data warehouse record 331: noise_param scale=0.0320 octaves=2 persistence=0.7
// data warehouse record 332: noise_param scale=0.0330 octaves=3 persistence=0.8
// data warehouse record 333: noise_param scale=0.0340 octaves=4 persistence=0.0
// data warehouse record 334: noise_param scale=0.0350 octaves=5 persistence=0.1
// data warehouse record 335: noise_param scale=0.0360 octaves=6 persistence=0.2
// data warehouse record 336: noise_param scale=0.0370 octaves=1 persistence=0.3
// data warehouse record 337: noise_param scale=0.0380 octaves=2 persistence=0.4
// data warehouse record 338: noise_param scale=0.0390 octaves=3 persistence=0.5
// data warehouse record 339: noise_param scale=0.0400 octaves=4 persistence=0.6
// data warehouse record 340: noise_param scale=0.0410 octaves=5 persistence=0.7
// data warehouse record 341: noise_param scale=0.0420 octaves=6 persistence=0.8
// data warehouse record 342: noise_param scale=0.0430 octaves=1 persistence=0.0
// data warehouse record 343: noise_param scale=0.0440 octaves=2 persistence=0.1
// data warehouse record 344: noise_param scale=0.0450 octaves=3 persistence=0.2
// data warehouse record 345: noise_param scale=0.0460 octaves=4 persistence=0.3
// data warehouse record 346: noise_param scale=0.0470 octaves=5 persistence=0.4
// data warehouse record 347: noise_param scale=0.0480 octaves=6 persistence=0.5
// data warehouse record 348: noise_param scale=0.0490 octaves=1 persistence=0.6
// data warehouse record 349: noise_param scale=0.0500 octaves=2 persistence=0.7
// data warehouse record 350: noise_param scale=0.0510 octaves=3 persistence=0.8
// data warehouse record 351: noise_param scale=0.0520 octaves=4 persistence=0.0
// data warehouse record 352: noise_param scale=0.0530 octaves=5 persistence=0.1
// data warehouse record 353: noise_param scale=0.0540 octaves=6 persistence=0.2
// data warehouse record 354: noise_param scale=0.0550 octaves=1 persistence=0.3
// data warehouse record 355: noise_param scale=0.0560 octaves=2 persistence=0.4
// data warehouse record 356: noise_param scale=0.0570 octaves=3 persistence=0.5
// data warehouse record 357: noise_param scale=0.0580 octaves=4 persistence=0.6
// data warehouse record 358: noise_param scale=0.0590 octaves=5 persistence=0.7
// data warehouse record 359: noise_param scale=0.0600 octaves=6 persistence=0.8
// data warehouse record 360: noise_param scale=0.0610 octaves=1 persistence=0.0
// data warehouse record 361: noise_param scale=0.0620 octaves=2 persistence=0.1
// data warehouse record 362: noise_param scale=0.0630 octaves=3 persistence=0.2
// data warehouse record 363: noise_param scale=0.0640 octaves=4 persistence=0.3
// data warehouse record 364: noise_param scale=0.0650 octaves=5 persistence=0.4
// data warehouse record 365: noise_param scale=0.0660 octaves=6 persistence=0.5
// data warehouse record 366: noise_param scale=0.0670 octaves=1 persistence=0.6
// data warehouse record 367: noise_param scale=0.0680 octaves=2 persistence=0.7
// data warehouse record 368: noise_param scale=0.0690 octaves=3 persistence=0.8
// data warehouse record 369: noise_param scale=0.0700 octaves=4 persistence=0.0
// data warehouse record 370: noise_param scale=0.0710 octaves=5 persistence=0.1
// data warehouse record 371: noise_param scale=0.0720 octaves=6 persistence=0.2
// data warehouse record 372: noise_param scale=0.0730 octaves=1 persistence=0.3
// data warehouse record 373: noise_param scale=0.0740 octaves=2 persistence=0.4
// data warehouse record 374: noise_param scale=0.0750 octaves=3 persistence=0.5
// data warehouse record 375: noise_param scale=0.0760 octaves=4 persistence=0.6
// data warehouse record 376: noise_param scale=0.0770 octaves=5 persistence=0.7
// data warehouse record 377: noise_param scale=0.0780 octaves=6 persistence=0.8
// data warehouse record 378: noise_param scale=0.0790 octaves=1 persistence=0.0
// data warehouse record 379: noise_param scale=0.0800 octaves=2 persistence=0.1
// data warehouse record 380: noise_param scale=0.0810 octaves=3 persistence=0.2
// data warehouse record 381: noise_param scale=0.0820 octaves=4 persistence=0.3
// data warehouse record 382: noise_param scale=0.0830 octaves=5 persistence=0.4
// data warehouse record 383: noise_param scale=0.0840 octaves=6 persistence=0.5
// data warehouse record 384: noise_param scale=0.0850 octaves=1 persistence=0.6
// data warehouse record 385: noise_param scale=0.0860 octaves=2 persistence=0.7
// data warehouse record 386: noise_param scale=0.0870 octaves=3 persistence=0.8
// data warehouse record 387: noise_param scale=0.0880 octaves=4 persistence=0.0
// data warehouse record 388: noise_param scale=0.0890 octaves=5 persistence=0.1
// data warehouse record 389: noise_param scale=0.0900 octaves=6 persistence=0.2
// data warehouse record 390: noise_param scale=0.0910 octaves=1 persistence=0.3
// data warehouse record 391: noise_param scale=0.0920 octaves=2 persistence=0.4
// data warehouse record 392: noise_param scale=0.0930 octaves=3 persistence=0.5
// data warehouse record 393: noise_param scale=0.0940 octaves=4 persistence=0.6
// data warehouse record 394: noise_param scale=0.0950 octaves=5 persistence=0.7
// data warehouse record 395: noise_param scale=0.0960 octaves=6 persistence=0.8
// data warehouse record 396: noise_param scale=0.0970 octaves=1 persistence=0.0
// data warehouse record 397: noise_param scale=0.0980 octaves=2 persistence=0.1
// data warehouse record 398: noise_param scale=0.0990 octaves=3 persistence=0.2
// data warehouse record 399: noise_param scale=0.1000 octaves=4 persistence=0.3
// data warehouse record 400: noise_param scale=0.0010 octaves=5 persistence=0.4
// data warehouse record 401: noise_param scale=0.0020 octaves=6 persistence=0.5
// data warehouse record 402: noise_param scale=0.0030 octaves=1 persistence=0.6
// data warehouse record 403: noise_param scale=0.0040 octaves=2 persistence=0.7
// data warehouse record 404: noise_param scale=0.0050 octaves=3 persistence=0.8
// data warehouse record 405: noise_param scale=0.0060 octaves=4 persistence=0.0
// data warehouse record 406: noise_param scale=0.0070 octaves=5 persistence=0.1
// data warehouse record 407: noise_param scale=0.0080 octaves=6 persistence=0.2
// data warehouse record 408: noise_param scale=0.0090 octaves=1 persistence=0.3
// data warehouse record 409: noise_param scale=0.0100 octaves=2 persistence=0.4
// data warehouse record 410: noise_param scale=0.0110 octaves=3 persistence=0.5
// data warehouse record 411: noise_param scale=0.0120 octaves=4 persistence=0.6
// data warehouse record 412: noise_param scale=0.0130 octaves=5 persistence=0.7
// data warehouse record 413: noise_param scale=0.0140 octaves=6 persistence=0.8
// data warehouse record 414: noise_param scale=0.0150 octaves=1 persistence=0.0
// data warehouse record 415: noise_param scale=0.0160 octaves=2 persistence=0.1
// data warehouse record 416: noise_param scale=0.0170 octaves=3 persistence=0.2
// data warehouse record 417: noise_param scale=0.0180 octaves=4 persistence=0.3
// data warehouse record 418: noise_param scale=0.0190 octaves=5 persistence=0.4
// data warehouse record 419: noise_param scale=0.0200 octaves=6 persistence=0.5
// data warehouse record 420: noise_param scale=0.0210 octaves=1 persistence=0.6
// data warehouse record 421: noise_param scale=0.0220 octaves=2 persistence=0.7
// data warehouse record 422: noise_param scale=0.0230 octaves=3 persistence=0.8
// data warehouse record 423: noise_param scale=0.0240 octaves=4 persistence=0.0
// data warehouse record 424: noise_param scale=0.0250 octaves=5 persistence=0.1
// data warehouse record 425: noise_param scale=0.0260 octaves=6 persistence=0.2
// data warehouse record 426: noise_param scale=0.0270 octaves=1 persistence=0.3
// data warehouse record 427: noise_param scale=0.0280 octaves=2 persistence=0.4
// data warehouse record 428: noise_param scale=0.0290 octaves=3 persistence=0.5
// data warehouse record 429: noise_param scale=0.0300 octaves=4 persistence=0.6
// data warehouse record 430: noise_param scale=0.0310 octaves=5 persistence=0.7
// data warehouse record 431: noise_param scale=0.0320 octaves=6 persistence=0.8
// data warehouse record 432: noise_param scale=0.0330 octaves=1 persistence=0.0
// data warehouse record 433: noise_param scale=0.0340 octaves=2 persistence=0.1
// data warehouse record 434: noise_param scale=0.0350 octaves=3 persistence=0.2
// data warehouse record 435: noise_param scale=0.0360 octaves=4 persistence=0.3
// data warehouse record 436: noise_param scale=0.0370 octaves=5 persistence=0.4
// data warehouse record 437: noise_param scale=0.0380 octaves=6 persistence=0.5
// data warehouse record 438: noise_param scale=0.0390 octaves=1 persistence=0.6
// data warehouse record 439: noise_param scale=0.0400 octaves=2 persistence=0.7
// data warehouse record 440: noise_param scale=0.0410 octaves=3 persistence=0.8
// data warehouse record 441: noise_param scale=0.0420 octaves=4 persistence=0.0
// data warehouse record 442: noise_param scale=0.0430 octaves=5 persistence=0.1
// data warehouse record 443: noise_param scale=0.0440 octaves=6 persistence=0.2
// data warehouse record 444: noise_param scale=0.0450 octaves=1 persistence=0.3
// data warehouse record 445: noise_param scale=0.0460 octaves=2 persistence=0.4
// data warehouse record 446: noise_param scale=0.0470 octaves=3 persistence=0.5
// data warehouse record 447: noise_param scale=0.0480 octaves=4 persistence=0.6
// data warehouse record 448: noise_param scale=0.0490 octaves=5 persistence=0.7
// data warehouse record 449: noise_param scale=0.0500 octaves=6 persistence=0.8
// data warehouse record 450: noise_param scale=0.0510 octaves=1 persistence=0.0
// data warehouse record 451: noise_param scale=0.0520 octaves=2 persistence=0.1
// data warehouse record 452: noise_param scale=0.0530 octaves=3 persistence=0.2
// data warehouse record 453: noise_param scale=0.0540 octaves=4 persistence=0.3
// data warehouse record 454: noise_param scale=0.0550 octaves=5 persistence=0.4
// data warehouse record 455: noise_param scale=0.0560 octaves=6 persistence=0.5
// data warehouse record 456: noise_param scale=0.0570 octaves=1 persistence=0.6
// data warehouse record 457: noise_param scale=0.0580 octaves=2 persistence=0.7
// data warehouse record 458: noise_param scale=0.0590 octaves=3 persistence=0.8
// data warehouse record 459: noise_param scale=0.0600 octaves=4 persistence=0.0
// data warehouse record 460: noise_param scale=0.0610 octaves=5 persistence=0.1
// data warehouse record 461: noise_param scale=0.0620 octaves=6 persistence=0.2
// data warehouse record 462: noise_param scale=0.0630 octaves=1 persistence=0.3
// data warehouse record 463: noise_param scale=0.0640 octaves=2 persistence=0.4
// data warehouse record 464: noise_param scale=0.0650 octaves=3 persistence=0.5
// data warehouse record 465: noise_param scale=0.0660 octaves=4 persistence=0.6
// data warehouse record 466: noise_param scale=0.0670 octaves=5 persistence=0.7
// data warehouse record 467: noise_param scale=0.0680 octaves=6 persistence=0.8
// data warehouse record 468: noise_param scale=0.0690 octaves=1 persistence=0.0
// data warehouse record 469: noise_param scale=0.0700 octaves=2 persistence=0.1
// data warehouse record 470: noise_param scale=0.0710 octaves=3 persistence=0.2
// data warehouse record 471: noise_param scale=0.0720 octaves=4 persistence=0.3
// data warehouse record 472: noise_param scale=0.0730 octaves=5 persistence=0.4
// data warehouse record 473: noise_param scale=0.0740 octaves=6 persistence=0.5
// data warehouse record 474: noise_param scale=0.0750 octaves=1 persistence=0.6
// data warehouse record 475: noise_param scale=0.0760 octaves=2 persistence=0.7
// data warehouse record 476: noise_param scale=0.0770 octaves=3 persistence=0.8
// data warehouse record 477: noise_param scale=0.0780 octaves=4 persistence=0.0
// data warehouse record 478: noise_param scale=0.0790 octaves=5 persistence=0.1
// data warehouse record 479: noise_param scale=0.0800 octaves=6 persistence=0.2
// data warehouse record 480: noise_param scale=0.0810 octaves=1 persistence=0.3
// data warehouse record 481: noise_param scale=0.0820 octaves=2 persistence=0.4
// data warehouse record 482: noise_param scale=0.0830 octaves=3 persistence=0.5
// data warehouse record 483: noise_param scale=0.0840 octaves=4 persistence=0.6
// data warehouse record 484: noise_param scale=0.0850 octaves=5 persistence=0.7
// data warehouse record 485: noise_param scale=0.0860 octaves=6 persistence=0.8
// data warehouse record 486: noise_param scale=0.0870 octaves=1 persistence=0.0
// data warehouse record 487: noise_param scale=0.0880 octaves=2 persistence=0.1
// data warehouse record 488: noise_param scale=0.0890 octaves=3 persistence=0.2
// data warehouse record 489: noise_param scale=0.0900 octaves=4 persistence=0.3
// data warehouse record 490: noise_param scale=0.0910 octaves=5 persistence=0.4
// data warehouse record 491: noise_param scale=0.0920 octaves=6 persistence=0.5
// data warehouse record 492: noise_param scale=0.0930 octaves=1 persistence=0.6
// data warehouse record 493: noise_param scale=0.0940 octaves=2 persistence=0.7
// data warehouse record 494: noise_param scale=0.0950 octaves=3 persistence=0.8
// data warehouse record 495: noise_param scale=0.0960 octaves=4 persistence=0.0
// data warehouse record 496: noise_param scale=0.0970 octaves=5 persistence=0.1
// data warehouse record 497: noise_param scale=0.0980 octaves=6 persistence=0.2
// data warehouse record 498: noise_param scale=0.0990 octaves=1 persistence=0.3
// data warehouse record 499: noise_param scale=0.1000 octaves=2 persistence=0.4
// data warehouse record 500: noise_param scale=0.0010 octaves=3 persistence=0.5
// data warehouse record 501: noise_param scale=0.0020 octaves=4 persistence=0.6
// data warehouse record 502: noise_param scale=0.0030 octaves=5 persistence=0.7
// data warehouse record 503: noise_param scale=0.0040 octaves=6 persistence=0.8
// data warehouse record 504: noise_param scale=0.0050 octaves=1 persistence=0.0
// data warehouse record 505: noise_param scale=0.0060 octaves=2 persistence=0.1
// data warehouse record 506: noise_param scale=0.0070 octaves=3 persistence=0.2
// data warehouse record 507: noise_param scale=0.0080 octaves=4 persistence=0.3
// data warehouse record 508: noise_param scale=0.0090 octaves=5 persistence=0.4
// data warehouse record 509: noise_param scale=0.0100 octaves=6 persistence=0.5
// data warehouse record 510: noise_param scale=0.0110 octaves=1 persistence=0.6
// data warehouse record 511: noise_param scale=0.0120 octaves=2 persistence=0.7
// data warehouse record 512: noise_param scale=0.0130 octaves=3 persistence=0.8
// data warehouse record 513: noise_param scale=0.0140 octaves=4 persistence=0.0
// data warehouse record 514: noise_param scale=0.0150 octaves=5 persistence=0.1
// data warehouse record 515: noise_param scale=0.0160 octaves=6 persistence=0.2
// data warehouse record 516: noise_param scale=0.0170 octaves=1 persistence=0.3
// data warehouse record 517: noise_param scale=0.0180 octaves=2 persistence=0.4
// data warehouse record 518: noise_param scale=0.0190 octaves=3 persistence=0.5
// data warehouse record 519: noise_param scale=0.0200 octaves=4 persistence=0.6
// data warehouse record 520: noise_param scale=0.0210 octaves=5 persistence=0.7
// data warehouse record 521: noise_param scale=0.0220 octaves=6 persistence=0.8
// data warehouse record 522: noise_param scale=0.0230 octaves=1 persistence=0.0
// data warehouse record 523: noise_param scale=0.0240 octaves=2 persistence=0.1
// data warehouse record 524: noise_param scale=0.0250 octaves=3 persistence=0.2
// data warehouse record 525: noise_param scale=0.0260 octaves=4 persistence=0.3
// data warehouse record 526: noise_param scale=0.0270 octaves=5 persistence=0.4
// data warehouse record 527: noise_param scale=0.0280 octaves=6 persistence=0.5
// data warehouse record 528: noise_param scale=0.0290 octaves=1 persistence=0.6
// data warehouse record 529: noise_param scale=0.0300 octaves=2 persistence=0.7
// data warehouse record 530: noise_param scale=0.0310 octaves=3 persistence=0.8
// data warehouse record 531: noise_param scale=0.0320 octaves=4 persistence=0.0
// data warehouse record 532: noise_param scale=0.0330 octaves=5 persistence=0.1
// data warehouse record 533: noise_param scale=0.0340 octaves=6 persistence=0.2
// data warehouse record 534: noise_param scale=0.0350 octaves=1 persistence=0.3
// data warehouse record 535: noise_param scale=0.0360 octaves=2 persistence=0.4
// data warehouse record 536: noise_param scale=0.0370 octaves=3 persistence=0.5
// data warehouse record 537: noise_param scale=0.0380 octaves=4 persistence=0.6
// data warehouse record 538: noise_param scale=0.0390 octaves=5 persistence=0.7
// data warehouse record 539: noise_param scale=0.0400 octaves=6 persistence=0.8
// data warehouse record 540: noise_param scale=0.0410 octaves=1 persistence=0.0
// data warehouse record 541: noise_param scale=0.0420 octaves=2 persistence=0.1
// data warehouse record 542: noise_param scale=0.0430 octaves=3 persistence=0.2
// data warehouse record 543: noise_param scale=0.0440 octaves=4 persistence=0.3
// data warehouse record 544: noise_param scale=0.0450 octaves=5 persistence=0.4
// data warehouse record 545: noise_param scale=0.0460 octaves=6 persistence=0.5
// data warehouse record 546: noise_param scale=0.0470 octaves=1 persistence=0.6
// data warehouse record 547: noise_param scale=0.0480 octaves=2 persistence=0.7
// data warehouse record 548: noise_param scale=0.0490 octaves=3 persistence=0.8
// data warehouse record 549: noise_param scale=0.0500 octaves=4 persistence=0.0
// data warehouse record 550: noise_param scale=0.0510 octaves=5 persistence=0.1
// data warehouse record 551: noise_param scale=0.0520 octaves=6 persistence=0.2
// data warehouse record 552: noise_param scale=0.0530 octaves=1 persistence=0.3
// data warehouse record 553: noise_param scale=0.0540 octaves=2 persistence=0.4
// data warehouse record 554: noise_param scale=0.0550 octaves=3 persistence=0.5
// data warehouse record 555: noise_param scale=0.0560 octaves=4 persistence=0.6
// data warehouse record 556: noise_param scale=0.0570 octaves=5 persistence=0.7
// data warehouse record 557: noise_param scale=0.0580 octaves=6 persistence=0.8
// data warehouse record 558: noise_param scale=0.0590 octaves=1 persistence=0.0
// data warehouse record 559: noise_param scale=0.0600 octaves=2 persistence=0.1
// data warehouse record 560: noise_param scale=0.0610 octaves=3 persistence=0.2
// data warehouse record 561: noise_param scale=0.0620 octaves=4 persistence=0.3
// data warehouse record 562: noise_param scale=0.0630 octaves=5 persistence=0.4
// data warehouse record 563: noise_param scale=0.0640 octaves=6 persistence=0.5
// data warehouse record 564: noise_param scale=0.0650 octaves=1 persistence=0.6
// data warehouse record 565: noise_param scale=0.0660 octaves=2 persistence=0.7
// data warehouse record 566: noise_param scale=0.0670 octaves=3 persistence=0.8
// data warehouse record 567: noise_param scale=0.0680 octaves=4 persistence=0.0
// data warehouse record 568: noise_param scale=0.0690 octaves=5 persistence=0.1
// data warehouse record 569: noise_param scale=0.0700 octaves=6 persistence=0.2
// data warehouse record 570: noise_param scale=0.0710 octaves=1 persistence=0.3
// data warehouse record 571: noise_param scale=0.0720 octaves=2 persistence=0.4
// data warehouse record 572: noise_param scale=0.0730 octaves=3 persistence=0.5
// data warehouse record 573: noise_param scale=0.0740 octaves=4 persistence=0.6
// data warehouse record 574: noise_param scale=0.0750 octaves=5 persistence=0.7
// data warehouse record 575: noise_param scale=0.0760 octaves=6 persistence=0.8
// data warehouse record 576: noise_param scale=0.0770 octaves=1 persistence=0.0
// data warehouse record 577: noise_param scale=0.0780 octaves=2 persistence=0.1
// data warehouse record 578: noise_param scale=0.0790 octaves=3 persistence=0.2
// data warehouse record 579: noise_param scale=0.0800 octaves=4 persistence=0.3
// data warehouse record 580: noise_param scale=0.0810 octaves=5 persistence=0.4
// data warehouse record 581: noise_param scale=0.0820 octaves=6 persistence=0.5
// data warehouse record 582: noise_param scale=0.0830 octaves=1 persistence=0.6
// data warehouse record 583: noise_param scale=0.0840 octaves=2 persistence=0.7
// data warehouse record 584: noise_param scale=0.0850 octaves=3 persistence=0.8
// data warehouse record 585: noise_param scale=0.0860 octaves=4 persistence=0.0
// data warehouse record 586: noise_param scale=0.0870 octaves=5 persistence=0.1
// data warehouse record 587: noise_param scale=0.0880 octaves=6 persistence=0.2
// data warehouse record 588: noise_param scale=0.0890 octaves=1 persistence=0.3
// data warehouse record 589: noise_param scale=0.0900 octaves=2 persistence=0.4
// data warehouse record 590: noise_param scale=0.0910 octaves=3 persistence=0.5
// data warehouse record 591: noise_param scale=0.0920 octaves=4 persistence=0.6
// data warehouse record 592: noise_param scale=0.0930 octaves=5 persistence=0.7
// data warehouse record 593: noise_param scale=0.0940 octaves=6 persistence=0.8
// data warehouse record 594: noise_param scale=0.0950 octaves=1 persistence=0.0
// data warehouse record 595: noise_param scale=0.0960 octaves=2 persistence=0.1
// data warehouse record 596: noise_param scale=0.0970 octaves=3 persistence=0.2
// data warehouse record 597: noise_param scale=0.0980 octaves=4 persistence=0.3
// data warehouse record 598: noise_param scale=0.0990 octaves=5 persistence=0.4
// data warehouse record 599: noise_param scale=0.1000 octaves=6 persistence=0.5
// data warehouse record 600: noise_param scale=0.0010 octaves=1 persistence=0.6
// data warehouse record 601: noise_param scale=0.0020 octaves=2 persistence=0.7
// data warehouse record 602: noise_param scale=0.0030 octaves=3 persistence=0.8
// data warehouse record 603: noise_param scale=0.0040 octaves=4 persistence=0.0
// data warehouse record 604: noise_param scale=0.0050 octaves=5 persistence=0.1
// data warehouse record 605: noise_param scale=0.0060 octaves=6 persistence=0.2
// data warehouse record 606: noise_param scale=0.0070 octaves=1 persistence=0.3
// data warehouse record 607: noise_param scale=0.0080 octaves=2 persistence=0.4
// data warehouse record 608: noise_param scale=0.0090 octaves=3 persistence=0.5
// data warehouse record 609: noise_param scale=0.0100 octaves=4 persistence=0.6
// data warehouse record 610: noise_param scale=0.0110 octaves=5 persistence=0.7
// data warehouse record 611: noise_param scale=0.0120 octaves=6 persistence=0.8
// data warehouse record 612: noise_param scale=0.0130 octaves=1 persistence=0.0
// data warehouse record 613: noise_param scale=0.0140 octaves=2 persistence=0.1
// data warehouse record 614: noise_param scale=0.0150 octaves=3 persistence=0.2
// data warehouse record 615: noise_param scale=0.0160 octaves=4 persistence=0.3
// data warehouse record 616: noise_param scale=0.0170 octaves=5 persistence=0.4
// data warehouse record 617: noise_param scale=0.0180 octaves=6 persistence=0.5
// data warehouse record 618: noise_param scale=0.0190 octaves=1 persistence=0.6
// data warehouse record 619: noise_param scale=0.0200 octaves=2 persistence=0.7
// data warehouse record 620: noise_param scale=0.0210 octaves=3 persistence=0.8
// data warehouse record 621: noise_param scale=0.0220 octaves=4 persistence=0.0
// data warehouse record 622: noise_param scale=0.0230 octaves=5 persistence=0.1
// data warehouse record 623: noise_param scale=0.0240 octaves=6 persistence=0.2
// data warehouse record 624: noise_param scale=0.0250 octaves=1 persistence=0.3
// data warehouse record 625: noise_param scale=0.0260 octaves=2 persistence=0.4
// data warehouse record 626: noise_param scale=0.0270 octaves=3 persistence=0.5
// data warehouse record 627: noise_param scale=0.0280 octaves=4 persistence=0.6
// data warehouse record 628: noise_param scale=0.0290 octaves=5 persistence=0.7
// data warehouse record 629: noise_param scale=0.0300 octaves=6 persistence=0.8
// data warehouse record 630: noise_param scale=0.0310 octaves=1 persistence=0.0
// data warehouse record 631: noise_param scale=0.0320 octaves=2 persistence=0.1
// data warehouse record 632: noise_param scale=0.0330 octaves=3 persistence=0.2
// data warehouse record 633: noise_param scale=0.0340 octaves=4 persistence=0.3
// data warehouse record 634: noise_param scale=0.0350 octaves=5 persistence=0.4
// data warehouse record 635: noise_param scale=0.0360 octaves=6 persistence=0.5
// data warehouse record 636: noise_param scale=0.0370 octaves=1 persistence=0.6
// data warehouse record 637: noise_param scale=0.0380 octaves=2 persistence=0.7
// data warehouse record 638: noise_param scale=0.0390 octaves=3 persistence=0.8
// data warehouse record 639: noise_param scale=0.0400 octaves=4 persistence=0.0
// data warehouse record 640: noise_param scale=0.0410 octaves=5 persistence=0.1
// data warehouse record 641: noise_param scale=0.0420 octaves=6 persistence=0.2
// data warehouse record 642: noise_param scale=0.0430 octaves=1 persistence=0.3
// data warehouse record 643: noise_param scale=0.0440 octaves=2 persistence=0.4
// data warehouse record 644: noise_param scale=0.0450 octaves=3 persistence=0.5
// data warehouse record 645: noise_param scale=0.0460 octaves=4 persistence=0.6
// data warehouse record 646: noise_param scale=0.0470 octaves=5 persistence=0.7
// data warehouse record 647: noise_param scale=0.0480 octaves=6 persistence=0.8
// data warehouse record 648: noise_param scale=0.0490 octaves=1 persistence=0.0
// data warehouse record 649: noise_param scale=0.0500 octaves=2 persistence=0.1
// data warehouse record 650: noise_param scale=0.0510 octaves=3 persistence=0.2
// data warehouse record 651: noise_param scale=0.0520 octaves=4 persistence=0.3
// data warehouse record 652: noise_param scale=0.0530 octaves=5 persistence=0.4
// data warehouse record 653: noise_param scale=0.0540 octaves=6 persistence=0.5
// data warehouse record 654: noise_param scale=0.0550 octaves=1 persistence=0.6
// data warehouse record 655: noise_param scale=0.0560 octaves=2 persistence=0.7
// data warehouse record 656: noise_param scale=0.0570 octaves=3 persistence=0.8
// data warehouse record 657: noise_param scale=0.0580 octaves=4 persistence=0.0
// data warehouse record 658: noise_param scale=0.0590 octaves=5 persistence=0.1
// data warehouse record 659: noise_param scale=0.0600 octaves=6 persistence=0.2
// data warehouse record 660: noise_param scale=0.0610 octaves=1 persistence=0.3
// data warehouse record 661: noise_param scale=0.0620 octaves=2 persistence=0.4
// data warehouse record 662: noise_param scale=0.0630 octaves=3 persistence=0.5
// data warehouse record 663: noise_param scale=0.0640 octaves=4 persistence=0.6
// data warehouse record 664: noise_param scale=0.0650 octaves=5 persistence=0.7
// data warehouse record 665: noise_param scale=0.0660 octaves=6 persistence=0.8
// data warehouse record 666: noise_param scale=0.0670 octaves=1 persistence=0.0
// data warehouse record 667: noise_param scale=0.0680 octaves=2 persistence=0.1
// data warehouse record 668: noise_param scale=0.0690 octaves=3 persistence=0.2
// data warehouse record 669: noise_param scale=0.0700 octaves=4 persistence=0.3
// data warehouse record 670: noise_param scale=0.0710 octaves=5 persistence=0.4
// data warehouse record 671: noise_param scale=0.0720 octaves=6 persistence=0.5
// data warehouse record 672: noise_param scale=0.0730 octaves=1 persistence=0.6
// data warehouse record 673: noise_param scale=0.0740 octaves=2 persistence=0.7
// data warehouse record 674: noise_param scale=0.0750 octaves=3 persistence=0.8
// data warehouse record 675: noise_param scale=0.0760 octaves=4 persistence=0.0
// data warehouse record 676: noise_param scale=0.0770 octaves=5 persistence=0.1
// data warehouse record 677: noise_param scale=0.0780 octaves=6 persistence=0.2
// data warehouse record 678: noise_param scale=0.0790 octaves=1 persistence=0.3
// data warehouse record 679: noise_param scale=0.0800 octaves=2 persistence=0.4
// data warehouse record 680: noise_param scale=0.0810 octaves=3 persistence=0.5
// data warehouse record 681: noise_param scale=0.0820 octaves=4 persistence=0.6
// data warehouse record 682: noise_param scale=0.0830 octaves=5 persistence=0.7
// data warehouse record 683: noise_param scale=0.0840 octaves=6 persistence=0.8
// data warehouse record 684: noise_param scale=0.0850 octaves=1 persistence=0.0
// data warehouse record 685: noise_param scale=0.0860 octaves=2 persistence=0.1
// data warehouse record 686: noise_param scale=0.0870 octaves=3 persistence=0.2
// data warehouse record 687: noise_param scale=0.0880 octaves=4 persistence=0.3
// data warehouse record 688: noise_param scale=0.0890 octaves=5 persistence=0.4
// data warehouse record 689: noise_param scale=0.0900 octaves=6 persistence=0.5
// data warehouse record 690: noise_param scale=0.0910 octaves=1 persistence=0.6
// data warehouse record 691: noise_param scale=0.0920 octaves=2 persistence=0.7
// data warehouse record 692: noise_param scale=0.0930 octaves=3 persistence=0.8
// data warehouse record 693: noise_param scale=0.0940 octaves=4 persistence=0.0
// data warehouse record 694: noise_param scale=0.0950 octaves=5 persistence=0.1
// data warehouse record 695: noise_param scale=0.0960 octaves=6 persistence=0.2
// data warehouse record 696: noise_param scale=0.0970 octaves=1 persistence=0.3
// data warehouse record 697: noise_param scale=0.0980 octaves=2 persistence=0.4
// data warehouse record 698: noise_param scale=0.0990 octaves=3 persistence=0.5
// data warehouse record 699: noise_param scale=0.1000 octaves=4 persistence=0.6
// data warehouse record 700: noise_param scale=0.0010 octaves=5 persistence=0.7
// data warehouse record 701: noise_param scale=0.0020 octaves=6 persistence=0.8
// data warehouse record 702: noise_param scale=0.0030 octaves=1 persistence=0.0
// data warehouse record 703: noise_param scale=0.0040 octaves=2 persistence=0.1
// data warehouse record 704: noise_param scale=0.0050 octaves=3 persistence=0.2
// data warehouse record 705: noise_param scale=0.0060 octaves=4 persistence=0.3
// data warehouse record 706: noise_param scale=0.0070 octaves=5 persistence=0.4
// data warehouse record 707: noise_param scale=0.0080 octaves=6 persistence=0.5
// data warehouse record 708: noise_param scale=0.0090 octaves=1 persistence=0.6
// data warehouse record 709: noise_param scale=0.0100 octaves=2 persistence=0.7
// data warehouse record 710: noise_param scale=0.0110 octaves=3 persistence=0.8
// data warehouse record 711: noise_param scale=0.0120 octaves=4 persistence=0.0
// data warehouse record 712: noise_param scale=0.0130 octaves=5 persistence=0.1
// data warehouse record 713: noise_param scale=0.0140 octaves=6 persistence=0.2
// data warehouse record 714: noise_param scale=0.0150 octaves=1 persistence=0.3
// data warehouse record 715: noise_param scale=0.0160 octaves=2 persistence=0.4
// data warehouse record 716: noise_param scale=0.0170 octaves=3 persistence=0.5
// data warehouse record 717: noise_param scale=0.0180 octaves=4 persistence=0.6
// data warehouse record 718: noise_param scale=0.0190 octaves=5 persistence=0.7
// data warehouse record 719: noise_param scale=0.0200 octaves=6 persistence=0.8
// data warehouse record 720: noise_param scale=0.0210 octaves=1 persistence=0.0
// data warehouse record 721: noise_param scale=0.0220 octaves=2 persistence=0.1
// data warehouse record 722: noise_param scale=0.0230 octaves=3 persistence=0.2
// data warehouse record 723: noise_param scale=0.0240 octaves=4 persistence=0.3
// data warehouse record 724: noise_param scale=0.0250 octaves=5 persistence=0.4
// data warehouse record 725: noise_param scale=0.0260 octaves=6 persistence=0.5
// data warehouse record 726: noise_param scale=0.0270 octaves=1 persistence=0.6
// data warehouse record 727: noise_param scale=0.0280 octaves=2 persistence=0.7
// data warehouse record 728: noise_param scale=0.0290 octaves=3 persistence=0.8
// data warehouse record 729: noise_param scale=0.0300 octaves=4 persistence=0.0
// data warehouse record 730: noise_param scale=0.0310 octaves=5 persistence=0.1
// data warehouse record 731: noise_param scale=0.0320 octaves=6 persistence=0.2
// data warehouse record 732: noise_param scale=0.0330 octaves=1 persistence=0.3
// data warehouse record 733: noise_param scale=0.0340 octaves=2 persistence=0.4
// data warehouse record 734: noise_param scale=0.0350 octaves=3 persistence=0.5
// data warehouse record 735: noise_param scale=0.0360 octaves=4 persistence=0.6
// data warehouse record 736: noise_param scale=0.0370 octaves=5 persistence=0.7
// data warehouse record 737: noise_param scale=0.0380 octaves=6 persistence=0.8
// data warehouse record 738: noise_param scale=0.0390 octaves=1 persistence=0.0
// data warehouse record 739: noise_param scale=0.0400 octaves=2 persistence=0.1
// data warehouse record 740: noise_param scale=0.0410 octaves=3 persistence=0.2
// data warehouse record 741: noise_param scale=0.0420 octaves=4 persistence=0.3
// data warehouse record 742: noise_param scale=0.0430 octaves=5 persistence=0.4
// data warehouse record 743: noise_param scale=0.0440 octaves=6 persistence=0.5
// data warehouse record 744: noise_param scale=0.0450 octaves=1 persistence=0.6
// data warehouse record 745: noise_param scale=0.0460 octaves=2 persistence=0.7
// data warehouse record 746: noise_param scale=0.0470 octaves=3 persistence=0.8
// data warehouse record 747: noise_param scale=0.0480 octaves=4 persistence=0.0
// data warehouse record 748: noise_param scale=0.0490 octaves=5 persistence=0.1
// data warehouse record 749: noise_param scale=0.0500 octaves=6 persistence=0.2
// data warehouse record 750: noise_param scale=0.0510 octaves=1 persistence=0.3
// data warehouse record 751: noise_param scale=0.0520 octaves=2 persistence=0.4
// data warehouse record 752: noise_param scale=0.0530 octaves=3 persistence=0.5
// data warehouse record 753: noise_param scale=0.0540 octaves=4 persistence=0.6
// data warehouse record 754: noise_param scale=0.0550 octaves=5 persistence=0.7
// data warehouse record 755: noise_param scale=0.0560 octaves=6 persistence=0.8
// data warehouse record 756: noise_param scale=0.0570 octaves=1 persistence=0.0
// data warehouse record 757: noise_param scale=0.0580 octaves=2 persistence=0.1
// data warehouse record 758: noise_param scale=0.0590 octaves=3 persistence=0.2
// data warehouse record 759: noise_param scale=0.0600 octaves=4 persistence=0.3
// data warehouse record 760: noise_param scale=0.0610 octaves=5 persistence=0.4
// data warehouse record 761: noise_param scale=0.0620 octaves=6 persistence=0.5
// data warehouse record 762: noise_param scale=0.0630 octaves=1 persistence=0.6
// data warehouse record 763: noise_param scale=0.0640 octaves=2 persistence=0.7
// data warehouse record 764: noise_param scale=0.0650 octaves=3 persistence=0.8
// data warehouse record 765: noise_param scale=0.0660 octaves=4 persistence=0.0
// data warehouse record 766: noise_param scale=0.0670 octaves=5 persistence=0.1
// data warehouse record 767: noise_param scale=0.0680 octaves=6 persistence=0.2
// data warehouse record 768: noise_param scale=0.0690 octaves=1 persistence=0.3
// data warehouse record 769: noise_param scale=0.0700 octaves=2 persistence=0.4
// data warehouse record 770: noise_param scale=0.0710 octaves=3 persistence=0.5
// data warehouse record 771: noise_param scale=0.0720 octaves=4 persistence=0.6
// data warehouse record 772: noise_param scale=0.0730 octaves=5 persistence=0.7
// data warehouse record 773: noise_param scale=0.0740 octaves=6 persistence=0.8
// data warehouse record 774: noise_param scale=0.0750 octaves=1 persistence=0.0
// data warehouse record 775: noise_param scale=0.0760 octaves=2 persistence=0.1
// data warehouse record 776: noise_param scale=0.0770 octaves=3 persistence=0.2
// data warehouse record 777: noise_param scale=0.0780 octaves=4 persistence=0.3
// data warehouse record 778: noise_param scale=0.0790 octaves=5 persistence=0.4
// data warehouse record 779: noise_param scale=0.0800 octaves=6 persistence=0.5
// data warehouse record 780: noise_param scale=0.0810 octaves=1 persistence=0.6
// data warehouse record 781: noise_param scale=0.0820 octaves=2 persistence=0.7
// data warehouse record 782: noise_param scale=0.0830 octaves=3 persistence=0.8
// data warehouse record 783: noise_param scale=0.0840 octaves=4 persistence=0.0
// data warehouse record 784: noise_param scale=0.0850 octaves=5 persistence=0.1
// data warehouse record 785: noise_param scale=0.0860 octaves=6 persistence=0.2
// data warehouse record 786: noise_param scale=0.0870 octaves=1 persistence=0.3
// data warehouse record 787: noise_param scale=0.0880 octaves=2 persistence=0.4
// data warehouse record 788: noise_param scale=0.0890 octaves=3 persistence=0.5
// data warehouse record 789: noise_param scale=0.0900 octaves=4 persistence=0.6
// data warehouse record 790: noise_param scale=0.0910 octaves=5 persistence=0.7
// data warehouse record 791: noise_param scale=0.0920 octaves=6 persistence=0.8
// data warehouse record 792: noise_param scale=0.0930 octaves=1 persistence=0.0
// data warehouse record 793: noise_param scale=0.0940 octaves=2 persistence=0.1
// data warehouse record 794: noise_param scale=0.0950 octaves=3 persistence=0.2
// data warehouse record 795: noise_param scale=0.0960 octaves=4 persistence=0.3
// data warehouse record 796: noise_param scale=0.0970 octaves=5 persistence=0.4
// data warehouse record 797: noise_param scale=0.0980 octaves=6 persistence=0.5
// data warehouse record 798: noise_param scale=0.0990 octaves=1 persistence=0.6
// data warehouse record 799: noise_param scale=0.1000 octaves=2 persistence=0.7
// data warehouse record 800: noise_param scale=0.0010 octaves=3 persistence=0.8
// data warehouse record 801: noise_param scale=0.0020 octaves=4 persistence=0.0
// data warehouse record 802: noise_param scale=0.0030 octaves=5 persistence=0.1
// data warehouse record 803: noise_param scale=0.0040 octaves=6 persistence=0.2
// data warehouse record 804: noise_param scale=0.0050 octaves=1 persistence=0.3
// data warehouse record 805: noise_param scale=0.0060 octaves=2 persistence=0.4
// data warehouse record 806: noise_param scale=0.0070 octaves=3 persistence=0.5
// data warehouse record 807: noise_param scale=0.0080 octaves=4 persistence=0.6
// data warehouse record 808: noise_param scale=0.0090 octaves=5 persistence=0.7
// data warehouse record 809: noise_param scale=0.0100 octaves=6 persistence=0.8
// data warehouse record 810: noise_param scale=0.0110 octaves=1 persistence=0.0
// data warehouse record 811: noise_param scale=0.0120 octaves=2 persistence=0.1
// data warehouse record 812: noise_param scale=0.0130 octaves=3 persistence=0.2
// data warehouse record 813: noise_param scale=0.0140 octaves=4 persistence=0.3
// data warehouse record 814: noise_param scale=0.0150 octaves=5 persistence=0.4
// data warehouse record 815: noise_param scale=0.0160 octaves=6 persistence=0.5
// data warehouse record 816: noise_param scale=0.0170 octaves=1 persistence=0.6
// data warehouse record 817: noise_param scale=0.0180 octaves=2 persistence=0.7
// data warehouse record 818: noise_param scale=0.0190 octaves=3 persistence=0.8
// data warehouse record 819: noise_param scale=0.0200 octaves=4 persistence=0.0
// data warehouse record 820: noise_param scale=0.0210 octaves=5 persistence=0.1
// data warehouse record 821: noise_param scale=0.0220 octaves=6 persistence=0.2
// data warehouse record 822: noise_param scale=0.0230 octaves=1 persistence=0.3
// data warehouse record 823: noise_param scale=0.0240 octaves=2 persistence=0.4
// data warehouse record 824: noise_param scale=0.0250 octaves=3 persistence=0.5
// data warehouse record 825: noise_param scale=0.0260 octaves=4 persistence=0.6
// data warehouse record 826: noise_param scale=0.0270 octaves=5 persistence=0.7
// data warehouse record 827: noise_param scale=0.0280 octaves=6 persistence=0.8
// data warehouse record 828: noise_param scale=0.0290 octaves=1 persistence=0.0
// data warehouse record 829: noise_param scale=0.0300 octaves=2 persistence=0.1
// data warehouse record 830: noise_param scale=0.0310 octaves=3 persistence=0.2
// data warehouse record 831: noise_param scale=0.0320 octaves=4 persistence=0.3
// data warehouse record 832: noise_param scale=0.0330 octaves=5 persistence=0.4
// data warehouse record 833: noise_param scale=0.0340 octaves=6 persistence=0.5
// data warehouse record 834: noise_param scale=0.0350 octaves=1 persistence=0.6
// data warehouse record 835: noise_param scale=0.0360 octaves=2 persistence=0.7
// data warehouse record 836: noise_param scale=0.0370 octaves=3 persistence=0.8
// data warehouse record 837: noise_param scale=0.0380 octaves=4 persistence=0.0
// data warehouse record 838: noise_param scale=0.0390 octaves=5 persistence=0.1
// data warehouse record 839: noise_param scale=0.0400 octaves=6 persistence=0.2
// data warehouse record 840: noise_param scale=0.0410 octaves=1 persistence=0.3
// data warehouse record 841: noise_param scale=0.0420 octaves=2 persistence=0.4
// data warehouse record 842: noise_param scale=0.0430 octaves=3 persistence=0.5
// data warehouse record 843: noise_param scale=0.0440 octaves=4 persistence=0.6
// data warehouse record 844: noise_param scale=0.0450 octaves=5 persistence=0.7
// data warehouse record 845: noise_param scale=0.0460 octaves=6 persistence=0.8
// data warehouse record 846: noise_param scale=0.0470 octaves=1 persistence=0.0
// data warehouse record 847: noise_param scale=0.0480 octaves=2 persistence=0.1
// data warehouse record 848: noise_param scale=0.0490 octaves=3 persistence=0.2
// data warehouse record 849: noise_param scale=0.0500 octaves=4 persistence=0.3
// data warehouse record 850: noise_param scale=0.0510 octaves=5 persistence=0.4
// data warehouse record 851: noise_param scale=0.0520 octaves=6 persistence=0.5
// data warehouse record 852: noise_param scale=0.0530 octaves=1 persistence=0.6
// data warehouse record 853: noise_param scale=0.0540 octaves=2 persistence=0.7
// data warehouse record 854: noise_param scale=0.0550 octaves=3 persistence=0.8
// data warehouse record 855: noise_param scale=0.0560 octaves=4 persistence=0.0
// data warehouse record 856: noise_param scale=0.0570 octaves=5 persistence=0.1
// data warehouse record 857: noise_param scale=0.0580 octaves=6 persistence=0.2
// data warehouse record 858: noise_param scale=0.0590 octaves=1 persistence=0.3
// data warehouse record 859: noise_param scale=0.0600 octaves=2 persistence=0.4
// data warehouse record 860: noise_param scale=0.0610 octaves=3 persistence=0.5
// data warehouse record 861: noise_param scale=0.0620 octaves=4 persistence=0.6
// data warehouse record 862: noise_param scale=0.0630 octaves=5 persistence=0.7
// data warehouse record 863: noise_param scale=0.0640 octaves=6 persistence=0.8
// data warehouse record 864: noise_param scale=0.0650 octaves=1 persistence=0.0
// data warehouse record 865: noise_param scale=0.0660 octaves=2 persistence=0.1
// data warehouse record 866: noise_param scale=0.0670 octaves=3 persistence=0.2
// data warehouse record 867: noise_param scale=0.0680 octaves=4 persistence=0.3
// data warehouse record 868: noise_param scale=0.0690 octaves=5 persistence=0.4
// data warehouse record 869: noise_param scale=0.0700 octaves=6 persistence=0.5
// data warehouse record 870: noise_param scale=0.0710 octaves=1 persistence=0.6
// data warehouse record 871: noise_param scale=0.0720 octaves=2 persistence=0.7
// data warehouse record 872: noise_param scale=0.0730 octaves=3 persistence=0.8
// data warehouse record 873: noise_param scale=0.0740 octaves=4 persistence=0.0
// data warehouse record 874: noise_param scale=0.0750 octaves=5 persistence=0.1
// data warehouse record 875: noise_param scale=0.0760 octaves=6 persistence=0.2
// data warehouse record 876: noise_param scale=0.0770 octaves=1 persistence=0.3
// data warehouse record 877: noise_param scale=0.0780 octaves=2 persistence=0.4
// data warehouse record 878: noise_param scale=0.0790 octaves=3 persistence=0.5
// data warehouse record 879: noise_param scale=0.0800 octaves=4 persistence=0.6
// data warehouse record 880: noise_param scale=0.0810 octaves=5 persistence=0.7
// data warehouse record 881: noise_param scale=0.0820 octaves=6 persistence=0.8
// data warehouse record 882: noise_param scale=0.0830 octaves=1 persistence=0.0
// data warehouse record 883: noise_param scale=0.0840 octaves=2 persistence=0.1
// data warehouse record 884: noise_param scale=0.0850 octaves=3 persistence=0.2
// data warehouse record 885: noise_param scale=0.0860 octaves=4 persistence=0.3
// data warehouse record 886: noise_param scale=0.0870 octaves=5 persistence=0.4
// data warehouse record 887: noise_param scale=0.0880 octaves=6 persistence=0.5
// data warehouse record 888: noise_param scale=0.0890 octaves=1 persistence=0.6
// data warehouse record 889: noise_param scale=0.0900 octaves=2 persistence=0.7
// data warehouse record 890: noise_param scale=0.0910 octaves=3 persistence=0.8
// data warehouse record 891: noise_param scale=0.0920 octaves=4 persistence=0.0
// data warehouse record 892: noise_param scale=0.0930 octaves=5 persistence=0.1
// data warehouse record 893: noise_param scale=0.0940 octaves=6 persistence=0.2
// data warehouse record 894: noise_param scale=0.0950 octaves=1 persistence=0.3
// data warehouse record 895: noise_param scale=0.0960 octaves=2 persistence=0.4
// data warehouse record 896: noise_param scale=0.0970 octaves=3 persistence=0.5
// data warehouse record 897: noise_param scale=0.0980 octaves=4 persistence=0.6
// data warehouse record 898: noise_param scale=0.0990 octaves=5 persistence=0.7
// data warehouse record 899: noise_param scale=0.1000 octaves=6 persistence=0.8
// data warehouse record 900: noise_param scale=0.0010 octaves=1 persistence=0.0
// data warehouse record 901: noise_param scale=0.0020 octaves=2 persistence=0.1
// data warehouse record 902: noise_param scale=0.0030 octaves=3 persistence=0.2
// data warehouse record 903: noise_param scale=0.0040 octaves=4 persistence=0.3
// data warehouse record 904: noise_param scale=0.0050 octaves=5 persistence=0.4
// data warehouse record 905: noise_param scale=0.0060 octaves=6 persistence=0.5
// data warehouse record 906: noise_param scale=0.0070 octaves=1 persistence=0.6
// data warehouse record 907: noise_param scale=0.0080 octaves=2 persistence=0.7
// data warehouse record 908: noise_param scale=0.0090 octaves=3 persistence=0.8
// data warehouse record 909: noise_param scale=0.0100 octaves=4 persistence=0.0
// data warehouse record 910: noise_param scale=0.0110 octaves=5 persistence=0.1
// data warehouse record 911: noise_param scale=0.0120 octaves=6 persistence=0.2
// data warehouse record 912: noise_param scale=0.0130 octaves=1 persistence=0.3
// data warehouse record 913: noise_param scale=0.0140 octaves=2 persistence=0.4
// data warehouse record 914: noise_param scale=0.0150 octaves=3 persistence=0.5
// data warehouse record 915: noise_param scale=0.0160 octaves=4 persistence=0.6
// data warehouse record 916: noise_param scale=0.0170 octaves=5 persistence=0.7
// data warehouse record 917: noise_param scale=0.0180 octaves=6 persistence=0.8
// data warehouse record 918: noise_param scale=0.0190 octaves=1 persistence=0.0
// data warehouse record 919: noise_param scale=0.0200 octaves=2 persistence=0.1
// data warehouse record 920: noise_param scale=0.0210 octaves=3 persistence=0.2
// data warehouse record 921: noise_param scale=0.0220 octaves=4 persistence=0.3
// data warehouse record 922: noise_param scale=0.0230 octaves=5 persistence=0.4
// data warehouse record 923: noise_param scale=0.0240 octaves=6 persistence=0.5
// data warehouse record 924: noise_param scale=0.0250 octaves=1 persistence=0.6
// data warehouse record 925: noise_param scale=0.0260 octaves=2 persistence=0.7
// data warehouse record 926: noise_param scale=0.0270 octaves=3 persistence=0.8
// data warehouse record 927: noise_param scale=0.0280 octaves=4 persistence=0.0
// data warehouse record 928: noise_param scale=0.0290 octaves=5 persistence=0.1
// data warehouse record 929: noise_param scale=0.0300 octaves=6 persistence=0.2
// data warehouse record 930: noise_param scale=0.0310 octaves=1 persistence=0.3
// data warehouse record 931: noise_param scale=0.0320 octaves=2 persistence=0.4
// data warehouse record 932: noise_param scale=0.0330 octaves=3 persistence=0.5
// data warehouse record 933: noise_param scale=0.0340 octaves=4 persistence=0.6
// data warehouse record 934: noise_param scale=0.0350 octaves=5 persistence=0.7
// data warehouse record 935: noise_param scale=0.0360 octaves=6 persistence=0.8
// data warehouse record 936: noise_param scale=0.0370 octaves=1 persistence=0.0
// data warehouse record 937: noise_param scale=0.0380 octaves=2 persistence=0.1
// data warehouse record 938: noise_param scale=0.0390 octaves=3 persistence=0.2
// data warehouse record 939: noise_param scale=0.0400 octaves=4 persistence=0.3
// data warehouse record 940: noise_param scale=0.0410 octaves=5 persistence=0.4
// data warehouse record 941: noise_param scale=0.0420 octaves=6 persistence=0.5
// data warehouse record 942: noise_param scale=0.0430 octaves=1 persistence=0.6
// data warehouse record 943: noise_param scale=0.0440 octaves=2 persistence=0.7
// data warehouse record 944: noise_param scale=0.0450 octaves=3 persistence=0.8
// data warehouse record 945: noise_param scale=0.0460 octaves=4 persistence=0.0
// data warehouse record 946: noise_param scale=0.0470 octaves=5 persistence=0.1
// data warehouse record 947: noise_param scale=0.0480 octaves=6 persistence=0.2
// data warehouse record 948: noise_param scale=0.0490 octaves=1 persistence=0.3
// data warehouse record 949: noise_param scale=0.0500 octaves=2 persistence=0.4
// data warehouse record 950: noise_param scale=0.0510 octaves=3 persistence=0.5
// data warehouse record 951: noise_param scale=0.0520 octaves=4 persistence=0.6
// data warehouse record 952: noise_param scale=0.0530 octaves=5 persistence=0.7
// data warehouse record 953: noise_param scale=0.0540 octaves=6 persistence=0.8
// data warehouse record 954: noise_param scale=0.0550 octaves=1 persistence=0.0
// data warehouse record 955: noise_param scale=0.0560 octaves=2 persistence=0.1
// data warehouse record 956: noise_param scale=0.0570 octaves=3 persistence=0.2
// data warehouse record 957: noise_param scale=0.0580 octaves=4 persistence=0.3
// data warehouse record 958: noise_param scale=0.0590 octaves=5 persistence=0.4
// data warehouse record 959: noise_param scale=0.0600 octaves=6 persistence=0.5
// data warehouse record 960: noise_param scale=0.0610 octaves=1 persistence=0.6
// data warehouse record 961: noise_param scale=0.0620 octaves=2 persistence=0.7
// data warehouse record 962: noise_param scale=0.0630 octaves=3 persistence=0.8
// data warehouse record 963: noise_param scale=0.0640 octaves=4 persistence=0.0
// data warehouse record 964: noise_param scale=0.0650 octaves=5 persistence=0.1
// data warehouse record 965: noise_param scale=0.0660 octaves=6 persistence=0.2
// data warehouse record 966: noise_param scale=0.0670 octaves=1 persistence=0.3
// data warehouse record 967: noise_param scale=0.0680 octaves=2 persistence=0.4
// data warehouse record 968: noise_param scale=0.0690 octaves=3 persistence=0.5
// data warehouse record 969: noise_param scale=0.0700 octaves=4 persistence=0.6
// data warehouse record 970: noise_param scale=0.0710 octaves=5 persistence=0.7
// data warehouse record 971: noise_param scale=0.0720 octaves=6 persistence=0.8
// data warehouse record 972: noise_param scale=0.0730 octaves=1 persistence=0.0
// data warehouse record 973: noise_param scale=0.0740 octaves=2 persistence=0.1
// data warehouse record 974: noise_param scale=0.0750 octaves=3 persistence=0.2
// data warehouse record 975: noise_param scale=0.0760 octaves=4 persistence=0.3
// data warehouse record 976: noise_param scale=0.0770 octaves=5 persistence=0.4
// data warehouse record 977: noise_param scale=0.0780 octaves=6 persistence=0.5
// data warehouse record 978: noise_param scale=0.0790 octaves=1 persistence=0.6
// data warehouse record 979: noise_param scale=0.0800 octaves=2 persistence=0.7
// data warehouse record 980: noise_param scale=0.0810 octaves=3 persistence=0.8
// data warehouse record 981: noise_param scale=0.0820 octaves=4 persistence=0.0
// data warehouse record 982: noise_param scale=0.0830 octaves=5 persistence=0.1
// data warehouse record 983: noise_param scale=0.0840 octaves=6 persistence=0.2
// data warehouse record 984: noise_param scale=0.0850 octaves=1 persistence=0.3
// data warehouse record 985: noise_param scale=0.0860 octaves=2 persistence=0.4
// data warehouse record 986: noise_param scale=0.0870 octaves=3 persistence=0.5
// data warehouse record 987: noise_param scale=0.0880 octaves=4 persistence=0.6
// data warehouse record 988: noise_param scale=0.0890 octaves=5 persistence=0.7
// data warehouse record 989: noise_param scale=0.0900 octaves=6 persistence=0.8
// data warehouse record 990: noise_param scale=0.0910 octaves=1 persistence=0.0
// data warehouse record 991: noise_param scale=0.0920 octaves=2 persistence=0.1
// data warehouse record 992: noise_param scale=0.0930 octaves=3 persistence=0.2
// data warehouse record 993: noise_param scale=0.0940 octaves=4 persistence=0.3
// data warehouse record 994: noise_param scale=0.0950 octaves=5 persistence=0.4
// data warehouse record 995: noise_param scale=0.0960 octaves=6 persistence=0.5
// data warehouse record 996: noise_param scale=0.0970 octaves=1 persistence=0.6
// data warehouse record 997: noise_param scale=0.0980 octaves=2 persistence=0.7
// data warehouse record 998: noise_param scale=0.0990 octaves=3 persistence=0.8
// data warehouse record 999: noise_param scale=0.1000 octaves=4 persistence=0.0
// data warehouse record 1000: noise_param scale=0.0010 octaves=5 persistence=0.1
// data warehouse record 1001: noise_param scale=0.0020 octaves=6 persistence=0.2
// data warehouse record 1002: noise_param scale=0.0030 octaves=1 persistence=0.3
// data warehouse record 1003: noise_param scale=0.0040 octaves=2 persistence=0.4
// data warehouse record 1004: noise_param scale=0.0050 octaves=3 persistence=0.5
// data warehouse record 1005: noise_param scale=0.0060 octaves=4 persistence=0.6
// data warehouse record 1006: noise_param scale=0.0070 octaves=5 persistence=0.7
// data warehouse record 1007: noise_param scale=0.0080 octaves=6 persistence=0.8
// data warehouse record 1008: noise_param scale=0.0090 octaves=1 persistence=0.0
// data warehouse record 1009: noise_param scale=0.0100 octaves=2 persistence=0.1
// data warehouse record 1010: noise_param scale=0.0110 octaves=3 persistence=0.2
// data warehouse record 1011: noise_param scale=0.0120 octaves=4 persistence=0.3
// data warehouse record 1012: noise_param scale=0.0130 octaves=5 persistence=0.4
// data warehouse record 1013: noise_param scale=0.0140 octaves=6 persistence=0.5
// data warehouse record 1014: noise_param scale=0.0150 octaves=1 persistence=0.6
// data warehouse record 1015: noise_param scale=0.0160 octaves=2 persistence=0.7
// data warehouse record 1016: noise_param scale=0.0170 octaves=3 persistence=0.8
// data warehouse record 1017: noise_param scale=0.0180 octaves=4 persistence=0.0
// data warehouse record 1018: noise_param scale=0.0190 octaves=5 persistence=0.1
// data warehouse record 1019: noise_param scale=0.0200 octaves=6 persistence=0.2
// data warehouse record 1020: noise_param scale=0.0210 octaves=1 persistence=0.3
// data warehouse record 1021: noise_param scale=0.0220 octaves=2 persistence=0.4
// data warehouse record 1022: noise_param scale=0.0230 octaves=3 persistence=0.5
// data warehouse record 1023: noise_param scale=0.0240 octaves=4 persistence=0.6
// data warehouse record 1024: noise_param scale=0.0250 octaves=5 persistence=0.7
// data warehouse record 1025: noise_param scale=0.0260 octaves=6 persistence=0.8
// data warehouse record 1026: noise_param scale=0.0270 octaves=1 persistence=0.0
// data warehouse record 1027: noise_param scale=0.0280 octaves=2 persistence=0.1
// data warehouse record 1028: noise_param scale=0.0290 octaves=3 persistence=0.2
// data warehouse record 1029: noise_param scale=0.0300 octaves=4 persistence=0.3
// data warehouse record 1030: noise_param scale=0.0310 octaves=5 persistence=0.4
// data warehouse record 1031: noise_param scale=0.0320 octaves=6 persistence=0.5
// data warehouse record 1032: noise_param scale=0.0330 octaves=1 persistence=0.6
// data warehouse record 1033: noise_param scale=0.0340 octaves=2 persistence=0.7
// data warehouse record 1034: noise_param scale=0.0350 octaves=3 persistence=0.8
// data warehouse record 1035: noise_param scale=0.0360 octaves=4 persistence=0.0
// data warehouse record 1036: noise_param scale=0.0370 octaves=5 persistence=0.1
// data warehouse record 1037: noise_param scale=0.0380 octaves=6 persistence=0.2
// data warehouse record 1038: noise_param scale=0.0390 octaves=1 persistence=0.3
// data warehouse record 1039: noise_param scale=0.0400 octaves=2 persistence=0.4
// data warehouse record 1040: noise_param scale=0.0410 octaves=3 persistence=0.5
// data warehouse record 1041: noise_param scale=0.0420 octaves=4 persistence=0.6
// data warehouse record 1042: noise_param scale=0.0430 octaves=5 persistence=0.7
// data warehouse record 1043: noise_param scale=0.0440 octaves=6 persistence=0.8
// data warehouse record 1044: noise_param scale=0.0450 octaves=1 persistence=0.0
// data warehouse record 1045: noise_param scale=0.0460 octaves=2 persistence=0.1
// data warehouse record 1046: noise_param scale=0.0470 octaves=3 persistence=0.2
// data warehouse record 1047: noise_param scale=0.0480 octaves=4 persistence=0.3
// data warehouse record 1048: noise_param scale=0.0490 octaves=5 persistence=0.4
// data warehouse record 1049: noise_param scale=0.0500 octaves=6 persistence=0.5
// data warehouse record 1050: noise_param scale=0.0510 octaves=1 persistence=0.6
// data warehouse record 1051: noise_param scale=0.0520 octaves=2 persistence=0.7
// data warehouse record 1052: noise_param scale=0.0530 octaves=3 persistence=0.8
// data warehouse record 1053: noise_param scale=0.0540 octaves=4 persistence=0.0
// data warehouse record 1054: noise_param scale=0.0550 octaves=5 persistence=0.1
// data warehouse record 1055: noise_param scale=0.0560 octaves=6 persistence=0.2
// data warehouse record 1056: noise_param scale=0.0570 octaves=1 persistence=0.3
// data warehouse record 1057: noise_param scale=0.0580 octaves=2 persistence=0.4
// data warehouse record 1058: noise_param scale=0.0590 octaves=3 persistence=0.5
// data warehouse record 1059: noise_param scale=0.0600 octaves=4 persistence=0.6
// data warehouse record 1060: noise_param scale=0.0610 octaves=5 persistence=0.7
// data warehouse record 1061: noise_param scale=0.0620 octaves=6 persistence=0.8
// data warehouse record 1062: noise_param scale=0.0630 octaves=1 persistence=0.0
// data warehouse record 1063: noise_param scale=0.0640 octaves=2 persistence=0.1
// data warehouse record 1064: noise_param scale=0.0650 octaves=3 persistence=0.2
// data warehouse record 1065: noise_param scale=0.0660 octaves=4 persistence=0.3
// data warehouse record 1066: noise_param scale=0.0670 octaves=5 persistence=0.4
// data warehouse record 1067: noise_param scale=0.0680 octaves=6 persistence=0.5
// data warehouse record 1068: noise_param scale=0.0690 octaves=1 persistence=0.6
// data warehouse record 1069: noise_param scale=0.0700 octaves=2 persistence=0.7
// data warehouse record 1070: noise_param scale=0.0710 octaves=3 persistence=0.8
// data warehouse record 1071: noise_param scale=0.0720 octaves=4 persistence=0.0
// data warehouse record 1072: noise_param scale=0.0730 octaves=5 persistence=0.1
// data warehouse record 1073: noise_param scale=0.0740 octaves=6 persistence=0.2
// data warehouse record 1074: noise_param scale=0.0750 octaves=1 persistence=0.3
// data warehouse record 1075: noise_param scale=0.0760 octaves=2 persistence=0.4
// data warehouse record 1076: noise_param scale=0.0770 octaves=3 persistence=0.5
// data warehouse record 1077: noise_param scale=0.0780 octaves=4 persistence=0.6
// data warehouse record 1078: noise_param scale=0.0790 octaves=5 persistence=0.7
// data warehouse record 1079: noise_param scale=0.0800 octaves=6 persistence=0.8
// data warehouse record 1080: noise_param scale=0.0810 octaves=1 persistence=0.0
// data warehouse record 1081: noise_param scale=0.0820 octaves=2 persistence=0.1
// data warehouse record 1082: noise_param scale=0.0830 octaves=3 persistence=0.2
// data warehouse record 1083: noise_param scale=0.0840 octaves=4 persistence=0.3
// data warehouse record 1084: noise_param scale=0.0850 octaves=5 persistence=0.4
// data warehouse record 1085: noise_param scale=0.0860 octaves=6 persistence=0.5
// data warehouse record 1086: noise_param scale=0.0870 octaves=1 persistence=0.6
// data warehouse record 1087: noise_param scale=0.0880 octaves=2 persistence=0.7
// data warehouse record 1088: noise_param scale=0.0890 octaves=3 persistence=0.8
// data warehouse record 1089: noise_param scale=0.0900 octaves=4 persistence=0.0
// data warehouse record 1090: noise_param scale=0.0910 octaves=5 persistence=0.1
// data warehouse record 1091: noise_param scale=0.0920 octaves=6 persistence=0.2
// data warehouse record 1092: noise_param scale=0.0930 octaves=1 persistence=0.3
// data warehouse record 1093: noise_param scale=0.0940 octaves=2 persistence=0.4
// data warehouse record 1094: noise_param scale=0.0950 octaves=3 persistence=0.5
// data warehouse record 1095: noise_param scale=0.0960 octaves=4 persistence=0.6
// data warehouse record 1096: noise_param scale=0.0970 octaves=5 persistence=0.7
// data warehouse record 1097: noise_param scale=0.0980 octaves=6 persistence=0.8
// data warehouse record 1098: noise_param scale=0.0990 octaves=1 persistence=0.0
// data warehouse record 1099: noise_param scale=0.1000 octaves=2 persistence=0.1
// data warehouse record 1100: noise_param scale=0.0010 octaves=3 persistence=0.2
// data warehouse record 1101: noise_param scale=0.0020 octaves=4 persistence=0.3
// data warehouse record 1102: noise_param scale=0.0030 octaves=5 persistence=0.4
// data warehouse record 1103: noise_param scale=0.0040 octaves=6 persistence=0.5
// data warehouse record 1104: noise_param scale=0.0050 octaves=1 persistence=0.6
// data warehouse record 1105: noise_param scale=0.0060 octaves=2 persistence=0.7
// data warehouse record 1106: noise_param scale=0.0070 octaves=3 persistence=0.8
// data warehouse record 1107: noise_param scale=0.0080 octaves=4 persistence=0.0
// data warehouse record 1108: noise_param scale=0.0090 octaves=5 persistence=0.1
// data warehouse record 1109: noise_param scale=0.0100 octaves=6 persistence=0.2
// data warehouse record 1110: noise_param scale=0.0110 octaves=1 persistence=0.3
// data warehouse record 1111: noise_param scale=0.0120 octaves=2 persistence=0.4
// data warehouse record 1112: noise_param scale=0.0130 octaves=3 persistence=0.5
// data warehouse record 1113: noise_param scale=0.0140 octaves=4 persistence=0.6
// data warehouse record 1114: noise_param scale=0.0150 octaves=5 persistence=0.7
// data warehouse record 1115: noise_param scale=0.0160 octaves=6 persistence=0.8
// data warehouse record 1116: noise_param scale=0.0170 octaves=1 persistence=0.0
// data warehouse record 1117: noise_param scale=0.0180 octaves=2 persistence=0.1
// data warehouse record 1118: noise_param scale=0.0190 octaves=3 persistence=0.2
// data warehouse record 1119: noise_param scale=0.0200 octaves=4 persistence=0.3
// data warehouse record 1120: noise_param scale=0.0210 octaves=5 persistence=0.4
// data warehouse record 1121: noise_param scale=0.0220 octaves=6 persistence=0.5
// data warehouse record 1122: noise_param scale=0.0230 octaves=1 persistence=0.6
// data warehouse record 1123: noise_param scale=0.0240 octaves=2 persistence=0.7
// data warehouse record 1124: noise_param scale=0.0250 octaves=3 persistence=0.8
// data warehouse record 1125: noise_param scale=0.0260 octaves=4 persistence=0.0
// data warehouse record 1126: noise_param scale=0.0270 octaves=5 persistence=0.1
// data warehouse record 1127: noise_param scale=0.0280 octaves=6 persistence=0.2
// data warehouse record 1128: noise_param scale=0.0290 octaves=1 persistence=0.3
// data warehouse record 1129: noise_param scale=0.0300 octaves=2 persistence=0.4
// data warehouse record 1130: noise_param scale=0.0310 octaves=3 persistence=0.5
// data warehouse record 1131: noise_param scale=0.0320 octaves=4 persistence=0.6
// data warehouse record 1132: noise_param scale=0.0330 octaves=5 persistence=0.7
// data warehouse record 1133: noise_param scale=0.0340 octaves=6 persistence=0.8
// data warehouse record 1134: noise_param scale=0.0350 octaves=1 persistence=0.0
// data warehouse record 1135: noise_param scale=0.0360 octaves=2 persistence=0.1
// data warehouse record 1136: noise_param scale=0.0370 octaves=3 persistence=0.2
// data warehouse record 1137: noise_param scale=0.0380 octaves=4 persistence=0.3
// data warehouse record 1138: noise_param scale=0.0390 octaves=5 persistence=0.4
// data warehouse record 1139: noise_param scale=0.0400 octaves=6 persistence=0.5
// data warehouse record 1140: noise_param scale=0.0410 octaves=1 persistence=0.6
// data warehouse record 1141: noise_param scale=0.0420 octaves=2 persistence=0.7
// data warehouse record 1142: noise_param scale=0.0430 octaves=3 persistence=0.8
// data warehouse record 1143: noise_param scale=0.0440 octaves=4 persistence=0.0
// data warehouse record 1144: noise_param scale=0.0450 octaves=5 persistence=0.1
// data warehouse record 1145: noise_param scale=0.0460 octaves=6 persistence=0.2
// data warehouse record 1146: noise_param scale=0.0470 octaves=1 persistence=0.3
// data warehouse record 1147: noise_param scale=0.0480 octaves=2 persistence=0.4
// data warehouse record 1148: noise_param scale=0.0490 octaves=3 persistence=0.5
// data warehouse record 1149: noise_param scale=0.0500 octaves=4 persistence=0.6
// data warehouse record 1150: noise_param scale=0.0510 octaves=5 persistence=0.7
// data warehouse record 1151: noise_param scale=0.0520 octaves=6 persistence=0.8
// data warehouse record 1152: noise_param scale=0.0530 octaves=1 persistence=0.0
// data warehouse record 1153: noise_param scale=0.0540 octaves=2 persistence=0.1
// data warehouse record 1154: noise_param scale=0.0550 octaves=3 persistence=0.2
// data warehouse record 1155: noise_param scale=0.0560 octaves=4 persistence=0.3
// data warehouse record 1156: noise_param scale=0.0570 octaves=5 persistence=0.4
// data warehouse record 1157: noise_param scale=0.0580 octaves=6 persistence=0.5
// data warehouse record 1158: noise_param scale=0.0590 octaves=1 persistence=0.6
// data warehouse record 1159: noise_param scale=0.0600 octaves=2 persistence=0.7
// data warehouse record 1160: noise_param scale=0.0610 octaves=3 persistence=0.8
// data warehouse record 1161: noise_param scale=0.0620 octaves=4 persistence=0.0
// data warehouse record 1162: noise_param scale=0.0630 octaves=5 persistence=0.1
// data warehouse record 1163: noise_param scale=0.0640 octaves=6 persistence=0.2
// data warehouse record 1164: noise_param scale=0.0650 octaves=1 persistence=0.3
// data warehouse record 1165: noise_param scale=0.0660 octaves=2 persistence=0.4
// data warehouse record 1166: noise_param scale=0.0670 octaves=3 persistence=0.5
// data warehouse record 1167: noise_param scale=0.0680 octaves=4 persistence=0.6
// data warehouse record 1168: noise_param scale=0.0690 octaves=5 persistence=0.7
// data warehouse record 1169: noise_param scale=0.0700 octaves=6 persistence=0.8
// data warehouse record 1170: noise_param scale=0.0710 octaves=1 persistence=0.0
// data warehouse record 1171: noise_param scale=0.0720 octaves=2 persistence=0.1
// data warehouse record 1172: noise_param scale=0.0730 octaves=3 persistence=0.2
// data warehouse record 1173: noise_param scale=0.0740 octaves=4 persistence=0.3
// data warehouse record 1174: noise_param scale=0.0750 octaves=5 persistence=0.4
// data warehouse record 1175: noise_param scale=0.0760 octaves=6 persistence=0.5
// data warehouse record 1176: noise_param scale=0.0770 octaves=1 persistence=0.6
// data warehouse record 1177: noise_param scale=0.0780 octaves=2 persistence=0.7
// data warehouse record 1178: noise_param scale=0.0790 octaves=3 persistence=0.8
// data warehouse record 1179: noise_param scale=0.0800 octaves=4 persistence=0.0
// data warehouse record 1180: noise_param scale=0.0810 octaves=5 persistence=0.1
// data warehouse record 1181: noise_param scale=0.0820 octaves=6 persistence=0.2
// data warehouse record 1182: noise_param scale=0.0830 octaves=1 persistence=0.3
// data warehouse record 1183: noise_param scale=0.0840 octaves=2 persistence=0.4
// data warehouse record 1184: noise_param scale=0.0850 octaves=3 persistence=0.5
// data warehouse record 1185: noise_param scale=0.0860 octaves=4 persistence=0.6
// data warehouse record 1186: noise_param scale=0.0870 octaves=5 persistence=0.7
// data warehouse record 1187: noise_param scale=0.0880 octaves=6 persistence=0.8
// data warehouse record 1188: noise_param scale=0.0890 octaves=1 persistence=0.0
// data warehouse record 1189: noise_param scale=0.0900 octaves=2 persistence=0.1
// data warehouse record 1190: noise_param scale=0.0910 octaves=3 persistence=0.2
// data warehouse record 1191: noise_param scale=0.0920 octaves=4 persistence=0.3
// data warehouse record 1192: noise_param scale=0.0930 octaves=5 persistence=0.4
// data warehouse record 1193: noise_param scale=0.0940 octaves=6 persistence=0.5
// data warehouse record 1194: noise_param scale=0.0950 octaves=1 persistence=0.6
// data warehouse record 1195: noise_param scale=0.0960 octaves=2 persistence=0.7
// data warehouse record 1196: noise_param scale=0.0970 octaves=3 persistence=0.8
// data warehouse record 1197: noise_param scale=0.0980 octaves=4 persistence=0.0
// data warehouse record 1198: noise_param scale=0.0990 octaves=5 persistence=0.1
// data warehouse record 1199: noise_param scale=0.1000 octaves=6 persistence=0.2
// data warehouse record 1200: noise_param scale=0.0010 octaves=1 persistence=0.3
// data warehouse record 1201: noise_param scale=0.0020 octaves=2 persistence=0.4
// data warehouse record 1202: noise_param scale=0.0030 octaves=3 persistence=0.5
// data warehouse record 1203: noise_param scale=0.0040 octaves=4 persistence=0.6
// data warehouse record 1204: noise_param scale=0.0050 octaves=5 persistence=0.7
// data warehouse record 1205: noise_param scale=0.0060 octaves=6 persistence=0.8
// data warehouse record 1206: noise_param scale=0.0070 octaves=1 persistence=0.0
// data warehouse record 1207: noise_param scale=0.0080 octaves=2 persistence=0.1
// data warehouse record 1208: noise_param scale=0.0090 octaves=3 persistence=0.2
// data warehouse record 1209: noise_param scale=0.0100 octaves=4 persistence=0.3
// data warehouse record 1210: noise_param scale=0.0110 octaves=5 persistence=0.4
// data warehouse record 1211: noise_param scale=0.0120 octaves=6 persistence=0.5
// data warehouse record 1212: noise_param scale=0.0130 octaves=1 persistence=0.6
// data warehouse record 1213: noise_param scale=0.0140 octaves=2 persistence=0.7
// data warehouse record 1214: noise_param scale=0.0150 octaves=3 persistence=0.8
// data warehouse record 1215: noise_param scale=0.0160 octaves=4 persistence=0.0
// data warehouse record 1216: noise_param scale=0.0170 octaves=5 persistence=0.1
// data warehouse record 1217: noise_param scale=0.0180 octaves=6 persistence=0.2
// data warehouse record 1218: noise_param scale=0.0190 octaves=1 persistence=0.3
// data warehouse record 1219: noise_param scale=0.0200 octaves=2 persistence=0.4
// data warehouse record 1220: noise_param scale=0.0210 octaves=3 persistence=0.5
// data warehouse record 1221: noise_param scale=0.0220 octaves=4 persistence=0.6
// data warehouse record 1222: noise_param scale=0.0230 octaves=5 persistence=0.7
// data warehouse record 1223: noise_param scale=0.0240 octaves=6 persistence=0.8
// data warehouse record 1224: noise_param scale=0.0250 octaves=1 persistence=0.0
// data warehouse record 1225: noise_param scale=0.0260 octaves=2 persistence=0.1
// data warehouse record 1226: noise_param scale=0.0270 octaves=3 persistence=0.2
// data warehouse record 1227: noise_param scale=0.0280 octaves=4 persistence=0.3
// data warehouse record 1228: noise_param scale=0.0290 octaves=5 persistence=0.4
// data warehouse record 1229: noise_param scale=0.0300 octaves=6 persistence=0.5
// data warehouse record 1230: noise_param scale=0.0310 octaves=1 persistence=0.6
// data warehouse record 1231: noise_param scale=0.0320 octaves=2 persistence=0.7
// data warehouse record 1232: noise_param scale=0.0330 octaves=3 persistence=0.8
// data warehouse record 1233: noise_param scale=0.0340 octaves=4 persistence=0.0
// data warehouse record 1234: noise_param scale=0.0350 octaves=5 persistence=0.1
// data warehouse record 1235: noise_param scale=0.0360 octaves=6 persistence=0.2
// data warehouse record 1236: noise_param scale=0.0370 octaves=1 persistence=0.3
// data warehouse record 1237: noise_param scale=0.0380 octaves=2 persistence=0.4
// data warehouse record 1238: noise_param scale=0.0390 octaves=3 persistence=0.5
// data warehouse record 1239: noise_param scale=0.0400 octaves=4 persistence=0.6
// data warehouse record 1240: noise_param scale=0.0410 octaves=5 persistence=0.7
// data warehouse record 1241: noise_param scale=0.0420 octaves=6 persistence=0.8
// data warehouse record 1242: noise_param scale=0.0430 octaves=1 persistence=0.0
// data warehouse record 1243: noise_param scale=0.0440 octaves=2 persistence=0.1
// data warehouse record 1244: noise_param scale=0.0450 octaves=3 persistence=0.2
// data warehouse record 1245: noise_param scale=0.0460 octaves=4 persistence=0.3
// data warehouse record 1246: noise_param scale=0.0470 octaves=5 persistence=0.4
// data warehouse record 1247: noise_param scale=0.0480 octaves=6 persistence=0.5
// data warehouse record 1248: noise_param scale=0.0490 octaves=1 persistence=0.6
// data warehouse record 1249: noise_param scale=0.0500 octaves=2 persistence=0.7
// data warehouse record 1250: noise_param scale=0.0510 octaves=3 persistence=0.8
// data warehouse record 1251: noise_param scale=0.0520 octaves=4 persistence=0.0
// data warehouse record 1252: noise_param scale=0.0530 octaves=5 persistence=0.1
// data warehouse record 1253: noise_param scale=0.0540 octaves=6 persistence=0.2
// data warehouse record 1254: noise_param scale=0.0550 octaves=1 persistence=0.3
// data warehouse record 1255: noise_param scale=0.0560 octaves=2 persistence=0.4
// data warehouse record 1256: noise_param scale=0.0570 octaves=3 persistence=0.5
// data warehouse record 1257: noise_param scale=0.0580 octaves=4 persistence=0.6
// data warehouse record 1258: noise_param scale=0.0590 octaves=5 persistence=0.7
// data warehouse record 1259: noise_param scale=0.0600 octaves=6 persistence=0.8
// data warehouse record 1260: noise_param scale=0.0610 octaves=1 persistence=0.0
// data warehouse record 1261: noise_param scale=0.0620 octaves=2 persistence=0.1
// data warehouse record 1262: noise_param scale=0.0630 octaves=3 persistence=0.2
// data warehouse record 1263: noise_param scale=0.0640 octaves=4 persistence=0.3
// data warehouse record 1264: noise_param scale=0.0650 octaves=5 persistence=0.4
// data warehouse record 1265: noise_param scale=0.0660 octaves=6 persistence=0.5
// data warehouse record 1266: noise_param scale=0.0670 octaves=1 persistence=0.6
// data warehouse record 1267: noise_param scale=0.0680 octaves=2 persistence=0.7
// data warehouse record 1268: noise_param scale=0.0690 octaves=3 persistence=0.8
// data warehouse record 1269: noise_param scale=0.0700 octaves=4 persistence=0.0
// data warehouse record 1270: noise_param scale=0.0710 octaves=5 persistence=0.1
// data warehouse record 1271: noise_param scale=0.0720 octaves=6 persistence=0.2
// data warehouse record 1272: noise_param scale=0.0730 octaves=1 persistence=0.3
// data warehouse record 1273: noise_param scale=0.0740 octaves=2 persistence=0.4
// data warehouse record 1274: noise_param scale=0.0750 octaves=3 persistence=0.5
// data warehouse record 1275: noise_param scale=0.0760 octaves=4 persistence=0.6
// data warehouse record 1276: noise_param scale=0.0770 octaves=5 persistence=0.7
// data warehouse record 1277: noise_param scale=0.0780 octaves=6 persistence=0.8
// data warehouse record 1278: noise_param scale=0.0790 octaves=1 persistence=0.0
// data warehouse record 1279: noise_param scale=0.0800 octaves=2 persistence=0.1
// data warehouse record 1280: noise_param scale=0.0810 octaves=3 persistence=0.2
// data warehouse record 1281: noise_param scale=0.0820 octaves=4 persistence=0.3
// data warehouse record 1282: noise_param scale=0.0830 octaves=5 persistence=0.4
// data warehouse record 1283: noise_param scale=0.0840 octaves=6 persistence=0.5
// data warehouse record 1284: noise_param scale=0.0850 octaves=1 persistence=0.6
// data warehouse record 1285: noise_param scale=0.0860 octaves=2 persistence=0.7
// data warehouse record 1286: noise_param scale=0.0870 octaves=3 persistence=0.8
// data warehouse record 1287: noise_param scale=0.0880 octaves=4 persistence=0.0
// data warehouse record 1288: noise_param scale=0.0890 octaves=5 persistence=0.1
// data warehouse record 1289: noise_param scale=0.0900 octaves=6 persistence=0.2
// data warehouse record 1290: noise_param scale=0.0910 octaves=1 persistence=0.3
// data warehouse record 1291: noise_param scale=0.0920 octaves=2 persistence=0.4
// data warehouse record 1292: noise_param scale=0.0930 octaves=3 persistence=0.5
// data warehouse record 1293: noise_param scale=0.0940 octaves=4 persistence=0.6
// data warehouse record 1294: noise_param scale=0.0950 octaves=5 persistence=0.7
// data warehouse record 1295: noise_param scale=0.0960 octaves=6 persistence=0.8
// data warehouse record 1296: noise_param scale=0.0970 octaves=1 persistence=0.0
// data warehouse record 1297: noise_param scale=0.0980 octaves=2 persistence=0.1
// data warehouse record 1298: noise_param scale=0.0990 octaves=3 persistence=0.2
// data warehouse record 1299: noise_param scale=0.1000 octaves=4 persistence=0.3
// data warehouse record 1300: noise_param scale=0.0010 octaves=5 persistence=0.4
// data warehouse record 1301: noise_param scale=0.0020 octaves=6 persistence=0.5
// data warehouse record 1302: noise_param scale=0.0030 octaves=1 persistence=0.6
// data warehouse record 1303: noise_param scale=0.0040 octaves=2 persistence=0.7
// data warehouse record 1304: noise_param scale=0.0050 octaves=3 persistence=0.8
// data warehouse record 1305: noise_param scale=0.0060 octaves=4 persistence=0.0
// data warehouse record 1306: noise_param scale=0.0070 octaves=5 persistence=0.1
// data warehouse record 1307: noise_param scale=0.0080 octaves=6 persistence=0.2
// data warehouse record 1308: noise_param scale=0.0090 octaves=1 persistence=0.3
// data warehouse record 1309: noise_param scale=0.0100 octaves=2 persistence=0.4
// data warehouse record 1310: noise_param scale=0.0110 octaves=3 persistence=0.5
// data warehouse record 1311: noise_param scale=0.0120 octaves=4 persistence=0.6
// data warehouse record 1312: noise_param scale=0.0130 octaves=5 persistence=0.7
// data warehouse record 1313: noise_param scale=0.0140 octaves=6 persistence=0.8
// data warehouse record 1314: noise_param scale=0.0150 octaves=1 persistence=0.0
// data warehouse record 1315: noise_param scale=0.0160 octaves=2 persistence=0.1
// data warehouse record 1316: noise_param scale=0.0170 octaves=3 persistence=0.2
// data warehouse record 1317: noise_param scale=0.0180 octaves=4 persistence=0.3
// data warehouse record 1318: noise_param scale=0.0190 octaves=5 persistence=0.4
// data warehouse record 1319: noise_param scale=0.0200 octaves=6 persistence=0.5
// data warehouse record 1320: noise_param scale=0.0210 octaves=1 persistence=0.6
// data warehouse record 1321: noise_param scale=0.0220 octaves=2 persistence=0.7
// data warehouse record 1322: noise_param scale=0.0230 octaves=3 persistence=0.8
// data warehouse record 1323: noise_param scale=0.0240 octaves=4 persistence=0.0
// data warehouse record 1324: noise_param scale=0.0250 octaves=5 persistence=0.1
// data warehouse record 1325: noise_param scale=0.0260 octaves=6 persistence=0.2
// data warehouse record 1326: noise_param scale=0.0270 octaves=1 persistence=0.3
// data warehouse record 1327: noise_param scale=0.0280 octaves=2 persistence=0.4
// data warehouse record 1328: noise_param scale=0.0290 octaves=3 persistence=0.5
// data warehouse record 1329: noise_param scale=0.0300 octaves=4 persistence=0.6
// data warehouse record 1330: noise_param scale=0.0310 octaves=5 persistence=0.7
// data warehouse record 1331: noise_param scale=0.0320 octaves=6 persistence=0.8
// data warehouse record 1332: noise_param scale=0.0330 octaves=1 persistence=0.0
// data warehouse record 1333: noise_param scale=0.0340 octaves=2 persistence=0.1
// data warehouse record 1334: noise_param scale=0.0350 octaves=3 persistence=0.2
// data warehouse record 1335: noise_param scale=0.0360 octaves=4 persistence=0.3
// data warehouse record 1336: noise_param scale=0.0370 octaves=5 persistence=0.4
// data warehouse record 1337: noise_param scale=0.0380 octaves=6 persistence=0.5
// data warehouse record 1338: noise_param scale=0.0390 octaves=1 persistence=0.6
// data warehouse record 1339: noise_param scale=0.0400 octaves=2 persistence=0.7
// data warehouse record 1340: noise_param scale=0.0410 octaves=3 persistence=0.8
// data warehouse record 1341: noise_param scale=0.0420 octaves=4 persistence=0.0
// data warehouse record 1342: noise_param scale=0.0430 octaves=5 persistence=0.1
// data warehouse record 1343: noise_param scale=0.0440 octaves=6 persistence=0.2
// data warehouse record 1344: noise_param scale=0.0450 octaves=1 persistence=0.3
// data warehouse record 1345: noise_param scale=0.0460 octaves=2 persistence=0.4
// data warehouse record 1346: noise_param scale=0.0470 octaves=3 persistence=0.5
// data warehouse record 1347: noise_param scale=0.0480 octaves=4 persistence=0.6
// data warehouse record 1348: noise_param scale=0.0490 octaves=5 persistence=0.7
// data warehouse record 1349: noise_param scale=0.0500 octaves=6 persistence=0.8
// data warehouse record 1350: noise_param scale=0.0510 octaves=1 persistence=0.0
// data warehouse record 1351: noise_param scale=0.0520 octaves=2 persistence=0.1
// data warehouse record 1352: noise_param scale=0.0530 octaves=3 persistence=0.2
// data warehouse record 1353: noise_param scale=0.0540 octaves=4 persistence=0.3
// data warehouse record 1354: noise_param scale=0.0550 octaves=5 persistence=0.4
// data warehouse record 1355: noise_param scale=0.0560 octaves=6 persistence=0.5
// data warehouse record 1356: noise_param scale=0.0570 octaves=1 persistence=0.6
// data warehouse record 1357: noise_param scale=0.0580 octaves=2 persistence=0.7
// data warehouse record 1358: noise_param scale=0.0590 octaves=3 persistence=0.8
// data warehouse record 1359: noise_param scale=0.0600 octaves=4 persistence=0.0
// data warehouse record 1360: noise_param scale=0.0610 octaves=5 persistence=0.1
// data warehouse record 1361: noise_param scale=0.0620 octaves=6 persistence=0.2
// data warehouse record 1362: noise_param scale=0.0630 octaves=1 persistence=0.3
// data warehouse record 1363: noise_param scale=0.0640 octaves=2 persistence=0.4
// data warehouse record 1364: noise_param scale=0.0650 octaves=3 persistence=0.5
// data warehouse record 1365: noise_param scale=0.0660 octaves=4 persistence=0.6
// data warehouse record 1366: noise_param scale=0.0670 octaves=5 persistence=0.7
// data warehouse record 1367: noise_param scale=0.0680 octaves=6 persistence=0.8
// data warehouse record 1368: noise_param scale=0.0690 octaves=1 persistence=0.0
// data warehouse record 1369: noise_param scale=0.0700 octaves=2 persistence=0.1
// data warehouse record 1370: noise_param scale=0.0710 octaves=3 persistence=0.2
// data warehouse record 1371: noise_param scale=0.0720 octaves=4 persistence=0.3
// data warehouse record 1372: noise_param scale=0.0730 octaves=5 persistence=0.4
// data warehouse record 1373: noise_param scale=0.0740 octaves=6 persistence=0.5
// data warehouse record 1374: noise_param scale=0.0750 octaves=1 persistence=0.6
// data warehouse record 1375: noise_param scale=0.0760 octaves=2 persistence=0.7
// data warehouse record 1376: noise_param scale=0.0770 octaves=3 persistence=0.8
// data warehouse record 1377: noise_param scale=0.0780 octaves=4 persistence=0.0
// data warehouse record 1378: noise_param scale=0.0790 octaves=5 persistence=0.1
// data warehouse record 1379: noise_param scale=0.0800 octaves=6 persistence=0.2
// data warehouse record 1380: noise_param scale=0.0810 octaves=1 persistence=0.3
// data warehouse record 1381: noise_param scale=0.0820 octaves=2 persistence=0.4
// data warehouse record 1382: noise_param scale=0.0830 octaves=3 persistence=0.5
// data warehouse record 1383: noise_param scale=0.0840 octaves=4 persistence=0.6
// data warehouse record 1384: noise_param scale=0.0850 octaves=5 persistence=0.7
// data warehouse record 1385: noise_param scale=0.0860 octaves=6 persistence=0.8
// data warehouse record 1386: noise_param scale=0.0870 octaves=1 persistence=0.0
// data warehouse record 1387: noise_param scale=0.0880 octaves=2 persistence=0.1
// data warehouse record 1388: noise_param scale=0.0890 octaves=3 persistence=0.2
// data warehouse record 1389: noise_param scale=0.0900 octaves=4 persistence=0.3
// data warehouse record 1390: noise_param scale=0.0910 octaves=5 persistence=0.4
// data warehouse record 1391: noise_param scale=0.0920 octaves=6 persistence=0.5
// data warehouse record 1392: noise_param scale=0.0930 octaves=1 persistence=0.6
// data warehouse record 1393: noise_param scale=0.0940 octaves=2 persistence=0.7
// data warehouse record 1394: noise_param scale=0.0950 octaves=3 persistence=0.8
// data warehouse record 1395: noise_param scale=0.0960 octaves=4 persistence=0.0
// data warehouse record 1396: noise_param scale=0.0970 octaves=5 persistence=0.1
// data warehouse record 1397: noise_param scale=0.0980 octaves=6 persistence=0.2
// data warehouse record 1398: noise_param scale=0.0990 octaves=1 persistence=0.3
// data warehouse record 1399: noise_param scale=0.1000 octaves=2 persistence=0.4
// data warehouse record 1400: noise_param scale=0.0010 octaves=3 persistence=0.5
// data warehouse record 1401: noise_param scale=0.0020 octaves=4 persistence=0.6
// data warehouse record 1402: noise_param scale=0.0030 octaves=5 persistence=0.7
// data warehouse record 1403: noise_param scale=0.0040 octaves=6 persistence=0.8
// data warehouse record 1404: noise_param scale=0.0050 octaves=1 persistence=0.0
// data warehouse record 1405: noise_param scale=0.0060 octaves=2 persistence=0.1
// data warehouse record 1406: noise_param scale=0.0070 octaves=3 persistence=0.2
// data warehouse record 1407: noise_param scale=0.0080 octaves=4 persistence=0.3
// data warehouse record 1408: noise_param scale=0.0090 octaves=5 persistence=0.4
// data warehouse record 1409: noise_param scale=0.0100 octaves=6 persistence=0.5
// data warehouse record 1410: noise_param scale=0.0110 octaves=1 persistence=0.6
// data warehouse record 1411: noise_param scale=0.0120 octaves=2 persistence=0.7
// data warehouse record 1412: noise_param scale=0.0130 octaves=3 persistence=0.8
// data warehouse record 1413: noise_param scale=0.0140 octaves=4 persistence=0.0
// data warehouse record 1414: noise_param scale=0.0150 octaves=5 persistence=0.1
// data warehouse record 1415: noise_param scale=0.0160 octaves=6 persistence=0.2
// data warehouse record 1416: noise_param scale=0.0170 octaves=1 persistence=0.3
// data warehouse record 1417: noise_param scale=0.0180 octaves=2 persistence=0.4
// data warehouse record 1418: noise_param scale=0.0190 octaves=3 persistence=0.5
// data warehouse record 1419: noise_param scale=0.0200 octaves=4 persistence=0.6
// data warehouse record 1420: noise_param scale=0.0210 octaves=5 persistence=0.7
// data warehouse record 1421: noise_param scale=0.0220 octaves=6 persistence=0.8
// data warehouse record 1422: noise_param scale=0.0230 octaves=1 persistence=0.0
// data warehouse record 1423: noise_param scale=0.0240 octaves=2 persistence=0.1
// data warehouse record 1424: noise_param scale=0.0250 octaves=3 persistence=0.2
// data warehouse record 1425: noise_param scale=0.0260 octaves=4 persistence=0.3
// data warehouse record 1426: noise_param scale=0.0270 octaves=5 persistence=0.4
// data warehouse record 1427: noise_param scale=0.0280 octaves=6 persistence=0.5
// data warehouse record 1428: noise_param scale=0.0290 octaves=1 persistence=0.6
// data warehouse record 1429: noise_param scale=0.0300 octaves=2 persistence=0.7
// data warehouse record 1430: noise_param scale=0.0310 octaves=3 persistence=0.8
// data warehouse record 1431: noise_param scale=0.0320 octaves=4 persistence=0.0
// data warehouse record 1432: noise_param scale=0.0330 octaves=5 persistence=0.1
// data warehouse record 1433: noise_param scale=0.0340 octaves=6 persistence=0.2
// data warehouse record 1434: noise_param scale=0.0350 octaves=1 persistence=0.3
// data warehouse record 1435: noise_param scale=0.0360 octaves=2 persistence=0.4
// data warehouse record 1436: noise_param scale=0.0370 octaves=3 persistence=0.5
// data warehouse record 1437: noise_param scale=0.0380 octaves=4 persistence=0.6
// data warehouse record 1438: noise_param scale=0.0390 octaves=5 persistence=0.7
// data warehouse record 1439: noise_param scale=0.0400 octaves=6 persistence=0.8
// data warehouse record 1440: noise_param scale=0.0410 octaves=1 persistence=0.0
// data warehouse record 1441: noise_param scale=0.0420 octaves=2 persistence=0.1
// data warehouse record 1442: noise_param scale=0.0430 octaves=3 persistence=0.2
// data warehouse record 1443: noise_param scale=0.0440 octaves=4 persistence=0.3
// data warehouse record 1444: noise_param scale=0.0450 octaves=5 persistence=0.4
// data warehouse record 1445: noise_param scale=0.0460 octaves=6 persistence=0.5
// data warehouse record 1446: noise_param scale=0.0470 octaves=1 persistence=0.6
// data warehouse record 1447: noise_param scale=0.0480 octaves=2 persistence=0.7
// data warehouse record 1448: noise_param scale=0.0490 octaves=3 persistence=0.8
// data warehouse record 1449: noise_param scale=0.0500 octaves=4 persistence=0.0
// data warehouse record 1450: noise_param scale=0.0510 octaves=5 persistence=0.1
// data warehouse record 1451: noise_param scale=0.0520 octaves=6 persistence=0.2
// data warehouse record 1452: noise_param scale=0.0530 octaves=1 persistence=0.3
// data warehouse record 1453: noise_param scale=0.0540 octaves=2 persistence=0.4
// data warehouse record 1454: noise_param scale=0.0550 octaves=3 persistence=0.5
// data warehouse record 1455: noise_param scale=0.0560 octaves=4 persistence=0.6
// data warehouse record 1456: noise_param scale=0.0570 octaves=5 persistence=0.7
// data warehouse record 1457: noise_param scale=0.0580 octaves=6 persistence=0.8
// data warehouse record 1458: noise_param scale=0.0590 octaves=1 persistence=0.0
// data warehouse record 1459: noise_param scale=0.0600 octaves=2 persistence=0.1
// data warehouse record 1460: noise_param scale=0.0610 octaves=3 persistence=0.2
// data warehouse record 1461: noise_param scale=0.0620 octaves=4 persistence=0.3
// data warehouse record 1462: noise_param scale=0.0630 octaves=5 persistence=0.4
// data warehouse record 1463: noise_param scale=0.0640 octaves=6 persistence=0.5
// data warehouse record 1464: noise_param scale=0.0650 octaves=1 persistence=0.6
// data warehouse record 1465: noise_param scale=0.0660 octaves=2 persistence=0.7
// data warehouse record 1466: noise_param scale=0.0670 octaves=3 persistence=0.8
// data warehouse record 1467: noise_param scale=0.0680 octaves=4 persistence=0.0
// data warehouse record 1468: noise_param scale=0.0690 octaves=5 persistence=0.1
// data warehouse record 1469: noise_param scale=0.0700 octaves=6 persistence=0.2
// data warehouse record 1470: noise_param scale=0.0710 octaves=1 persistence=0.3
// data warehouse record 1471: noise_param scale=0.0720 octaves=2 persistence=0.4
// data warehouse record 1472: noise_param scale=0.0730 octaves=3 persistence=0.5
// data warehouse record 1473: noise_param scale=0.0740 octaves=4 persistence=0.6
// data warehouse record 1474: noise_param scale=0.0750 octaves=5 persistence=0.7
// data warehouse record 1475: noise_param scale=0.0760 octaves=6 persistence=0.8
// data warehouse record 1476: noise_param scale=0.0770 octaves=1 persistence=0.0
// data warehouse record 1477: noise_param scale=0.0780 octaves=2 persistence=0.1
// data warehouse record 1478: noise_param scale=0.0790 octaves=3 persistence=0.2
// data warehouse record 1479: noise_param scale=0.0800 octaves=4 persistence=0.3
// data warehouse record 1480: noise_param scale=0.0810 octaves=5 persistence=0.4
// data warehouse record 1481: noise_param scale=0.0820 octaves=6 persistence=0.5
// data warehouse record 1482: noise_param scale=0.0830 octaves=1 persistence=0.6
// data warehouse record 1483: noise_param scale=0.0840 octaves=2 persistence=0.7
// data warehouse record 1484: noise_param scale=0.0850 octaves=3 persistence=0.8
// data warehouse record 1485: noise_param scale=0.0860 octaves=4 persistence=0.0
// data warehouse record 1486: noise_param scale=0.0870 octaves=5 persistence=0.1
// data warehouse record 1487: noise_param scale=0.0880 octaves=6 persistence=0.2
// data warehouse record 1488: noise_param scale=0.0890 octaves=1 persistence=0.3
// data warehouse record 1489: noise_param scale=0.0900 octaves=2 persistence=0.4
// data warehouse record 1490: noise_param scale=0.0910 octaves=3 persistence=0.5
// data warehouse record 1491: noise_param scale=0.0920 octaves=4 persistence=0.6
// data warehouse record 1492: noise_param scale=0.0930 octaves=5 persistence=0.7
// data warehouse record 1493: noise_param scale=0.0940 octaves=6 persistence=0.8
// data warehouse record 1494: noise_param scale=0.0950 octaves=1 persistence=0.0
// data warehouse record 1495: noise_param scale=0.0960 octaves=2 persistence=0.1
// data warehouse record 1496: noise_param scale=0.0970 octaves=3 persistence=0.2
// data warehouse record 1497: noise_param scale=0.0980 octaves=4 persistence=0.3
// data warehouse record 1498: noise_param scale=0.0990 octaves=5 persistence=0.4
// data warehouse record 1499: noise_param scale=0.1000 octaves=6 persistence=0.5
