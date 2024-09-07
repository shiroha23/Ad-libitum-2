
ServerEvents.recipes(event => {
    
//统一箱子
    event.shaped('minecraft:chest',[
        'XXX',
        'X X',
        'XXX'
    ],{
        X:'#minecraft:planks'
    })

//统一工作台
    event.shapeless('minecraft:crafting_table',['#blue_skies:crafting_tables'])
    event.shapeless('minecraft:crafting_table',['#forge:workbench']) 
    
//统一书架
    event.shaped('minecraft:bookshelf',[
        'XXX',
        'YYY',
        'XXX'
    ],{
        X:'#minecraft:planks',
        Y:'minecraft:book'
    })

    event.shapeless('minecraft:bookshelf',['#forge:bookshelves'])

//机械动力
    //末影之眼批量缠魂为恶魂之泪
    event.custom({
      "type": "create:haunting",
      "ingredients": [
        {
          "item": "minecraft:ender_eye"
        }
      ],
      "results": [
        {
          "item": "minecraft:ghast_tear",
          "chance": 0.5
        }
      ]
    })

//移除煤炭烧制石墨
    event.remove({id: 'biggerreactors:smelting/graphite_ingot'})  
    event.remove({id: 'biggerreactors:blasting/graphite_ingot'})  

//石墨精华合成修改
    event.remove({id: 'mysticalagriculture:essence/common/graphite_ingot'})
    event.shaped('biggerreactors:graphite_ingot', [
        'XXX',
        'X X',
        'XXX'
    ], {
        X: 'mysticalagriculture:graphite_essence'
    })

//统一石墨/石墨粉
    event.shapeless('biggerreactors:graphite_ingot',['immersiveengineering:ingot_hop_graphite'])
    event.shapeless('immersiveengineering:ingot_hop_graphite',['biggerreactors:graphite_ingot'])
    event.shapeless('biggerreactors:graphite_dust',['immersiveengineering:dust_hop_graphite'])
    event.shapeless('immersiveengineering:dust_hop_graphite',['biggerreactors:graphite_dust'])

//统一橡胶
    event.shapeless('thermal:rubber',['techreborn:sap'])
    event.shapeless('techreborn:sap',['thermal:rubber'])
    event.shapeless('thermal:cured_rubber',['techreborn:rubber'])
    event.shapeless('techreborn:rubber',['thermal:cured_rubber'])

//橡胶精华合成科技复兴橡胶
    event.shaped(Item.of('techreborn:rubber', 8), [
        'X',
        'X',
        'X'
    ], {
        X: 'mysticalagriculture:rubber_essence'
    })

//通量方块
    event.remove({output:'fluxnetworks:flux_block'})
    event.shaped('fluxnetworks:flux_block',[
        'XXX',
        'XYX',
        'XXX'
    ],{
        X:'fluxnetworks:flux_dust',
        Y:'fluxnetworks:flux_core'
    })

  //输入
    event.remove({output:'fluxnetworks:flux_plug'})
    event.shaped('fluxnetworks:flux_plug',[
        ' X ',
        'XYX',
        ' X '
    ],{
        X:'#forge:ingots/hop_graphite',
        Y:'fluxnetworks:flux_core'
    })

//接入
    event.remove({output:'fluxnetworks:flux_point'})
    event.shaped('fluxnetworks:flux_point',[
        ' X ',
        'XYX',
        ' X '
    ],{
        X:'#forge:ingots/signalum',
        Y:'fluxnetworks:flux_core'
    })

//禁用烧铁得钢
    event.remove({id:'beyond_earth:steel_ingot_blasting'})

//神化宝石粉
    //粉碎轮-机械动力
    event.custom({
      "type": "create:crushing",
      "ingredients": [
        {
          "item": "apotheosis:gem"
        }
      ],
      "results": [
        {
          "item": "apotheosis:gem_dust"
        }
      ],
      "processingTime": 250
    })

    //粉碎机-沉浸工程
    event.custom({
      "type":"immersiveengineering:crusher",
      "secondaries":[],
      "result":{"count":1,"base_ingredient":{"item": "apotheosis:gem_dust"}},
      "input":{"item":"apotheosis:gem"},
      "energy":3000
    })


    //粉碎机-沉浸工程
    event.custom({
        "type":"immersiveengineering:crusher",
        "secondaries":[],
        "result":{"count":1,"base_ingredient":{"item": "ae2:ender_dust"}},
        "input":{"item":"minecraft:ender_pearl"},
        "energy":3000
      })


//附魔灌注台
    event.remove({id:'enchantinginfuser:enchanting_infuser'})
    event.shaped('enchantinginfuser:enchanting_infuser',[
        'ABA',
        'BCB',
        'DBD'
    ],{
        A:'minecraft:amethyst_block',
        B:'minecraft:netherite_ingot',
        C:'minecraft:enchanting_table',
        D:'minecraft:crying_obsidian'
    })

    event.remove({id:'enchantinginfuser:advanced_enchanting_infuser'})
    event.shaped('enchantinginfuser:advanced_enchanting_infuser',[
        'ABA',
        'BCB',
        'DBD'
    ],{
        A:'minecraft:netherite_block',
        B:'enigmaticlegacy:etherium_ingot',
        C:'enchantinginfuser:enchanting_infuser',
        D:'minecraft:crying_obsidian'
    })

//传送石
    event.remove({output: 'waystones:warp_stone'})
    event.shaped('waystones:warp_stone',[
        'ABA',
        'BCB',
        'ABA'
    ],{
        A:'minecraft:amethyst_shard',
        B:'waystones:warp_dust',
        C:'enigmaticlegacy:astral_dust'
    })


//下界合金装备分解
    event.custom({
        "type": "enderio:sag_milling",
        "energy": 16000,
        "input": {
          "tag": "forge:tools/netherite"
        },
        "outputs": [
          {
            "count": 1,
            "item": "minecraft:diamond"
          },
          {
            "count": 3,
            "item": "thermal:netherite_nugget"
          }
        ]
    })

    event.custom({
        "type": "enderio:sag_milling",
        "energy": 16000,
        "input": {
          "tag": "forge:armor/netherite"
        },
        "outputs": [
          {
            "count": 3,
            "item": "minecraft:diamond"
          },
          {
            "count": 3,
            "item": "thermal:netherite_nugget"
          }
        ]
    })

//EIO材料
    event.shaped('enderio:enderface_materials',[
        'ABA',
        'BCB',
        'ABA'
    ],{
        A:'enderio:octadic_capacitor',
        B:'enderio:weather_crystal',
        C:'enderio:z_logic_controller'
    })

//宝典
    event.shapeless(Item.of('akashictome:tome', '{RepairCost:1,"akashictome:data":{ad_astra:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"ad_astra:astrodux"}},ae2:{Count:1b,id:"ae2:guide"},aether:{Count:1b,id:"aether:book_of_lore"},alexscaves:{Count:1b,id:"alexscaves:cave_book"},alexsmobs:{Count:1b,id:"alexsmobs:animal_dictionary"},apotheosis:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"apotheosis:apoth_chronicle"}},ars_nouveau:{Count:1b,id:"ars_nouveau:worn_notebook"},betterend:{Count:1b,id:"betterend:guidebook"},botania:{Count:1b,id:"botania:lexicon"},edenring:{Count:1b,id:"edenring:guide_book"},enigmaticlegacy:{Count:1b,id:"enigmaticlegacy:the_acknowledgment"},extendedcrafting:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"extendedcrafting:guide"}},ftbquests:{Count:1b,id:"ftbquests:book"},goety:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"goety:witches_brew"}},goety_0:{Count:1b,id:"patchouli:guide_book",tag:{"akashictome:definedMod":"goety_0","patchouli:book":"goety:black_book"}},immersiveengineering:{Count:1b,id:"immersiveengineering:manual"},irons_spellbooks:{Count:1b,id:"patchouli:guide_book",tag:{"akashictome:displayName":{text:\'{"translate":"Iron\\\'s Guidebook"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"Iron\\\'s Guidebook"}]}\'},"patchouli:book":"irons_spellbooks:iss_guide_book"}},mysticalagriculture:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"mysticalagriculture:guide"}},occultism:{Count:1b,id:"occultism:dictionary_of_spirits",tag:{"modonomicon:book_id":"occultism:dictionary_of_spirits"}},patchouli:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"engineersdecor:engineersdecor_manual"}},productivebees:{Count:1b,id:"patchouli:guide_book",tag:{"akashictome:displayName":{text:\'{"translate":"Big Book of Bees"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"Big Book of Bees"}]}\'},"patchouli:book":"productivebees:guide"}},solcarrot:{Count:1b,id:"solcarrot:food_book"},techreborn:{Count:1b,id:"techreborn:manual"},thermal:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"thermal:guidebook"}},touhou_little_maid:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"touhou_little_maid:memorizable_gensokyo"}}},"akashictome:is_morphing":1b,display:{Name:\'{"text":"芝士宝典"}\'}}').enchant('minecraft:sharpness', 9).enchant('minecraft:impaling', 10).enchant('minecraft:soul_fire_aspect', 5).enchant('minecraft:looting', 8).enchant('apotheosis:capturing', 7).enchant('apotheosis:scavenger', 3).enchant('ensorcellation:vorpal', 8).enchant('ensorcellation:leech', 8).enchant('goety:soul_eater', 9).enchant('farmersdelight:backstabbing', 8).enchant('ensorcellation:frost_aspect', 5).enchant('enderio:withering', 1).enchant('enderio:xp_boost', 7).enchant('ensorcellation:xp_boost', 8).enchant('ars_nouveau:reactive', 8).enchant('mysticalagriculture:soul_siphoner', 9),['akashictome:tome','#candlelight:cheeses'])

//魔艺核心
    event.custom({
      "type": "ars_nouveau:enchanting_apparatus",
      "keepNbtOfReagent": false,
      "output": {
        "item": "ars_elemental:debug"
      },
      "pedestalItems": [
        {
          "item": "ars_elemental:fire_focus"
        },
        {
          "item": "ars_elemental:water_focus"
        },
        {
          "item": "ars_elemental:air_focus"
        },
        {
          "item": "ars_elemental:earth_focus"
        }
      ],
      "reagent": [
        {
          "item": "ars_elemental:necrotic_focus"
        }
      ],
      "sourceCost": 50000
    })

//注魔祭坛
    event.remove({id: 'mysticalagriculture:infusion_altar'})  
    event.shaped('mysticalagriculture:infusion_altar',[
        'ABA',
        ' C ',
        'CDC'
    ],{
        A:'#forge:ingots/gold',
        B:'minecraft:red_wool',
        C:'minecraft:stone',
        D:'mysticalagriculture:master_infusion_crystal'
    })

    event.remove({id: 'mysticalagriculture:awakening_altar'})  
    event.shaped('mysticalagriculture:awakening_altar',[
        'ABA',
        ' C ',
        'CDC'
    ],{
        A:'#forge:ingots/gold',
        B:'minecraft:orange_wool',
        C:'mysticalagriculture:soulstone',
        D:'mysticalagriculture:master_infusion_crystal'
    })

//禁用重复配方
    event.remove({id: 'techreborn:smelting/platinum_ingot_from_c_sheldonite_ores'}) 
    event.remove({id: 'techreborn:smelting/platinum_ingot_from_c_platinum_dusts'}) 
    event.remove({id: 'techreborn:crafting_table/ingot/lead_ingot_from_nugget'}) 
    event.remove({id: 'techreborn:crafting_table/ingot/lead_ingot_from_nugget'})
    event.remove({id: 'techreborn:smelting/lead_ingot_from_c_raw_lead_ores'})
    event.remove({id: 'techreborn:smelting/lead_ingot_from_c_lead_ores'})
    event.remove({id: 'techreborn:crafting_table/ingot/nickel_ingot_from_nugget'})
    event.remove({id: 'techreborn:smelting/nickel_ingot_from_c_nickel_dusts'})
    event.remove({id: 'techreborn:crafting_table/ingot/platinum_ingot_from_nugget'})
    event.remove({id: 'techreborn:crafting_table/ingot/silver_ingot_from_nugget'})
    event.remove({id: 'techreborn:smelting/silver_ingot_from_c_silver_ores'})
    event.remove({id: 'techreborn:smelting/silver_ingot_from_c_raw_silver_ores'})
    event.remove({id: 'techreborn:crafting_table/ingot/tin_ingot_from_nugget'})
    event.remove({id: 'techreborn:smelting/tin_ingot_from_c_raw_tin_ores'})
    event.remove({id: 'techreborn:smelting/tin_ingot_from_c_tin_ores'})
    event.remove({id: 'biggerreactors:smelting/uranium_chunk'})
    event.remove({id: 'biggerreactors:smelting/deepslate_uranium_ore'})
    event.remove({id: 'biggerreactors:smelting/uranium_dust'})
    event.remove({id: 'techreborn:crafting_table/ingot/zinc_ingot_from_nugget'})
    event.remove({id: 'techreborn:smelting/zinc_ingot_from_c_zinc_dusts'})
    event.remove({id: 'techreborn:crafting_table/ingot/iridium_ingot_from_nugget'})
      
    //创造之心
    event.smithing('enigmaticlegacy:enigmatic_item', 'enigmaticlegacy:the_cube', 'extendedcrafting:the_ultimate_ingot')

    event.custom({
      "type": "botania:orechid",
      "input": {
          "type": "block",
          "block": "minecraft:stone"
      },
      "output": {
          "type": "tag",
          "tag": "forge:ores_in_ground/stone"
      },
      "weight": 67415
  })
  //植物魔法凝矿兰
  event.custom({
      "type": "botania:orechid",
      "input": {
          "type": "block",
          "block": "minecraft:deepslate"
      },
      "output": {
          "type": "tag",
          "tag": "forge:ores_in_ground/deepslate"
      },
      "weight": 250
  })

  event.remove({type: 'botania:orechid_ignem'}) 
  event.custom({
      "type": "botania:orechid_ignem",
      "input": {
          "type": "tag",
          "tag": "botania:metamorphic_stone"
      },
      "output": {
          "type": "tag",
          "tag": "forge:ores"
      },
      "weight": 1
  })
  
  event.custom({
      "type": "botania:marimorphosis",
      "biome_bonus": 11,
      "biome_bonus_tag": "",
      "input": {
          "type": "tag",
          "tag": "forge:ores"
      },
      "output": {
          "type": "tag",
          "tag": "forge:ores"
      },
      "weight": 1
  })

    //ae2电路板
    event.remove({id: 'ae2:inscriber/logic_processor_print'})
    event.remove({id: 'ae2:inscriber/calculation_processor_print'})
    event.remove({id: 'ae2:inscriber/engineering_processor_print'})

    event.custom({
      "type": "ae2:inscriber",
      "ingredients": {
        "middle": {
          "item": "ad_astra:desh_plate"
        },
        "top": {
          "item": "ae2:logic_processor_press"
        }
      },
      "mode": "inscribe",
      "result": {
        "item": "ae2:printed_logic_processor"
      }
    })

    event.custom({
      "type": "ae2:inscriber",
      "ingredients": {
        "middle": {
          "item": "ad_astra:ostrum_plate"
        },
        "top": {
          "item": "ae2:calculation_processor_press"
        }
      },
      "mode": "inscribe",
      "result": {
        "item": "ae2:printed_calculation_processor"
      }
    })

    event.custom({
      "type": "ae2:inscriber",
      "ingredients": {
        "middle": {
          "item": "ad_astra:calorite_plate"
        },
        "top": {
          "item": "ae2:engineering_processor_press"
        }
      },
      "mode": "inscribe",
      "result": {
        "item": "ae2:printed_engineering_processor"
      }
    })


    





















})
