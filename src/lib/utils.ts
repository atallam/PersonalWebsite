/**
 * Utility Functions
 * 
 * Common utility functions used throughout the application.
 * Currently focused on CSS class name management.
 */

// Import clsx for conditional class name construction
import { type ClassValue, clsx } from "clsx"
// Import tailwind-merge for TailwindCSS class conflict resolution
import { twMerge } from "tailwind-merge"

/**
 * Conditional Class Name Utility
 * 
 * Combines clsx and tailwind-merge to provide a powerful utility for:
 * - Conditional class names based on props/state
 * - Merging TailwindCSS classes while resolving conflicts
 * - Type-safe class name construction
 * 
 * @param inputs - ClassValue objects (strings, objects, arrays, conditions)
 * @returns {string} Merged and optimized CSS class names
 * 
 * @example
 * ```tsx
 * // Basic usage
 * cn("btn", isActive && "btn-active")
 * 
 * // With conditional objects
 * cn("btn", { "btn-primary": isPrimary, "btn-secondary": !isPrimary })
 * 
 * // Resolving Tailwind conflicts
 * cn("p-4", "p-2") // Returns "p-2" (last class wins)
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  // clsx handles conditional class name construction
  // twMerge resolves TailwindCSS class conflicts
  return twMerge(clsx(inputs))
}
