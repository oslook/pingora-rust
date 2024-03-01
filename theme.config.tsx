import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{ marginLeft: '.4em', fontSize: '1.5em', fontWeight: 500 }}>Pingora Rust</span>,
  project: {
    link: 'https://github.com/cloudflare/pingora'
  },

  docsRepositoryBase: 'https://www.pingorarust.com',
  footer: {
    text: (
      <span>
        <a href="/terms" target="_blank">
          Terms of Service
        </a>
        {' '} | {' '}
        <a href="/privacy" target="_blank">
        Privacy Policy
        </a>
        {' '} | Copyright {new Date().getFullYear()} ©{' '}
        <a href="/" target="_blank">
          PingoraRust.COM
        </a>
        .{' '}All Rights Reserved.
        
      </span>
    ),
  },

  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – PingoraRust.COM'
      }
    }
  }
  // ... other theme options
}

export default config