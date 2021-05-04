import TextI from '../interfaces/Text'
import styles from '../styles/Text.module.scss'

interface Props {
    text: TextI
}

export default function Text({ text }: Props) {
    return (
        <span className={styles.text}>
            <span>
                <h3>{text.title}</h3>
                {text.paragraphs.map(paragraph => (
                    <span>
                        {paragraph.subtitle && <h4>{paragraph.subtitle}</h4>}
                        {paragraph.text && paragraph.text.map(text => (
                            <p>{text}</p>
                        ))}
                        {paragraph.list && (
                            <ul>
                                {paragraph.list.map(item => <li>{item}</li>)}
                            </ul>
                        )}
                    </span>
                ))}
            </span>
        </span>
    )
}