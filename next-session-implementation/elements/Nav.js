import Link from 'next/link';
import style from '../styles/Nav.module.css';
import useCeramic from '../lib/ceramic'; 
import useUser from '../lib/user';

export default function Nav() {
				const { connect, loading } = useCeramic();
				const { user, error } = useUser();
				return (
								<nav className={style.nav} >
												<ul className={style.ul} >
																<li className={style.li} >
																				<Link href="/">Home</Link>
																</li>
																<li onClick={async () => {
																				const resp  = await fetch('/api/user');
																				const data = await resp.json();
																				console.log(data);
																} }className={style.li} >
																				<Link href="/profile">Profile</Link>
																</li>
																<li className={style.li} >
																				<Link href="/">Logout</Link>
																</li>
																<li onClick={ connect }className={style.li} >
																				<Link href="/">{ loading ? 'Connecting...' : 'Connect' }</Link>
																</li>
												</ul>
								</nav>
				)
}
