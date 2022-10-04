import { useState } from 'react';


export default function Experimento() {
/*
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object. fromEntries (formData);
        console.log('*** handleSubmit', data);
};

    return (
        <div classNameName='Background_Form'>
            <form onSubmit={handleSubmit}>
                <input type="text" name="titulo" placeholder='Titulo'/>
                <textarea id='Descricao' name="descricao" placeholder='Descricao'></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
      );
*/

return (
    <div className="Background-Form">	

    <h2 className='form-Titulo'>Experimentos</h2>        

    <form className="form-padrao">

        <div className="row justify-content-center mt-4">
            <div className="form-group col-sm-8">
                <input type="text" name="titulo" placeholder='Titulo'/>
                <textarea id="listaInstituicoesCafe" className="form-control autocomplete input-lg" data-placeholder="Selecione uma instituição" ></textarea>    
                <textarea id='Descricao' name="descricao" placeholder='Descrição'></textarea>
                <button id="salvar" type="button" className="w-120"> Enviar </button>
            </div>
        </div>

    
    </form>

</div>
    )  
}

