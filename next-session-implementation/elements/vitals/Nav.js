import Link from 'next/link';
import style from '../../styles/Nav.module.css';
import useCeramic from '../../lib/hooks/auth/ceramic'; 
import useUser from '../../lib/hooks/user/user';
import { useContext, useEffect } from 'react';
import { DataContext } from '../provider/DataProvider';

export default function Nav() {
				const { connect, status } = useCeramic();
				const { user, setUser } =  useContext(DataContext);

				useEffect(async () => {
								if (status === 'connected') {
												const resp = await fetch('/api/user');
												const _user = await resp.json();
												setUser(_user);
								}
				}, [status]);
				
				return (
								<nav className={style.nav} >
												<ul className={style.ul} >
																<li className={style.li} >
																				<Link href="/">Home</Link>
																</li>
								{ user ? (
																<li className={style.li} >
																				<Link href="/profile">Profile</Link>
																</li>
								) : null }
								{ user ? (
																<li className={style.li} >
																				<Link href="/">Logout</Link>
																</li>
								) : null }
								{ !user ? (
																<li onClick={ connect }className={style.li} >
																				<Link href="/">{ status === 'connecting' ? status : 'Connect' }</Link>
																</li>
								) : null }
												</ul>
								</nav>
				)
}
