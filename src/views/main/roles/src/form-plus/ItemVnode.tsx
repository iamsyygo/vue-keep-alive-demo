import { defineComponent } from 'vue';
import { FormPlusItem } from './type';
import {
  Input,
  Select,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  DatePicker,
  Upload,
  Cascader,
  Switch,
  Slider,
  Rate,
} from 'ant-design-vue';
export const ItemVnode = defineComponent({
  props: {
    item: { type: Object as () => FormPlusItem<string | number>, required: true },
    // formProps: { type: Object as () => FormProps, default: () => ({}) },
    slots: { type: Object as () => Record<string, Function>, default: () => ({}) },
    model: { type: Object, required: true },
  },
  render(): any {
    const items = this.slots.formItems;
    const def = this.slots[this.item.name];
    return (items || def)?.(this.item, this.model) ?? getComponent(this.item, this.model);
  },
});

function getComponent(item: FormPlusItem<string | number>, model: any) {
  const props = Object.assign(item.props || {});
  switch (item.component) {
    case 'input': {
      return <Input v-model={[model[item.name], 'value']} {...props} />;
    }
    case 'select': {
      return <Select v-model={[model[item.name], 'value']} {...props} />;
    }
    case 'radio-group': {
      return <RadioGroup v-model={[model[item.name], 'value']} {...props} />;
    }
    case 'checkbox-group': {
      return <CheckboxGroup v-model={[model[item.name], 'value']} {...props} />;
    }

    // 💡 unfinish code
    case 'textarea': {
      return <Input.TextArea v-model={[model[item.name], 'value']} {...props} />;
    }

    default: {
      return <Input v-model={[model[item.name], 'value']} placeholder="请输入" {...props} />;
    }
  }
}