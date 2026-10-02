import { useState } from 'react'

export default function ImageFrame({ src, alt, className = '', loading = 'lazy', priority = false }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className={`image-frame ${className}${failed ? ' image-failed' : ''}`}>
      {!failed && <img src={src} alt={alt} loading={priority ? 'eager' : loading} fetchPriority={priority ? 'high' : 'auto'} onError={() => setFailed(true)} />}
      <div className="image-placeholder" aria-hidden="true"><span>IMAGE / TO BE ADDED</span></div>
    </div>
  )
}