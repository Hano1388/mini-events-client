import React, { useState } from 'react';

import { Session } from '../../api/session';
import { RouteComponentProps } from 'react-router-dom';

interface IProps extends RouteComponentProps<{}> {
    onSignIn: () => void;
}

export const SignInPage: React.FC<IProps> = (props) => {
    const [errors, setErrors] = useState<Array<string>>([]);

    const createSession = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const { currentTarget: form } = event;

        const fd = new FormData(form);
        const email = fd.get('email') as string;
        const password = fd.get('password') as string;
        Session.create({
            email,
            password
        }).then((data: any) => {
            if (data && data.error && data.error.status === 400) {
                const { message } = data.error;
                setErrors([message])
            } else {
                props.history.push('/');
                if (typeof props.onSignIn == 'function') {
                    props.onSignIn();
                }
            }
        });
    };

    return (
        <div className="SignInPage ui middle aligned center aligned grid">
            <div className="column">
                <h2 className="ui orange image header">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRe3Jm05YG2SaOumkVTnhc-0X-dHZrVwrJSNA&usqp=CAU" className="image" />
                    <div className="content">
                        Log-in to your account
                        </div>
                </h2>
                <form className="ui large form" onSubmit={createSession}>
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
                                <i className="user icon"></i>
                                <input type="email" name="email" id="email" placeholder="E-mail address" required />
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui left icon input">
                                <i className="lock icon"></i>
                                <input type="password" name="password" id="password" placeholder="Password" required />
                            </div>
                        </div>
                        <button className="ui fluid large orange submit button">Login</button>
                    </div>

                    <div className="ui error message"></div>

                </form>

                <div className="ui message">
                    New to us? <a href="/sign_up">Sign Up</a>
                </div>
            </div>
        </div>


    )
}