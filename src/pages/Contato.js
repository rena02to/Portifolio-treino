import {Formik, Form, Field, ErrorMessage} from 'formik';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import * as Yup from 'yup';
import style from './Contato.module.css';
import Copiar from './../layout/Copiar';

function Contato(){
    const [sendEmail, setSendEmail] = useState(false);
    const [enviado, setEnviado] = useState(false);

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Campo obrigatótio!').min(3, 'Deve conter pelo menos 3 letras!').matches(/^[A-Za-z ]+$/, 'Apenas letras são permitidas!'),
        email: Yup.string().email('Formato de e-mail inválido!').required('Campo obrigatório!'),
        assunto: Yup.string().required('Campo obrigatório!').min(5, 'Deve conter pelo menos 5 caracteres!'),
        conteudo: Yup.string().required('Campo obrigatório!').min(10, 'Deve conter pelo menos 10 caracteres!'),
    });

    const initialValues = {
        name: '',
        email: '',
        assunto: '',
        conteudo: '',
    }

    const fecharPoupUp = () => {
        document.body.classList.remove(style.poup_upAberto);
        setSendEmail(false);
    }

    const handleSubmit = (values) => {
        const serviceId = 'gmail_rena0to';
        const templateId = 'template_8n9xrzf';
        const userId = 'eviXOsPjXHdpw_97H';

        const emailData = {
            from_name: values.name,
            from_email: values.email,
            subject: values.assunto,
            message: values.conteudo,
        }

        emailjs.send(serviceId, templateId, emailData, userId)
            .then((response) => {
                values.name = '';
                values.email = '';
                values.assunto = '';
                values.conteudo = '';
                setEnviado(true);
            })
            .catch((error) => {setEnviado(false);});
        
        
        document.body.classList.add(style.poup_upAberto);
        setSendEmail(true);
    }

    return(
            <div id="contato" className={style.contato}>
                <h1>Contate-me</h1>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    {({ touched, errors }) => (
                        <Form>
                            <Field className={errors.name && style.errorName} name='name' type='text' placeholder="Seu nome e sobrenome"/>
                            <ErrorMessage name='name' component='div' className={style.error}/>
                            
                            <Field className={style.email} name='email' type='email' placeholder="Seu e-mail"/>
                            <ErrorMessage name='email' component='div' className={style.error}/>
                            
                            <Field className={style.assunto} name='assunto' type='text' placeholder="Assunto"/>
                            <ErrorMessage name='assunto' component='div' className={style.error}/>
                            
                            <Field className={style.conteudo} name='conteudo' as='textarea' placeholder="Seu texto..."/>
                            <ErrorMessage name='conteudo' component='div' className={style.error}/>
                            
                            <button type='submit'>Enviar</button>
                        </Form>
                    )}
                </Formik>
                <h2>Ou me mande um e-mail</h2>
                <Copiar />
                {sendEmail && (
                    <div className={style.main}>
                        <div className={style.poup_up}>
                            {enviado ? (
                                <h1 className={style.enviado}>O e-mail foi enviado com sucesso!</h1>
                            ) : (
                                <h1 className={style.naoEnviado}>Falha ao enviar o e-mail!</h1>
                            )}
                            <button className={style.ok} onClick={fecharPoupUp}>Feito</button>
                        </div>
                    </div>
                )}
        </div>
    );
}

export default Contato;