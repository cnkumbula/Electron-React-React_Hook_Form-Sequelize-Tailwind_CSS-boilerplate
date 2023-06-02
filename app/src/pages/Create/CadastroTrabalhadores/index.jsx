import { UserPlus, CheckCircle, XCircle, Backspace } from 'phosphor-react';
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;



export function CadastroTrabalhadores() {



    const { register, handleSubmit, reset , formState: {errors} } = useForm();
   
    const [trabalhadorNome, setNome] = useState('');
    const [trabalhadorApelido, setApelido] = useState('');
    const [trabalhadorGenero, setSelected] = useState('');
    const [trabalhadorDataNascimento, setDataNascimento] = useState('');
    const [trabalhadorAgrgadoFamiliar, setAgregadoFamiliar] = useState('');
    const [trabalhadorContactoPrincipal, setContactoPrincipal] = useState('');
    const [trabalhadorContactoAlternativo, setContactoAlternativo] = useState('');
    const [trabalhadorEmail, setEmail] = useState('');
    const [trabalhadorEndereco, setEndereco] = useState('');
    const [trabalhadorCargo, setCargo] = useState('');
    const [trabalhadorSalario, setSalario] = useState('');
    const [trabalhadorDataAdmissao, setDataAdmissao] = useState('');
    const [trabalhadorStaus, setSelectedEstado] = useState('Activo');


    const onSubmit = () => {

        const data = {
            trabalhadorNome,
            trabalhadorApelido,
            trabalhadorGenero,
            trabalhadorDataNascimento,
            trabalhadorAgrgadoFamiliar,
            trabalhadorContactoPrincipal,
            trabalhadorContactoAlternativo,
            trabalhadorEmail,
            trabalhadorEndereco,
            trabalhadorCargo,
            trabalhadorSalario,
            trabalhadorDataAdmissao,
            trabalhadorStaus
        }
            //ipcRenderer.send('cadastrar-trabalhador', data);
            console.log(data);
            clean();
            reset();
            window.location.reload();
   
    } 


    const clean = () => {

        document.getElementById("trabalhador_form").reset();
        setNome('');
        setApelido('');
        setSelected('');
        setAgregadoFamiliar('');
        setContactoPrincipal('');
        setContactoAlternativo('');
        setEmail('');
        setEndereco('');
        setCargo('');
        setSalario('');
        setSelectedEstado('');
          
    }
  
    function handleCancel(){
       
        clean();
    }
    
    const today = new Date().toISOString().slice(0, 10);

   
    return (
        <div className="flex flex-col items-center mt-2">
            <UserPlus size={48} color="#0c4a6e"/>
            <span className="text-base text-sky-900 font-medium flex item gap-2">
                Cadastro de Trabalhadores
            </span>

            <div className="p-8 bg-neutral-50 border border-zinc-200 rounded mt-1">

                <form id='trabalhador_form' onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 w-full">

                    <div className="columns-2">
                        <div> 
                            <span className="block text-sm font-medium text-slate-700 mb-1">Nome.:</span>
                            <input
                                {...register("nome", { required: true })}
                                id='trabalhadorNome'
                                className="border-zinc-400 border rounded px-5 h-10 hover:border-sky-900 focus:border-sky-900 focus:outline-none focus:ring-1 focus:ring-sky-900 focus:ring-opacity-50"
                                type="text" 
                                placeholder="Digite o nome..."
                                onChange={(e) => setNome(e.target.value)}
                            />
                            {errors.nome?.type === 'required' && <span className="block text-sm font-thin text-red-700 mb-1">*Obrigat&oacute;rio</span>}
                        </div>

                        <div>
                            <span className="block text-sm font-medium text-slate-700 mb-1">Apelido.:</span>
                            <input
                                {...register("apelido", { required: true })}
                                id='trabalhadorApelido'
                                className="border-zinc-400 border rounded px-5 h-10 hover:border-sky-900 focus:border-sky-900 focus:outline-none focus:ring-1 focus:ring-sky-900 focus:ring-opacity-50"
                                type="text" 
                                placeholder="Digite o apelido..."
                                onChange={(e) => setApelido(e.target.value)}
                            />
                            {errors.apelido?.type === 'required' && <span className="block text-sm font-thin text-red-700 mb-1">*Obrigat&oacute;rio</span>}
                        </div>
                    </div>

                    <span className="block text-sm font-medium text-slate-700 mb-1">Genero.:</span>

                    <div className="columns-2">
                        <div id="genero_trabalhador_group">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input"
                                    {...register("genero", { required: true })}
                                    type="radio" 
                                    name="genero_trabalhador" 
                                    id="genero_trab_m"
                                    value="M"
                                    checked={trabalhadorGenero === 'M'}
                                    onChange={(e) => setSelected(e.target.value)}
                                />
                                <label className="text-sm font-medium text-slate-700 px-1">Masculino</label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input className="form-check-input"
                                    {...register("genero", { required: true })}
                                    type="radio" 
                                    name="genero_trabalhador" 
                                    id="genero_trab_f"
                                    value="F" 
                                    checked={trabalhadorGenero === 'F'}
                                    onChange={(e) => setSelected(e.target.value)}
                                />
                                <label className="text-sm font-medium text-slate-700 px-1">Feminino</label>
                            </div>
        
                        </div>
                    </div>
                    {errors.genero?.type === 'required' && <span className="block text-sm font-thin text-red-700 mb-1">*Obrigat&oacute;rio</span>}

                    <div className="columns-2">
                        <div>
                            <span className="block text-sm font-medium text-slate-700 mb-1">Data de nascimento.:</span>
                            <input
                                {...register("dataNascimento", { required: true})}
                                id='trabalhadorDataNascimento'
                                className="border-zinc-400 border rounded px-5 h-10 hover:border-sky-900 focus:border-sky-900 focus:outline-none focus:ring-1 focus:ring-sky-900 focus:ring-opacity-50"
                                type="date"
                                onChange={(e) => setDataNascimento(e.target.value)}
                            />
                        </div>
                        {errors.dataNascimento?.type === 'required' && <span className="block text-sm font-thin text-red-700 mb-1">*Obrigat&oacute;rio</span>}

                        <div>
                            <span className="block text-sm font-medium text-slate-700 mb-1">Agregado familiar.:</span>
                            <input
                                {...register("agragado", { required: true, min: 0})}
                                id='trabalhadorAgrgadoFamiliar'
                                className="border-zinc-400 border rounded px-5 h-10 hover:border-sky-900 focus:border-sky-900 focus:outline-none focus:ring-1 focus:ring-sky-900 focus:ring-opacity-50"
                                type="number"
                                placeholder="Nr do agregado familiar..."
                                onChange={(e) => setAgregadoFamiliar(e.target.value)}
                            />
                        </div>
                    </div>
                    {errors.agragado?.type === 'required' && <span className="block text-sm font-thin text-red-700 mb-1">*Obrigat&oacute;rio</span>}
                    {errors.agragado?.type === 'min' && <span className="block text-sm font-thin text-red-700 mb-1">*Valores abaixo de 0 n&atilde;o s&atilde;o permitidos</span>}

                    <div className="columns-2">
                        <div> 
                            <span className="block text-sm font-medium text-slate-700 mb-1">Contacto principal.:</span>
                            <input
                                {...register("contactoPrimario", { required: true, maxLength:9, pattern: /^8[2-7][0-9]{7}/i})}
                                id='trabalhadorContactoPrincipal'
                                className="border-zinc-400 border rounded px-5 h-10 hover:border-sky-900 focus:border-sky-900 focus:outline-none focus:ring-1 focus:ring-sky-900 focus:ring-opacity-50"
                                type="text" 
                                placeholder="Contacto principal..."
                                onChange={(e) => setContactoPrincipal(e.target.value)}
                            />
                        </div>
                        {errors.contactoPrimario?.type === 'required' && <span className="block text-sm font-thin text-red-700 mb-1">*Obrigat&oacute;rio</span>}
                        {errors.contactoPrimario?.type === 'pattern' && <span className="block text-sm font-thin text-red-700 mb-1">*Contacto inv&aacute;lido</span>}
                        {errors.contactoPrimario?.type === 'maxLength' && <span className="block text-sm font-thin text-red-700 mb-1">*Contacto inv&aacute;lido</span>}

                        <div>
                            <span className="block text-sm font-medium text-slate-700 mb-1">Contacto alternativo.:</span>
                            <input
                                {...register("contactoAlternativo", { maxLength:9, pattern: /^8[2-7][0-9]{7}/i})}
                                id='trabalhadorContactoAlternativo'
                                className="border-zinc-400 border rounded px-5 h-10 hover:border-sky-900 focus:border-sky-900 focus:outline-none focus:ring-1 focus:ring-sky-900 focus:ring-opacity-50"
                                type="text" 
                                placeholder="Contacto alternativo..."
                                onChange={(e) => setContactoAlternativo(e.target.value)}

                            />
                        </div> 
                        {errors.contactoAlternativo?.type === 'pattern' && <span className="block text-sm font-thin text-red-700 mb-1">*Contacto inv&aacute;lido</span>}
                        {errors.contactoAlternativo?.type === 'maxLength' && <span className="block text-sm font-thin text-red-700 mb-1">*Contacto inv&aacute;lido</span>}
                    
                    </div>

                    <span className="block text-sm font-medium text-slate-700 mb-0">Email.:</span>
                    <input
                        id='trabalhadorEmail'
                        {...register("email", {pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i})}
                        className="border-zinc-400 border rounded px-5 h-10 hover:border-sky-900 focus:border-sky-900 focus:outline-none focus:ring-1 focus:ring-sky-900 focus:ring-opacity-50 mt-0"
                        type="text"
                        placeholder="Email..."
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email?.type === 'pattern' && <span className="block text-sm font-thin text-red-700 mb-1">*Email inv&aacute;lido</span>}
                   
                        <div>
                            <span className="block text-sm font-medium text-slate-700 mb-1">Cargo.:</span>
                            <select className="border-zinc-400 border rounded px-5 h-10 hover:border-sky-900 focus:border-sky-900 focus:outline-none focus:ring-1 focus:ring-sky-900 focus:ring-opacity-50" 
                                {...register("trabalhadorCargo", { required: true})}
                                id="trabalhadorCargo"
                                name="trabalhadorCargo"
                                title="trabalhadorCargo"
                                onChange={(e) => setCargo(e.target.value)}

                                >
                                    
                                <option value="" defaultValue={''}>Seleccione um cargo</option>
                                <option value="Tecnico A">Tecnico A</option>
                                <option value="Tecnico B">Tecnico B</option>
                                <option value="Tecnico C">Tecnico C</option>
                                                        
                            </select>
                        </div>  
                        {errors.trabalhadorCargo?.type === 'required' && <span className="block text-sm font-thin text-red-700 mb-1">*Obrigat&oacute;rio</span>}    
              
 
                    <div className="columns-1">
                        <div> 
                            <span className="block text-sm font-medium text-slate-700 mb-1">Data de admiss&atilde;o.:</span>
                            <input
                                {...register("dataAdmissao", { required: true})}
                                id='trabalhadorDataAdmissao'
                                className="border-zinc-400 border rounded px-5 h-10 hover:border-sky-900 focus:border-sky-900 focus:outline-none focus:ring-1 focus:ring-sky-900 focus:ring-opacity-50"
                                type="date"
                                max={today}
                                onChange={(e) => setDataAdmissao(e.target.value)}
                            />
                        </div>
                        {errors.dataAdmissao?.type === 'required' && <span className="block text-sm font-thin text-red-700 mb-1">*Obrigat&oacute;rio</span>}

                    </div>
                                       
                    <div className="flex flex-col w-full">
                        <button 
                        type="submit"
                        className="mt-4 p-2 text-sm bg-sky-900 text-gray-50 flex rounded font-bold uppercase gap-2 justify-center hover:bg-sky-800 transition-colors"
                        >
                            <CheckCircle size={24} color="#FFF"/>
                            Registar
                        </button>
                    </div>

                    <div className="relative flex py-5 items-center">
                        <div className="flex-grow border-t border-gray-400"></div>
                            <span className="flex-shrink mx-4 text-gray-400">ou</span>
                        <div className="flex-grow border-t border-gray-400"></div>
                    </div>

                    <div className="gap-2 grid grid-cols-2">

                        <div className="flex flex-col w-full">
                            <button 
                            type="button" onClick={ handleCancel }
                            className="mt-1 p-2 text-sm bg-transparent flex rounded font-bold uppercase gap-2 justify-center text-sky-900  border border-sky-900 hover:border-transparent hover:border-sky-600 transition-colors"
                            >   
                                <XCircle size={24} color="#0c4a6e"/>
                                Cancelar
                            </button>
                        </div>

                        <div className="flex flex-col w-full">
                            <button 
                            type="button"
                            className="mt-1 p-2 text-sm bg-transparent flex rounded font-bold uppercase gap-2 justify-center text-sky-900  border border-sky-900 hover:border-transparent hover:border-sky-600 transition-colors"
                            >   
                                <Backspace size={24} color="#0c4a6e"/>
                                Sair
                            </button>
                        </div>
                    </div>


                </form>
            </div>

        </div>   
    );    
}