import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  color: {
    hue: 0,
    saturation: 70,
  },
  backgroundColor: {
    dark: '33,33,39',
  },
  logo: (
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
  // banner: {
  //   key: 'mining-2.0-release',
  //   content: (
  //     <a href="https://github.com/IamLation/lation_mining" target="_blank">
  //       🎉 Lation Mining v2 is now available. Learn more →
  //     </a>
  //   )
  // },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: false,
  },
  darkMode: false,
  navigation: true,
  feedback: {
    content: null,
    useLink: () => 'https://discord.gg/9EbY4nM5uu',
  },
  editLink: {
    component: null,
  },
  docsRepositoryBase: 'https://github.com/lation-scripts/documentation',
  footer: {
    content: 'Lation Scripts',
  },
}

export default config
