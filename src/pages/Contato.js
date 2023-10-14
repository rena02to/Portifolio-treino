import {Formik, Form, Field, ErrorMessage} from 'formik';
import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import * as Yup from 'yup';
import style from './Contato.module.css';
import Copiar from './../layout/Copiar';
import carnivorusPlaint from './../imagens/carnivorous-plant.png';

function Contato(){
    const [sendEmail, setSendEmail] = useState(false);
    const [enviado, setEnviado] = useState(false);
    const [enviando, setEnviando] = useState(false);

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Campo obrigatótio!').min(3, 'Deve conter pelo menos 3 letras!').matches(/^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/, 'Apenas letras são permitidas!'),
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

    const handleSubmit = (values, {setTouched}) => {
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
                setTouched({ name: false, email: false, assunto: false, conteudo: false });
            })
            .catch((error) => {setEnviado(false);});
        
        
        document.body.classList.add(style.poup_upAberto);
        setSendEmail(true);
        setEnviando(true);
    }

    useEffect(() => {
        if (enviando) {
          setTimeout(() => {
            setEnviando(false);
          }, 3000);
        }
    }, [enviando]);

    return(
        <div id="contato" className={style.contato}>
            <div className={style.titulo}>
                <img alt='carnivorus plaint' className={style.carnivorusPlaint} src={carnivorusPlaint} />
                <h1>Contate-me</h1>
                <img alt='carnivorus plaint' className={style.carnivorusPlaint} src={carnivorusPlaint} />
            </div>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({touched, setTouched}) => (
                    <Form>
                        <Field className={style.name} name='name' type='text' placeholder="Seu nome e sobrenome"/>
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
                        {enviando ? (
                            <h1 className={style.enviando}>Aguarde, sua mensagem está sendo enviada...</h1>
                        ) : (
                            enviado ? (
                                <>
                                    <h1 className={style.enviado}>Mensagem enviada com sucesso!</h1>
                                    <button className={style.ok} onClick={fecharPoupUp}>Feito</button>
                                </>
                            ) : (
                                <>
                                    <h1 className={style.naoEnviado}>Falha ao enviar mensagem!</h1>
                                    <button className={style.ok} onClick={fecharPoupUp}>Feito</button>
                                </>
                            )
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Contato;