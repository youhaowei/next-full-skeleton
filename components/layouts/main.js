import Head from "../head";

const MainLayout = ({children}) => {
	return <> 
		<Head />
		{ children }
	</>;
};

export default MainLayout;