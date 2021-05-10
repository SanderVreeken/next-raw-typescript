import ServiceT from '../types/Service';

interface MessageI {
    company?: string
    email?: string
    message?: string
    name?: string
    service?: ServiceT
    telephone?: string
}

export default MessageI