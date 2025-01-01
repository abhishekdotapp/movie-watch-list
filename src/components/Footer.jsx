import "../css/Footer.css";

function Footer() {
        return (
                <footer className="footer">
                        <div className="footer-content">
                                <p>© {new Date().getFullYear()} Movie Library. All Rights Reserved.</p>
                                <p>
                                        Made with ❤️ by <a href="https://github.com/abhishekdotapp" target="_blank" rel="noopener noreferrer">Mr Robot</a>
                                </p>
                        </div>
                </footer>
        );
}

export default Footer;
