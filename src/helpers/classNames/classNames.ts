type Mods = Record<string, boolean | string>;

export function classNames(
    cls: string,
    mods: Mods,
    additional: Array<string>
): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([cls, value]) => Boolean(value))
            .map(([cls]) => cls),
    ].join(' ');
}
