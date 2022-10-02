export default function() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementsByTagName('html')[0].classList.add('dark-mode')
    }
  }