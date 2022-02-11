import { mount } from "@vue/test-utils"
import Question from "@/components/Question.vue"

describe('App', () => {
    // Inspect the raw component options
    it('has data', () => {
      expect(typeof Question.data).toBe('function')
    })
})

describe('Mounted App', () => {
    const wrapper = mount(Question);

    // test does a wrapper exist
    test('does a wrapper exist', () => {
        expect(wrapper.exists()).toBe(true)
      })
  
    // test markup
    it('renders the correct markup', () => {
        expect(wrapper.html()).toContain('What is the sum of the two numbers?')
      })

    // it's also easy to check for the existence of elements like has a button or not
    it('has a button', () => {
        expect(wrapper.find('button').exists()).toBe(true)
    })

    // test input data
    // it('renders correctly with different data', async () => {
    //     wrapper.setData({ x1: 5, x2: 10 })
    //     await wrapper.vm.$nextTick()
    //     expect(wrapper.text()).toContain('5')
    // })

    // test whether our app gives the correct output without correct sum
    it('button click without correct sum', () => {
        expect(wrapper.vm.message).toBe("")
        const button = wrapper.find('button')
        button.trigger('click')
        expect(wrapper.vm.message).toBe('TRY AGAIN')
    })

    it('button click with correct sum', () => {
        wrapper.setData({ x1: 5, x2: 10 })
        wrapper.setData({ guess: "15" })
        const button = wrapper.find('button')
        button.trigger('click')
        expect(wrapper.vm.message).toBe('SUCCESS!')
    })
      
  })