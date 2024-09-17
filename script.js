function calculateBonus(stat){
    stat = Number(stat);
    modifier = (stat - 10)/2;
    modifier = (modifier > 0 ? Math.floor(modifier) : -1 * Math.round(Math.abs(modifier))) 
    return ["(" + (modifier<0?"":"+") + modifier + ")", modifer];
}

function creatureSavingThrows(profMod, str, dex, con, int, wis, cha){
    const savingThrows = [];
    if(document.getElementById("strength-save").checked) savingThrows.push("Str +" + (str + profMod));
    if(document.getElementById("dexterity-save").checked) savingThrows.push("Dex +" + (dex + profMod));
    if(document.getElementById("constitution-save").checked) savingThrows.push("Con +" + (con + profMod));
    if(document.getElementById("intelligence-save").checked) savingThrows.push("Int +" + (int + profMod));
    if(document.getElementById("wisdom-save").checked) savingThrows.push("Wis +" + (wis + profMod));
    if(document.getElementById("charisma-save").checked) savingThrows.push("Cha +" + (cha + profMod));

    return savingThrows.join(', ');
}

function creatureSkills(profMod, str, dex, con, int, wis, cha){
    const skills = [];
    if(document.getElementById("acrobatics").checked) skills.push("Acrobatics +" + (dex + profMod));
    if(document.getElementById("animal-handling").checked) skills.push("Animal Handling +" + (wis + profMod));
    if(document.getElementById("arcana").checked) skills.push("Arcana +" + (int + profMod));
    if(document.getElementById("athletics").checked) skills.push("Athletics +" + (str + profMod));
    if(document.getElementById("deception").checked) skills.push("Deception +" + (cha + profMod));
    if(document.getElementById("history").checked) skills.push("History +" + (int + profMod));
    if(document.getElementById("insight").checked) skills.push("Insight +" + (wis + profMod));
    if(document.getElementById("intimidation").checked) skills.push("Intimidation +" + (cha + profMod));
    if(document.getElementById("investigation").checked) skills.push("Investigation +" + (int + profMod));
    if(document.getElementById("medicine").checked) skills.push("Medicine +" + (wis + profMod));
    if(document.getElementById("nature").checked) skills.push("Nature +" + (int + profMod));
    if(document.getElementById("perception").checked) skills.push("Perception +" + (wis + profMod));
    if(document.getElementById("performance").checked) skills.push("Performance +" + (cha + profMod));
    if(document.getElementById("persuasion").checked) skills.push("Persuasion +" + (cha + profMod));
    if(document.getElementById("religion").checked) skills.push("Religion +" + (int + profMod));
    if(document.getElementById("sleight-of-hand").checked) skills.push("Sleight of Hand +" + (dex + profMod));
    if(document.getElementById("stealth").checked) skills.push("Stealth +" + (dex + profMod));
    if(document.getElementById("survival").checked) skills.push("Survival +" + (wis + profMod));

    return skills.join(', ');
}

function generateStatBlock(){
    const creatureName = document.getElementById('creature-name').value;
    const creatureType = document.getElementById('creature-type').value;
    const creatureAC = document.getElementById('creature-ac').value;
    const creatureHP = document.getElementById('creature-hp').value;
    const creatureSpeed = document.getElementById('creature-speed').value;
    const creatureArt = document.getElementById('creature-art').value;
    const creatureStr = document.getElementById('creature-str').value;
    const strBonus = calculateBonus(creatureStr);
    const creatureDex = document.getElementById('creature-dex').value;
    const dexBonus = calculateBonus(creatureDex);
    const creatureCon = document.getElementById('creature-con').value;
    const conBonus = calculateBonus(creatureCon);
    const creatureInt = document.getElementById('creature-int').value;
    const intBonus = calculateBonus(creatureInt);
    const creatureWis = document.getElementById('creature-wis').value;
    const wisBonus = calculateBonus(creatureWis);
    const creatureCha = document.getElementById('creature-cha').value;
    const chaBonus = calculateBonus(creatureCha);

    const creatureProficiencyModifier = Number(document.getElementById('creature-proficiency-modifier').value);
    //const creatureSavingThrows = document.getElementById('creature-saving-throws').value;
    //const creatureSkills = document.getElementById('creature-skills').value;
    const creatureSenses = document.getElementById('creature-senses').value;
    const creatureLanguages = document.getElementById('creature-languages').value;
    const creatureChallenge = document.getElementById('creature-challenge').value;

    const creatureTraits = document.getElementById('creature-traits').value.split('\n').filter(line => line.trim() !== '');
    const creatureActions = document.getElementById('creature-actions').value.split('\n').filter(line => line.trim() !== '');
    const creatureBonusActions = document.getElementById('creature-bonus-actions').value.split('\n').filter(line => line.trim() !== '');
    const creatureReactions = document.getElementById('creature-reactions').value.split('\n').filter(line => line.trim() !== '');
    const creatureLegendaryActions = document.getElementById('creature-legendary-actions').value.split('\n').filter(line => line.trim() !== '');
    const creatureLairActions = document.getElementById('creature-lair-actions').value.split('\n').filter(line => line.trim() !== '');
    const creatureFreeActions = document.getElementById('creature-free-actions').value.split('\n').filter(line => line.trim() !== '');
    const creatureSpellcasting = document.getElementById('creature-spellcasting').value;
    const creatureSpellcastingAbility = document.getElementByID('creature-spellcasting-ability').value;

    let output = `___\n___\n> ## ${creatureName}\n> *${creatureType}*\n> ___\n`;

    if(creatureArt){
        output += `><img src='${creatureArt}' style='width:310px' />\n`
    }
    
    output += `> - **Armor Class** ${creatureAC}\n`;
    output += `> - **Hit Points** ${creatureHP}\n`;
    output += `> - **Speed** ${creatureSpeed}\n> ___\n`;
    output += `> | STR | DEX | CON | INT | WIS | CHA |\n`;
    output += `> |:---:|:---:|:---:|:---:|:---:|:---:|\n`;
    output += `> | ${creatureStr} ${strBonus[0]} | ${creatureDex[} ${dexBonus[0]} | ${creatureCon} ${conBonus[0]} | ${creatureInt} ${intBonus[0]} | ${creatureWis} ${wisBonus[0]} | ${creatureCha} ${chaBonus[0]} |\n> ___\n`;

    if(creatureProficiencyModifier){
        const saves = creatureSavingThrows(creatureProficiencyModifier, strBonus[1], dexBonus[1], conBonus[1], intBonus[1], wisBonus[1], chaBonus[1]);
        const skills = creatureSkills(creatureProficiencyModifier, strBonus[1], dexBonus[1], conBonus[1], intBonus[1], wisBonus[1], chaBonus[1]);
        if(saves){
            output += `> - **Saving Throws** ${saves}\n`;
        }
        if(skills){
            output += `> - **Skills** ${skills}\n`;
        }
    }
    if(creatureSenses){
        output += `> - **Senses** ${creatureSenses}\n`;
    }
    if(creatureLanguages){
        output += `> - **Languages** ${creatureLanguages}\n`;
    }
    output += `> - **Challenge** ${creatureChallenge} **Proficiency Bonus** +${creatureProficiencyModifier}\n> ___\n`;
    //output += `> - **Challenge** ${calculateDefensiveCR(Number(creatureHP.match(/(\d+)/)[0]), Number(creatureAC.match(/(\d+)/)[0]))} **Proficiency Bonus** +${creatureProficiencyModifier}\n> ___\n`;

    creatureTraits.forEach(trait => {
        output += `> ***${trait.split('.')[0]}.*** ${trait.substring(trait.indexOf('.') + 1)}\n>\n`;
    });

    if(creatureSpellcasting){
        const spellCastingAbility = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"][creatureSpellcastingAbility];
        const spellCastingModifier = creatureProficiencyModifier + [strBonus[1], dexBonus[1], conBonus[1], intBonus[1], wisBonus[1], chaBonus[1]][creatureSpellcastingAbility];
        const spellSaveDC = 8 + spellCastingModifier;
        output += `> ### Spellcasting\n${creatureName}'s spellcasting ability is ${spellCastingAbility} (spell save DC ${spellSaveDC}, +${spellCastingModifier} to hit with spell attacks). ${creatureName} has the following spells prepared:\n`
        creatureSpellcasting.split('\n').forEach((spell) => {
            output += `> - **${addSpellToStatBlock(spell)}**\n`
        });
    }

    output += `> ### Actions\n`;
    creatureActions.forEach(action => {
        output += `> ***${action.split('.')[0]}.*** ${action.substring(action.indexOf('.') + 1)}\n>\n`;
    });

    if(creatureBonusActions.length > 0){
        output += `> ### Bonus Actions\n`;
        creatureBonusActions.forEach(action => {
            output += `> ***${action.split('.')[0]}.*** ${action.substring(action.indexOf('.') + 1)}\n>\n`;
        });
    }

    if(creatureReactions.length > 0){
        output += `> ### Reactions\n`;
        creatureReactions.forEach(action => {
            output += `> ***${action.split('.')[0]}.*** ${action.substring(action.indexOf('.') + 1)}\n>\n`;
        });
    }

    if(creatureFreeActions.length > 0){
        output += `> ### Free Actions\n`;
        creatureReactions.forEach(action => {
            output += `> ***${action.split('.')[0]}.*** ${action.substring(action.indexOf('.') + 1)}\n>\n`;
        });
    }

    if(creatureLegendaryActions.length > 0){
        output += `> ### Legendary Actions\n`;
        output += `> ${creatureName} can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. ${creatureName} regains spent legendary actions at the start of its turn.\n>\n`;
        creatureLegendaryActions.forEach(action => {
            output += `> ***${action.split('.')[0]}.*** ${action.substring(action.indexOf('.') + 1)}\n>\n`;
        });
    }

    if(creatureLairActions.length > 0){
        output += `> ### Lair Actions\n`;
        output += `> When fighting inside its lair, ${creatureName} can invoke the ambient magic to take lair actions. On initiative count 20 (losing initiative ties), ${creatureName} takes a lair action to cause one of the following effects:\n>\n`;
        creatureLegendaryActions.forEach(action => {
            output += `> - ***${action.split('.')[0]}.*** ${action.substring(action.indexOf('.') + 1)}\n>\n`;
        });
    }

    document.getElementById('output').textContent = output;
}

function generateItemCard() {
    const itemName = document.getElementById('itemName').value;
    const itemType = document.getElementById('itemType').value;
    const itemImage = document.getElementById('itemImage').value;
    const itemCategory = document.getElementById('itemCategory').value;
    const itemAttunement = document.getElementById('itemAttunement').value;
    const itemDamage = document.getElementById('itemDamage').value;
    const itemDamageType = document.getElementById('itemDamageType').value;
    const itemProperties = document.getElementById('itemProperties').value;
    const itemRange = document.getElementById('itemRange').value;
    const itemWeight = document.getElementById('itemWeight').value;
    const itemValue = document.getElementById('itemValue').value;
    const itemEnchantment = document.getElementById('itemEnchantment').value;
    const itemSpellCasting = document.getElementById('itemSpellCasting').value;
    const itemSpellDetails = document.getElementById('itemSpellDetails').value;
    const itemDailySpells = document.getElementById('itemDailySpells').value;
    const itemWeeklySpells = document.getElementById('itemWeeklySpells').value;

    let output = `___\n___\n`;
    output += `> ## ${itemName}\n`;
    output += `> *${itemType}*\n`;
    output += `<div style="width: 180px; height: 650px; overflow: hidden"><img style="width:235px;margin: -35px" src="${itemImage}" /></div>\n`;
    output += `> ### Stats\n`;
    output += `> - **Category:** ${itemCategory}\n`;
    output += `> - **Attunement:** ${itemAttunement}\n`;
    output += `> - **Damage:** ${itemDamage}\n`;
    output += `> - **Damage Type:** ${itemDamageType}\n`;
    output += `> - **Properties:** ${itemProperties}\n`;
    output += `> - **Range:** ${itemRange}\n`;
    output += `> - **Weight:** ${itemWeight}\n`;
    output += `> - **Value:** ${itemValue}\n>\n`;

    if(itemEnchantment){
        output += `> ### Enchantment\n>${itemEnchantment}\n>\n`;
    }
    if(itemSpellCasting){
        output += `> ### Spell Casting\n>${itemSpellCasting}\n>\n`;
    }
    if(itemSpellDetails){
        output += `___\n**At Will**\n${itemSpellDetails}\n>\n`;
    }
    if(itemDailySpells){
        output += `___\n**1d6 Times per Day**\n${itemDailySpells}\n>\n`;
    }
    if(itemWeeklySpells){
        output += `___\n**Once Per Week**\n${itemWeeklySpells}\n>\n`;
    }

    document.getElementById('output').textContent = output;
}

function copyOutputToClipboard(){
    // Select the text content of the <pre> element
    const outputElement = document.getElementById('output');
    const range = document.createRange();
    range.selectNode(outputElement);
    window.getSelection().removeAllRanges(); // Clear any existing selections
    window.getSelection().addRange(range);   // Select the content

    try{
        // Attempt to copy the selected text to the clipboard
        const successful = document.execCommand('copy');
        const msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copy command was ' + msg);
    }catch(err){
        console.error('Oops, unable to copy', err);
    }

    // Remove the selection
    window.getSelection().removeAllRanges();
}
