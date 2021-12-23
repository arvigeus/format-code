declare global {
  namespace NodeJS {
    interface ProcessEnv {
      COOKIE_SECRET: string;
    }
  }
}

export {};
