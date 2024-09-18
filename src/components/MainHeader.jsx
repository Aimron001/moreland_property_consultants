import { Link } from "react-router-dom";

export default function MainHeader(){
    return (
        <div className="main-header">
            <div className="logo">MPC</div>
            <nav>
                <ul>
                    <li><Link>Home</Link></li>
                    <li><Link>Lands/Plots</Link></li>
                    <li><Link>Services</Link></li>
                    <li><Link>About Us</Link></li>
                    <li><Link>Contact Us</Link></li>
                </ul>
            </nav>
        </div>
    )
}