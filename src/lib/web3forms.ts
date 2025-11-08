const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const FALLBACK_PUBLIC_ACCESS_KEY = "09ac6583-b714-4ca7-bedc-4392afe6d537";

const envAccessKey = process.env.WEB3FORMS_ACCESS_KEY?.trim() ?? "";
const resolvedAccessKey = envAccessKey || FALLBACK_PUBLIC_ACCESS_KEY;

if (process.env.NODE_ENV !== "production" && !envAccessKey) {
  console.warn(
    "[web3forms] Using fallback public access key. " +
      "Set WEB3FORMS_ACCESS_KEY in your environment to override this value."
  );
}

export const web3formsConfig = {
  endpoint: WEB3FORMS_ENDPOINT,
  accessKey: resolvedAccessKey,
  isUsingFallbackKey: !envAccessKey,
} as const;

export interface Web3FormsResponse {
  success: boolean;
  message: string;
  code?: number;
  data?: Record<string, unknown>;
}
