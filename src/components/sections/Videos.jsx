import { useState, useEffect, useRef } from 'react';
import '../../styles/Videos.css';
import { videoData } from '../../data/videoData';

function Videos() {
  const [activeVideo, setActiveVideo] = useState(videoData[0]);
  const videoListRef = useRef(null);
  
  useEffect(() => {
    // Scroll the active video into view in the list
    if (videoListRef.current) {
      const activeElement = videoListRef.current.querySelector('.video-list-item.active');
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }, [activeVideo]);
  
  return (
    <section id="videos" className="videos-section">
      <div className="container">
        <h2 className="section-title">Learning Videos</h2>
        <p className="section-subtitle">
          Watch our curated collection of educational videos to help you prepare effectively for the NSAT.
        </p>
        
        <div className="videos-container">
          <div className="main-video">
            <div className="video-wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}`}
                title={activeVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-info">
              <h3 className="video-title">{activeVideo.title}</h3>
              <div className="video-meta">
                <span className="video-category">{activeVideo.category}</span>
                <span className="video-duration">{activeVideo.duration}</span>
              </div>
              <p className="video-description">{activeVideo.description}</p>
              <div className="video-tags">
                {activeVideo.tags.map((tag, index) => (
                  <span className="video-tag" key={index}>#{tag}</span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="video-list" ref={videoListRef}>
            <h4 className="video-list-title">More Videos</h4>
            {videoData.map((video, index) => (
              <div 
                className={`video-list-item ${video.id === activeVideo.id ? 'active' : ''}`}
                key={index}
                onClick={() => setActiveVideo(video)}
              >
                <div className="video-list-thumbnail">
                  <img 
                    src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`} 
                    alt={video.title} 
                  />
                  <span className="video-list-duration">{video.duration}</span>
                </div>
                <div className="video-list-info">
                  <h5 className="video-list-item-title">{video.title}</h5>
                  <span className="video-list-category">{video.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Videos;