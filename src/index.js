import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

import Edit from './edit';
import metadata from './block.json';

const gridIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
		<path d="M128 136c0-22.1-17.9-40-40-40L40 96C17.9 96 0 113.9 0 136l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM288 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM448 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/>
	</svg>
);

const { withSelect, select } = wp.data;

registerBlockType( metadata.name, {
	icon: gridIcon,
	attributes: {
		showFeaturedPost: {
			type: 'boolean'
		},
		showFilters: {
			type: 'boolean'
		},
		gradient: {
			type: 'string',
			default: 'linear-gradient(60deg, rgba(3,21,36,1) 0%, rgba(105,59,131,1) 50%, rgba(164,65,122,1) 100%)'
		}
	},
	edit: withSelect(select => {
		return {
			posts: select('core').getEntityRecords('postType', 'post'),
			categories: select('core').getEntityRecords('taxonomy', 'category'),
			getFeaturedImage: (media) => select('core').getEntityRecord('postType', 'attachment', media)
		}
	})(Edit),
} );
