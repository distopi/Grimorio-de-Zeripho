window.dndData = window.dndData || {};
window.dndData.classes = window.dndData.classes || [];

window.dndData.classes.push({
    id: "monsterHunter",
    name: "Monster Hunter",
    source: "GH:PG'24",
    role: "Martial Slayer / Tactician",
    hitDice: "D10 per Monster Hunter level",
    primaryAttr: "Strength and Intelligence or Dexterity and Intelligence",
    hitPointsLevel1: "10 + Con. modifier",
    hitPointsAdditional: "D10 + your Con. modifier, or, 6 + your Con. modifier",
    savingThrows: "Dexterity, Intelligence",
    skillProficiencies: "Choose 3: Athletics, History, Investigation, Medicine, Nature, Perception, Religion, or Survival",
    weaponProficiencies: "Simple and Martial weapons",
    armorTraining: "Light and Medium armor and Shields",
    startingEquipment: "Choose A, B, or C: (A) Scale Mail, Longsword, Light Crossbow, 20 Bolts, Dungeoneer's Pack, and 5 GP; (B) Studded Leather Armor, Scimitar, Shortsword, Longbow, 20 Arrows, Quiver, Dungeoneer's Pack, and 10 GP; or (C) 160 GP",
    multiclassing: "To qualify for a new class, you must have a score of at least 13 in the primary ability of the new class and your current classes.<br><strong>Weapon Proficiencies:</strong> Martial weapons<br><strong>Armor Training:</strong> Light and Medium armor and Shields",
    description: "Specialized slayers of otherworldly threats and horrific beasts, Monster Hunters rely on rigorous study, a personal Monster Grimoire, and lethal precision reactions to dismantle their quarry.",
    customColumns: ["Weapon Mastery"],
    levels: [
        { level: 1, pb: "+2", features: "Monster Grimoire, Weapon Mastery", weaponMastery: "2" },
        { level: 2, pb: "+2", features: "Fighting Style, Studied Response", weaponMastery: "2" },
        { level: 3, pb: "+2", features: "Monster Hunter Subclass", weaponMastery: "2" },
        { level: 4, pb: "+2", features: "Ability Score Improvement", weaponMastery: "2" },
        { level: 5, pb: "+3", features: "Expert Strike", weaponMastery: "3" },
        { level: 6, pb: "+3", features: "Improved Monster Grimoire", weaponMastery: "3" },
        { level: 7, pb: "+3", features: "Subclass Feature", weaponMastery: "3" },
        { level: 8, pb: "+3", features: "Ability Score Improvement", weaponMastery: "3" },
        { level: 9, pb: "+4", features: "Knowledgeable Defense", weaponMastery: "3" },
        { level: 10, pb: "+4", features: "Subclass Feature", weaponMastery: "3" },
        { level: 11, pb: "+4", features: "Extra Attack", weaponMastery: "4" },
        { level: 12, pb: "+4", features: "Ability Score Improvement", weaponMastery: "4" },
        { level: 13, pb: "+5", features: "Improved Monster Grimoire", weaponMastery: "4" },
        { level: 14, pb: "+5", features: "Lair Sense", weaponMastery: "4" },
        { level: 15, pb: "+5", features: "Subclass Feature", weaponMastery: "4" },
        { level: 16, pb: "+5", features: "Ability Score Improvement", weaponMastery: "4" },
        { level: 17, pb: "+6", features: "Slayer's Aid", weaponMastery: "5" },
        { level: 18, pb: "+6", features: "Subclass Feature", weaponMastery: "5" },
        { level: 19, pb: "+6", features: "Epic Boon", weaponMastery: "5" },
        { level: 20, pb: "+6", features: "Grave Strike", weaponMastery: "5" }
    ],
    featuresList: [
        {
            title: "Monster Grimoire",
            level: 1,
            source: "GH:PG'24",
            desc: "You carry a repository of knowledge regarding dangerous creatures. Choose two creature types (Aberrations, Beasts, Celestials, Constructs, Dragons, Elementals, Fey, Fiends, Giants, Monstrosities, Oozes, Plants, or Undead). Add your Proficiency Bonus (or double if already proficient) to Int/Wis checks related to them, and learn a language corresponding to your chosen monster types."
        },
        {
            title: "Weapon Mastery",
            level: 1,
            source: "GH:PG'24",
            desc: "You gain the ability to use the mastery properties of two weapons of your choice with which you are proficient. You can change your choices after a Long Rest."
        },
        {
            title: "Fighting Style",
            level: 2,
            source: "GH:PG'24",
            desc: "You gain a Fighting Style feat of your choice."
        },
        {
            title: "Studied Response",
            level: 2,
            source: "GH:PG'24",
            desc: "When a creature within 60 feet targets you or another creature with a melee or ranged attack, you can take a Reaction before the attack roll to make one attack with a weapon or Unarmed Strike against that creature. If your attack misses, you regain your Reaction."
        },
        {
            title: "Monster Hunter Subclass",
            level: 3,
            source: "GH:PG'24",
            desc: "You choose a Monster Hunter subclass (Carver Guild, Devourer Guild, Occultist Guild, or Trapper Guild) which grants features at levels 3, 7, 10, 15, and 18."
        },
        {
            title: "Expert Strike",
            level: 5,
            source: "GH:PG'24",
            desc: "You can add your Intelligence modifier to the attack and damage rolls of your weapon attacks and Unarmed Strikes."
        },
        {
            title: "Improved Monster Grimoire",
            level: 6,
            source: "GH:PG'24",
            desc: "Add a 3rd creature type to your Grimoire. In addition, weapon attacks and Unarmed Strikes against creature types in your Grimoire score a Critical Hit on a 19–20 on the d20."
        },
        {
            title: "Knowledgeable Defense",
            level: 9,
            source: "GH:PG'24",
            desc: "Whenever a creature type in your Monster Grimoire forces you to make a saving throw, you can make an Intelligence saving throw in place of that saving throw instead."
        },
        {
            title: "Extra Attack",
            level: 11,
            source: "GH:PG'24",
            desc: "You can attack twice instead of once whenever you take the Attack action on your turn."
        },
        {
            title: "Improved Monster Grimoire",
            level: 13,
            source: "GH:PG'24",
            desc: "Add a 4th creature type to your Grimoire."
        },
        {
            title: "Lair Sense",
            level: 14,
            source: "GH:PG'24",
            desc: "You have Advantage on saving throws and Resistance to damage from lair actions, regional effects, and Legendary Actions of creature types in your Grimoire."
        },
        {
            title: "Slayer's Aid",
            level: 17,
            source: "GH:PG'24",
            desc: "When you use Studied Response, a friendly creature within sight or hearing can use its Reaction to make a weapon attack against the triggering target before the target's attack occurs."
        },
        {
            title: "Epic Boon",
            level: 19,
            source: "GH:PG'24",
            desc: "You gain an Epic Boon feat or another feat of your choice."
        },
        {
            title: "Grave Strike",
            level: 20,
            source: "GH:PG'24",
            desc: "Your attacks against creature types in your Grimoire score a Critical Hit on an 18–20. When you score a Critical Hit against them, the target must make a Constitution saving throw (DC = damage taken, max 30) or drop to 0 Hit Points. Usable Int modifier times per Long Rest."
        }
    ]
});