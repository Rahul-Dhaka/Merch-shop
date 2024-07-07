import React, { useState } from 'react'

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [showForgotPasswordMessage, setShowForgotPasswordMessage] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you would typically handle form submission (e.g., API call to login user)
        console.log('Form submitted:', formData);
        // Reset form fields after submission
        setFormData({
            email: '',
            password: ''
        });
    };

    const handleForgotPassword = () => {
        setShowForgotPasswordMessage(true);
    };


    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">Log In to Your Account</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                autoComplete="email"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                autoComplete="current-password"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            {/* <div className="flex items-center">
                                <input
                                    id="rememberMe"
                                    name="rememberMe"
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div> */}

                            <div className="text-sm">
                                <button
                                    type="button"
                                    onClick={handleForgotPassword}
                                    className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none"
                                >
                                    Forgot your password?
                                </button>
                            </div>
                        </div>
                        {showForgotPasswordMessage && (
                            <p className="mt-2 text-sm text-gray-600">
                                Get in touch with us at <a href="mailto:help@example.com" className="text-indigo-600 hover:text-indigo-500">help@example.com</a> and we will help you recover your account.
                            </p>
                        )}
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Log In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login