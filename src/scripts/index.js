import '../styles/index.scss';

console.log('webpack starterkit');

$('#carouselExampleCaptions').hover(
	() => {
		$(this).carousel('pause');
		console.log('hover');
	},
	() => {
		$(this).carousel('cycle');
		console.log('not hover');
	}
);
