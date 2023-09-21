import Head from 'next/head'
import { styled } from '../stitches.config'
import { LinkForm } from '../components/link-form'
import { Output } from '../components/output'

const Box = styled('div', {})

const Text = styled('p', {
    fontFamily: '$system',
    color: '$hiContrast',
})

const Container = styled('div', {
    marginX: 'auto',
    paddingX: '$3',

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
                <Output>Hello</Output>
            </Container>
        </Box>
    )
}
