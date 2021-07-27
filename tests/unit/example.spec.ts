import { shallowMount } from '@vue/test-utils';
import TextBlock from '@/components/common/typography/TextBlock/TextBlock.vue';

describe('TextBlock.vue', () => {
    it('Render slot for TextBlock', () => {
        const slotMessage = 'Slot message';
        const wrapper = shallowMount(TextBlock, {
            slots: {
                default: slotMessage
            }
        });
        expect(wrapper.text()).toMatch(slotMessage);
    });
});
