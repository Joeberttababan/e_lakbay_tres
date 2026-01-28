export function recommend(destinations) {
    return destinations
        .sort((a, b) => b.visits - a.visits)
        .slice(0, 5);
}
