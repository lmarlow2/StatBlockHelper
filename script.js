function generateStatBlock() {
    const creatureName = document.getElementById('creature-name').value;
    const creatureType = document.getElementById('creature-type').value;
    const creatureHP = document.getElementById('creature-hp').value;
    const creatureAC = document.getElementById('creature-ac').value;
    const creatureSpeed = document.getElementById('creature-speed').value;
    
    let output = `___\n___\n### ${creatureName}\n*${creatureType}*\n___\n- **Armor Class** ${creatureAC}\n- **Hit Points** ${creatureHP}\n- **Speed** ${creatureSpeed}\n`;
    
    // Append additional creature stats here
    
    document.getElementById('output').textContent = output;
}

function generateItemCard() {
    const itemName = document.getElementById('item-name').value;
    const itemType = document.getElementById('item-type').value;
    const itemDescription = document.getElementById('item-description').value;
    
    let output = `___\n___\n### ${itemName}\n*${itemType}*\n___\n${itemDescription}\n`;
    
    // Append additional item details here
    
    document.getElementById('output').textContent = output;
}
