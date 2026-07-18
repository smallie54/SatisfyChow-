import React, { useState, useEffect, useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiMail, FiLock, FiEye, FiEyeOff, FiShield, FiX, FiUser } from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'
import { StoreContext } from '../../context/StoreContext'
import HomePreview from './components/HomePreview'
import './LoginModal.css'

// How long the Home preview stays up before auto-closing + navigating home.
const AUTO_TRANSITION_DELAY = 3500

const LoginModal = () => {
  const { showLoginModal, closeLoginModal } = useContext(StoreContext)
  const navigate = useNavigate()

  // 'login' | 'signup' — which form is currently showing
  const [mode, setMode] = useState('login')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)
  const [agreeTerms, setAgreeTerms] = useState(false)

  // 'idle' -> 'submitting' -> 'success'
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const autoTransitionTimer = useRef(null)

  // Reset internal state whenever the modal is re-opened, so a previous
  // session's success/error state doesn't linger the next time it opens.
  useEffect(() => {
    if (showLoginModal) {
      setMode('login')
      setName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      setAgreeTerms(false)
      setStatus('idle')
      setError(null)
    }
  }, [showLoginModal])

  const switchMode = (nextMode) => {
    setError(null)
    setMode(nextMode)
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    setError(null)

    if (!email || !password) {
      setError('Please enter both email and password.')
      return
    }

    setStatus('submitting')
    // TODO: replace with real auth call once backend exists.
    setTimeout(() => {
      setStatus('success')
    }, 700)
  }

  const handleSignupSubmit = (e) => {
    e.preventDefault()
    setError(null)

    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in every field.')
      return
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    if (!agreeTerms) {
      setError('Please agree to the Terms & Conditions.')
      return
    }

    setStatus('submitting')
    // TODO: replace with real signup call once backend exists.
    setTimeout(() => {
      setStatus('success')
    }, 700)
  }

  const handleFinish = () => {
    if (autoTransitionTimer.current) clearTimeout(autoTransitionTimer.current)
    closeLoginModal()
    navigate('/')
  }

  // Auto hand-off once the Home preview is showing.
  useEffect(() => {
    if (status === 'success') {
      autoTransitionTimer.current = setTimeout(handleFinish, AUTO_TRANSITION_DELAY)
    }
    return () => {
      if (autoTransitionTimer.current) clearTimeout(autoTransitionTimer.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status])

  if (!showLoginModal) return null

  const handleBackdropClick = () => {
    // Don't let a stray click dismiss mid-submit or mid-success-transition.
    if (status === 'idle') closeLoginModal()
  }

  return (
    <div className="login-modal-backdrop" onClick={handleBackdropClick}>
      <div className="login-modal-card" onClick={(e) => e.stopPropagation()}>
        {status === 'idle' && (
          <button type="button" className="login-modal-close" onClick={closeLoginModal}>
            <FiX size={20} />
          </button>
        )}

        <div className={`login-modal-inner ${status === 'success' ? 'show-preview' : ''}`}>
          {/* Form stage — toggles between Login and Signup */}
          <div className="login-modal-view login-modal-form-view">
            {mode === 'login' ? (
              <>
                <h2>Login to your account</h2>
                <p className="login-modal-subtext">
                  Don't have an account?{' '}
                  <span className="accent link" onClick={() => switchMode('signup')}>Sign up</span>
                </p>

                <form onSubmit={handleLoginSubmit}>
                  <label className="login-modal-label" htmlFor="modal-email">Email Address</label>
                  <div className="login-modal-input-group">
                    <FiMail size={18} color="#888" />
                    <input
                      id="modal-email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status !== 'idle'}
                    />
                  </div>

                  <label className="login-modal-label" htmlFor="modal-password">Password</label>
                  <div className="login-modal-input-group">
                    <FiLock size={18} color="#888" />
                    <input
                      id="modal-password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={status !== 'idle'}
                    />
                    <button
                      type="button"
                      className="login-modal-eye-toggle"
                      onClick={() => setShowPassword((v) => !v)}
                      tabIndex={-1}
                    >
                      {showPassword ? <FiEyeOff size={18} color="#888" /> : <FiEye size={18} color="#888" />}
                    </button>
                  </div>

                  {error && <p className="login-modal-error">{error}</p>}

                  <div className="login-modal-row-between">
                    <label className="login-modal-checkbox">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                      />
                      Remember me
                    </label>
                    <span className="accent link">Forgot Password?</span>
                  </div>

                  <button type="submit" className="login-modal-submit-btn" disabled={status !== 'idle'}>
                    {status === 'idle' && <>Login <span>→</span></>}
                    {status === 'submitting' && 'Logging in…'}
                    {status === 'success' && 'Logged in ✓'}
                  </button>
                </form>
              </>
            ) : (
              <>
                <h2>Create your account</h2>
                <p className="login-modal-subtext">
                  Already have an account?{' '}
                  <span className="accent link" onClick={() => switchMode('login')}>Login</span>
                </p>

                <form onSubmit={handleSignupSubmit}>
                  <label className="login-modal-label" htmlFor="signup-name">Full Name</label>
                  <div className="login-modal-input-group">
                    <FiUser size={18} color="#888" />
                    <input
                      id="signup-name"
                      type="text"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={status !== 'idle'}
                    />
                  </div>

                  <label className="login-modal-label" htmlFor="signup-email">Email Address</label>
                  <div className="login-modal-input-group">
                    <FiMail size={18} color="#888" />
                    <input
                      id="signup-email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status !== 'idle'}
                    />
                  </div>

                  <label className="login-modal-label" htmlFor="signup-password">Password</label>
                  <div className="login-modal-input-group">
                    <FiLock size={18} color="#888" />
                    <input
                      id="signup-password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Create a password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={status !== 'idle'}
                    />
                    <button
                      type="button"
                      className="login-modal-eye-toggle"
                      onClick={() => setShowPassword((v) => !v)}
                      tabIndex={-1}
                    >
                      {showPassword ? <FiEyeOff size={18} color="#888" /> : <FiEye size={18} color="#888" />}
                    </button>
                  </div>

                  <label className="login-modal-label" htmlFor="signup-confirm">Confirm Password</label>
                  <div className="login-modal-input-group">
                    <FiLock size={18} color="#888" />
                    <input
                      id="signup-confirm"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Re-enter your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      disabled={status !== 'idle'}
                    />
                  </div>

                  {error && <p className="login-modal-error">{error}</p>}

                  <div className="login-modal-row-between">
                    <label className="login-modal-checkbox">
                      <input
                        type="checkbox"
                        checked={agreeTerms}
                        onChange={(e) => setAgreeTerms(e.target.checked)}
                      />
                      I agree to the Terms & Conditions
                    </label>
                  </div>

                  <button type="submit" className="login-modal-submit-btn" disabled={status !== 'idle'}>
                    {status === 'idle' && <>Create Account <span>→</span></>}
                    {status === 'submitting' && 'Creating account…'}
                    {status === 'success' && 'Account created ✓'}
                  </button>
                </form>
              </>
            )}

            <div className="login-modal-divider"><span>or continue with</span></div>

            <div className="login-modal-social-row">
              <button type="button" className="login-modal-social-btn" disabled={status !== 'idle'}>
                <FcGoogle size={18} /> Google
              </button>
              <button type="button" className="login-modal-social-btn" disabled={status !== 'idle'}>
                <FaApple size={18} /> Apple
              </button>
            </div>

            <p className="login-modal-secure-note">
              <FiShield size={14} color="#0F6E56" /> Your data is safe with us. We never share your information.
            </p>
          </div>

          {/* Home preview view */}
          <div className="login-modal-view login-modal-preview-view">
            <HomePreview />
            <button type="button" className="login-modal-continue-btn" onClick={handleFinish}>
              Continue to Home →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginModal