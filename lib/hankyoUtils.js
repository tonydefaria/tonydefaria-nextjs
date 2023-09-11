// Hankyo Utils

// Import the helper function to find section heroes
import { findSectionHeroBlocks } from "./resources/sections/sectionHero";

/**
 * Extracts data from project and section information.
 * @param {object} projectData - Project data object.
 * @param {object} sectionData - Section data object.
 * @param {string[]} sectionHeroUIDs - Array of section hero UIDs.
 * @returns {object} - Extracted data including project, sectionMeta, and sectionHeroBlocks.
 */

export function extractData(projectData, sectionData, sectionHeroUIDs) {
  // PROJECT DATA
  // /////////////////////////////////
  const project = projectData.project;

  // SECTION DATA
  // /////////////////////////////////
  const sectionMeta = sectionData.section.meta_tag;
  const sectionHeroBlocks = findSectionHeroBlocks(sectionData, sectionHeroUIDs);

  return {
    project,
    sectionMeta,
    sectionHeroBlocks,
  };
}
