import fs from 'fs/promises'; // Use fs promises API for asynchronous file operations
import path from 'path';     // Import path module to handle file paths
import { fileURLToPath } from 'url'; // Import fileURLToPath from url
import { dirname } from 'path';      // Import dirname from path

// Get the directory name of the current module file
// This replaces __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define the directory to scan (relative to the project root)
// Assumes page components are located in src/pages
const pagesDirectory = path.resolve(__dirname, '../src/pages');
// Define the output JSON file path
// Assumes output file will be saved in src/data
const outputFilePath = path.resolve(__dirname, '../src/data/articles.json');

/**
 * Converts a filename (without extension) from PascalCase/camelCase to a human-readable title.
 * Adds a space before each uppercase letter (except the first).
 * Example: "ArtOfQuestioning" -> "Art Of Questioning"
 * Example: "effectiveReading" -> "Effective Reading"
 * @param {string} name The filename without extension.
 * @returns {string} The formatted title.
 */
function nameToTitle(name) {
  if (!name) return '';
  // Insert a space before any uppercase letter that is preceded by a lowercase letter or a digit
  // or followed by a lowercase letter (to handle acronyms like "MyAPI").
  // Then trim any leading/trailing spaces and ensure the first letter is capitalized.
  const spacedName = name
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2') // Insert space between lowercase/digit and uppercase
    .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2') // Insert space between uppercase and subsequent uppercase followed by lowercase
    .trim();

  // Capitalize the first letter of the entire string
  return spacedName.charAt(0).toUpperCase() + spacedName.slice(1);
}

/**
 * Converts a filename (without extension) from PascalCase/camelCase to a hyphen-separated lowercase route slug.
 * Example: "ArtOfQuestioning" -> "art-of-questioning"
 * Example: "effectiveReading" -> "effective-reading"
 * @param {string} name The filename without extension.
 * @returns {string} The route slug.
 */
function nameToRoute(name) {
  if (!name) return '';
  // Insert a hyphen before any uppercase letter that is preceded by a lowercase letter or a digit
  // or followed by a lowercase letter. Then convert the whole string to lowercase.
  const hyphenatedName = name
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2') // Insert hyphen between lowercase/digit and uppercase
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2') // Insert hyphen between uppercase and subsequent uppercase followed by lowercase
    .toLowerCase();

  // Remove any leading or trailing hyphens that might result from the conversion
  return `/${hyphenatedName.replace(/^-+|-+$/g, '')}`;
}


/**
 * Reads files from a directory, sorts them by creation time, and generates a list
 * of objects with title and route based on filenames.
 * @param {string} directoryPath The path to the directory to scan.
 * @returns {Promise<Array<{title: string, route: string}>>} An array of objects, sorted by creation time.
 */
async function getSortedPageData(directoryPath) {
  try {
    // Read directory contents, including file type information
    const entries = await fs.readdir(directoryPath, { withFileTypes: true });

    const fileData = [];

    // Iterate through directory entries to get file information
    for (const entry of entries) {
      // Process only files, ignore directories or other types
      if (entry.isFile()) {
        const fullPath = path.join(directoryPath, entry.name);
        const fileExtension = path.extname(entry.name);
        const baseName = path.basename(entry.name, fileExtension); // Get filename without extension

        // Skip index file if it exists, as it's usually handled by the root route "/"
        const lowerBaseName = baseName.toLowerCase();
        if (lowerBaseName === 'index' || lowerBaseName === 'notfound') {
            continue;
        }

        try {
          // Get file statistics, including creation time (birthtime)
          const stats = await fs.stat(fullPath);

          // Generate title and route from the base filename
          const title = nameToTitle(baseName);
          const route = nameToRoute(baseName);

          fileData.push({
            name: entry.name, // Keep original name for reference if needed
            baseName: baseName, // Filename without extension
            title: title,
            route: route,
            birthtime: stats.birthtime // File creation time
          });

          // console.log(`import ${baseName} from "./pages/${baseName}";`)
          console.log(`<Route path="${route}" element={<${baseName} />} />`)
        } catch (statErr) {
          console.error(`Error getting stats for file ${fullPath}:`, statErr);
          // If getting file stats fails, skip this file
        }
      }
    }

    // Sort files by creation time (from oldest to newest)
    fileData.sort((a, b) => a.birthtime.getTime() - b.birthtime.getTime());

    // Extract the desired data format (title and route)
    const sortedPageList = [
        {title: 'The Power of Conversation', route: '/', name: 'Index'}, 
        ...fileData.map(item => ({
          title: item.title,
          route: item.route,
          name: item.baseName
        }))
      ];  

    return sortedPageList;

  } catch (readDirErr) {
    console.error(`Error reading directory ${directoryPath}:`, readDirErr);
    throw readDirErr; // Re-throw the error for the caller to handle
  }
}

/**
 * Saves the page data list to a JSON file.
 * @param {string} filePath The path to the JSON file to write.
 * @param {Array<{title: string, route: string}>} pageList The array of page data objects to save.
 */
async function savePageListToJson(filePath, pageList) {
  try {
    // Ensure the output directory exists
    const outputDir = path.dirname(filePath);
    await fs.mkdir(outputDir, { recursive: true });

    // Convert the array of objects to a JSON string (pretty printed)
    const jsonString = JSON.stringify(pageList, null, 2);

    // Write the JSON string to the file
    await fs.writeFile(filePath, jsonString, 'utf8');
    console.log(`Successfully generated and saved page list to ${filePath}`);

  } catch (writeErr) {
    console.error(`Error writing JSON file ${filePath}:`, writeErr);
    throw writeErr; // Re-throw the error
  }
}

// Main execution function
async function main() {
  console.log(`Scanning directory: ${pagesDirectory}`);
  try {
    const sortedPageData = await getSortedPageData(pagesDirectory);
    console.log('Generated page list:', sortedPageData);

    await savePageListToJson(outputFilePath, sortedPageData);

  } catch (error) {
    console.error('Failed to generate page list:', error);
    process.exit(1); // Exit process with error code
  }
}

// Execute the main function
main();
