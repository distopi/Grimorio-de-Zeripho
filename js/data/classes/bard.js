window.dndData = window.dndData || {};
window.dndData.classes = window.dndData.classes || [];

window.dndData.classes.push({
    id: "bard",
    name: "Bard",
    source: "PHB'24",
    role: "Full-Caster / Support / Skill Expert",
    hitDice: "D8 per Bard level",
    primaryAttr: "Charisma",
    hitPointsLevel1: "8 + Con. modifier",
    hitPointsAdditional: "D8 + your Con. modifier, or, 5 + your Con. modifier",
    savingThrows: "Dexterity, Charisma",
    skillProficiencies: "Choose any 3 skills",
    weaponProficiencies: "Simple weapons",
    toolProficiencies: "Choose three Musical Instruments",
    armorTraining: "Light armor",
    startingEquipment: "Choose A or B: (A) Leather Armor, 2 Daggers, Musical Instrument of your choice, Entertainer's Pack, 19 GP; or (B) 90 GP",
    multiclassing: "Ability Score Minimum: Charisma 13.<br><strong>Skill Proficiencies:</strong> Choose any 1 skill<br><strong>Tool Proficiencies:</strong> Choose one Musical Instrument<br><strong>Armor Training:</strong> Light armor",
    description: "Bards weave magic through words, music, and dance, inspiring allies, manipulating foes, and mastering a vast array of skills and spells from every magical tradition.",
    customColumns: ["Bardic Die"],
    levels: [
        { level: 1, pb: "+2", features: "Bardic Inspiration, Spellcasting", bardicDie: "1d6", cantrips: "2", prepared: "4", slots: { 1: 2 } },
        { level: 2, pb: "+2", features: "Expertise, Jack of All Trades", bardicDie: "1d6", cantrips: "2", prepared: "5", slots: { 1: 3 } },
        { level: 3, pb: "+2", features: "Bard Subclass", bardicDie: "1d6", cantrips: "2", prepared: "6", slots: { 1: 4, 2: 2 } },
        { level: 4, pb: "+2", features: "Ability Score Improvement", bardicDie: "1d6", cantrips: "3", prepared: "7", slots: { 1: 4, 2: 3 } },
        { level: 5, pb: "+3", features: "Font of Inspiration", bardicDie: "1d8", cantrips: "3", prepared: "9", slots: { 1: 4, 2: 3, 3: 2 } },
        { level: 6, pb: "+3", features: "Subclass Feature", bardicDie: "1d8", cantrips: "3", prepared: "10", slots: { 1: 4, 2: 3, 3: 3 } },
        { level: 7, pb: "+3", features: "Countercharm", bardicDie: "1d8", cantrips: "3", prepared: "11", slots: { 1: 4, 2: 3, 3: 3, 4: 1 } },
        { level: 8, pb: "+3", features: "Ability Score Improvement", bardicDie: "1d8", cantrips: "3", prepared: "12", slots: { 1: 4, 2: 3, 3: 3, 4: 2 } },
        { level: 9, pb: "+4", features: "Expertise", bardicDie: "1d8", cantrips: "3", prepared: "14", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 } },
        { level: 10, pb: "+4", features: "Magical Secrets", bardicDie: "1d10", cantrips: "4", prepared: "15", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 } },
        { level: 11, pb: "+4", features: "—", bardicDie: "1d10", cantrips: "4", prepared: "16", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 } },
        { level: 12, pb: "+4", features: "Ability Score Improvement", bardicDie: "1d10", cantrips: "4", prepared: "16", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 } },
        { level: 13, pb: "+5", features: "—", bardicDie: "1d10", cantrips: "4", prepared: "17", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1 } },
        { level: 14, pb: "+5", features: "Subclass Feature", bardicDie: "1d10", cantrips: "4", prepared: "17", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1 } },
        { level: 15, pb: "+5", features: "—", bardicDie: "1d12", cantrips: "4", prepared: "18", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1 } },
        { level: 16, pb: "+5", features: "Ability Score Improvement", bardicDie: "1d12", cantrips: "4", prepared: "18", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1 } },
        { level: 17, pb: "+6", features: "—", bardicDie: "1d12", cantrips: "4", prepared: "19", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1, 9: 1 } },
        { level: 18, pb: "+6", features: "Superior Inspiration", bardicDie: "1d12", cantrips: "4", prepared: "20", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 1, 7: 1, 8: 1, 9: 1 } },
        { level: 19, pb: "+6", features: "Epic Boon", bardicDie: "1d12", cantrips: "4", prepared: "21", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 1, 8: 1, 9: 1 } },
        { level: 20, pb: "+6", features: "Words of Creation", bardicDie: "1d12", cantrips: "4", prepared: "22", slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 2, 8: 1, 9: 1 } }
    ],
    featuresList: [
        {
            title: "Bardic Inspiration",
            level: 1,
            source: "PHB'24",
            desc: "Bonus Action to grant a Bardic Inspiration die (1d6) to a creature within 60 ft. Within 1 hour, when failing a D20 Test, the creature can roll the die and add it to the roll. Uses equal to Charisma modifier per Long Rest. Die scales to 1d8 at lvl 5, 1d10 at lvl 10, and 1d12 at lvl 15."
        },
        {
            title: "Spellcasting",
            level: 1,
            source: "PHB'24",
            desc: "You prepare and cast Bard spells using Charisma as your spellcasting ability. You can use a Musical Instrument as a Spellcasting Focus."
        },
        {
            title: "Expertise",
            level: 2,
            source: "PHB'24",
            desc: "Gain Expertise (double proficiency bonus) in two skill proficiencies of your choice. Gain Expertise in two additional skills at level 9."
        },
        {
            title: "Jack of All Trades",
            level: 2,
            source: "PHB'24",
            desc: "Add half your Proficiency Bonus (rounded down) to any ability check that uses a skill proficiency you lack and doesn't already use your PB."
        },
        {
            title: "Bard Subclass",
            level: 3,
            source: "PHB'24",
            desc: "Choose a Bard subclass which grants features at levels 3, 6, and 14."
        },
        {
            title: "Font of Inspiration",
            level: 5,
            source: "PHB'24",
            desc: "Regain all expended uses of Bardic Inspiration on a Short or Long Rest. In addition, spend a spell slot (no action required) to regain one Bardic Inspiration use."
        },
        {
            title: "Countercharm",
            level: 7,
            source: "PHB'24",
            desc: "When you or a creature within 30 ft fails a save against Charmed or Frightened, use a Reaction to reroll the save with Advantage."
        },
        {
            title: "Magical Secrets",
            level: 10,
            source: "PHB'24",
            desc: "Whenever your Prepared Spells number increases or you swap a prepared spell, choose new spells from the Bard, Cleric, Druid, and Wizard spell lists. They count as Bard spells for you."
        },
        {
            title: "Superior Inspiration",
            level: 18,
            source: "PHB'24",
            desc: "When rolling Initiative, regain expended uses of Bardic Inspiration until you have at least two."
        },
        {
            title: "Epic Boon",
            level: 19,
            source: "PHB'24",
            desc: "Gain an Epic Boon feat or another feat of your choice."
        },
        {
            title: "Words of Creation",
            level: 20,
            source: "PHB'24",
            desc: "Always have [[Power Word Heal]] and [[Power Word Kill]] prepared. Casting either spell allows targeting a second creature within 10 feet of the first target."
        }
    ]
});