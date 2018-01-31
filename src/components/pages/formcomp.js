import React, { Component } from 'react';

class FormComp extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h3>Some Main Content Here</h3>
                <br />
                <form>

                    <div className="messages"></div>

                    <div className="controls">

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Firstname *</label>
                                    <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." />
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Lastname *</label>
                                    <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." />
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Email *</label>
                                    <input id="form_email" type="email" name="email" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." />
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Please enter your phone" />
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Message *</label>
                                    <textarea id="form_message" name="message" className="form-control" placeholder="Message for me *" rows="4" required="required" data-error="Please,leave us a message."></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-12">
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <p>Blurb or  note that something isn't working</p>
                            </div>
                        </div>
                    </div>

                </form>
                <button type="button" className="btn btn-danger">DEMO</button>
            </div>
        );
    }
}

export default FormComp;