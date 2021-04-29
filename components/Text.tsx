import TextI from '../interfaces/Text'
import styles from '../styles/Text.module.scss'

interface Props {
    text: TextI
}

export default function Text({ text }: Props) {
    return (
        <span className={styles.text}>
            <h3>{text.title}</h3>
            {text.paragraphs.map(paragraph => (
                <span>
                    {paragraph.subtitle && <h4>{paragraph.subtitle}</h4>}
                    {paragraph.text.map(text => (
                        <p>{text}</p>
                    ))}
                </span>
            ))}
        </span>
    )
}