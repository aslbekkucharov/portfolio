export { }

declare global {
    interface Window {
        ym: (id: string | number | undefined, event: string, options?: string | object) => void
    }
}