export function classes(...classes: string[]) {
  return classes
    .filter(name => {
      return typeof name === "string"
    })
    .join(" ")
}

export function randomNumber(min: number, max: number): number {
  return Math.floor(min + Math.random() * (max + 1 - min));
}
