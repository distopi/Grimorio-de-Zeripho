window.dndData = window.dndData || {};
window.dndData.opcoes = window.dndData.opcoes || [];

window.dndData.opcoes.push(
    {
        id: "abatingSeal",
        name: "Abating Seal",
        type: "Interdict Boon",
        source: "illr",
        prerequisite: "Level 2+ Illrigger",
        description: "When a creature you can see damages you or an ally within 30 feet of you, you can expend a seal as a reaction to reduce the damage taken by the target by an amount equal to 1d10 + half of your illrigger level (rounded down)."
    },
    {
        id: "aberrantForm",
        name: "Aberrant Form",
        type: "Aberrant Horror; Transformation Boon",
        source: "GH:PG'24",
        prerequisite: "Stage 1 of the Aberrant Horror Transformation",
        description: "Your creature type becomes Aberration in addition to any other creature types you have.<br><br>Also, the first time you become Bloodied after a Short or Long Rest, you gain a number of Temporary Hit Points equal to your Proficiency Bonus plus your current Transformation Stage[cite: 7]."
    }
);