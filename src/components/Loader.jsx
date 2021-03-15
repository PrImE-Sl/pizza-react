import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
	<ContentLoader className='pizza-block'
		speed={2}
		width={280}
		height={457}
		viewBox="0 0 280 457"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
	// {...props}
	>
		<circle cx="135" cy="130" r="130" />
		<rect x="0" y="290" rx="3" ry="3" width="280" height="24" />
		<rect x="0" y="325" rx="6" ry="6" width="280" height="83" />
		<rect x="0" y="416" rx="3" ry="3" width="100" height="35" />
		<rect x="170" y="416" rx="15" ry="15" width="100" height="34" />
	</ContentLoader>
)

export default MyLoader