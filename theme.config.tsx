import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{ marginLeft: '.4em', fontSize: '1.5em', fontWeight: 500 }}>Pingora</span>,
  project: {
    link: 'https://github.com/cloudflare/pingora'
  },

  docsRepositoryBase: 'https://www.pingorarust.com',
  footer: {
    text: (
      <span>
        "Pingora" is the product name of Cloudflare and is not owned by this website.
        {' '} | Copyright {new Date().getFullYear()} ©{' '}
        <a href="/" target="_blank">
          PingoraRust.COM
        </a>
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
  },

  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://www.pingorarust.com' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="description"
          content={frontMatter.description || 'Pingora Rust'}
        />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'pingorarust.com'} />
        <meta property="og:image" content={frontMatter.title || 'pingorarust.com'} />
        <meta property="twitter:title" content={frontMatter.title || 'pingorarust.com'}></meta>
        <meta property="twitter:image" content="Twitter link preview image URL"></meta>
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta
          property="twitter:description"
          content={frontMatter.description || '....'}
        />
        <meta
          property="og:description"
          content={frontMatter.description || '......'}
        />
      </>
    )
  },

  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return (
          <div style={{ background: 'cyan', textAlign: 'center' }}>{title}</div>
        )
      }
      if (title === 'About') {
        return <>❓ {title}</>
      }
      return <>{title}</>
    }
  },
  feedback: {
    content: null
  },
  navigation: {
    prev: true,
    next: true
  },
  editLink: {
    text: null
  },
  // ... other theme options
}

export default config