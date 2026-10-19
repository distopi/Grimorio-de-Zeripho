window.dndData = window.dndData || {};
window.dndData.classes = window.dndData.classes || [];

window.dndData.classes.push({
    id: "gunslinger",
    name: "Gunslinger",
    source: "GC:VSS'24",
    role: "Martial Ranged Striker",
    hitDice: "D8 per Gunslinger level",
    primaryAttr: "Dexterity",
    hitPointsLevel1: "8 + Con. modifier",
    hitPointsAdditional: "D8 + your Con. modifier, or, 5 + your Con. modifier",
    savingThrows: "Dexterity, Charisma",
    skillProficiencies: "Choose 2: Acrobatics, Animal Handling, Athletics, Deception, Insight, Intimidation, Perception, Persuasion, Sleight of Hand, or Stealth",
    weaponProficiencies: "Simple weapons and Martial Ranged weapons",
    armorTraining: "Light armor",
    startingEquipment: "Choose A or B: (A) Leather Armor, 2 Daggers, Revolver, 50 Bullet, Explorer's Pack, and 11 GP; or (B) 175 GP",
    multiclassing: "To qualify for a new class, you must have a score of at least 13 in the primary ability of the new class and your current classes.<br><strong>Weapon Proficiencies:</strong> Martial Ranged weapons",
    description: "Masters of Ranged combat and high-stakes marksmanship, Gunslingers turn high risk into devastating reward using specialized maneuvers and deadly critical strikes.",
    customColumns: ["Risk Dice", "Weapon Mastery"],
    levels: [
        { level: 1, pb: "+2", features: "Fighting Style, Quick Draw, Weapon Mastery", riskDice: "—", weaponMastery: "2" },
        { level: 2, pb: "+2", features: "Critical Shot, Risk", riskDice: "4d8", weaponMastery: "2" },
        { level: 3, pb: "+2", features: "Gunslinger Subclass", riskDice: "4d8", weaponMastery: "2" },
        { level: 4, pb: "+2", features: "Ability Score Improvement", riskDice: "4d8", weaponMastery: "3" },
        { level: 5, pb: "+3", features: "Extra Attack, Gut Shot", riskDice: "4d8", weaponMastery: "3" },
        { level: 6, pb: "+3", features: "Subclass Feature", riskDice: "5d8", weaponMastery: "3" },
        { level: 7, pb: "+3", features: "Evasion", riskDice: "5d8", weaponMastery: "3" },
        { level: 8, pb: "+3", features: "Ability Score Improvement", riskDice: "5d8", weaponMastery: "3" },
        { level: 9, pb: "+4", features: "Critical Shot", riskDice: "5d8", weaponMastery: "3" },
        { level: 10, pb: "+4", features: "Subclass Feature", riskDice: "5d10", weaponMastery: "4" },
        { level: 11, pb: "+4", features: "Overkill", riskDice: "5d10", weaponMastery: "4" },
        { level: 12, pb: "+4", features: "Ability Score Improvement", riskDice: "5d10", weaponMastery: "4" },
        { level: 13, pb: "+5", features: "Cheat Death", riskDice: "5d10", weaponMastery: "4" },
        { level: 14, pb: "+5", features: "Subclass Feature", riskDice: "6d10", weaponMastery: "4" },
        { level: 15, pb: "+5", features: "Dire Gambit", riskDice: "6d10", weaponMastery: "4" },
        { level: 16, pb: "+5", features: "Ability Score Improvement", riskDice: "6d10", weaponMastery: "4" },
        { level: 17, pb: "+6", features: "Critical Shot", riskDice: "6d10", weaponMastery: "4" },
        { level: 18, pb: "+6", features: "Deft Maneuver", riskDice: "6d12", weaponMastery: "4" },
        { level: 19, pb: "+6", features: "Epic Boon", riskDice: "6d12", weaponMastery: "4" },
        { level: 20, pb: "+6", features: "Headshot", riskDice: "6d12", weaponMastery: "4" }
    ],
    featuresList: [
        {
            title: "Fighting Style",
            level: 1,
            source: "GC:VSS'24",
            desc: "You gain a Fighting Style feat of your choice. If you choose a feat that requires holding a Melee weapon, you can use that feat with Ranged weapons instead. Whenever you gain a Gunslinger level, you can replace it."
        },
        {
            title: "Quick Draw",
            level: 1,
            source: "GC:VSS'24",
            desc: "• <strong>Initiative:</strong> You have Advantage on Initiative rolls.<br>• <strong>Double Draw:</strong> You can draw or stow two weapons lacking Two-Handed when you would normally draw or stow one."
        },
        {
            title: "Weapon Mastery",
            level: 1,
            source: "GC:VSS'24",
            desc: "You gain the ability to use the mastery properties of two kinds of Simple or Martial Ranged weapons of your choice. You can change your selections after a Long Rest."
        },
        {
            title: "Critical Shot",
            level: 2,
            source: "GC:VSS'24",
            desc: "Your Ranged weapon attacks score a Critical Hit on a 19–20 on the d20. This range expands to 18–20 at level 9 and 17–20 at level 17."
        },
        {
            title: "Risk",
            level: 2,
            source: "GC:VSS'24",
            desc: "You gain Risk Dice (d8s) used to fuel special maneuvers. You regain all expended Risk Dice on a Short or Long Rest.<br><br><strong>Maneuvers:</strong><br>• <strong>Bite the Bullet:</strong> Bonus Action to gain Temp HP = Risk Die + Gunslinger Level.<br>• <strong>Blindfire:</strong> Bonus Action to gain Blindsight 30 ft. until end of turn.<br>• <strong>Dodge Roll:</strong> Bonus Action to move up to 15 ft. without provoking Opportunity Attacks and reload a weapon.<br>• <strong>Grazing Shot:</strong> On a miss, spend 1 Risk Die to deal damage = die roll + Dex modifier.<br>• <strong>Maverick Spirit:</strong> Add 1 Risk Die to a failed Int, Wis, or Cha check or saving throw.<br>• <strong>Skin of Your Teeth:</strong> Reaction when hit to add 1 Risk Die to your AC against that attack."
        },
        {
            title: "Gunslinger Subclass",
            level: 3,
            source: "GC:VSS'24",
            desc: "You choose a Gunslinger subclass that grants features at levels 3, 6, 10, and 14."
        },
        {
            title: "Extra Attack",
            level: 5,
            source: "GC:VSS'24",
            desc: "You can attack twice instead of once whenever you take the Attack action on your turn."
        },
        {
            title: "Gut Shot",
            level: 5,
            source: "GC:VSS'24",
            desc: "When you score a Critical Hit with a Ranged weapon on a Large or smaller creature, the projectile lodges in the target. For 1 minute (or until it uses an attack to remove it), its Speed is halved and it has Disadvantage on attack rolls."
        },
        {
            title: "Evasion",
            level: 7,
            source: "GC:VSS'24",
            desc: "On Dexterity saving throws against effects dealing half damage on a success, you take no damage on a success and half damage on a failure."
        },
        {
            title: "Overkill",
            level: 11,
            source: "GC:VSS'24",
            desc: "When you deal damage with a Ranged weapon that doesn't add your ability modifier to the roll (such as Firearm weapons), you add your ability modifier. If you already add it, deal an extra 1d8 damage."
        },
        {
            title: "Cheat Death",
            level: 13,
            source: "GC:VSS'24",
            desc: "When reduced to 0 HP and not killed outright, you drop to 1 HP instead and regain HP equal to your Gunslinger level. Once per Short or Long Rest."
        },
        {
            title: "Dire Gambit",
            level: 15,
            source: "GC:VSS'24",
            desc: "Whenever you roll Initiative or score a Critical Hit, you regain one expended Risk Die."
        },
        {
            title: "Deft Maneuver",
            level: 18,
            source: "GC:VSS'24",
            desc: "You gain a special extra Bonus Action each turn that can only be used to execute a maneuver."
        },
        {
            title: "Epic Boon",
            level: 19,
            source: "GC:VSS'24",
            desc: "You gain an Epic Boon feat or another feat of your choice."
        },
        {
            title: "Headshot",
            level: 20,
            source: "GC:VSS'24",
            desc: "When you score a Critical Hit with a Ranged weapon, you can declare a Headshot. If the target has fewer than 100 HP, it dies instantly; otherwise, it takes an extra 10d10 damage. Recharges on a Short or Long Rest or by expending 3 Risk Dice."
        }
    ]
});