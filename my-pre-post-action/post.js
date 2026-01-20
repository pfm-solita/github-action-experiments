console.log('=== Post Step Execution ===');

// Retrieve state that was set in the main step
const cleanupData = process.env['STATE_cleanup_data'];

if (cleanupData) {
  console.log(`Retrieved state value: ${cleanupData}`);
  console.log('Performing cleanup operations...');
  
  // Simulate cleanup work
  console.log('- Cleaning up temporary resources');
  console.log('- Releasing connections');
  console.log('- Finalizing operations');
  
  console.log('Cleanup completed successfully!');
} else {
  console.log('Warning: No state data found from main step');
}

console.log('===========================');
