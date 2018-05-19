import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Usuarios extends Component {

    state = {
        cantidad: 0,
        usuarios: [

            {nombre: "Juan", apellido: "Perez", email: "email@email.com", direccion: "callao 1234", dni: "1233255", telefono: "1342345"},
            {nombre: "Pedro", apellido: "Gimenez", email: "email@email.com", direccion: "callao 1234", dni: "1233255", telefono: "1342345"},
        ]
    }

    componentDidMount() {

        let quantity = 10
        this.setState({
            cantidad: quantity
        })
    }

    getUsuarios () {

        return this.state.usuarios.map((usuario, index) => {

            return(
                <ul key={index}>
                    <li>{usuario.nombre}</li>
                    <li>{usuario.apellido}</li>
                    <li>{usuario.email}</li>
                    <li>{usuario.direccion}</li>
                    <li>{usuario.dni}</li>
                    <li>{usuario.telefono}</li>
                </ul>
            )
        })
    }

    cambiarValorCantidad (event) {

        
    }
    render () {

        return (

            <div>
                {this.props.title} <br/>
                {this.props.subtitle} <br/>
                {this.state.cantidad} <br/>
                {this.getUsuarios()}
                <input onChange={this.cambiarValorCantidad} />
            </div>

        );
    }


}

Usuarios.defaultProps = {
    title: 'Titulo Default',
    subtitle: 'SubTitulo Default'
};

Usuarios.propTypes = {
    title: PropTypes.string
};

export default Usuarios