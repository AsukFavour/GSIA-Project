import { createClient } from "@sanity/client";

// Initialize the Sanity client
export const client = createClient({
  projectId: "tb4io743", // Replace with your Sanity Project ID
  dataset: "production",       // Replace with your dataset name (e.g., "production")
  apiVersion: "2023-01-01",    // Use the latest date for API versioning
  token: import.meta.env.VITE_SANITY_TOKEN,  // Add your Sanity token for write access
  useCdn: true,               // Set to `true` for faster, read-only requests
});
