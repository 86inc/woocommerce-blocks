<?php

namespace Automattic\WooCommerce\Blocks\BlockTypes;

use Automattic\WooCommerce\Blocks\Utils\StyleAttributesUtils;

/**
 * CustomerAccount class.
 */
class CustomerAccount extends AbstractBlock {
	const TEXT_ONLY   = 'text_only';
	const ICON_ONLY   = 'icon_only';
	const DISPLAY_ALT = 'alt';

	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'customer-account';

	/**
	 * Render the block.
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 *
	 * @return string Rendered block output.
	 */
	protected function render( $attributes, $content, $block ) {
		$classes_and_styles = StyleAttributesUtils::get_classes_and_styles_by_attributes( $attributes );

		$account_link = get_option( 'woocommerce_myaccount_page_id' ) ? wc_get_account_endpoint_url( 'dashboard' ) : wp_login_url();

		$allowed_svg = array(
			'svg'  => array(
				'class'   => true,
				'xmlns'   => true,
				'width'   => true,
				'height'  => true,
				'viewbox' => true,
			),
			'path' => array(
				'd'    => true,
				'fill' => true,
			),
		);

		return "<div class='wp-block-woocommerce-customer-account " . esc_attr( $classes_and_styles['classes'] ) . "' style='" . esc_attr( $classes_and_styles['styles'] ) . "'>
			<a href='" . esc_attr( $account_link ) . "'>
				" . wp_kses( $this->render_icon( $attributes ), $allowed_svg ) . "<span class='label'>" . wp_kses( $this->render_label( $attributes ), array() ) . '</span>
			</a>
		</div>';
	}

	/**
	 * Gets the icon to render depending on the iconStyle and displayStyle.
	 *
	 * @param array $attributes Block attributes.
	 *
	 * @return string Label to render on the block
	 */
	private function render_icon( $attributes ) {
		if ( self::TEXT_ONLY === $attributes['displayStyle'] ) {
			return '';
		}

		if ( self::DISPLAY_ALT === $attributes['iconStyle'] ) {
			return '<svg class="' . $attributes['iconClass'] . '" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
				<path
					d="M9 0C4.03579 0 0 4.03579 0 9C0 13.9642 4.03579 18 9 18C13.9642 18 18 13.9642 18 9C18 4.03579 13.9642 0 9
					 	0ZM9 4.32C10.5347 4.32 11.7664 5.57056 11.7664 7.08638C11.7664 8.62109 10.5158 9.85277 9 9.85277C7.4653
					 	9.85277 6.23362 8.60221 6.23362 7.08638C6.23362 5.57056 7.46526 4.32 9 4.32ZM9 10.7242C11.1221 10.7242
					  	12.96 12.2021 13.7937 14.4189C12.5242 15.5559 10.8379 16.238 9 16.238C7.16207 16.238 5.49474 15.5369
					   	4.20632 14.4189C5.05891 12.2021 6.87793 10.7242 9 10.7242Z"
					fill="currentColor"
				/>
			</svg>';
		}

		return '<svg class="' . $attributes['iconClass'] . '" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 21">
		<path d="M8.370 0.045 C 6.706 0.250,5.189 1.271,4.296 2.789 C 2.677 5.539,3.635 9.119,6.413 10.704 C 8.285 11.772,10.593 11.589,12.329 10.235 C 14.442 8.588,15.107 5.524,13.883 3.077 C 12.836 0.983,10.625 -0.232,8.370 0.045 M9.594 2.057 C 10.797 2.303,11.788 3.164,12.252 4.367 C 12.498 5.005,12.563 5.793,12.423 6.448 C 12.149 7.735,11.244 8.798,10.060 9.220 C 9.420 9.449,8.580 9.449,7.940 9.220 C 6.953 8.868,6.145 8.061,5.748 7.033 C 5.502 6.395,5.437 5.607,5.577 4.952 C 5.889 3.487,6.986 2.357,8.385 2.060 C 8.672 1.999,9.301 1.997,9.594 2.057 M7.740 12.543 C 6.858 12.600,5.851 12.741,5.062 12.917 C 2.259 13.543,0.522 14.742,0.099 16.342 C 0.035 16.585,0.021 16.707,0.018 17.055 C 0.015 17.417,0.025 17.506,0.085 17.700 C 0.463 18.920,1.861 19.769,4.305 20.265 C 6.354 20.680,9.072 20.804,11.520 20.593 C 14.738 20.315,16.826 19.546,17.624 18.345 C 18.195 17.484,18.102 16.334,17.383 15.375 C 16.355 14.004,13.880 12.941,10.965 12.618 C 9.996 12.510,8.706 12.480,7.740 12.543 M9.810 14.521 C 12.310 14.665,14.630 15.413,15.593 16.386 C 15.879 16.675,15.990 16.869,15.990 17.083 C 15.990 17.560,14.575 18.153,12.762 18.434 C 11.461 18.637,10.860 18.675,9.000 18.675 C 7.406 18.675,7.042 18.660,6.105 18.553 C 4.410 18.360,3.054 17.990,2.365 17.532 C 2.086 17.347,1.998 17.213,2.016 17.003 C 2.037 16.742,2.160 16.522,2.438 16.247 C 2.736 15.951,2.951 15.807,3.465 15.555 C 4.998 14.807,7.550 14.391,9.810 14.521"
		stroke="none"
		fillRule="evenodd"
		clipRule="evenodd"
		fill="currentColor"/>
		</svg>';

		// '<svg class="' . $attributes['iconClass'] . '" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
		// 	<path
		// 		d="M8.00009 8.34785C10.3096 8.34785 12.1819 6.47909 12.1819 4.17393C12.1819 1.86876 10.3096 0 8.00009 0C5.69055
		// 		 	0 3.81824 1.86876 3.81824 4.17393C3.81824 6.47909 5.69055 8.34785 8.00009 8.34785ZM0.333496 15.6522C0.333496
		// 		  	15.8444 0.489412 16 0.681933 16H15.3184C15.5109 16 15.6668 15.8444 15.6668 15.6522V14.9565C15.6668 12.1428
		// 		   	13.7821 9.73911 10.0912 9.73911H5.90931C2.21828 9.73911 0.333645 12.1428 0.333645 14.9565L0.333496 15.6522Z"
		// 		fill="currentColor"
		// 	/>
		// </svg>';
	}

	/**
	 * Gets the label to render depending on the displayStyle.
	 *
	 * @param array $attributes Block attributes.
	 *
	 * @return string Label to render on the block.
	 */
	private function render_label( $attributes ) {
		if ( self::ICON_ONLY === $attributes['displayStyle'] ) {
			return '';
		}

		return get_current_user_id()
			? __( 'My Account', 'woo-gutenberg-products-block' )
			: __( 'Login', 'woo-gutenberg-products-block' );
	}

	/**
	 * Get the frontend script handle for this block type.
	 *
	 * @param string $key Data to get, or default to everything.
	 *
	 * @return null This block has no frontend script.
	 */
	protected function get_block_type_script( $key = null ) {
		return null;
	}
}
