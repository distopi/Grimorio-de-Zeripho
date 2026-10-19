window.dndData = window.dndData || {};
window.dndData.talentos = window.dndData.talentos || [];

window.dndData.talentos.push(
    {
        id: "aberrantAnatomy",
        name: "Aberrant Anatomy",
        type: "Dark Gift Feat",
        source: "RHW",
        prerequisite: "Ravenloft Campaign",
        description: "Exposure to alien horrors like those of the Far Realm has warped your physical form in supernatural ways. You gain the following features[cite: 6].",
        traits: [
            {
                title: "Breathless",
                desc: "You can hold your breath for 1 hour[cite: 6]."
            },
            {
                title: "Extrasensory Perception",
                desc: "You have proficiency in the Perception skill, if you lack it. You also gain Expertise in that skill.<br><br>In addition, you have Blindsight with a range of 15 feet[cite: 6]."
            },
            {
                title: "Warping Flesh",
                desc: "Immediately after you make a D20 Test and roll a 1 on the d20, the aberrant influence infecting your form flares, wrenching control of your flesh. Make a Constitution saving throw (DC 13 plus your Proficiency Bonus). On a failed save, you have the Stunned condition until the end of your next turn[cite: 6]."
            }
        ]
    },
    {
        id: "aberrantDragonmark",
        name: "Aberrant Dragonmark",
        type: "Dragonmark Feat",
        source: "EFA",
        prerequisite: "Eberron Campaign, Can't Have Another Dragonmark Feat",
        description: "Você ganha os seguintes benefícios[cite: 7].",
        traits: [
            {
                title: "Aberrant Fortitude",
                desc: "When you fail a Constitution saving throw, you can take a Reaction to roll 1d4 and add the number rolled to the save, potentially turning the failure into a success. Once you've used this benefit, you can't use it again until you finish a Long Rest[cite: 7]."
            },
            {
                title: "Aberrant Magic",
                desc: "You know one cantrip of your choice from the Sorcerer spell list. Also, choose a level 1 spell from that spell list. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Short or Long Rest. You can also cast this spell using any spell slots you have. Constitution is your spellcasting ability for this spell[cite: 7]."
            },
            {
                title: "Aberrant Surge",
                desc: "When you cast the level 1 spell from this feat, you can expend one of your Hit Point Dice and roll it. If you roll an even number, you gain a number of Temporary Hit Points equal to the number rolled. If you roll an odd number, one creature within 30 feet of you (not including you) takes Force damage equal to the number rolled. If no other creatures are in range, you take the damage[cite: 7]."
            }
        ]
    }
);