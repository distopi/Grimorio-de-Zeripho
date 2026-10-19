window.dndData = window.dndData || {};
window.dndData.classes = window.dndData.classes || [];

window.dndData.classes.push({
    id: "barbarian",
    name: "Barbarian",
    source: "PHB'24",
    role: "Martial Tank / Frontline Bruiser",
    hitDice: "D12 per Barbarian level",
    primaryAttr: "Strength",
    hitPointsLevel1: "12 + Con. modifier",
    hitPointsAdditional: "D12 + your Con. modifier, or, 7 + your Con. modifier",
    savingThrows: "Strength, Constitution",
    skillProficiencies: "Choose 2: Animal Handling, Athletics, Intimidation, Nature, Perception, or Survival",
    weaponProficiencies: "Simple and Martial weapons",
    armorTraining: "Light and Medium armor and Shields",
    startingEquipment: "Choose A or B: (A) Greataxe, 4 Handaxes, Explorer's Pack, and 15 GP; or (B) 75 GP",
    multiclassing: "Ability Score Minimum: Strength 13.<br><strong>Weapon Proficiencies:</strong> Martial weapons<br><strong>Armor Training:</strong> Shields",
    description: "For Barbarians, Rage is a fuel that powers extraordinary ferocity, endurance, and instincts in combat, making them unrivaled frontline warriors.",
    customColumns: ["Rages", "Rage Damage", "Weapon Mastery"],
    levels: [
        { level: 1, pb: "+2", features: "Rage, Unarmored Defense, Weapon Mastery", rages: "2", rageDamage: "+2", weaponMastery: "2" },
        { level: 2, pb: "+2", features: "Danger Sense, Reckless Attack", rages: "2", rageDamage: "+2", weaponMastery: "2" },
        { level: 3, pb: "+2", features: "Barbarian Subclass, Primal Knowledge", rages: "3", rageDamage: "+2", weaponMastery: "2" },
        { level: 4, pb: "+2", features: "Ability Score Improvement", rages: "3", rageDamage: "+2", weaponMastery: "3" },
        { level: 5, pb: "+3", features: "Extra Attack, Fast Movement", rages: "3", rageDamage: "+2", weaponMastery: "3" },
        { level: 6, pb: "+3", features: "Subclass Feature", rages: "4", rageDamage: "+2", weaponMastery: "3" },
        { level: 7, pb: "+3", features: "Feral Instinct, Instinctive Pounce", rages: "4", rageDamage: "+2", weaponMastery: "3" },
        { level: 8, pb: "+3", features: "Ability Score Improvement", rages: "4", rageDamage: "+2", weaponMastery: "3" },
        { level: 9, pb: "+4", features: "Brutal Strike", rages: "4", rageDamage: "+3", weaponMastery: "3" },
        { level: 10, pb: "+4", features: "Subclass Feature", rages: "4", rageDamage: "+3", weaponMastery: "4" },
        { level: 11, pb: "+4", features: "Relentless Rage", rages: "4", rageDamage: "+3", weaponMastery: "4" },
        { level: 12, pb: "+4", features: "Ability Score Improvement", rages: "5", rageDamage: "+3", weaponMastery: "4" },
        { level: 13, pb: "+5", features: "Improved Brutal Strike", rages: "5", rageDamage: "+3", weaponMastery: "4" },
        { level: 14, pb: "+5", features: "Subclass Feature", rages: "5", rageDamage: "+3", weaponMastery: "4" },
        { level: 15, pb: "+5", features: "Persistent Rage", rages: "5", rageDamage: "+3", weaponMastery: "4" },
        { level: 16, pb: "+5", features: "Ability Score Improvement", rages: "5", rageDamage: "+4", weaponMastery: "4" },
        { level: 17, pb: "+6", features: "Improved Brutal Strike", rages: "6", rageDamage: "+4", weaponMastery: "4" },
        { level: 18, pb: "+6", features: "Indomitable Might", rages: "6", rageDamage: "+4", weaponMastery: "4" },
        { level: 19, pb: "+6", features: "Epic Boon", rages: "6", rageDamage: "+4", weaponMastery: "4" },
        { level: 20, pb: "+6", features: "Primal Champion", rages: "6", rageDamage: "+4", weaponMastery: "4" }
    ],
    featuresList: [
        {
            title: "Rage",
            level: 1,
            source: "PHB'24",
            desc: "Bonus Action to enter Rage (if not wearing Heavy armor). Grants Resistance to Bludgeoning, Piercing, and Slashing damage; bonus damage on Strength attacks; Advantage on Strength checks and saves; extends for 10 minutes by attacking, forcing saves, or using a Bonus Action."
        },
        {
            title: "Unarmored Defense",
            level: 1,
            source: "PHB'24",
            desc: "While unarmored, base AC equals 10 + Dexterity modifier + Constitution modifier. Can use a Shield."
        },
        {
            title: "Weapon Mastery",
            level: 1,
            source: "PHB'24",
            desc: "Use weapon mastery properties of two chosen Simple or Martial Melee weapons. Swap one choice after a Long Rest."
        },
        {
            title: "Danger Sense",
            level: 2,
            source: "PHB'24",
            desc: "Advantage on Dexterity saving throws unless Incapacitated."
        },
        {
            title: "Reckless Attack",
            level: 2,
            source: "PHB'24",
            desc: "Gain Advantage on Strength-based attack rolls until start of next turn, but attack rolls against you have Advantage during that time."
        },
        {
            title: "Barbarian Subclass",
            level: 3,
            source: "PHB'24",
            desc: "Choose a Barbarian subclass which grants features at levels 3, 6, 10, and 14."
        },
        {
            title: "Primal Knowledge",
            level: 3,
            source: "PHB'24",
            desc: "Gain proficiency in 1 Barbarian skill. While Raging, perform Acrobatics, Intimidation, Perception, Stealth, or Survival checks using Strength."
        },
        {
            title: "Extra Attack",
            level: 5,
            source: "PHB'24",
            desc: "Attack twice instead of once whenever you take the Attack action."
        },
        {
            title: "Fast Movement",
            level: 5,
            source: "PHB'24",
            desc: "Speed increases by 10 feet while not wearing Heavy armor."
        },
        {
            title: "Feral Instinct",
            level: 7,
            source: "PHB'24",
            desc: "Advantage on Initiative rolls."
        },
        {
            title: "Instinctive Pounce",
            level: 7,
            source: "PHB'24",
            desc: "As part of the Bonus Action to enter Rage, move up to half your Speed."
        },
        {
            title: "Brutal Strike",
            level: 9,
            source: "PHB'24",
            desc: "Forgo Reckless Attack Advantage on hit to deal +1d10 damage and apply <strong>Forceful Blow</strong> (push 15 ft + move toward) or <strong>Hamstring Blow</strong> (-15 ft Speed)."
        },
        {
            title: "Relentless Rage",
            level: 11,
            source: "PHB'24",
            desc: "If dropped to 0 HP while Raging, make a DC 10 Con save to drop to HP = 2 × Barbarian Level instead. DC increases by 5 each use until a rest."
        },
        {
            title: "Improved Brutal Strike",
            level: 13,
            source: "PHB'24",
            desc: "Unlocks <strong>Staggering Blow</strong> (Disadvantage on target's next save & no opportunity attacks) and <strong>Sundering Blow</strong> (+5 bonus to next ally's attack)."
        },
        {
            title: "Persistent Rage",
            level: 15,
            source: "PHB'24",
            desc: "Regain all expended Rages upon rolling Initiative (1/Long Rest). Rage lasts 10 minutes unconditionally unless Unconscious or wearing Heavy armor."
        },
        {
            title: "Improved Brutal Strike",
            level: 17,
            source: "PHB'24",
            desc: "Brutal Strike extra damage increases to 2d10 and lets you apply two different Brutal Strike effects simultaneously."
        },
        {
            title: "Indomitable Might",
            level: 18,
            source: "PHB'24",
            desc: "If your total on a Strength check or save is lower than your Strength score, use your Strength score instead."
        },
        {
            title: "Epic Boon",
            level: 19,
            source: "PHB'24",
            desc: "Gain an Epic Boon feat or another feat of your choice."
        },
        {
            title: "Primal Champion",
            level: 20,
            source: "PHB'24",
            desc: "Your Strength and Constitution scores increase by 4, up to a maximum of 25."
        }
    ]
});