import ScrapbookPhoto from './ScrapbookPhoto.jsx'
import FloatingParticles from './FloatingParticles.jsx'
import SceneTransition from './SceneTransition.jsx'
import { BalloonIcon, CameraIcon, StarIcon } from './MemoryObjects.jsx'
import { birthdayContent } from '../data/birthdayContent.js'

// Loose overlapping scrapbook layout (percentage-based) for up to 6 photos.
const LAYOUT = [
  { top: '4%', left: '6%' },
  { top: '2%', left: '46%' },
  { top: '24%', left: '4%' },
  { top: '20%', left: '52%' },
  { top: '46%', left: '14%' },
  { top: '44%', left: '48%' },
]

export default function PhotoCollage({ onNext }) {
  const photos = birthdayContent.photos.slice(0, 6)

  return (
    <SceneTransition className="collage-scene" duration={1.4}>
      <FloatingParticles count={14} drifting={3} />

      <div className="collage-board">
        {photos.map((photo, i) => (
          <ScrapbookPhoto key={photo.src} photo={photo} index={i} style={LAYOUT[i % LAYOUT.length]} />
        ))}

        {/* tape accents */}
        <div className="tape" style={{ top: '1%', left: '18%', transform: 'rotate(-14deg)' }} />
        <div className="tape" style={{ top: '19%', left: '60%', transform: 'rotate(10deg)' }} />
        <div className="tape" style={{ top: '42%', left: '32%', transform: 'rotate(-6deg)' }} />

        {/* stickers & floating hearts */}
        <span className="sticker-heart" style={{ top: '10%', left: '82%' }}>♡</span>
        <span className="sticker-heart" style={{ top: '58%', left: '8%', animationDelay: '1s' }}>♡</span>
        <span className="sticker-heart" style={{ top: '68%', left: '70%', animationDelay: '2s' }}>♡</span>

        <div style={{ position: 'absolute', top: '65%', left: '78%', opacity: 0.85 }}>
          <StarIcon size={9} />
        </div>
        <div style={{ position: 'absolute', top: '2%', left: '84%', opacity: 0.7 }}>
          <StarIcon size={7} />
        </div>

        <div className="memory-object" style={{ bottom: '2%', left: '4%', animationDelay: '0.4s' }}>
          <BalloonIcon size={24} />
        </div>
        <div className="memory-object" style={{ bottom: '4%', right: '6%', animationDelay: '1.1s' }}>
          <CameraIcon size={40} />
        </div>
      </div>

      <button
        onClick={onNext}
        className="tap-hint"
        style={{
          background: 'transparent',
          border: 'none',
          marginTop: 12,
          animation: 'softPulse 2.6s ease-in-out infinite',
        }}
      >
        continue ♡
      </button>
    </SceneTransition>
  )
}
