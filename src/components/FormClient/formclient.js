import React from "react";
import "./formclient.css";

function FormClient(){
    return(
        <>
        <div className="form">
            <form>
                <h1>Formulario</h1>

                <p><label for="name_form">Nome Completo</label></p>
            <input id="name" type="name" name="name_form" />

            <p><label for="ida_form">Data de Nascimento</label></p>
            <input id="name" type="date" name="ida_form"/>

            <p><label for="email_form">Email</label></p>
            <input id="name" type="email" name="email_form"  />

            <p><label for="tel_form">Telefone/Celular</label></p>
            <input id="name" type="tel" name="tel_form"/>

            <p><label for="tel">Contato de emergencia</label></p>
            <input id="name" type="tel" name="telcon_form" />

            <p><label for="end">Grau de parentesco</label></p>
             <form method="post">
            	<select name="paren">

            		<option value="pai">Pai/Mae</option>
            		<option value="irm">Irmao/Irma</option>
            		<option value="tia">Tio/Tia</option>
            		<option value="prim">Primo/Prima</option>
            		<option value="o">Outros</option>
            		


            		
            	</select>
            	

            </form>


            <p><label id="check" for="end_form">Endereco</label></p>
            <input id="name" type="name" name="end_form" />

            <p><label  for="cep_form ">CEP</label></p>
            <input id="name" type="text" name="cep_form" />

            <p><label for="bairro_form">Bairro</label></p>
            <input id="name" type="text" name="bairro_form" />

            <p><label for="tel_form">Cidade</label></p>
            <input id="name" type="tel" name="cid_form" />

            <p><label for="est_form">Estado</label></p>
            <input id="name" type="tel" name="est_form" />

            <p><label for="cidnas_form">Cidade de Nascimento</label></p>
            <input id="name" type="name" name="cidnas_form" />

            <p><label>Tipo sanguineo</label> </p>
            <form method="post">
            	<select name="sang">

            		<option value="a+">A+</option>
            		<option value="a-">A-</option>
            		<option value="b+">B+</option>
            		<option value="b-">B-</option>
            		<option value="ab+">AB+</option>
            		<option value="ab-">AB-</option>
            		<option value="o+">O+</option>
            		<option value="o-">O-</option>


            		
            	</select>
            	

            </form>

            <p></p>

            <fieldset>
			    <legend >Possui algum tipo de alergia? Se sim qual?:</legend>

			    <div>
			      <input type="checkbox" id="scales" name="sim"
			             />
			      <label for="sim">Sim</label>
			    </div>

			    <div>
			      <input type="checkbox" id="horns" name="nao" />
			      <label for="nao">Nao</label>
			      <p><label for="text">Descreva</label></p>
            		<input id="name" type="text" name="text" />

			    </div>
			</fieldset>

			<p></p>

      <fieldset>
			    <legend >Utiliza algum tipo de medicamento? Se sim qual?:</legend>

			    <div>
			      <input type="checkbox" id="scales" name="sim"
			             />
			      <label for="sim">Sim</label>
			    </div>

			    <div>
			      <input type="checkbox" id="horns" name="nao"/>
			      <label for="nao">Nao</label>
			      <p><label for="text">Descreva</label></p>
            		<input id="name" type="text" name="text"/>

			    </div>
			</fieldset>

			<p></p>

			<fieldset>
			    <legend >Fez alguma cirurgia? Se sim descreva:</legend>

			    <div>
			      <input type="checkbox" id="scales" name="sim"
			             />
			      <label for="sim">Sim</label>
			    </div>

			    <div>
			      <input type="checkbox" id="horns" name="nao"/>
			      <label for="nao">Nao</label>
			      <p><label for="text">Descreva</label></p>
            		<input id="name" type="text" name="text"/>

			    </div>
			</fieldset>

			<p></p>

			
			<fieldset>
			    <legend >Possui diabetes? Se sim, qual tipo?</legend>

			    <div>
			      <input type="checkbox" id="scales" name="sim"
			             />
			      <label for="sim">Sim</label>
			    </div>

			    <div>
			      <input type="checkbox" id="horns" name="nao"/>
			      <label for="nao">Nao</label>
			      <p></p>
			      
			      <form method="post">
            	<select name="dia">

            		<option value="1">Diabetes tipo 1</option>
            		<option value="2">Diabetes tipo 2</option>
            		


            		
            	</select>
            	

            </form>

			    </div>
			</fieldset>

			<p></p>


			<fieldset>
			    <legend >É portador de IST(Infeccoes sexualmente transmissiveis?:</legend>

			    <div>
			      <input type="checkbox" id="scales" name="sim"
			             />
			      <label for="sim">Sim</label>
			    </div>

			    <div>
			      <input type="checkbox" id="horns" name="nao"/>
			      <label for="nao">Nao</label>
			      <p><label for="text">Descreva</label></p>
            		<input id="name" type="text" name="text"/>

			    </div>
			</fieldset>

			<p></p>

			<fieldset>
			    <legend >Historico familiar de doencas? Se sim quaL?:</legend>

			    <div>
			      <input type="checkbox" id="scales" name="sim"
			             />
			      <label for="sim">Sim</label>
			    </div>

			    <div>
			      <input type="checkbox" id="horns" name="nao"/>
			      <label for="nao">Nao</label>
			      <p><label for="text">Descreva</label></p>
            		<input id="name" type="text" name="text"/>

			    </div>

                </fieldset>


            </form>
        </div>
        </>
    )
}

export default FormClient;