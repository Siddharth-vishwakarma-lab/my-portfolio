// src/globals.d.ts

declare module '*.module.css' {
  // Original problematic line likely had 'any' here:
  // const classes: { [key: string]: any }; 
  
  // FIX: Change 'any' to 'string' to satisfy the strict TypeScript rules
  const classes: { [key: string]: string };
  export default classes;
}