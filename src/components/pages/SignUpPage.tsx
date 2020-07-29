import React, { useState } from 'react';

import { User } from '../../api/user';
import { RouteComponentProps } from 'react-router-dom';

export const SignUpPage: React.FC<RouteComponentProps> = (props) => {
    const [errors, setErrors] = useState<Array<string>>([]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const { currentTarget: form } = event;
        const fd = new FormData(form);

        const newUser = {
            first_name: fd.get("first_name") as string,
            last_name: fd.get("last_name") as string,
            address: fd.get("address") as string,
            date: fd.get("date") as string,
            email: fd.get("email") as string,
            password: fd.get("password") as string
        }

        User.create(newUser).then((res) => {
            if (res) {
                // check for errors then set errors in state using setErrors(error)
                // setErrors(['Email must exist', 'password must exist']);
                // depends on the structure of errors (I believe I have implemented it
                //  in key value pairs of field name and validation) thinking of implementing 
                //  a separate component just to handle form errors 

                // for handling Form Errors, I prefer setting up another component
                // and send all form errors to it not just this page

                // Ideally, with sign up, also sign the user in 
                // but right now the API is not creating a cookie 
                // on sign up
                // TODO: Add API support for sign in on sign up
                // Then pass down onSignUp prop from App component
                //  which is basically just updates App's currentUser state

                // if(typeof props.onSignUp === 'function') {
                //     props.onSignUp();
                // }

            } else {
                props.history.push("/sign_in");
            }
        })
    }

    return (

        <div className="SignInPage ui middle aligned center aligned grid">
            <div className="column">
                <h2 className="ui orange image header">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRe3Jm05YG2SaOumkVTnhc-0X-dHZrVwrJSNA&usqp=CAU" className="image" alt="Sign Up" />
                    <div className="content">
                        Create an Account
                        </div>
                </h2>
                <form className="ui large form" onSubmit={handleSubmit}>
                    {errors.length > 0 ? (
                        <div className="ui negative message">
                            <div className="header">Failed to Sign In</div>
                            <p>{errors.map(message => message).join(", ")}</p>
                        </div>
                    ) : (
                            ""
                        )}
                    <div className="ui stacked segment">
                        <div className="field">
                            <div className="ui left icon input">
                                <i className="user plus icon"></i>
                                <input type="text" name="first_name" id="first_name" placeholder="first_name" required />
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui left icon input">
                                <i className="user plus icon"></i>
                                <input type="text" name="last_name" id="last_name" placeholder="last_name" required />
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui left icon input">
                                <i className="user icon"></i>
                                <input type="email" name="email" id="email" placeholder="E-mail address" required />
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui left icon input">
                                <i className="address card icon"></i>
                                <input type="text" name="address" id="address" placeholder="address" required />
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui left icon input">
                                <i className="calendar alternate outline icon"></i>
                                <input type="date" name="date" id="date" placeholder="date" required />
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui left icon input">
                                <i className="lock icon"></i>
                                <input type="password" name="password" id="password" placeholder="Password" required />
                            </div>
                        </div>

                        <button className="ui fluid large orange submit button">Sign Up</button>
                    </div>

                    <div className="ui error message"></div>

                </form>

                <div className="ui message">
                    Already a User? <a href="/sign_in">Sign In</a>
                </div>
            </div>
        </div>
    );
}
