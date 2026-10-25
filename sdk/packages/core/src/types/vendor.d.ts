declare module "proxy-from-env" {
	export function getProxyForUrl(url: string): string;
}

declare module "posthog-node" {
	export interface PostHogOptions {
		host?: string;
		[key: string]: unknown;
	}

	export class PostHog {
		constructor(apiKey: string, options?: PostHogOptions);
		getAllFlagsAndPayloads(
			distinctId: string,
			options?: { flagKeys?: string[] },
		): Promise<Record<string, unknown>>;
		shutdown(): Promise<void>;
	}
}
