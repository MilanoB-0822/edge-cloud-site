<script setup>
import { ref, onMounted } from 'vue';

// GitHub repository information
const owner = ref('michielvh');
const repo = ref('edgectl');
const path = ref('pkg/common/scripts/rke2.sh');
const branch = ref('main');

// State for documentation
const content = ref('');
const isLoading = ref(true);
const error = ref(null);
const title = ref('RKE2 Script Documentation');
const fileInfo = ref(null);

// Fetch content from GitHub API
const fetchContent = async () => {
  isLoading.value = true;
  error.value = null;
  
  try {
    console.log(`Fetching content from GitHub: ${owner.value}/${repo.value}/${path.value}`);
    
    // Using GitHub API to get file content
    const apiUrl = `https://api.github.com/repos/${owner.value}/${repo.value}/contents/${path.value}?ref=${branch.value}`;
    console.log('API URL:', apiUrl);
    
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(`Error fetching content: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log('GitHub API response received');
    
    if (data.content) {
      // GitHub API returns base64 encoded content
      const decoded = atob(data.content.replace(/\n/g, ''));
      content.value = decoded;
      fileInfo.value = {
        name: data.name,
        path: data.path,
        sha: data.sha,
        size: data.size,
        html_url: data.html_url,
        download_url: data.download_url
      };
      
      console.log('Content decoded successfully, length:', decoded.length);
    } else {
      throw new Error('No content found in the GitHub response');
    }
  } catch (err) {
    console.error('Error fetching content from GitHub:', err);
    error.value = err.message;
  } finally {
    isLoading.value = false;
  }
};

// Initialize
onMounted(() => {
  fetchContent();
});
</script>

<script>
import { marked } from 'marked';

// Options API needed for marked processing
export default {
  methods: {
    renderMarkdown(content) {
      if (!content) return '';
      // Format shell script as code block with syntax highlighting
      return `<pre class="hljs bash"><code>${content}</code></pre>`;
    }
  }
};
</script>

<template>
  <div class="docs-container container-lg p-responsive">
    <div class="d-flex flex-items-center pb-6 pt-3">
      <div>
        <h1 class="h1-mktg mb-1">Documentation</h1>
        <p class="f3-mktg text-gray mb-4">RKE2 Script Reference</p>
      </div>
    </div>

    <!-- Loading state -->
    <div v-if="isLoading" class="Box p-4 mb-6 text-center">
      <div class="loading-spinner mb-2"></div>
      <p>Loading documentation...</p>
    </div>

    <!-- Error state -->
    <div v-else-if="error" class="flash flash-error mb-4">
      <p>{{ error }}</p>
      <p>Please check the repository configuration or try again later.</p>
    </div>
    
    <!-- Documentation content -->
    <div v-else-if="content" class="Box mb-6">
      <div class="Box-header d-flex flex-items-center">
        <h2 class="Box-title">{{ fileInfo ? fileInfo.name : title }}</h2>
        <div class="flex-1"></div>
        <a v-if="fileInfo" :href="fileInfo.html_url" target="_blank" class="btn btn-sm" title="View on GitHub">
          <svg class="octicon mr-1" height="16" viewBox="0 0 16 16" version="1.1" width="16">
            <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
          View on GitHub
        </a>
      </div>
      <div class="Box-body markdown-body">
        <pre class="hljs bash"><code>{{ content }}</code></pre>
      </div>
    </div>
    
    <!-- Empty state -->
    <div v-else class="blankslate">
      <h3 class="mb-1">No documentation found</h3>
      <p>The documentation could not be loaded.</p>
    </div>
    
    <!-- Configuration section -->
    <div class="Box p-4 mb-6">
      <h3 class="mb-2">Repository Configuration</h3>
      <p class="mb-3">Current source:</p>
      <div class="highlight">
        <pre><code>Owner: {{ owner }}
Repository: {{ repo }}
Path: {{ path }}
Branch: {{ branch }}</code></pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loading-spinner {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid var(--color-border-default);
  border-radius: 50%;
  border-top-color: var(--color-accent-fg);
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.flash {
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  color: var(--color-fg-default);
}

.flash-error {
  background-color: #ffebe9;
  border: 1px solid rgba(255, 129, 130, 0.4);
  color: #cf222e;
}

.blankslate {
  padding: 2rem;
  text-align: center;
  background-color: var(--color-canvas-subtle);
  border-radius: 6px;
}

.highlight {
  background-color: var(--color-canvas-subtle);
  border-radius: 6px;
  padding: 1rem;
}

.flex-1 {
  flex: 1;
}
</style>