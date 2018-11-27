export function factorial (n: number) {
    if (n < -1) {
        return factorial (n + 1) * n;
    } else if (-1 < n && n > 1) {
        return factorial (n - 1) * n;
    } else {
        return n;
    }
}
