/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, svg, property, customElement, LitElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import FocusMixin from 'carbon-web-components/es/globals/mixins/focus.js';
import ifNonNull from 'carbon-web-components/es/globals/directives/if-non-null.js';
import IBM8BarLogoH65White from '@carbon/ibmdotcom-styles/icons/svg/IBM-8bar-logo--h65-white.svg';
import ddsSettings from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import StableSelectorMixin from '../../globals/mixins/stable-selector';
import styles from './footer.scss';

const { prefix } = settings;
const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * The IBM logo UI in footer.
 *
 * @element dds-footer-logo
 */
@customElement(`${ddsPrefix}-footer-logo`)
class DDSFooterLogo extends StableSelectorMixin(FocusMixin(LitElement)) {
  /**
   * Link `href`.
   */
  @property()
  href = 'https://www.ibm.com/';

  /**
   * The shadow slot this logo UI should be in.
   */
  @property({ reflect: true })
  slot = 'brand';

  createRenderRoot() {
    return this.attachShadow({
      mode: 'open',
      delegatesFocus: Number((/Safari\/(\d+)/.exec(navigator.userAgent) ?? ['', 0])[1]) <= 537,
    });
  }

  render() {
    const { href } = this;
    return html`
      <a class="${prefix}--footer-logo__link" aria-label="IBM logo" href="${ifNonNull(href)}">
        ${IBM8BarLogoH65White({
          class: `${prefix}--footer-logo__logo`,
          role: 'img',
          'aria-labelledby': 'footer-logo',
          children: svg`<title id="footer-logo">IBM Logo</title>`,
        })}
        <slot></slot>
      </a>
    `;
  }

  static get stableSelector() {
    return `${ddsPrefix}--footer-logo`;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default DDSFooterLogo;