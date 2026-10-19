window.dndData = window.dndData || {};
window.dndData.classes = window.dndData.classes || [];

window.dndData.classes.push({
    id: "treasure_hunter",
    name: "Treasure Hunter",
    source: "TLoTrR",
    role: "Skill Expert / Infiltrator / Precision Striker",
    hitDice: "D8 per Treasure Hunter level",
    primaryAttr: "Dexterity",
    hitPointsLevel1: "8 + Con. modifier",
    hitPointsAdditional: "D8 + your Con. modifier, or, 5 + your Con. modifier",
    savingThrows: "Dexterity, Intelligence",
    skillProficiencies: "Choose 4: Acrobatics, Athletics, Deception, Insight, Investigation, Old Lore, Perception, Persuasion, Riddle, Sleight of Hand, Stealth, or Travel",
    weaponProficiencies: "Simple weapons, short sword, and swords",
    toolProficiencies: "Choose 1: cartographer's tools, a gaming set, or thieves' tools",
    armorTraining: "Light armor",
    startingEquipment: "Leather shirt, any simple melee weapon, and any one tool; (a) short sword or (b) sword; (a) bow + quiver of 20 arrows or (b) any simple melee weapon (plus standard of living equipment)",
    multiclassing: "Ability Score Minimum: Dexterity 13.<br><strong>Skill Proficiencies:</strong> Choose 1 skill from Treasure Hunter skill list<br><strong>Weapon Proficiencies:</strong> Simple weapons<br><strong>Tool Proficiencies:</strong> One tool from class's tools list<br><strong>Armor Training:</strong> Light armor",
    description: "Cunning adventurers and covert operatives who rely on expertise, stealth, agility, and opportunistically executed sneak attacks to recover lost relics and navigate danger.",
    customColumns: ["Sneak Attack"],
    levels: [
        { level: 1, pb: "+2", features: "Expertise, Sneak Attack", sneakAttack: "1d6" },
        { level: 2, pb: "+2", features: "Cunning Action", sneakAttack: "1d6" },
        { level: 3, pb: "+2", features: "Treasure Hunter Speciality", sneakAttack: "2d6" },
        { level: 4, pb: "+2", features: "Virtue", sneakAttack: "2d6" },
        { level: 5, pb: "+3", features: "Uncanny Dodge", sneakAttack: "3d6" },
        { level: 6, pb: "+3", features: "Craft or Virtue", sneakAttack: "3d6" },
        { level: 7, pb: "+3", features: "Treasure Hunter Speciality feature", sneakAttack: "4d6" },
        { level: 8, pb: "+3", features: "Virtue", sneakAttack: "4d6" },
        { level: 9, pb: "+4", features: "Expertise", sneakAttack: "5d6" },
        { level: 10, pb: "+4", features: "Reliable Talent", sneakAttack: "5d6" }
    ],
    featuresList: [
        {
            title: "Expertise",
            level: 1,
            source: "TLoTrR",
            desc: "Double your proficiency bonus for two chosen skill or tool proficiencies[cite: 47]. Choose two additional proficiencies at level 9[cite: 46, 47]."
        },
        {
            title: "Sneak Attack",
            level: 1,
            source: "TLoTrR",
            desc: "Once per turn, deal extra damage to one creature hit with a Finesse or Ranged weapon if you have Advantage or if an active enemy of the target is within 5 ft[cite: 47]. Damage scales from 1d6 up to 5d6 at level 9[cite: 46, 47]."
        },
        {
            title: "Cunning Action",
            level: 2,
            source: "TLoTrR",
            desc: "Take the Dash, Disengage, or Hide action as a Bonus Action on each of your turns[cite: 47]."
        },
        {
            title: "Treasure Hunter Speciality",
            level: 3,
            source: "TLoTrR",
            desc: "Choose a speciality (Burglar or Spy) which grants features at levels 3 and 7[cite: 47]."
        },
        {
            title: "Craft or Virtue",
            level: 4,
            source: "TLoTrR",
            desc: "Take a common or cultural virtue at levels 4, 6, and 8[cite: 47]. At level 6, you can choose to gain a craft slot and a craft from the Scholar's Crafts list instead of a virtue[cite: 47]."
        },
        {
            title: "Uncanny Dodge",
            level: 5,
            source: "TLoTrR",
            desc: "Use your Reaction to halve an incoming attack's damage from an attacker you can see[cite: 47]."
        },
        {
            title: "Reliable Talent",
            level: 10,
            source: "TLoTrR",
            desc: "Treat any d20 roll of 9 or lower as a 10 for any ability check that includes your proficiency bonus[cite: 47]."
        }
    ]
});