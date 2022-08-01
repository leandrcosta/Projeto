import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      /* hasTrunfo, */
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form className="formulare">
        <label htmlFor="name">
          Nome:
          <input
            id="name"
            type="text"
            onChange={ onInputChange }
            value={ cardName }
            data-testid="name-input"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <textarea
            id="description"
            onChange={ onInputChange }
            value={ cardDescription }
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attribute-1">
          Attr01
          <input
            id="attribute-1"
            type="number"
            onChange={ onInputChange }
            value={ cardAttr1 }
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attribute-2">
          Attr02
          <input
            id="attribute-2"
            type="number"
            onChange={ onInputChange }
            value={ cardAttr2 }
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attribute-3">
          Attr03
          <input
            id="attribute-3"
            type="number"
            onChange={ onInputChange }
            value={ cardAttr3 }
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="image">
          Imagem:
          <input
            id="image"
            type="text"
            onChange={ onInputChange }
            value={ cardImage }
            data-testid="image-input"
          />
        </label>
        <label htmlFor="rarity">
          Raridade:
          <select
            id="rarity"
            onChange={ onInputChange }
            value={ cardRare }
            data-testid="rare-input"
          >
            <option name="normal">normal</option>
            <option name="raro">raro</option>
            <option name="muito-raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="super-trump">
          Super trunfo
          <input
            id="super-trump"
            type="checkbox"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            data-testid="trunfo-input"
          />
        </label>
        <button
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}
// Checagem de tipos:
Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  /* hasTrunfo: PropTypes.bool.isRequired, */
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
