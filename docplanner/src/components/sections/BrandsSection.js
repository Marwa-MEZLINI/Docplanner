import React from 'react';
import { ReactComponent as ReactLogo5 } from './assets/logo-default-cz.svg';
import { ReactComponent as ReactLogo8 } from './assets/cliniccloud.svg';
import { ReactComponent as ReactLogo2 } from './assets/doctoralia.svg';
import { ReactComponent as ReactLogo4 } from './assets/doktortakvimi.svg';
import { ReactComponent as ReactLogo7 } from './assets/gipo.svg';
import { ReactComponent as ReactLogo9 } from './assets/jameda.svg';
import { ReactComponent as ReactLogo3 } from './assets/miodottore.svg';
import { ReactComponent as ReactLogo6 } from './assets/tuotempo.svg';
import { ReactComponent as ReactLogo1 } from './assets/znanylekarz.svg';

import classes from './BrandsSection.module.css';

function BrandsSection() {

    

    return (
        <section className={classes.brandsSection} >
            <h1 className={classes.title} >We are a global company with local culture</h1>
            <ul className={classes.brands} >
                <li className={classes.brand} >
                    <a href='#' >
                        <ReactLogo1 className={classes.logo} />
                    </a>
                </li>
                <li className={classes.brand}>
                    <a href='#' >
                        <ReactLogo2 className={classes.logo} />
                    </a>
                </li>
                <li className={classes.brand}>
                    <a href='#' >
                        <ReactLogo3 className={classes.logo} />
                    </a>
                </li>
                <li className={classes.brand}>
                    <a href='#' >
                        <ReactLogo4 className={classes.logo} />
                    </a>
                </li>
                <li className={classes.brand}>
                    <a href='#' >
                        <ReactLogo5 className={classes.logo} />
                    </a>
                </li>
                <li className={classes.brand}>
                    <a href='#' >
                        <ReactLogo6 />
                    </a>
                </li>
                <li className={classes.brand}>
                    <a href='#' >
                        <ReactLogo7 />
                    </a>
                </li>
                <li className={classes.brand}>
                    <a href='#' >
                        <ReactLogo8 />
                    </a>
                </li>
                <li className={classes.brand}>
                    <a href='#' >
                        <ReactLogo9 />
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default BrandsSection;