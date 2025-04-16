<script setup>
// Home page component
</script>

<template>
  <div class="home-container">
    <!-- Hero section -->
    <div class="hero-section color-bg-subtle border-bottom">
      <div class="container-lg p-responsive py-5">
        <div class="d-md-flex">
          <div class="col-md-7 mb-4 mb-md-0">
            <h1 class="h000-mktg">Build, Scale, Innovate</h1>
            <h2 class="h3-mktg mb-3">
              OpenSource Software House specializing in DevOps, Cloud Solutions, and Enterprise Software
            </h2>
            <p class="f3-mktg mb-4">
              We build scalable software solutions and help organizations modernize their infrastructure through DevOps practices and cloud-native technologies.
            </p>
            <a href="#services" class="btn btn-large btn-primary mr-3">Our Services</a>
            <a href="/blog" class="btn btn-large">Read our Blog</a>
          </div>
          <div class="col-md-5 text-center px-5">
            <!-- Replace with your own illustration/image -->
            <div class="home-illustration">
              <svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
                <path d="M3.5 3.75a.25.25 0 01.25-.25h13.5a.25.25 0 01.25.25v10a.75.75 0 001.5 0v-10A1.75 1.75 0 0017.25 2H3.75A1.75 1.75 0 002 3.75v16.5c0 .966.784 1.75 1.75 1.75h7a.75.75 0 000-1.5h-7a.25.25 0 01-.25-.25V3.75z"></path><path d="M6.25 7a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm-.75 4.75a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zm16.28 4.53a.75.75 0 10-1.06-1.06l-4.97 4.97-1.97-1.97a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.06 0l5.5-5.5z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Services Section -->
    <div id="services" class="container-lg p-responsive py-6">
      <div class="text-center mb-6">
        <h2 class="h1-mktg mb-3">Our Services</h2>
        <p class="f3-mktg col-md-8 mx-auto">Enabling organizations to focus on what they do best by managing their technology needs</p>
      </div>
      
      <div class="d-md-flex gutter-md mb-6">
        <!-- DevOps -->
        <div class="col-md-4 mb-5 mb-md-0">
          <div class="Box height-full p-4">
            <div class="d-flex flex-items-center mb-2">
              <svg class="octicon mr-2 color-fg-accent" height="24" viewBox="0 0 24 24" version="1.1" width="24">
                <path fill-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm8.036-4.024a.75.75 0 00-1.06 1.06L10.939 12l-2.963 2.963a.75.75 0 101.06 1.06L12 13.06l2.963 2.964a.75.75 0 001.061-1.06L13.061 12l2.963-2.964a.75.75 0 10-1.06-1.06L12 10.939 9.036 7.976z"></path>
              </svg>
              <h3 class="f3 text-semibold">DevOps</h3>
            </div>
            <p>Continuous Integration & Deployment pipelines, Infrastructure as Code, and automation solutions to accelerate your development cycle.</p>
          </div>
        </div>
        
        <!-- Cloud Solutions -->
        <div class="col-md-4 mb-5 mb-md-0">
          <div class="Box height-full p-4">
            <div class="d-flex flex-items-center mb-2">
              <svg class="octicon mr-2 color-fg-accent" height="24" viewBox="0 0 24 24" version="1.1" width="24">
                <path fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"></path>
                <path d="M12 6.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11z"></path>
              </svg>
              <h3 class="f3 text-semibold">Cloud Solutions</h3>
            </div>
            <p>AWS, Azure, and GCP architecture design, migration strategies, and managed cloud services to optimize your IT infrastructure.</p>
          </div>
        </div>
        
        <!-- Enterprise Software -->
        <div class="col-md-4">
          <div class="Box height-full p-4">
            <div class="d-flex flex-items-center mb-2">
              <svg class="octicon mr-2 color-fg-accent" height="24" viewBox="0 0 24 24" version="1.1" width="24">
                <path fill-rule="evenodd" d="M3 3a2 2 0 012-2h9.982a2 2 0 011.414.586l4.018 4.018A2 2 0 0121 7.018V21a2 2 0 01-2 2H5a2 2 0 01-2-2V3zm2-.5a.5.5 0 01.5-.5h9.982a.5.5 0 01.354.146l4.018 4.018a.5.5 0 01.146.354V21a.5.5 0 01-.5.5H5a.5.5 0 01-.5-.5V3z"></path>
                <path d="M8.75 7.5a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5zm0 4a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z"></path>
              </svg>
              <h3 class="f3 text-semibold">Enterprise Software</h3>
            </div>
            <p>Custom software solutions, APIs, microservices architecture, and legacy system modernization for improved business workflows.</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Technology Stack -->
    <div class="color-bg-subtle border-top border-bottom">
      <div class="container-lg p-responsive py-6">
        <h2 class="h1-mktg text-center mb-5">Our Technology Stack</h2>
        
        <div class="d-flex flex-wrap flex-justify-center gutter">
          <div class="tech-item text-center col-6 col-md-3 col-lg-2 mb-4">
            <div class="p-3">
              <svg height="48" viewBox="0 0 24 24">
                <path fill="#E34F26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path>
              </svg>
              <div class="f4 mt-2">HTML/CSS</div>
            </div>
          </div>
          
          <div class="tech-item text-center col-6 col-md-3 col-lg-2 mb-4">
            <div class="p-3">
              <svg height="48" viewBox="0 0 24 24">
                <path fill="#F7DF1E" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path>
              </svg>
              <div class="f4 mt-2">JavaScript</div>
            </div>
          </div>
          
          <div class="tech-item text-center col-6 col-md-3 col-lg-2 mb-4">
            <div class="p-3">
              <svg height="48" viewBox="0 0 24 24">
                <path fill="#41B883" d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"></path>
              </svg>
              <div class="f4 mt-2">Vue.js</div>
            </div>
          </div>
          
          <div class="tech-item text-center col-6 col-md-3 col-lg-2 mb-4">
            <div class="p-3">
              <svg height="48" viewBox="0 0 24 24">
                <path fill="#00ADD8" d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.023.035.059l-.246.315c-.023.035-.081.058-.128.058h-4.172zM.047 11.306c-.047 0-.059-.023-.035-.059l.245-.315c.023-.035.082-.058.129-.058h5.328c.047 0 .07.023.058.058l-.093.315c-.012.047-.058.059-.105.059H.047zM3.472 9.155c-.047 0-.059-.023-.035-.058l.163-.292c.023-.035.07-.058.117-.058h2.337c.047 0 .07.023.07.058l-.012.292c0 .035-.035.058-.082.058h-2.558zM11.088 11.763c-.152.34-.375.51-.631.51-.274 0-.457-.158-.68-.446l-1.555-2.520c-.035-.07-.011-.118.082-.118h.67c.07 0 .105.023.128.082l.962 1.559c.047.07.082.047.106-.024l.626-1.559c.023-.058.058-.082.128-.082h.67c.094 0 .117.048.082.118l-1.578 2.52c-.012 0-.023-.01-.012-.04zM13.033 11.132v-.642a.111.111 0 01.035-.082 3.08 3.08 0 00.593-.642c.263-.35.408-.85.408-1.482 0-.867-.339-1.482-.867-1.865-.527-.385-1.206-.642-2.038-.665-.14 0-.187-.047-.187-.152V5.45c0-.082.058-.14.14-.152.035 0 .81.025 1.409.222.76.21 1.409.7 1.88 1.318.479.618.747 1.482.747 2.41 0 .899-.222 1.647-.645 2.252-.42.596-.99.996-1.618 1.204-.198.058-.502.105-.794.14-.083 0-.14-.058-.14-.14v-.631c0-.082.046-.14.128-.14.292-.024.525-.07.735-.175.467-.21.7-.573.7-1.321 0-.152-.012-.293-.035-.445a.85.85 0 00-.128-.338c-.058-.07-.058-.094.023-.14.502-.293.759-.818.759-1.436 0-.787-.315-1.318-.993-1.553-.164-.059-.41-.14-.77-.14-.586 0-1.054.21-1.377.642-.322.408-.503.949-.503 1.624 0 .922.293 1.67.83 2.146a.172.172 0 01.023.199c-.035.07-.07.094-.117.094h-.737a.125.125 0 01-.117-.07c-.14-.222-.222-.455-.292-.689a3.147 3.147 0 01-.129-.83 3.242 3.242 0 01.467-1.773c.339-.596.782-1.053 1.377-1.365a3.828 3.828 0 011.87-.455c.713 0 1.365.164 1.9.502.537.35.947.807 1.214 1.389.268.596.409 1.224.409 1.889 0 1.026-.339 1.889-1.02 2.564-.314.338-.713.596-1.158.784.515.2.923.502 1.226.899.339.42.502.946.502 1.576 0 .922-.315 1.623-.922 2.099-.619.479-1.389.7-2.286.7h-.07c-.36.023-.817-.094-1.353-.327-.44-.199-.806-.502-1.112-.9-.339-.42-.597-.9-.747-1.412a4.468 4.468 0 01-.129-1.026c0-.117.047-.176.117-.176h.729c.07 0 .117.035.128.105.094.665.245 1.156.468 1.459.362.525.783.784 1.318.784.455 0 .876-.176 1.224-.525.35-.338.504-.783.504-1.342 0-.643-.2-1.130-.597-1.436-.385-.338-.886-.525-1.506-.55-.14 0-.187-.07-.187-.176z"></path>
              </svg>
              <div class="f4 mt-2">Golang</div>
            </div>
          </div>
          
          <div class="tech-item text-center col-6 col-md-3 col-lg-2 mb-4">
            <div class="p-3">
              <svg height="48" viewBox="0 0 24 24">
                <path fill="#2396ED" d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.12a.186.186 0 00-.183.186v1.887a.17.17 0 00.185.188m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888a.17.17 0 00.183.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.346-1.56.655-2.968.62H2.912c-.11 0-.208.073-.239.182a7.46 7.46 0 00-.285 2.269c.016.982.133 1.958.347 2.91.178.763.427 1.466.753 1.981.49.756 1.147 1.15 1.948 1.15.466 0 .69-.06.995-.128.509-.12 1.265-.297 2.39 0a.446.446 0 00.121.118c.654.447 1.38.745 2.143.886.716.133 1.447.137 2.158.012l.062-.011c.701-.143 1.377-.435 1.991-.856l.076-.048a7.98 7.98 0 00.399-.303c.006-.006.015-.009.022-.015v-.001a9.921 9.921 0 00.075-.06 2.573 2.573 0 01-.064-.097 8.393 8.393 0 01-.579-1.391 8.823 8.823 0 01-.345-2.348 7.966 7.966 0 01.347-2.338l.026-.092a8.295 8.295 0 01.583-1.367c.153-.282.32-.55.5-.801a.183.183 0 00-.034-.252m-8.766 6.97c.079-.54.177-1.155.2-1.857l.005-.167.488-.112c.971-.225 1.746-.54 2.348-.991a.186.186 0 00.073-.205.182.182 0 00-.165-.129h-3.506c-.106 0-.186-.08-.186-.177 0-.097.08-.176.186-.176h3.517a.176.176 0 00.173-.134.182.182 0 00-.078-.205c-.61-.37-1.34-.635-2.155-.835a.18.18 0 00-.09-.072l.005-.158c.015-.33.034-.693.02-1.095l-.016-.349c2.208.786 3.425 2.888 3.525 5.339-.714.38-2.126.982-4.345.943m2.426-13.635c.63.38 1.444 1.345 1.675 2.624l.056.305a8.114 8.114 0 01-3.938.37h-.083a3.12 3.12 0 00-.089-.094 7.153 7.153 0 01-.542-.665 2.73 2.73 0 01-.327-.929c.865-.217 1.77-.262 2.654-.138.437-.664.61-1.237.594-1.473"></path>
              </svg>
              <div class="f4 mt-2">Docker</div>
            </div>
          </div>
          
          <div class="tech-item text-center col-6 col-md-3 col-lg-2 mb-4">
            <div class="p-3">
              <svg height="48" viewBox="0 0 24 24">
                <path fill="#326CE5" d="M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 01-2.075-2.597l2.578-.437.489.611zm-.014-.008l.488.61-2.577.437a5.15 5.15 0 01-.043-3.015l2.158 1.556-.026.412zm1.356-.125l-.783.622-1.994-1.443a5.187 5.187 0 011.02-1.8l1.76 2.431-.003.19zm3.13-3.15c1.15 1.277 1.153 3.244.013 4.522a3.23 3.23 0 01-.632.586l-2.046-2.829.405-3.178 2.26.899zm-2.66-.86l-2.389 2.264-1.76-2.43a5.186 5.186 0 012.36-1.2l1.765 1.308.025.058zm-2.607 2.492l2.39-2.265.77.318-2.26 3.13-1.982-1.55 1.082.367zm3.263-1.09l.835.332a3.208 3.208 0 00-2.232-2.746l1.396 2.414z"></path><path fill="#326CE5" d="M12.063 22.974c-6.093 0-11.036-4.944-11.036-11.037S5.97.9 12.063.9v1.228c-5.414 0-9.809 4.394-9.809 9.809s4.395 9.809 9.809 9.809 9.808-4.394 9.808-9.809h1.228c0 6.093-4.944 11.037-11.036 11.037z"></path>
              </svg>
              <div class="f4 mt-2">Kubernetes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Call to action -->
    <div class="container-lg p-responsive py-6 text-center">
      <h2 class="h1-mktg mb-3">Ready to innovate?</h2>
      <p class="f3-mktg mb-5">Let's build something amazing together</p>
      <a href="/about" class="btn btn-large btn-outline">Contact Us</a>
    </div>
  </div>
</template>

<style scoped>
.hero-section {
  padding: 4rem 0;
}

.home-illustration {
  max-width: 400px;
  margin: 0 auto;
  color: var(--color-accent-fg);
}

.tech-item {
  transition: transform 0.2s ease;
}
.tech-item:hover {
  transform: translateY(-5px);
}

h1, h2, h3 {
  color: var(--color-fg-default);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-section {
    padding: 2rem 0;
  }
  
  h1.h000-mktg {
    font-size: 3rem;
    line-height: 1.2;
  }
}
</style>