interface YoutubeEmbedProps {
    src: string
    start?: number
    end?: number
    clip?: boolean
}

function YoutubeEmbed({ src, start, end, clip }: YoutubeEmbedProps) {
    return (
        <iframe 
            width="560" 
            height="315" 
            src={`${src}&amp;${clip ? `${start ? `start=${start}&` : ''}${end ? `end=${end}&`: ''}controls=0&rel=0&fs=0&autoplay=1&loop=0&disablekb=1&mute=1&showinfo=0`: ''}`}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
        />
    )
}

export default YoutubeEmbed;