import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'
export default function CopyButton({ text, label = 'Copy', className = '' }) {
  const [status, setStatus] = useState('')
  const timer = useRef()
  useEffect(() => () => clearTimeout(timer.current), [])
  async function copy() {
    try { await navigator.clipboard.writeText(text); setStatus('Copied') }
    catch { setStatus('Select the text to copy') }
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setStatus(''), 3000)
  }
  return <button type="button" className={`copy-button ${className}`} onClick={copy}><Icon name={status === 'Copied' ? 'check' : 'copy'} size={15} /><span aria-live="polite">{status || label}</span></button>
}
