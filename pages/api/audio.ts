import type { NextApiRequest, NextApiResponse } from 'next'
import { spawn } from 'child_process'
import path from 'path'

export default function GET(req: NextApiRequest, res: NextApiResponse) {
    const videoId = req.query.videoId as string
    if (typeof videoId !== 'string') {
        return res
            .status(400)
            .json({ success: false, error: 'Invalid Request' })
    }

    const cmd = spawn(path.join(process.cwd(), 'scripts/download-audio.sh'), [
        videoId || '',
    ])
    cmd.on('close', code => {
        console.log('Finsished Command, Exit code: ', code)
    })
    cmd.stderr.on('data', chunk => {
        const chunkStr = chunk.toString('utf-8')
        console.error('[Error]', chunkStr)
        res.write(
            chunkStr
                .split('\n')
                .map((line: string) => '[Error]' + line)
                .join('\n'),
        )
    })

    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Cache-Control': 'no-cache',
        'Content-Encoding': 'none',
    })
    cmd.stdout.pipe(res)
}
