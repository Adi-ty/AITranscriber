import type { NextApiRequest, NextApiResponse } from 'next'
import { spawn } from 'child_process'
import path from 'path'
import { transferChildProcessOutput } from '../../utils/shell'

export default function GET(req: NextApiRequest, res: NextApiResponse) {
    const videoId = req.query.videoId as string
    if (typeof videoId !== 'string') {
        res.status(400).json({ success: false, error: 'Invalid Request' })
        return
    }

    const cmd = spawn(path.join(process.cwd(), 'scripts/download-audio.sh'), [
        videoId || '',
    ])

    transferChildProcessOutput(cmd, res)
}
