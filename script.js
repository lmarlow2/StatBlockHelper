function calculateBonus(stat){
    stat = Number(stat);
    modifier = (stat - 10)/2;
    modifier = (modifier > 0 ? Math.floor(modifier) : -1 * Math.round(Math.abs(modifier))) 
    return "(" + (modifier<0?"":"+") + modifier + ")";
}

function generateStatBlock(){
    const creatureName = document.getElementById('creature-name').value;
    const creatureType = document.getElementById('creature-type').value;
    const creatureAC = document.getElementById('creature-ac').value;
    const creatureHP = document.getElementById('creature-hp').value;
    const creatureSpeed = document.getElementById('creature-speed').value;

    const creatureStr = document.getElementById('creature-str').value;
    const creatureDex = document.getElementById('creature-dex').value;
    const creatureCon = document.getElementById('creature-con').value;
    const creatureInt = document.getElementById('creature-int').value;
    const creatureWis = document.getElementById('creature-wis').value;
    const creatureCha = document.getElementById('creature-cha').value;

    const creatureSavingThrows = document.getElementById('creature-saving-throws').value;
    const creatureSkills = document.getElementById('creature-skills').value;
    const creatureSenses = document.getElementById('creature-senses').value;
    const creatureLanguages = document.getElementById('creature-languages').value;
    const creatureChallenge = document.getElementById('creature-challenge').value;

    const creatureTraits = document.getElementById('creature-traits').value.split('\n').filter(line => line.trim() !== '');
    const creatureActions = document.getElementById('creature-actions').value.split('\n').filter(line => line.trim() !== '');
    const creatureBonusActions = document.getElementById('creature-bonus-actions').value.split('\n').filter(line => line.trim() !== '');
    const creatureReactions = document.getElementById('creature-reactions').value.split('\n').filter(line => line.trim() !== '');
    const creatureLegendaryActions = document.getElementById('creature-legendary-actions').value.split('\n').filter(line => line.trim() !== '');
    const creatureSpellcasting = document.getElementById('creature-spellcasting').value;

    let output = `___\n___\n> ## ${creatureName}\n> *${creatureType}*\n> ___\n`;
    output += `> - **Armor Class** ${creatureAC}\n`;
    output += `> - **Hit Points** ${creatureHP}\n`;
    output += `> - **Speed** ${creatureSpeed}\n> ___\n`;
    output += `> | STR | DEX | CON | INT | WIS | CHA |\n`;
    output += `> |:---:|:---:|:---:|:---:|:---:|:---:|\n`;
    output += `> | ${creatureStr} ${calculateBonus(creatureStr)} | ${creatureDex} ${calculateBonus(creatureDex)} | ${creatureCon} ${calculateBonus(creatureCon)} | ${creatureInt} ${calculateBonus(creatureInt)} | ${creatureWis} ${calculateBonus(creatureWis)} | ${creatureCha} ${calculateBonus(creatureCha)} |\n> ___\n`;

    if(creatureSavingThrows){
        output += `> - **Saving Throws** ${creatureSavingThrows}\n`;
    }
    if(creatureSkills){
        output += `> - **Skills** ${creatureSkills}\n`;
    }
    if(creatureSenses){
        output += `> - **Senses** ${creatureSenses}\n`;
    }
    if(creatureLanguages){
        output += `> - **Languages** ${creatureLanguages}\n`;
    }
    output += `> - **Challenge** ${creatureChallenge} **Proficiency Bonus** +4\n> ___\n`;

    creatureTraits.forEach(trait => {
        output += `> ***${trait.split('.')[0]}.*** ${trait.substring(trait.indexOf('.') + 1)}\n>\n`;
    });

    if(creatureSpellcasting){
        creatureSpellcasting.split('\n').forEach((spell) => {
            output += `> - **${addSpellToStatBlock(spell)}**`
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

    if(creatureLegendaryActions.length > 0){
        output += `> ### Legendary Actions\n`;
        output += `> ${creatureName} can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. ${creatureName} regains spent legendary actions at the start of its turn.\n>\n`;
        creatureLegendaryActions.forEach(action => {
            output += `> ***${action.split('.')[0]}.*** ${action.substring(action.indexOf('.') + 1)}\n>\n`;
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
