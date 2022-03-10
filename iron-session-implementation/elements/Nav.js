import style from '../styles/Nav.module.css';
import Link from 'next/link';

import { SessionContext } from './SessionProvider';

import { useEffect, useContext } from 'react';

export default function Nav() {
				const { connect, profile, loading } = useContext(SessionContext);

				useEffect(() => {
								if (!profile) return
								fetch('/api/connect', {
												method: 'POST',
												headers: { 'Content-Type': 'application/json' },
												body: JSON.stringify({ user: profile})
								});
				}, [profile])

				return (
								<nav className={style.nav} >
												<ul className={style.ul} >
																<li className={style.li} >
																				<Link href="/">Home</Link>
																</li>
								{ profile ? (
												<>
																<li className={style.li} >
																				<Link href="/profile">Profile</Link>
																</li>
																<li className={style.li} >
																				<Link href="/">Logout</Link>
																</li>
												</>
								) : null
								}
								{ !profile ? (
																<li onClick={async() => { await connect() }} className={style.li} >
																				<Link href="/">{ loading ? 'connecting...' : 'Connect' }</Link>
																</li>
								) : null
								}
												</ul>
								</nav>
				)
}
