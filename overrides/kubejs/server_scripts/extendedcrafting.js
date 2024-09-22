ServerEvents.recipes(event => {
    //通量粉尘
    event.custom({
        "type":"extendedcrafting:combination",
        "powerCost":90000,
        "input":{
            "tag":"forge:dusts/signalum"
        },
        "ingredients":[
            {
            "tag":"forge:dusts/signalum"
            },
            {
            "tag":"forge:dusts/signalum"
            },
            {
            "tag":"forge:dusts/signalum"
            },
            {
            "tag":"forge:dusts/lumium"
            },
            {
            "tag":"forge:dusts/lumium"
            },
            {
            "tag":"forge:dusts/lumium"
            },
            {
            "tag":"forge:dusts/enderium"
            },
            {
            "tag":"forge:dusts/enderium"
            }
        ],
        "result":{
            "item":"fluxnetworks:flux_dust",
            "count":9
        }
    })

    //通量核心
    event.remove({output:'fluxnetworks:flux_core'})
    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "powerRequired": 1600000,
        "powerRate": 400,
        "pattern": [
          "ABA",
          "CDE",
          "AFA"
        ],
        "key": {
          "A": {
            "item": "fluxnetworks:flux_dust"
          },
          "B": {
            "item": "immersiveengineering:toolupgrade_powerpack_tesla"
          },
          "C": {
            "item": "mekanism:module_teleportation_unit"
          },
          "D": {
            "item": "ae2:singularity"
          },
          "E": {
            "item": "enderio:enderface_materials"
          },
          "F": {
            "item": "create:precision_mechanism"
          }
        },
        "result": {
          "count": 4,
          "item": "fluxnetworks:flux_core"
        }
      })
    //终极锭
    event.custom({
        "type": "extendedcrafting:shapeless_table",
        "ingredients": [
          {
              "tag": "forge:ingots/iesnium"
          },
          {
              "tag": "forge:ingots/silver"
          },
          {
              "tag": "forge:ingots/steel"
          },
          {
              "tag": "forge:ingots/desh"
          },
          {
              "tag": "forge:ingots/ostrum"
          },
          {
              "tag": "forge:ingots/calorite"
          },
          {
              "tag": "forge:ingots/black_iron"
          },
          {
              "tag": "forge:ingots/crystaltine"
          },
          {
              "tag": "forge:ingots/ender_ingot"
          },
          {
              "tag": "forge:ingots/enhanced_ender_ingot"
          },
          {
              "tag": "forge:ingots/enhanced_redstone_ingot"
          },
          {
              "tag": "forge:ingots/redstone_ingot"
          },
          {
              "tag": "forge:ingots/cloggrum"
          },
          {
              "tag": "forge:ingots/froststeel"
          },
          {
              "tag": "forge:ingots/forgotten_metal"
          },
          {
              "item": "biggerreactors:blutonium_ingot"
          },
          {
              "tag": "forge:ingots/cyanite"
          },
          {
              "tag": "forge:ingots/graphite"
          },
          {
              "tag": "forge:ingots/ludicrite"
          },
          {
              "tag": "forge:ingots/uranium"
          },
          {
              "tag": "forge:ingots/awakened_supremium"
          },
          {
              "tag": "forge:ingots/soulium"
          },
          {
              "tag": "forge:ingots/conductive_alloy"
          },
          {
              "tag": "forge:ingots/copper_alloy"
          },
          {
              "tag": "forge:ingots/dark_steel"
          },
          {
              "tag": "forge:ingots/end_steel"
          },
          {
              "tag": "forge:ingots/energetic_alloy"
          },
          {
              "tag": "forge:ingots/pulsating_alloy"
          },
          {
              "tag": "forge:ingots/redstone_alloy"
          },
          {
              "tag": "forge:ingots/soularium"
          },
          {
              "tag": "forge:ingots/vibrant_alloy"
          },
          {
              "tag": "forge:ingots/electrum"
          },
          {
              "tag": "forge:ingots/insanium"
          },
          {
              "tag": "forge:ingots/aluminum"
          },
          {
              "tag": "forge:ingots/iridium"
          },
          {
              "tag": "forge:ingots/platinum"
          },
          {
              "tag": "forge:ingots/bronze"
          },
          {
              "tag": "forge:ingots/constantan"
          },
          {
              "tag": "forge:ingots/enderium"
          },
          {
              "tag": "forge:ingots/invar"
          },
          {
              "tag": "forge:ingots/lumium"
          },
          {
              "tag": "forge:ingots/signalum"
          },
          {
              "tag": "forge:ingots/brass"
          },
          {
              "tag": "forge:ingots/refined_glowstone"
          },
          {
              "tag": "forge:ingots/refined_obsidian"
          },
          {
              "tag": "forge:ingots/rose_gold"
          },
          {
              "tag": "forge:ingots/allthemodium"
          },
          {
              "tag": "forge:ingots/vibranium"
          },
          {
              "tag": "forge:ingots/unobtainium"
          },
          {
              "tag": "blue_skies:ingots/horizonite"
          },
          {
              "tag": "blue_skies:ingots/falsite"
          },
          {
              "tag": "blue_skies:ingots/ventium"
          },
          {
              "item": "iceandfire:ghost_ingot"
          },
          {
              "item": "iceandfire:dragonsteel_ice_ingot"
          },
          {
              "item": "iceandfire:dragonsteel_fire_ingot"
          },
          {
              "item": "iceandfire:dragonsteel_lightning_ingot"
          },
          {
              "tag": "forge:ingots/ironwood"
          },
          {
              "tag": "forge:ingots/fiery"
          },
          {
              "tag": "forge:ingots/knightmetal"
          },
          {
              "item": "create:andesite_alloy"
          },
          {
              "tag": "forge:ingots/deorum"
          },
          {
              "tag": "forge:ingots/obsidian"
          },      
          {
              "tag": "forge:ingots/alfsteel"
          },
          {
              "item": "botania:gaia_ingot"
          },
          {
              "item": "betternether:cincinnasite_ingot"
          },
          {
              "item": "betterend:aeternium_ingot"
          },
          {
              "item": "cataclysm:witherite_ingot"
          },
          {
              "item": "cataclysm:enderite_ingot"
          },
          {
              "item": "cataclysm:ancient_metal_ingot"
          },
          {
              "item": "cataclysm:ignitium_ingot"
          },
          {
              "item": "irons_spellbooks:arcane_ingot"
          },
          {
              "item": "goety:dark_ingot"
          },
          {
              "item": "immersiveengineering:ingot_hop_graphite"
          },
          {
              "item": "witheringboon:soulaniteingot"
          },
          {
              "item": "deep_aether:stratus_ingot"
          },
          {
              "item": "enigmaticlegacy:etherium_ingot"
          },
          {
              "item": "enigmaticlegacy:evil_ingot"
          }       
        ],
        "result": {
          "item": "extendedcrafting:the_ultimate_ingot"
        }
      })

    //非欧立方
    event.custom({
        "type": "extendedcrafting:shapeless_table",
        "ingredients": [
          {
            "item": "enigmaticlegacy:cosmic_heart"
          },
          {
            "item": "cataclysm:remnant_skull"
          },
          {
            "item": "enigmaticlegacy:cosmic_heart"
          },
          {
            "item": "cataclysm:monstrous_horn"
          },
          {
            "item": "enigmaticlegacy:cosmic_heart"
          },
          {
            "item": "enigmaticlegacy:cosmic_heart"
          },
          {
            "item": "enigmaticlegacy:golem_heart"
          },
          {
            "item": "bosses_of_mass_destruction:ancient_anima"
          },
          {
            "item": "enigmaticlegacy:blazing_core"
          },
          {
            "item": "enigmaticlegacy:cosmic_heart"
          },
          {
            "item": "bosses_of_mass_destruction:blazing_eye"
          },
          {
            "item": "enigmaticlegacy:angel_blessing"
          },
          {
            "item": "botania:dice"
          },
          {
            "item": "enigmaticlegacy:eye_of_nebula"
          },
          {
            "item": "bosses_of_mass_destruction:obsidian_heart"
          },
          {
            "item": "enigmaticlegacy:cosmic_heart"
          },
          {
            "item": "enigmaticlegacy:ocean_stone"
          },
          {
            "item": "bosses_of_mass_destruction:void_thorn"
          },
          {
            "item": "enigmaticlegacy:void_pearl"
          },
          {
            "item": "enigmaticlegacy:cosmic_heart"
          },
          {
            "item": "enigmaticlegacy:cosmic_heart"
          },
          {
            "item": "ars_nouveau:wilden_tribute"
          },
          {
            "item": "enigmaticlegacy:cosmic_heart"
          },
          {
            "item": "alexsmobs:void_worm_eye"
          },
          {
            "item": "enigmaticlegacy:cosmic_heart"
          }
        ],
        "result": {
          "item": "enigmaticlegacy:the_cube"
        }
      })

















})
