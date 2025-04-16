<script setup>
// About page component
</script>

<template>
  <div class="about-container container-lg p-responsive">
    <div class="d-md-flex flex-items-center pb-6 pt-3">
      <div>
        <h1 class="h1-mktg mb-1">About Us</h1>
        <p class="f3-mktg text-gray mb-4">We're a team of passionate engineers building the future of software</p>
      </div>
    </div>

    <!-- Company Overview -->
    <div class="Box p-4 mb-6">
      <h2 class="h2-mktg mb-4">Our Mission</h2>
      <div class="d-md-flex">
        <div class="col-md-8 pr-md-4 mb-4 mb-md-0">
          <p class="f3 mb-4">
            At OpenSource Software House, we're on a mission to transform how organizations build and deploy software through open source principles, cloud-native architecture, and DevOps excellence.
          </p>
          <p class="f3 mb-0">
            Founded in 2022, we've helped companies of all sizes modernize their infrastructure, optimize costs, and deliver software faster with higher quality.
          </p>
        </div>
        <div class="col-md-4 text-center">
          <!-- Company values visualization -->
          <div class="Box Box--condensed color-shadow-medium rounded-2 p-3 color-bg-subtle">
            <ul class="list-style-none f3">
              <li class="mb-2 color-fg-accent">✓ Open Source First</li>
              <li class="mb-2 color-fg-accent">✓ Cloud Native</li>
              <li class="mb-2 color-fg-accent">✓ DevOps Culture</li>
              <li class="mb-2 color-fg-accent">✓ Knowledge Sharing</li>
              <li class="color-fg-accent">✓ Security Focused</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Team Section -->
    <div class="mb-6">
      <h2 class="h2-mktg mb-4">Our Team</h2>
      <div class="d-flex flex-wrap">
        <!-- Team Member 1 -->
        <div class="col-12 col-md-6 mb-4 pr-md-3">
          <div class="Box height-full d-flex flex-column">
            <div class="Box-header">
              <h3 class="Box-title">Alex Johnson</h3>
              <p class="text-gray">Founder & CTO</p>
            </div>
            <div class="Box-body">
              <p>15+ years of experience in cloud architecture and DevOps transformation. Previously led engineering teams at major tech companies.</p>
            </div>
            <div class="Box-footer">
              <div class="d-flex">
                <a href="#" class="Link--secondary mr-3">
                  <svg class="octicon" height="20" viewBox="0 0 16 16" version="1.1" width="20">
                    <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>
                <a href="#" class="Link--secondary mr-3">
                  <svg class="octicon" height="20" viewBox="0 0 24 24" version="1.1" width="20">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </a>
                <a href="#" class="Link--secondary">
                  <svg class="octicon" height="20" viewBox="0 0 24 24" version="1.1" width="20">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Team Member 2 -->
        <div class="col-12 col-md-6 mb-4 pl-md-3">
          <div class="Box height-full d-flex flex-column">
            <div class="Box-header">
              <h3 class="Box-title">Sarah Williams</h3>
              <p class="text-gray">Cloud Architect</p>
            </div>
            <div class="Box-body">
              <p>AWS certified solutions architect with 10+ years in enterprise cloud deployments. Specializes in cost optimization and scalable architecture.</p>
            </div>
            <div class="Box-footer">
              <div class="d-flex">
                <a href="#" class="Link--secondary mr-3">
                  <svg class="octicon" height="20" viewBox="0 0 16 16" version="1.1" width="20">
                    <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>
                <a href="#" class="Link--secondary mr-3">
                  <svg class="octicon" height="20" viewBox="0 0 24 24" version="1.1" width="20">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </a>
                <a href="#" class="Link--secondary">
                  <svg class="octicon" height="20" viewBox="0 0 24 24" version="1.1" width="20">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Form -->
    <div class="Box p-4 mb-6">
      <h2 class="h2-mktg mb-4">Get in Touch</h2>
      <div class="d-md-flex flex-items-space-between">
        <div class="col-md-6 pr-md-4 mb-4 mb-md-0">
          <form class="contact-form">
            <div class="form-group mb-4">
              <label for="name" class="d-block mb-2">Name</label>
              <input type="text" id="name" class="form-control width-full p-3" placeholder="Your name">
            </div>
            <div class="form-group mb-4">
              <label for="email" class="d-block mb-2">Email</label>
              <input type="email" id="email" class="form-control width-full p-3" placeholder="your.email@example.com">
            </div>
            <div class="form-group mb-4">
              <label for="message" class="d-block mb-2">Message</label>
              <textarea id="message" class="form-control width-full p-3" rows="5" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" class="btn btn-primary px-4 py-2">Send Message</button>
          </form>
        </div>
        <div class="col-md-6 pl-md-4">
          <div class="d-flex flex-column">
            <h3 class="h3-mktg mb-3">Contact Information</h3>
            <p class="mb-4">
              Feel free to reach out to us with any questions, project inquiries, or partnership opportunities.
            </p>
            
            <div class="mb-3 d-flex">
              <svg class="octicon mr-2 color-fg-accent flex-shrink-0 mt-1" height="16" viewBox="0 0 16 16" version="1.1" width="16">
                <path fill-rule="evenodd" d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM14.5 4.07v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81zm-13 1.74v6.441c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809z"></path>
              </svg>
              <div>
                <strong>Email:</strong>
                <p class="mb-0">contact@opensourcesoftware.house</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-control {
  padding: 0.375rem 0.5rem;
  background-color: var(--color-canvas-default);
  border: 1px solid var(--color-border-default);
  border-radius: 6px;
  outline: none;
  line-height: 20px;
  color: var(--color-fg-default);
}

.form-control:focus {
  border-color: var(--color-accent-fg);
  box-shadow: 0 0 0 3px rgba(31, 111, 235, 0.3);
}

.btn-primary {
  color: #ffffff;
  background-color: var(--color-accent-fg);
  border-color: var(--color-accent-fg);
}

.btn-primary:hover {
  background-color: var(--color-accent-emphasis);
}
</style>