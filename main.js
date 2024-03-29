const primaryHeader = document.querySelector('[data-id="primaryHeader"]')
const navToggleBtn = document.querySelector('[data-id="navToggle"]')
const primaryNavMenu = document.querySelector('[data-id="primaryNav"]')

navToggleBtn.addEventListener('click', () => {
  primaryNavMenu.hasAttribute('data-visible')
    ? navToggleBtn.setAttribute('aria-expanded', false)
    : navToggleBtn.setAttribute('aria-expanded', true)

  primaryNavMenu.toggleAttribute('data-visible')
  primaryHeader.toggleAttribute('data-overlay')
})

const slider = new A11YSlider(document.querySelector('.slider'), {
  adaptiveHeight: false,
  dots: true,
  arrows: false,
  responsive: {
    480: {
      dots: false,
    },
  },
})
