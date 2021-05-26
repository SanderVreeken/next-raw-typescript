import { useRef, useState } from 'react'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { createMessage } from '../graphql/fetchers/messages'
import { CREATE_MESSAGE_QUERY } from '../graphql/queries/messages'
import MessageI from '../interfaces/Message'
import styles from '../styles/Contact.module.scss'

const fields = [{
    element: 'input',
    name: 'company',
    placeholder: 'company',
    type: 'text'
}, {
    element: 'input',
    name: 'name',
    placeholder: 'name',
    type: 'text'
}, {
    element: 'input',
    name: 'telephone',
    placeholder: '0612345678',
    type: 'tel'
}, {
    element: 'input',
    name: 'email',
    placeholder: 'you@domain.com',
    type: 'email'
}, {
    element: 'select',
    name: 'service',
    options: [{
        title: 'Revenue Management Consulting',
        value: 'consulting'
    }, {
        title: 'Interim Revenue Management',
        value: 'interim'
    }, {
        title: 'Outsourced Revenue Management',
        value: 'outsourced'
    }, {
        title: 'Other',
        value: 'other'
    }],
    type: 'email'
}, {
    element: 'textarea',
    name: 'message',
    placeholder: 'message',
}, {
    element: 'button',
    title: 'Send',
}]

export default function Contact() {
    const [response, setResponse] = useState(null)
    const [values, setValues] = useState<MessageI>({
        service: 'consulting'
    })

    const handleChange = (key: string, value: any) => {
        setValues({
            ...values,
            [key]: value
        })
    }

    const onClick = async (event: MouseEvent) => {
        event.preventDefault()
        try {
            const backendResponse = await createMessage(CREATE_MESSAGE_QUERY, { message: values })
            if (backendResponse) {
                // TODO: Ensure the user receives a positive response.
                setResponse(true)
            }
        } catch(error) {
            setResponse(error.response.errors[0].message)
        }
    }

    const renderResponse = () => {
        if (response === null) {
            return null
        } else if (typeof response === 'string') {
            return <h3 style={{
                color: 'red'
            }}>{response}</h3>
        } else {
            return <h3 style={{
                color: 'green'
            }}>{'Message sent succesfully!'}</h3>
        }
    }

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <Header />
                <Hero />
                {renderResponse()}
                <span>
                    <h2>Contact Us</h2>
                    <p>Interested in one of our services and want to know more? Feel free to get in touch with us via <a href='mailto:info@revenueatwork.com'>e-mail</a>, <a href='tel:+31612480089'>phone</a> or via the form below.</p>
                    <Form fields={fields} handleChange={handleChange} onClick={onClick} />
                </span>
            </main>

            <Footer />
        </div>
    )
}
