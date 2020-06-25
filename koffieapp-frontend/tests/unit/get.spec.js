import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import ProductTable from '@//components/ProductTable.vue'
import CardBody from '@//components/CardBody.vue'

describe('App.vue', () => {
    test('setup correctly', () => (
        expect(true).toBe(true)
    ))
    it('can find element', () => {
        const wrapper = shallowMount(App)
        const productTable = wrapper.findComponent(ProductTable)
        const cardBody = wrapper.findComponent(CardBody)

        expect(wrapper.find('ProductTable')).toBeTruthy()
        expect(wrapper.findAll('div').exists()).toBe(true)
        expect(productTable.exists()).toBe(true)
        expect(cardBody.exists()).toBe(true)
    })
    it('does exist', () => {
        const wrapper = shallowMount(App)
        expect(wrapper.exists('ProductTable')).toBe(true)
    })
})