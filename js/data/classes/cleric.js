window.dndData = window.dndData || {};
window.dndData.classes = window.dndData.classes || [];

window.dndData.classes.push({
    id: "cleric",
    name: "Cleric",
    source: "PHB'24",
    role: "Full-Caster / Support / Divine Healer",
    hitDice: "D8 per Cleric level",
    primaryAttr: "Wisdom",
    hitPointsLevel1: "8 + Con. modifier",
    hitPointsAdditional: "D8 + your Con. modifier, or, 5 + your Con. modifier",
    savingThrows: "Wisdom, Charisma",
    skillProficiencies: "Choose 2: History, Insight, Medicine, Persuasion, or Religion",
    weaponProficiencies: "Simple weapons",
    armorTraining: "Light and Medium armor and Shields",
    startingEquipment: "Choose A or B: (A) Chain Shirt, Shield, Mace, Holy Symbol, Priest's Pack, 7 GP; or (B) 110 GP",
    multiclassing: "Ability Score Minimum: Wisdom 13.<br><strong>Armor Training:</strong> Light and Medium armor and Shields",
    description: "Cleric warriors manifest divine power through prayer and meditation, utilizing holy magic to heal allies, smite undead, and channel divine energy into the battle.",
    customColumns: ["Channel Divinity"],
    levels: [
        { level: 1, pb: "+2", features: "Spellcasting, Divine Order", channelDivinity: "—", cantrips: "3", prepared: "4", slots: { 1: 2 } },
        { level: 2, pb: "+2", features: "Channel Divinity", channelDivinity: "2", cantrips: "3", prepared: "5", slots: { 1: 3 } },
        { level: 3, pb: "+2", features: "Cleric Subclass", channelDivinity: "2", cantrips: "3", prepared: "6", slots: { 1: 4, 2: 2 } },
        { level: 4, pb: "+2", features: "Ability Score Improvement", channelDivinity: "2", cantrips: "4", prepared: "7", slots: { 1: 4, 2: 3 } },
        { level: 5, pb: "+3", features: "Sear Undead", channelDivinity: "2", cantrips: "4", prepared: "9", slots: { 1: 4, 2: 3, 3: 2 } },
        { level: 6, pb: "+3", features: "Subclass Feature", channelDivinity: "3", cantrips: "4", prepared: "10", slots: { 1: 4, 2: 3, 3: 3 } },
        { level: 7, pb: "+3", features: "Blessed Strikes", channelDivinity: "3", cantrips: "4", prepared: "11", slots: { 1: 4, 2: 3, 3: 3, 4: 1 } },
        { level: 8, pb: "+3", features: "Ability Score Improvement", channelDivinity: "3", cantrips: "4", prepared: "12", slots: { 1: 4, 2: 3, 3: 3, 4: 2 } },
        { level: 9, pb: "+4", features: "—", channelDivinity: "3", cantrips: "4", prepared: "14", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 } },
        { level: 10, pb: "+4", features: "Divine Intervention", channelDivinity: "3", cantrips: "5", prepared: "15", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 } },
        { level: 11, pb: "+4", features: "—", channelDivinity: "3", cantrips: "5", prepared: "16", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 } },
        { level: 12, pb: "+4", features: "Ability Score Improvement", channelDivinity: "3", cantrips: "5", prepared: "16", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 } },
        { level: 13, pb: "+5", features: "—", channelDivinity: "3", cantrips: "5", prepared: "17", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1 } },
        { level: 14, pb: "+5", features: "Improved Blessed Strikes", channelDivinity: "3", cantrips: "5", prepared: "17", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1 } },
        { level: 15, pb: "+5", features: "—", channelDivinity: "3", cantrips: "5", prepared: "18", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1 } },
        { level: 16, pb: "+5", features: "Ability Score Improvement", channelDivinity: "3", cantrips: "5", prepared: "18", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1 } },
        { level: 17, pb: "+6", features: "Subclass Feature", channelDivinity: "3", cantrips: "5", prepared: "19", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1, 9: 1 } },
        { level: 18, pb: "+6", features: "—", channelDivinity: "4", cantrips: "5", prepared: "20", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 1, 7: 1, 8: 1, 9: 1 } },
        { level: 19, pb: "+6", features: "Epic Boon", channelDivinity: "4", cantrips: "5", prepared: "21", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 1, 8: 1, 9: 1 } },
        { level: 20, pb: "+6", features: "Greater Divine Intervention", channelDivinity: "4", cantrips: "5", prepared: "22", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 2, 8: 1, 9: 1 } }
    ],
    featuresList: [
        {
            title: "Spellcasting",
            level: 1,
            source: "PHB'24",
            desc: "Cast divine spells using Wisdom as your spellcasting ability. You can change your prepared spells list after completing a Long Rest. You use a Holy Symbol as your Spellcasting Focus."
        },
        {
            title: "Divine Order",
            level: 1,
            source: "PHB'24",
            desc: "Choose a sacred role:<br>• <strong>Protector:</strong> Gain proficiency with Martial weapons and Heavy armor.<br>• <strong>Thaumaturge:</strong> Learn 1 extra Cleric cantrip and add Wisdom modifier to Arcana/Religion checks."
        },
        {
            title: "Channel Divinity",
            level: 2,
            source: "PHB'24",
            desc: "Fuel magical effects using divine power. Regain 1 expended use on a Short Rest and all on a Long Rest.<br>• <strong>Divine Spark:</strong> Magic action to heal or deal Necrotic/Radiant damage (1d8 + Wis, scaling at levels 7, 13, and 18).<br>• <strong>Turn Undead:</strong> Magic action to frighten and incapacitate Undead within 30 ft for 1 minute."
        },
        {
            title: "Cleric Subclass",
            level: 3,
            source: "PHB'24",
            desc: "Choose a Cleric subclass which grants features at levels 3, 6, and 17."
        },
        {
            title: "Sear Undead",
            level: 5,
            source: "PHB'24",
            desc: "When using Turn Undead, deal Radiant damage equal to Wis modifier d8s to affected Undead without breaking the turned condition."
        },
        {
            title: "Blessed Strikes",
            level: 7,
            source: "PHB'24",
            desc: "Choose one option:<br>• <strong>Divine Strike:</strong> Deal +1d8 Necrotic or Radiant damage once per turn on weapon hits.<br>• <strong>Potent Spellcasting:</strong> Add Wisdom modifier to Cleric cantrip damage."
        },
        {
            title: "Divine Intervention",
            level: 10,
            source: "PHB'24",
            desc: "Magic action to cast any Cleric spell of 5th level or lower without expending a spell slot or needing material components (1/Long Rest)."
        },
        {
            title: "Improved Blessed Strikes",
            level: 14,
            source: "PHB'24",
            desc: "Upgrade your Blessed Strikes option:<br>• <strong>Divine Strike:</strong> Damage increases to 2d8.<br>• <strong>Potent Spellcasting:</strong> Cantrip damage grants you or an ally within 60 ft temporary HP equal to 2 × Wisdom modifier."
        },
        {
            title: "Epic Boon",
            level: 19,
            source: "PHB'24",
            desc: "Gain an Epic Boon feat or another feat of your choice."
        },
        {
            title: "Greater Divine Intervention",
            level: 20,
            source: "PHB'24",
            desc: "You can choose [[Wish]] when using Divine Intervention. Using Wish in this manner prevents Divine Intervention for 2d4 Long Rests."
        }
    ]
});