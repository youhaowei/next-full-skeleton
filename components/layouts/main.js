import Head from "../head";
import "fomantic-ui-less/semantic.less";

const MainLayout = ({ children }) => {
	return (
		<>
			<Head />
			{children}
		</>
	);
};

export default MainLayout;
