import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    /* this.onInputChange = this.onInputChange.bind(this); */ // usei callback e não usei o bind

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  onInputChange = ({ target }) => { // usando callback pra não usar o bind
    const { name, checked } = target;
    console.log(name);
    const value = target.type === 'checkbox' ? checked : target.value;
    this.setState({
      [name]: value,
    }, this.validationField);
  }

  validationField = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const sumMaxx = 210;
    const valueMaxx = 90;
    // Validando se as strings estão 'vazias'
    const attributeStrings = cardName.length > 0 && cardDescription.length > 0
                            && cardImage.length > 0 && cardRare.length > 0;

    // validando que o valor tem que ser > 0 e < 90
    const attr01 = Number(cardAttr1) >= 0 && Number(cardAttr1) <= valueMaxx;
    const att02 = Number(cardAttr2) >= 0 && Number(cardAttr2) <= valueMaxx;
    const att03 = Number(cardAttr3) >= 0 && Number(cardAttr3) <= valueMaxx;
    const verifyAttibute = attr01 && att02 && att03;

    // validando se a soma dos valores é menor ou igual ao valor maximo do somatorio
    const sumAttributes = Number(cardAttr1)
                          + Number(cardAttr2)
                          + Number(cardAttr3) <= sumMaxx;
    /* const checkVerify = attributeStrings && verifyAttibute && sumAttributes; */

    if (attributeStrings && verifyAttibute && sumAttributes) {
      this.setState({ isSaveButtonDisabled: true });
    } else this.setState({ isSaveButtonDisabled: false });
  };

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
      isSaveButtonDisabled,
    } = this.state;

    return (
      <section className="form-card">
        <h1>Tryunfo</h1>
        <section className="forms">
          <div>
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              onInputChange={ this.onInputChange }
              isSaveButtonDisabled={ isSaveButtonDisabled }
            />
          </div>
        </section>
        <section className="card">
          <div>
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </div>
        </section>
      </section>
    );
  }
}

export default App;
