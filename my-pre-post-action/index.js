const fs = require('fs');
const path = require('path');

// Get input
const exampleInput = process.env['INPUT_EXAMPLE-INPUT'];

console.log('=== Main Step (Pre) Execution ===');
console.log(`Received input: ${exampleInput}`);

// Sanitize input for safe use in state/output values
// Remove newlines and other problematic characters
const sanitizedInput = exampleInput ? exampleInput.replace(/[\r\n=%]/g, '_') : 'default';

// Set state for the post step to retrieve
const stateValue = `processed-${sanitizedInput}-${Date.now()}`;
console.log(`Setting state value: ${stateValue}`);

// Save state using the STATE_ file
const stateFile = process.env['GITHUB_STATE'];
if (stateFile) {
  fs.appendFileSync(stateFile, `cleanup_data=${stateValue}\n`, 'utf8');
  console.log('State saved successfully for post step');
} else {
  console.log('Warning: GITHUB_STATE not available');
}

// Set an output (optional, for demonstration)
const outputFile = process.env['GITHUB_OUTPUT'];
if (outputFile) {
  fs.appendFileSync(outputFile, `main-output=${stateValue}\n`, 'utf8');
  console.log('Output set successfully');
}

console.log('Main step completed successfully!');
console.log('=================================');
