export default {
  repository: 'https://github.com/msbuilds',
  titleSuffix: ' – msbuilds',
  darkMode: false,
  logo: (
    <>
      <img src="/logo_darkfill_small.svg" alt="msbuilds logo" class="mr-2" /> msbuilds
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="MSBuilds: building together" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#00aba9" />
      <meta name="theme-color" content="#ffffff"></meta>
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: false,
  footerEditOnGitHubLink: false,
  footerText: <></>
}
