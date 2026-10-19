window.dndData = window.dndData || {};
window.dndData.subclasses = window.dndData.subclasses || {};
window.dndData.subclasses.wizard = window.dndData.subclasses.wizard || [];

window.dndData.subclasses.wizard.push({
    id: "bibliomancy",
    name: "Bibliomancy",
    source: "CBT",
    shortDesc: "\"Books are a uniquely portable magic.\" — Stephen King. Bibliomancers treat the language of magic as the key to the building blocks of the universe, unlocking reality through the structure of spells.",
    description: `“Books are a uniquely portable magic.”<br>&mdash; Stephen King<br><br>
    A spellbook is a Wizard's prized possession. Even the least experienced apprentice knows that each spell's formula must be carefully recorded, understood, and memorized to cast a spell properly. For the typical Wizard, the symbols, words, and equations in a spellbook are a means to an end.<br><br>
    For Bibliomancers, the language of magic is the key to the building blocks of the universe. This tradition believes that a spell's formula holds more than the gathering and shaping magical energy, that the underlying properties of reality itself are illustrated through a spell. By unlocking the mechanisms that construct spells, these Wizards can slowly unlock the riddle of the universe.`,
    features: [
        {
            title: "Book Learning",
            level: 3,
            source: "CBT",
            desc: "You have an arcane connection to all books, be they tablets or tomes, allowing you to unravel their secrets. If you touch an object containing a script for 1 minute, you learn a basic, working knowledge of the script's contents unless that information is hidden by a code or cypher.<br><br>If the book or script is a magic item or magical object, you learn its properties and how to use it, whether it requires Attunement, and how many charges it has, if any. You learn whether any ongoing spells are affecting the item and what they are. If the item was created by a spell, you learn that spell's name."
        },
        {
            title: "Edit Spell",
            level: 3,
            source: "CBT",
            desc: "Choose a spell in your [[Spellbook]] that is level 1 or higher. When you prepare that spell, you can give it one or more of the following benefits:<br>" +
                  "• The spell save DC of the chosen spell, if any, increases by 1.<br>" +
                  "• If that spell deals damage, you can change that damage's type to a different one of your choice.<br>" +
                  "• If that spell requires a saving throw, you can change that saving throw to Intelligence.<br><br>" +
                  "You can prepare the chosen spell multiple times, choosing different benefits for each preparation. Each modified version of the spell counts against your prepared spells.<br><br>" +
                  "When you make these changes, you can alter the spell's name. For example, [[Burning Hands]] changed to deal Cold damage and require an Intelligence saving throw might be named Mind Freeze.<br><br>" +
                  "When you finish a Long Rest, you can change your chosen spell. When you change the chosen spell, the benefits to the previous chosen spell end and you no longer have the altered versions prepared."
        },
        {
            title: "Weaver of Words",
            level: 6,
            source: "CBT",
            desc: "You become a master of all words. You learn all languages available to characters in the campaign."
        },
        {
            title: "Customized Spell",
            level: 10,
            source: "CBT",
            desc: "You can alter the structure of a spell to incorporate a creature's name. Pick a spell in your [[Spellbook]] that has a Verbal component, requires Concentration, and is level 1+. When you prepare that spell, you can name a specific, willing creature other than yourself. If that creature is the only target of the spell, you can cast the spell on it without needing to maintain Concentration."
        },
        {
            title: "Master of Words",
            level: 14,
            source: "CBT",
            desc: "When you prepare spells, pick two spells from levels 1 to 5 to weave into a linked, powerful spell you can prepare as a single spell. The level of the linked spell is equal to the combined level of the two spells chosen and can't exceed 6.<br><br>" +
                  "The chosen spells must have a Verbal component and must have a casting time of one action.<br><br>" +
                  "As a Magic action, you can cast the linked spell, and the effects of both spells occur at the same time."
        }
    ]
});