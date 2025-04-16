<script setup>
// No need to import HelloWorld component anymore
</script>

<template>
  <div class="Layout">
    <!-- Header with GitHub theme -->
    <header class="Header">
      <div class="Header-item">
        <a href="/" class="Header-link f4 d-flex flex-items-center">
          <!-- You can replace this with your own logo -->
          <svg height="32" class="octicon octicon-mark-github mr-2" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true">
            <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
          <span>OpenSource Software House</span>
        </a>
      </div>
      <div class="Header-item Header-item--full">
        <!-- Spacer -->
      </div>
      <div class="Header-item">
        <router-link to="/" class="Header-link">Home</router-link>
      </div>
      <div class="Header-item">
        <router-link to="/blog" class="Header-link">Blog</router-link>
      </div>
      <div class="Header-item">
        <router-link to="/about" class="Header-link">About</router-link>
      </div>
    </header>

    <!-- Main content area -->
    <main class="container-lg px-3 my-5 markdown-body">
      <router-view/>
    </main>

    <!-- Footer -->
    <footer class="footer container-xl width-full p-responsive">
      <div class="position-relative d-flex flex-items-center pb-2 f6 color-fg-muted border-top color-border-muted flex-column-reverse flex-lg-row flex-wrap flex-lg-nowrap mt-6 pt-6">
        <div class="list-style-none d-flex flex-wrap col-0 col-lg-2 flex-justify-start flex-lg-justify-between mb-2 mb-lg-0">
          <div class="mt-2 mt-lg-0 d-flex flex-items-center">
            <a href="/" aria-label="Homepage" title="OpenSource Software House">
              <svg height="24" class="octicon octicon-mark-github color-fg-muted" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true">
                <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
            <span class="color-fg-muted">© {{ new Date().getFullYear() }} OpenSource Software House</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
/* Global styles - we keep some of the original Vite styles and add GitHub theme */
:root {
  --color-bg-canvas: #ffffff;
  --color-text-primary: #24292f;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg-canvas: #0d1117;
    --color-text-primary: #c9d1d9;
  }
}

body {
  background-color: var(--color-bg-canvas);
  color: var(--color-text-primary);
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#app {
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  text-align: left;
}

.container-lg {
  max-width: 1012px;
  margin-right: auto;
  margin-left: auto;
}

.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
}
</style>
