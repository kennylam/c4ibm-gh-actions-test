/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { css, customElement } from 'lit-element';
import ddsSettings from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import DDSCardCTA from '../cta/card-cta';
import styles from './feature-section.scss';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * Feature Section Card Link.
 *
 * @element dds-feature-section-card-link
 */
@customElement(`${ddsPrefix}-feature-section-card-link`)
class DDSFeatureSectionCardLink extends DDSCardCTA {
  static get stableSelector() {
    return `${ddsPrefix}--feature-section-card-link`;
  }

  // `styles` here is a `CSSResult` generated by custom WebPack loader
  static get styles() {
    return css`${super.styles}${styles}`;
  }
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default DDSFeatureSectionCardLink;