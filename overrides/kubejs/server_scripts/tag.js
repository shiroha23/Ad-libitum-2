ServerEvents.tags("item", event => {

    //添加橡胶tag
    event.add('forge:rubber', 'thermal:cured_rubber')
    event.add('forge:rubber', 'techreborn:rubber')

    //AE2硅板tag
    event.add('forge:plates/silicon', 'ae2:printed_silicon')

    //末影接口末影粉tag
    event.add('forge:dusts/ender_pearl', 'enderio:powdered_ender_pearl')

    //从#forge:ingots/iro中移除辛辛那金锭
    event.remove('forge:ingots/iron', 'betternether:cincinnasite_ingot')

    //从#forge:ingots/iron中移除末影铁锭
    event.remove('forge:ingots/iron', 'betterend:thallasium_ingot')

    //为科技复兴铂矿石添加forge:ores/platinum标签
    event.add('forge:ores/platinum', 'techreborn:sheldonite_ore')

    //为dungeons_plus:granite_gold_ore添加forge:ores/gold标签
    event.add('forge:ores/gold', 'dungeons_plus:granite_gold_ore')

    //为Ad Astar!的矿石添加矿石标签
    event.add('forge:ores', 'ad_astra:moon_cheese_ore')
    event.add('forge:ores', 'ad_astra:moon_desh_ore')
    event.add('forge:ores', 'ad_astra:deepslate_desh_ore')
    event.add('forge:ores', 'ad_astra:moon_ice_shard_ore')
    event.add('forge:ores', 'ad_astra:deepslate_ice_shard_ore')
    event.add('forge:ores', 'ad_astra:mars_ostrum_ore')
    event.add('forge:ores', 'ad_astra:deepslate_ostrum_ore')
    event.add('forge:ores', 'ad_astra:mars_ice_shard_ore')
    event.add('forge:ores', 'ad_astra:venus_calorite_ore')
    event.add('forge:ores', 'ad_astra:deepslate_calorite_ore')
    event.add('forge:ores', 'ad_astra:glacio_ice_shard_ore')

    //为科技复兴的矿石添加矿石标签
    event.add('forge:ores', 'techreborn:bauxite_ore')
    event.add('forge:ores', 'techreborn:galena_ore')
    event.add('forge:ores', 'techreborn:pyrite_ore')
    event.add('forge:ores', 'techreborn:sodalite_ore')
    event.add('forge:ores', 'techreborn:sphalerite_ore')
    event.add('forge:ores', 'techreborn:tungsten_ore')
    event.add('forge:ores', 'techreborn:deepslate_bauxite_ore')
    event.add('forge:ores', 'techreborn:deepslate_galena_ore')

    event.add('forge:ores_in_ground/stone', 'techreborn:bauxite_ore')
    event.add('forge:ores_in_ground/stone', 'techreborn:galena_ore')
    event.add('forge:ores_in_ground/deepslate', 'techreborn:deepslate_bauxite_ore')
    event.add('forge:ores_in_ground/deepslate', 'techreborn:deepslate_galena_ore')    

    //植物魔法变质石头标签
    event.add('botania:metamorphic_stone', 'botania:metamorphic_desert_stone')
    event.add('botania:metamorphic_stone', 'botania:metamorphic_forest_stone')
    event.add('botania:metamorphic_stone', 'botania:metamorphic_fungal_stone')
    event.add('botania:metamorphic_stone', 'botania:metamorphic_mesa_stone')
    event.add('botania:metamorphic_stone', 'botania:metamorphic_mountain_stone')
    event.add('botania:metamorphic_stone', 'botania:metamorphic_plains_stone')
    event.add('botania:metamorphic_stone', 'botania:metamorphic_swamp_stone')
    event.add('botania:metamorphic_stone', 'botania:metamorphic_taiga_stone')
        












    
})



ServerEvents.tags("block", event => {

    //为科技复兴铂矿石添加forge:ores/platinum标签
    event.add('forge:ores/platinum', 'techreborn:sheldonite_ore')

    //为dungeons_plus:granite_gold_ore添加forge:ores/gold标签
    event.add('forge:ores/gold', 'dungeons_plus:granite_gold_ore')

    //为Ad Astar!的矿石添加矿石标签
    event.add('forge:ores', 'ad_astra:moon_cheese_ore')
    event.add('forge:ores', 'ad_astra:moon_desh_ore')
    event.add('forge:ores', 'ad_astra:deepslate_desh_ore')
    event.add('forge:ores', 'ad_astra:moon_ice_shard_ore')
    event.add('forge:ores', 'ad_astra:deepslate_ice_shard_ore')
    event.add('forge:ores', 'ad_astra:mars_ostrum_ore')
    event.add('forge:ores', 'ad_astra:deepslate_ostrum_ore')
    event.add('forge:ores', 'ad_astra:mars_ice_shard_ore')
    event.add('forge:ores', 'ad_astra:venus_calorite_ore')
    event.add('forge:ores', 'ad_astra:deepslate_calorite_ore')
    event.add('forge:ores', 'ad_astra:glacio_ice_shard_ore')

    //为科技复兴的矿石添加矿石标签
    event.add('forge:ores', 'techreborn:bauxite_ore')
    event.add('forge:ores', 'techreborn:galena_ore')
    event.add('forge:ores', 'techreborn:pyrite_ore')
    event.add('forge:ores', 'techreborn:sodalite_ore')
    event.add('forge:ores', 'techreborn:sphalerite_ore')
    event.add('forge:ores', 'techreborn:tungsten_ore')
    event.add('forge:ores', 'techreborn:deepslate_bauxite_ore')
    event.add('forge:ores', 'techreborn:deepslate_galena_ore')

    event.add('forge:ores_in_ground/stone', 'techreborn:bauxite_ore')
    event.add('forge:ores_in_ground/stone', 'techreborn:galena_ore')
    event.add('forge:ores_in_ground/deepslate', 'techreborn:deepslate_bauxite_ore')
    event.add('forge:ores_in_ground/deepslate', 'techreborn:deepslate_galena_ore')    

    //为禁忌与奥秘神秘水晶矿石添加矿石标签
    event.add('forge:ores_in_ground/stone', 'forbidden_arcanus:arcane_crystal_ore')
    event.add('forge:ores_in_ground/deepslate', 'forbidden_arcanus:deepslate_arcane_crystal_ore')    

    //植物魔法变质石头标签
    event.add('botania:metamorphic_stone', 'botania:metamorphic_desert_stone')
    event.add('botania:metamorphic_stone', 'botania:metamorphic_forest_stone')
    event.add('botania:metamorphic_stone', 'botania:metamorphic_fungal_stone')
    event.add('botania:metamorphic_stone', 'botania:metamorphic_mesa_stone')
    event.add('botania:metamorphic_stone', 'botania:metamorphic_mountain_stone')
    event.add('botania:metamorphic_stone', 'botania:metamorphic_plains_stone')
    event.add('botania:metamorphic_stone', 'botania:metamorphic_swamp_stone')
    event.add('botania:metamorphic_stone', 'botania:metamorphic_taiga_stone')
    







})