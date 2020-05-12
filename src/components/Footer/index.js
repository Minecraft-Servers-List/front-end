import React from 'react';

class Footer extends React.Component {
    render() {
        return <footer className="footer notranslate bg-kuro">
            <div className="container">
                <span className="float-left footer-text noselect">
                    This site (<a href="https://www.minecraftserverslist.net/" className="nounderline">minecraftserverslist.net</a>) is part of the <a href="https://www.glaucus.net" target="_blank" className="nounderline"><img height="19px" src="https://www.glaucus.net/assets/img/logo-2019.png" /> Glaucus Network</a>
                </span>
                <span className="float-right footer-text noselect">
                    <a target="_blank" className="nounderline link-withe" href="https://www.minecraftserverslist.net/terms">Terms, Info &amp; Privacy</a>
                </span>
            </div>
        </footer>;
    }
}

export default Footer;