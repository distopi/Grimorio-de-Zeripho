window.dndData = window.dndData || {};
window.dndData.classes = window.dndData.classes || [];

window.dndData.classes.push({
    id: "illrigger",
    name: "Illrigger",
    source: "illr",
    role: "Martial Hell Knight / Striker / Support",
    hitDice: "D10 per Illrigger level",
    primaryAttr: "Strength or Dexterity; Charisma",
    hitPointsLevel1: "10 + Con. modifier",
    hitPointsAdditional: "D10 + your Con. modifier, or, 6 + your Con. modifier",
    savingThrows: "Constitution, Charisma",
    skillProficiencies: "Choose 2: Arcana, Athletics, Deception, Insight, Intimidation, Investigation, Persuasion, Religion, or Stealth",
    weaponProficiencies: "Simple and Martial weapons",
    armorTraining: "Light and Medium armor and Shields",
    startingEquipment: "Choose A or B options: (a) Two martial weapons or (b) One martial weapon and a shield; (a) Chain shirt or (b) Leather armor, a longbow, and 20 arrows; (a) Priest's pack or (b) Dungeoneer's pack; Five javelins",
    multiclassing: "Ability Score Minimum: Strength 13 or Dexterity 13; Charisma 13.<br><strong>Weapon Proficiencies:</strong> Simple and Martial weapons<br><strong>Armor Training:</strong> Light and Medium armor and Shields",
    description: "Commanders of Hell's armies and paladins of darkness, Illriggers enforce diabolic contracts through magical seals, devastating hellfire explosions, and life-draining conduit abilities.",
    customColumns: ["Seals", "Seal Damage", "Interdict Boons", "Infernal Conduit Dice"],
    levels: [
        { level: 1, pb: "+2", features: "Baleful Interdict, Forked Tongue", seals: "3", sealDamage: "1d6", interdictBoons: "—", infernalConduitDice: "—" },
        { level: 2, pb: "+2", features: "Combat Mastery, Interdiction", seals: "3", sealDamage: "1d6", interdictBoons: "1", infernalConduitDice: "—" },
        { level: 3, pb: "+2", features: "Diabolic Contract, Invoke Hell", seals: "4", sealDamage: "1d6", interdictBoons: "1", infernalConduitDice: "—" },
        { level: 4, pb: "+2", features: "Ability Score Improvement", seals: "4", sealDamage: "1d6", interdictBoons: "1", infernalConduitDice: "—" },
        { level: 5, pb: "+3", features: "Extra Attack", seals: "4", sealDamage: "2d6", interdictBoons: "1", infernalConduitDice: "—" },
        { level: 6, pb: "+3", features: "Infernal Conduit", seals: "4", sealDamage: "2d6", interdictBoons: "1", infernalConduitDice: "3" },
        { level: 7, pb: "+3", features: "Diabolic Contract feature", seals: "5", sealDamage: "2d6", interdictBoons: "2", infernalConduitDice: "4" },
        { level: 8, pb: "+3", features: "Ability Score Improvement", seals: "5", sealDamage: "2d6", interdictBoons: "2", infernalConduitDice: "4" },
        { level: 9, pb: "+4", features: "Forked Tongue Improvement", seals: "5", sealDamage: "2d6", interdictBoons: "2", infernalConduitDice: "5" },
        { level: 10, pb: "+4", features: "Blood Price", seals: "5", sealDamage: "2d6", interdictBoons: "2", infernalConduitDice: "5" },
        { level: 11, pb: "+4", features: "Diabolic Contract feature, Infernal Conduit Improvement, Terrorizing Force", seals: "5", sealDamage: "3d6", interdictBoons: "2", infernalConduitDice: "6" },
        { level: 12, pb: "+4", features: "Ability Score Improvement", seals: "5", sealDamage: "3d6", interdictBoons: "2", infernalConduitDice: "6" },
        { level: 13, pb: "+5", features: "—", seals: "6", sealDamage: "3d6", interdictBoons: "3", infernalConduitDice: "7" },
        { level: 14, pb: "+5", features: "Superior Interdict", seals: "6", sealDamage: "3d6", interdictBoons: "3", infernalConduitDice: "7" },
        { level: 15, pb: "+5", features: "Diabolic Contract feature", seals: "6", sealDamage: "3d6", interdictBoons: "3", infernalConduitDice: "8" },
        { level: 16, pb: "+5", features: "Ability Score Improvement", seals: "6", sealDamage: "3d6", interdictBoons: "3", infernalConduitDice: "8" },
        { level: 17, pb: "+6", features: "Infernal Majesty", seals: "6", sealDamage: "3d6", interdictBoons: "3", infernalConduitDice: "9" },
        { level: 18, pb: "+6", features: "—", seals: "7", sealDamage: "3d6", interdictBoons: "4", infernalConduitDice: "9" },
        { level: 19, pb: "+6", features: "Ability Score Improvement", seals: "7", sealDamage: "3d6", interdictBoons: "4", infernalConduitDice: "10" },
        { level: 20, pb: "+6", features: "Master of Hell", seals: "7", sealDamage: "4d6", interdictBoons: "4", infernalConduitDice: "10" }
    ],
    featuresList: [
        {
            title: "Baleful Interdict",
            level: 1,
            source: "illr",
            desc: "Place invisible magical seals on targets within 30 ft (when hitting with a weapon attack or using a Bonus Action). When an interdicted creature takes damage from another source, you can burn seals to deal extra Fire or Necrotic damage (scaling from 1d6 up to 4d6 per seal)[cite: 25, 27].<br><br><strong>Interdict save DC</strong> = 8 + PB + Charisma modifier."
        },
        {
            title: "Forked Tongue",
            level: 1,
            source: "illr",
            desc: "Speak, read, and write Infernal. You also gain two temporary spoken languages that you can swap after a Long Rest. At level 9, gain a 3rd language and Advantage on Wisdom (Insight) checks[cite: 25, 27]."
        },
        {
            title: "Combat Mastery",
            level: 2,
            source: "illr",
            desc: "Choose a combat stance: <strong>Bravado</strong> (Unarmored AC = 10 + Dex + Cha), <strong>Brutal</strong> (push targets 5 ft with Two-Handed weapons), <strong>Inexorable</strong> (up to +5 to saves near enemies), <strong>Lies</strong> (use Cha for attacks/damage with chosen weapon type), <strong>Lissome</strong> (disengage 5 ft on hit), or <strong>Unfettered</strong> (extend seal/conduit range)."
        },
        {
            title: "Interdiction",
            level: 2,
            source: "illr",
            desc: "Learn Interdict Boons that modify your seals or grant unique active/passive abilities (such as Abating Seal, Dis's Onslaught, Hellish Frenzy, Soul Eater, and Swift Retribution)[cite: 25, 27]."
        },
        {
            title: "Diabolic Contract",
            level: 3,
            source: "illr",
            desc: "Sign a contract with an archdevil (Architect of Ruin, Hellspeaker, Painkiller, Sanguine Knight, or Shadowmaster). Grants features at levels 3, 7, 11, and 15[cite: 25, 27]."
        },
        {
            title: "Invoke Hell",
            level: 3,
            source: "illr",
            desc: "Channel infernal energy to empower magical subclass effects. Recharges on a Short or Long Rest."
        },
        {
            title: "Extra Attack",
            level: 5,
            source: "illr",
            desc: "Attack twice instead of once whenever you take the Attack action."
        },
        {
            title: "Infernal Conduit",
            level: 6,
            source: "illr",
            desc: "Gain a pool of d10 dice[cite: 25, 27]. As an action, touch a creature to <strong>Invigorate</strong> (heal target at the cost of taking Necrotic damage) or <strong>Devour</strong> (deal Necrotic damage to target and heal yourself equal to damage dealt; inflicts Exhaustion at level 11)[cite: 25, 27]."
        },
        {
            title: "Blood Price",
            level: 10,
            source: "illr",
            desc: "When you fail a saving throw, spend one Hit Die, roll it, and add the result to your save."
        },
        {
            title: "Terrorizing Force",
            level: 11,
            source: "illr",
            desc: "Your weapon attacks deal an extra 1d8 damage of a chosen type (Cold, Fire, Necrotic, or Poison). Changeable on a Long Rest."
        },
        {
            title: "Superior Interdict",
            level: 14,
            source: "illr",
            desc: "Damage from your seals ignores damage resistance. Regain one seal as a Bonus Action once per Long Rest if you have none left."
        },
        {
            title: "Infernal Majesty",
            level: 17,
            source: "illr",
            desc: "Bonus Action to assume an infernal form for 10 minutes: gain Fire/Cold/Necrotic resistance, 60 ft fly speed, enhanced Terrorizing Force (2d8), and an infernal resurrection upon death."
        },
        {
            title: "Master of Hell",
            level: 20,
            source: "illr",
            desc: "As an action, unleash a 50 ft-radius hellstorm centered within 150 ft. Choose <strong>Inferno</strong> (10d10 Fire/Necrotic damage + burn), <strong>Pestilence</strong> (10d10 Poison/Necrotic damage + poison), or <strong>Darkness</strong> (10d10 Cold damage + blindness). Usable once per Long Rest."
        }
    ]
});