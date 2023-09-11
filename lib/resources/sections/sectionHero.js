// Section Hero

/**
 * Function to find section heroes based on UIDs.
 * @param {object} sectionData - Section data object.
 * @param {string[]} sectionHeroBlockUIDs - Array of section hero UIDs.
 * @returns {object} - Section heroes object.
 */

export function findSectionHeroBlocks(sectionData, sectionHeroBlockUIDs) {
  const sectionHeroBlocks = {};

  // Iterate through the provided UIDs
  sectionHeroBlockUIDs.forEach((uid) => {
    // Find the hero block with matching UID and type "hero"
    const heroBlock = sectionData.section.blocks.find(
      (block) => block.uid === uid && block.type_of === "hero"
    );

    // If a hero block is found, add it to the sectionHeroBlocks object
    if (heroBlock) {
      sectionHeroBlocks[uid] = heroBlock;
    }
  });

  return sectionHeroBlocks;
}
