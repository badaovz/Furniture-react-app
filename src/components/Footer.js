import {follows} from '../utils/constants';

function Footer() {
  return (
    <div className='container_footer'>
        <section>
            <div className='footer'>
                <div className='footer__info'>
                    <h3 className='footer__title'>Infomation</h3>
                    <p>Web by ***nguyen</p>
                    <p>Code for fun</p>
                    <p>Fun no code</p>
                </div>
                <div className='footer__contact'>
                    <h3 className='footer__title'>My Contact</h3>
                    <p><span>SDT:</span> 0989 *** 807</p>
                    <p><span>Email:</span> d******endnv@gmail.com</p>
                    <p><span>Address:</span> *** phung ***</p>
                </div>
                <div className='footer__follows'>
                    <h3 className='footer__title'>Follows</h3>
                    {
                        follows.map(follow => {
                            let {id, icon, text, url} = follow;
                            return (
                                <a href={url} key={id} target='_blank' rel="noopener noreferrer"><span>{icon}</span> {text}</a>
                            )
                        })
                    }
                </div>
            </div>
        </section>
        <hr />
        <p className='footer__public'>© 2022 <span>FurnitureWeb</span> All rights reserved</p>
    </div>
  )
}

export default Footer;