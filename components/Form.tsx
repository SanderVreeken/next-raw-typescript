import styles from '../styles/Form.module.scss'

interface Props {
    fields: any
    handleChange: (...args: any) => void
    onClick: (...args: any) => void
}

export default function Form({ fields, handleChange, onClick }: Props) {
    const renderForm = () => {
        return fields.map(field => {
            switch(field.element) {
                case 'button':
                    return <button onClick={(event) => onClick(event)}>{field.title}</button>
                case 'input':
                    return <input onChange={(event) => handleChange(field.name, event.target.value)} name={field.name} placeholder={field.placeholder}></input>
                case 'select':
                    return (
                        <select onChange={(event) => handleChange(field.name, event.target.value)} name={field.name}>
                            {field.options.map(option => (
                                <option value={option.value}>{option.title}</option>
                            ))}
                        </select>
                    )
                case 'textarea':
                  return <textarea onChange={(event) => handleChange(field.name, event.target.value)} name={field.name} placeholder={field.placeholder}></textarea>
            }
        })
    }

    return (
        <form className={styles.form}>
            {renderForm()}
        </form>
    )
}