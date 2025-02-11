import { result, JSXComponent } from 'app/vedro';
import React, {
    ChangeEvent,
    FocusEvent,
    FormEvent,
    FormEventHandler,
    useRef,
    useState
} from 'react';

const AboutPage = () => {
    return (
        <div>
            <JSXComponent />
            {result}
        </div>
    );
};
