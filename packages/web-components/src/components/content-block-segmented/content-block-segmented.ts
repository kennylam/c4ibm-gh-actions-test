/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Part } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map';
import { html, css, customElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings.js';
import ddsSettings from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import DDSContentBlock, { CONTENT_BLOCK_COMPLEMENTARY_STYLE_SCHEME } from '../content-block/content-block';
import styles from './content-block-segmented.scss';

const { prefix } = settings;
const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * Simple version of content block.
 *
 * @element dds-content-block-segmented
 */
@customElement(`${ddsPrefix}-content-block-segmented`)
class DDSContentBlockSegmented extends DDSContentBlock {
  protected _getContainerClasses(): string | ((part: Part) => void) {
    const {
      complementaryStyleScheme,
      _hasComplementary: hasComplementary,
      _hasContent: hasContent,
      _hasCopy: hasCopy,
      _hasHeading: hasHeading,
      _hasMedia: hasMedia,
    } = this;
    return classMap({
      [`${prefix}--content-layout`]: true,
      [`${prefix}--content-layout--with-complementary`]: hasComplementary,
      [`${ddsPrefix}-ce--content-layout--with-adjacent-heading-content`]: hasHeading && hasContent && !hasCopy && !hasMedia,
      [`${prefix}--layout--border`]: complementaryStyleScheme === CONTENT_BLOCK_COMPLEMENTARY_STYLE_SCHEME.WITH_BORDER,
    });
  }

  protected _renderInnerBody() {
    return html`
      ${this._renderMedia()}${this._renderContent()}
    `;
  }

  static get stableSelector() {
    return `${ddsPrefix}--content-block-segmented`;
  }

  // `styles` here is a `CSSResult` generated by custom WebPack loader
  static get styles() {
    return css`${super.styles}${styles}`;
  }
}

export default DDSContentBlockSegmented;