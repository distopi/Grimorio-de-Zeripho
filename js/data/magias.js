window.dndData = window.dndData || {};
window.dndData.magias = window.dndData.magias || [];

window.dndData.magias.push(
    {
        id: "abiDalzimsHorridWilting",
        name: "Abi-Dalzim's Horrid Wilting",
        type: "Level 8 Necromancy",
        level: 8,                       // <--- Nível (0 para Cantrip, 1-9)
        school: "Necromancy",            // <--- Escola
        castingTime: "Action",          // <--- Tempo de conjuração (Action, Bonus Action, Reaction, Minute, Hour)
        range: "150 feet",              // <--- Alcance
        concentration: false,           // <--- Concentração (true/false)
        classes: ["Sorcerer", "Wizard"],// <--- Classes que aprendem
        components: "V, S, M (a bit of sponge)",
        duration: "Instantaneous",
        description: "You draw the moisture from every creature in a 30-foot cube centered on a point you choose within range. Each creature in that area must make a Constitution saving throw. Constructs and undead aren't affected, and plants and water elementals make this saving throw with disadvantage. A creature takes 12d8 necrotic damage on a failed save, or half as much damage on a successful one.<br><br>Nonmagical plants in the area that aren't creatures, such as trees and shrubs, wither and die instantly."
    },
    {
        id: "absorbElements",
        name: "Absorb Elements",
        type: "Level 1 Abjuration",
        level: 1,
        school: "Abjuration",
        castingTime: "Reaction",
        range: "Self",
        concentration: false,
        classes: ["Artificer", "Druid", "Ranger", "Sorcerer", "Wizard"],
        components: "S",
        duration: "1 round",
        description: "The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends.<br><br><strong>At Higher Levels.</strong> When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st."
    }
);