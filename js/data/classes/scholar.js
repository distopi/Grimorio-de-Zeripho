window.dndData = window.dndData || {};
window.dndData.classes = window.dndData.classes || [];

window.dndData.classes.push({
    id: "scholar",
    name: "Scholar",
    source: "TLoTrR",
    role: "Support / Non-Magical Healer / Lore Master",
    hitDice: "D8 per Scholar level",
    primaryAttr: "Intelligence",
    hitPointsLevel1: "8 + Con. modifier",
    hitPointsAdditional: "D8 + your Con. modifier, or, 5 + your Con. modifier",
    savingThrows: "Intelligence, Wisdom",
    skillProficiencies: "Choose 3: Animal Handling, Insight, Investigation, Medicine, Nature, Old Lore, Performance, Riddle, or Travel",
    weaponProficiencies: "Simple weapons",
    toolProficiencies: "Two tools of your choice among calligrapher's supplies, cartographer's tools, herbalism kit, a musical instrument, navigator's tools, or pipes",
    armorTraining: "Light armor",
    startingEquipment: "A healer's kit, any simple melee weapon, and any two tools; (a) leather shirt or (b) bow and a quiver of 20 arrows (plus standard of living equipment)",
    multiclassing: "Ability Score Minimum: Intelligence 13.<br><strong>Skill Proficiencies:</strong> Choose 1 skill from Scholar skill list<br><strong>Weapon Proficiencies:</strong> Simple weapons<br><strong>Tool Proficiencies:</strong> One tool from class's tools list<br><strong>Armor Training:</strong> Light armor",
    description: "Masters of ancient lore, medicine, and esoteric crafts who support their fellowship with inspirational rhymes and non-magical healing.",
    customColumns: ["Craft Slots"],
    levels: [
        { level: 1, pb: "+2", features: "Crafts, Rhymes of Lore (d6), Unarmoured Defence", craftSlots: "1" },
        { level: 2, pb: "+2", features: "Cunning Mind, Hands of a Healer (d6)", craftSlots: "1" },
        { level: 3, pb: "+2", features: "Expertise, Scholar Tradition", craftSlots: "2" },
        { level: 4, pb: "+2", features: "Virtue", craftSlots: "2" },
        { level: 5, pb: "+3", features: "Rhymes of Lore (d8), Unending Rhymes", craftSlots: "3" },
        { level: 6, pb: "+3", features: "Virtue", craftSlots: "3" },
        { level: 7, pb: "+3", features: "Scholar Tradition feature", craftSlots: "4" },
        { level: 8, pb: "+3", features: "Virtue", craftSlots: "4" },
        { level: 9, pb: "+4", features: "Hands of a Healer (d8)", craftSlots: "5" },
        { level: 10, pb: "+4", features: "Expertise, Rhymes of Lore (d10), Unfailing Rhymes", craftSlots: "5" }
    ],
    featuresList: [
        {
            title: "Crafts",
            level: 1,
            source: "TLoTrR",
            desc: "Utilize obscure crafts of ancient knowledge by expending Craft Slots (recharges on a Short or Long Rest)[cite: 45]. Learn new crafts as Craft Slots increase[cite: 45]."
        },
        {
            title: "Rhymes of Lore",
            level: 1,
            source: "TLoTrR",
            desc: "Bonus Action to grant a creature within 30 ft a Lore die (1d6) to add to an ability check, attack roll, or save (usable Intelligence modifier times per Long Rest)[cite: 45]. Die upgrades to d8 at lvl 5 and d10 at lvl 10."
        },
        {
            title: "Unarmoured Defence",
            level: 1,
            source: "TLoTrR",
            desc: "While unarmored and without a shield, base AC equals 10 + Dexterity modifier + Wisdom modifier[cite: 45]."
        },
        {
            title: "Cunning Mind",
            level: 2,
            source: "TLoTrR",
            desc: "Take a Bonus Action on each turn to make an Intelligence or Wisdom check, or to take the Help action[cite: 45]."
        },
        {
            title: "Hands of a Healer",
            level: 2,
            source: "TLoTrR",
            desc: "Treat allies during a Short Rest: up to 2 × PB allies spending Hit Dice regain an extra 1d6 HP per Hit Die spent[cite: 45]. Increases to 1d8 at level 9[cite: 43, 45]."
        },
        {
            title: "Expertise",
            level: 3,
            source: "TLoTrR",
            desc: "Double proficiency bonus for two chosen skill or tool proficiencies[cite: 45]. Choose two additional proficiencies at level 10[cite: 43, 45]."
        },
        {
            title: "Scholar Tradition",
            level: 3,
            source: "TLoTrR",
            desc: "Choose a tradition (Healing or Lore) which grants features at levels 3 and 7[cite: 45]."
        },
        {
            title: "Unending Rhymes",
            level: 5,
            source: "TLoTrR",
            desc: "Regain all expended uses of Rhymes of Lore on a Short or Long Rest[cite: 45]."
        },
        {
            title: "Unfailing Rhymes",
            level: 10,
            source: "TLoTrR",
            desc: "If a creature adds a Lore die to a roll and the roll still fails, the creature keeps the Lore die[cite: 45]."
        }
    ]
});