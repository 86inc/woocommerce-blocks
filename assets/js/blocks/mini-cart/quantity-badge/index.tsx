/**
 * External dependencies
 */
import { miniCartThin } from '@woocommerce/icons';
import { Icon } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import './style.scss';

interface Props {
	count: number;
	colorClassNames?: string;
}

const QuantityBadge = ( { count }: Props ): JSX.Element => {
	return (
		<span className="wc-block-mini-cart__quantity-badge">
			<Icon
				className="wc-block-mini-cart__icon"
				size={ 20 }
				icon={ miniCartThin }
			/>
			{ count > 0 && (
				<span className="wc-block-mini-cart__badge">{ count }</span>
			) }
		</span>
	);
};

export default QuantityBadge;
