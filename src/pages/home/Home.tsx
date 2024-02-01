interface CardProdutoProps {
    imgUrl: string;
    nomeProduto: string;
    descricao: string;
}

const CardProduto: React.FC<CardProdutoProps> = ({ imgUrl, nomeProduto, descricao }) => {
    return (
        <div className="conteiner border flex flex-col rounded-2xl overflow-hidden justify-between">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <img src={imgUrl} alt={nomeProduto} className="w-full h-32 object-cover mb-4" />
                <h2 className="text-lg font-semibold mb-2">{nomeProduto}</h2>
                <p className="text-gray-700">{descricao}</p>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full">Comprar</button>
            </div>
        </div>
    );
};

function Home() {
    return (
        <>
            <div>
                <h2 className="container text-5xl font-bold mb-4 text-start p-[50px]">Lista de Produtos: </h2>
            </div>
            <div className="flex justify-center w-full my-4">
                <div className=" flex flex-col">


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 p-[50px]">
                        
                        <CardProduto
                            imgUrl={"https://cdn.ultrafarma.com.br/static/produtos/804460/medium-637505687932037880-804460_2.png"}
                            nomeProduto={"Ibuprofeno Cápsula 400mg"}
                            descricao={"1"}
                        />
                        <CardProduto
                            imgUrl={"https://paguemenos.vtexassets.com/arquivos/ids/202814-800-auto?v=636584565675000000&width=800&height=auto&aspect=true"}
                            nomeProduto={"Losartana Potássica"}
                            descricao={"2"}
                        />
                        <CardProduto
                            imgUrl={"https://cdn.ultrafarma.com.br/static/produtos/794837/medium-637522102704345666-794837.png"}
                            nomeProduto={"Acetato de Hidrocortisona"}
                            descricao={"3"}
                        />
                        <CardProduto
                            imgUrl={"https://drogariasp.vteximg.com.br/arquivos/ids/941129-500-500/189812---acnezil-gel-5-cimed-20g-1.jpg?v=638270181670130000"}
                            nomeProduto={"Acnezil Gel 5% Cimed 20g"}
                            descricao={"4"}
                        />
                    </div>
                </div>
            </div>

        </>

    )
}

export default Home