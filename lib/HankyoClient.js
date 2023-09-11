// Hankyo API Client

// Import Hankyo API client config
import { baseUrl, projectToken } from "./hankyoConfig";

/**
 * Function to fetch project data.
 * @returns {Promise<object|null>} - Project data or null on error.
 */

export async function fetchProject() {
  try {
    const url = `${baseUrl}/mies/project?project_token=${projectToken}`;
    const projectReq = await fetch(url);
    const projectData = await projectReq.json();
    return projectData;
  } catch (error) {
    console.error("Error fetching project data:", error);
    return null;
  }
}

/**
 * Function to fetch section data by section UID.
 * @param {string} sectionUID - The section UID to fetch.
 * @returns {Promise<object|null>} - Section data or null on error.
 */

export async function fetchSection(sectionUID) {
  try {
    const url = `${baseUrl}/mies/project/sections/${sectionUID}?project_token=${projectToken}`;
    const sectionReq = await fetch(url);
    const sectionData = await sectionReq.json();
    return sectionData;
  } catch (error) {
    console.error("Error fetching section data:", error);
    return null;
  }
}
