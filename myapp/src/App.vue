<script setup>
// No need to import HelloWorld component anymore
</script>

<template>
  <div class="Layout">
    <!-- Header with GitHub theme -->
    <header class="Header">
      <div class="Header-item">
        <a href="/" class="Header-link f1 d-flex flex-items-center">
          <img src="./assets/images/edge-cloud-logo.png" alt="Edge Cloud Logo" height="48" class="mr-2" />
          <span>Edge Forge</span>
          <span class="f4 Header-item-secondary-text">OpenSource Software House</span>
        </a>
      </div>
      <div class="Header-item Header-item--full">
        <!-- Spacer -->
      </div>
      <div class="Header-item">
        <router-link to="/" class="Header-link Header-nav-items">Home</router-link>
      </div>
      <div class="Header-item">
        <router-link to="/blog" class="Header-link Header-nav-items">Blog</router-link>
      </div>
      <div class="Header-item">
        <router-link to="/docs" class="Header-link Header-nav-items">Docs</router-link>
      </div>
      <div class="Header-item">
        <router-link to="/about" class="Header-link Header-nav-items">About</router-link>
      </div>
    </header>

    <!-- Main content area -->
    <main>
      <router-view/>
    </main>

    <!-- Footer -->
    <footer class="footer container-xl width-full p-responsive">
      <div class="position-relative d-flex flex-items-center pb-2 f6 color-fg-muted border-top color-border-muted flex-column-reverse flex-lg-row flex-wrap flex-lg-nowrap mt-6 pt-6">
        <div class="list-style-none d-flex flex-wrap col-0 col-lg-2 flex-justify-start flex-lg-justify-between mb-2 mb-lg-0">
          <div class="mt-2 mt-lg-0 d-flex flex-items-center">
            <a href="/" aria-label="Homepage" title="OpenSource Software House">
              <img src="./assets/images/edge-cloud-logo.png" alt="Edge Cloud Logo" height="48" class="mr-2" />
            </a>
            <span class="color-fg-muted">© 2025 Edge force Labs, OpenSource Software House</span>
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

html, body {
  background-color: var(--color-bg-canvas);
  color: var(--color-text-primary);
  margin: 0;
  padding: 0;
  min-height: 100vh;
  width: 100%;
}

#app {
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  text-align: left;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.Layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

main {
  flex: 1;
  width: 100%;
}

.container-lg {
  max-width: 1012px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  box-sizing: border-box;
}

.container-xl {
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  box-sizing: border-box;
}

.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}

.p-responsive {
  padding-right: 16px !important;
  padding-left: 16px !important;
}

@media (min-width: 768px) {
  .p-responsive {
    padding-right: 24px !important;
    padding-left: 24px !important;
  }
}

@media (min-width: 1012px) {
  .p-responsive {
    padding-right: 32px !important;
    padding-left: 32px !important;
  }
}
</style>
