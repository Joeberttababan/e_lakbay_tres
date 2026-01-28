export function recommend(destinations: any[], query: string) {
  return destinations
    .filter(d =>
      d.name.toLowerCase().includes(query.toLowerCase()) ||
      d.municipality.toLowerCase().includes(query.toLowerCase())
    )
    .sort((a, b) => b.visits - a.visits)
    .slice(0, 5); // top 5
}
