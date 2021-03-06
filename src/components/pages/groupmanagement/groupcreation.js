import React, { Component } from 'react';

class Groupcreation extends React.Component {
    render() {
        return (
			<div class="col-xl-6">
				<h3>Création d'un groupe</h3>
				<br></br>
					<div class="row">
						<input type="text" class="form-control col-10" placeholder="Nom du groupe"/>
						<button class="btn btn-primary col-2"> Créer </button>
					</div>
					<br></br>
					<div class="row">
						<input type="text" class="form-control col-10" placeholder="Rechercher un élève"/>
						<button class="btn btn-primary col-2"> Rechercher </button>
					</div>
				<br></br>
				<div class="row">
					<h5>Liste des membres du groupe</h5>
					<table class="table">
					  <thead>
					    <tr>
					      <th scope="col">Nom</th>
					      <th scope="col">Prénom</th>
					      <th scope="col">Mail</th>
					    </tr>
					  </thead>
					  <tbody>
					    <tr>
					      <th>Nom 1</th>
					      <td>Prénom 1</td>
					      <td>pnom@isep.fr</td>
					    </tr>
					    <tr>
					      <th>Nom 2</th>
					      <td>Prénom 2</td>
					      <td>pnom@isep.fr</td>
					    </tr>
					    <tr>
					      <th>Nom 2</th>
					      <td>Prénom 2</td>
					      <td>pnom@isep.fr</td>
					    </tr>
					  </tbody>
					</table>
				</div>
			</div>
);}
}
export default Groupcreation;