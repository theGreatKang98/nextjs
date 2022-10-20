import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();
    return (
        <nav>
            <img src="/vercel.svg" />
            <div>
                <Link href="/">
                    <a className={router.pathname === "/" ? "active" : ""}>Home</a>
                </Link>
                <Link href="/about">
                    <a className={router.pathname === "/about" ? "active" : ""}>About</a>
                </Link>
            </div>
            <style jsx>{`
         a {
           text-decoration: none;
         }
         nav {
           display: flex;
           gap: 10px;
           flex-direction: column;
           align-items: center;
           padding-top: 20px;
           padding-bottom: 10px;
         }
         img {
           max-width: 100px;
           margin-bottom: 5px;
         }
         nav a {
           font-weight: 600;
           font-size: 18px;
         }
         .active {
           color: red;
         }
         nav div {
           display: flex;
           gap: 10px;
         }
       `}</style>
        </nav>
    );
}
