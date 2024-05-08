import { createClient } from "microcms-js-sdk"

export const cmsClient = createClient({
    serviceDomain: process.env.NEXT_PUBLIC_MICRO_CMS_SERVICE_DOMAIN || "",
    apiKey: process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY || ""
})