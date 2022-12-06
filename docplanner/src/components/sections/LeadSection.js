import classes from './LeadSection.module.css'

function LeadSection() {
    return (
        <div className={classes.lead}>
            <div className={classes.logo}>
                <img src="https://www.docplanner.com/img/sygnet.png" />
            </div>
            <div className={classes.title} >
                <h3>Making the healthcare experience more human</h3>
            </div>
            <div className={classes.text}>
                <p>We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.
                    We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.</p>
            </div>
        </div>
    )
}

export default LeadSection;