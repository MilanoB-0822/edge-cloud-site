<script setup>
import { ref, onMounted } from 'vue';

// This would typically come from an API or CMS
// Since we're handling blogs statically, we'll define them here
const blogPosts = ref([
  {
    id: 1,
    slug: 'getting-started-with-kubernetes',
    title: 'Getting Started with Kubernetes',
    excerpt: 'Learn the basics of container orchestration with Kubernetes and how it can help scale your applications.',
    date: 'April 10, 2025',
    author: 'Jane Developer',
    tags: ['Kubernetes', 'DevOps', 'Containers']
  },
  {
    id: 2,
    slug: 'ci-cd-best-practices',
    title: 'CI/CD Best Practices for Modern Development Teams',
    excerpt: 'Continuous Integration and Deployment can significantly improve your team\'s productivity. Here are our proven best practices.',
    date: 'April 3, 2025',
    author: 'John DevOps',
    tags: ['CI/CD', 'DevOps', 'Automation']
  },
  {
    id: 3,
    slug: 'cloud-cost-optimization',
    title: 'Cloud Cost Optimization Strategies',
    excerpt: 'Keep your cloud bills under control with these practical cost optimization strategies for AWS, Azure, and GCP.',
    date: 'March 25, 2025',
    author: 'Alex Cloud',
    tags: ['Cloud', 'Cost Management', 'AWS', 'Azure', 'GCP']
  },
  {
    id: 4,
    slug: 'securing-microservices',
    title: 'Securing Microservices Architecture',
    excerpt: 'Security considerations and best practices when implementing microservices in your organization.',
    date: 'March 15, 2025',
    author: 'Sam Security',
    tags: ['Microservices', 'Security', 'Architecture']
  }
]);
</script>

<template>
  <div class="blog-container">
    <div class="container-lg p-responsive">
      <div class="d-md-flex flex-items-center pb-6 pt-3">
        <div>
          <h1 class="h1-mktg mb-1">Blog</h1>
          <p class="f3-mktg text-gray mb-4">Insights and articles about DevOps, cloud technologies, and software engineering</p>
        </div>
      </div>

      <!-- Blog post list -->
      <div class="blog-posts-container">
        <div v-for="post in blogPosts" :key="post.id" class="Box mb-4 px-3">
          <div class="Box-row d-flex flex-column flex-md-row">
            <div class="blog-post-content">
              <router-link :to="`/blog/${post.slug}`" class="Link--primary">
                <h2 class="h3 mb-1">{{ post.title }}</h2>
              </router-link>
              <p class="text-gray mb-3">{{ post.date }} • {{ post.author }}</p>
              <p class="mb-3">{{ post.excerpt }}</p>
              <div class="d-flex flex-wrap">
                <span v-for="(tag, index) in post.tags" :key="index" class="IssueLabel color-bg-accent-emphasis color-fg-on-emphasis mr-1 mb-1">
                  {{ tag }}
                </span>
              </div>
              <div class="mt-3">
                <router-link :to="`/blog/${post.slug}`" class="Link--primary">
                  Read more →
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-post-content {
  width: 100%;
}

.IssueLabel {
  display: inline-block;
  padding: 0.15em 0.5em;
  font-size: 0.8em;
  font-weight: 500;
  border-radius: 2em;
}
</style>