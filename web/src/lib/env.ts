import { env } from "$env/dynamic/public";

export function getBundlerURL(): string | null {
    const url = env.PUBLIC_BUNDLER_URL;
    if (url === null || url === undefined) return null;

    return url;
}