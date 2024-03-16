import { Meta, StoryObj } from '@storybook/angular';
import { UiHeaderComponent } from '../app/Shared/ui-header/ui-header.component';

const meta: Meta<UiHeaderComponent> = {
    component: UiHeaderComponent
}

export default meta;

type Story = StoryObj<UiHeaderComponent>;
export const Base: Story = {};