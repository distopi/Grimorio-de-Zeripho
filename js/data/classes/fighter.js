window.dndData = window.dndData || {};
window.dndData.classes = window.dndData.classes || [];

window.dndData.classes.push({
    id: "fighter",
    name: "Fighter",
    source: "PHB'24",
    role: "Martial Combatant / Tank",
    hitDice: "D10 per Fighter level",
    primaryAttr: "Strength or Dexterity",
    hitPointsLevel1: "10 + Con. modifier",
    hitPointsAdditional: "D10 + your Con. modifier, or, 6 + your Con. modifier",
    savingThrows: "Strength, Constitution",
    skillProficiencies: "Choose 2: Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Persuasion, Perception, or Survival",
    weaponProficiencies: "Simple and Martial weapons",
    armorTraining: "Light, Medium, and Heavy armor and Shields",
    startingEquipment: "Choose A, B, or C: (A) Chain Mail, Greatsword, Flail, 8 Javelins, Dungeoneer's Pack, and 4 GP; (B) Studded Leather Armor, Scimitar, Shortsword, Longbow, 20 Arrows, Quiver, Dungeoneer's Pack, and 11 GP; or (C) 155 GP",
    multiclassing: "To qualify for a new class, you must have a score of at least 13 in the primary ability of the new class and your current classes.<br><strong>Weapon Proficiencies:</strong> Martial weapons<br><strong>Armor Training:</strong> Light and Medium armor and Shields",
    description: "Fighters master the art of combat, training with every weapon type and armor style. Combining physical prowess, tactical intellect, and relentless stamina, Fighters excel on any battlefield.",
    customColumns: ["Second Wind", "Weapon Mastery"],
    levels: [
        { level: 1, pb: "+2", features: "Fighting Style, Second Wind, Weapon Mastery", secondWind: "2", weaponMastery: "3" },
        { level: 2, pb: "+2", features: "Action Surge, Tactical Mind", secondWind: "2", weaponMastery: "3" },
        { level: 3, pb: "+2", features: "Fighter Subclass", secondWind: "2", weaponMastery: "3" },
        { level: 4, pb: "+2", features: "Ability Score Improvement", secondWind: "3", weaponMastery: "4" },
        { level: 5, pb: "+3", features: "Extra Attack, Tactical Shift", secondWind: "3", weaponMastery: "4" },
        { level: 6, pb: "+3", features: "Ability Score Improvement", secondWind: "3", weaponMastery: "4" },
        { level: 7, pb: "+3", features: "Subclass Feature", secondWind: "3", weaponMastery: "4" },
        { level: 8, pb: "+3", features: "Ability Score Improvement", secondWind: "3", weaponMastery: "4" },
        { level: 9, pb: "+4", features: "Indomitable, Tactical Master", secondWind: "3", weaponMastery: "4" },
        { level: 10, pb: "+4", features: "Subclass Feature", secondWind: "4", weaponMastery: "5" },
        { level: 11, pb: "+4", features: "Two Extra Attacks", secondWind: "4", weaponMastery: "5" },
        { level: 12, pb: "+4", features: "Ability Score Improvement", secondWind: "4", weaponMastery: "5" },
        { level: 13, pb: "+5", features: "Indomitable, Studied Attacks", secondWind: "4", weaponMastery: "5" },
        { level: 14, pb: "+5", features: "Ability Score Improvement", secondWind: "4", weaponMastery: "5" },
        { level: 15, pb: "+5", features: "Subclass Feature", secondWind: "4", weaponMastery: "5" },
        { level: 16, pb: "+5", features: "Ability Score Improvement", secondWind: "4", weaponMastery: "5" },
        { level: 17, pb: "+6", features: "Action Surge, Indomitable", secondWind: "4", weaponMastery: "6" },
        { level: 18, pb: "+6", features: "Subclass Feature", secondWind: "4", weaponMastery: "6" },
        { level: 19, pb: "+6", features: "Epic Boon", secondWind: "4", weaponMastery: "6" },
        { level: 20, pb: "+6", features: "Three Extra Attacks", secondWind: "4", weaponMastery: "6" }
    ],
    featuresList: [
        {
            title: "Fighting Style",
            level: 1,
            source: "PHB'24",
            desc: "You have honed your martial prowess and gain a Fighting Style feat of your choice. Defense is recommended.<br><br>Whenever you gain a Fighter level, you can replace the feat you chose with a different Fighting Style feat."
        },
        {
            title: "Second Wind",
            level: 1,
            source: "PHB'24",
            desc: "You have a limited well of physical and mental stamina that you can draw on. As a Bonus Action, you can use it to regain Hit Points equal to 1d10 plus your Fighter level.<br><br>You can use this feature twice. You regain one expended use when you finish a Short Rest, and you regain all expended uses when you finish a Long Rest.<br><br>When you reach certain Fighter levels, you gain more uses of this feature, as shown in the Second Wind column of the Fighter Features table."
        },
        {
            title: "Weapon Mastery",
            level: 1,
            source: "PHB'24",
            desc: "Your training with weapons allows you to use the mastery properties of three kinds of Simple or Martial weapons of your choice. Whenever you finish a Long Rest, you can practice weapon drills and change one of those weapon choices.<br><br>When you reach certain Fighter levels, you gain the ability to use the mastery properties of more kinds of weapons, as shown in the Weapon Mastery column of the Fighter Features table."
        },
        {
            title: "Action Surge",
            level: 2,
            source: "PHB'24",
            desc: "You can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action, except the Magic action.<br><br>Once you use this feature, you can't do so again until you finish a Short or Long Rest. Starting at level 17, you can use it twice before a rest but only once on a turn."
        },
        {
            title: "Tactical Mind",
            level: 2,
            source: "PHB'24",
            desc: "You have a mind for tactics on and off the battlefield. When you fail an ability check, you can expend a use of your Second Wind to push yourself toward success. Rather than regaining Hit Points, you roll 1d10 and add the number rolled to the ability check, potentially turning it into a success. If the check still fails, this use of Second Wind isn't expended."
        },
        {
            title: "Fighter Subclass",
            level: 3,
            source: "PHB'24",
            desc: "You gain a Fighter subclass of your choice. A subclass is a specialization that grants you features at certain Fighter levels."
        },
        {
            title: "Ability Score Improvement",
            level: 4,
            source: "PHB'24",
            desc: "You gain the Ability Score Improvement feat or another feat of your choice for which you qualify. You gain this feature again at Fighter levels 6, 8, 12, 14, and 16."
        },
        {
            title: "Extra Attack",
            level: 5,
            source: "PHB'24",
            desc: "You can attack twice instead of once whenever you take the Attack action on your turn."
        },
        {
            title: "Tactical Shift",
            level: 5,
            source: "PHB'24",
            desc: "Whenever you activate your Second Wind with a Bonus Action, you can move up to half your Speed without provoking Opportunity Attacks."
        },
        {
            title: "Indomitable",
            level: 9,
            source: "PHB'24",
            desc: "If you fail a saving throw, you can reroll it with a bonus equal to your Fighter level. You must use the new roll, and you can't use this feature again until you finish a Long Rest.<br><br>You can use this feature twice before a Long Rest starting at level 13 and three times before a Long Rest starting at level 17."
        },
        {
            title: "Tactical Master",
            level: 9,
            source: "PHB'24",
            desc: "When you attack with a weapon whose mastery property you can use, you can replace that property with the Push, Sap, or Slow property for that attack."
        },
        {
            title: "Two Extra Attacks",
            level: 11,
            source: "PHB'24",
            desc: "You can attack three times instead of once whenever you take the Attack action on your turn."
        },
        {
            title: "Studied Attacks",
            level: 13,
            source: "PHB'24",
            desc: "You study your opponents and learn from each attack you make. If you make an attack roll against a creature and miss, you have Advantage on your next attack roll against that creature before the end of your next turn."
        },
        {
            title: "Epic Boon",
            level: 19,
            source: "PHB'24",
            desc: "You gain an Epic Boon feat or another feat of your choice for which you qualify. Boon of Combat Prowess is recommended."
        },
        {
            title: "Three Extra Attacks",
            level: 20,
            source: "PHB'24",
            desc: "You can attack four times instead of once whenever you take the Attack action on your turn."
        }
    ]
});