import Head from 'next/head'
import { styled } from '../stitches.config'
import { LinkForm } from '../components/link-form'
import { Output } from '../components/output'
import {
    TabsContent,
    TabsList,
    TabsRoot,
    TabsTrigger,
} from '../components/tabs'
import { useState } from 'react'
import { extractVideoIdFromUrl, processVideo } from '../utils/api-client'

const Box = styled('div', {})

const Text = styled('p', {
    fontFamily: '$system',
    color: '$hiContrast',
})

const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    marginY: 0,
    marginX: 'auto',
    paddingX: '$3',
    paddingY: 0,

    variants: {
        size: {
            1: {
                maxWidth: '300px',
            },
            2: {
                maxWidth: '585px',
            },
            3: {
                maxWidth: '865px',
            },
        },
    },
})

export default function Home() {
    const [isProcessing, setProcessing] = useState(false)
    const [progressOutput, setProgressOutput] = useState('')
    const [activeTab, setActiveTab] = useState('progress')
    const [resultTranscript, setResultTranscript] = useState('')

    const handleStartProcessing = async (videoUrl: string) => {
        const videoId = extractVideoIdFromUrl(videoUrl)
        if (typeof videoId === 'string') {
            setResultTranscript('')
            setProcessing(true)

            const transcriptionInHindi = await processVideo(
                videoId,
                message => {
                    setProgressOutput(prev => prev + message)
                },
            )

            if (transcriptionInHindi) {
                setResultTranscript(transcriptionInHindi)
            }

            setProcessing(false)
            setActiveTab('result')
        } else {
            alert('Invalid URL')
        }
    }

    return (
        <Box css={{ paddingY: '$6' }}>
            <Head>
                <title>AI Transcriber</title>
            </Head>
            <Container size={{ '@initial': '1', '@bp1': '2' }}>
                <Text as="h1">Translate Transcription with AI</Text>
                <LinkForm
                    onSubmit={handleStartProcessing}
                    isProcessing={isProcessing}
                />
                <TabsRoot value={activeTab} onValueChange={setActiveTab}>
                    <TabsList aria-label="Output">
                        <TabsTrigger value="progress">Progress</TabsTrigger>
                        <TabsTrigger value="result">Result</TabsTrigger>
                    </TabsList>
                    <TabsContent value="progress">
                        <Output>{progressOutput}</Output>
                    </TabsContent>
                    <TabsContent value="result">
                        <Output>{resultTranscript}</Output>
                    </TabsContent>
                </TabsRoot>
            </Container>
        </Box>
    )
}
