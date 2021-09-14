import type Component from './Label.svelte';

export declare class LabelComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLLabelElement>>,
    keyof Component['$$prop_def']
  > &
    Component['$$prop_def'];
}