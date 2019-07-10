import Head from "../head";
import "fomantic-ui-less/semantic.less";

// eslint-disable-next-line react/prop-types
const MinimalLayout = ({ children }) => {
	return (
		<>
			<Head />
			{children}
		</>
	);
};

export default MinimalLayout;
