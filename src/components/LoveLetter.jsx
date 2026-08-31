import { useEffect, useState } from 'react'
import SceneTransition from './SceneTransition.jsx'
import FloatingParticles from './FloatingParticles.jsx'
import { StarIcon } from './MemoryObjects.jsx'
import { birthdayContent } from '../data/birthdayContent.js'

export default function LoveLetter({ onNext }) {
  const paragraphs = birthdayContent.messages.letter.paragraphs
  const [visibleCount, setVisibleCount] = useState(0)
  const [showObjects, setShowObjects] = useState(false)

  useEffect(() => {
    if (visibleCount >= paragraphs.length) {
      const t = setTimeout(() => setShowObjects(true), 500)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setVisibleCount((c) => c + 1), 700)
    return () => clearTimeout(t)
  }, [visibleCount, paragraphs.length])

  return (
    <SceneTransition className="letter-scene" duration={1.4}>
      <FloatingParticles count={10} drifting={2} />

      <div className="letter-paper anim-fade-in-up">
        <div className="letter-lines">
          {paragraphs.map((line, i) => (
            <p key={i} className={`letter-line ${i < visibleCount ? 'is-visible' : ''}`}>
              {line}
            </p>
          ))}
        </div>

        {showObjects && (
          <>
            <div style={{ position: 'absolute', bottom: 10, left: 12, opacity: 0.7 }} className="anim-fade-in">
              <StarIcon size={9} color="#c6a96b" />
            </div>
            <span
              className="letter-signoff anim-fade-in"
              style={{ display: 'block' }}
            >
              — always ♡
            </span>
          </>
        )}
      </div>

      {showObjects && (
        <button
          onClick={onNext}
          className="tap-hint anim-fade-in"
          style={{ background: 'transparent', border: 'none', marginTop: 22 }}
        >
          continue ♡
        </button>
      )}
    </SceneTransition>
  )
}
