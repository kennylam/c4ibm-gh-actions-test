/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { html, property, customElement, LitElement } from 'lit-element';
import ddsSettings from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import styles from './content-item-horizontal.scss';
import StableSelectorMixin from '../../globals/mixins/stable-selector';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * The eyebrow content of content item horizontal.
 *
 * @element dds-content-item-horizontal-eyebrow
 */
@customElement(`${ddsPrefix}-content-item-horizontal-eyebrow`)
class DDSContentItemHorizontalEyebrow extends StableSelectorMixin(LitElement) {
  /**
   * The shadow slot this eyebrow content should be in.
   */
  @property({ reflect: true })
  slot = 'eyebrow';

  render() {
    return html`
      <slot></slot>
    `;
  }

  static get stableSelector() {
    return `${ddsPrefix}--content-item-horizontal-eyebrow`;
  }

  // `styles` here is a `CSSResult` generated by custom WebPack loader
  static styles = styles;
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default DDSContentItemHorizontalEyebrow;
