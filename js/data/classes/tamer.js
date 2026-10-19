window.dndData = window.dndData || {};
window.dndData.classes = window.dndData.classes || [];

window.dndData.classes.push({
    id: "tamer",
    name: "Tamer",
    source: "HGTMH",
    role: "Pet / Half-Caster / Support",
    hitDice: "D8 per Tamer level",
    primaryAttr: "Intelligence, Wisdom, or Charisma",
    hitPointsLevel1: "8 + Con. modifier",
    hitPointsAdditional: "D8 + your Con. modifier, or, 5 + your Con. modifier",
    savingThrows: "Constitution, Charisma",
    skillProficiencies: "Choose 2: Animal Handling, Insight, Medicine, Nature, Perception, or Persuasion",
    weaponProficiencies: "Simple weapons and net",
    toolProficiencies: "One type of artisan's tools or one musical instrument of your choice",
    armorTraining: "Light and Medium armor and Shields",
    startingEquipment: "Choose options: (a) Scale armor or Leather armor; (b) A simple weapon, a net and a shield; (c) A light crossbow and 20 bolts; (d) Dungeoneer's pack or Explorer's pack; or 5d4*10 GP",
    multiclassing: "Ability Score Minimum: Intelligence 13 or Wisdom 13 or Charisma 13.<br><strong>Weapon Proficiencies:</strong> Simple weapons and net<br><strong>Armor Training:</strong> Light armor and Shields",
    description: "Tamers bond with wild beasts and monsters, capturing them inside magical vessels and training them to unleash devastation in battle alongside spellcasting utility.",
    levels: [
        { level: 1, pb: "+2", features: "Pocket Familiar, Monster Trainer, Soul Bond, Tamer Companion Summary, Tame Creature", cantrips: "—", prepared: "—" },
        { level: 2, pb: "+2", features: "Spellcasting, Bolster, Psychic Bond", cantrips: "2", prepared: "2", slots: { 1: 2 } },
        { level: 3, pb: "+2", features: "Pocket Family I, Training Paradigm", cantrips: "2", prepared: "3", slots: { 1: 3 } },
        { level: 4, pb: "+2", features: "Ability Score Improvement", cantrips: "2", prepared: "3", slots: { 1: 3 } },
        { level: 5, pb: "+3", features: "Multiattack, Malleable Presence", cantrips: "2", prepared: "4", slots: { 1: 4, 2: 2 } },
        { level: 6, pb: "+3", features: "Alpha Strike, Wilful Blows", cantrips: "2", prepared: "4", slots: { 1: 4, 2: 2 } },
        { level: 7, pb: "+3", features: "Pocket Family II, Training Paradigm Feature", cantrips: "2", prepared: "5", slots: { 1: 4, 2: 3 } },
        { level: 8, pb: "+3", features: "Ability Score Improvement", cantrips: "2", prepared: "5", slots: { 1: 4, 2: 3 } },
        { level: 9, pb: "+4", features: "—", cantrips: "2", prepared: "6", slots: { 1: 4, 2: 3, 3: 2 } },
        { level: 10, pb: "+4", features: "Training Paradigm Feature", cantrips: "3", prepared: "6", slots: { 1: 4, 2: 3, 3: 2 } },
        { level: 11, pb: "+4", features: "Pocket Family III", cantrips: "3", prepared: "7", slots: { 1: 4, 2: 3, 3: 3 } },
        { level: 12, pb: "+4", features: "Ability Score Improvement", cantrips: "3", prepared: "7", slots: { 1: 4, 2: 3, 3: 3 } },
        { level: 13, pb: "+5", features: "Switcheroo", cantrips: "3", prepared: "8", slots: { 1: 4, 2: 3, 3: 3, 4: 1 } },
        { level: 14, pb: "+5", features: "Training Paradigm Feature", cantrips: "4", prepared: "8", slots: { 1: 4, 2: 3, 3: 3, 4: 1 } },
        { level: 15, pb: "+5", features: "Pocket Family IV", cantrips: "4", prepared: "9", slots: { 1: 4, 2: 3, 3: 3, 4: 2 } },
        { level: 16, pb: "+5", features: "Ability Score Improvement", cantrips: "4", prepared: "9", slots: { 1: 4, 2: 3, 3: 3, 4: 2 } },
        { level: 17, pb: "+6", features: "Magnificent Presence", cantrips: "4", prepared: "10", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 } },
        { level: 18, pb: "+6", features: "Training Paradigm Feature", cantrips: "4", prepared: "10", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 } },
        { level: 19, pb: "+6", features: "Ability Score Improvement, Pocket Family V", cantrips: "4", prepared: "11", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 } },
        { level: 20, pb: "+6", features: "Summon the Horde", cantrips: "4", prepared: "11", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 } }
    ],
    featuresList: [
        {
            title: "Pocket Familiar",
            level: 1,
            source: "HGTMH",
            desc: "You bond with a Small or smaller companion (CR 1/2 or lower). Your companion resides within a custom vessel (jeweled egg, crystal sphere, etc.) when not summoned. You can summon/dismiss it as an action or bonus action while holding its vessel."
        },
        {
            title: "Monster Trainer",
            level: 1,
            source: "HGTMH",
            desc: "Your companions use your Proficiency Bonus instead of their own. As you gain levels in this class, your bonded companions gain improvements (Speed, Hit Dice, Ability Boosts, Attack bonuses, or Saving Throw/Armor proficiencies)."
        },
        {
            title: "Soul Bond",
            level: 1,
            source: "HGTMH",
            desc: "You have a pool of healing power equal to 5 × your Tamer level. During a short rest, you can draw from this pool to restore hit points to your companions."
        },
        {
            title: "Tame Creature",
            level: 1,
            source: "HGTMH",
            desc: "You can capture new wild creatures into prepared vessels. As an action, throw an empty vessel at a creature within 30 ft. Target must fail a Charisma saving throw versus your spell DC or be trapped and become your companion."
        },
        {
            title: "Spellcasting",
            level: 2,
            source: "HGTMH",
            desc: "Starting at 2nd level, you gain spellcasting capability using Intelligence, Wisdom, or Charisma (chosen at 1st level) as your spellcasting ability. A creature's vessel serves as your spellcasting focus."
        },
        {
            title: "Bolster",
            level: 2,
            source: "HGTMH",
            desc: "You can expend a spell slot to restore hit points to your companion equal to your spellcasting modifier + 2d4 per level of the spell slot expended."
        },
        {
            title: "Psychic Bond",
            level: 2,
            source: "HGTMH",
            desc: "Telepathically communicate with your companion within 100 ft or perceive through its senses. In addition, any spells your companion knows are added to your known spells."
        },
        {
            title: "Training Paradigm",
            level: 3,
            source: "HGTMH",
            desc: "Choose a Training Paradigm (subclass) which grants features at levels 3, 7, 10, 14, and 18."
        },
        {
            title: "Multiattack",
            level: 5,
            source: "HGTMH",
            desc: "When you command your companion, you can order it to use its Multiattack action if it has one."
        },
        {
            title: "Malleable Presence",
            level: 5,
            source: "HGTMH",
            desc: "Order your companion to impose Aggressive or Cautious behaviors on a target creature, causing it to suffer disadvantage on attack rolls."
        },
        {
            title: "Alpha Strike",
            level: 6,
            source: "HGTMH",
            desc: "As part of the action to summon a companion, you can immediately command it to take an action on its turn. Usable spellcasting modifier times per Long Rest."
        },
        {
            title: "Wilful Blows",
            level: 6,
            source: "HGTMH",
            desc: "Your companions' attacks count as magical for overcoming resistance and immunity to nonmagical damage."
        },
        {
            title: "Switcheroo",
            level: 13,
            source: "HGTMH",
            desc: "As a bonus action or reaction when you or your companion is targeted by an attack, swap places with your companion within 100 ft. Usable spellcasting modifier times per Long Rest."
        },
        {
            title: "Magnificent Presence",
            level: 17,
            source: "HGTMH",
            desc: "Order your companion to assume a Provoking Poise (drawing attacks to itself) or Shrinking Violet stance (making it harder to hit)."
        },
        {
            title: "Summon the Horde",
            level: 20,
            source: "HGTMH",
            desc: "As an action, summon up to three companions simultaneously for 1 minute. You can command all of them at once on subsequent turns."
        }
    ]
});