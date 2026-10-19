window.dndData = window.dndData || {};
window.dndData.classes = window.dndData.classes || [];

window.dndData.classes.push({
    id: "warden",
    name: "Warden",
    source: "TLoTrR",
    role: "Wilderness Hunter / Scout / Favored Foe Tracker",
    hitDice: "D10 per Warden level",
    primaryAttr: "Wisdom",
    hitPointsLevel1: "10 + Con. modifier",
    hitPointsAdditional: "D10 + your Con. modifier, or, 6 + your Con. modifier",
    savingThrows: "Strength, Wisdom",
    skillProficiencies: "Choose 3: Animal Handling, Athletics, Explore, Hunting, Insight, Investigation, Nature, Perception, or Travel",
    weaponProficiencies: "Simple and Martial weapons",
    armorTraining: "Light and Medium armor and Shields",
    startingEquipment: "(a) Hide armour or (b) leather shirt; (a) martial weapon + shield or (b) martial melee weapon + simple melee weapon; (a) great bow + quiver of 20 arrows or (b) two simple melee weapons (plus standard of living equipment)",
    multiclassing: "Ability Score Minimum: Wisdom 13.<br><strong>Weapon Proficiencies:</strong> Simple and Martial weapons<br><strong>Armor Training:</strong> Light and Medium armor and Shields",
    description: "Vigilant protectors of sworn lands who track servants of the Shadow, navigate wilderness journeys with ease, and strike favored foes with deadly precision.",
    levels: [
        { level: 1, pb: "+2", features: "Shadow-Lore, Warded Lands" },
        { level: 2, pb: "+2", features: "Craft or Virtue, Fighting Style" },
        { level: 3, pb: "+2", features: "Warden Oath, Rumour of the Earth" },
        { level: 4, pb: "+2", features: "Virtue, Warded Lands improvement" },
        { level: 5, pb: "+3", features: "Extra Attack" },
        { level: 6, pb: "+3", features: "Craft or Virtue, Shadow-Lore improvement, Warded Lands improvement" },
        { level: 7, pb: "+3", features: "Warden Oath feature" },
        { level: 8, pb: "+3", features: "Virtue, Warded Lands improvement" },
        { level: 9, pb: "+4", features: "Long Stride" },
        { level: 10, pb: "+4", features: "Craft or Virtue, Shadow-Lore improvement, Warded Lands improvement" }
    ],
    featuresList: [
        {
            title: "Shadow-Lore",
            level: 1,
            source: "TLoTrR",
            desc: "Choose a favoured foe (Beasts, Evil Men, Giants, Monstrosities, Orcs, or Undead)[cite: 45]. Add Wisdom modifier to damage rolls against favoured foes and to saves against their special abilities[cite: 45]. Gain Advantage on Hunting/Perception checks to find them and Intelligence checks to recall info[cite: 45]. Learn one spoken language of favoured foes[cite: 45]. Gain additional choices at levels 6 and 10."
        },
        {
            title: "Warded Lands",
            level: 1,
            source: "TLoTrR",
            desc: "Choose a region (Arthedain, Cardolan, Enedwaith, Eregion, Lindon, Rhudaur)[cite: 45]. Double PB on related checks using proficient skills[cite: 45]. During journeys in warded lands: cover multiple roles without penalties, gain Advantage on fatigue saves, move stealthily at normal pace, ignore travel slowdowns from difficult terrain, and learn exact numbers, sizes, and passage time when tracking[cite: 45]. Choose additional warded lands at levels 4, 6, 8, and 10[cite: 43, 45]."
        },
        {
            title: "Craft or Virtue",
            level: 2,
            source: "TLoTrR",
            desc: "Take a common or cultural virtue at levels 2, 4, 6, 8, and 10[cite: 45]. At levels 2, 6, and 10, you can choose to gain a craft slot and a craft from the Scholar's Crafts list instead of a virtue[cite: 45]."
        },
        {
            title: "Fighting Style",
            level: 2,
            source: "TLoTrR",
            desc: "Choose a Fighting Style option: <strong>Archery</strong> (+2 to ranged attack rolls), <strong>Dueling</strong> (+2 damage with 1H melee weapon), <strong>Protection</strong> (Reaction to add PB to ally's AC within 5 ft), or <strong>Two-Weapon Fighting</strong> (add ability mod to off-hand attack damage)[cite: 45]."
        },
        {
            title: "Warden Oath",
            level: 3,
            source: "TLoTrR",
            desc: "Choose an oath archetype (Forayer or Hunter) which grants features at levels 3 and 7[cite: 45]."
        },
        {
            title: "Rumour of the Earth",
            level: 3,
            source: "TLoTrR",
            desc: "Action to sense if/which favoured foes are present within Wisdom modifier miles (doubled in warded lands) (1/Short or Long Rest)[cite: 45]."
        },
        {
            title: "Extra Attack",
            level: 5,
            source: "TLoTrR",
            desc: "Attack twice instead of once whenever you take the Attack action on your turn[cite: 45]."
        },
        {
            title: "Long Stride",
            level: 9,
            source: "TLoTrR",
            desc: "Speed increases by 10 feet while not wearing heavy armor, and moving through difficult terrain costs no extra movement[cite: 45]."
        }
    ]
});