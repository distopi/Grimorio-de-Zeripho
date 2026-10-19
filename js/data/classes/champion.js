window.dndData = window.dndData || {};
window.dndData.classes = window.dndData.classes || [];

window.dndData.classes.push({
    id: "champion",
    name: "Champion",
    source: "TLoTrR",
    role: "Frontline Martial Warrior / Weapon Master / Tank",
    hitDice: "D10 per Champion level",
    primaryAttr: "Strength or Dexterity",
    hitPointsLevel1: "10 + Con. modifier",
    hitPointsAdditional: "D10 + your Con. modifier, or, 6 + your Con. modifier",
    savingThrows: "Strength, Constitution",
    skillProficiencies: "Choose 2: Acrobatics, Animal Handling, Athletics, Hunting, Intimidation, or Perception",
    weaponProficiencies: "Simple and Martial weapons",
    armorTraining: "Light, Medium, and Heavy armor and Shields",
    startingEquipment: "Choose: (a) Ring-mail, (b) hide armour, or (c) leather shirt + great bow + quiver of 20 arrows; (a) martial melee weapon + shield or (b) martial melee weapon + simple melee weapon; (a) bow + quiver of 20 arrows or (b) 2 simple melee weapons (plus standard of living equipment)",
    multiclassing: "Ability Score Minimum: Strength 13 or Dexterity 13.<br><strong>Weapon Proficiencies:</strong> Simple and Martial weapons<br><strong>Armor Training:</strong> Light, Medium, and Heavy armor and Shields",
    description: "Formidable warriors who master martial techniques, push their limits through surges of stamina, and stand indomitable against horror on the battlefield.",
    levels: [
        { level: 1, pb: "+2", features: "Fighting Style, Surge of Vigour" },
        { level: 2, pb: "+2", features: "Craft or Virtue" },
        { level: 3, pb: "+2", features: "Champion Way" },
        { level: 4, pb: "+2", features: "Virtue" },
        { level: 5, pb: "+3", features: "Extra Attack" },
        { level: 6, pb: "+3", features: "Craft or Virtue" },
        { level: 7, pb: "+3", features: "Champion Way feature" },
        { level: 8, pb: "+3", features: "Virtue" },
        { level: 9, pb: "+4", features: "Indomitable" },
        { level: 10, pb: "+4", features: "Extra Attack (2)" }
    ],
    featuresList: [
        {
            title: "Fighting Style",
            level: 1,
            source: "TLoTrR",
            desc: "Choose a Fighting Style option: <strong>Archery</strong> (+2 to attack rolls with ranged weapons), <strong>Defense</strong> (+1 AC in armor), <strong>Dueling</strong> (+2 damage with 1H melee weapon), <strong>Great Weapon Fighting</strong> (treat damage rolls ≤4 as 5 for 2H/Versatile weapons), <strong>Protection</strong> (Reaction to add PB to ally's AC against melee hits within 5 ft), or <strong>Two-Weapon Fighting</strong> (add ability mod to off-hand attack damage)."
        },
        {
            title: "Surge of Vigour",
            level: 1,
            source: "TLoTrR",
            desc: "Bonus action to either take the Attack, Dash, Disengage, or Dodge action, OR regain hit points equal to 1d8 + Champion level + Constitution modifier (1/Short or Long Rest)."
        },
        {
            title: "Craft or Virtue",
            level: 2,
            source: "TLoTrR",
            desc: "Gain a common or cultural virtue. At levels 2, 6, and 10, you can choose to gain a craft slot and a craft from the Scholar's Crafts list instead of a virtue."
        },
        {
            title: "Champion Way",
            level: 3,
            source: "TLoTrR",
            desc: "Choose a combat way (Sharp-Shooter or Slayer) which grants features at levels 3 and 7."
        },
        {
            title: "Extra Attack",
            level: 5,
            source: "TLoTrR",
            desc: "Attack twice instead of once whenever you take the Attack action on your turn."
        },
        {
            title: "Indomitable",
            level: 9,
            source: "TLoTrR",
            desc: "Become immune to being Charmed or Frightened (can still accumulate Shadow points from Dread and Sorcery)."
        },
        {
            title: "Extra Attack (2)",
            level: 10,
            source: "TLoTrR",
            desc: "Attack three times whenever you take the Attack action on your turn."
        }
    ]
});