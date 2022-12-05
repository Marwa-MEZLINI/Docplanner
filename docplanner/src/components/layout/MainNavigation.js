import {classes} from MainNavigation.modules.scss

function MainNavigation() {
    return (
        <header className={classes.header} >
            <div className={classes.logo} >
                <a href="#"><img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" /></a>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#" >About us</a>
                    </li>
                    <li>
                        <a href="#" >Career</a>
                    </li>
                    <li>
                        <a href="#" >Departments</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;