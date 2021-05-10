import styles from '../styles/Introduction.module.scss'

export default function Introduction() {
    const paragraphs = [
        'With over 15 years of experience within the hospitality revenue management industry, varying from small individual hotels to large chain hotels, limited service hotels to full service luxury hotels & resorts, within various countries and cities, ‘Revenue at work’ has the expertise to increase your hotels’ performance.',
        'Whether that is through means of our Revenue Management Consulting program, Interim Revenue Management or Outsourced Revenue Management services, we deliver optimized revenue performance and bottom line profits through effective strategies that outperform the competition.',
        'Interested in increasing your hotels’ performance? Contact us here or find more information on our different services below.'
    ]

    return (
        <span className={styles.introduction}>
            <span>
                <span>
                    {paragraphs.map(text => <p>{text}</p>)}
                </span>
                {/* <Image height={536} src='/assets/graphs.jpg' width={565} /> */}
            </span>
        </span>
    )
}



