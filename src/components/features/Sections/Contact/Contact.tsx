"use client"

import { HTMLAttributes } from 'react';
import styles from './Contact.module.scss';
import Form, { GenerateFormProps } from '../../Form/Form';
import { z } from 'zod';
import { toast } from 'sonner';

const fields: GenerateFormProps['fields'] = {
    firstName : {
        label: "First Name",
        type: "text",
        placeholder: "John",
        schema: z
            .string()
            .min(2, { message: "Le prénom doit contenir au moins 2 caractères" })
            .max(50, { message: "Le prénom doit contenir au maximum 50 caractères" })
        ,
    },
    lastName : {
        label: "Last Name",
        type: "text",
        placeholder: "Dupont",
        schema: z
            .string()
            .min(2, { message: "Le nom doit contenir au moins 2 caractères" })
            .max(50, { message: "Le nom doit contenir au maximum 50 caractères" })
        ,
    },
    email: {
        label: "Email",
        type: "email",
        placeholder: "john.dupont@gmail.com",
        schema: z
            .string()
            .email({ message: "L'email est invalide" })
    },
    message: {
        label: "Message",
        type: "textarea",
        placeholder: "Bonjour, je voulais vous dire que...",
        schema: z
            .string()
            .min(10, { message: "Le message doit contenir au moins 10 caractères" })
            .max(500, { message: "Le message doit contenir au maximum 500 caractères" })
    }
}


type ContactProps = HTMLAttributes<HTMLDivElement> & {
    
}

const Contact = ({ className, ...props } : ContactProps) => {

    const handleSubmit = async(data: any) => {
        const body = data as { firstName: string, lastName: string, email: string, message: string };
        try {
            const response  = await fetch("https://eo1lh6bpdo5mrzh.m.pipedream.net/", {
                method: 'POST',
                body: JSON.stringify({
                    ...body,
                    date: new Date().toISOString()
                }),
            })
            response.ok 
                ? toast.success("Votre message a bien été envoyé") 
                : toast.error("Une erreur est survenue lors de l'envoi du message");
            
        } catch(err) {
            toast.error("Une erreur est survenue lors de l'envoi du message");
        }
    }


    return (
        <section className={styles.contact}>
            <h1 className={styles.title}>Contactez moi</h1>
            <div className={styles.form}>
                <Form 
                    fields={fields} 
                    onSubmit={handleSubmit} 
                />  
            </div>
        </section>
    );
};

export default Contact;