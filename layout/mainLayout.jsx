import Navbar from "../components/navigation/navbar";
import {WalletProvider} from '@suiet/wallet-kit';
import '@suiet/wallet-kit/style.css';

export default function MainLayout({ children }) {
	return (
		<div>
			<WalletProvider>
				<Navbar />
				{children}
			</WalletProvider>
		</div>
	);
}
