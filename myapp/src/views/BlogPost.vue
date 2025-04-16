<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

// In a real application, this data would be fetched from an API or a CMS
// For this static implementation, we'll include the blog post content directly
const blogPosts = ref([
  {
    id: 1,
    slug: 'getting-started-with-kubernetes',
    title: 'Getting Started with Kubernetes',
    date: 'April 10, 2025',
    author: 'Jane Developer',
    authorTitle: 'Senior DevOps Engineer',
    tags: ['Kubernetes', 'DevOps', 'Containers'],
    content: `
# Getting Started with Kubernetes

Kubernetes has become the de facto standard for container orchestration in modern cloud infrastructure. In this guide, we'll walk through the basics of getting started with Kubernetes and how it can help scale your applications.

## What is Kubernetes?

Kubernetes (K8s) is an open-source platform designed to automate deploying, scaling, and operating application containers. It groups containers that make up an application into logical units for easy management and discovery.

## Key Concepts

### Pods
The basic scheduling unit in Kubernetes is a Pod, which consists of one or more containers that are always scheduled together on the same node.

### Services
Services define a logical set of Pods and a policy by which to access them, sometimes called a micro-service.

### Deployments
Deployments provide declarative updates for Pods and ReplicaSets (the next-generation ReplicationController).

## Getting Started

To get started with Kubernetes, you'll need:

1. A Kubernetes cluster (you can use Minikube for local development)
2. kubectl, the Kubernetes command-line tool

### Installing Minikube

Minikube is a tool that makes it easy to run Kubernetes locally. Here's how to install it:

\`\`\`bash
# For macOS
brew install minikube

# Start Minikube
minikube start
\`\`\`

### Your First Deployment

Let's create a simple deployment:

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  selector:
    matchLabels:
      app: nginx
  replicas: 2
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
        ports:
        - containerPort: 80
\`\`\`

Save this to a file named \`deployment.yaml\` and apply it:

\`\`\`bash
kubectl apply -f deployment.yaml
\`\`\`

## Best Practices

1. **Use namespaces** to organize your resources
2. **Implement resource limits** to prevent resource starvation
3. **Use ConfigMaps and Secrets** for configuration management
4. **Set up health checks** with liveness and readiness probes
5. **Implement auto-scaling** with Horizontal Pod Autoscaler

## Conclusion

Kubernetes provides a powerful platform for container orchestration. While it has a steep learning curve, the benefits of automated deployment, scaling, and management of containerized applications make it worth the effort.

As you become more comfortable with Kubernetes, you'll discover how it can transform your deployment workflow and enable more resilient applications.
`
  },
  {
    id: 2,
    slug: 'ci-cd-best-practices',
    title: 'CI/CD Best Practices for Modern Development Teams',
    date: 'April 3, 2025',
    author: 'John DevOps',
    authorTitle: 'DevOps Lead',
    tags: ['CI/CD', 'DevOps', 'Automation'],
    content: `
# CI/CD Best Practices for Modern Development Teams

Continuous Integration and Continuous Deployment (CI/CD) are essential practices for modern software development teams. They enable faster, more reliable software delivery with fewer bugs and reduced manual intervention.

## What is CI/CD?

**Continuous Integration (CI)** is the practice of frequently integrating code changes into a shared repository, followed by automated builds and tests.

**Continuous Deployment (CD)** automatically deploys all code changes to a testing and/or production environment after the build stage.

## Key Benefits

- Faster time to market
- Reduced manual errors
- More frequent deployments
- Improved developer productivity
- Better quality code
- Earlier bug detection

## Best Practices

### 1. Maintain a Single Source Repository

Keep all code in a version control system like Git. This provides:
- Complete history of changes
- Ability to roll back to previous versions
- Collaboration features like pull requests

### 2. Automate the Build Process

Every commit should trigger an automated build. Your build process should:
- Compile code
- Run static code analysis
- Generate documentation
- Package the application
- Create build artifacts

### 3. Make Builds Self-Testing

Tests should be run automatically as part of the build process:
- Unit tests
- Integration tests
- End-to-end tests
- Security scans

### 4. Keep the Build Fast

Long build times decrease productivity. Aim for:
- Under 10 minutes for the full build
- Prioritize faster, smaller test suites to run first
- Use parallel testing when possible

### 5. Test in a Clone of the Production Environment

Your test environment should mirror production as closely as possible:
- Same operating system
- Same dependencies
- Similar data (anonymized)
- Similar configuration

### 6. Make Deployments Easy

Deployments should be automated, reliable, and repeatable:
- Use infrastructure as code
- Implement feature flags
- Create rollback mechanisms
- Utilize blue-green deployments

### 7. Everyone is Responsible

The entire team should be committed to the CI/CD process:
- Developers fix broken builds immediately
- QA engineers help create automated tests
- Operations teams collaborate on deployment processes

## Tools of the Trade

Popular CI/CD tools include:
- Jenkins
- GitHub Actions
- GitLab CI/CD
- CircleCI
- ArgoCD
- Tekton

## Conclusion

Implementing CI/CD practices takes time and effort, but the benefits are substantial. By following these best practices, development teams can deliver software faster, with higher quality, and with less stress.

Start small, iterate on your process, and continuously improve your CI/CD pipeline to match your team's evolving needs.
`
  },
  {
    id: 3,
    slug: 'cloud-cost-optimization',
    title: 'Cloud Cost Optimization Strategies',
    date: 'March 25, 2025',
    author: 'Alex Cloud',
    authorTitle: 'Cloud Architect',
    tags: ['Cloud', 'Cost Management', 'AWS', 'Azure', 'GCP'],
    content: `
# Cloud Cost Optimization Strategies

Cloud services provide tremendous flexibility and scalability, but costs can quickly spiral out of control without proper management. This article explores practical strategies to optimize your cloud spending across AWS, Azure, and GCP.

## Understanding Cloud Costs

Cloud costs stem from multiple sources:
- Compute resources (VMs, containers)
- Storage (block, object, file)
- Data transfer (ingress/egress)
- Managed services
- Licensing fees

## Key Optimization Strategies

### 1. Right-sizing Resources

Many organizations over-provision resources out of caution. Right-sizing involves:

- Analyzing utilization metrics to identify underutilized resources
- Downsizing instances that consistently use less than 40-50% of resources
- Using auto-scaling to handle variable loads instead of provisioning for peak

### 2. Take Advantage of Pricing Models

Cloud providers offer various pricing options:

- **On-Demand**: Pay per use, most expensive but most flexible
- **Reserved Instances/Commitments**: 1-3 year commitments for 40-60% discounts
- **Spot Instances**: 70-90% discounts for interruptible workloads
- **Savings Plans**: Commit to a specific spending amount for discounted rates

### 3. Implement Resource Lifecycle Management

Unused resources waste money. Implement:

- Automated tagging policies
- Resource expiration dates
- Scheduled shutdowns for dev/test environments
- Zombie resource detection and cleanup

### 4. Optimize Storage Costs

Storage costs can accumulate silently:

- Implement tiered storage strategies (hot/warm/cold)
- Set up lifecycle policies to move older data to cheaper storage
- Delete unnecessary snapshots and backups
- Compress data where applicable

### 5. Monitor and Optimize Network Traffic

Data transfer costs can be substantial:

- Keep traffic within the same region/zone when possible
- Use CDNs to cache content closer to users
- Compress data before transfer
- Batch API calls to reduce request overhead

### 6. Leverage Cloud Provider Tools

Each cloud provider offers cost management tools:

- AWS Cost Explorer and Trusted Advisor
- Azure Cost Management and Advisor
- Google Cloud's Cost Management and Recommender

### 7. Consider Third-Party Tools

For multi-cloud environments, consider specialized tools:
- CloudHealth
- Cloudability
- Flexera
- Apptio

## Implementation Checklist

1. Establish a cloud governance team
2. Define tagging standards
3. Implement budgets and alerts
4. Create regular cost review cadences
5. Train teams on cost-conscious development
6. Measure and celebrate cost reductions

## Conclusion

Cloud cost optimization is an ongoing process, not a one-time activity. By implementing these strategies and fostering a cost-conscious culture, organizations can realize the benefits of cloud computing while keeping expenses under control.

Remember that the goal is not simply to reduce costs, but to maximize the value derived from your cloud investments.
`
  },
  {
    id: 4,
    slug: 'securing-microservices',
    title: 'Securing Microservices Architecture',
    date: 'March 15, 2025',
    author: 'Sam Security',
    authorTitle: 'Security Engineer',
    tags: ['Microservices', 'Security', 'Architecture'],
    content: `
# Securing Microservices Architecture

Microservices architecture offers many benefits, but it also introduces unique security challenges. With more services, APIs, and network communications, the attack surface expands considerably.

## Security Challenges in Microservices

### Increased Attack Surface

Each microservice is a potential entry point. More services mean more potential vulnerabilities.

### Service-to-Service Communication

Microservices need to communicate securely, often across network boundaries.

### Distributed Data

Data may be spread across multiple services and databases, making it harder to enforce consistent access controls.

### Authentication and Authorization Complexity

With many services, managing identity and access becomes more complicated.

## Best Practices for Securing Microservices

### 1. Implement API Gateway Security

An API gateway provides a single entry point for external clients:

- Centralized authentication and authorization
- Rate limiting and throttling
- Request validation
- TLS termination
- IP filtering

### 2. Use Defense in Depth

Don't rely on perimeter security alone:

- Each service should validate inputs
- Implement authorization at the service level
- Assume breach and limit lateral movement

### 3. Service-to-Service Authentication

Services must identify themselves to each other:

- Mutual TLS (mTLS) for service identity
- JWT tokens for service-to-service authorization
- Service mesh solutions like Istio or Linkerd

### 4. Container Security

Since most microservices run in containers:

- Use minimal base images
- Scan containers for vulnerabilities
- Run containers as non-root users
- Implement read-only file systems where possible
- Use runtime security monitoring

### 5. Secrets Management

Store and distribute secrets securely:

- Use a dedicated secrets manager (HashiCorp Vault, AWS Secrets Manager, etc.)
- Rotate credentials regularly
- Avoid hardcoding secrets in code or config files
- Use just-in-time access when possible

### 6. Implement Monitoring and Observability

Detect and respond to security incidents:

- Centralized logging
- Distributed tracing
- Anomaly detection
- Real-time alerting

### 7. Adopt a Zero Trust Model

Assume no implicit trust:

- Verify and authenticate every request
- Grant minimal privileges
- Use network segmentation
- Enforce encryption everywhere

## Security Patterns for Microservices

### Circuit Breaker Pattern

Prevents cascading failures when a service is unavailable or compromised.

### Bulkhead Pattern

Isolates failures to contain the spread of security incidents.

### Retry with Exponential Backoff

Prevents denial of service from repeated retry attempts.

## Conclusion

Security in a microservices architecture requires a different approach than monolithic applications. By implementing these security practices from the beginning of your microservices journey, you can build robust, secure systems that deliver on the promise of microservices while protecting your data and users.

Remember that security is not a one-time effort but a continuous process of improvement, monitoring, and adaptation to new threats.
`
  }
]);

const post = computed(() => {
  return blogPosts.value.find(post => post.slug === route.params.slug);
});

// If post doesn't exist, redirect to blog list
onMounted(() => {
  if (!post.value) {
    router.push('/blog');
  }
});
</script>

<template>
  <div class="blog-post-container container-lg p-responsive" v-if="post">
    <div class="blog-header mb-5">
      <div class="color-bg-subtle px-3 py-4 rounded-2 mb-3">
        <div class="d-flex flex-wrap">
          <span v-for="(tag, index) in post.tags" :key="index" class="IssueLabel color-bg-accent-emphasis color-fg-on-emphasis mr-2 mb-2">
            {{ tag }}
          </span>
        </div>
        <h1 class="h1-mktg mt-3">{{ post.title }}</h1>
        <div class="d-flex flex-items-center mt-3">
          <div class="d-flex flex-items-center">
            <div class="avatar avatar-user mr-2" style="background-color: #1f6feb; color: white; display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%;">
              {{ post.author.charAt(0) }}
            </div>
            <div>
              <div class="f4 text-semibold">{{ post.author }}</div>
              <div class="text-gray">{{ post.authorTitle }}</div>
            </div>
          </div>
          <div class="text-gray ml-4">
            <span class="mr-2">•</span>
            {{ post.date }}
          </div>
        </div>
      </div>
    </div>

    <div class="blog-content markdown-body pb-6">
      <div v-html="renderMarkdown(post.content)"></div>
    </div>

    <div class="blog-footer border-top color-border-muted pt-5 mt-6">
      <div class="d-flex flex-column flex-md-row flex-justify-between flex-items-center">
        <div class="mb-4 mb-md-0">
          <router-link to="/blog" class="btn btn-outline">
            ← Back to All Posts
          </router-link>
        </div>
        <div>
          <span class="text-bold mr-2">Share:</span>
          <a href="#" class="color-fg-muted px-2">Twitter</a>
          <a href="#" class="color-fg-muted px-2">LinkedIn</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// We need to use the options API to import marked after the setup script
import { marked } from 'marked';

export default {
  methods: {
    renderMarkdown(content) {
      // Convert markdown to HTML
      return marked(content);
    }
  }
};
</script>

<style scoped>
.IssueLabel {
  display: inline-block;
  padding: 0.15em 0.5em;
  font-size: 0.8em;
  font-weight: 500;
  border-radius: 2em;
}

.blog-content :deep(h1),
.blog-content :deep(h2),
.blog-content :deep(h3),
.blog-content :deep(h4),
.blog-content :deep(h5),
.blog-content :deep(h6) {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  color: var(--color-fg-default);
}

.blog-content :deep(p) {
  margin-bottom: 1rem;
}

.blog-content :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 6px;
  margin: 1.5rem 0;
}

.blog-content :deep(blockquote) {
  padding: 0 1rem;
  color: var(--color-fg-muted);
  border-left: 0.25rem solid var(--color-border-default);
  margin: 1rem 0;
}

.blog-content :deep(code) {
  background-color: var(--color-canvas-subtle);
  padding: 0.2em 0.4em;
  border-radius: 3px;
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
  font-size: 85%;
}

.blog-content :deep(pre) {
  background-color: var(--color-canvas-subtle);
  padding: 16px;
  overflow: auto;
  border-radius: 6px;
  margin: 1rem 0;
}

.blog-content :deep(pre code) {
  background-color: transparent;
  padding: 0;
}

.blog-content :deep(a) {
  color: var(--color-accent-fg);
  text-decoration: none;
}

.blog-content :deep(a:hover) {
  text-decoration: underline;
}

.blog-content :deep(table) {
  border-collapse: collapse;
  width: 100%;
  margin: 1rem 0;
}

.blog-content :deep(th),
.blog-content :deep(td) {
  padding: 8px 16px;
  border: 1px solid var(--color-border-default);
}

.blog-content :deep(th) {
  background-color: var(--color-canvas-subtle);
  text-align: left;
}
</style>