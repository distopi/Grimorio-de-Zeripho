window.dndData = window.dndData || {};
window.dndData.classes = window.dndData.classes || [];

window.dndData.classes.push({
    id: "rogue",
    name: "Rogue",
    source: "PHB'24",
    role: "Martial Skirmisher / Skill Expert / Precision Striker",
    hitDice: "D8 per Rogue level",
    primaryAttr: "Dexterity",
    hitPointsLevel1: "8 + Con. modifier",
    hitPointsAdditional: "D8 + your Con. modifier, or, 5 + your Con. modifier",
    savingThrows: "Dexterity, Intelligence",
    skillProficiencies: "Choose 4: Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Persuasion, Sleight of Hand, or Stealth",
    weaponProficiencies: "Simple weapons and Martial weapons that have the Finesse or Light property",
    toolProficiencies: "Thieves' Tools",
    armorTraining: "Light armor",
    startingEquipment: "Choose A or B: (A) Leather Armor, 2 Daggers, Shortsword, Shortbow, 20 Arrows, Quiver, Thieves' Tools, Burglar's Pack, 8 GP; or (B) 100 GP",
    multiclassing: "Ability Score Minimum: Dexterity 13.<br><strong>Skill Proficiencies:</strong> Choose 1 skill from Rogue skill list<br><strong>Tool Proficiencies:</strong> Thieves' Tools<br><strong>Armor Training:</strong> Light armor",
    description: "Masters of stealth, expertise, and lethal precision, Rogues exploit enemies' weaknesses through powerful Sneak Attacks and versatile Cunning Strikes.",
    customColumns: ["Sneak Attack"],
    levels: [
        { level: 1, pb: "+2", features: "Expertise, Sneak Attack, Thieves' Cant, Weapon Mastery", sneakAttack: "1d6" },
        { level: 2, pb: "+2", features: "Cunning Action", sneakAttack: "1d6" },
        { level: 3, pb: "+2", features: "Rogue Subclass, Steady Aim", sneakAttack: "2d6" },
        { level: 4, pb: "+2", features: "Ability Score Improvement", sneakAttack: "2d6" },
        { level: 5, pb: "+3", features: "Cunning Strike, Uncanny Dodge", sneakAttack: "3d6" },
        { level: 6, pb: "+3", features: "Expertise", sneakAttack: "3d6" },
        { level: 7, pb: "+3", features: "Evasion, Reliable Talent", sneakAttack: "4d6" },
        { level: 8, pb: "+3", features: "Ability Score Improvement", sneakAttack: "4d6" },
        { level: 9, pb: "+4", features: "Subclass Feature", sneakAttack: "5d6" },
        { level: 10, pb: "+4", features: "Ability Score Improvement", sneakAttack: "5d6" },
        { level: 11, pb: "+4", features: "Improved Cunning Strike", sneakAttack: "6d6" },
        { level: 12, pb: "+4", features: "Ability Score Improvement", sneakAttack: "6d6" },
        { level: 13, pb: "+5", features: "Subclass Feature", sneakAttack: "7d6" },
        { level: 14, pb: "+5", features: "Devious Strikes", sneakAttack: "7d6" },
        { level: 15, pb: "+5", features: "Slippery Mind", sneakAttack: "8d6" },
        { level: 16, pb: "+5", features: "Ability Score Improvement", sneakAttack: "8d6" },
        { level: 17, pb: "+6", features: "Subclass Feature", sneakAttack: "9d6" },
        { level: 18, pb: "+6", features: "Elusive", sneakAttack: "9d6" },
        { level: 19, pb: "+6", features: "Epic Boon", sneakAttack: "10d6" },
        { level: 20, pb: "+6", features: "Stroke of Luck", sneakAttack: "10d6" }
    ],
    featuresList: [
        {
            title: "Expertise",
            level: 1,
            source: "PHB'24",
            desc: "Gain Expertise in two skill proficiencies of your choice. Gain Expertise in two additional skills at level 6."
        },
        {
            title: "Sneak Attack",
            level: 1,
            source: "PHB'24",
            desc: "Once per turn, deal extra damage to one creature hit with a Finesse or Ranged weapon if you have Advantage or if an active ally is within 5 ft of the target. Damage scales from 1d6 up to 10d6."
        },
        {
            title: "Thieves' Cant",
            level: 1,
            source: "PHB'24",
            desc: "You know Thieves' Cant and one extra language of your choice."
        },
        {
            title: "Weapon Mastery",
            level: 1,
            source: "PHB'24",
            desc: "Use weapon mastery properties of two chosen weapons with which you have proficiency. Can change choices after a Long Rest."
        },
        {
            title: "Cunning Action",
            level: 2,
            source: "PHB'24",
            desc: "Take Dash, Disengage, or Hide as a Bonus Action on your turn."
        },
        {
            title: "Rogue Subclass",
            level: 3,
            source: "PHB'24",
            desc: "Choose a Rogue subclass which grants features at levels 3, 9, 13, and 17."
        },
        {
            title: "Steady Aim",
            level: 3,
            source: "PHB'24",
            desc: "Bonus Action to gain Advantage on your next attack roll this turn, provided you haven't moved this turn. Reduces your Speed to 0 for the turn."
        },
        {
            title: "Cunning Strike",
            level: 5,
            source: "PHB'24",
            desc: "Forgo 1 or more Sneak Attack dice to apply additional effects on hit (DC = 8 + Dex mod + PB):<br>• <strong>Poison (1d6):</strong> Target must save or be Poisoned for 1 minute.<br>• <strong>Trip (1d6):</strong> Large or smaller target must save or be knocked Prone.<br>• <strong>Withdraw (1d6):</strong> Move up to half your Speed immediately without provoking Opportunity Attacks."
        },
        {
            title: "Uncanny Dodge",
            level: 5,
            source: "PHB'24",
            desc: "Reaction to halve an incoming attack's damage from an attacker you can see."
        },
        {
            title: "Evasion",
            level: 7,
            source: "PHB'24",
            desc: "Take no damage on successful Dexterity saving throws against half-damage effects, and only half damage on failed saves."
        },
        {
            title: "Reliable Talent",
            level: 7,
            source: "PHB'24",
            desc: "Treat any d20 roll of 9 or lower as a 10 for any ability check using a skill or tool proficiency."
        },
        {
            title: "Improved Cunning Strike",
            level: 11,
            source: "PHB'24",
            desc: "Apply up to two Cunning Strike effects when dealing Sneak Attack damage, paying the die cost for each."
        },
        {
            title: "Devious Strikes",
            level: 14,
            source: "PHB'24",
            desc: "Unlocks new Cunning Strike options:<br>• <strong>Daze (2d6):</strong> Save or be restricted to move, action, or bonus action on next turn.<br>• <strong>Knock Out (6d6):</strong> Save or fall Unconscious for 1 minute.<br>• <strong>Obscure (3d6):</strong> Save or be Blinded until the end of its next turn."
        },
        {
            title: "Slippery Mind",
            level: 15,
            source: "PHB'24",
            desc: "Gain proficiency in Wisdom and Charisma saving throws."
        },
        {
            title: "Elusive",
            level: 18,
            source: "PHB'24",
            desc: "No attack roll can have Advantage against you unless you have the Incapacitated condition."
        },
        {
            title: "Epic Boon",
            level: 19,
            source: "PHB'24",
            desc: "Gain an Epic Boon feat or another feat of your choice."
        },
        {
            title: "Stroke of Luck",
            level: 20,
            source: "PHB'24",
            desc: "If you fail a D20 Test, turn the roll into a 20 (recharges on Short or Long Rest)."
        }
    ]
});