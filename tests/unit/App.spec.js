import { shallowMount } from '@vue/test-utils'
import Navbar from '../../src/components/Navbar.vue'
import App from '../../src/App.vue'
import router from '../../src/router/index.js'

describe('App.vue', () => {

  it('Navbar component\'s exist', async () => {
    router.push('/')
    await router.isReady()
    const wrapper = shallowMount(App, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.findComponent(Navbar).exists()).toBe(true)
  })
})
