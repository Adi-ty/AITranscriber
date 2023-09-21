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
    return (
        <Box css={{ paddingY: '$6' }}>
            <Head>
                <title>AI Transcriber</title>
            </Head>
            <Container size={{ '@initial': '1', '@bp1': '2' }}>
                <Text as="h1">Translate your transcription with AI</Text>
                <LinkForm />
                <TabsRoot defaultValue="progress">
                    <TabsList aria-label="Output">
                        <TabsTrigger value="progress">Progress</TabsTrigger>
                        <TabsTrigger value="result">Result</TabsTrigger>
                    </TabsList>
                    <TabsContent value="progress">
                        <Output>{'progress here'.repeat(100)}</Output>
                    </TabsContent>
                    <TabsContent value="result">
                        <Output>Result will go here</Output>
                    </TabsContent>
                </TabsRoot>
            </Container>
        </Box>
    )
}
