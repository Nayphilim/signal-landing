/** Signal pricing maths — the tiered per-seat rate and bill estimate (mock's logic). */

export function perSeat(seats: number): number {
  return seats > 100 ? 15 : seats > 25 ? 19 : 24;
}

export function estimate(seats: number, yearly: boolean): number {
  const mult = yearly ? 0.8 : 1;
  return Math.round(seats * perSeat(seats) * mult);
}

/** Team-plan headline price per dev / month. */
export function teamPrice(yearly: boolean): number {
  return Math.round(24 * (yearly ? 0.8 : 1));
}
