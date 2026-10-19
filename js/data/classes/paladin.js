window.dndData = window.dndData || {};
window.dndData.classes = window.dndData.classes || [];

window.dndData.classes.push({
    id: "paladin",
    name: "Paladin",
    source: "PHB'24",
    role: "Half-Caster / Holy Warrior / Frontline Tank",
    hitDice: "D10 per Paladin level",
    primaryAttr: "Strength and Charisma",
    hitPointsLevel1: "10 + Con. modifier",
    hitPointsAdditional: "D10 + your Con. modifier, or, 6 + your Con. modifier",
    savingThrows: "Wisdom, Charisma",
    skillProficiencies: "Choose 2: Athletics, Insight, Intimidation, Medicine, Persuasion, or Religion",
    weaponProficiencies: "Simple and Martial weapons",
    armorTraining: "Light, Medium, and Heavy armor and Shields",
    startingEquipment: "Choose A or B: (A) Chain Mail, Shield, Longsword, 6 Javelins, Holy Symbol, Priest's Pack, 9 GP; or (B) 150 GP",
    multiclassing: "Ability Score Minimum: Strength 13 and Charisma 13.<br><strong>Weapon Proficiencies:</strong> Martial weapons<br><strong>Armor Training:</strong> Light and Medium armor and Shields",
    description: "Holy crusaders bound by sacred oaths, Paladins blend martial prowess with divine magic, smiting foes, protecting allies with protective auras, and healing the wounded.",
    customColumns: ["Channel Divinity"],
    levels: [
        { level: 1, pb: "+2", features: "Lay on Hands, Spellcasting, Weapon Mastery", channelDivinity: "—", prepared: "2", slots: { 1: 2 } },
        { level: 2, pb: "+2", features: "Fighting Style, Paladin's Smite", channelDivinity: "—", prepared: "3", slots: { 1: 2 } },
        { level: 3, pb: "+2", features: "Channel Divinity, Paladin Subclass", channelDivinity: "2", prepared: "4", slots: { 1: 3 } },
        { level: 4, pb: "+2", features: "Ability Score Improvement", channelDivinity: "2", prepared: "5", slots: { 1: 3 } },
        { level: 5, pb: "+3", features: "Extra Attack, Faithful Steed", channelDivinity: "2", prepared: "6", slots: { 1: 4, 2: 2 } },
        { level: 6, pb: "+3", features: "Aura of Protection", channelDivinity: "2", prepared: "6", slots: { 1: 4, 2: 2 } },
        { level: 7, pb: "+3", features: "Subclass Feature", channelDivinity: "2", prepared: "7", slots: { 1: 4, 2: 3 } },
        { level: 8, pb: "+3", features: "Ability Score Improvement", channelDivinity: "2", prepared: "7", slots: { 1: 4, 2: 3 } },
        { level: 9, pb: "+4", features: "Abjure Foes", channelDivinity: "2", prepared: "9", slots: { 1: 4, 2: 3, 3: 2 } },
        { level: 10, pb: "+4", features: "Aura of Courage", channelDivinity: "2", prepared: "9", slots: { 1: 4, 2: 3, 3: 2 } },
        { level: 11, pb: "+4", features: "Radiant Strikes", channelDivinity: "3", prepared: "10", slots: { 1: 4, 2: 3, 3: 3 } },
        { level: 12, pb: "+4", features: "Ability Score Improvement", channelDivinity: "3", prepared: "10", slots: { 1: 4, 2: 3, 3: 3 } },
        { level: 13, pb: "+5", features: "—", channelDivinity: "3", prepared: "11", slots: { 1: 4, 2: 3, 3: 3, 4: 1 } },
        { level: 14, pb: "+5", features: "Restoring Touch", channelDivinity: "3", prepared: "11", slots: { 1: 4, 2: 3, 3: 3, 4: 1 } },
        { level: 15, pb: "+5", features: "Subclass Feature", channelDivinity: "3", prepared: "12", slots: { 1: 4, 2: 3, 3: 3, 4: 2 } },
        { level: 16, pb: "+5", features: "Ability Score Improvement", channelDivinity: "3", prepared: "12", slots: { 1: 4, 2: 3, 3: 3, 4: 2 } },
        { level: 17, pb: "+6", features: "—", channelDivinity: "3", prepared: "14", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 } },
        { level: 18, pb: "+6", features: "Aura Expansion", channelDivinity: "3", prepared: "14", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 } },
        { level: 19, pb: "+6", features: "Epic Boon", channelDivinity: "3", prepared: "15", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 } },
        { level: 20, pb: "+6", features: "Subclass Feature", channelDivinity: "3", prepared: "15", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 } }
    ],
    featuresList: [
        {
            title: "Lay on Hands",
            level: 1,
            source: "PHB'24",
            desc: "Pool of healing equal to 5 × Paladin level (recharges on Long Rest). Use a Bonus Action to heal a creature or spend 5 HP from the pool to remove the Poisoned condition."
        },
        {
            title: "Spellcasting",
            level: 1,
            source: "PHB'24",
            desc: "Cast divine spells using Charisma as your spellcasting ability. Prepare a list of Paladin spells that updates after a Long Rest. Uses a Holy Symbol as a focus."
        },
        {
            title: "Weapon Mastery",
            level: 1,
            source: "PHB'24",
            desc: "Use weapon mastery properties of two chosen weapons with which you have proficiency. Can change choices after a Long Rest."
        },
        {
            title: "Fighting Style",
            level: 2,
            source: "PHB'24",
            desc: "Gain a Fighting Style feat or choose <strong>Blessed Warrior</strong> to learn 2 Cleric cantrips (using Charisma)."
        },
        {
            title: "Paladin's Smite",
            level: 2,
            source: "PHB'24",
            desc: "Always have [[Divine Smite]] prepared. Cast it once per Long Rest without expending a spell slot."
        },
        {
            title: "Channel Divinity",
            level: 3,
            source: "PHB'24",
            desc: "Channel divine energy for magic effects (2 uses/rest, 3 uses at lvl 11). Starts with <strong>Divine Sense</strong> (Bonus Action to detect Celestials, Fiends, Undead, and consecrated/desecrated areas within 60 ft for 10 min)."
        },
        {
            title: "Paladin Subclass",
            level: 3,
            source: "PHB'24",
            desc: "Choose a Paladin subclass which grants features at levels 3, 7, 15, and 20."
        },
        {
            title: "Extra Attack",
            level: 5,
            source: "PHB'24",
            desc: "Attack twice instead of once whenever you take the Attack action."
        },
        {
            title: "Faithful Steed",
            level: 5,
            source: "PHB'24",
            desc: "Always have [[Find Steed]] prepared. Cast it once per Long Rest without expending a spell slot."
        },
        {
            title: "Aura of Protection",
            level: 6,
            source: "PHB'24",
            desc: "Gain a 10-foot aura granting you and allies a bonus to saving throws equal to your Charisma modifier (minimum +1)."
        },
        {
            title: "Abjure Foes",
            level: 9,
            source: "PHB'24",
            desc: "Magic action to spend 1 Channel Divinity use: target up to Charisma modifier creatures within 60 ft. Targets must succeed on a Wisdom save or be Frightened for 1 minute (restricted to move, action, OR bonus action each turn)."
        },
        {
            title: "Aura of Courage",
            level: 10,
            source: "PHB'24",
            desc: "You and allies inside your Aura of Protection are Immune to the Frightened condition."
        },
        {
            title: "Radiant Strikes",
            level: 11,
            source: "PHB'24",
            desc: "Melee weapon attacks and Unarmed Strikes deal an extra 1d8 Radiant damage on hit."
        },
        {
            title: "Restoring Touch",
            level: 14,
            source: "PHB'24",
            desc: "When using Lay on Hands, spend 5 HP from your pool to remove one condition: Blinded, Charmed, Deafened, Frightened, Paralyzed, or Stunned."
        },
        {
            title: "Aura Expansion",
            level: 18,
            source: "PHB'24",
            desc: "The radius of your Aura of Protection increases to 30 feet."
        },
        {
            title: "Epic Boon",
            level: 19,
            source: "PHB'24",
            desc: "Gain an Epic Boon feat or another feat of your choice."
        }
    ]
});