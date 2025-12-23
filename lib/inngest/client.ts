import { Inngest } from "inngest";

export const inngest = new Inngest({
    id: 'Stock Screener',
    ai: { gemini: { apiKey: process.env.GEMINI_API_KEY! } },

})