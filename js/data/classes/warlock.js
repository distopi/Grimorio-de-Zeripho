window.dndData = window.dndData || {};
window.dndData.classes = window.dndData.classes || [];

window.dndData.classes.push({
    id: "warlock",
    name: "Warlock",
    source: "PHB'24",
    role: "Pact Magic Caster / Eldritch Invocator",
    hitDice: "D8 per Warlock level",
    primaryAttr: "Charisma",
    hitPointsLevel1: "8 + Con. modifier",
    hitPointsAdditional: "D8 + your Con. modifier, or, 5 + your Con. modifier",
    savingThrows: "Wisdom, Charisma",
    skillProficiencies: "Choose 2: Arcana, Deception, History, Intimidation, Investigation, Nature, or Religion",
    weaponProficiencies: "Simple weapons",
    toolProficiencies: "None",
    armorTraining: "Light armor",
    startingEquipment: "Choose A or B: (A) Leather Armor, Sickle, 2 Daggers, Arcane Focus (orb), Book (occult lore), Scholar's Pack, 15 GP; or (B) 100 GP",
    multiclassing: "Ability Score Minimum: Charisma 13.<br><strong>Armor Training:</strong> Light armor",
    description: "Warlocks strike otherworldly pacts with powerful patrons, drawing upon forbidden Eldritch Invocations and Pact Magic spell slots that refresh on a Short Rest.",
    customColumns: ["Invocations", "Slot Level"],
    levels: [
        { level: 1, pb: "+2", features: "Eldritch Invocations, Pact Magic, Eldritch Invocation Options", invocations: "1", cantrips: "2", prepared: "2", slots: { 1: 1 }, slotLevel: "1" },
        { level: 2, pb: "+2", features: "Magical Cunning", invocations: "3", cantrips: "2", prepared: "3", slots: { 1: 2 }, slotLevel: "1" },
        { level: 3, pb: "+2", features: "Warlock Subclass", invocations: "3", cantrips: "2", prepared: "4", slots: { 2: 2 }, slotLevel: "2" },
        { level: 4, pb: "+2", features: "Ability Score Improvement", invocations: "3", cantrips: "3", prepared: "5", slots: { 2: 2 }, slotLevel: "2" },
        { level: 5, pb: "+3", features: "—", invocations: "5", cantrips: "3", prepared: "6", slots: { 3: 2 }, slotLevel: "3" },
        { level: 6, pb: "+3", features: "Subclass Feature", invocations: "5", cantrips: "3", prepared: "7", slots: { 3: 2 }, slotLevel: "3" },
        { level: 7, pb: "+3", features: "—", invocations: "6", cantrips: "3", prepared: "8", slots: { 4: 2 }, slotLevel: "4" },
        { level: 8, pb: "+3", features: "Ability Score Improvement", invocations: "6", cantrips: "3", prepared: "9", slots: { 4: 2 }, slotLevel: "4" },
        { level: 9, pb: "+4", features: "Contact Patron", invocations: "7", cantrips: "3", prepared: "10", slots: { 5: 2 }, slotLevel: "5" },
        { level: 10, pb: "+4", features: "Subclass Feature", invocations: "7", cantrips: "4", prepared: "10", slots: { 5: 2 }, slotLevel: "5" },
        { level: 11, pb: "+4", features: "Mystic Arcanum", invocations: "7", cantrips: "4", prepared: "11", slots: { 5: 3 }, slotLevel: "5" },
        { level: 12, pb: "+4", features: "Ability Score Improvement", invocations: "8", cantrips: "4", prepared: "11", slots: { 5: 3 }, slotLevel: "5" },
        { level: 13, pb: "+5", features: "Mystic Arcanum", invocations: "8", cantrips: "4", prepared: "12", slots: { 5: 3 }, slotLevel: "5" },
        { level: 14, pb: "+5", features: "Subclass Feature", invocations: "8", cantrips: "4", prepared: "12", slots: { 5: 3 }, slotLevel: "5" },
        { level: 15, pb: "+5", features: "Mystic Arcanum", invocations: "9", cantrips: "4", prepared: "13", slots: { 5: 3 }, slotLevel: "5" },
        { level: 16, pb: "+5", features: "Ability Score Improvement", invocations: "9", cantrips: "4", prepared: "13", slots: { 5: 3 }, slotLevel: "5" },
        { level: 17, pb: "+6", features: "Mystic Arcanum", invocations: "9", cantrips: "4", prepared: "14", slots: { 5: 4 }, slotLevel: "5" },
        { level: 18, pb: "+6", features: "—", invocations: "10", cantrips: "4", prepared: "14", slots: { 5: 4 }, slotLevel: "5" },
        { level: 19, pb: "+6", features: "Epic Boon", invocations: "10", cantrips: "4", prepared: "15", slots: { 5: 4 }, slotLevel: "5" },
        { level: 20, pb: "+6", features: "Eldritch Master", invocations: "10", cantrips: "4", prepared: "15", slots: { 5: 4 }, slotLevel: "5" }
    ],
    featuresList: [
        {
            title: "Eldritch Invocations",
            level: 1,
            source: "PHB'24",
            desc: "Learn forbidden lessons and powers called Eldritch Invocations (scaling from 1 up to 10 invocations). Includes Pact choices (Pact of the Blade, Pact of the Chain, Pact of the Tome), combat modifiers, and innate spell options."
        },
        {
            title: "Pact Magic",
            level: 1,
            source: "PHB'24",
            desc: "Cast Warlock spells using Charisma as your spellcasting ability. All Pact Magic spell slots are of the same slot level (scaling from 1st to 5th) and recharge on a Short or Long Rest."
        },
        {
            title: "Magical Cunning",
            level: 2,
            source: "PHB'24",
            desc: "Perform a 1-minute rite to regain up to half of your maximum Pact Magic spell slots (1/Long Rest)."
        },
        {
            title: "Warlock Subclass",
            level: 3,
            source: "PHB'24",
            desc: "Choose a Warlock subclass which grants features at levels 3, 6, 10, and 14."
        },
        {
            title: "Contact Patron",
            level: 9,
            source: "PHB'24",
            desc: "Always have [[Contact Other Plane]] prepared. Cast it without spending a spell slot to contact your patron, automatically succeeding on the saving throw (1/Long Rest)."
        },
        {
            title: "Mystic Arcanum",
            level: 11,
            source: "PHB'24",
            desc: "Your patron grants secret arcanum spells castable once per Long Rest without spending spell slots: 6th-level spell at level 11, 7th-level at level 13, 8th-level at level 15, and 9th-level at level 17."
        },
        {
            title: "Epic Boon",
            level: 19,
            source: "PHB'24",
            desc: "Gain an Epic Boon feat or another feat of your choice."
        },
        {
            title: "Eldritch Master",
            level: 20,
            source: "PHB'24",
            desc: "When you use Magical Cunning, you regain all of your expended Pact Magic spell slots instead of half."
        }
    ]
});