window.dndData = window.dndData || {};
window.dndData.classes = window.dndData.classes || [];

window.dndData.classes.push({
    id: "ranger",
    name: "Ranger",
    source: "PHB'24",
    role: "Half-Caster / Wilderness Scout / Precise Striker",
    hitDice: "D10 per Ranger level",
    primaryAttr: "Dexterity and Wisdom",
    hitPointsLevel1: "10 + Con. modifier",
    hitPointsAdditional: "D10 + your Con. modifier, or, 6 + your Con. modifier",
    savingThrows: "Strength, Dexterity",
    skillProficiencies: "Choose 3: Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, or Survival",
    weaponProficiencies: "Simple and Martial weapons",
    armorTraining: "Light and Medium armor and Shields",
    startingEquipment: "Choose A or B: (A) Studded Leather Armor, Scimitar, Shortsword, Longbow, 20 Arrows, Quiver, Druidic Focus (sprig of mistletoe), Explorer's Pack, 7 GP; or (B) 150 GP",
    multiclassing: "Ability Score Minimum: Dexterity 13 and Wisdom 13.<br><strong>Skill Proficiencies:</strong> Choose 1 skill from Ranger skill list<br><strong>Weapon Proficiencies:</strong> Martial weapons<br><strong>Armor Training:</strong> Light and Medium armor and Shields",
    description: "Hunters of the wilds and masters of martial tracking, Rangers channel primal magic and weapon masteries to mark targets, move with speed, and survive any wilderness threat.",
    customColumns: ["Favored Enemy"],
    levels: [
        { level: 1, pb: "+2", features: "Spellcasting, Favored Enemy, Weapon Mastery", favoredEnemy: "2", prepared: "2", slots: { 1: 2 } },
        { level: 2, pb: "+2", features: "Deft Explorer, Fighting Style", favoredEnemy: "2", prepared: "3", slots: { 1: 2 } },
        { level: 3, pb: "+2", features: "Ranger Subclass", favoredEnemy: "2", prepared: "4", slots: { 1: 3 } },
        { level: 4, pb: "+2", features: "Ability Score Improvement", favoredEnemy: "2", prepared: "5", slots: { 1: 3 } },
        { level: 5, pb: "+3", features: "Extra Attack", favoredEnemy: "3", prepared: "6", slots: { 1: 4, 2: 2 } },
        { level: 6, pb: "+3", features: "Roving", favoredEnemy: "3", prepared: "6", slots: { 1: 4, 2: 2 } },
        { level: 7, pb: "+3", features: "Subclass Feature", favoredEnemy: "3", prepared: "7", slots: { 1: 4, 2: 3 } },
        { level: 8, pb: "+3", features: "Ability Score Improvement", favoredEnemy: "3", prepared: "7", slots: { 1: 4, 2: 3 } },
        { level: 9, pb: "+4", features: "Expertise", favoredEnemy: "4", prepared: "9", slots: { 1: 4, 2: 3, 3: 2 } },
        { level: 10, pb: "+4", features: "Tireless", favoredEnemy: "4", prepared: "9", slots: { 1: 4, 2: 3, 3: 2 } },
        { level: 11, pb: "+4", features: "Subclass Feature", favoredEnemy: "4", prepared: "10", slots: { 1: 4, 2: 3, 3: 3 } },
        { level: 12, pb: "+4", features: "Ability Score Improvement", favoredEnemy: "4", prepared: "10", slots: { 1: 4, 2: 3, 3: 3 } },
        { level: 13, pb: "+5", features: "Relentless Hunter", favoredEnemy: "5", prepared: "11", slots: { 1: 4, 2: 3, 3: 3, 4: 1 } },
        { level: 14, pb: "+5", features: "Nature's Veil", favoredEnemy: "5", prepared: "11", slots: { 1: 4, 2: 3, 3: 3, 4: 1 } },
        { level: 15, pb: "+5", features: "Subclass Feature", favoredEnemy: "5", prepared: "12", slots: { 1: 4, 2: 3, 3: 3, 4: 2 } },
        { level: 16, pb: "+5", features: "Ability Score Improvement", favoredEnemy: "5", prepared: "12", slots: { 1: 4, 2: 3, 3: 3, 4: 2 } },
        { level: 17, pb: "+6", features: "Precise Hunter", favoredEnemy: "6", prepared: "14", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 } },
        { level: 18, pb: "+6", features: "Feral Senses", favoredEnemy: "6", prepared: "14", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 } },
        { level: 19, pb: "+6", features: "Epic Boon", favoredEnemy: "6", prepared: "15", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 } },
        { level: 20, pb: "+6", features: "Foe Slayer", favoredEnemy: "6", prepared: "15", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 } }
    ],
    featuresList: [
        {
            title: "Spellcasting",
            level: 1,
            source: "PHB'24",
            desc: "Cast Ranger spells using Wisdom as your spellcasting ability. Prepare a list of spells that changes on a Long Rest. Uses a Druidic Focus as a spellcasting focus."
        },
        {
            title: "Favored Enemy",
            level: 1,
            source: "PHB'24",
            desc: "Always have [[Hunter's Mark]] prepared. Cast it without expending a spell slot a number of times shown in the Favored Enemy column (recharges on Long Rest)."
        },
        {
            title: "Weapon Mastery",
            level: 1,
            source: "PHB'24",
            desc: "Use weapon mastery properties of two chosen weapons. Can change choices after a Long Rest."
        },
        {
            title: "Deft Explorer",
            level: 2,
            source: "PHB'24",
            desc: "Gain Expertise in one skill proficiency and learn two additional languages of your choice."
        },
        {
            title: "Fighting Style",
            level: 2,
            source: "PHB'24",
            desc: "Gain a Fighting Style feat or choose <strong>Druidic Warrior</strong> to learn 2 Druid cantrips."
        },
        {
            title: "Ranger Subclass",
            level: 3,
            source: "PHB'24",
            desc: "Choose a Ranger subclass which grants features at levels 3, 7, 11, and 15."
        },
        {
            title: "Extra Attack",
            level: 5,
            source: "PHB'24",
            desc: "Attack twice instead of once whenever you take the Attack action."
        },
        {
            title: "Roving",
            level: 6,
            source: "PHB'24",
            desc: "Speed increases by 10 feet while not wearing Heavy armor. Gain Climb Speed and Swim Speed equal to your Speed."
        },
        {
            title: "Expertise",
            level: 9,
            source: "PHB'24",
            desc: "Gain Expertise in two additional skill proficiencies."
        },
        {
            title: "Tireless",
            level: 10,
            source: "PHB'24",
            desc: "As a Magic action, grant yourself Temporary HP equal to 1d8 + Wisdom modifier (Wis modifier times/Long Rest). In addition, reduce Exhaustion level by 1 on completing a Short Rest."
        },
        {
            title: "Relentless Hunter",
            level: 13,
            source: "PHB'24",
            desc: "Taking damage can't break your Concentration on [[Hunter's Mark]]."
        },
        {
            title: "Nature's Veil",
            level: 14,
            source: "PHB'24",
            desc: "Bonus Action to turn Invisible until the end of your next turn (usable Wisdom modifier times per Long Rest)."
        },
        {
            title: "Precise Hunter",
            level: 17,
            source: "PHB'24",
            desc: "Gain Advantage on attack rolls against the creature marked by your [[Hunter's Mark]]."
        },
        {
            title: "Feral Senses",
            level: 18,
            source: "PHB'24",
            desc: "Gain Blindsight out to a range of 30 feet."
        },
        {
            title: "Epic Boon",
            level: 19,
            source: "PHB'24",
            desc: "Gain an Epic Boon feat or another feat of your choice."
        },
        {
            title: "Foe Slayer",
            level: 20,
            source: "PHB'24",
            desc: "The damage die of your [[Hunter's Mark]] increases from a d6 to a d10."
        }
    ]
});