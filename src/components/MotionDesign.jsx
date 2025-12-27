import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './MotionDesign.css'

const MotionDesign = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    // Video autoplay observer
    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target
          if (entry.isIntersecting) {
            // Play video when it comes into view
            if (video.tagName === 'VIDEO') {
              video.play().catch(err => {
                console.log('Autoplay prevented:', err)
              })
            }
          } else {
            // Pause video when it goes out of view
            if (video.tagName === 'VIDEO') {
              video.pause()
            }
          }
        })
      },
      { threshold: 0.5, rootMargin: '0px' }
    )

    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.motion-card')
      cards.forEach(card => {
        observer.observe(card)
      })

      // Observe all videos for autoplay
      const videos = sectionRef.current.querySelectorAll('video')
      videos.forEach(video => {
        videoObserver.observe(video)
      })
    }

    return () => {
      observer.disconnect()
      videoObserver.disconnect()
    }
  }, [])

  // Helper function to convert video URLs to embed format
  const getVideoEmbedUrl = (url) => {
    if (!url) return null
    
    // Figma Prototype
    if (url.includes('figma.com/proto/')) {
      // Convert Figma prototype URL to embed format
      // Keep the full URL with query parameters for proper embedding
      const figmaUrl = encodeURIComponent(url)
      return `https://www.figma.com/embed?embed_host=share&url=${figmaUrl}`
    }
    
    // YouTube
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('watch?v=')[1].split('&')[0]
      return `https://www.youtube.com/embed/${videoId}`
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1].split('?')[0]
      return `https://www.youtube.com/embed/${videoId}`
    }
    if (url.includes('youtube.com/embed/')) {
      return url // Already in embed format
    }
    
    // Vimeo
    if (url.includes('vimeo.com/') && !url.includes('player.vimeo.com')) {
      const videoId = url.split('vimeo.com/')[1].split('?')[0]
      return `https://player.vimeo.com/video/${videoId}`
    }
    if (url.includes('player.vimeo.com')) {
      return url // Already in embed format
    }
    
    // Return as-is for local files or other formats
    return url
  }

  // Layout: Left side - 2 rectangles | Right side - Small rectangle (top) + Large rectangle (bottom)
  const motionVideos = [
    // Video 1: Left side, first rectangle (top) - Figma Apple AirPods Max Prototype
    {
      url: 'https://www.figma.com/proto/D1I2Ch6adOAn8ISBSUIZs7/apple-airpods-max--Community-?node-id=116-185&t=VjxdmA0aKGDBE8ZK-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=116%3A185',
      link: '/motion-design/apple-airpods-max',
      title: 'Apple AirPods Max - 3D Product Animation'
    },
    // Video 2: Left side, second rectangle (bottom) - Figma Prototype
    {
      url: 'https://www.figma.com/proto/D1I2Ch6adOAn8ISBSUIZs7/apple-airpods-max--Community-?node-id=222-260&t=af5SRLzcuc0lf8Ol-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=222%3A242',
      link: '/motion-design/apple-airpods-max-variant-2',
      title: 'Apple AirPods Max - Variant 2'
    },
    // Video 3: Right side, top small rectangle - Figma Prototype
    {
      url: 'https://www.figma.com/proto/D1I2Ch6adOAn8ISBSUIZs7/apple-airpods-max--Community-?node-id=184-171&t=af5SRLzcuc0lf8Ol-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=116%3A185',
      link: '/motion-design/apple-airpods-max-variant',
      title: 'Apple AirPods Max - Variant View'
    },
    // Video 4: Right side, bottom large rectangle - Figma Apple AirPods Max Prototype
    {
      url: 'https://www.figma.com/proto/D1I2Ch6adOAn8ISBSUIZs7/apple-airpods-max--Community-?node-id=596-325&t=SyRvzaAZ86qd3hwW-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=596%3A317&show-proto-sidebar=1',
      link: '/motion-design/apple-airpods-max-final',
      title: 'Apple AirPods Max - Final Prototype'
    }
    // Add more videos as needed
  ]

  const renderVideo = (video, index) => {
    // Handle both string URLs and object format { url, size, link }
    const videoUrl = typeof video === 'string' ? video : video.url
    const videoLink = typeof video === 'object' && video.link ? video.link : null
    const videoSize = typeof video === 'object' && video.size ? video.size : 'medium'
    
    if (!videoUrl) return null

    const embedUrl = getVideoEmbedUrl(videoUrl)
    const isEmbed = embedUrl && (embedUrl.includes('youtube.com/embed') || embedUrl.includes('player.vimeo.com') || embedUrl.includes('figma.com/embed'))
    const isLocalVideo = embedUrl && !embedUrl.includes('youtube.com') && !embedUrl.includes('vimeo.com') && !embedUrl.includes('figma.com')

    const videoContent = (
      <div className="motion-video-wrapper">
        {isEmbed ? (
            <iframe
              src={embedUrl}
              className={`motion-video-embed ${embedUrl.includes('figma.com') ? 'figma-embed' : ''}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              title={`Motion Design ${index + 1}`}
              style={{
                minHeight: embedUrl.includes('figma.com') ? '600px' : 'auto',
                width: '100%',
                height: embedUrl.includes('figma.com') ? '600px' : '100%'
              }}
            />
          ) : (
            <>
              <video 
                src={videoUrl}
                className="motion-video"
                controls
                loop
                muted
                playsInline
                autoPlay
                onPlay={(e) => {
                  // Hide play overlay when video starts playing
                  const overlay = e.target.parentElement.querySelector('.video-play-overlay')
                  if (overlay) overlay.style.opacity = '0'
                }}
                onPause={(e) => {
                  // Show play overlay when video is paused
                  const overlay = e.target.parentElement.querySelector('.video-play-overlay')
                  if (overlay) overlay.style.opacity = '0.9'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  const fallback = e.target.parentElement.querySelector('.motion-video-fallback')
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              {isLocalVideo && (
                <div className="video-play-overlay">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                </div>
              )}
            </>
          )}
        <div className="motion-video-fallback" style={{ display: 'none' }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
        </div>
      </div>
    )

    return (
      <div key={index} className={`motion-video-item motion-video-${videoSize}`}>
        {videoLink ? (
          <Link to={videoLink} className="motion-video-link">
            {videoContent}
          </Link>
        ) : (
          videoContent
        )}
      </div>
    )
  }

  return (
    <section id="motion-design" className="motion-design" ref={sectionRef}>
      <div className="motion-container">
        <div className="motion-header">
          <Link to="/#motion-design" className="motion-samples-link">
            View motion design samples →
          </Link>
          <h2 className="motion-title">Motion Design</h2>
        </div>
        <div className="motion-videos-container">
          {motionVideos && motionVideos.length > 0 ? (
            <div className="motion-videos-grid">
              {motionVideos.map((video, videoIndex) => renderVideo(video, videoIndex))}
            </div>
          ) : (
            <div className="motion-video-placeholder">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              <span>Add Motion Design Sample</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default MotionDesign
