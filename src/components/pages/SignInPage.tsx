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
        <div className="ui clearing segment Page">
            <h1 className="ui center aligned header">Sign In</h1>
            <form className="ui large form" onSubmit={createSession}>
                {errors.length > 0 ? (
                    <div className="ui negative message">
                        <div className="header">Failed to Sign In</div>
                        <p>{errors.map(message => message).join(", ")}</p>
                    </div>
                ) : (
                        ""
                    )}
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required />
                </div>

                <input
                    className="ui right floated orange button"
                    type="submit"
                    value="Sign In"
                />
            </form>
        </div>
    )
}