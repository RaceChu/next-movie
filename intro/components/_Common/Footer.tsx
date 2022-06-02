import Link from 'next/link';
export default function Footer(){


    return (
        <div>
            <footer className="footer-section">
                <div className="container">
                    <ul className="footer-menu">
                        <li><Link href={`/`}><a href="#">Home</a></Link></li>
                        <li><Link href={`/About`}><a href="#">About Guild</a></Link></li>
                        <li><Link href={`/member`}><a href="#">Member</a></Link></li>
                        <li><Link href={`/CivilWar`}><a href="#">Civil War</a></Link></li>
                        <li><Link href={`/Analytics`}><a href="#">Analytics</a></Link></li>
                    </ul>
                    <p className="copyright">
                        Copyright &copy;
                        2022
                        All rights reserved
                        Creator by
                        <span style={{color : "#9fcdff"}}> RaceChu</span>
                    </p>
                </div>
            </footer>
        </div>
    )
}