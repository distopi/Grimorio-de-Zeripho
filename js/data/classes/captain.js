window.dndData = window.dndData || {};
window.dndData.classes = window.dndData.classes || [];

window.dndData.classes.push({
    id: "captain",
    name: "Captain",
    source: "TLoTrR",
    role: "Martial Leader / Commander / Support",
    hitDice: "D10 per Captain level",
    primaryAttr: "Strength and Charisma",
    hitPointsLevel1: "10 + Con. modifier",
    hitPointsAdditional: "D10 + your Con. modifier, or, 6 + your Con. modifier",
    savingThrows: "Constitution, Charisma",
    skillProficiencies: "Choose 2: Animal Handling, Athletics, Insight, Intimidation, Persuasion, or Travel",
    weaponProficiencies: "Simple and Martial weapons",
    armorTraining: "Light, Medium, and Heavy armor and Shields",
    startingEquipment: "Ring-mail or Hide armor; Martial melee weapon + Shield or Martial melee weapon + Simple melee weapon; Bow + 20 arrows or 2 Simple melee weapons (plus standard of living equipment)",
    multiclassing: "Ability Score Minimum: Strength 13, Charisma 13.<br><strong>Weapon Proficiencies:</strong> Simple and Martial weapons<br><strong>Armor Training:</strong> Light, Medium, and Heavy armor and Shields",
    description: "Inspirational battlefield commanders who direct allies, grant temporary hit points under pressure, and project aura buffs to lead their fellowship to victory.",
    levels: [
        { level: 1, pb: "+2", features: "Leadership" },
        { level: 2, pb: "+2", features: "Fighting Style, Craft or Virtue" },
        { level: 3, pb: "+2", features: "Captain Title, Valiant" },
        { level: 4, pb: "+2", features: "Virtue" },
        { level: 5, pb: "+3", features: "Extra Attack" },
        { level: 6, pb: "+3", features: "Aura of Valour, Craft or Virtue" },
        { level: 7, pb: "+3", features: "Captain Title feature" },
        { level: 8, pb: "+3", features: "Virtue" },
        { level: 9, pb: "+4", features: "—" },
        { level: 10, pb: "+4", features: "Aura of Courage, Craft or Virtue" }
    ],
    featuresList: [
        {
            title: "Leadership",
            level: 1,
            source: "TLoTrR",
            desc: "As an action in combat, grant temporary hit points equal to Captain level + Charisma modifier to up to 2 × PB allies within 30 ft who can see/hear/understand you (1/Short or Long Rest)."
        },
        {
            title: "Fighting Style",
            level: 2,
            source: "TLoTrR",
            desc: "Choose a Fighting Style option: <strong>Defense</strong> (+1 AC in armor), <strong>Dueling</strong> (+2 damage with 1H melee weapon), <strong>Great Weapon Fighting</strong> (treat damage rolls ≤4 as 5 for 2H/Versatile weapons), or <strong>Protection</strong> (Reaction to add PB to ally's AC against melee hits within 5 ft)."
        },
        {
            title: "Craft or Virtue",
            level: 2,
            source: "TLoTrR",
            desc: "Gain a common or cultural virtue. At levels 2, 6, and 10, you can choose to gain a craft slot and a craft from the Scholar's Crafts list instead of a virtue."
        },
        {
            title: "Captain Title",
            level: 3,
            source: "TLoTrR",
            desc: "Choose a title (Chieftain or Thane) which grants features at levels 3 and 7."
        },
        {
            title: "Valiant",
            level: 3,
            source: "TLoTrR",
            desc: "Add half your proficiency bonus (rounded down) to any saving throw that doesn't already include your PB."
        },
        {
            title: "Extra Attack",
            level: 5,
            source: "TLoTrR",
            desc: "Attack twice instead of once whenever you take the Attack action on your turn."
        },
        {
            title: "Aura of Valour",
            level: 6,
            source: "TLoTrR",
            desc: "Whenever you or a friendly creature within 10 feet hits with a melee weapon attack, add your Charisma modifier to the damage roll (inactive if Frightened or Unconscious)."
        },
        {
            title: "Aura of Courage",
            level: 10,
            source: "TLoTrR",
            desc: "You and friendly creatures within 10 feet cannot be frightened while you are conscious."
        }
    ]
});