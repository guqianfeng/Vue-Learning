import { mount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'
import sinon from 'sinon'

describe('Counter.vue', () => {
  const click = sinon.spy()
  const wrapper = mount(Counter, {
    listeners: {
      click
    }
  })
  it('renders counter html', () => {
    expect(wrapper.html()).toMatchSnapshot()
  });
  it('count++', () => {
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(2)
    expect(click.called).toBe(true)
    button.trigger('click')
    expect(click.callCount).toBe(2)
  })
})
