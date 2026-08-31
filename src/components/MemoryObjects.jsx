import TitleScene from './TitleScene.jsx'

export function CameraIcon({ size = 54 }) {
  return (
    <svg width={size} height={size * 0.78} viewBox="0 0 60 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="10" width="58" height="34" rx="5" fill="#241E45" stroke="#7188FF" strokeOpacity="0.5" />
      <rect x="20" y="2" width="16" height="9" rx="2" fill="#2E2860" />
      <circle cx="30" cy="27" r="12" fill="#100735" stroke="#C6A96B" strokeWidth="1.4" />
      <circle cx="30" cy="27" r="6.5" fill="#050319" stroke="#7188FF" strokeOpacity="0.6" />
      <circle cx="48" cy="17" r="2" fill="#C6A96B" />
    </svg>
  )
}

export function VinylIcon({ size = 60, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="29" fill="#0d0a24" stroke="#7188FF" strokeOpacity="0.3" />
      <circle cx="30" cy="30" r="22" fill="none" stroke="#2a2652" strokeWidth="1" />
      <circle cx="30" cy="30" r="16" fill="none" stroke="#2a2652" strokeWidth="1" />
      <circle cx="30" cy="30" r="10" fill="#C6A96B" opacity="0.85" />
      <circle cx="30" cy="30" r="2.4" fill="#0d0a24" />
    </svg>
  )
}

export function GiftIcon({ size = 46 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="18" width="34" height="24" rx="2" fill="#241E45" stroke="#7188FF" strokeOpacity="0.5" />
      <rect x="6" y="18" width="34" height="7" fill="#2E2860" />
      <rect x="20.5" y="18" width="5" height="24" fill="#C6A96B" opacity="0.8" />
      <path d="M23 18c-3-6-14-6-11 0" stroke="#C6A96B" strokeWidth="2" fill="none" />
      <path d="M23 18c3-6 14-6 11 0" stroke="#C6A96B" strokeWidth="2" fill="none" />
    </svg>
  )
}

export function FrameIcon({ size = 46 }) {
  return (
    <svg width={size} height={size * 1.2} viewBox="0 0 46 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="44" height="54" rx="2" fill="#241E45" stroke="#C6A96B" strokeOpacity="0.6" strokeWidth="2" />
      <rect x="7" y="7" width="32" height="42" fill="#100735" />
      <circle cx="23" cy="24" r="7" fill="#2E2860" />
      <path d="M11 40l7-9 6 6 5-7 6 10z" fill="#2a2652" />
    </svg>
  )
}

export function BalloonIcon({ size = 30, color = '#536DFF' }) {
  return (
    <svg width={size} height={size * 1.5} viewBox="0 0 30 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="15" cy="16" rx="14" ry="16" fill={color} opacity="0.75" />
      <path d="M15 32c0 0 -2 4 0 6" stroke={color} strokeWidth="1" opacity="0.6" />
      <path d="M13 32h4l-2 12z" fill={color} opacity="0.5" />
    </svg>
  )
}

export function StarIcon({ size = 10, color = '#F8F6FF' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M5 0l1.2 3.2L9.5 4l-3 2.1L7.6 10 5 7.6 2.4 10l1.1-3.9-3-2.1 3.3-.8z" />
    </svg>
  )
}

/**
 * Full-screen interlude that repeats the chapter title, surrounded by
 * the major memory objects with floating parallax-friendly placement.
 */
export function MemoryObjectsInterlude({ onNext }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <TitleScene onNext={onNext} autoAdvanceMs={2600} />
      <div className="memory-object" style={{ top: '18%', left: '10%', '--r': '-8deg' }}>
        <CameraIcon />
      </div>
      <div className="memory-object vinyl-record" style={{ top: '16%', right: '8%' }}>
        <VinylIcon />
      </div>
      <div className="memory-object" style={{ bottom: '20%', left: '12%', animationDelay: '1s' }}>
        <GiftIcon />
      </div>
      <div className="memory-object" style={{ bottom: '16%', right: '10%', animationDelay: '1.6s' }}>
        <FrameIcon />
      </div>
    </div>
  )
}
