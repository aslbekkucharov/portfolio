async function fetcher(endpoint: string, options?: RequestInit) {
    const fullEndpoint = process.env.API_BASE + endpoint
    const response = await fetch(fullEndpoint, options)

    return response.json()
}

export { fetcher }
