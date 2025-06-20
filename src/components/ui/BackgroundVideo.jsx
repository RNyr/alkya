const BackgroundVideo = () => {
    return (
        <video autoPlay loop muted playsInline className="w-full h-auto object-cover">
            <source src="/videos/bg-video.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la vidéo.
        </video>
    )
}

export default BackgroundVideo