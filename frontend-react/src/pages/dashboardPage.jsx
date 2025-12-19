/* dashboardPage.jsx (O Quarto VIP / Área Restrita): É o lugar onde o conteúdo real do site acontece. Só chega aqui quem passou pelo Vigia e provou que está autenticado. */

function DashboardPage() { //nome de componentes/funções em React deve-se começar com letras maiúsculas
    return (
        <div className="min-h-screen bg-indigo-50 p-8">
            <h1 className="text-4x1 font-extrabold text-indigo-800 mb-6">
                🚀 Dashboard (Área Protegida)
            </h1>
            <p className="text-x1 text-green-700 font-semibold">
                ✅ ROTA PROTEGIDA TESTADA! ✅
            </p>
            <div className="mt-4 p-4 bg-white shadow-md roundeb-lg">
                <p>teste</p>
                <p>testes</p>
            </div>
        </div>
    ); 
} 

export default DashboardPage;  