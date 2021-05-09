import styles from '../styles/Form.module.scss'

interface Props {
    fields: any
}

export default function Form({ fields }: Props) {
    const renderForm = () => {
        return fields.map(field => {
            switch(field.element) {
                case 'button':
                    return <button>{field.title}</button>
                case 'input':
                    return <input name={field.name} placeholder={field.placeholder}></input>
                case 'select':
                    return (
                        <select name={field.name}>
                            {field.options.map(option => (
                                <option value={option.value}>{option.title}</option>
                            ))}
                        </select>
                    )
                case 'textarea':
                  return <textarea name={field.name} placeholder={field.placeholder}></textarea>
            }
        })
    }

    return (
        <form className={styles.form}>
            {renderForm()}
        </form>
    )
}