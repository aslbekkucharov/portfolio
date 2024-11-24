interface FetcherResponse<T> {
    data: T
    status: number
}

async function fetcher<T>(endpoint: string, options?: RequestInit): Promise<FetcherResponse<T>> {
    const fullEndpoint = process.env.NEXT_PUBLIC_API_BASE + endpoint
    const response = await fetch(fullEndpoint, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZnVsbG5hbWUiOiJBc2xiZWsgS3VjaGFyb3YiLCJlbWFpbCI6ImFzbGJla2t1Y2hhcm92QGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiYXNsYmVra3VjaGFyb3YiLCJpYXQiOjE3MzIzOTM1NzIsImV4cCI6MTczMjQ3OTk3Mn0.x6vqEBujjQJIh0uKFbx_1LIsWDBEd1Hzf7Sm_UCZI04'
        },
        ...options
    })

    const body = await response.json()

    const result = {
        data: body,
        status: response.status
    }

    return result
}

export { fetcher }
