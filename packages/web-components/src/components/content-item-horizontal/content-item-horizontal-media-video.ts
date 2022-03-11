/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, customElement, property } from 'lit-element';
import ddsSettings from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import DDSVideoPlayerContainer from '../video-player/video-player-container';
import styles from './content-item-horizontal-media.scss';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * The video content in horizontal content item with media.
 *
 * @element dds-content-item-horizontal-media-video
 */
@customElement(`${ddsPrefix}-content-item-horizontal-media-video`)
class DDSContentItemHorizontalMediaVideo extends DDSVideoPlayerContainer {
  /**
   * The shadow slot this video should be in.
   */
  @property({ reflect: true })
  slot = 'media';

  render() {
    return html`
      <slot></slot>
    `;
  }

  static get stableSelector() {
    return `${ddsPrefix}--content-item-horizontal-media-video`;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default DDSContentItemHorizontalMediaVideo;
