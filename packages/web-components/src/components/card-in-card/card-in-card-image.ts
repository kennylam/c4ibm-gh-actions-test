/**
 * @license
 *
 * Copyright IBM Corp. 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { css, customElement } from 'lit-element';
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings';
import DDSImage from '../image/image';
import styles from './card-in-card.scss';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * Card in Card Extends Image.
 *
 * @element dds-card-in-card-image
 */
@customElement(`${ddsPrefix}-card-in-card-image`)
class DDSCardInCardImage extends DDSImage {
  // `styles` here is a `CSSResult` generated by custom WebPack loader
  static get styles() {
    return css`${super.styles}${styles}`;
  }
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default DDSCardInCardImage;