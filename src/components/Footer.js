import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Sigueme en{' '}
      <a href="https://twitter.com/xaviervelezzv">@xaviervelezzv</a>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved.
        </span>
      </div>
    </footer>
  </div>
)
