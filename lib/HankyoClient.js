// Import the project token from the config file
import { projectToken } from "./hankyoConfig";

// Define the base URL for the Hankyo API
const baseUrl = "https://hankyo-api-pro.herokuapp.com";

// Function to fetch project data
export async function fetchProjectData() {
  try {
    // Construct the URL for fetching project data, including the project token
    const url = `${baseUrl}/mies/project?project_token=${projectToken}`;

    // Make an HTTP GET request to the constructed URL using the fetch function
    const projectReq = await fetch(url);

    // Parse the response as JSON
    const projectData = await projectReq.json();

    // Return the parsed project data if the request is successful
    return projectData;
  } catch (error) {
    // Handle and log any errors that occur during the fetch or JSON parsing
    console.error("Error fetching project data:", error);

    // Return null to indicate an error occurred
    return null;
  }
}

// Function to fetch section data
export async function fetchSectionData(sectionUID) {
  try {
    // Construct the URL for fetching section data, including the section UID and project token
    const url = `${baseUrl}/mies/project/sections/${sectionUID}?project_token=${projectToken}`;

    // Make an HTTP GET request to the constructed URL using the fetch function
    const sectionReq = await fetch(url);

    // Parse the response as JSON
    const sectionData = await sectionReq.json();

    // Return the parsed section data if the request is successful
    return sectionData;
  } catch (error) {
    // Handle and log any errors that occur during the fetch or JSON parsing
    console.error("Error fetching section data:", error);

    // Return null to indicate an error occurred
    return null;
  }
}
