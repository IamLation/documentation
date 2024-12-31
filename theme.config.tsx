import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo:  (
    <div
      style={{
        paddingLeft: '50px',
        lineHeight: '38px',
        background: "url('https://img.lationscripts.com/icons/lation-scripts-logo.png') no-repeat left",
        backgroundSize: '38px',
        fontWeight: 550,
      }}
    >
      Lation Scripts
    </div>
  ),
  project: {
    link: 'https://github.com/lation-scripts/documentation',
  },
  chat: {
    link: 'https://discord.gg/9EbY4nM5uu',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Nextra Docs Template',
  },
}

export default config
