import React from 'react';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';

function useHead() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const url = `https://test.lationscripts.com${asPath}`;
  const description = frontMatter.description || "Documentation for Lation Script's FiveM resources";

  return (
    <>
      <title>{title ? `${title} - Lation Scripts` : 'Lation Scripts'}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="https://img.lationscripts.com/favicon.png" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title || 'Lation Scripts'} />
      <meta property="og:description" content={description} />
      <meta name="og:url" content={url} />
      <meta property="og:image" content="https://img.lationscripts.com/docs/thumbnail.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://img.lationscripts.com/docs/thumbnail.png" />
      <meta name="theme-color" content="#FF4040" />
    </>
  );
}

const config: DocsThemeConfig = {
  color: {
    hue: 0,
    saturation: 70,
  },
  head: useHead,
  backgroundColor: {
    dark: '28, 28, 28',
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
    link: 'https://github.com/IamLation/documentation',
  },
  chat: {
    link: 'https://discord.gg/9EbY4nM5uu',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
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
};

export default config;