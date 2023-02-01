type Mods  = Record<string, boolean | string>;

export function cn(cls:string, mods:Mods, additional: Array<string>):string {
	return [
		cls,
		...additional,
		...Object.entries(mods)
		.filter(([className, value]) => Boolean(value))
		.map(([className]) => className)
	].join(' ');
}