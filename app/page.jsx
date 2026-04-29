export default function Home() {
  return (
    <>
      <header className="navbar">
        <a href="/" className="logo">
          <svg width="100" height="32" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="18" r="10" fill="#aec449" />
            <path d="M16 8 C16 4 20 2 24 4 C24 8 20 10 16 8" fill="#aec449" />
            <path d="M16 8 L16 4" stroke="#9bb139" strokeWidth="2" strokeLinecap="round" />
            <circle cx="13" cy="17" r="1.5" fill="#293621" />
            <circle cx="19" cy="17" r="1.5" fill="#293621" />
            <path d="M14 21 Q16 23 18 21" stroke="#293621" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <text x="32" y="24" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="24" fill="#aec449" letterSpacing="-1">live</text>
          </svg>
        </a>

        <nav className="nav-links">
          <a href="#" className="nav-item">Solutions <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
          <a href="#" className="nav-item">Features</a>
          <a href="#" className="nav-item">Pricing</a>
          <a href="#" className="nav-item">Blog <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
          <a href="#" className="nav-item">Restaurants</a>
          <a href="#" className="nav-item">Food <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
        </nav>

        <div className="nav-actions">
          <a href="#" className="sign-in">Sign in</a>
          <a href="#" className="btn-primary">Get Olive &rarr;</a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="social-proof">
            <div className="avatar-group">
              <img src="file:///C:/Users/user/.gemini/antigravity/brain/0f503b5a-9ce1-4004-a207-31d6c824f94a/avatar_group_1777444943598.png" alt="Trusted families avatars" className="avatars-img" />
            </div>
            <span className="trusted-text">Trusted by thousands of healthy families</span>
          </div>

          <h1 className="hero-title">The Safest Way to<br />Shop for Groceries</h1>

          <p className="hero-subtitle">Use the Olive Food Scanner App to Instantly Eliminate<br />Harmful Ingredients from Your Family&apos;s Diet and Get<br />Expert-Backed Food Insights</p>

          <div className="hero-cta">
            <a href="#" className="btn-ios">
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.2952 10.3704C13.2755 7.62537 15.5348 6.30541 15.637 6.24237C14.2818 4.25417 12.0833 3.96695 11.3283 3.9261C9.62933 3.75487 8.00696 4.93635 7.12643 4.93635C6.24626 4.93635 4.90802 3.9488 3.51528 3.97825C1.69145 4.00499 0.043606 4.99616 -0.887711 6.64362C-2.82522 10.053 -0.384661 15.0886 1.48866 17.8047C2.41031 19.1415 3.51351 20.6515 4.93883 20.5905C6.30232 20.5312 6.82281 19.7042 8.44195 19.7042C10.0594 19.7042 10.5375 20.5905 11.9649 20.5615C13.4357 20.5312 14.3985 19.1989 15.3093 17.8427C16.3779 16.2755 16.819 14.7471 16.8404 14.6645C16.8115 14.6534 13.315 13.3117 13.2952 10.3704Z" fill="white" />
                <path d="M10.8359 2.59384C11.5909 1.67756 12.0917 0.386291 11.9542 -0.882812C10.8715 -0.838423 9.47958 -0.155702 8.69466 0.757041C7.99043 1.56475 7.38797 2.89063 7.55523 4.1269C8.75678 4.22159 10.081 3.51012 10.8359 2.59384Z" fill="white" />
              </svg>
              Download for iOS
            </a>
            <a href="#" className="btn-text">Join the Olive Community &rarr;</a>
          </div>
        </section>

        <section className="mockup-section">
          <div className="background-elements">
            <div className="blur-card left"></div>
            <div className="blur-card right"></div>
          </div>

          <div className="phone-mockup">
            <div className="dynamic-island"></div>
            <div className="phone-screen">
              <div className="app-header">
              </div>

              <div className="product-images">
                <div className="image-wrapper side-img"></div>
                <div className="image-wrapper main-img">
                  <img src="file:///C:/Users/user/.gemini/antigravity/brain/0f503b5a-9ce1-4004-a207-31d6c824f94a/crackers_product_1777444976111.png" alt="Fig and Olive Crackers" />
                </div>
                <div className="image-wrapper side-img"></div>
              </div>

              <div className="product-details">
                <h2>Fig and Olive Crackers, Fig<br />and Olive</h2>
                <p className="brand">Lesley Stowe</p>

                <div className="score-container">
                  <div className="score-value">
                    <span className="score-number">46</span><span className="score-out-of">/100</span>
                    <div className="score-badge">
                      <div className="red-dot"></div>
                      <span>Avoid</span>
                    </div>
                  </div>
                  <div className="action-buttons">
                    <button className="icon-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    </button>
                    <button className="icon-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
                    </button>
                  </div>
                </div>

                <div className="oliver-says">
                  <div className="oliver-header">
                    <img src="file:///C:/Users/user/.gemini/antigravity/brain/0f503b5a-9ce1-4004-a207-31d6c824f94a/olive_mascot_1777444996085.png" alt="Oliver Mascot" className="oliver-icon" />
                    <h3>Oliver Says:</h3>
                  </div>
                  <p className="oliver-text">&quot;This product&apos;s low score mainly comes from the processed sugars like honey and brown sugar, which can impact your family&apos;s health when consumed frequently, especially for kids who are still developing. Additionally, there are several additives that aren&apos;t ideal for your goal of avoiding processed foods, making this a choice to consider more carefully.&quot;</p>

                  <h4 className="breakdown-title">Breakdown</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
