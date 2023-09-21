import { ChildProcessWithoutNullStreams } from 'child_process'
import { NextApiResponse } from 'next'

export function transferChildProcessOutput(
    cmd: ChildProcessWithoutNullStreams,
    res: NextApiResponse,
) {
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
