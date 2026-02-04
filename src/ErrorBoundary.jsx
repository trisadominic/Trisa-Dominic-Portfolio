import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-red-900 text-white p-10 font-mono">
                    <h1 className="text-3xl font-bold mb-4">Something went wrong.</h1>
                    <div className="bg-black p-4 rounded mb-4 overflow-auto">
                        <h2 className="text-xl text-red-400 mb-2">Error:</h2>
                        <pre className="whitespace-pre-wrap">{this.state.error && this.state.error.toString()}</pre>
                    </div>
                    <div className="bg-black p-4 rounded overflow-auto">
                        <h2 className="text-xl text-yellow-400 mb-2">Component Stack:</h2>
                        <pre className="whitespace-pre-wrap">{this.state.errorInfo && this.state.errorInfo.componentStack}</pre>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
