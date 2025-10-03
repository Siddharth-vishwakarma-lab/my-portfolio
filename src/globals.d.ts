// src/globals.d.ts

declare module '*.css' {
  const content: unknown;
  export default content;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}