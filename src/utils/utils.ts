export function normalizeTag(tag: string): string {
  const result = tag
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-$/g, "");
  return result || "untagged";
}
