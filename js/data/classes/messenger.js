window.dndData = window.dndData || {};
window.dndData.classes = window.dndData.classes || [];

window.dndData.classes.push({
    id: "messenger",
    name: "Messenger",
    source: "TLoTrR",
    role: "Mobile Emissary / Scout / Precise Striker",
    hitDice: "D8 per Messenger level",
    primaryAttr: "Dexterity and Charisma",
    hitPointsLevel1: "8 + Con. modifier",
    hitPointsAdditional: "D8 + your Con. modifier, or, 5 + your Con. modifier",
    savingThrows: "Dexterity, Charisma",
    skillProficiencies: "Choose 4: Animal Handling, Explore, Hunting, Insight, Intimidation, Old Lore, Perception, Performance, Persuasion, Riddle, Stealth, or Travel",
    weaponProficiencies: "Simple weapons, short sword, and swords",
    toolProficiencies: "A tool of your choice",
    armorTraining: "Light armor",
    startingEquipment: "Any one tool and any simple melee weapon; (a) short sword or (b) sword; (a) leather shirt or (b) bow and a quiver of 20 arrows (plus standard of living equipment)",
    multiclassing: "Ability Score Minimum: Dexterity 13, Charisma 13.<br><strong>Skill Proficiencies:</strong> Choose 1 skill from Messenger skill list<br><strong>Weapon Proficiencies:</strong> Simple weapons<br><strong>Tool Proficiencies:</strong> A tool of your choice<br><strong>Armor Training:</strong> Light armor",
    description: "Swift envoys and scouts who travel vast distances to deliver crucial intelligence, leveraging mobility, unarmoured defence, and opportunistic sneak attacks.",
    customColumns: ["Sneak Attack"],
    levels: [
        { level: 1, pb: "+2", features: "Folk-Lore, Tireless and Swift, Unarmoured Defence", sneakAttack: "—" },
        { level: 2, pb: "+2", features: "Craft or Virtue, Sneak Attack", sneakAttack: "1d6" },
        { level: 3, pb: "+2", features: "Errand Runner, Messenger Path", sneakAttack: "1d6" },
        { level: 4, pb: "+2", features: "Virtue", sneakAttack: "1d6" },
        { level: 5, pb: "+3", features: "Uncanny Dodge", sneakAttack: "2d6" },
        { level: 6, pb: "+3", features: "Craft or Virtue, Tireless and Swift improvement", sneakAttack: "2d6" },
        { level: 7, pb: "+3", features: "Messenger Path feature", sneakAttack: "2d6" },
        { level: 8, pb: "+3", features: "Virtue", sneakAttack: "2d6" },
        { level: 9, pb: "+4", features: "—", sneakAttack: "3d6" },
        { level: 10, pb: "+4", features: "Tireless and Swift improvement, Craft or Virtue", sneakAttack: "3d6" }
    ],
    featuresList: [
        {
            title: "Folk-Lore",
            level: 1,
            source: "TLoTrR",
            desc: "You possess a wealth of knowledge picked up from your travels and interactions with diverse peoples."
        },
        {
            title: "Tireless and Swift",
            level: 1,
            source: "TLoTrR",
            desc: "Your endurance and speed are heightened for long journeys and rapid movement. Gains improvements at levels 6 and 10."
        },
        {
            title: "Unarmoured Defence",
            level: 1,
            source: "TLoTrR",
            desc: "While you are wearing no armor and not wielding a shield, your Armor Class equals 10 + your Dexterity modifier + your Charisma modifier."
        },
        {
            title: "Craft or Virtue",
            level: 2,
            source: "TLoTrR",
            desc: "Take a common or cultural virtue of your choice. At levels 2, 6, and 10, instead of a virtue, you can gain a craft slot and a craft from the Scholar's Crafts list."
        },
        {
            title: "Sneak Attack",
            level: 2,
            source: "TLoTrR",
            desc: "Once per turn, deal extra damage to a target hit with an attack roll if you have Advantage or if an active ally is within 5 feet of the target. Damage scales from 1d6 up to 3d6 at level 9."
        },
        {
            title: "Errand Runner",
            level: 3,
            source: "TLoTrR",
            desc: "Specialized abilities for swift transit and carrying crucial messages through hostile lands."
        },
        {
            title: "Messenger Path",
            level: 3,
            source: "TLoTrR",
            desc: "Choose a Messenger Path archetype which grants features at levels 3 and 7."
        },
        {
            title: "Uncanny Dodge",
            level: 5,
            source: "TLoTrR",
            desc: "When an attacker that you can see hits you with an attack roll, you can use your Reaction to halve the attack's damage against you."
        }
    ]
});