window.dndData = window.dndData || {};
window.dndData.classes = window.dndData.classes || [];

window.dndData.classes.push({
    id: "kindred",
    name: "Kindred",
    source: "VtM:BB",
    role: "Undead Predator / Blood-Fueled Warrior / Vampiric Striker",
    hitDice: "D10 per Kindred level",
    primaryAttr: "Charisma",
    hitPointsLevel1: "10 + Con. modifier",
    hitPointsAdditional: "D10 + your Con. modifier, or, 6 + your Con. modifier",
    savingThrows: "Constitution, Charisma",
    skillProficiencies: "Choose 2: Athletics, Deception, History, Intimidation, Perception, Persuasion, Survival, or Stealth",
    weaponProficiencies: "Simple weapons and Martial weapons that have the Light property",
    toolProficiencies: "None",
    armorTraining: "Light armor and Breastplate",
    startingEquipment: "Choose A or B: (A) Leather Armor, 2 Daggers, Shortsword, Artisan's Tools of your choice, Explorer's Pack, and 15 GP; or (B) 75 GP",
    multiclassing: "Ability Score Minimum: Charisma 13.<br><strong>Skill Proficiencies:</strong> Choose 1 skill from Kindred skill list<br><strong>Weapon Proficiencies:</strong> Simple weapons<br><strong>Armor Training:</strong> Light armor and Breastplate",
    description: "Undead creatures of the night driven by the Beast within. Kindred feed on the living to fuel supernatural Blood Potency, regenerate wounds, and unleash devastating vampiric powers.",
    customColumns: ["Blood Points", "Feed Dice"],
    levels: [
        { level: 1, pb: "+2", features: "Feed, The Beast, Blood Potency, Kindred Biology", bloodPoints: "1", feedDice: "2d6" },
        { level: 2, pb: "+2", features: "Kindred Feat", bloodPoints: "2", feedDice: "2d6" },
        { level: 3, pb: "+2", features: "Kindred Subclass", bloodPoints: "2", feedDice: "2d6" },
        { level: 4, pb: "+2", features: "Ability Score Improvement", bloodPoints: "3", feedDice: "2d6" },
        { level: 5, pb: "+3", features: "Bestial Fury, Improved Feed", bloodPoints: "3", feedDice: "3d6" },
        { level: 6, pb: "+3", features: "Subclass Feature", bloodPoints: "4", feedDice: "3d6" },
        { level: 7, pb: "+3", features: "Kindred Feat", bloodPoints: "4", feedDice: "3d6" },
        { level: 8, pb: "+3", features: "Ability Score Improvement", bloodPoints: "5", feedDice: "3d6" },
        { level: 9, pb: "+4", features: "Subclass Feature", bloodPoints: "5", feedDice: "4d6" },
        { level: 10, pb: "+4", features: "Kindred Feat, Vampiric Will", bloodPoints: "6", feedDice: "4d6" },
        { level: 11, pb: "+4", features: "Subclass Feature", bloodPoints: "6", feedDice: "4d6" },
        { level: 12, pb: "+4", features: "Ability Score Improvement", bloodPoints: "7", feedDice: "4d6" },
        { level: 13, pb: "+5", features: "Kindred Feat", bloodPoints: "7", feedDice: "5d6" },
        { level: 14, pb: "+5", features: "Efficient Feeding", bloodPoints: "8", feedDice: "5d6" },
        { level: 15, pb: "+5", features: "Subclass Feature", bloodPoints: "8", feedDice: "5d6" },
        { level: 16, pb: "+5", features: "Ability Score Improvement", bloodPoints: "9", feedDice: "5d6" },
        { level: 17, pb: "+6", features: "Kindred Feat", bloodPoints: "9", feedDice: "6d6" },
        { level: 18, pb: "+6", features: "Subclass Feature", bloodPoints: "10", feedDice: "6d6" },
        { level: 19, pb: "+6", features: "Epic Boon", bloodPoints: "10", feedDice: "6d6" },
        { level: 20, pb: "+6", features: "Ancient Awakening", bloodPoints: "11", feedDice: "6d6" }
    ],
    featuresList: [
        {
            title: "Feed",
            level: 1,
            source: "VtM:BB",
            desc: "As an Action (1/turn), feed on a target within 5 ft that is willing, Charmed, or affected by a disabling condition (Grappled, Incapacitated, Paralyzed, Restrained, Stunned, Unconscious)[cite: 45]. Roll Feed Dice + Con modifier to deal Necrotic damage that reduces the target's HP maximum[cite: 45]. Regain 1 Blood Point if any die rolls a 6 or if target's HP max hits 0[cite: 45]."
        },
        {
            title: "The Beast",
            level: 1,
            source: "VtM:BB",
            desc: "Bonus Action to sharpen senses and gain Advantage on D20 Tests until the start of your next turn (PB uses/Rest)[cite: 45]. <strong>Hunger:</strong> If a check benefiting from the Beast fails, enter a bloodlusted state for 1 min (or until feeding) forcing you to attack/grapple/feed on the nearest eligible target[cite: 45]."
        },
        {
            title: "Blood Potency",
            level: 1,
            source: "VtM:BB",
            desc: "Pool of Blood Points used for features[cite: 45]:<br>• <strong>Heal Wounds:</strong> Bonus Action and 1 Blood Point to regain 1d10 + Kindred level HP[cite: 45].<br>• <strong>Hunger Sated:</strong> Spend 1 Blood Point on a failed Beast check to ignore Hunger[cite: 45].<br>• <strong>Vitae Powers:</strong> Fuel Kindred feats and subclass abilities[cite: 45]."
        },
        {
            title: "Kindred Biology",
            level: 1,
            source: "VtM:BB",
            desc: "Gains Undead traits[cite: 45]: Darkvision 60 ft[cite: 45]; Sanguivore (cannot eat normal food, requires 1 Blood Point/day for sustenance)[cite: 45]; Sunlight & Fire Vulnerability[cite: 45]; Supernatural Spellcasting (Charisma ability, no V/S components, damage doesn't break Concentration)[cite: 45]; Torpor (drops to 1 HP instead of death at Exhaustion level 6 until fed Blood Points)[cite: 45]; Vampiric Resilience (auto-succeed Death Saves unless killed by Fire/Radiant or decapitation)[cite: 45]; Wooden Stake Vulnerability (Paralyzed when staked)[cite: 45]."
        },
        {
            title: "Kindred Feat",
            level: 2,
            source: "VtM:BB",
            desc: "Gain a specialized Kindred feat at levels 2, 7, 10, 13, and 17[cite: 43, 45]."
        },
        {
            title: "Kindred Subclass",
            level: 3,
            source: "VtM:BB",
            desc: "Choose a Kindred subclass granting features at levels 3, 6, 9, 11, 15, and 18[cite: 43, 45]."
        },
        {
            title: "Bestial Fury",
            level: 5,
            source: "VtM:BB",
            desc: "Once per turn on hit, spend 2 Beast uses to roll weapon damage dice twice and choose either roll[cite: 45]. <strong>Bestial Flurry:</strong> While affected by the Beast, attack twice instead of once with the Attack action[cite: 45]."
        },
        {
            title: "Improved Feed",
            level: 5,
            source: "VtM:BB",
            desc: "Use the Feed feature as a Bonus Action[cite: 45]. Targets grappled by you have Disadvantage on checks to escape the grapple[cite: 45]."
        },
        {
            title: "Vampiric Will",
            level: 10,
            source: "VtM:BB",
            desc: "Gain Advantage on saving throws to avoid or end the Charmed condition, and against Turn Undead effects[cite: 45]."
        },
        {
            title: "Efficient Feeding",
            level: 14,
            source: "VtM:BB",
            desc: "Whenever you roll a die for your Feed feature, you can reroll it and must use the new roll[cite: 45]."
        },
        {
            title: "Ancient Awakening",
            level: 20,
            source: "VtM:BB",
            desc: "The ancient vampiric essence awakens[cite: 45]. Choose 4 Ability Scores and increase each by +2, up to a maximum of 25[cite: 45]."
        }
    ]
});