import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../logo/logo.png'; // Assuming logo is available in the logo folder

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Mock login logic (assuming login is successful)
        navigate('/phoneNumber'); // Redirect to Phone Number page after clicking "Sign In"
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-300 via-pink-200 to-white">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
                {/* Logo */}
                <div className="flex justify-center">
                    <img src={logo} alt="Saarthi Logo" className="w-auto h-16" />
                </div>

                {/* Sign In Title */}
                <h2 className="text-3xl font-semibold text-center text-gray-800">Sign in to Saarthi</h2>

                {/* Input Fields */}
                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            required
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            required
                        />
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between">
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="text-sm">Remember me</span>
                        </label>
                        <a href="/" className="text-sm text-orange-500">Forgot Password?</a>
                    </div>

                    {/* Sign In Button */}
                    <button
                        type="submit"
                        className="w-full py-3 text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                        Sign in
                    </button>
                </form>

                {/* Divider for alternative login methods */}
                <div className="flex items-center justify-center my-4">
                    <span className="w-1/4 border-t"></span>
                    <span className="px-2 text-sm text-gray-500">Or login with</span>
                    <span className="w-1/4 border-t"></span>
                </div>

                {/* Social Login Buttons */}
                <div className="flex space-x-4">
                    <button className="flex items-center justify-center w-full py-2 space-x-2 border rounded-lg">
                        <img src="/google-icon.svg" alt="Google" className="w-6 h-6" />
                        <span>Google</span>
                    </button>
                    <button className="flex items-center justify-center w-full py-2 space-x-2 border rounded-lg">
                        <img src="/apple-icon.svg" alt="Apple" className="w-6 h-6" />
                        <span>Apple</span>
                    </button>
                </div>

                {/* Sign Up Link */}
                <div className="mt-4 text-center">
                    <p className="text-sm">
                        Don’t have an account?
                        <a href="/signup" className="text-orange-500"> Sign up now</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
