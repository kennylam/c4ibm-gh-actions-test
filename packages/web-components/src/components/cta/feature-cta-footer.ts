/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { property, customElement } from 'lit-element';
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings';
import {
  formatVideoCaption,
  formatVideoDuration,
} from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/formatVideoCaption/formatVideoCaption.js';
import DDSFeatureCardFooter from '../feature-card/feature-card-footer';
import CTAMixin from '../../component-mixins/cta/cta';
import VideoCTAMixin from '../../component-mixins/cta/video';
import { CTA_TYPE } from './defs';
import styles from './cta.scss';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * Feature CTA footer.
 *
 * @element dds-feature-cta-footer
 */
@customElement(`${ddsPrefix}-feature-cta-footer`)
class DDSFeatureCTAFooter extends VideoCTAMixin(CTAMixin(DDSFeatureCardFooter)) {
  /**
   * The formatter for the video caption, composed with the video name and the video duration.
   * Should be changed upon the locale the UI is rendered with.
   */
  @property({ attribute: false })
  formatVideoCaption = formatVideoCaption;

  /**
   * The formatter for the video duration.
   * Should be changed upon the locale the UI is rendered with.
   */
  @property({ attribute: false })
  formatVideoDuration = formatVideoDuration;

  /**
   * The video duration.
   */
  @property({ type: Number, attribute: 'video-duration' })
  videoDuration?: number;

  /**
   * The video thumbnail URL.
   * Feature CTA footer does not support video thumbnail, and this property should never be set.
   */
  videoThumbnailUrl?: never;

  /**
   * The video name.
   * This property should be set when a custom video title is needed.
   */
  videoName?: string;

  /**
   * The video custom description.
   */
  @property({ attribute: 'video-description' })
  videoDescription?: string;

  /**
   * The CTA type.
   */
  @property({ reflect: true, attribute: 'cta-type' })
  ctaType = CTA_TYPE.REGULAR;

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default DDSFeatureCTAFooter;
