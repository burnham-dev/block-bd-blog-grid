import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { ToggleControl, PanelBody, GradientPicker } from '@wordpress/components';

import BlogGrid from './components/BlogGrid';

export default function Edit({ attributes, setAttributes, posts, categories, getFeaturedImage }) {
	const blockProps = useBlockProps();
	const {
		showFeaturedPost,
		showFilters,
		gradient
	} = attributes;

	function onChangeToggleFilters(newValue) {
		setAttributes( { 
			showFilters: newValue,
		} );
	}

	function onChangeToggleFeatured(newValue) {
		setAttributes( { 
			showFeaturedPost: newValue,
		} );
	}

	function onChangeGradient(newValue) {
		setAttributes( { 
			gradient: newValue,
		} );
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings' ) }>
					<ToggleControl
						label="Show category filters?"
						checked={ showFilters }
						onChange={ onChangeToggleFilters }
					/>
					<ToggleControl
						label="Show first post as featured?"
						checked={ showFeaturedPost }
						onChange={ onChangeToggleFeatured }
					/>
					{showFeaturedPost && <GradientPicker
						label="Featured Post Gradient Overlay"
						value={ gradient }
						onChange={ onChangeGradient }
						gradients={ [
							{
								name: 'Cosmic Aurora',
								gradient:
									'linear-gradient(60deg, rgba(3,21,36,1) 0%, rgba(105,59,131,1) 50%, rgba(164,65,122,1) 100%)',
								slug: 'cosmic-aurora',
							},
							{
								name: 'Slate',
								gradient:
									'linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)',
								slug: 'slate',
							},
							{
								name: 'Sunfire',
								gradient:
									'linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)',
								slug: 'sunfire',
							},
						] }
					/>}
				</PanelBody>
			</InspectorControls>
			
			<div { ...blockProps }>
				<BlogGrid posts={posts} categories={categories} showFeaturedPost={showFeaturedPost} showFilters={showFilters} gradient={gradient} getFeaturedImage={getFeaturedImage} />
			</div>
		</>
	);
}
