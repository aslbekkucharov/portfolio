import path from 'path'
import { readFile } from 'fs/promises'

export async function GET() {
    console.log(path.join(process.cwd()))
    const buffer = await readFile(path.join(process.cwd(), '/public', 'Resume.pdf'))
    const headers = new Headers()
    headers.append('Content-Disposition', 'attachment; filename="AslbekKucharov.pdf"')
    headers.append('Content-Type', 'application/pdf')

    return new Response(buffer, {
        headers
    })
}