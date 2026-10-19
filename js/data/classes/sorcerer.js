window.dndData = window.dndData || {};
window.dndData.classes = window.dndData.classes || [];

window.dndData.classes.push({
    id: "sorcerer",
    name: "Sorcerer",
    source: "PHB'24",
    role: "Full-Caster / Metamagic Manipulator / Arcane Blaster",
    hitDice: "D6 per Sorcerer level",
    primaryAttr: "Charisma",
    hitPointsLevel1: "6 + Con. modifier",
    hitPointsAdditional: "D6 + your Con. modifier, or, 4 + your Con. modifier",
    savingThrows: "Constitution, Charisma",
    skillProficiencies: "Choose 2: Arcana, Deception, Insight, Intimidation, Persuasion, or Religion",
    weaponProficiencies: "Simple weapons",
    toolProficiencies: "None",
    armorTraining: "None",
    startingEquipment: "Choose A or B: (A) Spear, 2 Daggers, Arcane Focus (crystal), Dungeoneer's Pack, 28 GP; or (B) 50 GP",
    multiclassing: "Ability Score Minimum: Charisma 13.",
    description: "Sorcerers carry innate raw magic in their blood, altering spells through Metamagic and fueling supernatural abilities with Sorcery Points.",
    customColumns: ["Sorcery Points"],
    levels: [
        { level: 1, pb: "+2", features: "Spellcasting, Innate Sorcery", sorceryPoints: "—", cantrips: "4", prepared: "2", slots: { 1: 2 } },
        { level: 2, pb: "+2", features: "Font of Magic, Metamagic, Metamagic Options", sorceryPoints: "2", cantrips: "4", prepared: "4", slots: { 1: 3 } },
        { level: 3, pb: "+2", features: "Sorcerer Subclass", sorceryPoints: "3", cantrips: "4", prepared: "6", slots: { 1: 4, 2: 2 } },
        { level: 4, pb: "+2", features: "Ability Score Improvement", sorceryPoints: "4", cantrips: "5", prepared: "7", slots: { 1: 4, 2: 3 } },
        { level: 5, pb: "+3", features: "Sorcerous Restoration", sorceryPoints: "5", cantrips: "5", prepared: "9", slots: { 1: 4, 2: 3, 3: 2 } },
        { level: 6, pb: "+3", features: "Subclass Feature", sorceryPoints: "6", cantrips: "5", prepared: "10", slots: { 1: 4, 2: 3, 3: 3 } },
        { level: 7, pb: "+3", features: "Sorcery Incarnate", sorceryPoints: "7", cantrips: "5", prepared: "11", slots: { 1: 4, 2: 3, 3: 3, 4: 1 } },
        { level: 8, pb: "+3", features: "Ability Score Improvement", sorceryPoints: "8", cantrips: "5", prepared: "12", slots: { 1: 4, 2: 3, 3: 3, 4: 2 } },
        { level: 9, pb: "+4", features: "—", sorceryPoints: "9", cantrips: "5", prepared: "14", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 } },
        { level: 10, pb: "+4", features: "Metamagic", sorceryPoints: "10", cantrips: "6", prepared: "15", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 } },
        { level: 11, pb: "+4", features: "—", sorceryPoints: "11", cantrips: "6", prepared: "16", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 } },
        { level: 12, pb: "+4", features: "Ability Score Improvement", sorceryPoints: "12", cantrips: "6", prepared: "16", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 } },
        { level: 13, pb: "+5", features: "—", sorceryPoints: "13", cantrips: "6", prepared: "17", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1 } },
        { level: 14, pb: "+5", features: "Subclass Feature", sorceryPoints: "14", cantrips: "6", prepared: "17", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1 } },
        { level: 15, pb: "+5", features: "—", sorceryPoints: "15", cantrips: "6", prepared: "18", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1 } },
        { level: 16, pb: "+5", features: "Ability Score Improvement", sorceryPoints: "16", cantrips: "6", prepared: "18", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1 } },
        { level: 17, pb: "+6", features: "Metamagic", sorceryPoints: "17", cantrips: "6", prepared: "19", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1, 9: 1 } },
        { level: 18, pb: "+6", features: "Subclass Feature", sorceryPoints: "18", cantrips: "6", prepared: "20", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 1, 7: 1, 8: 1, 9: 1 } },
        { level: 19, pb: "+6", features: "Epic Boon", sorceryPoints: "19", cantrips: "6", prepared: "21", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 1, 8: 1, 9: 1 } },
        { level: 20, pb: "+6", features: "Arcane Apotheosis", sorceryPoints: "20", cantrips: "6", prepared: "22", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 2, 8: 1, 9: 1 } }
    ],
    featuresList: [
        {
            title: "Spellcasting",
            level: 1,
            source: "PHB'24",
            desc: "Cast Sorcerer spells using Charisma as your spellcasting ability. Prepare list of spells that updates on gaining levels. Uses an Arcane Focus."
        },
        {
            title: "Innate Sorcery",
            level: 1,
            source: "PHB'24",
            desc: "Bonus Action to unleash raw magic for 1 minute: gain +1 to spell save DC and Advantage on attack rolls for Sorcerer spells (2 uses/Long Rest)."
        },
        {
            title: "Font of Magic",
            level: 2,
            source: "PHB'24",
            desc: "Gain Sorcery Points (scaling with level) to create spell slots up to level 5 (as a Bonus Action) or convert spell slots into Sorcery Points (no action)."
        },
        {
            title: "Metamagic",
            level: 2,
            source: "PHB'24",
            desc: "Choose 2 Metamagic options (gain +2 at lvl 10 and +2 at lvl 17) to alter spells by expending Sorcery Points:<br>• <strong>Careful (1 SP):</strong> Protect up to Charisma mod allies from full spell damage on saved throws.<br>• <strong>Distant (1 SP):</strong> Double spell range or make Touch range 30 ft.<br>• <strong>Empowered (1 SP):</strong> Reroll up to Charisma mod damage dice.<br>• <strong>Extended (1 SP):</strong> Double spell duration (max 24h) and gain Advantage on Concentration saves.<br>• <strong>Heightened (2 SP):</strong> Give target Disadvantage on save against the spell.<br>• <strong>Quickened (2 SP):</strong> Cast Action spell as a Bonus Action.<br>• <strong>Seeking (1 SP):</strong> Reroll missed spell attack roll.<br>• <strong>Subtle (1 SP):</strong> Cast without V, S, or non-costly M components.<br>• <strong>Transmuted (1 SP):</strong> Change damage type between Acid, Cold, Fire, Lightning, Poison, or Thunder.<br>• <strong>Twinned (1 SP):</strong> Increase effective spell level by 1 for spells that scale targets with level."
        },
        {
            title: "Sorcerer Subclass",
            level: 3,
            source: "PHB'24",
            desc: "Choose a Sorcerer subclass which grants features at levels 3, 6, 14, and 18."
        },
        {
            title: "Sorcerous Restoration",
            level: 5,
            source: "PHB'24",
            desc: "Regain expended Sorcery Points up to half your Sorcerer level on a Short Rest (1/Long Rest)."
        },
        {
            title: "Sorcery Incarnate",
            level: 7,
            source: "PHB'24",
            desc: "Activate Innate Sorcery by spending 2 Sorcery Points when out of uses. While Innate Sorcery is active, apply up to two Metamagic options per spell."
        },
        {
            title: "Epic Boon",
            level: 19,
            source: "PHB'24",
            desc: "Gain an Epic Boon feat or another feat of your choice."
        },
        {
            title: "Arcane Apotheosis",
            level: 20,
            source: "PHB'24",
            desc: "While Innate Sorcery is active, use one Metamagic option on each of your turns without spending Sorcery Points."
        }
    ]
});