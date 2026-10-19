window.dndData = window.dndData || {};
window.dndData.classes = window.dndData.classes || [];

window.dndData.classes.push({
    id: "wizard",
    name: "Wizard",
    source: "PHB'24",
    role: "Primary Spellcaster / Control",
    hitDice: "D6 per Wizard level",
    primaryAttr: "Intelligence",
    hitPointsLevel1: "6 + Con. modifier",
    hitPointsAdditional: "D6 + your Con. modifier, or, 4 + your Con. modifier",
    savingThrows: "Intelligence, Wisdom",
    skillProficiencies: "Choose 2: Arcana, History, Insight, Investigation, Medicine, Nature, or Religion",
    weaponProficiencies: "Simple weapons",
    startingEquipment: "(A) 2 Daggers, Arcane Focus (Quarterstaff), Robe, Spellbook, Scholar's Pack, and 5 GP; or (B) 55 GP",
    multiclassing: "To qualify for a new class, you must have a score of at least 13 in the primary ability of the new class and your current classes.",
    description: "As a student of arcane magic, you have learned to cast spells. Wizards are supreme arcane spellcasters, united by the unbreakable threads of the Multiverse's tapestry of magic. Relying on their [[Spellbook]], they study and manipulate arcane energies to bend reality to their will.",
    levels: [
        { level: 1, pb: "+2", features: "Spellcasting, Ritual Adept, Arcane Recovery", cantrips: 3, prepared: 4, slots: {1: 2} },
        { level: 2, pb: "+2", features: "Scholar", cantrips: 3, prepared: 5, slots: {1: 3} },
        { level: 3, pb: "+2", features: "Wizard Subclass", cantrips: 3, prepared: 6, slots: {1: 4, 2: 2} },
        { level: 4, pb: "+2", features: "Ability Score Improvement", cantrips: 4, prepared: 7, slots: {1: 4, 2: 3} },
        { level: 5, pb: "+3", features: "Memorize Spell", cantrips: 4, prepared: 9, slots: {1: 4, 2: 3, 3: 2} },
        { level: 6, pb: "+3", features: "Subclass Feature", cantrips: 4, prepared: 10, slots: {1: 4, 2: 3, 3: 3} },
        { level: 7, pb: "+3", features: "—", cantrips: 4, prepared: 11, slots: {1: 4, 2: 3, 3: 3, 4: 1} },
        { level: 8, pb: "+3", features: "Ability Score Improvement", cantrips: 4, prepared: 12, slots: {1: 4, 2: 3, 3: 3, 4: 2} },
        { level: 9, pb: "+4", features: "—", cantrips: 4, prepared: 14, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 1} },
        { level: 10, pb: "+4", features: "Subclass Feature", cantrips: 5, prepared: 15, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2} },
        { level: 11, pb: "+4", features: "—", cantrips: 5, prepared: 16, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1} },
        { level: 12, pb: "+4", features: "Ability Score Improvement", cantrips: 5, prepared: 16, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1} },
        { level: 13, pb: "+5", features: "—", cantrips: 5, prepared: 17, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1} },
        { level: 14, pb: "+5", features: "Subclass Feature", cantrips: 5, prepared: 18, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1} },
        { level: 15, pb: "+5", features: "—", cantrips: 5, prepared: 19, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1} },
        { level: 16, pb: "+5", features: "Ability Score Improvement", cantrips: 5, prepared: 21, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1} },
        { level: 17, pb: "+6", features: "—", cantrips: 5, prepared: 22, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1, 9: 1} },
        { level: 18, pb: "+6", features: "Spell Mastery", cantrips: 5, prepared: 23, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 1, 7: 1, 8: 1, 9: 1} },
        { level: 19, pb: "+6", features: "Epic Boon", cantrips: 5, prepared: 24, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 1, 8: 1, 9: 1} },
        { level: 20, pb: "+6", features: "Signature Spells", cantrips: 5, prepared: 25, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 2, 8: 1, 9: 1} }
    ],
    featuresList: [
        {
            title: "Spellcasting",
            level: 1,
            desc: `As a student of arcane magic, you have learned to cast spells.<br><br>
            • <strong>Cantrips:</strong> You know 3 Wizard cantrips. [[Light]], [[Mage Hand]], and [[Ray of Frost]] are recommended. After a Long Rest, you can swap one cantrip.<br>
            • <strong>Spellbook:</strong> Contains your known level 1+ spells (starts with 6 spells).<br>
            • <strong>Prepared Spells:</strong> You prepare spells from your spellbook according to the Prepared Spells column.<br>
            • <strong>Spellcasting Ability:</strong> Intelligence is your spellcasting ability.`
        },
        {
            title: "Ritual Adept",
            level: 1,
            desc: "You can cast any spell as a Ritual if that spell has the Ritual tag and is in your [[Spellbook]]. You needn't have the spell prepared."
        },
        {
            title: "Arcane Recovery",
            level: 1,
            desc: "Once per day when you finish a Short Rest, you can recover expended spell slots with a combined level equal to no more than half your Wizard level (round up), none level 6 or higher."
        },
        {
            title: "Scholar",
            level: 2,
            desc: "Choose one skill proficiency: Arcana, History, Investigation, Medicine, Nature, or Religion. You gain Expertise in that skill."
        },
        {
            title: "Wizard Subclass",
            level: 3,
            desc: "You choose a Wizard subclass that grants features at levels 3, 6, 10, and 14."
        },
        {
            title: "Ability Score Improvement",
            level: 4,
            desc: "You gain an Ability Score Improvement feat or another feat for which you qualify. You gain this feature again at levels 8, 12, and 16."
        },
        {
            title: "Memorize Spell",
            level: 5,
            desc: "Whenever you finish a Short Rest, you can study your [[Spellbook]] and replace one prepared level 1+ spell with another level 1+ spell from your book."
        },
        {
            title: "Spell Mastery",
            level: 18,
            desc: "Choose a level 1 and level 2 spell in your [[Spellbook]]. You always have them prepared and can cast them at their lowest level without expending a spell slot."
        },
        {
            title: "Epic Boon",
            level: 19,
            desc: "You gain an Epic Boon feat or another feat for which you qualify. Boon of Spell Recall is recommended."
        },
        {
            title: "Signature Spells",
            level: 20,
            desc: "Choose two level 3 spells in your [[Spellbook]]. You always have them prepared and can cast each once at level 3 without expending a spell slot per Short or Long Rest."
        }
    ]
});