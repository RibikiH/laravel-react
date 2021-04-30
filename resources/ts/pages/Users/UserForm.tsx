import React, {useState} from "react"
import {Label} from "../../components/Label";
import {InputText} from "../../components/Input";
import {userActions} from "../../actions";
import {useDispatch} from "react-redux";

const UserForm = () => {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setLoading(true);
        userActions.register(dispatch, name, email, password)
            .catch(error => {
                setErrors(error.errors);
                setLoading(false);
            });
    }

    return (
        <div className="md:grid md:grid-cols-6">
            <div className="mt-5 md:mt-5 md:col-start-2 md:col-span-4">
                <form action="#" method="POST" onSubmit={handleSubmit}>
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                            <div className="grid grid-cols-3 gap-6">
                                <div className="col-span-3 sm:col-span-2">
                                    <Label errors={errors} attribute={'name'} label={'Name'}/>
                                    <InputText errors={errors} attribute={'name'} value={name} setValue={setName}
                                               placeholder="Name"/>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-6">
                                <div className="col-span-3 sm:col-span-2">
                                    <Label errors={errors} attribute={'email'} label={'Email'}/>
                                    <InputText errors={errors} attribute={'email'} value={email} setValue={setEmail}
                                               placeholder="Email"/>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-6">
                                <div className="col-span-3 sm:col-span-2">
                                    <Label errors={errors} attribute={'password'} label={'Password'}/>
                                    <InputText errors={errors} attribute={'password'} value={password}
                                               setValue={setPassword} placeholder="Password" type="password"/>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600
                                     hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={loading}>
                                {loading ?
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                    strokeWidth="4"/>
                                            <path className="opacity-75" fill="currentColor"
                                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                                        </svg>
                                        Loading...
                                    </>
                                    : 'Save'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserForm;
