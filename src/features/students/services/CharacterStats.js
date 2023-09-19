const raid_level = [17, 25, 35, 50, 70, 80, 90]
const maxbond = [10, 10, 20, 20, 50]
const gear_minlevelreq = [0, 15, 35]
const raid_reward_coin = [[40,0],[60,0],[80,0],[100,10],[120,20],[140,40],[160,60]]
const languages = ['En', 'Jp', 'Kr', 'Tw', 'Cn', 'Zh', 'Th', 'Vi']
const label_smalltext_threshold = {'En':10, 'Jp':5, 'Kr':5, 'Tw':5, 'Cn': 5, 'Zh': 5, 'Th': 11, 'Vi': 11}
const label_craft_smalltext_threshold = {'En':8, 'Jp':4, 'Kr':4, 'Tw':4, 'Cn': 4, 'Zh': 4, 'Th': 8, 'Vi': 8}
const label_enemy_smalltext_threshold = {'En':12, 'Jp':6, 'Kr':6, 'Tw':6, 'Cn':6, 'Zh':6, 'Th': 12, 'Vi': 12}
const label_raid_smalltext_threshold = {'En':19, 'Jp':10, 'Kr':11, 'Tw':10, 'Cn':10, 'Zh':10, 'Th': 20, 'Vi': 20}
const adaptationAmount = {0: "D", 1: "C", 2: "B", 3: "A", 4: "S", 5: "SS"}
const terrain_dmg_bonus = {D: 0.8, C: 0.9, B: 1, A: 1.1, S: 1.2, SS: 1.3}
const terrain_block_bonus = {D: 0, C: 15, B: 30, A: 45, S: 60, SS: 75}
const skill_ex_upgrade_credits = [80000, 500000, 3000000, 10000000]
const skill_upgrade_credits = [5000, 7500, 60000, 90000, 300000, 450000, 1500000, 2400000, 4000000]
const gear_upgrade_credits = [500000]
const enemy_rank = {'Champion': 1, 'Elite': 2, 'Minion': 3}
const max_gifts = 35
const max_gifts_ssr = 13
const conquest_events = [815, 822, 10815]
const module_list = ['home','students','raids','stages','items','craft']
const striker_bonus_coefficient = {'MaxHP': 0.1, 'AttackPower': 0.1, 'DefensePower': 0.05, 'HealPower': 0.05,}
const gearId = {'Hat': 1000,'Gloves': 2000,'Shoes': 3000,'Bag': 4000,'Badge': 5000,'Hairpin': 6000,'Charm': 7000,'Watch': 8000,'Necklace': 9000,}
const timeAttackBG = {"Shooting": "TimeAttack_SlotBG_02", "Defense": "TimeAttack_SlotBG_01", "Destruction": "TimeAttack_SlotBG_03"}
const searchDelay = 100
const searchMaxResults = 40
const altSprite = [10017, 10033, 10041, 10042, 10043, 10048, 20009, 20014, 10062, 10071, 10072, 26010]
const raidDifficultyName = ["Normal", "Hard", "VeryHard", "HardCore", "Extreme", "Insane", "Torment"]
const buffIconKeys = {"AttackPower": "ATK","DefensePower": "DEF","CriticalPoint": "CriticalChance","CriticalDamageRate": "CriticalDamage","CriticalDamageResistRate": "CriticalDamageRateResist","DodgePoint": "Dodge","HealEffectivenessRate": "HealEffectiveness","AccuracyPoint": "HIT","MaxHP": "MAXHP","DefensePenetration": "Penetration","StabilityPoint": "Stability","StabilityRate": "Stability","RegenCost": "CostRegen"}
const studentStatList = ['MaxHP','AttackPower','DefensePower','HealPower','AccuracyPoint','DodgePoint','CriticalPoint','CriticalChanceResistPoint','CriticalDamageRate','CriticalDamageResistRate','StabilityPoint','Range','OppressionPower','OppressionResist','HealEffectivenessRate','AmmoCount']
const studentStatListFull = ['MaxHP','AttackPower','DefensePower','HealPower','AccuracyPoint','DodgePoint','CriticalPoint','CriticalChanceResistPoint','CriticalDamageRate','CriticalDamageResistRate','StabilityPoint','Range','OppressionPower','OppressionResist','HealEffectivenessRate','RegenCost','AttackSpeed','BlockRate','DefensePenetration', 'AmmoCount']
const enemyStatList = ['MaxHP','AttackPower','DefensePower','HealPower','AccuracyPoint','DodgePoint','CriticalPoint','CriticalChanceResistPoint','CriticalDamageRate','CriticalDamageResistRate','StabilityPoint','Range','DefensePenetration','DamagedRatio','OppressionPower','OppressionResist']
const raidEnemyStatList = ['MaxHP','AttackPower','DefensePower','HealPower','AccuracyPoint','DodgePoint','CriticalPoint','CriticalChanceResistPoint','CriticalDamageRate','CriticalDamageResistRate','StabilityPoint','Range','DefensePenetration','DamagedRatio','GroggyGauge','GroggyTime']
const enemyCalculationStatList = ['MaxHP','AttackPower','DefensePower','HealPower','AccuracyPoint','DodgePoint','CriticalPoint','CriticalChanceResistPoint','CriticalDamageRate','CriticalDamageResistRate','StabilityPoint','Range','DefensePenetration','DamagedRatio']
let data = {
    equipment: [{"Id":1,"Category":"Exp","Rarity":"N","Tier":0,"Icon":"equipment_icon_exp_0","Shops":[{"ShopCategory":"General","Released":[true,true,false],"Amount":5,"CostType":"Currency","CostId":1,"CostAmount":10000},{"ShopCategory":"General","Released":[true,true,false],"Amount":10,"CostType":"Currency","CostId":1,"CostAmount":20000}],"Name":"Lesser Enhancement Stone","Desc":"A mysterious Enhancement Stone that improves equipment.","IsReleased":[true,true,true],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":2,"Category":"Exp","Rarity":"R","Tier":0,"Icon":"equipment_icon_exp_1","Shops":[{"ShopCategory":"General","Released":[true,true,false],"Amount":5,"CostType":"Currency","CostId":1,"CostAmount":40000},{"ShopCategory":"General","Released":[true,true,false],"Amount":10,"CostType":"Currency","CostId":1,"CostAmount":80000}],"Name":"Normal Enhancement Stone","Desc":"A mysterious Enhancement Stone that improves equipment.","IsReleased":[true,true,true],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":3,"Category":"Exp","Rarity":"SR","Tier":0,"Icon":"equipment_icon_exp_2","Shops":[{"ShopCategory":"General","Released":[true,true,false],"Amount":3,"CostType":"Currency","CostId":1,"CostAmount":96000},{"ShopCategory":"General","Released":[true,true,false],"Amount":6,"CostType":"Currency","CostId":1,"CostAmount":192000}],"Name":"Advanced Enhancement Stone","Desc":"A mysterious Enhancement Stone that improves equipment.","IsReleased":[true,true,true],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":4,"Category":"Exp","Rarity":"SSR","Tier":0,"Icon":"equipment_icon_exp_3","Shops":[{"ShopCategory":"General","Released":[true,true,false],"Amount":1,"CostType":"Currency","CostId":1,"CostAmount":128000},{"ShopCategory":"General","Released":[true,true,false],"Amount":2,"CostType":"Currency","CostId":1,"CostAmount":256000}],"Name":"Superior Enhancement Stone","Desc":"A mysterious Enhancement Stone that improves equipment.","IsReleased":[true,true,true],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":10,"Category":"WeaponExpGrowthA","Rarity":"N","Tier":0,"Icon":"equipment_icon_weaponexpgrowtha_0","Shops":[],"Name":"Rusty Spring","Desc":"A spring used to push the breech block forth. Rusty on the surface due to lack of maintenance. Used for Exclusive Weapon Growth.","IsReleased":[true,true,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":11,"Category":"WeaponExpGrowthA","Rarity":"R","Tier":0,"Icon":"equipment_icon_weaponexpgrowtha_1","Shops":[],"Name":"Intact Spring","Desc":"A spring used to push the breech block forth. As good as new. Used for Exclusive Weapon Growth.","IsReleased":[true,true,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":12,"Category":"WeaponExpGrowthA","Rarity":"SR","Tier":0,"Icon":"equipment_icon_weaponexpgrowtha_2","Shops":[],"Name":"Chromium Spring","Desc":"A spring used to push the breech block forth. Made of chromium alloy which makes it durable and rust-resistant. Used for Exclusive Weapon Growth.","IsReleased":[true,true,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":13,"Category":"WeaponExpGrowthA","Rarity":"SSR","Tier":0,"Icon":"equipment_icon_weaponexpgrowtha_3","Shops":[],"Name":"Titanium Spring","Desc":"A spring used to push the breech block forth. Made of titanium alloy which makes it even more durable while staying light. Used for Exclusive Weapon Growth.","IsReleased":[true,true,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":20,"Category":"WeaponExpGrowthB","Rarity":"N","Tier":0,"Icon":"equipment_icon_weaponexpgrowthb_0","Shops":[],"Name":"Rusty Hammer","Desc":"A part of the gun that delivers the power from trigger to the firing pin. Rusty on the surface due to lack of maintenance. Used for Exclusive Weapon Growth.","IsReleased":[true,true,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":21,"Category":"WeaponExpGrowthB","Rarity":"R","Tier":0,"Icon":"equipment_icon_weaponexpgrowthb_1","Shops":[],"Name":"Intact Hammer","Desc":"A part of the gun that delivers the power from trigger to the firing pin. As good as new. Used for Exclusive Weapon Growth.","IsReleased":[true,true,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":22,"Category":"WeaponExpGrowthB","Rarity":"SR","Tier":0,"Icon":"equipment_icon_weaponexpgrowthb_2","Shops":[],"Name":"Chromium Hammer","Desc":"The part of a firearm that transmits force to the firing pin when the trigger is pulled. It is made of chromium alloy, so it's sturdy and rust-resistant. Used to enhance Exclusive weapons.","IsReleased":[true,true,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":23,"Category":"WeaponExpGrowthB","Rarity":"SSR","Tier":0,"Icon":"equipment_icon_weaponexpgrowthb_3","Shops":[],"Name":"Titanium Hammer","Desc":"The part of a firearm that transmits force to the firing pin when the trigger is pulled. It is made of titanium alloy, so it's lighter and stronger. Used to enhance Exclusive weapons.","IsReleased":[true,true,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":30,"Category":"WeaponExpGrowthC","Rarity":"N","Tier":0,"Icon":"equipment_icon_weaponexpgrowthc_0","Shops":[],"Name":"Rusty Barrel","Desc":"The steel tube in a firearm through which a bullet is fired. It hasn't been maintained, so it's covered with rust. Used to enhance Exclusive weapons.","IsReleased":[true,true,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":31,"Category":"WeaponExpGrowthC","Rarity":"R","Tier":0,"Icon":"equipment_icon_weaponexpgrowthc_1","Shops":[],"Name":"Intact Barrel","Desc":"The steel tube in a firearm through which a bullet is fired. It is well-preserved and in pristine condition. Used to enhance Exclusive weapons.","IsReleased":[true,true,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":32,"Category":"WeaponExpGrowthC","Rarity":"SR","Tier":0,"Icon":"equipment_icon_weaponexpgrowthc_2","Shops":[],"Name":"Chromium Barrel","Desc":"The steel tube in a firearm through which a bullet is fired. It is made of chromium alloy, so it's sturdy and rust-resistant. Used to enhance Exclusive weapons.","IsReleased":[true,true,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":33,"Category":"WeaponExpGrowthC","Rarity":"SSR","Tier":0,"Icon":"equipment_icon_weaponexpgrowthc_3","Shops":[],"Name":"Titanium Barrel","Desc":"The steel tube in a firearm through which a bullet is fired. It is made of titanium alloy, so it's lighter and stronger. Used to enhance Exclusive weapons.","IsReleased":[true,true,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":40,"Category":"WeaponExpGrowthZ","Rarity":"N","Tier":0,"Icon":"equipment_icon_weaponexpgrowthz_0","Shops":[],"Name":"Rusty Firing Pin","Desc":"The metal rod that strikes and triggers the primer of a bullet. It hasn't been maintained, so it's covered with rust. Used to enhance Exclusive weapons.","IsReleased":[true,true,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":41,"Category":"WeaponExpGrowthZ","Rarity":"R","Tier":0,"Icon":"equipment_icon_weaponexpgrowthz_1","Shops":[{"ShopCategory":"SecretStoneGrowth","Released":[true,true,false],"Amount":1,"CostType":"Item","CostId":23,"CostAmount":8}],"Name":"Intact Firing Pin","Desc":"The metal rod that strikes and triggers the primer of a bullet. It is well-preserved and in pristine condition. Used to enhance Exclusive weapons.","IsReleased":[true,true,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":42,"Category":"WeaponExpGrowthZ","Rarity":"SR","Tier":0,"Icon":"equipment_icon_weaponexpgrowthz_2","Shops":[{"ShopCategory":"SecretStoneGrowth","Released":[true,true,false],"Amount":1,"CostType":"Item","CostId":23,"CostAmount":32}],"Name":"Chromium Firing Pin","Desc":"The metal rod that strikes and triggers the primer of a bullet. It is made of chromium alloy, so it's sturdy and rust-resistant. Used to enhance Exclusive weapons.","IsReleased":[true,true,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":43,"Category":"WeaponExpGrowthZ","Rarity":"SSR","Tier":0,"Icon":"equipment_icon_weaponexpgrowthz_3","Shops":[{"ShopCategory":"MasterCoin","Released":[true,true,false],"Amount":10,"CostType":"Currency","CostId":18,"CostAmount":1500}],"Name":"Titanium Firing Pin","Desc":"A metal rod that strikes and triggers the primer of a bullet. It is made of titanium alloy, so it's lighter and stronger. Used to enhance Exclusive weapons.","IsReleased":[true,true,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":1000,"Category":"Hat","Rarity":"N","Tier":1,"Icon":"equipment_icon_hat_tier1","Shops":[],"Name":"Plain Baseball Cap","Desc":"A navy blue plain cap released by the sportswear brand Serval. Various badges can be attached to it to show off your individuality and make a fashion statement.","IsReleased":[true,true,true],"StatType":["AttackPower_Coefficient"],"StatValue":[[500,800]]},{"Id":1001,"Category":"Hat","Rarity":"N","Tier":2,"Icon":"equipment_icon_hat_tier2","Shops":[],"Name":"Knitted Wool Hat","Desc":"A knitted wool hat made for high school girls by the outdoor brand Manaslu. Although it doesn't provide much warmth, it's popular for its cute design.","IsReleased":[true,true,true],"StatType":["AttackPower_Coefficient"],"StatValue":[[1000,1300]],"Recipe":[[101001,15]],"RecipeCost":1500},{"Id":1002,"Category":"Hat","Rarity":"N","Tier":3,"Icon":"equipment_icon_hat_tier3","Shops":[],"Name":"Big Brother Fedora","Desc":"A fedora with a small plush of the Momo Friends character Big Brother dangling from it. It's said that you can feel Big Brother watching you when you wear this hat.","IsReleased":[true,true,true],"StatType":["AttackPower_Coefficient"],"StatValue":[[1500,1800]],"Recipe":[[101002,20]],"RecipeCost":10000},{"Id":1003,"Category":"Hat","Rarity":"N","Tier":4,"Icon":"equipment_icon_hat_tier4","Shops":[],"Name":"Ribbon Beret","Desc":"A beret with a white ribbon used as a school hat at Trinity General School. According to those who've worn it, it's rather difficult to keep the beret's voluminous shape intact while wearing it.","IsReleased":[true,true,true],"StatType":["AttackPower_Coefficient","CriticalDamageRate_Base"],"StatValue":[[2000,2500],[400,800]],"Recipe":[[101003,30],[101001,10]],"RecipeCost":25000},{"Id":1004,"Category":"Hat","Rarity":"N","Tier":5,"Icon":"equipment_icon_hat_tier5","Shops":[],"Name":"Bulletproof Helmet","Desc":"A rugged bulletproof helmet to protect your head from all sorts of flying projectiles. The exterior can be decorated with all sorts of patches.","IsReleased":[true,true,true],"StatType":["AttackPower_Coefficient","CriticalDamageRate_Base"],"StatValue":[[2700,3000],[900,1200]],"Recipe":[[101004,35],[101002,20],[101001,15]],"RecipeCost":50000},{"Id":1005,"Category":"Hat","Rarity":"N","Tier":6,"Icon":"equipment_icon_hat_tier6","Shops":[],"Name":"Frilly Mini Hat","Desc":"A mini hat decorated with colorful frills. A small hairpin is hidden under the brim to hold the hat in place.","IsReleased":[true,true,false],"StatType":["AttackPower_Coefficient","CriticalDamageRate_Base"],"StatValue":[[3100,3500],[1250,1600]],"Recipe":[[101005,40],[101003,15],[101002,5]],"RecipeCost":75000},{"Id":1006,"Category":"Hat","Rarity":"N","Tier":7,"Icon":"equipment_icon_hat_tier7","Shops":[],"Name":"Bucket Hat","Desc":"A bucket hat that covers the top of the face. When combined with a mask, you can minimize facial exposure. Good for UV protection.","IsReleased":[true,true,false],"StatType":["AttackPower_Coefficient","CriticalDamageRate_Base"],"StatValue":[[3600,4000],[1600,1800]],"Recipe":[[101006,40],[101004,15],[101003,5]],"RecipeCost":100000},{"Id":1007,"Category":"Hat","Rarity":"N","Tier":8,"Icon":"equipment_icon_hat_tier8","Shops":[],"Name":"Leaf Ribbon Fedora","Desc":"Fabric fedora with a leaf decoration in the form of a ribbon. Looks great with resort fashion.","IsReleased":[true,false,false],"StatType":["AttackPower_Coefficient","CriticalDamageRate_Base"],"StatValue":[[4100,4500],[1800,2000]],"Recipe":[[101007,40],[101005,15],[101004,5]],"RecipeCost":125000},{"Id":2000,"Category":"Gloves","Rarity":"N","Tier":1,"Icon":"equipment_icon_gloves_tier1","Shops":[],"Name":"Sports Gloves","Desc":"Gloves with a rugged outer lining to prevent your hands from slipping. They have been coated in a flame retardant material, so even a hot gun barrel will feel cool to the touch.","IsReleased":[true,true,true],"StatType":["AttackPower_Coefficient"],"StatValue":[[400,640]]},{"Id":2001,"Category":"Gloves","Rarity":"N","Tier":2,"Icon":"equipment_icon_gloves_tier2","Shops":[],"Name":"Knitted Mittens","Desc":"Mittens made for high school girls by the outdoor brand Manaslu. Although they don't provide much warmth, they're popular for their cute design.","IsReleased":[true,true,true],"StatType":["AttackPower_Coefficient"],"StatValue":[[800,1040]],"Recipe":[[102001,15]],"RecipeCost":1500},{"Id":2002,"Category":"Gloves","Rarity":"N","Tier":3,"Icon":"equipment_icon_gloves_tier3","Shops":[],"Name":"Peroro Oven Mitts","Desc":"White oven mitts made with an image of Peroro, the mascot of Momo Friends. Rumor has it that wearing these will suddenly make you want to do a weird dance.","IsReleased":[true,true,true],"StatType":["AttackPower_Coefficient"],"StatValue":[[1200,1440]],"Recipe":[[102002,20]],"RecipeCost":10000},{"Id":2003,"Category":"Gloves","Rarity":"N","Tier":4,"Icon":"equipment_icon_gloves_tier4","Shops":[],"Name":"Leather Gloves","Desc":"Gloves made using high-quality leather fabric. Because they're not very durable, they're mainly used for ceremonial purposes.","IsReleased":[true,true,true],"StatType":["AttackPower_Coefficient","CriticalPoint_Base"],"StatValue":[[1600,2000],[40,70]],"Recipe":[[102003,30],[102001,10]],"RecipeCost":25000},{"Id":2004,"Category":"Gloves","Rarity":"N","Tier":5,"Icon":"equipment_icon_gloves_tier5","Shops":[],"Name":"Tactical Gloves","Desc":"Rugged tactical gloves made from flame-retardant material. There's no risk of getting burnt from an overheated gun barrel with these!","IsReleased":[true,true,true],"StatType":["AttackPower_Coefficient","CriticalPoint_Base"],"StatValue":[[2150,2500],[80,200]],"Recipe":[[102004,35],[102002,20],[102001,15]],"RecipeCost":50000},{"Id":2005,"Category":"Gloves","Rarity":"N","Tier":6,"Icon":"equipment_icon_gloves_tier6","Shops":[],"Name":"Lace Gloves","Desc":"Luxuriously designed gloves made of satin. Be careful when handling fire as they're sensitive to heat.","IsReleased":[true,true,false],"StatType":["AttackPower_Coefficient","CriticalPoint_Base","AccuracyPoint_Base"],"StatValue":[[2600,3000],[210,300],[10,30]],"Recipe":[[102005,40],[102003,15],[102002,5]],"RecipeCost":75000},{"Id":2006,"Category":"Gloves","Rarity":"N","Tier":7,"Icon":"equipment_icon_gloves_tier7","Shops":[],"Name":"Arm Warmers","Desc":"Arm warmers to keep your arms warm and look cool. Great item for the cool seasons.","IsReleased":[true,true,false],"StatType":["AttackPower_Coefficient","CriticalPoint_Base","AccuracyPoint_Base"],"StatValue":[[3100,3500],[300,350],[50,200]],"Recipe":[[102006,40],[102004,15],[102003,5]],"RecipeCost":100000},{"Id":2007,"Category":"Gloves","Rarity":"N","Tier":8,"Icon":"equipment_icon_gloves_tier8","Shops":[],"Name":"Pearl Yarn Gloves","Desc":"Yarn gloves with a pearl decoration. The gloves are fingerless, so there's no problem wearing them while doing delicate work.","IsReleased":[true,false,false],"StatType":["AttackPower_Coefficient","CriticalPoint_Base","AccuracyPoint_Base"],"StatValue":[[3600,4000],[350,370],[200,220]],"Recipe":[[102007,40],[102005,15],[102004,5]],"RecipeCost":125000},{"Id":3000,"Category":"Shoes","Rarity":"N","Tier":1,"Icon":"equipment_icon_shoes_tier1","Shops":[],"Name":"Pink Sneakers","Desc":"Pink sneakers released by the sportswear brand Serval. They're suitable for running, thanks to the soft material used in the soles.","IsReleased":[true,true,true],"StatType":["AttackPower_Coefficient"],"StatValue":[[250,400]]},{"Id":3001,"Category":"Shoes","Rarity":"N","Tier":2,"Icon":"equipment_icon_shoes_tier2","Shops":[],"Name":"Shearling Boots","Desc":"Cold weather boots from the outdoor brand Manaslu. Their cute design and excellent thermal insulation make them popular with high school girls in cold regions.","IsReleased":[true,true,true],"StatType":["AttackPower_Coefficient"],"StatValue":[[500,650]],"Recipe":[[103001,15]],"RecipeCost":1500},{"Id":3002,"Category":"Shoes","Rarity":"N","Tier":3,"Icon":"equipment_icon_shoes_tier3","Shops":[],"Name":"Pinky-Paca Slippers","Desc":"Slippers made with the image of Pinky-Paca, the pink alpaca from Momo Friends. Soft and well-insulated.","IsReleased":[true,true,true],"StatType":["AttackPower_Coefficient"],"StatValue":[[750,900]],"Recipe":[[103002,20]],"RecipeCost":10000},{"Id":3003,"Category":"Shoes","Rarity":"N","Tier":4,"Icon":"equipment_icon_shoes_tier4","Shops":[],"Name":"Antique Enamel Loafers","Desc":"High-quality shoes worn by the students of Trinity General School. With an enamel paint finish, these shoes shine in the light.","IsReleased":[true,true,true],"StatType":["AttackPower_Coefficient","MaxHP_Coefficient"],"StatValue":[[1000,1250],[300,600]],"Recipe":[[103003,30],[103001,10]],"RecipeCost":25000},{"Id":3004,"Category":"Shoes","Rarity":"N","Tier":5,"Icon":"equipment_icon_shoes_tier5","Shops":[],"Name":"Tactical Boots","Desc":"Heavy and rugged tactical boots for protecting your feet. Their thick soles also have the added benefit of increasing your height, making them a popular choice for shorter students.","IsReleased":[true,true,true],"StatType":["AttackPower_Coefficient","MaxHP_Coefficient"],"StatValue":[[1500,2000],[650,900]],"Recipe":[[103004,35],[103002,20],[103001,15]],"RecipeCost":50000},{"Id":3005,"Category":"Shoes","Rarity":"N","Tier":6,"Icon":"equipment_icon_shoes_tier6","Shops":[],"Name":"Heeled Pumps","Desc":"High heels with cute ankle straps. They add elegance and sophistication to every step.","IsReleased":[true,true,false],"StatType":["AttackPower_Coefficient","MaxHP_Coefficient"],"StatValue":[[2100,2500],[950,1200]],"Recipe":[[103005,40],[103003,15],[103002,5]],"RecipeCost":75000},{"Id":3006,"Category":"Shoes","Rarity":"N","Tier":7,"Icon":"equipment_icon_shoes_tier7","Shops":[],"Name":"Casual Sneakers","Desc":"Neat sneakers. Preferred by active students thanks to their light weight.","IsReleased":[true,true,false],"StatType":["AttackPower_Coefficient","MaxHP_Coefficient"],"StatValue":[[2600,3000],[1200,1350]],"Recipe":[[103006,40],[103004,15],[103003,5]],"RecipeCost":100000},{"Id":3007,"Category":"Shoes","Rarity":"N","Tier":8,"Icon":"equipment_icon_shoes_tier8","Shops":[],"Name":"Waterproof Hiking Boots","Desc":"Breathable and durable hiking boots made of natural rubber with a waterproof coating. Even if they fall in water, the surface will not get wet.","IsReleased":[true,false,false],"StatType":["AttackPower_Coefficient","MaxHP_Coefficient"],"StatValue":[[3100,3500],[1350,1500]],"Recipe":[[103007,40],[103005,15],[103004,5]],"RecipeCost":125000},{"Id":4000,"Category":"Bag","Rarity":"N","Tier":1,"Icon":"equipment_icon_bag_tier1","Shops":[],"Name":"Waterproof Sports Bag","Desc":"A waterproof sports bag made by Serval. Safe to take into the river or ocean.","IsReleased":[true,true,true],"StatType":["MaxHP_Base"],"StatValue":[[375,600]]},{"Id":4001,"Category":"Bag","Rarity":"N","Tier":2,"Icon":"equipment_icon_bag_tier2","Shops":[],"Name":"Insulated Messenger Bag","Desc":"A messenger bag for cold weather made by Manaslu. Its thick lining keeps lunch boxes and drinks warm.","IsReleased":[true,true,true],"StatType":["MaxHP_Base"],"StatValue":[[750,975]],"Recipe":[[104001,15]],"RecipeCost":1500},{"Id":4002,"Category":"Bag","Rarity":"N","Tier":3,"Icon":"equipment_icon_bag_tier3","Shops":[],"Name":"Peroro Backpack","Desc":"A backpack with a giant Peroro print. It's quite roomy and very popular, even among those who aren't Peroro fans.","IsReleased":[true,true,true],"StatType":["MaxHP_Base"],"StatValue":[[1125,1350]],"Recipe":[[104002,20]],"RecipeCost":10000},{"Id":4003,"Category":"Bag","Rarity":"N","Tier":4,"Icon":"equipment_icon_bag_tier4","Shops":[],"Name":"Dark Blue School Bag","Desc":"A dark blue school bag made in adherence to the rules of Trinity General School. Also popular with students from other academies thanks to its simple and luxurious design.","IsReleased":[true,true,true],"StatType":["MaxHP_Base","DefensePower_Base"],"StatValue":[[1500,1875],[500,1000]],"Recipe":[[104003,30],[104001,10]],"RecipeCost":25000},{"Id":4004,"Category":"Bag","Rarity":"N","Tier":5,"Icon":"equipment_icon_bag_tier5","Shops":[],"Name":"Tactical Satchel","Desc":"A special Kazeyama satchel with enhanced functionality and storage. A popular choice among students who carry a lot of secondary weapons.","IsReleased":[true,true,true],"StatType":["MaxHP_Base","DefensePower_Base"],"StatValue":[[2500,3500],[1000,1100]],"Recipe":[[104004,35],[104002,20],[104001,15]],"RecipeCost":50000},{"Id":4005,"Category":"Bag","Rarity":"N","Tier":6,"Icon":"equipment_icon_bag_tier6","Shops":[],"Name":"Devil Wing Tote Bag","Desc":"A tote bag with large devil wings. Goes well with any casual attire thanks to its simple design.","IsReleased":[true,true,false],"StatType":["MaxHP_Base","DefensePower_Base"],"StatValue":[[3750,5500],[1100,1200]],"Recipe":[[104005,40],[104003,15],[104002,5]],"RecipeCost":75000},{"Id":4006,"Category":"Bag","Rarity":"N","Tier":7,"Icon":"equipment_icon_bag_tier7","Shops":[],"Name":"Street Bag","Desc":"A practical street bag with a casual look. Thanks to its ample space, many students love this bag.","IsReleased":[true,true,false],"StatType":["MaxHP_Base","DefensePower_Base"],"StatValue":[[5700,7500],[1200,1300]],"Recipe":[[104006,40],[104004,15],[104003,5]],"RecipeCost":100000},{"Id":4007,"Category":"Bag","Rarity":"N","Tier":8,"Icon":"equipment_icon_bag_tier8","Shops":[],"Name":"Butterfly Shoulder Bag","Desc":"A shoulder bag with a big butterfly printed on it. The lightweight material makes it easy to carry while traveling.","IsReleased":[true,false,false],"StatType":["MaxHP_Base","DefensePower_Base"],"StatValue":[[7700,9500],[1300,1400]],"Recipe":[[104007,40],[104005,15],[104004,5]],"RecipeCost":125000},{"Id":5000,"Category":"Badge","Rarity":"N","Tier":1,"Icon":"equipment_icon_badge_tier1","Shops":[],"Name":"Serval Metal Badge","Desc":"A metal badge printed with the logo of the famous sportswear brand Serval. Made of strong metal, there's no need to worry about scratches.","IsReleased":[true,true,true],"StatType":["MaxHP_Base"],"StatValue":[[500,800]]},{"Id":5001,"Category":"Badge","Rarity":"N","Tier":2,"Icon":"equipment_icon_badge_tier2","Shops":[],"Name":"Manaslu Felt Badge","Desc":"A felt badge with the logo of Manaslu, an outdoor brand. Made of soft felt, it goes well with cold weather products.","IsReleased":[true,true,true],"StatType":["MaxHP_Base"],"StatValue":[[1000,1300]],"Recipe":[[105001,15]],"RecipeCost":1500},{"Id":5002,"Category":"Badge","Rarity":"N","Tier":3,"Icon":"equipment_icon_badge_tier3","Shops":[],"Name":"Angry Adelie Button","Desc":"A round badge featuring Angry Adelie from Momo Friends. If you stare at it for a long time, you'll feel aggravated somehow...","IsReleased":[true,true,true],"StatType":["MaxHP_Base"],"StatValue":[[1500,1800]],"Recipe":[[105002,20]],"RecipeCost":10000},{"Id":5003,"Category":"Badge","Rarity":"N","Tier":4,"Icon":"equipment_icon_badge_tier4","Shops":[],"Name":"Veronica Embroidered Badge","Desc":"A badge with the logo of the luxury brand Veronica embroidered onto it. It looks luxurious on any product, no matter where you place it.","IsReleased":[true,true,true],"StatType":["MaxHP_Base","HealEffectivenessRate_Base"],"StatValue":[[2000,2500],[500,1000]],"Recipe":[[105003,30],[105001,10]],"RecipeCost":25000},{"Id":5004,"Category":"Badge","Rarity":"N","Tier":5,"Icon":"equipment_icon_badge_tier5","Shops":[],"Name":"Kazeyama Patch","Desc":"A patch printed with the logo of military specialty brand Kazeyama. The velcro on the back makes it easy to attach and remove from clothing.","IsReleased":[true,true,true],"StatType":["MaxHP_Base","HealEffectivenessRate_Base","MaxHP_Coefficient"],"StatValue":[[3500,4500],[1200,2000],[500,1000]],"Recipe":[[105004,35],[105002,20],[105001,15]],"RecipeCost":50000},{"Id":5005,"Category":"Badge","Rarity":"N","Tier":6,"Icon":"equipment_icon_badge_tier6","Shops":[],"Name":"Coco Devil Silver Badge","Desc":"A silver badge imprinted with the logo of the gothic brand, Coco Devil. It can be worn like a brooch by using the safety pin on the back.","IsReleased":[true,true,false],"StatType":["MaxHP_Base","HealEffectivenessRate_Base","MaxHP_Coefficient"],"StatValue":[[4750,6500],[2200,3000],[1100,1800]],"Recipe":[[105005,40],[105003,15],[105002,5]],"RecipeCost":75000},{"Id":5006,"Category":"Badge","Rarity":"N","Tier":7,"Icon":"equipment_icon_badge_tier7","Shops":[],"Name":"Street Badge","Desc":"A badge released by the street fashion brand Triple Step. The company's logo is printed in large letters to show off the brand.","IsReleased":[true,true,false],"StatType":["MaxHP_Base","HealEffectivenessRate_Base","MaxHP_Coefficient","DodgePoint_Base"],"StatValue":[[6800,9500],[3000,3200],[1900,2200],[50,400]],"Recipe":[[105006,40],[105004,15],[105003,5]],"RecipeCost":100000},{"Id":5007,"Category":"Badge","Rarity":"N","Tier":8,"Icon":"equipment_icon_badge_tier8","Shops":[],"Name":"Lorelei Badge","Desc":"A badge released by the modern fashion brand Lorelei. Made of elaborately processed solid wood, the surface is smooth and has a pleasant scent.","IsReleased":[true,false,false],"StatType":["MaxHP_Base","HealEffectivenessRate_Base","MaxHP_Coefficient","DodgePoint_Base"],"StatValue":[[9700,12000],[3200,3400],[2250,2400],[410,450]],"Recipe":[[105007,40],[105005,15],[105004,5]],"RecipeCost":125000},{"Id":6000,"Category":"Hairpin","Rarity":"N","Tier":1,"Icon":"equipment_icon_hairpin_tier1","Shops":[],"Name":"Tennis Headband","Desc":"A tennis headband from Serval, a sportswear brand. It's made of a powerful moisture-absorbing material to handle sweating during exercise.","IsReleased":[true,true,true],"StatType":["MaxHP_Base"],"StatValue":[[250,400]]},{"Id":6001,"Category":"Hairpin","Rarity":"N","Tier":2,"Icon":"equipment_icon_hairpin_tier2","Shops":[],"Name":"Scrunchie","Desc":"A scrunchie made of a satin material with good elasticity. Make sure to tie your hair up with this scrunchie when eating hot soup!","IsReleased":[true,true,true],"StatType":["MaxHP_Base"],"StatValue":[[500,650]],"Recipe":[[106001,15]],"RecipeCost":1500},{"Id":6002,"Category":"Hairpin","Rarity":"N","Tier":3,"Icon":"equipment_icon_hairpin_tier3","Shops":[],"Name":"Momo Hairpin","Desc":"A hairpin with MomoTalk's peach-shaped charm. Rubbing the charm gives off a subtle peach scent.","IsReleased":[true,true,true],"StatType":["MaxHP_Base"],"StatValue":[[750,900]],"Recipe":[[106002,20]],"RecipeCost":10000},{"Id":6003,"Category":"Hairpin","Rarity":"N","Tier":4,"Icon":"equipment_icon_hairpin_tier4","Shops":[],"Name":"Winged Hairpin","Desc":"A hairpin with angel wings made by the luxury brand Veronica. Ironically, it's not very popular with Trinity students.","IsReleased":[true,true,true],"StatType":["MaxHP_Base","OppressionResist_Coefficient"],"StatValue":[[1000,1250],[500,1000]],"Recipe":[[106003,30],[106001,10]],"RecipeCost":25000},{"Id":6004,"Category":"Hairpin","Rarity":"N","Tier":5,"Icon":"equipment_icon_hairpin_tier5","Shops":[],"Name":"Multi-Purpose Hairpin","Desc":"A hairpin with a sharp end that can be used for a variety of purposes, including as a bottle opener or pocketknife. Just remember not to run your fingers through your hair on accident!","IsReleased":[true,true,true],"StatType":["MaxHP_Base","OppressionResist_Coefficient"],"StatValue":[[2000,3000],[1200,2000]],"Recipe":[[106004,35],[106002,20],[106001,15]],"RecipeCost":50000},{"Id":6005,"Category":"Hairpin","Rarity":"N","Tier":6,"Icon":"equipment_icon_hairpin_tier6","Shops":[],"Name":"Bat Hairpin","Desc":"A bat-shaped hairpin resembling a black ribbon. Whoever wears it takes on the charm of a devilish troublemaker.","IsReleased":[true,true,false],"StatType":["MaxHP_Base","OppressionResist_Coefficient"],"StatValue":[[3250,4500],[2200,2400]],"Recipe":[[106005,40],[106003,15],[106002,5]],"RecipeCost":75000},{"Id":6006,"Category":"Hairpin","Rarity":"N","Tier":7,"Icon":"equipment_icon_hairpin_tier7","Shops":[],"Name":"Calligraphy Hairpin","Desc":"A hairpin made of letters. Although the word itself doesn't mean anything, it attracts the attention of those who are fashion-conscious.","IsReleased":[true,true,false],"StatType":["MaxHP_Base","OppressionResist_Coefficient"],"StatValue":[[4700,6500],[2500,2800]],"Recipe":[[106006,40],[106004,15],[106003,5]],"RecipeCost":100000},{"Id":6007,"Category":"Hairpin","Rarity":"N","Tier":8,"Icon":"equipment_icon_hairpin_tier8","Shops":[],"Name":"Leaf Hairpin","Desc":"A hairpin in the shape of a leaf. A little difficult for everyday use, but good to wear on days when you're dressed up.","IsReleased":[true,false,false],"StatType":["MaxHP_Base","OppressionResist_Coefficient"],"StatValue":[[6700,8500],[2900,3200]],"Recipe":[[106007,40],[106005,15],[106004,5]],"RecipeCost":125000},{"Id":7000,"Category":"Charm","Rarity":"N","Tier":1,"Icon":"equipment_icon_charm_tier1","Shops":[],"Name":"Traffic Safety Amulet","Desc":"An amulet made to promote traffic safety. When you shake it, you can hear something metal rattling inside.","IsReleased":[true,true,true],"StatType":["CriticalChanceResistPoint_Base"],"StatValue":[[50,80]]},{"Id":7001,"Category":"Charm","Rarity":"N","Tier":2,"Icon":"equipment_icon_charm_tier2","Shops":[],"Name":"Heat Pack","Desc":"A palm-sized heat pack that radiates warmth when you rub it a few times and shake it. There is no amulet more useful than this in a frigid environment.","IsReleased":[true,true,true],"StatType":["CriticalChanceResistPoint_Base"],"StatValue":[[100,130]],"Recipe":[[107001,15]],"RecipeCost":1500},{"Id":7002,"Category":"Charm","Rarity":"N","Tier":3,"Icon":"equipment_icon_charm_tier3","Shops":[],"Name":"Peroro Feather","Desc":"An amulet made with large, white feathers. The source of the feathers is one of Momo Friends' most important trade secrets.","IsReleased":[true,true,true],"StatType":["CriticalChanceResistPoint_Base"],"StatValue":[[150,180]],"Recipe":[[107002,20]],"RecipeCost":10000},{"Id":7003,"Category":"Charm","Rarity":"N","Tier":4,"Icon":"equipment_icon_charm_tier4","Shops":[],"Name":"Cross","Desc":"A cross-shaped amulet favored by Trinity students. It also works well as an accessory to hang on a bag.","IsReleased":[true,true,true],"StatType":["CriticalChanceResistPoint_Base","CriticalDamageResistRate_Base"],"StatValue":[[200,250],[500,1000]],"Recipe":[[107003,30],[107001,10]],"RecipeCost":25000},{"Id":7004,"Category":"Charm","Rarity":"N","Tier":5,"Icon":"equipment_icon_charm_tier5","Shops":[],"Name":"Camo Daruma","Desc":"A camo-patterned Daruma plush. Blends in perfectly with all surroundings.","IsReleased":[true,true,false],"StatType":["CriticalChanceResistPoint_Base","CriticalDamageResistRate_Base","CriticalPoint_Base"],"StatValue":[[260,280],[1100,1500],[60,120]],"Recipe":[[107004,35],[107002,20],[107001,15]],"RecipeCost":50000},{"Id":7005,"Category":"Charm","Rarity":"N","Tier":6,"Icon":"equipment_icon_charm_tier6","Shops":[],"Name":"Voodoo Doll","Desc":"A cursed doll made with resentment for the target. Its resiliency to sharp needles makes it popular with craftsmen.","IsReleased":[true,true,false],"StatType":["CriticalChanceResistPoint_Base","CriticalDamageResistRate_Base","CriticalPoint_Base"],"StatValue":[[290,320],[1600,1800],[125,150]],"Recipe":[[107005,40],[107003,15],[107002,5]],"RecipeCost":75000},{"Id":7006,"Category":"Charm","Rarity":"N","Tier":7,"Icon":"equipment_icon_charm_tier7","Shops":[],"Name":"Portable Deodorant","Desc":"A fashionable but portable deodorant produced in collaboration with Seaside, a functional cosmetics manufacturer. It's now a trendy key ring accessory for students.","IsReleased":[true,true,false],"StatType":["CriticalChanceResistPoint_Base","CriticalDamageResistRate_Base","CriticalPoint_Base"],"StatValue":[[330,360],[1900,2100],[155,180]],"Recipe":[[107006,40],[107004,15],[107003,5]],"RecipeCost":100000},{"Id":7007,"Category":"Charm","Rarity":"N","Tier":8,"Icon":"equipment_icon_charm_tier8","Shops":[],"Name":"ドリームキャッチャー","Desc":"悪夢を消してくれるという呪術的な意味を持つものである。匂いを嗅ぐと、木特有の良い香りがする。","IsReleased":[true,false,false],"StatType":["CriticalChanceResistPoint_Base","CriticalDamageResistRate_Base","CriticalPoint_Base"],"StatValue":[[365,380],[2200,2400],[185,200]],"Recipe":[[107007,40],[107005,15],[107004,5]],"RecipeCost":125000},{"Id":8000,"Category":"Watch","Rarity":"N","Tier":1,"Icon":"equipment_icon_watch_tier1","Shops":[],"Name":"Waterproof Digital Watch","Desc":"A digital watch produced by the sportswear brand Serval. Because it's waterproof, there is no need to fear ruining it, even if you wear it while swimming.","IsReleased":[true,true,true],"StatType":["CriticalPoint_Base"],"StatValue":[[50,80]]},{"Id":8001,"Category":"Watch","Rarity":"N","Tier":2,"Icon":"equipment_icon_watch_tier2","Shops":[],"Name":"Leather Wristwatch","Desc":"A leather wristwatch made by the outdoor brand Manaslu. A warm lining prevents your wrist from getting cold.","IsReleased":[true,true,true],"StatType":["CriticalPoint_Base"],"StatValue":[[100,130]],"Recipe":[[108001,15]],"RecipeCost":1500},{"Id":8002,"Category":"Watch","Rarity":"N","Tier":3,"Icon":"equipment_icon_watch_tier3","Shops":[],"Name":"Wavecat Wristwatch","Desc":"A wristwatch featuring Wavecat, the cat character from Momo Friends. Wavecat's arms, which act as the clock hands, are twisted in a bizarre way.","IsReleased":[true,true,true],"StatType":["CriticalPoint_Base"],"StatValue":[[150,180]],"Recipe":[[108002,20]],"RecipeCost":10000},{"Id":8003,"Category":"Watch","Rarity":"N","Tier":4,"Icon":"equipment_icon_watch_tier4","Shops":[],"Name":"Antique Pocket Watch","Desc":"An antique pocket watch with the Veronica logo engraved on it. It's far less convenient to check the time with than a wristwatch, but remains popular as a fashion item.","IsReleased":[true,true,true],"StatType":["CriticalPoint_Base","CriticalDamageRate_Base"],"StatValue":[[200,250],[500,1000]],"Recipe":[[108003,30],[108001,10]],"RecipeCost":25000},{"Id":8004,"Category":"Watch","Rarity":"N","Tier":5,"Icon":"equipment_icon_watch_tier5","Shops":[],"Name":"Dustproof Leather Wristwatch","Desc":"A wristwatch from the military specialty brand Kazeyama. Its enhanced resistance to dust means you don't have to worry about it breaking down in harsh environments.","IsReleased":[true,true,false],"StatType":["CriticalPoint_Base","CriticalDamageRate_Base","MaxHP_Coefficient"],"StatValue":[[260,280],[1100,1500],[250,500]],"Recipe":[[108004,35],[108002,20],[108001,15]],"RecipeCost":50000},{"Id":8005,"Category":"Watch","Rarity":"N","Tier":6,"Icon":"equipment_icon_watch_tier6","Shops":[],"Name":"Gothic Leather Wristwatch","Desc":"A wristwatch with complicated patterns stitched on it. Goes well with classic clothing, but has the disadvantage of being difficult to read time with.","IsReleased":[true,true,false],"StatType":["CriticalPoint_Base","CriticalDamageRate_Base","MaxHP_Coefficient"],"StatValue":[[290,320],[1600,1800],[550,700]],"Recipe":[[108005,40],[108003,15],[108002,5]],"RecipeCost":75000},{"Id":8006,"Category":"Watch","Rarity":"N","Tier":7,"Icon":"equipment_icon_watch_tier7","Shops":[],"Name":"Street Fashion Wristwatch","Desc":"A street fashion wristwatch popular for its modern and cute design. Triple Step is selling it as a set with their matching bracelet as a marketing strategy.","IsReleased":[true,true,false],"StatType":["CriticalPoint_Base","CriticalDamageRate_Base","MaxHP_Coefficient"],"StatValue":[[330,360],[1900,2100],[750,900]],"Recipe":[[108006,40],[108004,15],[108003,5]],"RecipeCost":100000},{"Id":8007,"Category":"Watch","Rarity":"N","Tier":8,"Icon":"equipment_icon_watch_tier8","Shops":[],"Name":"ローレライの腕時計","Desc":"モダンファッションブランド「ローレライ」から発売された腕時計。木と革を使用した洗練されたデザインが独特な雰囲気を醸し出している。","IsReleased":[true,false,false],"StatType":["CriticalPoint_Base","CriticalDamageRate_Base","MaxHP_Coefficient"],"StatValue":[[370,400],[2200,2400],[950,1100]],"Recipe":[[108007,40],[108005,15],[108004,5]],"RecipeCost":125000},{"Id":9000,"Category":"Necklace","Rarity":"N","Tier":1,"Icon":"equipment_icon_necklace_tier1","Shops":[],"Name":"Bluetooth Necklace","Desc":"A Bluetooth necklace that can measure the wearer's body temperature and heart rate. Because it can easily and accurately measure the rate of exercise, it's popular with those who are trying to lose weight.","IsReleased":[true,true,true],"StatType":["HealPower_Coefficient","OppressionPower_Coefficient"],"StatValue":[[500,800],[500,800]]},{"Id":9001,"Category":"Necklace","Rarity":"N","Tier":2,"Icon":"equipment_icon_necklace_tier2","Shops":[],"Name":"Snowflake Pendant","Desc":"A silver pendant with a snowflake ornament on it. If you stare at the snowflake decoration for a long time, you'll start to feel a bit chilly.","IsReleased":[true,true,true],"StatType":["HealPower_Coefficient","OppressionPower_Coefficient"],"StatValue":[[1000,1300],[1000,1300]],"Recipe":[[109001,15]],"RecipeCost":1500},{"Id":9002,"Category":"Necklace","Rarity":"N","Tier":3,"Icon":"equipment_icon_necklace_tier3","Shops":[],"Name":"Nicholai Locket","Desc":"A locket bearing the face of Mr. Nicholai, a character from Momo Friends. A small space for storing photos opens when you press on his nose.","IsReleased":[true,true,true],"StatType":["HealPower_Coefficient","OppressionPower_Coefficient"],"StatValue":[[1500,1800],[1500,1800]],"Recipe":[[109002,20]],"RecipeCost":10000},{"Id":9003,"Category":"Necklace","Rarity":"N","Tier":4,"Icon":"equipment_icon_necklace_tier4","Shops":[],"Name":"Cross Choker","Desc":"A choker with a cross from the luxury brand Veronica. It's popular for its simple yet sophisticated style.","IsReleased":[true,true,true],"StatType":["HealPower_Coefficient","OppressionPower_Coefficient"],"StatValue":[[2000,2500],[2000,2500]],"Recipe":[[109003,30],[109001,10]],"RecipeCost":25000},{"Id":9004,"Category":"Necklace","Rarity":"N","Tier":5,"Icon":"equipment_icon_necklace_tier5","Shops":[],"Name":"Dog Tag","Desc":"A dog tag inscribed with the name and class year of the student wearing it. It has recently gained popularity as an accessory among high school girls.","IsReleased":[true,true,false],"StatType":["HealPower_Coefficient","OppressionPower_Coefficient","AttackPower_Coefficient"],"StatValue":[[2600,2800],[2600,2800],[250,400]],"Recipe":[[109004,35],[109002,20],[109001,15]],"RecipeCost":50000},{"Id":9005,"Category":"Necklace","Rarity":"N","Tier":6,"Icon":"equipment_icon_necklace_tier6","Shops":[],"Name":"Punk Choker","Desc":"A punk-inspired choker with spikes. The sharp tips make it difficult to nod while wearing it around your neck.","IsReleased":[true,true,false],"StatType":["HealPower_Coefficient","OppressionPower_Coefficient","AttackPower_Coefficient"],"StatValue":[[2900,3200],[2900,3200],[450,600]],"Recipe":[[109005,40],[109003,15],[109002,5]],"RecipeCost":75000},{"Id":9006,"Category":"Necklace","Rarity":"N","Tier":7,"Icon":"equipment_icon_necklace_tier7","Shops":[],"Name":"Chain Necklace","Desc":"A necklace made from a chain. Some say the rattling sound is pleasant, but others dislike how cold it is to the touch. ","IsReleased":[true,true,false],"StatType":["HealPower_Coefficient","OppressionPower_Coefficient","AttackPower_Coefficient"],"StatValue":[[3300,3500],[3300,3500],[650,800]],"Recipe":[[109006,40],[109004,15],[109003,5]],"RecipeCost":100000},{"Id":9007,"Category":"Necklace","Rarity":"N","Tier":8,"Icon":"equipment_icon_necklace_tier8","Shops":[],"Name":"グリーンリーフネックレス","Desc":"モダンファッションブランド「ローレライ」から発売されたネックレス。 光を受けると葉っぱにほのかな光沢が出るという。","IsReleased":[true,false,false],"StatType":["HealPower_Coefficient","OppressionPower_Coefficient","AttackPower_Coefficient"],"StatValue":[[3600,3800],[3600,3800],[850,1000]],"Recipe":[[109007,40],[109005,15],[109004,5]],"RecipeCost":125000},{"Id":101001,"Category":"Hat","Rarity":"N","Tier":2,"Icon":"equipment_icon_hat_tier2_piece","Shops":[],"Name":"Knitted Wool Hat Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,true],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":101002,"Category":"Hat","Rarity":"N","Tier":3,"Icon":"equipment_icon_hat_tier3_piece","Shops":[],"Name":"Big Brother Fedora Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,true],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":101003,"Category":"Hat","Rarity":"N","Tier":4,"Icon":"equipment_icon_hat_tier4_piece","Shops":[],"Name":"Ribbon Beret Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,true],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":101004,"Category":"Hat","Rarity":"N","Tier":5,"Icon":"equipment_icon_hat_tier5_piece","Shops":[],"Name":"Bulletproof Helmet Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,true],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":101005,"Category":"Hat","Rarity":"N","Tier":6,"Icon":"equipment_icon_hat_tier6_piece","Shops":[],"Name":"Frilly Mini Hat Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":101006,"Category":"Hat","Rarity":"N","Tier":7,"Icon":"equipment_icon_hat_tier7_piece","Shops":[],"Name":"Bucket Hat Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":101007,"Category":"Hat","Rarity":"N","Tier":8,"Icon":"equipment_icon_hat_tier8_piece","Shops":[],"Name":"Leaf Ribbon Fedora Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,false,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":102001,"Category":"Gloves","Rarity":"N","Tier":2,"Icon":"equipment_icon_gloves_tier2_piece","Shops":[],"Name":"Knitted Mittens Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,true],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":102002,"Category":"Gloves","Rarity":"N","Tier":3,"Icon":"equipment_icon_gloves_tier3_piece","Shops":[],"Name":"Peroro Oven Mitts Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,true],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":102003,"Category":"Gloves","Rarity":"N","Tier":4,"Icon":"equipment_icon_gloves_tier4_piece","Shops":[],"Name":"Leather Gloves Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,true],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":102004,"Category":"Gloves","Rarity":"N","Tier":5,"Icon":"equipment_icon_gloves_tier5_piece","Shops":[],"Name":"Tactical Gloves Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,true],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":102005,"Category":"Gloves","Rarity":"N","Tier":6,"Icon":"equipment_icon_gloves_tier6_piece","Shops":[],"Name":"Lace Gloves Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":102006,"Category":"Gloves","Rarity":"N","Tier":7,"Icon":"equipment_icon_gloves_tier7_piece","Shops":[],"Name":"Arm Warmers Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":102007,"Category":"Gloves","Rarity":"N","Tier":8,"Icon":"equipment_icon_gloves_tier8_piece","Shops":[],"Name":"Pearl Yarn Gloves Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,false,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":103001,"Category":"Shoes","Rarity":"N","Tier":2,"Icon":"equipment_icon_shoes_tier2_piece","Shops":[],"Name":"Shearling Boots Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,true],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":103002,"Category":"Shoes","Rarity":"N","Tier":3,"Icon":"equipment_icon_shoes_tier3_piece","Shops":[],"Name":"Pinky-Paca Slippers Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,true],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":103003,"Category":"Shoes","Rarity":"N","Tier":4,"Icon":"equipment_icon_shoes_tier4_piece","Shops":[],"Name":"Antique Enamel Loafers Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,true],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":103004,"Category":"Shoes","Rarity":"N","Tier":5,"Icon":"equipment_icon_shoes_tier5_piece","Shops":[],"Name":"Tactical Boots Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,true],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":103005,"Category":"Shoes","Rarity":"N","Tier":6,"Icon":"equipment_icon_shoes_tier6_piece","Shops":[],"Name":"Heeled Pumps Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":103006,"Category":"Shoes","Rarity":"N","Tier":7,"Icon":"equipment_icon_shoes_tier7_piece","Shops":[],"Name":"Casual Sneakers Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":103007,"Category":"Shoes","Rarity":"N","Tier":8,"Icon":"equipment_icon_shoes_tier8_piece","Shops":[],"Name":"Waterproof Hiking Boots Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,false,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":104001,"Category":"Bag","Rarity":"N","Tier":2,"Icon":"equipment_icon_bag_tier2_piece","Shops":[],"Name":"Insulated Messenger Bag Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,true],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":104002,"Category":"Bag","Rarity":"N","Tier":3,"Icon":"equipment_icon_bag_tier3_piece","Shops":[],"Name":"Peroro Backpack Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,true],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":104003,"Category":"Bag","Rarity":"N","Tier":4,"Icon":"equipment_icon_bag_tier4_piece","Shops":[],"Name":"Dark Blue School Bag Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,true],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":104004,"Category":"Bag","Rarity":"N","Tier":5,"Icon":"equipment_icon_bag_tier5_piece","Shops":[],"Name":"Tactical Satchel Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,true],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":104005,"Category":"Bag","Rarity":"N","Tier":6,"Icon":"equipment_icon_bag_tier6_piece","Shops":[],"Name":"Devil Wing Tote Bag Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":104006,"Category":"Bag","Rarity":"N","Tier":7,"Icon":"equipment_icon_bag_tier7_piece","Shops":[],"Name":"Street Bag Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":104007,"Category":"Bag","Rarity":"N","Tier":8,"Icon":"equipment_icon_bag_tier8_piece","Shops":[],"Name":"Butterfly Shoulder Bag Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,false,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":105001,"Category":"Badge","Rarity":"N","Tier":2,"Icon":"equipment_icon_badge_tier2_piece","Shops":[],"Name":"Manaslu Felt Badge Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,true],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":105002,"Category":"Badge","Rarity":"N","Tier":3,"Icon":"equipment_icon_badge_tier3_piece","Shops":[],"Name":"Angry Adelie Button Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,true],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":105003,"Category":"Badge","Rarity":"N","Tier":4,"Icon":"equipment_icon_badge_tier4_piece","Shops":[],"Name":"Veronica Embroidered Badge Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,true],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":105004,"Category":"Badge","Rarity":"N","Tier":5,"Icon":"equipment_icon_badge_tier5_piece","Shops":[],"Name":"Kazeyama Patch Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,true],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":105005,"Category":"Badge","Rarity":"N","Tier":6,"Icon":"equipment_icon_badge_tier6_piece","Shops":[],"Name":"Coco Devil Silver Badge Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":105006,"Category":"Badge","Rarity":"N","Tier":7,"Icon":"equipment_icon_badge_tier7_piece","Shops":[],"Name":"Street Badge Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":105007,"Category":"Badge","Rarity":"N","Tier":8,"Icon":"equipment_icon_badge_tier8_piece","Shops":[],"Name":"Lorelei Badge Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,false,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":106001,"Category":"Hairpin","Rarity":"N","Tier":2,"Icon":"equipment_icon_hairpin_tier2_piece","Shops":[],"Name":"Scrunchie Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,true],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":106002,"Category":"Hairpin","Rarity":"N","Tier":3,"Icon":"equipment_icon_hairpin_tier3_piece","Shops":[],"Name":"Momo Hairpin Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,true],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":106003,"Category":"Hairpin","Rarity":"N","Tier":4,"Icon":"equipment_icon_hairpin_tier4_piece","Shops":[],"Name":"Winged Hairpin Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,true],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":106004,"Category":"Hairpin","Rarity":"N","Tier":5,"Icon":"equipment_icon_hairpin_tier5_piece","Shops":[],"Name":"Multi-Purpose Hairpin Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,true],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":106005,"Category":"Hairpin","Rarity":"N","Tier":6,"Icon":"equipment_icon_hairpin_tier6_piece","Shops":[],"Name":"Bat Hairpin Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":106006,"Category":"Hairpin","Rarity":"N","Tier":7,"Icon":"equipment_icon_hairpin_tier7_piece","Shops":[],"Name":"Calligraphy Hairpin Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":106007,"Category":"Hairpin","Rarity":"N","Tier":8,"Icon":"equipment_icon_hairpin_tier8_piece","Shops":[],"Name":"Leaf Hairpin Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,false,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":107001,"Category":"Charm","Rarity":"N","Tier":2,"Icon":"equipment_icon_charm_tier2_piece","Shops":[],"Name":"Heat Pack Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,true],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":107002,"Category":"Charm","Rarity":"N","Tier":3,"Icon":"equipment_icon_charm_tier3_piece","Shops":[],"Name":"Peroro Feather Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,true],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":107003,"Category":"Charm","Rarity":"N","Tier":4,"Icon":"equipment_icon_charm_tier4_piece","Shops":[],"Name":"Cross Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,true],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":107004,"Category":"Charm","Rarity":"N","Tier":5,"Icon":"equipment_icon_charm_tier5_piece","Shops":[],"Name":"Camo Daruma Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":107005,"Category":"Charm","Rarity":"N","Tier":6,"Icon":"equipment_icon_charm_tier6_piece","Shops":[],"Name":"Voodoo Doll Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":107006,"Category":"Charm","Rarity":"N","Tier":7,"Icon":"equipment_icon_charm_tier7_piece","Shops":[],"Name":"Portable Deodorant Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":107007,"Category":"Charm","Rarity":"N","Tier":8,"Icon":"equipment_icon_charm_tier8_piece","Shops":[],"Name":"ドリームキャッチャーの設計図","Desc":"装備を作ることができる図面。","IsReleased":[true,false,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":108001,"Category":"Watch","Rarity":"N","Tier":2,"Icon":"equipment_icon_watch_tier2_piece","Shops":[],"Name":"Leather Wristwatch Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,true],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":108002,"Category":"Watch","Rarity":"N","Tier":3,"Icon":"equipment_icon_watch_tier3_piece","Shops":[],"Name":"Wavecat Wristwatch Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,true],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":108003,"Category":"Watch","Rarity":"N","Tier":4,"Icon":"equipment_icon_watch_tier4_piece","Shops":[],"Name":"Antique Pocket Watch Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,true],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":108004,"Category":"Watch","Rarity":"N","Tier":5,"Icon":"equipment_icon_watch_tier5_piece","Shops":[],"Name":"Dustproof Leather Wristwatch Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":108005,"Category":"Watch","Rarity":"N","Tier":6,"Icon":"equipment_icon_watch_tier6_piece","Shops":[],"Name":"Gothic Leather Wristwatch Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":108006,"Category":"Watch","Rarity":"N","Tier":7,"Icon":"equipment_icon_watch_tier7_piece","Shops":[],"Name":"Street Fashion Wristwatch Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":108007,"Category":"Watch","Rarity":"N","Tier":8,"Icon":"equipment_icon_watch_tier8_piece","Shops":[],"Name":"ローレライの腕時計の設計図","Desc":"装備を作ることができる図面。","IsReleased":[true,false,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":109001,"Category":"Necklace","Rarity":"N","Tier":2,"Icon":"equipment_icon_necklace_tier2_piece","Shops":[],"Name":"Snowflake Pendant Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,true],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":109002,"Category":"Necklace","Rarity":"N","Tier":3,"Icon":"equipment_icon_necklace_tier3_piece","Shops":[],"Name":"Nicholai Locket Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,true],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":109003,"Category":"Necklace","Rarity":"N","Tier":4,"Icon":"equipment_icon_necklace_tier4_piece","Shops":[],"Name":"Cross Choker Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,true],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":109004,"Category":"Necklace","Rarity":"N","Tier":5,"Icon":"equipment_icon_necklace_tier5_piece","Shops":[],"Name":"Dog Tag Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":109005,"Category":"Necklace","Rarity":"N","Tier":6,"Icon":"equipment_icon_necklace_tier6_piece","Shops":[],"Name":"Punk Choker Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":109006,"Category":"Necklace","Rarity":"N","Tier":7,"Icon":"equipment_icon_necklace_tier7_piece","Shops":[],"Name":"Chain Necklace Blueprint","Desc":"A blueprint for creating equipment.","IsReleased":[true,true,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]},{"Id":109007,"Category":"Necklace","Rarity":"N","Tier":8,"Icon":"equipment_icon_necklace_tier8_piece","Shops":[],"Name":"グリーンリーフネックレスの設計図","Desc":"装備を作ることができる図面。","IsReleased":[true,false,false],"StatType":["AttackPower_Base"],"StatValue":[[1,1]]}]
}

/**
 * Represents a set of character stats
 */
class CharacterStats {
    constructor(character, level, stargrade, transcendence=[], statGrowthType='Standard') {
        this.stats = {}

        if (transcendence.length == 0) {
            transcendence = [[0, 1000, 1200, 1400, 1700], [0, 500, 700, 900, 1400], [0, 750, 1000, 1200, 1500]]
        }

        let transcendenceAttack = 1
        let transcendenceHP = 1
        let transcendenceHeal = 1

        for (let i = 0; i < stargrade; i++) {
            transcendenceAttack += transcendence[0][i] / 10000
            transcendenceHP += transcendence[1][i] / 10000
            transcendenceHeal += transcendence[2][i] / 10000
        }

        let MaxHP = CharacterStats.interpolateStat(character.MaxHP1, character.MaxHP100, level, transcendenceHP, statGrowthType)
        let AttackPower = CharacterStats.interpolateStat(character.AttackPower1, character.AttackPower100, level, transcendenceAttack, statGrowthType)
        let DefensePower = CharacterStats.interpolateStat(character.DefensePower1, character.DefensePower100, level, 1, statGrowthType)
        let HealPower = CharacterStats.interpolateStat(character.HealPower1, character.HealPower100, level, transcendenceHeal, statGrowthType) 

        let DefensePenetration = 0
        if (character.DefensePenetration100 !== undefined) {
            DefensePenetration = CharacterStats.interpolateStat(character.DefensePenetration1, character.DefensePenetration100, level, 1, statGrowthType)
        }

        this.level = level
        this.terrain = {
            Street: character.StreetBattleAdaptation !== undefined ? character.StreetBattleAdaptation : 2,
            Outdoor: character.OutdoorBattleAdaptation !== undefined ? character.OutdoorBattleAdaptation : 2,
            Indoor: character.IndoorBattleAdaptation !== undefined ? character.IndoorBattleAdaptation : 2
        }

        this.activeBuffs = {}
        this.bulletType = character.BulletType
        this.armorType = character.ArmorType
        this.equipment = character.Equipment ? character.Equipment : []

        this.stats['MaxHP'] = [MaxHP,0,1,0]
        this.stats['AttackPower'] = [AttackPower,0,1,0]
        this.stats['DefensePower'] = [DefensePower,0,1,0]
        this.stats['HealPower'] = [HealPower,0,1,0]
        this.stats['AccuracyPoint'] = [character.AccuracyPoint,0,1,0]
        this.stats['DodgePoint'] = [character.DodgePoint,0,1,0]
        this.stats['CriticalPoint'] = [character.CriticalPoint,0,1,0]
        this.stats['CriticalDamageRate'] = [character.CriticalDamageRate,0,1,0]
        this.stats['CriticalChanceResistPoint'] = [character.CriticalResistPoint !== undefined ? character.CriticalResistPoint : 100,0,1,0]
        this.stats['CriticalDamageResistRate'] = [character.CriticalDamageResistRate !== undefined ? character.CriticalDamageResistRate : 5000,0,1,0]
        this.stats['StabilityPoint'] = [character.StabilityPoint,0,1,0]
        this.stats['StabilityRate'] = [character.StabilityRate !== undefined ? character.StabilityRate : 2000, 0,1,0]
        this.stats['AmmoCount'] = [character.AmmoCount,0,1,0]
        this.stats['AmmoCost'] = [character.AmmoCost,0,1,0]
        this.stats['Range'] = [character.Range,0,1,0]
        this.stats['RegenCost'] = [character.RegenCost,0,1,0]
        this.stats['DamageRatio'] = [character.DamageRatio !== undefined ? character.DamageRatio : 10000,0,1,0]
        this.stats['DamagedRatio'] = [character.DamagedRatio !== undefined ? character.DamagedRatio : 10000,0,1,0]
        this.stats['HealEffectivenessRate'] = [10000,0,1,0]
        this.stats['OppressionPower'] = [character.OppressionPower !== undefined ? character.OppressionPower : 100,0,1,0]
        this.stats['OppressionResist'] = [character.OppressionResist !== undefined ? character.OppressionResist : 100,0,1,0]
        this.stats['AttackSpeed'] = [10000,0,1,0]
        this.stats['BlockRate'] = [0,0,1,0]
        this.stats['DefensePenetration'] = [DefensePenetration,0,1,0]
        this.stats['MoveSpeed'] = [character.MoveSpeed ? character.MoveSpeed : 200,0,1,0]
        this.stats['EnhanceExplosionRate'] = [10000,0,1,0]
        this.stats['EnhancePierceRate'] = [10000,0,1,0]
        this.stats['EnhanceMysticRate'] = [10000,0,1,0]
        this.stats['ExtendBuffDuration'] = [10000,0,1,0]
        this.stats['ExtendDebuffDuration'] = [10000,0,1,0]
        this.stats['ExtendCCDuration'] = [10000,0,1,0]
    }

    addBuff(stat, amount, separatedFlat = false) {
        let stat_split = stat.split('_')
        if (stat_split.length > 1) {
            if (stat_split[1] == "Base") {

                if (separatedFlat) {
                    this.stats[stat_split[0]][3] += amount
                } else {
                    this.stats[stat_split[0]][1] += amount
                }
                
            } else if (stat_split[1] == "Coefficient") {
                this.stats[stat_split[0]][2] += amount/10000
            }
        } else {
            this.stats[stat_split[0]][1] += amount
        }
    }

    /**
     * Adds the specified stat from another instance of CharacterStats as a flat buff
     * @param {CharacterStats} chStats the instance of CharacterStats to add from
     * @param {*} stat the name of the stat to add
     * @param {*} coefficient the amount of the stat to add
     */
    addCharacterStatsAsBuff(chStats, stat, coefficient) {
        this.stats[stat][1] += Math.round(chStats.getTotal(stat) * (coefficient/10000))
    }

    /**
     * Calculates the final total of a stat with all flat and percentage buffs
     * @param {string} stat The name of the stat
     * @returns 
     */
    getTotal(stat) {
        let applyBuffCap = true
        let allowNegative = false

        if (stat == "DamagedRatio") {
            applyBuffCap = false
            allowNegative = true
        }

        const statBase = this.stats[stat][0]
        const flatBonus = this.stats[stat][1]
        const coefficientBonus =  applyBuffCap ? Math.max(this.stats[stat][2], 0.2) : this.stats[stat][2]
        const nonMultiFlatBonus = this.stats[stat][3]

        const statTotal = Math.round(((statBase + flatBonus) * coefficientBonus).toFixed(4)) + nonMultiFlatBonus

        return allowNegative ? statTotal : Math.max(statTotal, 0)
    }

    /**
     * Calculates and returns the final total of a stat as a locale-formatted string
     * @param {*} stat 
     * @returns 
     */
    getTotalString(stat, formatStatCap = false) {
        let total = this.getTotal(stat)
        let result = ''
        if (stat == 'DamagedRatio') {
            result = ((total-10000)/100).toFixed(0).toLocaleString() + "%"
        } else if (CharacterStats.isRateStat(stat)) {
            result = (total/100).toFixed(0).toLocaleString() + "%"
        } else {
            result = total.toLocaleString()
        }
        if (stat != "DamagedRatio" && formatStatCap && this.stats[stat][2] <= 0.2) result = `<span class="stat-cap">${result}</span>`
        return result
    }

    /**
     * Returns the base stat as a locale-formatted string
     * @param {*} stat 
     * @returns 
     */
    getBaseString(stat) {
        let total = this.stats[stat][0]
        if (stat == 'DamagedRatio') {
            return Math.floor((total-10000)/100).toLocaleString() + "%"
        } else if (CharacterStats.isRateStat(stat)) {
            return (total/100).toFixed(0).toLocaleString() + "%"
        } else {
            return total.toLocaleString()
        }
    }

    setBase(stat, value) {
        this.stats[stat][0] = value
    }

    /**
     * Returns the flat buff as a locale-formatted string
     * @param {*} stat 
     * @returns 
     */
    getFlatString(stat) {
        const total = this.stats[stat][1] + this.stats[stat][3]
        const sign = total >= 0 ? '+' : ''
        return sign + total.toLocaleString()
    }

    /**
     * Returns the coefficient percent buff as a locale-formatted string
     * @param {*} stat 
     * @returns 
     */
    getCoefficientString(stat) {
        let val = (Math.max(this.stats[stat][2], 0.2) - 1) * 100
        const sign = (val >= 0) ? '+' : ''
        //hide decimal when > 100%
        val = (Math.abs(val) < 100) ? val.toFixed(1) : val.toFixed(0)
        return sign + parseFloat(val).toLocaleString() + "%"
    }

    getStrikerBonus(stat) {
        return Math.floor(this.getTotal(stat)*striker_bonus_coefficient[stat])
    }

    getStabilityMinDamageMod() {
        let stability =  this.getTotal('StabilityPoint')
        return MathHelper.clamp((stability / (stability + 1000)) + (this.getTotal('StabilityRate') / 10000), 0, 1)
    }

    getStabilityMinDamage() {
        return MathHelper.toFixedFloat(this.getStabilityMinDamageMod()*100, 2) + "%"
    }

    getDefenseDamageReductionMod(penetrationBase = 0, penetrationRate = 10000) {
        let defense =  Math.max((this.getTotal('DefensePower') - penetrationBase) * (penetrationRate / 10000), 0)
        return (10000000 / (defense * 6000 + 10000000))
    }

    getDefenseDamageReduction() {
        return parseFloat(((1 - this.getDefenseDamageReductionMod())*100).toFixed(2)) + "%"
    }

    getCriticalRate(critRes) {
        const crit = this.getTotal('CriticalPoint')
        return MathHelper.clamp(1 - (4000000 / (Math.max(crit - critRes, 0) * 6000 + 4000000)), 0, 1)
    }

    getCriticalHitChanceString(critRes) {
        return `${MathHelper.toFixedFloat(this.getCriticalRate(critRes)*100, 2)}%`
    }

    getHitChance(evade) {
        const hit = this.getTotal('AccuracyPoint')
        return MathHelper.clamp(700 / Math.max(evade - hit + 700, 700), 0, 1)
    }

    getHitChanceString(evade) {
        const hit = this.getTotal('AccuracyPoint')
        return `${MathHelper.toFixedFloat(this.getHitChance(evade)*100, 2)}%`
    }

    addActiveBuffIcon(stat, value, stacks = 1) {
        if (value == 0) return
        stat = stat.replace('_Coefficient','').replace('_Base','').replace('100','').replace('1','')
        let buffIconKey
        if (stat.startsWith('Special_')) {
            buffIconKey = stat
        } else {
            buffIconKey = `${(value > 0) ? 'Buff' : 'Debuff'}_${(stat in buffIconKeys) ? buffIconKeys[stat] : stat}`
        }
        if (buffIconKey in this.activeBuffs) {
            this.activeBuffs[buffIconKey] += stacks
        } else {
            this.activeBuffs[buffIconKey] = stacks
        }
    }

    static isRateStat(stat) {
        return stat.slice(-4) == "Rate" || stat.startsWith("AttackSpeed") || stat.startsWith("DamagedRatio")
    }

    static getTimeAttackLevelScale(level) {
        if (level <= 1) {
            return 0
        } else if (level == 2) {
            return 0.0101
        } else if (level <= 24) {
            return 0.0707
        } else if (level == 25) {
            return 0.0808
        } else if (level <= 39) {
            return 0.1919
        } else if (level == 40) {
            return 0.2020
        } else if (level <= 64) {
            return 0.4444
        } else if (level == 65) {
            return 0.4545
        } else if (level <= 77) {
            return 0.7172
        } else if (level == 78) {
            return 0.7273
        } else if (level >= 79) {
            return ((level-1)/99).toFixed(4)
        }
    }

    static interpolateStat(stat1, stat100, level, transcendence=1, statGrowthType='Standard') {
        let levelScale
        switch (statGrowthType) {
            case 'TimeAttack':
                levelScale = CharacterStats.getTimeAttackLevelScale(level)
                break
            case 'LateBloom':
            case 'Premature':
                levelScale = (level-1)/99
                break
            case 'Standard':
            default:
                levelScale = ((level-1)/99).toFixed(4)
                break
        }
        return Math.ceil((Math.round((stat1+(stat100-stat1)*levelScale).toFixed(4))*transcendence).toFixed(4))
    }

    /**
     * Calculates the maximum damage dealt to a target by this character
     * @param {CharacterStats} target 
     */
    calculateDamage(target, damageRate, sourceStat, terrain, isCrit, ignoreDef = 10000) {
        const totalAttack = this.getTotal(sourceStat)
        const damageRatio = this.getTotal('DamageRatio') / 10000
        const damagedRatio = (20000 - target.getTotal('DamagedRatio')) / 10000
        const levelMod = Math.max(Math.min(1 - (target.level - this.level) * 0.02, 1), 0.4)
        const defMod = target.getDefenseDamageReductionMod(this.getTotal('DefensePenetration'), ignoreDef)
        const terrainMod = 0.8 + this.terrain[terrain] * 0.1
        const effectiveMod = this.getEffectiveMod(target.armorType)
        const critMod = (this.getTotal('CriticalDamageRate') - target.getTotal('CriticalDamageResistRate')) / 10000
        return totalAttack * terrainMod * effectiveMod * (damageRate/10000) * defMod * damageRatio * damagedRatio * levelMod * (1 + (isCrit * (critMod - 1)))
    }

    calculateAccumulateDamageLimit(target, damageRate, sourceStat, terrain) {
        const totalAttack = this.getTotal(sourceStat)
        const levelMod = Math.max(Math.min(1 - (target.level - this.level) * 0.02, 1), 0.4)
        const terrainMod = 0.8 + this.terrain[terrain] * 0.1
        const effectiveMod = this.getEffectiveMod(target.armorType)
        return totalAttack * terrainMod * effectiveMod * (damageRate/10000) * levelMod
    }

    /**
     * Returns a string representing the minimum to maximum damage based on stability
     * @param {CharacterStats} target 
     */
    calculateDamageRange(target, damageRate, sourceStat, terrain, isCrit) {
        const maxDmg = this.calculateDamage(target, damageRate, sourceStat, terrain, isCrit)
        const minDmg = maxDmg * this.getStabilityMinDamageMod()
        return `${parseInt(minDmg).toLocaleString()} ~ ${parseInt(maxDmg).toLocaleString()}`
    }

    /**
     * Calculates the expected damage dealt by an attack
     * @param {*} target 
     * @param {*} damageRate 
     * @param {*} terrain 
     */
    calculateExpectedDamage(target, damageRate, sourceStat, terrain) {
        const critChance = this.getCriticalRate(target.getTotal("CriticalChanceResistPoint"))
        const critBonusMod = ((this.getTotal('CriticalDamageRate') - target.getTotal('CriticalDamageResistRate')) / 10000) - 1
        const baseDmgMax = this.calculateDamage(target, damageRate, sourceStat, terrain, 0)
        const critBonusDmgMax = baseDmgMax * critBonusMod
        const expDmgMax = baseDmgMax + (critBonusDmgMax * critChance)
        const expDmgMin = expDmgMax * this.getStabilityMinDamageMod()
        return parseInt((expDmgMin + expDmgMax) / 2).toLocaleString()
    }

    /**
     * Calculates the maximum damage dealt to a target by this character
     * @param {CharacterStats} target 
     */
    calculateHealing(healRate, recoveryRate = 10000) {
        const totalHeal = this.getTotal('HealPower')
        return parseInt(totalHeal * healRate * (recoveryRate/10000))
    }

    getEffectiveMod(armorType) {
        let effMod = data.config.TypeEffectiveness[this.bulletType][armorType]
        if (armorType == "Structure") return 1
        switch (this.bulletType) {
            case 'Explosion':
                if (armorType == 'LightArmor') {
                    effMod += (this.getTotal('EnhanceExplosionRate') - 10000)
                }
                break
            case 'Pierce':
                if (armorType == 'HeavyArmor') {
                    effMod += (this.getTotal('EnhancePierceRate') - 10000)
                }
                break
            case 'Mystic':
                if (armorType == 'Unarmed') {
                    effMod += (this.getTotal('EnhanceMysticRate') - 10000)
                }
                break
        }
        return effMod / 10000
    }

    addEquipmentBonuses(type, tier) {
        const equipment = find(data.equipment, "Id", gearId[type] + tier-1)[0]
        equipment.StatType.forEach((stat, index) => {
            this.addBuff(stat, equipment.StatValue[index][1])
        })
    }

    addGearBonuses(gear) {
        for (let i = 0; i < gear.StatType.length; i++) {
            this.addBuff(gear.StatType[i], gear.StatValue[i][1])
        }
    }

    addWeaponBonuses(weapon, level) {
        let levelscale = ((level-1)/99)
        if (weapon.StatLevelUpType == 'Standard') levelscale = levelscale.toFixed(4)
        this.addBuff("AttackPower_Base", Math.round(weapon.AttackPower1 + (weapon.AttackPower100-weapon.AttackPower1) * levelscale))
        this.addBuff("MaxHP_Base", Math.round(weapon.MaxHP1 + (weapon.MaxHP100-weapon.MaxHP1) * levelscale))
        this.addBuff("HealPower_Base", Math.round(weapon.HealPower1 + (weapon.HealPower100-weapon.HealPower1) * levelscale))
    }
}

class MathHelper {

    static clamp(value, min, max) {
        return Math.min(Math.max(value, min), max)
    }

    static toFixedFloat(value, maxPrecision) {
        return parseFloat((value).toFixed(maxPrecision))
    }

    static extractNumber(string) {
        let result = parseInt(string.replace(/[^0-9]/g))
        console.log(result)
        return isNaN(result) ? 0 : result
    }

    static formatDuration(seconds) {
        const minutes = Math.floor(seconds / 60)
        return `${minutes}:${`${seconds % 60}`.padStart(2, '0')}`
    }
}

function find(obj, key, value) {
    var result = [];

    obj.map((el, i) => {
        if (el[key] == value) {
            result.push(el)
        }
    });

    return result;
}

export default CharacterStats;