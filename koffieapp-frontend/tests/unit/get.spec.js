import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
    test('setup correctly', () => (
        expect(true).toBe(true)
    ))
    it('can find element', () => {
        const wrapper = shallowMount(App)
        expect(wrapper.find('h3')).toBeTruthy()
    })
})