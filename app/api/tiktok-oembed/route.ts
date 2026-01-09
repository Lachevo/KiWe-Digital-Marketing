import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const videoId = searchParams.get('videoId')

    if (!videoId) {
        return NextResponse.json({ error: 'Video ID is required' }, { status: 400 })
    }

    try {
        // Construct the TikTok video URL
        const videoUrl = `https://www.tiktok.com/@user/video/${videoId}`

        // Fetch OEmbed data
        const oembedUrl = `https://www.tiktok.com/oembed?url=${encodeURIComponent(videoUrl)}`
        const response = await fetch(oembedUrl)

        if (!response.ok) {
            throw new Error('Failed to fetch from TikTok OEmbed')
        }

        const data = await response.json()

        return NextResponse.json(data)
    } catch (error) {
        console.error('Error fetching TikTok thumbnail:', error)
        return NextResponse.json({ error: 'Failed to fetch thumbnail' }, { status: 500 })
    }
}
