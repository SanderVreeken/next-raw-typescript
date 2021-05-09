import Footer from '../components/Footer'
import Form from '../components/Form'
import Header from '../components/Header'
import Hero from '../components/Hero'
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
    name: 'phone',
    placeholder: '0612345678',
    type: 'tel'
}, {
    element: 'input',
    name: 'email',
    placeholder: 'you@domain.com',
    type: 'email'
}, {
    element: 'select',
    name: 'topic',
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
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <Hero />
        <span>
            <h2>Contact Us</h2>
            <p>Interested in one of our services and want to know more? Feel free to get in touch with us via <a href='mailto:info@revenueatwork.com'>e-mail</a>, <a href='tel:+31612480089'>phone</a> or via the form below.</p>
            <Form fields={fields} />
        </span>
      </main>

      <Footer />
    </div>
  )
}
