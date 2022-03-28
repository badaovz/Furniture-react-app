function Contact() {
    return (
        <div className='contact'>
            <section>
                <h3 className='contact__title'>
                    Join our newsletter and get 20% off
                </h3>
                    
                <div className='contact__content'>
                    <p className='contact__content__text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Placeat sint unde quaerat ratione soluta veniam provident 
                        adipisci cumque eveniet tempore?
                    </p>
                    <form className='contact__content__form'>
                        <input 
                            className='contact__content__form__input'
                            type='email'
                            placeholder='Enter email'
                        />
                        <button className='contact__content__form__btn '>subscribe</button>
                    </form>
                </div>  
            </section>
        </div>
    )
}

export default Contact;