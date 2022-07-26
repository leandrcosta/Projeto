import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form className="forms">
        <label htmlFor="name">
          Nome:
          <input id="name" type="text" data-testid="name-input" />
        </label>
        <label htmlFor="description">
          Descrição:
          <textarea id="description" data-testid="description-input" />
        </label>
        <label htmlFor="attribute-1">
          Attr01
          <input id="attribute-1" type="number" data-testid="attr1-input" />
        </label>
        <label htmlFor="attribute-2">
          Attr02
          <input id="attribute-2" type="number" data-testid="attr2-input" />
        </label>
        <label htmlFor="attribute-3">
          Attr03
          <input id="attribute-3" type="number" data-testid="attr3-input" />
        </label>
        <label htmlFor="image">
          Imagem:
          <input id="image" type="text" data-testid="image-input" />
        </label>
        <label htmlFor="rarity">
          Raridade:
          <select id="rarity" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="super-trump">
          Super trunfo
          <input id="super-trump" type="checkbox" data-testid="trunfo-input" />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}
export default Form;
