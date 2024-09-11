const crThresholds = {
  // Hit Points for each CR
  hp: [
    { min: 1, max: 6, cr: 0 },
    { min: 7, max: 35, cr: 1/8 },
    { min: 36, max: 49, cr: 1/4 },
    { min: 50, max: 70, cr: 1/2 },
    { min: 71, max: 85, cr: 1 },
    { min: 86, max: 100, cr: 2 },
    { min: 101, max: 115, cr: 3 },
    { min: 116, max: 130, cr: 4 },
    { min: 131, max: 145, cr: 5 },
    { min: 146, max: 160, cr: 6 },
    { min: 161, max: 175, cr: 7 },
    { min: 176, max: 190, cr: 8 },
    { min: 191, max: 205, cr: 9 },
    { min: 206, max: 220, cr: 10 },
    { min: 221, max: 235, cr: 11 },
    { min: 236, max: 250, cr: 12 },
    { min: 251, max: 265, cr: 13 },
    { min: 266, max: 280, cr: 14 },
    { min: 281, max: 295, cr: 15 },
    { min: 296, max: 310, cr: 16 },
    { min: 311, max: 325, cr: 17 },
    { min: 326, max: 340, cr: 18 },
    { min: 341, max: 355, cr: 19 },
    { min: 356, max: 400, cr: 20 },
    { min: 401, max: 445, cr: 21 },
    { min: 446, max: 490, cr: 22 },
    { min: 491, max: 535, cr: 23 },
    { min: 536, max: 580, cr: 24 },
    { min: 581, max: 625, cr: 25 },
    { min: 626, max: 670, cr: 26 },
    { min: 671, max: 715, cr: 27 },
    { min: 716, max: 760, cr: 28 },
    { min: 761, max: 805, cr: 29 },
    { min: 806, max: 850, cr: 30 }
  ],

  // Expected Armor Class for each CR
  ac: [
    { cr: 0, ac: 13 },
    { cr: 1/8, ac: 13 },
    { cr: 1/4, ac: 13 },
    { cr: 1/2, ac: 13 },
    { cr: 1, ac: 13 },
    { cr: 2, ac: 13 },
    { cr: 3, ac: 13 },
    { cr: 4, ac: 14 },
    { cr: 5, ac: 15 },
    { cr: 6, ac: 15 },
    { cr: 7, ac: 15 },
    { cr: 8, ac: 16 },
    { cr: 9, ac: 16 },
    { cr: 10, ac: 17 },
    { cr: 11, ac: 17 },
    { cr: 12, ac: 17 },
    { cr: 13, ac: 18 },
    { cr: 14, ac: 18 },
    { cr: 15, ac: 18 },
    { cr: 16, ac: 18 },
    { cr: 17, ac: 19 },
    { cr: 18, ac: 19 },
    { cr: 19, ac: 19 },
    { cr: 20, ac: 19 },
    { cr: 21, ac: 19 },
    { cr: 22, ac: 19 },
    { cr: 23, ac: 19 },
    { cr: 24, ac: 19 },
    { cr: 25, ac: 19 },
    { cr: 26, ac: 19 },
    { cr: 27, ac: 19 },
    { cr: 28, ac: 19 },
    { cr: 29, ac: 19 },
    { cr: 30, ac: 19 }
  ],

  // Damage per Round (DPR) for each CR
  dpr: [
    { min: 0, max: 1, cr: 0 },
    { min: 2, max: 3, cr: 1/8 },
    { min: 4, max: 5, cr: 1/4 },
    { min: 6, max: 8, cr: 1/2 },
    { min: 9, max: 14, cr: 1 },
    { min: 15, max: 20, cr: 2 },
    { min: 21, max: 26, cr: 3 },
    { min: 27, max: 32, cr: 4 },
    { min: 33, max: 38, cr: 5 },
    { min: 39, max: 44, cr: 6 },
    { min: 45, max: 50, cr: 7 },
    { min: 51, max: 56, cr: 8 },
    { min: 57, max: 62, cr: 9 },
    { min: 63, max: 68, cr: 10 },
    { min: 69, max: 74, cr: 11 },
    { min: 75, max: 80, cr: 12 },
    { min: 81, max: 86, cr: 13 },
    { min: 87, max: 92, cr: 14 },
    { min: 93, max: 98, cr: 15 },
    { min: 99, max: 104, cr: 16 },
    { min: 105, max: 110, cr: 17 },
    { min: 111, max: 116, cr: 18 },
    { min: 117, max: 122, cr: 19 },
    { min: 123, max: 140, cr: 20 },
    { min: 141, max: 158, cr: 21 },
    { min: 159, max: 176, cr: 22 },
    { min: 177, max: 194, cr: 23 },
    { min: 195, max: 212, cr: 24 },
    { min: 213, max: 230, cr: 25 },
    { min: 231, max: 248, cr: 26 },
    { min: 249, max: 266, cr: 27 },
    { min: 267, max: 284, cr: 28 },
    { min: 285, max: 302, cr: 29 },
    { min: 303, max: 320, cr: 30 }
  ],

  // Expected Attack Bonus for each CR
  attackBonus: [
    { cr: 0, bonus: 3 },
    { cr: 1/8, bonus: 3 },
    { cr: 1/4, bonus: 3 },
    { cr: 1/2, bonus: 3 },
    { cr: 1, bonus: 3 },
    { cr: 2, bonus: 3 },
    { cr: 3, bonus: 4 },
    { cr: 4, bonus: 5 },
    { cr: 5, bonus: 6 },
    { cr: 6, bonus: 6 },
    { cr: 7, bonus: 6 },
    { cr: 8, bonus: 7 },
    { cr: 9, bonus: 7 },
    { cr: 10, bonus: 7 },
    { cr: 11, bonus: 8 },
    { cr: 12, bonus: 8 },
    { cr: 13, bonus: 8 },
    { cr: 14, bonus: 8 },
    { cr: 15, bonus: 8 },
    { cr: 16, bonus: 9 },
    { cr: 17, bonus: 10 },
    { cr: 18, bonus: 10 },
    { cr: 19, bonus: 10 },
    { cr: 20, bonus: 10 },
    { cr: 21, bonus: 11 },
    { cr: 22, bonus: 11 },
    { cr: 23, bonus: 11 },
    { cr: 24, bonus: 11 },
    { cr: 25, bonus: 12 },
    { cr: 26, bonus: 12 },
    { cr: 27, bonus: 13 },
    { cr: 28, bonus: 13 },
    { cr: 29, bonus: 13 },
    { cr: 30, bonus: 14 }
  ],

  // Expected Save DC for each CR
  saveDC: [
    { cr: 0, dc: 13 },
    { cr: 1/8, dc: 13 },
    { cr: 1/4, dc: 13 },
    { cr: 1/2, dc: 13 },
    { cr: 1, dc: 13 },
    { cr: 2, dc: 13 },
    { cr: 3, dc: 13 },
    { cr: 4, dc: 14 },
    { cr: 5, dc: 15 },
    { cr: 6, dc: 15 },
    { cr: 7, dc: 15 },
    { cr: 8, dc: 16 },
    { cr: 9, dc: 16 },
    { cr: 10, dc: 16 },
    { cr: 11, dc: 17 },
    { cr: 12, dc: 18 },
    { cr: 13, dc: 18 },
    { cr: 14, dc: 18 },
    { cr: 15, dc: 18 },
    { cr: 16, dc: 18 },
    { cr: 17, dc: 19 },
    { cr: 18, dc: 19 },
    { cr: 19, dc: 19 },
    { cr: 20, dc: 19 },
    { cr: 21, dc: 20 },
    { cr: 22, dc: 20 },
    { cr: 23, dc: 20 },
    { cr: 24, dc: 21 },
    { cr: 25, dc: 21 },
    { cr: 26, dc: 21 },
    { cr: 27, dc: 22 },
    { cr: 28, dc: 22 },
    { cr: 29, dc: 22 },
    { cr: 30, dc: 23 }
  ]
};

function calculateDefensiveCR(hp, ac) {
  // Get the CR based on hit points
  const hpCR = crThresholds.hp.find(threshold => hp >= threshold.min && hp <= threshold.max)?.cr || 0;
  
  // Get the expected AC for the CR
  const expectedAC = crThresholds.ac.find(threshold => threshold.cr === hpCR)?.ac || 13;
  
  // Adjust CR based on how the creature's AC compares to the expected AC
  let acAdjustment = Math.floor((ac - expectedAC) / 2);
  
  return hpCR + acAdjustment;
}

function calculateOffensiveCR(damagePerRound, attackBonus, saveDC) {
  // Get the CR based on damage per round
  const dprCR = crThresholds.dpr.find(threshold => damagePerRound >= threshold.min && damagePerRound <= threshold.max)?.cr || 0;
  
  // Get the expected attack bonus or save DC for the CR
  const expectedAttackBonus = crThresholds.attackBonus.find(threshold => threshold.cr === dprCR)?.bonus || 3;
  const expectedSaveDC = crThresholds.saveDC.find(threshold => threshold.cr === dprCR)?.dc || 13;
  
  // Adjust CR based on how the creature's attack/save compares to the expected value
  let attackAdjustment = Math.floor((attackBonus - expectedAttackBonus) / 2);
  let dcAdjustment = Math.floor((saveDC - expectedSaveDC) / 2);
  
  // Take the higher adjustment (attack bonus or save DC)
  let finalAdjustment = Math.max(attackAdjustment, dcAdjustment);
  
  return dprCR + finalAdjustment;
}

function calculateChallengeRating(hp, ac, damagePerRound, attackBonus, saveDC) {
  const defensiveCR = calculateDefensiveCR(hp, ac);
  const offensiveCR = calculateOffensiveCR(damagePerRound, attackBonus, saveDC);
  
  // Calculate the average CR
  const finalCR = (defensiveCR + offensiveCR) / 2;
  
  return finalCR;
}
