import { useState } from 'react'
import SceneTransition from './SceneTransition.jsx'
import FloatingParticles from './FloatingParticles.jsx'
import { birthdayContent } from '../data/birthdayContent.js'

export default function Envelope({ onOpened }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    if (isOpen) return
    setIsOpen(true)
    setTimeout(onOpened, 1500)
  }

  return (
    <SceneTransition className="envelope-scene" duration={1.6}>
      <FloatingParticles count={16} drifting={4} />

      <h1 className="script-title anim-fade-in-blur">{birthdayContent.messages.chapterTitle}</h1>
      <p className="hand-text anim-fade-in-up" style={{ fontSize: '1.3rem', marginTop: -6 }}>
        for {birthdayContent.name}
      </p>

      <p className="eyebrow-line anim-fade-in-up" style={{ marginTop: 18 }}>
        {birthdayContent.messages.envelope.intro}
      </p>

      <button
        className={`envelope anim-fade-in-up ${isOpen ? 'is-open' : ''}`}
        onClick={handleOpen}
        aria-label="Open your envelope"
      >
        <div className="envelope-letter-peek" />
        <div className="envelope-body" />
        <div className="envelope-flap" />
        <div className="envelope-seal">♡</div>
      </button>

      {!isOpen && (
        <p className="tap-hint" style={{ animation: 'softPulse 2.4s ease-in-out infinite' }}>
          {birthdayContent.messages.envelope.cta}
        </p>
      )}
    </SceneTransition>
  )
}
