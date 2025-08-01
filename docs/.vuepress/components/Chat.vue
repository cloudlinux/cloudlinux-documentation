<template>
  <div id="bot-ui">
    <!-- Conditionally show toggle button with highlight -->
    <div class="toggle-container" v-show="!(isMobile && showChat)">
      <div v-if="!showChat" class="pulse-ring"></div>
      <button
        class="chat-toggle"
        @click="toggleChat"
        :class="{ 'chat-open': showChat }"
      >
        <img
          v-if="!showChat"
          src="../assets/icons/bot-icon.webp"
          alt="Bot icon"
          class="bot-icon"
        />
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      
      <div v-if="!showChat" class="highlight-container">
        <div class="tooltip-text">
          <div class="tooltip-title"><b>Need help?</b></div>
          <div class="tooltip-subtitle">I'm an AI chatbot, trained to answer all your questions.</div>
        </div>
      </div>
    </div>

    <div
      v-if="showChat"
      class="chat-container"
      :class="{ fullscreen: isMobile, 'desktop-view': !isMobile }"
    >
      <div class="chat-header">
        <div class="header-actions">
          <button class="close-btn" @click="toggleChat">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      <div class="iframe-container" ref="iframeContainer">
        <iframe
          :src="iframeUrl"
          class="chat-iframe"
          frameborder="0"
          allow="clipboard-read; clipboard-write; fullscreen"
          @load="onIframeLoad"
        />
        <div v-if="isLoading" class="loading-overlay">
          <div class="spinner"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showChat: false,
      isLoading: true,
      iframeUrl: "https://chatbot.cloudlinux.com/docs/cloudlinux",
      windowWidth: 0, // Changed from window.innerWidth to avoid SSR error
    };
  },
  computed: {
    isMobile() {
      return this.windowWidth < 768;
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize(); // Set initial windowWidth on client-side
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    toggleChat() {
      this.showChat = !this.showChat;
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    onIframeLoad() {
      this.isLoading = false;
    },
  },
};
</script>

<style lang="stylus" scoped>
$primary-color = #3f83f8
$background-color = white
$border-radius = 16px
mobile-breakpoint = 768px

#bot-ui {
  font-family: "Inter", "Avenir", Helvetica, Arial, sans-serif
  position: fixed
  bottom: 20px
  right: 20px
  z-index: 9999
  transition: all 0.3s ease
}

.toggle-container {
  position: relative
}

.pulse-ring {
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  width: 66px
  height: 66px
  border-radius: 50%
  background: rgba(63, 131, 248, 0.3)
  animation: pulse 2s infinite
  z-index: -1
}

.chat-toggle {
  position: relative
  background: white
  border: 2px solid $primary-color
  border-radius: 50%
  width: 56px
  height: 56px
  cursor: pointer
  display: flex
  align-items: center
  justify-content: center
  box-shadow: 0 4px 12px rgba(0,0,0,0.15)
  transition: transform 0.3s ease, box-shadow 0.3s ease
  z-index: 10000
  padding: 0
  overflow: hidden

  .bot-icon {
    width: calc(100% - 4px)
    height: calc(100% - 4px)
    border-radius: 50%
    object-fit: cover
  }

  svg {
    color: $primary-color
    width: 32px
    height: 32px
  }

  &:hover {
    transform: scale(1.05)
    box-shadow: 0 6px 16px rgba(0,0,0,0.2)
  }
}

.highlight-container {
  position: absolute;
  bottom: calc(100% + 15px);
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  pointer-events: none;
  z-index: 10001;
  max-width: 90vw;
}

.tooltip-text {
  background: white;
  color: black;
  padding: 12px 20px;
  border-radius: 20px;
  font-size: 0.95rem; /* Increase this value to make the tooltip text larger */
  animation: float 3s ease-in-out infinite;
  position: relative;
  text-align: right;
  font-weight: 500;
  box-shadow: 0 0 15px $primary-color;
  overflow: visible;
  text-overflow: clip;
}

.tooltip-title {
  margin-bottom: 4px;
}

.tooltip-subtitle {
  white-space: nowrap;
}

.chat-container {
  position: fixed
  border-radius: $border-radius
  overflow: hidden
  box-shadow: 0 12px 32px rgba(0,0,0,0.2)
  background: $background-color
  transition: all 0.3s ease
  z-index: 9999

  &.fullscreen {
    top: 0
    left: 0
    right: 0
    bottom: 0
    border-radius: 0
    width: 100%
    height: 100vh
  }

  &.desktop-view {
    top: 5vh
    left: 5vw
    right: 5vw
    bottom: 5vh
    width: 90vw
    height: 90vh
    max-width: none
  }
}

.chat-header {
  background: $primary-color
  color: white
  padding: 1rem 1.5rem
  display: flex
  justify-content: flex-end
  align-items: center

  .header-content {
    display: flex
    align-items: center

    .header-avatar {
      width: 32px
      height: 32px
      border-radius: 50%
      margin-right: 10px
      object-fit: cover
    }

    .bot-title {
      font-weight: 600
      font-size: 1rem
    }
  }

  .header-actions {
    display: flex
    align-items: center

    .close-btn {
      background: none
      border: none
      color: white
      cursor: pointer
      display: flex
      align-items: center
      justify-content: center

      svg {
        stroke: white
        width: 24px
        height: 24px
      }

      &:hover {
        opacity: 0.8
      }
    }
  }
}

.iframe-container {
  position: relative
  width: 100%
  height: calc(100% - 60px)
}

.chat-iframe {
  width: 100%
  height: 100%
  border: none
}

.loading-overlay {
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  display: flex
  justify-content: center
  align-items: center
  background: rgba(255, 255, 255, 0.7)

  .spinner {
    border: 4px solid $primary-color
    border-top: 4px solid transparent
    border-radius: 50%
    width: 40px
    height: 40px
    animation: spin 1s linear infinite
  }
}

@keyframes spin {
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(0.8)
    opacity: 0.7
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2)
    opacity: 0.3
  }
  100% {
    transform: translate(-50%, -50%) scale(1)
    opacity: 0
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0)
  }
  50% {
    transform: translateY(-4px)
  }
}

@media (max-width: mobile-breakpoint) {
  #bot-ui {
    bottom: 15px
    right: 15px
  }

  .chat-container {
    bottom: 0
  }

  .chat-toggle.chat-open {
    display: none
  }

  .highlight-container {
    bottom: calc(100% + 15px)
    right: 0
  }

  .tooltip-text {
    font-size: 0.9rem; /* Adjust this value to change the tooltip text size on mobile devices */
    padding: 10px 16px;
    max-width: 90vw;
  }
  
  .tooltip-subtitle {
    white-space: nowrap;
  }
}
</style>