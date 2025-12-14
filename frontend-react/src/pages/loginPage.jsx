import React from "react";

//o contéudo que o roteador vai exibir pra rota /login
function LoginPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-8 bg-white shadown-x1 roundeb-lg w-full max-w-sm">
                <h1 className="text-3x1 fon-bold mb-6 tex-center text-indigo-700">Acessar Universe</h1>
                <p className="text-center text-lg text-red-500 font-semibold">
                🎉 ROTA DE LOGIN FUNCIONANDO! 🎉
                </p>
                <div className="mt-8 text-center text-gray-600">
                    <p>Página de login</p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;