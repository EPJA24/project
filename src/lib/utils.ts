export function generateId(): string {
    function generateString() {
        return Math.random().toString(16).slice(2);
    }

    return `${generateString()}-${generateString()}`;
}
