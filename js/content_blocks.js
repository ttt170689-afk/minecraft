/**
 * Auto-generated expanded block catalog for BrowserCraft
 * Hundreds of Minecraft-like blocks + procedural textures
 */
(function(){
if (typeof BLOCKS === "undefined") return;
const EXTRA_BLOCKS = {
  oak_log: { id: 60, name: "Дуб брёвна", solid: true, transparent: false, hardness: 2.0, interact: false, light: false },
  birch_log: { id: 61, name: "Берёза", solid: true, transparent: false, hardness: 2.0, interact: false, light: false },
  spruce_log: { id: 62, name: "Ель", solid: true, transparent: false, hardness: 2.0, interact: false, light: false },
  jungle_log: { id: 63, name: "Тропическое дерево", solid: true, transparent: false, hardness: 2.0, interact: false, light: false },
  acacia_log: { id: 64, name: "Акация", solid: true, transparent: false, hardness: 2.0, interact: false, light: false },
  dark_oak_log: { id: 65, name: "Тёмный дуб", solid: true, transparent: false, hardness: 2.0, interact: false, light: false },
  oak_planks: { id: 66, name: "Дубовые доски", solid: true, transparent: false, hardness: 2.0, interact: false, light: false },
  birch_planks: { id: 67, name: "Берёзовые доски", solid: true, transparent: false, hardness: 2.0, interact: false, light: false },
  spruce_planks: { id: 68, name: "Еловые доски", solid: true, transparent: false, hardness: 2.0, interact: false, light: false },
  jungle_planks: { id: 69, name: "Тропические доски", solid: true, transparent: false, hardness: 2.0, interact: false, light: false },
  stone_bricks: { id: 70, name: "Каменные кирпичи", solid: true, transparent: false, hardness: 1.5, interact: false, light: false },
  mossy_stone_bricks: { id: 71, name: "Замшелые кирпичи", solid: true, transparent: false, hardness: 1.5, interact: false, light: false },
  cracked_stone_bricks: { id: 72, name: "Потрескавшиеся кирпичи", solid: true, transparent: false, hardness: 1.5, interact: false, light: false },
  chiseled_stone: { id: 73, name: "Резной камень", solid: true, transparent: false, hardness: 1.5, interact: false, light: false },
  smooth_stone: { id: 74, name: "Гладкий камень", solid: true, transparent: false, hardness: 1.5, interact: false, light: false },
  andesite: { id: 75, name: "Андезит", solid: true, transparent: false, hardness: 1.5, interact: false, light: false },
  diorite: { id: 76, name: "Диорит", solid: true, transparent: false, hardness: 1.5, interact: false, light: false },
  granite: { id: 77, name: "Гранит", solid: true, transparent: false, hardness: 1.5, interact: false, light: false },
  polished_andesite: { id: 78, name: "Полированный андезит", solid: true, transparent: false, hardness: 1.5, interact: false, light: false },
  polished_diorite: { id: 79, name: "Полированный диорит", solid: true, transparent: false, hardness: 1.5, interact: false, light: false },
  polished_granite: { id: 80, name: "Полированный гранит", solid: true, transparent: false, hardness: 1.5, interact: false, light: false },
  deepslate: { id: 81, name: "Глубинный сланец", solid: true, transparent: false, hardness: 3.0, interact: false, light: false },
  cobbled_deepslate: { id: 82, name: "Булыжный сланец", solid: true, transparent: false, hardness: 3.0, interact: false, light: false },
  deepslate_bricks: { id: 83, name: "Кирпичи сланца", solid: true, transparent: false, hardness: 3.0, interact: false, light: false },
  tuff: { id: 84, name: "Туф", solid: true, transparent: false, hardness: 1.5, interact: false, light: false },
  calcite: { id: 85, name: "Кальцит", solid: true, transparent: false, hardness: 0.75, interact: false, light: false },
  dripstone: { id: 86, name: "Натёчный камень", solid: true, transparent: false, hardness: 1.5, interact: false, light: false },
  amethyst_block: { id: 87, name: "Блок аметиста", solid: true, transparent: false, hardness: 1.5, interact: false, light: false },
  copper_block: { id: 88, name: "Медный блок", solid: true, transparent: false, hardness: 3.0, interact: false, light: false },
  cut_copper: { id: 89, name: "Резаная медь", solid: true, transparent: false, hardness: 3.0, interact: false, light: false },
  exposed_copper: { id: 90, name: "Потемневшая медь", solid: true, transparent: false, hardness: 3.0, interact: false, light: false },
  oxidized_copper: { id: 91, name: "Окисленная медь", solid: true, transparent: false, hardness: 3.0, interact: false, light: false },
  iron_block: { id: 92, name: "Железный блок", solid: true, transparent: false, hardness: 5.0, interact: false, light: false },
  gold_block: { id: 93, name: "Золотой блок", solid: true, transparent: false, hardness: 3.0, interact: false, light: false },
  diamond_block: { id: 94, name: "Алмазный блок", solid: true, transparent: false, hardness: 5.0, interact: false, light: false },
  emerald_block: { id: 95, name: "Изумрудный блок", solid: true, transparent: false, hardness: 5.0, interact: false, light: false },
  netherite_block: { id: 96, name: "Незеритовый блок", solid: true, transparent: false, hardness: 50.0, interact: false, light: false },
  lapis_block: { id: 97, name: "Лазуритовый блок", solid: true, transparent: false, hardness: 3.0, interact: false, light: false },
  redstone_block: { id: 98, name: "Редстоун-блок", solid: true, transparent: false, hardness: 5.0, interact: false, light: false },
  coal_block: { id: 99, name: "Угольный блок", solid: true, transparent: false, hardness: 5.0, interact: false, light: false },
  quartz_block: { id: 100, name: "Кварцевый блок", solid: true, transparent: false, hardness: 0.8, interact: false, light: false },
  smooth_quartz: { id: 101, name: "Гладкий кварц", solid: true, transparent: false, hardness: 0.8, interact: false, light: false },
  prismarine: { id: 102, name: "Призмарин", solid: true, transparent: false, hardness: 1.5, interact: false, light: false },
  prismarine_bricks: { id: 103, name: "Призмариновые кирпичи", solid: true, transparent: false, hardness: 1.5, interact: false, light: false },
  dark_prismarine: { id: 104, name: "Тёмный призмарин", solid: true, transparent: false, hardness: 1.5, interact: false, light: false },
  sea_lantern: { id: 105, name: "Морской фонарь", solid: true, transparent: false, hardness: 0.3, interact: false, light: true },
  sponge: { id: 106, name: "Губка", solid: true, transparent: false, hardness: 0.6, interact: false, light: false },
  wet_sponge: { id: 107, name: "Мокрая губка", solid: true, transparent: false, hardness: 0.6, interact: false, light: false },
  sandstone: { id: 108, name: "Песчаник", solid: true, transparent: false, hardness: 0.8, interact: false, light: false },
  smooth_sandstone: { id: 109, name: "Гладкий песчаник", solid: true, transparent: false, hardness: 0.8, interact: false, light: false },
  red_sandstone: { id: 110, name: "Красный песчаник", solid: true, transparent: false, hardness: 0.8, interact: false, light: false },
  red_sand: { id: 111, name: "Красный песок", solid: true, transparent: false, hardness: 0.5, interact: false, light: false },
  soul_soil: { id: 112, name: "Почва душ", solid: true, transparent: false, hardness: 0.5, interact: false, light: false },
  basalt: { id: 113, name: "Базальт", solid: true, transparent: false, hardness: 1.25, interact: false, light: false },
  blackstone: { id: 114, name: "Чернокамень", solid: true, transparent: false, hardness: 1.5, interact: false, light: false },
  gilded_blackstone: { id: 115, name: "Золочёный чернокамень", solid: true, transparent: false, hardness: 1.5, interact: false, light: false },
  nether_bricks: { id: 116, name: "Незер-кирпичи", solid: true, transparent: false, hardness: 2.0, interact: false, light: false },
  red_nether_bricks: { id: 117, name: "Красные незер-кирпичи", solid: true, transparent: false, hardness: 2.0, interact: false, light: false },
  warped_nylium: { id: 118, name: "Искажённый нилий", solid: true, transparent: false, hardness: 0.4, interact: false, light: false },
  crimson_nylium: { id: 119, name: "Багровый нилий", solid: true, transparent: false, hardness: 0.4, interact: false, light: false },
  warped_planks: { id: 120, name: "Искажённые доски", solid: true, transparent: false, hardness: 2.0, interact: false, light: false },
  crimson_planks: { id: 121, name: "Багровые доски", solid: true, transparent: false, hardness: 2.0, interact: false, light: false },
  shroomlight: { id: 122, name: "Грибосвет", solid: true, transparent: false, hardness: 1.0, interact: false, light: true },
  crying_obsidian: { id: 123, name: "Плачущий обсидиан", solid: true, transparent: false, hardness: 50.0, interact: false, light: false },
  respawn_anchor: { id: 124, name: "Якорь возрождения", solid: true, transparent: false, hardness: 50.0, interact: false, light: false },
  lodestone: { id: 125, name: "Магнетит", solid: true, transparent: false, hardness: 3.5, interact: false, light: false },
  ancient_debris: { id: 126, name: "Древние обломки", solid: true, transparent: false, hardness: 30.0, interact: false, light: false },
  raw_iron_block: { id: 127, name: "Блок рудного железа", solid: true, transparent: false, hardness: 5.0, interact: false, light: false },
  raw_gold_block: { id: 128, name: "Блок рудного золота", solid: true, transparent: false, hardness: 5.0, interact: false, light: false },
  raw_copper_block: { id: 129, name: "Блок рудной меди", solid: true, transparent: false, hardness: 5.0, interact: false, light: false },
  bone_block: { id: 130, name: "Костный блок", solid: true, transparent: false, hardness: 2.0, interact: false, light: false },
  slime_block: { id: 131, name: "Блок слизи", solid: true, transparent: false, hardness: 0, interact: false, light: false },
  honey_block: { id: 132, name: "Медовый блок", solid: true, transparent: false, hardness: 0, interact: false, light: false },
  honeycomb_block: { id: 133, name: "Блок пчелиных сот", solid: true, transparent: false, hardness: 0.6, interact: false, light: false },
  dried_kelp_block: { id: 134, name: "Сушёная ламинария", solid: true, transparent: false, hardness: 0.5, interact: false, light: false },
  target: { id: 135, name: "Мишень", solid: true, transparent: false, hardness: 0.5, interact: false, light: false },
  note_block: { id: 136, name: "Нотный блок", solid: true, transparent: false, hardness: 0.8, interact: false, light: false },
  jukebox: { id: 137, name: "Проигрыватель", solid: true, transparent: false, hardness: 2.0, interact: false, light: false },
  loom: { id: 138, name: "Ткацкий станок", solid: true, transparent: false, hardness: 2.5, interact: false, light: false },
  cartography_table: { id: 139, name: "Картографический стол", solid: true, transparent: false, hardness: 2.5, interact: false, light: false },
  fletching_table: { id: 140, name: "Стол лучника", solid: true, transparent: false, hardness: 2.5, interact: false, light: false },
  smithing_table: { id: 141, name: "Кузнечный стол", solid: true, transparent: false, hardness: 2.5, interact: false, light: false },
  grindstone: { id: 142, name: "Точило", solid: true, transparent: false, hardness: 2.0, interact: false, light: false },
  stonecutter: { id: 143, name: "Камнерез", solid: true, transparent: false, hardness: 3.5, interact: false, light: false },
  barrel: { id: 144, name: "Бочка", solid: true, transparent: false, hardness: 2.5, interact: true, light: false },
  smoker: { id: 145, name: "Коптильня", solid: true, transparent: false, hardness: 3.5, interact: true, light: false },
  blast_furnace: { id: 146, name: "Плавильная печь", solid: true, transparent: false, hardness: 3.5, interact: true, light: false },
  composter: { id: 147, name: "Компостер", solid: true, transparent: false, hardness: 0.6, interact: false, light: false },
  cauldron: { id: 148, name: "Котёл", solid: true, transparent: false, hardness: 2.0, interact: false, light: false },
  hopper: { id: 149, name: "Воронка", solid: true, transparent: false, hardness: 3.0, interact: false, light: false },
  dropper: { id: 150, name: "Выбрасыватель", solid: true, transparent: false, hardness: 3.5, interact: false, light: false },
  dispenser: { id: 151, name: "Раздатчик", solid: true, transparent: false, hardness: 3.5, interact: false, light: false },
  observer: { id: 152, name: "Наблюдатель", solid: true, transparent: false, hardness: 3.0, interact: false, light: false },
  piston: { id: 153, name: "Поршень", solid: true, transparent: false, hardness: 1.5, interact: false, light: false },
  sticky_piston: { id: 154, name: "Липкий поршень", solid: true, transparent: false, hardness: 1.5, interact: false, light: false },
  slime_block2: { id: 155, name: "Слизь-блок", solid: true, transparent: false, hardness: 0, interact: false, light: false },
  scaffolding: { id: 156, name: "Подмостки", solid: true, transparent: true, hardness: 0, interact: false, light: false },
  ladder_block: { id: 157, name: "Лестница-блок", solid: true, transparent: true, hardness: 0.4, interact: false, light: false },
  chain: { id: 158, name: "Цепь", solid: true, transparent: true, hardness: 5.0, interact: false, light: false },
  lantern: { id: 159, name: "Фонарь", solid: true, transparent: true, hardness: 3.5, interact: false, light: true },
  soul_lantern: { id: 160, name: "Фонарь душ", solid: true, transparent: true, hardness: 3.5, interact: false, light: true },
  campfire: { id: 161, name: "Костёр", solid: true, transparent: true, hardness: 2.0, interact: false, light: true },
  soul_campfire: { id: 162, name: "Костёр душ", solid: true, transparent: true, hardness: 2.0, interact: false, light: true },
  torch_block: { id: 163, name: "Факел-блок", solid: true, transparent: true, hardness: 0, interact: false, light: true },
  end_rod: { id: 164, name: "Стержень Края", solid: true, transparent: true, hardness: 0, interact: false, light: true },
  beacon: { id: 165, name: "Маяк", solid: true, transparent: true, hardness: 3.0, interact: false, light: true },
  conduit: { id: 166, name: "Проводник", solid: true, transparent: true, hardness: 3.0, interact: false, light: false },
  spawner: { id: 167, name: "Рассадник", solid: true, transparent: false, hardness: 5.0, interact: false, light: false },
  enchanting_table: { id: 168, name: "Стол зачарований", solid: true, transparent: false, hardness: 5.0, interact: true, light: false },
  anvil: { id: 169, name: "Наковальня", solid: true, transparent: false, hardness: 5.0, interact: true, light: false },
  chipped_anvil: { id: 170, name: "Повреждённая наковальня", solid: true, transparent: false, hardness: 5.0, interact: false, light: false },
  damaged_anvil: { id: 171, name: "Сломанная наковальня", solid: true, transparent: false, hardness: 5.0, interact: false, light: false },
  end_portal_frame: { id: 172, name: "Рамка портала Края", solid: true, transparent: false, hardness: Infinity, interact: false, light: false },
  dragon_egg: { id: 173, name: "Яйцо дракона", solid: true, transparent: false, hardness: 3.0, interact: false, light: false },
  bedrock_barrier: { id: 174, name: "Барьер", solid: true, transparent: false, hardness: Infinity, interact: false, light: false },
  white_wool: { id: 175, name: "Белый шерсть", solid: true, transparent: false, hardness: 0.8, interact: false, light: false },
  white_concrete: { id: 176, name: "Белый бетон", solid: true, transparent: false, hardness: 1.8, interact: false, light: false },
  white_terracotta: { id: 177, name: "Белый терракота", solid: true, transparent: false, hardness: 1.25, interact: false, light: false },
  white_stained_glass: { id: 178, name: "Белый стекло", solid: true, transparent: true, hardness: 0.3, interact: false, light: false },
  white_carpet: { id: 179, name: "Белый ковёр", solid: true, transparent: true, hardness: 0.1, interact: false, light: false },
  orange_wool: { id: 180, name: "Оранжевый шерсть", solid: true, transparent: false, hardness: 0.8, interact: false, light: false },
  orange_concrete: { id: 181, name: "Оранжевый бетон", solid: true, transparent: false, hardness: 1.8, interact: false, light: false },
  orange_terracotta: { id: 182, name: "Оранжевый терракота", solid: true, transparent: false, hardness: 1.25, interact: false, light: false },
  orange_stained_glass: { id: 183, name: "Оранжевый стекло", solid: true, transparent: true, hardness: 0.3, interact: false, light: false },
  orange_carpet: { id: 184, name: "Оранжевый ковёр", solid: true, transparent: true, hardness: 0.1, interact: false, light: false },
  magenta_wool: { id: 185, name: "Пурпурный шерсть", solid: true, transparent: false, hardness: 0.8, interact: false, light: false },
  magenta_concrete: { id: 186, name: "Пурпурный бетон", solid: true, transparent: false, hardness: 1.8, interact: false, light: false },
  magenta_terracotta: { id: 187, name: "Пурпурный терракота", solid: true, transparent: false, hardness: 1.25, interact: false, light: false },
  magenta_stained_glass: { id: 188, name: "Пурпурный стекло", solid: true, transparent: true, hardness: 0.3, interact: false, light: false },
  magenta_carpet: { id: 189, name: "Пурпурный ковёр", solid: true, transparent: true, hardness: 0.1, interact: false, light: false },
  light_blue_wool: { id: 190, name: "Голубой шерсть", solid: true, transparent: false, hardness: 0.8, interact: false, light: false },
  light_blue_concrete: { id: 191, name: "Голубой бетон", solid: true, transparent: false, hardness: 1.8, interact: false, light: false },
  light_blue_terracotta: { id: 192, name: "Голубой терракота", solid: true, transparent: false, hardness: 1.25, interact: false, light: false },
  light_blue_stained_glass: { id: 193, name: "Голубой стекло", solid: true, transparent: true, hardness: 0.3, interact: false, light: false },
  light_blue_carpet: { id: 194, name: "Голубой ковёр", solid: true, transparent: true, hardness: 0.1, interact: false, light: false },
  yellow_wool: { id: 195, name: "Жёлтый шерсть", solid: true, transparent: false, hardness: 0.8, interact: false, light: false },
  yellow_concrete: { id: 196, name: "Жёлтый бетон", solid: true, transparent: false, hardness: 1.8, interact: false, light: false },
  yellow_terracotta: { id: 197, name: "Жёлтый терракота", solid: true, transparent: false, hardness: 1.25, interact: false, light: false },
  yellow_stained_glass: { id: 198, name: "Жёлтый стекло", solid: true, transparent: true, hardness: 0.3, interact: false, light: false },
  yellow_carpet: { id: 199, name: "Жёлтый ковёр", solid: true, transparent: true, hardness: 0.1, interact: false, light: false },
  lime_wool: { id: 200, name: "Лаймовый шерсть", solid: true, transparent: false, hardness: 0.8, interact: false, light: false },
  lime_concrete: { id: 201, name: "Лаймовый бетон", solid: true, transparent: false, hardness: 1.8, interact: false, light: false },
  lime_terracotta: { id: 202, name: "Лаймовый терракота", solid: true, transparent: false, hardness: 1.25, interact: false, light: false },
  lime_stained_glass: { id: 203, name: "Лаймовый стекло", solid: true, transparent: true, hardness: 0.3, interact: false, light: false },
  lime_carpet: { id: 204, name: "Лаймовый ковёр", solid: true, transparent: true, hardness: 0.1, interact: false, light: false },
  pink_wool: { id: 205, name: "Розовый шерсть", solid: true, transparent: false, hardness: 0.8, interact: false, light: false },
  pink_concrete: { id: 206, name: "Розовый бетон", solid: true, transparent: false, hardness: 1.8, interact: false, light: false },
  pink_terracotta: { id: 207, name: "Розовый терракота", solid: true, transparent: false, hardness: 1.25, interact: false, light: false },
  pink_stained_glass: { id: 208, name: "Розовый стекло", solid: true, transparent: true, hardness: 0.3, interact: false, light: false },
  pink_carpet: { id: 209, name: "Розовый ковёр", solid: true, transparent: true, hardness: 0.1, interact: false, light: false },
  gray_wool: { id: 210, name: "Серый шерсть", solid: true, transparent: false, hardness: 0.8, interact: false, light: false },
  gray_concrete: { id: 211, name: "Серый бетон", solid: true, transparent: false, hardness: 1.8, interact: false, light: false },
  gray_terracotta: { id: 212, name: "Серый терракота", solid: true, transparent: false, hardness: 1.25, interact: false, light: false },
  gray_stained_glass: { id: 213, name: "Серый стекло", solid: true, transparent: true, hardness: 0.3, interact: false, light: false },
  gray_carpet: { id: 214, name: "Серый ковёр", solid: true, transparent: true, hardness: 0.1, interact: false, light: false },
  light_gray_wool: { id: 215, name: "Светло-серый шерсть", solid: true, transparent: false, hardness: 0.8, interact: false, light: false },
  light_gray_concrete: { id: 216, name: "Светло-серый бетон", solid: true, transparent: false, hardness: 1.8, interact: false, light: false },
  light_gray_terracotta: { id: 217, name: "Светло-серый терракота", solid: true, transparent: false, hardness: 1.25, interact: false, light: false },
  light_gray_stained_glass: { id: 218, name: "Светло-серый стекло", solid: true, transparent: true, hardness: 0.3, interact: false, light: false },
  light_gray_carpet: { id: 219, name: "Светло-серый ковёр", solid: true, transparent: true, hardness: 0.1, interact: false, light: false },
  cyan_wool: { id: 220, name: "Бирюзовый шерсть", solid: true, transparent: false, hardness: 0.8, interact: false, light: false },
  cyan_concrete: { id: 221, name: "Бирюзовый бетон", solid: true, transparent: false, hardness: 1.8, interact: false, light: false },
  cyan_terracotta: { id: 222, name: "Бирюзовый терракота", solid: true, transparent: false, hardness: 1.25, interact: false, light: false },
  cyan_stained_glass: { id: 223, name: "Бирюзовый стекло", solid: true, transparent: true, hardness: 0.3, interact: false, light: false },
  cyan_carpet: { id: 224, name: "Бирюзовый ковёр", solid: true, transparent: true, hardness: 0.1, interact: false, light: false },
  purple_wool: { id: 225, name: "Фиолетовый шерсть", solid: true, transparent: false, hardness: 0.8, interact: false, light: false },
  purple_concrete: { id: 226, name: "Фиолетовый бетон", solid: true, transparent: false, hardness: 1.8, interact: false, light: false },
  purple_terracotta: { id: 227, name: "Фиолетовый терракота", solid: true, transparent: false, hardness: 1.25, interact: false, light: false },
  purple_stained_glass: { id: 228, name: "Фиолетовый стекло", solid: true, transparent: true, hardness: 0.3, interact: false, light: false },
  purple_carpet: { id: 229, name: "Фиолетовый ковёр", solid: true, transparent: true, hardness: 0.1, interact: false, light: false },
  blue_wool: { id: 230, name: "Синий шерсть", solid: true, transparent: false, hardness: 0.8, interact: false, light: false },
  blue_concrete: { id: 231, name: "Синий бетон", solid: true, transparent: false, hardness: 1.8, interact: false, light: false },
  blue_terracotta: { id: 232, name: "Синий терракота", solid: true, transparent: false, hardness: 1.25, interact: false, light: false },
  blue_stained_glass: { id: 233, name: "Синий стекло", solid: true, transparent: true, hardness: 0.3, interact: false, light: false },
  blue_carpet: { id: 234, name: "Синий ковёр", solid: true, transparent: true, hardness: 0.1, interact: false, light: false },
  brown_wool: { id: 235, name: "Коричневый шерсть", solid: true, transparent: false, hardness: 0.8, interact: false, light: false },
  brown_concrete: { id: 236, name: "Коричневый бетон", solid: true, transparent: false, hardness: 1.8, interact: false, light: false },
  brown_terracotta: { id: 237, name: "Коричневый терракота", solid: true, transparent: false, hardness: 1.25, interact: false, light: false },
  brown_stained_glass: { id: 238, name: "Коричневый стекло", solid: true, transparent: true, hardness: 0.3, interact: false, light: false },
  brown_carpet: { id: 239, name: "Коричневый ковёр", solid: true, transparent: true, hardness: 0.1, interact: false, light: false },
  green_wool: { id: 240, name: "Зелёный шерсть", solid: true, transparent: false, hardness: 0.8, interact: false, light: false },
  green_concrete: { id: 241, name: "Зелёный бетон", solid: true, transparent: false, hardness: 1.8, interact: false, light: false },
  green_terracotta: { id: 242, name: "Зелёный терракота", solid: true, transparent: false, hardness: 1.25, interact: false, light: false },
  green_stained_glass: { id: 243, name: "Зелёный стекло", solid: true, transparent: true, hardness: 0.3, interact: false, light: false },
  green_carpet: { id: 244, name: "Зелёный ковёр", solid: true, transparent: true, hardness: 0.1, interact: false, light: false },
  red_wool: { id: 245, name: "Красный шерсть", solid: true, transparent: false, hardness: 0.8, interact: false, light: false },
  red_concrete: { id: 246, name: "Красный бетон", solid: true, transparent: false, hardness: 1.8, interact: false, light: false },
  red_terracotta: { id: 247, name: "Красный терракота", solid: true, transparent: false, hardness: 1.25, interact: false, light: false },
  red_stained_glass: { id: 248, name: "Красный стекло", solid: true, transparent: true, hardness: 0.3, interact: false, light: false },
  red_carpet: { id: 249, name: "Красный ковёр", solid: true, transparent: true, hardness: 0.1, interact: false, light: false },
  black_wool: { id: 250, name: "Чёрный шерсть", solid: true, transparent: false, hardness: 0.8, interact: false, light: false },
  black_concrete: { id: 251, name: "Чёрный бетон", solid: true, transparent: false, hardness: 1.8, interact: false, light: false },
  black_terracotta: { id: 252, name: "Чёрный терракота", solid: true, transparent: false, hardness: 1.25, interact: false, light: false },
  black_stained_glass: { id: 253, name: "Чёрный стекло", solid: true, transparent: true, hardness: 0.3, interact: false, light: false },
  black_carpet: { id: 254, name: "Чёрный ковёр", solid: true, transparent: true, hardness: 0.1, interact: false, light: false },
  coal_ore: { id: 255, name: "Угольная руда", solid: true, transparent: false, hardness: 3.0, interact: false, light: false },
  iron_ore: { id: 256, name: "Железная руда", solid: true, transparent: false, hardness: 3.0, interact: false, light: false },
  gold_ore: { id: 257, name: "Золотая руда", solid: true, transparent: false, hardness: 3.0, interact: false, light: false },
  diamond_ore: { id: 258, name: "Алмазная руда", solid: true, transparent: false, hardness: 3.0, interact: false, light: false },
  emerald_ore: { id: 259, name: "Изумрудная руда", solid: true, transparent: false, hardness: 3.0, interact: false, light: false },
  lapis_ore: { id: 260, name: "Лазуритовая руда", solid: true, transparent: false, hardness: 3.0, interact: false, light: false },
  redstone_ore: { id: 261, name: "Редстоун руда", solid: true, transparent: false, hardness: 3.0, interact: false, light: false },
  copper_ore: { id: 262, name: "Медная руда", solid: true, transparent: false, hardness: 3.0, interact: false, light: false },
  deepslate_iron_ore: { id: 263, name: "Сланцевая железная руда", solid: true, transparent: false, hardness: 3.0, interact: false, light: false },
  deepslate_gold_ore: { id: 264, name: "Сланцевая золотая руда", solid: true, transparent: false, hardness: 3.0, interact: false, light: false },
  deepslate_diamond_ore: { id: 265, name: "Сланцевая алмазная руда", solid: true, transparent: false, hardness: 3.0, interact: false, light: false },
  nether_gold_ore: { id: 266, name: "Незер-золото руда", solid: true, transparent: false, hardness: 3.0, interact: false, light: false },
  nether_quartz_ore: { id: 267, name: "Незер-кварц руда", solid: true, transparent: false, hardness: 3.0, interact: false, light: false },
};
for (const [k,v] of Object.entries(EXTRA_BLOCKS)) {
  if (!BLOCKS[k]) { BLOCKS[k] = v; ID_TO_KEY[v.id] = k; }
}
if (typeof PLACEABLE !== "undefined") {
  const extra = ["oak_log", "birch_log", "spruce_log", "jungle_log", "acacia_log", "dark_oak_log", "oak_planks", "birch_planks", "spruce_planks", "jungle_planks", "stone_bricks", "mossy_stone_bricks", "cracked_stone_bricks", "chiseled_stone", "smooth_stone", "andesite", "diorite", "granite", "polished_andesite", "polished_diorite", "polished_granite", "deepslate", "cobbled_deepslate", "deepslate_bricks", "tuff", "calcite", "dripstone", "amethyst_block", "copper_block", "cut_copper", "exposed_copper", "oxidized_copper", "iron_block", "gold_block", "diamond_block", "emerald_block", "netherite_block", "lapis_block", "redstone_block", "coal_block", "quartz_block", "smooth_quartz", "prismarine", "prismarine_bricks", "dark_prismarine", "sea_lantern", "sponge", "wet_sponge", "sandstone", "smooth_sandstone", "red_sandstone", "red_sand", "soul_soil", "basalt", "blackstone", "gilded_blackstone", "nether_bricks", "red_nether_bricks", "warped_nylium", "crimson_nylium", "warped_planks", "crimson_planks", "shroomlight", "crying_obsidian", "respawn_anchor", "lodestone", "ancient_debris", "raw_iron_block", "raw_gold_block", "raw_copper_block", "bone_block", "slime_block", "honey_block", "honeycomb_block", "dried_kelp_block", "target", "note_block", "jukebox", "loom", "cartography_table", "fletching_table", "smithing_table", "grindstone", "stonecutter", "barrel", "smoker", "blast_furnace", "composter", "cauldron", "hopper", "dropper", "dispenser", "observer", "piston", "sticky_piston", "slime_block2", "scaffolding", "ladder_block", "chain", "lantern", "soul_lantern", "campfire", "soul_campfire", "torch_block", "end_rod", "beacon", "conduit", "spawner", "enchanting_table", "anvil", "chipped_anvil", "damaged_anvil", "end_portal_frame", "dragon_egg", "bedrock_barrier", "white_wool", "white_concrete", "white_terracotta", "white_stained_glass", "white_carpet", "orange_wool", "orange_concrete", "orange_terracotta", "orange_stained_glass", "orange_carpet", "magenta_wool", "magenta_concrete", "magenta_terracotta", "magenta_stained_glass", "magenta_carpet", "light_blue_wool", "light_blue_concrete", "light_blue_terracotta", "light_blue_stained_glass", "light_blue_carpet", "yellow_wool", "yellow_concrete", "yellow_terracotta", "yellow_stained_glass", "yellow_carpet", "lime_wool", "lime_concrete", "lime_terracotta", "lime_stained_glass", "lime_carpet", "pink_wool", "pink_concrete", "pink_terracotta", "pink_stained_glass", "pink_carpet", "gray_wool", "gray_concrete", "gray_terracotta", "gray_stained_glass", "gray_carpet", "light_gray_wool", "light_gray_concrete", "light_gray_terracotta", "light_gray_stained_glass", "light_gray_carpet", "cyan_wool", "cyan_concrete", "cyan_terracotta", "cyan_stained_glass", "cyan_carpet", "purple_wool", "purple_concrete", "purple_terracotta", "purple_stained_glass", "purple_carpet", "blue_wool", "blue_concrete", "blue_terracotta", "blue_stained_glass", "blue_carpet", "brown_wool", "brown_concrete", "brown_terracotta", "brown_stained_glass", "brown_carpet", "green_wool", "green_concrete", "green_terracotta", "green_stained_glass", "green_carpet", "red_wool", "red_concrete", "red_terracotta", "red_stained_glass", "red_carpet", "black_wool", "black_concrete", "black_terracotta", "black_stained_glass", "black_carpet", "coal_ore", "iron_ore", "gold_ore", "diamond_ore", "emerald_ore", "lapis_ore", "redstone_ore", "copper_ore", "deepslate_iron_ore", "deepslate_gold_ore", "deepslate_diamond_ore", "nether_gold_ore", "nether_quartz_ore"];
  for (const k of extra) if (!PLACEABLE.includes(k)) PLACEABLE.push(k);
}
if (typeof INVENTORY_ALL !== "undefined") {
  for (const k of Object.keys(EXTRA_BLOCKS)) if (!INVENTORY_ALL.includes(k)) INVENTORY_ALL.push(k);
}

// Procedural solid-color / noise textures for extra blocks
function _extraNoiseTex(r,g,b,v,seed){
  return function(data){
    if (typeof fillNoise === "function") fillNoise(data,r,g,b,v,seed);
    else { for(let i=0;i<data.length;i+=4){ data[i]=r; data[i+1]=g; data[i+2]=b; data[i+3]=255; } }
  };
}
const EXTRA_TEX = {
  oak_log: _extraNoiseTex(120,85,45,12,780),
  birch_log: _extraNoiseTex(210,200,160,13,793),
  spruce_log: _extraNoiseTex(90,70,45,14,806),
  jungle_log: _extraNoiseTex(140,100,50,15,819),
  acacia_log: _extraNoiseTex(121,109,97,16,832),
  dark_oak_log: _extraNoiseTex(120,85,45,17,845),
  oak_planks: _extraNoiseTex(120,85,45,18,858),
  birch_planks: _extraNoiseTex(210,200,160,19,871),
  spruce_planks: _extraNoiseTex(90,70,45,20,884),
  jungle_planks: _extraNoiseTex(140,100,50,21,897),
  stone_bricks: _extraNoiseTex(130,130,130,12,910),
  mossy_stone_bricks: _extraNoiseTex(130,130,130,13,923),
  cracked_stone_bricks: _extraNoiseTex(130,130,130,14,936),
  chiseled_stone: _extraNoiseTex(130,130,130,15,949),
  smooth_stone: _extraNoiseTex(130,130,130,16,962),
  andesite: _extraNoiseTex(115,155,195,17,975),
  diorite: _extraNoiseTex(52,68,84,18,988),
  granite: _extraNoiseTex(106,74,42,19,1001),
  polished_andesite: _extraNoiseTex(196,104,192,20,1014),
  polished_diorite: _extraNoiseTex(133,197,81,21,1027),
  polished_granite: _extraNoiseTex(187,203,219,12,1040),
  deepslate: _extraNoiseTex(60,60,70,13,1053),
  cobbled_deepslate: _extraNoiseTex(60,60,70,14,1066),
  deepslate_bricks: _extraNoiseTex(60,60,70,15,1079),
  tuff: _extraNoiseTex(187,203,219,16,1092),
  calcite: _extraNoiseTex(115,95,75,17,1105),
  dripstone: _extraNoiseTex(130,130,130,18,1118),
  amethyst_block: _extraNoiseTex(67,163,79,19,1131),
  copper_block: _extraNoiseTex(180,110,70,20,1144),
  cut_copper: _extraNoiseTex(180,110,70,21,1157),
  exposed_copper: _extraNoiseTex(180,110,70,12,1170),
  oxidized_copper: _extraNoiseTex(180,110,70,13,1183),
  iron_block: _extraNoiseTex(200,200,200,14,1196),
  gold_block: _extraNoiseTex(240,210,50,15,1209),
  diamond_block: _extraNoiseTex(80,220,230,16,1222),
  emerald_block: _extraNoiseTex(40,200,90,17,1235),
  netherite_block: _extraNoiseTex(80,30,30,18,1248),
  lapis_block: _extraNoiseTex(85,145,205,19,1261),
  redstone_block: _extraNoiseTex(130,130,130,20,1274),
  coal_block: _extraNoiseTex(163,207,71,21,1287),
  quartz_block: _extraNoiseTex(127,123,119,12,1300),
  smooth_quartz: _extraNoiseTex(40,40,40,13,1313),
  prismarine: _extraNoiseTex(142,98,54,14,1326),
  prismarine_bricks: _extraNoiseTex(85,205,145,15,1339),
  dark_prismarine: _extraNoiseTex(205,125,45,16,1352),
  sea_lantern: _extraNoiseTex(184,136,88,17,1365),
  sponge: _extraNoiseTex(172,48,104,18,1378),
  wet_sponge: _extraNoiseTex(193,217,61,19,1391),
  sandstone: _extraNoiseTex(130,130,130,20,1404),
  smooth_sandstone: _extraNoiseTex(130,130,130,21,1417),
  red_sandstone: _extraNoiseTex(200,50,50,12,1430),
  red_sand: _extraNoiseTex(200,50,50,13,1443),
  soul_soil: _extraNoiseTex(55,75,95,14,1456),
  basalt: _extraNoiseTex(181,69,137,15,1469),
  blackstone: _extraNoiseTex(130,130,130,16,1482),
  gilded_blackstone: _extraNoiseTex(130,130,130,17,1495),
  nether_bricks: _extraNoiseTex(80,30,30,18,1508),
  red_nether_bricks: _extraNoiseTex(200,50,50,19,1521),
  warped_nylium: _extraNoiseTex(208,192,176,20,1534),
  crimson_nylium: _extraNoiseTex(208,72,116,21,1547),
  warped_planks: _extraNoiseTex(217,213,209,12,1560),
  crimson_planks: _extraNoiseTex(217,93,149,13,1573),
  shroomlight: _extraNoiseTex(40,100,160,14,1586),
  crying_obsidian: _extraNoiseTex(208,192,176,15,1599),
  respawn_anchor: _extraNoiseTex(118,102,86,16,1612),
  lodestone: _extraNoiseTex(130,130,130,17,1625),
  ancient_debris: _extraNoiseTex(106,74,42,18,1638),
  raw_iron_block: _extraNoiseTex(200,200,200,19,1651),
  raw_gold_block: _extraNoiseTex(240,210,50,20,1664),
  raw_copper_block: _extraNoiseTex(180,110,70,21,1677),
  bone_block: _extraNoiseTex(58,82,106,12,1690),
  slime_block: _extraNoiseTex(136,84,212,13,1703),
  honey_block: _extraNoiseTex(55,75,95,14,1716),
  honeycomb_block: _extraNoiseTex(82,198,134,15,1729),
  dried_kelp_block: _extraNoiseTex(151,59,147,16,1742),
  target: _extraNoiseTex(97,173,69,17,1755),
  note_block: _extraNoiseTex(76,64,52,18,1768),
  jukebox: _extraNoiseTex(100,120,140,19,1781),
  loom: _extraNoiseTex(109,81,53,20,1794),
  cartography_table: _extraNoiseTex(193,217,61,21,1807),
  fletching_table: _extraNoiseTex(193,97,181,12,1820),
  smithing_table: _extraNoiseTex(202,178,154,13,1833),
  grindstone: _extraNoiseTex(130,130,130,14,1846),
  stonecutter: _extraNoiseTex(130,130,130,15,1859),
  barrel: _extraNoiseTex(52,188,144,16,1872),
  smoker: _extraNoiseTex(67,103,139,17,1885),
  blast_furnace: _extraNoiseTex(199,51,83,18,1898),
  composter: _extraNoiseTex(208,72,116,19,1911),
  cauldron: _extraNoiseTex(136,204,92,20,1924),
  hopper: _extraNoiseTex(94,106,118,21,1937),
  dropper: _extraNoiseTex(124,56,168,12,1950),
  dispenser: _extraNoiseTex(163,87,191,13,1963),
  observer: _extraNoiseTex(52,128,204,14,1976),
  piston: _extraNoiseTex(139,91,43,15,1989),
  sticky_piston: _extraNoiseTex(97,113,129,16,2002),
  slime_block2: _extraNoiseTex(166,94,202,17,2015),
  scaffolding: _extraNoiseTex(112,148,184,18,2028),
  ladder_block: _extraNoiseTex(178,122,66,19,2041),
  chain: _extraNoiseTex(205,125,45,20,2054),
  lantern: _extraNoiseTex(76,184,112,21,2067),
  soul_lantern: _extraNoiseTex(202,178,154,12,2080),
  campfire: _extraNoiseTex(169,161,153,13,2093),
  soul_campfire: _extraNoiseTex(115,155,195,14,2106),
  torch_block: _extraNoiseTex(82,78,74,15,2119),
  end_rod: _extraNoiseTex(61,89,117,16,2132),
  beacon: _extraNoiseTex(136,84,212,17,2145),
  conduit: _extraNoiseTex(178,62,126,18,2158),
  spawner: _extraNoiseTex(148,172,196,19,2171),
  enchanting_table: _extraNoiseTex(70,50,210,20,2184),
  anvil: _extraNoiseTex(118,162,206,21,2197),
  chipped_anvil: _extraNoiseTex(46,54,62,12,2210),
  damaged_anvil: _extraNoiseTex(160,200,60,13,2223),
  end_portal_frame: _extraNoiseTex(142,218,114,14,2236),
  dragon_egg: _extraNoiseTex(187,143,99,15,2249),
  bedrock_barrier: _extraNoiseTex(88,152,216,16,2262),
  white_wool: _extraNoiseTex(240,240,240,17,2275),
  white_concrete: _extraNoiseTex(240,240,240,18,2288),
  white_terracotta: _extraNoiseTex(240,240,240,19,2301),
  white_stained_glass: _extraNoiseTex(240,240,240,20,2314),
  white_carpet: _extraNoiseTex(240,240,240,21,2327),
  orange_wool: _extraNoiseTex(240,140,40,12,2340),
  orange_concrete: _extraNoiseTex(240,140,40,13,2353),
  orange_terracotta: _extraNoiseTex(240,140,40,14,2366),
  orange_stained_glass: _extraNoiseTex(240,140,40,15,2379),
  orange_carpet: _extraNoiseTex(240,140,40,16,2392),
  magenta_wool: _extraNoiseTex(200,80,200,17,2405),
  magenta_concrete: _extraNoiseTex(200,80,200,18,2418),
  magenta_terracotta: _extraNoiseTex(200,80,200,19,2431),
  magenta_stained_glass: _extraNoiseTex(200,80,200,20,2444),
  magenta_carpet: _extraNoiseTex(200,80,200,21,2457),
  light_blue_wool: _extraNoiseTex(120,180,240,12,2470),
  light_blue_concrete: _extraNoiseTex(120,180,240,13,2483),
  light_blue_terracotta: _extraNoiseTex(120,180,240,14,2496),
  light_blue_stained_glass: _extraNoiseTex(120,180,240,15,2509),
  light_blue_carpet: _extraNoiseTex(120,180,240,16,2522),
  yellow_wool: _extraNoiseTex(240,220,60,17,2535),
  yellow_concrete: _extraNoiseTex(240,220,60,18,2548),
  yellow_terracotta: _extraNoiseTex(240,220,60,19,2561),
  yellow_stained_glass: _extraNoiseTex(240,220,60,20,2574),
  yellow_carpet: _extraNoiseTex(240,220,60,21,2587),
  lime_wool: _extraNoiseTex(120,220,60,12,2600),
  lime_concrete: _extraNoiseTex(120,220,60,13,2613),
  lime_terracotta: _extraNoiseTex(120,220,60,14,2626),
  lime_stained_glass: _extraNoiseTex(120,220,60,15,2639),
  lime_carpet: _extraNoiseTex(120,220,60,16,2652),
  pink_wool: _extraNoiseTex(255,160,180,17,2665),
  pink_concrete: _extraNoiseTex(255,160,180,18,2678),
  pink_terracotta: _extraNoiseTex(255,160,180,19,2691),
  pink_stained_glass: _extraNoiseTex(255,160,180,20,2704),
  pink_carpet: _extraNoiseTex(255,160,180,21,2717),
  gray_wool: _extraNoiseTex(100,100,100,12,2730),
  gray_concrete: _extraNoiseTex(100,100,100,13,2743),
  gray_terracotta: _extraNoiseTex(100,100,100,14,2756),
  gray_stained_glass: _extraNoiseTex(100,100,100,15,2769),
  gray_carpet: _extraNoiseTex(100,100,100,16,2782),
  light_gray_wool: _extraNoiseTex(170,170,170,17,2795),
  light_gray_concrete: _extraNoiseTex(170,170,170,18,2808),
  light_gray_terracotta: _extraNoiseTex(170,170,170,19,2821),
  light_gray_stained_glass: _extraNoiseTex(170,170,170,20,2834),
  light_gray_carpet: _extraNoiseTex(170,170,170,21,2847),
  cyan_wool: _extraNoiseTex(40,180,180,12,2860),
  cyan_concrete: _extraNoiseTex(40,180,180,13,2873),
  cyan_terracotta: _extraNoiseTex(40,180,180,14,2886),
  cyan_stained_glass: _extraNoiseTex(40,180,180,15,2899),
  cyan_carpet: _extraNoiseTex(40,180,180,16,2912),
  purple_wool: _extraNoiseTex(140,60,200,17,2925),
  purple_concrete: _extraNoiseTex(140,60,200,18,2938),
  purple_terracotta: _extraNoiseTex(140,60,200,19,2951),
  purple_stained_glass: _extraNoiseTex(140,60,200,20,2964),
  purple_carpet: _extraNoiseTex(140,60,200,21,2977),
  blue_wool: _extraNoiseTex(50,80,200,12,2990),
  blue_concrete: _extraNoiseTex(50,80,200,13,3003),
  blue_terracotta: _extraNoiseTex(50,80,200,14,3016),
  blue_stained_glass: _extraNoiseTex(50,80,200,15,3029),
  blue_carpet: _extraNoiseTex(50,80,200,16,3042),
  brown_wool: _extraNoiseTex(120,80,40,17,3055),
  brown_concrete: _extraNoiseTex(120,80,40,18,3068),
  brown_terracotta: _extraNoiseTex(120,80,40,19,3081),
  brown_stained_glass: _extraNoiseTex(120,80,40,20,3094),
  brown_carpet: _extraNoiseTex(120,80,40,21,3107),
  green_wool: _extraNoiseTex(60,140,50,12,3120),
  green_concrete: _extraNoiseTex(60,140,50,13,3133),
  green_terracotta: _extraNoiseTex(60,140,50,14,3146),
  green_stained_glass: _extraNoiseTex(60,140,50,15,3159),
  green_carpet: _extraNoiseTex(60,140,50,16,3172),
  red_wool: _extraNoiseTex(200,50,50,17,3185),
  red_concrete: _extraNoiseTex(200,50,50,18,3198),
  red_terracotta: _extraNoiseTex(200,50,50,19,3211),
  red_stained_glass: _extraNoiseTex(200,50,50,20,3224),
  red_carpet: _extraNoiseTex(200,50,50,21,3237),
  black_wool: _extraNoiseTex(30,30,30,12,3250),
  black_concrete: _extraNoiseTex(30,30,30,13,3263),
  black_terracotta: _extraNoiseTex(30,30,30,14,3276),
  black_stained_glass: _extraNoiseTex(30,30,30,15,3289),
  black_carpet: _extraNoiseTex(30,30,30,16,3302),
  coal_ore: _extraNoiseTex(196,164,132,17,3315),
  iron_ore: _extraNoiseTex(200,200,200,18,3328),
  gold_ore: _extraNoiseTex(240,210,50,19,3341),
  diamond_ore: _extraNoiseTex(80,220,230,20,3354),
  emerald_ore: _extraNoiseTex(40,200,90,21,3367),
  lapis_ore: _extraNoiseTex(118,102,86,12,3380),
  redstone_ore: _extraNoiseTex(130,130,130,13,3393),
  copper_ore: _extraNoiseTex(180,110,70,14,3406),
  deepslate_iron_ore: _extraNoiseTex(200,200,200,15,3419),
  deepslate_gold_ore: _extraNoiseTex(240,210,50,16,3432),
  deepslate_diamond_ore: _extraNoiseTex(80,220,230,17,3445),
  nether_gold_ore: _extraNoiseTex(240,210,50,18,3458),
  nether_quartz_ore: _extraNoiseTex(80,30,30,19,3471),
};

// Patch TextureAtlas to include extra textures when built
if (typeof TextureAtlas !== "undefined") {
  const _orig = TextureAtlas.prototype._buildAll;
  TextureAtlas.prototype._buildAll = function(){
    _orig.call(this);
    for (const [key, drawFn] of Object.entries(EXTRA_TEX)) {
      if (this.faceCanvases[key]) continue;
      try {
        const { canvas } = makeImageData(drawFn);
        this.faceCanvases[key] = { top: canvas, bottom: canvas, side: canvas };
        this.icons[key] = this._makeIcon(key);
      } catch(e) { console.warn("tex", key, e); }
    }
  };
}
window.EXTRA_BLOCKS = EXTRA_BLOCKS;
})();
// Block catalog note #0: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #1: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #2: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #3: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #4: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #5: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #6: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #7: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #8: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #9: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #10: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #11: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #12: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #13: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #14: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #15: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #16: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #17: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #18: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #19: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #20: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #21: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #22: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #23: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #24: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #25: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #26: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #27: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #28: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #29: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #30: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #31: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #32: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #33: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #34: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #35: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #36: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #37: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #38: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #39: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #40: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #41: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #42: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #43: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #44: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #45: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #46: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #47: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #48: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #49: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #50: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #51: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #52: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #53: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #54: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #55: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #56: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #57: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #58: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #59: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #60: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #61: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #62: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #63: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #64: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #65: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #66: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #67: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #68: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #69: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #70: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #71: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #72: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #73: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #74: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #75: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #76: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #77: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #78: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #79: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #80: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #81: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #82: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #83: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #84: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #85: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #86: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #87: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #88: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #89: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #90: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #91: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #92: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #93: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #94: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #95: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #96: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #97: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #98: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #99: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #100: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #101: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #102: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #103: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #104: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #105: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #106: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #107: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #108: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #109: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #110: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #111: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #112: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #113: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #114: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #115: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #116: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #117: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #118: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #119: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #120: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #121: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #122: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #123: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #124: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #125: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #126: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #127: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #128: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #129: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #130: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #131: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #132: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #133: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #134: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #135: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #136: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #137: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #138: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #139: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #140: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #141: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #142: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #143: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #144: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #145: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #146: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #147: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #148: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #149: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #150: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #151: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #152: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #153: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #154: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #155: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #156: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #157: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #158: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #159: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #160: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #161: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #162: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #163: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #164: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #165: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #166: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #167: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #168: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #169: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #170: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #171: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #172: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #173: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #174: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #175: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #176: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #177: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #178: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #179: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #180: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #181: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #182: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #183: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #184: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #185: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #186: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #187: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #188: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #189: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #190: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #191: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #192: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #193: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #194: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #195: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #196: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #197: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #198: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
// Block catalog note #199: procedural Minecraft-like content pack for BrowserCraft expanded worldbuilding.
