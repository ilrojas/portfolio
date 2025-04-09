// auth.config.ts
/* import Google from "@auth/core/providers/google";
import type { AstroAuthConfig as BaseAstroAuthConfig } from "auth-astro/src/config";
import { SupabaseAdapter} from "@auth/supabase-adapter";
import 'dotenv/config';

interface ExtendedAstroAuthConfig extends BaseAstroAuthConfig {
    providers?: Array<any>; // Add 'providers' to the type
    adapter?: any; // Add 'adapter' to the type
    secret?: string; // Add 'secret' to the type
  }

export const authConfig: ExtendedAstroAuthConfig = {
  prefix: "/api/auth",
  injectEndpoints: true,
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID || import.meta.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET || import.meta.env.GOOGLE_SECRET,
    }),
  ],
  adapter: SupabaseAdapter({
    url: process.env.SUPABASE_URL || import.meta.env.SUPABASE_URL,
    secret: process.env.SUPABASE_SECRET || import.meta.env.SUPABASE_SECRET,
  }),
  secret: process.env.AUTH_SECRET || import.meta.env.AUTH_SECRET,
}; */







/* import Google from "@auth/core/providers/google";
import type { AstroAuthConfig as BaseAstroAuthConfig } from "auth-astro/src/config";

interface ExtendedAstroAuthConfig extends BaseAstroAuthConfig {
  providers?: Array<any>; // Adjust the type of providers based on its expected structure
  secret?: string;
}
export const authConfig: ExtendedAstroAuthConfig = {
    prefix: "/api/auth",
    injectEndpoints: true,
    configFile: "./auth.config.ts",
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID || import.meta.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET || import.meta.env.GOOGLE_SECRET,
    })
  ],
  secret: process.env.AUTH_SECRET || import.meta.env.AUTH_SECRET
}; */


import Google from "@auth/core/providers/google";
import GitHub from "@auth/core/providers/github";
import Twitch from "@auth/core/providers/twitch";
import { defineConfig } from "auth-astro";
import 'dotenv/config.js'

export default defineConfig({
  injectEndpoints: true,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || import.meta.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || import.meta.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "select_account"
        }
      }
    }),
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID || import.meta.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET || import.meta.env.GITHUB_CLIENT_SECRET,
    }),
    Twitch({
      clientId: process.env.TWITCH_ID || import.meta.env.TWITCH_ID,
      clientSecret: process.env.TWITCH_SECRET || import.meta.env.TWITCH_SECRET,
    })
  ]
})
