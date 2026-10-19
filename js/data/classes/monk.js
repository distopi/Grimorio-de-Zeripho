window.dndData = window.dndData || {};
window.dndData.classes = window.dndData.classes || [];

window.dndData.classes.push({
    id: "monk",
    name: "Monk",
    source: "PHB'24",
    role: "Martial Skirmisher / Mobile Striker",
    hitDice: "D8 per Monk level",
    primaryAttr: "Dexterity and Wisdom",
    hitPointsLevel1: "8 + Con. modifier",
    hitPointsAdditional: "D8 + your Con. modifier, or, 5 + your Con. modifier",
    savingThrows: "Strength, Dexterity",
    skillProficiencies: "Choose 2: Acrobatics, Athletics, History, Insight, Religion, or Stealth",
    weaponProficiencies: "Simple weapons and Martial weapons that have the Light property",
    toolProficiencies: "Choose one type of Artisan's Tools or Musical Instrument",
    armorTraining: "None",
    startingEquipment: "Choose A or B: (A) Spear, 5 Daggers, Artisan's Tools or Musical Instrument chosen for tool proficiency, Explorer's Pack, 11 GP; or (B) 50 GP",
    multiclassing: "Ability Score Minimum: Dexterity 13 and Wisdom 13.",
    description: "Monks channel internal Focus energy to unleash blistering martial arts combinations, deflect incoming attacks, and move with unmatched speed across the battlefield.",
    customColumns: ["Martial Arts", "Focus Points", "Unarmored Movement"],
    levels: [
        { level: 1, pb: "+2", features: "Martial Arts, Unarmored Defense", martialArts: "1d6", focusPoints: "—", unarmoredMovement: "—" },
        { level: 2, pb: "+2", features: "Monk's Focus, Unarmored Movement, Uncanny Metabolism", martialArts: "1d6", focusPoints: "2", unarmoredMovement: "+10 ft." },
        { level: 3, pb: "+2", features: "Deflect Attacks, Monk Subclass", martialArts: "1d6", focusPoints: "3", unarmoredMovement: "+10 ft." },
        { level: 4, pb: "+2", features: "Ability Score Improvement, Slow Fall", martialArts: "1d6", focusPoints: "4", unarmoredMovement: "+10 ft." },
        { level: 5, pb: "+3", features: "Extra Attack, Stunning Strike", martialArts: "1d8", focusPoints: "5", unarmoredMovement: "+10 ft." },
        { level: 6, pb: "+3", features: "Empowered Strikes, Subclass Feature", martialArts: "1d8", focusPoints: "6", unarmoredMovement: "+15 ft." },
        { level: 7, pb: "+3", features: "Evasion", martialArts: "1d8", focusPoints: "7", unarmoredMovement: "+15 ft." },
        { level: 8, pb: "+3", features: "Ability Score Improvement", martialArts: "1d8", focusPoints: "8", unarmoredMovement: "+15 ft." },
        { level: 9, pb: "+4", features: "Acrobatic Movement", martialArts: "1d8", focusPoints: "9", unarmoredMovement: "+15 ft." },
        { level: 10, pb: "+4", features: "Heightened Focus, Self-Restoration", martialArts: "1d8", focusPoints: "10", unarmoredMovement: "+20 ft." },
        { level: 11, pb: "+4", features: "Subclass Feature", martialArts: "1d10", focusPoints: "11", unarmoredMovement: "+20 ft." },
        { level: 12, pb: "+4", features: "Ability Score Improvement", martialArts: "1d10", focusPoints: "12", unarmoredMovement: "+20 ft." },
        { level: 13, pb: "+5", features: "Deflect Energy", martialArts: "1d10", focusPoints: "13", unarmoredMovement: "+20 ft." },
        { level: 14, pb: "+5", features: "Disciplined Survivor", martialArts: "1d10", focusPoints: "14", unarmoredMovement: "+25 ft." },
        { level: 15, pb: "+5", features: "Perfect Focus", martialArts: "1d10", focusPoints: "15", unarmoredMovement: "+25 ft." },
        { level: 16, pb: "+5", features: "Ability Score Improvement", martialArts: "1d10", focusPoints: "16", unarmoredMovement: "+25 ft." },
        { level: 17, pb: "+6", features: "Subclass Feature", martialArts: "1d12", focusPoints: "17", unarmoredMovement: "+25 ft." },
        { level: 18, pb: "+6", features: "Superior Defense", martialArts: "1d12", focusPoints: "18", unarmoredMovement: "+30 ft." },
        { level: 19, pb: "+6", features: "Epic Boon", martialArts: "1d12", focusPoints: "19", unarmoredMovement: "+30 ft." },
        { level: 20, pb: "+6", features: "Body and Mind", martialArts: "1d12", focusPoints: "20", unarmoredMovement: "+30 ft." }
    ],
    featuresList: [
        {
            title: "Martial Arts",
            level: 1,
            source: "PHB'24",
            desc: "Make an Unarmed Strike as a Bonus Action. Use Dexterity instead of Strength for attack/damage rolls and save DCs of Grapple/Shove. Martial Arts die starts at 1d6 and scales up to 1d12."
        },
        {
            title: "Unarmored Defense",
            level: 1,
            source: "PHB'24",
            desc: "While unarmored and without a Shield, base AC equals 10 + Dexterity modifier + Wisdom modifier."
        },
        {
            title: "Monk's Focus",
            level: 2,
            source: "PHB'24",
            desc: "Expend Focus Points (recharges on Short/Long Rest) for features:<br>• <strong>Flurry of Blows:</strong> 1 Focus Point to make 2 Unarmed Strikes as a Bonus Action.<br>• <strong>Patient Defense:</strong> Disengage as a Bonus Action, or spend 1 Focus Point to Disengage and Dodge.<br>• <strong>Step of the Wind:</strong> Dash as a Bonus Action, or spend 1 Focus Point to Dash and Disengage with double jump distance."
        },
        {
            title: "Unarmored Movement",
            level: 2,
            source: "PHB'24",
            desc: "Speed increases while unarmored and without a Shield (+10 ft at lvl 2, up to +30 ft at lvl 18)."
        },
        {
            title: "Uncanny Metabolism",
            level: 2,
            source: "PHB'24",
            desc: "When rolling Initiative, regain all expended Focus Points and regain HP equal to Monk level + Martial Arts die roll (1/Long Rest)."
        },
        {
            title: "Deflect Attacks",
            level: 3,
            source: "PHB'24",
            desc: "Reaction to reduce Bludgeoning, Piercing, or Slashing damage taken by 1d10 + Dex modifier + Monk level. If reduced to 0, spend 1 Focus Point to redirect damage to a creature within range (2 Martial Arts dice + Dex modifier)."
        },
        {
            title: "Monk Subclass",
            level: 3,
            source: "PHB'24",
            desc: "Choose a Monk subclass which grants features at levels 3, 6, 11, and 17."
        },
        {
            title: "Slow Fall",
            level: 4,
            source: "PHB'24",
            desc: "Reaction to reduce falling damage by 5 × Monk level."
        },
        {
            title: "Extra Attack",
            level: 5,
            source: "PHB'24",
            desc: "Attack twice instead of once whenever you take the Attack action."
        },
        {
            title: "Stunning Strike",
            level: 5,
            source: "PHB'24",
            desc: "Once per turn on hit, spend 1 Focus Point to force a Constitution save. On failure, target is Stunned until start of your next turn. On success, target's Speed is halved and next attack roll against it has Advantage."
        },
        {
            title: "Empowered Strikes",
            level: 6,
            source: "PHB'24",
            desc: "Unarmed Strikes can deal Force damage instead of their normal damage type."
        },
        {
            title: "Evasion",
            level: 7,
            source: "PHB'24",
            desc: "Take no damage on successful Dexterity saving throws against half-damage effects, and only half damage on failed saves."
        },
        {
            title: "Acrobatic Movement",
            level: 9,
            source: "PHB'24",
            desc: "Move along vertical surfaces and across liquids on your turn without falling."
        },
        {
            title: "Heightened Focus",
            level: 10,
            source: "PHB'24",
            desc: "Enhance focus abilities:<br>• <strong>Flurry of Blows:</strong> Makes 3 Unarmed Strikes for 1 Focus Point.<br>• <strong>Patient Defense:</strong> Spend 1 Focus Point to gain Temporary HP = 2 Martial Arts dice.<br>• <strong>Step of the Wind:</strong> Spend 1 Focus Point to carry a Large or smaller willing creature with you."
        },
        {
            title: "Self-Restoration",
            level: 10,
            source: "PHB'24",
            desc: "Remove Charmed, Frightened, or Poisoned condition at the end of your turn. Forgoing food/drink gives no Exhaustion."
        },
        {
            title: "Deflect Energy",
            level: 13,
            source: "PHB'24",
            desc: "Deflect Attacks now works against attacks of any damage type."
        },
        {
            title: "Disciplined Survivor",
            level: 14,
            source: "PHB'24",
            desc: "Gain proficiency in all saving throws. Spend 1 Focus Point to reroll any failed saving throw."
        },
        {
            title: "Perfect Focus",
            level: 15,
            source: "PHB'24",
            desc: "When rolling Initiative, if you have 3 or fewer Focus Points and don't use Uncanny Metabolism, regain Focus Points until you have 4."
        },
        {
            title: "Superior Defense",
            level: 18,
            source: "PHB'24",
            desc: "At start of turn, spend 3 Focus Points to gain Resistance to all damage except Force for 1 minute."
        },
        {
            title: "Epic Boon",
            level: 19,
            source: "PHB'24",
            desc: "Gain an Epic Boon feat or another feat of your choice."
        },
        {
            title: "Body and Mind",
            level: 20,
            source: "PHB'24",
            desc: "Dexterity and Wisdom scores increase by 4, up to a maximum of 25."
        }
    ]
});