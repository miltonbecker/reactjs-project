'use strict';
const React = require('react');

class ContactContent extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1'>
                        <p>Want to get in touch with me? Fill out the form below to send me a message and I will try to get back to you within 24 hours!</p>
                        <form id='contactForm' noValidate>

                            <label id='misc-label'>Please leave blank:</label>
                            <input type='text' id='misc' name='misc' />

                            <div className='row control-group'>
                                <div className='form-group col-xs-12 floating-label-form-group controls'>
                                    <label>Name</label>
                                    <input type='text' className='form-control' placeholder='Name' id='name' name='name' required data-validation-required-message='Please enter your name.' maxLength='100' />
                                    <p className='help-block text-danger'></p>
                                </div>
                            </div>
                            <div className='row control-group'>
                                <div className='form-group col-xs-12 floating-label-form-group controls'>
                                    <label>Email Address</label>
                                    <input type='email' className='form-control' placeholder='Email Address' id='email' name='email' required data-validation-required-message='Please enter your email address.' maxLength='100' />
                                    <p className='help-block text-danger'></p>
                                </div>
                            </div>
                            <div className='row control-group'>
                                <div className='form-group col-xs-12 floating-label-form-group controls'>
                                    <label>Phone Number</label>
                                    <input type='tel' className='form-control' placeholder='Phone Number' id='phone' name='phone' maxLength='100' />
                                    <p className='help-block text-danger'></p>
                                </div>
                            </div>
                            <div className='row control-group'>
                                <div className='form-group col-xs-12 floating-label-form-group controls'>
                                    <label>Message</label>
                                    <textarea rows='5' className='form-control' placeholder='Message' id='message' name='message' required data-validation-required-message='Please enter a message.' maxLength='1000' data-validation-maxlength-message='You&apos;ve exceeded the limit of 1000 characters.'></textarea>
                                    <p className='help-block text-danger'></p>
                                </div>
                            </div>
                            <br />
                            <div id='result'></div>
                            <div className='row'>
                                <div className='form-group col-xs-12'>
                                    <button type='submit' className='btn btn-primary' id='submit' data-title='Send'>Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = ContactContent;