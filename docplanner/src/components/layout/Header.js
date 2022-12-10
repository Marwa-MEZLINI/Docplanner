import classes from './Header.module.scss'

function Header(props) {


    return (
        <header className={classes.header} >
            <div className={classes.logo} >
                <a href="#"><img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" /></a>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#" style={{ color: '#00b39b' }} >About us</a>
                    </li>
                    <li>
                        <a href="#" style={{ color: '#747474' }} >Career</a>
                    </li>
                    <li>
                        <a href="#" style={{ color: '#747474' }} >Departments</a>
                    </li>
                    <li>
                        <a href='#' >
                            {props.title}
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;