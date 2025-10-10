import { readMultipartFormData, setResponseStatus, defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
    const parts = await readMultipartFormData(event)
    if (!parts || parts.length === 0) {
        setResponseStatus(event, 400)
        return { ok: false, error: 'No file received' }
    }

    const file = parts.find(p => p.name === 'file')
    if (!file) {
        setResponseStatus(event, 400)
        return { ok: false, error: 'Missing file field (file)' }
    }

    const filename = (file as any).filename || 'upload'
    const mimetype = (file as any).type || 'application/octet-stream'
    const size = (file as any).data?.length || 0

    return {
        ok: true,
        uploadId: Math.random().toString(36).slice(2),
        file: { filename, mimetype, size }
    }
})
