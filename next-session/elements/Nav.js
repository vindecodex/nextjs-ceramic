import style from '../styles/Nav.module.css';
import Link from 'next/link';

export default function Nav() {
				return (
								<nav className={style.nav} >
												<ul className={style.ul} >
																<li className={style.li} >
																				<Link href="/">Home</Link>
																</li>
																<li className={style.li} >
																				<Link href="/profile">Profile</Link>
																</li>
																<li className={style.li} >
																				<Link href="/">Logout</Link>
																</li>
																<li className={style.li} >
																				<Link href="/">Connect</Link>
																</li>
												</ul>
								</nav>
				)
}
